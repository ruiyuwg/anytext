# Create a “coupon generator” string field input

> \[!NOTE]
> This developer guide was contributed by Simeon Griggs (Principal Educator).

Take the guesswork out of creating fields with correct values and automate content creation for authors.

## What you need to know:

This guide assumes that you know how to set up and configure a Sanity Studio and have basic knowledge about defining a schema with document and field types. Basic knowledge of React and TypeScript is also useful, although you should be able to copy-paste the example code to get a runnable result.

## Custom form components by example

One of Sanity Studio’s most powerful features is custom drop-in replacements for form fields. This guide is one in a series of code examples.

You can get more familiar with the [Form Components API in the documentation](https://www.sanity.io/docs/studio/form-components-reference).

- [Create a “coupon generator” string field input](https://www.sanity.io/docs/developer-guides/create-a-coupon-generator-string-field-input)
- [Create a visual string selector field input](https://www.sanity.io/docs/developer-guides/create-a-rich-string-selector-field-input)
- [Create a survey rating number field input](https://www.sanity.io/docs/developer-guides/create-a-survey-rating-number-field-input)
- [Create a time duration object field](https://www.sanity.io/docs/developer-guides/create-a-time-duration-object-field)
- [Create an array input field with selectable templates](https://www.sanity.io/docs/developer-guides/create-an-array-input-field-with-selectable-templates)
- [Create interactive array items for featured elements](https://www.sanity.io/docs/developer-guides/create-interactive-array-items-for-featured-elements)
- [Create richer array item previews](https://www.sanity.io/docs/developer-guides/create-richer-array-item-previews)
- [Create a document form progress component](https://www.sanity.io/docs/developer-guides/create-a-document-progress-root-level-component)

## What you’ll be making

A string field that can generate its own valid strings:

## Getting started

In this example, you’ll build a custom coupon generator. In this instance, a coupon is a string field that is four characters long, containing only uppercase letters and numbers.

The simplest way to add this sort of input to a document in Sanity would be a string field with a validation rule. This is functional but not pleasant to your authors. With a custom input they can generate these codes in one click while still having full control over the editing input.

Create a new field in your Studio, and register it to your `schema` in `sanity.config.ts`:

```typescript
// ./schema/coupon/couponType.ts

import {defineType} from 'sanity'

export const couponType = defineType({
  name: 'coupon',
  title: 'Coupon',
  description: 'A unique, all uppercase, four-character alphanumeric code',
  type: 'string',
  validation: (rule) =>
    rule
      .min(4)
      .max(4)
      .regex(/^[A-Z0-9]+$/),
})
```

Creating a new schema type for this string allows more flexible reuse throughout your Studio. For example, if multiple document types use this coupon field type with its custom input; but with unique `options`. By importing this schema type to the Studio schema, you can refer to this `type` with it’s value for `name` , in other words `type: 'coupon'`, as seen below.

Add the coupon field type to a document type’s `fields`, and register this to the Studio’s schema:

```typescript
// ./schema/storeType.ts

import {defineField, defineType} from 'sanity'

export const storeType = defineType({
  name: 'store',
  title: 'Store',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'coupon',
      type: 'coupon',
    }),
  ],
})
```

Create a new `store` document type as above, and you should see both string fields like the example below:

## Create an input component

Create a new component in your Studio using the code below:

```jsx
// ./schema/coupon/CouponInput.tsx

import {Box, Button, Flex} from '@sanity/ui'
import {StringInputProps} from 'sanity'

export function CouponInput(props: StringInputProps) {
  return (
    <Flex gap={3} align="center">
      <Box flex={1}>{props.renderDefault(props)}</Box>
      <Button mode="ghost" text="Generate coupon" />
    </Flex>
  )
}
```

Notice the following:

1. On line 3, the imports from Sanity UI help you create custom components that look like first-class editorial experiences with the same UI and design language as the rest of the Studio. See ”[Getting started with Sanity UI](https://www.sanity.io/ui/docs)” to learn more.
2. On line 9, `props.renderDefault(props)` is used to render the original string input. This is super convenient because you won’t need to handle complex APIs like validation and presence.

To use this component, you’ll need to load it into the correct slot back on the `coupon` schema. You’ll use `input` here because you don’t want to replace the field’s title and description.

```typescript
// ./schema/coupon/couponType.ts

import {CouponInput} from './CouponInput'

export const couponType = defineType({
  name: 'coupon',
  // ...all other settings
  components: {input: CouponInput},
})
```

Look at your `store` document type again; you’ll see your custom input and the “Generate” button. Which is great, but it doesn’t yet do anything!

Let’s `onChange` that.

## Handling changes and patching data

Custom inputs contain helpful functions and details in their `props` – for this input, you’ll only need one: `onChange`.

This function wraps any [patch](https://www.sanity.io/docs/content-lake/http-patches) – such as setting or unsetting the value of a field – and ensures the rest of the Studio stays up to date with changes.

> \[!TIP]
> When working with forms in React, you’re often recommended to store values in a component’s state. This is an anti-pattern working with Sanity Studio input components. Writing content to state is only reflected in the browser of the person using the input. By using Sanity’s real-time APIs you allow content creators to collaborate and avoid overwriting each other’s changes by always syncing directly to the Content Lake.

Update your `CouponInput` component to use the code below:

```jsx
// ./schema/coupon/CouponInput.tsx

import {Box, Button, Code, Flex} from '@sanity/ui'
import {set, StringInputProps} from 'sanity'
import {useCallback} from 'react'

export function CouponInput(props: StringInputProps) {
  // onChange handles patches to the document
  const {onChange} = props

  const generateCoupon = useCallback(() => {
    const coupon = Math.random().toString(36).substring(2, 6).toUpperCase()
    // "set()" will write a value to this field
    onChange(set(coupon))
  }, [onChange])

  return (
    <Flex gap={3} align="center">
      <Box flex={1}>{props.renderDefault(props)}</Box>
      {/* Display the value in a monospaced font */}
      {props.value ? <Code size={4}>{props.value}</Code> : null}
      <Button mode="ghost" onClick={generateCoupon} text="Generate coupon" />
    </Flex>
  )
}
```

1. Notice how `onChange` is destructured from the component’s `props`.
2. The `onChange` function is then used inside `generateCoupon`, with the `set()` function, to update the field’s value. This means the new value will be instantly validated in the document and updated in the browser of any other authors currently viewing the same document.
3. The `generateCoupon` function is registered with a `useCallback` hook to [cache it between re-renders](https://react.dev/reference/react/useCallback).
4. Sometimes these codes can contain easily confused characters (like `0` and `O`) so rendering the current field’s value in the `<Code>` component can make them clearer.

Now you have a fully functional, automated, and editable coupon generator field with a handy visual preview!

## Next steps

Some ideas to extend this custom input include:

1. Extend the `coupon` field’s validation rule to use `rule.custom()` and check that no other document in the dataset contains the same coupon code.
2. Perhaps add some configurability to the `coupon` field schema, like a setting in `options` to determine the length of the generated coupon string.
3. Change the `generateCoupon` function – and the field validation – so that it does not create or allow potentially confusing characters such as `0` and `O`
4. Import `unset` from `sanity` and add an extra button to remove the coupon from the field
