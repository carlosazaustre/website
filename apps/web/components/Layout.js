import { Fragment } from "react";
import { Footer, NewsletterForm, UI } from "@czstr/ui";

import { OpenGraph } from "./OpenGraph";
import { SectionLinks } from "./SectionLinks";
import { PostMetadata } from "./PostMetadata";
import { Disqus } from "./Disqus";

export const Layout = ({ children, metadata = {}, type = "post" }) => {
  const isBlogTemplate = type === "post" && metadata.date;

  return (
    <UI.Box
      bg="secondary.900"
      borderTop="8px solid"
      borderColor="brand.900"
      color="white"
    >
      <OpenGraph metadata={metadata} />
      <UI.Container maxW="container.md" pt="8">
        <SectionLinks />

        <UI.Flex direction="column">
          <UI.Box as="article" my={4} width="100%">
            {isBlogTemplate ? (
              <Fragment>
                <UI.Heading
                  as="h1"
                  size="xl"
                  mt={8}
                  mb={4}
                  fontFamily="heading"
                >
                  {metadata.title}
                </UI.Heading>
                <PostMetadata metadata={metadata} />
              </Fragment>
            ) : (
              <UI.Heading as="h2" my={8} size="xl">
                {metadata.title}
              </UI.Heading>
            )}
            <UI.Box m="0" as="section">
              {children}
            </UI.Box>
            {isBlogTemplate && (
              <aside id="comments">
                <Disqus title={metadata.title} slug={metadata.slug} />
              </aside>
            )}
          </UI.Box>
          {type === "post" && (
            <UI.Stack as="aside" spacing="24px" my="4" width="100%">
              <NewsletterForm />
            </UI.Stack>
          )}
        </UI.Flex>
      </UI.Container>
      <Footer />
    </UI.Box>
  );
};
