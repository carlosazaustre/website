import { HStack, Link, Spacer } from "./elements";
import {
  IconTwitch,
  IconYoutube,
  IconInstagram,
  IconTwitter,
  IconGithub,
  IconTiktok,
} from "./icons";

export const SocialNetworks = () => {
  return (
    <HStack spacing="24px">
      <Link href="https://youtube.com/carlosazaustre?sub_confirmation=1">
        <IconYoutube size="24px" />
      </Link>

      <Link href="https://twitch.tv/carlosazaustre">
        <IconTwitch size="24px" />
      </Link>

      <Link href="https://instagram.com/carlosazaustre">
        <IconInstagram size="24px" />
      </Link>

      <Link href="https://twitter.com/carlosazaustre">
        <IconTwitter size="24px" />
      </Link>

      <Link href="https://github.com/carlosazaustre">
        <IconGithub size="24px" />
      </Link>

      <Link href="https://tiktok.com/@carlosazaustre">
        <IconTiktok size="24px" />
      </Link>
    </HStack>
  );
};
