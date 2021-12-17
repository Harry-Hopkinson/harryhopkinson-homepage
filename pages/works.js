import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSnowBallBrawl from './works/snowballbrawl.png'
import thumbKingFisherCode from './works/kingfishercode.png'
import thumbBookFlix from './works/bookflix.png'
import thumbNoteBookTODO from './works/notebookTODO.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="https://harry-hopkinson.itch.io/snow-ball-brawl" title="SnowBall Brawl" thumbnail={thumbSnowBallBrawl}>
              SnowBallBrawl - A Two Player Game in which you fight with Snowballs.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="https://github.com/Password-Classified/Kingfisher-Code"
            title="KingFisher Code"
            thumbnail={thumbKingFisherCode}
          >
              A Beginner Level Programming Language Built in Python.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="https://harry-hopkinson.github.io/BookFlix/"
            title="BookFlix"
            thumbnail={thumbBookFlix}
          >
            A Place to Manage, Explore and Review Books from Your Browser.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="https://github.com/Harry-Hopkinson/Notebook-TODO" thumbnail={thumbNoteBookTODO} title="NoteBook TODO">
              A Notebook to Store Ideas and Code Snippets. Can Import Images and Graphs to Help Consolodate Knowledge.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
