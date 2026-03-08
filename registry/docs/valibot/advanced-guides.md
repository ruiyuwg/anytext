## Advanced (guides)

### Naming convention

In many cases a schema is created and exported together with the inferred type. There are two naming conventions for this procedure that we recommend you to use when working with Valibot. In this guide we will explain both of them and share why we think they might make sense.

> You don't have to follow any of these conventions. They are only recommendations.

#### Convention 1

The first naming convention exports the schema and type with the same name. The advantage of this is that the names are short and the boilerplate is low, since the schema and type can be imported together.

We also recommend to follow the [PascalCase](https://en.wikipedia.org/wiki/Naming_convention_\(programming\)) naming convention. This means that each word starts with an uppercase letter. This is a common convention for TypeScript types, and since schemas basically provide runtime validation of types, it makes sense to use this convention for schemas as well.

##### Example

In the following example, a schema is created for a user object. In order to follow the naming convention, the schema and the type are exported with the same name.

```ts
import * as v from 'valibot';

export const PublicUser = v.object({
  name: v.pipe(v.string(), v.maxLength(30)),
  email: v.pipe(v.string(), v.email()),
  avatar: v.nullable(v.file()),
  bio: v.pipe(v.string(), v.maxLength(1000)),
});

export type PublicUser = v.InferOutput<typeof PublicUser>;
```

The schema and type can then be imported and used together.

```ts
import * as v from 'valibot';
import { PublicUser } from './types';

// Use `PublicUser` as a type
const publicUsers: PublicUser[] = [];

publicUsers.push(
  // Use `PublicUser` as a schema
  v.parse(PublicUser, {
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatar: null,
    bio: 'Lorem ipsum ...',
  })
);
```

#### Convention 2

The first naming convention can cause naming conflicts with other classes and types. It also causes a problem when you need to export both the input and output types of a schema.

The second naming convention provides a solution. It also follows the [PascalCase](https://en.wikipedia.org/wiki/Naming_convention_\(programming\)) naming convention, but adds an appropriate suffix to each export. Schemas get the suffix `Schema`, input types get the suffix `Input` and output types get the suffix `Output`.

> If there is no difference between the input and output type, the suffix `Data` can optionally be used to indicate this.

This requires the schema and types to be imported separately, which increases the overhead. However, the naming convention is more precise, flexible, and works in any use case.

##### Example

In the following example, a schema is created for an image object. In order to follow the naming convention, the schema and the types are exported with different names.

```ts
import * as v from 'valibot';

export const ImageSchema = v.object({
  status: v.optional(v.picklist(['public', 'private']), 'private'),
  created: v.optional(v.date(), () => new Date()),
  title: v.pipe(v.string(), v.maxLength(100)),
  source: v.pipe(v.string(), v.url()),
  size: v.pipe(v.number(), v.minValue(0)),
});

export type ImageInput = v.InferInput<typeof ImageSchema>;
export type ImageOutput = v.InferOutput<typeof ImageSchema>;
```

The schema and the input and output types can then be imported and used separately.

```ts
import * as v from 'valibot';
import { ImageInput, ImageOutput, ImageSchema } from './types';

export function createImage(input: ImageInput): ImageOutput {
  return v.parse(ImageSchema, input);
}
```

> Do you have ideas for improving these conventions? We welcome your feedback and suggestions. Feel free to create an [issue](https://github.com/open-circle/valibot/issues/new) on GitHub.

### Async validation

By default, Valibot validates each schema synchronously. This is usually the fastest way to validate unknown data, but sometimes you need to validate something asynchronously. For example, you might want to check if a username already exists in your database.

#### How it works

To be able to do this, Valibot provides an asynchronous implementation when necessary. The only difference is that the asynchronous implementation is promise-based. Otherwise, the API and functionality is exactly the same.

##### Naming

The asynchronous implementation starts with the same name as the synchronous one, but adds the suffix `Async` to the end. For example, the asynchronous implementation of `pipe` is called `pipeAsync` and the asynchronous implementation of `object` is called `objectAsync`.

##### Nesting

Asynchronous functions can only be nested inside other asynchronous functions. This means that if you need to validate a string within an object asynchronously, you must also switch the object validation to the asynchronous implementation.

This is not necessary in the other direction. You can nest synchronous functions within asynchronous functions, and we recommend that you do so in most cases to keep complexity and bundle size to a minimum.

###### Rule of thumb

We recommend that you always start with the synchronous implementation, and only move the necessary parts to the asynchronous implementation as needed. If you are using TypeScript, it is not possible to make a mistake here, as our API is completely type-safe and will notify you when you embed an asynchronous function into a synchronous function.

##### Example

Let's say you want to validate a profile object and the username should be checked asynchronously against your database. Only the object and username validation needs to be asynchronous, the rest can stay synchronous.

```ts
import * as v from 'valibot';
import { isUsernameAvailable } from '~/api';

const ProfileSchema = v.objectAsync({
  username: v.pipeAsync(v.string(), v.checkAsync(isUsernameAvailable)),
  avatar: v.pipe(v.string(), v.url()),
  description: v.pipe(v.string(), v.maxLength(1000)),
});
```

### Internationalization

Providing error messages in the native language of your users can improve the user experience and adoption rate of your software. That is why we offer several flexible ways to easily implement i18n.

#### Official translations

The fastest way to get started with i18n is to use Valibot's official translations. They are provided in a separate package called [`@valibot/i18n`](https://github.com/open-circle/valibot/tree/main/packages/i18n).

> If you are missing a translation, feel free to open an [issue](https://github.com/open-circle/valibot/issues/new) or pull request on GitHub.

##### Import translations

Each translation in this package is implemented modularly and exported as a submodule. This allows you to import only the translations you actually need to keep your bundle size small.

{/\* prettier-ignore \*/}

```ts
// Import every translation (not recommended)
import '@valibot/i18n';

// Import every translation for a specific language
import '@valibot/i18n/de';

// Import only the translation for schema functions
import '@valibot/i18n/de/schema';

// Import only the translation for a specific pipeline function
import '@valibot/i18n/de/minLength';
```

The submodules use sideeffects to load the translations into a global storage that the schema and validation functions access when adding the error message to an issue.

##### Select language

The language used is then selected by the `lang` configuration. You can set it globally with `setGlobalConfig` or locally when parsing unknown data via `parse` or `safeParse`.

```ts
import * as v from 'valibot';

// Set the language configuration globally
v.setGlobalConfig({ lang: 'de' });

// Set the language configuration locally
v.parse(Schema, input, { lang: 'de' });
```

#### Custom translations

You can use the same APIs as [`@valibot/i18n`](https://github.com/open-circle/valibot/tree/main/packages/i18n) to add your own translations to the global storage. Alternatively, you can also pass them directly to a specific schema or validation function as the first optional argument.

> You can either enter the translations manually or use an i18n library like [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).

##### Set translations globally

You can add translations with `setGlobalMessage`, `setSchemaMessage` and `setSpecificMessage` in three different hierarchy levels. When creating an issue, I first check if a specific translation is available, then the translation for schema functions, and finally the global translation.

```ts
import * as v from 'valibot';

// Set the translation globally (can be used as a fallback)
v.setGlobalMessage((issue) => `Invalid input: ...`, 'en');

// Set the translation globally for every schema functions
v.setSchemaMessage((issue) => `Invalid type: ...`, 'en');

// Set the translation globally for a specific function
v.setSpecificMessage(v.minLength, (issue) => `Invalid length: ...`, 'en');
```

##### Set translations locally

If you prefer to define the translations individually, you can pass them as the first optional argument to schema and validation functions. We recommend using an i18n library like [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) in this case.

{/\* prettier-ignore \*/}

```ts
import * as v from 'valibot';
import * as m from './paraglide/messages.js';

const LoginSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty(m.emailRequired),
    v.email(m.emailInvalid)
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty(m.passwordRequired),
    v.minLength(8, m.passwordInvalid)
  ),
});
```

### JSON Schema

In favor of a larger feature set and smaller bundle size, Valibot is not implemented with JSON Schema in mind. However, in some use cases, you may still need a JSON Schema. This guide will show you how to convert Valibot schemas to JSON Schema format.

#### Valibot to JSON Schema

A large part of Valibot's schemas are JSON Schema compatible and can be easily converted to the JSON Schema format using the official `toJsonSchema` function. This function is provided via a separate package called [`@valibot/to-json-schema`](https://github.com/open-circle/valibot/tree/main/packages/to-json-schema).

> See the [README](https://github.com/open-circle/valibot/blob/main/packages/to-json-schema/README.md) of the `@valibot/to-json-schema` package for more details. It is also recommended that you take a look at this blog post, which highlights recent improvements.

```ts
import { toJsonSchema } from '@valibot/to-json-schema';
import * as v from 'valibot';

const ValibotEmailSchema = v.pipe(v.string(), v.email());
const JsonEmailSchema = toJsonSchema(ValibotEmailSchema);
// -> { type: 'string', format: 'email' }
```

#### Cons of JSON Schema

Valibot schemas intentionally do not output JSON Schema natively. This is because JSON Schema is limited to JSON-compliant data structures. In addition, more advanced features like transformations are not supported. Since we want to leverage the full power of TypeScript, we output a custom format instead.

Another drawback of JSON Schema is that JSON Schema itself does not contain any validation logic. Therefore, an additional function is required that can validate the entire JSON Schema specification. This approach is usually not tree-shakable and results in a large bundle size.

In contrast, Valibot's API design and implementation is completely modular. Every schema is independent and contains its own validation logic. This allows the schemas to be plugged together like LEGO bricks, resulting in a much smaller bundle size due to tree shaking.

#### Pros of JSON Schema

Despite these drawbacks, JSON Schema is still widely used in the industry because it also has many advantages. For example, JSON Schemas can be used across programming languages and tools. In addition, JSON Schemas are serializable and can be easily stored in a database or transmitted over a network.

### Internal Architecture

This guide targets library authors and advanced users who want to understand how Valibot works under the hood. It covers the internal object model — schemas, actions, datasets, issues, and config — and how they fit together in the pipeline execution engine.

Valibot is built around a simple modularity principle: every schema and action is an independent, interchangeable building block. Like Lego bricks, they each expose a standard connector — a shared interface contract — and can be freely combined, nested, and replaced without any central registry or shared state. Valibot's built-in schemas and actions follow the exact same rules as any custom ones you write yourself, which means the library can be extended or partially replaced without special privileges.

This design is backed by a concrete technical choice: Every schema and action is a plain object literal returned by a pure factory function. There are no classes, no prototypes beyond `Object`, and no shared mutable state. Because each factory is a pure function with no side effects, it is annotated with `// @__NO_SIDE_EFFECTS__`, which allows bundlers to eliminate every unused schema and action from the final bundle.

#### Schemas

Schemas are the starting point for using Valibot. They validate a specific data type, like a string, object, or date, and can be reused or nested to reflect more complex data structures. Every schema is a plain object that satisfies `BaseSchema`:

| Property      | Type            | Description                                                                 |
| ------------- | --------------- | --------------------------------------------------------------------------- |
| `kind`        | `'schema'`      | Identifies this object as a schema                                          |
| `type`        | `string`        | snake\_case name, e.g. `'string'`, `'loose_object'`                          |
| `reference`   | `Function`      | The factory function itself (for identity checks)                           |
| `expects`     | `string`        | Human-readable expected type, e.g. `'string'`                               |
| `async`       | `false`         | `true` on async variants                                                    |
| `'~standard'` | `StandardProps` | Standard Schema v1 properties (lazy getter)                                 |
| `'~run'`      | `Function`      | Parses an `UnknownDataset` and returns an output dataset                    |
| `'~types'`    | `undefined`     | Phantom field for TypeScript inference only — always `undefined` at runtime |

Validation logic beyond the base type check lives in a `pipe` array added by the `pipe` method and some schemas expose additional schema-specific properties. See [Runtime properties](/guides/integrate-valibot/#runtime-properties) for a full breakdown.

Any object that satisfies the `BaseSchema` interface is a valid schema — whether it comes from Valibot's built-ins, a third-party package, or your own code. The guide [Extend Valibot](/guides/extend-valibot/) walks through building one from scratch.

#### Actions

Actions come in three kinds. The first and probably most important one are validation actions. They check an already-typed value and may add issues. Every validation action is a plain object that satisfies `BaseValidation`:

| Property    | Type             | Description                                                                 |
| ----------- | ---------------- | --------------------------------------------------------------------------- |
| `kind`      | `'validation'`   | Identifies this object as a validation action                               |
| `type`      | `string`         | snake\_case name, e.g. `'min_length'`, `'email'`                             |
| `reference` | `Function`       | The factory function itself (for identity checks)                           |
| `expects`   | `string \| null` | Human-readable expected value description; used in issue messages           |
| `async`     | `false`          | `true` on async variants                                                    |
| `'~run'`    | `Function`       | Validates the current dataset value                                         |
| `'~types'`  | `undefined`      | Phantom field for TypeScript inference only — always `undefined` at runtime |

The second one are transformation actions. They convert the value to a new type and/or value. Every transformation action is a plain object that satisfies `BaseTransformation`:

| Property    | Type               | Description                                                                 |
| ----------- | ------------------ | --------------------------------------------------------------------------- |
| `kind`      | `'transformation'` | Identifies this object as a transformation action                           |
| `type`      | `string`           | snake\_case name, e.g. `'trim'`, `'to_lower_case'`                           |
| `reference` | `Function`         | The factory function itself (for identity checks)                           |
| `async`     | `false`            | `true` on async variants                                                    |
| `'~run'`    | `Function`         | Transforms the current dataset value                                        |
| `'~types'`  | `undefined`        | Phantom field for TypeScript inference only — always `undefined` at runtime |

The third one are metadata actions. They carry static annotations and are always skipped during pipeline execution. Every metadata action is a plain object that satisfies `BaseMetadata`:

| Property    | Type         | Description                                       |
| ----------- | ------------ | ------------------------------------------------- |
| `kind`      | `'metadata'` | Identifies this object as a metadata action       |
| `type`      | `string`     | snake\_case name, e.g. `'title'`, `'description'`  |
| `reference` | `Function`   | The factory function itself (for identity checks) |

Just like schemas, any object that satisfies one of these action interfaces is a valid action that can be dropped into any pipeline.

#### Datasets

A dataset is the container that carries a value through the validation pipeline. It is passed to each `'~run'` method in sequence, and as the pipeline executes, the dataset's `typed` flag and `issues` array are updated to reflect the current state of validation.

Datasets are **mutable by design** for performance reasons. `'~run'` implementations modify `dataset.value` and `dataset.typed` in place rather than returning new objects.

| Type                       | `typed`     | `issues`              | Description                              |
| -------------------------- | ----------- | --------------------- | ---------------------------------------- |
| `UnknownDataset`           | `undefined` | `undefined`           | Raw input, not yet validated             |
| `SuccessDataset<T>`        | `true`      | `undefined`           | Fully typed, no issues                   |
| `PartialDataset<T, Issue>` | `true`      | `[Issue, ...Issue[]]` | Typed but has value or formatting issues |
| `FailureDataset<Issue>`    | `false`     | `[Issue, ...Issue[]]` | Not typed, has fatal issues              |

#### Issues

When a schema or validation action finds a problem with the input, it adds an issue to the dataset. Every issue is a plain object that satisfies `BaseIssue`:

| Property      | Type                                           | Description                                              |
| ------------- | ---------------------------------------------- | -------------------------------------------------------- |
| `kind`        | `'schema' \| 'validation' \| 'transformation'` | Mirrors the kind of the object that raised it            |
| `type`        | `string`                                       | Mirrors the type of the object that raised it            |
| `input`       | `unknown`                                      | The raw input value that caused the issue                |
| `expected`    | `string \| null`                               | Human-readable description of what was expected          |
| `received`    | `string`                                       | Human-readable description of what was actually received |
| `message`     | `string`                                       | The final, resolved error message string                 |
| `requirement` | `unknown \| undefined`                         | The specific constraint that failed, e.g. a `RegExp`     |
| `path`        | `IssuePathItem[] \| undefined`                 | Location of the issue in a nested structure              |
| `issues`      | `BaseIssue[] \| undefined`                     | Sub-issues, used by union and intersect schemas          |

`BaseIssue` also extends `Config`, so the `lang`, `message`, `abortEarly`, and `abortPipeEarly` fields from the parse config are carried into the issue object as well.

#### Config

Every `'~run'` call receives a config object alongside the dataset. It controls language selection, custom error messages, and early-abort behavior. The `Config` interface has four fields:

| Property         | Type                        | Description                                         |
| ---------------- | --------------------------- | --------------------------------------------------- |
| `lang`           | `string \| undefined`       | BCP 47 language tag for i18n error messages         |
| `message`        | `ErrorMessage \| undefined` | A global error message override for the parse call  |
| `abortEarly`     | `boolean \| undefined`      | Stop on the first issue anywhere in the schema tree |
| `abortPipeEarly` | `boolean \| undefined`      | Stop on the first issue within a single pipe        |

#### Pipe execution

The `pipe` method is the universal connector between all building blocks. It returns a new schema object that spreads all properties of the root schema and adds a `pipe` property — a tuple with the root schema at index 0 and additional pipe items at index 1+.

Pipe items can be validation actions, transformation actions, metadata actions, or even other schemas. The `'~run'` method is replaced with a new implementation that iterates all items in the tuple.

`pipe` itself has no knowledge of any specific schema or action. It only depends on the shared interface contracts (`kind` and `'~run'`), which is what makes the entire system composable:

```ts
function pipe(...pipe) {
  return {
    // Spread all properties of the root schema
    ...pipe[0],
    // Add the pipe tuple (root schema at index 0, other pipe items at index 1+)
    pipe,
    // Replace '~standard' with a lazy getter so that `this` refers to the new schema object
    get '~standard'() {
      return _getStandardProps(this);
    },
    // Replace '~run' with a new implementation that executes the pipeline
    '~run'(dataset, config) {
      for (const item of pipe) {
        // Metadata actions are never executed
        if (item.kind !== 'metadata') {
          // Schemas and transformations abort if the dataset already has issues
          if (
            dataset.issues &&
            (item.kind === 'schema' || item.kind === 'transformation')
          ) {
            dataset.typed = false;
            break;
          }

          // Run pipe item unless an early abort is configured
          if (
            !dataset.issues ||
            (!config.abortEarly && !config.abortPipeEarly)
          ) {
            dataset = item['~run'](dataset, config);
          }
        }
      }
      return dataset;
    },
  };
}
```

The following rules apply during pipe execution:

- Metadata items are always skipped.
- Schemas and transformations abort if the dataset already has issues.
- Validations continue across existing issues unless `abortEarly` or `abortPipeEarly` is configured.

Because the result of `pipe` is itself a `BaseSchema`, it can be nested inside other schemas or passed to `pipe` again just like any other schema.

#### Immutability

We treat all schema and action objects as immutable. Mutating them directly after creation leads to unpredictable behavior, especially when schemas are shared across multiple pipelines or modules.

When we need a modified copy of a schema, we spread it into a new object and replace only the properties we want to change. Here is a simplified version of our `fallback` method to demonstrate this pattern:

```ts
function fallback(schema, fallbackValue) {
  return {
    // Copy all properties from the original schema
    ...schema,
    // Add the new fallback property as metadata
    fallback: fallbackValue,
    // Re-bind '~standard' so `this` refers to the new object
    get '~standard'() {
      return _getStandardProps(this);
    },
    // Override '~run' to return the fallback value on failure
    '~run'(dataset, config) {
      const outputDataset = schema['~run'](dataset, config);
      return outputDataset.issues
        ? { typed: true, value: fallbackValue }
        : outputDataset;
    },
  };
}
```

Two things are important when creating a modified copy. First, always re-bind the `'~standard'` getter so that `this` inside it refers to the new object instead of the original. Second, capture the original schema in a closure rather than reading `this` in `'~run'`, so the original `'~run'` logic is called correctly.

If you want to create an entirely new schema or action from scratch rather than wrapping an existing one, see the [Extend Valibot](/guides/extend-valibot/) guide.

### Integrate Valibot

This guide is aimed at library authors who want to build on top of Valibot — whether that is a form library, an ORM, an API framework, a code generator, or other tooling. It covers Standard Schema for schema-agnostic integrations, schema introspection for extracting types and runtime properties, and schema tree traversal for analysis and code generation.

#### Standard Schema

Valibot implements [Standard Schema v1](https://standardschema.dev/schema). Every schema object exposes a `'~standard'` property that provides a vendor-neutral `validate` function and inferred TypeScript types. We recommend reading the Standard Schema documentation for the full interface specification.

When building a library that accepts user-defined schemas, we recommend accepting a `StandardSchemaV1` instead of a Valibot-specific type — unless your integration requires Valibot-specific APIs. This ensures your library works with any Standard Schema-compatible library, not just Valibot.

```ts
import type { StandardSchemaV1 } from '@standard-schema/spec';

async function validateData(schema: StandardSchemaV1, data: unknown) {
  const result = await schema['~standard'].validate(data);
  if (result.issues) {
    // Validation failed — result.issues is a readonly array of StandardIssue
    console.log(result.issues);
  } else {
    // Validation succeeded — result.value is the typed output
    console.log(result.value);
  }
}
```

One important limitation: `'~standard'.validate` always uses Valibot's global config. There is no way to pass a custom config (such as `abortEarly` or a custom `lang`) through the Standard Schema interface. If you need that level of control, use Valibot's own parsing APIs directly.

> Valibot also supports the [Standard JSON Schema](https://standardschema.dev/json-schema) specification via the `@valibot/to-json-schema` package, which exposes a `toStandardJsonSchema` function.

#### Schema introspection

Valibot schemas are plain objects, so all their properties are readable at runtime. This section covers how to extract static TypeScript types, read runtime properties, and use built-in type guards to narrow schema values safely.

##### Static types

Valibot exposes three generic utility types for extracting type information from any schema, validation, transformation, or metadata object.

```ts
import * as v from 'valibot';

const Schema = v.pipe(v.string(), v.decimal(), v.toNumber());

type Input = v.InferInput<typeof Schema>; // string
type Output = v.InferOutput<typeof Schema>; // number
type Issue = v.InferIssue<typeof Schema>; // StringIssue | DecimalIssue | ToNumberIssue
```

`InferInput`,
`InferOutput`, and
`InferIssue` read the phantom `'~types'`
field. They work on schemas, validations, transformations, and metadata alike.
`'~types'` is always `undefined` at runtime — this field exists solely for
TypeScript's type inference, so we recommend never reading it in runtime code.

##### Runtime properties

Every schema and action is a plain object, so you can read its properties directly at runtime. The base properties (`kind`, `type`, `async`, etc.) are always present. Use `kind` to distinguish schemas from actions, and `type` to identify specific schemas and actions. Some schemas expose additional properties listed in the table below.

| Schema                                     | Extra property    | Description                                       |
| ------------------------------------------ | ----------------- | ------------------------------------------------- |
| `object`, `looseObject`, `strictObject`    | `entries`         | `Record<string, BaseSchema>` of named fields      |
| `objectWithRest`                           | `entries`, `rest` | named fields + rest element schema                |
| `array`                                    | `item`            | element schema                                    |
| `tuple`, `looseTuple`, `strictTuple`       | `items`           | ordered tuple of element schemas                  |
| `tupleWithRest`                            | `items`, `rest`   | ordered elements + rest element schema            |
| `record`, `map`                            | `key`, `value`    | key and value schemas                             |
| `set`                                      | `value`           | value schema                                      |
| `union`, `intersect`                       | `options`         | array of member schemas                           |
| `variant`                                  | `key`, `options`  | discriminant key string + array of object schemas |
| `optional`, `nullable`, and other wrappers | `wrapped`         | inner schema                                      |
| `lazy`                                     | `getter`          | `(input: unknown) => BaseSchema` deferred getter  |
| any schema passed through `pipe`           | `pipe`            | tuple of the root schema followed by pipe items   |

##### Type guards

Use these helpers to narrow the TypeScript type of an unknown Valibot object before accessing its properties. Valibot exports three type guard helpers — `isOfKind`, `isOfType`, and `isValiError` — that narrow `kind` and `type` with TypeScript inference:

```ts
import * as v from 'valibot';

// Narrows to BaseSchema by kind
if (v.isOfKind('schema', item)) {
  item; // BaseSchema<...>
}

// Narrows to StringSchema by type
if (v.isOfType('string', schema)) {
  schema; // StringSchema<...>
}
```

Direct `===` comparisons on `kind` and `type` are fine too, but `isOfKind` and `isOfType` can better narrow the TypeScript type of the object in some edge cases.

`isValiError` is a separate helper for
error handling. `ValiError` is the error
class thrown by `parse` and
`parser`. It extends `Error` with `name =
'ValiError'` and a typed `issues` array:

```ts
import * as v from 'valibot';

try {
  v.parse(Schema, input);
} catch (error) {
  if (v.isValiError<typeof Schema>(error)) {
    // error is ValiError<typeof Schema>
    console.log(error.issues);
  }
}
```

#### Schema tree traversal

Because schemas are plain objects, we can walk a schema tree by reading its properties (see [Runtime properties](#runtime-properties)). When traversing a piped schema, read the `pipe` tuple — its first item is the root schema and subsequent items are pipe actions or nested schemas.

Here is a simplified example inspired by `getDefaults` that extracts deeply nested default values from object and tuple schemas:

```ts
import * as v from 'valibot';

function getDefaults<
  const TSchema extends
    | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
    | v.ObjectSchema<v.ObjectEntries, v.ErrorMessage<v.ObjectIssue> | undefined>
    | v.TupleSchema<v.TupleItems, v.ErrorMessage<v.TupleIssue> | undefined>,
>(schema: TSchema): v.InferDefaults<TSchema> {
  // If it is an object schema, return defaults of entries
  if ('entries' in schema) {
    const object: Record<string, unknown> = {};
    for (const key in schema.entries) {
      object[key] = getDefaults(schema.entries[key]);
    }
    return object;
  }

  // If it is a tuple schema, return defaults of items
  if ('items' in schema) {
    return schema.items.map(getDefaults);
  }

  // Otherwise, return default or `undefined`
  return v.getDefault(schema);
}
```

### Extend Valibot

This guide is for developers who need to go beyond Valibot's built-in primitives — for example when validating a domain-specific format, wrapping a schema in a reusable envelope, or building a library on top of Valibot. Because every schema and action is just a plain object satisfying a shared interface, custom schemas and actions are first-class citizens — not second-class extensions.

We cover three levels of extension: Composing existing schemas into reusable factories, building fully custom schemas from scratch, and building fully custom actions from scratch.

#### Dynamic schemas

The lightest form of extension is composing existing schemas into a reusable generic factory — no custom interfaces or internal utilities required. We can wrap any user-provided schema by using `GenericSchema` as the type constraint. It is an alias for `BaseSchema` with all type parameters defaulting to `unknown`, designed specifically for this purpose. TypeScript propagates the concrete type so the return type is fully inferred.

A common use case is wrapping a user-provided item schema in a reusable envelope, like a pagination wrapper:

```ts
import * as v from 'valibot';

function paginatedList<TItem extends v.GenericSchema>(item: TItem) {
  return v.object({
    items: v.array(item),
    total: v.number(),
    page: v.number(),
  });
}

const UserList = paginatedList(v.object({ id: v.number(), name: v.string() }));

type UserList = v.InferOutput<typeof UserList>;
// {
//   items: { id: number; name: string }[];
//   total: number;
//   page: number;
// }
```

#### Custom schemas

A custom schema is a plain object with three parts: A typed issue interface extending `BaseIssue`, a typed schema interface extending `BaseSchema`, and a factory function that returns the object.

Two internal utilities do the heavy lifting: `_getStandardProps` wires up the Standard Schema `'~standard'` getter, and `_addIssue` constructs and attaches a well-formed issue to the dataset. The `label` argument passed to `_addIssue` (e.g. `'type'`) describes what kind of issue it is and is used to build the human-readable `message`.

Here is a simplified version of Valibot's own `string` schema:

```ts
import * as v from 'valibot';

// 1. Define the issue interface
interface StringIssue extends v.BaseIssue<unknown> {
  kind: 'schema';
  type: 'string';
  expected: 'string';
}

// 2. Define the schema interface
interface StringSchema<TMessage extends v.ErrorMessage<StringIssue> | undefined>
  extends v.BaseSchema<string, string, StringIssue> {
  type: 'string';
  reference: typeof string;
  expects: 'string';
  message: TMessage;
}

// 3. Implement the factory function
function string<TMessage extends v.ErrorMessage<StringIssue> | undefined>(
  message?: TMessage
): StringSchema<TMessage> {
  return {
    kind: 'schema',
    type: 'string',
    reference: string,
    expects: 'string',
    async: false,
    message,
    get '~standard'() {
      return v._getStandardProps(this);
    },
    '~run'(dataset, config) {
      if (typeof dataset.value === 'string') {
        // @ts-expect-error
        dataset.typed = true;
      } else {
        v._addIssue(this, 'type', dataset, config);
      }
      // @ts-expect-error
      return dataset as v.OutputDataset<string, StringIssue>;
    },
  };
}
```

The `// @ts-expect-error` comments are a deliberate trade-off in Valibot's codebase to avoid complex conditional generics and improve runtime performance by mutating the `dataset` object. They are safe here because the `typed` flag and return type are always consistent with the logic above.

> `_addIssue` and `_getStandardProps` are prefixed with an underscore to signal that they are internal. They are exported for advanced use cases like this, but their signatures may change between minor versions.

`v.ErrorMessage<T>` accepts either a plain string or a callback `(issue: T) => string`, so custom error messages can be static or dynamically derived from the issue.

#### Custom actions

Actions follow the same plain-object pattern. Valibot has three action kinds — `BaseValidation`, `BaseTransformation`, and `BaseMetadata` — each with its own `kind` string. Validation actions check a typed value and may add issues. Transformation actions convert the value to a new type or value. Metadata actions carry static annotations and are never executed during pipeline runs.

Here is a simplified version of Valibot's own `email` validation action:

```ts
import * as v from 'valibot';

const EMAIL_REGEX =
  /^[\w+-]+(?:\.[\w+-]+)*@[\w+-]+(?:\.[\w+-]+)*\.[a-zA-Z]{2,}$/iu;

// 1. Define the issue interface
interface EmailIssue<TInput extends string> extends v.BaseIssue<TInput> {
  kind: 'validation';
  type: 'email';
  expected: null;
  received: `"${string}"`;
  requirement: RegExp;
}

// 2. Define the action interface
interface EmailAction<
  TInput extends string,
  TMessage extends v.ErrorMessage<EmailIssue<TInput>> | undefined,
> extends v.BaseValidation<TInput, TInput, EmailIssue<TInput>> {
  type: 'email';
  reference: typeof email;
  expects: null;
  requirement: RegExp;
  message: TMessage;
}

// 3. Implement the factory function
function email<
  TInput extends string,
  TMessage extends v.ErrorMessage<EmailIssue<TInput>> | undefined,
>(message?: TMessage): EmailAction<TInput, TMessage> {
  return {
    kind: 'validation',
    type: 'email',
    reference: email,
    expects: null,
    async: false,
    requirement: EMAIL_REGEX,
    message,
    '~run'(dataset, config) {
      if (dataset.typed && !this.requirement.test(dataset.value)) {
        v._addIssue(this, 'email', dataset, config);
      }
      return dataset;
    },
  };
}
```

Notice that `'~run'` first checks `dataset.typed` before testing the value. This is the correct pattern for all validation actions — if the dataset is not yet typed (e.g. a schema earlier in the pipe failed), we skip the check entirely.
