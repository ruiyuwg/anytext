## HashMap

### HashMap

The `Schema.HashMap` function is useful for converting a `HashMap` into a JSON-serializable format.

**Syntax**

```ts showLineNumbers=false
Schema.HashMap(options: {
  key: Schema<KA, KI, KR>,
  value: Schema<VA, VI, VR>
})
```

| Input                              | Output                                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `ReadonlyArray<readonly [KI, VI]>` | Converts to `HashMap<KA, VA>`, where `KI` is decoded into `KA` and `VI` is decoded into `VA` using the specified schemas |

#### Encoding

| Input             | Output                                                                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `HashMap<KA, VA>` | Converts to `ReadonlyArray<readonly [KI, VI]>`, where `KA` is encoded into `KI` and `VA` is encoded into `VI` using the specified schemas |

**Example**

```ts twoslash
import { Schema } from "effect"
import { HashMap } from "effect"

const schema = Schema.HashMap({
  key: Schema.String,
  value: Schema.NumberFromString
})

//     ┌─── readonly (readonly [string, string])[]
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── HashMap<string, number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(
  decode([
    ["a", "2"],
    ["b", "2"],
    ["c", "3"]
  ])
)
// Output: { _id: 'HashMap', values: [ [ 'a', 2 ], [ 'c', 3 ], [ 'b', 2 ] ] }

// Encoding examples

console.log(
  encode(
    HashMap.fromIterable([
      ["a", 1],
      ["b", 2],
      ["c", 3]
    ])
  )
)
// Output: [ [ 'a', '1' ], [ 'c', '3' ], [ 'b', '2' ] ]
```

### HashMapFromSelf

The `Schema.HashMapFromSelf` function is designed for scenarios where `HashMap` values are already in the `HashMap` format and need to be decoded or encoded while transforming the inner values according to the provided schemas.

**Syntax**

```ts showLineNumbers=false
Schema.HashMapFromSelf(options: {
  key: Schema<KA, KI, KR>,
  value: Schema<VA, VI, VR>
})
```

#### Decoding

| Input             | Output                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `HashMap<KI, VI>` | Converts to `HashMap<KA, VA>`, where `KI` is decoded into `KA` and `VI` is decoded into `VA` using the specified schemas |

#### Encoding

| Input             | Output                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `HashMap<KA, VA>` | Converts to `HashMap<KI, VI>`, where `KA` is encoded into `KI` and `VA` is encoded into `VI` using the specified schemas |

**Example**

```ts twoslash
import { Schema } from "effect"
import { HashMap } from "effect"

const schema = Schema.HashMapFromSelf({
  key: Schema.String,
  value: Schema.NumberFromString
})

//     ┌─── HashMap<string, string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── HashMap<string, number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(
  decode(
    HashMap.fromIterable([
      ["a", "2"],
      ["b", "2"],
      ["c", "3"]
    ])
  )
)
// Output: { _id: 'HashMap', values: [ [ 'a', 2 ], [ 'c', 3 ], [ 'b', 2 ] ] }

// Encoding examples

console.log(
  encode(
    HashMap.fromIterable([
      ["a", 1],
      ["b", 2],
      ["c", 3]
    ])
  )
)
// Output: { _id: 'HashMap', values: [ [ 'a', '1' ], [ 'c', '3' ], [ 'b', '2' ] ] }
```
