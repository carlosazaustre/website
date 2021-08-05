import Image from "next/image";
import styled from "@emotion/styled";

const StyledBookLink = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    bottom: -30px;
    cursor: pointer;
    transition: bottom var(--chakra-transition-duration-slow)
      var(--chakra-transition-easing-ease-in);

    &:hover {
      bottom: -18px;
    }
  }
`;

export const Book = ({ imageSrc }) => {
  return (
    <StyledBookLink>
      <Image width={480} height={620} layout="fixed" src={imageSrc} />
    </StyledBookLink>
  );
};
