import { BigInt } from "@graphprotocol/graph-ts";
import {
  OrderCreated,
  OrderRemoved,
  OrderExecuted
} from "../generated/Nip20Market/Nip20Market";
import { MarketOrder,UserConsumeSum } from "../generated/schema";

export function handleNewOrder(event: OrderCreated): void {
  let order = new MarketOrder(event.params.orderId.toHex());
  //uint256 indexed orderId, address indexed seller, uint256 price, bytes32 ticker, bytes32 txhash
  order.owner = event.params.seller;
  order.price = event.params.price;
  order.ticker = event.params.ticker;
  order.inscription = event.params.txhash;
  order.active = "true";
  order.buyer = event.params.seller;
  order.save();
}

export function handleRemoveOrder(event: OrderRemoved): void {
  let order = new MarketOrder(event.params.orderId.toHex());
  //uint256 indexed orderId, address indexed seller, uint256 price, bytes32 ticker, bytes32 txhash
  if (!order) {
    order = new MarketOrder(event.params.orderId.toHex());
  }
  order.active = "false";
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
  
  if(seller){
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
  }
}
