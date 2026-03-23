## Transforms

> **Note** — For bi-directional transforms, use [codecs](/codecs).

Transforms are a special kind of schema that perform a unidirectional transformation. Instead of validating input, they accept anything and perform some transformation on the data. To define a transform:

````
```ts
const castToString = z.transform((val) => String(val));

castToString.parse("asdf"); // => "asdf"
castToString.parse(123); // => "123"
castToString.parse(true); // => "true"
```



```ts
const castToString = z.transform((val) => String(val));

z.parse(castToString, "asdf"); // => "asdf"
z.parse(castToString, 123); // => "123"
z.parse(castToString, true); // => "true"
```
````

Transform functions should never throw. Thrown errors are not caught by Zod.

{/\* The output type of the schema is inferred from the transform function:

```ts
const castToString = z.transform((val) => String(val));

type CastToString = z.infer; // string
```

```ts
const castToString = z.transform((val) => String(val));

type CastToString = z.infer; // string
```

\*/}

To perform validation logic inside a transform, use `ctx`. To report a validation issue, push a new issue onto `ctx.issues` (similar to the [`.check()`](#check) API).

```ts
const coercedInt = z.transform((val, ctx) => {
  try {
    const parsed = Number.parseInt(String(val));
    return parsed;
  } catch (e) {
    ctx.issues.push({
      code: "custom",
      message: "Not a number",
      input: val,
    });

    // this is a special constant with type `never`
    // returning it lets you exit the transform without impacting the inferred return type
    return z.NEVER;
  }
});
```

Most commonly, transforms are used in conjunction with [Pipes](#pipes). This combination is useful for performing some initial validation, then transforming the parsed data into another form.

````
```ts
const stringToLength = z.string().pipe(z.transform(val => val.length));

stringToLength.parse("hello"); // => 5
```



```ts
const stringToLength = z.pipe(z.string(), z.transform(val => val.length));

z.parse(stringToLength, "hello"); // => 5
```
````

### `.transform()`

Piping some schema into a transform is a common pattern, so Zod provides a convenience `.transform()` method.

````
```ts
const stringToLength = z.string().transform(val => val.length); 
```



```ts
// no equivalent
```
````

Transforms can also be async:

````
```ts
const idToUser = z
  .string()
  .transform(async (id) => {
    // fetch user from database
    return db.getUserById(id); 
  });

const user = await idToUser.parseAsync("abc123");
```



```ts
const idToUser = z.pipe(
  z.string(),
  z.transform(async (id) => {
    // fetch user from database
    return db.getUserById(id); 
  }));

const user = await idToUser.parse("abc123");
```
````

If you use async transforms, you must use a `.parseAsync` or `.safeParseAsync` when parsing data! Otherwise Zod will throw an error.

### `.preprocess()`

Piping a transform into another schema is another common pattern, so Zod provides a convenience `z.preprocess()` function.

```ts
const coercedInt = z.preprocess((val) => {
  if (typeof val === "string") {
    return Number.parseInt(val);
  }
  return val;
}, z.int());
```

## Defaults

To set a default value for a schema:

````
```ts
const defaultTuna = z.string().default("tuna");

defaultTuna.parse(undefined); // => "tuna"
```



```ts
const defaultTuna = z._default(z.string(), "tuna");

defaultTuna.parse(undefined); // => "tuna"
```
````

Alternatively, you can pass a function which will be re-executed whenever a default value needs to be generated:

````
```ts
const randomDefault = z.number().default(Math.random);

randomDefault.parse(undefined);    // => 0.4413456736055323
randomDefault.parse(undefined);    // => 0.1871840107401901
randomDefault.parse(undefined);    // => 0.7223408162401552
```



```ts
const randomDefault = z._default(z.number(), Math.random);

z.parse(randomDefault, undefined); // => 0.4413456736055323
z.parse(randomDefault, undefined); // => 0.1871840107401901
z.parse(randomDefault, undefined); // => 0.7223408162401552
```
````

## Prefaults

In Zod, setting a *default* value will short-circuit the parsing process. If the input is `undefined`, the default value is eagerly returned. As such, the default value must be assignable to the *output type* of the schema.

```ts
const schema = z.string().transform(val => val.length).default(0);
schema.parse(undefined); // => 0
```

Sometimes, it's useful to define a *prefault* ("pre-parse default") value. If the input is `undefined`, the prefault value will be parsed instead. The parsing process is *not* short circuited. As such, the prefault value must be assignable to the *input type* of the schema.

```ts
z.string().transform(val => val.length).prefault("tuna");
schema.parse(undefined); // => 4
```

This is also useful if you want to pass some input value through some mutating refinements.

```ts
const a = z.string().trim().toUpperCase().prefault("  tuna  ");
a.parse(undefined); // => "TUNA"

const b = z.string().trim().toUpperCase().default("  tuna  ");
b.parse(undefined); // => "  tuna  "
```

## Catch

Use `.catch()` to define a fallback value to be returned in the event of a validation error:

````
```ts
const numberWithCatch = z.number().catch(42);

numberWithCatch.parse(5); // => 5
numberWithCatch.parse("tuna"); // => 42
```



```ts
const numberWithCatch = z.catch(z.number(), 42);

numberWithCatch.parse(5); // => 5
numberWithCatch.parse("tuna"); // => 42
```
````

Alternatively, you can pass a function which will be re-executed whenever a catch value needs to be generated.

````
```ts
const numberWithRandomCatch = z.number().catch((ctx) => {
  ctx.error; // the caught ZodError
  return Math.random();
});

numberWithRandomCatch.parse("sup"); // => 0.4413456736055323
numberWithRandomCatch.parse("sup"); // => 0.1871840107401901
numberWithRandomCatch.parse("sup"); // => 0.7223408162401552
```



```ts
const numberWithRandomCatch = z.catch(z.number(), (ctx) => {
  ctx.value;   // the input value
  ctx.issues;  // the caught validation issue
  return Math.random();
});

z.parse(numberWithRandomCatch, "sup"); // => 0.4413456736055323
z.parse(numberWithRandomCatch, "sup"); // => 0.1871840107401901
z.parse(numberWithRandomCatch, "sup"); // => 0.7223408162401552
```
````

## Branded types

TypeScript's type system is [structural](https://www.typescriptlang.org/docs/handbook/type-compatibility.html), meaning that two types that are structurally equivalent are considered the same.

```ts
type Cat = { name: string };
type Dog = { name: string };

const pluto: Dog = { name: "pluto" };
const simba: Cat = pluto; // works fine
```

In some cases, it can be desirable to simulate [nominal typing](https://en.wikipedia.org/wiki/Nominal_type_system) inside TypeScript. This can be achieved with *branded types* (also known as "opaque types").

```ts
const Cat = z.object({ name: z.string() }).brand<"Cat">();
const Dog = z.object({ name: z.string() }).brand<"Dog">();

type Cat = z.infer<typeof Cat>; // { name: string } & z.$brand<"Cat">
type Dog = z.infer<typeof Dog>; // { name: string } & z.$brand<"Dog">

const pluto = Dog.parse({ name: "pluto" });
const simba: Cat = pluto; // ❌ not allowed
```

Under the hood, this works by attaching a "brand" to the schema's inferred type.

```ts
const Cat = z.object({ name: z.string() }).brand<"Cat">();
type Cat = z.output<typeof Cat>; // { name: string } & z.$brand<"Cat">
```

With this brand, any plain (unbranded) data structures are no longer assignable to the inferred type. You have to parse some data with the schema to get branded data.

> Note that branded types do not affect the runtime result of `.parse`. It is a static-only construct.

By default, only the *output type* is branded.

```ts
const USD = z.string().brand<"USD">();

type USDOutput = z.output<typeof USD>; // string & z.$brand<"USD">
type USDInput = z.input<typeof USD>; // string
```

To customize this, pass a second generic to `.brand()` to specify the direction of the brand.

```ts
// requires Zod 4.2+
z.string().brand<"Cat", "out">(); // output is branded (default)
z.string().brand<"Cat", "in">(); // input is branded
z.string().brand<"Cat", "inout">(); // both are branded
```

## Readonly

To mark a schema as readonly:

````
```ts
const ReadonlyUser = z.object({ name: z.string() }).readonly();
type ReadonlyUser = z.infer;
// Readonly<{ name: string }>
```



```ts
const ReadonlyUser = z.readonly(z.object({ name: z.string() }));
type ReadonlyUser = z.infer;
// Readonly<{ name: string }>
```
````

The inferred type of the new schemas will be marked as `readonly`. Note that in TypeScript, this only affects objects, arrays, tuples, `Set`, and `Map`:

````
```ts
z.object({ name: z.string() }).readonly(); // { readonly name: string }
z.array(z.string()).readonly(); // readonly string[]
z.tuple([z.string(), z.number()]).readonly(); // readonly [string, number]
z.map(z.string(), z.date()).readonly(); // ReadonlyMap<string, Date>
z.set(z.string()).readonly(); // ReadonlySet
```



```ts
z.readonly(z.object({ name: z.string() })); // { readonly name: string }
z.readonly(z.array(z.string())); // readonly string[]
z.readonly(z.tuple([z.string(), z.number()])); // readonly [string, number]
z.readonly(z.map(z.string(), z.date())); // ReadonlyMap<string, Date>
z.readonly(z.set(z.string())); // ReadonlySet
```
````

Inputs will be parsed like normal, then the result will be frozen with [`Object.freeze()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) to prevent modifications.

````
```ts
const result = ReadonlyUser.parse({ name: "fido" });
result.name = "simba"; // throws TypeError
```



```ts
const result = z.parse(ReadonlyUser, { name: "fido" });
result.name = "simba"; // throws TypeError
```
````

## JSON

To validate any JSON-encodable value:

```ts
const jsonSchema = z.json();
```

This is a convenience API that returns the following union schema:

```ts
const jsonSchema = z.lazy(() => {
  return z.union([
    z.string(params), 
    z.number(), 
    z.boolean(), 
    z.null(), 
    z.array(jsonSchema), 
    z.record(z.string(), jsonSchema)
  ]);
});
```

## Functions

Zod provides a `z.function()` utility for defining Zod-validated functions. This way, you can avoid intermixing validation code with your business logic.

```ts
const MyFunction = z.function({
  input: [z.string()], // parameters (must be an array or a ZodTuple)
  output: z.number()  // return type
});

type MyFunction = z.infer<typeof MyFunction>;
// (input: string) => number
```

Function schemas have an `.implement()` method which accepts a function and returns a new function that automatically validates its inputs and outputs.

```ts
const computeTrimmedLength = MyFunction.implement((input) => {
  // TypeScript knows input is a string!
  return input.trim().length;
});

computeTrimmedLength("sandwich"); // => 8
computeTrimmedLength(" asdf "); // => 4
```

This function will throw a `ZodError` if the input is invalid:

```ts
computeTrimmedLength(42); // throws ZodError
```

If you only care about validating inputs, you can omit the `output` field.

```ts
const MyFunction = z.function({
  input: [z.string()], // parameters (must be an array or a ZodTuple)
});

const computeTrimmedLength = MyFunction.implement((input) => input.trim.length);
```

Use the `.implementAsync()` method to create an async function.

```ts
const computeTrimmedLengthAsync = MyFunction.implementAsync(
  async (input) => input.trim().length
);

computeTrimmedLengthAsync("sandwich"); // => Promise<8>
```

## Custom

You can create a Zod schema for any TypeScript type by using `z.custom()`. This is useful for creating schemas for types that are not supported by Zod out of the box, such as template string literals.

```ts
const px = z.custom<`${number}px`>((val) => {
  return typeof val === "string" ? /^\d+px$/.test(val) : false;
});

type px = z.infer<typeof px>; // `${number}px`

px.parse("42px"); // "42px"
px.parse("42vw"); // throws;
```

If you don't provide a validation function, Zod will allow any value. This can be dangerous!

```ts
z.custom<{ arg: string }>(); // performs no validation
```

You can customize the error message and other options by passing a second argument. This parameter works the same way as the params parameter of [`.refine`](#refine).

```ts
z.custom<...>((val) => ..., "custom error message");
```

## Apply

Use `.apply()` to incorporate external functions into Zod's method chain:

````
```ts
function setCommonNumberChecks(schema: T) {
  return schema
    .min(0)
    .max(100);
}

const schema = z.number()
  .apply(setCommonNumberChecks)
  .nullable();

schema.parse(0);  // => 0
schema.parse(-1); // ❌ throws
schema.parse(101); // ❌ throws
schema.parse(null); // => null
```



```ts
function setCommonNumberChecks(schema: T) {
  return schema.check(z.minimum(0), z.maximum(100));
}

const schema = z.nullable(
  z.number().apply(setCommonNumberChecks)
);

z.parse(schema, 0);   // => 0
z.parse(schema, -1);  // ❌ throws
z.parse(schema, 101); // ❌ throws
z.parse(schema, null); // => null
```
````
