import React from "react";
import PropTypes from "prop-types";

import {
  AspectRatio,
  Box,
  Heading,
  Flex,
  Spacer,
  Text,
  Link,
} from "./elements";
import { IconVideo } from "./icons";
import { YouTubeBtn } from "./YouTubeBtn";

export const YouTube = ({ title, videoId = "5ct-3tDiRUY" }) => {
  const channelId = "UCJgGc8pQO1lv04VXrBxA_Hg";

  return (
    <Box
      maxW="1080px"
      boxShadow="lg"
      rounded="lg"
      bg="secondary.100"
      mx="auto"
      my={[2, 8]}
      color="white"
    >
      {title && (
        <Heading as="h3" p={6} fontSize={["md", "lg", "xl"]}>
          <Flex align="center">
            <IconVideo />
            <Text ml={2}>{title}</Text>
          </Flex>
        </Heading>
      )}
      <AspectRatio maxW="1080px" ratio={16 / 9}>
        <iframe
          title={videoId}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </AspectRatio>
      <Flex
        direction={["column", "column", "row"]}
        align="center"
        p={[2, 4, 6]}
      >
        <Text fontSize={["md", "lg", "xl"]} fontFamily="heading">
          <Link
            href={`https://youtube.com/channel/${channelId}?sub_confirmation=1`}
          >
            <strong>🔴 Suscríbete al Canal</strong>
          </Link>
        </Text>
        <Spacer />
        <YouTubeBtn type="embedded" channelId={channelId} />
      </Flex>
    </Box>
  );
};

YouTube.propTypes = {
  videoId: PropTypes.string.isRequired,
};
