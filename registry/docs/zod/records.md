## Records

Record schemas are used to validate types such as `Record<string, string>`.

### `z.record`

```ts
const IdCache = z.record(z.string(), z.string());
type IdCache = z.infer<typeof IdCache>; // Record<string, string>

IdCache.parse({
  carlotta: "77d2586b-9e8e-4ecf-8b21-ea7e0530eadd",
  jimmie: "77d2586b-9e8e-4ecf-8b21-ea7e0530eadd",
});
```

The key schema can be any Zod schema that is assignable to `string | number | symbol`.

```ts
const Keys = z.union([z.string(), z.number(), z.symbol()]);
const AnyObject = z.record(Keys, z.unknown());
// Record<string | number | symbol, unknown>
```

To create an object schemas containing keys defined by an enum:

```ts
const Keys = z.enum(["id", "name", "email"]);
const Person = z.record(Keys, z.string());
// { id: string; name: string; email: string }
```

**New** — As of v4.2, Zod properly supports numeric keys inside records in a way that more closely mirrors TypeScript itself. A `number` schema, when used as a record key, will validate that the key is a valid "numeric string". Additional numerical constraints (min, max, step, etc.) will also be validated.

```ts
const numberKeys = z.record(z.number(), z.string());
numberKeys.parse({
  1: "one", // ✅
  2: "two", // ✅
  "1.5": "one", // ✅
  "-3": "two", // ✅
  abc: "one", // ❌
});

// further validation is also supported
const intKeys = z.record(z.int().step(1).min(0).max(10), z.string());
intKeys.parse({
  0: "zero", // ✅
  1: "one", // ✅
  2: "two", // ✅
  12: "twelve", // ❌
  abc: "one", // ❌
});
```

### `z.partialRecord`

**Zod 4** — In Zod 4, if you pass a `z.enum` as the first argument to `z.record()`, Zod will exhaustively check that all enum values exist in the input as keys. This behavior agrees with TypeScript:

```ts
type MyRecord = Record<"a" | "b", string>;
const myRecord: MyRecord = { a: "foo", b: "bar" }; // ✅
const myRecord: MyRecord = { a: "foo" }; // ❌ missing required key `b`
```

In Zod 3, exhaustiveness was not checked. To replicate the old behavior, use `z.partialRecord()`.

If you want a _partial_ record type, use `z.partialRecord()`. This skips the special exhaustiveness checks Zod normally runs with `z.enum()` and `z.literal()` key schemas.

```ts
const Keys = z.enum(["id", "name", "email"]).or(z.never());
const Person = z.partialRecord(Keys, z.string());
// { id?: string; name?: string; email?: string }
```

### `z.looseRecord`

By default, `z.record()` errors on keys that don't match the key schema. Use `z.looseRecord()` to pass through non-matching keys unchanged. This is particularly useful when combined with intersections to model multiple pattern properties:

```ts
const schema = z
  .object({ name: z.string() })
  .and(z.looseRecord(z.string().regex(/_phone$/), z.e164()));

type schema = z.infer<typeof schema>;
// => { name: string } & Record<string, string>

schema.parse({
  name: "John",
  home_phone: "+12345678900", // validated as phone number
  work_phone: "+12345678900", // validated as phone number
});
```

## Maps

```ts
const StringNumberMap = z.map(z.string(), z.number());
type StringNumberMap = z.infer<typeof StringNumberMap>; // Map<string, number>

const myMap: StringNumberMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);

StringNumberMap.parse(myMap);
```

## Sets

```ts
const NumberSet = z.set(z.number());
type NumberSet = z.infer<typeof NumberSet>; // Set<number>

const mySet: NumberSet = new Set();
mySet.add(1);
mySet.add(2);
NumberSet.parse(mySet);
```

Set schemas can be further constrained with the following utility methods.

````
```ts
z.set(z.string()).min(5); // must contain 5 or more items
z.set(z.string()).max(5); // must contain 5 or fewer items
z.set(z.string()).size(5); // must contain 5 items exactly
```



```ts
z.set(z.string()).check(z.minSize(5)); // must contain 5 or more items
z.set(z.string()).check(z.maxSize(5)); // must contain 5 or fewer items
z.set(z.string()).check(z.size(5)); // must contain 5 items exactly
```
````

## Files

To validate `File` instances:

````
```ts
const fileSchema = z.file();

fileSchema.min(10_000); // minimum .size (bytes)
fileSchema.max(1_000_000); // maximum .size (bytes)
fileSchema.mime("image/png"); // MIME type
fileSchema.mime(["image/png", "image/jpeg"]); // multiple MIME types
```



```ts
const fileSchema = z.file();

fileSchema.check(
  z.minSize(10_000), // minimum .size (bytes)
  z.maxSize(1_000_000), // maximum .size (bytes)
  z.mime("image/png"), // MIME type
  z.mime(["image/png", "image/jpeg"]); // multiple MIME types
)
```
````

## Promises

**Deprecated** — `z.promise()` is deprecated in Zod 4. There are vanishingly few valid uses cases for a `Promise` schema. If you suspect a value might be a `Promise`, simply `await` it before parsing it with Zod.

````
```ts
const numberPromise = z.promise(z.number());
```

"Parsing" works a little differently with promise schemas. Validation happens in two parts:

1. Zod synchronously checks that the input is an instance of Promise (i.e. an object with `.then` and `.catch` methods.).
2. Zod uses `.then` to attach an additional validation step onto the existing Promise. You'll have to use `.catch` on the returned Promise to handle validation failures.

```ts
numberPromise.parse("tuna");
// ZodError: Non-Promise type: string

numberPromise.parse(Promise.resolve("tuna"));
// => Promise

const test = async () => {
  await numberPromise.parse(Promise.resolve("tuna"));
  // ZodError: Non-number type: string

  await numberPromise.parse(Promise.resolve(3.14));
  // => 3.14
};
```
````

## Instanceof

You can use `z.instanceof` to check that the input is an instance of a class. This is useful to validate inputs against classes that are exported from third-party libraries.

```ts
class Test {
  name: string;
}

const TestSchema = z.instanceof(Test);

TestSchema.parse(new Test()); // ✅
TestSchema.parse("whatever"); // ❌
```

### Property

To validate a particular property of a class instance against a Zod schema:

```ts
const blobSchema = z
  .instanceof(URL)
  .check(
    z.property("protocol", z.literal("https:" as string, "Only HTTPS allowed")),
  );

blobSchema.parse(new URL("https://example.com")); // ✅
blobSchema.parse(new URL("http://example.com")); // ❌
```

The `z.property()` API works with any data type (but it's most useful when used in conjunction with `z.instanceof()`).

```ts
const blobSchema = z.string().check(z.property("length", z.number().min(10)));

blobSchema.parse("hello there!"); // ✅
blobSchema.parse("hello."); // ❌
```
