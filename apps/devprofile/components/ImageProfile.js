import { UI } from "@czstr/ui";

export function ImageProfile({ image, alt, bio, fullName, username }) {
  return (
    <>
      <UI.Avatar
        size="xl"
        name="Carlos Azaustre"
        src={image}
        alt={alt}
        my={4}
      />
      <UI.Text fontSize="sm" color="primary">
        {username}
      </UI.Text>

      <UI.Heading as="h1" size="lg" my={2}>
        {fullName}
      </UI.Heading>

      <UI.Text fontSize="xs" fontWeight="300" my={2}>
        {bio}
      </UI.Text>
    </>
  );
}
