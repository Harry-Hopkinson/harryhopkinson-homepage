import { Container, Box, Heading, Image } from "@chakra-ui/react";
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello I am a Student Programmer whom is in Secondary School.
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
        </Container>
    )
}

export default Page;