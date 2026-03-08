### variant

Creates a variant schema.

```ts
const Schema = v.variant<TKey, TOptions, TMessage>(key, options, message);
```

#### Generics

- `TKey`
- `TOptions`
- `TMessage`

#### Parameters

- `key`
- `options`
- `message`

##### Explanation

With `variant` you can validate if the input matches one of the given object `options`. The object schema to be used for the validation is determined by the discriminator `key`. If the input does not match a schema and cannot be clearly assigned to one of the options, you can use `message` to customize the error message.

> It is allowed to specify the exact same or a similar discriminator multiple times. However, in such cases `variant` will only return the output of the first untyped or typed variant option result. Typed results take precedence over untyped ones.

> For deeply nested `variant` schemas with several different discriminator keys, `variant` will return an issue for the first most likely object schemas on invalid input. The order of the discriminator keys and the presence of a discriminator in the input are taken into account.

#### Returns

- `Schema`

#### Examples

The following examples show how `variant` can be used.

##### Variant schema

Schema to validate an email, URL or date variant.

```ts
const VariantSchema = v.variant('type', [
  v.object({
    type: v.literal('email'),
    email: v.pipe(v.string(), v.email()),
  }),
  v.object({
    type: v.literal('url'),
    url: v.pipe(v.string(), v.url()),
  }),
  v.object({
    type: v.literal('date'),
    date: v.pipe(v.string(), v.isoDate()),
  }),
]);
```

##### Nested variant schema

You can also nest `variant` schemas.

```ts
const NestedVariantSchema = v.variant('type', [
  VariantSchema,
  v.object({
    type: v.literal('color'),
    date: v.pipe(v.string(), v.hexColor()),
  }),
]);
```

##### Complex variant schema

You can also use `variant` to validate complex objects with multiple different discriminator keys.

```ts
const ComplexVariantSchema = v.variant('kind', [
  v.variant('type', [
    v.object({
      kind: v.literal('fruit'),
      type: v.literal('apple'),
      item: v.object({ … }),
    }),
    v.object({
      kind: v.literal('fruit'),
      type: v.literal('banana'),
      item: v.object({ … }),
    }),
  ]),
  v.variant('type', [
    v.object({
      kind: v.literal('vegetable'),
      type: v.literal('carrot'),
      item: v.object({ … }),
    }),
    v.object({
      kind: v.literal('vegetable'),
      type: v.literal('tomato'),
      item: v.object({ … }),
    }),
  ]),
]);
```

#### Related

The following APIs can be combined with `variant`.

##### Schemas

##### Methods

\<ApiList
items={\[
'assert',
'config',
'fallback',
'getDefault',
'getDefaults',
'getFallback',
'getFallbacks',
'is',
'message',
'parse',
'parser',
'pipe',
'safeParse',
'safeParser',
]}
/>

##### Actions

\<ApiList
items={\[
'check',
'brand',
'description',
'entries',
'flavor',
'guard',
'maxEntries',
'metadata',
'minEntries',
'notEntries',
'partialCheck',
'rawCheck',
'rawTransform',
'readonly',
'title',
'transform',
]}
/>

##### Utils

### void

Creates a void schema.

```ts
const Schema = v.void<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `void` you can validate the data type of the input and if it is not `undefined`, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Related

The following APIs can be combined with `void`.

##### Schemas

\<ApiList
items={\[
'array',
'exactOptional',
'intersect',
'lazy',
'looseObject',
'looseTuple',
'map',
'nonNullable',
'nonNullish',
'nonOptional',
'nullable',
'nullish',
'object',
'objectWithRest',
'optional',
'record',
'set',
'strictObject',
'strictTuple',
'tuple',
'tupleWithRest',
'undefinedable',
'union',
]}
/>

##### Methods

\<ApiList
items={\[
'assert',
'config',
'fallback',
'getDefault',
'getDefaults',
'getFallback',
'getFallbacks',
'is',
'message',
'parse',
'parser',
'pipe',
'safeParse',
'safeParser',
]}
/>

##### Actions

\<ApiList
items={\[
'check',
'brand',
'description',
'flavor',
'guard',
'metadata',
'rawCheck',
'rawTransform',
'readonly',
'title',
'transform',
]}
/>

## Methods (API)

### assert

Checks if the input matches the scheme.

> As this is an assertion function, it can be used as a type guard.

```ts
v.assert<TSchema>(schema, input);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`
- `input`

##### Explanation

`assert` does not modify the `input`. Therefore, transformations have no effect and unknown keys of an object are not removed. That is why this approach is not as safe and powerful as `parse` and `safeParse`.

#### Example

The following example show how `assert` can be used.

```ts
const EmailSchema = v.pipe(v.string(), v.email());
const data: unknown = 'jane@example.com';

v.assert(EmailSchema, data);
const email = data; // string
```

#### Related

The following APIs can be combined with `assert`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'bigint',
'blob',
'boolean',
'custom',
'date',
'enum',
'exactOptional',
'file',
'function',
'instance',
'intersect',
'lazy',
'literal',
'looseObject',
'looseTuple',
'map',
'nan',
'never',
'nonNullable',
'nonNullish',
'nonOptional',
'null',
'nullable',
'nullish',
'number',
'object',
'objectWithRest',
'optional',
'picklist',
'promise',
'record',
'set',
'strictObject',
'strictTuple',
'string',
'symbol',
'tuple',
'tupleWithRest',
'undefined',
'undefinedable',
'union',
'unknown',
'variant',
'void',
]}
/>

##### Methods

\<ApiList
items={\[
'assert',
'config',
'fallback',
'keyof',
'message',
'omit',
'partial',
'pick',
'pipe',
'required',
'unwrap',
]}
/>
