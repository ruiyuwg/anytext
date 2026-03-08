## Option

### Option

The `Schema.Option` function is useful for converting an `Option` into a JSON-serializable format.

**Syntax**

```ts showLineNumbers=false
Schema.Option(schema: Schema<A, I, R>)
```

##### Decoding

| Input                        | Output                                                                              |
| ---------------------------- | ----------------------------------------------------------------------------------- |
| `{ _tag: "None" }`           | Converted to `Option.none()`                                                        |
| `{ _tag: "Some", value: I }` | Converted to `Option.some(a)`, where `I` is decoded into `A` using the inner schema |

##### Encoding

| Input            | Output                                                                                          |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `Option.none()`  | Converted to `{ _tag: "None" }`                                                                 |
| `Option.some(A)` | Converted to `{ _tag: "Some", value: I }`, where `A` is encoded into `I` using the inner schema |

**Example**

```ts twoslash
import { Schema } from "effect"
import { Option } from "effect"

const schema = Schema.Option(Schema.NumberFromString)

//     ┌─── OptionEncoded<string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Option<number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode({ _tag: "None" }))
// Output: { _id: 'Option', _tag: 'None' }

console.log(decode({ _tag: "Some", value: "1" }))
// Output: { _id: 'Option', _tag: 'Some', value: 1 }

// Encoding examples

console.log(encode(Option.none()))
// Output: { _tag: 'None' }

console.log(encode(Option.some(1)))
// Output: { _tag: 'Some', value: '1' }
```

### OptionFromSelf

The `Schema.OptionFromSelf` function is designed for scenarios where `Option` values are already in the `Option` format and need to be decoded or encoded while transforming the inner value according to the provided schema.

**Syntax**

```ts showLineNumbers=false
Schema.OptionFromSelf(schema: Schema<A, I, R>)
```

#### Decoding

| Input            | Output                                                                              |
| ---------------- | ----------------------------------------------------------------------------------- |
| `Option.none()`  | Remains as `Option.none()`                                                          |
| `Option.some(I)` | Converted to `Option.some(A)`, where `I` is decoded into `A` using the inner schema |

#### Encoding

| Input            | Output                                                                              |
| ---------------- | ----------------------------------------------------------------------------------- |
| `Option.none()`  | Remains as `Option.none()`                                                          |
| `Option.some(A)` | Converted to `Option.some(I)`, where `A` is encoded into `I` using the inner schema |

**Example**

```ts twoslash
import { Schema } from "effect"
import { Option } from "effect"

const schema = Schema.OptionFromSelf(Schema.NumberFromString)

//     ┌─── Option<string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Option<number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(Option.none()))
// Output: { _id: 'Option', _tag: 'None' }

console.log(decode(Option.some("1")))
// Output: { _id: 'Option', _tag: 'Some', value: 1 }

// Encoding examples

console.log(encode(Option.none()))
// Output: { _id: 'Option', _tag: 'None' }

console.log(encode(Option.some(1)))
// Output: { _id: 'Option', _tag: 'Some', value: '1' }
```

### OptionFromUndefinedOr

The `Schema.OptionFromUndefinedOr` function handles cases where `undefined` is treated as `Option.none()`, and all other values are interpreted as `Option.some()` based on the provided schema.

**Syntax**

```ts showLineNumbers=false
Schema.OptionFromUndefinedOr(schema: Schema<A, I, R>)
```

#### Decoding

| Input       | Output                                                                              |
| ----------- | ----------------------------------------------------------------------------------- |
| `undefined` | Converted to `Option.none()`                                                        |
| `I`         | Converted to `Option.some(A)`, where `I` is decoded into `A` using the inner schema |

#### Encoding

| Input            | Output                                                                 |
| ---------------- | ---------------------------------------------------------------------- |
| `Option.none()`  | Converted to `undefined`                                               |
| `Option.some(A)` | Converted to `I`, where `A` is encoded into `I` using the inner schema |

**Example**

```ts twoslash
import { Schema } from "effect"
import { Option } from "effect"

const schema = Schema.OptionFromUndefinedOr(Schema.NumberFromString)

//     ┌─── string | undefined
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Option<number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(undefined))
// Output: { _id: 'Option', _tag: 'None' }

console.log(decode("1"))
// Output: { _id: 'Option', _tag: 'Some', value: 1 }

// Encoding examples

console.log(encode(Option.none()))
// Output: undefined

console.log(encode(Option.some(1)))
// Output: "1"
```

### OptionFromNullOr

The `Schema.OptionFromUndefinedOr` function handles cases where `null` is treated as `Option.none()`, and all other values are interpreted as `Option.some()` based on the provided schema.

