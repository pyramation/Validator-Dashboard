import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  IconButton,
  Image,
  Link as ChakraLink,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { ChainName } from "@cosmos-kit/core";
import { useChain, useManager } from "@cosmos-kit/react";
import { channel } from "diagnostics_channel";
import NextLink from "next/link";
import { connected } from "process";
import React, {
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IconType } from "react-icons";
import { FiChevronLeft, FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { AiOutlineReload } from "react-icons/ai";

import {
  ConnectWalletButton,
  ChangeChainDropdown,
  CopyAddressBtn,
  ChooseChain,
  ChainOption,
  handleSelectChainDropdown,
  WalletCardSection,
  Connected,
  ConnectedShowAddress,
  ConnectedUserInfo,
  Connecting,
  Disconnected,
  NotExist,
  Rejected,
  WalletConnectComponent,
  Astronaut,
} from "../components";
import DistributionBox from "../components/distribution";
import GovernanceBox from "../components/governance";
import Home from "../components/home";
import { useValoperAddress } from "../components/queries/get-valoper";
import { getValconsAddress } from "../components/queries/get-valcons-query";
import { CommissionFetcher } from "../components/queries/working-commission-query";
import { useValidatorData } from "../components/queries/validator-query";
import ValidatorImage from "../components/react/validator-logo";
import { RepeatIcon } from "@chakra-ui/icons";
import { useMissedBlocksCounter } from "../components/queries/slashing-query";

type IconTypeProps = string | IconType | JSX.Element | React.ReactNode | any;
type DefaultLinkItemType = {
  text: string;
  icon?: IconTypeProps;
};
type CategoryComponentType = {
  label: string;
  href?: string;
  component?: React.ComponentType;
};
type SimpleLayoutType = {
  logo?: React.ReactNode;
  userInfo?: React.ReactNode;
  copyAddressButton?: React.ReactNode;
  customLink?: Function;
  chainDropdown?: React.ReactNode;
  isFullWidth?: boolean;
  children: React.ReactNode;
  connectWalletButton: React.ReactNode;
};
interface SimpleLayoutMenuType extends SimpleLayoutType {
  toggleColorMode: () => void;
}

function handleChangeColorModeValue(
  colorMode: string,
  light: string | any,
  dark: string | any
) {
  if (colorMode === "light") return light;
  if (colorMode === "dark") return dark;
}

const MenuLinkButton = ({ icon, text }: DefaultLinkItemType) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      title={text}
      display="flex"
      variant="ghost"
      justifyContent="start"
      alignItems="center"
      fontSize="lg"
      fontWeight="medium"
      textAlign="start"
      px={2}
      w="full"
      h="full"
      minH={10}
      maxH="fit-content"
      whiteSpace="break-spaces"
      lineHeight={1.1}
      _hover={{
        bg: handleChangeColorModeValue(colorMode, "gray.200", "gray.700"),
      }}
      _focus={{ boxShadow: "0 0 0 2px #C47CCF" }}
    >
      <Stack isInline={true} spacing={2} alignItems="center">
        {icon}
        <Text>{text}</Text>
      </Stack>
    </Button>
  );
};

