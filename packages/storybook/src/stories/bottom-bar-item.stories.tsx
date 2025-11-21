import { ScoutBottomBarItem } from "@scouterna/ui-react";
import BonfireIcon from "iconoir/icons/bonfire.svg?raw";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Jamboree26/Bottom Bar Item",
  component: ScoutBottomBarItem,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BottomBarItem = meta.story({
  args: {
    icon: BonfireIcon,
    label: "Activities",
  },
  render: (args) => (
    <div style={{ display: "flex", width: "6rem", height: "3.5rem" }}>
      <ScoutBottomBarItem {...args} />
    </div>
  ),
});
