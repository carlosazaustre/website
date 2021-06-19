import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import { Text } from "./elements";
import { ButtonCTA } from "./ButtonCTA";

export const Hero = () => {
  return (
    <Fragment>
      <Text fontFamily="heading" fontSize={["3xl", "4xl"]}>
        Hola 👋🏼, soy
      </Text>{" "}
      <Text
        as="h2"
        fontFamily="heading"
        fontSize={["3xl", "4xl"]}
        fontWeight="bold"
      >
        Carlos Azaustre
      </Text>
      <Text as="h3" fontSize={["lg", "xl"]}>
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
      <Image
        layout="responsive"
        width={460}
        height={150}
        src="/assets/company-logos.png"
        alt="Google, IBM, Eventbrite. Chefly"
      />
    </Fragment>
  );
};
