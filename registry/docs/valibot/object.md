### object

Creates an object schema.

```ts
const Schema = v.object<TEntries, TMessage>(entries, message);
```

#### Generics

- `TEntries`
- `TMessage`

#### Parameters

- `entries`
- `message`

##### Explanation

With `object` you can validate the data type of the input and whether the content matches `entries`. If the input is not an object, you can use `message` to customize the error message.

> This schema removes unknown entries. The output will only include the entries you specify. To include unknown entries, use `looseObject`. To return an issue for unknown entries, use `strictObject`. To include and validate unknown entries, use `objectWithRest`.

#### Returns

- `Schema`

#### Examples

The following examples show how `object` can be used. Please see the object guide for more examples and explanations.

##### Simple object schema

Schema to validate an object with two keys.

```ts
const SimpleObjectSchema = v.object({
  key1: v.string(),
  key2: v.number(),
});
```

##### Merge several objects

Schema that merges the entries of two object schemas.

```ts
const MergedObjectSchema = v.object({
  ...ObjectSchema1.entries,
  ...ObjectSchema2.entries,
});
```

##### Mark keys as optional

Schema to validate an object with partial entries.

```ts
const PartialObjectSchema = v.partial(
  v.object({
    key1: v.string(),
    key2: v.number(),
  })
);
```

##### Object with selected entries

Schema to validate only selected entries of an object.

```ts
const PickObjectSchema = v.pick(
  v.object({
    key1: v.string(),
    key2: v.number(),
    key3: v.boolean(),
  }),
  ['key1', 'key3']
);
```

#### Related

The following APIs can be combined with `object`.

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
'forward',
'getDefault',
'getDefaults',
'getFallback',
'getFallbacks',
'is',
'keyof',
'message',
'omit',
'parse',
'parser',
'partial',
'pick',
'pipe',
'required',
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
