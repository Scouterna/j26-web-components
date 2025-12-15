import { ScoutSelect } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Interaction/Select",
  component: ScoutSelect,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {
    value: "",
  },
  render: (args) => (
    <ScoutSelect {...args}>
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </ScoutSelect>
  ),
});

export const WithPreselectedValue = meta.story({
  args: {
    value: "option2",
  },
  render: (args) => (
    <ScoutSelect {...args}>
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </ScoutSelect>
  ),
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    value: "option1",
  },
  render: (args) => (
    <ScoutSelect {...args}>
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </ScoutSelect>
  ),
});
