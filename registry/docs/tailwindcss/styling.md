# Tailwind CSS — Styling

## Backgrounds

```html
<!-- Solid color -->
<div class="bg-white">White background</div>
<div class="bg-gray-100">Light gray</div>
<div class="bg-blue-500">Blue</div>

<!-- Opacity modifier -->
<div class="bg-black/50">50% black overlay</div>

<!-- Gradient -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
  Left to right gradient
</div>
<div class="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
  Diagonal with via color
</div>
```

Gradient directions: `bg-gradient-to-t` (top), `bg-gradient-to-tr` (top-right), `bg-gradient-to-r` (right), `bg-gradient-to-br` (bottom-right), `bg-gradient-to-b` (bottom), `bg-gradient-to-bl` (bottom-left), `bg-gradient-to-l` (left), `bg-gradient-to-tl` (top-left).

## Borders

```html
<!-- Width -->
<div class="border">1px all sides</div>
<div class="border-2">2px all sides</div>
<div class="border-t">Top only</div>
<div class="border-b-2">Bottom 2px</div>

<!-- Color -->
<div class="border border-gray-300">Gray border</div>
<div class="border border-blue-500">Blue border</div>

<!-- Style -->
<div class="border border-dashed">Dashed</div>
<div class="border border-dotted">Dotted</div>

<!-- Divide (borders between children) -->
<div class="divide-y divide-gray-200">
  <div class="py-4">Item 1</div>
  <div class="py-4">Item 2</div>
  <div class="py-4">Item 3</div>
</div>

<!-- Ring (focus ring) -->
<input class="ring-2 ring-blue-500" />
<button class="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Focus ring with offset
</button>
```

## Border Radius

| Class          | Radius   |
| -------------- | -------- |
| `rounded-none` | 0        |
| `rounded-sm`   | 0.125rem |
| `rounded`      | 0.25rem  |
| `rounded-md`   | 0.375rem |
| `rounded-lg`   | 0.5rem   |
| `rounded-xl`   | 0.75rem  |
| `rounded-2xl`  | 1rem     |
| `rounded-3xl`  | 1.5rem   |
| `rounded-full` | 9999px   |

Per-corner: `rounded-t-lg`, `rounded-r-lg`, `rounded-b-lg`, `rounded-l-lg`, `rounded-tl-lg`, `rounded-tr-lg`, `rounded-bl-lg`, `rounded-br-lg`.

## Shadows

| Class          | Description        |
| -------------- | ------------------ |
| `shadow-sm`    | Small shadow       |
| `shadow`       | Default shadow     |
| `shadow-md`    | Medium shadow      |
| `shadow-lg`    | Large shadow       |
| `shadow-xl`    | Extra large shadow |
| `shadow-2xl`   | Largest shadow     |
| `shadow-inner` | Inset shadow       |
| `shadow-none`  | No shadow          |

```html
<!-- Colored shadow -->
<div class="shadow-lg shadow-blue-500/50">Blue shadow</div>
```

## Opacity

```html
<div class="opacity-100">Fully visible</div>
<div class="opacity-75">75% visible</div>
<div class="opacity-50">50% visible</div>
<div class="opacity-25">25% visible</div>
<div class="opacity-0">Invisible</div>
```

## Transitions & Animation

```html
<!-- Transition -->
<button
  class="transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600"
>
  Smooth hover
</button>

<!-- Specific properties -->
<div class="transition-colors duration-200">Color transition</div>
<div class="transition-transform duration-300">Transform transition</div>
<div class="transition-opacity duration-150">Opacity transition</div>
<div class="transition-all duration-500">All properties</div>

<!-- Built-in animations -->
<div class="animate-spin">Spinning</div>
<div class="animate-ping">Pinging</div>
<div class="animate-pulse">Pulsing</div>
<div class="animate-bounce">Bouncing</div>
```

## Transforms

```html
<div class="scale-110">Scale up 110%</div>
<div class="rotate-45">Rotate 45 degrees</div>
<div class="translate-x-4">Move right 1rem</div>
<div class="skew-x-6">Skew</div>
<div class="-translate-y-1/2">
  Center vertically (with absolute positioning)
</div>
```

## Filters

```html
<img class="blur-sm" src="..." />
<!-- Slight blur -->
<img class="brightness-75" src="..." />
<!-- Darken -->
<img class="grayscale" src="..." />
<!-- Grayscale -->
<img class="saturate-150" src="..." />
<!-- Boost saturation -->

<!-- Backdrop filters (for overlays) -->
<div class="backdrop-blur-md bg-white/30">Frosted glass</div>
```

## Cursor & Pointer Events

```html
<div class="cursor-pointer">Clickable</div>
<div class="cursor-not-allowed">Not allowed</div>
<div class="pointer-events-none">Click-through</div>
<div class="select-none">Non-selectable text</div>
```
