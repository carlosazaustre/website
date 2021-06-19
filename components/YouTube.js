import React from "react";
import PropTypes from "prop-types";

import { AspectRatio, Box, Flex, Spacer, Text, Link } from "./elements";
import { YouTubeBtn } from "./YouTubeBtn";

export const YouTube = ({ videoId = "5ct-3tDiRUY" }) => {
  const channelId = "UCJgGc8pQO1lv04VXrBxA_Hg";

  return (
    <Box maxW="560px" boxShadow="base" p="6" rounded="md" bg="white">
      <AspectRatio maxW="560px" ratio={16 / 9}>
        <iframe
          title={videoId}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </AspectRatio>
      <Flex align="center" pt="2">
        <Text>
          <Link
            href={`https://youtube.com/channel/${channelId}?sub_confirmation=1`}
          >
            <strong>Suscríbete al Canal</strong>
          </Link>
        </Text>
        <Spacer />
        <YouTubeBtn channelId={channelId} />
      </Flex>
    </Box>
  );
};

YouTube.propTypes = {
  videoId: PropTypes.string.isRequired,
};
