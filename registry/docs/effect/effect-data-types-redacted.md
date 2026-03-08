## Redacted

### Redacted

The `Schema.Redacted` function is specifically designed to handle sensitive information by converting a `string` into a [Redacted](/docs/data-types/redacted/) object.
This transformation ensures that the sensitive data is not exposed in the application's output.

**Example** (Basic Redacted Schema)

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Redacted(Schema.String)

//     ┌─── string
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Redacted<string>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)

// Decoding examples

console.log(decode("keep it secret, keep it safe"))
// Output: <redacted>
```

It's important to note that when successfully decoding a `Redacted`, the output is intentionally obscured (`<redacted>`) to prevent the actual secret from being revealed in logs or console outputs.

When composing the `Redacted` schema with other schemas, care must be
taken as decoding or encoding errors could potentially expose sensitive
information.

**Example** (Exposure Risks During Errors)

In the example below, if the input string does not meet the criteria (e.g., contains spaces), the error message generated might inadvertently expose sensitive information included in the input.

```ts twoslash
import { Schema } from "effect"
import { Redacted } from "effect"

const schema = Schema.Trimmed.pipe(
  Schema.compose(Schema.Redacted(Schema.String))
)

console.log(Schema.decodeUnknownEither(schema)(" SECRET"))
/*
{
  _id: 'Either',
  _tag: 'Left',
  left: {
    _id: 'ParseError',
    message: '(Trimmed <-> (string <-> Redacted(<redacted>)))\n' +
      '└─ Encoded side transformation failure\n' +
      '   └─ Trimmed\n' +
      '      └─ Predicate refinement failure\n' +
      '         └─ Expected Trimmed (a string with no leading or trailing whitespace), actual " SECRET"'
  }
}
*/

console.log(Schema.encodeEither(schema)(Redacted.make(" SECRET")))
/*
{
  _id: 'Either',
  _tag: 'Left',
  left: {
    _id: 'ParseError',
    message: '(Trimmed <-> (string <-> Redacted(<redacted>)))\n' +
      '└─ Encoded side transformation failure\n' +
      '   └─ Trimmed\n' +
      '      └─ Predicate refinement failure\n' +
      '         └─ Expected Trimmed (a string with no leading or trailing whitespace), actual " SECRET"'
  }
}
*/
```

#### Mitigating Exposure Risks

To reduce the risk of sensitive information leakage in error messages, you can customize the error messages to obscure sensitive details:

**Example** (Customizing Error Messages)

```ts twoslash
import { Schema } from "effect"
import { Redacted } from "effect"

const schema = Schema.Trimmed.annotations({
  message: () => "Expected Trimmed, actual <redacted>"
}).pipe(Schema.compose(Schema.Redacted(Schema.String)))

console.log(Schema.decodeUnknownEither(schema)(" SECRET"))
/*
{
  _id: 'Either',
  _tag: 'Left',
  left: {
    _id: 'ParseError',
    message: '(Trimmed <-> (string <-> Redacted(<redacted>)))\n' +
      '└─ Encoded side transformation failure\n' +
      '   └─ Expected Trimmed, actual <redacted>'
  }
}
*/

console.log(Schema.encodeEither(schema)(Redacted.make(" SECRET")))
/*
{
  _id: 'Either',
  _tag: 'Left',
  left: {
    _id: 'ParseError',
    message: '(Trimmed <-> (string <-> Redacted(<redacted>)))\n' +
      '└─ Encoded side transformation failure\n' +
      '   └─ Expected Trimmed, actual <redacted>'
  }
}
*/
```

### RedactedFromSelf

The `Schema.RedactedFromSelf` schema is designed to validate that a given value conforms to the `Redacted` type from the `effect` library.

**Example**

```ts twoslash
import { Schema } from "effect"
import { Redacted } from "effect"

const schema = Schema.RedactedFromSelf(Schema.String)

//     ┌─── Redacted<string>
//     ▼
type Encoded = typeof schema.Encoded

//     ┌─── Redacted<string>
//     ▼
type Type = typeof schema.Type

const decode = Schema.decodeUnknownSync(schema)

// Decoding examples

console.log(decode(Redacted.make("mysecret")))
// Output: <redacted>

console.log(decode(null))
/*
throws:
ParseError: Expected Redacted(<redacted>), actual null
*/
```

It's important to note that when successfully decoding a `Redacted`, the output is intentionally obscured (`<redacted>`) to prevent the actual secret from being revealed in logs or console outputs.
