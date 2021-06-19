import { Fragment } from "react";

import { Card } from "./_Card";
import { Box, Flex, Text, Img } from "../elements";

export const AboutCard = () => {
  return (
    <Card
      type="aside"
      bgColor="secondary.900"
      headerColor="brand.900"
      headerTitle="Sobre Mi"
    >
      <Fragment>
        <Flex justify="center" py="4">
          <Img
            boxSize="96px"
            borderRadius="full"
            src="/assets/carlos-azaustre-gde-web.png"
            alt="Carlos Azaustre"
          />
        </Flex>
        <Box color="white" py="4">
          <Text py="2">
            Soy Carlos Azaustre. Desarrollador web desde hace{" "}
            {new Date().getFullYear() - 2011} años.
          </Text>
          <Text py="2">
            He trabajado en Google, IBM y Eventbrite. Soy GDE (Google Developer
            Expert) en Tecnologías Web.
          </Text>
          <Text py="2">
            Llevo {new Date().getFullYear() - 2013} años documentando en éste
            blog todo lo que aprendo y así compartirlo con el resto de la
            comunidad.
          </Text>
        </Box>
      </Fragment>
    </Card>
  );
};
