import { Image } from "./elements";

export const CustomImage = (props) => {
  return (
    <Image {...props} boxShadow="md" p="4" rounded="md" bg="secondary.500" />
  );
};
