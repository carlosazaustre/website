import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#FEC100",
      500: "#FFD875",
      100: "#FFEBB7",
    },
    secondary: {
      900: "#202225",
      500: "#2A2D31",
      100: "#3B3F45",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Roboto",
  },
  sizes: {
    container: {
      "2xl": "1440px",
    },
  },
});

export default theme;
