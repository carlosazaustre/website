import { UI, Icons } from "@czstr/ui";

export const PostListItem = ({ title, date, tags }) => {
  return (
    <UI.Box as="span" display="block" py="2">
      <UI.Text as="h4" size="sm" fontWeight="400" my={2}>
        {title}
      </UI.Text>
      <UI.Flex as="span" align="center" fontSize="sm" color="grayblue.100">
        <Icons.IconCalendar fill="white" />
        <UI.Text color="brand.900" ml={1}>
          {date}{" "}
          {tags.map((tag) => (
            <UI.Tag
              key={tag}
              size="sm"
              mx={2}
              colorScheme="secondary"
              color="white"
            >
              {tag}
            </UI.Tag>
          ))}
        </UI.Text>
      </UI.Flex>
    </UI.Box>
  );
};
