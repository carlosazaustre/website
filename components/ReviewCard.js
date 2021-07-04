import { Box, Flex, Image, Text } from "./elements";

export const ReviewCard = ({ children, photo, name, role }) => {
  return (
    <Box bg="white" rounded="lg" mt={4} mb={16} p={6} w={["100%, 100%, 90%"]}>
      <Flex m={[0, 0, 2, 4]}>
        <Image
          borderRadius="full"
          borderColor="white"
          boxSize="75px"
          src={photo}
          alt={name}
          mr={4}
        />
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="md" fontWeight="regular">
            {role}
          </Text>
        </Box>
      </Flex>
      <em>{children}</em>
    </Box>
  );
};
