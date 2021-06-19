import { formatDate } from "@/lib/format-date";
import { Flex, Text, Tag, Link } from "./elements";
import { IconCalendar, IconComment, IconClock } from "./icons";
import { OpenPR } from "./OpenPR";
import { Disqus } from "./Disqus";

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
        <IconCalendar />
        <Text mx={2}>{formatDate(metadata.date)}</Text>
        <IconComment />
        <Link mx={2} href="#comments">
          <Disqus type="count" title={metadata.title} slug={metadata.slug} />
        </Link>
        <IconClock />
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
