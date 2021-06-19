import NextLink from "next/link";

import { Layout, PostListItem } from "@/components";
import { formatDate } from "@/lib/format-date";
import { orderByDate } from "@/lib/order-by-date";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Blog({ posts }) {
  const metadata = {
    title: "Últimos Artículos",
  };

  return (
    <Layout type="post" metadata={metadata}>
      {posts.map((post) => (
        <NextLink href={post.slug} key={post.slug}>
          <a>
            <PostListItem
              title={post.title}
              date={formatDate(post.date)}
              tags={post.tags}
            />
          </a>
        </NextLink>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const unorderedPosts = await getAllFilesFrontMatter("posts");
  const posts = unorderedPosts.sort(orderByDate);

  return {
    props: { posts },
  };
}
