import theme, {
  ThemeProvider,
  createLocalStorageManager,
} from "@/styles/theme";
import "@/styles/prism-night-owl.css";
import "@/styles/fonts";

function MyApp({ Component, pageProps }) {
  const manager = createLocalStorageManager("color-mode-manager");

  return (
    <ThemeProvider theme={theme} colorModeManager={manager}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
