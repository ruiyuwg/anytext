### objectAsync

Creates an object schema.

```ts
const Schema = v.objectAsync<TEntries, TMessage>(entries, message);
```

#### Generics

- `TEntries`
- `TMessage`

#### Parameters

- `entries`
- `message`

##### Explanation

With `objectAsync` you can validate the data type of the input and whether the content matches `entries`. If the input is not an object, you can use `message` to customize the error message.

> This schema removes unknown entries. The output will only include the entries you specify. To include unknown entries, use `looseObjectAsync`. To return an issue for unknown entries, use `strictObjectAsync`. To include and validate unknown entries, use `objectWithRestAsync`.

#### Returns

- `Schema`

#### Examples

The following examples show how `objectAsync` can be used. Please see the object guide for more examples and explanations.

##### New user schema

Schema to validate an object containing new user details.

```ts
import { isEmailPresent } from '~/api';

const NewUserSchema = v.objectAsync({
  firstName: v.pipe(v.string(), v.minLength(2), v.maxLength(45)),
  lastName: v.pipe(v.string(), v.minLength(2), v.maxLength(45)),
  email: v.pipeAsync(
    v.string(),
    v.email(),
    v.checkAsync(isEmailPresent, 'The email is already in use by another user.')
  ),
  password: v.pipe(v.string(), v.minLength(8)),
  avatar: v.optional(v.pipe(v.string(), v.url())),
});
```

#### Related

The following APIs can be combined with `objectAsync`.

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
'objectWithRestAsync',
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
