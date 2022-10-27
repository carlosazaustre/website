import { MDXRemote } from "next-mdx-remote";

import { MDXComponents, Layout, ScrollToTop } from "@/components";
import { getFiles, getFileBySlug } from "@/lib/mdx";

export default function Course({ source, frontmatter }) {
  return (
    <Layout type="page" metadata={frontmatter}>
      <MDXRemote {...source} components={MDXComponents} />
      <ScrollToTop />
    </Layout>
  );
}

export async function getStaticPaths() {
  const courses = await getFiles("courses");
  const paths = courses.map((course) => ({
    params: {
      slug: course.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("courses", params.slug);

  return {
    props: {
      source,
      frontmatter,
    },
  };
}
