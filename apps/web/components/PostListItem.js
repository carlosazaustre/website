import { Box, Flex, Text, Tag } from "./elements";
import { IconCalendar } from "./icons";

export const PostListItem = ({ title, date, tags }) => {
  return (
    <Box as="span" display="block" py="2">
      <Text as="h4" size="sm" fontWeight="400" my={2}>
        {title}
      </Text>
      <Flex as="span" align="center" fontSize="sm" color="grayblue.100">
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
