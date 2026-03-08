## Schemas (guides)

### Objects

To validate objects with a schema, you can use `object` or `record`. You use `object` for an object with a specific shape and `record` for objects with any number of uniform entries.

#### Object schema

The first argument is used to define the specific structure of the object. Each entry consists of a key and a schema as the value. The entries of the input are then validated against these schemas.

```ts
import * as v from 'valibot';

const ObjectSchema = v.object({
  key1: v.string(),
  key2: v.number(),
});
```

##### Loose and strict objects

The `object` schema removes unknown entries. This means that entries that you have not defined in the first argument are neither validated nor added to the output. You can change this behavior by using the `looseObject` or `strictObject` schema instead.

The `looseObject` schema allows unknown entries and adds them to the output. The `strictObject` schema forbids unknown entries and returns an issue for the first unknown entry found.

##### Object with specific rest

Alternatively, you can also use the `objectWithRest` schema to define a specific schema for unknown entries. Any entries not defined in the first argument are then validated against the schema of the second argument.

```ts
import * as v from 'valibot';

const ObjectSchema = v.objectWithRest(
  {
    key1: v.string(),
    key2: v.number(),
  },
  v.null()
);
```

##### Pipeline validation

To validate the value of an entry based on another entry, you can wrap you schema with the `check` validation action in a pipeline. You can also use `forward` to assign the issue to a specific object key in the event of an error.

> If you only want to validate specific entries, we recommend using `partialCheck` instead as `check` can only be executed if the input is fully typed.

```ts
import * as v from 'valibot';

const CalculationSchema = v.pipe(
  v.object({
    a: v.number(),
    b: v.number(),
    sum: v.number(),
  }),
  v.forward(
    v.check(({ a, b, sum }) => a + b === sum, 'The calculation is incorrect.'),
    ['sum']
  )
);
```

#### Record schema

For an object with any number of uniform entries, `record` is the right choice. The schema passed as the first argument validates the keys of your record, and the schema passed as the second argument validates the values.

```ts
import * as v from 'valibot';

const RecordSchema = v.record(v.string(), v.number()); // Record<string, number>
```

##### Specific record keys

Instead of `string`, you can also use `custom`, `enum`, `literal`, `picklist` or `union` to validate the keys.

```ts
import * as v from 'valibot';

const RecordSchema = v.record(v.picklist(['key1', 'key2']), v.number()); // { key1?: number; key2?: number }
```

Note that `record` marks all literal keys as optional in this case. If you want to make them required, you can use the `object` schema with the `entriesFromList` util instead.

```ts
import * as v from 'valibot';

const RecordSchema = v.object(v.entriesFromList(['key1', 'key2'], v.number())); // { key1: number; key2: number }
```

##### Pipeline validation

To validate the value of an entry based on another entry, you can wrap you schema with the `check` validation action in a pipeline. You can also use `forward` to assign the issue to a specific record key in the event of an error.

```ts
import * as v from 'valibot';

const CalculationSchema = v.pipe(
  v.record(v.picklist(['a', 'b', 'sum']), v.number()),
  v.forward(
    v.check(
      ({ a, b, sum }) => (a || 0) + (b || 0) === (sum || 0),
      'The calculation is incorrect.'
    ),
    ['sum']
  )
);
```

### Arrays

To validate arrays with a schema you can use `array` or `tuple`. You use `tuple` if your array has a specific shape and `array` if it has any number of uniform items.

#### Array schema

The first argument you pass to `array` is a schema, which is used to validate the items of the array.

```ts
import * as v from 'valibot';

const ArraySchema = v.array(v.number()); // number[]
```

##### Pipeline validation

To validate the length or contents of the array, you can use a pipeline.

```ts
import * as v from 'valibot';

const ArraySchema = v.pipe(
  v.array(v.string()),
  v.minLength(1),
  v.maxLength(5),
  v.includes('foo'),
  v.excludes('bar')
);
```

#### Tuple schema

A `tuple` is an array with a specific shape. The first argument that you pass to the function is a tuple of schemas that defines its shape.

