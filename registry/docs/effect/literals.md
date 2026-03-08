## Literals

Literal schemas represent a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
You can use them to specify exact values that a type must have.

Literals can be of the following types:

- `string`
- `number`
- `boolean`
- `null`
- `bigint`

**Example** (Defining Literal Schemas)

```ts twoslash
import { Schema } from "effect"

// Define various literal schemas
Schema.Null // Same as S.Literal(null)
Schema.Literal("a") // string literal
Schema.Literal(1) // number literal
Schema.Literal(true) // boolean literal
Schema.Literal(2n) // BigInt literal
```

**Example** (Defining a Literal Schema for `"a"`)

```ts twoslash
import { Schema } from "effect"

//     ┌─── Literal<["a"]>
//     ▼
const schema = Schema.Literal("a")

//     ┌─── "a"
//     ▼
type Type = typeof schema.Type

console.log(Schema.decodeUnknownSync(schema)("a"))
// Output: "a"

console.log(Schema.decodeUnknownSync(schema)("b"))
/*
throws:
ParseError: Expected "a", actual "b"
*/
```

### Union of Literals

You can create a union of multiple literals by passing them as arguments to the `Schema.Literal` constructor:

**Example** (Defining a Union of Literals)

```ts twoslash
import { Schema } from "effect"

//     ┌─── Literal<["a", "b", "c"]>
//     ▼
const schema = Schema.Literal("a", "b", "c")

//     ┌─── "a" | "b" | "c"
//     ▼
type Type = typeof schema.Type

Schema.decodeUnknownSync(schema)(null)
/*
throws:
ParseError: "a" | "b" | "c"
├─ Expected "a", actual null
├─ Expected "b", actual null
└─ Expected "c", actual null
*/
```

If you want to set a custom error message for the entire union of literals, you can use the `override: true` option (see [Custom Error Messages](/docs/schema/error-messages/#custom-error-messages) for more details) to specify a unified message.

**Example** (Adding a Custom Message to a Union of Literals)

```ts twoslash
import { Schema } from "effect"

// Schema with individual messages for each literal
const individualMessages = Schema.Literal("a", "b", "c")

console.log(Schema.decodeUnknownSync(individualMessages)(null))
/*
throws:
ParseError: "a" | "b" | "c"
├─ Expected "a", actual null
├─ Expected "b", actual null
└─ Expected "c", actual null
*/

// Schema with a unified custom message for all literals
const unifiedMessage = Schema.Literal("a", "b", "c").annotations({
  message: () => ({ message: "Not a valid code", override: true })
})

console.log(Schema.decodeUnknownSync(unifiedMessage)(null))
/*
throws:
ParseError: Not a valid code
*/
```

### Exposed Values

You can access the literals defined in a literal schema using the `literals` property:

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Literal("a", "b", "c")

//      ┌─── readonly ["a", "b", "c"]
//      ▼
const literals = schema.literals
```

### The pickLiteral Utility

You can use `Schema.pickLiteral` with a literal schema to narrow down its possible values.

**Example** (Using `pickLiteral` to Narrow Values)

```ts twoslash
import { Schema } from "effect"

// Create a schema for a subset of literals ("a" and "b") from a larger set
//
//      ┌─── Literal<["a", "b"]>
//      ▼
const schema = Schema.Literal("a", "b", "c").pipe(
  Schema.pickLiteral("a", "b")
)
```

Sometimes, you may need to reuse a literal schema in other parts of your code. Below is an example demonstrating how to do this:

**Example** (Creating a Subtype from a Literal Schema)

```ts twoslash
import { Schema } from "effect"

// Define the base set of fruit categories
const FruitCategory = Schema.Literal("sweet", "citrus", "tropical")

// Define a general Fruit schema with the base category set
const Fruit = Schema.Struct({
  id: Schema.Number,
  category: FruitCategory
})

// Define a specific Fruit schema for only "sweet" and "citrus" categories
const SweetAndCitrusFruit = Schema.Struct({
  id: Schema.Number,
  category: FruitCategory.pipe(Schema.pickLiteral("sweet", "citrus"))
})
```

In this example, `FruitCategory` serves as the source of truth for the different fruit categories.
We reuse it to create a subtype of `Fruit` called `SweetAndCitrusFruit`, ensuring that only the specified categories (`"sweet"` and `"citrus"`) are allowed.
This approach helps maintain consistency throughout your code and provides type safety if the category definition changes.
