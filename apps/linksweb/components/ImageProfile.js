import { Avatar, Text } from "@nextui-org/react";

export function ImageProfile({ image, alt, bio, fullName, username }) {
  return (
    <>
      <Avatar
        bordered
        src={image}
        css={{ my: 15, size: 120 }}
        color="primary"
        alt={alt}
      />
      <Text h6 size={16} color="primary">
        {username}
      </Text>

      <Text h1 size={35}>
        {fullName}
      </Text>

      <Text size={16}>
        <span dangerouslySetInnerHTML={{ __html: bio }} />
      </Text>
    </>
  );
}
