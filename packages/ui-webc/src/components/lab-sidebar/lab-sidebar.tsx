import { Component, h, Prop, State, Watch } from "@stencil/core";
import { cn } from "../../utils/utils";
import type { Page } from "./types";

@Component({
  tag: "lab-sidebar",
  styleUrl: "lab-sidebar.css",
  shadow: true,
})
export class LabSidebar {
  @Prop() pages: Record<string, Page> = {};
  @Prop() currentPage: string = "";

  @State() groupedPages: Record<string, Page[]> = {};

  @Watch("pages")
  updateGroupedPages() {
    const groups: Record<string, Page[]> = {};

    Object.values(this.pages).forEach((page) => {
      if (!groups[page.group]) {
        groups[page.group] = [];
      }
      groups[page.group].push(page);
    });

    this.groupedPages = groups;
  }

  componentWillLoad() {
    this.updateGroupedPages();
  }

  render() {
    return (
      <aside
        class={`
          h-full
          flex flex-col gap-2
          w-48 p-2
          border-r border-gray-300
        `}
      >
        <ul
          class={`
            space-y-1
          `}
        >
          {Object.entries(this.groupedPages).map(([group, pages]) => (
            <li key={group} class="pl-1">
              <h2 class="text-xs font-bold text-gray-900 mb-1">{group}</h2>
              <ul
                class={`
                  border-l border-gray-300
                  space-y-1
                `}
              >
                {this.getItems(pages)}
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  getItems(pages: Page[]) {
    return pages.map((page) => this.getItem(page));
  }

  getItem(page: Page) {
    const isActive = this.currentPage === page.path;

    return (
      <li class="pl-1">
        <a
          href={`#${page.path}`}
          class={cn(
            `
              flex justify-between gap-2
              py-1 px-3
              text-sm transition text-gray-800
              rounded-md
            `,
            isActive
              ? "bg-gray-100 font-medium"
              : "hover:text-gray-900 hover:bg-gray-100",
          )}
        >
          {page.name}
        </a>
      </li>
    );
  }
}
