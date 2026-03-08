### tuple

Creates a tuple schema.

```ts
const Schema = v.tuple<TItems, TMessage>(items, message);
```

#### Generics

- `TItems`
- `TMessage`

#### Parameters

- `items`
- `message`

##### Explanation

With `tuple` you can validate the data type of the input and whether the content matches `items`. If the input is not an array, you can use `message` to customize the error message.

> This schema removes unknown items. The output will only include the items you specify. To include unknown items, use `looseTuple`. To return an issue for unknown items, use `strictTuple`. To include and validate unknown items, use `tupleWithRest`.

#### Returns

- `Schema`

#### Examples

The following examples show how `tuple` can be used. Please see the arrays guide for more examples and explanations.

##### Simple tuple schema

Schema to validate a tuple with two items.

```ts
const SimpleTupleSchema = v.tuple([v.string(), v.number()]);
```

#### Related

The following APIs can be combined with `tuple`.

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