const MobileMenu = ({
  isFullWidth,
  logo,
  customLink,
  chainDropdown,
  toggleColorMode,
  children,
}: SimpleLayoutMenuType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <Box>
      {/* navbar */}
      <Flex
        justify="space-between"
        position="fixed"
        align="center"
        top={0}
        left={0}
        right={0}
        minH={12}
        py={2.5}
        px={4}
        zIndex="sticky"
        bg={handleChangeColorModeValue(colorMode, "white", "copyAddressBtn")}
        boxShadow={handleChangeColorModeValue(
          colorMode,
          "0 2px 2px -1px #d8d8d8",
          "0 2px 2px -1px #181818, 0 3px 5px -4px #0b0b0b"
        )}
      >
        <IconButton
          aria-label="menu"
          variant="outline"
          icon={<FiMenu opacity={0.8} />}
          _focus={{ outline: "none" }}
          onClick={onOpen}
        />
        {logo}
        <IconButton
          aria-label="color mode"
          variant="outline"
          icon={handleChangeColorModeValue(
            colorMode,
            <FiMoon opacity={0.6} />,
            <FiSun opacity={0.8} />
          )}
          _focus={{ outline: "none" }}
          onClick={toggleColorMode}
        />
      </Flex>
      {/* drawer */}
      <Drawer
        placement="left"
        isFullHeight={true}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent maxW={isFullWidth ? "full" : "xs"}>
          <Grid
            templateRows="auto 1fr auto"
            position="absolute"
            top={0}
            right={0}
            left={0}
            bottom={0}
          >
            <Flex justify="end" p={4}>
              <IconButton
                aria-label="close"
                icon={<FiChevronLeft opacity={0.7} />}
                variant="outline"
                fontSize="xl"
                borderRadius="lg"
                _focus={{ outline: "none" }}
                onClick={onClose}
              />
            </Flex>
            <Box position="relative">
              <Stack
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                pl={4}
                pr={2}
                overflowY="scroll"
                css={{
                  // For Firefox
                  scrollbarWidth: "thin",
                  // For Chrome and other browsers except Firefox
                  "&::-webkit-scrollbar": {
                    width: "10px",
                    background: "transparent",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: handleChangeColorModeValue(
                      colorMode,
                      "rgba(0,0,0,0.1)",
                      "rgba(255,255,255,0.1)"
                    ),
                    borderRadius: "6px",
                    border: "3px solid",
                    borderColor: handleChangeColorModeValue(
                      colorMode,
                      "#fff",
                      "#2D3748"
                    ),
                  },
                }}
              ></Stack>
            </Box>
          </Grid>
        </DrawerContent>
      </Drawer>
      {/* content */}
      <Box
        position="fixed"
        top="3.75rem"
        bottom={16}
        left={0}
        right={0}
        overflowY="scroll"
        css={{
          // For Firefox
          scrollbarWidth: "thin",
          // For Chrome and other browsers except Firefox
          "&::-webkit-scrollbar": {
            width: "10px",
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: handleChangeColorModeValue(
              colorMode,
              "rgba(0,0,0,0.1)",
              "rgba(255,255,255,0.1)"
            ),
            borderRadius: "6px",
            border: "3px solid",
            borderColor: handleChangeColorModeValue(
              colorMode,
              "#fff",
              "#000000"
            ),
          },
        }}
      >
        {children}
      </Box>
      <Box
        position="fixed"
        bottom={0}
        left={2}
        right={2}
        p={4}
        display="flex"
        justifyContent="center"
        zIndex="dropdown"
        w="auto"
        h="auto"
        lineHeight="shorter"
        bg={handleChangeColorModeValue(colorMode, "white", "black")}
        borderRadius="6px 6px 0 0"
        boxShadow={handleChangeColorModeValue(
          colorMode,
          "0 0px 2px #e3e3e3, 0 0 16px -6px #c4c4c4",
          "0 -4px 5px #555"
        )}
        color={handleChangeColorModeValue(colorMode, "gray.700", "white")}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          justifyContent="center"
          alignItems="center"
          w="full"
          gap={4}
        >
          <Box w="full" maxW={72} mx="auto">
            {chainDropdown}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};



