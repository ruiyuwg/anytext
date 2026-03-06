# Zod

Zod is a TypeScript-first schema validation library with static type inference. This documentation provides comprehensive coverage of Zod 4's features, API, and usage patterns.

# Defining schemas

import { Tabs, Tab } from 'fumadocs-ui/components/tabs';
import { Callout } from "fumadocs-ui/components/callout"
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

To validate data, you must first define a _schema_. Schemas represent _types_, from simple primitive values to complex nested objects and arrays.

## Primitives

```ts
import * as z from "zod";

// primitive types
z.string();
z.number();
z.bigint();
z.boolean();
z.symbol();
z.undefined();
z.null();
```

### Coercion

To coerce input data to the appropriate type, use `z.coerce` instead:

```ts
z.coerce.string(); // String(input)
z.coerce.number(); // Number(input)
z.coerce.boolean(); // Boolean(input)
z.coerce.bigint(); // BigInt(input)
```

The coerced variant of these schemas attempts to convert the input value to the appropriate type.

```ts
const schema = z.coerce.string();

schema.parse("tuna"); // => "tuna"
schema.parse(42); // => "42"
schema.parse(true); // => "true"
schema.parse(null); // => "null"
```

The input type of these coerced schemas is `unknown` by default. To specify a more specific input type, pass a generic parameter:

```ts
const A = z.coerce.number();
type AInput = z.input<typeof A>; // => unknown

const B = z.coerce.number<number>();
type BInput = z.input<typeof B>; // => number
```

````
Zod coerces all inputs using the built-in constructors.

| Zod API              | Coercion          |
| -------------------- | ----------------- |
| `z.coerce.string()`  | `String(value)`   |
| `z.coerce.number()`  | `Number(value)`   |
| `z.coerce.boolean()` | `Boolean(value)`  |
| `z.coerce.bigint()`  | `BigInt(value)`   |
| `z.coerce.date()`    | `new Date(value)` |

Boolean coercion with `z.coerce.boolean()` may not work how you expect. Any [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value is coerced to `true`, and any [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value is coerced to `false`.

```ts
const schema = z.coerce.boolean(); // Boolean(input)

schema.parse("tuna"); // => true
schema.parse("true"); // => true
schema.parse("false"); // => true
schema.parse(1); // => true
schema.parse([]); // => true

schema.parse(0); // => false
schema.parse(""); // => false
schema.parse(undefined); // => false
schema.parse(null); // => false
```

For total control over coercion logic, consider using [`z.transform()`](#transforms) or [`z.pipe()`](#pipes).



By default the *input* type of any `z.coerce` schema is `unknown`. In some cases, it may be preferable for the input type to be more specific. You can specify the input type with a generic parameter.

```ts
const regularCoerce = z.coerce.string();
type RegularInput = z.input; // => unknown
type RegularOutput = z.output; // => string

const customInput = z.coerce.string();
type CustomInput = z.input; // => string
type CustomOutput = z.output; // => string
```
````

## Literals

Literal schemas represent a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types), like `"hello world"` or `5`.

```ts
const tuna = z.literal("tuna");
const twelve = z.literal(12);
const twobig = z.literal(2n);
const tru = z.literal(true);
```

To represent the JavaScript literals `null` and `undefined`:

```ts
z.null();
z.undefined();
z.void(); // equivalent to z.undefined()
```

To allow multiple literal values:

```ts
const colors = z.literal(["red", "green", "blue"]);

colors.parse("green"); // ✅
colors.parse("yellow"); // ❌
```

To extract the set of allowed values from a literal schema:

````
```ts
colors.values; // => Set<"red" | "green" | "blue">
```



```ts
// no equivalent
```
````

## Strings

{/\* Zod provides a handful of built-in string validation and transform APIs.

```ts
z.string().startsWith("fourscore");
```

```ts
z.string().check(z.startsWith("fourscore"));
```

All of the APIs documented below support the `error` parameter for customizing the error message.

```ts
z.string().startsWith("fourscore", { error: "Nice try, buddy" });
```

```ts
z.string().check(z.startsWith("fourscore", { error: "Nice try, buddy" }));
```

\*/}

Zod provides a handful of built-in string validation and transform APIs. To perform some common string validations:

````
```ts
z.string().max(5);
z.string().min(5);
z.string().length(5);
z.string().regex(/^[a-z]+$/);
z.string().startsWith("aaa");
z.string().endsWith("zzz");
z.string().includes("---");
z.string().uppercase();
z.string().lowercase();
```



```ts
z.string().check(z.maxLength(5));
z.string().check(z.minLength(5));
z.string().check(z.length(5));
z.string().check(z.regex(/^[a-z]+$/));
z.string().check(z.startsWith("aaa"));
z.string().check(z.endsWith("zzz"));
z.string().check(z.includes("---"));
z.string().check(z.uppercase());
z.string().check(z.lowercase());
```
````

To perform some simple string transforms:

````
```ts
z.string().trim(); // trim whitespace
z.string().toLowerCase(); // toLowerCase
z.string().toUpperCase(); // toUpperCase
z.string().normalize(); // normalize unicode characters
```



```ts
z.string().check(z.trim()); // trim whitespace
z.string().check(z.toLowerCase()); // toLowerCase
z.string().check(z.toUpperCase()); // toUpperCase
z.string().check(z.normalize()); // normalize unicode characters
```
````
