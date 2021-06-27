import Image from "next/image";

import { IconLabel } from "./icons";
import { Dropdown, DropdownItem } from "./Dropdown";
import { SpotifyPodcast } from "./SpotifyPodcast";
import { YouTube } from "./YouTube";
import { YouTubeBtn } from "./YouTubeBtn";
import { Tidycal } from "./Tidycal";
import { Summary } from "./Summary";
import { CustomLink } from "./CustomLink";
import { CustomImage } from "./CustomImage";
import { AboutCard } from "./cards/AboutCard";
import { NewsletterFormCard } from "./cards/NewsletterFormCard";
import {
  Divider,
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
} from "./elements";

export const MDXComponents = {
  a: CustomLink,
  hr: Divider,
  h1: (props) => <Heading as="h1" m={8} size="3xl" {...props} />,
  h2: (props) => <Heading as="h2" m={4} size="2xl" {...props} />,
  h3: (props) => <Heading as="h3" m={4} size="xl" {...props} />,
  h4: (props) => <Heading as="h4" m={2} size="lg" {...props} />,
  h5: (props) => <Heading as="h5" m={2} size="md" {...props} />,
  h6: (props) => <Heading as="h6" m={2} size="sm" {...props} />,
  p: (props) => <Text fontSize="lg" lineHeight={6} my={8} mx={4} {...props} />,
  table: (props) => <Table variant="striped" colorScheme="orange" {...props} />,
  thead: (props) => <Thead {...props} />,
  tbody: (props) => <Tbody {...props} />,
  th: (props) => <Th {...props} />,
  tr: (props) => <Tr {...props} />,
  td: (props) => <Td {...props} />,
  img: (props) => <CustomImage {...props} />,
  ul: (props) => <UnorderedList styleType="none" {...props} />,
  ol: (props) => <OrderedList styleType="none" {...props} />,
  li: (props) => (
    <ListItem>
      <ListIcon as={IconLabel} color="brand.900" />
      {props.children}
    </ListItem>
  ),
  Image,
  Summary,
  Heading,
  SpotifyPodcast,
  YouTube,
  YouTubeBtn,
  Tidycal,
  AboutCard,
  NewsletterFormCard,
  Dropdown,
  DropdownItem,
};
