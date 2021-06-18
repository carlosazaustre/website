import { MDXRemote } from "next-mdx-remote";

import MDXComponents from "components/MDXComponents";
import { PageLayout } from "@/layouts";
import { getFiles, getFileBySlug } from "@/lib/mdx";

export default function Page({ source, frontmatter }) {
  return (
    <PageLayout metadata={frontmatter}>
      <MDXRemote {...source} components={MDXComponents} />
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const pages = await getFiles("pages");
  const paths = pages.map((page) => ({
    params: {
      slug: page.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("pages", params.slug);

  return {
    props: {
      source,
      frontmatter,
    },
  };
}
