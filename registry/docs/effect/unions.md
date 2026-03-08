## Unions

The Schema module includes a built-in `Schema.Union` constructor for creating "OR" types, allowing you to define schemas that can represent multiple types.

**Example** (Defining a Union Schema)

```ts twoslash
import { Schema } from "effect"

//      ┌─── Union<[typeof Schema.String, typeof Schema.Number]>
//      ▼
const schema = Schema.Union(Schema.String, Schema.Number)

//     ┌─── string | number
//     ▼
type Type = typeof schema.Type
```

### Union Member Evaluation Order

When decoding, union members are evaluated in the order they are defined. If a value matches the first member, it will be decoded using that schema. If not, the decoding process moves on to the next member.

If multiple schemas could decode the same value, the order matters. Placing a more general schema before a more specific one may result in missing properties, as the first matching schema will be used.

**Example** (Handling Overlapping Schemas in a Union)

```ts twoslash
import { Schema } from "effect"

// Define two overlapping schemas

const Member1 = Schema.Struct({
  a: Schema.String
})

const Member2 = Schema.Struct({
  a: Schema.String,
  b: Schema.Number
})

// ❌ Define a union where Member1 appears first
const Bad = Schema.Union(Member1, Member2)

console.log(Schema.decodeUnknownSync(Bad)({ a: "a", b: 12 }))
// Output: { a: 'a' }  (Member1 matched first, so `b` was ignored)

// ✅ Define a union where Member2 appears first
const Good = Schema.Union(Member2, Member1)

console.log(Schema.decodeUnknownSync(Good)({ a: "a", b: 12 }))
// Output: { a: 'a', b: 12 } (Member2 matched first, so `b` was included)
```

### Union of Literals

While you can create a union of literals by combining individual literal schemas:

**Example** (Using Individual Literal Schemas)

```ts twoslash
import { Schema } from "effect"

//      ┌─── Union<[Schema.Literal<["a"]>, Schema.Literal<["b"]>, Schema.Literal<["c"]>]>
//      ▼
const schema = Schema.Union(
  Schema.Literal("a"),
  Schema.Literal("b"),
  Schema.Literal("c")
)
```

You can simplify the process by passing multiple literals directly to the `Schema.Literal` constructor:

**Example** (Defining a Union of Literals)

```ts twoslash
import { Schema } from "effect"

//     ┌─── Literal<["a", "b", "c"]>
//     ▼
const schema = Schema.Literal("a", "b", "c")

//     ┌─── "a" | "b" | "c"
//     ▼
type Type = typeof schema.Type
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

### Nullables

The Schema module includes utility functions for defining schemas that allow nullable types, helping to handle values that may be `null`, `undefined`, or both.

**Example** (Creating Nullable Schemas)

```ts twoslash
import { Schema } from "effect"

// Represents a schema for a string or null value
Schema.NullOr(Schema.String)

// Represents a schema for a string, null, or undefined value
Schema.NullishOr(Schema.String)

// Represents a schema for a string or undefined value
Schema.UndefinedOr(Schema.String)
```

### Discriminated unions

[Discriminated unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions) in TypeScript are a way of modeling complex data structures that may take on different forms based on a specific set of conditions or properties. They allow you to define a type that represents multiple related shapes, where each shape is uniquely identified by a shared discriminant property.

In a discriminated union, each variant of the union has a common property, called the discriminant. The discriminant is a literal type, which means it can only have a finite set of possible values. Based on the value of the discriminant property, TypeScript can infer which variant of the union is currently in use.

**Example** (Defining a Discriminated Union in TypeScript)

```ts twoslash
type Circle = {
  readonly kind: "circle"
  readonly radius: number
}

type Square = {
  readonly kind: "square"
  readonly sideLength: number
}

type Shape = Circle | Square
```

In the `Schema` module, you can define a discriminated union similarly by specifying a literal field as the discriminant for each type.

**Example** (Defining a Discriminated Union Using Schema)

```ts twoslash
import { Schema } from "effect"

const Circle = Schema.Struct({
  kind: Schema.Literal("circle"),
  radius: Schema.Number
})

const Square = Schema.Struct({
  kind: Schema.Literal("square"),
  sideLength: Schema.Number
})

