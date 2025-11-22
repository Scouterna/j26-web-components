import kebabCase from "lodash.kebabcase";

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("component", {
    description: "Create a new Stencil web component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: 'Component name (without "scout" prefix, e.g. "button"):',
        filter: (value) => kebabCase(value.trim()),
        validate: (value) => {
          if (value.startsWith("scout-") || value.trim().length === 0) {
            return 'Component name must not be empty and not start with "scout-"';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/ui-webc/src/components/{{name}}/{{name}}.tsx",
        templateFile: "plop-templates/component/ui-webc/component.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/ui-webc/src/components/{{name}}/{{name}}.css",
        templateFile: "plop-templates/component/ui-webc/component.css.hbs",
      },
      {
        type: "add",
        path: "packages/ui-webc/src/components/{{name}}/readme.md",
        templateFile: "plop-templates/component/ui-webc/readme.md.hbs",
      },
      {
        type: "add",
        path: "packages/storybook/src/stories/{{name}}.stories.tsx",
        templateFile:
          "plop-templates/component/storybook/component.stories.tsx.hbs",
      },
    ],
  });
}
