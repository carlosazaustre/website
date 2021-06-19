import { MdDateRange, MdComment, MdAccessTime } from "react-icons/md";
import { Flex, Text, Tag, Link } from "@chakra-ui/react";

import { formatDate } from "@/lib/format-date";
import { OpenPR } from "../OpenPR";
import { Disqus } from "../Disqus";

export const PostMetadata = ({ metadata }) => {
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
        <Link mx={2} href="#comments">
          <Disqus type="count" title={metadata.title} slug={metadata.slug} />
        </Link>
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
      <OpenPR slug={metadata.slug} />
    </Flex>
  );
};
