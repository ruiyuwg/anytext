## Either

### Either

The `Schema.Either` function is useful for converting an `Either` into a JSON-serializable format.

**Syntax**

```ts showLineNumbers=false
Schema.Either(options: {
  left: Schema<LA, LI, LR>,
  right: Schema<RA, RI, RR>
})
```

##### Decoding

| Input                          | Output                                                                                          |
| ------------------------------ | ----------------------------------------------------------------------------------------------- |
| `{ _tag: "Left", left: LI }`   | Converted to `Either.left(LA)`, where `LI` is decoded into `LA` using the inner `left` schema   |
| `{ _tag: "Right", right: RI }` | Converted to `Either.right(RA)`, where `RI` is decoded into `RA` using the inner `right` schema |

##### Encoding

| Input              | Output                                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------- |
| `Either.left(LA)`  | Converted to `{ _tag: "Left", left: LI }`, where `LA` is encoded into `LI` using the inner `left` schema    |
| `Either.right(RA)` | Converted to `{ _tag: "Right", right: RI }`, where `RA` is encoded into `RI` using the inner `right` schema |

**Example**

```ts twoslash
import { Schema, Either } from "effect"

const schema = Schema.Either({
  left: Schema.Trim,
  right: Schema.NumberFromString
})

//     ┌─── EitherEncoded<string, string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Either<number, string>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode({ _tag: "Left", left: " a " }))
// Output: { _id: 'Either', _tag: 'Left', left: 'a' }

console.log(decode({ _tag: "Right", right: "1" }))
// Output: { _id: 'Either', _tag: 'Right', right: 1 }

// Encoding examples

console.log(encode(Either.left("a")))
// Output: { _tag: 'Left', left: 'a' }

console.log(encode(Either.right(1)))
// Output: { _tag: 'Right', right: '1' }
```

### EitherFromSelf

The `Schema.EitherFromSelf` function is designed for scenarios where `Either` values are already in the `Either` format and need to be decoded or encoded while transforming the inner valued according to the provided schemas.

**Syntax**

```ts showLineNumbers=false
Schema.EitherFromSelf(options: {
  left: Schema<LA, LI, LR>,
  right: Schema<RA, RI, RR>
})
```

##### Decoding

| Input              | Output                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `Either.left(LI)`  | Converted to `Either.left(LA)`, where `LI` is decoded into `LA` using the inner `left` schema   |
| `Either.right(RI)` | Converted to `Either.right(RA)`, where `RI` is decoded into `RA` using the inner `right` schema |

##### Encoding

| Input              | Output                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `Either.left(LA)`  | Converted to `Either.left(LI)`, where `LA` is encoded into `LI` using the inner `left` schema   |
| `Either.right(RA)` | Converted to `Either.right(RI)`, where `RA` is encoded into `RI` using the inner `right` schema |

**Example**

```ts twoslash
import { Schema, Either } from "effect"

const schema = Schema.EitherFromSelf({
  left: Schema.Trim,
  right: Schema.NumberFromString
})

//     ┌─── Either<string, string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Either<number, string>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(Either.left(" a ")))
// Output: { _id: 'Either', _tag: 'Left', left: 'a' }

console.log(decode(Either.right("1")))
// Output: { _id: 'Either', _tag: 'Right', right: 1 }

// Encoding examples

console.log(encode(Either.left("a")))
// Output: { _id: 'Either', _tag: 'Left', left: 'a' }

console.log(encode(Either.right(1)))
// Output: { _id: 'Either', _tag: 'Right', right: '1' }
```

### EitherFromUnion

The `Schema.EitherFromUnion` function is designed to decode and encode `Either` values where the `left` and `right` sides are represented as distinct types. This schema enables conversions between raw union types and structured `Either` types.

**Syntax**

```ts showLineNumbers=false
Schema.EitherFromUnion(options: {
  left: Schema<LA, LI, LR>,
  right: Schema<RA, RI, RR>
})
```

##### Decoding

| Input | Output                                                                                          |
| ----- | ----------------------------------------------------------------------------------------------- |
| `LI`  | Converted to `Either.left(LA)`, where `LI` is decoded into `LA` using the inner `left` schema   |
| `RI`  | Converted to `Either.right(RA)`, where `RI` is decoded into `RA` using the inner `right` schema |

##### Encoding

| Input              | Output                                                                            |
| ------------------ | --------------------------------------------------------------------------------- |
| `Either.left(LA)`  | Converted to `LI`, where `LA` is encoded into `LI` using the inner `left` schema  |
| `Either.right(RA)` | Converted to `RI`, where `RA` is encoded into `RI` using the inner `right` schema |

**Example**

```ts twoslash
import { Schema, Either } from "effect"

const schema = Schema.EitherFromUnion({
  left: Schema.Boolean,
  right: Schema.NumberFromString
})

//     ┌─── string | boolean
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Either<number, boolean>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(true))
// Output: { _id: 'Either', _tag: 'Left', left: true }

console.log(decode("1"))
// Output: { _id: 'Either', _tag: 'Right', right: 1 }

// Encoding examples

console.log(encode(Either.left(true)))
// Output: true

console.log(encode(Either.right(1)))
// Output: "1"
```
