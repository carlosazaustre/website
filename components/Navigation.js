import { HStack, Link } from "@chakra-ui/react";

import { NavigationLinks } from "./NavigationLinks";
import { SocialLinks } from "./SocialLinks";

export const Navigation = () => {
  return (
    <>
      <NavigationLinks />
      <HStack spacing="40px">
        <SocialLinks />
      </HStack>
    </>
  );
};
