import { HStack, Link } from "./elements";
import {
  IconTwitch,
  IconYoutube,
  IconInstagram,
  IconTwitter,
  IconGithub,
  IconTiktok,
  IconDiscord,
  IconLinkedin,
} from "./icons";

export const SocialNetworks = () => {
  return (
    <HStack spacing="24px" my="4">
      <Link href="https://youtube.com/carlosazaustre?sub_confirmation=1">
        <IconYoutube size="24px" />
      </Link>

      <Link href="https://twitter.com/carlosazaustre">
        <IconTwitter size="24px" />
      </Link>

      <Link href="https://instagram.com/carlosazaustre">
        <IconInstagram size="24px" />
      </Link>

      <Link href="https://linkedin.com/in/carlosazaustre">
        <IconLinkedin size="24px" />
      </Link>

      <Link href="https://github.com/carlosazaustre">
        <IconGithub size="24px" />
      </Link>

      <Link href="https://tiktok.com/@carlosazaustre">
        <IconTiktok size="24px" />
      </Link>

      <Link href="https://twitch.tv/carlosazaustre">
        <IconTwitch size="24px" />
      </Link>

      <Link href="https://discord.gg/carlosazaustre">
        <IconDiscord size="24px" />
      </Link>
    </HStack>
  );
};