const Shape = Schema.Union(Circle, Square)
```

In this example, the `Schema.Literal` constructor sets up the `kind` property as the discriminant for both `Circle` and `Square` schemas. The `Shape` schema then represents a union of these two types, allowing TypeScript to infer the specific shape based on the `kind` value.

### Transforming a Simple Union into a Discriminated Union

If you start with a simple union and want to transform it into a discriminated union, you can add a special property to each member. This allows TypeScript to automatically infer the correct type based on the value of the discriminant property.

**Example** (Initial Simple Union)

For example, let's say you've defined a `Shape` union as a combination of `Circle` and `Square` without any special property:

```ts twoslash
import { Schema } from "effect"

const Circle = Schema.Struct({
  radius: Schema.Number
})

const Square = Schema.Struct({
  sideLength: Schema.Number
})

const Shape = Schema.Union(Circle, Square)
```

To make your code more manageable, you may want to transform the simple union into a discriminated union. This way, TypeScript will be able to automatically determine which member of the union you're working with based on the value of a specific property.

To achieve this, you can add a special property to each member of the union, which will allow TypeScript to know which type it's dealing with at runtime.
Here's how you can [transform](/docs/schema/transformations/#transform) the `Shape` schema into another schema that represents a discriminated union:

**Example** (Adding Discriminant Property)

```ts twoslash
import { Schema } from "effect"

const Circle = Schema.Struct({
  radius: Schema.Number
})

const Square = Schema.Struct({
  sideLength: Schema.Number
})

const DiscriminatedShape = Schema.Union(
  Schema.transform(
    Circle,
    // Add a "kind" property with the literal value "circle" to Circle
    Schema.Struct({ ...Circle.fields, kind: Schema.Literal("circle") }),
    {
      strict: true,
      // Add the discriminant property to Circle
      decode: (circle) => ({ ...circle, kind: "circle" as const }),
      // Remove the discriminant property
      encode: ({ kind: _kind, ...rest }) => rest
    }
  ),

  Schema.transform(
    Square,
    // Add a "kind" property with the literal value "square" to Square
    Schema.Struct({ ...Square.fields, kind: Schema.Literal("square") }),
    {
      strict: true,
      // Add the discriminant property to Square
      decode: (square) => ({ ...square, kind: "square" as const }),
      // Remove the discriminant property
      encode: ({ kind: _kind, ...rest }) => rest
    }
  )
)

console.log(Schema.decodeUnknownSync(DiscriminatedShape)({ radius: 10 }))
// Output: { radius: 10, kind: 'circle' }

console.log(
  Schema.decodeUnknownSync(DiscriminatedShape)({ sideLength: 10 })
)
// Output: { sideLength: 10, kind: 'square' }
```

The previous solution works perfectly and shows how we can add properties to our schema at will, making it easier to consume the result within our domain model.
However, it requires a lot of boilerplate. Fortunately, there is an API called `Schema.attachPropertySignature` designed specifically for this use case, which allows us to achieve the same result with much less effort:

**Example** (Using `Schema.attachPropertySignature` for Less Code)

```ts twoslash
import { Schema } from "effect"

const Circle = Schema.Struct({
  radius: Schema.Number
})

const Square = Schema.Struct({
  sideLength: Schema.Number
})

const DiscriminatedShape = Schema.Union(
  Circle.pipe(Schema.attachPropertySignature("kind", "circle")),
  Square.pipe(Schema.attachPropertySignature("kind", "square"))
)

// decoding
console.log(Schema.decodeUnknownSync(DiscriminatedShape)({ radius: 10 }))
// Output: { radius: 10, kind: 'circle' }

// encoding
console.log(
  Schema.encodeSync(DiscriminatedShape)({
    kind: "circle",
    radius: 10
  })
)
// Output: { radius: 10 }
```

Please note that with `Schema.attachPropertySignature`, you can only add
a property, it cannot replace or override an existing one.

### Exposed Values

You can access the individual members of a union schema represented as a tuple:

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Union(Schema.String, Schema.Number)

// Accesses the members of the union
const members = schema.members

//      ┌─── typeof Schema.String
//      ▼
const firstMember = members[0]

//      ┌─── typeof Schema.Number
//      ▼
const secondMember = members[1]
```
