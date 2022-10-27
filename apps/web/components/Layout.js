import { Fragment } from "react";

import { Heading, Container, Flex, Box, Text, Stack } from "./elements";
import { SectionLinks } from "./SectionLinks";
import { Footer } from "./Footer";
import { PostMetadata } from "./PostMetadata";
import { Disqus } from "./Disqus";
import { NewsletterFormCard } from "./NewsletterFormCard";
import { OpenGraph } from "./OpenGraph";

export const Layout = ({ children, metadata = {}, type = "post" }) => {
  const isBlogTemplate = type === "post" && metadata.date;

  return (
    <Box
      bg="secondary.900"
      borderTop="8px solid"
      borderColor="brand.900"
      color="white"
    >
      <OpenGraph metadata={metadata} />
      <Container maxW="container.md" pt="8">
        <SectionLinks />

        <Flex direction="column">
          <Box as="article" my={4} width="100%">
            {isBlogTemplate ? (
              <Fragment>
                <Heading as="h1" size="xl" mt={8} mb={4} fontFamily="heading">
                  {metadata.title}
                </Heading>
                <PostMetadata metadata={metadata} />
              </Fragment>
            ) : (
              <Heading as="h2" my={8} size="xl">
                {metadata.title}
              </Heading>
            )}
            <Box m="0" as="section">
              {children}
            </Box>
            {isBlogTemplate && (
              <aside id="comments">
                <Disqus title={metadata.title} slug={metadata.slug} />
              </aside>
            )}
          </Box>
          {type === "post" && (
            <Stack as="aside" spacing="24px" my="4" width="100%">
              <NewsletterFormCard />
            </Stack>
          )}
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};
