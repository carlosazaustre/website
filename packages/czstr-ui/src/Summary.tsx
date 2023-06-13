import { ReactChild } from "react";
import styled from "@emotion/styled";
import { Text } from "./elements";

const StyledBox = styled.div`
  border-left: var(--chakra-borders-8px) var(--chakra-colors-brand-900);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: var(--chakra-space-4);
  margin: 1rem;
`;

export const Summary = ({ children }: { children: ReactChild }) => {
  return (
    <StyledBox>
      <Text fontSize="md" fontWeight="light" fontStyle="italic" color="secondary.300" my={1}>
        {children}
      </Text>
    </StyledBox>
  );
};
