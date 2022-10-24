import { Fragment } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { orderByDate } from "@/lib/order-by-date";
import { formatDate } from "@/lib/format-date";
import {
  elements as UI,
  Footer,
  OpenGraph,
  SocialNetworks,
  SectionLinks,
} from "@/components";

const StyledPostTitle = styled.p`
  font-weight: 400;
  text-decoration: underline dashed;
  text-underline-position: under;

  &:hover {
    font-weight: var(--chakra-fontWeights-bold);
  }
`;

export default function Home({ posts }) {
  return (
    <Fragment>
      <OpenGraph />

      <UI.Box bg="secondary.900" color="white">
        <UI.Container maxW="container.md" pt="8">
          <SectionLinks />
          <UI.Heading fontFamily="heading" as="h1" size="xl" my="4">
            Carlos Azaustre
          </UI.Heading>
          <UI.Text fontFamily="heading" as="h2" fontSize="md" my="4">
            Ingeniero de software y creador de contenido sobre programación web
            y JavaScript. Google Developer Expert en Tecnologías Web y Microsoft
            MVP 2022.
          </UI.Text>
          <SocialNetworks />

          <UI.Text
            fontFamily="heading"
            fontWeight="600"
            as="h3"
            fontSize="xl"
            my="4"
          >
            Últimas publicaciones
          </UI.Text>
          {posts.map((post) => (
            <Link href={`/${post.slug}`} key={post.slug}>
              <UI.Flex direction="column" my="4">
                <UI.Box w="140px">
                  <UI.Text color="brand.900" fontWeight="700">
                    {formatDate(post.date)}
                  </UI.Text>
                </UI.Box>
                <UI.Spacer />
                <UI.Box>
                  <StyledPostTitle>{post.title}</StyledPostTitle>
                </UI.Box>
              </UI.Flex>
            </Link>
          ))}
          <Link href="/blog">Ver todas</Link>
        </UI.Container>
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
