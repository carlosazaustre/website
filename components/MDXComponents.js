import NextLink from "next/link";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { MdLabel } from "react-icons/md";
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
  ListIcon,
  Th,
  Tr,
  Td,
} from "@chakra-ui/react";

import { Dropdown, DropdownItem } from "./Dropdown";
import { PostImage } from "./post/PostImage";
import { YouTube } from "./YouTube";
import { YouTubeBtn } from "./YouTubeBtn";
import { TidycalEmbed } from "./TidycalEmbed";
import { CompanyLogos } from "./icons/CompanyLogos";
import { AboutCard } from "./cards/AboutCard";
import { Summary } from "./Summary";

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

export const MDXComponents = {
  h1: (props) => <Heading as="h1" m={8} size="3xl" {...props} />,
  h2: (props) => <Heading as="h2" m={4} size="2xl" {...props} />,
  h3: (props) => <Heading as="h3" m={4} size="xl" {...props} />,
  h4: (props) => <Heading as="h4" m={2} size="lg" {...props} />,
  h5: (props) => <Heading as="h5" m={2} size="md" {...props} />,
  h6: (props) => <Heading as="h6" m={2} size="sm" {...props} />,
  ul: (props) => <UnorderedList styleType="none" {...props} />,
  ol: (props) => <OrderedList styleType="none" {...props} />,
  li: (props) => (
    <ListItem>
      <ListIcon as={MdLabel} color="brand.900" />
      {props.children}
    </ListItem>
  ),
  p: (props) => <Text fontSize="lg" lineHeight={6} my={8} mx={4} {...props} />,
  table: (props) => <Table variant="striped" colorScheme="orange" {...props} />,
  thead: (props) => <Thead {...props} />,
  tbody: (props) => <Tbody {...props} />,
  th: (props) => <Th {...props} />,
  tr: (props) => <Tr {...props} />,
  td: (props) => <Td {...props} />,
  img: (props) => <PostImage {...props} />,
  hr: Divider,
  a: CustomLink,
  Image,
  Summary,
  Heading,
  YouTube,
  YouTubeBtn,
  TidycalEmbed,
  CompanyLogos,
  AboutCard,
  Dropdown,
  DropdownItem,
};
