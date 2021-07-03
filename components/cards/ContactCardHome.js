import { useForm, Controller } from "react-hook-form";
import { useToast } from "@chakra-ui/react";

import { Card } from "./_Card";
import { IconMail, IconUser } from "../icons";
import {
  Stack,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Button,
} from "../elements";

export const ContactCardHome = () => {
  const toast = useToast();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      await response.json();
      toast({
        title: "Mensaje enviado",
        position: "top-right",
        description: "Tu mensaje se ha enviado correctamente",
        status: "success",
        duration: 3000,
        isClosable: true,
        variant: "left-accent",
      });
    } catch (error) {
      toast({
        title: "Error",
        position: "top-right",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "left-accent",
      });
    }
  };

  return (
    <Card type="home" headerTitle="Contacto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="24px" py={2}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <FormControl as="fieldset" isInvalid={fieldState.invalid}>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    color="grayblue.900"
                    children={<IconUser />}
                  />
                  <Input
                    bg="white"
                    placeholder="Tu nombre"
                    type="text"
                    {...field}
                  />
                </InputGroup>
                {fieldState.error?.type === "required" && (
                  <FormErrorMessage>
                    Debes introducir tu nombre
                  </FormErrorMessage>
                )}
              </FormControl>
            )}
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <FormControl as="fieldset" isInvalid={fieldState.invalid}>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    color="grayblue.900"
                    children={<IconMail />}
                  />
                  <Input
                    bg="white"
                    placeholder="Tu email"
                    type="email"
                    {...field}
                  />
                </InputGroup>
                {fieldState.error?.type === "required" && (
                  <FormErrorMessage>
                    Debes introducir un mensaje
                  </FormErrorMessage>
                )}
              </FormControl>
            )}
          />

          <Controller
            name="text"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <FormControl as="fieldset" isInvalid={fieldState.invalid}>
                <Textarea
                  size="lg"
                  placeholder="Deja tu mensaje..."
                  {...field}
                />
                {fieldState.error?.type === "required" && (
                  <FormErrorMessage>
                    Debes introducir un mensaje
                  </FormErrorMessage>
                )}
              </FormControl>
            )}
          />

          <Button
            type="submit"
            colorScheme="secondary"
            fontFamily="heading"
            w="100%"
            size="lg"
            loadingText="Enviando"
            isLoading={isSubmitting}
            isDisabled={!isValid}
          >
            Enviar
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
