import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item'

import { thumbSnowballBrawl } from '../public/images/works/snowballbrawl.PNG';
import { thumbBookflix } from "../public/images/works/bookflix.png";
import { thumbKingfisherCode } from "../public/images/works/kingfishercode.PNG";
import { thumbNoteBookTODO } from "../public/images/works/notebookTODO.PNG";

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 2, 3]} gap={6}>
                <Section>
                    <WorkGridItem id="snow-ball-brawl" href="https://harry-hopkinson.itch.io/snow-ball-brawl" title="Snow Ball Brawl" thumbnail={thumbSnowballBrawl}>
                        SnowBallBrawl - A Two Player Game in which you fight with Snowballs.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="kingfisher-code" href="https://github.com/Password-Classified/Kingfisher-Code" title="Kingfisher Code" thumbnail={thumbKingfisherCode}>
                        A Beginner Level Programming Language Built in Python.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="booflix" title="BookFlix" href="https://harry-hopkinson.github.io/BookFlix/" thumbnail={thumbBookflix}>
                        A Place to Manage, Explore and Review Books from Your Browser.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="notebook-todo" title="NoteBook Todo" href="https://github.com/Harry-Hopkinson/Notebook-TODO" thumbnail={thumbNoteBookTODO}>
                        A Notebook to Store Ideas and Code Snippets. Can Import Images and Graphs to Help Consolodate Knowledge.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works;