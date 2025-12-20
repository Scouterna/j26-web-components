import { ScoutTextArea } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Interaction/Text-Area",
  component: ScoutTextArea,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {
    name: "Name",
  },
  render: (args) => (
    <ScoutTextArea {...args} />
  ),
});

export const Disabled = BasicExample.extend({
  args: {
    disabled: true,
  },
});