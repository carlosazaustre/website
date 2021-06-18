import NextLink from "next/link";
import { Heading } from "@chakra-ui/react";

import { PostLayout } from "@/layouts";
import { PostItem } from "@/components";
import { formatDate } from "@/lib/format-date";
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
            <PostItem title={post.title} date={formatDate(post.date)} />
          </a>
        </NextLink>
      ))}
    </PostLayout>
  );
}

export async function getStaticProps() {
  const unorderedPosts = await getAllFilesFrontMatter("posts");
  const posts = unorderedPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return {
    props: { posts },
  };
}
