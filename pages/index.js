import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio.ts'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a developer based in England!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Harry Hopkinson
          </Heading>
          <p>Software and Game Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/harry.PNG"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
            Harry is a Junior Programmer from England who has a passion for the subject. 
            He loves coding and has dabbled in all sorts of programming languages. 
            His favourites are Python, Javascript/Typescript, Java and C#. 
            Currently he is in education at Secondary School.
            He is coding many projects which you can find on his Github.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>       
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>2006</BioYear>
                Born near London, England
            </BioSection>
            <BioSection>
                <BioYear>2015</BioYear>
                Started Programming in Scratch and building very basic games during Primary School.
            </BioSection>
            <BioSection>
                <BioYear>2018</BioYear>
                Programming in Python and started using Unity for Game Design.
            </BioSection>
            <BioSection>
                <BioYear>2019</BioYear>
                Advance programming in Python. Using as main language for my projects.
            </BioSection>
            <BioSection>
                <BioYear>2020</BioYear>
                Learnt Java and C# for building applications and more Game Design. Check out some of my old Unity Projects on my Github.
                Released a game called SnowBallBrawl on Itch.io built using Unity.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Website Development using Javascript, Typescript and multiple frameworks such as React. Multiple projects in Python.
            </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Software, Web and Game Development...
        </Paragraph>
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
)

export default Home
export { getServerSideProps } from "../components/chakra.tsx"