import Image from "next/image";
import {
  LayoutLanding,
  SellItem,
  ReviewCard,
  Rating,
  elements as UI,
  icons as Icons,
} from "@/components";

const BuyOnAmazon = () => (
  <UI.Accordion>
    <UI.AccordionItem>
      <UI.Box
        as="h2"
        bg="white"
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
            bg="white"
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
            bg="white"
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
      <UI.Flex
        as="header"
        direction={["column", "column", "column", "column", "row"]}
        align={["center", "center", "center", "center", "flex-start"]}
      >
        <UI.Box w={["100%", "100%", "50%", "30%"]}>
          <Image
            width="723"
            height="700"
            src="/assets/aprendiendo-javascript-libro-3d.png"
          />
        </UI.Box>
        <UI.Box w={["100%", "100%", "100%", "100%", "65%"]} p={[0, 0, 4, 8]}>
          <UI.Heading as="h1" fontSize={["2xl", "4xl", "6xl"]}>
            Aprendiendo JavaScript
          </UI.Heading>
          <UI.Text
            my={2}
            fontSize={["lg", "lg", "lg", "xl", "2xl"]}
            fontFamily="heading"
          >
            Aprende las bases del lenguaje web más demandado. Desde cero hasta
            ECMAScript 6+. Partiendo de las bases y poco a poco ampliándose
            hasta ver las nuevas características del lenguaje para hacer un uso
            profesional de él.
          </UI.Text>

          <BuyOnAmazon />

          <UI.Flex
            w={["100%", "100%", "100%", "100%", "65%"]}
            mx="auto"
            direction="row"
            align="center"
            justify="space-around"
          >
            <UI.Text fontFamily="heading" mt={8}>
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
      </UI.Flex>

      {/* Content Section */}
      <UI.Flex as="section" direction={["column", "column", "column", "row"]}>
        <UI.Box
          as="aside"
          width={["100%", "100%", "100%", "30%"]}
          order={[1, 1, 1, 0]}
        >
          <UI.Flex
            bg="white"
            rounded="lg"
            p={4}
            my={10}
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
          >
            <UI.Text>
              <a href="https://www.amazon.es/Aprendiendo-JavaScript-Desde-hasta-ECMAScript/dp/B08TZ3HSYZ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=aprendiendo+javascript&qid=1625415326&sr=8-1#customerReviews">
                30 Valoraciones en Amazon
              </a>
            </UI.Text>
            <Rating average={4} />
          </UI.Flex>

          <ReviewCard
            name="Riley Sainz"
            role="UX Engineer"
            photo="/assets/review-avatar-riley.jpeg"
          >
            No solamente es una guía de referencia, es un libro muy visual, que
            además, te enseña buenas prácticas y consejos a tomar en
            consideración. Carlos ha logrado simplificar la complejidad de
            muchos de los conceptos de JavaScript con base en ejemplos y
            referencias de una manera muy sencilla y divertida. Aprendiendo
            JavaScript rompe con el estereotipo: "No hay libros buenos en
            español sobre JavaScript/Programación". Si quieres aprender, mejorar
            o sólo consultar, este es el libro indicado.
          </ReviewCard>
          <ReviewCard
            name="Salomón Sanchez"
            role="Fullstack Designer & Developer"
            photo="/assets/review-avatar-salomon.jpeg"
          >
            Un excelente libro para aquellas persona sque quieren iniciar en el
            mundo del JavaScript
          </ReviewCard>
          <ReviewCard
            name="Nelson Rojas Nuñez"
            role="Ingeniero de Software"
            photo="/assets/review-avatar-nelson.jpeg"
          >
            Soy ingeniero desde hace años y siempre he usado Javascript a "la
            rápida". Copio de aquí, corrijo de allá, pero nunca me senté
            tranquilamente a leer sobre él. Aprendiendo JavaScript me ha
            parecido genial. Gracias a este libro he logrado comprender mejor el
            lenguaje y he encontrado nuevos trucos que aplicar.
          </ReviewCard>
        </UI.Box>

        <UI.Box
          as="article"
          w={["100%", "100%", "100%", "65%"]}
          p={[0, 0, 4, 8]}
          order={[0, 0, 0, 1]}
        >
          <UI.Heading
            as="h3"
            my={8}
            mt={2}
            fontSize={["lg", "xl", "2xl", "3xl"]}
          >
            Para quién es este libro
          </UI.Heading>
          <UI.Text my={4} fontSize="lg" fontFamily="heading">
            Para todas aquellas personas que quieran aprender JavaScript desde
            cero y tengan pequeñas nociones de programación.
            <br />
            <br />
            También útil para aquellas personas que llevan tiempo programando,
            utilizan JavaScript y quieren afianzar las bases del lenguaje.
          </UI.Text>

          <UI.Heading as="h3" my={8} fontSize={["lg", "xl", "2xl", "3xl"]}>
            Contenido
          </UI.Heading>
          <UI.Text my={4} fontSize="lg" fontFamily="heading">
            100 Páginas en español donde se cubren los principales elementos de
            la programación, aplicados al lenguaje JavaScript, y poco a poco se
            va incrementando la complejidad viendo las características más
            importantes del lenguaje que lo hacen tan especial y popular.
          </UI.Text>
          <UI.UnorderedList styleType="none" fontFamily="heading">
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

          <UI.Heading as="h3" my={8} fontSize={["lg", "xl", "2xl", "3xl"]}>
            Sobre el Autor
          </UI.Heading>
          <UI.Flex
            align="center"
            justify="space-between"
            direction={["column", "column", "column", "column", "row"]}
          >
            <UI.Box w={["100%", "100%", "30%"]} mx="auto" align="center">
              <Image
                src="/assets/carlos-azaustre-gde-web.jpeg"
                width="190px"
                height="190px"
              />
            </UI.Box>

            <UI.Text
              my={4}
              p={4}
              fontSize="lg"
              fontFamily="heading"
              width={["100%", "100%", "100%", "100%", "65%"]}
            >
              <strong>Carlos Azaustre</strong> (Madrid, 1984). Ingeniero en
              Telemática. 10 años como Desarrollador de Software y actualmente
              Director del Máster en Desarrollo Web FullStack de la Universidad
              Europea de Madrid.
              <br />
              <br />
              Divulgador de tecnologías web a través de YouTube. Reconocido por
              Google como Developer Expert (GDE) en Web. Ha trabajado en
              empresas como Google, IBM y Eventbrite.
            </UI.Text>
          </UI.Flex>
          <UI.Heading as="h3" my={8} fontSize={["lg", "xl", "2xl", "3xl"]}>
            Sobre este libro
          </UI.Heading>
          <UI.Text my={4} fontSize="lg" fontFamily="heading">
            JavaScript es el lenguaje de la web. Si necesitas programar en un
            navegador web, necesitas JavaScript.
            <br />
            <br />
            Gracias a el tenemos aplicaciones como Gmail, o Twitter, que son
            fuertemente dinámicas y hacen que la experiencia de uso sea mucho
            mejor que antaño, cuando las páginas web tenían que recargarse cada
            vez que realizábamos una acción. <br />
            <br />
            Es un lenguaje muy demandado en la industría hoy en día, ya que
            además de utilizarse en el navegador, tambiénpuede usarse en el lado
            del servidor (Node.js). Con la multitud de frameworks que existen
            pueden crearse Single Page Applications que emulan la experiencia de
            una aplicación móvil en el navegador. <br />
            <br />
            También pueden crearse aplicaciones híbridas con herramientas como
            Ionic y Cordova. ¿Has oído hablar del desarrollo basado en
            componentes? Te sonarán entonces Lit-Element, React. Con React
            Native puedes crear aplicaciones nativas para iOS y Android con
            únicamente JavaScript. ¿Aplicaciones Isomórficas? Hoy en día todo es
            posible con JavaScript.
          </UI.Text>

          <BuyOnAmazon />
        </UI.Box>
      </UI.Flex>
    </LayoutLanding>
  );
}
