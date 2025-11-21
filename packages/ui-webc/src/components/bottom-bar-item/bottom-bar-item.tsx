import { Component, Event, type EventEmitter, h, Prop } from "@stencil/core";
import clsx from "clsx";

export type ItemType = "button" | "link";

/**
 * A bottom bar item used within the bottom bar for navigation. Should not be
 * used outside of a bottom bar.
 */
@Component({
  tag: "scout-bottom-bar-item",
  styleUrl: "bottom-bar-item.css",
  shadow: true,
})
export class ScoutBottomBarItem {
  @Prop() type: ItemType = "button";
  @Prop() href?: string;

  @Prop() icon!: string;
  @Prop() label!: string;
  @Prop() active?: boolean;

  @Event()
  scoutClick: EventEmitter<void>;

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
        onClick={() => this.scoutClick.emit()}
        {...props}
      >
        <span class="icon" innerHTML={this.icon} />
        <span class="label">{this.label}</span>
      </Tag>
    );
  }
}
