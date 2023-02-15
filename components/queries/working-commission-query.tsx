export * from '../../codegen'
import { akash } from '../../codegen';
import { osmosis } from '../../codegen';

const client = await akash.ClientFactory.createLCDClient({
    restEndpoint: 'https://akash.api.chandrastation.com'
})

const data = await client.cosmos.distribution.v1beta1.validatorCommission({
    validatorAddress: 'akashvaloper1lxh0u07haj646pt9e0l2l4qc3d8htfx5kk698d'
})

const getcommission = data.commission?.commission[0].amount

export async function fetchCommission(): Promise<number> {
  const roundedCommission = Math.round(Number(getcommission)) / 100;
  const roundedAmount = Math.round(roundedCommission) / 100;
  return roundedAmount / 100;

}