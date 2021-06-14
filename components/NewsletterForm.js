import { FaEnvelope, FaUser } from "react-icons/fa";
import {
  Box,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";

export const NewsletterForm = () => {
  return (
    <Box bg="brand.900" borderRadius="lg" p="4">
      <Heading as="h3" p={4}>
        📬 Únete y ponte al día en desarrollo web
      </Heading>
      <Text p={4}>
        Recibe puntualmente información sobre las últimas novedades en
        tecnologías web y desarrollo web moderno para que estés siempre estés a
        la última
      </Text>
      <form
        action="https://www.getrevue.co/profile/carlosazaustre/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <Stack spacing="24px" p={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={<FaUser />}
            />
            <Input
              bg="white"
              placeholder="Tu nombre)"
              type="text"
              name="member[first_name]"
              id="member_first_name"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={<FaEnvelope />}
            />
            <Input
              bg="white"
              placeholder="Tu email"
              type="email"
              name="member[email]"
              id="member_email"
            />
          </InputGroup>

          <Button
            colorScheme="secondary"
            w="100%"
            type="submit"
            name="member[subscribe]"
            id="member_submit"
          >
            Suscríbirme
          </Button>

          <Text px={2}>
            By subscribing, you agree with Revue’s{" "}
            <Link href="https://www.getrevue.co/terms">Terms</Link> and{" "}
            <Link href="https://www.getrevue.co/privacy">Privacy Policy</Link>.
          </Text>

          <Text px={2}>🔒 Libre de Spam. Sólo contenido que te interesa.</Text>
        </Stack>
      </form>
    </Box>
  );
};
