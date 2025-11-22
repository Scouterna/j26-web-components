import { Component, Event, type EventEmitter, h, Prop } from "@stencil/core";

export type Variant = "primary" | "outlined" | "text" | "caution" | "danger";

/**
 * A simple button component.
 */
@Component({
  tag: "scout-button",
  styleUrl: "button.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class ScoutButton {
  @Prop() type: "button" | "submit" | "reset" = "button";

  /**
   * The variant primarily affects the color of the button.
   */
  @Prop() variant: Variant = "outlined";

  /**
   * An optional icon to display alongside the button text. Must be an SVG string.
   */
  @Prop() icon?: string;

  @Event() scoutClick: EventEmitter<void>;

  render() {
    return (
      <button
        type={this.type}
        class={this.variant}
        onClick={() => this.scoutClick.emit()}
      >
        <slot />
        {this.icon && <span class="icon" innerHTML={this.icon} />}
      </button>
    );
  }
}
