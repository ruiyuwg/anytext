# [Schema to Equivalence](https://effect.website/docs/schema/equivalence/)

## Overview

The `Schema.equivalence` function allows you to generate an [Equivalence](/docs/schema/equivalence/) based on a schema definition.
This function is designed to compare data structures for equivalence according to the rules defined in the schema.

**Example** (Comparing Structs for Equivalence)

```ts twoslash
import { Schema } from "effect"

const Person = Schema.Struct({
  name: Schema.String,
  age: Schema.Number
})

// Generate an equivalence function based on the schema
const PersonEquivalence = Schema.equivalence(Person)

const john = { name: "John", age: 23 }
const alice = { name: "Alice", age: 30 }

// Use the equivalence function to compare objects

console.log(PersonEquivalence(john, { name: "John", age: 23 }))
// Output: true

console.log(PersonEquivalence(john, alice))
// Output: false
```

## Equivalence for Any, Unknown, and Object

When working with the following schemas:

- `Schema.Any`
- `Schema.Unknown`
- `Schema.Object`
- `Schema.Struct({})` (representing the broad `{}` TypeScript type)

the most sensible form of equivalence is to use `Equal.equals` from the [Equal](/docs/trait/equal/) module, which defaults to reference equality (`===`).
This is because these types can hold almost any kind of value.

**Example** (Comparing Empty Objects Using Reference Equality)

```ts twoslash
import { Schema } from "effect"

const schema = Schema.Struct({})

const input1 = {}
const input2 = {}

console.log(Schema.equivalence(schema)(input1, input2))
// Output: false (because they are different references)
```

## Customizing Equivalence Generation

You can customize the equivalence logic by providing an `equivalence` annotation in the schema definition.

The `equivalence` annotation takes any type parameters provided (`typeParameters`) and two values for comparison, returning a boolean based on the desired condition of equivalence.

**Example** (Custom Equivalence for Strings)

```ts twoslash
import { Schema } from "effect"

// Define a schema with a custom equivalence annotation
const schema = Schema.String.annotations({
  equivalence: (/**typeParameters**/) => (s1, s2) =>
    // Custom rule: Compare only the first character of the strings
    s1.charAt(0) === s2.charAt(0)
})

// Generate the equivalence function
const customEquivalence = Schema.equivalence(schema)

// Use the custom equivalence function
console.log(customEquivalence("aaa", "abb"))
// Output: true (both start with 'a')

console.log(customEquivalence("aaa", "bba"))
// Output: false (strings start with different characters)
```

# [Effect Data Types](https://effect.website/docs/schema/effect-data-types/)

## Overview

import { Aside } from "@astrojs/starlight/components"

## Interop With Data

The [Data](/docs/data-types/data/) module in the Effect ecosystem simplifies value comparison by automatically implementing the [Equal](/docs/trait/equal/) and [Hash](/docs/trait/hash/) traits. This eliminates the need for manual implementations, making equality checks straightforward.

**Example** (Comparing Structs with Data)

```ts twoslash
import { Data, Equal } from "effect"

const person1 = Data.struct({ name: "Alice", age: 30 })
const person2 = Data.struct({ name: "Alice", age: 30 })

console.log(Equal.equals(person1, person2))
// Output: true
```

By default, schemas like `Schema.Struct` do not implement the `Equal` and `Hash` traits. This means that two decoded objects with identical values will not be considered equal.

**Example** (Default Behavior Without `Equal` and `Hash`)

```ts twoslash
import { Schema } from "effect"
import { Equal } from "effect"

const schema = Schema.Struct({
  name: Schema.String,
  age: Schema.Number
})

const decode = Schema.decode(schema)

const person1 = decode({ name: "Alice", age: 30 })
const person2 = decode({ name: "Alice", age: 30 })

console.log(Equal.equals(person1, person2))
// Output: false
```

The `Schema.Data` function can be used to enhance a schema by including the `Equal` and `Hash` traits. This allows the resulting objects to support value-based equality.

**Example** (Using `Schema.Data` to Add Equality)

```ts twoslash
import { Schema } from "effect"
import { Equal } from "effect"

const schema = Schema.Data(
  Schema.Struct({
    name: Schema.String,
    age: Schema.Number
  })
)

const decode = Schema.decode(schema)

const person1 = decode({ name: "Alice", age: 30 })
const person2 = decode({ name: "Alice", age: 30 })

console.log(Equal.equals(person1, person2))
// Output: true
```
