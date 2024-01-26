import { BigInt,log } from "@graphprotocol/graph-ts";
import {
  OrderCreated,
  OrderRemoved,
  OrderExecuted
} from "../generated/Nip20Market/Nip20Market";
import { MarketOrder,UserConsumeSum,MarketSummary } from "../generated/schema";

export function handleNewOrder(event: OrderCreated): void {
  let order = new MarketOrder(event.params.orderId.toHex());
  //uint256 indexed orderId, address indexed seller, uint256 price, bytes32 ticker, bytes32 txhash
  order.owner = event.params.seller;
  order.price = event.params.price;
  order.ticker = event.params.ticker;
  order.inscription = event.params.txhash;
  order.active = "true";
  order.list = event.block.number;
  order.created = event.block.timestamp;
  order.save();
}

export function handleRemoveOrder(event: OrderRemoved): void {
  let order = new MarketOrder(event.params.orderId.toHex());
  //uint256 indexed orderId, address indexed seller, uint256 price, bytes32 ticker, bytes32 txhash
  if (!order) {
    order = new MarketOrder(event.params.orderId.toHex());
  }
  order.active = "false";
  order.remove = event.block.number;
  order.save();
}


export function handleExecuteOrder(event: OrderExecuted): void {
  let order =  MarketOrder.load(event.params.orderId.toHex());
  //uint256 indexed orderId, address indexed seller, uint256 price, bytes32 ticker, bytes32 txhash
  if (!order) {
    order = new MarketOrder(event.params.orderId.toHex());
  }
  let buyer = event.params.buyer.toHex();
  let seller = order.owner.toHex();
  order.buyer = event.params.buyer;
  order.active = "false";
  order.execute = event.block.number;
  order.save();
  let amount = order.price;
  let buyerSum = UserConsumeSum.load(buyer);
  if(buyerSum){
    buyerSum.expense = buyerSum.expense.plus(amount);
    buyerSum.save();
  }else{
    buyerSum = new UserConsumeSum(buyer)
    buyerSum.expense = (amount);
    buyerSum.income = BigInt.fromI32(0);
    buyerSum.save();
  }
  
  let sellerSum = UserConsumeSum.load(seller);
  if(sellerSum){
    sellerSum.income = sellerSum.income.plus(amount);
    sellerSum.save();
  }else{
    sellerSum = new UserConsumeSum(seller)
    sellerSum.income = amount;
    sellerSum.expense = BigInt.fromI32(0);
    sellerSum.save();
  }

  let marketSum = MarketSummary.load("nip20");
  if(marketSum){
    marketSum.totalAmount = marketSum.totalAmount.plus(amount);
    marketSum.transCount = marketSum.transCount.plus(BigInt.fromI32(1));
    marketSum.avgPrice = marketSum.totalAmount.div(marketSum.transCount);
  }else{
    marketSum = new MarketSummary("nip20");
    marketSum.totalAmount =(amount);
    marketSum.transCount = (BigInt.fromI32(1));
    marketSum.avgPrice = marketSum.totalAmount.div(marketSum.transCount);
  }
  marketSum.save();
  
  log.warning("{},seller: {},{},{};buyer：{},{},{}", [amount.toString(),seller,sellerSum.income.toString(),sellerSum.expense.toString(),buyer,buyerSum.income.toString(),buyerSum.expense.toString()])

}
