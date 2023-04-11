import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { keybase } from "../queries/identity-query";

interface ValidatorImageProps {
  chainName: string;
}

const ValidatorImage: React.FC<ValidatorImageProps> = ({ chainName }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
    const updateUrl = async () => {
      const urlImage = await Promise.resolve(keybase(chainName));
      setImageUrl(urlImage || ""); // set the state variable url to the retrieved value, or an empty string if it is falsy
    };
    updateUrl();

  if (!imageUrl) {
    return null;
  }

  return (
    <Image
      boxSize=""
      objectFit="cover"
      src={imageUrl}
      alt="Validator Image"
    />
  );
};

export default ValidatorImage;
