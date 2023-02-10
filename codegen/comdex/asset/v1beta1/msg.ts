import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgAddAssetRequest {
  from: string;
  name: string;
  denom: string;
  decimals: Long;
}
export interface MsgAddAssetRequestSDKType {
  from: string;
  name: string;
  denom: string;
  decimals: Long;
}
export interface MsgAddAssetResponse {}
export interface MsgAddAssetResponseSDKType {}
export interface MsgUpdateAssetRequest {
  from: string;
  id: Long;
  name: string;
  denom: string;
  decimals: Long;
}
export interface MsgUpdateAssetRequestSDKType {
  from: string;
  id: Long;
  name: string;
  denom: string;
  decimals: Long;
}
export interface MsgUpdateAssetResponse {}
export interface MsgUpdateAssetResponseSDKType {}
export interface MsgAddPairRequest {
  from: string;
  assetIn: Long;
  assetOut: Long;
  liquidationRatio: string;
}
export interface MsgAddPairRequestSDKType {
  from: string;
  asset_in: Long;
  asset_out: Long;
  liquidation_ratio: string;
}
export interface MsgAddPairResponse {}
export interface MsgAddPairResponseSDKType {}
export interface MsgUpdatePairRequest {
  from: string;
  id: Long;
  liquidationRatio: string;
}
export interface MsgUpdatePairRequestSDKType {
  from: string;
  id: Long;
  liquidation_ratio: string;
}
export interface MsgUpdatePairResponse {}
export interface MsgUpdatePairResponseSDKType {}

function createBaseMsgAddAssetRequest(): MsgAddAssetRequest {
  return {
    from: "",
    name: "",
    denom: "",
    decimals: Long.ZERO
  };
}

export const MsgAddAssetRequest = {
  encode(message: MsgAddAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (!message.decimals.isZero()) {
      writer.uint32(32).int64(message.decimals);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAssetRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.decimals = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddAssetRequest>): MsgAddAssetRequest {
    const message = createBaseMsgAddAssetRequest();
    message.from = object.from ?? "";
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
    return message;
  }

};

function createBaseMsgAddAssetResponse(): MsgAddAssetResponse {
  return {};
}

export const MsgAddAssetResponse = {
  encode(_: MsgAddAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAssetResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgAddAssetResponse>): MsgAddAssetResponse {
    const message = createBaseMsgAddAssetResponse();
    return message;
  }

};

function createBaseMsgUpdateAssetRequest(): MsgUpdateAssetRequest {
  return {
    from: "",
    id: Long.UZERO,
    name: "",
    denom: "",
    decimals: Long.ZERO
  };
}

export const MsgUpdateAssetRequest = {
  encode(message: MsgUpdateAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }

    if (!message.decimals.isZero()) {
      writer.uint32(40).int64(message.decimals);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAssetRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.denom = reader.string();
          break;

        case 5:
          message.decimals = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateAssetRequest>): MsgUpdateAssetRequest {
    const message = createBaseMsgUpdateAssetRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
    return message;
  }

};

function createBaseMsgUpdateAssetResponse(): MsgUpdateAssetResponse {
  return {};
}

export const MsgUpdateAssetResponse = {
  encode(_: MsgUpdateAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAssetResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse {
    const message = createBaseMsgUpdateAssetResponse();
    return message;
  }

};

function createBaseMsgAddPairRequest(): MsgAddPairRequest {
  return {
    from: "",
    assetIn: Long.UZERO,
    assetOut: Long.UZERO,
    liquidationRatio: ""
  };
}

export const MsgAddPairRequest = {
  encode(message: MsgAddPairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.assetIn.isZero()) {
      writer.uint32(16).uint64(message.assetIn);
    }

    if (!message.assetOut.isZero()) {
      writer.uint32(24).uint64(message.assetOut);
    }

    if (message.liquidationRatio !== "") {
      writer.uint32(34).string(message.liquidationRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPairRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.assetIn = (reader.uint64() as Long);
          break;

        case 3:
          message.assetOut = (reader.uint64() as Long);
          break;

        case 4:
          message.liquidationRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddPairRequest>): MsgAddPairRequest {
    const message = createBaseMsgAddPairRequest();
    message.from = object.from ?? "";
    message.assetIn = object.assetIn !== undefined && object.assetIn !== null ? Long.fromValue(object.assetIn) : Long.UZERO;
    message.assetOut = object.assetOut !== undefined && object.assetOut !== null ? Long.fromValue(object.assetOut) : Long.UZERO;
    message.liquidationRatio = object.liquidationRatio ?? "";
    return message;
  }

};

function createBaseMsgAddPairResponse(): MsgAddPairResponse {
  return {};
}

export const MsgAddPairResponse = {
  encode(_: MsgAddPairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPairResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgAddPairResponse>): MsgAddPairResponse {
    const message = createBaseMsgAddPairResponse();
    return message;
  }

};

function createBaseMsgUpdatePairRequest(): MsgUpdatePairRequest {
  return {
    from: "",
    id: Long.UZERO,
    liquidationRatio: ""
  };
}

export const MsgUpdatePairRequest = {
  encode(message: MsgUpdatePairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.liquidationRatio !== "") {
      writer.uint32(26).string(message.liquidationRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePairRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.liquidationRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdatePairRequest>): MsgUpdatePairRequest {
    const message = createBaseMsgUpdatePairRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.liquidationRatio = object.liquidationRatio ?? "";
    return message;
  }

};

function createBaseMsgUpdatePairResponse(): MsgUpdatePairResponse {
  return {};
}

export const MsgUpdatePairResponse = {
  encode(_: MsgUpdatePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePairResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUpdatePairResponse>): MsgUpdatePairResponse {
    const message = createBaseMsgUpdatePairResponse();
    return message;
  }

};