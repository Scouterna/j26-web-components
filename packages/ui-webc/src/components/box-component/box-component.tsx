import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "box-component",
  styleUrl: "box-component.css",
  shadow: true,
})
export class BoxComponent {
  /**
   * The variant of the component
   */
  @Prop() variant?: string;

  render() {
    return (
      <div class={this.variant}>
        <slot />
      </div>
    );
  }
}
