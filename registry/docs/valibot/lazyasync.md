### lazyAsync

Creates a lazy schema.

```ts
const Schema = v.lazyAsync<TWrapped>(getter);
```

#### Generics

- `TWrapped`

#### Parameters

- `getter`

##### Explanation

The `getter` function is called lazily to retrieve the schema. This is necessary to be able to access the input through the first argument of the `getter` function and to avoid a circular dependency for recursive schemas.

#### Returns

- `Schema`

#### Examples

The following examples show how `lazyAsync` can be used.

##### Transaction list schema

Recursive schema to validate transactions.

> Due to a TypeScript limitation, the input and output types of recursive schemas cannot be inferred automatically. Therefore, you must explicitly specify these types using `GenericSchemaAsync`.

```ts
import { isTransactionValid } from '~/api';

type Transaction = {
  transactionId: string;
  next: Transaction | null;
};

const TransactionSchema: v.GenericSchemaAsync<Transaction> = v.objectAsync({
  transactionId: v.pipeAsync(
    v.string(),
    v.uuid(),
    v.checkAsync(isTransactionValid, 'The transaction is not valid.')
  ),
  next: v.nullableAsync(v.lazyAsync(() => TransactionSchema)),
});
```

##### Email or username schema

Schema to validate an object containing an email or username.

> In most cases, `unionAsync` and `variantAsync` are the better choices for creating such a schema. I recommend using `lazyAsync` only in special cases.

```ts
import { isEmailPresent, isUsernamePresent } from '~/api';

const EmailOrUsernameSchema = v.lazyAsync((input) => {
  if (input && typeof input === 'object' && 'type' in input) {
    switch (input.type) {
      case 'email':
        return v.objectAsync({
          type: v.literal('email'),
          email: v.pipeAsync(
            v.string(),
            v.email(),
            v.checkAsync(
              isEmailPresent,
              'The email is not present in the database.'
            )
          ),
        });
      case 'username':
        return v.objectAsync({
          type: v.literal('username'),
          username: v.pipeAsync(
            v.string(),
            v.nonEmpty(),
            v.checkAsync(
              isUsernamePresent,
              'The username is not present in the database.'
            )
          ),
        });
    }
  }
  return v.never();
});
```

#### Related

The following APIs can be combined with `lazyAsync`.

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
'args',
'base64',
'bic',
'brand',
'bytes',
'check',
'checkItems',
'creditCard',
'cuid2',
'decimal',
'description',
'digits',
'domain',
'email',
'emoji',
'empty',
'endsWith',
'entries',
'everyItem',
'excludes',
'filterItems',
'findItem',
'finite',
'flavor',
'graphemes',
'gtValue',
'guard',
'hash',
'hexColor',
'hexadecimal',
'imei',
'includes',
'integer',
'ip',
'ipv4',
'ipv6',
'isbn',
'isrc',
'isoDate',
'isoDateTime',
'isoTime',
'isoTimeSecond',
'isoTimestamp',
'isoWeek',
'length',
'ltValue',
'mac',
'mac48',
'mac64',
'mapItems',
'maxBytes',
'maxEntries',
'maxGraphemes',
'maxLength',
'maxSize',
'maxValue',
'maxWords',
'metadata',
'mimeType',
'minBytes',
'minEntries',
'minGraphemes',
'minLength',
'minSize',
'minValue',
'minWords',
'multipleOf',
'nanoid',
'nonEmpty',
'notBytes',
'notEntries',
'notGraphemes',
'notLength',
'notSize',
'notValue',
'notValues',
'notWords',
'octal',
'parseJson',
'partialCheck',
'rawCheck',
'rawTransform',
'readonly',
'reduceItems',
'regex',
'returns',
'rfcEmail',
'safeInteger',
'size',
'slug',
'someItem',
'sortItem',
'startsWith',
'stringifyJson',
'title',
'toLowerCase',
'toMaxValue',
'toMinValue',
'toUpperCase',
'transform',
'trim',
'trimEnd',
'trimStart',
'ulid',
'url',
'uuid',
'value',
'values',
'words',
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
