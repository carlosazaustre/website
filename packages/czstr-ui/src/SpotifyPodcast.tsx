const SIZES = {
    normal: "232",
    compact: "152",
  };
  
  const THEMES = {
    light: "?t=0",
    dark: "?theme=0&amp;t=0",
  };
  
  export const SpotifyPodcast = ({
    episode,
    theme = "light",
    size = "compact",
  }: {
    episode: string;
    theme?: "light" | "dark";
    size?: "normal" | "compact";
  }) => {
    return (
      <iframe
        src={`https://open.spotify.com/embed/episode/${episode}${THEMES[theme]}`}
        width="100%"
        height={SIZES[size]}
        frameBorder="0"
        allowTransparency={true}
        allow="encrypted-media"
      ></iframe>
    );
  };
  