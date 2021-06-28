import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "@/lib/ga";
import "@/styles/prism-night-owl.css";
import "@/styles/fonts";
import theme, { ThemeProvider } from "@/styles/theme";

function MyApp({ Component, pageProps, err }) {
  const router = useRouter();

  useEffect(() => {
    // Temporary solution to delecte old cached site
    const DBDeleteRequest = window.indexedDB.deleteDatabase(
      "gatsby-plugin-offline-precache-https___carlosazaustre_es_"
    );

    DBDeleteRequest.onerror = function (event) {
      console.log("Error deleting database.");
    };

    DBDeleteRequest.onsuccess = function (event) {
      console.log("Database deleted successfully");

      console.log(event.result); // should be undefined
    };
  }, []);

  useEffect(() => {
    // Temporary solution to delecte old cached site
    const DBDeleteRequest = window.indexedDB.deleteDatabase("keyval-store");

    DBDeleteRequest.onerror = function (event) {
      console.log("Error deleting database.");
    };

    DBDeleteRequest.onsuccess = function (event) {
      console.log("Database deleted successfully");

      console.log(event.result); // should be undefined
    };
  }, []);

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
