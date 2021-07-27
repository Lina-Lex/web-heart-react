import React from "react";
import { Meta, Story } from "@storybook/react";
import Index, { Props } from "./index";

export default {
  title: `profile-page/ProfileDetailInput`,
  component: Index,
} as Meta;

const Template: Story<Props> = (args) => <Index {...args} />;

export const Default = Template.bind({});
export const TextArea = Template.bind({});
TextArea.args = {
  textArea: true,
};
export const TextAreaFull = Template.bind({});
TextAreaFull.args = {
  textArea: true,
  full: true,
};

export const Full = Template.bind({});
Full.args = {
  full: true,
};
