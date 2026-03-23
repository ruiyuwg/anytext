## Discriminated unions

A [discriminated union](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions) is a special kind of union in which a) all the options are object schemas that b) share a particular key (the "discriminator"). Based on the value of the discriminator key, TypeScript is able to "narrow" the type signature as you'd expect.

```ts
type MyResult =
  | { status: "success"; data: string }
  | { status: "failed"; error: string };

function handleResult(result: MyResult){
  if(result.status === "success"){
    result.data; // string
  } else {
    result.error; // string
  }
}
```

You could represent it with a regular `z.union()`. But regular unions are *naive*—they check the input against each option in order and return the first one that passes. This can be slow for large unions.

So Zod provides a `z.discriminatedUnion()` API that uses a *discriminator key* to make parsing more efficient.

```ts
const MyResult = z.discriminatedUnion("status", [
  z.object({ status: z.literal("success"), data: z.string() }),
  z.object({ status: z.literal("failed"), error: z.string() }),
]);
```

Each option should be an *object schema* whose discriminator prop (`status` in the example above) corresponds to some literal value or set of values, usually `z.enum()`, `z.literal()`, `z.null()`, or `z.undefined()`.

{/\*

In Zod 3, you were required to specify the discriminator key as the first argument. This is no longer necessary, as Zod can now automatically detect the discriminator key.

```ts
const MyResult = z.discriminatedUnion("status", [
  z.object({ status: z.literal("success"), data: z.string() }),
  z.object({ status: z.literal("failed"), error: z.string() }),
]);
```

If Zod can't find a discriminator key, it will throw an error at schema creation time.
\*/}

````
For advanced use cases, discriminated unions can be nested. Zod will figure out the optimal parsing strategy to leverage the discriminators at each level.

```ts
const BaseError = { status: z.literal("failed"), message: z.string() };
const MyErrors = z.discriminatedUnion("code", [
  z.object({ ...BaseError, code: z.literal(400) }),
  z.object({ ...BaseError, code: z.literal(401) }),
  z.object({ ...BaseError, code: z.literal(500) }),
]);

const MyResult = z.discriminatedUnion("status", [
  z.object({ status: z.literal("success"), data: z.string() }),
  MyErrors
]);
```
````

## Intersections

Intersection types (`A & B`) represent a logical "AND".

```ts
const a = z.union([z.number(), z.string()]);
const b = z.union([z.number(), z.boolean()]);
const c = z.intersection(a, b);

type c = z.infer<typeof c>; // => number
```

This can be useful for intersecting two object types.

```ts
const Person = z.object({ name: z.string() });
type Person = z.infer<typeof Person>;

const Employee = z.object({ role: z.string() });
type Employee = z.infer<typeof Employee>;

const EmployedPerson = z.intersection(Person, Employee);
type EmployedPerson = z.infer<typeof EmployedPerson>;
// Person & Employee
```

When merging object schemas, prefer [`A.extend(B)`](#extend) over intersections. Using `.extend()` will give you a new object schema, whereas `z.intersection(A, B)` returns a `ZodIntersection` instance which lacks common object methods like `pick` and `omit`.
