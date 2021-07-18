import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { Text, Box } from "./elements";
import { ButtonCTA } from "./ButtonCTA";

export const Hero = () => {
  return (
    <Fragment>
      <Text
        fontFamily="heading"
        fontWeight="normal"
        fontSize={["4xl", "5xl"]}
        lineHeight={1.1}
        textAlign={["center", "center", "center", "left"]}
      >
        Hola 👋🏼, soy
      </Text>{" "}
      <Text
        as="h2"
        fontFamily="heading"
        fontSize={["4xl", "5xl"]}
        fontWeight="black"
        lineHeight={1.1}
        textAlign={["center", "center", "center", "left"]}
      >
        Carlos Azaustre
      </Text>
      <Text
        as="h3"
        fontFamily="heading"
        fontWeight="normal"
        fontSize={["sm", "md"]}
        textAlign={["center", "center", "center", "left"]}
        my={4}
      >
        Desarrollador <strong>JavaScript</strong> con 10+ años de experiencia.
        Actualmente formador y divulgador en tecnologías web a través de{" "}
        <strong>YouTube</strong>, dónde ya somos más de 60,000!
        <br />
        <br />
        Reconocido por Google como <strong>Developer Expert (GDE)</strong> en
        Web, y <strong>Auth0 Ambassador</strong>.
      </Text>
      <Link href="/cursos/programacion-javascript">
        <a><ButtonCTA>¡Quiero aprender JavaScript!</ButtonCTA></a>
      </Link>
      <Box mx={"auto"}>
        <Image
          layout="fixed"
          width={400}
          height={150}
          src="/assets/company-logos.png"
          alt="Google, IBM, Eventbrite. Chefly"
        />
      </Box>
    </Fragment>
  );
};
