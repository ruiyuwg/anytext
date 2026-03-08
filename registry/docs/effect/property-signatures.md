## Property Signatures

A `PropertySignature` represents a transformation from a "From" field to a "To" field. This allows you to define mappings between incoming data fields and your internal model.

### Basic Usage

A property signature can be defined with annotations to provide additional context about a field.

**Example** (Adding Annotations to a Property Signature)

```ts twoslash
import { Schema } from "effect"

const Person = Schema.Struct({
  name: Schema.String,
  age: Schema.propertySignature(Schema.NumberFromString).annotations({
    title: "Age" // Annotation to label the age field
  })
})
```

A `PropertySignature` type contains several parameters, each providing details about the transformation between the source field (From) and the target field (To). Let's take a look at what each of these parameters represents:

```ts showLineNumbers=false
age: PropertySignature<
  ToToken,
  ToType,
  FromKey,
  FromToken,
  FromType,
  HasDefault,
  Context
>
```

| Parameter    | Description                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| `age`        | Key of the "To" field                                                                                               |
| `ToToken`    | Indicates field requirement: `"?:"` for optional, `":"` for required                                                |
| `ToType`     | Type of the "To" field                                                                                              |
| `FromKey`    | (Optional, default = `never`) Indicates the source field key, typically the same as "To" field key unless specified |
| `FromToken`  | Indicates source field requirement: `"?:"` for optional, `":"` for required                                         |
| `FromType`   | Type of the "From" field                                                                                            |
| `HasDefault` | Indicates if there is a constructor default value (Boolean)                                                         |

In the example above, the `PropertySignature` type for `age` is:

```ts showLineNumbers=false
PropertySignature<":", number, never, ":", string, false, never>
```

This means:

| Parameter    | Description                                                                |
| ------------ | -------------------------------------------------------------------------- |
| `age`        | Key of the "To" field                                                      |
| `ToToken`    | `":"` indicates that the `age` field is required                           |
| `ToType`     | Type of the `age` field is `number`                                        |
| `FromKey`    | `never` indicates that the decoding occurs from the same field named `age` |
| `FromToken`  | `":"` indicates that the decoding occurs from a required `age` field       |
| `FromType`   | Type of the "From" field is `string`                                       |
| `HasDefault` | `false`: indicates there is no default value                               |

Sometimes, the source field (the "From" field) may have a different name from the field in your internal model. You can map between these fields using the `Schema.fromKey` function.

**Example** (Mapping from a Different Key)

```ts twoslash
import { Schema } from "effect"

const Person = Schema.Struct({
  name: Schema.String,
  age: Schema.propertySignature(Schema.NumberFromString).pipe(
    Schema.fromKey("AGE") // Maps from "AGE" to "age"
  )
})

console.log(Schema.decodeUnknownSync(Person)({ name: "name", AGE: "18" }))
// Output: { name: 'name', age: 18 }
```

When you map from `"AGE"` to `"age"`, the `PropertySignature` type changes to:

```ts showLineNumbers=false ""AGE"" del={1} ins={2}
PropertySignature<":", number, never, ":", string, false, never>
PropertySignature<":", number, "AGE", ":", string, false, never>
```

### Optional Fields

#### Basic Optional Property

The syntax:

```ts showLineNumbers=false
Schema.optional(schema: Schema<A, I, R>)
```

creates an optional property within a schema, allowing fields to be omitted or set to `undefined`.

##### Decoding

| Input             | Output                    |
| ----------------- | ------------------------- |
| `<missing value>` | remains `<missing value>` |
| `undefined`       | remains `undefined`       |
| `i: I`            | transforms to `a: A`      |

##### Encoding

| Input             | Output                    |
| ----------------- | ------------------------- |
| `<missing value>` | remains `<missing value>` |
| `undefined`       | remains `undefined`       |
| `a: A`            | transforms back to `i: I` |

**Example** (Defining an Optional Number Field)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optional(Schema.NumberFromString)
})

//     ┌─── { readonly quantity?: string | undefined; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity?: number | undefined; }
//     ▼
type Type = typeof Product.Type

// Decoding examples

console.log(Schema.decodeUnknownSync(Product)({ quantity: "1" }))
// Output: { quantity: 1 }
console.log(Schema.decodeUnknownSync(Product)({}))
// Output: {}
console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
// Output: { quantity: undefined }

// Encoding examples

