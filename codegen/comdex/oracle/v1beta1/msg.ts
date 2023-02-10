import { Height, HeightSDKType } from "../../../ibc/core/client/v1/client";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgAddMarketRequest {
  from: string;
  symbol: string;
  scriptId: Long;
  id: Long;
}
export interface MsgAddMarketRequestSDKType {
  from: string;
  symbol: string;
  script_id: Long;
  id: Long;
}
export interface MsgAddMarketResponse {}
export interface MsgAddMarketResponseSDKType {}
export interface MsgUpdateMarketRequest {
  from: string;
  symbol: string;
  scriptId: Long;
}
export interface MsgUpdateMarketRequestSDKType {
  from: string;
  symbol: string;
  script_id: Long;
}
export interface MsgUpdateMarketResponse {}
export interface MsgUpdateMarketResponseSDKType {}
export interface MsgRemoveMarketForAssetRequest {
  from: string;
  id: Long;
  symbol: string;
}
export interface MsgRemoveMarketForAssetRequestSDKType {
  from: string;
  id: Long;
  symbol: string;
}
export interface MsgRemoveMarketForAssetResponse {}
export interface MsgRemoveMarketForAssetResponseSDKType {}
export interface MsgFetchPriceRequest {
  from: string;
  sourcePort: string;
  sourceChannel: string;
  timeoutHeight?: Height;
  timeoutTimestamp: Long;
  symbols: string[];
  scriptId: Long;
  feeLimit: Coin[];
  prepareGas: Long;
  executeGas: Long;
}
export interface MsgFetchPriceRequestSDKType {
  from: string;
  source_port: string;
  source_channel: string;
  timeout_height?: HeightSDKType;
  timeout_timestamp: Long;
  symbols: string[];
  script_id: Long;
  fee_limit: CoinSDKType[];
  prepare_gas: Long;
  execute_gas: Long;
}
export interface MsgFetchPriceResponse {}
export interface MsgFetchPriceResponseSDKType {}

function createBaseMsgAddMarketRequest(): MsgAddMarketRequest {
  return {
    from: "",
    symbol: "",
    scriptId: Long.UZERO,
    id: Long.UZERO
  };
}

