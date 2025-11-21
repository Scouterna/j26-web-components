import { ScoutBottomBar, ScoutBottomBarItem } from "@scouterna/ui-react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import BonfireIcon from "iconoir/icons/bonfire.svg?raw";
import CalendarIcon from "iconoir/icons/calendar.svg?raw";
import MapIcon from "iconoir/icons/map.svg?raw";
import MoreHorizIcon from "iconoir/icons/more-horiz.svg?raw";

const meta = {
  title: "Jamboree26/Bottom Bar",
  component: ScoutBottomBar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ScoutBottomBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicExample: Story = {
  args: {},
  render: (args) => (
    <div style={{ maxWidth: "24rem", width: "100vw" }}>
      <ScoutBottomBar {...args}>
        <ScoutBottomBarItem label="Schedule" icon={CalendarIcon} />
        <ScoutBottomBarItem label="Map" icon={MapIcon} />
        <ScoutBottomBarItem label="Activities" icon={BonfireIcon} />
        <ScoutBottomBarItem label="More" icon={MoreHorizIcon} />
      </ScoutBottomBar>
    </div>
  ),
};
