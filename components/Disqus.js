import { DiscussionEmbed } from "disqus-react";

export const Disqus = ({ title, slug }) => {
  const disqusShortname = "carlosazaustre";
  const disqusConfig = {
    url: `https://carlosazaustre.es/${slug}`,
    identifier: slug,
    title,
  };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};
