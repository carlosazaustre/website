import Image from "next/image";
import styled from "@emotion/styled";

const StyledBookLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  position: relative;
  top: 10px;
  cursor: pointer;
  transition: top var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);

  &:hover {
    top: 0;
  }
`;

export const Book = ({ imageSrc }) => {
  return (
    <StyledBookLink>
      <Image width={480} height={570} layout="intrinsic" src={imageSrc} />
    </StyledBookLink>
  );
};
