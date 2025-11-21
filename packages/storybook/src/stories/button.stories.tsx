import { ScoutButton } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = preview.meta({
  title: "Basics/Button",
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
  render: (args) => <ScoutButton {...args}>Hello, World!</ScoutButton>,
});
