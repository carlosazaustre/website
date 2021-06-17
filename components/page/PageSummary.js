import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledBox = styled.div`
  border-left: var(--chakra-borders-8px) var(--chakra-colors-brand-900);
  padding: var(--chakra-space-8);
  margin: 0 var(--chakra-space-4);
`;

export const PageSummary = ({ children }) => {
  return (
    <StyledBox>
      <Text fontSize="2xl" fontWeight="light" color="secondary.100">
        {children}
      </Text>
    </StyledBox>
  );
};