console.log(Schema.encodeSync(Product)({ quantity: 1 }))
// Output: { quantity: "1" }
console.log(Schema.encodeSync(Product)({}))
// Output: {}
console.log(Schema.encodeSync(Product)({ quantity: undefined }))
// Output: { quantity: undefined }
```

##### Exposed Values

You can access the original schema type (before it was marked as optional) using the `from` property.

**Example** (Accessing the Original Schema)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optional(Schema.NumberFromString)
})

//      ┌─── typeof Schema.NumberFromString
//      ▼
const from = Product.fields.quantity.from
```

#### Optional with Nullability

The syntax:

```ts showLineNumbers=false
Schema.optionalWith(schema: Schema<A, I, R>, { nullable: true })
```

creates an optional property within a schema, treating `null` values the same as missing values.

##### Decoding

| Input             | Output                          |
| ----------------- | ------------------------------- |
| `<missing value>` | remains `<missing value>`       |
| `undefined`       | remains `undefined`             |
| `null`            | transforms to `<missing value>` |
| `i: I`            | transforms to `a: A`            |

##### Encoding

| Input             | Output                    |
| ----------------- | ------------------------- |
| `<missing value>` | remains `<missing value>` |
| `undefined`       | remains `undefined`       |
| `a: A`            | transforms back to `i: I` |

**Example** (Handling Null as Missing Value)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    nullable: true
  })
})

//     ┌─── { readonly quantity?: string | null | undefined; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity?: number | undefined; }
//     ▼
type Type = typeof Product.Type

// Decoding examples

console.log(Schema.decodeUnknownSync(Product)({ quantity: "1" }))
// Output: { quantity: 1 }
console.log(Schema.decodeUnknownSync(Product)({}))
// Output: {}
console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
// Output: { quantity: undefined }
console.log(Schema.decodeUnknownSync(Product)({ quantity: null }))
// Output: {}

// Encoding examples

console.log(Schema.encodeSync(Product)({ quantity: 1 }))
// Output: { quantity: "1" }
console.log(Schema.encodeSync(Product)({}))
// Output: {}
console.log(Schema.encodeSync(Product)({ quantity: undefined }))
// Output: { quantity: undefined }
```

##### Exposed Values

You can access the original schema type (before it was marked as optional) using the `from` property.

**Example** (Accessing the Original Schema)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    nullable: true
  })
})

//      ┌─── typeof Schema.NumberFromString
//      ▼
const from = Product.fields.quantity.from
```

#### Optional with Exactness

The syntax:

```ts showLineNumbers=false
Schema.optionalWith(schema: Schema<A, I, R>, { exact: true })
```

creates an optional property while enforcing strict typing. This means that only the specified type (excluding `undefined`) is accepted. Any attempt to decode `undefined` results in an error.

##### Decoding

| Input             | Output                    |
| ----------------- | ------------------------- |
| `<missing value>` | remains `<missing value>` |
| `undefined`       | `ParseError`              |
| `i: I`            | transforms to `a: A`      |

##### Encoding

| Input             | Output                    |
| ----------------- | ------------------------- |
| `<missing value>` | remains `<missing value>` |
| `a: A`            | transforms back to `i: I` |

**Example** (Using Exactness with Optional Field)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, { exact: true })
})

//     ┌─── { readonly quantity?: string; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity?: number; }
//     ▼
type Type = typeof Product.Type

// Decoding examples

console.log(Schema.decodeUnknownSync(Product)({ quantity: "1" }))
// Output: { quantity: 1 }
console.log(Schema.decodeUnknownSync(Product)({}))
// Output: {}
console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
/*
throws:
ParseError: { readonly quantity?: NumberFromString }
└─ ["quantity"]
   └─ NumberFromString
      └─ Encoded side transformation failure
         └─ Expected string, actual undefined
*/

// Encoding examples

console.log(Schema.encodeSync(Product)({ quantity: 1 }))
// Output: { quantity: "1" }
console.log(Schema.encodeSync(Product)({}))
// Output: {}
```

##### Exposed Values

You can access the original schema type (before it was marked as optional) using the `from` property.

**Example** (Accessing the Original Schema)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, { exact: true })
})

//      ┌─── typeof Schema.NumberFromString
//      ▼
const from = Product.fields.quantity.from
```

#### Combining Nullability and Exactness

The syntax:

