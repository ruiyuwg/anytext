## Introducing Zod Mini

Zod's method-heavy API is fundamentally difficult to tree-shake. Even our simple `z.boolean()` script pulls in the implementations of a bunch of methods we didn't use, like `.optional()`, `.array()`, etc. Writing slimmer implementations can only get you so far. That's where Zod Mini comes in.

```sh
npm install zod@^4.0.0
```

It's a Zod variant with a functional, tree-shakable API that corresponds one-to-one with `zod`. Where Zod uses methods, Zod Mini generally uses wrapper functions:

````
```ts
import * as z from "zod/mini";

z.optional(z.string());

z.union([z.string(), z.number()]);

z.extend(z.object({ /* ... */ }), { age: z.number() });
```



```ts
import * as z from "zod";

z.string().optional();

z.string().or(z.number());

z.object({ /* ... */ }).extend({ age: z.number() });
```
````

Not all methods are gone! The parsing methods are identical in Zod and Zod Mini:

```ts
import * as z from "zod/mini";

z.string().parse("asdf");
z.string().safeParse("asdf");
await z.string().parseAsync("asdf");
await z.string().safeParseAsync("asdf");
```

There's also a general-purpose `.check()` method used to add refinements.

````
```ts
import * as z from "zod/mini";

z.array(z.number()).check(
  z.minLength(5),
  z.maxLength(10),
  z.refine(arr => arr.includes(5))
);
```



```ts
import * as z from "zod";

z.array(z.number())
  .min(5)
  .max(10)
  .refine(arr => arr.includes(5));
```
````

The following top-level refinements are available in Zod Mini. It should be fairly self-explanatory which Zod methods they correspond to.

```ts
import * as z from "zod/mini";

// custom checks
z.refine();

// first-class checks
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
z.property(key, schema); // for object schemas; check `input[key]` against `schema`
z.mime(value); // for file schemas (see below)

// overwrites (these *do not* change the inferred type!)
z.overwrite((value) => newValue);
z.normalize();
z.trim();
z.toLowerCase();
z.toUpperCase();
```

This more functional API makes it easier for bundlers to tree-shake the APIs you don't use. While regular Zod is still recommended for the majority of use cases, any projects with uncommonly strict bundle size constraints should consider Zod Mini.

### 6.6x reduction in core bundle size

Here's the script from above, updated to use `"zod/mini"` instead of `"zod"`.

```ts
import * as z from "zod/mini";

const schema = z.boolean();
schema.parse(false);
```

When we build this with `rollup`, the gzipped bundle size is `1.88kb`. That's an 85% (6.6x) reduction in core bundle size compared to `zod@3`.

| Package         | Bundle (gzip) |
| --------------- | ------------- |
| Zod 3           | `12.47kb`     |
| Zod 4 (regular) | `5.36kb`      |
| Zod 4 (mini)    | `1.88kb`      |

Learn more on the dedicated [`zod/mini`](/packages/mini) docs page. Complete API details are mixed into existing documentation pages; code blocks contain separate tabs for `"Zod"` and `"Zod Mini"` wherever their APIs diverge.

## Metadata

Zod 4 introduces a new system for adding strongly-typed metadata to your schemas. Metadata isn't stored inside the schema itself; instead it's stored in a "schema registry" that associates a schema with some typed metadata. To create a registry with `z.registry()`:

```ts
import * as z from "zod";

const myRegistry = z.registry<{ title: string; description: string }>();
```

To add schemas to your registry:

```ts
const emailSchema = z.string().email();

myRegistry.add(emailSchema, { title: "Email address", description: "..." });
myRegistry.get(emailSchema);
// => { title: "Email address", ... }
```

Alternatively, you can use the `.register()` method on a schema for convenience:

{/\* > Unlike all other Zod methods, `.register()` is _not_ immutable, it returns the original schema. \*/}

```ts
emailSchema.register(myRegistry, {
  title: "Email address",
  description: "...",
});
// => returns emailSchema
```

### The global registry

Zod also exports a global registry `z.globalRegistry` that accepts some common JSON Schema-compatible metadata:

```ts
z.globalRegistry.add(z.string(), {
  id: "email_address",
  title: "Email address",
  description: "Provide your email",
  examples: ["naomie@example.com"],
  extraKey: "Additional properties are also allowed",
});
```

### `.meta()`

To conveniently add a schema to `z.globalRegistry`, use the `.meta()` method.

{/\* > Unlike `.register()`, `.meta()` _is_ immutable; it returns a new instance (a clone of the original schema). \*/}

```ts
z.string().meta({
  id: "email_address",
  title: "Email address",
  description: "Provide your email",
  examples: ["naomie@example.com"],
  // ...
});
```

