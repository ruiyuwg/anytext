## Recursive Schemas

The `Schema.suspend` function is designed for defining schemas that reference themselves, such as in recursive data structures.

**Example** (Self-Referencing Schema)

In this example, the `Category` schema references itself through the `subcategories` field, which is an array of `Category` objects.

```ts twoslash
import { Schema } from "effect"

interface Category {
  readonly name: string
  readonly subcategories: ReadonlyArray<Category>
}

const Category = Schema.Struct({
  name: Schema.String,
  subcategories: Schema.Array(
    Schema.suspend((): Schema.Schema<Category> => Category)
  )
})
```

It is necessary to define the `Category` type and add an explicit type
annotation because otherwise TypeScript would struggle to infer types
correctly. Without this annotation, you might encounter the error
message:

**Example** (Type Inference Error)

```ts twoslash
import { Schema } from "effect"

// @errors: 7022
const Category = Schema.Struct({
  name: Schema.String,
// @errors: 7022 7024
  subcategories: Schema.Array(Schema.suspend(() => Category))
})
```

### A Helpful Pattern to Simplify Schema Definition

As we've observed, it's necessary to define an interface for the `Type` of the schema to enable recursive schema definition, which can complicate things and be quite tedious.
One pattern to mitigate this is to **separate the field responsible for recursion** from all other fields.

**Example** (Separating Recursive Fields)

```ts twoslash
import { Schema } from "effect"

const fields = {
  name: Schema.String
  // ...other fields as needed
}

// Define an interface for the Category schema,
// extending the Type of the defined fields
interface Category extends Schema.Struct.Type<typeof fields> {
  // Define `subcategories` using recursion
  readonly subcategories: ReadonlyArray<Category>
}

const Category = Schema.Struct({
  ...fields, // Spread in the base fields
  subcategories: Schema.Array(
    // Define `subcategories` using recursion
    Schema.suspend((): Schema.Schema<Category> => Category)
  )
})
```

### Mutually Recursive Schemas

You can also use `Schema.suspend` to create mutually recursive schemas, where two schemas reference each other. In the following example, `Expression` and `Operation` form a simple arithmetic expression tree by referencing each other.

**Example** (Defining Mutually Recursive Schemas)

```ts twoslash
import { Schema } from "effect"

interface Expression {
  readonly type: "expression"
  readonly value: number | Operation
}

interface Operation {
  readonly type: "operation"
  readonly operator: "+" | "-"
  readonly left: Expression
  readonly right: Expression
}

const Expression = Schema.Struct({
  type: Schema.Literal("expression"),
  value: Schema.Union(
    Schema.Number,
    Schema.suspend((): Schema.Schema<Operation> => Operation)
  )
})

const Operation = Schema.Struct({
  type: Schema.Literal("operation"),
  operator: Schema.Literal("+", "-"),
  left: Expression,
  right: Expression
})
```

### Recursive Types with Different Encoded and Type

Defining a recursive schema where the `Encoded` type differs from the `Type` type adds another layer of complexity. In such cases, we need to define two interfaces: one for the `Type` type, as seen previously, and another for the `Encoded` type.

**Example** (Recursive Schema with Different Encoded and Type Definitions)

Let's consider an example: suppose we want to add an `id` field to the `Category` schema, where the schema for `id` is `NumberFromString`.
It's important to note that `NumberFromString` is a schema that transforms a string into a number, so the `Type` and `Encoded` types of `NumberFromString` differ, being `number` and `string` respectively.
When we add this field to the `Category` schema, TypeScript raises an error:

```ts twoslash
import { Schema } from "effect"

const fields = {
  id: Schema.NumberFromString,
  name: Schema.String
}

interface Category extends Schema.Struct.Type<typeof fields> {
  readonly subcategories: ReadonlyArray<Category>
}

const Category = Schema.Struct({
  ...fields,
  subcategories: Schema.Array(
// @errors: 2322
    Schema.suspend((): Schema.Schema<Category> => Category)
  )
})
```

This error occurs because the explicit annotation `Schema.Schema<Category>` is no longer sufficient and needs to be adjusted by explicitly adding the `Encoded` type:

```ts twoslash
import { Schema } from "effect"

const fields = {
  id: Schema.NumberFromString,
  name: Schema.String
}

interface Category extends Schema.Struct.Type<typeof fields> {
  readonly subcategories: ReadonlyArray<Category>
}

interface CategoryEncoded extends Schema.Struct.Encoded<typeof fields> {
  readonly subcategories: ReadonlyArray<CategoryEncoded>
}

const Category = Schema.Struct({
  ...fields,
  subcategories: Schema.Array(
    Schema.suspend(
      (): Schema.Schema<Category, CategoryEncoded> => Category
    )
  )
})
```
