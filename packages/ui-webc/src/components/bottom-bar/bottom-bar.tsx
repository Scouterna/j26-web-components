import { Component, h } from "@stencil/core";

@Component({
  tag: "scout-bottom-bar",
  styleUrl: "bottom-bar.css",
  shadow: true,
})
export class BottomBar {
  render() {
    return (
      <nav class="container">
        <slot />
      </nav>
    );
  }
}
