import NextLink from "next/link";
import styled from "@emotion/styled";

import { Logo } from "./Logo";
import {
  IconTwitch,
  IconYoutube,
  IconInstagram,
  IconTwitter,
  IconGithub,
  IconTiktok,
} from "./icons";
import {
  Container,
  Flex,
  Text,
  Spacer,
  Link,
  UnorderedList,
  ListItem,
  Heading,
} from "./elements";

const StyledFooter = styled.footer`
  background-color: var(--chakra-colors-secondary-900);
  color: var(--chakra-colors-white);
  position: relative;
  z-index: 2;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container maxW="container.2xl">
        <Flex
          px={16}
          py={8}
          w="100%"
          direction={["column", "column", "column", "row"]}
          justify="space-between"
          textAlign={["center", "center", "center", "left"]}
          align={["center", "center", "center", "flex-start"]}
        >
          <Flex
            w={["60%", "60%", "60%", "25%"]}
            justify={["center", "center", "center", "flex-start"]}
            align={["center", "center", "center", "flex-start"]}
            direction="column"
            textAlign={["center", "center", "center", "left"]}
          >
            <NextLink href="/">
              <a>
                <Flex
                  align="center"
                  justify={["center", "center", "center", "flex-start"]}
                  my={4}
                  ml={8}
                  minWidth="300px"
                >
                  <Logo size="40px" />
                  <Text
                    fontFamily="heading"
                    fontSize={["sm", "sm", "lg", "xl"]}
                    fontWeight="bold"
                    px="2"
                  >
                    Carlos Azaustre
                  </Text>
                </Flex>
              </a>
            </NextLink>
            <Flex
              justify="space-around"
              direction="row"
              w={["100%", "80%", "60%", "100%"]}
            >
              <Link href="https://youtube.com/carlosazaustre?sub_confirmation=1">
                <IconYoutube size="20px" />
              </Link>
              <Spacer />
              <Link href="https://twitch.tv/carlosazaustre">
                <IconTwitch size="20px" />
              </Link>
              <Spacer />
              <Link href="https://instagram.com/carlosazaustre">
                <IconInstagram size="20px" />
              </Link>
              <Spacer />
              <Link href="https://twitter.com/carlosazaustre">
                <IconTwitter size="20px" />
              </Link>
              <Spacer />
              <Link href="https://github.com/carlosazaustre">
                <IconGithub size="20px" />
              </Link>
              <Spacer />
              <Link href="https://tiktok.com/@carlosazaustre">
                <IconTiktok size="20px" />
              </Link>
            </Flex>
          </Flex>

          <section>
            <Heading as="h4" size="sm" p="4">
              Páginas
            </Heading>
            <UnorderedList styleType="none">
              <ListItem>
                <NextLink href="/rss.xml">
                  <Link>RSS</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/">
                  <Link>Home</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/p/mentoria">
                  <Link>Mentoría</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/p/sobre-mi">
                  <Link>Sobre mi</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/blog">
                  <Link>Blog</Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </section>

          <section>
            <Heading as="h4" size="sm" p="4">
              Recursos
            </Heading>
            <UnorderedList styleType="none">
              <ListItem>
                <NextLink href="/libros/aprendiendo-javascript">
                  <Link>Aprende JavaScript desde cero</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <ListItem>
                  <NextLink href="/cursos/programacion-javascript">
                    <Link>Curso de JavaScript Gratis</Link>
                  </NextLink>
                </ListItem>
                <NextLink href="/cursos/nodejs-gratis">
                  <Link>Curso Node.js Gratis</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/cursos/vue-gratis">
                  <Link>Curso de Vue.js Gratis</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/cursos/rust-primeros-pasos">
                  <Link>Aprende Rust desde cero</Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </section>

          <section>
            <Heading as="h4" size="sm" p="4">
              Legal
            </Heading>
            <UnorderedList styleType="none">
              <ListItem>
                <Link href="/privacidad">
                  <a>Política de Privacidad</a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/cookies">
                  <a>Política de Cookies</a>
                </Link>
              </ListItem>
            </UnorderedList>
          </section>
        </Flex>
      </Container>
    </StyledFooter>
  );
};
