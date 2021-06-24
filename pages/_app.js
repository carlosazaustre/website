import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "@/lib/ga";
import "@/styles/prism-night-owl.css";
import "@/styles/fonts";
import theme, { ThemeProvider } from "@/styles/theme";

function MyApp({ Component, pageProps, err }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} err={err} />
    </ThemeProvider>
  );
}

export default MyApp;