const DesktopMenu = ({
  logo,
  userInfo,
  copyAddressButton,
  customLink,
  chainDropdown,
  connectWalletButton,
  toggleColorMode,
  children,
}: SimpleLayoutMenuType) => {
  const { colorMode } = useColorMode();
  const colorModeIcon = handleChangeColorModeValue(
    colorMode,
    <FiMoon opacity={0.6} />,
    <FiSun opacity={0.7} />
  );

  const [isDistributionBoxVisible, setIsDistributionBoxVisible] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(() => <Home />);
  const handleButtonClick = (component: React.ReactNode, boxType: string | null, refresh: boolean = false) => {
    if (!refresh) {
      setSelectedComponent(component);
    }

    if (boxType === 'distribution') {
      setIsDistributionBoxVisible(true);
    } else {
      setIsDistributionBoxVisible(false);
    }
  };

  const [chainName, setChainName] = useState<ChainName | undefined>(
    "akash"
  );
  const { chainRecords, getChainLogo } = useManager();

  const chainOptions = useMemo(
    () =>
      chainRecords.map((chainRecord) => {
        return {
          chainName: chainRecord?.name,
          label: chainRecord?.chain.pretty_name,
          value: chainRecord?.name,
          icon: getChainLogo(chainRecord.name),
        };
      }),
    [chainRecords, getChainLogo]
  );

  useEffect(() => {
    setChainName(window.localStorage.getItem("selected-chain") || "akash");
  }, []);

  const onChainChange: handleSelectChainDropdown = async (
    selectedValue: ChainOption | null
  ) => {
    setChainName(selectedValue?.chainName);
    if (selectedValue?.chainName) {
      window?.localStorage.setItem("selected-chain", selectedValue?.chainName);
    } else {
      window?.localStorage.removeItem("selected-chain");
    }
  };

  const chooseChain = (
    <ChooseChain
      chainName={chainName}
      chainInfos={chainOptions}
      onChange={onChainChange}
    />
  );

  const valoperAddress = useValoperAddress(chainName);
  const validatorData = useValidatorData(chainName ?? "");
  const comission = CommissionFetcher(chainName ?? "");
  const valImage = ValidatorImage(chainName);
  const valconsAddress = getValconsAddress(chainName, valoperAddress);
  const missedBlocks = useMissedBlocksCounter(chainName ?? "", valoperAddress);

  useEffect(() => {
    const fetchValoperAndValidatorData = async () => {
      useValoperAddress(chainName);
      useValidatorData(chainName ?? "");
      CommissionFetcher(chainName ?? "");
      ValidatorImage(chainName);
      useMissedBlocksCounter(chainName ?? "")
      getValconsAddress(chainName, valoperAddress);
    };
  
    fetchValoperAndValidatorData();
  }, [chainName, valoperAddress, validatorData, comission]);

  const Error = ({
    buttonText,
    wordOfWarning,
    onClick,
  }: {
    buttonText: string;
    wordOfWarning?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }) => {
    const bg = useColorModeValue("orange.200", "orange.300");
    // Rest of the Error component
  };

  const { connect, openView, status, username, address, message, wallet } =
    useChain(chainName || "akash");
  
    const distributionBox = (
    <DistributionBox key={address} chainName={chainName} />
  );
  const [distributionBoxComponent, setDistributionBoxComponent] = useState<React.ReactNode | null>(null);
  useEffect(() => {
    if (isDistributionBoxVisible) {
      setDistributionBoxComponent(
        <DistributionBox key={address??"" + Math.random()} chainName={chainName} />
      );
    } else {
      setDistributionBoxComponent(null);
    }
  }, [isDistributionBoxVisible, address, chainName]);

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault();
    await connect();
  };

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault();
    openView();
  };

  const addressButton = (
    <CopyAddressBtn
      walletStatus={status}
      connected={<ConnectedShowAddress address={address} isLoading={false} />}
    />
  );

  const connectWalletBtn = (
    <WalletConnectComponent
      walletStatus={status}
      disconnect={
        <Disconnected buttonText="Connect Wallet" onClick={onClickConnect} />
      }
      connecting={<Connecting />}
      connected={
        <Connected buttonText={"My Wallet"} onClick={onClickOpenView} />
      }
      rejected={<Rejected buttonText="Reconnect" onClick={onClickConnect} />}
      error={<Error buttonText="Change Wallet" onClick={onClickOpenView} />}
      notExist={
        <NotExist buttonText="Install Wallet" onClick={onClickOpenView} />
      }
    />
  );


  return (
    <Flex>
      {/* sidebar */}
      <Stack
        spacing={4}
        position="fixed"
        top={0}
        bottom={0}
        bg={colorMode === "dark" ? "black" : "white"}
        left={0}
        minW={52}
        w="full"
        maxW={60}
      >
        {logo && (
          <Flex justify="center" align="center" p={4} pb={10}>
            {logo}
          </Flex>
        )}
        <Stack
          flex={1}
          pl={8}
          bg={colorMode === "dark" ? "black" : "white"}
          pr={1.5}
          py={2}
          overflowY="scroll"
          css={{
            // For Firefox
            scrollbarWidth: "thin",
            // For Chrome and other browsers except Firefox
            "&::-webkit-scrollbar": {
              width: "10px",
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: handleChangeColorModeValue(
                colorMode,
                "rgba(0,0,0,0.1)",
                "rgba(255,255,255,0.1)"
              ),
              borderRadius: "6px",
              border: "3px solid",
              borderColor: handleChangeColorModeValue(
                colorMode,
                "#fff",
                "##000000"
              ),
            },
          }}
        >
          <ButtonGroup
            pl={6}
            alignContent="center"
            paddingBottom="25px"
            gap="8"
          >
            <VStack
            spacing={12}
            >
              <Button
                colorScheme={colorMode === "dark" ? "white" : "black"}
                variant="ghost"
                onClick={() => handleButtonClick(<Home />, null)}
                fontSize="xl"
                _hover={{
                  textDecoration: "underline",
                  color: "teal",
                }}
              >
                Home
              </Button>
              <Button
                colorScheme={colorMode === "dark" ? "black" : "white"}
                variant="ghost"
                onClick={() => handleButtonClick(<GovernanceBox />, null)}
                fontSize="xl"
                _hover={{
                  textDecoration: "underline",
                  color: "teal",
                }}
              >
                Governance
              </Button>
              <Button
  colorScheme={colorMode === "dark" ? "black" : "white"}
  variant="ghost"
  onClick={() => handleButtonClick(distributionBox, 'distribution')}
  fontSize="xl"
  _hover={{
    textDecoration: "underline",
    color: "teal",
  }}
>
  Distribution
</Button>
            </VStack>
          </ButtonGroup>
        </Stack>
        <Box px={4} mx="auto" w="full" maxW={300} py={-2}>
          <WalletCardSection chainName={chainName || "cosmoshub"}/>
        </Box>
        <Box pl={5} mx="auto" w="full" maxW={300} py={4}>
          {connectWalletBtn}
        </Box>
      </Stack>
      {/* navbar */}
      <Box
        boxShadow={handleChangeColorModeValue(
          colorMode,
          "0 2px 4px  #E2E8F0",
          "0 2px 4px  rgba(255, 255, 255, 0.3)"
        )}
        bg={colorMode === "dark" ? "black" : "white"}
        position="fixed"
        top={0}
        left={60}
        right={0}
        zIndex="sticky"
        px={4}
      >
        <Stack
          isInline={true}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Heading 
            as="h1"
            fontFamily="Futura MD BT"
            lineHeight="1.36"
            fontWeight="medium"
            letterSpacing="0.1em"
            fontSize="4xl">
              Validator Dashboard
            </Heading>
          </Box>
          <Stack
            width="auto"
            isInline={true}
            justifyContent="end"
            alignItems="center"
            bg={colorMode === "dark" ? "black" : "white"}
            py={4}
          >
            <Box w="full" minW={72} maxW={72}>
              {chooseChain}
            </Box>
            <IconButton
              display="flex"
              aria-label="color mode"
              variant="outline"
              w={12}
              minW={12}
              h={12}
              borderRadius="lg"
              icon={colorModeIcon}
              fontSize="lg"
              _hover={{
                bg: handleChangeColorModeValue(
                  colorMode,
                  "blackAlpha.50",
                  "whiteAlpha.100"
                ),
              }}
              _focus={{ outline: "none" }}
              onClick={toggleColorMode}
            />
          </Stack>
        </Stack>
      </Box>
      {/* content */}
      <Box
        position="fixed"
        top={20}
        bg={colorMode === "dark" ? "black" : "white"}
        left={60}
        bottom={0}
        right={0}
        overflowY="scroll"
        boxShadow={handleChangeColorModeValue(
          colorMode,
          "-1px 0 4px #E2E8F0",
          "-1px 0 4px rgba(255, 255, 255, 0.3)"
        )}
        css={{
          // For Firefox
          scrollbarWidth: "thin",
          // For Chrome and other browsers except Firefox
          "&::-webkit-scrollbar": {
            width: "10px",
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: handleChangeColorModeValue(
              colorMode,
              "rgba(0,0,0,0.1)",
              "rgba(255,255,255,0.1)"
            ),
            borderRadius: "6px",
            border: "3px solid",
            borderColor: handleChangeColorModeValue(
              colorMode,
              "#fff",
              "#000000"
            ),
          },
        }}
      >
{
  selectedComponent && (
    <Box pl={20} alignSelf="center">
      {distributionBoxComponent ? distributionBoxComponent : selectedComponent}
    </Box>
  )
}
        <Box p={4} bg={colorMode === "dark" ? "black" : "white"}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

const SimpleLayout = ({
  logo,
  userInfo,
  copyAddressButton,
  customLink,
  chainDropdown,
  isFullWidth,
  connectWalletButton,
  children
}: SimpleLayoutType) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box w="full" h="full">
      <Box display={{ base: "none", lg: "block" }} w="full" h="full">
        <DesktopMenu
          logo={logo}
          copyAddressButton={copyAddressButton}
          customLink={customLink}
          chainDropdown={chainDropdown}
          children={children}
          connectWalletButton={connectWalletButton}
          toggleColorMode={toggleColorMode}
        />
      </Box>
      <Box display={{ base: "block", lg: "none" }} w="full" h="full">
        <MobileMenu
          isFullWidth={isFullWidth}
          logo={logo}
          customLink={customLink}
          chainDropdown={chainDropdown}
          children={children}
          connectWalletButton={connectWalletButton}
          toggleColorMode={toggleColorMode}
        />
      </Box>
    </Box>
  );
};

