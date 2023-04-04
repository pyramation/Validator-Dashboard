import {
    Box,
    Text,
    Center,
    IconButton,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useColorMode,
    Heading,
  } from "@chakra-ui/react";
  import { InfoOutlineIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  
  export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const { colorMode } = useColorMode();
  
    return (
      <Center py={200} h="100%" w="100%">
        <Box
          alignItems="center"
          justifyContent="start"
          bg={colorMode === "dark" ? "black" : "white"}
          p={4}
          borderRadius="md"
          position="relative"
          onMouseEnter={() => setIsButtonVisible(true)}
          onMouseLeave={() => setIsButtonVisible(false)}
        >
          <IconButton
            icon={<InfoOutlineIcon />}
            aria-label="Open Info Modal"
            position="absolute"
            top={0}
            right={-2}
            display={isButtonVisible ? "block" : "none"}
            onClick={onOpen}
          />
          <Heading 
          as="h1"
          fontFamily="Futura MD BT"
          lineHeight="1.36"
          fontWeight="medium"
          letterSpacing="0.1em"
          fontSize="4xl" textAlign="center">
            Validator Dashboard by Chandra Station
          </Heading>
          <Text pt={4} fontSize="3xl" textAlign="center">
            A dashboard built to help you manage your validator without the cli.
          </Text>
        </Box>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
          bg={colorMode === "dark" ? "black" : "white"}
          >
            <ModalHeader>Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Add your modal content here */}
              <Text>To begin using this application connect your wallet with any of the wallet providers by clicking the connect wallet button on the bottom left in the  side bar. 
              <Text>After connecting your wallet, your profile will appear above the `connect wallet button` showing you which network you are connected to, which validator account
              </Text>you are using (if there is one for your connected key), and your validators logo. You can change your selected network with the drop down menu in the top right. 
              <Text/>
              </Text>
              <Text>
            </Text>
            <Text>Now you are ready to start using the app. The Governance box contains various  governance related functions and distributionis for claiming comission/staking rewards.</Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
    );
    }
    