For compatibility with Zod 3, `.describe()` is still available, but `.meta()` is preferred.

```ts
z.string().describe("An email address");

// equivalent to
z.string().meta({ description: "An email address" });
```

## JSON Schema conversion

Zod 4 introduces first-party JSON Schema conversion via `z.toJSONSchema()`.

```ts
import * as z from "zod";

const mySchema = z.object({ name: z.string(), points: z.number() });

z.toJSONSchema(mySchema);
// => {
//   type: "object",
//   properties: {
//     name: {type: "string"},
//     points: {type: "number"},
//   },
//   required: ["name", "points"],
// }
```

Any metadata in `z.globalRegistry` is automatically included in the JSON Schema output.

```ts
const mySchema = z.object({
  firstName: z.string().describe("Your first name"),
  lastName: z.string().meta({ title: "last_name" }),
  age: z.number().meta({ examples: [12, 99] }),
});

z.toJSONSchema(mySchema);
// => {
//   type: 'object',
//   properties: {
//     firstName: { type: 'string', description: 'Your first name' },
//     lastName: { type: 'string', title: 'last_name' },
//     age: { type: 'number', examples: [ 12, 99 ] }
//   },
//   required: [ 'firstName', 'lastName', 'age' ]
// }
```

Refer to the [JSON Schema docs](/json-schema) for information on customizing the generated JSON Schema.

## Recursive objects