export default function () {
  const logo = (
    <Box w={{ base: 20, lg: 40 }} h={{ base: 20, lg: 40 }}>
      <Image src="https://uploads-ssl.webflow.com/612045b62d3fc3643f7c7e41/61204622e3d112175b7a8870_Chandra%20Logo%20for%20Proposa%3B-p-500.png" />
    </Box>
  );

  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    setMinHeight(window.innerHeight);
  }, []);

  const [chainName, setChainName] = useState<ChainName | undefined>(
    "cosmoshub"
  );
  const { chainRecords, getChainLogo } = useManager();

  const chainOptions = useMemo(
    () =>
      chainRecords.map((chainRecord) => {
        return {
          chainName: chainRecord?.name,
          label: chainRecord?.chain.pretty_name,
          value: chainRecord?.name,
          icon: getChainLogo(chainRecord.name),
        };
      }),
    [chainRecords, getChainLogo]
  );

  useEffect(() => {
    setChainName(window.localStorage.getItem("selected-chain") || "cosmoshub");
  }, []);

  const onChainChange: handleSelectChainDropdown = async (
    selectedValue: ChainOption | null
  ) => {
    setChainName(selectedValue?.chainName);
    if (selectedValue?.chainName) {
      window?.localStorage.setItem("selected-chain", selectedValue?.chainName);
    } else {
      window?.localStorage.removeItem("selected-chain");
    }
  };

  const chooseChain = (
    <ChooseChain
      chainName={chainName}
      chainInfos={chainOptions}
      onChange={onChainChange}
    />
  );

  const valoperAddress = useValoperAddress(chainName);

  const Error = ({
    buttonText,
    wordOfWarning,
    onClick,
  }: {
    buttonText: string;
    wordOfWarning?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }) => {
    const bg = useColorModeValue("orange.200", "orange.300");
    // Rest of the Error component
  };

  const { connect, openView, status, username, address, message, wallet } =
    useChain(chainName || "cosmoshub");

  const userInfo = username && (
    <ConnectedUserInfo username={username} icon={<Astronaut />} />
  );

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault();
    await connect();
  };

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault();
    openView();
  };

  const addressButton = (
    <CopyAddressBtn
      walletStatus={status}
      connected={<ConnectedShowAddress address={address} isLoading={false} />}
    />
  );

  const distributionBox = (
    <DistributionBox key={`distribution-${chainName}`} chainName={chainName} />
  );

  const connectWalletButton = (
    <WalletConnectComponent
      walletStatus={status}
      disconnect={
        <Disconnected buttonText="Connect Wallet" onClick={onClickConnect} />
      }
      connecting={<Connecting />}
      connected={
        <Connected buttonText={"My Wallet"} onClick={onClickOpenView} />
      }
      rejected={<Rejected buttonText="Reconnect" onClick={onClickConnect} />}
      error={<Error buttonText="Change Wallet" onClick={onClickOpenView} />}
      notExist={
        <NotExist buttonText="Install Wallet" onClick={onClickOpenView} />
      }
    />
  );

  return (
    <Box w="full" h="full" minH={minHeight}>
      <SimpleLayout
        logo={logo}
        userInfo={userInfo}
        connectWalletButton={connectWalletButton}
        isFullWidth={false}
        children={undefined}
      ></SimpleLayout>
    </Box>
  );
}
