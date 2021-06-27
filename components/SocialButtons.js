import { Link, IconButton } from "./elements";
import {
  IconYoutube,
  IconTwitch,
  IconTwitter,
  IconInstagram,
  IconTiktok,
  IconLinkedin,
} from "./icons";

export const Youtube = () => {
  return (
    <Link m={1} href="//youtube.com/carlosazaustre?sub_confirmation=1">
      <IconButton colorScheme="red" icon={<IconYoutube />} />
    </Link>
  );
};

export const Twitch = () => {
  return (
    <Link m={1} href="//twitch.tv/carlosazaustre">
      <IconButton colorScheme="purple" icon={<IconTwitch />} />
    </Link>
  );
};

export const Twitter = () => {
  return (
    <Link m={1} href="//twitter.com/carlosazaustre">
      <IconButton colorScheme="twitter" icon={<IconTwitter />} />
    </Link>
  );
};

export const Instagram = () => {
  return (
    <Link m={1} href="//instagram.com/carlosazaustre">
      <IconButton colorScheme="pink" icon={<IconInstagram />} />
    </Link>
  );
};

export const Tiktok = () => {
  return (
    <Link m={1} href="//tiktok.com/@carlosazaustre">
      <IconButton colorScheme="blackAlpha" icon={<IconTiktok />} />
    </Link>
  );
};

export const Linkedin = () => {
  return (
    <Link m={1} href="//linkedin.com/in/carlosazaustre">
      <IconButton colorScheme="linkedin" icon={<IconLinkedin />} />
    </Link>
  );
};
