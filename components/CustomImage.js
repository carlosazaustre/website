import { Box, Image } from "./elements";

export const CustomImage = (props) => {
  return (
    <Box boxShadow="md" p="4" rounded="md" bg="secondary.500">
      <Image {...props} />
    </Box>
  );
};
