import {
  ScoutDivider,
  ScoutListView,
  ScoutListViewItem,
} from "@scouterna/ui-react";
import ClipboardDataIcon from "@tabler/icons/outline/clipboard-data.svg?raw";
import LogoutIcon from "@tabler/icons/outline/logout.svg?raw";
import WorldIcon from "@tabler/icons/outline/world.svg?raw";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Interaction/List View",
  component: ScoutListView,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {},
  render: (args) => (
    <div style={{ maxWidth: "20rem", width: "100vw" }}>
      <ScoutListView {...args}>
        <ScoutListViewItem
          icon={ClipboardDataIcon}
          primary="SignupInfo"
          type="button"
        />
        <ScoutListViewItem
          icon={WorldIcon}
          primary="Scouterna.se"
          secondary="Opens in new tab"
          type="link"
          href="https://scouterna.se"
          target="_blank"
          rel="noopener noreferrer"
        />
      </ScoutListView>
      <ScoutDivider />
      <ScoutListView {...args}>
        <ScoutListViewItem icon={LogoutIcon} primary="Logout" type="button" />
      </ScoutListView>
    </div>
  ),
});
