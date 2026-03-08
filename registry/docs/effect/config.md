## Config

The `Schema.Config` function allows you to decode and manage application configuration settings using structured schemas.
It ensures consistency in configuration data and provides detailed feedback for decoding errors.

**Syntax**

```ts showLineNumbers=false
Config: <A, I extends string>(name: string, schema: Schema<A, I>) =>
  Config<A>
```

This function takes two arguments:

- `name`: Identifier for the configuration setting.
- `schema`: Schema describing the expected data type and structure.

It returns a [Config](/docs/configuration/) object that integrates with your application's configuration system.

The Encoded type `I` must extend `string`, so the schema must be able to decode from a string, this includes schemas like `Schema.String`, `Schema.Literal("...")`, or `Schema.NumberFromString`, possibly with refinements applied.

Behind the scenes, `Schema.Config` follows these steps:

1. **Fetch the value** using the provided name (e.g. from an environment variable).
2. **Decode the value** using the given schema. If the value is invalid, decoding fails.
3. **Format any errors** using [TreeFormatter.formatErrorSync](/docs/schema/error-formatters/#treeformatter-default), which helps produce readable and detailed error messages.

**Example** (Decoding a Configuration Value)

```ts twoslash filename="config.ts"
import { Effect, Schema } from "effect"

// Define a config that expects a string with at least 4 characters
const myConfig = Schema.Config(
  "Foo",
  Schema.String.pipe(Schema.minLength(4))
)

const program = Effect.gen(function* () {
  const foo = yield* myConfig
  console.log(`ok: ${foo}`)
})

Effect.runSync(program)
```

To test the configuration, execute the following commands:

**Test** (with Missing Configuration Data)

```sh showLineNumbers=false
npx tsx config.ts
# Output:
# [(Missing data at Foo: "Expected Foo to exist in the process context")]
```

**Test** (with Invalid Data)

```sh showLineNumbers=false
Foo=bar npx tsx config.ts
# Output:
# [(Invalid data at Foo: "a string at least 4 character(s) long
# └─ Predicate refinement failure
#    └─ Expected a string at least 4 character(s) long, actual "bar"")]
```

**Test** (with Valid Data)

```sh showLineNumbers=false
Foo=foobar npx tsx config.ts
# Output:
# ok: foobar
```
