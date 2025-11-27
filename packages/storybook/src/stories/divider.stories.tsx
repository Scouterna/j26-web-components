import { ScoutDivider } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Uncategorized/Divider",
  component: ScoutDivider,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {},
  render: (args) => (
    <div style={{ maxWidth: "20rem", width: "100vw" }}>
      <ScoutDivider {...args} />
    </div>
  ),
});
