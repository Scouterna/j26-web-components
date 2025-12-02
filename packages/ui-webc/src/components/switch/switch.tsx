import { Component, h } from "@stencil/core";

@Component({
  tag: "scout-switch",
  styleUrl: "switch.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class ScoutSwitch {
  render() {
    return (
      <slot />
    );
  }
}
