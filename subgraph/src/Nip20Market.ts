import { Address, BigInt,Bytes,log } from "@graphprotocol/graph-ts";
// import {Date}  from "assemblyscript/std/assembly/date";
import {
  OrderCreated,
  OrderRemoved,
  OrderExecuted
} from "../generated/Nip20Market/Nip20Market";
import { MarketOrder,UserConsumeSum,MarketSummary ,Nuscription,Nuscription24} from "../generated/schema";
import {NipMarketManager} from "../generated/GravatarRegistry/NipMarketManager"
const multi_factor = BigInt.fromI32(3);

export function handleNewOrder(event: OrderCreated): void {
  let order = new MarketOrder(event.params.orderId.toHex());
  //uint256 indexed orderId, address indexed seller, uint256 price, bytes32 ticker, bytes32 txhash
  order.owner = event.params.seller;
  order.price = event.params.price;
  order.ticker = event.params.ticker.toHexString();
  order.ticker_name = event.params.ticker.toString();
  order.inscription = event.params.txhash;
  order.active = "true";
  order.list = event.block.number;
  order.created = event.block.timestamp;
  order.save();

  let nuscription = Nuscription.load(order.ticker_name)
  if(nuscription){
    nuscription.inscription = order.inscription;
    nuscription.online_count = nuscription.online_count.plus( BigInt.fromI32(1));
  }
  else{
    nuscription = new Nuscription(order.ticker_name);
    nuscription.inscription = order.inscription;
    nuscription.success_count = BigInt.fromI32(0);
    nuscription.online_count = BigInt.fromI32(1);
    nuscription.total_amount = BigInt.fromI32(0);
    nuscription.max_price = BigInt.fromI32(0);
    nuscription.min_price = BigInt.fromI32(0);
    nuscription.avg_price = BigInt.fromI32(0);

  }
  nuscription.save();
  calcTotalTicker(true);
  countNuscription24(order.ticker,order.inscription,order.price,event.block.timestamp,true);

}

export function handleRemoveOrder(event: OrderRemoved): void {
  let order =  MarketOrder.load(event.params.orderId.toHex());
  //uint256 indexed orderId, address indexed seller, uint256 price, bytes32 ticker, bytes32 txhash
  if (!order) {
    order = new MarketOrder(event.params.orderId.toHex());
  }
  order.active = "false";
  order.remove = event.block.number;
  order.save();

  let nuscription = Nuscription.load(order.ticker_name)
  if(nuscription){
    nuscription.online_count = nuscription.online_count.minus( BigInt.fromI32(1));
    nuscription.save()
  }
  calcTotalTicker(false);

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
  order.executeTime = event.block.timestamp;
  order.save();
  let amount = order.price;
  // let tokenAmount = 
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
    marketSum.sale_totalAmount = marketSum.sale_totalAmount.plus(amount);//.times(multi_factor);
    // marketSum.totalAmount = marketSum.totalAmount.times(multi_factor);
    marketSum.sale_count = marketSum.sale_count.plus(BigInt.fromI32(1));
    marketSum.sale_avgPrice = marketSum.sale_totalAmount.div(marketSum.sale_count);
  }else{
    marketSum = new MarketSummary("nip20");
    marketSum.sale_totalAmount =(amount);
    marketSum.sale_count = (BigInt.fromI32(1));
    marketSum.sale_avgPrice = marketSum.sale_totalAmount.div(marketSum.sale_count);
  }
  marketSum.save();

  //ticker
  calcMarketSummary(order,false);
  
  countNuscription24(order.ticker,order.inscription,order.price,event.block.timestamp,false);

  // log.warning("{},seller: {},{},{};buyer：{},{},{}", [amount.toString(),seller,sellerSum.income.toString(),sellerSum.expense.toString(),buyer,buyerSum.income.toString(),buyerSum.expense.toString()])

}


function calcMarketSummary(order:MarketOrder,isCreateOrder:boolean):void{
  let nuscription = Nuscription.load(order.ticker_name)
  if(nuscription){

    nuscription.online_count = nuscription.online_count.minus( BigInt.fromI32(1));
    nuscription.success_count = nuscription.success_count.plus( BigInt.fromI32(1));
    nuscription.total_amount = nuscription.total_amount.plus(order.price);
    
    nuscription.avg_price = nuscription.total_amount.div(nuscription.success_count);
    if(order.price>nuscription.max_price){
      nuscription.max_price = order.price;
    }
    if(order.price < nuscription.min_price){
      nuscription.min_price = order.price;
    }
  }
  else{
    nuscription = new Nuscription(order.ticker_name);
    nuscription.inscription = order.inscription;
    nuscription.success_count = BigInt.fromI32(0);
    nuscription.online_count = BigInt.fromI32(1);
    nuscription.total_amount = order.price;
    nuscription.max_price = order.price;
    nuscription.min_price = order.price;
  }
  nuscription.save()
}

