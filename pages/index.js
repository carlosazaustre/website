import { Fragment } from "react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { FaEnvelope, FaUser } from "react-icons/fa";
import {
  Container,
  Flex,
  Box,
  Button,
  Heading,
  Text,
  Textarea,
  Link,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";

import { Header, Intro, Book, Footer } from "@/components";
import { getAllFilesFrontMatter } from "@/lib/mdx";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    height: auto;
    max-height: 700px;
    flex-direction: row;
    background-image: url("/assets/carlosazaustre-profile-image-large.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }
`;

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

      <Box bg="gray.100">
        <Container maxW="container.2xl">
          <Flex direction={["column", "column", "row"]} justify="space-between">
            <Box
              bg="white"
              borderRadius="lg"
              p={8}
              my={4}
              mx={1}
              width={["100%", "100%", "455px"]}
            >
              <Heading as="h4" py={2}>
                About
              </Heading>
              <Text py="2">
                ¡Hola! Soy Carlos Azaustre. Llevo desarrollando web desde hace{" "}
                {new Date().getFullYear() - 2011} años.
              </Text>
              <Text py="2">
                He trabajado en varias empresas como Google, IBM y Eventbrite.
              </Text>
              <Text py="2">
                Soy GDE (Google Developer Expert) en Tecnologías Web y Auth0
                Ambassaddor además de divulgador de contenido a través de
                YouTube (¡Dónde ya somos más de 60,000 subs!)
              </Text>
              <NextLink href="/sobre-mi">
                <Link py={4} color="brand.900">
                  Más sobre mi
                </Link>
              </NextLink>
            </Box>

            <Box
              bg="white"
              borderRadius="lg"
              p={8}
              my={4}
              mx={1}
              width={["100%", "100%", "455px"]}
            >
              <Heading as="h4" py={2}>
                Blog
              </Heading>
              {posts.map((post) => (
                <Fragment>
                  <NextLink href={post.slug} key={post.slug}>
                    <a>
                      <Text fontSize="xs" color="gray.400">
                        {post.date}
                      </Text>
                      <Text isTruncated>{post.title}</Text>
                    </a>
                  </NextLink>
                </Fragment>
              ))}
              <NextLink href="/blog">
                <Link py={4} color="brand.900">
                  Ir al Blog
                </Link>
              </NextLink>
            </Box>

            <Box
              bg="white"
              borderRadius="lg"
              p={8}
              my={4}
              mx={1}
              width={["100%", "100%", "455px"]}
            >
              <Heading as="h4" py={2}>
                Contacto
              </Heading>
              <Stack spacing="24px" py={2}>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<FaUser />}
                  />
                  <Input bg="white" placeholder="Tu nombre" type="text" />
                </InputGroup>

                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<FaEnvelope />}
                  />
                  <Input bg="white" placeholder="Tu email" type="email" />
                </InputGroup>

                <Textarea size="lg" placeholder="Deja tu mensaje..."></Textarea>

                <Button
                  colorScheme="secondary"
                  fontFamily="heading"
                  w="100%"
                  type="submit"
                  size="lg"
                >
                  Enviar
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Footer />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("posts");
  const posts = allPosts.slice(0, 3);

  return {
    props: { posts },
  };
}
