import {
  Component,
  Event,
  type EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";

@Component({
  tag: "scout-text-area",
  styleUrl: "text-area.css",
  scoped: true,
})
export class ScoutTextArea {
  @Prop() name?: string;

  @Prop() autofocus: boolean = false;

  @Prop() disabled?: boolean;

  @Prop() form: string;

  @Prop() rows?: number = 3;

  @Prop() maxLength?: number;

  @Prop() placeholder?: string;

  @Prop() readOnly?: boolean;

  @Prop() required?: boolean;

  @Prop() value?: string;

  @Prop() label?: string;

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
      <textarea
        class="textarea"
        name={this.name}
        autofocus={this.autofocus}
        disabled={this.disabled}
        form={this.form}
        rows={this.rows}
        maxLength={this.maxLength}
        placeholder={this.placeholder}
        readOnly={this.readOnly}
        required={this.required}
        value={this.value}
      />
    );
  }
}
