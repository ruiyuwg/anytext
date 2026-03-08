### strictTuple

Creates a strict tuple schema.

```ts
const Schema = v.strictTuple<TItems, TMessage>(items, message);
```

#### Generics

- `TItems`
- `TMessage`

#### Parameters

- `items`
- `message`

##### Explanation

With `strictTuple` you can validate the data type of the input and whether the content matches `items`. If the input is not an array or does include unknown items, you can use `message` to customize the error message.

> The difference to `tuple` is that this schema returns an issue for unknown items. It intentionally returns only one issue. Otherwise, attackers could send large arrays to exhaust device resources. If you want an issue for every unknown item, use the `tupleWithRest` schema with `never` for the `rest` argument.

#### Returns

- `Schema`

#### Examples

The following examples show how `strictTuple` can be used. Please see the arrays guide for more examples and explanations.

##### Simple tuple schema

Schema to validate a strict tuple with two items.

```ts
const SimpleTupleSchema = v.strictTuple([v.string(), v.number()]);
```

#### Related

The following APIs can be combined with `strictTuple`.

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
