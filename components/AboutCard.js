import { Box, Heading, Flex, Text, Img } from "@chakra-ui/react";

export const AboutCard = () => {
  return (
    <Box bg="black" borderRadius="lg" p="8">
      <Heading as="h4" color="brand.900">
        Sobre Mi
      </Heading>
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
          Llevo {new Date().getFullYear() - 2013} años documentando en éste blog
          todo lo que aprendo y así compartirlo con el resto de la comunidad.
        </Text>
      </Box>
    </Box>
  );
};
