import { fromBech32, toBech32 } from '@cosmjs/encoding';
import { ChainName } from '@cosmos-kit/core';
import { chains } from 'chain-registry';
import { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import { useChain } from '@cosmos-kit/react';

interface ValoperAddressComponentProps {
    chainName: ChainName | undefined;
  }
  

export function accountAddressToValoper(address: string | undefined, chainName: string): string | undefined {
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
  const { address } = useChain(chainName || "cosmoshub");

  useEffect(() => {
    const updateValoperAddress = () => {
      const newAddress = accountAddressToValoper(address, chainName || "");
      setValoperAddress(newAddress || "");
    };

    updateValoperAddress();
  }, [chainName, address]);

  return valoperAddress;
}

export const ValoperAddressComponent: FunctionComponent<ValoperAddressComponentProps> = ({ chainName }) => {
    const valoperAddress = useValoperAddress(chainName);
    console.log('inthevaloperfunc',valoperAddress)
  
    return (
      null
    );
  };


  console.log(ValoperAddressComponent)