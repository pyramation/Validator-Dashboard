import { useValidatorData } from "./validator-query";

export async function keybase(chainName: string | undefined) {
  const validatorData = useValidatorData(chainName);
  const identity = validatorData.identity;
  const res = await fetch(`https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=${identity}&fields=pictures`);
  const data = await res.json();

  if (!data.them || data.them.length === 0) {
    return null;
  }

  const imageUrl =  data.them[0]?.pictures?.primary?.url;
  return imageUrl;
}