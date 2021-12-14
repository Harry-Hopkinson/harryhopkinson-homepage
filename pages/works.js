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
        </Container>
    )
}

export default Works;