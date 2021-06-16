import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { Logo } from "../icons/Logo";
import { NavigationLinks } from "../NavigationLinks";

export const PageHeader = () => {
  return (
    <Flex
      justify="space-between"
      direction={["column", "column", "row"]}
      align="center"
      fontFamily="heading"
      fontSize="2xl"
      fontWeight="bold"
    >
      <Flex align="center" p="4">
        <NextLink href="/">
          <a>
            <Flex align="center">
              <Logo size="40px" />
              <Text px="2">Carlos Azaustre</Text>
            </Flex>
          </a>
        </NextLink>
      </Flex>
      <NavigationLinks />
    </Flex>
  );
};
