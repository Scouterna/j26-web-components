import { Component, h, Prop, Event, type EventEmitter } from "@stencil/core";
import checkIcon from "@tabler/icons/outline/check.svg";

@Component({
  tag: "scout-checkbox",
  styleUrl: "checkbox.css",
  scoped: true,
})
export class ScoutCheckbox {
  @Prop() checked: boolean = false;

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
          onChange={(event) => this.onClick(event)}
          style={{ "--icon-checkbox": `url(${checkIcon})` }}
          type="checkbox"
          id="checkbox"
          checked={this.checked}
        />
      </div>
    );
  }
}
