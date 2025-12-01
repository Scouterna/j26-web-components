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
  /**
   * Internal event used for form field association.
   */
  @Event() _checkboxId: EventEmitter<string>;

  componentWillLoad(): Promise<void> | void {
    this.ariaId = `_${Math.random().toString(36).substring(2, 9)}`;
    this._checkboxId.emit(this.ariaId);
  }

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
