import { ScoutCard } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Basics/Card",
  component: ScoutCard,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {},
  render: (args) => (
    <div style={{ maxWidth: "24rem", width: "100vw" }}>
      <ScoutCard {...args}>Content</ScoutCard>
    </div>
  ),
});
