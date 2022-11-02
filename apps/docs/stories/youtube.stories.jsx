import React from "react";
import { YouTube, ThemeProvider, theme } from "@czstr/ui";

export default {
  title: "YouTube",
  component: YouTube,
  args: {
    children: "YouTube",
    onClick: (event) => {
      console.log(event);
    },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <YouTube {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
