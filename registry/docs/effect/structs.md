## Structs

### Property Signatures

The `Schema.Struct` constructor defines a schema for an object with specific properties.

**Example** (Defining a Struct Schema)

This example defines a struct schema for an object with the following properties:

- `name`: a string
- `age`: a number

```ts twoslash
import { Schema } from "effect"

//      ┌─── Schema.Struct<{
//      │      name: typeof Schema.String;
//      │      age: typeof Schema.Number;
//      │    }>
//      ▼
const schema = Schema.Struct({
  name: Schema.String,
  age: Schema.Number
})

// The inferred TypeScript type from the schema
//
//     ┌─── {
//     │      readonly name: string;
//     │      readonly age: number;
//     │    }
//     ▼
type Type = typeof schema.Type
```

Using `Schema.Struct({})` results in a TypeScript type `{}`, which
behaves similarly to `unknown`. This means that any data will be
considered valid, as there are no defined constraints.

### Index Signatures

The `Schema.Struct` constructor can optionally accept a list of key/value pairs representing index signatures, allowing you to define additional dynamic properties.

```ts showLineNumbers=false
declare const Struct: (props, ...indexSignatures) => Struct<...>
```

**Example** (Adding an Index Signature)

```ts twoslash
import { Schema } from "effect"

// Define a struct with a specific property "a"
// and an index signature allowing additional properties
const schema = Schema.Struct(
  // Defined properties
  { a: Schema.Number },
  // Index signature: allows additional string keys with number values
  { key: Schema.String, value: Schema.Number }
)

// The inferred TypeScript type:
//
//     ┌─── {
//     │      readonly [x: string]: number;
//     │      readonly a: number;
//     │    }
//     ▼
type Type = typeof schema.Type
```

**Example** (Using `Schema.Record`)

You can achieve the same result using `Schema.Record`:

```ts twoslash
import { Schema } from "effect"

// Define a struct with a fixed property "a"
// and a dynamic index signature using Schema.Record
const schema = Schema.Struct(
  { a: Schema.Number },
  Schema.Record({ key: Schema.String, value: Schema.Number })
)

// The inferred TypeScript type:
//
//     ┌─── {
//     │      readonly [x: string]: number;
//     │      readonly a: number;
//     │    }
//     ▼
type Type = typeof schema.Type
```

### Multiple Index Signatures

You can define **one** index signature per key type (`string` or `symbol`). Defining multiple index signatures of the same type is not allowed.

**Example** (Valid Multiple Index Signatures)

```ts twoslash
import { Schema } from "effect"

// Define a struct with a fixed property "a"
// and valid index signatures for both strings and symbols
const schema = Schema.Struct(
  { a: Schema.Number },
  // String index signature
  { key: Schema.String, value: Schema.Number },
  // Symbol index signature
  { key: Schema.SymbolFromSelf, value: Schema.Number }
)

// The inferred TypeScript type:
//
//     ┌─── {
//     │      readonly [x: string]: number;
//     │      readonly [x: symbol]: number;
//     │      readonly a: number;
//     │    }
//     ▼
type Type = typeof schema.Type
```

Defining multiple index signatures of the same key type (`string` or `symbol`) will cause an error.

**Example** (Invalid Multiple Index Signatures)

```ts twoslash
import { Schema } from "effect"

Schema.Struct(
  { a: Schema.Number },
  // Attempting to define multiple string index signatures
  { key: Schema.String, value: Schema.Number },
  { key: Schema.String, value: Schema.Boolean }
)
/*
throws:
Error: Duplicate index signature
details: string index signature
*/
```

### Conflicting Index Signatures

When defining schemas with index signatures, conflicts can arise if a fixed property has a different type than the values allowed by the index signature.
This can lead to unexpected TypeScript behavior.

**Example** (Conflicting Index Signature)

```ts twoslash
import { Schema } from "effect"

// Attempting to define a struct with a conflicting index signature
// - The fixed property "a" is a string
// - The index signature requires all values to be numbers
const schema = Schema.Struct(
  { a: Schema.String },
  { key: Schema.String, value: Schema.Number }
)

// ❌ Incorrect TypeScript type:
//
//     ┌─── {
//     │      readonly [x: string]: number;
//     │      readonly a: string;
//     │    }
//     ▼
type Type = typeof schema.Type
```

