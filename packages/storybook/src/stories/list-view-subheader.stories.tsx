import { ScoutListViewSubheader } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Interaction/List View Subheader",
  component: ScoutListViewSubheader,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {},
  render: (args) => <ScoutListViewSubheader {...args} />,
});
