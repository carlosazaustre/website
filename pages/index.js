import { Fragment } from "react";
import styled from "@emotion/styled";

import { getAllFilesFrontMatter } from "@/lib/mdx";
import {
  Header,
  Hero,
  Book,
  Footer,
  AboutCardHome,
  BlogCardHome,
  ContactCardHome,
  elements,
} from "@/components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1025px) {
    height: 82vh;
    max-height: 700px;
    flex-direction: row;
    background-image: url("/assets/carlosazaustre-profile-image-large.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }
`;

const { Container, Flex, Box, Link } = elements;

export default function Home({ posts }) {
  return (
    <Fragment>
      <Box bg="brand.900">
        <Container maxW="container.2xl">
          <Header />

          <StyledMain role="main">
            <Flex
              direction="column"
              justify="flex-start"
              w={["100%", "100%", "100%", "100%", "35%"]}
              pt="0"
              pr="0"
              pb="2"
              pl={[0, 0, 0, 0, 8]}
            >
              <Hero />
            </Flex>
            <Flex
              direction="row"
              w={["100%", "100%", "100%", "100%", "65%"]}
              justify={["center", "center", "center", "center", "flex-start"]}
            >
              <Link href="https://www.amazon.com/-/es/Carlos-Azaustre/dp/B08TZ3HSYZ/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1619807979&sr=8-1">
                <Book imageSrc="/assets/aprendiendo-javascript-libro.png" />
              </Link>
            </Flex>
          </StyledMain>
        </Container>
      </Box>

      <Box bg="gray.100">
        <Container maxW="container.2xl">
          <Flex
            direction={["column", "column", "column", "row"]}
            justify="space-between"
          >
            <AboutCardHome />
            <BlogCardHome posts={posts} />
            <ContactCardHome />
          </Flex>
        </Container>
      </Box>

      <Footer />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("posts");
  const posts = allPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return {
    props: { posts },
  };
}
