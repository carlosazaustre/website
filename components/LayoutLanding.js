import styled from "@emotion/styled";

import { Box, Container } from "./elements";
import { OpenGraph } from "./OpenGraph";
import { PageHeader } from "./PageHeader";
import { Footer } from "./Footer";

const Circle = styled.div`
  display: hidden;

  @media screen and (min-width: 767px) {
    display: block;
    border-radius: 50%;
    background: var(--chakra-colors-brand-900);
    width: 300px;
    height: 300px;
    position: absolute;
    right: ${(props) => props.right && "-15%"};
    bottom: ${(props) => props.left && "-10rem"};
    top: ${(props) => props.right && "10rem"};
    left: ${(props) => props.left && "-15%"};
    z-index: 1;
  }

  @media screen and (min-width: 1023px) {
    bottom: ${(props) => props.left && "-8rem"};
  }

  @media screen and (min-width: 1248px) {
    width: 500px;
    height: 500px;
    bottom: ${(props) => props.left && "-14rem"};
  }
`;

const StyledBox = styled(Container)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    overflow: visible;
  }
`;

// FIXME: delete this after create pages
const StyledContent = styled.div`
  height: 700px;
`;

export const LayoutLanding = ({ children, metadata = {} }) => {
  return (
    <Box bg="grayblue.900">
      <OpenGraph metadata={metadata} />

      <StyledBox maxW="container.2xl" px={[0, 4]}>
        <Circle left />
        <Circle right />
        <PageHeader />
        <StyledContent>{children}</StyledContent>
      </StyledBox>

      <Footer />
    </Box>
  );
};
