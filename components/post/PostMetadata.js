import { MdDateRange, MdComment, MdAccessTime } from "react-icons/md";
import { Flex, Text, Tag } from "@chakra-ui/react";

import { EditPR } from "../EditPR";
import { formatDate } from "@/lib/format-date";

export const PostMetadata = ({ metadata, slug }) => {
  return (
    <Flex direction="column" px={4} py={2}>
      <Flex
        direction="row"
        align="center"
        justify="flex-start"
        color="gray.500"
        fontSize="sm"
      >
        <MdDateRange />
        <Text mx={2}>{formatDate(metadata.date)}</Text>
        <MdComment />
        <Text mx={2}>¡Deja tu comentario!</Text>
        <MdAccessTime />
        <Text mx={2}>
          {Math.round(metadata.readingTime.minutes)} minutos de lectura
        </Text>
        <Flex direction="row">
          {metadata.tags.map((tag) => (
            <Tag size="sm" mx={2} colorScheme="brand">
              {tag}
            </Tag>
          ))}
        </Flex>
      </Flex>
      <EditPR slug={slug} />
    </Flex>
  );
};
