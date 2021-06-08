import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#FEC100",
      500: "#FFD875",
      200: "#FFEBB7",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Roboto",
  },
});

export default theme;
