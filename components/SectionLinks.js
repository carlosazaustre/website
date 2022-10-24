import NextLink from "next/link";
import styled from "@emotion/styled";

import sections from "@/data/sections";
import { Flex } from "./elements";

const SectionLinkItem = styled.a`
  font-family: var(--chakra-fonts-heading);
  font-size: var(--chakra-fontSizes-sm);
  text-decoration: none;
  color: var(--chakra-colors-white);
  padding-right: var(--chakra-space-8);
  border-radius: var(--chakra-radii-2xl);
  transition: color var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);

  &:hover {
    text-decoration: underline;
    color: var(--chakra-colors-brand-900);
  }
`;

export const SectionLinks = () => {
  return (
    <nav>
      <Flex direction="row" wrap="wrap" py="4">
        {sections.map(({ name, url }) => (
          <NextLink key={name} href={url} passHref>
            <SectionLinkItem>{name}</SectionLinkItem>
          </NextLink>
        ))}
      </Flex>
    </nav>
  );
};