```ts
import * as v from 'valibot';

const TupleSchema = v.tuple([v.string(), v.number()]); // [string, number]
```

##### Loose and strict tuples

The `tuple` schema removes unknown items. This means that items that you have not defined in the first argument are not validated and added to the output. You can change this behavior by using the `looseTuple` or `strictTuple` schema instead.

The `looseTuple` schema allows unknown items and adds them to the output. The `strictTuple` schema forbids unknown items and returns an issue for the first unknown item found.

##### Tuple with specific rest

Alternatively, you can also use the `tupleWithRest` schema to define a specific schema for unknown items. Any items not defined in the first argument are then validated against the schema of the second argument.

```ts
import * as v from 'valibot';

const TupleSchema = v.tupleWithRest([v.string(), v.number()], v.null());
```

##### Pipeline validation

Similar to arrays, you can use a pipeline to validate the length and contents of a tuple.

```ts
import * as v from 'valibot';

const TupleSchema = v.pipe(
  v.tupleWithRest([v.string()], v.string()),
  v.maxLength(5),
  v.includes('foo'),
  v.excludes('bar')
);
```

### Optionals

It often happens that `undefined` or `null` should also be accepted instead of the value. To make the API more readable for this and to reduce boilerplate, Valibot offers a shortcut for this functionality with `optional`, `exactOptional`, `undefinedable`, `nullable` and `nullish`.

#### How it works

To accept `undefined` and/or `null` besides your actual value, you just have to wrap the schema in `optional`, `exactOptional`, `undefinedable`, `nullable` or `nullish`.

> Note: `exactOptional` allows missing entries in objects, but does not allow `undefined` as a specified value.

```ts
import * as v from 'valibot';

const OptionalStringSchema = v.optional(v.string()); // string | undefined
const ExactOptionalStringSchema = v.exactOptional(v.string()); // string
const UndefinedableStringSchema = v.undefinedable(v.string()); // string | undefined
const NullableStringSchema = v.nullable(v.string()); // string | null
const NullishStringSchema = v.nullish(v.string()); // string | null | undefined
```

##### Use in objects

When used inside of objects, `optional`, `exactOptional` and `nullish` is a special case, as it also marks the value as optional in TypeScript with a question mark.

```ts
import * as v from 'valibot';

const OptionalKeySchema = v.object({ key: v.optional(v.string()) }); // { key?: string | undefined }
```

#### Default values

What makes `optional`, `exactOptional`, `undefinedable`, `nullable` and `nullish` unique is that the schema functions accept a default value as the second argument. Depending on the schema function, this default value is always used if the input is missing, `undefined` or `null`.

```ts
import * as v from 'valibot';

const OptionalStringSchema = v.optional(v.string(), "I'm the default!");

type OptionalStringInput = v.InferInput<typeof OptionalStringSchema>; // string | undefined
type OptionalStringOutput = v.InferOutput<typeof OptionalStringSchema>; // string
```

By providing a default value, the input type of the schema now differs from the output type. The schema in the example now accepts `string` and `undefined` as input, but returns a string as output in both cases.

##### Dynamic default values

In some cases it is necessary to generate the default value dynamically. For this purpose, a function that generates and returns the default value can also be passed as the second argument.

```ts
import * as v from 'valibot';

const NullableDateSchema = v.nullable(v.date(), () => new Date());
```

The previous example thus creates a new instance of the [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) class for each validation with `null` as input, which is then used as the default value.

##### Dependent default values

In rare cases, a default value for an optional entry may depend on the values of another entries in the same object. This can be achieved by using `transform` in the `pipe` of the object.

```ts
import * as v from 'valibot';

const CalculationSchema = v.pipe(
  v.object({
    a: v.number(),
    b: v.number(),
    sum: v.optional(v.number()),
  }),
  v.transform((input) => ({
    ...input,
    sum: input.sum === undefined ? input.a + input.b : input.sum,
  }))
);
```

### Enums

