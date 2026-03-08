## ReadonlyMap

The `Schema.ReadonlyMap` function is useful for converting a `ReadonlyMap` into a JSON-serializable format.

### ReadonlyMap

**Syntax**

```ts showLineNumbers=false
Schema.ReadonlyMap(options: {
  key: Schema<KA, KI, KR>,
  value: Schema<VA, VI, VR>
})
```

##### Decoding

| Input                              | Output                                                                                                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ReadonlyArray<readonly [KI, VI]>` | Converted to `ReadonlyMap<KA, VA>`, where `KI` is decoded into `KA` using the inner `key` schema and `VI` is decoded into `VA` using the inner `value` schema |

##### Encoding

| Input                 | Output                                                                                                                                                                     |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ReadonlyMap<KA, VA>` | Converted to `ReadonlyArray<readonly [KI, VI]>`, where `KA` is decoded into `KI` using the inner `key` schema and `VA` is decoded into `VI` using the inner `value` schema |

**Example**

```ts twoslash
import { Schema } from "effect"

const schema = Schema.ReadonlyMap({
  key: Schema.String,
  value: Schema.NumberFromString
})

//     ┌─── readonly (readonly [string, string])[]
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── ReadonlyMap<string, number>
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
// Output: Map(3) { 'a' => 2, 'b' => 2, 'c' => 3 }

// Encoding examples

console.log(
  encode(
    new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3]
    ])
  )
)
// Output: [ [ 'a', '1' ], [ 'b', '2' ], [ 'c', '3' ] ]
```

### ReadonlyMapFromSelf

The `Schema.ReadonlyMapFromSelf` function is designed for scenarios where `ReadonlyMap` values are already in the `ReadonlyMap` format and need to be decoded or encoded while transforming the inner values according to the provided schemas.

**Syntax**

```ts showLineNumbers=false
Schema.ReadonlyMapFromSelf(options: {
  key: Schema<KA, KI, KR>,
  value: Schema<VA, VI, VR>
})
```

##### Decoding

| Input                 | Output                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ReadonlyMap<KI, VI>` | Converted to `ReadonlyMap<KA, VA>`, where `KI` is decoded into `KA` using the inner `key` schema and `VI` is decoded into `VA` using the inner `value` schema |

##### Encoding

| Input                 | Output                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ReadonlyMap<KA, VA>` | Converted to `ReadonlyMap<KI, VI>`, where `KA` is decoded into `KI` using the inner `key` schema and `VA` is decoded into `VI` using the inner `value` schema |

**Example**

```ts twoslash
import { Schema } from "effect"

const schema = Schema.ReadonlyMapFromSelf({
  key: Schema.String,
  value: Schema.NumberFromString
})

//     ┌─── ReadonlyMap<string, string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── ReadonlyMap<string, number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(
  decode(
    new Map([
      ["a", "2"],
      ["b", "2"],
      ["c", "3"]
    ])
  )
)
// Output: Map(3) { 'a' => 2, 'b' => 2, 'c' => 3 }

// Encoding examples

console.log(
  encode(
    new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3]
    ])
  )
)
// Output: Map(3) { 'a' => '1', 'b' => '2', 'c' => '3' }
```

### ReadonlyMapFromRecord

The `Schema.ReadonlyMapFromRecord` function is a utility to transform a `ReadonlyMap` into an object format, where keys are strings and values are serializable, and vice versa.

**Syntax**

```ts showLineNumbers=false
Schema.ReadonlyMapFromRecord({
  key: Schema<KA, KI, KR>,
  value: Schema<VA, VI, VR>
})
```

#### Decoding

| Input                          | Output                                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `{ readonly [x: string]: VI }` | Converts to `ReadonlyMap<KA, VA>`, where `x` is decoded into `KA` using the `key` schema and `VI` into `VA` using the `value` schema |

#### Encoding

| Input                 | Output                                                                                                                                        |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `ReadonlyMap<KA, VA>` | Converts to `{ readonly [x: string]: VI }`, where `KA` is encoded into `x` using the `key` schema and `VA` into `VI` using the `value` schema |

**Example**

```ts twoslash
import { Schema } from "effect"

const schema = Schema.ReadonlyMapFromRecord({
  key: Schema.NumberFromString,
  value: Schema.NumberFromString
})

//     ┌─── { readonly [x: string]: string; }
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── ReadonlyMap<number, number>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(
  decode({
    "1": "4",
    "2": "5",
    "3": "6"
  })
)
// Output: Map(3) { 1 => 4, 2 => 5, 3 => 6 }

// Encoding examples

console.log(
  encode(
    new Map([
      [1, 4],
      [2, 5],
      [3, 6]
    ])
  )
)
// Output: { '1': '4', '2': '5', '3': '6' }
```
