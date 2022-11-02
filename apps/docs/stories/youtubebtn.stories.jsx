import React from "react";
import { YouTubeBtn, ThemeProvider, theme } from "ui/src";

export default {
  title: "YouTubeBtn",
  component: YouTubeBtn,
  args: {
    children: "YouTube",
    onClick: (event) => {
      console.log(event);
    },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <YouTubeBtn {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
