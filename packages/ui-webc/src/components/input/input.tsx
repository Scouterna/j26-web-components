import {
  Component,
  type ComponentInterface,
  Event,
  type EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";

export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  // Hack to suggest above value but still allow any other string value
  | (string & {});

export type InputMode =
  | "none"
  | "text"
  | "decimal"
  | "numeric"
  | "tel"
  | "search"
  | "email"
  | "url"
  // Hack to suggest above value but still allow any other string value
  | (string & {});

@Component({
  tag: "scout-input",
  styleUrl: "input.css",
  scoped: true,
})
export class ScoutInput implements ComponentInterface {
  /**
   * Type of input element. If you need a number input, read the accessibility
   * section of this MDN article first:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number#accessibility
   */
  @Prop() type: InputType = "text";

  /**
   * Input mode hints for devices with dynamic keyboards.
   */
  @Prop() inputmode?: InputMode;

  /**
   * Regex pattern for input validation.
   */
  @Prop() pattern?: string;

  /**
   * Value of the input element, in case you want to control it yourself.
   */
  @Prop() value: string = "";

  @Prop() name: string;

  /**
   * Whether the input is disabled. Disabled inputs are not editable, excluded
   * from tab order and are not validated.
   */
  @Prop() disabled: boolean = false;

  /**
   * Custom validation function run on top of the implicit validation performed
   * by the browser. Return a string with the validation message to mark the
   * input as invalid, or null to mark it as valid.
   */
  @Prop() validate?: (value: string) => string | null;

  @Event() scoutInputChange: EventEmitter<{
    value: string;
    element: HTMLInputElement;
  }>;
  @Event() scoutBlur: EventEmitter<void>;

  /**
   * Internal event used for form field association.
   */
  @Event() _fieldId: EventEmitter<string>;

  @State() ariaId: string;

  componentWillLoad(): Promise<void> | void {
    this.ariaId = `_${Math.random().toString(36).substring(2, 9)}`;
    this._fieldId.emit(this.ariaId);
  }

  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;

    if (this.validate) {
      const validationMessage = this.validate(input.value);
      input.setCustomValidity(validationMessage ?? "");
    }

    this.scoutInputChange.emit({
      value: input.value,
      element: input,
    });
  }

  render() {
    return (
      <input
        id={this.ariaId}
        type={this.type}
        name={this.name}
        inputMode={this.inputmode}
        pattern={this.pattern}
        class="input"
        value={this.value}
        disabled={this.disabled}
        onInput={(e) => this.onInput(e)}
        onBlur={() => this.scoutBlur.emit()}
      />
    );
  }
}
