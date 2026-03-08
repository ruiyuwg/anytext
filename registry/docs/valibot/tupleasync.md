### tupleAsync

Creates a tuple schema.

```ts
const Schema = v.tupleAsync<TItems, TMessage>(items, message);
```

#### Generics

- `TItems`
- `TMessage`

#### Parameters

- `items`
- `message`

##### Explanation

With `tupleAsync` you can validate the data type of the input and whether the content matches `items`. If the input is not an array, you can use `message` to customize the error message.

> This schema removes unknown items. The output will only include the items you specify. To include unknown items, use `looseTupleAsync`. To return an issue for unknown items, use `strictTupleAsync`. To include and validate unknown items, use `tupleWithRestAsync`.

#### Returns

- `Schema`

#### Examples

The following examples show how `tupleAsync` can be used. Please see the arrays guide for more examples and explanations.

##### Number and email tuple

Schema to validate a tuple with one number and one stored email address.

```ts
import { isEmailPresent } from '~/api';

const TupleSchema = v.tupleAsync([
  v.number(),
  v.pipeAsync(
    v.string(),
    v.email(),
    v.checkAsync(isEmailPresent, 'The email is not in the database.')
  ),
]);
```

#### Related

The following APIs can be combined with `tupleAsync`.

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
'mapAsync',
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
'partialCheckAsync',
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
'tupleWithRestAsync',
'unionAsync',
'variantAsync',
]}
/>
