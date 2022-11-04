import Image from "next/image";
import {
  YouTube,
  YouTubeBtn,
  Dropdown,
  DropdownItem,
  NewsletterForm,
  SpotifyPodcast,
  CustomImage,
  UI,
  Summary,
  Icons,
} from "@czstr/ui";

import { Tidycal } from "./Tidycal";
import { CustomLink } from "./CustomLink";

export const MDXComponents = {
  a: CustomLink,
  hr: UI.Divider,
  h1: (props) => <UI.Heading as="h1" my={8} size="lg" {...props} />,
  h2: (props) => <UI.Heading as="h2" my={4} size="lg" {...props} />,
  h3: (props) => <UI.Heading as="h3" my={4} size="md" {...props} />,
  h4: (props) => <UI.Heading as="h4" my={2} size="md" {...props} />,
  h5: (props) => <UI.Heading as="h5" my={2} size="sm" {...props} />,
  h6: (props) => <UI.Heading as="h6" my={2} size="sm" {...props} />,
  p: (props) => <UI.Text fontSize="md" lineHeight={6} my={8} {...props} />,
  table: (props) => (
    <UI.TableContainer>
      <UI.Table variant="striped" colorScheme="secondary" {...props} />
    </UI.TableContainer>
  ),
  thead: (props) => <UI.Thead {...props} />,
  tbody: (props) => <UI.Tbody {...props} />,
  th: (props) => <UI.Th {...props} />,
  tr: (props) => <UI.Tr {...props} />,
  td: (props) => <UI.Td {...props} />,
  img: (props) => <CustomImage {...props} />,
  ul: (props) => <UI.UnorderedList styleType="none" {...props} />,
  ol: (props) => <UI.OrderedList styleType="none" {...props} />,
  li: (props) => (
    <UI.ListItem>
      <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
      {props.children}
    </UI.ListItem>
  ),
  Image,
  Summary,
  SpotifyPodcast,
  YouTube,
  YouTubeBtn,
  Tidycal,
  NewsletterForm,
  Dropdown,
  DropdownItem,
};
