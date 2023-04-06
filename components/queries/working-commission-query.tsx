import { ChainName } from '@cosmos-kit/core';
import { useState, useEffect } from 'react';
import { useValoperAddress } from './get-valoper';
import { chains } from 'chain-registry';
import axios from 'axios';

export function CommissionFetcher(chainName: ChainName): number | undefined {
  const [commission, setCommission] = useState<number | undefined>(undefined);
  const valoperAddress = useValoperAddress(chainName);

  useEffect(() => {
    async function fetchCommission() {
      const chainInfo = chains.find(({ chain_name }) => chain_name === chainName);

      if (!chainInfo?.apis?.rest) {
        console.error('REST endpoint not found for the given chainName');
        return;
      }

      const polkachuEndpoint = chainInfo.apis.rest.find(({ provider }) => provider === 'Polkachu');
      const restEndpoint = polkachuEndpoint ? polkachuEndpoint.address : chainInfo.apis.rest[0].address;
      const mainDenom = chainInfo?.staking?.staking_tokens?.[0]?.denom; // Get the main denomination for the chain

      const url = `${restEndpoint}/cosmos/distribution/v1beta1/validators/${valoperAddress}/commission`;
      console.log(restEndpoint);
      console.log(chainName);

      try {
        const response = await axios.get(url);
        const data = response.data;

        // Filter commissions by the main denomination
        const mainCommission = data?.commission?.commission.find((commission: { denom: string }) => commission.denom === mainDenom);
        console.log(mainDenom)
        // Extract the amount from the main commission
        const commissionAmount = mainCommission?.amount;

        function getConversionFactor(chainName: ChainName): number {
          // You can customize this list based on the conversion factor you need for each chain
          const chainsWithLargeFactor = ['canto', 'evmos', 'injective'];
        
          if (chainsWithLargeFactor.includes(chainName)) {
            return 1e18; // For 1000000000000000000 adenom = 1 denom
          }
          return 1e6; // For 1000000 udenom = 1 denom
        }
        
        // Inside fetchCommission function
        if (commissionAmount) {
          const conversionFactor = getConversionFactor(chainName);
          const commissionInDenom = Number(commissionAmount) / conversionFactor;
          const roundedCommission = Math.round(commissionInDenom * 100) / 100;
          return roundedCommission;
        }
      } catch (error) {
        console.error('Error fetching commission:', error);
      }
    }

    fetchCommission().then((commission) => {
      console.log('Fetched commission:', commission);
      setCommission(commission);
    });
  }, [valoperAddress, chainName]);

  return commission;
}
