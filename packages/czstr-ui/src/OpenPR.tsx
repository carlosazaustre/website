import { Flex, Text, Link } from "./elements";
import { IconGithub, ExternalLinkIcon } from "./icons";

const github = {
  user: "carlosazaustre",
  repo: "website",
};

export const OpenPR = ({ slug }: { slug: string}) => {
  return (
    <Flex
      fontSize={["xs", "sm"]}
      align="center"
      my={2}
      color="white"
      fontFamily="heading"
    >
      <IconGithub />
      <Text ml={2}>
        ¿Ves alguna errata o quieres modificar algo?{" "}
        <Link
            isExternal
            color="brand.900"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${github.user}/${github.repo}/edit/main/data/posts/${slug}.mdx`}
        >
          Haz una Pull Request{" "}
          <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
    </Flex>
  );
};
