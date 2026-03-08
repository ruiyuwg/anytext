### looseObject

Creates a loose object schema.

```ts
const Schema = v.looseObject<TEntries, TMessage>(entries, message);
```

#### Generics

- `TEntries`
- `TMessage`

#### Parameters

- `entries`
- `message`

##### Explanation

With `looseObject` you can validate the data type of the input and whether the content matches `entries`. If the input is not an object, you can use `message` to customize the error message.

> The difference to `object` is that this schema includes any unknown entries in the output. In addition, this schema filters certain entries from the unknown entries for security reasons.

#### Returns

- `Schema`

#### Examples

The following examples show how `looseObject` can be used. Please see the object guide for more examples and explanations.

##### Simple object schema

Schema to validate a loose object with two specific keys.

```ts
const SimpleObjectSchema = v.looseObject({
  key1: v.string(),
  key2: v.number(),
});
```

##### Merge several objects

Schema that merges the entries of two object schemas.

```ts
const MergedObjectSchema = v.looseObject({
  ...ObjectSchema1.entries,
  ...ObjectSchema2.entries,
});
```

##### Mark keys as optional

Schema to validate an object with partial entries.

```ts
const PartialObjectSchema = v.partial(
  v.looseObject({
    key1: v.string(),
    key2: v.number(),
  })
);
```

##### Object with selected entries

Schema to validate only selected entries of a loose object.

```ts
const PickObjectSchema = v.pick(
  v.looseObject({
    key1: v.string(),
    key2: v.number(),
    key3: v.boolean(),
  }),
  ['key1', 'key3']
);
```

#### Related

The following APIs can be combined with `looseObject`.

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
