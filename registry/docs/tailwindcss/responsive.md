# Tailwind CSS — Responsive Design

## Breakpoints

Tailwind uses a mobile-first breakpoint system. Unprefixed utilities apply at all sizes, while prefixed utilities apply at the specified breakpoint _and above_.

| Prefix | Min Width | CSS                          |
| ------ | --------- | ---------------------------- |
| `sm:`  | 640px     | `@media (min-width: 640px)`  |
| `md:`  | 768px     | `@media (min-width: 768px)`  |
| `lg:`  | 1024px    | `@media (min-width: 1024px)` |
| `xl:`  | 1280px    | `@media (min-width: 1280px)` |
| `2xl:` | 1536px    | `@media (min-width: 1536px)` |

## Usage Pattern

Design for mobile first, then add responsive overrides:

```html
<!-- Stack on mobile, side-by-side on md+, 3 columns on lg+ -->
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<!-- Small text on mobile, larger on bigger screens -->
<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">Responsive Heading</h1>

<!-- Padding scales with screen size -->
<div class="px-4 md:px-8 lg:px-16">Content with responsive padding</div>

<!-- Hide on mobile, show on md+ -->
<nav class="hidden md:block">Desktop nav</nav>

<!-- Show on mobile, hide on md+ -->
<button class="md:hidden">Mobile menu</button>
```

## Max-Width Breakpoints

Use `max-*` variants to apply styles below a breakpoint:

```html
<div class="max-md:hidden">Hidden below md</div>
<div class="max-lg:flex-col">Column layout below lg</div>
```

## Range Breakpoints

Combine `min-*` and `max-*` to target a specific range:

```html
<!-- Only between md and lg -->
<div class="md:max-lg:grid-cols-2">Two columns at md only</div>
```

## Dark Mode

Tailwind supports dark mode via the `dark:` variant. By default it uses the `prefers-color-scheme` media query, but can be configured to use a class-based strategy.

```html
<div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
  <h1 class="text-black dark:text-white">Adapts to dark mode</h1>
  <p class="text-gray-600 dark:text-gray-400">Muted text</p>
</div>

<!-- Dark mode card -->
<div
  class="rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
>
  <p class="text-gray-900 dark:text-gray-100">Card content</p>
</div>
```

### Class-Based Dark Mode

In `tailwind.config.js` (v3) or CSS config (v4):

```js
// tailwind.config.js (v3)
module.exports = {
  darkMode: "class",
};
```

Then toggle the `dark` class on the `<html>` element:

```html
<html class="dark">
  <body class="bg-white dark:bg-gray-900">
    ...
  </body>
</html>
```

## Print Variant

```html
<div class="print:hidden">Hidden when printing</div>
<div class="hidden print:block">Only visible when printing</div>
```

## Container Queries

Use `@container` variants for component-level responsive design:

```html
<div class="@container">
  <div class="@md:flex @md:gap-4">
    <div>Responds to container width, not viewport</div>
  </div>
</div>
```
