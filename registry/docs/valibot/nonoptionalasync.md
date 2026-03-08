### nonOptionalAsync

Creates a non optional schema.

> This schema function can be used to override the behavior of `optionalAsync`.

```ts
const Schema = v.nonOptionalAsync<TWrapped, TMessage>(wrapped, message);
```

#### Generics

- `TWrapped`
- `TMessage`

#### Parameters

- `wrapped`
- `message`

##### Explanation

With `nonOptionalAsync` the validation of your schema will not pass `undefined` inputs. If the input is `undefined`, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `nonOptionalAsync` can be used.

##### Add user schema

Schema to validate an object containing details required to add a user to an existing group.

```ts
import { isGroupPresent } from '~/api';

const AddUserSchema = v.objectAsync({
  groupId: v.nonOptionalAsync(
    // Assume this schema is from a different file and reused here.
    v.optionalAsync(
      v.pipeAsync(
        v.string(),
        v.uuid(),
        v.checkAsync(
          isGroupPresent,
          'The group is not present in the database.'
        )
      )
    )
  ),
  userEmail: v.pipe(v.string(), v.email()),
});
```

#### Related

The following APIs can be combined with `nonOptionalAsync`.

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
