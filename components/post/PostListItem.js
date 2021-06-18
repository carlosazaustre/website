import { Box, Heading, Text } from "@chakra-ui/react";

export const PostListItem = ({ title, date }) => {
  return (
    <Box borderBottom="1px" borderColor="brand.900" p="6">
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.500">
        {date}
      </Text>
    </Box>
  );
};
