import { Component, h, State } from "@stencil/core";

import SymbolAdventurer from "./symbols/adventurer.svg";
import SymbolChallenger from "./symbols/challenger.svg";
import SymbolDiscoverer from "./symbols/discoverer.svg";
import SymbolFamilyScout from "./symbols/family-scout.svg";
import SymbolRover from "./symbols/rover.svg";
import SymbolTracker from "./symbols/tracker.svg";

const LoaderSymbol = ({ url }: { url: string }) => (
  <div class="symbol" style={{ "--symbol": `url(${url})` }} />
);

@Component({
  tag: "scout-loader",
  styleUrl: "loader.css",
  shadow: true,
})
export class ScoutLoader {
  private symbols = [
    SymbolFamilyScout,
    SymbolTracker,
    SymbolDiscoverer,
    SymbolAdventurer,
    SymbolChallenger,
    SymbolRover,
  ];

  @State() private currentSymbolIndex = 0;

  render() {
    return (
      <div
        class="track"
        onAnimationIteration={(e) => {
          if (e.animationName !== "slide") return;

          this.currentSymbolIndex =
            (this.currentSymbolIndex + 1) % this.symbols.length;
        }}
      >
        {this.getCurrentSymbolPair()}
      </div>
    );
  }

  getCurrentSymbolPair() {
    const totalSymbols = this.symbols.length;

    const prevIndex =
      (this.currentSymbolIndex - 1 + totalSymbols) % totalSymbols;

    return [
      <LoaderSymbol url={this.symbols[this.currentSymbolIndex]} />,
      <LoaderSymbol url={this.symbols[prevIndex]} />,
    ];
  }
}
