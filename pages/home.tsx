import { Container, Heading, Text } from '@chakra-ui/react';
import Header from '../components/header'

export default function Home() {
  return (
    <>
      <Header />
      <Container alignContent="center" pt="200px" pr="150px">
        <Heading>
          <Text fontSize="5xl" size="md">
            A Dashboard built to help you claim your commission and participate in governance without the cli.
          </Text>
        </Heading>
      </Container>
    </>
  );
}