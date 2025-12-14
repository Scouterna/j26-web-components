import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "scout-list-view-subheading",
  styleUrl: "list-view-subheading.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class ScoutListViewSubheading {
  @Prop() text: string;

  render() {
    return <Host role="listitem">{this.text}</Host>;
  }
}
