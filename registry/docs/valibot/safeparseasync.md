### safeParseAsync

Parses an unknown input based on a schema.

```ts
const result = v.safeParseAsync<TSchema>(schema, input, config);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`
- `input`
- `config`

#### Returns

- `result`

#### Example

The following example shows how `safeParseAsync` can be used.

```ts
import { isEmailPresent } from '~/api';

const StoredEmailSchema = v.pipeAsync(
  v.string(),
  v.email(),
  v.checkAsync(isEmailPresent, 'The email is not in the database.')
);
const result = await v.safeParseAsync(StoredEmailSchema, 'jane@example.com');

if (result.success) {
  const storedEmail = result.output;
} else {
  console.error(result.issues);
}
```

#### Related

The following APIs can be combined with `safeParseAsync`.

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
items={\[
'assert',
'config',
'fallback',
'flatten',
'keyof',
'message',
'omit',
'partial',
'pick',
'pipe',
'required',
'summarize',
'unwrap',
]}
/>

##### Utils

##### Async

\<ApiList
items={\[
'arrayAsync',
'customAsync',
'exactOptionalAsync',
'fallbackAsync',
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
'partialAsync',
'pipeAsync',
'recordAsync',
'requiredAsync',
'setAsync',
'strictObjectAsync',
'strictTupleAsync',
'tupleAsync',
'tupleWithRestAsync',
'unionAsync',
'variantAsync',
]}
/>
