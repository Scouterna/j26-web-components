import { ScoutTextArea } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Uncategorized/Text-Area",
  component: ScoutTextArea,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {
    label: "",
  },
  render: (args) => <ScoutTextArea {...args} />,
});
