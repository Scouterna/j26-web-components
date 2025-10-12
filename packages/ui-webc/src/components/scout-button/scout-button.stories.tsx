import { h } from "@stencil/core";
import type { Meta, StoryObj } from "@stencil/storybook-plugin";
import trashIcon from "iconoir/icons/trash.svg?raw";
import { ScoutButton } from "./scout-button";

const meta: Meta<ScoutButton> = {
  title: "Button",
  component: ScoutButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "outlined", "text", "caution", "danger", "positive"],
    },
    icon: {
      control: { type: "text" },
    },
  },
  render: (props) => <scout-button {...props}>Click me</scout-button>,
};

export default meta;

type Story = StoryObj<ScoutButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: (props) => <scout-button {...props}>Save changes</scout-button>,
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
  render: (props) => <scout-button {...props}>Cancel</scout-button>,
};

export const Text: Story = {
  args: {
    variant: "text",
  },
  render: (props) => (
    <scout-button {...props}>Less important action</scout-button>
  ),
};

export const Caution: Story = {
  args: {
    variant: "caution",
  },
  render: (props) => <scout-button {...props}>Update permissions</scout-button>,
};

export const Danger: Story = {
  args: {
    variant: "danger",
    icon: trashIcon,
  },
  render: (props) => <scout-button {...props}>Delete user</scout-button>,
};
