### recordAsync

Creates a record schema.

```ts
const Schema = v.recordAsync<TKey, TValue, TMessage>(key, value, message);
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

With `recordAsync` you can validate the data type of the input and whether the entries match `key` and `value`. If the input is not an object, you can use `message` to customize the error message.

> This schema filters certain entries from the record for security reasons.

> This schema marks an entry as optional if it detects that its key is a literal type. The reason for this is that it is not technically possible to detect missing literal keys without restricting the `key` schema to `string`, `enum` and `picklist`. However, if `enum` and `picklist` are used, it is better to use `objectAsync` with `entriesFromList` because it already covers the needed functionality. This decision also reduces the bundle size of `recordAsync`, because it only needs to check the entries of the input and not any missing keys.

#### Returns

- `Schema`

#### Examples

The following examples show how `recordAsync` can be used.

##### ID to email schema

Schema to validate a record that maps an ID to a public user email.

```ts
import { isEmailPublic } from '~/api';

const IdToEmailSchema = v.recordAsync(
  v.pipe(v.string(), v.uuid()),
  v.pipeAsync(
    v.string(),
    v.email(),
    v.checkAsync(isEmailPublic, 'The email address is private.')
  )
);
```

#### Related

The following APIs can be combined with `recordAsync`.

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
