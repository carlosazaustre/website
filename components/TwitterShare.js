import { TwitterShareButton, TwitterIcon } from "react-share";
import styled from "@emotion/styled";
import { Flex, Spacer } from "./elements";

const StyledShare = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 2rem;
  left: 0;
  width: 100%;
  z-index: 100;
`;

export const TwitterShare = ({ url, title }) => {
  return (
    <StyledShare>
      <Spacer />

      <TwitterShareButton
        url={`https://carlosazaustre.es/${url}`}
        via="carlosazaustre"
        title={title}
      >
        <Flex
          bg="white"
          color="black"
          fontFamily="heading"
          fontWeight="500"
          align="center"
          justify="space-between"
          width="220px"
          p={2}
          m={2}
          rounded="2xl"
        >
          <span>Comparte el artículo</span>
          <TwitterIcon size={32} round={true} />
        </Flex>
      </TwitterShareButton>

      <Spacer />
    </StyledShare>
  );
};
