## Records

The Schema module provides support for defining record types, which are collections of key-value pairs where the key can be a string, symbol, or other types, and the value has a defined schema.

### String Keys

You can define a record with string keys and a specified type for the values.

**Example** (String Keys with Number Values)

```ts twoslash
import { Schema } from "effect"

// Define a record schema with string keys and number values
//
//      ┌─── Record$<typeof Schema.String, typeof Schema.Number>
//      ▼
const schema = Schema.Record({ key: Schema.String, value: Schema.Number })

//     ┌─── { readonly [x: string]: number; }
//     ▼
type Type = typeof schema.Type
```

### Symbol Keys

Records can also use symbols as keys.

**Example** (Symbol Keys with Number Values)

```ts twoslash
import { Schema } from "effect"

// Define a record schema with symbol keys and number values
const schema = Schema.Record({
  key: Schema.SymbolFromSelf,
  value: Schema.Number
})

//     ┌─── { readonly [x: symbol]: number; }
//     ▼
type Type = typeof schema.Type
```

### Union of Literal Keys

Use a union of literals to restrict keys to a specific set of values.

**Example** (Union of String Literals as Keys)

```ts twoslash
import { Schema } from "effect"

// Define a record schema where keys are limited
// to specific string literals ("a" or "b")
const schema = Schema.Record({
  key: Schema.Union(Schema.Literal("a"), Schema.Literal("b")),
  value: Schema.Number
})

//     ┌─── { readonly a: number; readonly b: number; }
//     ▼
type Type = typeof schema.Type
```

### Template Literal Keys

Records can use template literals as keys, allowing for more complex key patterns.

**Example** (Template Literal Keys with Number Values)

```ts twoslash
import { Schema } from "effect"

// Define a record schema with keys that match
// the template literal pattern "a${string}"
const schema = Schema.Record({
  key: Schema.TemplateLiteral(Schema.Literal("a"), Schema.String),
  value: Schema.Number
})

//     ┌─── { readonly [x: `a${string}`]: number; }
//     ▼
type Type = typeof schema.Type
```

### Refined Keys

You can refine the key type with additional constraints.

**Example** (Filtering Keys by Minimum Length)

```ts twoslash
import { Schema } from "effect"

// Define a record schema where keys are strings with a minimum length of 2
const schema = Schema.Record({
  key: Schema.String.pipe(Schema.minLength(2)),
  value: Schema.Number
})

//     ┌─── { readonly [x: string]: number; }
//     ▼
type Type = typeof schema.Type
```

Refinements on keys act as filters rather than causing a decoding failure.
If a key does not meet the constraints (such as a pattern or minimum length check),
it is removed from the decoded output instead of triggering an error.

**Example** (Keys That Do Not Meet Constraints Are Removed)

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Record({
  key: Schema.String.pipe(Schema.minLength(2)),
  value: Schema.Number
})

console.log(Schema.decodeUnknownSync(schema)({ a: 1, bb: 2 }))
// Output: { bb: 2 } ("a" is removed because it is too short)
```

If you want decoding to fail when a key does not meet the constraints,
you can set [`onExcessProperty`](/docs/schema/getting-started/#managing-excess-properties) to `"error"`.

**Example** (Forcing an Error on Invalid Keys)

```ts twoslash "onExcessProperty"
import { Schema } from "effect"

const schema = Schema.Record({
  key: Schema.String.pipe(Schema.minLength(2)),
  value: Schema.Number
})

console.log(
  Schema.decodeUnknownSync(schema, { onExcessProperty: "error" })({
    a: 1,
    bb: 2
  })
)
/*
throws:
ParseError: { readonly [x: minLength(2)]: number }
└─ ["a"]
   └─ is unexpected, expected: minLength(2)
*/
```

### Transforming Keys

The `Schema.Record` API does not support transformations on key schemas.
Attempting to apply a transformation to keys will result in an `Unsupported key schema` error:

**Example** (Attempting to Transform Keys)

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Record({
  key: Schema.Trim,
  value: Schema.NumberFromString
})
/*
throws:
Error: Unsupported key schema
schema (Transformation): Trim
*/
```

This restriction exists because transformations can create conflicts if
multiple keys map to the same value after transformation. To prevent
these issues, key transformations must be handled explicitly by the
user.

To modify record keys, you must apply transformations outside of `Schema.Record`.
A common approach is to use [Schema.transform](/docs/schema/transformations/#transform) to adjust keys during decoding.

**Example** (Trimming Keys While Decoding)

```ts twoslash
import { Schema, Record, identity } from "effect"

const schema = Schema.transform(
  // Define the input schema with unprocessed keys
  Schema.Record({
    key: Schema.String,
    value: Schema.NumberFromString
  }),
  // Define the output schema with transformed keys
  Schema.Record({
    key: Schema.Trimmed,
    value: Schema.Number
  }),
  {
    strict: true,
    // Trim keys during decoding
    decode: (record) => Record.mapKeys(record, (key) => key.trim()),
    encode: identity
  }
)

console.log(
  Schema.decodeUnknownSync(schema)({ " key1 ": "1", key2: "2" })
)
// Output: { key1: 1, key2: 2 }
```

### Mutable Records

By default, `Schema.Record` generates a type marked as `readonly`.
To create a schema for a mutable record, you can use the `Schema.mutable` function, which makes the record type mutable in a **shallow** manner.

**Example** (Creating a Mutable Record Schema)

```ts twoslash
import { Schema } from "effect"

// Create a schema for a mutable record with string keys and number values
const schema = Schema.mutable(
  Schema.Record({ key: Schema.String, value: Schema.Number })
)

//     ┌─── { [x: string]: number; }
//     ▼
type Type = typeof schema.Type
```

### Exposed Values

You can access the `key` and `value` types of a record schema using the `key` and `value` properties:

**Example** (Accessing Key and Value Types)

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Record({ key: Schema.String, value: Schema.Number })

// Accesses the key
//
//     ┌─── typeof Schema.String
//     ▼
const key = schema.key

// Accesses the value
//
//      ┌─── typeof Schema.Number
//      ▼
const value = schema.value
```
