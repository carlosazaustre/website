import styled from "@emotion/styled";
import { HStack } from "@chakra-ui/react";
import NextLink from "next/link";

const NavigationLink = styled.a`
  font-family: var(--chakra-fonts-heading);
  font-size: var(--chakra-fontSizes-sm);
  text-decoration: none;
  color: var(--chakra-colors-black);
  padding: var(--chakra-space-4);
  border-radius: var(--chakra-radii-2xl);
  transition: background var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);

  &:hover {
    background-color: var(--chakra-colors-white);
  }

  @media screen and (min-width: 360) {
    font-size: var(--chakra-fontSizes-lg);
  }

  @media screen and (min-width: 700px) {
    font-size: var(--chakra-fontSizes-xl);
  }

  @media screen and (min-width: 1024px) {
    font-size: var(--chakra-fontSizes-2xl);
  }
`;

export const NavigationLinks = () => {
  return (
    <nav>
      <HStack spacing="24px">
        <NextLink href="/blog" passHref>
          <NavigationLink>Blog</NavigationLink>
        </NextLink>

        <NextLink href="/sobre-mi" passHref>
          <NavigationLink>About</NavigationLink>
        </NextLink>

        <NextLink href="/mentoria" passHref>
          <NavigationLink>Mentoría</NavigationLink>
        </NextLink>

        <NextLink href="/cursos" passHref>
          <NavigationLink>Cursos</NavigationLink>
        </NextLink>
      </HStack>
    </nav>
  );
};
