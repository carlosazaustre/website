import NextLink from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

import { PostLayout } from "@/layouts";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Blog({ posts }) {
  return (
    <PostLayout>
      <Heading as="h2" mb={8}>
        Últimos Artículos
      </Heading>
      {posts.map((post) => (
        <NextLink href={post.slug} key={post.slug}>
          <a>
            <Box borderBottom="1px" borderColor="brand.900" p="6">
              <Heading as="h3" size="md">
                {post.title}
              </Heading>
              <Text fontSize="sm" color="gray.500">
                {format(parseISO(post.date), "d MMMM, yyyy", {
                  locale: es,
                })}
              </Text>
            </Box>
          </a>
        </NextLink>
      ))}
    </PostLayout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts");
  return {
    props: { posts },
  };
}
