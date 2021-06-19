import NextLink from "next/link";
import { Container, Flex, Box, Text, Stack } from "@chakra-ui/react";

import {
  Logo,
  SectionLinks,
  NewsletterFormCard,
  AboutCard,
  Footer,
} from "@/components";

export const Layout = ({ children, aside }) => {
  const width = aside ? "65%" : "100%";

  return (
    <Box bg="gray.100">
      <Container maxW="container.2xl">
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
            {children}
          </Box>
          {aside && (
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
