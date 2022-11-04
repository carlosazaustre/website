import NextLink from "next/link";
import NextImage from "next/image";
import { UI } from "@czstr/ui";

import { Layout } from "@/components";

export default function NotFound() {
  const metadata = {
    title: "404",
  };

  return (
    <Layout type="post" metadata={metadata}>
      <NextImage
        width={240}
        height={202}
        layout="responsive"
        src="/images/404-giphy.gif"
        alt="404 Not Found"
      />
      <UI.Heading as="h4" p={4}>
        La página que buscas no se encuentra.
        <br />
        <br />
        Pero tienes aquí tienes el blog 👉
        <NextLink href="/blog">Leer artículos y tutoriales</NextLink>
      </UI.Heading>
    </Layout>
  );
}
