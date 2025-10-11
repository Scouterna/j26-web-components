import { h } from "@stencil/core";
import type { Meta, StoryObj } from "@stencil/storybook-plugin";
import { MyComponent } from "./my-component";

const meta: Meta<MyComponent> = {
  title: "MyComponent",
  component: MyComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    first: { control: "text" },
    last: { control: "text" },
    middle: { control: "text" },
  },
  args: { first: "John", last: "Doe", middle: "Michael" },
  render: (props) => <my-component {...props} />,
};

export default meta;

type Story = StoryObj<MyComponent>;

export const Primary: Story = {
  args: {
    first: "John",
    last: "Doe",
    middle: "Michael",
  },
};

export const Secondary: Story = {
  args: {
    first: "Jane",
    last: "Smith",
    middle: "Marie",
  },
};
