import {
  Component,
  type ComponentInterface,
  Event,
  type EventEmitter,
  h,
  Prop,
  State,
  Watch,
} from "@stencil/core";
import chevronIcon from "@tabler/icons/outline/chevron-down.svg";

@Component({
  tag: "scout-select",
  styleUrl: "select.css",
  scoped: true,
})
export class ScoutSelect implements ComponentInterface {
  private selectEl?: HTMLSelectElement;

  /**
   * Value of the select element, in case you want to control it yourself.
   */
  @Prop() value: string = "";

  /**
   * Whether the select is disabled. Disabled selects are not editable, excluded
   * from tab order and are not validated.
   */
  @Prop() disabled: boolean = false;

  /**
   * Custom validation function run on top of the implicit validation performed
   * by the browser. Return a string with the validation message to mark the
   * select as invalid, or null to mark it as valid.
   */
  @Prop() validate?: (value: string) => string | null;

  @Event() scoutSelectChange: EventEmitter<{
    value: string;
    element: HTMLSelectElement;
  }>;
  @Event() scoutBlur: EventEmitter<void>;

  /**
   * Internal event used for form field association.
   */
  @Event() _fieldId: EventEmitter<string>;

  @State() ariaId: string;

  @Watch("value")
  valueChanged(newValue: string) {
    if (this.selectEl && this.selectEl.value !== newValue) {
      this.selectEl.value = newValue;
    }
  }

  componentWillLoad(): Promise<void> | void {
    this.ariaId = `_${Math.random().toString(36).substring(2, 9)}`;
    this._fieldId.emit(this.ariaId);
  }

  componentDidLoad() {
    if (this.selectEl && this.value) {
      this.selectEl.value = this.value;
    }
  }

  onChange(event: Event) {
    const select = event.target as HTMLSelectElement;

    if (this.validate) {
      const validationMessage = this.validate(select.value);
      select.setCustomValidity(validationMessage ?? "");
    }

    this.scoutSelectChange.emit({
      value: select.value,
      element: select,
    });
  }

  render() {
    return (
      <div class="select-wrapper">
        <select
          id={this.ariaId}
          class="select"
          disabled={this.disabled}
          onChange={(e) => this.onChange(e)}
          onBlur={() => this.scoutBlur.emit()}
          ref={(el) => (this.selectEl = el)}
        >
          <slot />
        </select>
        <span
          class="select-icon"
          style={{ "--icon-chevron": `url(${chevronIcon})` }}
          aria-hidden="true"
        />
      </div>
    );
  }
}
