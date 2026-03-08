## Duration

The `Duration` schema family enables the transformation and validation of duration values across various formats, including `hrtime`, milliseconds, and nanoseconds.

### Duration

Converts an hrtime(i.e. `[seconds: number, nanos: number]`) into a `Duration`.

**Example**

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Duration

//     ┌─── readonly [seconds: number, nanos: number]
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Duration
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)

// Decoding examples

console.log(decode([0, 0]))
// Output: { _id: 'Duration', _tag: 'Millis', millis: 0 }

console.log(decode([5000, 0]))
// Output: { _id: 'Duration', _tag: 'Nanos', hrtime: [ 5000, 0 ] }
```

### DurationFromSelf

The `DurationFromSelf` schema is designed to validate that a given value conforms to the `Duration` type.

**Example**

```ts twoslash
import { Schema, Duration } from "effect"

const schema = Schema.DurationFromSelf

//     ┌─── Duration
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Duration
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)

// Decoding examples

console.log(decode(Duration.seconds(2)))
// Output: { _id: 'Duration', _tag: 'Millis', millis: 2000 }

console.log(decode(null))
/*
throws:
ParseError: Expected DurationFromSelf, actual null
*/
```

### DurationFromMillis

Converts a `number` into a `Duration` where the number represents the number of milliseconds.

**Example**

```ts twoslash
import { Schema } from "effect"

const schema = Schema.DurationFromMillis

//     ┌─── number
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Duration
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)

// Decoding examples

console.log(decode(0))
// Output: { _id: 'Duration', _tag: 'Millis', millis: 0 }

console.log(decode(5000))
// Output: { _id: 'Duration', _tag: 'Millis', millis: 5000 }
```

### DurationFromNanos

Converts a `BigInt` into a `Duration` where the number represents the number of nanoseconds.

**Example**

```ts twoslash
import { Schema } from "effect"

const schema = Schema.DurationFromNanos

//     ┌─── bigint
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Duration
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)

// Decoding examples

console.log(decode(0n))
// Output: { _id: 'Duration', _tag: 'Millis', millis: 0 }

console.log(decode(5000000000n))
// Output: { _id: 'Duration', _tag: 'Nanos', hrtime: [ 5, 0 ] }
```

### clampDuration

Clamps a `Duration` between a minimum and a maximum value.

**Example**

```ts twoslash
import { Schema, Duration } from "effect"

const schema = Schema.DurationFromSelf.pipe(
  Schema.clampDuration("5 seconds", "10 seconds")
)

//     ┌─── Duration
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Duration
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)

// Decoding examples

console.log(decode(Duration.decode("2 seconds")))
// Output: { _id: 'Duration', _tag: 'Millis', millis: 5000 }

console.log(decode(Duration.decode("6 seconds")))
// Output: { _id: 'Duration', _tag: 'Millis', millis: 6000 }

console.log(decode(Duration.decode("11 seconds")))
// Output: { _id: 'Duration', _tag: 'Millis', millis: 10000 }
```
