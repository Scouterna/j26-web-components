import { ScoutStack } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const style = {
  backgroundColor: "var(--color-background-brand-base)",
  color: "var(--color-text-brand-inverse)",
  padding: "5px 20px",
};

const meta = preview.meta({
  title: "Layout/Stack",
  component: ScoutStack,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {},
  render: (args) => (
    <ScoutStack {...args}>
      <div style={style}>Item 1</div>
      <div style={style}>Item 2</div>
      <div style={style}>Item 3</div>
    </ScoutStack>
  ),
});
