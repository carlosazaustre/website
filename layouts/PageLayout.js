import { Heading } from "@chakra-ui/react";

import { Layout } from "./_Layout";

export const PageLayout = ({ children, metadata, aside }) => {
  return (
    <Layout aside={aside}>
      <Heading as="h2" m={8} size="2xl">
        {metadata.title}
      </Heading>
      <section>{children}</section>
    </Layout>
  );
};
