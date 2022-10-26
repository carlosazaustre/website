import styled from "@emotion/styled";

import { Container, Flex } from "./elements";

const StyledFooter = styled.footer`
  background-color: var(--chakra-colors-secondary-900);
  color: var(--chakra-colors-white);
  position: relative;
  overflow: visible;
  z-index: 2;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container maxW="container.2xl">
        <Flex
          py={16}
          w="100%"
          direction="column"
          justify="space-between"
          textAlign="center"
          align="center"
          fontFamily="heading"
          fontSize="sm"
        >
          &copy; {new Date().getFullYear()} Carlos Azaustre | Made with 💻 in 🇪🇸
        </Flex>
      </Container>
    </StyledFooter>
  );
};
