import { Box, Heading, Flex, Text, Tag } from "./elements";
import { IconCalendar } from "./icons";

export const PostListItem = ({ title, date, tags }) => {
  return (
    <Box py="2">
      <Heading as="h4" size="sm" fontWeight="300" my={2}>
        {title}
      </Heading>
      <Flex align="center" fontSize="sm" color="grayblue.100">
        <IconCalendar fill="white" />
        <Text color="brand.900" ml={1}>
          {date}{" "}
          {tags.map((tag) => (
            <Tag
              key={tag}
              size="sm"
              mx={2}
              colorScheme="secondary"
              color="white"
            >
              {tag}
            </Tag>
          ))}
        </Text>
      </Flex>
    </Box>
  );
};
