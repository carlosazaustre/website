import React from "react";
import { TwitterShare, ThemeProvider, theme } from "@czstr/ui";

export default {
  title: "TwitterShare",
  component: TwitterShare,
  args: {
    children: "TwitterShare",
    onClick: (event) => {
      console.log(event);
    },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <TwitterShare {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
