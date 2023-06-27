import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Harry's homepage" />
        <meta name="author" content="Harry Hopkinson" />
        <meta name="author" content="harry-hopkinson" />
        <link
          rel="shortcut icon"
          href="/images/computer.PNG"
          type="image/x-icon"
        />
        <title>Harry Hopkinson</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
