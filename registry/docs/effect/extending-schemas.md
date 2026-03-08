## Extending Schemas

Schemas in `effect` can be extended in multiple ways, allowing you to combine or enhance existing types with additional fields or functionality. One common method is to use the `fields` property available in `Struct` schemas. This property provides a convenient way to add fields or merge fields from different structs while retaining the original `Struct` type. This approach also makes it easier to access and modify fields.

For more complex cases, such as extending a struct with a union, you may want to use the `Schema.extend` function, which offers flexibility in scenarios where direct field spreading may not be sufficient.

By using field spreading with `...Struct.fields`, you maintain the
schema's `Struct` type, which allows continued access to the `fields`
property for further modifications.

### Spreading Struct fields

Structs provide access to their fields through the `fields` property, which allows you to extend an existing struct by adding additional fields or combining fields from multiple structs.

**Example** (Adding New Fields)

```ts twoslash
import { Schema } from "effect"

const Original = Schema.Struct({
  a: Schema.String,
  b: Schema.String
})

const Extended = Schema.Struct({
  ...Original.fields,
  // Adding new fields
  c: Schema.String,
  d: Schema.String
})

//     ┌─── {
//     |      readonly a: string;
//     |      readonly b: string;
//     |      readonly c: string;
//     |      readonly d: string;
//     |    }
//     ▼
type Type = typeof Extended.Type
```

**Example** (Adding Additional Index Signatures)

```ts twoslash
import { Schema } from "effect"

const Original = Schema.Struct({
  a: Schema.String,
  b: Schema.String
})

const Extended = Schema.Struct(
  Original.fields,
  // Adding an index signature
  Schema.Record({ key: Schema.String, value: Schema.String })
)

//     ┌─── {
//     │      readonly [x: string]: string;
//     |      readonly a: string;
//     |      readonly b: string;
//     |    }
//     ▼
type Type = typeof Extended.Type
```

**Example** (Combining Fields from Multiple Structs)

```ts twoslash
import { Schema } from "effect"

const Struct1 = Schema.Struct({
  a: Schema.String,
  b: Schema.String
})

const Struct2 = Schema.Struct({
  c: Schema.String,
  d: Schema.String
})

const Extended = Schema.Struct({
  ...Struct1.fields,
  ...Struct2.fields
})

//     ┌─── {
//     |      readonly a: string;
//     |      readonly b: string;
//     |      readonly c: string;
//     |      readonly d: string;
//     |    }
//     ▼
type Type = typeof Extended.Type
```

### The extend function

The `Schema.extend` function provides a structured method to expand schemas, especially useful when direct [field spreading](#spreading-struct-fields) isn't sufficient—such as when you need to extend a struct with a union of other structs.

Not all extensions are supported, and compatibility depends on the type
of schemas involved in the extension.

Supported extensions include:

- `Schema.String` with another `Schema.String` refinement or a string literal
- `Schema.Number` with another `Schema.Number` refinement or a number literal
- `Schema.Boolean` with another `Schema.Boolean` refinement or a boolean literal
- A struct with another struct where overlapping fields support extension
- A struct with in index signature
- A struct with a union of supported schemas
- A refinement of a struct with a supported schema
- A `suspend` of a struct with a supported schema
- A transformation between structs where the "from" and "to" sides have no overlapping fields with the target struct

**Example** (Extending a Struct with a Union of Structs)

```ts twoslash
import { Schema } from "effect"

const Struct = Schema.Struct({
  a: Schema.String
})

const UnionOfStructs = Schema.Union(
  Schema.Struct({ b: Schema.String }),
  Schema.Struct({ c: Schema.String })
)

const Extended = Schema.extend(Struct, UnionOfStructs)

//     ┌─── {
//     |        readonly a: string;
//     |    } & ({
//     |        readonly b: string;
//     |    } | {
//     |        readonly c: string;
//     |    })
//     ▼
type Type = typeof Extended.Type
```

**Example** (Attempting to Extend Structs with Conflicting Fields)

This example demonstrates an attempt to extend a struct with another struct that contains overlapping field names, resulting in an error due to conflicting types.

```ts twoslash
import { Schema } from "effect"

const Struct = Schema.Struct({
  a: Schema.String
})

const OverlappingUnion = Schema.Union(
  Schema.Struct({ a: Schema.Number }), // conflicting type for key "a"
  Schema.Struct({ d: Schema.String })
)

const Extended = Schema.extend(Struct, OverlappingUnion)
/*
throws:
Error: Unsupported schema or overlapping types
at path: ["a"]
details: cannot extend string with number
*/
```

**Example** (Extending a Refinement with Another Refinement)

In this example, we extend two refinements, `Integer` and `Positive`, creating a schema that enforces both integer and positivity constraints.

```ts twoslash
import { Schema } from "effect"

const Integer = Schema.Int.pipe(Schema.brand("Int"))
const Positive = Schema.Positive.pipe(Schema.brand("Positive"))

//      ┌─── Schema<number & Brand<"Positive"> & Brand<"Int">, number, never>
//      ▼
const PositiveInteger = Schema.asSchema(Schema.extend(Positive, Integer))

Schema.decodeUnknownSync(PositiveInteger)(-1)
/*
throws
ParseError: positive & Brand<"Positive"> & int & Brand<"Int">
└─ From side refinement failure
   └─ positive & Brand<"Positive">
      └─ Predicate refinement failure
         └─ Expected a positive number, actual -1
*/

Schema.decodeUnknownSync(PositiveInteger)(1.1)
/*
throws
ParseError: positive & Brand<"Positive"> & int & Brand<"Int">
└─ Predicate refinement failure
   └─ Expected an integer, actual 1.1
*/
```
