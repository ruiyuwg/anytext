# Tailwind CSS — Layout

## Flexbox

```html
<!-- Row (default) -->
<div class="flex items-center justify-between gap-4">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Column -->
<div class="flex flex-col gap-2">
  <div>Top</div>
  <div>Bottom</div>
</div>

<!-- Wrap -->
<div class="flex flex-wrap gap-4">
  <div class="w-1/3">Item</div>
  <div class="w-1/3">Item</div>
  <div class="w-1/3">Item</div>
</div>

<!-- Centering -->
<div class="flex items-center justify-center h-screen">
  <p>Centered content</p>
</div>
```

Key flex classes:

| Class | CSS |
|-------|-----|
| `flex` | `display: flex` |
| `inline-flex` | `display: inline-flex` |
| `flex-row` | `flex-direction: row` |
| `flex-col` | `flex-direction: column` |
| `flex-wrap` | `flex-wrap: wrap` |
| `items-start` | `align-items: flex-start` |
| `items-center` | `align-items: center` |
| `items-end` | `align-items: flex-end` |
| `items-stretch` | `align-items: stretch` |
| `justify-start` | `justify-content: flex-start` |
| `justify-center` | `justify-content: center` |
| `justify-end` | `justify-content: flex-end` |
| `justify-between` | `justify-content: space-between` |
| `gap-4` | `gap: 1rem` |
| `flex-1` | `flex: 1 1 0%` |
| `flex-auto` | `flex: 1 1 auto` |
| `flex-none` | `flex: none` |
| `grow` | `flex-grow: 1` |
| `shrink-0` | `flex-shrink: 0` |

## Grid

```html
<!-- Basic grid -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <div>Card</div>
  <div>Card</div>
  <div>Card</div>
</div>

<!-- Column span -->
<div class="grid grid-cols-4 gap-4">
  <div class="col-span-2">Wide</div>
  <div>Normal</div>
  <div>Normal</div>
</div>

<!-- Auto-fit with minmax -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  <div>Card</div>
  <div>Card</div>
  <div>Card</div>
</div>
```

Key grid classes: `grid-cols-{n}` (1-12), `grid-rows-{n}`, `col-span-{n}`, `row-span-{n}`, `col-start-{n}`, `col-end-{n}`.

## Container

```html
<div class="container mx-auto px-4">
  <!-- Max-width responsive container -->
</div>
```

Default breakpoints: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px.

## Sizing

```html
<!-- Width -->
<div class="w-full">100%</div>
<div class="w-1/2">50%</div>
<div class="w-64">16rem</div>
<div class="w-screen">100vw</div>
<div class="min-w-0">min-width: 0</div>
<div class="max-w-lg">max-width: 32rem</div>

<!-- Height -->
<div class="h-screen">100vh</div>
<div class="h-full">100%</div>
<div class="min-h-screen">min-height: 100vh</div>

<!-- Aspect ratio -->
<div class="aspect-video">16:9</div>
<div class="aspect-square">1:1</div>
```

## Positioning

```html
<!-- Relative / Absolute -->
<div class="relative">
  <div class="absolute top-0 right-0">Top right corner</div>
</div>

<!-- Fixed -->
<nav class="fixed top-0 left-0 right-0 z-50">Sticky nav</nav>

<!-- Sticky -->
<div class="sticky top-0">Sticks on scroll</div>

<!-- Inset shortcuts -->
<div class="absolute inset-0">Fills parent</div>
<div class="absolute inset-x-0 bottom-0">Bottom bar</div>
```

## Display & Overflow

| Class | CSS |
|-------|-----|
| `block` | `display: block` |
| `inline-block` | `display: inline-block` |
| `inline` | `display: inline` |
| `hidden` | `display: none` |
| `overflow-hidden` | `overflow: hidden` |
| `overflow-auto` | `overflow: auto` |
| `overflow-x-auto` | `overflow-x: auto` |
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` |

## Z-Index

Classes: `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`. Use arbitrary values for custom: `z-[999]`.
