## Optional Fields Primitives

### optionalToOptional

The `Schema.optionalToOptional` API allows you to manage transformations from an optional field in the input to an optional field in the output. This can be useful for controlling both the output type and whether a field is present or absent based on specific criteria.

One common use case for `optionalToOptional` is handling fields where a specific input value, such as an empty string, should be treated as an absent field in the output.

**Syntax**

```ts showLineNumbers=false
const optionalToOptional = <FA, FI, FR, TA, TI, TR>(
  from: Schema<FA, FI, FR>,
  to: Schema<TA, TI, TR>,
  options: {
    readonly decode: (o: Option.Option<FA>) => Option.Option<TI>,
    readonly encode: (o: Option.Option<TI>) => Option.Option<FA>
  }
): PropertySignature<"?:", TA, never, "?:", FI, false, FR | TR>
```

In this function:

- The `from` parameter specifies the input schema, and `to` specifies the output schema.
- The `decode` and `encode` functions define how the field should be interpreted on both sides:
  - `Option.none()` as an input argument indicates a missing field in the input.
  - Returning `Option.none()` from either function will omit the field in the output.

**Example** (Omitting Empty Strings from the Output)

Consider an optional field of type `string` where empty strings in the input should be removed from the output.

```ts twoslash
import { Option, Schema } from "effect"

const schema = Schema.Struct({
  nonEmpty: Schema.optionalToOptional(Schema.String, Schema.String, {
    //         ┌─── Option<string>
    //         ▼
    decode: (maybeString) => {
      if (Option.isNone(maybeString)) {
        // If `maybeString` is `None`, the field is absent in the input.
        // Return Option.none() to omit it in the output.
        return Option.none()
      }
      // Extract the value from the `Some` instance
      const value = maybeString.value
      if (value === "") {
        // Treat empty strings as missing in the output
        // by returning Option.none().
        return Option.none()
      }
      // Include non-empty strings in the output.
      return Option.some(value)
    },
    // In the encoding phase, you can decide to process the field
    // similarly to the decoding phase or use a different logic.
    // Here, the logic is left unchanged.
    //
    //         ┌─── Option<string>
    //         ▼
    encode: (maybeString) => maybeString
  })
})

// Decoding examples

const decode = Schema.decodeUnknownSync(schema)

console.log(decode({}))
// Output: {}
console.log(decode({ nonEmpty: "" }))
// Output: {}
console.log(decode({ nonEmpty: "a non-empty string" }))
// Output: { nonEmpty: 'a non-empty string' }

// Encoding examples

const encode = Schema.encodeSync(schema)

console.log(encode({}))
// Output: {}
console.log(encode({ nonEmpty: "" }))
// Output: { nonEmpty: '' }
console.log(encode({ nonEmpty: "a non-empty string" }))
// Output: { nonEmpty: 'a non-empty string' }
```

You can simplify the decoding logic with `Option.filter`, which filters out unwanted values in a concise way.

**Example** (Using `Option.filter` for Decoding)

```ts twoslash
import { identity, Option, Schema } from "effect"

const schema = Schema.Struct({
  nonEmpty: Schema.optionalToOptional(Schema.String, Schema.String, {
    decode: Option.filter((s) => s !== ""),
    encode: identity
  })
})
```

### optionalToRequired

The `Schema.optionalToRequired` API lets you transform an optional field into a required one, with custom logic to handle cases when the field is missing in the input.

**Syntax**

```ts showLineNumbers=false
const optionalToRequired = <FA, FI, FR, TA, TI, TR>(
  from: Schema<FA, FI, FR>,
  to: Schema<TA, TI, TR>,
  options: {
    readonly decode: (o: Option.Option<FA>) => TI,
    readonly encode: (ti: TI) => Option.Option<FA>
  }
): PropertySignature<":", TA, never, "?:", FI, false, FR | TR>
```

In this function:

- `from` specifies the input schema, while `to` specifies the output schema.
- The `decode` and `encode` functions define the transformation behavior:
  - Passing `Option.none()` to `decode` means the field is absent in the input. The function can then return a default value for the output.
  - Returning `Option.none()` in `encode` will omit the field in the output.

**Example** (Setting `null` as Default for Missing Field)

This example demonstrates how to use `optionalToRequired` to provide a `null` default value when the `nullable` field is missing in the input. During encoding, fields with a value of `null` are omitted from the output.

