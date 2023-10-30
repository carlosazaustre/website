import {
    ChakraProvider,
    extendTheme,
    createLocalStorageManager,
  } from "@chakra-ui/react";

  const theme = extendTheme({
    colors: {
      brand: {
        900: "#FFCC00",
        500: "#FBDA89",
        100: "#FBE5B0",
      },
      secondary: {
        900: "#151515",
        500: "#2A2D31",
        100: "#3B3F45",
      },
      grayblue: {
        900: "#E2E8F0",
        500: "#A1A6AB",
        100: "#797C81",
      },
      discord: {
        900: "#5865F2",
        500: "#7289DA",
        100: "#99AAB5",
      }
    },
    fonts: {
      heading: "Poppins",
      body: "IBM Plex Sans",
    },
    sizes: {
      container: {
        "2xl": "1440px",
      },
    },
  });

  export { ChakraProvider as ThemeProvider, createLocalStorageManager, theme };