```ts showLineNumbers=false
Schema.optionalWith(schema: Schema<A, I, R>, { exact: true, nullable: true })
```

allows you to define an optional property that enforces strict typing (exact type only) while also treating `null` as equivalent to a missing value.

##### Decoding

| Input             | Output                          |
| ----------------- | ------------------------------- |
| `<missing value>` | remains `<missing value>`       |
| `null`            | transforms to `<missing value>` |
| `undefined`       | `ParseError`                    |
| `i: I`            | transforms to `a: A`            |

##### Encoding

| Input             | Output                    |
| ----------------- | ------------------------- |
| `<missing value>` | remains `<missing value>` |
| `a: A`            | transforms back to `i: I` |

**Example** (Using Exactness and Handling Null as Missing Value with Optional Field)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    exact: true,
    nullable: true
  })
})

//     ┌─── { readonly quantity?: string | null; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity?: number; }
//     ▼
type Type = typeof Product.Type

// Decoding examples

console.log(Schema.decodeUnknownSync(Product)({ quantity: "1" }))
// Output: { quantity: 1 }
console.log(Schema.decodeUnknownSync(Product)({}))
// Output: {}
console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
/*
throws:
ParseError: (Struct (Encoded side) <-> Struct (Type side))
└─ Encoded side transformation failure
   └─ Struct (Encoded side)
      └─ ["quantity"]
         └─ NumberFromString | null
            ├─ NumberFromString
            │  └─ Encoded side transformation failure
            │     └─ Expected string, actual undefined
            └─ Expected null, actual undefined
*/
console.log(Schema.decodeUnknownSync(Product)({ quantity: null }))
// Output: {}

// Encoding examples

console.log(Schema.encodeSync(Product)({ quantity: 1 }))
// Output: { quantity: "1" }
console.log(Schema.encodeSync(Product)({}))
// Output: {}
```

##### Exposed Values

You can access the original schema type (before it was marked as optional) using the `from` property.

**Example** (Accessing the Original Schema)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    exact: true,
    nullable: true
  })
})

//      ┌─── typeof Schema.NumberFromString
//      ▼
const from = Product.fields.quantity.from
```

### Representing Optional Fields with never Type

When creating a schema to replicate a TypeScript type that includes optional fields with the `never` type, like:

```ts
type MyType = {
  readonly quantity?: never
}
```

the handling of these fields depends on the `exactOptionalPropertyTypes` setting in your `tsconfig.json`.
This setting affects whether the schema should treat optional `never`-typed fields as simply absent or allow `undefined` as a value.

**Example** (`exactOptionalPropertyTypes: false`)

When this feature is turned off, you can employ the `Schema.optional` function. This approach allows the field to implicitly accept `undefined` as a value.

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optional(Schema.Never)
})

//     ┌─── { readonly quantity?: undefined; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity?: undefined; }
//     ▼
type Type = typeof Product.Type
```

**Example** (`exactOptionalPropertyTypes: true`)

When this feature is turned on, the `Schema.optionalWith` function is recommended.
It ensures stricter enforcement of the field's absence.

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.Never, { exact: true })
})

//     ┌─── { readonly quantity?: never; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity?: never; }
//     ▼
type Type = typeof Product.Type
```

### Default Values

The `default` option in `Schema.optionalWith` allows you to set default values that are applied during both decoding and object construction phases.
This feature ensures that even if certain properties are not provided by the user, the system will automatically use the specified default values.

The `Schema.optionalWith` function offers several ways to control how defaults are applied during decoding and encoding. You can fine-tune whether defaults are applied only when the input is completely missing, or even when `null` or `undefined` values are provided.

#### Basic Default

This is the simplest use case. If the input is missing or `undefined`, the default value will be applied.

**Syntax**

```ts showLineNumbers=false
Schema.optionalWith(schema: Schema<A, I, R>, { default: () => A })
```

| Operation    | Behavior                                                         |
| ------------ | ---------------------------------------------------------------- |
| **Decoding** | Applies the default value if the input is missing or `undefined` |
| **Encoding** | Transforms the input `a: A` back to `i: I`                       |

**Example** (Applying Default When Field Is Missing or `undefined`)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    default: () => 1 // Default value for quantity
  })
})

//     ┌─── { readonly quantity?: string | undefined; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity: number; }
//     ▼
type Type = typeof Product.Type

// Decoding examples with default applied

