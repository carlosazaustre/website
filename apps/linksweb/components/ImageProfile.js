import { UI } from "@czstr/ui";

export function ImageProfile({ image, alt, bio, fullName, username }) {
  return (
    <>
      <UI.Avatar
        size="2xl"
        name="Carlos Azaustre"
        src={image}
        alt={alt}
        my={4}
      />
      <UI.Text as="h6" size={16} color="primary">
        {username}
      </UI.Text>

      <UI.Heading as="h1" size="2xl" my={2}>
        {fullName}
      </UI.Heading>

      <UI.Text as="h2" size="sm" fontWeight="300" my={2}>
        <span dangerouslySetInnerHTML={{ __html: bio }} />
      </UI.Text>
    </>
  );
}
