import Head from "next/head";

export const OpenGraph = ({ metadata = {} }) => {
  const SEO = {
    title:
      metadata.title ||
      "Aprende JavaScript y Programación Web - Carlos Azaustre",
    description:
      metadata.description ||
      "Tutoriales y Cursos sobre Programación Web y JavaScript con React, Node, Firebase, y mucho más...",
    slug: metadata.slug || "",
    image: `https://carlosazaustre.es/api/og?title=${metadata.title}`,
    date: metadata.date || new Date().toISOString(),
  };

  return (
    <Head>
      <title>{SEO.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={SEO.description} name="description" />
      <meta
        property="og:url"
        content={`https://carlosazaustre.es/${SEO.slug}`}
      />
      <link rel="canonical" href={`https://carlosazaustre.es/${SEO.slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Carlos Azaustre" />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:image" content={SEO.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@carlosazaustre" />
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:image" content={SEO.image} />
      <meta property="article:published_time" content={SEO.date} />
    </Head>
  );
};
