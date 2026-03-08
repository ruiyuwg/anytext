# Diff components

![Annotated Diff screen for default String, Image, and Portable Text fields](https://cdn.sanity.io/images/3do82whm/next/15d75cf306395056afd671d096f7298ccf75aef0-2842x1590.png)

With Sanity Studio, you can see, in real time, any changes happening within a given field. You can see these changes down to the smallest detail.

Out of the box, this will render the difference in all basic types - strings, numbers, booleans, arrays and similar. If you have your own custom inputs, the changes will be visible, but will only show the changes between two sets of data.

Often, the difference between two values might not be enough to showcase exactly what happened inside a custom input. A color field changing between two hexadecimal values might not be human readable. A visualization of the two colors would be helpful to humans. A geopoint is an object containing latitude and longitude numbers. Showing the difference between those two numeric numbers won't mean much, but showing two map pins representing those locations can mean a lot.

The Studio API allows you to write your own custom React components that can visualize these changes in ways that make sense to your editors.

## Anatomy of a Diff Component

The components responsible for showing the change of a value are called "**diff components**". These React components receive a structured `diff` object allowing you to inspect the change values deeply. This object contains data on not only the change itself, but also who made the change and when it was made.

When you compare values over time, different parts of a value may have different authors. For instance, one person may have uploaded an image, while a second person provided the caption, and a third changed a crop. In order to provide this information in a fine-grained manner, the diffs contain **annotations**.

**Annotations** can be used to render the name and avatar of the users who did the changes, and also contain the exact timestamp of the change, should you want very fine-grained control.

## Actions

There are four basic actions that might happen to a value:

- `action: "changed"` - The value changed (from value X to value Y)
- `action: "added"` - The value was added (field or array item appeared)
- `action: "removed"` - The value was removed (field or array item disappeared)
- `action: "unchanged"` - The value was unchanged (item was moved within an array)

These actions can be inspected on the `diff` object provided to the custom diff component. All of these actions should be accounted for in a diff component.

## Adding a custom diff component to a field

You can add a custom diff component to any field using the `diff` property of the field's `components` object.

```jsx
import {CustomStringDiff} from '../src/components/field'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      components: {
        diff: CustomStringDiff,
      }
    },
    // ... Additional fields
  ]
}
```

In this example, we assume that our `CustomStringDiff` component is exported from a file located at `../src/components/field/index.jsx` relative to our schema file. A minimalist implementation is shown below.

```jsx
../src/components/field/index.jsx
import {DiffFromTo} from 'sanity'

export function CustomStringDiff({diff, schemaType}) {
  return (
    <DiffFromTo
      diff={diff}
      schemaType={schemaType}
      previewComponent={StringDiffPreview}
      layout="grid"
    />
  )
}

function StringDiffPreview({ value }) {
  return <div style={{borderLeft: '5px solid', padding: '3px', display: 'flex'}}>{value}</div>
}
```

## Creating a basic diff component

The core `sanity` package includes a few helper components and methods to help you build custom diffs. The most basic among these is the `<DiffFromTo />` component. This creates a view that shows an initial state of a field and the new state with an arrow in the middle. You can customize how the those blocks are rendered with a `previewComponent`.

The following example creates a custom preview for the component to format a country code for a phone number. If a field goes from blank to populated, it will show the addition. If a field goes from populated to empty, it will show a strike-through on the value. If there's a change to the value, it will show a before and after rendered with the preview component.

```jsx
import {DiffFromTo} from 'sanity'

export function PhoneNumberFieldDiff({diff, schemaType}) {
  return (
    <DiffFromTo
      diff={diff}
      schemaType={schemaType}
      previewComponent={PhoneNumberPreviewComponent}
    />
  )
}

function PhoneNumberPreviewComponent({value}) {
  const prefix = value.countryCode ? `(${value.countryCode}) ` : ''
  const formatted = `${prefix}${value.number}`
  return <span>{formatted}</span>
}

```

## Creating the states of a diff component

In this example, a different layout is used to render each state of the diff.

> \[!WARNING]
> Gotcha
> It might seem strange at first to provide an `unchanged` state for our custom diff. This is to provide for states when the value itself hasn't changed, but data around the value have, such as when an item has been moved in an array.

```jsx
import {DiffCard} from 'sanity'

export function NumberFieldDiff({diff}) {
  const {fromValue, toValue, action} = diff

  // In certain cases the diff component will be used to render the value, even
  // if there are no changes to the actual _value_. For instance, when an item
  // has been moved within the array, but the actual value did not change.
  if (action === 'unchanged') {
    return <div>{fromValue}</div>
  }

  // If we have both a "from" and "to" value, the value changed
  // "from" and "to" can also be read as "previous" and "next"
  if (typeof fromValue === 'number' && typeof toValue === 'number') {
    return (
      <DiffCard diff={diff}>
        {fromValue} → {toValue}
      </DiffCard>
    )
  }

  // If we only have a "previous" value, the value has been unset
  if (typeof fromValue === 'number') {
    return (
      <DiffCard diff={diff}>
        <del>{fromValue}</del>
      </DiffCard>
    )
  }

  // The only remaining option is that the value was added
  return (
    <DiffCard diff={diff}>
      <ins>{toValue}</ins>
    </DiffCard>
  )
}
```

## Helper components

The `sanity` package includes a range of helpful components and methods for building custom diff views. Let's take a closer look at a few of them.

### `<DiffFromTo />`

Many diff components will follow a pattern where they have a "preview" component that renders the value, and presents a "from → to" layout, setting the background to the "user color" for the change and adding a tooltip when hovering the diff that shows the author information.

You can use this pattern to graphically showcase the change. This can help the editor to quickly understand at a glance the change that happened.

```jsx
import {DiffFromTo} from 'sanity'

export const TelephoneFieldDiff = ({diff, schemaType}) => (
  <DiffFromTo
    diff={diff}
    schemaType={schemaType}
    previewComponent={TelephonePreview}
    layout="inline" // "grid" is also an option
  />
)

function TelephonePreview({value}) {
  const formattedNumber = value.toString().replace(/\d{3}(?=.)/g, '$& ')
  return <>{formattedNumber}</>
}

```

### `<ChangeList />`

The pattern mentioned in the section on `<DiffFromTo />` pairs nicely with the `<ChangeList />` helper. Often when displaying a graphical diff using `<DiffFromTo />`, you may also wish to show the individual fields that were changed to create the overall change. The `<ChangeList />` component takes a `diff`, `schemaType`, and an array of `fields` to render individual fields to show.

In this example, we generate a barcode from two fields on an `object` field type. We use the same visual component used in the custom input, but also use `<ChangeList />` to show the individual field changes for `barcode` and `format`.

```jsx
import {DiffFromTo, getDiffAtPath, ChangeList} from 'sanity'
import Barcode from 'react-barcode' 

export function BarCodeDiff({diff, schemaType}) {
  return (
    <div>
      <DiffFromTo
        diff={diff}
        schemaType={schemaType}
        previewComponent={BarCodeDiffPreviewComponent}
        layout="grid"
      />
      <ChangeList diff={diff} schemaType={schemaType} fields={['barcode', 'format']} />
    </div>
  )
}

function BarCodeDiffPreviewComponent({value}) {
  return (
    <div style={{display: 'flex', padding: '5px', justifyContent: 'center', alignItems: 'center'}}>
      <Barcode textAlign="center" value={value.barcode} format={value.format || ''} width={1} />
    </div>
  )
}
```

### `<FromTo />`

When creating a completely custom diff component, you can use the `<FromTo />` component to specify components to be used for the "From" and "To" states of the component. If you opt for this component, you will need to recreate many of the affordances given, such as tooltips, user background colors, and more.

```jsx
import React from 'react'
import {FromTo} from '@sanity/field/diff'

export const SomeDiff = () => (
  <FromTo
    from={<div>Old value</div>}
    to={<div>New value</div>}
    layout="inline" // "grid" is also an option
  />
)
```

### `<DiffCard />`

Renders a container element styled with the appropriate user color, based on the passed diff or annotation.

```jsx
import {DiffCard} from 'sanity'

export const SomeDiff = ({diff}) => (
  <DiffCard as="pre" diff={diff}>
    <code>{JSON.stringify(diff.toValue, null, 2)}</code>
  </DiffCard>
)
```

### `<DiffTooltip />`

Wraps the passed children with a tooltip when hovered, showing information about the actual change - which authors were involved, and when. This component differs slightly in that it can take multiple annotations instead of just a single one, combining the information in a single tooltip. Example:

```jsx
import {DiffTooltip} from 'sanity'

export function MovieReviewDiff({diff}) {
  const {action, fromValue, toValue} = diff
  if (action === 'unchanged') {
    return (
      <div>
        <StarMeter value={fromValue} diff={diff} />
      </div>
    )
  }
  return (
    <div>
      {fromValue && <StarMeter value={fromValue} diff={diff} />}
      {fromValue && toValue && '→'}
      {toValue && <StarMeter value={toValue} diff={diff} />}
    </div>
  )
}

function StarMeter({value, diff}) {
  const {numStars, comment} = value
  return (
    <div>
      {numStars && (
        <DiffTooltip diff={diff}>
          <div>{'★'.repeat(numStars)}</div>
        </DiffTooltip>
      )}
      {comment && (
        <DiffTooltip diff={diff}>
          <div>{comment}</div>
        </DiffTooltip>
      )}
    </div>
  )
}
```

## Helper Hooks

### `useDiffAnnotationColor(diff, path)`

Takes a diff and an optional path as arguments and returns the corresponding user color for it. A user color is an object with the keys `background`, `text` and `border`, each having a hex color as the value.

```jsx
import {useDiffAnnotationColor} from 'sanity'

export function MovieReviewDiff({diff}) {
  const {background, text} = useDiffAnnotationColor(diff, 'numStars')
  return <div style={{background, color: text}}>Do some fancy logic here</div>
}
```

### `useAnnotationColor(annotation)`

Like `useDiffAnnotationColor`, but takes an annotation directly instead of a diff.

```jsx
import {useAnnotationColor} from 'sanity'

export function PhoneNumberDiff({diff}) {
  // Note: `diff.annotation` might not be what you want for many diff types!
  // See "diff annotations" section for more information
  const {background, text} = useAnnotationColor(diff.annotation)
  return <div style={{background, color: text}}>Do some fancy logic here</div>
}
```

## Shape of the data on a diff object

The `diff` received in diff components vary depending on the data type represented. All diffs share a common set of properties.

- `action` - either `added`, `removed`, `changed` or `unchanged`.
- `type` - the value type, eg `string`, `number` etc
- `fromValue` and `toValue` - holding the previous and next value
- `isChanged` - a boolean indicating whether or not the actual content changed

Unless the action is `unchanged`, the diff will also have an `annotation` property which is often needed to show information about the author of the change, as well as a timestamp and other similar metadata. Make sure you read the section on "diff annotations"!

### Strings

String diffs have an additional `segments` property, which is an array containing parts of the string which have been added, removed or did not change. This is useful when comparing larger chunks of text, as instead of simply saying the paragraph was "replaced", we can say that a single word was changed. It also allows individual segments of the text to be attributed to different authors.

The `<DiffString />` component can help render a visualization of these changes - or you can iterate over the segments and render them yourself should you want to.

### Arrays

An array rarely has any changes done to "itself", apart from perhaps being set from an undefined state to an empty array. What you are usually interested in is the values it holds, and the locations of those items.

Determining if something was added, removed, or moved within the array is done on a best effort basis, and the algorithm attempts to explain the change with as few "operations" as possible.

Why is it a best guess? From a technical perspective, if an item was at index 0 and now appears at index 1, it has "moved". If that "move" was the result of an item being prepended to the array, the more "natural" way of thinking about it is that it did *not* move.

Array diffs contain an `items` property, which itself is an array of changes to the items within the array. Each item has the following properties:

- `hasMoved` - a boolean indicating whether or not the array item moved, based on the algorithm's best guess.
- `fromIndex` and `toIndex` - containing the previous and next location of the item within the array. As noted above, `fromIndex` and `toIndex` can differ without the `hasMoved` property being `true`, because an add/remove operation could have shifted the indexes.
- `diff` - represents the actual item diff

Note that the `annotation` on the array diff is very coarse. When illustrating changes to data inside an Array item, it's best to do that with a diff component for the item with the item's `annotations` and not for the Array.

### Objects

Like arrays, objects rarely have a value of their own, apart from being set from an undefined state to an empty object. To access the individual fields of an object, the `fields` property is itself an object where the key is the name of the field and the value is the diff for that field. Certain underscore-prefixed fields are ignored when calculating the diff (`_id`, `_type`, `_createdAt`, `_updatedAt`, `_rev`).

## Diff annotations

Diff annotations hold fine-grained information on the change, and are present on individual "leaves" of the diff structure. It contains an `author` property (user ID of the person doing the change) and a timestamp for when the change occurred.

At first glance, this may seem like an unnecessary abstraction, but given the granular structure of annotations, we can create a deeper understanding for our editors.

```json
{
  "asset": {
    "_ref": "image-someHash-1024x768-png"
  },
  "crop": {
    "bottom": 100,
    "top": 100,
    "left": 20,
    "right": 20
  },
  "caption": "Kokos is a miniature schnauzer"
}
```

When comparing two versions of this image data structure, several things can have changed, for instance:

- The asset reference can have changed
- The numbers in `crop` can have appeared
- The caption may have been edited or created

Using the annotation on the image field itself would give you very coarse information, as if a single author performed the entire set of changes. Instead, we want to look at the annotations on the individual fields, and for the string fields even inspect individual segments of the string.

The `getAnnotationAtPath` function allows for easy retrieval of these annotations at depth.

Note that in certain cases it might make sense to *not* be as fine-grained. Theoretically, two users could have edited the `crop` object above - for instance, one user could have increased the width and a different user only modifying the height, thus touching `bottom`/`top` and `left`/`right`, respectively. Showing individual authors for each side of a rectangle *might* be hard to visualize.

## Usage with TypeScript

Writing diff components with TypeScript is fully supported. The diff tools in the `sanity` package includes not only the helper functions, hooks and React components you may want to use, but also a range of type definitions.

When defining a diff component, you can type it as a `DiffComponent`, and specify which type of diff you expect for the component. For instance, a diff for a geopoint object type might look like this:

```typescript
import {ObjectDiff, DiffComponent} from 'sanity'

interface Geopoint {
  lat: number
  lng: number
  alt?: number
}

export const GeopointDiff: DiffComponent<ObjectDiff<Geopoint>> =
  function GeopointDiff(props) {
    const {diff, schemaType} = props
    
    console.log(diff.fromValue) // Geopoint | null | undefined
    console.log(diff.toValue) // Geopoint | null | undefined
    
    return <div>{/* your diff logic here */}</div>
  }

```
