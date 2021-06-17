import { Heading, Box } from "@chakra-ui/react";

export const CardHome = ({
  children,
  bgColor = "white",
  headerColor = "secondary.900",
  headerTitle,
}) => {
  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      p={[4, 4, 8, 16]}
      my={4}
      mx={[0, 0, 0, 0]}
      width={["100%", "100%", "100%", "32%"]}
    >
      <Heading as="h4" color={headerColor}>
        {headerTitle}
      </Heading>
      <section>{children}</section>
    </Box>
  );
};
