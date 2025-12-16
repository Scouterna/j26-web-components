import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "scout-app-bar",
  styleUrl: "app-bar.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class ScoutAppBar {
  @Prop() titleText?: string;

  render() {
    return (
      <header class="container">
        <slot name="prefix" />
        <div class="title">{this.titleText}</div>
        <slot name="suffix" />
      </header>
    );
  }
}
