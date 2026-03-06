# Zod Core

import { Callout } from "fumadocs-ui/components/callout"
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

This sub-package exports the core classes and utilities that are consumed by Zod and Zod Mini. It is not intended to be used directly; instead it's designed to be extended by other packages. It implements:

```ts
import * as z from "zod/v4/core";

// the base class for all Zod schemas
z.$ZodType;

// subclasses of $ZodType that implement common parsers
z.$ZodString
z.$ZodObject
z.$ZodArray
// ...

// the base class for all Zod checks
z.$ZodCheck;

// subclasses of $ZodCheck that implement common checks
z.$ZodCheckMinLength
z.$ZodCheckMaxLength

// the base class for all Zod errors
z.$ZodError;

// issue formats (types only)
{} as z.$ZodIssue;

// utils
z.util.isValidJWT(...);
```

## Schemas

The base class for all Zod schemas is `$ZodType`. It accepts two generic parameters: `Output` and `Input`.

```ts
export class $ZodType<Output = unknown, Input = unknown> {
  _zod: { /* internals */}
}
```

`zod/v4/core` exports a number of subclasses that implement some common parsers. A union of all first-party subclasses is exported as `z.$ZodTypes`.

```ts
export type $ZodTypes =
  | $ZodString
  | $ZodNumber
  | $ZodBigInt
  | $ZodBoolean
  | $ZodDate
  | $ZodSymbol
  | $ZodUndefined
  | $ZodNullable
  | $ZodNull
  | $ZodAny
  | $ZodUnknown
  | $ZodNever
  | $ZodVoid
  | $ZodArray
  | $ZodObject
  | $ZodUnion // $ZodDiscriminatedUnion extends this
  | $ZodIntersection
  | $ZodTuple
  | $ZodRecord
  | $ZodMap
  | $ZodSet
  | $ZodLiteral
  | $ZodEnum
  | $ZodPromise
  | $ZodLazy
  | $ZodOptional
  | $ZodDefault
  | $ZodTemplateLiteral
  | $ZodCustom
  | $ZodTransform
  | $ZodNonOptional
  | $ZodReadonly
  | $ZodNaN
  | $ZodPipe // $ZodCodec extends this
  | $ZodSuccess
  | $ZodCatch
  | $ZodFile;
```

````
Here is a complete inheritance diagram for the core schema classes:

```txt
- $ZodType
    - $ZodString
        - $ZodStringFormat
            - $ZodGUID
            - $ZodUUID
            - $ZodEmail
            - $ZodURL
            - $ZodEmoji
            - $ZodNanoID
            - $ZodCUID
            - $ZodCUID2
            - $ZodULID
            - $ZodXID
            - $ZodKSUID
            - $ZodISODateTime
            - $ZodISODate
            - $ZodISOTime
            - $ZodISODuration
            - $ZodIPv4
            - $ZodIPv6
            - $ZodCIDRv4
            - $ZodCIDRv6
            - $ZodBase64
            - $ZodBase64URL
            - $ZodE164
            - $ZodJWT
    - $ZodNumber
        - $ZodNumberFormat
    - $ZodBigInt
        - $ZodBigIntFormat
    - $ZodBoolean
    - $ZodSymbol
    - $ZodUndefined
    - $ZodNull
    - $ZodAny
    - $ZodUnknown
    - $ZodNever
    - $ZodVoid
    - $ZodDate
    - $ZodArray
    - $ZodObject
    - $ZodUnion
        - $ZodDiscriminatedUnion
    - $ZodIntersection
    - $ZodTuple
    - $ZodRecord
    - $ZodMap
    - $ZodSet
    - $ZodEnum
    - $ZodLiteral
    - $ZodFile
    - $ZodTransform
    - $ZodOptional
    - $ZodNullable
    - $ZodDefault
    - $ZodPrefault
    - $ZodNonOptional
    - $ZodSuccess
    - $ZodCatch
    - $ZodNaN
    - $ZodPipe
        - $ZodCodec
    - $ZodReadonly
    - $ZodTemplateLiteral
    - $ZodCustom

```
````

## Internals

All `zod/v4/core` subclasses only contain a single property: `_zod`. This property is an object containing the schemas *internals*. The goal is to make `zod/v4/core` as extensible and unopinionated as possible. Other libraries can "build their own Zod" on top of these classes without `zod/v4/core` cluttering up the interface. Refer to the implementations of `zod` and `zod/mini` for examples of how to extend these classes.

The `_zod` internals property contains some notable properties:

- `.def` — The schema's *definition*: this is the object you pass into the class's constructor to create an instance. It completely describes the schema, and it's JSON-serializable.
  - `.def.type` — A string representing the schema's type, e.g. `"string"`, `"object"`, `"array"`, etc.
  - `.def.checks` — An array of *checks* that are executed by the schema after parsing.
- `.input` — A virtual property that "stores" the schema's *inferred input type*.
- `.output` — A virtual property that "stores" the schema's *inferred output type*.
- `.run()` — The schema's internal parser implementation.

If you are implementing a tool (say, a code generator) that must traverse Zod schemas, you can cast any schema to `$ZodTypes` and use the `def` property to discriminate between these classes.

```ts
export function walk(_schema: z.$ZodType) {
  const schema = _schema as z.$ZodTypes;
  const def = schema._zod.def;
  switch (def.type) {
    case "string": {
      // ...
      break;
    }
    case "object": {
      // ...
      break;
    }
  }
}
```

There are a number of subclasses of `$ZodString` that implement various *string formats*. These are exported as `z.$ZodStringFormatTypes`.

```ts
export type $ZodStringFormatTypes =
  | $ZodGUID
  | $ZodUUID
  | $ZodEmail
  | $ZodURL
  | $ZodEmoji
  | $ZodNanoID
  | $ZodCUID
  | $ZodCUID2
  | $ZodULID
  | $ZodXID
  | $ZodKSUID
  | $ZodISODateTime
  | $ZodISODate
  | $ZodISOTime
  | $ZodISODuration
  | $ZodIPv4
  | $ZodIPv6
  | $ZodCIDRv4
  | $ZodCIDRv6
  | $ZodBase64
  | $ZodBase64URL
  | $ZodE164
  | $ZodJWT
```

## Parsing

As the Zod Core schema classes have no methods, there are top-level functions for parsing data.

```ts
import * as z from "zod/v4/core";

const schema = new z.$ZodString({ type: "string" });
z.parse(schema, "hello");
z.safeParse(schema, "hello");
await z.parseAsync(schema, "hello");
await z.safeParseAsync(schema, "hello");
```

## Checks

Every Zod schema contains an array of *checks*. These perform post-parsing refinements (and occasionally mutations) that *do not affect* the inferred type.

```ts
const schema = z.string().check(z.email()).check(z.min(5));
// => $ZodString

schema._zod.def.checks;
// => [$ZodCheckEmail, $ZodCheckMinLength]
```

The base class for all Zod checks is `$ZodCheck`. It accepts a single generic parameter `T`.

```ts
export class $ZodCheck<in T = unknown> {
  _zod: { /* internals */}
}
```

The `_zod` internals property contains some notable properties:

- `.def` — The check's *definition*: this is the object you pass into the class's constructor to create the check. It completely describes the check, and it's JSON-serializable.
  - `.def.check` — A string representing the check's type, e.g. `"min_length"`, `"less_than"`, `"string_format"`, etc.
- `.check()` — Contains the check's validation logic.

`zod/v4/core` exports a number of subclasses that perform some common refinements. All first-party subclasses are exported as a union called `z.$ZodChecks`.

```ts
export type $ZodChecks =
  | $ZodCheckLessThan
  | $ZodCheckGreaterThan
  | $ZodCheckMultipleOf
  | $ZodCheckNumberFormat
  | $ZodCheckBigIntFormat
  | $ZodCheckMaxSize
  | $ZodCheckMinSize
  | $ZodCheckSizeEquals
  | $ZodCheckMaxLength
  | $ZodCheckMinLength
  | $ZodCheckLengthEquals
  | $ZodCheckProperty
  | $ZodCheckMimeType
  | $ZodCheckOverwrite
  | $ZodCheckStringFormat
```

You can use the `._zod.def.check` property to discriminate between these classes.

```ts
const check = {} as z.$ZodChecks;
const def = check._zod.def;

switch (def.check) {
  case "less_than":
  case "greater_than":
    // ...
    break;
}
```

As with schema types, there are a number of subclasses of `$ZodCheckStringFormat` that implement various *string formats*.

```ts
export type $ZodStringFormatChecks =
  | $ZodCheckRegex
  | $ZodCheckLowerCase
  | $ZodCheckUpperCase
  | $ZodCheckIncludes
  | $ZodCheckStartsWith
  | $ZodCheckEndsWith
  | $ZodGUID
  | $ZodUUID
  | $ZodEmail
  | $ZodURL
  | $ZodEmoji
  | $ZodNanoID
  | $ZodCUID
  | $ZodCUID2
  | $ZodULID
  | $ZodXID
  | $ZodKSUID
  | $ZodISODateTime
  | $ZodISODate
  | $ZodISOTime
  | $ZodISODuration
  | $ZodIPv4
  | $ZodIPv6
  | $ZodCIDRv4
  | $ZodCIDRv6
  | $ZodBase64
  | $ZodBase64URL
  | $ZodE164
  | $ZodJWT;
```