**Syntax**

```ts showLineNumbers=false
Schema.OptionFromNullOr(schema: Schema<A, I, R>)
```

#### Decoding

| Input  | Output                                                                              |
| ------ | ----------------------------------------------------------------------------------- |
| `null` | Converted to `Option.none()`                                                        |
| `I`    | Converted to `Option.some(A)`, where `I` is decoded into `A` using the inner schema |

#### Encoding

| Input            | Output                                                                 |
| ---------------- | ---------------------------------------------------------------------- |
| `Option.none()`  | Converted to `null`                                                    |
| `Option.some(A)` | Converted to `I`, where `A` is encoded into `I` using the inner schema |

**Example**

```ts twoslash
import { Schema } from "effect"
import { Option } from "effect"

const schema = Schema.OptionFromNullOr(Schema.NumberFromString)

//     ┌─── string | null
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Option<number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(null))
// Output: { _id: 'Option', _tag: 'None' }

console.log(decode("1"))
// Output: { _id: 'Option', _tag: 'Some', value: 1 }

// Encoding examples

console.log(encode(Option.none()))
// Output: null
console.log(encode(Option.some(1)))
// Output: "1"
```

### OptionFromNullishOr

The `Schema.OptionFromNullishOr` function handles cases where `null` or `undefined` are treated as `Option.none()`, and all other values are interpreted as `Option.some()` based on the provided schema. Additionally, it allows customization of how `Option.none()` is encoded (`null` or `undefined`).

**Syntax**

```ts showLineNumbers=false
Schema.OptionFromNullishOr(
  schema: Schema<A, I, R>,
  onNoneEncoding: null | undefined
)
```

#### Decoding

| Input       | Output                                                                              |
| ----------- | ----------------------------------------------------------------------------------- |
| `undefined` | Converted to `Option.none()`                                                        |
| `null`      | Converted to `Option.none()`                                                        |
| `I`         | Converted to `Option.some(A)`, where `I` is decoded into `A` using the inner schema |

#### Encoding

| Input            | Output                                                                     |
| ---------------- | -------------------------------------------------------------------------- |
| `Option.none()`  | Converted to `undefined` or `null` based on user choice (`onNoneEncoding`) |
| `Option.some(A)` | Converted to `I`, where `A` is encoded into `I` using the inner schema     |

**Example**

```ts twoslash
import { Schema } from "effect"
import { Option } from "effect"

const schema = Schema.OptionFromNullishOr(
  Schema.NumberFromString,
  undefined // Encode Option.none() as undefined
)

//     ┌─── string | null | undefined
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Option<number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(null))
// Output: { _id: 'Option', _tag: 'None' }

console.log(decode(undefined))
// Output: { _id: 'Option', _tag: 'None' }

console.log(decode("1"))
// Output: { _id: 'Option', _tag: 'Some', value: 1 }

// Encoding examples

console.log(encode(Option.none()))
// Output: undefined

console.log(encode(Option.some(1)))
// Output: "1"
```

### OptionFromNonEmptyTrimmedString

The `Schema.OptionFromNonEmptyTrimmedString` schema is designed for handling strings where trimmed empty strings are treated as `Option.none()`, and all other strings are converted to `Option.some()`.

#### Decoding

| Input       | Output                                                  |
| ----------- | ------------------------------------------------------- |
| `s: string` | Converted to `Option.some(s)`, if `s.trim().length > 0` |
|             | Converted to `Option.none()` otherwise                  |

#### Encoding

| Input                    | Output            |
| ------------------------ | ----------------- |
| `Option.none()`          | Converted to `""` |
| `Option.some(s: string)` | Converted to `s`  |

**Example**

```ts twoslash
import { Schema, Option } from "effect"

//     ┌─── string
//     ▼
type Encoded = typeof Schema.OptionFromNonEmptyTrimmedString

//     ┌─── Option<string>
//     ▼
type Type = typeof Schema.OptionFromNonEmptyTrimmedString

const decode = Schema.decodeUnknownSync(
  Schema.OptionFromNonEmptyTrimmedString
)
const encode = Schema.encodeSync(Schema.OptionFromNonEmptyTrimmedString)

// Decoding examples

console.log(decode(""))
// Output: { _id: 'Option', _tag: 'None' }

console.log(decode(" a "))
// Output: { _id: 'Option', _tag: 'Some', value: 'a' }

console.log(decode("a"))
// Output: { _id: 'Option', _tag: 'Some', value: 'a' }

// Encoding examples

console.log(encode(Option.none()))
// Output: ""

console.log(encode(Option.some("example")))
// Output: "example"
```
