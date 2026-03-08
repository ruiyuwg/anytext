### mapAsync

Creates a map schema.

```ts
const Schema = v.mapAsync<TKey, TValue, TMessage>(key, value, message);
```

#### Generics

- `TKey`
- `TValue`
- `TMessage`

#### Parameters

- `key`
- `value`
- `message`

##### Explanation

With `mapAsync` you can validate the data type of the input and whether the entries match `key` and `value`. If the input is not a map, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `mapAsync` can be used.

##### Shopping items schema

Schema to validate a map with usernames that are allowed to shop as keys and the total items purchased as values.

```ts
import { isUserVerified } from '~/api';

const ShoppingItemsSchema = v.mapAsync(
  v.pipeAsync(
    v.string(),
    v.checkAsync(isUserVerified, 'The username is not allowed to shop.')
  ),
  v.pipe(v.number(), v.minValue(0))
);
```

#### Related

The following APIs can be combined with `mapAsync`.

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

##### Actions

\<ApiList
items={\[
'check',
'brand',
'description',
'flavor',
'guard',
'maxSize',
'metadata',
'minSize',
'notSize',
'rawCheck',
'rawTransform',
'readonly',
'size',
'title',
'transform',
]}
/>

##### Utils

##### Async

\<ApiList
items={\[
'arrayAsync',
'checkAsync',
'customAsync',
'exactOptionalAsync',
'fallbackAsync',
'getDefaultsAsync',
'getFallbacksAsync',
'intersectAsync',
'lazyAsync',
'looseObjectAsync',
'looseTupleAsync',
'nonNullableAsync',
'nonNullishAsync',
'nonOptionalAsync',
'nullableAsync',
'nullishAsync',
'objectAsync',
'objectWithRestAsync',
'optionalAsync',
'parseAsync',
'parserAsync',
'pipeAsync',
'rawCheckAsync',
'rawTransformAsync',
'recordAsync',
'safeParseAsync',
'safeParserAsync',
'setAsync',
'strictObjectAsync',
'strictTupleAsync',
'transformAsync',
'tupleAsync',
'tupleWithRestAsync',
'unionAsync',
'variantAsync',
]}
/>
