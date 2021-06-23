import { useEffect } from "react";
import PropTypes from "prop-types";
import { Box } from "./elements";

const WrapperButton = ({ children }) => {
  return (
    <Box
      bg="secondary.100"
      color="white"
      p={6}
      mb={16}
      mx={(0, 0, "auto")}
      rounded="lg"
      textAlign="center"
      width={["100%", "100%", "50%"]}
    >
      {children}
    </Box>
  );
};

const InnerButton = ({ channelId }) => {
  return (
    <div
      className="g-ytsubscribe"
      data-channelid={channelId}
      data-layout="full"
      data-theme="dark"
      data-count="default"
    />
  );
};

export const YouTubeBtn = ({
  type = "center",
  channelId = "UCJgGc8pQO1lv04VXrBxA_Hg",
}) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://apis.google.com/js/platform.js");
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  if (type === "center") {
    return (
      <WrapperButton>
        <InnerButton channelId={channelId} />
      </WrapperButton>
    );
  }

  return <InnerButton />;
};

YouTubeBtn.propTypes = { channelId: PropTypes.string.isRequired };
