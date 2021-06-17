import { Box, Flex, Container } from "@chakra-ui/react";

import { Logo } from "./icons/Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <Box as="header" py="10" px={[0, 0, 0, 4]}>
      <Flex
        as="header"
        fontWeight="bold"
        direction={["column", "column", "column", "row"]}
        justify="space-between"
        align="center"
      >
        <h1 title="Desarrollo avaScript Fullstack - Carlos Azaustre">
          <Logo />
        </h1>
        <Navigation />
      </Flex>
    </Box>
  );
};
