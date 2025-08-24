import { Component, h, Listen, State } from "@stencil/core";

@Component({
  tag: "lab-layout",
  styleUrl: "lab-layout.css",
  shadow: true,
})
export class LabLayout {
  @State() currentPage: string = "";

  componentWillLoad() {
    this.currentPage = window.location.hash.substring(1);
  }

  @Listen("hashchange", { target: "window" })
  onHashChange() {
    this.currentPage = window.location.hash.substring(1);
  }

  getIframeSrc() {
    if (!this.currentPage) {
      return "./placeholder.html";
    }

    return `./pages/${this.currentPage}`;
  }

  render() {
    return (
      <div class="h-screen flex">
        <lab-sidebar
          currentPage={this.currentPage}
          // biome-ignore lint/suspicious/noExplicitAny: It's there ;)
          pages={(window as any).__lab_pages ?? []}
        />
        <main class="flex-1 px-8 py-4">
          <iframe
            src={this.getIframeSrc()}
            class="w-full h-full border-0"
            title="Component Preview"
          />
        </main>
      </div>
    );
  }
}
