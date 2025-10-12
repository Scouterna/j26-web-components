import { Component, Event, type EventEmitter, h, Prop } from "@stencil/core";

export type Variant = "primary" | "outlined" | "text" | "caution" | "danger";

@Component({
  tag: "scout-button",
  styleUrl: "scout-button.css",
  shadow: true,
})
export class ScoutButton {
  @Prop() type: "button" | "submit" | "reset" = "button";

  @Prop() variant: Variant = "outlined";

  @Prop() icon?: string;

  @Event()
  scoutClick: EventEmitter<void>;

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
