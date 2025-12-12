import { ScoutLink } from "@scouterna/ui-react";
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
    label: "Scouterna",
    href: "https://scouterna.se",
    target: "_blank",
    ariaLabel: "Go to the Scouterna website",
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
    label: "Button",
    ariaLabel: "Triggers an alert",
  },
  render: (args) => (
    <p>
      This is a{" "}
      <ScoutLink
        onScoutLinkClick={() => {
          window.parent.alert("ButtonCLicked");
          (
            document.getElementById("targetFrame") as HTMLIFrameElement
          )?.contentWindow?.alert("Button clicked!");
        }}
        {...args}
      />{" "}
      with an onClick event triggering an alert.
    </p>
  ),
});
