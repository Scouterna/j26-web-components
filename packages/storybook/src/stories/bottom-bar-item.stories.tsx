import { ScoutBottomBarItem } from "@scouterna/ui-react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import BonfireIcon from "iconoir/icons/bonfire.svg?raw";

const meta = {
  title: "Jamboree26/Bottom Bar Item",
  component: ScoutBottomBarItem,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ScoutBottomBarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomBarItem: Story = {
  args: {
    icon: BonfireIcon,
    label: "Activities",
  },
  render: (args) => (
    <div style={{ display: "flex", width: "6rem", height: "3.5rem" }}>
      <ScoutBottomBarItem {...args} />
    </div>
  ),
};
