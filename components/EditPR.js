import { Flex, Text } from "@chakra-ui/react";
import { MdModeEdit } from "react-icons/md";
import { CustomLink } from "./CustomLink";

const github = {
  user: "carlosazaustre",
  repo: "website",
};

export const EditPR = ({ slug }) => {
  return (
    <Flex align="center" my={2} color="gray.500">
      <MdModeEdit />
      <Text fontSize="sm">
        ¿Ves alguna errata? ¿Quieres modificar algo?{" "}
        <CustomLink
          href={`https://github.com/${github.user}/${github.repo}/edit/main/data/posts/${slug}.mdx`}
        >
          Haz una Pull Request
        </CustomLink>
      </Text>
    </Flex>
  );
};
