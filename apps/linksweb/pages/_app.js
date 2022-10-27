import { createTheme, NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    type: "light",
    theme: {
      colors: {
        primary: "#ffc400",
        secondary: "#222222",
      },
      fonts: {
        sans: "Poppins",
      },
    },
  });

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
