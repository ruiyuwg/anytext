# Why can I not use value/label data structure with Autocomplete/TagsInput?

Learn the difference between Autocomplete and Select components

## Data structure

[Autocomplete](https://mantine.dev/core/autocomplete) and [TagsInput](https://mantine.dev/core/tags-input)
allow user entering any string value – the selection is not limited to predefined list of options.
If you decide to use these components, your application must handle free user input.

Example of Autocomplete usage with `data` prop:

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return <Autocomplete data={['React', 'Vue']} />;
}
```

In this example, the user can select either `React` or `Vue` from the list of options
or enter any other string value, for example, `Angular`.

## Value/label data split

Unlike [Select](https://mantine.dev/core/select) and [MultiSelect](https://mantine.dev/core/multi-select)
components data in `{ value: string; label: string; }` is not supported in Autocomplete and TagsInput.
It is done on purpose to avoid confusion and make it clear that user can enter any string value.

Consider the following example:

```tsx
import { Autocomplete } from '@mantine/core';

const data = [
  { value: '18361', label: 'React' },
  { value: '09411', label: 'Vue' },
];

function Demo() {
  return (
    <Autocomplete data={data} onChange={(val) => console.log(val)} />
  );
}
```

If Autocomplete would support `{ value: string; label: string; }` data structure:

- When user selects `React` from the list, `18361` will be logged to the console
- When user selects `Vue` from the list, `09411` will be logged to the console
- When user enters `Angular` or any other value not present in the list, what should be logged to the console?
- When user enters `React`, should `18361` be logged to the console or should it be treated as free user input?

To avoid confusion and make it clear that user can enter any string value, Autocomplete and TagsInput
do not support `{ value: string; label: string; }` data structure.

## Difference between Autocomplete and Select

If you need to limit user input to predefined list of options,
consider using searchable [Select](https://mantine.dev/core/select) instead.
To learn more about the difference between Autocomplete and Select components,
check out [this guide](https://help.mantine.dev/q/select-autocomplete-difference).

# How can I change body background color?

Use CSS to change body background color

## Change body background with CSS

To change `body` background color you can use CSS. To do that, create `styles.css`
file in your project and import it at the root of your application:

```css
body {
  background-color: #f9f9f9;
}
```

## Change body background with CSS variable

`--mantine-color-body` CSS variable is used for body background and
as background color of some components ([Modal](https://mantine.dev/core/modal/), [Paper](https://mantine.dev/core/paper/), etc.).
To override this variable, create `styles.css` file in your project and import it at the root of your application:

```scss
:root {
  @mixin light-root {
    --mantine-color-body: #f9f9f9;
  }

  @mixin dark-root {
    --mantine-color-body: #333;
  }
}
```

# Browser zooms in when input is focused. What should I do?

Use meta tag to disable browser scaling or increase input size

Browser zooms in when some of Mantine inputs are focused because by default all
Mantine inputs have `size="sm"` with `14px` font-size. To prevent browser from zooming
in you can increase input size:

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput size="md" />;
}
```

You can use `user-scalable=no` meta tag in the `<head />` or your application
to disable browser scaling. Note that this will disable zooming for the entire
application and may cause accessibility issues.

```html
<meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
/>
```

# Can I use Mantine with Astro?

No, Astro does not support React context

## If you need Astro, you do not need a component library

[Astro](https://astro.build/) is designed to minimize
the amount of JavaScript required to build a website. All component
libraries require quite a bit of JavaScript to work, so if you are
planning to use Astro, the best option is to build your own components
that do not have large footprint.

## I need Mantine, what should I use instead?

In case you need Mantine and SSG application, you can use [Next.js](https://nextjs.org/)
or [Gatsby](https://www.gatsbyjs.com/). Both of them support all React features
that are required for Mantine to work.

## No! I need Astro and Mantine!

Not a chance, according to [Astro documentation](https://docs.astro.build/en/core-concepts/sharing-state/),
Astro does not support React context, which is required for Mantine to work.

> **From Astro documentation:**
>
> UI frameworks like React or Vue may encourage “context” providers for other components to consume.
> But when partially hydrating components within Astro or Markdown, you can’t use these context wrappers.