console.log(Schema.decodeUnknownSync(Product)({}))
// Output: { quantity: 1 }

console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
// Output: { quantity: 1 }

console.log(Schema.decodeUnknownSync(Product)({ quantity: "2" }))
// Output: { quantity: 2 }

// Object construction examples with default applied

console.log(Product.make({}))
// Output: { quantity: 1 }

console.log(Product.make({ quantity: 2 }))
// Output: { quantity: 2 }
```

##### Exposed Values

You can access the original schema type (before it was marked as optional) using the `from` property.

**Example** (Accessing the Original Schema)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    default: () => 1 // Default value for quantity
  })
})

//      ┌─── typeof Schema.NumberFromString
//      ▼
const from = Product.fields.quantity.from
```

#### Default with Exactness

When you want the default value to be applied only if the field is completely missing (not when it's `undefined`), you can use the `exact` option.

**Syntax**

```ts showLineNumbers=false
Schema.optionalWith(schema: Schema<A, I, R>, {
  default: () => A,
  exact: true
})
```

| Operation    | Behavior                                               |
| ------------ | ------------------------------------------------------ |
| **Decoding** | Applies the default value only if the input is missing |
| **Encoding** | Transforms the input `a: A` back to `i: I`             |

**Example** (Applying Default Only When Field Is Missing)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    default: () => 1, // Default value for quantity
    exact: true // Only apply default if quantity is not provided
  })
})

//     ┌─── { readonly quantity?: string; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity: number; }
//     ▼
type Type = typeof Product.Type

console.log(Schema.decodeUnknownSync(Product)({}))
// Output: { quantity: 1 }

console.log(Schema.decodeUnknownSync(Product)({ quantity: "2" }))
// Output: { quantity: 2 }

console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
/*
throws:
ParseError: (Struct (Encoded side) <-> Struct (Type side))
└─ Encoded side transformation failure
   └─ Struct (Encoded side)
      └─ ["quantity"]
         └─ NumberFromString
            └─ Encoded side transformation failure
               └─ Expected string, actual undefined
*/
```

#### Default with Nullability

In cases where you want `null` values to trigger the default behavior, you can use the `nullable` option. This ensures that if a field is set to `null`, it will be replaced by the default value.

**Syntax**

```ts showLineNumbers=false
Schema.optionalWith(schema: Schema<A, I, R>, {
  default: () => A,
  nullable: true
})
```

| Operation    | Behavior                                                                   |
| ------------ | -------------------------------------------------------------------------- |
| **Decoding** | Applies the default value if the input is missing or `undefined` or `null` |
| **Encoding** | Transforms the input `a: A` back to `i: I`                                 |

**Example** (Applying Default When Field Is Missing or `undefined` or `null`)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    default: () => 1, // Default value for quantity
    nullable: true // Apply default if quantity is null
  })
})

//     ┌─── { readonly quantity?: string | null | undefined; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity: number; }
//     ▼
type Type = typeof Product.Type

console.log(Schema.decodeUnknownSync(Product)({}))
// Output: { quantity: 1 }

console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
// Output: { quantity: 1 }

console.log(Schema.decodeUnknownSync(Product)({ quantity: null }))
// Output: { quantity: 1 }

console.log(Schema.decodeUnknownSync(Product)({ quantity: "2" }))
// Output: { quantity: 2 }
```

#### Combining Exactness and Nullability

For a more strict approach, you can combine both `exact` and `nullable` options. This way, the default value is applied only when the field is `null` or missing, and not when it's explicitly set to `undefined`.

**Syntax**

```ts showLineNumbers=false
Schema.optionalWith(schema: Schema<A, I, R>, {
  default: () => A,
  exact: true,
  nullable: true
})
```

| Operation    | Behavior                                                    |
| ------------ | ----------------------------------------------------------- |
| **Decoding** | Applies the default value if the input is missing or `null` |
| **Encoding** | Transforms the input `a: A` back to `i: I`                  |

**Example** (Applying Default Only When Field Is Missing or `null`)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    default: () => 1, // Default value for quantity
    exact: true, // Only apply default if quantity is not provided
    nullable: true // Apply default if quantity is null
  })
})

//     ┌─── { readonly quantity?: string | null; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity: number; }
//     ▼
type Type = typeof Product.Type

console.log(Schema.decodeUnknownSync(Product)({}))
// Output: { quantity: 1 }

