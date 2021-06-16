import { Fragment } from "react";
import { HStack } from "@chakra-ui/react";

import { NavigationLinks } from "./NavigationLinks";
import { SocialLinks } from "./SocialLinks";

export const Navigation = () => {
  return (
    <Fragment>
      <NavigationLinks />
      <HStack spacing="40px">
        <SocialLinks />
      </HStack>
    </Fragment>
  );
};
