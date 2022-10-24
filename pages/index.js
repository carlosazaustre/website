import { Fragment } from "react";
import Link from "next/link";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { orderByDate } from "@/lib/order-by-date";
import { formatDate } from "@/lib/format-date";
import {
  elements as UI,
  PostListItem,
  Footer,
  OpenGraph,
  SocialNetworks,
  SectionLinks,
  NewsletterFormCard,
} from "@/components";
import latestVideos from "@/data/latestVideos.json";

export default function Home({ posts }) {
  return (
    <Fragment>
      <OpenGraph />
      <UI.Box
        w="100%"
        bg="secondary.900"
        borderTop="8px solid"
        borderColor="brand.900"
        color="white"
      >
        <UI.Container maxW="container.md" pt="8">
          <SectionLinks />
          <UI.Heading
            fontFamily="heading"
            as="h1"
            size="xl"
            mt={8}
            mb={4}
            textAlign={["center", "left"]}
          >
            Carlos Azaustre
          </UI.Heading>

          <UI.Flex
            direction={["column", "row"]}
            justify="space-between"
            align="center"
          >
            <UI.Box width={["100%", "75%"]} order={[2, 1]}>
              <UI.Text
                fontFamily="heading"
                fontSize="md"
                lineHeight={1.75}
                mt={[4, 0]}
                mb={4}
              >
                <strong>Desarrollador JavaScript</strong> con 10+ años de
                experiencia. Divulgador y{" "}
                <strong>creador de contenido sobre programación</strong> y
                desarrollo web a través de YouTube.{" "}
                <strong>Google Developer Expert (GDE)</strong> en Web. Premiado
                como <strong>Microsoft MVP</strong> en 2022.
              </UI.Text>
            </UI.Box>
            <UI.Box width={["25%", "18%"]} order={[1, 2]}>
              <UI.Image
                width="100%"
                borderRadius="full"
                src="/assets/carlos_azaustre.png"
                alt="Carlos Azaustre"
                mt={[4, 0]}
                mb={4}
              />
            </UI.Box>
          </UI.Flex>
          <SocialNetworks />

          <UI.Flex direction={["column", "column", "row"]}>
            <UI.Box w={["100%", "100%", "75%"]}>
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
                <Link href={post.slug} key={post.slug}>
                  <a>
                    <PostListItem
                      title={post.title}
                      date={formatDate(post.date)}
                      tags={post.tags}
                    />
                  </a>
                </Link>
              ))}
              <UI.Link pt={8} href="/blog" color="brand.900">
                <a>Ver todas →</a>
              </UI.Link>
            </UI.Box>

            <UI.Box w={["100%", "100%", "25%"]}>
              <UI.Text
                fontFamily="heading"
                fontWeight="600"
                as="h3"
                fontSize="xl"
                my="4"
              >
                Último vídeo en YouTube
              </UI.Text>

              <UI.Box
                as="a"
                display="block"
                p={4}
                mb={4}
                borderRadius={8}
                backgroundColor="secondary.500"
                href={`https://youtube.com/watch?v=${latestVideos[0]?.snippet?.resourceId?.videoId}`}
                rel="noopener noreferrer nofollow"
              >
                <UI.Image
                  borderRadius="md"
                  src={latestVideos[0]?.snippet?.thumbnails?.standard?.url}
                />
                <UI.Text py={4}>{latestVideos[0]?.snippet?.title}</UI.Text>
              </UI.Box>

              <NewsletterFormCard />
            </UI.Box>
          </UI.Flex>
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
