### arrayAsync

Creates an array schema.

```ts
const Schema = v.arrayAsync<TItem, TMessage>(item, message);
```

#### Generics

- `TItem`
- `TMessage`

#### Parameters

- `item`
- `message`

##### Explanation

With `arrayAsync` you can validate the data type of the input. If the input is not an array, you can use `message` to customize the error message.

> If your array has a fixed length, consider using `tupleAsync` for a more precise typing.

#### Returns

- `Schema`

#### Examples

The following examples show how `arrayAsync` can be used.

##### Stored emails schema

Schema to validate an array of stored emails.

```ts
import { isEmailPresent } from '~/api';

const StoredEmailsSchema = v.arrayAsync(
  v.pipeAsync(
    v.string(),
    v.email(),
    v.checkAsync(isEmailPresent, 'The email is not in the database.')
  )
);
```

#### Related

The following APIs can be combined with `arrayAsync`.

##### Schemas

\<ApiList
items={\[
'any',
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
'tupleAsync',
'tupleWithRestAsync',
'unionAsync',
'variantAsync',
]}
/>

### awaitAsync

Creates an await transformation action.

```ts
const Action = v.awaitAsync<TInput>();
```

#### Generics

- `TInput`

##### Explanation

With `awaitAsync` you can transform a promise into its resolved value.

#### Returns

- `Action`

#### Examples

The following examples show how `awaitAsync` can be used.

##### Unique emails schema

Schema to check a set of emails wrapped in a promise object.

```ts
const UniqueEmailsSchema = v.pipeAsync(
  v.promise(),
  v.awaitAsync(),
  v.set(v.pipe(v.string(), v.email()))
);
```

#### Related

The following APIs can be combined with `awaitAsync`.

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
'unionAsync',
'variantAsync',
]}
/>
