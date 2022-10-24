import { formatDate } from "@/lib/format-date";
import { Flex, Text, Tag, Link } from "./elements";
import { IconCalendar, IconComment, IconClock } from "./icons";
import { OpenPR } from "./OpenPR";
import { Disqus } from "./Disqus";

export const PostMetadata = ({ metadata }) => {
  return (
    <Flex direction="column" py={2}>
      <Flex
        direction={["column", "column", "row"]}
        align={["left", "left", "center"]}
        justify="flex-start"
        color="white"
        fontSize={["xs", "sm"]}
        fontWeight="500"
        fontFamily="heading"
      >
        <Flex align="center">
          <IconCalendar />
          <Text color="brand.900" mx={2}>
            {formatDate(metadata.date)}
          </Text>
        </Flex>
        <Flex align="center">
          <IconComment />
          <Link mx={2} href="#comments">
            <Disqus type="count" title={metadata.title} slug={metadata.slug} />
          </Link>
        </Flex>
        <Flex align="center">
          <IconClock />
          <Text mx={2}>
            {Math.round(metadata.readingTime.minutes)} minutos de lectura
          </Text>
        </Flex>
        <Flex direction="row">
          {metadata.tags.map((tag) => (
            <Tag key={tag} size="sm" mx={2}>
              {tag}
            </Tag>
          ))}
        </Flex>
      </Flex>
      <OpenPR slug={metadata.slug} />
    </Flex>
  );
};
