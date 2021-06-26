import { Fragment } from "react";
import NextImage from "next/image";

import { YouTube, elements as UI, icons as Icons } from "@/components";
import latestVideos from "@/data/latestVideos.json";

const Item = ({ children, href }) => {
  return (
    <UI.Link href={href}>
      <UI.Box
        bg="white"
        borderWidth="1px"
        boxShadow="lg"
        borderRadius="lg"
        py={4}
        px={2}
        my={2}
        fontSize="xs"
        fontWeight="bold"
        fontFamily="heading"
      >
        {children}
      </UI.Box>
    </UI.Link>
  );
};

const MediaItem = ({ children, imageSrc, size, href, title }) => {
  return (
    <UI.Link href={href}>
      <UI.Box
        bg="white"
        borderWidth="1px"
        boxShadow="lg"
        borderRadius="lg"
        my={2}
        fontSize="xs"
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

export default function Info() {
  const lastVideoId = latestVideos[0]?.snippet?.resourceId?.videoId;
  const titleVideo = latestVideos[0]?.snippet?.title;

  return (
    <UI.Box bg="gray.200" borderTopWidth="5px" borderColor="brand.900">
      <UI.Container size="sm">
        <UI.Box
          as="header"
          mx="auto"
          display="flex"
          d="column"
          align="center"
          px={2}
          pt={8}
          pb={4}
        >
          <NextImage
            width="100px"
            height="100px"
            src="/assets/carlos-azaustre-gde-web.png"
            alt="Carlos Azaustre - Google Developer Expert en Tecnologías Web"
          />
          <UI.Heading as="h1" size="lg">
            Carlos Azaustre
          </UI.Heading>
          <UI.Text fontSize="sm" mt={2}>
            Ingeniero de Software y Formador. Creo y comparto contenido, para
            que aprendas Programación y domines JavaScript.
          </UI.Text>
          <UI.Text fontSize="sm" mt={2}>
            Reconocido como Google Developer Expert (GDE) en Tecnologías Web y
            Auth0 Ambassador.
          </UI.Text>
        </UI.Box>
        <UI.Box
          as="main"
          mx="auto"
          display="flex"
          d="column"
          align="center"
          p={2}
        >
          <UI.Heading as="h3" size="md" m={4} mt={8}>
            Último video en YouTube
          </UI.Heading>
          <UI.Text fontSize="sm" fontFamily="heading">
            {titleVideo}
          </UI.Text>
          <YouTube videoId={lastVideoId} size="minimal" />

          <UI.Heading as="h3" size="md" m={4} mt={8}>
            Recursos
          </UI.Heading>
          <Item href="/mentoría">Reserva una mentoría 1:1 personalizada</Item>
          <Item href="/discord">Únete a la comunidad en Discord (+1.4K)</Item>
          <Item href="/newsletter">
            Mantente al día apuntándote a la Newsletter
          </Item>

          <MediaItem
            title="Aprende JavaScript desde cero con mi Libro. Consíguelo desde Amazon"
            href="https://www.amazon.com/gp/product/B08TZ3HSYZ"
            imageSrc="/assets/foto-libro-javascript.jpeg"
            size="230px"
          />

          <UI.Heading as="h3" size="md" m={4} mt={8}>
            Cursos Gratis
          </UI.Heading>
          <MediaItem
            title="JavaScript desde Cero"
            imageSrc="/assets/curso-programacion-image.png"
          />
          <MediaItem
            title="Node.js / Express y MongoDB"
            imageSrc="/assets/curso-nodejs-image.png"
            size="230px"
          />

          <UI.Heading as="h3" size="md" m={4} mt={8}>
            También estoy en
          </UI.Heading>
          <UI.Flex align="center" justify="center" wrap="wrap">
            <UI.Link
              m={1}
              href="//youtube.com/carlosazaustre?sub_confirmation=1"
            >
              <UI.IconButton colorScheme="red" icon={<Icons.IconYoutube />} />
            </UI.Link>
            <UI.Link m={1} href="//twitch.tv/carlosazaustre">
              <UI.IconButton colorScheme="purple" icon={<Icons.IconTwitch />} />
            </UI.Link>
            <UI.Link m={1} href="//twitter.com/carlosazaustre">
              <UI.IconButton
                colorScheme="twitter"
                icon={<Icons.IconTwitter />}
              />
            </UI.Link>
            <UI.Link m={1} href="//instagram.com/carlosazaustre">
              <UI.IconButton
                colorScheme="pink"
                icon={<Icons.IconInstagram />}
              />
            </UI.Link>
            <UI.Link m={1} href="//tiktok.com/@carlosazaustre">
              <UI.IconButton
                colorScheme="blackAlpha"
                icon={<Icons.IconTiktok />}
              />
            </UI.Link>
            <UI.Link m={1} href="//linkedin.com/in/carlosazaustre">
              <UI.IconButton
                colorScheme="linkedin"
                icon={<Icons.IconLinkedin />}
              />
            </UI.Link>
            <UI.Link href="/">carlosazaustre.es</UI.Link>
          </UI.Flex>
        </UI.Box>
      </UI.Container>
    </UI.Box>
  );
}
