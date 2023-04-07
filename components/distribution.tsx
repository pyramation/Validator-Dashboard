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
import { useToken } from "./queries/token-query";
import { useValidatorData } from "./queries/validator-query";
import { useMissedBlocksCounter } from "./queries/slashing-query";
import { useReward } from "./queries/staking-query";
import { ChainName } from "@cosmos-kit/core";
import { useValoperAddress } from "./queries/get-valoper";

interface DistributionBoxComponentProps {
  chainName: ChainName | undefined;
}

export default function DistributionBox({ chainName }: DistributionBoxComponentProps) {
  const [activeButton, setActiveButton] = useState("commission");
  const [commission, setCommission] = useState<number | undefined>(0);
  const commissionValue = CommissionFetcher(chainName);
  const token = useToken();
  const validatorInfo = useValidatorData(chainName);
  const reward = useReward();
  const valoperAddress =useValoperAddress(chainName);

  const missedBlocks = useMissedBlocksCounter();


  useEffect(() => {
    if (commissionValue !== undefined) {
      setCommission(commissionValue);
    }
  }, [commissionValue, chainName, validatorInfo, token, reward, valoperAddress, missedBlocks]);


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
      pt="200px"
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
                        <Heading fontFamily="Futura" size="md" >
                          Claimmable Amount
                        </Heading>
                        <Stat>
                          <StatNumber>{commission}</StatNumber>
                          <StatHelpText>{token}</StatHelpText>
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
                          colorScheme={colorMode === "light" ? "black" : "white"}
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
      <Stack divider={<StackDivider />} spacing="4"> {/* Add this Stack component */}
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
             colorScheme={colorMode === "light" ? "black" : "white"}
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
                          colorScheme={colorMode === "light" ? "black" : "white"}
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
