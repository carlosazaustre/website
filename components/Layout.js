import { Fragment } from "react";
import NextLink from "next/link";

import { Heading, Container, Flex, Box, Text, Stack } from "./elements";
import { Logo } from "./Logo";
import { SectionLinks } from "./SectionLinks";
import { Footer } from "./Footer";
import { PostMetadata } from "./PostMetadata";
import { Disqus } from "./Disqus";
import { NewsletterFormCard } from "./cards/NewsletterFormCard";
import { AboutCard } from "./cards/AboutCard";
import { OpenGraph } from "./OpenGraph";

export const Layout = ({ children, metadata = {}, type = "post" }) => {
  const width = type === "post" ? "65%" : "100%";
  const isBlogTemplate = type === "post" && metadata.date;

  return (
    <Box bg="grayblue.900">
      <OpenGraph metadata={metadata} />
      <Container maxW="container.2xl" px={[0, 4]}>
        <Flex
          justify="space-between"
          direction={["column", "column", "row"]}
          align="center"
          fontFamily="heading"
          fontSize="2xl"
          fontWeight="bold"
          px={4}
          py={2}
          mb={8}
        >
          <NextLink href="/">
            <a>
              <Flex align="center">
                <Logo size="40px" />
                <Text fontSize={["sm", "sm", "lg", "xl"]} px="2">
                  Carlos Azaustre
                </Text>
              </Flex>
            </a>
          </NextLink>
          <SectionLinks />
        </Flex>

        <Flex
          d="flex"
          direction={["column", "column", "column", "column", "row"]}
          mx="auto"
        >
          <Box
            as="article"
            bg="white"
            p={[4, 4, 8, 16]}
            mx={[0, 0, 0, 0, 4]}
            my={4}
            borderRadius="lg"
            width={["100%", "100%", "100%", "100%", width]}
          >
            {isBlogTemplate ? (
              <Fragment>
                <Heading as="h1" m={8} size="2xl">
                  {metadata.title}
                </Heading>
                <PostMetadata metadata={metadata} />
              </Fragment>
            ) : (
              <Heading as="h2" m={8} size="2xl">
                {metadata.title}
              </Heading>
            )}
            <section>{children}</section>
            {isBlogTemplate && (
              <section id="comments">
                <Disqus title={metadata.title} slug={metadata.slug} />
              </section>
            )}
          </Box>
          {type === "post" && (
            <Stack
              as="aside"
              spacing="24px"
              my="4"
              width={["100%", "100%", "100%", "100%", "30%"]}
            >
              <NewsletterFormCard />
              <AboutCard />
            </Stack>
          )}
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};