console.log(Schema.decodeUnknownSync(Product)({ quantity: null }))
// Output: { quantity: 1 }

console.log(Schema.decodeUnknownSync(Product)({ quantity: "2" }))
// Output: { quantity: 2 }

console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
/*
throws:
ParseError: (Struct (Encoded side) <-> Struct (Type side))
└─ Encoded side transformation failure
   └─ Struct (Encoded side)
      └─ ["quantity"]
         └─ NumberFromString
            └─ Encoded side transformation failure
               └─ Expected string, actual undefined
*/
```

### Optional Fields as Options

When working with optional fields, you may want to handle them as [Option](/docs/data-types/option/) types. This approach allows you to explicitly manage the presence or absence of a field rather than relying on `undefined` or `null`.

#### Basic Optional with Option Type

You can configure a schema to treat optional fields as `Option` types, where missing or `undefined` values are converted to `Option.none()` and existing values are wrapped in `Option.some()`.

**Syntax**

```ts showLineNumbers=false
optionalWith(schema: Schema<A, I, R>, { as: "Option" })
```

##### Decoding

| Input             | Output                            |
| ----------------- | --------------------------------- |
| `<missing value>` | transforms to `Option.none()`     |
| `undefined`       | transforms to `Option.none()`     |
| `i: I`            | transforms to `Option.some(a: A)` |

##### Encoding

| Input               | Output                          |
| ------------------- | ------------------------------- |
| `Option.none()`     | transforms to `<missing value>` |
| `Option.some(a: A)` | transforms back to `i: I`       |

**Example** (Handling Optional Field as Option)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, { as: "Option" })
})

//     ┌─── { readonly quantity?: string | undefined; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity: Option<number>; }
//     ▼
type Type = typeof Product.Type

console.log(Schema.decodeUnknownSync(Product)({}))
// Output: { quantity: { _id: 'Option', _tag: 'None' } }

console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
// Output: { quantity: { _id: 'Option', _tag: 'None' } }

console.log(Schema.decodeUnknownSync(Product)({ quantity: "2" }))
// Output: { quantity: { _id: 'Option', _tag: 'Some', value: 2 } }
```

##### Exposed Values

You can access the original schema type (before it was marked as optional) using the `from` property.

**Example** (Accessing the Original Schema)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, { as: "Option" })
})

//      ┌─── typeof Schema.NumberFromString
//      ▼
const from = Product.fields.quantity.from
```

#### Optional with Exactness

The `exact` option ensures that the default behavior of the optional field applies only when the field is entirely missing, not when it is `undefined`.

**Syntax**

```ts showLineNumbers=false
optionalWith(schema: Schema<A, I, R>, {
  as: "Option",
  exact: true
})
```

##### Decoding

| Input             | Output                            |
| ----------------- | --------------------------------- |
| `<missing value>` | transforms to `Option.none()`     |
| `undefined`       | `ParseError`                      |
| `i: I`            | transforms to `Option.some(a: A)` |

##### Encoding

| Input               | Output                          |
| ------------------- | ------------------------------- |
| `Option.none()`     | transforms to `<missing value>` |
| `Option.some(a: A)` | transforms back to `i: I`       |

**Example** (Using Exactness with Optional Field as Option)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    as: "Option",
    exact: true
  })
})

//     ┌─── { readonly quantity?: string; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity: Option<number>; }
//     ▼
type Type = typeof Product.Type

console.log(Schema.decodeUnknownSync(Product)({}))
// Output: { quantity: { _id: 'Option', _tag: 'None' } }

console.log(Schema.decodeUnknownSync(Product)({ quantity: "2" }))
// Output: { quantity: { _id: 'Option', _tag: 'Some', value: 2 } }

console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
/*
throws:
ParseError: (Struct (Encoded side) <-> Struct (Type side))
└─ Encoded side transformation failure
   └─ Struct (Encoded side)
      └─ ["quantity"]
         └─ NumberFromString
            └─ Encoded side transformation failure
               └─ Expected string, actual undefined
*/
```

##### Exposed Values

You can access the original schema type (before it was marked as optional) using the `from` property.

**Example** (Accessing the Original Schema)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    as: "Option",
    exact: true
  })
})

