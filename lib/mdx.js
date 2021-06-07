import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = async (type) =>
  fs.readdirSync(path.join(root, "data", type));

export const getFileBySlug = async (type, slug) => {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, slug, "index.mdx", "utf8"))
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  const { data, content } = await matter(source);

  const mdxSource = await serialize(content, {});

  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  };
};

export const getAllFilesFrontMatter = async (type) => {
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, "data", type, slug), "utf8");
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};