```ts twoslash
import { Option, Schema } from "effect"

const schema = Schema.Struct({
  nullable: Schema.optionalToRequired(
    // Input schema for an optional string
    Schema.String,
    // Output schema allowing null or string
    Schema.NullOr(Schema.String),
    {
      //         ┌─── Option<string>
      //         ▼
      decode: (maybeString) => {
        if (Option.isNone(maybeString)) {
          // If `maybeString` is `None`, the field is absent in the input.
          // Return `null` as the default value for the output.
          return null
        }
        // Extract the value from the `Some` instance
        // and use it as the output.
        return maybeString.value
      },
      // During encoding, treat `null` as an absent field
      //
      //         ┌─── string | null
      //         ▼
      encode: (stringOrNull) =>
        stringOrNull === null
          ? // Omit the field by returning `None`
            Option.none()
          : // Include the field by returning `Some`
            Option.some(stringOrNull)
    }
  )
})

// Decoding examples

const decode = Schema.decodeUnknownSync(schema)

console.log(decode({}))
// Output: { nullable: null }
console.log(decode({ nullable: "a value" }))
// Output: { nullable: 'a value' }

// Encoding examples

const encode = Schema.encodeSync(schema)

console.log(encode({ nullable: "a value" }))
// Output: { nullable: 'a value' }
console.log(encode({ nullable: null }))
// Output: {}
```

You can streamline the decoding and encoding logic using `Option.getOrElse` and `Option.liftPredicate` for concise and readable transformations.

**Example** (Using `Option.getOrElse` and `Option.liftPredicate`)

```ts twoslash
import { Option, Schema } from "effect"

const schema = Schema.Struct({
  nullable: Schema.optionalToRequired(
    Schema.String,
    Schema.NullOr(Schema.String),
    {
      decode: Option.getOrElse(() => null),
      encode: Option.liftPredicate((value) => value !== null)
    }
  )
})
```

### requiredToOptional

The `requiredToOptional` API allows you to transform a required field into an optional one, applying custom logic to determine when the field can be omitted.

**Syntax**

```ts showLineNumbers=false
const requiredToOptional = <FA, FI, FR, TA, TI, TR>(
  from: Schema<FA, FI, FR>,
  to: Schema<TA, TI, TR>,
  options: {
    readonly decode: (fa: FA) => Option.Option<TI>
    readonly encode: (o: Option.Option<TI>) => FA
  }
): PropertySignature<"?:", TA, never, ":", FI, false, FR | TR>
```

With `decode` and `encode` functions, you control the presence or absence of the field:

- `Option.none()` as an argument in `decode` means the field is missing in the input.
- `Option.none()` as a return value from `encode` means the field will be omitted in the output.

**Example** (Handling Empty String as Missing Value)

In this example, the `name` field is required but treated as optional if it is an empty string. During decoding, an empty string in `name` is considered absent, while encoding ensures a value (using an empty string as a default if `name` is absent).

```ts twoslash
import { Option, Schema } from "effect"

const schema = Schema.Struct({
  name: Schema.requiredToOptional(Schema.String, Schema.String, {
    //         ┌─── string
    //         ▼
    decode: (string) => {
      // Treat empty string as a missing value
      if (string === "") {
        // Omit the field by returning `None`
        return Option.none()
      }
      // Otherwise, return the string as is
      return Option.some(string)
    },
    //         ┌─── Option<string>
    //         ▼
    encode: (maybeString) => {
      // Check if the field is missing
      if (Option.isNone(maybeString)) {
        // Provide an empty string as default
        return ""
      }
      // Otherwise, return the string as is
      return maybeString.value
    }
  })
})

// Decoding examples

const decode = Schema.decodeUnknownSync(schema)

console.log(decode({ name: "John" }))
// Output: { name: 'John' }
console.log(decode({ name: "" }))
// Output: {}

// Encoding examples

const encode = Schema.encodeSync(schema)

console.log(encode({ name: "John" }))
// Output: { name: 'John' }
console.log(encode({}))
// Output: { name: '' }
```

You can streamline the decoding and encoding logic using `Option.liftPredicate` and `Option.getOrElse` for concise and readable transformations.

**Example** (Using `Option.liftPredicate` and `Option.getOrElse`)

```ts twoslash
import { Option, Schema } from "effect"

const schema = Schema.Struct({
  name: Schema.requiredToOptional(Schema.String, Schema.String, {
    decode: Option.liftPredicate((s) => s !== ""),
    encode: Option.getOrElse(() => "")
  })
})
```
