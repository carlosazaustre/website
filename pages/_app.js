import "@/styles/prism-night-owl.css";
import "@/styles/fonts";
import theme, { ThemeProvider } from "@/styles/theme";

function MyApp({ Component, pageProps }) {
  GoogleAnalytics.useAppInit();
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
