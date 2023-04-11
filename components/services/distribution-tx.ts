import { cosmos } from "../../codegen";
import { useChain } from "@cosmos-kit/react";
import { StdFee } from '@cosmjs/amino';
import { chains } from 'chain-registry';
import { SigningStargateClient } from '@cosmjs/stargate';

export const commissionTX = (
    getSigningStargateClient: () => Promise<SigningStargateClient>,
    setResp: (resp: string) => any,
    chainName: string,
    address: string,
    valoperAddress: string
  ) => {
  return async (event: React.MouseEvent) => {
    event.preventDefault();

    const stargateClient = await getSigningStargateClient();
    if (!stargateClient || !address) {
      console.error('Stargate client undefined or address undefined.');
      return;
    }

    const { withdrawValidatorCommission } = cosmos.distribution.v1beta1.MessageComposer.withTypeUrl;
    const msgWithdrawValidatorCommission = withdrawValidatorCommission({
      validatorAddress: valoperAddress
    });
    const chainInfo = chains.find(({ chain_name }) => chain_name === chainName);
    const mainDenom = chainInfo?.staking?.staking_tokens?.[0]?.denom ?? "uakt"; // Get the main denomination for the chain

    const fee: StdFee = {
      amount: [
        {
          denom: mainDenom,
          amount: '5000',
        },
      ],
      gas: '100000',
    };

    try {
      const response = await stargateClient.signAndBroadcast(address, [msgWithdrawValidatorCommission], fee);
      setResp(JSON.stringify(response, null, 2));
    } catch (error) {
      console.error('Error signing and sending transaction:', error);
    }
  };
};
