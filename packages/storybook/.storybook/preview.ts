import type { Preview } from "@storybook/react-vite";

import "@scouterna/ui-webc/dist/ui-webc/ui-webc.css";

import { setCustomElementsManifest } from "@stencil/storybook-plugin";
import kebabCase from "lodash.kebabcase";
import customElements from "../../ui-webc/dist/custom-elements.json";
// This export isn't very nice, but @stencil/storybook-plugin doesn't expose this functionality
import { parameters } from "../node_modules/@stencil/storybook-plugin/dist/entry-preview-argtypes";

setCustomElementsManifest(customElements);

const getComponentWebcName = (component: unknown): string | null => {
  if (
    component &&
    typeof component === "object" &&
    "displayName" in component &&
    typeof component.displayName === "string"
  ) {
    return `scout-${kebabCase(component.displayName)}`;
  }

  return null;
};

const preview: Preview = {
  parameters: {
    docs: {
      extractArgTypes: (component: unknown) => {
        const webcName = getComponentWebcName(component);
        if (!webcName) return null;
        return parameters.docs.extractArgTypes(webcName);
      },
      extractComponentDescription: (component: unknown) => {
        const webcName = getComponentWebcName(component);
        if (!webcName) return null;
        return parameters.docs.extractComponentDescription(webcName);
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^onScout.*" },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  tags: ["autodocs"],
};

export default preview;
