import {
  ScoutDivider,
  ScoutListView,
  ScoutListViewItem,
  ScoutListViewSubheader,
} from "@scouterna/ui-react";
import BoxIcon from "@tabler/icons/outline/box.svg?raw";
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

export const WithSections = meta.story({
  args: {},
  render: (args) => (
    <div style={{ maxWidth: "20rem", width: "100vw" }}>
      <ScoutListView {...args}>
        <ScoutListViewSubheader text="First section" />
        <ScoutListViewItem icon={BoxIcon} primary="First item" />
        <ScoutListViewItem icon={BoxIcon} primary="Second item" />
        <ScoutListViewSubheader text="Second section" />
        <ScoutListViewItem icon={BoxIcon} primary="Third item" />
        <ScoutListViewItem icon={BoxIcon} primary="Fourth item" />
        <ScoutListViewItem icon={BoxIcon} primary="Fifth item" />
        <ScoutListViewSubheader text="Third section" />
        <ScoutListViewItem icon={BoxIcon} primary="Sixth item" />
        <ScoutListViewItem icon={BoxIcon} primary="Seventh item" />
      </ScoutListView>
    </div>
  ),
});
