import { Container, Heading, Box, Image } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

const Home = () => (
  <Layout title={undefined}>
    <Container position="relative" minHeight="100vh">
      <Box position="relative" zIndex={1} textAlign="center">
        <Heading as="h2" fontSize="6xl" mb={6}>
          Harry Hopkinson
        </Heading>
        <Image
          borderStyle="circle"
          maxWidth="400px"
          display="inline-block"
          borderRadius="full"
          src="/images/computer.PNG"
          alt="Profile image"
        />
        <Box my={4} alignItems={"center"}>
          <NextLink href="/about">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              About Me
            </Button>
          </NextLink>
        </Box>
        <Box my={4} alignItems={"center"}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="linkedin">
              Projects
            </Button>
          </NextLink>
        </Box>
        <Box alignItems={"center"}>
          <NextLink href="/open-source">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Open Source Contributions
            </Button>
          </NextLink>
        </Box>
      </Box>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
