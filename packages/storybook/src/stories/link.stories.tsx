import { ScoutLink } from "@scouterna/ui-react";
import { fn } from "storybook/test";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Interaction/Link",
  component: ScoutLink,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const HrefLink = meta.story({
  args: {
    type: "link",
    label: "Scouterna",
    href: "https://scouterna.se",
    target: "_blank",
    linkAriaLabel: "Go to the Scouterna website",
  },
  render: (args) => (
    <p>
      This is a text with a href link inside of it leading to the{" "}
      <ScoutLink {...args} /> website.
    </p>
  ),
});

export const ButtonLink = meta.story({
  args: {
    type: "button",
    label: "Button",
    linkAriaLabel: "Triggers an event",
  },
  render: (args) => (
    <p>
      This is a <ScoutLink {...args} /> with an onClick event triggering an
      event.
    </p>
  ),
});
