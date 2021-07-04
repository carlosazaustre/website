import { useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { LayoutLanding, elements as UI, icons as Icons } from "@/components";

const StyledBoxCard = styled(UI.Box)`
  background-color: white;
  margin: var(--chakra-sizes-4);
  border-radius: var(--chakra-radii-lg);
  width: ${(props) => (props.type === "small" ? "190px" : "300px")};
  text-align: center;
  transition: background var(--chakra-transition-duration-slow),
    margin var(--chakra-transition-duration-slow);

  &:hover {
    background-color: var(--chakra-colors-brand-900);
    margin-top: var(--chakra-sizes-0);
    margin-bottom: var(--chakra-sizes-1);
    box-shadow: var(--chakra-shadows-md);
  }
`;

export const Rating = ({ children, average }) => {
  const starsFilled = average;
  const starsEmpty = 5 - average;

  return (
    <UI.HStack my={4}>
      {Array(starsFilled)
        .fill(1)
        .map((_, i) => (
          <Icons.IconStar key={i} />
        ))}
      {Array(starsEmpty)
        .fill(0)
        .map((_, i) => (
          <Icons.IconStarEmpty key={i} />
        ))}
      <UI.Text fontSize="sm" my={4} color="grayblue.200">
        {children}
      </UI.Text>
    </UI.HStack>
  );
};

export const SellItem = ({ children, url, logo, w, h, type }) => {
  return (
    <UI.Link href={url}>
      <StyledBoxCard type={type} p={[2, 4]} w={["10%", "190px"]}>
        <UI.Text
          mb={2}
          fontFamily="heading"
          fontSize={["xs", "sm", "md"]}
          fontWeight="bold"
        >
          {children}
        </UI.Text>
        <UI.Box display={["none", "block"]}>
          <Image width={w} height={h} src={logo} />
        </UI.Box>
      </StyledBoxCard>
    </UI.Link>
  );
};

export const ReviewCard = ({ children, photo, name, role }) => {
  return (
    <UI.Box w={["100%, 100%, 90%"]}>
      <UI.Flex m={[0, 0, 2, 4]}>
        <UI.Image
          borderRadius="full"
          borderColor="white"
          boxSize="75px"
          src={photo}
          alt={name}
          mr={4}
        />
        <UI.Box>
          <UI.Text fontSize="lg" fontWeight="bold">
            {name}
          </UI.Text>
          <UI.Text fontSize="md" fontWeight="regular">
            {role}
          </UI.Text>
        </UI.Box>
      </UI.Flex>
      <UI.Box bg="white" rounded="lg" mt={4} mb={16} p={6}>
        <em>{children}</em>
      </UI.Box>
    </UI.Box>
  );
};

export default function BookJavaScriptPage() {
  const metadata = {
    title: "Aprendiendo JavaScript",
    description:
      "Libro en español para comprender el lenguaje de programación web",
    image: "/assets/cards/book-javascript.png",
  };

  useEffect(() => {
    fetch("/api/checkCountry")
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <LayoutLanding metadata={metadata}>
      {/* Aside Section */}
      <UI.Flex as="aside" direction={["column", "column", "column", "row"]}>
        <UI.Box w={["100%", "100%", "100%", "35%"]} order={[1, 1, 1, 0]}>
          <Image
            width="723"
            height="700"
            src="/assets/aprendiendo-javascript-libro-3d.png"
          />
          <UI.Heading
            as="h3"
            my={12}
            fontSize={["md", "lg", "xl", "2xl", "3xl"]}
          >
            Esto dice la gente
          </UI.Heading>
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

        {/* Main Section */}
        <UI.Box
          w={["100%", "100%", "100%", "65%"]}
          p={[0, 0, 4, 8]}
          order={[0, 0, 0, 1]}
        >
          <UI.Heading as="h1" fontSize={["xl", "2xl", "2xl"]}>
            Aprendiendo JavaScript
          </UI.Heading>

          <Rating average={4}>
            <UI.Link href="https://www.amazon.com/product-reviews/B08TZ3HSYZ">
              (30 Valoraciones en Amazon)
            </UI.Link>
          </Rating>

          <UI.Text
            my={2}
            fontSize={["lg", "lg", "lg", "lg", "xl"]}
            fontFamily="heading"
          >
            Aprende las bases del lenguaje web más demandado. Desde cero hasta
            ECMAScript 6+. Partiendo de las bases y poco a poco ampliándose
            hasta ver las nuevas características del lenguaje para hacer un uso
            profesional de él.
          </UI.Text>

          {/* CTA Button */}
          <UI.Box
            bg="white"
            mx="auto"
            p={[2, 4, 4, 8]}
            my={8}
            fontSize={["lg", "lg", "lg", "2xl"]}
            fontWeight="bold"
            fontFamily="heading"
            rounded="lg"
            shadow="base"
            width={["100%", "100%", "100%", "80%", "60%"]}
            transition="background ease"
            _hover={{ bg: "brand.900" }}
          >
            <UI.Link href="https://www.amazon.com/gp/product/B08TZ3HSYZ">
              <UI.Flex align="center" justify="center">
                <UI.Text mr={4}>Comprar en</UI.Text>
                <Image
                  src="/assets/logo-amazon.png"
                  width="130px"
                  height="40px"
                />
              </UI.Flex>
            </UI.Link>
          </UI.Box>

          {/* Versions */}
          <UI.Text my={4} fontSize="lg" fontFamily="heading" fontWeight="bold">
            Otras Versiones disponibles:
          </UI.Text>
          <UI.Flex mx="auto" align="center" justify="center">
            <SellItem
              type="small"
              url="https://amzn.to/3qHsEb4"
              logo="/assets/logo-kindle.png"
              w="100px"
              h="20px"
            >
              Formato Kindle
            </SellItem>
            <SellItem
              type="small"
              url="https://leanpub.com/aprendiendo-javascript"
              logo="/assets/logo-leanpub.png"
              w="100px"
              h="20px"
            >
              PDF | ePub | Mobi
            </SellItem>
          </UI.Flex>

          <UI.Heading
            as="h3"
            my={8}
            fontSize={["md", "lg", "xl", "2xl", "3xl"]}
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
          <UI.Heading
            as="h3"
            my={8}
            fontSize={["md", "lg", "xl", "2xl", "3xl"]}
          >
            Sobre el Autor
          </UI.Heading>
          <UI.Text my={4} fontSize="lg" fontFamily="heading">
            <strong>Carlos Azaustre</strong>. Ingeniero en Telemática y Director
            del Máster en Desarrollo Web FullStack de la Universidad Europea de
            Madrid. Divulgador de tecnologías web en su canal de YouTube.
            Reconocido por Google como Developer Expert (GDE) en Web. Ha
            trabajado en empresas como Google, IBM y Eventbrite.
          </UI.Text>
          <UI.Heading
            as="h3"
            my={8}
            fontSize={["md", "lg", "xl", "2xl", "3xl"]}
          >
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

          {/* CTA Button */}
          <UI.Box
            bg="white"
            mx="auto"
            p={[2, 4, 4, 8]}
            my={8}
            fontSize={["lg", "lg", "lg", "2xl"]}
            fontWeight="bold"
            fontFamily="heading"
            rounded="lg"
            shadow="base"
            width={["100%", "100%", "100%", "80%", "60%"]}
            transition="background ease"
            _hover={{ bg: "brand.900" }}
          >
            <UI.Link href="https://www.amazon.com/gp/product/B08TZ3HSYZ">
              <UI.Flex align="center" justify="center">
                <UI.Text mr={4}>Comprar en</UI.Text>
                <Image
                  src="/assets/logo-amazon.png"
                  width="130px"
                  height="40px"
                />
              </UI.Flex>
            </UI.Link>
          </UI.Box>
        </UI.Box>
      </UI.Flex>
    </LayoutLanding>
  );
}
