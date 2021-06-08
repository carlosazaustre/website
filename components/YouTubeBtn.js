import { useEffect } from "react";
import PropTypes from "prop-types";

export const YouTubeBtn = ({ channelId = "UCJgGc8pQO1lv04VXrBxA_Hg" }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://apis.google.com/js/platform.js");
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="g-ytsubscribe"
      data-channelid={channelId}
      data-layout="default"
      data-count="default"
    />
  );
};

YouTubeBtn.propTypes = { channelId: PropTypes.string.isRequired };
