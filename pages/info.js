import NextImage from "next/image";
import {Flex, Img } from "../components/elements";

import {
  YouTube,
  SpotifyPodcast,
  elements as UI,
  socialBtns as Social,
} from "@/components";
import latestVideos from "@/data/latestVideos.json";
import latestPodcasts from "@/data/latestPodcasts.json";

const Item = ({ children, href }) => {
  return (
    <UI.Link href={href}>
      <UI.Box
        bg="brand.900"
        borderWidth="1px"
        boxShadow="lg"
        borderRadius="lg"
        py={4}
        px={2}
        my={4}
        fontSize="lg"
        fontWeight="bold"
        fontFamily="heading"
      >
        {children}
      </UI.Box>
    </UI.Link>
  );
};

const MediaItem = ({ imageSrc, size, href, title }) => {
  return (
    <UI.Link href={href}>
      <UI.Box
        bg="white"
        borderWidth="1px"
        boxShadow="lg"
        borderRadius="lg"
        my={8}
        fontSize="md"
        fontWeight="bold"
        fontFamily="heading"
        overflow="hidden"
      >
        <NextImage
          src={imageSrc}
          width="360px"
          height={size || "200px"}
          layout="responsive"
          alt={title}
        />

        <UI.Text p={2}>{title}</UI.Text>
      </UI.Box>
    </UI.Link>
  );
};

const SectionTitle = ({ children }) => {
  return (
    <UI.Heading as="h3" size="lg" m={4} mt={2}>
      {children}
    </UI.Heading>
  );
};

const Header = ({ avatar, username, description }) => {
  return (
    <UI.Box
      as="header"
      mx="auto"
      display="flex"
      d="column"
      align="center"
      px={2}
      pt={2}
      pb={2}
    >
      <Flex justify="center" py="4">
        <Img
          boxSize="96px"
          borderRadius="full"
          src={avatar}
          alt="Carlos Azaustre - Google Developer Expert en Tecnologías Web"
        />
      </Flex>
      <UI.Heading as="h1" size="xl">
        {username}
      </UI.Heading>
      <UI.Text fontSize="lg" mt={0}>
        {description}
      </UI.Text>
    </UI.Box>
  );
};

const Container = ({ children }) => {
  return (
    <UI.Box bg="grayblue.900" borderTopWidth="5px" borderColor="brand.900">
      <UI.Container size="sm">{children}</UI.Container>
    </UI.Box>
  );
};

const InnerContainer = ({ children }) => {
  return (
    <UI.Box as="main" mx="auto" display="flex" d="column" align="center" p={2}>
      {children}
    </UI.Box>
  );
};

export default function Info() {
  const lastVideoId = latestVideos[0]?.snippet?.resourceId?.videoId;
  const titleVideo = latestVideos[0]?.snippet?.title;

  return (
    <Container>
      <Header
        avatar="/assets/carlos-azaustre-gde-web.jpeg"
        title="Carlos Azaustre"
        description="Carlos Azaustre"
      />
      <InnerContainer>
        <SectionTitle>📺 Último video en YouTube</SectionTitle>
        <YouTube videoId={lastVideoId} size="minimal" />
        <SectionTitle>🎧 Escucha el podcast</SectionTitle>
        <SpotifyPodcast
          size="compact"
          theme="dark"
          episode={latestPodcasts[0].id}
        />

        <SectionTitle>Recursos</SectionTitle>
        <UI.Flex align="center" justify="center" wrap="wrap">
          <Social.Youtube href="//youtube.com/carlosazaustre?sub_confirmation=1" />
          <Social.Twitch href="//twitch.tv/carlosazaustre" />
          <Social.Twitter href="//twitter.com/carlosazaustre" />
          <Social.Instagram href="//instagram.com/carlosazaustre" />
          <Social.Tiktok href="//tiktok.com/@carlosazaustre" />
          <Social.Linkedin href="//linkedin.com/in/carlosazaustre" />
        </UI.Flex>

        <Item href="https://discord.gg/w5GG5gZQNe">Únete a la comunidad en Discord (+1.4K)</Item>
        <Item href="/p/mentoria">Reserva una mentoría 1:1 personalizada</Item>
        <Item href="https://www.getrevue.co/profile/carlosazaustre">
          Mantente al día apuntándote a la Newsletter
        </Item>

        <MediaItem
          title="Aprende JavaScript desde cero con mi libro. Consíguelo desde Amazon"
          href="/libros/aprendiendo-javascript"
          imageSrc="/assets/foto-libro-javascript.jpeg"
          size="230px"
        />
        <MediaItem
          title="Mi Setup"
          href="/workspace"
          imageSrc="/assets/setup-image.jpeg"
          size="230px"
        />

        <SectionTitle>Cursos Gratis</SectionTitle>
        <MediaItem
          href="/cursos/programacion-javascript"
          title="JavaScript desde Cero"
          imageSrc="/assets/curso-programacion-image.png"
        />
        <MediaItem
          href="/cursos/nodejs-gratis"
          title="Node.js / Express y MongoDB"
          imageSrc="/assets/curso-nodejs-image.png"
          size="230px"
        />

        <UI.Link href="/">carlosazaustre.es</UI.Link>
      </InnerContainer>
    </Container>
  );
}
