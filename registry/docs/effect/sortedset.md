## SortedSet

### SortedSet

The `Schema.SortedSet` function provides a way to map between `SortedSet` and an array representation, allowing for JSON serialization and deserialization.

**Syntax**

```ts showLineNumbers=false
Schema.SortedSet(schema: Schema<A, I, R>, order: Order<A>)
```

#### Decoding

| Input              | Output                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| `ReadonlyArray<I>` | Converts to `SortedSet<A>`, where each element in the array is decoded into type `A` using the schema |

#### Encoding

| Input          | Output                                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| `SortedSet<A>` | Converts to `ReadonlyArray<I>`, where each element in the `SortedSet` is encoded into type `I` using the schema |

**Example**

```ts twoslash
import { Schema } from "effect"
import { Number, SortedSet } from "effect"

const schema = Schema.SortedSet(Schema.NumberFromString, Number.Order)

//     ┌─── readonly string[]
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── SortedSet<number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(["1", "2", "3"]))
// Output: { _id: 'SortedSet', values: [ 1, 2, 3 ] }

// Encoding examples

console.log(encode(SortedSet.fromIterable(Number.Order)([1, 2, 3])))
// Output: [ '1', '2', '3' ]
```

### SortedSetFromSelf

The `Schema.SortedSetFromSelf` function is designed for scenarios where `SortedSet` values are already in the `SortedSet` format and need to be decoded or encoded while transforming the inner values according to the provided schema.

**Syntax**

```ts showLineNumbers=false
Schema.SortedSetFromSelf(
  schema: Schema<A, I, R>,
  decodeOrder: Order<A>,
  encodeOrder: Order<I>
)
```

#### Decoding

| Input          | Output                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------- |
| `SortedSet<I>` | Converts to `SortedSet<A>`, decoding each element from type `I` to type `A` using the schema |

#### Encoding

| Input          | Output                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------- |
| `SortedSet<A>` | Converts to `SortedSet<I>`, encoding each element from type `A` to type `I` using the schema |

**Example**

```ts twoslash
import { Schema } from "effect"
import { Number, SortedSet, String } from "effect"

const schema = Schema.SortedSetFromSelf(
  Schema.NumberFromString,
  Number.Order,
  String.Order
)

//     ┌─── SortedSet<string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── SortedSet<number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(SortedSet.fromIterable(String.Order)(["1", "2", "3"])))
// Output: { _id: 'SortedSet', values: [ 1, 2, 3 ] }

// Encoding examples

console.log(encode(SortedSet.fromIterable(Number.Order)([1, 2, 3])))
// Output: { _id: 'SortedSet', values: [ '1', '2', '3' ] }
```
