import NextLink from "next/link";
import styled from "@emotion/styled";

import sections from "@/data/sections";
import { Flex } from "./elements";

const NavigationLink = styled.a`
  font-family: var(--chakra-fonts-heading);
  font-size: var(--chakra-fontSizes-sm);
  text-decoration: none;
  color: var(--chakra-colors-black);
  padding: var(--chakra-space-4);
  margin: 0 var(--chakra-space-2);
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
    margin: 0 var(--chakra-space-4);
  }

  @media screen and (min-width: 1024px) {
    font-size: var(--chakra-fontSizes-2xl);
  }
`;

export const NavigationLinks = () => {
  return (
    <nav>
      <Flex direction="row">
        {sections.map(({ name, url }) => (
          <NextLink key={name} href={url} passHref>
            <NavigationLink>{name}</NavigationLink>
          </NextLink>
        ))}
      </Flex>
    </nav>
  );
};
