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

  /**
   * Use this prop if you need to connect your checkbox with another element describing its use, other than the property label.
   */
  @Prop() ariaLabelledby: string;

  @Prop() label: string;

  @State() ariaId: string;

  @Event() scoutCheckboxChecked: EventEmitter<{
    checked: boolean;
    element: HTMLInputElement;
  }>;
  /**
   * Internal event used for form field association.
   */
  @Event() _fieldId: EventEmitter<string>;

  componentWillLoad(): Promise<void> | void {
    this.ariaId = `_${Math.random().toString(36).substring(2, 9)}`;
    this._fieldId.emit(this.ariaId);
  }

  onClick(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    console.log("checkbox", checkbox.checked);

    this.scoutCheckboxChecked.emit({
      checked: checkbox.checked,
      element: checkbox,
    });
  }
  /*
  todo:
  - Wrap checkbox with label if used.
  - make sure it works with field nicely with label.
  */

  render() {
    const Tag = this.label?.length ? "label" : "div";
    return (
      <Tag>
        {this.label}
        <span class="inlineDivider"></span>
        <input
          class="checkbox"
          onChange={(event) => this.onClick(event)}
          style={{ "--icon-checkbox": `url(${checkIcon})` }}
          type="checkbox"
          id={this.ariaId}
          aria-labelledby={this.ariaLabelledby}
          aria-disabled={this.disabled}
          disabled={this.disabled}
          checked={this.checked}
        />
      </Tag>
    );
  }
}
