import { useChain } from "@cosmos-kit/react";
import {
  Box,
  GridItem,
  Icon,
  Image,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MouseEventHandler, useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import {
  Astronaut,
  Error,
  Connected,
  ConnectedShowAddress,
  ConnectedUserInfo,
  Connecting,
  ConnectStatusWarn,
  CopyAddressBtn,
  Disconnected,
  NotExist,
  Rejected,
  RejectedWarn,
  WalletConnectComponent,
} from ".";

import ValidatorImage from "./react/validator-logo";

import { useValidatorData } from "./queries/validator-query";
import { keybase } from "./queries/identity-query";


export const WalletCardSection = ({ chainName, }: { chainName: string }) => {
  const { connect, openView, status, username, address, message, wallet } =
    useChain(chainName);

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault();
    await connect();
  };

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault();
    openView();
  };

  // Components

  const connectWalletWarn = (
    <ConnectStatusWarn
      walletStatus={status}
      rejected={
        <RejectedWarn
          icon={<Icon as={FiAlertTriangle} mt={1} />}
          wordOfWarning={`${wallet?.prettyName}: ${message}`}
        />
      }
      error={
        <RejectedWarn
          icon={<Icon as={FiAlertTriangle} mt={1} />}
          wordOfWarning={`${wallet?.prettyName}: ${message}`}
        />
      }
    />
  );

const validatorData = useValidatorData(chainName);
const moniker = validatorData.moniker;
const valImage = ValidatorImage

  const userInfo = username && (
    <ConnectedUserInfo username={moniker}  icon={<ValidatorImage chainName={chainName} />}
    />
  );
  
  const addressBtn = (
    <CopyAddressBtn
      walletStatus={status}
      connected={<ConnectedShowAddress address={address} isLoading={false} />}
    />
  );

  const { colorMode } = useColorMode();

  return (
    <>
      {connectWalletWarn && <GridItem>{connectWalletWarn}</GridItem>}
      <GridItem px={6}>
        <Stack
          justifyContent="center"
          alignItems="center"
          borderRadius="lg"
          bg={colorMode === "dark" ? "rgba(0, 0, 0, 0.9)" : "white"}
          boxShadow={useColorModeValue(
            "0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3",
            "0 0 2px #363636, 0 0 8px -2px #4f4f4f"
          )}
          spacing={4}
          px={4}
          py={{ base: 6, md: 12 }}
        >
          {userInfo}

        </Stack>
        <Box pt={4}>
        </Box>
      </GridItem>
    </>
  );
};
