import { ScoutCheckbox, ScoutField, ScoutInput } from "@scouterna/ui-react";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Interaction/Field",
  component: ScoutField,
});

export default meta;

export const WithInput = meta.story({
  args: {
    label: "Name",
  },
  render: (args) => (
    <ScoutField {...args}>
      <ScoutInput />
    </ScoutField>
  ),
});

export const WithFieldTypeValidation = WithInput.extend({
  args: {
    helpText: "This field must contain a valid email address.",
  },
  render: (args) => (
    <ScoutField {...args}>
      <ScoutInput type="email" />
    </ScoutField>
  ),
});

export const WithCustomValidation = WithInput.extend({
  args: {
    helpText: "This field will fail validation if it contains the letter a.",
  },
  render: (args) => (
    <ScoutField {...args}>
      <ScoutInput
        validate={(value) => {
          if (value.toLowerCase().includes("a")) {
            return "Please don't use the letter a.";
          }
          return null;
        }}
      />
    </ScoutField>
  ),
});

export const WithCheckbox = WithInput.extend({
  args: {},
  render: (args) => (
    <ScoutField {...args}>
      <ScoutCheckbox />
    </ScoutField>
  ),
});
