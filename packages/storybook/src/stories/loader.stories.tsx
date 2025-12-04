import { ScoutLoader } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Uncategorized/Loader",
  component: ScoutLoader,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {},
  render: (args) => (
    <ScoutLoader {...args} />
  ),
});
