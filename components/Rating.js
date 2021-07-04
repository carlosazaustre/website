import { HStack, Text } from "./elements";
import { IconStar, IconStarEmpty } from "./icons";

export const Rating = ({ children, average }) => {
  const starsFilled = average;
  const starsEmpty = 5 - average;

  return (
    <HStack my={4} mx="auto" justify="center" color="brand.900" fontSize="xl">
      {Array(starsFilled)
        .fill(1)
        .map((_, i) => (
          <IconStar key={i} />
        ))}
      {Array(starsEmpty)
        .fill(0)
        .map((_, i) => (
          <IconStarEmpty key={i} />
        ))}
      <Text fontSize="sm" my={4} color="grayblue.200">
        {children}
      </Text>
    </HStack>
  );
};
