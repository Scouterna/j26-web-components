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
  @Prop() type: "button" | "submit" | "reset" | "link" = "button";

  @Prop() href?: string;
  @Prop() target?: string;
  @Prop() rel?: string;

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
    const Tag = this.type === "link" ? "a" : "button";

    const props =
      this.type === "link"
        ? {
            href: this.href,
            target: this.target,
            // This might not be our job, but better safe than sorry.
            rel:
              this.rel ??
              (this.target === "_blank" ? "noopener noreferrer" : undefined),
          }
        : {};

    return (
      <Tag
        type={this.type}
        class={`button ${this.variant}`}
        onClick={() => this.scoutClick.emit()}
        {...props}
      >
        <slot />
        {this.icon && <span class="icon" innerHTML={this.icon} />}
      </Tag>
    );
  }
}
