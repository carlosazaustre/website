import { Fragment } from "react";
import { Heading, Box } from "../elements";

export const Card = ({
  children,
  type = "aside",
  bgColor = "white",
  headerColor = "secondary.900",
  headerTitle,
}) => {
  const CardContent = () => (
    <Fragment>
      <Heading as="h4" color={headerColor}>
        {headerTitle}
      </Heading>
      <section>{children}</section>
    </Fragment>
  );

  const AsideCard = ({ children }) => (
    <Box bg={bgColor} borderRadius={["none", "lg"]} p={[4, 4, 8, 16]}>
      {children}
      <CardContent />
    </Box>
  );

  const HomeCard = ({ children }) => (
    <Box
      bg={bgColor}
      borderRadius={["none", "lg"]}
      p={[4, 4, 8, 16]}
      my={4}
      mx={[0, 0, 0, 6, 8]}
      width={["100%", "100%", "100%", "32%"]}
    >
      {children}
      <CardContent />
    </Box>
  );

  const LandingCard = ({ children }) => (
    <Box
      bg={bgColor}
      borderRadius={["none", "lg"]}
      p={[4, 4, 8, 16]}
      my={4}
      mx={[0, 0, "auto"]}
      mb={16}
      width={["100%", "100%", "600px"]}
    >
      {children}
      <CardContent />
    </Box>
  );

  if (type === "aside") return <AsideCard />;
  if (type === "home") return <HomeCard />;
  if (type === "landing") return <LandingCard />;
};
