import { Component, Host, h, Prop } from "@stencil/core";
import ChevronRightIcon from "@tabler/icons/outline/chevron-right.svg";

export type ItemType = "button" | "link";

@Component({
  tag: "scout-list-view-item",
  styleUrl: "list-view-item.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class ScoutListViewItem {
  @Prop() icon?: string;
  @Prop() primary?: string;
  @Prop() secondary?: string;
  @Prop() type: ItemType = "button";

  render() {
    return (
      // biome-ignore lint/a11y/useSemanticElements: We can't use <li> because we're using shadow DOM.
      <Host role="listitem">
        {this.getPrefix()}
        {this.getContent()}
        {this.getSuffix()}
      </Host>
    );
  }

  private getPrefix() {
    if (!this.icon) {
      return null;
    }

    return <div class="prefix-icon" innerHTML={this.icon} />;
  }

  private getContent() {
    return (
      <div class="content">
        {this.primary && <div class="primary">{this.primary}</div>}
        {this.secondary && <div class="secondary">{this.secondary}</div>}
      </div>
    );
  }

  private getSuffix() {
    if (this.type === "link") {
      return (
        <div class="suffix-icon">
          <span
            class="icon"
            style={{
              "--icon": `url(${ChevronRightIcon})`,
            }}
          />
        </div>
      );
    }

    return null;
  }
}
