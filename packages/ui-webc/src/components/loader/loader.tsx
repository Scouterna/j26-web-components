import { Component, type ComponentInterface, h } from "@stencil/core";

import SymbolAdventurer from "./symbols/adventurer.svg";
import SymbolChallenger from "./symbols/challenger.svg";
import SymbolDiscoverer from "./symbols/discoverer.svg";
import SymbolFamilyScout from "./symbols/family-scout.svg";
import SymbolRover from "./symbols/rover.svg";
import SymbolTracker from "./symbols/tracker.svg";

@Component({
  tag: "scout-loader",
  styleUrl: "loader.css",
  shadow: true,
})
export class ScoutLoader implements ComponentInterface {
  private symbols = [
    SymbolRover,
    SymbolChallenger,
    SymbolAdventurer,
    SymbolDiscoverer,
    SymbolTracker,
    SymbolFamilyScout,
  ];

  private symbolElements: HTMLDivElement[] = new Array(this.symbols.length);

  private currentSymbolIndex = 1;

  componentDidLoad(): void {
    this.showElement(this.symbolElements[0]);
  }

  render() {
    return this.getSymbols();
  }

  showElement(el: HTMLDivElement) {
    el.classList.remove("animate-out");
    el.classList.add("animate-in");
  }

  hideElement(el: HTMLDivElement) {
    el.classList.remove("animate-in");
    el.classList.add("animate-out");
  }

  next() {
    const currIndex = this.currentSymbolIndex;
    const prevIndex =
      (currIndex - 1 + this.symbols.length) % this.symbols.length;

    this.showElement(this.symbolElements[currIndex]);
    this.hideElement(this.symbolElements[prevIndex]);

    this.currentSymbolIndex += 1;
    if (this.currentSymbolIndex >= this.symbols.length) {
      this.currentSymbolIndex = 0;
    }
  }

  tickDone(event: AnimationEvent) {
    if (event.animationName === "slide-in") {
      this.next();
    }
  }

  getSymbols() {
    return this.symbols.map((symbol, index) => (
      <div
        ref={(el) => {
          this.symbolElements[index] = el;
        }}
        class="symbol"
        style={{ "--symbol": `url(${symbol})` }}
        onAnimationEnd={(event) => this.tickDone(event)}
      />
    ));
  }
}
