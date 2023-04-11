import { SetStateAction, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  StackDivider,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { BsUpload } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

export default function GovernanceBox() {
  const [activeButton, setActiveButton] = useState("submit");

  const handleButtonClick = (button: SetStateAction<string>) => {
    setActiveButton(button);
  };

  const [selectedOption, setSelectedOption] = useState("Options");

  const { colorMode } = useColorMode();

  return (
    <Container maxW="8xl" py={10} alignContent="center" pt="150px" pr="150px">
      <Flex alignItems="center" justifyContent="center">
        <Card bg={colorMode === "dark" ? "#121212" : "white"}>
          <CardBody alignContent="center" position="relative">
            <ButtonGroup
              paddingBottom="25px"
              justifyContent="space-between"
              gap="4"
            >
              <Button
               colorScheme={colorMode === "dark" ? "black" : "white"} variant="ghost"
                onClick={() => handleButtonClick("submit")}
                _hover={{
                    textDecoration: "underline",
                    color: "teal",
                  }}
              >
                Submit
              </Button>
              <Button
                colorScheme={colorMode === "dark" ? "black" : "white"} variant="ghost"
                onClick={() => handleButtonClick("deposit")}
                _hover={{
                    textDecoration: "underline",
                    color: "teal",
                  }}
              >
                Deposit
              </Button>
              <Button
                colorScheme={colorMode === "dark" ? "black" : "white"} variant="ghost"
                onClick={() => handleButtonClick("vote")}
                _hover={{
                    textDecoration: "underline",
                    color: "teal",
                  }}
              >
                Vote
              </Button>
            </ButtonGroup>
            <Box bgSize="450px">
              {activeButton === "submit" && (
                <Card
                bg={colorMode === "dark" ? "#121212" : "white"}
                  minHeight="450px"
                  minWidth="500px"
                  padding="40px"
                  pb="40px"
                >
                  <CardHeader>
                    <Heading size="lg">Submit a proposal</Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <text>
                          Upload any type of proposal and submit it on chain.
                        </text>
                      </Box>
                      <Box>
                        <Button
                          leftIcon={<BsUpload />}
                          colorScheme={colorMode === "light" ? "black" : "white"}
                          variant="outline"                _hover={{
                            textDecoration: "underline",
                            color: "teal",
                          }}
                        >
                          Upload
                        </Button>
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

              {activeButton === "deposit" && (
                <Card
                bg={colorMode === "dark" ? "#121212" : "white"}
                  minHeight="450px"
                  minWidth="500px"
                  maxWidth="500px"
                  padding="40px"
                  pb="40px"
                >
                  <CardHeader>
                    <Heading size="lg">Deposit tokens to a proposal</Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Proposal Number
                        </Heading>
                        <Input htmlSize={4} width="auto" />
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Deposit Amount
                        </Heading>
                        <Input htmlSize={4} width="auto" />
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

              {activeButton === "vote" && (
                <Card
                bg={colorMode === "dark" ? "#121212" : "white"}
                  minHeight="450px"
                  minWidth="500px"
                  padding="40px"
                  pb="40px"
                >
                  <CardHeader>
                    <Heading size="lg">Vote on a proposal</Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Proposal Number
                        </Heading>
                        <Input htmlSize={4} width="auto" />
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Vote Type
                        </Heading>
                        <Menu>
                          <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                          >
                            {selectedOption}
                          </MenuButton>

                          <MenuList
                          
                          >
                            <MenuItem onClick={() => setSelectedOption("Yes")}>
                              Yes
                            </MenuItem>
                            <MenuItem onClick={() => setSelectedOption("No")}>
                              No
                            </MenuItem>
                            <MenuItem
                              onClick={() => setSelectedOption("Abstain")}
                            >
                              Abstain
                            </MenuItem>
                            <MenuItem
                              onClick={() => setSelectedOption("No with veto")}
                            >
                              No with veto
                            </MenuItem>
                          </MenuList>
                        </Menu>
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
