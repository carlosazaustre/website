import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider, theme } from "@czstr/ui";
import "@czstr/ui/fonts";
import "@/styles/prism-night-owl.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
