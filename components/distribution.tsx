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
import { useCommission } from "./queries/commission-query";
import { CommissionFetcher } from "./queries/working-commission-query";
import { useToken } from "./queries/token-query";
import { useValoper } from "./queries/validator-query";
import { useDetails } from "./queries/validator-query";
import { useMissedBlocksCounter } from "./queries/slashing-query";
import { useReward } from "./queries/staking-query";
import { ChainName } from "@cosmos-kit/core";

interface DistributionBoxComponentProps {
  chainName: ChainName | undefined;
  valoperAddress: string;
}

export default function DistributionBox({ chainName, valoperAddress }: DistributionBoxComponentProps) {
  const [activeButton, setActiveButton] = useState("commission");
  const [commission, setCommission] = useState<number | undefined>();
  const commissionValue = CommissionFetcher(valoperAddress);
  const token = useToken();
  const moniker = useValoper();
  const details = useDetails();
  const reward = useReward();

  const missedBlocks = useMissedBlocksCounter();

  console.log('distribution',valoperAddress)

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
                        <Heading size="xs" textTransform="uppercase">
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
                          <StatNumber>{moniker}</StatNumber>
                          <StatHelpText>{details}</StatHelpText>
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
                          <StatNumber>{moniker}</StatNumber>
                          <StatHelpText>{details}</StatHelpText>
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
