import NextLink from "next/link";
import NextImage from "next/image";

import { Layout, PostListItem, elements as UI } from "@/components";
import { formatDate } from "@/lib/format-date";
import { orderByDate } from "@/lib/order-by-date";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function NotFound({ posts }) {
  const metadata = {
    title: "404",
  };

  return (
    <Layout type="post" metadata={metadata}>
      <NextImage
        width={240}
        height={202}
        layout="responsive"
        src="/images/404-giphy.gif"
        alt="404 Not Found"
      />
      <UI.Heading as="h4" p={4}>
        La página que buscas no se encuentra. Pero tienes aquí unos cuantos
        posts para que te entretengas 👇
      </UI.Heading>
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
