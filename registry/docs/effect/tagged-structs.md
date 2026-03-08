## Tagged Structs

In TypeScript tags help to enhance type discrimination and pattern matching by providing a simple yet powerful way to define and recognize different data types.

### What is a Tag?

A tag is a literal value added to data structures, commonly used in structs, to distinguish between various object types or variants within tagged unions. This literal acts as a discriminator, making it easier to handle and process different types of data correctly and efficiently.

### Using the tag Constructor

The `Schema.tag` constructor is specifically designed to create a property signature that holds a specific literal value, serving as the discriminator for object types.

**Example** (Defining a Tagged Struct)

```ts twoslash
import { Schema } from "effect"

const User = Schema.Struct({
  _tag: Schema.tag("User"),
  name: Schema.String,
  age: Schema.Number
})

//     ┌─── { readonly _tag: "User"; readonly name: string; readonly age: number; }
//     ▼
type Type = typeof User.Type

console.log(User.make({ name: "John", age: 44 }))
/*
Output:
{ _tag: 'User', name: 'John', age: 44 }
*/
```

In the example above, `Schema.tag("User")` attaches a `_tag` property to the `User` struct schema, effectively labeling objects of this struct type as "User".
This label is automatically applied when using the `make` method to create new instances, simplifying object creation and ensuring consistent tagging.

### Simplifying Tagged Structs with TaggedStruct

The `Schema.TaggedStruct` constructor streamlines the process of creating tagged structs by directly integrating the tag into the struct definition. This method provides a clearer and more declarative approach to building data structures with embedded discriminators.

**Example** (Using `TaggedStruct` for a Simplified Tagged Struct)

```ts twoslash
import { Schema } from "effect"

const User = Schema.TaggedStruct("User", {
  name: Schema.String,
  age: Schema.Number
})

// `_tag` is automatically applied when constructing an instance
console.log(User.make({ name: "John", age: 44 }))
// Output: { _tag: 'User', name: 'John', age: 44 }

// `_tag` is required when decoding from an unknown source
console.log(Schema.decodeUnknownSync(User)({ name: "John", age: 44 }))
/*
throws:
ParseError: { readonly _tag: "User"; readonly name: string; readonly age: number }
└─ ["_tag"]
   └─ is missing
*/
```

In this example:

- The `_tag` property is optional when constructing an instance with `make`, allowing the schema to automatically apply it.
- When decoding unknown data, `_tag` is required to ensure correct type identification. This distinction between instance construction and decoding is useful for preserving the tag’s role as a type discriminator while simplifying instance creation.

If you need `_tag` to be applied automatically during decoding as well, you can create a customized version of `Schema.TaggedStruct`:

**Example** (Custom `TaggedStruct` with `_tag` Applied during Decoding)

```ts twoslash
import type { SchemaAST } from "effect"
import { Schema } from "effect"

const TaggedStruct = <
  Tag extends SchemaAST.LiteralValue,
  Fields extends Schema.Struct.Fields
>(
  tag: Tag,
  fields: Fields
) =>
  Schema.Struct({
    _tag: Schema.Literal(tag).pipe(
      Schema.optional,
      Schema.withDefaults({
        constructor: () => tag, // Apply _tag during instance construction
        decoding: () => tag // Apply _tag during decoding
      })
    ),
    ...fields
  })

const User = TaggedStruct("User", {
  name: Schema.String,
  age: Schema.Number
})

console.log(User.make({ name: "John", age: 44 }))
// Output: { _tag: 'User', name: 'John', age: 44 }

console.log(Schema.decodeUnknownSync(User)({ name: "John", age: 44 }))
// Output: { _tag: 'User', name: 'John', age: 44 }
```

### Multiple Tags

While a primary tag is often sufficient, TypeScript allows you to define multiple tags for more complex data structuring needs. Here's an example demonstrating the use of multiple tags within a single struct:

**Example** (Adding Multiple Tags to a Struct)

This example defines a product schema with a primary tag (`"Product"`) and an additional category tag (`"Electronics"`), adding further specificity to the data structure.

```ts twoslash
import { Schema } from "effect"

const Product = Schema.TaggedStruct("Product", {
  category: Schema.tag("Electronics"),
  name: Schema.String,
  price: Schema.Number
})

// `_tag` and `category` are optional when creating an instance
console.log(Product.make({ name: "Smartphone", price: 999 }))
/*
Output:
{
  _tag: 'Product',
  category: 'Electronics',
  name: 'Smartphone',
  price: 999
}
*/
```
