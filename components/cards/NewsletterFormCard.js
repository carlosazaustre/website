import * as ga from "@/lib/ga";
import { Card } from "./_Card";
import { IconMail, IconUser } from "../icons";
import {
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Stack,
  Link,
} from "../elements";

export const NewsletterFormCard = ({ size }) => {
  const generateLead = () => {
    ga.event({
      action: "generate_lead",
      params: { event_label: "Newsletter Sign up", value: 1 },
    });
  };

  return (
    <Card
      type={size}
      bgColor="secondary.900"
      headerTitle="¡Únete y ponte al día en desarrollo web!"
      headerColor="white"
    >
      <form
        action="https://www.getrevue.co/profile/carlosazaustre/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <Stack spacing="24px" py={2}>
          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              color="grayblue.900"
              children={<IconMail />}
            />
            <Input
              bg="secondary.500"
              placeholder="Tu email"
              type="email"
              name="member[email]"
              id="member_email"
            />
          </InputGroup>

          <Button
            bg="brand.900"
            color="black"
            fontFamily="heading"
            w="100%"
            type="submit"
            name="member[subscribe]"
            id="member_submit"
            size="lg"
            onClick={() => generateLead()}
          >
            Suscríbirme
          </Button>

          <Text px={2} fontSize="sm" fontFamily="heading">
            🔒 Libre de Spam. Sólo contenido que te interesa.
          </Text>
        </Stack>
      </form>
    </Card>
  );
};
