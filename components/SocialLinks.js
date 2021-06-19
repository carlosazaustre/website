import { Fragment } from "react";
import { Link } from "@chakra-ui/react";

import { IconTwitch, IconYoutube } from "./icons";

export const SocialLinks = () => {
  return (
    <Fragment>
      <Link href="//youtube.com/c/CarlosAzaustre?sub_confirmation=1" isExternal>
        <IconYoutube size="40px" />
      </Link>
      <Link href="//twitch.tv/carlosazaustre" isExternal>
        <IconTwitch size="40px" />
      </Link>
    </Fragment>
  );
};
