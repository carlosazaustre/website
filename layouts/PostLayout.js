import { Fragment } from "react";
import { Heading } from "@chakra-ui/react";

import { PostMetadata } from "@/components";
import { Layout } from "./_Layout";

export const PostLayout = ({ children, metadata }) => {
  return (
    <Layout aside>
      {metadata && (
        <Fragment>
          <Heading as="h1" m={8} size="2xl">
            {metadata.title}
          </Heading>
          <PostMetadata metadata={metadata} />
        </Fragment>
      )}
      <section>{children}</section>
    </Layout>
  );
};
