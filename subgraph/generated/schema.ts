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

  get ticker(): Bytes {
    let value = this.get("ticker");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set ticker(value: Bytes) {
    this.set("ticker", Value.fromBytes(value));
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
}
