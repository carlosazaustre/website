import { UI } from "@czstr/ui";

export const CourseListItem = ({ title }) => {
  return (
    <UI.Box borderBottom="1px" borderColor="brand.900" py="6">
      <UI.Heading as="h3" size="md" my={2}>
        🎓 {title}
      </UI.Heading>
    </UI.Box>
  );
};
