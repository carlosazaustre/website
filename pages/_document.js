import Document, { Html, Head, Main, NextScript } from "next/document";
import { GoogleFonts } from "nextjs-google-fonts/GoogleFonts";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>{GoogleFonts()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
