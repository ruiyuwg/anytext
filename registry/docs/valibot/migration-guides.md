## Migration (guides)

### Migrate to v0.31.0

Migrating Valibot from an older version to v0.31.0 isn't complicated. Except for the new `pipe` method, most things remain the same. The following guide will help you to migrate automatically or manually step by step and also point out important differences.

#### Automatic upgrade

We worked together with [Codemod](https://codemod.com/registry/valibot-migrate-to-v0-31-0) and [Grit](https://docs.grit.io/registry/github.com/open-circle/valibot/migrate_to_v0_31_0) to automatically upgrade your schemas to the new version with a single CLI command. Both codemods are similar. You can use one or the other. Simply run the command in the directory of your project.

> We recommend using a version control system like [Git](https://git-scm.com/) so that you can revert changes if the codemod screws something up.

```bash
### Codemod
npx codemod valibot/migrate-to-v0.31.0

### Grit
npx @getgrit/cli apply github.com/open-circle/valibot#migrate_to_v0_31_0
```

Please create an [issue](https://github.com/open-circle/valibot/issues/new) if you encounter any problems or unexpected behavior with the provided codemods.

#### Restructure code

As mentioned above, one of the biggest differences is the new `pipe` method. Previously, you passed the pipeline as an array to a schema function. Now you pass the schema with various actions to the new `pipe` method to extend a schema.

```ts
// Change this
const Schema = v.string([v.email()]);

// To this
const Schema = v.pipe(v.string(), v.email());
```

We will be publishing a [blog post](/blog/valibot-v0.31.0-is-finally-available/) soon explaining all the benefits of this change. In the meantime, you can read the description of discussion [#463](https://github.com/open-circle/valibot/discussions/463) and PR [#502](https://github.com/open-circle/valibot/pull/502), which introduced this change.

#### Change names

Most of the names are the same as before. However, there are some exceptions. The following table shows all names that have changed.

| v0.30.0          | v0.31.0                                                                                                                                |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `anyAsync`       | `any`                                                                                                    |
| `BaseSchema`     | `GenericSchema`                                                                                |
| `bigintAsync`    | `bigint`                                                                                              |
| `blobAsync`      | `blob`                                                                                                  |
| `booleanAsync`   | `boolean`                                                                                            |
| `custom`         | `check`                                                                                                |
| `customAsync`    | `checkAsync`                                                                                      |
| `coerce`         | `pipe`, `unknown` and `transform` |
| `dateAsync`      | `date`                                                                                                  |
| `enumAsync`      | `enum_`                                                                                                 |
| `Input`          | `InferInput`                                                                                      |
| `instanceAsync`  | `instance`                                                                                          |
| `literalAsync`   | `literal`                                                                                            |
| `nanAsync`       | `nan`                                                                                                    |
| `neverAsync`     | `never`                                                                                                |
| `nullAsync`      | `null_`                                                                                                 |
| `numberAsync`    | `number`                                                                                              |
| `Output`         | `InferOutput`                                                                                    |
| `picklistAsync`  | `picklist`                                                                                          |
| `SchemaConfig`   | `Config`                                                                                              |
| `special`        | `custom`                                                                                              |
| `specialAsync`   | `customAsync`                                                                                    |
| `SchemaConfig`   | `Config`                                                                                              |
| `stringAsync`    | `string`                                                                                              |
| `symbolAsync`    | `symbol`                                                                                              |
| `undefinedAsync` | `undefined_`                                                                                       |
| `unknownAsync`   | `unknown`                                                                                            |
| `toCustom`       | `transform`                                                                                        |
| `toTrimmed`      | `trim`                                                                                                  |
| `toTrimmedEnd`   | `trimEnd`                                                                                            |
| `toTrimmedStart` | `trimStart`                                                                                        |
| `voidAsync`      | `void_`                                                                                                 |

#### Special cases

More complex schemas may require a bit more restructuring. This section provides more details on how to migrate specific functions.

##### Objects and tuples

Previously, you could pass a `rest` argument to the `object` and `tuple` schemas to define the behavior for unknown entries and items. We have removed the `rest` argument to simplify the implementation and reduce the bundle size if this functionality is not needed. If you do need this functionality, there is now a new `objectWithRest` and `tupleWithRest` schema.

```ts
// Change this
const ObjectSchema = v.object({ key: v.string() }, v.null_());
const TupleSchema = v.tuple([v.string()], v.null_());

// To this
const ObjectSchema = v.objectWithRest({ key: v.string() }, v.null_());
const TupleSchema = v.tupleWithRest([v.string()], v.null_());
```

To further improve the developer experience, we have also added a `looseObject`, `looseTuple`, `strictObject` and `strictTuple` schema. These schemas allow or disallow unknown entries or items.

```ts
// Change this
const LooseObjectSchema = v.object({ key: v.string() }, v.unknown());
const LooseTupleSchema = v.tuple([v.string()], v.unknown());
const StrictObjectSchema = v.object({ key: v.string() }, v.never());
const StrictTupleSchema = v.tuple([v.string()], v.never());

// To this
const LooseObjectSchema = v.looseObject({ key: v.string() });
const LooseTupleSchema = v.looseTuple([v.string()]);
const StrictObjectSchema = v.strictObject({ key: v.string() });
const StrictTupleSchema = v.strictTuple([v.string()]);
```

##### Object merging

Since there are now 4 different object schemas, we could no longer provide a simple `merge` function that works in all cases, as we never know which schema you want to merge the other objects into. But there is a simple workaround with a similar developer experience.

```ts
const ObjectSchema1 = v.object({ foo: v.string() });
const ObjectSchema2 = v.object({ bar: v.number() });

// Change this
const MergedObject = v.merge([ObjectSchema1, ObjectSchema2]);

// To this
const MergedObject = v.object({
  ...ObjectSchema1.entries,
  ...ObjectSchema2.entries,
});
```

##### Brand and transform

Previously, `brand` and `transform` were methods that could be wrapped around a schema to modify it. With our new `pipe` method, this is no longer necessary. Instead, `brand` and `transform` are now transformation actions that can be placed directly in a pipeline, resulting in better readability, especially for complex schemas.

```ts
// Change this
const BrandedSchema = v.brand(v.string(), 'foo');
const TransformedSchema = v.transform(v.string(), (input) => input.length);

// To this
const BrandedSchema = v.pipe(v.string(), v.brand('foo'));
const TransformedSchema = v.pipe(
  v.string(),
  v.transform((input) => input.length)
);
```

##### Coerce method

The `coerce` method has been removed because we felt it was an insecure API. In most cases, you don't want to coerce an unknown input into a specific data type. Instead, you want to transform a specific data type into another specific data type. For example, a string or a number into a date. To explicitly define the input type, we recommend using the new `pipe` method together with the `transform` action to achieve the same functionality.

```ts
// Change this
const DateSchema = v.coerce(v.date(), (input) => new Date(input));

// To this
const DateSchema = v.pipe(
  v.union([v.string(), v.number()]),
  v.transform((input) => new Date(input))
);
```

##### Flatten issues

Previously, the `flatten` function accepted a `ValiError` or an array of issues. We have simplified the implementation by only allowing an array of issues to be passed.

```ts
// Change this
const flatErrors = v.flatten(error);

// To this
const flatErrors = v.flatten(error.issues);
```

### Migrate from Zod

Migrating from [Zod](https://zod.dev/) to Valibot is very easy in most cases since both APIs have a lot of similarities. The following guide will help you migrate step by step and also point out important differences.

#### Official codemod

To make the migration as smoth as possible, we have created an official codemod that automatically migrates your Zod schemas to Valibot. Just copy your schemas into this editor and click play.

> The codemod is still in beta and may not cover all edge cases. If you encounter any problems or unexpected behaviour, please create an [issue](https://github.com/open-circle/valibot/issues/new). Alternatively, you can try to fix any issues yourself and create a [pull request](https://github.com/open-circle/valibot/pulls). You can find the source code [here](https://github.com/open-circle/valibot/tree/main/codemod/zod-to-valibot).

You can also run the codemod locally to migrate your entire codebase at once:

```bash
// Preview changes (no writes)
npx @valibot/zod-to-valibot src/**/* --dry

// Apply changes
npx @valibot/zod-to-valibot src/**/*
```

#### Replace imports

The first thing to do after installing Valibot is to update your imports. Just change your Zod imports to Valibot's and replace all occurrences of `z.` with `v.`.

```ts
// Change this
import { z } from 'zod';
const Schema = z.object({ key: z.string() });

// To this
import * as v from 'valibot';
const Schema = v.object({ key: v.string() });
```

#### Restructure code

One of the biggest differences between Zod and Valibot is the way you further validate a given type. In Zod, you chain methods like `.email` and `.endsWith`. In Valibot you use pipelines to do the same thing. This is a function that starts with a schema and is followed by up to 19 validation or transformation actions.

```ts
// Change this
const Schema = z.string().email().endsWith('@example.com');

// To this
const Schema = v.pipe(v.string(), v.email(), v.endsWith('@example.com'));
```

Due to the modular design of Valibot, also all other methods like `.parse` or `.safeParse` have to be used a little bit differently. Instead of chaining them, you usually pass the schema as the first argument and move any existing arguments one position to the right.

```ts
// Change this
const value = z.string().parse('foo');

// To this
const value = v.parse(v.string(), 'foo');
```

We recommend that you read our mental model guide to understand how the individual functions of Valibot's modular API work together.

#### Change names

Most of the names are the same as in Zod. However, there are some exceptions. The following table shows all names that have changed.

| Zod                  | Valibot                                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `and`                | `intersect`                                                                                             |
| `catch`              | `fallback`                                                                                               |
| `catchall`           | `objectWithRest`                                                                                   |
| `coerce`             | `pipe`, `unknown` and `transform`      |
| `datetime`           | `isoDate`, `isoDateTime`                                            |
| `default`            | `optional`                                                                                               |
| `discriminatedUnion` | `variant`                                                                                                 |
| `element`            | `item`                                                                                                                                      |
| `enum`               | `picklist`                                                                                               |
| `extend`             | Object merging                                                                          |
| `gt`                 | `gtValue`                                                                                                 |
| `gte`                | `minValue`                                                                                               |
| `infer`              | `InferOutput`                                                                                         |
| `int`                | `integer`                                                                                                 |
| `input`              | `InferInput`                                                                                           |
| `instanceof`         | `instance`                                                                                               |
| `intersection`       | `intersect`                                                                                             |
| `lt`                 | `ltValue`                                                                                                 |
| `lte`                | `maxValue`                                                                                               |
| `max`                | `maxLength`, `maxSize`, `maxValue` |
| `min`                | `minLength`, `minSize`, `minValue` |
| `nativeEnum`         | `enum`                                                                                                       |
| `negative`           | `maxValue`                                                                                               |
| `nonnegative`        | `minValue`                                                                                               |
| `nonpositive`        | `maxValue`                                                                                               |
| `or`                 | `union`                                                                                                     |
| `output`             | `InferOutput`                                                                                         |
| `passthrough`        | `looseObject`                                                                                         |
| `positive`           | `minValue`                                                                                               |
| `refine`             | `check`, `forward`                                                        |
| `rest`               | `tuple`                                                                                                     |
| `safe`               | `safeInteger`                                                                                         |
| `shape`              | `entries`                                                                                                                                   |
| `strict`             | `strictObject`                                                                                       |
| `strip`              | `object`                                                                                                   |
| `superRefine`        | `rawCheck`, `rawTransform`                                        |

#### Other details

Below are some more details that may be helpful when migrating from Zod to Valibot.

##### Object and tuple

To specify whether objects or tuples should allow or prevent unknown values, Valibot uses different schema functions. Zod uses the methods `.passthrough`, `.strict`, `.strip`, `.catchall` and `.rest` instead. See the objects and arrays guide for more details.

```ts
// Change this
const ObjectSchema = z.object({ key: z.string() }).strict();

// To this
const ObjectSchema = v.strictObject({ key: v.string() });
```

##### Error messages

For individual error messages, you can pass a string or an object to Zod. It also allows you to differentiate between an error message for "required" and "invalid\_type". With Valibot you just pass a single string instead.

```ts
// Change this
const StringSchema = z
  .string({ invalid_type_error: 'Not a string' })
  .min(5, { message: 'Too short' });

// To this
const StringSchema = v.pipe(
  v.string('Not a string'),
  v.minLength(5, 'Too short')
);
```

##### Coerce type

To enforce primitive values, you can use a method of the `coerce` object in Zod. There is no such object or function in Valibot. Instead, you use a pipeline with a `transform` action as the second argument. This forces you to explicitly define the input, resulting in safer code.

```ts
// Change this
const NumberSchema = z.coerce.number();

// To this
const NumberSchema = v.pipe(v.unknown(), v.transform(Number));
```

Instead of `unknown` as in the previous example, we usually recommend using a specific schema such as `string` to improve type safety. This allows you, for example, to validate the formatting of the string with `decimal` before transforming it to a number.

```ts
const NumberSchema = v.pipe(v.string(), v.decimal(), v.transform(Number));
```

##### Async validation

Similar to Zod, Valibot supports synchronous and asynchronous validation. However, the API is a little bit different. See the async guide for more details.

## Schemas (API)
