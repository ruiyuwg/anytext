# Tailwind CSS — Typography

## Font Size

| Class | Size | Line Height |
|-------|------|-------------|
| `text-xs` | 0.75rem (12px) | 1rem |
| `text-sm` | 0.875rem (14px) | 1.25rem |
| `text-base` | 1rem (16px) | 1.5rem |
| `text-lg` | 1.125rem (18px) | 1.75rem |
| `text-xl` | 1.25rem (20px) | 1.75rem |
| `text-2xl` | 1.5rem (24px) | 2rem |
| `text-3xl` | 1.875rem (30px) | 2.25rem |
| `text-4xl` | 2.25rem (36px) | 2.5rem |
| `text-5xl` | 3rem (48px) | 1 |
| `text-6xl` | 3.75rem (60px) | 1 |

## Font Weight

| Class | Weight |
|-------|--------|
| `font-thin` | 100 |
| `font-light` | 300 |
| `font-normal` | 400 |
| `font-medium` | 500 |
| `font-semibold` | 600 |
| `font-bold` | 700 |
| `font-extrabold` | 800 |
| `font-black` | 900 |

## Font Family

```html
<p class="font-sans">Default sans-serif stack</p>
<p class="font-serif">Serif stack</p>
<p class="font-mono">Monospace stack</p>
```

## Text Color

```html
<p class="text-gray-900">Dark text</p>
<p class="text-gray-500">Muted text</p>
<p class="text-blue-600">Colored text</p>
<p class="text-white">White text</p>

<!-- Opacity modifier -->
<p class="text-black/50">50% opacity black</p>
<p class="text-blue-600/75">75% opacity blue</p>
```

Color palette: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`. Each has shades 50-950.

## Text Alignment & Decoration

```html
<p class="text-left">Left aligned</p>
<p class="text-center">Centered</p>
<p class="text-right">Right aligned</p>
<p class="text-justify">Justified</p>

<!-- Decoration -->
<p class="underline">Underlined</p>
<p class="line-through">Strikethrough</p>
<p class="no-underline">Remove underline</p>
<p class="underline decoration-2 decoration-blue-500 underline-offset-4">Styled underline</p>
```

## Text Transform & Spacing

```html
<p class="uppercase">Uppercase</p>
<p class="lowercase">Lowercase</p>
<p class="capitalize">Capitalize</p>
<p class="normal-case">Normal case</p>

<!-- Letter spacing -->
<p class="tracking-tight">Tight</p>
<p class="tracking-normal">Normal</p>
<p class="tracking-wide">Wide</p>

<!-- Line height -->
<p class="leading-none">1</p>
<p class="leading-tight">1.25</p>
<p class="leading-normal">1.5</p>
<p class="leading-relaxed">1.625</p>
<p class="leading-loose">2</p>
```

## Text Overflow

```html
<!-- Truncate with ellipsis (single line) -->
<p class="truncate">Very long text...</p>

<!-- Line clamp (multi-line) -->
<p class="line-clamp-3">Clamps to 3 lines...</p>

<!-- Word break -->
<p class="break-words">Break long words</p>
<p class="break-all">Break anywhere</p>
```

## Whitespace

| Class | CSS |
|-------|-----|
| `whitespace-normal` | `white-space: normal` |
| `whitespace-nowrap` | `white-space: nowrap` |
| `whitespace-pre` | `white-space: pre` |
| `whitespace-pre-line` | `white-space: pre-line` |
| `whitespace-pre-wrap` | `white-space: pre-wrap` |

## Lists

```html
<ul class="list-disc list-inside space-y-1">
  <li>Item one</li>
  <li>Item two</li>
</ul>

<ol class="list-decimal list-inside space-y-1">
  <li>First</li>
  <li>Second</li>
</ol>

<!-- No bullets -->
<ul class="list-none">
  <li>Clean item</li>
</ul>
```
