import Image from "next/image";
import styled from "@emotion/styled";

const StyledBookLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* height: 100%; */
  position: relative;
  bottom: 40px;
  cursor: pointer;
  transition: bottom var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);

  &:hover {
    bottom: 50px;
  }
`;

export const Book = ({ imageSrc }) => {
  return (
    <StyledBookLink>
      <Image width={480} height={620} layout="fixed" src={imageSrc} />
    </StyledBookLink>
  );
};
