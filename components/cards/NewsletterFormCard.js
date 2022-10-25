import styled from "@emotion/styled";
import * as ga from "@/lib/ga";
import { IconMail } from "../icons";
import {
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Stack,
} from "../elements";

const StyledForm = styled.form`
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
`;

export const NewsletterFormCard = ({ size }) => {
  const generateLead = () => {
    ga.event({
      action: "generate_lead",
      params: { event_label: "Newsletter Sign up", value: 1 },
    });
  };

  return (
    <StyledForm
      action="https://www.getrevue.co/profile/carlosazaustre/add_subscriber"
      method="post"
      id="revue-form"
      name="revue-form"
      target="_blank"
    >
      <Stack spacing="20px" py={2}>
        <InputGroup size="md">
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
            fontSize="xs"
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
          size="md"
          onClick={() => generateLead()}
        >
          Suscríbirme
        </Button>

        <Text px={2} fontSize="xs" fontFamily="heading">
          🔒 Libre de Spam.
        </Text>
      </Stack>
    </StyledForm>
  );
};
