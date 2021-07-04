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
    right: ${(props) => props.right && "-20%"};
    bottom: ${(props) => props.left && "-10rem"};
    top: ${(props) => props.right && "10rem"};
    left: ${(props) => props.left && "-15%"};
    z-index: 1;
  }

  @media screen and (min-width: 1023px) {
    bottom: ${(props) => props.left && "-8rem"};
  }

  @media screen and (min-width: 1248px) {
    width: 400px;
    height: 400px;
    bottom: ${(props) => props.left && "-14rem"};
  }

  @media screen and (min-width: 1441px) {
    left: ${(props) => props.left && 0};
    right: ${(props) => props.right && 0};
    width: 300px;
    height: 300px;
  }
`;

const StyledBox = styled(Container)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 3;
  margin-left: var(--chakra-sizes-4);
  margin-right: var(--chakra-sizes-4);

  @media screen and (min-width: 1024px) {
    margin-left: var(--chakra-sizes-16);
    margin-right: var(--chakra-sizes-16);
  }
`;

export const LayoutLanding = ({ children, metadata = {} }) => {
  return (
    <Box bg="grayblue.900" mx="auto">
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
