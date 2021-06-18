import { Stack } from "@chakra-ui/react";

import { NewsletterFormCard, AboutCard } from "@/components";

export const PageAside = () => {
  return (
    <Stack
      as="aside"
      spacing="24px"
      minW="400px"
      m="2"
      my="4"
      width={["100%", "100%", "100%", "100%", "25%"]}
    >
      <NewsletterFormCard />
      <AboutCard />
    </Stack>
  );
};
