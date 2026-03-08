## Template literals

In TypeScript, [template literals types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html) allow you to embed expressions within string literals.
The `Schema.TemplateLiteral` constructor allows you to create a schema for these template literal types.

**Example** (Defining Template Literals)

```ts twoslash
import { Schema } from "effect"

// This creates a schema for: `a${string}`
//
//      ┌─── TemplateLiteral<`a${string}`>
//      ▼
const schema1 = Schema.TemplateLiteral("a", Schema.String)

// This creates a schema for:
// `https://${string}.com` | `https://${string}.net`
const schema2 = Schema.TemplateLiteral(
  "https://",
  Schema.String,
  ".",
  Schema.Literal("com", "net")
)
```

**Example** (From [template literals types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html) Documentation)

Let's look at a more complex example. Suppose you have two sets of locale IDs for emails and footers.
You can use the `Schema.TemplateLiteral` constructor to create a schema that combines these IDs:

```ts twoslash
import { Schema } from "effect"

const EmailLocaleIDs = Schema.Literal("welcome_email", "email_heading")
const FooterLocaleIDs = Schema.Literal("footer_title", "footer_sendoff")

// This creates a schema for:
// "welcome_email_id" | "email_heading_id" |
// "footer_title_id" | "footer_sendoff_id"
const schema = Schema.TemplateLiteral(
  Schema.Union(EmailLocaleIDs, FooterLocaleIDs),
  "_id"
)
```

### Supported Span Types

The `Schema.TemplateLiteral` constructor supports the following types of spans:

- `Schema.String`
- `Schema.Number`
- Literals: `string | number | boolean | null | bigint`. These can be either wrapped by `Schema.Literal` or used directly
- Unions of the above types
- Brands of the above types

**Example** (Using a Branded String in a Template Literal)

```ts twoslash
import { Schema } from "effect"

// Create a branded string schema for an authorization token
const AuthorizationToken = Schema.String.pipe(
  Schema.brand("AuthorizationToken")
)

// This creates a schema for:
// `Bearer ${string & Brand<"AuthorizationToken">}`
const schema = Schema.TemplateLiteral("Bearer ", AuthorizationToken)
```

### TemplateLiteralParser

The `Schema.TemplateLiteral` constructor, while useful as a simple validator, only verifies that an input conforms to a specific string pattern by converting template literal definitions into regular expressions. Similarly, [`Schema.pattern`](/docs/schema/filters/#string-filters) employs regular expressions directly for the same purpose. Post-validation, both methods require additional manual parsing to convert the validated string into a usable data format.

To address these limitations and eliminate the need for manual post-validation parsing, the `Schema.TemplateLiteralParser` API has been developed. It not only validates the input format but also automatically parses it into a more structured and type-safe output, specifically into a **tuple** format.

The `Schema.TemplateLiteralParser` constructor supports the same types of [spans](#supported-span-types) as `Schema.TemplateLiteral`.

**Example** (Using TemplateLiteralParser for Parsing and Encoding)

```ts twoslash
import { Schema } from "effect"

//      ┌─── Schema<readonly [number, "a", string], `${string}a${string}`>
//      ▼
const schema = Schema.TemplateLiteralParser(
  Schema.NumberFromString,
  "a",
  Schema.NonEmptyString
)

console.log(Schema.decodeSync(schema)("100afoo"))
// Output: [ 100, 'a', 'foo' ]

console.log(Schema.encodeSync(schema)([100, "a", "foo"]))
// Output: '100afoo'
```

## Native enums

The Schema module provides support for native TypeScript enums. You can define a schema for an enum using `Schema.Enums`, allowing you to validate values that belong to the enum.

**Example** (Defining a Schema for an Enum)

```ts twoslash
import { Schema } from "effect"

enum Fruits {
  Apple,
  Banana
}

//      ┌─── Enums<typeof Fruits>
//      ▼
const schema = Schema.Enums(Fruits)

//
//     ┌─── Fruits
//     ▼
type Type = typeof schema.Type
```

### Exposed Values

Enums are accessible through the `enums` property of the schema. You can use this property to retrieve individual members or the entire set of enum values.

```ts twoslash
import { Schema } from "effect"

enum Fruits {
  Apple,
  Banana
}

const schema = Schema.Enums(Fruits)

schema.enums // Returns all enum members
schema.enums.Apple // Access the Apple member
schema.enums.Banana // Access the Banana member
```
