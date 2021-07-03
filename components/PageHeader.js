import NextLink from "next/link";

import { Flex, Text } from "./elements";
import { Logo } from "./Logo";
import { SectionLinks } from "./SectionLinks";

export const PageHeader = () => {
  return (
    <Flex
      justify="space-between"
      direction={["column", "column", "row"]}
      align="center"
      fontFamily="heading"
      fontSize="2xl"
      fontWeight="bold"
      px={4}
      pt={8}
      pb={2}
      mb={8}
    >
      <NextLink href="/">
        <a>
          <Flex align="center">
            <Logo size="40px" />
            <Text fontSize={["sm", "sm", "lg", "xl"]} px="2">
              Carlos Azaustre
            </Text>
          </Flex>
        </a>
      </NextLink>
      <SectionLinks />
    </Flex>
  );
};
