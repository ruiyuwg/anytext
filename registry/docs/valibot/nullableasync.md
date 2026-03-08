### nullableAsync

Creates a nullable schema.

```ts
const Schema = v.nullableAsync<TWrapped, TDefault>(wrapped, default_);
```

#### Generics

- `TWrapped`
- `TDefault`

#### Parameters

- `wrapped`
- `default_` {/\* prettier-ignore \*/}

##### Explanation

With `nullableAsync` the validation of your schema will pass `null` inputs, and if you specify a `default_` input value, the schema will use it if the input is `null`. For this reason, the output type may differ from the input type of the schema.

> Note that `nullableAsync` does not accept `undefined` as an input. If you want to accept `undefined` inputs, use `optionalAsync`, and if you want to accept `null` and `undefined` inputs, use `nullishAsync` instead. Also, if you want to set a default output value for any invalid input, you should use `fallbackAsync` instead.

#### Returns

- `Schema`

#### Examples

The following examples show how `nullableAsync` can be used.

##### Nullable username schema

Schema that accepts a unique username or `null`.

> By using a function as the `default_` parameter, the schema will return a unique username from the function call each time the input is `null`.

```ts
import { getUniqueUsername, isUsernameUnique } from '~/api';

const NullableUsernameSchema = v.nullableAsync(
  v.pipeAsync(
    v.string(),
    v.nonEmpty(),
    v.checkAsync(isUsernameUnique, 'The username is not unique.')
  ),
  getUniqueUsername
);
```

##### Unwrap nullable schema

Use `unwrap` to undo the effect of `nullableAsync`.

```ts
import { isUsernameUnique } from '~/api';

const UsernameSchema = v.unwrap(
  // Assume this schema is from a different file and is reused here
  v.nullableAsync(
    v.pipeAsync(
      v.string(),
      v.nonEmpty(),
      v.checkAsync(isUsernameUnique, 'The username is not unique.')
    )
  )
);
```

#### Related

The following APIs can be combined with `nullableAsync`.

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
'nonNullishAsync',
'nonOptionalAsync',
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
'undefinedableAsync',
'unionAsync',
'variantAsync',
]}
/>
