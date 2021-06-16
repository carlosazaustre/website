import { Fragment } from "react";
import { Box, Heading } from "@chakra-ui/react";

import {
  Footer,
  PageAside,
  PageContainer,
  PageHeader,
  PostMetadata,
} from "@/components";

export const PostLayout = ({ children, metadata }) => {
  return (
    <Box bg="gray.100">
      <PageContainer
        header={<PageHeader />}
        main={
          <Fragment>
            <Heading as="h1" m={8} size="3xl">
              {metadata.title}
            </Heading>
            <PostMetadata metadata={metadata} />
            <section>{children}</section>
          </Fragment>
        }
        aside={<PageAside />}
      />

      <Footer />
    </Box>
  );
};
