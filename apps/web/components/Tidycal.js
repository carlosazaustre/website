import { useEffect } from "react";
import styled from "@emotion/styled";

const StyledIframe = styled.iframe`
  overflow: "hidden";
  border: 0;
  margin: "0 auto";
  width: 100%;
  height: 1200px;

  @media screen and (min-width: 1024px) {
    height: 600px;
  }
`;

export const Tidycal = ({ account, appointment }) => {
  const tidycalUrl = `https://tidycal.com/${account}`;

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://tidycal.com/js/embed.js");
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return (
    <StyledIframe
      scrolling="no"
      src={`${tidycalUrl}/${appointment}`}
    ></StyledIframe>
  );
};
