import { ScoutCheckbox } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Interaction/Checkbox",
  component: ScoutCheckbox,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {},
  render: (args) => <ScoutCheckbox {...args} />,
});
