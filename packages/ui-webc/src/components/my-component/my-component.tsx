import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() test: { name: string };

  private getText(): string {
    return (
      (this.first || "") +
      (this.middle ? ` ${this.middle}` : "") +
      (this.last ? ` ${this.last}` : "")
    );
  }

  render() {
    return (
      <div class="text-adventurerorange">
        Hello, World! I'm {this.getText()}
        <br />
        Also, {this.test?.name}
      </div>
    );
  }
}
