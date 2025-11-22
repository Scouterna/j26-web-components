import { Component, h } from "@stencil/core";

/**
 * A general surface to hold various types of content.
 */
@Component({
  tag: "scout-card",
  styleUrl: "card.css",
  shadow: true,
})
export class ScoutCard {
  render() {
    return <slot />;
  }
}
