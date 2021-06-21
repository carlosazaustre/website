import { useForm, Controller } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res);
  };

  return (
    <Card type="home" headerTitle="Contacto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="24px" py={2}>
          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={<IconUser />}
            />
            <Input
              bg="white"
              placeholder="Tu nombre"
              type="text"
              {...register("name", { required: true })}
            />
          </InputGroup>

          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={<IconMail />}
            />
            <Input
              bg="white"
              placeholder="Tu email"
              type="email"
              {...register("email", { required: true })}
            />
          </InputGroup>

          <Textarea
            size="lg"
            placeholder="Deja tu mensaje..."
            {...register("text", { required: true })}
          />

          <Button
            type="submit"
            colorScheme="secondary"
            fontFamily="heading"
            w="100%"
            size="lg"
          >
            Enviar
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
