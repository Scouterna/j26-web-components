import fs from 'fs';
import path from 'path';

export default function (plop) {
  // Helper to convert kebab-case to Title Case
  plop.setHelper('titleCase', (text) => {
    return text
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });

  plop.setGenerator('component', {
    description: 'Create a new Stencil web component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (use kebab-case, e.g., my-button):',
        validate: (value) => {
          if (/.+/.test(value) && /^[a-z][a-z0-9]*(-[a-z0-9]+)+$/.test(value)) {
            return true;
          }
          return 'Component name must be in kebab-case and contain at least one hyphen (e.g., my-button)';
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Component description:',
        default: 'A new web component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.css',
        templateFile: 'plop-templates/component.css.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.spec.ts',
        templateFile: 'plop-templates/component.spec.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.e2e.ts',
        templateFile: 'plop-templates/component.e2e.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.stories.tsx',
        templateFile: 'plop-templates/component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/readme.md',
        templateFile: 'plop-templates/readme.md.hbs',
      },
      {
        type: 'add',
        path: '../docs/src/content/docs/components/{{name}}.mdx',
        templateFile: 'plop-templates/component-doc.mdx.hbs',
      },
      // Update package.json exports
      (data) => {
        const packageJsonPath = path.resolve(process.cwd(), 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

        // Add new export entry
        packageJson.exports[`./${data.name}`] = {
          import: `./dist/components/${data.name}.js`,
          types: `./dist/components/${data.name}.d.ts`,
        };

        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

        return `Added export for ${data.name} to package.json`;
      },
    ],
  });
}
