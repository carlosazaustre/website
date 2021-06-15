import NextLink from "next/link";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Divider,
  Link,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  UnorderedList,
  OrderedList,
  ListItem,
  Th,
  Tr,
  Td,
  Code,
} from "@chakra-ui/react";

import { BlogImage } from "./BlogImage";
import { YouTube } from "./YouTube";
import { YouTubeBtn } from "./YouTubeBtn";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <Link {...props} color="brand.900" />
      </NextLink>
    );
  }

  return (
    <Link
      isExternal
      color="brand.900"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children} <ExternalLinkIcon mx="2px" />
    </Link>
  );
};

const MDXComponents = {
  h1: (props) => <Heading as="h1" m={8} size="3xl" {...props} />,
  h2: (props) => <Heading as="h2" m={4} size="2xl" {...props} />,
  h3: (props) => <Heading as="h3" m={4} size="xl" {...props} />,
  h4: (props) => <Heading as="h4" m={2} size="lg" {...props} />,
  h5: (props) => <Heading as="h5" m={2} size="md" {...props} />,
  h6: (props) => <Heading as="h6" m={2} size="sm" {...props} />,
  hr: Divider,
  ul: (props) => <UnorderedList {...props} />,
  ol: (props) => <OrderedList {...props} />,
  li: (props) => <ListItem {...props} />,
  p: (props) => <Text fontSize="lg" lineHeight={6} my={8} mx={4} {...props} />,
  table: (props) => <Table variant="striped" colorScheme="orange" {...props} />,
  thead: (props) => <Thead {...props} />,
  tbody: (props) => <Tbody {...props} />,
  th: (props) => <Th {...props} />,
  tr: (props) => <Tr {...props} />,
  td: (props) => <Td {...props} />,
  Image,
  img: (props) => <BlogImage {...props} />,
  a: CustomLink,
  YouTube,
  YouTubeBtn,
};

export default MDXComponents;
