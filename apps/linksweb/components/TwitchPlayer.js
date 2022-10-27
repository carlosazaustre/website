import { Spacer, Collapse } from "@nextui-org/react";

export function TwitchPlayer({ channelID, parentHost }) {
  const ENV = process.env.NODE_ENV !== "production" ? "localhost" : parentHost;

  return (
    <>
      <Spacer y={1} />
      <Collapse
        css={{ mw: "360px" }}
        shadow
        title="En Directo"
        subtitle="Sigue mis directos en Twitch"
      >
        <iframe
          src={`https://player.twitch.tv/?channel=${channelID}&parent=${ENV}`}
          frameBorder="0"
          allowFullScreen="true"
          scrolling="no"
          height="200"
          width="356"
        ></iframe>
      </Collapse>
    </>
  );
}
