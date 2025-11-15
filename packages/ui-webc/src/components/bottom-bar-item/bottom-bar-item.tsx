import { Component, Event, type EventEmitter, h, Prop } from "@stencil/core";
import clsx from "clsx";

export type ItemType = "button" | "link";

@Component({
  tag: "scout-bottom-bar-item",
  styleUrl: "bottom-bar-item.css",
  shadow: true,
})
export class BottomBarItem {
  @Prop() type: ItemType = "button";
  @Prop() href?: string;

  @Prop() icon!: string;
  @Prop() label!: string;
  @Prop() active?: boolean;

  @Event({ bubbles: true, composed: true }) scoutClick: EventEmitter<void>;

  render() {
    const Tag = this.type === "link" ? "a" : "button";

    const props =
      this.type === "link"
        ? {
            href: this.href,
          }
        : {};

    return (
      <Tag
        class={clsx("button", this.active && "active")}
        {...props}
        onClick={() => {
          console.log("Hi!");
          this.scoutClick.emit();
        }}
      >
        <span class="icon" innerHTML={this.icon} />
        <span class="label">{this.label}</span>
      </Tag>
    );
  }
}
