import { MDXRemote } from "next-mdx-remote";

import { MDXComponents, Layout, ScrollToTop } from "@/components";
import { getFiles, getFileBySlug } from "@/lib/mdx";

export default function Post({ source, frontmatter }) {
  return (
    <Layout type="post" metadata={frontmatter}>
      <MDXRemote {...source} components={MDXComponents} />
      <ScrollToTop />
    </Layout>
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
  const { source, frontmatter } = await getFileBySlug("posts", params.slug);

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  };
}