export const MsgAddMarketRequest = {
  encode(message: MsgAddMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    if (!message.scriptId.isZero()) {
      writer.uint32(24).uint64(message.scriptId);
    }

    if (!message.id.isZero()) {
      writer.uint32(32).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMarketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.scriptId = (reader.uint64() as Long);
          break;

        case 4:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddMarketRequest>): MsgAddMarketRequest {
    const message = createBaseMsgAddMarketRequest();
    message.from = object.from ?? "";
    message.symbol = object.symbol ?? "";
    message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? Long.fromValue(object.scriptId) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgAddMarketResponse(): MsgAddMarketResponse {
  return {};
}

export const MsgAddMarketResponse = {
  encode(_: MsgAddMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMarketResponse();

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

  fromPartial(_: DeepPartial<MsgAddMarketResponse>): MsgAddMarketResponse {
    const message = createBaseMsgAddMarketResponse();
    return message;
  }

};

function createBaseMsgUpdateMarketRequest(): MsgUpdateMarketRequest {
  return {
    from: "",
    symbol: "",
    scriptId: Long.UZERO
  };
}

export const MsgUpdateMarketRequest = {
  encode(message: MsgUpdateMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    if (!message.scriptId.isZero()) {
      writer.uint32(24).uint64(message.scriptId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMarketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.scriptId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateMarketRequest>): MsgUpdateMarketRequest {
    const message = createBaseMsgUpdateMarketRequest();
    message.from = object.from ?? "";
    message.symbol = object.symbol ?? "";
    message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? Long.fromValue(object.scriptId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgUpdateMarketResponse(): MsgUpdateMarketResponse {
  return {};
}

export const MsgUpdateMarketResponse = {
  encode(_: MsgUpdateMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMarketResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateMarketResponse>): MsgUpdateMarketResponse {
    const message = createBaseMsgUpdateMarketResponse();
    return message;
  }

};

function createBaseMsgRemoveMarketForAssetRequest(): MsgRemoveMarketForAssetRequest {
  return {
    from: "",
    id: Long.UZERO,
    symbol: ""
  };
}

export const MsgRemoveMarketForAssetRequest = {
  encode(message: MsgRemoveMarketForAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMarketForAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMarketForAssetRequest();

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
          message.symbol = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRemoveMarketForAssetRequest>): MsgRemoveMarketForAssetRequest {
    const message = createBaseMsgRemoveMarketForAssetRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.symbol = object.symbol ?? "";
    return message;
  }

};

function createBaseMsgRemoveMarketForAssetResponse(): MsgRemoveMarketForAssetResponse {
  return {};
}

export const MsgRemoveMarketForAssetResponse = {
  encode(_: MsgRemoveMarketForAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMarketForAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMarketForAssetResponse();

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

  fromPartial(_: DeepPartial<MsgRemoveMarketForAssetResponse>): MsgRemoveMarketForAssetResponse {
    const message = createBaseMsgRemoveMarketForAssetResponse();
    return message;
  }

};

function createBaseMsgFetchPriceRequest(): MsgFetchPriceRequest {
  return {
    from: "",
    sourcePort: "",
    sourceChannel: "",
    timeoutHeight: undefined,
    timeoutTimestamp: Long.UZERO,
    symbols: [],
    scriptId: Long.UZERO,
    feeLimit: [],
    prepareGas: Long.UZERO,
    executeGas: Long.UZERO
  };
}

export const MsgFetchPriceRequest = {
  encode(message: MsgFetchPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.sourcePort !== "") {
      writer.uint32(18).string(message.sourcePort);
    }

    if (message.sourceChannel !== "") {
      writer.uint32(26).string(message.sourceChannel);
    }

    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(34).fork()).ldelim();
    }

    if (!message.timeoutTimestamp.isZero()) {
      writer.uint32(40).uint64(message.timeoutTimestamp);
    }

    for (const v of message.symbols) {
      writer.uint32(50).string(v!);
    }

    if (!message.scriptId.isZero()) {
      writer.uint32(56).uint64(message.scriptId);
    }

    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (!message.prepareGas.isZero()) {
      writer.uint32(72).uint64(message.prepareGas);
    }

    if (!message.executeGas.isZero()) {
      writer.uint32(80).uint64(message.executeGas);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFetchPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFetchPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.sourcePort = reader.string();
          break;

        case 3:
          message.sourceChannel = reader.string();
          break;

        case 4:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;

        case 5:
          message.timeoutTimestamp = (reader.uint64() as Long);
          break;

        case 6:
          message.symbols.push(reader.string());
          break;

        case 7:
          message.scriptId = (reader.uint64() as Long);
          break;

        case 8:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 9:
          message.prepareGas = (reader.uint64() as Long);
          break;

        case 10:
          message.executeGas = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgFetchPriceRequest>): MsgFetchPriceRequest {
    const message = createBaseMsgFetchPriceRequest();
    message.from = object.from ?? "";
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : undefined;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? Long.fromValue(object.timeoutTimestamp) : Long.UZERO;
    message.symbols = object.symbols?.map(e => e) || [];
    message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? Long.fromValue(object.scriptId) : Long.UZERO;
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? Long.fromValue(object.prepareGas) : Long.UZERO;
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? Long.fromValue(object.executeGas) : Long.UZERO;
    return message;
  }

};

function createBaseMsgFetchPriceResponse(): MsgFetchPriceResponse {
  return {};
}

export const MsgFetchPriceResponse = {
  encode(_: MsgFetchPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFetchPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFetchPriceResponse();

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

  fromPartial(_: DeepPartial<MsgFetchPriceResponse>): MsgFetchPriceResponse {
    const message = createBaseMsgFetchPriceResponse();
    return message;
  }

};