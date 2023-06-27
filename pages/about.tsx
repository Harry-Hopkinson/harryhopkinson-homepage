import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { IoLogoGithub } from "react-icons/io5";

const Home = () => (
  <Layout title={undefined}>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        Hello, I&apos;m a 16 year old developer based in England
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Harry Hopkinson
          </Heading>
          <p>Software, Game and Web Development</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderStyle="circle"
            maxWidth="175px"
            display="inline-block"
            borderRadius="full"
            src="/images/computer.PNG"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work and Experience
        </Heading>
        <Paragraph>
          I am a Junior Programmer from Watton at Stone with experience of
          languages such as Python and Javascript/Typescript and most recently I
          am learning C++.
        </Paragraph>
        <Paragraph>
          My interests include Software, Web and Game Development and my future
          aspirations include becoming a Software Engineer and developing
          artificial intelligence and machine learning.
        </Paragraph>
        <Box my={4} alignItems={"center"}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2015</BioYear>
          Started Programming in Scratch and building very basic games during
          Primary School.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Programming in Python and started using Unity for Game Design.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Advanced at programming in Python. Using as main language for my
          projects.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Head Teacher's Award for completing 150 Python Challenges within two
          month's period (target set by teacher was three years).
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Learnt Java and C# for building applications and more Game Design.
          Check out some of my old Unity Projects on my Github. Released a game
          called SnowBallBrawl on Itch.io built using Unity and C#.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Website Development using Javascript, Typescript and multiple
          frameworks such as React and NextJs. Multiple projects in Python.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Won the United Kingdom 🇬🇧 2022 Raspberry PI Competition, refer to the
          Projects Page.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Contributed to multiple large Github Codebases such as Prettier,
          VSCode, Lichess and Spacedrive.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Currently competing in the Amazon Alexa Young Innovator Challenge 2022
          with a Project in Javascript to develop a "Skill for Good".
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Contributing to VsCode Pets and other Open Source Projects.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Harry-Hopkinson" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Harry-Hopkinson
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
