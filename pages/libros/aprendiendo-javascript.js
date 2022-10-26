import Image from "next/image";
import {
  LayoutLanding,
  SellItem,
  ReviewCard,
  elements as UI,
  icons as Icons,
} from "@/components";
import { Icon } from "@chakra-ui/react";

const BuyOnAmazon = () => (
  <UI.Accordion>
    <UI.AccordionItem border="0">
      <UI.Box
        as="h2"
        bg="brand.900"
        color="secondary.900"
        p={4}
        mt={8}
        mb={2}
        mx="auto"
        width={["100%", "100%", "100%", "80%"]}
        rounded="lg"
        shadow="base"
      >
        <UI.AccordionButton>
          <UI.Flex align="center" justify="center" textAlign="center" mx="auto">
            <UI.Text
              fontSize="2xl"
              fontFamily="heading"
              fontWeight="bold"
              mr={4}
            >
              Comprar en
            </UI.Text>
            <Image src="/assets/logo-amazon.png" width="120px" height="40px" />
          </UI.Flex>
        </UI.AccordionButton>
      </UI.Box>
      <UI.AccordionPanel>
        <UI.UnorderedList
          styleType="none"
          mx="auto"
          width={["100%", "100%", "100%", "80%"]}
          fontFamily="heading"
        >
          <UI.ListItem
            bg="brand.500"
            color="black"
            p={4}
            rounded="lg"
            mb={2}
            _hover={{ bg: "brand.900" }}
          >
            <a href="https://amzn.to/2UmJ8JQ">
              <UI.Text fontSize="xl" fontWeight="bold">
                🇪🇸 | Comprar desde Amazon España
              </UI.Text>
            </a>
          </UI.ListItem>
          <UI.ListItem
            bg="brand.500"
            color="black"
            p={4}
            rounded="lg"
            mb={2}
            _hover={{ bg: "brand.900" }}
          >
            <a href="https://www.amazon.com/dp/B08TZ3HSYZ">
              <UI.Text fontSize="xl" fontWeight="bold">
                🌎 | Comprar desde Amazon USA para Latinoamérica
              </UI.Text>
            </a>
          </UI.ListItem>
        </UI.UnorderedList>
      </UI.AccordionPanel>
    </UI.AccordionItem>
  </UI.Accordion>
);

