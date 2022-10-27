import { Box, Flex, Image, Text } from "./elements";

export const ReviewCard = ({ children, photo, name, role }) => {
  return (
    <Box
      bg="secondary.500"
      rounded="lg"
      mb={16}
      p={6}
      w={["100%", "100%", "33%"]}
    >
      <Flex align="center" direction="column" m={[0, 0, 2, 4]}>
        <Image
          borderRadius="full"
          borderColor="white"
          boxSize="75px"
          src={photo}
          alt={name}
          mr={4}
        />
        <Box>
          <Text fontSize="md" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="sm" fontWeight="regular">
            {role}
          </Text>
        </Box>
      </Flex>
      <Text fontSize="sm" as="i">
        {children}
      </Text>
    </Box>
  );
};
