import { Fragment } from "react";

import { Heading, Container, Flex, Box, Text, Stack } from "./elements";
import { SectionLinks } from "./SectionLinks";
import { PageHeader } from "./PageHeader";
import { Footer } from "./Footer";
import { PostMetadata } from "./PostMetadata";
import { Disqus } from "./Disqus";
import { NewsletterFormCard } from "./cards/NewsletterFormCard";
import { AboutCard } from "./cards/AboutCard";
import { OpenGraph } from "./OpenGraph";

export const Layout = ({ children, metadata = {}, type = "post" }) => {
  const isBlogTemplate = type === "post" && metadata.date;

  return (
    <Box bg="secondary.900" color="white">
      <OpenGraph metadata={metadata} />
      <Container maxW="container.md" pt="8">
        <SectionLinks />

        <Flex direction="column">
          <Box as="article" my={4} width="100%">
            {isBlogTemplate ? (
              <Fragment>
                <Heading as="h1" size="xl" my="8" fontFamily="heading">
                  {metadata.title}
                </Heading>
                <PostMetadata metadata={metadata} />
              </Fragment>
            ) : (
              <Heading as="h2" my={8} size="2xl">
                {metadata.title}
              </Heading>
            )}
            <Box m="0" as="section">
              {children}
            </Box>
            {isBlogTemplate && (
              <section id="comments">
                <Disqus title={metadata.title} slug={metadata.slug} />
              </section>
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
