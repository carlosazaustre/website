import { Heading, Box } from "@chakra-ui/react";

export const Card = ({
  children,
  bgColor = "white",
  headerColor = "secondary.900",
  headerTitle,
}) => {
  return (
    <Box bg={bgColor} borderRadius="lg" p={8}>
      <Heading as="h4" color={headerColor}>
        {headerTitle}
      </Heading>
      <section>{children}</section>
    </Box>
  );
};
