import NextLink from "next/link";
import { Text, Link } from "@chakra-ui/react";
import { CardHome } from "./CardHome";

export const AboutCardHome = () => {
  return (
    <CardHome headerTitle="About">
      <>
        <Text py="2">
          ¡Hola! Soy Carlos Azaustre. Llevo desarrollando web desde hace{" "}
          {new Date().getFullYear() - 2011} años.
        </Text>
        <Text py="2">
          He trabajado en varias empresas como Google, IBM y Eventbrite.
        </Text>
        <Text py="2">
          Soy GDE (Google Developer Expert) en Tecnologías Web y Auth0
          Ambassaddor además de divulgador de contenido a través de YouTube
          (¡Dónde ya somos más de 60,000 subs!)
        </Text>
        <NextLink href="/sobre-mi">
          <Link py={4} color="brand.900">
            Más sobre mi
          </Link>
        </NextLink>
      </>
    </CardHome>
  );
};
