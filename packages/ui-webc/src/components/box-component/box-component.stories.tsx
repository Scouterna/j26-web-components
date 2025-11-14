import { h } from "@stencil/core";
import type { Meta, StoryObj } from "@stencil/storybook-plugin";
import { BoxComponent } from "./box-component";

const meta: Meta<BoxComponent> = {
  title: "BoxComponent",
  component: BoxComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default"],
    },
  },
  render: (props) => <box-component {...props}>Content</box-component>,
};

export default meta;

type Story = StoryObj<BoxComponent>;

export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (props) => <box-component {...props}>Default example</box-component>,
};
