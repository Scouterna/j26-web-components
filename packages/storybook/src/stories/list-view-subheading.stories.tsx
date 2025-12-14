import { ScoutListViewSubheading } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Uncategorized/List-View-Subheading",
  component: ScoutListViewSubheading,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {},
  render: (args) => (
    <ScoutListViewSubheading {...args} />
  ),
});