//      ┌─── typeof Schema.NumberFromString
//      ▼
const from = Product.fields.quantity.from
```

#### Optional with Nullability

The `nullable` option extends the default behavior to treat `null` as equivalent to `Option.none()`, alongside missing or `undefined` values.

**Syntax**

```ts showLineNumbers=false
optionalWith(schema: Schema<A, I, R>, {
  as: "Option",
  nullable: true
})
```

##### Decoding

| Input             | Output                            |
| ----------------- | --------------------------------- |
| `<missing value>` | transforms to `Option.none()`     |
| `undefined`       | transforms to `Option.none()`     |
| `null`            | transforms to `Option.none()`     |
| `i: I`            | transforms to `Option.some(a: A)` |

##### Encoding

| Input               | Output                          |
| ------------------- | ------------------------------- |
| `Option.none()`     | transforms to `<missing value>` |
| `Option.some(a: A)` | transforms back to `i: I`       |

**Example** (Handling Null as Missing Value with Optional Field as Option)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    as: "Option",
    nullable: true
  })
})

//     ┌─── { readonly quantity?: string | null | undefined; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity: Option<number>; }
//     ▼
type Type = typeof Product.Type

console.log(Schema.decodeUnknownSync(Product)({}))
// Output: { quantity: { _id: 'Option', _tag: 'None' } }

console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
// Output: { quantity: { _id: 'Option', _tag: 'None' } }

console.log(Schema.decodeUnknownSync(Product)({ quantity: null }))
// Output: { quantity: { _id: 'Option', _tag: 'None' } }

console.log(Schema.decodeUnknownSync(Product)({ quantity: "2" }))
// Output: { quantity: { _id: 'Option', _tag: 'Some', value: 2 } }
```

##### Exposed Values

You can access the original schema type (before it was marked as optional) using the `from` property.

**Example** (Accessing the Original Schema)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    as: "Option",
    nullable: true
  })
})

//      ┌─── typeof Schema.NumberFromString
//      ▼
const from = Product.fields.quantity.from
```

#### Combining Exactness and Nullability

When both `exact` and `nullable` options are used together, only `null` and missing fields are treated as `Option.none()`, while `undefined` is considered an invalid value.

**Syntax**

```ts showLineNumbers=false
optionalWith(schema: Schema<A, I, R>, {
  as: "Option",
  exact: true,
  nullable: true
})
```

##### Decoding

| Input             | Output                            |
| ----------------- | --------------------------------- |
| `<missing value>` | transforms to `Option.none()`     |
| `undefined`       | `ParseError`                      |
| `null`            | transforms to `Option.none()`     |
| `i: I`            | transforms to `Option.some(a: A)` |

##### Encoding

| Input               | Output                          |
| ------------------- | ------------------------------- |
| `Option.none()`     | transforms to `<missing value>` |
| `Option.some(a: A)` | transforms back to `i: I`       |

**Example** (Using Exactness and Handling Null as Missing Value with Optional Field as Option)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    as: "Option",
    exact: true,
    nullable: true
  })
})

//     ┌─── { readonly quantity?: string | null; }
//     ▼
type Encoded = typeof Product.Encoded

//     ┌─── { readonly quantity: Option<number>; }
//     ▼
type Type = typeof Product.Type

console.log(Schema.decodeUnknownSync(Product)({}))
// Output: { quantity: { _id: 'Option', _tag: 'None' } }

console.log(Schema.decodeUnknownSync(Product)({ quantity: null }))
// Output: { quantity: { _id: 'Option', _tag: 'None' } }

console.log(Schema.decodeUnknownSync(Product)({ quantity: "2" }))
// Output: { quantity: { _id: 'Option', _tag: 'Some', value: 2 } }

console.log(Schema.decodeUnknownSync(Product)({ quantity: undefined }))
/*
throws:
ParseError: (Struct (Encoded side) <-> Struct (Type side))
└─ Encoded side transformation failure
   └─ Struct (Encoded side)
      └─ ["quantity"]
         └─ NumberFromString
            └─ Encoded side transformation failure
               └─ Expected string, actual undefined
*/
```

##### Exposed Values

You can access the original schema type (before it was marked as optional) using the `from` property.

**Example** (Accessing the Original Schema)

```ts twoslash
import { Schema } from "effect"

const Product = Schema.Struct({
  quantity: Schema.optionalWith(Schema.NumberFromString, {
    as: "Option",
    exact: true,
    nullable: true
  })
})

//      ┌─── typeof Schema.NumberFromString
//      ▼
const from = Product.fields.quantity.from
```
