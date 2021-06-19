import { Flex, Text } from "@chakra-ui/react";
import { IconGithub } from "./icons";
import { CustomLink } from "./CustomLink";

const github = {
  user: "carlosazaustre",
  repo: "website",
};

export const OpenPR = ({ slug }) => {
  return (
    <Flex align="center" my={2} color="gray.500">
      <IconGithub />
      <Text fontSize="sm" ml={2}>
        ¿Ves alguna errata o quieres modificar algo?{" "}
        <CustomLink
          href={`https://github.com/${github.user}/${github.repo}/edit/main/data/posts/${slug}.mdx`}
        >
          Haz una Pull Request
        </CustomLink>
      </Text>
    </Flex>
  );
};
