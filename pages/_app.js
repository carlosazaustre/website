import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import "@/styles/prism-night-owl.css";
import "@/styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
