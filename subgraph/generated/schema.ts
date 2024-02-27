// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class MarketOrder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MarketOrder entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MarketOrder must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("MarketOrder", id.toString(), this);
    }
  }

  static loadInBlock(id: string): MarketOrder | null {
    return changetype<MarketOrder | null>(
      store.get_in_block("MarketOrder", id),
    );
  }

  static load(id: string): MarketOrder | null {
    return changetype<MarketOrder | null>(store.get("MarketOrder", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get ticker(): string {
    let value = this.get("ticker");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set ticker(value: string) {
    this.set("ticker", Value.fromString(value));
  }

  get ticker_name(): string {
    let value = this.get("ticker_name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set ticker_name(value: string) {
    this.set("ticker_name", Value.fromString(value));
  }

  get inscription(): Bytes {
    let value = this.get("inscription");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set inscription(value: Bytes) {
    this.set("inscription", Value.fromBytes(value));
  }

  get active(): string {
    let value = this.get("active");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set active(value: string) {
    this.set("active", Value.fromString(value));
  }

  get buyer(): Bytes | null {
    let value = this.get("buyer");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set buyer(value: Bytes | null) {
    if (!value) {
      this.unset("buyer");
    } else {
      this.set("buyer", Value.fromBytes(<Bytes>value));
    }
  }

  get list(): BigInt {
    let value = this.get("list");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set list(value: BigInt) {
    this.set("list", Value.fromBigInt(value));
  }

  get remove(): BigInt | null {
    let value = this.get("remove");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set remove(value: BigInt | null) {
    if (!value) {
      this.unset("remove");
    } else {
      this.set("remove", Value.fromBigInt(<BigInt>value));
    }
  }

  get execute(): BigInt | null {
    let value = this.get("execute");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set execute(value: BigInt | null) {
    if (!value) {
      this.unset("execute");
    } else {
      this.set("execute", Value.fromBigInt(<BigInt>value));
    }
  }

  get created(): BigInt {
    let value = this.get("created");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set created(value: BigInt) {
    this.set("created", Value.fromBigInt(value));
  }

  get executeTime(): BigInt | null {
    let value = this.get("executeTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set executeTime(value: BigInt | null) {
    if (!value) {
      this.unset("executeTime");
    } else {
      this.set("executeTime", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class Nuscription extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Nuscription entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Nuscription must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Nuscription", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Nuscription | null {
    return changetype<Nuscription | null>(
      store.get_in_block("Nuscription", id),
    );
  }

  static load(id: string): Nuscription | null {
    return changetype<Nuscription | null>(store.get("Nuscription", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get inscription(): Bytes {
    let value = this.get("inscription");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set inscription(value: Bytes) {
    this.set("inscription", Value.fromBytes(value));
  }

  get online_count(): BigInt {
    let value = this.get("online_count");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set online_count(value: BigInt) {
    this.set("online_count", Value.fromBigInt(value));
  }

  get success_count(): BigInt {
    let value = this.get("success_count");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set success_count(value: BigInt) {
    this.set("success_count", Value.fromBigInt(value));
  }

  get max_price(): BigInt {
    let value = this.get("max_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set max_price(value: BigInt) {
    this.set("max_price", Value.fromBigInt(value));
  }

  get min_price(): BigInt {
    let value = this.get("min_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set min_price(value: BigInt) {
    this.set("min_price", Value.fromBigInt(value));
  }

  get avg_price(): BigInt {
    let value = this.get("avg_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set avg_price(value: BigInt) {
    this.set("avg_price", Value.fromBigInt(value));
  }

  get total_amount(): BigInt {
    let value = this.get("total_amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set total_amount(value: BigInt) {
    this.set("total_amount", Value.fromBigInt(value));
  }

  get shelf_max_price(): BigInt {
    let value = this.get("shelf_max_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set shelf_max_price(value: BigInt) {
    this.set("shelf_max_price", Value.fromBigInt(value));
  }

  get shelf_min_price(): BigInt {
    let value = this.get("shelf_min_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set shelf_min_price(value: BigInt) {
    this.set("shelf_min_price", Value.fromBigInt(value));
  }

  get shelf_avg_price(): BigInt {
    let value = this.get("shelf_avg_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set shelf_avg_price(value: BigInt) {
    this.set("shelf_avg_price", Value.fromBigInt(value));
  }

  get shelf_total_amount(): BigInt {
    let value = this.get("shelf_total_amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set shelf_total_amount(value: BigInt) {
    this.set("shelf_total_amount", Value.fromBigInt(value));
  }
}

export class Nuscription24 extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Nuscription24 entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Nuscription24 must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Nuscription24", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Nuscription24 | null {
    return changetype<Nuscription24 | null>(
      store.get_in_block("Nuscription24", id),
    );
  }

  static load(id: string): Nuscription24 | null {
    return changetype<Nuscription24 | null>(store.get("Nuscription24", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get inscription(): Bytes {
    let value = this.get("inscription");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set inscription(value: Bytes) {
    this.set("inscription", Value.fromBytes(value));
  }

  get online_count(): BigInt {
    let value = this.get("online_count");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set online_count(value: BigInt) {
    this.set("online_count", Value.fromBigInt(value));
  }

  get success_count(): BigInt {
    let value = this.get("success_count");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set success_count(value: BigInt) {
    this.set("success_count", Value.fromBigInt(value));
  }

  get max_price(): BigInt {
    let value = this.get("max_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set max_price(value: BigInt) {
    this.set("max_price", Value.fromBigInt(value));
  }

  get min_price(): BigInt {
    let value = this.get("min_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set min_price(value: BigInt) {
    this.set("min_price", Value.fromBigInt(value));
  }

  get avg_price(): BigInt {
    let value = this.get("avg_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set avg_price(value: BigInt) {
    this.set("avg_price", Value.fromBigInt(value));
  }

  get total_amount(): BigInt {
    let value = this.get("total_amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set total_amount(value: BigInt) {
    this.set("total_amount", Value.fromBigInt(value));
  }

  get prices(): Array<BigInt> {
    let value = this.get("prices");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set prices(value: Array<BigInt>) {
    this.set("prices", Value.fromBigIntArray(value));
  }

  get record_times(): Array<BigInt> {
    let value = this.get("record_times");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set record_times(value: Array<BigInt>) {
    this.set("record_times", Value.fromBigIntArray(value));
  }
}

export class UserConsumeSum extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserConsumeSum entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserConsumeSum must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("UserConsumeSum", id.toString(), this);
    }
  }

  static loadInBlock(id: string): UserConsumeSum | null {
    return changetype<UserConsumeSum | null>(
      store.get_in_block("UserConsumeSum", id),
    );
  }

  static load(id: string): UserConsumeSum | null {
    return changetype<UserConsumeSum | null>(store.get("UserConsumeSum", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get income(): BigInt {
    let value = this.get("income");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set income(value: BigInt) {
    this.set("income", Value.fromBigInt(value));
  }

  get expense(): BigInt {
    let value = this.get("expense");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set expense(value: BigInt) {
    this.set("expense", Value.fromBigInt(value));
  }
}

export class MarketSummary extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MarketSummary entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MarketSummary must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("MarketSummary", id.toString(), this);
    }
  }

  static loadInBlock(id: string): MarketSummary | null {
    return changetype<MarketSummary | null>(
      store.get_in_block("MarketSummary", id),
    );
  }

  static load(id: string): MarketSummary | null {
    return changetype<MarketSummary | null>(store.get("MarketSummary", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get shelf_totalAmount(): BigInt {
    let value = this.get("shelf_totalAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set shelf_totalAmount(value: BigInt) {
    this.set("shelf_totalAmount", Value.fromBigInt(value));
  }

  get shelf_avgPrice(): BigInt {
    let value = this.get("shelf_avgPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set shelf_avgPrice(value: BigInt) {
    this.set("shelf_avgPrice", Value.fromBigInt(value));
  }

  get shelf_count(): BigInt {
    let value = this.get("shelf_count");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set shelf_count(value: BigInt) {
    this.set("shelf_count", Value.fromBigInt(value));
  }

  get sale_totalAmount(): BigInt {
    let value = this.get("sale_totalAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sale_totalAmount(value: BigInt) {
    this.set("sale_totalAmount", Value.fromBigInt(value));
  }

  get sale_count(): BigInt {
    let value = this.get("sale_count");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sale_count(value: BigInt) {
    this.set("sale_count", Value.fromBigInt(value));
  }

  get total_orders(): BigInt {
    let value = this.get("total_orders");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set total_orders(value: BigInt) {
    this.set("total_orders", Value.fromBigInt(value));
  }

  get sale_avgPrice(): BigInt {
    let value = this.get("sale_avgPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sale_avgPrice(value: BigInt) {
    this.set("sale_avgPrice", Value.fromBigInt(value));
  }
}
