### tupleWithRest

Creates a tuple with rest schema.

```ts
const Schema = v.tupleWithRest<TItems, TRest, TMessage>(items, rest, message);
```

#### Generics

- `TItems`
- `TRest`
- `TMessage`

#### Parameters

- `items`
- `rest`
- `message`

##### Explanation

With `tupleWithRest` you can validate the data type of the input and whether the content matches `items` and `rest`. If the input is not an array, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `tupleWithRest` can be used. Please see the arrays guide for more examples and explanations.

##### Tuple schema with rest

Schema to validate a tuple with generic rest items.

```ts
const TupleSchemaWithRest = v.tupleWithRest(
  [v.string(), v.number()],
  v.boolean()
);
```

#### Related

The following APIs can be combined with `tupleWithRest`.

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
'checkItems',
'brand',
'description',
'empty',
'everyItem',
'excludes',
'filterItems',
'findItem',
'flavor',
'guard',
'includes',
'length',
'mapItems',
'maxLength',
'metadata',
'minLength',
'nonEmpty',
'notLength',
'partialCheck',
'rawCheck',
'rawTransform',
'readonly',
'reduceItems',
'someItem',
'sortItems',
'title',
'transform',
]}
/>

##### Utils

### undefined

Creates an undefined schema.

```ts
const Schema = v.undefined<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `undefined` you can validate the data type of the input and if it is not `undefined`, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Related

The following APIs can be combined with `undefined`.

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

##### Utils
