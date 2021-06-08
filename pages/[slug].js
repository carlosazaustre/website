import { MDXRemote } from "next-mdx-remote";
import { Heading } from "@chakra-ui/react";

import MDXComponents from "@/components/MDXComponents";
import { getFiles, getFileBySlug } from "@/lib/mdx";

export default function Post({ source, frontMatter }) {
  return (
    <div>
      <article>
        <Heading as="h1" size="3xl">
          {frontMatter.title}
        </Heading>
        <MDXRemote {...source} components={MDXComponents} />
        );
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("posts");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontMatter } = await getFileBySlug("posts", params.slug);

  return {
    props: {
      source,
      frontMatter,
    },
  };
}