The TypeScript compiler flags this as an error when defining the type manually:

```ts twoslash
// @errors: 2411
// This type is invalid because the index signature
// conflicts with the fixed property `a`
type Test = {
  readonly a: string
  readonly [x: string]: number
}
```

This happens because TypeScript does not allow an index signature to contradict a fixed property.

#### Workaround for Conflicting Index Signatures

When working with schemas, a conflict can occur if a fixed property has a different type than the values allowed by an index signature. This situation often arises when dealing with external APIs that do not follow strict TypeScript conventions.

To prevent conflicts, you can separate the fixed properties from the indexed properties and handle them as distinct parts of the schema.

**Example** (Extracting Fixed and Indexed Properties)

Consider an object where:

- `"a"` is a fixed property of type `string`.
- All other keys store numbers, which conflict with `"a"`.

```ts twoslash
// @errors: 2411
// This type is invalid because the index signature
// conflicts with the fixed property `a`
type Test = {
  a: string
  [x: string]: number
}
```

To avoid this issue, we can separate the properties into two distinct types:

```ts showLineNumbers=false
// Fixed properties schema
type FixedProperties = {
  readonly a: string
}

// Index signature properties schema
type IndexSignatureProperties = {
  readonly [x: string]: number
}

// The final output groups both properties in a tuple
type OutputData = readonly [FixedProperties, IndexSignatureProperties]
```

By using [Schema.transform](/docs/schema/transformations/#transform) and [Schema.compose](/docs/schema/transformations/#composition),
you can preprocess the input data before validation. This approach ensures that fixed properties and index signature properties are treated independently.

```ts twoslash
import { Schema } from "effect"

// Define a schema for the fixed property "a"
const FixedProperties = Schema.Struct({
  a: Schema.String
})

// Define a schema for index signature properties
const IndexSignatureProperties = Schema.Record({
  // Exclude keys that are already present in FixedProperties
  key: Schema.String.pipe(
    Schema.filter(
      (key) => !Object.keys(FixedProperties.fields).includes(key)
    )
  ),
  value: Schema.Number
})

// Create a schema that duplicates an object into two parts
const Duplicate = Schema.transform(
  Schema.Object,
  Schema.Tuple(Schema.Object, Schema.Object),
  {
    strict: true,
    // Create a tuple containing the input twice
    decode: (a) => [a, a] as const,
    // Merge both parts back when encoding
    encode: ([a, b]) => ({ ...a, ...b })
  }
)

//      ┌─── Schema<readonly [
//      |      { readonly a: string; },
//      |      { readonly [x: string]: number; }
//      |    ], object>
//      ▼
const Result = Schema.compose(
  Duplicate,
  Schema.Tuple(FixedProperties, IndexSignatureProperties).annotations({
    parseOptions: { onExcessProperty: "ignore" }
  })
)

// Decoding: Separates fixed and indexed properties
console.log(Schema.decodeUnknownSync(Result)({ a: "a", b: 1, c: 2 }))
// Output: [ { a: 'a' }, { b: 1, c: 2 } ]

// Encoding: Combines them back into an object
console.log(Schema.encodeSync(Result)([{ a: "a" }, { b: 1, c: 2 }]))
// Output: { a: 'a', b: 1, c: 2 }
```

### Exposed Values

You can access the fields and records of a struct schema using the `fields` and `records` properties:

**Example** (Accessing Fields and Records)

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Struct(
  { a: Schema.Number },
  Schema.Record({ key: Schema.String, value: Schema.Number })
)

// Accesses the fields
//
//      ┌─── { readonly a: typeof Schema.Number; }
//      ▼
const fields = schema.fields

// Accesses the records
//
//      ┌─── readonly [Schema.Record$<typeof Schema.String, typeof Schema.Number>]
//      ▼
const records = schema.records
```

### Mutable Structs

By default, `Schema.Struct` generates a type with properties marked as `readonly`.
To create a mutable version of the struct, use the `Schema.mutable` function, which makes the properties mutable in a **shallow** manner.

**Example** (Creating a Mutable Struct Schema)

```ts twoslash
import { Schema } from "effect"

const schema = Schema.mutable(
  Schema.Struct({ a: Schema.String, b: Schema.Number })
)

//     ┌─── { a: string; b: number; }
//     ▼
type Type = typeof schema.Type
```
