import Link from "next/link";
import styled from "@emotion/styled";
import { Container, Flex, Box } from "@chakra-ui/react";

import { Header, Intro, Book, Footer } from "@/components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    height: 82vh;
    flex-direction: row;
    background-image: url("/assets/carlosazaustre-profile-image-large.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }
`;

export default function Home() {
  return (
    <>
      <Box bg="brand.900">
        <Container maxW="container.2xl">
          <Header />
          <StyledMain role="main">
            <Flex
              direction="column"
              justify="space-between"
              w={["100%", "100%", "100%", "35%"]}
              pt="0"
              pr="0"
              pb="2"
              pl="6"
            >
              <Intro />
            </Flex>
            <Flex
              direction="row"
              w={["100%", "100%", "100%", "65%"]}
              justify={["center", "flex-start"]}
            >
              <Link href="https://www.amazon.com/-/es/Carlos-Azaustre/dp/B08TZ3HSYZ/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1619807979&sr=8-1">
                <Book imageSrc="/assets/aprendiendo-javascript-libro.png" />
              </Link>
            </Flex>
          </StyledMain>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
