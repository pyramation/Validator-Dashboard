import { fromBech32, toBech32 } from '@cosmjs/encoding';
import { ChainName } from '@cosmos-kit/core';
import { chains } from 'chain-registry';
import { useEffect, useState } from 'react';
import { useChain } from '@cosmos-kit/react';


  export function accountAddressToValoper(address: string | undefined, chainName: ChainName | undefined): string | undefined {
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

export function useValoperAddress(chainName: ChainName | undefined): string {
  const [valoperAddress, setValoperAddress] = useState("");
  const { address } = useChain(chainName || "akash");

  useEffect(() => {
    const updateValoperAddress = () => {
      const newAddress = accountAddressToValoper(address, chainName);
      setValoperAddress(newAddress || "");
    };
  
    updateValoperAddress();
  }, [chainName, address]);

  console.log('valoper function', valoperAddress)

  return valoperAddress;
}