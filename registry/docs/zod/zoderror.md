## `ZodError`

{/\*

### changes to `.message`

Previously the `.message` property on `ZodError` was a JSON.stringified copy of the `.issues` array. This was redundant, confusing, and a bit of an abuse of the `.message` property. Also due to the [`Error` prototype changes](#safeparse) (and inconsistencies in how Node.js logs `Error` subclasses vs other objects) the logging of a multi-line `.message` property got a lot uglier:

```sh
$ tsx index.ts
ZodError {
message: '[\n' +
  '  {\n' +
  '    "expected": "string",\n' +
  '    "code": "invalid_type",\n' +
  '    "path": [],\n' +
  '    "message": "Invalid input: expected string, received number"\n' +
  '  }\n' +
  ']'
}
```

For these reasons, the `.message` property is left empty and the `.issues` array is marked as enumerable. This keeps error logging consistent and pretty:

```sh
$ tsx index.ts
z.string().parse(234);

ZodError {
issues: [
  {
    expected: 'string',
    code: 'invalid_type',
    path: [],
    message: 'Invalid input: expected string, received number'
  }
]
}
```

Vitest uses special handling for `Error` subclasses that ignores enumerable properties.  \*/}

### updates issue formats

The issue formats have been dramatically streamlined.

```ts
import * as z from "zod"; // v4

type IssueFormats = 
  | z.core.$ZodIssueInvalidType
  | z.core.$ZodIssueTooBig
  | z.core.$ZodIssueTooSmall
  | z.core.$ZodIssueInvalidStringFormat
  | z.core.$ZodIssueNotMultipleOf
  | z.core.$ZodIssueUnrecognizedKeys
  | z.core.$ZodIssueInvalidValue
  | z.core.$ZodIssueInvalidUnion
  | z.core.$ZodIssueInvalidKey // new: used for z.record/z.map 
  | z.core.$ZodIssueInvalidElement // new: used for z.map/z.set
  | z.core.$ZodIssueCustom;
```

Below is the list of Zod 3 issues types and their Zod 4 equivalent:

```ts
import * as z from "zod"; // v3

export type IssueFormats =
  | z.ZodInvalidTypeIssue // ♻️ renamed to z.core.$ZodIssueInvalidType
  | z.ZodTooBigIssue  // ♻️ renamed to z.core.$ZodIssueTooBig
  | z.ZodTooSmallIssue // ♻️ renamed to z.core.$ZodIssueTooSmall
  | z.ZodInvalidStringIssue // ♻️ z.core.$ZodIssueInvalidStringFormat
  | z.ZodNotMultipleOfIssue // ♻️ renamed to z.core.$ZodIssueNotMultipleOf
  | z.ZodUnrecognizedKeysIssue // ♻️ renamed to z.core.$ZodIssueUnrecognizedKeys
  | z.ZodInvalidUnionIssue // ♻️ renamed to z.core.$ZodIssueInvalidUnion
  | z.ZodCustomIssue // ♻️ renamed to z.core.$ZodIssueCustom
  | z.ZodInvalidEnumValueIssue // ❌ merged in z.core.$ZodIssueInvalidValue
  | z.ZodInvalidLiteralIssue // ❌ merged into z.core.$ZodIssueInvalidValue
  | z.ZodInvalidUnionDiscriminatorIssue // ❌ throws an Error at schema creation time
  | z.ZodInvalidArgumentsIssue // ❌ z.function throws ZodError directly
  | z.ZodInvalidReturnTypeIssue // ❌ z.function throws ZodError directly
  | z.ZodInvalidDateIssue // ❌ merged into invalid_type
  | z.ZodInvalidIntersectionTypesIssue // ❌ removed (throws regular Error)
  | z.ZodNotFiniteIssue // ❌ infinite values no longer accepted (invalid_type)
```

While certain Zod 4 issue types have been merged, dropped, and modified, each issue remains structurally similar to Zod 3 counterpart (identical, in most cases). All issues still conform to the same base interface as Zod 3, so most common error handling logic will work without modification.

```ts
export interface $ZodIssueBase {
  readonly code?: string;
  readonly input?: unknown;
  readonly path: PropertyKey[];
  readonly message: string;
}
```

### changes error map precedence

The error map precedence has been changed to be more consistent. Specifically, an error map passed into `.parse()` *no longer* takes precedence over a schema-level error map.

```ts
const mySchema = z.string({ error: () => "Schema-level error" });

// in Zod 3
mySchema.parse(12, { error: () => "Contextual error" }); // => "Contextual error"

// in Zod 4
mySchema.parse(12, { error: () => "Contextual error" }); // => "Schema-level error"
```

### deprecates `.format()`

The `.format()` method on `ZodError` has been deprecated. Instead use the top-level `z.treeifyError()` function. Read the [Formatting errors docs](/error-formatting) for more information.

### deprecates `.flatten()`

The `.flatten()` method on `ZodError` has also been deprecated. Instead use the top-level `z.treeifyError()` function. Read the [Formatting errors docs](/error-formatting) for more information.

### drops `.formErrors`

This API was identical to `.flatten()`. It exists for historical reasons and isn't documented.

### deprecates `.addIssue()` and `.addIssues()`

Directly push to `err.issues` array instead, if necessary.

```ts
myError.issues.push({ 
  // new issue
});
```

{/\* ## `.and()` dropped

The `.and()` method on `ZodType` has been dropped in favor of `z.intersection(A, B)`. Not only is this method rarely used, there are few good reasons to use intersections at all. The `.and()` API prevented bundlers from treeshaking `ZodIntersection`, a fairly large and complex class.

````ts
z.object({ a: z.string() }).and(z.object({ b: z.number() })); // ❌

// use z.intersection
z.intersection(z.object({ a: z.string() }), z.object({ b: z.number() })); // ✅
// or .extend() when possible
z.object({ a: z.string() }).extend(z.object({ b: z.number() })); // ✅
``` */}

## `z.number()`

### no infinite values

`POSITIVE_INFINITY` and `NEGATIVE_INFINITY` are no longer considered valid values for `z.number()`.

### `.safe()` no longer accepts floats

In Zod 3, `z.number().safe()` is deprecated. It now behaves identically to `.int()` (see below). Importantly, that means it no longer accepts floats.

### `.int()` accepts safe integers only

The `z.number().int()` API no longer accepts unsafe integers (outside the range of `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`). Using integers out of this range causes spontaneous rounding errors. (Also: You should switch to `z.int()`.)

## `z.string()` updates

### deprecates `.email()` etc

String formats are now represented as *subclasses* of `ZodString`, instead of simple internal refinements. As such, these APIs have been moved to the top-level `z` namespace. Top-level APIs are also less verbose and more tree-shakable.

```ts
z.email();
z.uuid();
z.url();
z.emoji();         // validates a single emoji character
z.base64();
z.base64url();
z.nanoid();
z.cuid();
z.cuid2();
z.ulid();
z.ipv4();
z.ipv6();
z.cidrv4();          // ip range
z.cidrv6();          // ip range
z.iso.date();
z.iso.time();
z.iso.datetime();
z.iso.duration();
````

The method forms (`z.string().email()`) still exist and work as before, but are now deprecated.

```ts
z.string().email(); // ❌ deprecated
z.email(); // ✅ 
```

### stricter `.uuid()`

The `z.uuid()` now validates UUIDs more strictly against the RFC 9562/4122 specification; specifically, the variant bits must be `10` per the spec. For a more permissive "UUID-like" validator, use `z.guid()`.

```ts
z.uuid(); // RFC 9562/4122 compliant UUID
z.guid(); // any 8-4-4-4-12 hex pattern
```

### no padding in `.base64url()`

Padding is no longer allowed in `z.base64url()` (formerly `z.string().base64url()`). Generally it's desirable for base64url strings to be unpadded and URL-safe.

### drops `z.string().ip()`

This has been replaced with separate `.ipv4()` and `.ipv6()` methods. Use `z.union()` to combine them if you need to accept both.

```ts
z.string().ip() // ❌
z.ipv4() // ✅
z.ipv6() // ✅
```

### updates `z.string().ipv6()`

Validation now happens using the `new URL()` constructor, which is far more robust than the old regular expression approach. Some invalid values that passed validation previously may now fail.

### drops `z.string().cidr()`

Similarly, this has been replaced with separate `.cidrv4()` and `.cidrv6()` methods. Use `z.union()` to combine them if you need to accept both.

```ts
z.string().cidr() // ❌
z.cidrv4() // ✅
z.cidrv6() // ✅
```

## `z.coerce` updates

The input type of all `z.coerce` schemas is now `unknown`.

```ts
const schema = z.coerce.string();
type schemaInput = z.input<typeof schema>;

// Zod 3: string;
// Zod 4: unknown;
```

## `.default()` updates

The application of `.default()` has changed in a subtle way. If the input is `undefined`, `ZodDefault` short-circuits the parsing process and returns the default value. The default value must be assignable to the *output type*.

```ts
const schema = z.string()
  .transform(val => val.length)
  .default(0); // should be a number
schema.parse(undefined); // => 0
```

In Zod 3, `.default()` expected a value that matched the *input type*. `ZodDefault` would parse the default value, instead of short-circuiting. As such, the default value must be assignable to the *input type* of the schema.

```ts
// Zod 3
const schema = z.string()
  .transform(val => val.length)
  .default("tuna");
schema.parse(undefined); // => 4
```

To replicate the old behavior, Zod implements a new `.prefault()` API. This is short for "pre-parse default".

```ts
// Zod 3
const schema = z.string()
  .transform(val => val.length)
  .prefault("tuna");
schema.parse(undefined); // => 4
```
