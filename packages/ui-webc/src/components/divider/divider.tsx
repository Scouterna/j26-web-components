import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "scout-divider",
  styleUrl: "divider.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class ScoutDivider {
  render() {
    return <Host />;
  }
}
