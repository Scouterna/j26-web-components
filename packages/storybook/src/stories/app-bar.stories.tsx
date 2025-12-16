import { ScoutAppBar, ScoutButton } from "@scouterna/ui-react";
import ArrowLeftIcon from "@tabler/icons/outline/arrow-left.svg?raw";
import DotsIcon from "@tabler/icons/outline/dots.svg?raw";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Interaction/App Bar",
  component: ScoutAppBar,
  parameters: {
    layout: "fullscreen",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {
    titleText: "App Bar Title",
  },
  render: (args) => <ScoutAppBar {...args} />,
});

export const WithSlottedButtons = BasicExample.extend({
  render: (args) => (
    <ScoutAppBar {...args}>
      <ScoutButton slot="prefix" icon={ArrowLeftIcon} iconOnly variant="text">
        Back
      </ScoutButton>
      <ScoutButton slot="suffix" icon={DotsIcon} iconOnly variant="text">
        More
      </ScoutButton>
    </ScoutAppBar>
  ),
});
