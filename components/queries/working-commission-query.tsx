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
      
      const url = `${restEndpoint}/cosmos/distribution/v1beta1/validators/${restEndpoint}/commission`;
      console.log(restEndpoint);
      console.log(chainName);

      try {
        const response = await axios.get(url);
        const data = response.data;

        // Extract the amount from the response
        const commissionAmount = data?.commission?.commission[0]?.amount;

        if (commissionAmount) {
          const roundedCommission = Math.round(Number(commissionAmount)) / 100;
          const roundedAmount = Math.round(roundedCommission) / 100;
          return roundedAmount / 100; // Ensure this return statement is present
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
