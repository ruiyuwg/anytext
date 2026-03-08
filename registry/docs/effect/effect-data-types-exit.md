## Exit

### Exit

The `Schema.Exit` function is useful for converting an `Exit` into a JSON-serializable format.

**Syntax**

```ts showLineNumbers=false
Schema.Exit(options: {
  failure: Schema<FA, FI, FR>,
  success: Schema<SA, SI, SR>,
  defect: Schema<DA, DI, DR>
})
```

##### Decoding

| Input                                              | Output                                                                                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{ _tag: "Failure", cause: CauseEncoded<FI, DI> }` | Converted to `Exit.failCause(Cause<FA>)`, where `CauseEncoded<FI, DI>` is decoded into `Cause<FA>` using the inner `failure` and `defect` schemas |
| `{ _tag: "Success", value: SI }`                   | Converted to `Exit.succeed(SA)`, where `SI` is decoded into `SA` using the inner `success` schema                                                 |

##### Encoding

| Input                       | Output                                                                                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Exit.failCause(Cause<FA>)` | Converted to `{ _tag: "Failure", cause: CauseEncoded<FI, DI> }`, where `Cause<FA>` is encoded into `CauseEncoded<FI, DI>` using the inner `failure` and `defect` schemas |
| `Exit.succeed(SA)`          | Converted to `{ _tag: "Success", value: SI }`, where `SA` is encoded into `SI` using the inner `success` schema                                                          |

**Example**

```ts twoslash
import { Schema, Exit } from "effect"

const schema = Schema.Exit({
  failure: Schema.String,
  success: Schema.NumberFromString,
  defect: Schema.String
})

//     ┌─── ExitEncoded<string, string, string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Exit<number, string>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(
  decode({ _tag: "Failure", cause: { _tag: "Fail", error: "a" } })
)
/*
Output:
{
  _id: 'Exit',
  _tag: 'Failure',
  cause: { _id: 'Cause', _tag: 'Fail', failure: 'a' }
}
*/

console.log(decode({ _tag: "Success", value: "1" }))
/*
Output:
{ _id: 'Exit', _tag: 'Success', value: 1 }
*/

// Encoding examples

console.log(encode(Exit.fail("a")))
/*
Output:
{ _tag: 'Failure', cause: { _tag: 'Fail', error: 'a' } }
 */

console.log(encode(Exit.succeed(1)))
/*
Output:
{ _tag: 'Success', value: '1' }
*/
```

### Handling Defects in Serialization

Effect provides a built-in `Defect` schema to handle JavaScript errors (`Error` instances) and other types of unrecoverable defects.

- When decoding, it reconstructs `Error` instances if the input has a `message` and optionally a `name` and `stack`.
- When encoding, it converts `Error` instances into plain objects that retain only essential properties.

This is useful when transmitting errors across network requests or logging systems where `Error` objects do not serialize by default.

**Example** (Encoding and Decoding Defects)

```ts twoslash
import { Schema, Exit } from "effect"

const schema = Schema.Exit({
  failure: Schema.String,
  success: Schema.NumberFromString,
  defect: Schema.Defect
})

const decode = Schema.decodeSync(schema)
const encode = Schema.encodeSync(schema)

console.log(encode(Exit.die(new Error("Message"))))
/*
Output:
{
  _tag: 'Failure',
  cause: { _tag: 'Die', defect: { name: 'Error', message: 'Message' } }
}
*/

console.log(encode(Exit.fail("a")))

console.log(
  decode({
    _tag: "Failure",
    cause: { _tag: "Die", defect: { name: "Error", message: "Message" } }
  })
)
/*
Output:
{
  _id: 'Exit',
  _tag: 'Failure',
  cause: {
    _id: 'Cause',
    _tag: 'Die',
    defect: [Error: Message] { [cause]: [Object] }
  }
}
*/
```

### ExitFromSelf

The `Schema.ExitFromSelf` function is designed for scenarios where `Exit` values are already in the `Exit` format and need to be decoded or encoded while transforming the inner valued according to the provided schemas.

**Syntax**

```ts showLineNumbers=false
Schema.ExitFromSelf(options: {
  failure: Schema<FA, FI, FR>,
  success: Schema<SA, SI, SR>,
  defect: Schema<DA, DI, DR>
})
```

##### Decoding

| Input                       | Output                                                                                                                                 |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `Exit.failCause(Cause<FI>)` | Converted to `Exit.failCause(Cause<FA>)`, where `Cause<FI>` is decoded into `Cause<FA>` using the inner `failure` and `defect` schemas |
| `Exit.succeed(SI)`          | Converted to `Exit.succeed(SA)`, where `SI` is decoded into `SA` using the inner `success` schema                                      |

##### Encoding

| Input                       | Output                                                                                                                                 |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `Exit.failCause(Cause<FA>)` | Converted to `Exit.failCause(Cause<FI>)`, where `Cause<FA>` is decoded into `Cause<FI>` using the inner `failure` and `defect` schemas |
| `Exit.succeed(SA)`          | Converted to `Exit.succeed(SI)`, where `SA` is encoded into `SI` using the inner `success` schema                                      |

**Example**

```ts twoslash
import { Schema, Exit } from "effect"

const schema = Schema.ExitFromSelf({
  failure: Schema.String,
  success: Schema.NumberFromString,
  defect: Schema.String
})

//     ┌─── Exit<string, string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Exit<number, string>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)
const encode = Schema.encodeSync(schema)

// Decoding examples

console.log(decode(Exit.fail("a")))
/*
Output:
{
  _id: 'Exit',
  _tag: 'Failure',
  cause: { _id: 'Cause', _tag: 'Fail', failure: 'a' }
}
*/

console.log(decode(Exit.succeed("1")))
/*
Output:
{ _id: 'Exit', _tag: 'Success', value: 1 }
*/

// Encoding examples

console.log(encode(Exit.fail("a")))
/*
Output:
{
  _id: 'Exit',
  _tag: 'Failure',
  cause: { _id: 'Cause', _tag: 'Fail', failure: 'a' }
}
*/

console.log(encode(Exit.succeed(1)))
/*
Output:
{ _id: 'Exit', _tag: 'Success', value: '1' }
*/
```
