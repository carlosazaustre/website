import { Container, Flex, Box, Heading, Stack } from "@chakra-ui/react";

import {
  Footer,
  NewsletterFormCard,
  AboutCard,
  PageHeader,
  PostMetadata,
} from "@/components";

export const PostLayout = ({ children, metadata }) => {
  return (
    <Box bg="gray.100">
      <Container maxW="container.2xl">
        <PageHeader />

        <Flex
          d="flex"
          direction={["column", "column", "column", "column", "row"]}
          mx="auto"
        >
          <Box
            as="article"
            bg="white"
            w={["auto", "auto", "auto", "auto", "1000px"]}
            p="4"
            m="2"
            my="4"
            borderRadius="lg"
          >
            <Heading as="h1" m={8} size="3xl">
              {metadata.title}
            </Heading>
            <PostMetadata metadata={metadata} />
            <section>{children}</section>
          </Box>

          <Stack
            as="aside"
            spacing="24px"
            w={["auto", "auto", "auto", "auto", "420px"]}
            m="2"
            my="4"
          >
            <NewsletterFormCard />
            <AboutCard />
          </Stack>
        </Flex>
      </Container>

      <Footer />
    </Box>
  );
};
