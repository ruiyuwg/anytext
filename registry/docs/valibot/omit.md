### omit

Creates a modified copy of an object schema that does not contain the selected entries.

```ts
const Schema = v.omit<TSchema, TKeys>(schema, keys);
```

#### Generics

- `TSchema`
- `TKeys`

#### Parameters

- `schema`
- `keys`

##### Explanation

`omit` creates a modified copy of the given object `schema` that does not contain the selected `keys`. It is similar to TypeScript's [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys) utility type.

> Because `omit` changes the data type of the input and output, it is not allowed to pass a schema that has been modified by the `pipe` method, as this may cause runtime errors. Please use the `pipe` method after you have modified the schema with `omit`.

#### Returns

- `Schema`

#### Examples

The following examples show how `omit` can be used.

##### Omit specific keys

Schema that does not contain the selected keys of an existing schema.

```ts
const OmittedSchema = v.omit(
  v.object({
    key1: v.string(),
    key2: v.number(),
    key3: v.boolean(),
  }),
  ['key1', 'key3']
); // { key2: number }
```

#### Related

The following APIs can be combined with `omit`.

##### Schemas

\<ApiList
items={\[
'array',
'exactOptional',
'intersect',
'lazy',
'looseObject',
'looseTuple',
'map',
'nonNullable',
'nonNullish',
'nonOptional',
'nullable',
'nullish',
'object',
'objectWithRest',
'optional',
'record',
'set',
'strictObject',
'strictTuple',
'tuple',
'tupleWithRest',
'undefinedable',
'union',
]}
/>

##### Methods

\<ApiList
items={\[
'assert',
'config',
'fallback',
'forward',
'getDefault',
'getDefaults',
'getFallback',
'getFallbacks',
'is',
'keyof',
'message',
'parse',
'parser',
'partial',
'pick',
'required',
'safeParse',
'safeParser',
'unwrap',
]}
/>

##### Actions

\<ApiList
items={\[
'check',
'brand',
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
'partialAsync',
'partialCheckAsync',
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
'undefinedableAsync',
'unionAsync',
]}
/>

### parse

Parses an unknown input based on a schema.

```ts
const output = v.parse<TSchema>(schema, input, config);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`
- `input`
- `config`

##### Explanation

`parse` will throw a `ValiError` if the `input` does not match the `schema`. Therefore you should use a try/catch block to catch errors. If the input matches the schema, it is valid and the `output` of the schema will be returned typed.

#### Returns

- `output`

#### Example

The following example show how `parse` can be used.

```ts
try {
  const EmailSchema = v.pipe(v.string(), v.email());
  const email = v.parse(EmailSchema, 'jane@example.com');

  // Handle errors if one occurs
} catch (error) {
  console.log(error);
}
```

#### Related

The following APIs can be combined with `parse`.

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

### parser

Returns a function that parses an unknown input based on a schema.

```ts
const parser = v.parser<TSchema, TConfig>(schema, config);
```

#### Generics

- `TSchema`
- `TConfig`

#### Parameters

- `schema`
- `config`

#### Returns

- `parser`

#### Example

The following example show how `parser` can be used.

```ts
try {
  const EmailSchema = v.pipe(v.string(), v.email());
  const emailParser = v.parser(EmailSchema);
  const email = emailParser('jane@example.com');

  // Handle errors if one occurs
} catch (error) {
  console.log(error);
}
```

#### Related

The following APIs can be combined with `parser`.

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
