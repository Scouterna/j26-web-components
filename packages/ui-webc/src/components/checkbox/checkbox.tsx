import {
  Component,
  Event,
  type EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import checkIcon from "@tabler/icons/outline/check.svg";

@Component({
  tag: "scout-checkbox",
  styleUrl: "checkbox.css",
  scoped: true,
})
export class ScoutCheckbox {
  @Prop() checked: boolean = false;

  @Prop() disabled: boolean = false;

  @State() ariaId: string;
  @State() ariaLabelledBy: string;

  @Event() scoutCheckboxChecked: EventEmitter<{
    checked: boolean;
    element: HTMLInputElement;
  }>;

  onClick(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.scoutCheckboxChecked.emit({
      checked: !!this.checked,
      element: checkbox,
    });
  }

  render() {
    return (
      <div class="wrapper">
        <input
          class={`checkbox ${this.disabled ? "disabled" : ""}`}
          onChange={(event) => this.onClick(event)}
          style={{ "--icon-checkbox": `url(${checkIcon})` }}
          type="checkbox"
          id={this.ariaId}
          aria-labelledby={this.ariaLabelledBy}
          aria-disabled={this.disabled}
          disabled={this.disabled}
          checked={this.checked}
        />
      </div>
    );
  }
}
