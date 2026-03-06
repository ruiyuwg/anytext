# Tailwind CSS — Customization

## Tailwind CSS v4 (CSS-based Config)

In Tailwind v4, configuration is done directly in CSS:

```css
@import "tailwindcss";

@theme {
  --color-brand: #3b82f6;
  --color-brand-dark: #1d4ed8;
  --font-family-display: "Inter", sans-serif;
  --breakpoint-3xl: 1920px;
  --spacing-128: 32rem;
}
```

## Tailwind CSS v3 (JS Config)

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3b82f6",
          dark: "#1d4ed8",
          light: "#93c5fd",
        },
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
```

### Extending vs Overriding

- `theme.extend.colors` **adds** new colors while keeping defaults
- `theme.colors` **replaces** the entire color palette

## Custom Colors

```html
<!-- Using extended theme colors -->
<div class="bg-brand text-brand-dark">Branded element</div>

<!-- Arbitrary values -->
<div class="bg-[#1da1f2]">Twitter blue</div>
<div class="text-[rgb(255,100,0)]">RGB value</div>
<div class="bg-[--my-css-var]">CSS variable</div>
```

## Content Configuration

Tell Tailwind where to find class names so it can tree-shake unused styles:

```js
// tailwind.config.js (v3)
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./node_modules/@my-org/ui/**/*.js", // third-party components
  ],
};
```

## Plugins

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    require("@tailwindcss/typography"), // Prose styling
    require("@tailwindcss/forms"), // Form element resets
    require("@tailwindcss/container-queries"), // @container support

    // Custom plugin
    plugin(function ({ addUtilities, addComponents, theme }) {
      addUtilities({
        ".text-shadow": {
          "text-shadow": "0 2px 4px rgb(0 0 0 / 0.1)",
        },
      });
      addComponents({
        ".btn": {
          padding: theme("spacing.2") + " " + theme("spacing.4"),
          borderRadius: theme("borderRadius.lg"),
          fontWeight: theme("fontWeight.semibold"),
        },
      });
    }),
  ],
};
```

## @apply Directive

Extract repeated utility patterns into custom CSS classes:

```css
@layer components {
  .btn-primary {
    @apply rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white
           hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
  }

  .input {
    @apply rounded-md border border-gray-300 px-3 py-2
           focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500;
  }
}
```

Use sparingly — utility classes directly in HTML are preferred for maintainability.

## CSS Layers

Tailwind v4 uses standard CSS `@layer`:

```css
@import "tailwindcss";

@layer base {
  h1 {
    @apply text-3xl font-bold;
  }
}

@layer components {
  .card {
    @apply rounded-lg bg-white p-6 shadow;
  }
}

@layer utilities {
  .text-shadow {
    text-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
  }
}
```

## Prefixes and Important

```js
// tailwind.config.js (v3)
module.exports = {
  prefix: "tw-", // All classes become tw-flex, tw-p-4, etc.
  important: true, // All utilities get !important
  important: "#app", // All utilities scoped under #app
};
```
