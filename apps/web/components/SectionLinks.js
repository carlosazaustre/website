import NextLink from "next/link";
import styled from "@emotion/styled";
import { UI } from "@czstr/ui";

import sections from "@/data/sections";

const SectionLinkItem = styled(NextLink)`
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
      <UI.Flex direction="row" wrap="wrap" py="4">
        {sections.map(({ name, url }) => (
          <SectionLinkItem key={name} href={url} passHref>
            {name}
          </SectionLinkItem>
        ))}
      </UI.Flex>
    </nav>
  );
};
