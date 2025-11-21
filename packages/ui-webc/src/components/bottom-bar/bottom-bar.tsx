import { Component, h } from "@stencil/core";

/**
 * The bottom bar component is used in the Jamboree26 app to provide
 * navigation at the bottom of the screen.
 */
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