An enumerated type is a data type that consists of a set of values. They can be represented by either an object, a TypeScript enum or, to keep things simple, an array. You use `enum` for objects and TypeScript enums and `picklist` for arrays.

#### Enum schema

Since TypeScript enums are transpiled to JavaScript objects by the TypeScript compiler, you can use the `enum` schema function for both. Just pass your enumerated data type as the first argument to the schema function. On validation, the schema checks whether the input matches one of the values in the enum.

```ts
import * as v from 'valibot';

// As JavaScript object
const Direction = {
  Left: 'LEFT',
  Right: 'RIGHT',
} as const;

// As TypeScript enum
enum Direction {
  Left = 'LEFT',
  Right = 'RIGHT',
}

const DirectionSchema = v.enum(Direction);
```

#### Picklist schema

For a set of values represented by an array, you can use the `picklist` schema function. Just pass your array as the first argument to the schema function. On validation, the schema checks whether the input matches one of the items in the array.

```ts
import * as v from 'valibot';

const Direction = ['LEFT', 'RIGHT'] as const;

const DirectionSchema = v.picklist(Direction);
```

##### Format array

In some cases, the array may not be in the correct format. In this case, simply use the [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method to bring it into the required format.

```ts
import * as v from 'valibot';

const countries = [
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'United States', code: 'US' },
] as const;

const CountrySchema = v.picklist(countries.map((country) => country.code));
```

### Unions

An union represents a logical OR relationship. You can apply this concept to your schemas with `union` and `variant`. For [discriminated unions](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions) you use `variant` and in all other cases you use `union`.

#### Union schema

The schema function `union` creates an OR relationship between any number of schemas that you pass as the first argument in the form of an array. On validation, the schema returns the result of the first schema that was successfully validated.

```ts
import * as v from 'valibot';

// TypeScript
type Union = string | number;

// Valibot
const UnionSchema = v.union([v.string(), v.number()]);
```

If a bad input can be uniquely assigned to one of the schemas based on the data type, the result of that schema is returned. Otherwise, a general issue is returned that contains the issues of each schema as subissues. This is a special case within the library, as the issues of `union` can contradict each other.

The following issues are returned if the input is `null` instead of a string or number. Since the input cannot be associated with a schema in this case, the issues of both schemas are returned as subissues.

```ts
[
  {
    kind: 'schema',
    type: 'union',
    input: null,
    expected: 'string | number',
    received: 'null',
    message: 'Invalid type: Expected string | number but received null',
    issues: [
      {
        kind: 'schema',
        type: 'string',
        input: null,
        expected: 'string',
        received: 'null',
        message: 'Invalid type: Expected string but received null',
      },
      {
        kind: 'schema',
        type: 'number',
        input: null,
        expected: 'number',
        received: 'null',
        message: 'Invalid type: Expected number but received null',
      },
    ],
  },
];
```

#### Variant schema

For better performance, more type safety, and a more targeted output of issues, you can use `variant` for discriminated unions. Therefore, we recommend using `variant` over `union` whenever possible. A discriminated union is an OR relationship between objects that can be distinguished by a specific key.

When you call the schema function, you first specify the discriminator key. This is used to determine the schema to use for validation based on the input. The object schemas, in the form of an array, follow as the second argument.

```ts
import * as v from 'valibot';

const VariantScheme = v.variant('type', [
  v.object({
    type: v.literal('foo'),
    foo: v.string(),
  }),
  v.object({
    type: v.literal('bar'),
    bar: v.number(),
  }),
]);
```

For very complex datasets, multiple `variant` schemas can also be deeply nested within one another.

### Intersections

An intersection represents a logical AND relationship. You can apply this concept to your schemas with `intersect` and partially by merging multiple object schemas into a new one. We recommend this approach for simple object schemas, and `intersect` for all other cases.

#### Intersect schema

The schema function `intersect` creates an AND relationship between any number of schemas that you pass as the first argument in the form of an array. To pass the validation, the validation of each schema passed must be successful. If this is the case, the schema merges the output of the individual schemas and returns the result. If the validation fails, the schema returns any issues that occurred.

```ts
import * as v from 'valibot';

// TypeScript
type Intersect = { foo: string } & { bar: number };

// Valibot
const IntersectSchema = v.intersect([
  v.object({ foo: v.string() }),
  v.object({ bar: v.number() }),
]);
```

#### Merge objects

Technically, there is a big difference between `intersect` and object merging. `intersect` is a schema function that executes the passed schemas during validation. In contrast, object merging is done during initialization to create a new object schema.

As a result, object merging usually has much better performance than `intersect` when validating unknown data. Also, subsequent object properties overwrite the previous ones. This is not the case with `intersect`, since the validation would fail if two properties with the same name are fundamentally different.

```ts
import * as v from 'valibot';

const ObjectSchema1 = v.object({ foo: v.string(), baz: v.number() });
const ObjectSchema2 = v.object({ bar: v.string(), baz: v.boolean() });

const MergedSchema = v.object({
  ...ObjectSchema1.entries,
  ...ObjectSchema2.entries,
}); // { foo: string; bar: string; baz: boolean }
```

In the previous code example, the `baz` property of the first object schema is overwritten by the `baz` property of the second object schema.

### Other

This guide explains other special schema functions such as `literal`, `instance`, `custom` and `lazy` that are not covered in the other guides.

#### Literal schema

You can use `literal` to define a schema that matches a specific string, number or boolean value. Therefore, this schema is perfect for representing [literal types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types). Usage is simple, just pass the value you want to match as the first argument.

```ts
import * as v from 'valibot';

const StringLiteralSchema = v.literal('foo'); // 'foo'
const NumberLiteralSchema = v.literal(12345); // 12345
const BooleanLiteralSchema = v.literal(true); // true
```

#### Instance schema

With schema functions like `blob`, `date`, `map` and `set` Valibot already covers the most common JavaScript classes. However, there are many more classes that you may want to validate. For this purpose, you can use the `instance` schema function. It takes a class as its first argument and returns a schema that matches only instances of that class.

```ts
import * as v from 'valibot';

const ErrorSchema = v.instance(Error); // Error
const UrlSchema = v.instance(URL); // URL
```

#### Custom schema

The `custom` schema function is a bit more advanced. It allows you to define a schema that matches a value based on a custom function. Use it whenever you need to define a schema that cannot be expressed using any of the other schema functions.

The function receives the value to validate as its first argument and must return a boolean value. If the function returns `true`, the value is considered valid. Otherwise, it is considered invalid.

```ts
import * as v from 'valibot';

const PixelStringSchema = v.custom<`${number}px`>((input) =>
  typeof input === 'string' ? /^\d+px$/.test(input) : false
);
```

#### Lazy schema

The `lazy` schema function allows you to define recursive schemas. A recursive schema is a schema that references itself. For example, you can use it to define a schema for a tree-like data structure.

> Due to a TypeScript limitation, the input and output types cannot be inferred automatically in this case. Therefore, you must explicitly specify these types using the `GenericSchema` type.

```ts
import * as v from 'valibot';

type BinaryTree = {
  element: string;
  left: BinaryTree | null;
  right: BinaryTree | null;
};

const BinaryTreeSchema: v.GenericSchema<BinaryTree> = v.object({
  element: v.string(),
  left: v.nullable(v.lazy(() => BinaryTreeSchema)),
  right: v.nullable(v.lazy(() => BinaryTreeSchema)),
});
```

##### JSON schema

Another practical use case for `lazy` is a schema for all possible `JSON` values. These are all values that can be serialized and deserialized using `JSON.stringify()` and `JSON.parse()`.

```ts
import * as v from 'valibot';

type JsonData =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JsonData }
  | JsonData[];

const JsonSchema: v.GenericSchema<JsonData> = v.lazy(() =>
  v.union([
    v.string(),
    v.number(),
    v.boolean(),
    v.null(),
    v.record(v.string(), JsonSchema),
    v.array(JsonSchema),
  ])
);
```
