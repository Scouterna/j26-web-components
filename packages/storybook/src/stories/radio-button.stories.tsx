import { ScoutRadioButton } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Interaction/Radio Button",
  component: ScoutRadioButton,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {
    name: "my-radio-group",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <ScoutRadioButton {...args} />
      <ScoutRadioButton {...args} />
      <ScoutRadioButton {...args} />
    </div>
  ),
});
