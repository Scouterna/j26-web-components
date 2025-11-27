import {
  ScoutDivider,
  ScoutListView,
  ScoutListViewItem,
} from "@scouterna/ui-react";
import ClipboardDataIcon from "@tabler/icons/outline/clipboard-data.svg?raw";
import InboxIcon from "@tabler/icons/outline/inbox.svg?raw";
import LogoutIcon from "@tabler/icons/outline/logout.svg?raw";
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
          icon={InboxIcon}
          primary="Inbox"
          secondary="This is item 1"
          type="button"
        />
        <ScoutListViewItem
          icon={ClipboardDataIcon}
          primary="SignupInfo"
          secondary="This is item 2"
          type="link"
        />
      </ScoutListView>
      <ScoutDivider />
      <ScoutListView {...args}>
        <ScoutListViewItem icon={LogoutIcon} primary="Logout" type="button" />
      </ScoutListView>
    </div>
  ),
});
