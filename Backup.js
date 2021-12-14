import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section';

import { snowballbrawl } from '../public/images/works/snowballbrawl.PNG';
import { bookflix } from "../public/images/works/bookflix.png";
import { kingfishercode } from "../public/images/works/kingfishercode.PNG";
import { noteBookTODO } from "../public/images/works/notebookTODO.PNG";


const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 2, 3]} gap={6}>
                <Section>
                    <WorkGridItem id="snow-ball-brawl" title="Snow Ball Brawl" thumbnail={snowballbrawl}>
                        SnowBallBrawl - A Two Player Game in which you fight with Snowballs.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="kingfisher-code" title="Kingfisher Code" thumbnail={kingfishercode}>
                        A Beginner Level Programming Language Built in Python.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="booflix" title="BookFlix" thumbnail={bookflix}>
                        A Place to Manage, Explore and Review Books from Your Browser.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="notebook-todo" title="NoteBook Todo" thumbnail={noteBookTODO}>
                        A Notebook to Store Ideas and Code Snippets. Can Import Images and Graphs to Help Consolodate Knowledge.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;