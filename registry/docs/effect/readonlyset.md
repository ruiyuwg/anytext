## ReadonlySet

### ReadonlySet

The `Schema.ReadonlySet` function is useful for converting a `ReadonlySet` into a JSON-serializable format.

**Syntax**

```ts showLineNumbers=false
Schema.ReadonlySet(schema: Schema<A, I, R>)
```

##### Decoding

| Input              | Output                                                                              |
| ------------------ | ----------------------------------------------------------------------------------- |
| `ReadonlyArray<I>` | Converted to `ReadonlySet<A>`, where `I` is decoded into `A` using the inner schema |

##### Encoding

| Input            | Output                                                                   |
| ---------------- | ------------------------------------------------------------------------ |
| `ReadonlySet<A>` | `ReadonlyArray<I>`, where `A` is encoded into `I` using the inner schema |

**Example**

```ts twoslash
import { Schema } from "effect"

const schema = Schema.ReadonlySet(Schema.NumberFromString)

//     ┌─── readonly string[]
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── ReadonlySet<number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(["1", "2", "3"]))
// Output: Set(3) { 1, 2, 3 }

// Encoding examples

console.log(encode(new Set([1, 2, 3])))
// Output: [ '1', '2', '3' ]
```

### ReadonlySetFromSelf

The `Schema.ReadonlySetFromSelf` function is designed for scenarios where `ReadonlySet` values are already in the `ReadonlySet` format and need to be decoded or encoded while transforming the inner values according to the provided schema.

**Syntax**

```ts showLineNumbers=false
Schema.ReadonlySetFromSelf(schema: Schema<A, I, R>)
```

##### Decoding

| Input            | Output                                                                              |
| ---------------- | ----------------------------------------------------------------------------------- |
| `ReadonlySet<I>` | Converted to `ReadonlySet<A>`, where `I` is decoded into `A` using the inner schema |

##### Encoding

| Input            | Output                                                                 |
| ---------------- | ---------------------------------------------------------------------- |
| `ReadonlySet<A>` | `ReadonlySet<I>`, where `A` is encoded into `I` using the inner schema |

**Example**

```ts twoslash
import { Schema } from "effect"

const schema = Schema.ReadonlySetFromSelf(Schema.NumberFromString)

//     ┌─── ReadonlySet<string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── ReadonlySet<number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(new Set(["1", "2", "3"])))
// Output: Set(3) { 1, 2, 3 }

// Encoding examples

console.log(encode(new Set([1, 2, 3])))
// Output: Set(3) { '1', '2', '3' }
```
