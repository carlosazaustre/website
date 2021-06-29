import { Fragment } from "react";
import styled from "@emotion/styled";

import { getAllFilesFrontMatter } from "@/lib/mdx";
import { orderByDate } from "@/lib/order-by-date";
import {
  elements as UI,
  Header,
  Hero,
  Book,
  Footer,
  AboutCardHome,
  BlogCardHome,
  ContactCardHome,
  OpenGraph,
} from "@/components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 1025px) {
    height: 82vh;
    max-height: 700px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    background-image: url("/assets/carlosazaustre-profile-image-large.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }
`;

export default function Home({ posts }) {
  return (
    <Fragment>
      <OpenGraph />
      <UI.Box bg="brand.900" height="780px">
        <UI.Container maxW="container.2xl">
          <Header />

          <StyledMain role="main">
            <UI.Flex
              direction="column"
              justify="flex-start"
              w={["100%", "100%", "100%", "59%", "35%"]}
              pt="0"
              pr="0"
              pb="2"
              pl={[0, 0, 0, 8]}
            >
              <Hero />
            </UI.Flex>
            <UI.Flex
              direction="row"
              w={["100%", "100%", "100%", "39%", "60%"]}
              justify={["center", "center", "center", "center", "flex-start"]}
            >
              <a href="https://www.amazon.com/-/es/Carlos-Azaustre/dp/B08TZ3HSYZ/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1619807979&sr=8-1">
                <Book imageSrc="/assets/aprendiendo-javascript-libro.png" />
              </a>
            </UI.Flex>
          </StyledMain>
        </UI.Container>
      </UI.Box>

      <UI.Box bg="grayblue.900">
        <UI.Container maxW="container.2xl" px={[0, 4]}>
          <UI.Flex
            direction={["column", "column", "column", "row"]}
            justify="space-between"
          >
            <AboutCardHome />
            <BlogCardHome posts={posts} />
            <ContactCardHome />
          </UI.Flex>
        </UI.Container>
      </UI.Box>

      <Footer />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("posts");
  const posts = allPosts.sort(orderByDate).slice(0, 5);

  return {
    props: { posts },
  };
}
