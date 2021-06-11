import NextLink from "next/link";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Divider,
  Link,
  Heading,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
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
        <Link {...props} />
      </NextLink>
    );
  }

  return (
    <Link isExternal target="_blank" rel="noopener noreferrer" {...props}>
      {props.children} <ExternalLinkIcon mx="2px" />
    </Link>
  );
};

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="3xl" {...props} />,
  h2: (props) => <Heading as="h2" size="2xl" {...props} />,
  h3: (props) => <Heading as="h3" size="xl" {...props} />,
  h4: (props) => <Heading as="h4" size="lg" {...props} />,
  h5: (props) => <Heading as="h5" size="md" {...props} />,
  h6: (props) => <Heading as="h6" size="sm" {...props} />,
  hr: Divider,
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
