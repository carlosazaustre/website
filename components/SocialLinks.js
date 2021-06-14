import { ImTwitch, ImYoutube } from "react-icons/im";
import { Link } from "@chakra-ui/react";

export const SocialLinks = () => {
  return (
    <>
      <Link href="//youtube.com/c/CarlosAzaustre?sub_confirmation=1" isExternal>
        <ImYoutube size="40px" />
      </Link>
      <Link href="//twitch.tv/carlosazaustre" isExternal>
        <ImTwitch size="40px" />
      </Link>
    </>
  );
};
