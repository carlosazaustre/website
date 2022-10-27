import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "@/lib/ga";
import theme, {
  ThemeProvider,
  createLocalStorageManager,
} from "@/styles/theme";
import "@/styles/prism-night-owl.css";
import "@/styles/fonts";

function MyApp({ Component, pageProps, err }) {
  const router = useRouter();
  const manager = createLocalStorageManager("color-mode-manager");

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((r) => r.unregister());
      });
    }

    const handleRouteChange = (url) => {
      ga.pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme} colorModeManager={manager}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
