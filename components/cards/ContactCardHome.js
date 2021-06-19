import { Card } from "./_Card";
import { IconMail, IconUser } from "../icons";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Button,
} from "../elements";

export const ContactCardHome = () => {
  return (
    <Card type="home" headerTitle="Contacto">
      <Stack spacing="24px" py={2}>
        <InputGroup size="lg">
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={<IconUser />}
          />
          <Input bg="white" placeholder="Tu nombre" type="text" />
        </InputGroup>

        <InputGroup size="lg">
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={<IconMail />}
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
    </Card>
  );
};
