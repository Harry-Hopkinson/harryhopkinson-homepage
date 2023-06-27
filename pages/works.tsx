import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbSnowBallBrawl from "./works/snowballbrawl.png";
import codeBoilerplate from "./works/codeBoilerplate.jpg";
import vim from "./works/vim.png";
import astro from "./works/astro.png";
import solid from "./works/solid.png";
import vscodePets from "./works/vscode-pets.png";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 3]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="https://github.com/Harry-Hopkinson/vscode-pets/"
            title="VsCode Pets"
            thumbnail={vscodePets}
          >
            vscode-pets VSCode Extension
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="https://github.com/Harry-Hopkinson/vim-vscode-theme/"
            title="VsCode Gruvbox"
            thumbnail={vim}
          >
            Vim Gruvbox Theme for VsCode
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="https://github.com/Harry-Hopkinson/create-astro-app/"
            title="Create Astro App"
            thumbnail={astro}
          >
            Create Astro App CLI
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="https://github.com/Harry-Hopkinson/create-solid-app/"
            title="Create Solid App"
            thumbnail={solid}
          >
            Create Solid App CLI
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="https://github.com/Harry-Hopkinson/code-boilerplate/"
            title="Code-Boilerplate"
            thumbnail={codeBoilerplate}
          >
            Generates a Hello World Program based on the File
          </WorkGridItem>
        </Section>

        <Section delay={0.8}>
          <WorkGridItem
            id="https://harry-hopkinson.itch.io/snow-ball-brawl"
            title="SnowBall Brawl"
            thumbnail={thumbSnowBallBrawl}
          >
            SnowBallBrawl - A Two Player Game in which you fight with Snowballs.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
