import { setCustomElementsManifest } from "@stencil/storybook-plugin";
import { definePreview } from "@storybook/react-vite";
import kebabCase from "lodash.kebabcase";
import customElements from "../../ui-webc/dist/custom-elements.json";
import addonDocs from "@storybook/addon-docs";
import addonA11y from "@storybook/addon-a11y";
import addonVitest from "@storybook/addon-vitest";

// This import isn't very nice, but @stencil/storybook-plugin doesn't expose this functionality
import { parameters } from "../node_modules/@stencil/storybook-plugin/dist/entry-preview-argtypes";

// Include styles to have our web components render correctly
import "@scouterna/ui-webc/dist/ui-webc/ui-webc.css";

// Register the custom elements manifest for Stencil integration
setCustomElementsManifest(customElements);

// Utility for converting our React component display names to web component tag names
const getComponentWebcName = (component: unknown): string | null => {
  if (
    component &&
    typeof component === "object" &&
    "displayName" in component &&
    typeof component.displayName === "string"
  ) {
    return kebabCase(component.displayName);
  }

  return null;
};

export default definePreview({
  addons: [addonDocs(), addonA11y(), addonVitest()],
  parameters: {
    docs: {
      // Automatically extract argTypes and component descriptions from web components
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
      // biome-ignore lint/suspicious/noExplicitAny: We need to cast becuase these are internal APIs.
    } as any,
    actions: {
      argTypesRegex: "^onScout.*",
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    options: {
      storySort: {
        order: ["Basics", "Jamboree26", ["Bottom Bar", "Bottom Bar Item"]],
      },
    },
  },
  tags: ["autodocs"],
});
