### strictObject

Creates a strict object schema.

```ts
const Schema = v.strictObject<TEntries, TMessage>(entries, message);
```

#### Generics

- `TEntries`
- `TMessage`

#### Parameters

- `entries`
- `message`

##### Explanation

With `strictObject` you can validate the data type of the input and whether the content matches `entries`. If the input is not an object or does include unknown entries, you can use `message` to customize the error message.

> The difference to `object` is that this schema returns an issue for unknown entries. It intentionally returns only one issue. Otherwise, attackers could send large objects to exhaust device resources. If you want an issue for every unknown key, use the `objectWithRest` schema with `never` for the `rest` argument.

#### Returns

- `Schema`

#### Examples

The following examples show how `strictObject` can be used. Please see the object guide for more examples and explanations.

##### Simple object schema

Schema to validate a strict object with two keys.

```ts
const SimpleObjectSchema = v.strictObject({
  key1: v.string(),
  key2: v.number(),
});
```

##### Merge several objects

Schema that merges the entries of two object schemas.

```ts
const MergedObjectSchema = v.strictObject({
  ...ObjectSchema1.entries,
  ...ObjectSchema2.entries,
});
```

##### Mark keys as optional

Schema to validate an object with partial entries.

```ts
const PartialObjectSchema = v.partial(
  v.strictObject({
    key1: v.string(),
    key2: v.number(),
  })
);
```

##### Object with selected entries

Schema to validate only selected entries of a strict object.

```ts
const PickObjectSchema = v.pick(
  v.strictObject({
    key1: v.string(),
    key2: v.number(),
    key3: v.boolean(),
  }),
  ['key1', 'key3']
);
```

#### Related

The following APIs can be combined with `strictObject`.

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
