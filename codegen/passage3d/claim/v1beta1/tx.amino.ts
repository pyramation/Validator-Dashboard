import { AminoMsg } from "@cosmjs/amino";
import { MsgClaim } from "./tx";
export interface MsgClaimAminoType extends AminoMsg {
  type: "/passage3d.claim.v1beta1.MsgClaim";
  value: {
    sender: string;
    claim_action: string;
  };
}
export const AminoConverter = {
  "/passage3d.claim.v1beta1.MsgClaim": {
    aminoType: "/passage3d.claim.v1beta1.MsgClaim",
    toAmino: ({
      sender,
      claimAction
    }: MsgClaim): MsgClaimAminoType["value"] => {
      return {
        sender,
        claim_action: claimAction
      };
    },
    fromAmino: ({
      sender,
      claim_action
    }: MsgClaimAminoType["value"]): MsgClaim => {
      return {
        sender,
        claimAction: claim_action
      };
    }
  }
};