import Head from "next/head";
import Link from "next/link";

import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Aprende JavaScript con Carlos Azaustre</title>
      </Head>

      <main>
        <h1>carlosazaustre.es</h1>

        {posts.map((post) => (
          <Link href={post.slug} key={post.slug}>
            <a>
              <h2>{post.title} &rarr;</h2>
              <p>{post.date}</p>
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts");
  return {
    props: { posts },
  };
}
