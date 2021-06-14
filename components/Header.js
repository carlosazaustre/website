import { Box, Flex, Container } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <Box as="header" py="10" px="4">
      <Flex
        as="header"
        fontWeight="bold"
        direction={["column", "column", "column", "row"]}
        justify="space-between"
        align="center"
      >
        <h1 title="Formador y Desarrollador Web JavaScript Fullstack - Carlos Azaustre">
          <Logo />
        </h1>
        <Navigation />
      </Flex>
    </Box>
  );
};
