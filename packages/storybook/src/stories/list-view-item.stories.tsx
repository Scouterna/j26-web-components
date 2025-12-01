import { ScoutListViewItem } from "@scouterna/ui-react";
import UserIcon from "@tabler/icons/outline/user.svg?raw";
import preview from "#.storybook/preview";

const meta = preview.meta({
  title: "Interaction/List View Item",
  component: ScoutListViewItem,
  parameters: {
    layout: "centered",
  },
});

export default meta;

export const BasicExample = meta.story({
  args: {
    primary: "List View Item",
    secondary: "This is a secondary text",
    type: "button",
    icon: UserIcon,
  },
  render: (args) => (
    <ul style={{ margin: 0, padding: 0 }}>
      <ScoutListViewItem {...args} />
    </ul>
  ),
});
