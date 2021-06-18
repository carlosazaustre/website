import { Box, Image } from "@chakra-ui/react";

export const PostImage = (props) => {
  return (
    <Box boxShadow="md" borderWidth="1px" p="6" rounded="md" bg="white">
      <Image {...props} />
    </Box>
  );
};
