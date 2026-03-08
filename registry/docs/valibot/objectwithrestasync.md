### objectWithRestAsync

Creates an object with rest schema.

```ts
const Schema = v.objectWithRestAsync<TEntries, TRest, TMessage>(
  entries,
  rest,
  message
);
```

#### Generics

- `TEntries`
- `TRest`
- `TMessage`

#### Parameters

- `entries`
- `rest`
- `message`

##### Explanation

With `objectWithRestAsync` you can validate the data type of the input and whether the content matches `entries` and `rest`. If the input is not an object, you can use `message` to customize the error message.

> The difference to `objectAsync` is that this schema includes unknown entries in the output. In addition, this schema filters certain entries from the unknown entries for security reasons.

#### Returns

- `Schema`

#### Examples

The following examples show how `objectWithRestAsync` can be used. Please see the object guide for more examples and explanations.

##### Word map schema

Schema to validate an object with word map mutation details.

```ts
import { isUserAllowedToMutate } from '~/api';

// Assume the rest of the keys are always English words
const WordMapSchema = v.objectWithRestAsync(
  {
    $userId: v.pipeAsync(
      v.string(),
      v.regex(/^[a-z0-9]{12}$/i),
      v.checkAsync(
        isUserAllowedToMutate,
        'The user is not allowed to change the word map.'
      )
    ),
    $targetLanguage: v.union([
      v.literal('hindi'),
      v.literal('spanish'),
      v.literal('french'),
    ]),
  },
  v.string()
);
```

#### Related

The following APIs can be combined with `objectWithRestAsync`.

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

\<ApiList
items={\['config', 'getDefault', 'getFallback', 'keyof', 'omit', 'pick']}
/>

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
'forwardAsync',
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
'optionalAsync',
'parseAsync',
'parserAsync',
'partialAsync',
'partialCheckAsync',
'pipeAsync',
'rawCheckAsync',
'rawTransformAsync',
'recordAsync',
'requiredAsync',
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
