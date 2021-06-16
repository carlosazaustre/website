import { Box, Image } from "@chakra-ui/react";

export const BlogImage = (props) => {
  return (
    <Box boxShadow="base" p="6" rounded="md" bg="white">
      <Image {...props} />
    </Box>
  );
};
