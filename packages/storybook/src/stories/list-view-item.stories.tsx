import { ScoutListViewItem } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Interaction/List View Item",
  component: ScoutListViewItem,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {},
  render: (args) => <ScoutListViewItem {...args} />,
});
