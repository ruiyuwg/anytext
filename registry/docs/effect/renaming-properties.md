## Renaming Properties

### Renaming a Property During Definition

To rename a property directly during schema creation, you can utilize the `Schema.fromKey` function.

**Example** (Renaming a Required Property)

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Struct({
  a: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("c")),
  b: Schema.Number
})

//     ┌─── { readonly c: string; readonly b: number; }
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── { readonly a: string; readonly b: number; }
//     ▼
type Type = typeof schema.Type

console.log(Schema.decodeUnknownSync(schema)({ c: "c", b: 1 }))
// Output: { a: "c", b: 1 }
```

**Example** (Renaming an Optional Property)

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Struct({
  a: Schema.optional(Schema.String).pipe(Schema.fromKey("c")),
  b: Schema.Number
})

//     ┌─── { readonly b: number; readonly c?: string | undefined; }
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── { readonly a?: string | undefined; readonly b: number; }
//     ▼
type Type = typeof schema.Type

console.log(Schema.decodeUnknownSync(schema)({ c: "c", b: 1 }))
// Output: { a: 'c', b: 1 }

console.log(Schema.decodeUnknownSync(schema)({ b: 1 }))
// Output: { b: 1 }
```

Using `Schema.optional` automatically returns a `PropertySignature`, making it unnecessary to explicitly use `Schema.propertySignature` as required for renaming required fields in the previous example.

### Renaming Properties of an Existing Schema

For existing schemas, the `Schema.rename` API offers a way to systematically change property names across a schema, even within complex structures like unions, though in case of structs you lose the original field types.

**Example** (Renaming Properties in a Struct Schema)

```ts twoslash
import { Schema } from "effect"

const Original = Schema.Struct({
  c: Schema.String,
  b: Schema.Number
})

// Renaming the "c" property to "a"
//
//
//      ┌─── SchemaClass<{
//      |      readonly a: string;
//      |      readonly b: number;
//      |    }>
//      ▼
const Renamed = Schema.rename(Original, { c: "a" })

console.log(Schema.decodeUnknownSync(Renamed)({ c: "c", b: 1 }))
// Output: { a: "c", b: 1 }
```

**Example** (Renaming Properties in Union Schemas)

```ts twoslash
import { Schema } from "effect"

const Original = Schema.Union(
  Schema.Struct({
    c: Schema.String,
    b: Schema.Number
  }),
  Schema.Struct({
    c: Schema.String,
    d: Schema.Boolean
  })
)

// Renaming the "c" property to "a" for all members
//
//      ┌─── SchemaClass<{
//      |      readonly a: string;
//      |      readonly b: number;
//      |    } | {
//      |      readonly a: string;
//      |      readonly d: number;
//      |    }>
//      ▼
const Renamed = Schema.rename(Original, { c: "a" })

console.log(Schema.decodeUnknownSync(Renamed)({ c: "c", b: 1 }))
// Output: { a: "c", b: 1 }

console.log(Schema.decodeUnknownSync(Renamed)({ c: "c", d: false }))
// Output: { a: 'c', d: false }
```
