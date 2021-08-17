import NextLink from "next/link";
import styled from "@emotion/styled";

import sections from "@/data/sections";
import { Flex } from "./elements";

const SectionLinkItem = styled.a`
  font-family: var(--chakra-fonts-heading);
  font-size: var(--chakra-fontSizes-xs);
  text-decoration: none;
  color: var(--chakra-colors-black);
  padding: var(--chakra-space-4);
  margin: 0 auto;
  border-radius: var(--chakra-radii-2xl);
  transition: background var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);

  &:hover {
    background-color: var(--chakra-colors-white);
  }

  @media screen and (min-width: 360px) {
    font-size: var(--chakra-fontSizes-sm);
  }

  @media screen and (min-width: 700px) {
    font-size: var(--chakra-fontSizes-sm);
    margin: 0 var(--chakra-space-4);
  }

  @media screen and (min-width: 1023px) {
    font-size: var(--chakra-fontSizes-xl);
  }

  @media screen and (min-width: 1439px) {
    font-size: var(--chakra-fontSizes-2xl);
  }
`;

export const SectionLinks = () => {
  return (
    <nav>
      <Flex direction="row" wrap="wrap">
        {sections.map(({ name, url }) => (
          <NextLink key={name} href={url} passHref>
            <SectionLinkItem>{name}</SectionLinkItem>
          </NextLink>
        ))}
      </Flex>
    </nav>
  );
};
