import { SetStateAction, useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  StackDivider,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorMode,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { CommissionFetcher } from "./queries/working-commission-query";
import { useValidatorData } from "./queries/validator-query";
import { useMissedBlocksCounter } from "./queries/slashing-query";
import { useReward } from "./queries/staking-query";
import { ChainName } from "@cosmos-kit/core";
import { useValoperAddress } from "./queries/get-valoper";
import { commissionTX } from "./services/distribution-tx";
import { SigningStargateClient } from "@cosmjs/stargate";
import { useChain } from "@cosmos-kit/react";
import { Spinner, CheckboxIcon } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { chains } from "chain-registry";


interface DistributionBoxComponentProps {
  chainName: ChainName | undefined;
}

export default function DistributionBox({
  chainName,
}: DistributionBoxComponentProps) {
  const { getSigningStargateClient, address } =
  useChain(chainName ?? "");
  const [resp, setResp] = useState('');
  const [activeButton, setActiveButton] = useState("commission");
  const [commission, setCommission] = useState<number | undefined>(0);
  const commissionValue = CommissionFetcher(chainName ?? "");
  const chainInfo = chains.find(({ chain_name }) => chain_name === chainName);
  const token = chainInfo?.staking?.staking_tokens?.[0]?.denom.slice(1) ?? "";
  const validatorInfo = useValidatorData(chainName ?? "");
  const reward = useReward();
  const valoperAddress = useValoperAddress(chainName);

  const missedBlocks = useMissedBlocksCounter(chainName, valoperAddress)?? "";

  useEffect(() => {
    if (missedBlocks !== undefined) {
    }
  }, [missedBlocks]);
  
  const [isSigning, setIsSigning] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const handleCommissionTX = async (event: React.MouseEvent) => {
    event.preventDefault();
    setIsSigning(true);
    setIsError(false);
    try {
      await commissionTX(
        getSigningStargateClient,
        setResp,
        chainName,
        address,
        valoperAddress
      )(event);
      setIsSigning(false);
      setIsSigned(true);
      setTimeout(() => setIsSigned(false), 3000); // Reset the checkmark after 5 seconds
    } catch (error) {
      setIsSigning(false);
      setIsError(true);
      setTimeout(() => setIsError(false), 3000); // Reset the error state after 5 seconds
    }
  };
  
  
  
  useEffect(() => {
    if (commissionValue !== undefined) {
      setCommission(commissionValue);
    }
  }, [
    commissionValue,
    chainName,
    validatorInfo,
    token,
    reward,
    valoperAddress,
    missedBlocks,
  ]);

  const handleButtonClick = (button: SetStateAction<string>) => {
    setActiveButton(button);
  };

  const { colorMode } = useColorMode();

  return (
    <Container
      bg={colorMode === "dark" ? "rgba(0, 0, 0, 0.9)" : "white"}
      maxW="820"
      minW="820"
      py={10}
      alignContent="center"
      pt="150px"
      pr="200px"
    >
      <Flex
        bg={colorMode === "dark" ? "rgba(0, 0, 0, 0.9)" : "white"}
        alignItems="center"
        justifyContent="center"
      >
        <Card width="820px" bg={colorMode === "dark" ? "#121212" : "white"}>
          <CardBody alignContent="center" position="relative">
            <ButtonGroup
              paddingBottom="25px"
              justifyContent="space-between"
              gap="4"
            >
              <Button
                fontSize="20px"
                colorScheme={colorMode === "dark" ? "black" : "white"}
                variant="ghost"
                onClick={() => handleButtonClick("commission")}
                _hover={{
                  textDecoration: "underline",
                  color: "teal",
                }}
              >
                Commission
              </Button>
              <Button
                fontSize="20px"
                colorScheme={colorMode === "dark" ? "black" : "white"}
                variant="ghost"
                onClick={() => handleButtonClick("staking")}
                _hover={{
                  textDecoration: "underline",
                  color: "teal",
                }}
              >
                Staking
              </Button>
              <Button
                fontSize="20px"
                colorScheme={colorMode === "dark" ? "black" : "white"}
                variant="ghost"
                onClick={() => handleButtonClick("unjail")}
                _hover={{
                  textDecoration: "underline",
                  color: "teal",
                }}
              >
                Unjail
              </Button>
            </ButtonGroup>
            <Box bg={colorMode === "dark" ? "#121212" : "white"} bgSize="450px">
              {activeButton === "commission" && (
                <Card
                  key={chainName}
                  bg={colorMode === "dark" ? "#121212" : "white"}
                  minWidth="500px"
                  padding="40px"
                  pb="40px"
                >
                  <CardHeader>
                    <Heading size="lg">Claim your commission</Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Heading fontFamily="Futura" size="md">
                          Claimmable Amount
                        </Heading>
                        <Stat>
                          <StatNumber>{commission}</StatNumber>
                          <StatHelpText
  fontSize="20"
  fontWeight="bold"
>${token.toUpperCase()}</StatHelpText>
                        </Stat>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Validator
                        </Heading>
                        <Stat>
                          <StatNumber>{validatorInfo.moniker}</StatNumber>
                          <StatHelpText>{validatorInfo.details}</StatHelpText>
                        </Stat>
                      </Box>
                      
                      <Box>
                      <Button
                      onClick={(event) => handleCommissionTX(event)}
  colorScheme={colorMode === "light" ? "black" : "white"}
  variant="outline"
  alignContent="center"
  _hover={{
    textDecoration: "underline",
    color: "teal",
  }}
>
{isSigning ? (
    <Spinner size="xs" />
  ) : isSigned ? (
    <CloseIcon />
  ) : isError ? (
    <CheckIcon />
  ) : (
    "Sign"
  )}
</Button>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              )}

              {activeButton === "staking" && (
                <Card
                  bg={colorMode === "dark" ? "#121212" : "white"}
                  minWidth="500px"
                  padding="40px"
                  pb="40px"
                >
                  <CardHeader>
                    <Heading size="lg">Claim your staking rewards</Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      {" "}
                      {/* Add this Stack component */}
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Claimmable Amount
                        </Heading>
                        <Stat>
                          <StatNumber>{reward}</StatNumber>
                          <StatHelpText>{token}</StatHelpText>
                        </Stat>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Validator Address
                        </Heading>
                        <text>
                          Claiming your rewards from your delegations to all
                          validators.
                        </text>
                      </Box>
                      <Box>
                        <Button
                          colorScheme={
                            colorMode === "light" ? "black" : "white"
                          }
                          variant="outline"
                          alignContent="center"
                          _hover={{
                            textDecoration: "underline",
                            color: "teal",
                          }}
                        >
                          Sign
                        </Button>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              )}

              {activeButton === "unjail" && (
                <Card
                  bg={colorMode === "dark" ? "#121212" : "white"}
                  minWidth="500px"
                  padding="40px"
                  pb="40px"
                >
                  <CardHeader>
                    <Heading size="lg">Unjail your Validator</Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Missed Blocks
                        </Heading>
                        <Stat>
                          <StatNumber>{missedBlocks}</StatNumber>
                          <StatHelpText>Blocks</StatHelpText>
                        </Stat>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Jail Status
                        </Heading>
                        <Stat>
                          <StatNumber>false</StatNumber>
                        </Stat>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Validator
                        </Heading>
                        <Stat>
                          <StatNumber>{validatorInfo.moniker}</StatNumber>
                          <StatHelpText>{validatorInfo.details}</StatHelpText>
                        </Stat>
                      </Box>
                      <Box>
                        <Button
                          colorScheme={
                            colorMode === "light" ? "black" : "white"
                          }
                          variant="outline"
                          alignContent="center"
                          _hover={{
                            textDecoration: "underline",
                            color: "teal",
                          }}
                        >
                          Sign
                        </Button>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              )}
            </Box>
          </CardBody>
        </Card>
      </Flex>
    </Container>
  );
}
