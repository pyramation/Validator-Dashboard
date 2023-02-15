import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  Flex,
  Icon,
  useColorMode,
  Spacer,
  VStack,
  ButtonGroup,
  Link
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { WalletSection } from '../components';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();


  return (
        <Container left="0" right="0" margin="auto" maxW="8xl" py={10} position="absolute" >
                <Flex minWidth='max-content' justifyContent='space-between' gap='2'>
                    <Box alignContent="stretch" p='2'>
                        <Heading size='lg'>
                            Validator Dashboard
                        </Heading>
                        <Text fontSize="2xl" >
                            Make validating simple
                        </Text>
            <Spacer padding="10px" />            
                    <Box  >    
                        <Button colorScheme="teal" variant="outline" px={0} onClick={toggleColorMode}>
                        <Icon as={colorMode === 'light' ? BsFillMoonStarsFill : BsFillSunFill}/>
                        </Button>
                    </Box>
                    </Box>
            <Spacer />
                    <Box alignContent="stretch" p="2">
                <VStack>
                    <ButtonGroup gap='4' p='2'>
                    <Button colorScheme="teal" variant="outline" as="a" href="/home" fontSize="1xl">
                    Home
                    </Button>
                    <Button colorScheme="teal" variant="outline" as="a" href="/distribution" fontSize="1xl">
                    Distribution
                    </Button>
                    <Button colorScheme="teal" variant="outline" as="a" href="/governance" fontSize="1xl">
                    Governance
                    </Button>

                    </ButtonGroup>
                    <Box padding='10px'>
                        <WalletSection></WalletSection>
                    </Box>
                </VStack>
                </Box>
            </Flex>
        </Container>
    );
}
