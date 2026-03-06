## `.refine()`

### ignores type predicates

In Zod 3, passing a [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) as a refinement functions could still narrow the type of a schema. This wasn't documented but was discussed in some issues. This is no longer the case.

```ts
const mySchema = z.unknown().refine((val): val is string => {
  return typeof val === "string";
});

type MySchema = z.infer<typeof mySchema>;
// Zod 3: `string`
// Zod 4: still `unknown`
```

### drops `ctx.path`

Zod's new parsing architecture does not eagerly evaluate the `path` array. This was a necessary change that unlocks Zod 4's dramatic performance improvements.

```ts
z.string().superRefine((val, ctx) => {
  ctx.path; // ❌ no longer available
});
```

### drops function as second argument

The following horrifying overload has been removed.

```ts
const longString = z.string().refine(
  (val) => val.length > 10,
  (val) => ({ message: `${val} is not more than 10 characters` }),
);
```

{/\* ## `.superRefine()` deprecated

The `.superRefine()` method has been deprecated in favor of `.check()`. The `.check()` method provides the same functionality with a cleaner API. The `.check()` method is also available on Zod and Zod Mini schemas.

````ts
const UniqueStringArray = z.array(z.string()).check((ctx) => {
if (ctx.value.length > 3) {
  ctx.issues.push({
    code: "too_big",
    maximum: 3,
    origin: "array",
    inclusive: true,
    message: "Too many items 😡",
    input: ctx.value
  });
}

if (ctx.value.length !== new Set(ctx.value).size) {
  ctx.issues.push({
    code: "custom",
    message: `No duplicates allowed.`,
    input: ctx.value
  });
}
});
``` */}

## `z.ostring()`, etc dropped

The undocumented convenience methods `z.ostring()`, `z.onumber()`, etc. have been removed. These were shorthand methods for defining optional string schemas.

## `z.literal()`

### drops `symbol` support

Symbols aren't considered literal values, nor can they be simply compared with `===`. This was an oversight in Zod 3.

## static `.create()` factories dropped

Previously all Zod classes defined a static `.create()` method. These are now implemented as standalone factory functions.

```ts
z.ZodString.create(); // ❌
````

## `z.record()`

### drops single argument usage

Before, `z.record()` could be used with a single argument. This is no longer supported.

```ts
// Zod 3
z.record(z.string()); // ✅

// Zod 4
z.record(z.string()); // ❌
z.record(z.string(), z.string()); // ✅
```

### improves enum support

Records have gotten a lot smarter. In Zod 3, passing an enum into `z.record()` as a key schema would result in a partial type

```ts
const myRecord = z.record(z.enum(["a", "b", "c"]), z.number());
// { a?: number; b?: number; c?: number; }
```

In Zod 4, this is no longer the case. The inferred type is what you'd expect, and Zod ensures exhaustiveness; that is, it makes sure all enum keys exist in the input during parsing.

```ts
const myRecord = z.record(z.enum(["a", "b", "c"]), z.number());
// { a: number; b: number; c: number; }
```

To replicate the old behavior with optional keys, use `z.partialRecord()`:

```ts
const myRecord = z.partialRecord(z.enum(["a", "b", "c"]), z.number());
// { a?: number; b?: number; c?: number; }
```

## `z.intersection()`

### throws `Error` on merge conflict

Zod intersection parses the input against two schemas, then attempts to merge the results. In Zod 3, when the results were unmergable, Zod threw a `ZodError` with a special `"invalid_intersection_types"` issue.

In Zod 4, this will throw a regular `Error` instead. The existence of unmergable results indicates a structural problem with the schema: an intersection of two incompatible types. Thus, a regular error is more appropriate than a validation error.