function calcTotalTicker(isAdd:boolean):void{

  let marketSum = MarketSummary.load("nip20");
  if(marketSum ){
    let num = isAdd ? 1 : -1;
    marketSum.total_orders = marketSum.total_orders.plus(BigInt.fromI32(num));

  }else{
    marketSum = new MarketSummary("nip20");
    let init_num = BigInt.fromI32(0);
    marketSum.total_orders = BigInt.fromI32(1);
    marketSum.sale_totalAmount = init_num;
    marketSum.sale_count = init_num;
    marketSum.sale_avgPrice = init_num;
    marketSum.shelf_orderCount = init_num;
    marketSum.shelf_totalAmount = init_num;
    marketSum.shelf_avgPrice = init_num;
  }
  marketSum.save();

}

function countNuscription24(ticker:string,inscription:Bytes,price:BigInt,time:BigInt,isCreateOrder:bool):void {
  let nuscription = Nuscription24.load(ticker);
  if(nuscription){
    // let date = new Date();
    // let current_time = Date.now()/1000;
    let manager_contract =   NipMarketManager.bind(Address.fromString("0xa3ef6Ef0B32cDA629CfAcd7359563F1b5d2eCfC8"))
    let current_time = manager_contract.try_getBlockTime();
    let version = manager_contract.version();
    if(current_time.reverted){
      log.warning("blocktime:{},{}",['reverted',version]);

      return;
    }
    log.warning("blocktime:{}",[current_time.value.toString()]);
    // let begin_time = nuscription.record_times[0];
    let internal_time = 60*60*24;
    internal_time = 60*5;
    if((current_time.value.toI32() - time.toI32())>internal_time){
      let indicesToRemove: i32[] = [];
      for (let i = 0; i < nuscription.record_times.length; i++) {
          let tmp_time = nuscription.record_times[i];
          if (current_time.value.toI32() - tmp_time.toI32() > internal_time) {
              indicesToRemove.push(i);
          }
      }
      
      // Remove elements from nuscription.prices and nuscription.record_times
      for (let i = indicesToRemove.length - 1; i >= 0; i--) {
          let index = indicesToRemove[i];
          nuscription.prices.splice(index, 1);
          nuscription.record_times.splice(index, 1);
      }
    }else{
      if(isCreateOrder){
        nuscription.online_count = nuscription.online_count.plus( BigInt.fromI32(1));
      }else{
        nuscription.success_count = nuscription.success_count.plus( BigInt.fromI32(1));
        nuscription.prices.push(price);
        nuscription.record_times.push(time);
        let price_obj = calculateStatistics(nuscription.prices);
        nuscription.avg_price = price_obj.average;
        nuscription.max_price = price_obj.max;
        nuscription.min_price = price_obj.min;
        nuscription.total_amount = price_obj.sum.times(multi_factor);
      }
    }
    nuscription.save()
  }
  else{
    if(isCreateOrder){
      nuscription = new Nuscription24(ticker);
      nuscription.inscription = inscription;
      nuscription.success_count = BigInt.fromI32(0);
      nuscription.online_count = BigInt.fromI32(1);
      nuscription.total_amount = BigInt.fromI32(0);
      nuscription.max_price = BigInt.fromI32(0);
      nuscription.min_price = BigInt.fromI32(0);
      nuscription.avg_price = BigInt.zero();
      nuscription.prices = [];
      nuscription.record_times = [];
      nuscription.save()
    }
  }
}

class Statistics24{
  sum:BigInt;
  average:BigInt;
  max:BigInt;
  min:BigInt;
  constructor(){
    this.sum = BigInt.zero();
     this.average = BigInt.zero();
     this.max =  BigInt.zero();
    this.min = BigInt.zero();
  }
}

function calculateStatistics(arrs: BigInt[]): Statistics24{
  // let numbers:number[] = arrs.map<number>((i)=>i.toI32());
  const sum = arrs.reduce((acc, curr) => acc + curr.toI32() , 0);
  const average = sum / arrs.length;
  let i_max=0;
  let i_min =0;
  for (let i = 0; i < arrs.length; i++) {
    let v = arrs[i];
    i_max =Math.max(i_max as i32,v.toI32() ) as i32;
    i_min = Math.min(i_min as i32,v.toI32()) as i32;
  }

  let result = new Statistics24();
  result.sum = BigInt.fromI32(sum);
  result.average = BigInt.fromI32(average);
  result.max = BigInt.fromI32(i_max);
  result.min = BigInt.fromI32(i_min);
  return result;
}