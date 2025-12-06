import { ScoutLoader } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Uncategorized/Loader",
  component: ScoutLoader,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      // Make sure the order makes sense
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
    }
  }
});

export default meta;

export const BasicExample = meta.story({
  args: {},
  render: (args) => <ScoutLoader {...args} />,
});

export const WithText = meta.story({
  args: {
    text: "Loading app...",
  },
  render: (args) => <ScoutLoader {...args} />,
});
