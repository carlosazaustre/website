import Head from "next/head";
import { UI, Icons, YouTube, Footer, NewsletterForm } from "@czstr/ui";

import { ImageProfile } from "../components/ImageProfile";
import latestVideos from "../data/latestVideos.json";

const ENV =
  process.env.NODE_ENV !== "production" ? "localhost" : "cazaustre.dev";

export default function Home() {
  const lastVideoId = latestVideos[0]?.snippet?.resourceId?.videoId;
  const titleVideo = latestVideos[0]?.snippet?.title;

  return (
    <div>
      <Head>
        <title>Carlos Azaustre | Programación Web y JavaScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UI.Box
        w="100%"
        bg="secondary.900"
        borderTop="8px solid"
        borderColor="brand.900"
        color="white"
      >
        <UI.Container justify="center" align="center">
          <ImageProfile
            fullName="Carlos Azaustre"
            username="@carlosazaustre"
            bio="Ingeniero de Software. GDE & MVP. Divulgando sobre Programación Web y JavaScript."
            image="/assets/carlos-azaustre.png"
            alt="Carlos Azaustre - Aprende Programación Web y JavaScript"
          />

          <UI.Button
            colorScheme="discord"
            variant="solid"
            color="black"
            size="md"
            height="48px"
            width="100%"
            maxWidth="545px"
            borderColor="brand.900"
            leftIcon={<Icons.IconDiscord />}
            my={2}
          >
            <UI.Link href="https://discord.gg/carlosazaustre">
              Únete a la Comunidad en Discord
            </UI.Link>
          </UI.Button>

          <UI.Button
            colorScheme="red"
            variant="solid"
            color="black"
            size="md"
            height="48px"
            width="100%"
            maxWidth="545px"
            leftIcon={<Icons.IconYoutube />}
            my={2}
          >
            <UI.Link href="https://youtube.com/@carlosazaustre">
              Tutoriales y Cursos Gratis
            </UI.Link>
          </UI.Button>

          <UI.Button
            colorScheme="purple"
            variant="solid"
            color="black"
            size="md"
            height="48px"
            width="100%"
            maxWidth="545px"
            borderColor="brand.900"
            leftIcon={<Icons.IconTwitch />}
            my={2}
          >
            <UI.Link href="https://m.twitch.tv/carlosazaustre">
              Livecoding en Directo
            </UI.Link>
          </UI.Button>

          <UI.Link href="https://amzn.to/3DGJZaX">
            <UI.Image
              src="/assets/panel-book.png"
              alt="Libro Aprendiendo JavaScript"
              my={4}
            />
          </UI.Link>

          <UI.Button
            colorScheme="brand"
            variant="solid"
            color="black"
            size="md"
            height="48px"
            width="100%"
            maxWidth="545px"
            leftIcon={<Icons.IconComputerDesktop />}
            my={2}
          >
            <UI.Link href="https://carlosazaustre.es/workspace">
              Mi Setup (Espacio de trabajo)
            </UI.Link>
          </UI.Button>

          <UI.Button
            colorScheme="brand"
            variant="solid"
            color="black"
            size="md"
            height="48px"
            width="100%"
            maxWidth="545px"
            leftIcon={<Icons.IconStudy />}
            my={2}
          >
            <UI.Link href="https://carlosazaustre.es/cursos">
              Cursos de Programación GRATIS
            </UI.Link>
          </UI.Button>

          <UI.Button
            colorScheme="linkedin"
            variant="solid"
            color="black"
            size="md"
            height="48px"
            width="100%"
            maxWidth="545px"
            leftIcon={<Icons.IconLinkedin />}
            my={2}
          >
            <UI.Link href="https://linkedin.com/in/carlosazaustre">
              Conectemos en LinkedIn
            </UI.Link>
          </UI.Button>

          <UI.Button
            colorScheme="twitter"
            variant="solid"
            color="black"
            size="md"
            height="48px"
            width="100%"
            maxWidth="545px"
            leftIcon={<Icons.IconTwitter />}
            my={2}
          >
            <UI.Link href="https://twitter.com/carlosazaustre">
              Sígueme en Twitter
            </UI.Link>
          </UI.Button>

          <UI.Button
            colorScheme="black"
            variant="outline"
            size="md"
            height="48px"
            width="100%"
            maxWidth="545px"
            leftIcon={<Icons.IconGithub />}
            my={2}
          >
            <UI.Link href="https://github.com/carlosazaustre">
              Sígueme en Github
            </UI.Link>
          </UI.Button>

          <YouTube videoId={lastVideoId} title={titleVideo} />

          <NewsletterForm />
        </UI.Container>
        <Footer />
      </UI.Box>
    </div>
  );
}
