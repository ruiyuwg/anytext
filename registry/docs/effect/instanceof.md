## instanceOf

When you need to define a schema for your custom data type defined through a `class`, the most convenient and fast way is to use the `Schema.instanceOf` constructor.

**Example** (Defining a Schema with `instanceOf`)

```ts twoslash
import { Schema } from "effect"

// Define a custom class
class MyData {
  constructor(readonly name: string) {}
}

// Create a schema for the class
const MyDataSchema = Schema.instanceOf(MyData)

//     ┌─── MyData
//     ▼
type Type = typeof MyDataSchema.Type

console.log(Schema.decodeUnknownSync(MyDataSchema)(new MyData("name")))
// Output: MyData { name: 'name' }

console.log(Schema.decodeUnknownSync(MyDataSchema)({ name: "name" }))
/*
throws:
ParseError: Expected MyData, actual {"name":"name"}
*/
```

The `Schema.instanceOf` constructor is just a lightweight wrapper of the [Schema.declare](/docs/schema/advanced-usage/#declaring-new-data-types) API, which is the primitive in `effect/Schema` for declaring new custom data types.

### Private Constructors

Note that `Schema.instanceOf` can only be used for classes that expose a **public constructor**.
If you try to use it with classes that, for some reason, have marked the constructor as `private`, you'll receive a TypeScript error:

**Example** (Error With Private Constructors)

```ts twoslash
import { Schema } from "effect"

class MyData {
  static make = (name: string) => new MyData(name)
  private constructor(readonly name: string) {}
}

// @errors: 2345
const MyDataSchema = Schema.instanceOf(MyData)
```

In such cases, you cannot use `Schema.instanceOf`, and you must rely on [Schema.declare](/docs/schema/advanced-usage/#declaring-new-data-types) like this:

**Example** (Using `Schema.declare` With Private Constructors)

```ts twoslash
import { Schema } from "effect"

class MyData {
  static make = (name: string) => new MyData(name)
  private constructor(readonly name: string) {}
}

const MyDataSchema = Schema.declare(
  (input: unknown): input is MyData => input instanceof MyData
).annotations({ identifier: "MyData" })

console.log(Schema.decodeUnknownSync(MyDataSchema)(MyData.make("name")))
// Output: MyData { name: 'name' }

console.log(Schema.decodeUnknownSync(MyDataSchema)({ name: "name" }))
/*
throws:
ParseError: Expected MyData, actual {"name":"name"}
*/
```

### Validating Fields of the Instance

To validate the fields of a class instance, you can use a [filter](/docs/schema/filters/). This approach combines instance validation with additional checks on the instance's fields.

**Example** (Adding Field Validation to an Instance Schema)

```ts twoslash
import { Either, ParseResult, Schema } from "effect"

class MyData {
  constructor(readonly name: string) {}
}

const MyDataFields = Schema.Struct({
  name: Schema.NonEmptyString
})

// Define a schema for the class instance with additional field validation
const MyDataSchema = Schema.instanceOf(MyData).pipe(
  Schema.filter((a, options) =>
    // Validate the fields of the instance
    ParseResult.validateEither(MyDataFields)(a, options).pipe(
      // Invert success and failure for filtering
      Either.flip,
      // Return undefined if validation succeeds, or an error if it fails
      Either.getOrUndefined
    )
  )
)

// Example: Valid instance
console.log(Schema.validateSync(MyDataSchema)(new MyData("John")))
// Output: MyData { name: 'John' }

// Example: Invalid instance (empty name)
console.log(Schema.validateSync(MyDataSchema)(new MyData("")))
/*
throws:
ParseError: { MyData | filter }
└─ Predicate refinement failure
   └─ { readonly name: NonEmptyString }
      └─ ["name"]
         └─ NonEmptyString
            └─ Predicate refinement failure
               └─ Expected a non empty string, actual ""
*/
```

## Picking

The `pick` static function available on each struct schema can be used to create a new `Struct` by selecting specific properties from an existing `Struct`.

**Example** (Picking Properties from a Struct)

```ts twoslash
import { Schema } from "effect"

// Define a struct schema with properties "a", "b", and "c"
const MyStruct = Schema.Struct({
  a: Schema.String,
  b: Schema.Number,
  c: Schema.Boolean
})

// Create a new schema that picks properties "a" and "c"
//
//      ┌─── Struct<{
//      |      a: typeof Schema.String;
//      |      c: typeof Schema.Boolean;
//      |    }>
//      ▼
const PickedSchema = MyStruct.pick("a", "c")
```

The `Schema.pick` function can be applied more broadly beyond just `Struct` types, such as with unions of schemas.
However it returns a generic `SchemaClass`.

**Example** (Picking Properties from a Union)

```ts twoslash
import { Schema } from "effect"

// Define a union of two struct schemas
const MyUnion = Schema.Union(
  Schema.Struct({ a: Schema.String, b: Schema.String, c: Schema.String }),
  Schema.Struct({ a: Schema.Number, b: Schema.Number, d: Schema.Number })
)

// Create a new schema that picks properties "a" and "b"
//
//      ┌─── SchemaClass<{
//      |      readonly a: string | number;
//      |      readonly b: string | number;
//      |    }>
//      ▼
const PickedSchema = MyUnion.pipe(Schema.pick("a", "b"))
```

## Omitting

The `omit` static function available in each struct schema can be used to create a new `Struct` by excluding particular properties from an existing `Struct`.

**Example** (Omitting Properties from a Struct)

```ts twoslash
import { Schema } from "effect"

// Define a struct schema with properties "a", "b", and "c"
const MyStruct = Schema.Struct({
  a: Schema.String,
  b: Schema.Number,
  c: Schema.Boolean
})

// Create a new schema that omits property "b"
//
//      ┌─── Schema.Struct<{
//      |      a: typeof Schema.String;
//      |      c: typeof Schema.Boolean;
//      |    }>
//      ▼
const PickedSchema = MyStruct.omit("b")
```

The `Schema.omit` function can be applied more broadly beyond just `Struct` types, such as with unions of schemas.
However it returns a generic `Schema`.

**Example** (Omitting Properties from a Union)

```ts twoslash
import { Schema } from "effect"

// Define a union of two struct schemas
const MyUnion = Schema.Union(
  Schema.Struct({ a: Schema.String, b: Schema.String, c: Schema.String }),
  Schema.Struct({ a: Schema.Number, b: Schema.Number, d: Schema.Number })
)

// Create a new schema that omits property "b"
//
//      ┌─── SchemaClass<{
//      |      readonly a: string | number;
//      |    }>
//      ▼
const PickedSchema = MyUnion.pipe(Schema.omit("b"))
```

## partial

The `Schema.partial` function makes all properties within a schema optional.

**Example** (Making All Properties Optional)

```ts twoslash
import { Schema } from "effect"

// Create a schema with an optional property "a"
const schema = Schema.partial(Schema.Struct({ a: Schema.String }))

//     ┌─── { readonly a?: string | undefined; }
//     ▼
type Type = typeof schema.Type
```

By default, the `Schema.partial` operation adds `undefined` to the type of each property. If you want to avoid this, you can use `Schema.partialWith` and pass `{ exact: true }` as an argument.

**Example** (Defining an Exact Partial Schema)

```ts twoslash
import { Schema } from "effect"

// Create a schema with an optional property "a" without allowing undefined
const schema = Schema.partialWith(
  Schema.Struct({
    a: Schema.String
  }),
  { exact: true }
)

//     ┌─── { readonly a?: string; }
//     ▼
type Type = typeof schema.Type
```

## required

The `Schema.required` function ensures that all properties in a schema are mandatory.

**Example** (Making All Properties Required)

```ts twoslash
import { Schema } from "effect"

// Create a schema and make all properties required
const schema = Schema.required(
  Schema.Struct({
    a: Schema.optionalWith(Schema.String, { exact: true }),
    b: Schema.optionalWith(Schema.Number, { exact: true })
  })
)

//     ┌─── { readonly a: string; readonly b: number; }
//     ▼
type Type = typeof schema.Type
```

In this example, both `a` and `b` are made required, even though they were initially defined as optional.

## keyof

The `Schema.keyof` operation creates a schema that represents the keys of a given object schema.

**Example** (Extracting Keys from an Object Schema)

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Struct({
  a: Schema.String,
  b: Schema.Number
})

const keys = Schema.keyof(schema)

//     ┌─── "a" | "b"
//     ▼
type Type = typeof keys.Type
```
