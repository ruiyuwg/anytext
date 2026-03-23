## Internal changes

> The typical user of Zod can likely ignore everything below this line. These changes do not impact the user-facing `z` APIs.

There are too many internal changes to list here, but some may be relevant to regular users who are (intentionally or not) relying on certain implementation details. These changes will be of particular interest to library authors building tools on top of Zod.

### updates generics

The generic structure of several classes has changed. Perhaps most significant is the change to the `ZodType` base class:

```ts
// Zod 3
class ZodType<Output, Def extends z.ZodTypeDef, Input = Output> {
  // ...
}

// Zod 4
class ZodType<Output = unknown, Input = unknown> {
  // ...
}
```

The second generic `Def` has been entirely removed. Instead the base class now only tracks `Output` and `Input`. While previously the `Input` value defaulted to `Output`, it now defaults to `unknown`. This allows generic functions involving `z.ZodType` to behave more intuitively in many cases.

```ts
function inferSchema<T extends z.ZodType>(schema: T): T {
  return schema;
};

inferSchema(z.string()); // z.ZodString
```

The need for `z.ZodTypeAny` has been eliminated; just use `z.ZodType` instead.

### adds `z.core`

Many utility functions and types have been moved to the new `zod/v4/core` sub-package, to facilitate code sharing between Zod and Zod Mini.

```ts
import * as z from "zod/v4/core";

function handleError(iss: z.$ZodError) {
  // do stuff
}
```

For convenience, the contents of `zod/v4/core` are also re-exported from `zod` and `zod/mini` under the `z.core` namespace.

```ts
import * as z from "zod";

function handleError(iss: z.core.$ZodError) {
  // do stuff
}
```

Refer to the [Zod Core](/packages/core) docs for more information on the contents of the core sub-library.

### moves `._def`

The `._def` property is now moved to `._zod.def`. The structure of all internal defs is subject to change; this is relevant to library authors but won't be comprehensively documented here.

### drops `ZodEffects`

This doesn't affect the user-facing APIs, but it's an internal change worth highlighting. It's part of a larger restructure of how Zod handles *refinements*.

Previously both refinements and transformations lived inside a wrapper class called `ZodEffects`. That means adding either one to a schema would wrap the original schema in a `ZodEffects` instance. In Zod 4, refinements now live inside the schemas themselves. More accurately, each schema contains an array of "checks"; the concept of a "check" is new in Zod 4 and generalizes the concept of a refinement to include potentially side-effectful transforms like `z.toLowerCase()`.

This is particularly apparent in the Zod Mini API, which heavily relies on the `.check()` method to compose various validations together.

```ts
import * as z from "zod/mini";

z.string().check(
  z.minLength(10),
  z.maxLength(100),
  z.toLowerCase(),
  z.trim(),
);
```

### adds `ZodTransform`

Meanwhile, transforms have been moved into a dedicated `ZodTransform` class. This schema class represents an input transform; in fact, you can actually define standalone transformations now:

```ts
import * as z from "zod";

const schema = z.transform(input => String(input));

schema.parse(12); // => "12"
```

This is primarily used in conjunction with `ZodPipe`. The `.transform()` method now returns an instance of `ZodPipe`.

```ts
z.string().transform(val => val); // ZodPipe<ZodString, ZodTransform>
```

### drops `ZodPreprocess`

As with `.transform()`, the `z.preprocess()` function now returns a `ZodPipe` instance instead of a dedicated `ZodPreprocess` instance.

```ts
z.preprocess(val => val, z.string()); // ZodPipe<ZodTransform, ZodString>
```

### drops `ZodBranded`

Branding is now handled with a direct modification to the inferred type, instead of a dedicated `ZodBranded` class. The user-facing APIs remain the same.

{/\* - Dropping support for ES5

- Zod relies on `Set` internally \*/}

{/\* - `z.keyof` now returns `ZodEnum` instead of `ZodLiteral` \*/}

