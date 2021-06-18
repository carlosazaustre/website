import NextLink from "next/link";
import { Text, Link } from "@chakra-ui/react";

import { CardHome } from "./CardHome";

export const BlogCardHome = ({ posts }) => {
  return (
    <CardHome headerTitle="Blog">
      {posts.map((post) => (
        <NextLink href={post.slug} key={post.slug}>
          <a>
            <Text fontSize="xs" color="gray.400">
              {post.date}
            </Text>
            <Text isTruncated>{post.title}</Text>
          </a>
        </NextLink>
      ))}
      <NextLink href="/blog">
        <Link py={4} color="brand.900">
          Ir al Blog →
        </Link>
      </NextLink>
    </CardHome>
  );
};
