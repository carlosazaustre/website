const SIZES = {
  normal: "232",
  compact: "152",
};

const THEMES = {
  light: "?t=0",
  dark: "?theme=0&amp;t=0",
};

export const SpotifyPodcast = ({
  episode = "52KMznI6l9x4MoZrO4uIy0",
  theme = "light",
  size = "compact",
}) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/episode/${episode}${THEMES[theme]}`}
      width="100%"
      height={SIZES[size]}
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
};