{/\* ## Changed: `.refine()`

The `.refine()` method used to accept a function as the second argument.

```ts
// no longer supported
const longString = z.string().refine(
(val) => val.length > 10,
(val) => ({ message: `${val} is not more than 10 characters` })
);
```

This can be better represented with the new `error` parameter, so this overload has been removed.

```ts
const longString = z.string().refine((val) => val.length > 10, {
error: (issue) => `${issue.input} is not more than 10 characters`,
});
``
*/}

{/* 
- No support for `null` or `undefined` in `z.literal`
- `z.literal(null)`
- `z.literal(undefined)`
- this was never documented */}

{/* - Array min/max/length checks now run after parsing. This means they won't run if the parse has already aborted. */}

{/* - Drops single-argument `z.record()` */}

{/* - Smarter `z.record`: no longer Partial by default */}

{/* - Intersection merge errors are now thrown as Error not ZodError
- These usually do not reflect a parse error but a structural problem with the schema */}

{/* - Consolidates `unknownKeys` and `catchall` in ZodObject */}

{/* - Dropping
- `ZodBranded`: purely a static-domain annotation
- `ZodFunction` */}

{/* - The `description` is now stored in `z.defaultRegistry`, not the def
- No support for `description` in factory params
- Descriptions do not cascade in `.optional()`, etc */}

{/* - Enums:
- ZodEnum and ZodNativeEnum are merged
- `.Values` and `.Enum` are removed. Use `.enum` instead.
- `.options` is removed */}


# Release notes

import { Callout } from "fumadocs-ui/components/callout";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

After a year of active development: Zod 4 is now stable! It's faster, slimmer, more `tsc`-efficient, and implements some long-requested features.


Huge thanks to [Clerk](https://go.clerk.com/zod-clerk), who supported my work on Zod 4 through their extremely generous [OSS Fellowship](https://clerk.com/blog/zod-fellowship). They were an amazing partner throughout the (much longer than anticipated!) development process.


## Versioning

{/*  
**Update** — `zod@4.0.0` has now been published to npm. To upgrad
 */}

{/* To simplify the migration process both for users and Zod's ecosystem of associated libraries, Zod 4 will initially published alongside Zod 3 as part of the `zod@3.25` release. Despite the version number, it is considered stable and ready for production use. */}

To upgrade:

```

npm install zod@^4.0.0

````

{/* Down the road, when there's broad support for Zod 4, we'll publish `zod@4.0.0` on npm. At this point, Zod 4 will be exported from the package root (`"zod"`). The `"zod/v4"` subpath will remain available. For a detailed writeup on the reasons for this versioning scheme, refer to [this issue](https://github.com/colinhacks/zod/issues/4371).  */}

For a complete list of breaking changes, refer to the [Migration guide](/v4/changelog). This post focuses on new features & enhancements.

{/* A number of popular ecosystem packages have Zod 4 support ready or nearly ready. Track the following pull requests for updates:
  - [`drizzle-zod#4478`](https://github.com/drizzle-team/drizzle-orm/pull/4478)
  - [`@hono/zod-validator#1173`](https://github.com/honojs/middleware/pull/1173) */}

## Why a new major version?

Zod v3.0 was released in May 2021 (!). Back then Zod had 2700 stars on GitHub and 600k weekly downloads. Today it has 37.8k stars and 31M weekly downloads (up from 23M when the beta came out 6 weeks ago!). After 24 minor versions, the Zod 3 codebase had hit a ceiling; the most commonly requested features and improvements require breaking changes.

Zod 4 fixes a number of long-standing design limitations of Zod 3 in one fell swoop, paving the way for several long-requested features and a huge leap in performance. It closes 9 of Zod's [10 most upvoted open issues](https://github.com/colinhacks/zod/issues?q=is%3Aissue%20state%3Aopen%20sort%3Areactions-%2B1-desc). With luck, it will serve as the new foundation for many more years to come.

For a scannable breakdown of what's new, see the table of contents. Click on any item to jump to that section.

## Benchmarks

You can run these benchmarks yourself in the Zod repo:

```sh
$ git clone git@github.com:colinhacks/zod.git
$ cd zod
$ git switch v4
$ pnpm install
````

Then to run a particular benchmark:

```sh
$ pnpm bench <name>
```

### 14x faster string parsing

```sh
$ pnpm bench string
runtime: node v22.13.0 (arm64-darwin)

benchmark      time (avg)             (min … max)       p75       p99      p999
------------------------------------------------- -----------------------------
• z.string().parse
------------------------------------------------- -----------------------------
zod3          363 µs/iter       (338 µs … 683 µs)    351 µs    467 µs    572 µs
zod4       24'674 ns/iter    (21'083 ns … 235 µs) 24'209 ns 76'125 ns    120 µs

summary for z.string().parse
  zod4
   14.71x faster than zod3
```

### 7x faster array parsing

```sh
$ pnpm bench array
runtime: node v22.13.0 (arm64-darwin)

benchmark      time (avg)             (min … max)       p75       p99      p999
------------------------------------------------- -----------------------------
• z.array() parsing
------------------------------------------------- -----------------------------
zod3          147 µs/iter       (137 µs … 767 µs)    140 µs    246 µs    520 µs
zod4       19'817 ns/iter    (18'125 ns … 436 µs) 19'125 ns 44'500 ns    137 µs

summary for z.array() parsing
  zod4
   7.43x faster than zod3
```

### 6.5x faster object parsing

This runs the [Moltar validation library benchmark](https://moltar.github.io/typescript-runtime-type-benchmarks/).

```sh
$ pnpm bench object-moltar
benchmark      time (avg)             (min … max)       p75       p99      p999
------------------------------------------------- -----------------------------
• z.object() safeParse
------------------------------------------------- -----------------------------
zod3          805 µs/iter     (771 µs … 2'802 µs)    804 µs    928 µs  2'802 µs
zod4          124 µs/iter     (118 µs … 1'236 µs)    119 µs    231 µs    329 µs

summary for z.object() safeParse
  zod4
   6.5x faster than zod3
```
