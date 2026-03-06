## Enums

Use `z.enum` to validate inputs against a fixed set of allowable _string_ values.

```ts
const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);

FishEnum.parse("Salmon"); // => "Salmon"
FishEnum.parse("Swordfish"); // => ❌
```

Careful — If you declare your string array as a variable, Zod won't be able to properly infer the exact values of each element.

```ts
const fish = ["Salmon", "Tuna", "Trout"];

const FishEnum = z.enum(fish);
type FishEnum = z.infer; // string
```

To fix this, always pass the array directly into the `z.enum()` function, or use [`as const`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions).

```ts
const fish = ["Salmon", "Tuna", "Trout"] as const;

const FishEnum = z.enum(fish);
type FishEnum = z.infer; // "Salmon" | "Tuna" | "Trout"
```

Enum-like object literals (`{ [key: string]: string | number }`) are supported.

```ts
const Fish = {
  Salmon: 0,
  Tuna: 1,
} as const;

const FishEnum = z.enum(Fish);
FishEnum.parse(Fish.Salmon); // => ✅
FishEnum.parse(0); // => ✅
FishEnum.parse(2); // => ❌
```

You can also pass in an externally-declared TypeScript enum.

```ts
enum Fish {
  Salmon = 0,
  Tuna = 1,
}

const FishEnum = z.enum(Fish);
FishEnum.parse(Fish.Salmon); // => ✅
FishEnum.parse(0); // => ✅
FishEnum.parse(2); // => ❌
```

**Zod 4** — This replaces the `z.nativeEnum()` API in Zod 3.

Note that using TypeScript's `enum` keyword is [not recommended](https://www.totaltypescript.com/why-i-dont-like-typescript-enums).

```ts
enum Fish {
  Salmon = "Salmon",
  Tuna = "Tuna",
  Trout = "Trout",
}

const FishEnum = z.enum(Fish);
```

### `.enum`

To extract the schema's values as an enum-like object:

````
```ts
const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);

FishEnum.enum;
// => { Salmon: "Salmon", Tuna: "Tuna", Trout: "Trout" }
```



```ts
const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);

FishEnum.def.entries;
// => { Salmon: "Salmon", Tuna: "Tuna", Trout: "Trout" }
```
````

### `.exclude()`

To create a new enum schema, excluding certain values:

````
```ts
const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
const TunaOnly = FishEnum.exclude(["Salmon", "Trout"]);
```



```ts
// no equivalent

```
````

### `.extract()`

To create a new enum schema, extracting certain values:

````
```ts
const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
const SalmonAndTroutOnly = FishEnum.extract(["Salmon", "Trout"]);
```



```ts
// no equivalent

```
````

## Stringbools \[#stringbool]

> **💎 New in Zod 4**

In some cases (e.g. parsing environment variables) it's valuable to parse certain string "boolish" values to a plain `boolean` value. To support this, Zod 4 introduces `z.stringbool()`:

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
// these are the defaults
z.stringbool({
  truthy: ["true", "1", "yes", "on", "y", "enabled"],
  falsy: ["false", "0", "no", "off", "n", "disabled"],
});
```

By default the schema is _case-insensitive_; all inputs are converted to lowercase before comparison to the `truthy`/`falsy` values. To make it case-sensitive:

```ts
z.stringbool({
  case: "sensitive",
});
```

## Optionals

To make a schema _optional_ (that is, to allow `undefined` inputs).

````
```ts
z.optional(z.literal("yoda")); // or z.literal("yoda").optional()
```



```ts
z.optional(z.literal("yoda"));
```
````

This returns a `ZodOptional` instance that wraps the original schema. To extract the inner schema:

````
```ts
optionalYoda.unwrap(); // ZodLiteral<"yoda">
```



```ts
optionalYoda.def.innerType; // ZodMiniLiteral<"yoda">
```
````

## Nullables

To make a schema _nullable_ (that is, to allow `null` inputs).

````
```ts
z.nullable(z.literal("yoda")); // or z.literal("yoda").nullable()
```



```ts
const nullableYoda = z.nullable(z.literal("yoda"));
```
````

This returns a `ZodNullable` instance that wraps the original schema. To extract the inner schema:

````
```ts
nullableYoda.unwrap(); // ZodLiteral<"yoda">
```



```ts
nullableYoda.def.innerType; // ZodMiniLiteral<"yoda">
```
````

## Nullish

To make a schema _nullish_ (both optional and nullable):

````
```ts
const nullishYoda = z.nullish(z.literal("yoda"));
```



```ts
const nullishYoda = z.nullish(z.literal("yoda"));
```
````

Refer to the TypeScript manual for more about the concept of [nullish](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing).

## Unknown

Zod aims to mirror TypeScript's type system one-to-one. As such, Zod provides APIs to represent the following special types:

```ts
// allows any values
z.any(); // inferred type: `any`
z.unknown(); // inferred type: `unknown`
```

## Never

No value will pass validation.

```ts
z.never(); // inferred type: `never`
```
