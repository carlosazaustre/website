import styled from "@emotion/styled";

import * as ga from "@/lib/ga";

const StyledButton = styled.div`
  display: inline-block;
  background-color: var(--chakra-colors-secondary-900);
  color: var(--chakra-colors-white);
  text-decoration: none;
  text-align: center;
  font-weight: var(--chakra-fontWeights-bold);
  font-size: var(--chakra-fontSizes-xl);
  font-family: var(--chakra-fonts-heading);
  padding: var(--chakra-space-4) var(--chakra-space-8);
  margin: var(--chakra-space-4) 0;
  border-radius: var(--chakra-radii-2xl);
  transition: background var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);
  width: 100%;
  cursor: pointer;

  &:hover {
    color: var(--chakra-colors-black);
    background-color: var(--chakra-colors-white);
  }
`;

export const ButtonCTA = ({ children }) => {
  const clickCTA = () => {
    ga.event({
      action: "view_item",
      params: { event_label: "Click to YouTube Channel", value: 1 },
    });
  };

  return (
    <StyledButton className="btnCTA" onClick={() => clickCTA()}>
      {children}
    </StyledButton>
  );
};