export default function BookJavaScriptPage() {
  const metadata = {
    title: "Aprendiendo JavaScript",
    description:
      "Libro en español para comprender el lenguaje de programación web",
    image: "/assets/cards/book-javascript.png",
  };

  return (
    <LayoutLanding metadata={metadata}>
      {/* Hero Section */}
      <UI.Heading as="h1" size="xl" my={8}>
        Aprendiendo JavaScript
      </UI.Heading>
      <UI.Flex as="header" direction={["column", "row"]} align="flex-start">
        <UI.Box w={["100%", "30%"]}>
          <Image
            width="723"
            height="700"
            src="/assets/aprendiendo-javascript-libro-3d.png"
          />
        </UI.Box>
        <UI.Box w={["100%", "70%"]} pt={2} pl={4}>
          <UI.Text my={2} fontSize="lg">
            Aprende las bases del lenguaje web más demandado. Desde cero hasta
            ECMAScript 6+. Partiendo de las bases y poco a poco ampliándose
            hasta ver las nuevas características del lenguaje para hacer un uso
            profesional de él.
          </UI.Text>
          <UI.Box
            bg="secondary.500"
            rounded="lg"
            p={2}
            my={2}
            direction="row"
            align="center"
            justify="center"
            textAlign="center"
          >
            <UI.Text>
              <a href="https://www.amazon.es/Aprendiendo-JavaScript-Desde-hasta-ECMAScript/dp/B08TZ3HSYZ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=aprendiendo+javascript&qid=1625415326&sr=8-1#customerReviews">
                74 Valoraciones en Amazon
              </a>
            </UI.Text>
            <UI.HStack
              my={2}
              mx="auto"
              justify="center"
              color="brand.900"
              fontSize="xl"
            >
              <Icons.IconStar />
              <Icons.IconStar />
              <Icons.IconStar />
              <Icons.IconStar />
              <Icons.IconStarHalf />
            </UI.HStack>
          </UI.Box>
        </UI.Box>
      </UI.Flex>

      <BuyOnAmazon />
      <UI.Box>
        <UI.Flex
          w={["100%", "100%", "100%", "100%", "65%"]}
          mx="auto"
          direction="column"
          align="center"
          justify="space-around"
        >
          <UI.Text fontFamily="heading" mt={8} color="white">
            Disponible en versión digital
          </UI.Text>
          <SellItem
            type="small"
            logo="/assets/logo-leanpub.png"
            url="//leanpub.com/aprendiendo-javascript"
            w="110px"
            h="20px"
          >
            PDF | ePub | Mobi
          </SellItem>
        </UI.Flex>
      </UI.Box>

      <UI.Heading as="h3" my={8} mt={2} fontSize="2xl">
        Lo que dicen los lectores
      </UI.Heading>

      <UI.Flex
        direction={["column", "column", "row"]}
        align="start"
        justify="space-between"
      >
        <ReviewCard
          name="Riley Sainz"
          role="UX Engineer"
          photo="/assets/review-avatar-riley.jpeg"
        >
          No solamente es una guía de referencia, es un libro muy visual, que
          además, te enseña buenas prácticas y consejos a tomar en
          consideración. Carlos ha logrado simplificar la complejidad de muchos
          de los conceptos de JavaScript con base en ejemplos y referencias de
          una manera muy sencilla y divertida. Aprendiendo JavaScript rompe con
          el estereotipo: "No hay libros buenos en español sobre
          JavaScript/Programación". Si quieres aprender, mejorar o sólo
          consultar, este es el libro indicado.
        </ReviewCard>
        <UI.Spacer />
        <ReviewCard
          name="Salomón Sanchez"
          role="Fullstack Designer & Developer"
          photo="/assets/review-avatar-salomon.jpeg"
        >
          Un excelente libro para aquellas persona sque quieren iniciar en el
          mundo del JavaScript
        </ReviewCard>
        <UI.Spacer />
        <ReviewCard
          name="Nelson Rojas Nuñez"
          role="Ingeniero de Software"
          photo="/assets/review-avatar-nelson.jpeg"
        >
          Soy ingeniero desde hace años y siempre he usado Javascript a "la
          rápida". Copio de aquí, corrijo de allá, pero nunca me senté
          tranquilamente a leer sobre él. Aprendiendo JavaScript me ha parecido
          genial. Gracias a este libro he logrado comprender mejor el lenguaje y
          he encontrado nuevos trucos que aplicar.
        </ReviewCard>
      </UI.Flex>

      {/* Content Section */}
      <UI.Box as="article" w="100%">
        <UI.Heading as="h3" my={8} mt={2} fontSize="2xl">
          Para quién es este libro
        </UI.Heading>
        <UI.Text my={4} fontSize="lg">
          Para todas aquellas personas que quieran aprender JavaScript desde
          cero y tengan pequeñas nociones de programación.
          <br />
          <br />
          También útil para aquellas personas que llevan tiempo programando,
          utilizan JavaScript y quieren afianzar las bases del lenguaje.
        </UI.Text>

        <UI.Heading as="h3" my={8} fontSize="2xl">
          Contenido
        </UI.Heading>

        <UI.Text my={4} fontSize="lg">
          100 Páginas en español donde se cubren los principales elementos de la
          programación, aplicados al lenguaje JavaScript, y poco a poco se va
          incrementando la complejidad viendo las características más
          importantes del lenguaje que lo hacen tan especial y popular.
        </UI.Text>

        <UI.UnorderedList styleType="none">
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            Breve Historia de JavaScript
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            Tipos de datos y Variables
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            Operadores
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            Condicionales
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            Clases Core y Módulos de JavaScript
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            Bucles
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            Funciones
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            JSON
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            AJAX
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            Eventos
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            Asincronía y Promesas
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            DOM - Document Object Model
          </UI.ListItem>
          <UI.ListItem>
            <UI.ListIcon as={Icons.IconLabel} color="brand.900" />
            ECMAScript v6 y más
          </UI.ListItem>
        </UI.UnorderedList>

        <UI.Heading as="h3" my={8} fontSize="2xl">
          Sobre el Autor
        </UI.Heading>
        <UI.Flex align="center" justify="space-between" direction={"column"}>
          <UI.Box w="100%" mx="auto" align="center">
            <UI.Image
              borderRadius="full"
              src="/assets/carlos_azaustre.png"
              width="190px"
              height="190px"
            />
          </UI.Box>

          <UI.Text my={4} fontSize="lg" width="100%">
            <strong>Carlos Azaustre</strong> (Madrid, España. 1984) Ingeniero en
            Telemática. Más de 10 años como desarrollador de software. Ha
            trabajado en empresas como Google, IBM y Eventbrite. Divulgador y
            creador de contenido sobre programación a través de YouTube, canal
            el cuál tiene más de 100.000 suscriptores y más de 5 millones de
            visitas.
            <br />
            <br />
            Reconocido por Google como Developer Expert (GDE) en tecnologías
            Web. Premiado por Microsoft en 2022 comoo MVP (Most Valuable
            Professional).
          </UI.Text>
        </UI.Flex>
        <UI.Heading as="h3" my={8} fontSize="2xl">
          Sobre este libro
        </UI.Heading>
        <UI.Text my={4} fontSize="lg">
          JavaScript es el lenguaje de la web. Si necesitas programar en un
          navegador web, necesitas JavaScript.
          <br />
          <br />
          Gracias a el tenemos aplicaciones como Gmail, o Twitter, que son
          fuertemente dinámicas y hacen que la experiencia de uso sea mucho
          mejor que antaño, cuando las páginas web tenían que recargarse cada
          vez que realizábamos una acción. <br />
          <br />
          Es un lenguaje muy demandado en la industría hoy en día, ya que además
          de utilizarse en el navegador, tambiénpuede usarse en el lado del
          servidor (Node.js). Con la multitud de frameworks que existen pueden
          crearse Single Page Applications que emulan la experiencia de una
          aplicación móvil en el navegador. <br />
          <br />
          También pueden crearse aplicaciones híbridas con herramientas como
          Ionic y Cordova. ¿Has oído hablar del desarrollo basado en
          componentes? Te sonarán entonces Lit-Element, React. Con React Native
          puedes crear aplicaciones nativas para iOS y Android con únicamente
          JavaScript. ¿Aplicaciones Isomórficas? Hoy en día todo es posible con
          JavaScript.
        </UI.Text>

        <BuyOnAmazon />
      </UI.Box>
    </LayoutLanding>
  );
}
