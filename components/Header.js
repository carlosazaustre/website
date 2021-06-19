import { Box, Flex, HStack, Link } from "./elements";
import { IconTwitch, IconYoutube } from "./icons";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";

export const Header = () => {
  return (
    <Box as="header" py="10" px={[0, 0, 0, 4]}>
      <Flex
        as="header"
        fontWeight="bold"
        direction={["column", "column", "column", "row"]}
        justify="space-between"
        align="center"
      >
        <h1 title="Desarrollo avaScript Fullstack - Carlos Azaustre">
          <Logo />
        </h1>
        <NavigationLinks />
        <HStack spacing="40px">
          <Link
            href="//youtube.com/c/CarlosAzaustre?sub_confirmation=1"
            isExternal
          >
            <IconYoutube size="40px" />
          </Link>
          <Link href="//twitch.tv/carlosazaustre" isExternal>
            <IconTwitch size="40px" />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};
