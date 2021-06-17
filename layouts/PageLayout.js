import { Fragment } from "react";
import { Box, Heading } from "@chakra-ui/react";

import { Footer, PageContainer, PageHeader } from "@/components";

export const PageLayout = ({ children, metadata }) => {
  return (
    <Box bg="gray.100">
      <PageContainer
        header={<PageHeader />}
        main={
          <Fragment>
            <Heading as="h1" m={8} size="3xl">
              {metadata.title}
            </Heading>
            <section>{children}</section>
          </Fragment>
        }
      />

      <Footer />
    </Box>
  );
};
