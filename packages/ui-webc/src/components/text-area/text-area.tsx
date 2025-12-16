import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "scout-text-area",
  styleUrl: "text-area.css",
  shadow: {
    delegatesFocus: true,
  },
})

export class ScoutTextArea {
  @Prop() autofocus: boolean = false;

  @Prop() disabled?: boolean;

  @Prop() form: string;

  @Prop() maxLength?: number;

  @Prop() placeholder?: string;

  @Prop() readOnly?: boolean;

  @Prop() required?: boolean;
  
  @Prop() value?: string;

  @Prop() label?: string;

  render() {
    return (
      <div class="flexbox">
      <label>
        {this.label}
      </label>
      <textarea 
        class="textarea"
        autofocus={this.autofocus}
        disabled={this.disabled}
        form={this.form}
        maxLength={this.maxLength}
        placeholder={this.placeholder}
        readOnly={this.readOnly}
        required={this.required}
        value={this.value}
        />
      </div>
    );
  }
}
