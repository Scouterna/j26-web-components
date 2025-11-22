import { ScoutButton } from "@scouterna/ui-react";
import LockIcon from "@tabler/icons/outline/lock.svg?raw";
import TrashIcon from "@tabler/icons/outline/trash.svg?raw";
import preview from "#.storybook/preview";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = preview.meta({
  title: "Interaction/Button",
  component: ScoutButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
});

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = meta.story({
  args: {
    variant: "primary",
  },
  render: (args) => <ScoutButton {...args}>Sign in</ScoutButton>,
});

export const Outlined = meta.story({
  args: {
    variant: "outlined",
  },
  render: (args) => <ScoutButton {...args}>Show more</ScoutButton>,
});

export const Text = meta.story({
  args: {
    variant: "text",
  },
  render: (args) => <ScoutButton {...args}>Cancel</ScoutButton>,
});

export const Caution = meta.story({
  args: {
    variant: "caution",
    icon: LockIcon,
  },
  render: (args) => <ScoutButton {...args}>Make private</ScoutButton>,
});

export const Danger = meta.story({
  args: {
    variant: "danger",
    icon: TrashIcon,
  },
  render: (args) => <ScoutButton {...args}>Delete</ScoutButton>,
});
