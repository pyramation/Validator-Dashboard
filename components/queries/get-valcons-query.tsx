import { toBech32, fromBase64, toHex, fromHex,  } from '@cosmjs/encoding';
import { useValoperAddress } from './get-valoper';
import { chains } from 'chain-registry';
import { sha256 } from '@cosmjs/crypto'

export async function getValconsAddress(chainName: string | undefined): Promise<string> {
  const valoperAddress = useValoperAddress(chainName);
  const response = await fetch(`https://akash.api.chandrastation.com/cosmos/staking/v1beta1/validators/${valoperAddress}`);
  const { validator } = await response.json();
  const consensusPubkeyBase64 = validator?.consensus_pubkey?.key;
  if (!consensusPubkeyBase64) {
    throw new Error('Consensus pubkey not found');
  }
  const chainInfo = chains.find(({ chain_name }) => chain_name === chainName);
  if (!chainInfo) {
    throw new Error('Chain not found');
  }
  const bech32Prefix = chainInfo.bech32_prefix;
  const valconsPrefix = bech32Prefix + 'valcons';

  const addressData = sha256(fromBase64(consensusPubkeyBase64)).slice(0,20)

  const valconsAddress = toBech32(valconsPrefix, addressData);

  return valconsAddress;
}
