import { Container } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import { Text } from "@chakra-ui/react";

import vscodePets from "./works/vscode-pets2.png";
import prettier from "./works/prettier.png";
import spacedrive from "./works/spacedrive.png";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Text
        mt={2}
        fontSize={20}
        mb={5}
        textAlign="center"
        fontWeight={"bold"}
        fontFamily={"heading"}
        color={"white"}
      >
        Open Source Contributions
      </Text>

      <Section delay={0.1}>
        <WorkGridItem
          id="https://github.com/tonybaloney/vscode-pets/commits?author=Harry-Hopkinson"
          title="VsCode Pets"
          thumbnail={vscodePets}
        >
          Second lead Developer of vscode-pets VSCode Extension
        </WorkGridItem>
      </Section>
      <Section delay={0.2}>
        <WorkGridItem
          id="https://github.com/prettier/prettier/commits?author=Harry-Hopkinson"
          title="Prettier"
          thumbnail={prettier}
        >
          Four Merged Pull Request for Prettier
        </WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem
          id="https://github.com/spacedriveapp/spacedrive/commits?author=Harry-Hopkinson"
          title="SpaceDrive"
          thumbnail={spacedrive}
        >
          Five Merged Pull Request for SpaceDrive
        </WorkGridItem>
      </Section>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
