import { ThemeProvider, theme } from "@czstr/ui";
import "@czstr/ui/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
