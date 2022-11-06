export const MediaPlayer = ({ src, width, autoplay, type = "video/mp4" }) => {
  return (
    <video controls autoplay={autoplay} width={width}>
      <source src={src} type={type} />
    </video>
  );
};
