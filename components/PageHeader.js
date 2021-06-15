import { Flex, Text } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";

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
        <Logo size="40px" />
        <Text px="2">Carlos Azaustre</Text>
      </Flex>
      <NavigationLinks />
    </Flex>
  );
};
