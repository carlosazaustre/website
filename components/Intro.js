import { Fragment } from "react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";

import { CompanyLogos } from "./icons/CompanyLogos";
import { ButtonCTA } from "./ButtonCTA";

export const Intro = () => {
  return (
    <Fragment>
      <Text fontFamily="heading" fontSize="4xl">
        Hola 👋🏼, soy
      </Text>{" "}
      <Text as="h2" fontFamily="heading" fontSize="4xl" fontWeight="bold">
        Carlos Azaustre
      </Text>
      <Text as="h3" fontSize="xl">
        Desarrollador <strong>JavaScript</strong> con 10+ años de experiencia.
        Actualmente formador y divulgador en tecnologías web a través de{" "}
        <strong>YouTube</strong>, dónde ya somos más de 50,000!
        <br />
        <br />
        Reconocido por Google como <strong>Developer Expert (GDE)</strong> en
        Web, y <strong>Auth0 Ambassador</strong>.
      </Text>
      <Link href="https://youtube.com/c/CarlosAzaustre?sub_confirmation=1">
        <ButtonCTA>¡Quiero aprender JavaScript!</ButtonCTA>
      </Link>
      <CompanyLogos />
    </Fragment>
  );
};
