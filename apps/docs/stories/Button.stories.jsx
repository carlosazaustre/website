import React from "react";
import { Button } from "@czstr/ui/src";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    onClick: (event) => {
      console.log(event);
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
