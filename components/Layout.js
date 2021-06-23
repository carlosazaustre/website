import { Fragment } from "react";
import NextLink from "next/link";
import Head from "next/head";

import { Heading, Container, Flex, Box, Text, Stack } from "./elements";
import { Logo } from "./Logo";
import { SectionLinks } from "./SectionLinks";
import { Footer } from "./Footer";
import { PostMetadata } from "./PostMetadata";
import { Disqus } from "./Disqus";
import { NewsletterFormCard } from "./cards/NewsletterFormCard";
import { AboutCard } from "./cards/AboutCard";

export const Layout = ({ children, metadata = {}, type = "post" }) => {
  const width = type === "post" ? "65%" : "100%";
  const isBlogTemplate = type === "post" && metadata.date;

  const SEO = {
    title: metadata.title || "Aprende JavaScript - Carlos Azaustre",
    description:
      metadata.description ||
      "Formación y Desarrollo Fullstack en JavaScript. Tutoriales y Cursos sobre Programación Web con React, Node, Firebase, etc...",
    slug: metadata.slug || "",
    image:
      metadata.image ||
      "https://website-carlosazaustre.vercel.app/assets/default-image.png",
    date: metadata.date || new Date().toISOString(),
  };

  return (
    <Box bg="gray.100">
      <Head>
        <title>{SEO.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={SEO.description} name="description" />
        <meta
          property="og:url"
          content={`https://carlosazaustre.es/${SEO.slug}`}
        />
        <link rel="canonical" href={`https://carlosazaustre.es/${SEO.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Carlos Azaustre" />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:image" content={SEO.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@carlosazaustre" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={SEO.image} />
        <meta property="article:published_time" content={SEO.date} />
      </Head>
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
