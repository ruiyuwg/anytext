### strictTupleAsync

Creates a strict tuple schema.

```ts
const Schema = v.strictTupleAsync<TItems, TMessage>(items, message);
```

#### Generics

- `TItems`
- `TMessage`

#### Parameters

- `items`
- `message`

##### Explanation

With `strictTupleAsync` you can validate the data type of the input and whether the content matches `items`. If the input is not an array or does include unknown items, you can use `message` to customize the error message.

> The difference to `tupleAsync` is that this schema returns an issue for unknown items. It intentionally returns only one issue. Otherwise, attackers could send large arrays to exhaust device resources. If you want an issue for every unknown item, use the `tupleWithRestAsync` schema with `never` for the `rest` argument.

#### Returns

- `Schema`

#### Examples

The following examples show how `strictTupleAsync` can be used. Please see the arrays guide for more examples and explanations.

##### Number and email tuple

Schema to validate a strict tuple with one number and one stored email address.

```ts
import { isEmailPresent } from '~/api';

const TupleSchema = v.strictTupleAsync([
  v.number(),
  v.pipeAsync(
    v.string(),
    v.email(),
    v.checkAsync(isEmailPresent, 'The email is not in the database.')
  ),
]);
```

#### Related

The following APIs can be combined with `strictTupleAsync`.

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
'transformAsync',
'tupleAsync',
'tupleWithRestAsync',
'unionAsync',
'variantAsync',
]}
/>

### transformAsync

Creates a custom transformation action.

```ts
const Action = v.transformAsync<TInput, TOutput>(operation);
```

#### Generics

- `TInput`
- `TOutput`

#### Parameters

- `operation`

##### Explanation

`transformAsync` can be used to freely transform the input. The `operation` parameter is a function that takes the input and returns the transformed output.

#### Returns

- `Action`

#### Examples

The following examples show how `transformAsync` can be used.

##### Blob to string

Schema that transforms a blob to its string value.

```ts
const StringSchema = v.pipeAsync(
  v.blob(),
  v.transformAsync((value) => value.text())
);
```

#### Related

The following APIs can be combined with `transformAsync`.

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

##### Utils

##### Async

\<ApiList
items={\[
'arrayAsync',
'awaitAsync',
'customAsync',
'exactOptionalAsync',
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
'pipeAsync',
'recordAsync',
'setAsync',
'strictObjectAsync',
'strictTupleAsync',
'tupleAsync',
'tupleWithRestAsync',
'undefinedableAsync',
'unionAsync',
'variantAsync',
]}
/>
