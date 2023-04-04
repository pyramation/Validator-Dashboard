import { fromBech32, toBech32 } from '@cosmjs/encoding';
import { chains } from 'chain-registry';

export function accountAddressToValoperTest(address: string | undefined, chainName: string): string | undefined {
  if (!address) {
    return undefined;
  }
  const { data } = fromBech32(address);

  const chainInfo = chains.find(({ chain_name }) => chain_name === chainName);

  if (!chainInfo) {
    throw new Error("Chain not found");
  }

  const bech32Prefix = chainInfo.bech32_prefix;
  const valoperPrefix = bech32Prefix + 'valoper';
  return toBech32(valoperPrefix, data);
}

const akashWalletAddress = 'akash1qvsus5qg8yhre7k2c78xkkw4nvqqgev7gv6gj6';
const chainName = 'akash';
const valoperAddress = accountAddressToValoperTest(akashWalletAddress, chainName);

console.log('Valoper address:', valoperAddress);