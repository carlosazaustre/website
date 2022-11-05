import Image from "next/image";
import styled from "@emotion/styled";
import { UI } from "@czstr/ui";

const StyledBoxCard = styled(UI.Box)`
  background-color: var(--chakra-colors-brand-900);
  color: var(--chakra-colors-black);
  margin: var(--chakra-sizes-4);
  border-radius: var(--chakra-radii-lg);
  width: ${(props) => (props.type === "small" ? "190px" : "300px")};
  text-align: center;
  transition: background var(--chakra-transition-duration-slow),
    margin var(--chakra-transition-duration-slow);

  &:hover {
    background-color: var(--chakra-colors-brand-900);
    box-shadow: var(--chakra-shadows-md);
  }
`;

export const SellItem = ({ children, url, logo, w, h, type }) => {
  return (
    <UI.Link href={url}>
      <StyledBoxCard type={type} p={[2, 4]}>
        <UI.Text
          mb={2}
          fontFamily="heading"
          fontSize={["xs", "sm", "md"]}
          fontWeight="normal"
        >
          {children}
        </UI.Text>
        <UI.Box>
          <Image width={w} height={h} src={logo} alt={logo} />
        </UI.Box>
      </StyledBoxCard>
    </UI.Link>
  );
};
