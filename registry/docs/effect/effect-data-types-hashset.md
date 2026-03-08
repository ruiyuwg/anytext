## HashSet

### HashSet

The `Schema.HashSet` function provides a way to map between `HashSet` and an array representation, allowing for JSON serialization and deserialization.

**Syntax**

```ts showLineNumbers=false
Schema.HashSet(schema: Schema<A, I, R>)
```

#### Decoding

| Input              | Output                                                                                              |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| `ReadonlyArray<I>` | Converts to `HashSet<A>`, where each element in the array is decoded into type `A` using the schema |

#### Encoding

| Input        | Output                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| `HashSet<A>` | Converts to `ReadonlyArray<I>`, where each element in the `HashSet` is encoded into type `I` using the schema |

**Example**

```ts twoslash
import { Schema } from "effect"
import { HashSet } from "effect"

const schema = Schema.HashSet(Schema.NumberFromString)

//     ┌─── readonly string[]
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── HashSet<number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(["1", "2", "3"]))
// Output: { _id: 'HashSet', values: [ 1, 2, 3 ] }

// Encoding examples

console.log(encode(HashSet.fromIterable([1, 2, 3])))
// Output: [ '1', '2', '3' ]
```

### HashSetFromSelf

The `Schema.HashSetFromSelf` function is designed for scenarios where `HashSet` values are already in the `HashSet` format and need to be decoded or encoded while transforming the inner values according to the provided schema.

**Syntax**

```ts showLineNumbers=false
Schema.HashSetFromSelf(schema: Schema<A, I, R>)
```

#### Decoding

| Input        | Output                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------ |
| `HashSet<I>` | Converts to `HashSet<A>`, decoding each element from type `I` to type `A` using the schema |

#### Encoding

| Input        | Output                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------ |
| `HashSet<A>` | Converts to `HashSet<I>`, encoding each element from type `A` to type `I` using the schema |

**Example**

```ts twoslash
import { Schema } from "effect"
import { HashSet } from "effect"

const schema = Schema.HashSetFromSelf(Schema.NumberFromString)

//     ┌─── HashSet<string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── HashSet<number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(HashSet.fromIterable(["1", "2", "3"])))
// Output: { _id: 'HashSet', values: [ 1, 2, 3 ] }

// Encoding examples

console.log(encode(HashSet.fromIterable([1, 2, 3])))
// Output: { _id: 'HashSet', values: [ '1', '3', '2' ] }
```
