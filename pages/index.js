import { Fragment } from "react";
import Link from "next/link";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { orderByDate } from "@/lib/order-by-date";
import { formatDate } from "@/lib/format-date";
import {
  elements as UI,
  Footer,
  OpenGraph,
  SocialNetworks,
} from "@/components";

export default function Home({ posts }) {
  return (
    <Fragment>
      <OpenGraph />

      <UI.Box bg="secondary.900" color="white" maxHeight={{ md: "780px" }}>
        <UI.Container maxW="container.2xl">
          <UI.Text as="h1" fontSize="4xl">
            Carlos Azaustre
          </UI.Text>
          <UI.Text as="h2" fontSize="md">
            Ingeniero de software y creador de contenido sobre programación web
            y JavaScript - Google Developer Expert en Tecnologías Web -
            Microsoft MVP 2022.
          </UI.Text>
          <SocialNetworks />

          <UI.Text as="h3" fontSize="xl">
            Últimas publicaciones
          </UI.Text>
          {posts.map((post) => (
            <Link href={`/${post.slug}`} key={post.slug}>
              <UI.Flex direction="column">
                <UI.Box w="140px">
                  <UI.Text color="brand.900">{formatDate(post.date)}</UI.Text>
                </UI.Box>
                <UI.Spacer />
                <UI.Box>
                  <UI.Text as="u">{post.title}</UI.Text>
                </UI.Box>
              </UI.Flex>
            </Link>
          ))}
        </UI.Container>
        <Link href="/blog">Ver todos</Link>
      </UI.Box>

      <Footer />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("posts");
  const posts = allPosts.sort(orderByDate).slice(0, 10);

  return {
    props: { posts },
  };
}
