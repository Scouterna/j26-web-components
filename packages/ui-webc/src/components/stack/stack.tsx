import { Component, Host, h, Prop } from "@stencil/core";

export type Direction = "row" | "column";

enum GapSizeValues {
  xs = "2",
  s = "4",
  m = "8",
  l = "12",
  xl = "16",
  xxl = "20",
}
export type GapSize = keyof typeof GapSizeValues;

@Component({
  tag: "scout-stack",
  styleUrl: "stack.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class ScoutStack {
  /**
   * The direction of the stack.
   */
  @Prop() direction: Direction = "row";

  /**
   * Gap size. If more sizes are needed, we can expand.
   */
  @Prop() gapSize: GapSize = "m";

  render() {
    return (
      <Host
        style={{
          "--stack-flex-direction": `${this.direction}`,
          "--stack-gap-spacing": `var(--spacing-${GapSizeValues[this.gapSize]})`,
        }}
      >
        <slot />
      </Host>
    );
  }
}
