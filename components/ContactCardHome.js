import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FaEnvelope, FaUser } from "react-icons/fa";

import { CardHome } from "./CardHome";

export const ContactCardHome = () => {
  return (
    <CardHome headerTitle="Contacto">
      <Stack spacing="24px" py={2}>
        <InputGroup size="lg">
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={<FaUser />}
          />
          <Input bg="white" placeholder="Tu nombre" type="text" />
        </InputGroup>

        <InputGroup size="lg">
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={<FaEnvelope />}
          />
          <Input bg="white" placeholder="Tu email" type="email" />
        </InputGroup>

        <Textarea size="lg" placeholder="Deja tu mensaje..."></Textarea>

        <Button
          colorScheme="secondary"
          fontFamily="heading"
          w="100%"
          type="submit"
          size="lg"
        >
          Enviar
        </Button>
      </Stack>
    </CardHome>
  );
};
