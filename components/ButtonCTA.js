import styled from "@emotion/styled";

const StyledButton = styled.a`
  display: inline-block;
  background-color: var(--chakra-colors-white);
  color: var(--chakra-colors-black);
  text-decoration: none;
  text-align: center;
  font-weight: var(--chakra-fontWeights-bold);
  font-size: var(--chakra-fontSizes-xl);
  font-family: var(--chakra-fonts-heading);
  padding: var(--chakra-space-4) var(--chakra-space-8);
  margin: var(--chakra-space-4) 0;
  border-radius: var(--chakra-radii-2xl);
  border: var(--chakra-borders-2px) var(--chakra-colors-white);
  transition: background var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);
  width: 100%;
  max-width: var(--chakra-space-96);
  margin: var(--chakra-space-4) auto;
  cursor: pointer;

  &:hover {
    color: var(--chakra-colors-white);
    background-color: var(--chakra-colors-secondary-900);
  }
`;

export const ButtonCTA = ({ children }) => {
  return <StyledButton className="btnCTA">{children}</StyledButton>;
};
