import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "scout-list-view",
  styleUrl: "list-view.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class ScoutListView {
  render() {
    return (
      <Host role="list">
        <slot />
      </Host>
    );
  }
}
