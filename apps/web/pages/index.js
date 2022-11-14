import Link from "next/link";
import {
  Footer,
  NewsletterForm,
  SpotifyPodcast,
  SocialNetworks,
  UI,
} from "@czstr/ui";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { orderByDate } from "@/lib/order-by-date";
import { formatDate } from "@/lib/format-date";
import { PostListItem, OpenGraph, SectionLinks } from "@/components";
import latestVideos from "@/data/latestVideos.json";

export default function Home({ posts }) {
  return (
    <>
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

          <UI.Flex
            direction={["column", "row"]}
            justify="space-between"
            align="left"
          >
            <UI.Box width={["100%", "75%"]} order={[2, 1]}>
              <UI.Heading
                fontFamily="heading"
                as="h1"
                size="xl"
                mt={8}
                mb={4}
                textAlign="left"
              >
                Carlos Azaustre
              </UI.Heading>
              <UI.Heading
                fontFamily="body"
                as="h2"
                size="md"
                my={2}
                fontWeight="500"
              >
                Desarrollador y Formador en JavaScript.
              </UI.Heading>

              <UI.Text fontSize="md" lineHeight={1.75} mt={[4, 0]} mb={4}>
                Ingeniero en Telemática, con 10+ años de experiencia, trabajando
                en empresas como Google, IBM y Eventbrite. Divulgador y creador
                de contenido sobre programación y desarrollo web a través de
                YouTube. Google Developer Expert (GDE) en Web. Premiado como
                Microsoft MVP en 2022.
              </UI.Text>
            </UI.Box>

            <UI.Box
              width={["25%", "18%"]}
              order={[1, 2]}
              alignSelf={["start", "center"]}
            >
              <UI.Image
                width="100%"
                borderRadius="full"
                src="/assets/carlos_azaustre.png"
                alt="Carlos Azaustre"
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
                  <PostListItem
                    title={post.title}
                    date={formatDate(post.date)}
                    tags={post.tags}
                  />
                </Link>
              ))}
              <Link pt={8} href="/blog" color="brand.900">
                Ver todas →
              </Link>
            </UI.Box>

            {/* Sidebar */}
            <UI.Box w={["100%", "100%", "25%"]}>
              <UI.Box
                as="a"
                display="block"
                borderRadius={8}
                href="https://amzn.to/3DGJZaX"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <UI.Image borderRadius="md" src="/assets/panel-book.png" />
              </UI.Box>

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

              <UI.Text
                fontFamily="heading"
                fontWeight="600"
                as="h3"
                fontSize="xl"
                my="4"
              >
                Último podcast
              </UI.Text>
              <SpotifyPodcast episode="66ytmkgGU1SQ2Z7XicMnc2?si=Do8Ggb7xQBK5piEEEF4U8Q" />

              <NewsletterForm />
            </UI.Box>
          </UI.Flex>
        </UI.Container>
      </UI.Box>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("posts");
  const posts = allPosts.sort(orderByDate).slice(0, 10);

  return {
    props: { posts },
  };
}