Use a nested `switch` to discriminate between the different string format checks.

```ts
const check = {} as z.$ZodChecks;
const def = check._zod.def;

switch (def.check) {
  case "less_than":
  case "greater_than":
  // ...
  case "string_format":
    {
      const formatCheck = check as z.$ZodStringFormatChecks;
      const formatCheckDef = formatCheck._zod.def;

      switch (formatCheckDef.format) {
        case "email":
        case "url":
          // do stuff
      }
    }
    break;
}
```

You'll notice some of these string format *checks* overlap with the string format *types* above. That's because these classes implement both the `$ZodCheck` and `$ZodType` interfaces. That is, they can be used as either a check or a type. In these cases, both `._zod.parse` (the schema parser) and `._zod.check` (the check validation) are executed during parsing. In effect, the instance is prepended to its own `checks` array (though it won't actually exist in `._zod.def.checks`).

```ts
// as a type
z.email().parse("user@example.com");

// as a check
z.string().check(z.email()).parse("user@example.com")
```

## Errors

The base class for all errors in Zod is `$ZodError`.

> For performance reasons, `$ZodError` *does not* extend the built-in `Error` class! So using `instanceof Error` will return `false`.

- The `zod` package implements a subclass of `$ZodError` called `ZodError` with some additional convenience methods.
- The `zod/mini` sub-package directly uses `$ZodError`

```ts
export class $ZodError<T = unknown> implements Error {
 public issues: $ZodIssue[];
}
```

## Issues

The `issues` property corresponds to an array of `$ZodIssue` objects. All issues extend the `z.$ZodIssueBase` interface.

```ts
export interface $ZodIssueBase {
  readonly code?: string;
  readonly input?: unknown;
  readonly path: PropertyKey[];
  readonly message: string;
}
```

Zod defines the following issue subtypes:

```ts
export type $ZodIssue =
  | $ZodIssueInvalidType
  | $ZodIssueTooBig
  | $ZodIssueTooSmall
  | $ZodIssueInvalidStringFormat
  | $ZodIssueNotMultipleOf
  | $ZodIssueUnrecognizedKeys
  | $ZodIssueInvalidUnion
  | $ZodIssueInvalidKey
  | $ZodIssueInvalidElement
  | $ZodIssueInvalidValue
  | $ZodIssueCustom;
```

For details on each type, refer to [the implementation](https://github.com/colinhacks/zod/blob/main/packages/zod/src/v4/core/errors.ts).

{/\* ## Best practices

If you're reading this page, you're likely trying to build some kind of tool or library on top of Zod. This section breaks down some best practices for doing so.

1. If you're just accept user-defined schemas, use Standard Schema instead

Zod implements the [Standard Schema](https://standardschema.dev/) specification, a standard interface for schema libraries to expose their validation logic and inferred types to third-party tools. If your goal is to accept user-defined schemas, extracting their inferred types, and using them to parse data, then Standard Schema is all you need. Refer to the Standard Schema website/docs for more information.

2. Set up `peerDependencies` properly!

If your tool accepts Zod schemas from a consumer/user, you should add `"zod/v4/core"` to `peerDependencies`. This lets your users "bring their own Zod". Be as flexible as possible with the version range. For example, if your tool is compatible with `zod/v4/core`, you can use the following. This allows your users to bring any version of `zod/v4/core`, avoiding accidental duplicate installs.

```json
{
"peerDependencies": {
  "zod/v4/core": "*"
}
}
```

Since package managers generally won't install your own `peerDependencies`, you'll need to add `zod/v4/core` to your `devDependencies` as well. As new versions of `zod/v4/core` are released, you can update your `devDependencies` to match the latest version. This is important for testing and development purposes.

````json
{
"peerDependencies": {
  "zod": "*"
},
"devDependencies": {
  "zod": "^3.25.0"
}
}
``` */}


# Zod Mini

import { Tabs, Tab } from 'fumadocs-ui/components/tabs';
import { Callout } from 'fumadocs-ui/components/callout';


**Note** — The docs for Zod Mini are interleaved with the regular Zod docs via tabbed code blocks. This page is designed to explain why Zod Mini exists, when to use it, and some key differences from regular Zod.


Zod Mini variant was introduced with the release of Zod 4. To try it:

```sh
npm install zod@^4.0.0
````

To import it:

```ts
import * as z from "zod/mini";
```

Zod Mini implements the exact same functionality as `zod`, but using a *functional*, *tree-shakable* API. If you're coming from `zod`, this means you generally will use *functions* in place of methods.

```ts
// regular Zod
const mySchema = z.string().optional().nullable();

// Zod Mini
const mySchema = z.nullable(z.optional(z.string()));
```

## Tree-shaking

Tree-shaking is a technique used by modern bundlers to remove unused code from the final bundle. It's also referred to as *dead-code elimination*.

In regular Zod, schemas provide a range of convenience methods to perform some common operations (e.g. `.min()` on string schemas). Bundlers are generally not able to remove ("treeshake") unused method implementations from your bundle, but they are able to remove unused top-level functions. As such, the API of Zod Mini uses more functions than methods.

```ts
// regular Zod
z.string().min(5).max(10).trim()

// Zod Mini
z.string().check(z.minLength(5), z.maxLength(10), z.trim());
```

To give a general idea about the bundle size reduction, consider this simple script:

```ts
z.boolean().parse(true)
```

Bundling this with Zod and Zod Mini results in the following bundle sizes. Zod Mini results in a 64% reduction.

| Package  | Bundle size (gzip) |
| -------- | ------------------ |
| Zod Mini | `2.12kb`           |
| Zod      | `5.91kb`           |

With a marginally more complex schema that involves object types:

```ts
const schema = z.object({ a: z.string(), b: z.number(), c: z.boolean() });

schema.parse({
  a: "asdf",
  b: 123,
  c: true,
});
```

| Package  | Bundle size (gzip) |
| -------- | ------------------ |
| Zod Mini | `4.0kb`            |
| Zod      | `13.1kb`           |

This gives you a sense of the bundle sizes involved. Look closely at these numbers and run your own benchmarks to determine if using Zod Mini is worth it for your use case.

## When (not) to use Zod Mini

In general you should probably use regular Zod unless you have uncommonly strict constraints around bundle size. Many developers massively overestimate the importance of bundle size to application performance. In practice, bundle size on the scale of Zod (`5-10kb` typically) is only a meaningful concern when optimizing front-end bundles for a user base with slow mobile network connections in rural or developing areas.

Let's run through some considerations:

### DX

The API of Zod Mini is more verbose and less discoverable. The methods in Zod's API are much easier to discover & autocomplete through Intellisense than the top-level functions in Zod Mini. It isn't possible to quickly build a schema with chained APIs. (Speaking as the creator of Zod: I spent a lot of time designing the Zod Mini API to be as ergonomic as possible, but I still have a strong preference the standard Zod API.)

### Backend development

If you are using Zod on the backend, bundle size on the scale of Zod is not meaningful. This is true even in resource-constrained environments like Lambda. [This post](https://medium.com/@adtanasa/size-is-almost-all-that-matters-for-optimizing-aws-lambda-cold-starts-cad54f65cbb) benchmarks cold start times with bundles of various sizes. Here is a subset of the results:

| Bundle size                           | Lambda cold start time   |
| ------------------------------------- | ------------------------ |
| `1kb`                                 | `171ms`                  |
| `17kb` (size of gzipped non-Mini Zod) | `171.6ms` (interpolated) |
| `128kb`                               | `176ms`                  |
| `256kb`                               | `182ms`                  |
| `512kb`                               | `279ms`                  |
| `1mb`                                 | `557ms`                  |

The minimum cold start time for a negligible `1kb` bundle is `171ms`. The next bundle size tested is `128kb`, which added only `5ms`. When gzipped, the bundle size for the entirely of regular Zod is roughly `17kb`, which would correspond to a `0.6ms` increase in startup time.

### Internet speed

Generally, the round trip time to the server (`100-200ms`) will dwarf the time required to download an additional `10kb`. Only on slow 3G connections (sub-`1Mbps`) does the download time for an additional `10kb` become more significant. If you aren't optimizing specifically for users in rural or developing areas, your time is likely better spent optimizing something else.

## `ZodMiniType`

All Zod Mini schemas extend the `z.ZodMiniType` base class, which in turn extends `z.core.$ZodType` from [`zod/v4/core`](/packages/core). While this class implements far fewer methods than `ZodType` in `zod`, some particularly useful methods remain.

### `.parse`

This is an obvious one. All Zod Mini schemas implement the same parsing methods as `zod`.

```ts
import * as z from "zod/mini"

const mySchema = z.string();

mySchema.parse('asdf')
await mySchema.parseAsync('asdf')
mySchema.safeParse('asdf')
await mySchema.safeParseAsync('asdf')
```

### `.check()`

In regular Zod there are dedicated methods on schema subclasses for performing common checks:

```ts
import * as z from "zod";

z.string()
  .min(5)
  .max(10)
  .refine(val => val.includes("@"))
  .trim()
```

In Zod Mini such methods aren't implemented. Instead you pass these checks into schemas using the `.check()` method:

```ts
import * as z from "zod/mini"

z.string().check(
  z.minLength(5), 
  z.maxLength(10),
  z.refine(val => val.includes("@")),
  z.trim()
);
```

The following checks are implemented. Some of these checks only apply to schemas of certain types (e.g. strings or numbers). The APIs are all type-safe; TypeScript won't let you add an unsupported check to your schema.

```ts
z.lt(value);
z.lte(value); // alias: z.maximum()
z.gt(value);
z.gte(value); // alias: z.minimum()
z.positive();
z.negative();
z.nonpositive();
z.nonnegative();
z.multipleOf(value);
z.maxSize(value);
z.minSize(value);
z.size(value);
z.maxLength(value);
z.minLength(value);
z.length(value);
z.regex(regex);
z.lowercase();
z.uppercase();
z.includes(value);
z.startsWith(value);
z.endsWith(value);
z.property(key, schema);
z.mime(value);

// custom checks
z.refine()
z.check()   // replaces .superRefine()

// mutations (these do not change the inferred types)
z.overwrite(value => newValue);
z.normalize();
z.trim();
z.toLowerCase();
z.toUpperCase();

// metadata (registers schema in z.globalRegistry)
z.meta({ title: "...", description: "..." });
z.describe("...");
```

### `.register()`

For registering a schema in a [registry](/metadata#registries).

```ts
const myReg = z.registry<{title: string}>();

z.string().register(myReg, { title: "My cool string schema" });
```

### `.brand()`

For *branding* a schema. Refer to the [Branded types](/api#branded-types) docs for more information.

```ts
import * as z from "zod/mini"

const USD = z.string().brand("USD");
```

### `.clone(def)`

Returns an identical clone of the current schema using the provided `def`.

```ts
const mySchema = z.string()

mySchema.clone(mySchema._zod.def);
```

## No default locale

While regular Zod automatically loads the English (`en`) locale, Zod Mini does not. This reduces the bundle size in scenarios where error messages are unnecessary, localized to a non-English language, or otherwise customized.

This means, by default the `message` property of all issues will simply read `"Invalid input"`. To load the English locale:

```ts
import * as z from "zod/mini"

z.config(z.locales.en());
```

Refer to the [Locales](/error-customization#internationalization) docs for more on localization.

# Zod

The `zod/v4` package is the "flagship" library of the Zod ecosystem. It strikes a balance between developer experience and bundle size that's ideal for the vast majority of applications.

> If you have uncommonly strict constraints around bundle size, consider [Zod Mini](/packages/mini).

Zod aims to provide a schema API that maps one-to-one to TypeScript's type system.

```ts
import * as z from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number().int().positive(),
  email: z.email(),
});
```

The API relies on methods to provide a concise, chainable, autocomplete-friendly way to define complex types.

```ts
z.string()
  .min(5)
  .max(10)
  .toLowerCase();
```

All schemas extend the `z.ZodType` base class, which in turn extends `z.$ZodType` from [`zod/v4/core`](/packages/core). All instance of `ZodType` implement the following methods:

```ts
import * as z from "zod";

const mySchema = z.string();

// parsing
mySchema.parse(data);
mySchema.safeParse(data);
mySchema.parseAsync(data);
mySchema.safeParseAsync(data);


// refinements
mySchema.refine(refinementFunc);
mySchema.superRefine(refinementFunc); // deprecated, use `.check()`
mySchema.overwrite(overwriteFunc);

// wrappers
mySchema.optional();
mySchema.nonoptional();
mySchema.nullable();
mySchema.nullish();
mySchema.default(defaultValue);
mySchema.array();
mySchema.or(otherSchema);
mySchema.transform(transformFunc);
mySchema.catch(catchValue);
mySchema.pipe(otherSchema);
mySchema.readonly();

// metadata and registries
mySchema.register(registry, metadata);
mySchema.describe(description);
mySchema.meta(metadata);

// utilities
mySchema.check(checkOrFunction);
mySchema.clone(def);
mySchema.brand<T>();
mySchema.isOptional(); // boolean
mySchema.isNullable(); // boolean
```
