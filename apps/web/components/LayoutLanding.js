import { Footer, UI } from "@czstr/ui";
import { OpenGraph } from "./OpenGraph";
import { SectionLinks } from "./SectionLinks";

export const LayoutLanding = ({ children, metadata = {} }) => {
  return (
    <UI.Box
      bg="secondary.900"
      borderTop="8px solid"
      borderColor="brand.900"
      color="white"
    >
      <OpenGraph metadata={metadata} />
      <UI.Container maxW="container.md" pt="8">
        <SectionLinks />
        {children}
        <Footer />
      </UI.Container>
    </UI.Box>
  );
};
