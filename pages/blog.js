import NextLink from "next/link";

import { PageLayout } from "@/layouts";
import { PostListItem } from "@/components";
import { formatDate } from "@/lib/format-date";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Blog({ posts }) {
  const metadata = {
    title: "Últimos Artículos",
  };

  return (
    <PageLayout metadata={metadata} aside>
      {posts.map((post) => (
        <NextLink href={post.slug} key={post.slug}>
          <a>
            <PostListItem title={post.title} date={formatDate(post.date)} />
          </a>
        </NextLink>
      ))}
    </PageLayout>
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
