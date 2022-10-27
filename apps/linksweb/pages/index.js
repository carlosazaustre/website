import Head from "next/head";
import { Container, Spacer, Text, Link as UILink } from "@nextui-org/react";

import { SocialLinks } from "../components/SocialLinks";
import { YouTubePlayer } from "../components/YouTubePlayer";
import { CardInfo } from "../components/CardInfo";
import { ImageProfile } from "../components/ImageProfile";
import { Courses } from "../components/Courses";
import { LinkButton } from "../components/LinkButton";

import latestVideos from "../data/latestVideos.json";

const ENV =
  process.env.NODE_ENV !== "production" ? "localhost" : "cazaustre.dev";
const links = [
  { name: "twitter", url: "https://twitter.com/carlosazaustre" },
  { name: "instagram", url: "https://instagram.com/carlosazaustre" },
  { name: "tiktok", url: "https://tiktok.com/carlosazaustre" },
  { name: "github", url: "https://github.com/carlosazaustre" },
  { name: "linkedin", url: "https://linkedin.com/in/carlosazaustre" },
];
const courseList = [
  {
    title: "Curso de React.js",
    subtitle: "Curso en YouTube",
    image: "/assets/logo-react.png",
    accent: "secondary",
    link: "//carlosazaustre.es/cursos/reactjs-gratis",
    summary:
      "Entiende la librería más demandada de JavaScript, React.js. Curso práctico y gratuito en video dónde aprenderás a crear una aplicación web con React desde cero.",
  },
  {
    title: "Curso de Node.js",
    subtitle: "Curso en YouTube",
    image: "/assets/logo-nodejs.png",
    accent: "success",
    link: "//carlosazaustre.es/cursos/nodejs-gratis",
    summary:
      "Utiliza JavaScript en el lado del servidor con Node.js. Aprende a crear un API REST desde cero para utilizarlo en tus proyectos. 20 videos con horas de contenido sobre Express y MongoDB.",
  },
  {
    title: "Curso de JavaScript",
    subtitle: "Curso en YouTube",
    image: "/assets/logo-js.jpg",
    accent: "warning",
    link: "//carlosazaustre.es/cursos/programacion-javascript",
    summary:
      "Aprende el lenguaje de programación fundamental del desarrollo web. Uno de los pilares del Frontend junto a HTML y CSS. Curso gratuito en Youtube con más de 2horas de contenido.",
  },
];

export default function Home() {
  const lastVideoId = latestVideos[0]?.snippet?.resourceId?.videoId;
  const titleVideo = latestVideos[0]?.snippet?.title;

  return (
    <div>
      <Head>
        <title>Carlos Azaustre | Programación Web y JavaScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container justify="center" align="center">
        <ImageProfile
          fullName="Carlos Azaustre"
          username="@carlosazaustre"
          bio={`Google Developer Expert (GDE) en Tecnologías Web.
          <br />
          Microsoft MVP 2022.
          <br />
          Ingeniero de Software y creador de contenido sobre Programación Web y
          JavaScript`}
          image="/assets/carlos-azaustre.png"
          alt="Carlos Azaustre - Aprende Programación Web y JavaScript"
        />

        <LinkButton
          link="//discord.gg/carlosazaustre"
          network="discord"
          text="Únete a la Comunidad en Discord"
        />

        <LinkButton
          link="//youtube.com/carlosazaustre?sub_confirmation=1"
          network="youtube"
          text="Tutoriales y Cursos Gratis"
        />

        <LinkButton
          link="//twitch.tv/carlosazaustre"
          network="twitch"
          text="Livecoding en Directo"
        />

        <SocialLinks links={links} />

        <YouTubePlayer videoID={lastVideoId} title={titleVideo} />

        <Courses courses={courseList} />

        <CardInfo
          title="Consigue mi libro"
          subtitle="Aprendiendo JavaScript"
          image="/assets/libro-aprendiendo-javascript.jpg"
          url="//carlosazaustre.es/libros/aprendiendo-javascript"
          bottomText="A la venta en Amazon (Versiones Digital y en Papel)"
          bottomCTA="Comprar libro"
        />

        <CardInfo
          title="Mi Setup"
          subtitle="Mi espacio de trabajo"
          image="/assets/setup_2022.jpg"
          url="//carlosazaustre.es/workspace"
        />

        <Spacer y={1} />
        <Text size="xs" color="white">
          <UILink color="primary" href="//carlosazaustre.es">
            carlosazaustre.es
          </UILink>
        </Text>
      </Container>
      <Spacer y={1} />
    </div>
  );
}
