import { Container, Button, Box, Heading, Image, useColorModeValue, Link } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center">
                Hello I'm a Student Programmer from England.
            </Box>

            <Box display={{md: "flex"}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Harry Hopkinson
                    </Heading>
                    <p>Programmer (Game Development, Software Development)</p>
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
                About Me
            </Heading>
            <Paragraph>Harry is a Junior Programmer from England who has a passion for the subject. 
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
        </Section>    
        </Container>
    )
}

export default Page;