import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChainProvider } from '@cosmos-kit/react';
import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
import { wallets as leapWallets } from '@cosmos-kit/leap';
import { defaultTheme } from '../config';

import { SignerOptions } from '@cosmos-kit/core';
import { chains, assets } from 'chain-registry';
import { Chain } from '@chain-registry/types';

import * as cosmosAuthzV1beta1TxRegistry from "../codegen/cosmos/authz/v1beta1/tx.registry";
import * as cosmosBankV1beta1TxRegistry from "../codegen/cosmos/bank/v1beta1/tx.registry";
import * as cosmosCrisisV1beta1TxRegistry from "../codegen/cosmos/crisis/v1beta1/tx.registry";
import * as cosmosDistributionV1beta1TxRegistry from "../codegen/cosmos/distribution/v1beta1/tx.registry";
import * as cosmosEvidenceV1beta1TxRegistry from "../codegen/cosmos/evidence/v1beta1/tx.registry";
import * as cosmosFeegrantV1beta1TxRegistry from "../codegen/cosmos/feegrant/v1beta1/tx.registry";
import * as cosmosGovV1TxRegistry from "../codegen/cosmos/gov/v1/tx.registry";
import * as cosmosGovV1beta1TxRegistry from "../codegen/cosmos/gov/v1beta1/tx.registry";
import * as cosmosGroupV1TxRegistry from "../codegen/cosmos/group/v1/tx.registry";
import * as cosmosNftV1beta1TxRegistry from "../codegen/cosmos/nft/v1beta1/tx.registry";
import * as cosmosSlashingV1beta1TxRegistry from "../codegen/cosmos/slashing/v1beta1/tx.registry";
import * as cosmosStakingV1beta1TxRegistry from "../codegen/cosmos/staking/v1beta1/tx.registry";
import * as cosmosUpgradeV1beta1TxRegistry from "../codegen/cosmos/upgrade/v1beta1/tx.registry";
import * as cosmosVestingV1beta1TxRegistry from "../codegen/cosmos/vesting/v1beta1/tx.registry";
import * as cosmosAuthzV1beta1TxAmino from "../codegen/cosmos/authz/v1beta1/tx.amino";
import * as cosmosBankV1beta1TxAmino from "../codegen/cosmos/bank/v1beta1/tx.amino";
import * as cosmosCrisisV1beta1TxAmino from "../codegen/cosmos/crisis/v1beta1/tx.amino";
import * as cosmosDistributionV1beta1TxAmino from "../codegen/cosmos/distribution/v1beta1/tx.amino";
import * as cosmosEvidenceV1beta1TxAmino from "../codegen/cosmos/evidence/v1beta1/tx.amino";
import * as cosmosFeegrantV1beta1TxAmino from "../codegen/cosmos/feegrant/v1beta1/tx.amino";
import * as cosmosGovV1TxAmino from "../codegen/cosmos/gov/v1/tx.amino";
import * as cosmosGovV1beta1TxAmino from "../codegen/cosmos/gov/v1beta1/tx.amino";
import * as cosmosGroupV1TxAmino from "../codegen/cosmos/group/v1/tx.amino";
import * as cosmosNftV1beta1TxAmino from "../codegen/cosmos/nft/v1beta1/tx.amino";
import * as cosmosSlashingV1beta1TxAmino from "../codegen/cosmos/slashing/v1beta1/tx.amino";
import * as cosmosStakingV1beta1TxAmino from "../codegen/cosmos/staking/v1beta1/tx.amino";
import * as cosmosUpgradeV1beta1TxAmino from "../codegen/cosmos/upgrade/v1beta1/tx.amino";
import * as cosmosVestingV1beta1TxAmino from "../codegen/cosmos/vesting/v1beta1/tx.amino";
import { GeneratedType } from '@cosmjs/proto-signing';

export const cosmosAminoConverters = {
  ...cosmosAuthzV1beta1TxAmino.AminoConverter,
  ...cosmosBankV1beta1TxAmino.AminoConverter,
  ...cosmosCrisisV1beta1TxAmino.AminoConverter,
  ...cosmosDistributionV1beta1TxAmino.AminoConverter,
  ...cosmosEvidenceV1beta1TxAmino.AminoConverter,
  ...cosmosFeegrantV1beta1TxAmino.AminoConverter,
  ...cosmosGovV1TxAmino.AminoConverter,
  ...cosmosGovV1beta1TxAmino.AminoConverter,
  ...cosmosGroupV1TxAmino.AminoConverter,
  ...cosmosNftV1beta1TxAmino.AminoConverter,
  ...cosmosSlashingV1beta1TxAmino.AminoConverter,
  ...cosmosStakingV1beta1TxAmino.AminoConverter,
  ...cosmosUpgradeV1beta1TxAmino.AminoConverter,
  ...cosmosVestingV1beta1TxAmino.AminoConverter
};

export const cosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...cosmosAuthzV1beta1TxRegistry.registry, ...cosmosBankV1beta1TxRegistry.registry, ...cosmosCrisisV1beta1TxRegistry.registry, ...cosmosDistributionV1beta1TxRegistry.registry, ...cosmosEvidenceV1beta1TxRegistry.registry, ...cosmosFeegrantV1beta1TxRegistry.registry, ...cosmosGovV1TxRegistry.registry, ...cosmosGovV1beta1TxRegistry.registry, ...cosmosGroupV1TxRegistry.registry, ...cosmosNftV1beta1TxRegistry.registry, ...cosmosSlashingV1beta1TxRegistry.registry, ...cosmosStakingV1beta1TxRegistry.registry, ...cosmosUpgradeV1beta1TxRegistry.registry, ...cosmosVestingV1beta1TxRegistry.registry];

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    signingStargate: (chain: Chain) => {
      return {
        aminoTypes: cosmosAminoConverters,
        registry: cosmosProtoRegistry
      }
    }
  };

  return (
    <ChakraProvider theme={defaultTheme}>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
        walletConnectOptions={{
          signClient: {
            projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
            relayUrl: 'wss://relay.walletconnect.org',
            metadata: {
              name: 'CosmosKit Template',
              description: 'CosmosKit dapp template',
              url: 'https://docs.cosmoskit.com/',
              icons: [],
            },
          },
        }}
        wrappedWithChakra={true}
        signerOptions={signerOptions}
      >
        <Component {...pageProps} />
      </ChainProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
