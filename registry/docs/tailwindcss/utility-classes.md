# Tailwind CSS — Utility Classes

## Core Concept

Tailwind CSS is a utility-first framework. Instead of writing custom CSS, you compose designs using small, single-purpose classes directly in your HTML.

```html
<div class="flex items-center gap-4 rounded-lg bg-white p-6 shadow-lg">
  <img class="h-12 w-12 rounded-full" src="/avatar.jpg" alt="Avatar" />
  <div>
    <p class="text-lg font-medium text-gray-900">Jane Doe</p>
    <p class="text-sm text-gray-500">Developer</p>
  </div>
</div>
```

## How Utilities Work

Each utility class maps to a single CSS property (or a small group of related properties):

| Class          | CSS                                                |
| -------------- | -------------------------------------------------- |
| `flex`         | `display: flex`                                    |
| `items-center` | `align-items: center`                              |
| `p-6`          | `padding: 1.5rem`                                  |
| `text-lg`      | `font-size: 1.125rem; line-height: 1.75rem`        |
| `rounded-lg`   | `border-radius: 0.5rem`                            |
| `bg-white`     | `background-color: #fff`                           |
| `shadow-lg`    | `box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1)...` |

## Spacing Scale

Tailwind uses a consistent spacing scale based on `0.25rem` (4px) increments:

| Class  | Value            |
| ------ | ---------------- |
| `p-0`  | `0px`            |
| `p-1`  | `0.25rem` (4px)  |
| `p-2`  | `0.5rem` (8px)   |
| `p-3`  | `0.75rem` (12px) |
| `p-4`  | `1rem` (16px)    |
| `p-6`  | `1.5rem` (24px)  |
| `p-8`  | `2rem` (32px)    |
| `p-12` | `3rem` (48px)    |
| `p-16` | `4rem` (64px)    |
| `p-px` | `1px`            |

The same scale applies to `m-` (margin), `gap-`, `w-`, `h-`, `top-`, `right-`, `bottom-`, `left-`, `inset-`.

## Arbitrary Values

Use square brackets for one-off values not in the default scale:

```html
<div class="p-[13px]">Custom padding</div>
<div class="bg-[#1da1f2]">Custom color</div>
<div class="grid grid-cols-[1fr_2fr_1fr]">Custom grid</div>
<div class="text-[clamp(1rem,2vw,2rem)]">Fluid text</div>
```

## State Variants

Apply utilities conditionally with variant prefixes:

```html
<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-700">Hover me</button>

<!-- Focus -->
<input class="border focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />

<!-- Active -->
<button class="bg-blue-500 active:bg-blue-800">Press me</button>

<!-- Disabled -->
<button
  class="bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
  disabled
>
  Disabled
</button>

<!-- First/last child -->
<li class="first:pt-0 last:pb-0">Item</li>

<!-- Group hover (parent triggers child style) -->
<div class="group">
  <p class="group-hover:text-blue-500">Styled on parent hover</p>
</div>

<!-- Peer (sibling triggers style) -->
<input class="peer" />
<p class="peer-invalid:text-red-500">Error message</p>
```

## Important Modifier

Prefix with `!` to add `!important`:

```html
<div class="!p-4">Always 1rem padding</div>
```

## Negative Values

Prefix with `-` for negative values:

```html
<div class="-mt-4">Negative top margin</div>
<div class="-translate-x-1/2">Negative translate</div>
```
