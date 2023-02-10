import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** MsgInitialClaim defines request message for InitialClaim RPC request */

export interface MsgClaim {
  sender: string;
  claimAction: string;
}
/** MsgInitialClaim defines request message for InitialClaim RPC request */

export interface MsgClaimSDKType {
  sender: string;
  claim_action: string;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */

export interface MsgClaimResponse {
  /** total initial claimable amount for the user */
  claimedAmount?: Coin;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */

export interface MsgClaimResponseSDKType {
  claimed_amount?: CoinSDKType;
}

function createBaseMsgClaim(): MsgClaim {
  return {
    sender: "",
    claimAction: ""
  };
}

export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.claimAction !== "") {
      writer.uint32(18).string(message.claimAction);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.claimAction = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.sender = object.sender ?? "";
    message.claimAction = object.claimAction ?? "";
    return message;
  }

};

function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {
    claimedAmount: undefined
  };
}

export const MsgClaimResponse = {
  encode(message: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimedAmount !== undefined) {
      Coin.encode(message.claimedAmount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.claimedAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    message.claimedAmount = object.claimedAmount !== undefined && object.claimedAmount !== null ? Coin.fromPartial(object.claimedAmount) : undefined;
    return message;
  }

};