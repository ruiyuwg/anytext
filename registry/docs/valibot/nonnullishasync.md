### nonNullishAsync

Creates a non nullish schema.

> This schema function can be used to override the behavior of `nullishAsync`.

```ts
const Schema = v.nonNullishAsync<TWrapped, TMessage>(wrapped, message);
```

#### Generics

- `TWrapped`
- `TMessage`

#### Parameters

- `wrapped`
- `message`

##### Explanation

With `nonNullishAsync` the validation of your schema will not pass `null` and `undefined` inputs. If the input is `null` or `undefined`, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `nonNullishAsync` can be used.

##### Allowed country schema

Schema to check if a string matches one of the allowed country names.

```ts
import { isAllowedCountry } from '~/api';

const AllowedCountrySchema = v.nonNullishAsync(
  // Assume this schema is from a different file and reused here.
  v.nullishAsync(
    v.pipeAsync(v.string(), v.nonEmpty(), v.checkAsync(isAllowedCountry))
  )
);
```

#### Related

The following APIs can be combined with `nonNullishAsync`.

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

##### Methods

##### Actions

\<ApiList
items={\[
'brand',
'check',
'description',
'flavor',
'guard',
'metadata',
'partialCheck',
'rawCheck',
'rawTransform',
'readonly',
'title',
'transform',
]}
/>

##### Utils

##### Async

\<ApiList
items={\[
'arrayAsync',
'awaitAsync',
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
