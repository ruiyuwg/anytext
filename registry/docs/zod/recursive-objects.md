## Recursive objects

To define a self-referential type, use a [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) on the key. This lets JavaScript resolve the cyclical schema at runtime.

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

Though recursive schemas are supported, passing cyclical data into Zod will cause an infinite loop.

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

All object APIs (`.pick()`, `.omit()`, `.required()`, `.partial()`, etc.) work as you'd expect.

### Circularity errors

Due to TypeScript limitations, recursive type inference can be finicky, and it only works in certain scenarios. Some more complicated types may trigger recursive type errors like this:

```ts
const Activity = z.object({
  name: z.string(),
  get subactivities() {
    // ^ ❌ 'subactivities' implicitly has return type 'any' because it does not
    // have a return type annotation and is referenced directly or indirectly
    // in one of its return expressions.ts(7023)

    return z.nullable(z.array(Activity));
  },
});
```

In these cases, you can resolve the error with a type annotation on the offending getter:

```ts
const Activity = z.object({
  name: z.string(),
  get subactivities(): z.ZodNullable<z.ZodArray<typeof Activity>> {
    return z.nullable(z.array(Activity));
  },
});
```

{/\* Some general rules of thumb for avoiding circularity \*/}

{/\*

````
Recursive type inference can by mysterious. TypeScript is capable of it in certain limited scenarios. Depending on what you're trying to do, you may encounter errors like this:

```ts
export const Activity = z.object({
  name: z.string(),
  get children() {
    // ^ ❌ 'children' implicitly has return type 'any' because it does not
    // have a return type annotation and is referenced directly or indirectly
    // in one of its return expressions.ts(7023)

    return z.optional(z.array(Activity)); //.optional();
  },
});
```

Here are a couple rules of thumb:

### Object types only

Generally speaking, recursive inference only works with object types that are referencing each other. TypeScript has special handling for resolving getter-based recursive objects, which is what Zod relies on. If you try to add non-object types into the mix, you'll likely encounter errors.

```ts
const Activity = z.object({
  name: z.string(),
  get children() { // ❌ type error
    return z.optional(ActivityArray);
  },
});

const ActivityArray = z.array(Activity);
```

Sometimes you can get around this limitation by defining


### Avoid nesting function calls

Functions like `z.array()` and `z.optional()` accept Zod schemas, so when you use them TypeScript will do some type-checking on their inputs to make sure they are valid. But type checking is the enemy of recursive type inference—it's hard for TypeScript to *check* and *infer* types at the same time. Methods do not have this problem, so prefer methods over functions when possible (sorry Zod Mini users).

```ts
const Activity = z.object({
  name: z.string(),
  get subactivities() {
    // ^ ❌ 'subactivities' implicitly has return type 'any' because it does not
    // have a return type annotation and is referenced directly or indirectly
    // in one of its return expressions.ts(7023)

    return z.union([z.null(), Activity]);
  },
});
```

### Fall back to type annotations on your getters

When in doubt, you can generally sidestep these issues with some carefully deployed type annotations on your getters. Due to the limitations described above, this is particularly necessary when using Zod Mini.

```ts
import * as z from "zod";

const Activity = z.object({
  name: z.string(),
  get subactivities(): z.ZodMiniDefault<z.ZodMiniArray> {
    return z._default(z.array(Activity), []);
  },
});
```
````

\*/}

## Arrays

To define an array schema:

````
```ts
const stringArray = z.array(z.string()); // or z.string().array()
```



```ts
const stringArray = z.array(z.string());
```
````

To access the inner schema for an element of the array.

````
```ts
stringArray.unwrap(); // => string schema
```



```ts
stringArray.def.element; // => string schema
```
````

Zod implements a number of array-specific validations:

````
```ts
z.array(z.string()).min(5); // must contain 5 or more items
z.array(z.string()).max(5); // must contain 5 or fewer items
z.array(z.string()).length(5); // must contain 5 items exactly
```



```ts
z.array(z.string()).check(z.minLength(5)); // must contain 5 or more items
z.array(z.string()).check(z.maxLength(5)); // must contain 5 or fewer items
z.array(z.string()).check(z.length(5)); // must contain 5 items exactly
```
````

{/\* Unlike `.nonempty()` these methods do not change the inferred type. \*/}

## Tuples

Unlike arrays, tuples are typically fixed-length arrays that specify different schemas for each index.

```ts
const MyTuple = z.tuple([z.string(), z.number(), z.boolean()]);

type MyTuple = z.infer<typeof MyTuple>;
// [string, number, boolean]
```

To add a variadic ("rest") argument:

```ts
const variadicTuple = z.tuple([z.string()], z.number());
// => [string, ...number[]];
```

## Unions

Union types (`A | B`) represent a logical "OR". Zod union schemas will check the input against each option in order. The first value that validates successfully is returned.

```ts
const stringOrNumber = z.union([z.string(), z.number()]);
// string | number

stringOrNumber.parse("foo"); // passes
stringOrNumber.parse(14); // passes
```

To extract the internal option schemas:

````
```ts
stringOrNumber.options; // [ZodString, ZodNumber]
```



```ts
stringOrNumber.def.options; // [ZodString, ZodNumber]
```
````

{/\* For convenience, you can also use the [`.or` method](#or):

````ts
const stringOrNumber = z.string().or(z.number());
``` */}

{/* **Optional string validation:**

To validate an optional form input, you can union the desired string validation with an empty string [literal](#literals).

This example validates an input that is optional but needs to contain a [valid URL](#strings):

```ts
const optionalUrl = z.union([z.string().url().nullish(), z.literal("")]);

console.log(optionalUrl.safeParse(undefined).success); // true
console.log(optionalUrl.safeParse(null).success); // true
console.log(optionalUrl.safeParse("").success); // true
console.log(optionalUrl.safeParse("https://zod.dev").success); // true
console.log(optionalUrl.safeParse("not a valid url").success); // false
````

\*/}

## Exclusive unions (XOR)

An exclusive union (XOR) is a union where exactly one option must match. Unlike regular unions that succeed when any option matches, `z.xor()` fails if zero options match OR if multiple options match.

```ts
const schema = z.xor([z.string(), z.number()]);

schema.parse("hello"); // ✅ passes
schema.parse(42); // ✅ passes
schema.parse(true); // ❌ fails (zero matches)
```

This is useful when you want to ensure mutual exclusivity between options:

```ts
// Validate that exactly ONE of these matches
const payment = z.xor([
  z.object({ type: z.literal("card"), cardNumber: z.string() }),
  z.object({ type: z.literal("bank"), accountNumber: z.string() }),
]);

payment.parse({ type: "card", cardNumber: "1234" }); // ✅ passes
```

If the input could match multiple options, `z.xor()` will fail:

```ts
const overlapping = z.xor([z.string(), z.any()]);
overlapping.parse("hello"); // ❌ fails (matches both string and any)
```
