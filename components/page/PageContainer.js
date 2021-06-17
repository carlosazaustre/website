import { Container, Flex, Box } from "@chakra-ui/react";

export const PageContainer = ({ header, main, aside }) => {
  return (
    <Container maxW="container.2xl">
      {header}

      <Flex
        d="flex"
        direction={["column", "column", "column", "column", "row"]}
        mx="auto"
      >
        <Box
          as="article"
          bg="white"
          p={[4, 4, 8, 16]}
          m={2}
          my={4}
          borderRadius="lg"
        >
          {main}
        </Box>
        {aside}
      </Flex>
    </Container>
  );
};
