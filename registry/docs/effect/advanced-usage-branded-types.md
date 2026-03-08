## Branded types

TypeScript's type system is structural, which means that any two types that are structurally equivalent are considered the same.
This can cause issues when types that are semantically different are treated as if they were the same.

**Example** (Structural Typing Issue)

```ts twoslash
type UserId = string
type Username = string

declare const getUser: (id: UserId) => object

const myUsername: Username = "gcanti"

getUser(myUsername) // This erroneously works
```

In the above example, `UserId` and `Username` are both aliases for the same type, `string`. This means that the `getUser` function can mistakenly accept a `Username` as a valid `UserId`, causing bugs and errors.

To prevent this, Effect introduces **branded types**. These types attach a unique identifier (or "brand") to a type, allowing you to differentiate between structurally similar but semantically distinct types.

**Example** (Defining Branded Types)

```ts twoslash
import { Brand } from "effect"

type UserId = string & Brand.Brand<"UserId">
type Username = string

declare const getUser: (id: UserId) => object

const myUsername: Username = "gcanti"

// @errors: 2345
getUser(myUsername)
```

By defining `UserId` as a branded type, the `getUser` function can accept only values of type `UserId`, and not plain strings or other types that are compatible with strings. This helps to prevent bugs caused by accidentally passing the wrong type of value to the function.

There are two ways to define a schema for a branded type, depending on whether you:

- want to define the schema from scratch
- have already defined a branded type via [`effect/Brand`](/docs/code-style/branded-types/) and want to reuse it to define a schema

### Defining a brand schema from scratch

To define a schema for a branded type from scratch, use the `Schema.brand` function.

**Example** (Creating a schema for a Branded Type)

```ts twoslash
import { Schema } from "effect"

const UserId = Schema.String.pipe(Schema.brand("UserId"))

// string & Brand<"UserId">
type UserId = typeof UserId.Type
```

Note that you can use `unique symbol`s as brands to ensure uniqueness across modules / packages.

**Example** (Using a unique symbol as a Brand)

```ts twoslash
import { Schema } from "effect"

const UserIdBrand: unique symbol = Symbol.for("UserId")

const UserId = Schema.String.pipe(Schema.brand(UserIdBrand))

// string & Brand<typeof UserIdBrand>
type UserId = typeof UserId.Type
```

### Reusing an existing branded constructor

If you have already defined a branded type using the [`effect/Brand`](/docs/code-style/branded-types/) module, you can reuse it to define a schema using the `Schema.fromBrand` function.

**Example** (Reusing an Existing Branded Type)

```ts twoslash
import { Schema } from "effect"
import { Brand } from "effect"

// the existing branded type
type UserId = string & Brand.Brand<"UserId">

const UserId = Brand.nominal<UserId>()

// Define a schema for the branded type
const UserIdSchema = Schema.String.pipe(Schema.fromBrand(UserId))
```

### Utilizing Default Constructors

The `Schema.brand` function includes a default constructor to facilitate the creation of branded values.

```ts twoslash
import { Schema } from "effect"

const UserId = Schema.String.pipe(Schema.brand("UserId"))

const userId = UserId.make("123") // Creates a branded UserId
```
