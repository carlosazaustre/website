import { MdDateRange, MdComment, MdAccessTime } from "react-icons/md";
import { Flex, Text } from "@chakra-ui/react";

import { formatDate } from "@/lib/format-date";

export const PostMetadata = ({ metadata }) => {
  return (
    <Flex px="4" direction="row" align="center" justify="flex-start">
      <MdDateRange />
      <Text p={2}>{formatDate(metadata.date)}</Text>
      <MdComment />
      <Text p={2}>¡Deja tu comentario!</Text>
      <MdAccessTime />
      <Text p={2}>
        {Math.round(metadata.readingTime.minutes)} minutos de lectura
      </Text>
      |
      <Flex direction="row">
        {metadata.tags.map((tag) => (
          <Text p={2}>{tag}</Text>
        ))}
      </Flex>
    </Flex>
  );
};
