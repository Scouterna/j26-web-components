# J26 Web Components

A monorepo containing Stencil web components, design tokens, and Astro Starlight documentation.

## Prerequisites

- Node.js (v18 or higher)
- pnpm (v10.7.0 or higher)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development (builds tokens & components, starts hot reload for all packages)
pnpm dev
```

The dev server will start:
- Design tokens watch mode (rebuilds on changes)
- Components watch mode (rebuilds on changes)
- Astro Starlight docs (http://localhost:4321)

## Available Scripts

All commands should be run from the **root directory**.

### Development

```bash
# Start full development environment with hot reloading
# (Builds tokens & components, then starts watch mode for all)
pnpm dev

# Fast component-only dev with Stencil's built-in HMR server
# (Faster rebuilds, but components shown in Stencil's UI, not Astro)
pnpm dev:components

# Start only docs (components must be built first)
pnpm docs:dev

# Start Storybook (legacy, use docs instead)
pnpm storybook
```

**Hot Reloading Performance:**
- **Token changes**: ~50-200ms rebuild time
- **Component changes**: ~1-3s rebuild time (optimized with incremental builds)
- **Astro doc changes**: Instant HMR
- Use `pnpm dev:components` for fastest component iteration (Stencil's dev server with native HMR)

### Building

```bash
# Build tokens and components only
pnpm build

# Build everything (tokens, components, and docs)
pnpm build:all

# Build specific packages
pnpm tokens:build
pnpm components:build
pnpm docs:build

# Preview production docs build
pnpm docs:preview
```

### Testing

```bash
# Run unit tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run E2E tests
pnpm test:e2e
```

### Code Quality

```bash
# Check code with Biome
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format
```

### Generating Components

```bash
# Generate a new component with plop
pnpm plop

# Or use Stencil's generator
pnpm generate
```

The plop generator will:
- Create component files (.tsx, .css, .spec.ts, .e2e.ts, .stories.tsx)
- Generate Starlight documentation (with consistent structure)
- Update package.json exports automatically

### Cleanup

```bash
# Remove all node_modules and build artifacts
pnpm clean

# Clean and reinstall dependencies
pnpm clean:install

# Clean build artifacts and rebuild
pnpm clean:build
```

## Project Structure

```
j26-web-components/
├── packages/
│   ├── design-tokens/    # Design tokens (CSS custom properties)
│   ├── ui-webc/          # Stencil web components
│   └── docs/             # Astro Starlight documentation
├── package.json          # Root package with scripts
└── pnpm-workspace.yaml   # Workspace configuration
```

## Creating a New Component

1. Run the plop generator:
   ```bash
   pnpm plop
   ```

2. Follow the prompts:
   - Component name (e.g., `my-button`)
   - Component description

3. The generator creates:
   - Component files in `packages/ui-webc/src/components/`
   - Documentation in `packages/docs/src/content/docs/components/`

4. Customize the generated files:
   - Update component logic in `.tsx` file
   - Add styles in `.css` file
   - Update documentation with real examples
   - Customize API reference (props, events)
   - Add variants and examples

5. Test your component:
   ```bash
   pnpm dev
   ```
   Navigate to http://localhost:4321 to see your component documentation.

## Documentation Structure

All component documentation follows this structure:

1. **Overview** - Brief description of the component
2. **Installation** - How to install the package
3. **Usage** - TypeScript and HTML examples
4. **API Reference** - Properties and Events tables
5. **Examples** - Default example with preview
6. **Variants** - Different component variations

## Development Workflow

1. **Start development**: `pnpm dev`
2. **Make changes** to components in `packages/ui-webc/src/components/`
3. **View changes** in Astro docs at http://localhost:4321
4. **Add/update documentation** in `packages/docs/src/content/docs/`
5. **Test** with `pnpm test`
6. **Lint** with `pnpm lint:fix`
7. **Build** with `pnpm build` before committing

## Using Components

### Installation

```bash
npm install @scouterna/ui-webc
```

### Usage

```typescript
// Import and register the components
import { defineCustomElements } from '@scouterna/ui-webc/loader';

defineCustomElements();
```

```html
<!-- Use components in your HTML -->
<scout-button variant="primary">Click me</scout-button>
```

## Troubleshooting

### Components not loading in docs

Make sure you've built the components:
```bash
pnpm components:build
```

### Design tokens not found

Build tokens first:
```bash
pnpm tokens:build
```

### Clean start

If you encounter issues, try a clean rebuild:
```bash
pnpm clean:install
pnpm dev
```

## Contributing

1. Create a new component with `pnpm plop`
2. Follow the existing component structure
3. Update documentation with real examples
4. Add tests for your component
5. Run `pnpm lint:fix` before committing
6. Ensure `pnpm build` succeeds