This was an unexpected one. After years of trying to crack this problem, I finally [found a way](https://x.com/colinhacks/status/1919286275133378670) to properly infer recursive object types in Zod. To define a recursive type:

```ts
const Category = z.object({
  name: z.string(),
  get subcategories() {
    return z.array(Category);
  },
});

type Category = z.infer<typeof Category>;
// { name: string; subcategories: Category[] }
```

You can also represent _mutually recursive types_:

```ts
const User = z.object({
  email: z.email(),
  get posts() {
    return z.array(Post);
  },
});

const Post = z.object({
  title: z.string(),
  get author() {
    return User;
  },
});
```

Unlike the Zod 3 pattern for recursive types, there's no type casting required. The resulting schemas are plain `ZodObject` instances and have the full set of methods available.

```ts
Post.pick({ title: true });
Post.partial();
Post.extend({ publishDate: z.date() });
```

## File schemas

To validate `File` instances:

```ts
const fileSchema = z.file();

fileSchema.min(10_000); // minimum .size (bytes)
fileSchema.max(1_000_000); // maximum .size (bytes)
fileSchema.mime(["image/png"]); // MIME type
```

## Internationalization

Zod 4 introduces a new `locales` API for globally translating error messages into different languages.

```ts
import * as z from "zod";

// configure English locale (default)
z.config(z.locales.en());
```

See the full list of supported locales in [Customizing errors](/error-customization#locales); this section is always updated with a list of supported languages as they become available.

## Error pretty-printing

The popularity of the [`zod-validation-error`](https://www.npmjs.com/package/zod-validation-error) package demonstrates that there's significant demand for an official API for pretty-printing errors. If you are using that package currently, by all means continue using it.

Zod now implements a top-level `z.prettifyError` function for converting a `ZodError` to a user-friendly formatted string.

```ts
const myError = new z.ZodError([
  {
    code: "unrecognized_keys",
    keys: ["extraField"],
    path: [],
    message: 'Unrecognized key: "extraField"',
  },
  {
    expected: "string",
    code: "invalid_type",
    path: ["username"],
    message: "Invalid input: expected string, received number",
  },
  {
    origin: "number",
    code: "too_small",
    minimum: 0,
    inclusive: true,
    path: ["favoriteNumbers", 1],
    message: "Too small: expected number to be >=0",
  },
]);

z.prettifyError(myError);
```

This returns the following pretty-printable multi-line string:

```ts
✖ Unrecognized key: "extraField"
✖ Invalid input: expected string, received number
  → at username
✖ Invalid input: expected number, received string
  → at favoriteNumbers[1]
```

Currently the formatting isn't configurable; this may change in the future.

## Top-level string formats

All "string formats" (email, etc.) have been promoted to top-level functions on the `z` module. This is both more concise and more tree-shakable. The method equivalents (`z.string().email()`, etc.) are still available but have been deprecated. They'll be removed in the next major version.

```ts
z.email();
z.uuidv4();
z.uuidv7();
z.uuidv8();
z.ipv4();
z.ipv6();
z.cidrv4();
z.cidrv6();
z.url();
z.e164();
z.base64();
z.base64url();
z.jwt();
z.lowercase();
z.iso.date();
z.iso.datetime();
z.iso.duration();
z.iso.time();
```

### Custom email regex

The `z.email()` API now supports a custom regular expression. There is no one canonical email regex; different applications may choose to be more or less strict. For convenience Zod exports some common ones.

```ts
// Zod's default email regex (Gmail rules)
// see colinhacks.com/essays/reasonable-email-regex
z.email(); // z.regexes.email

// the regex used by browsers to validate input[type=email] fields
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
z.email({ pattern: z.regexes.html5Email });

// the classic emailregex.com regex (RFC 5322)
z.email({ pattern: z.regexes.rfc5322Email });

// a loose regex that allows Unicode (good for intl emails)
z.email({ pattern: z.regexes.unicodeEmail });
```

## Template literal types

Zod 4 implements `z.templateLiteral()`. Template literal types are perhaps the biggest feature of TypeScript's type system that wasn't previously representable.

```ts
const hello = z.templateLiteral(["hello, ", z.string()]);
// `hello, ${string}`

const cssUnits = z.enum(["px", "em", "rem", "%"]);
const css = z.templateLiteral([z.number(), cssUnits]);
// `${number}px` | `${number}em` | `${number}rem` | `${number}%`

const email = z.templateLiteral([z.string().min(1), "@", z.string().max(64)]);
// `${string}@${string}` (the min/max refinements are enforced!)
```

Every Zod schema type that can be stringified stores an internal regex: strings, string formats like `z.email()`, numbers, boolean, bigint, enums, literals, undefined/optional, null/nullable, and other template literals. The `z.templateLiteral` constructor concatenates these into a super-regex, so things like string formats (`z.email()`) are properly enforced (but custom refinements are not!).

Read the [template literal docs](/api#template-literals) for more info.

## Number formats

New numeric "formats" have been added for representing fixed-width integer and float types. These return a `ZodNumber` instance with proper inclusive minimum/maximum constraints already added.

```ts
z.int(); // [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
z.float32(); // [-3.4028234663852886e38, 3.4028234663852886e38]
z.float64(); // [-1.7976931348623157e308, 1.7976931348623157e308]
z.int32(); // [-2147483648, 2147483647]
z.uint32(); // [0, 4294967295]
```

Similarly the following `bigint` numeric formats have also been added. These integer types exceed what can be safely represented by a `number` in JavaScript, so these return a `ZodBigInt` instance with the proper inclusive minimum/maximum constraints already added.

```ts
z.int64(); // [-9223372036854775808n, 9223372036854775807n]
z.uint64(); // [0n, 18446744073709551615n]
```

## Stringbool

The existing `z.coerce.boolean()` API is very simple: falsy values (`false`, `undefined`, `null`, `0`, `""`, `NaN` etc) become `false`, truthy values become `true`.

This is still a good API, and its behavior aligns with the other `z.coerce` APIs. But some users requested a more sophisticated "env-style" boolean coercion. To support this, Zod 4 introduces `z.stringbool()`:

```ts
const strbool = z.stringbool();

strbool.parse("true"); // => true
strbool.parse("1"); // => true
strbool.parse("yes"); // => true
strbool.parse("on"); // => true
strbool.parse("y"); // => true
strbool.parse("enabled"); // => true

strbool.parse("false"); // => false
strbool.parse("0"); // => false
strbool.parse("no"); // => false
strbool.parse("off"); // => false
strbool.parse("n"); // => false
strbool.parse("disabled"); // => false

strbool.parse(/* anything else */); // ZodError<[{ code: "invalid_value" }]>
```

To customize the truthy and falsy values:

```ts
z.stringbool({
  truthy: ["yes", "true"],
  falsy: ["no", "false"],
});
```

Refer to the [`z.stringbool()` docs](/api#stringbool) for more information.

## Simplified error customization

The majority of breaking changes in Zod 4 involve the _error customization_ APIs. They were a bit of a mess in Zod 3; Zod 4 makes things significantly more elegant, to the point where I think it's worth highlighting here.

Long story short, there is now a single, unified `error` parameter for customizing errors, replacing the following APIs:

Replace `message` with `error`. (The `message` parameter is still supported but deprecated.)

```diff
- z.string().min(5, { message: "Too short." });
+ z.string().min(5, { error: "Too short." });
```

Replace `invalid_type_error` and `required_error` with `error` (function syntax):

```diff
// Zod 3
- z.string({
-   required_error: "This field is required"
-   invalid_type_error: "Not a string",
- });

// Zod 4
+ z.string({ error: (issue) => issue.input === undefined ?
+  "This field is required" :
+  "Not a string"
+ });
```

Replace `errorMap` with `error` (function syntax):

```diff
// Zod 3
- z.string({
-   errorMap: (issue, ctx) => {
-     if (issue.code === "too_small") {
-       return { message: `Value must be >${issue.minimum}` };
-     }
-     return { message: ctx.defaultError };
-   },
- });

// Zod 4
+ z.string({
+   error: (issue) => {
+     if (issue.code === "too_small") {
+       return `Value must be >${issue.minimum}`
+     }
+   },
+ });
```

## Upgraded `z.discriminatedUnion()`

Discriminated unions now support a number of schema types not previously supported, including unions and pipes:

```ts
const MyResult = z.discriminatedUnion("status", [
  // simple literal
  z.object({ status: z.literal("aaa"), data: z.string() }),
  // union discriminator
  z.object({ status: z.union([z.literal("bbb"), z.literal("ccc")]) }),
  // pipe discriminator
  z.object({ status: z.literal("fail").transform((val) => val.toUpperCase()) }),
]);
```

Perhaps most importantly, discriminated unions now _compose_—you can use one discriminated union as a member of another.

```ts
const BaseError = z.object({
  status: z.literal("failed"),
  message: z.string(),
});

const MyResult = z.discriminatedUnion("status", [
  z.object({ status: z.literal("success"), data: z.string() }),
  z.discriminatedUnion("code", [
    BaseError.extend({ code: z.literal(400) }),
    BaseError.extend({ code: z.literal(401) }),
    BaseError.extend({ code: z.literal(500) }),
  ]),
]);
```

## Multiple values in `z.literal()`

The `z.literal()` API now optionally supports multiple values.

```ts
const httpCodes = z.literal([200, 201, 202, 204, 206, 207, 208, 226]);

// previously in Zod 3:
const httpCodes = z.union([
  z.literal(200),
  z.literal(201),
  z.literal(202),
  z.literal(204),
  z.literal(206),
  z.literal(207),
  z.literal(208),
  z.literal(226),
]);
```

## Refinements live inside schemas

In Zod 3, they were stored in a `ZodEffects` class that wrapped the original schema. This was inconvenient, as it meant you couldn't interleave `.refine()` with other schema methods like `.min()`.

```ts
z.string()
  .refine((val) => val.includes("@"))
  .min(5);
// ^ ❌ Property 'min' does not exist on type ZodEffects<ZodString, string, string>
```

In Zod 4, refinements are stored inside the schemas themselves, so the code above works as expected.

```ts
z.string()
  .refine((val) => val.includes("@"))
  .min(5); // ✅
```

### `.overwrite()`

The `.transform()` method is extremely useful, but it has one major downside: the output type is no longer _introspectable_ at runtime. The transform function is a black box that can return anything. This means (among other things) there's no sound way to convert the schema to JSON Schema.

```ts
const Squared = z.number().transform((val) => val ** 2);
// => ZodPipe<ZodNumber, ZodTransform>
```

Zod 4 introduces a new `.overwrite()` method for representing transforms that _don't change the inferred type_. Unlike `.transform()`, this method returns an instance of the original class. The overwrite function is stored as a refinement, so it doesn't (and can't) modify the inferred type.

```ts
z.number()
  .overwrite((val) => val ** 2)
  .max(100);
// => ZodNumber
```

> The existing `.trim()`, `.toLowerCase()` and `.toUpperCase()` methods have been reimplemented using `.overwrite()`.

## An extensible foundation: `zod/v4/core`

While this will not be relevant to the majority of Zod users, it's worth highlighting. The addition of Zod Mini necessitated the creation of a shared sub-package `zod/v4/core` which contains the core functionality shared between Zod and Zod Mini.

I was resistant to this at first, but now I see it as one of Zod 4's most important features. It lets Zod level up from a simple library to a fast validation "substrate" that can be sprinkled into other libraries.

If you're building a schema library, refer to the implementations of Zod and Zod Mini to see how to build on top of the foundation `zod/v4/core` provides. Don't hesitate to get in touch in GitHub discussions or via [X](https://x.com/colinhacks)/[Bluesky](https://bsky.app/profile/colinhacks.com) for help or feedback.

## Wrapping up

I'm planning to write up a series of additional posts explaining the design process behind some major features like Zod Mini. I'll update this section as those get posted.

For library authors, there is now a dedicated [For library authors](/library-authors) guide that describes the best practices for building on top of Zod. It answers common questions about how to support Zod 3 & Zod 4 (including Mini) simultaneously.

```sh
pnpm upgrade zod@latest
```

Happy parsing!
— Colin McDonnell [@colinhacks](https://x.com/colinhacks)
