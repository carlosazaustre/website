import NextLink from "next/link";

import { Link } from "./elements";
import { ExternalLinkIcon } from "./icons";

export const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <Link {...props} color="brand.900" />
      </NextLink>
    );
  }

  return (
    <Link
      isExternal
      color="brand.900"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children} {typeof props.children !== "object" && <ExternalLinkIcon mx="2px" />}
    </Link>
  );
};
