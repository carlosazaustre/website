import theme, { ThemeProvider } from "@/styles/theme";
import "@/styles/fonts";
import "@/styles/prism-night-owl.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
