## Tuples

The Schema module allows you to define tuples, which are ordered collections of elements that may have different types.
You can define tuples with required, optional, or rest elements.

### Required Elements

To define a tuple with required elements, you can use the `Schema.Tuple` constructor and simply list the element schemas in order:

**Example** (Defining a Tuple with Required Elements)

```ts twoslash
import { Schema } from "effect"

// Define a tuple with a string and a number as required elements
//
//      ┌─── Tuple<[typeof Schema.String, typeof Schema.Number]>
//      ▼
const schema = Schema.Tuple(Schema.String, Schema.Number)

//     ┌─── readonly [string, number]
//     ▼
type Type = typeof schema.Type
```

### Append a Required Element

You can append additional required elements to an existing tuple by using the spread operator:

**Example** (Adding an Element to an Existing Tuple)

```ts twoslash
import { Schema } from "effect"

const tuple1 = Schema.Tuple(Schema.String, Schema.Number)

// Append a boolean to the existing tuple
const tuple2 = Schema.Tuple(...tuple1.elements, Schema.Boolean)

//     ┌─── readonly [string, number, boolean]
//     ▼
type Type = typeof tuple2.Type
```

### Optional Elements

To define an optional element, use the `Schema.optionalElement` constructor.

**Example** (Defining a Tuple with Optional Elements)

```ts twoslash
import { Schema } from "effect"

// Define a tuple with a required string and an optional number
const schema = Schema.Tuple(
  Schema.String, // required element
  Schema.optionalElement(Schema.Number) // optional element
)

//     ┌─── readonly [string, number?]
//     ▼
type Type = typeof schema.Type
```

### Rest Element

To define a rest element, add it after the list of required or optional elements.
The rest element allows the tuple to accept additional elements of a specific type.

**Example** (Using a Rest Element)

```ts twoslash
import { Schema } from "effect"

// Define a tuple with required elements and a rest element of type boolean
const schema = Schema.Tuple(
  [Schema.String, Schema.optionalElement(Schema.Number)], // elements
  Schema.Boolean // rest element
)

//     ┌─── readonly [string, number?, ...boolean[]]
//     ▼
type Type = typeof schema.Type
```

You can also include other elements after the rest:

**Example** (Including Additional Elements After a Rest Element)

```ts twoslash
import { Schema } from "effect"

// Define a tuple with required elements, a rest element,
// and an additional element
const schema = Schema.Tuple(
  [Schema.String, Schema.optionalElement(Schema.Number)], // elements
  Schema.Boolean, // rest element
  Schema.String // additional element
)

//     ┌─── readonly [string, number | undefined, ...boolean[], string]
//     ▼
type Type = typeof schema.Type
```

### Annotations

Annotations are useful for adding metadata to tuple elements, making it easier to describe their purpose or requirements.
This is especially helpful for generating documentation or JSON schemas.

**Example** (Adding Annotations to Tuple Elements)

```ts twoslash
import { JSONSchema, Schema } from "effect"

// Define a tuple representing a point with annotations for each coordinate
const Point = Schema.Tuple(
  Schema.element(Schema.Number).annotations({
    title: "X",
    description: "X coordinate"
  }),
  Schema.optionalElement(Schema.Number).annotations({
    title: "Y",
    description: "optional Y coordinate"
  })
)

// Generate a JSON Schema from the tuple
console.log(JSONSchema.make(Point))
/*
Output:
{
  '$schema': 'http://json-schema.org/draft-07/schema#',
  type: 'array',
  minItems: 1,
  items: [
    { type: 'number', description: 'X coordinate', title: 'X' },
    {
      type: 'number',
      description: 'optional Y coordinate',
      title: 'Y'
    }
  ],
  additionalItems: false
}
*/
```

### Exposed Values

You can access the elements and rest elements of a tuple schema using the `elements` and `rest` properties:

**Example** (Accessing Elements and Rest Element in a Tuple Schema)

```ts twoslash
import { Schema } from "effect"

// Define a tuple with required, optional, and rest elements
const schema = Schema.Tuple(
  [Schema.String, Schema.optionalElement(Schema.Number)], // elements
  Schema.Boolean, // rest element
  Schema.String // additional element
)

// Access the required and optional elements of the tuple
//
//      ┌─── readonly [typeof Schema.String, Schema.Element<typeof Schema.Number, "?">]
//      ▼
const tupleElements = schema.elements

// Access the rest element of the tuple
//
//      ┌─── readonly [typeof Schema.Boolean, typeof Schema.String]
//      ▼
const restElement = schema.rest
```

## Arrays

The Schema module allows you to define schemas for arrays, making it easy to validate collections of elements of a specific type.

**Example** (Defining an Array Schema)

```ts twoslash
import { Schema } from "effect"

// Define a schema for an array of numbers
//
//      ┌─── Array$<typeof Schema.Number>
//      ▼
const schema = Schema.Array(Schema.Number)

//     ┌─── readonly number[]
//     ▼
type Type = typeof schema.Type
```

### Mutable Arrays

By default, `Schema.Array` generates a type marked as `readonly`.
To create a schema for a mutable array, you can use the `Schema.mutable` function, which makes the array type mutable in a **shallow** manner.

**Example** (Creating a Mutable Array Schema)

```ts twoslash
import { Schema } from "effect"

// Define a schema for a mutable array of numbers
//
//      ┌─── mutable<Schema.Array$<typeof Schema.Number>>
//      ▼
const schema = Schema.mutable(Schema.Array(Schema.Number))

//     ┌─── number[]
//     ▼
type Type = typeof schema.Type
```

### Exposed Values

You can access the value type of an array schema using the `value` property:

**Example** (Accessing the Value Type of an Array Schema)

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Array(Schema.Number)

// Access the value type of the array schema
//
//      ┌─── typeof Schema.Number
//      ▼
const value = schema.value
```

## Non Empty Arrays

The Schema module also provides a way to define schemas for non-empty arrays, ensuring that the array always contains at least one element.

**Example** (Defining a Non-Empty Array Schema)

```ts twoslash
import { Schema } from "effect"

// Define a schema for a non-empty array of numbers
//
//      ┌─── NonEmptyArray<typeof Schema.Number>
//      ▼
const schema = Schema.NonEmptyArray(Schema.Number)

//     ┌─── readonly [number, ...number[]]
//     ▼
type Type = typeof schema.Type
```

### Exposed Values

You can access the value type of a non-empty array schema using the `value` property:

**Example** (Accessing the Value Type of a Non-Empty Array Schema)

```ts twoslash
import { Schema } from "effect"

// Define a schema for a non-empty array of numbers
const schema = Schema.NonEmptyArray(Schema.Number)

// Access the value type of the non-empty array schema
//
//      ┌─── typeof Schema.Number
//      ▼
const value = schema.value
```
