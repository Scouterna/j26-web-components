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
      // biome-ignore lint/a11y/useSemanticElements: We can't use <ul> because we're using shadow DOM.
      <Host role="list">
        <slot />
      </Host>
    );
  }
}
