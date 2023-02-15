import { SetStateAction, useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Center, Container, Flex, Heading, Link, Stack, StackDivider, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { useCommission } from './queries/commission-query';

export default function DistributionBox() {
  const [activeButton, setActiveButton] = useState('commission');
  const [commission, setCommission] = useState<number | undefined>();
  const commissionValue = useCommission();

  useEffect(() => {
    setCommission(commissionValue);
  }, [commissionValue]);

  const handleButtonClick = (button: SetStateAction<string>) => {
    setActiveButton(button);
  };
  
  return (
    <Container maxW="8xl" py={10} alignContent="center" pt="200px" pr="150px" >
      <Flex alignItems="center" justifyContent="center">
        <Card>
          <CardBody alignContent="center" position="relative" >
            <ButtonGroup paddingBottom="25px" justifyContent="space-between" gap='4'>
              <Button colorScheme="teal" variant="outline" onClick={() => handleButtonClick('commission')}>Commission</Button>
              <Button colorScheme="teal" variant="outline" onClick={() => handleButtonClick('staking')}>Staking</Button>
              <Button colorScheme="teal" variant="outline" onClick={() => handleButtonClick('unjail')}>Unjail</Button>
            </ButtonGroup>
            <Box bgSize='450px'>
              {activeButton === 'commission' && (
                <Card minWidth="600px" padding='40px' pb="40px">
                  <CardHeader>
                    <Heading size='lg'>Claim your commission</Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Claimmable Amount
                        </Heading>
                        <Stat>
                          <StatNumber>{commission}</StatNumber>
                          <StatHelpText>OSMO</StatHelpText>
                        </Stat>
                      </Box>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Validator Address
                        </Heading>
                        <text>
                          Chandra Station
                          (osmovaloper69420abc123easyasdoreme69)
                        </text>
                      </Box>
                      <Box>
                        <Button colorScheme="teal" variant="outline" alignContent="center" >
                          Sign
                        </Button>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              )}

              {activeButton === 'staking' && (
                <Card minWidth="600px" padding='40px' pb="40px">
                <CardHeader>
                  <Heading size='lg'>Claim your staking rewards</Heading>
                </CardHeader>

                <CardBody>
                  <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        Claimmable Amount
                      </Heading>
                      <Stat>
                        <StatNumber>120</StatNumber>
                        <StatHelpText>OSMO</StatHelpText>
                      </Stat>
                    </Box>
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        Validator Address
                      </Heading>
                      <text>
                        Claiming from all your delegations.
                      </text>
                    </Box>
                    <Box>
                      <Button colorScheme="teal" variant="outline" alignContent="center" >
                        Sign
                      </Button>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
              )}

              {activeButton === 'unjail' && (
                <Card minWidth="600px" padding='40px' pb="40px">
                <CardHeader>
                  <Heading size='lg'>Unjail your Validator</Heading>
                </CardHeader>

                <CardBody>
                  <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        Jail Duration
                      </Heading>
                      <Stat>
                        <StatNumber>1,200</StatNumber>
                        <StatHelpText>Blocks</StatHelpText>
                      </Stat>
                    </Box>
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        Validator Address
                      </Heading>
                      <text>
                        Chandra Station
                        (osmovaloper69420abc123easyasdoreme69)
                      </text>
                    </Box>
                    <Box>
                      <Button colorScheme="teal" variant="outline" alignContent="center" >
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