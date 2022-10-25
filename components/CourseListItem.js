import { Box, Heading } from "./elements";

export const CourseListItem = ({ title }) => {
  return (
    <Box borderBottom="1px" borderColor="brand.900" py="6">
      <Heading as="h3" size="md" my={2}>
        🎓 {title}
      </Heading>
    </Box>
  );
};
