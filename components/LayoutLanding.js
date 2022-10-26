import styled from "@emotion/styled";

import { Box, Container } from "./elements";
import { OpenGraph } from "./OpenGraph";
import { SectionLinks } from "./SectionLinks";
import { Footer } from "./Footer";

export const LayoutLanding = ({ children, metadata = {} }) => {
  return (
    <Box
      bg="secondary.900"
      borderTop="8px solid"
      borderColor="brand.900"
      color="white"
    >
      <OpenGraph metadata={metadata} />
      <Container maxW="container.md" pt="8">
        <SectionLinks />
        {children}
        <Footer />
      </Container>
    </Box>
  );
};
