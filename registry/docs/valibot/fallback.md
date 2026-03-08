### fallback

Returns a fallback value as output if the input does not match the schema.

```ts
const Schema = v.fallback<TSchema, TFallback>(schema, fallback);
```

#### Generics

- `TSchema`
- `TFallback`

#### Parameters

- `schema`
- `fallback`

##### Explanation

`fallback` allows you to define a fallback value for the output that will be used if the validation of the input fails. This means that no issues will be returned when using `fallback` and the schema will always return an output.

> If you only want to set a default value for `null` or `undefined` inputs, you should use `optional`, `nullable` or `nullish` instead.

> The fallback value is not validated. Make sure that the fallback value matches your schema.

#### Returns

- `Schema`

#### Examples

The following examples show how `fallback` can be used.

##### Fallback string schema

Schema that will always return a string output.

```ts
const FallbackStringSchema = v.fallback(v.string(), "I'm the fallback!");
```

##### Fallback date schema

Schema that will always return a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) output.

> By using a function as the `fallback` parameter, the schema will return a new [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) instance each time the input does not match the schema.

```ts
const FallbackDateSchema = v.fallback(v.date(), () => new Date());
```

#### Related

The following APIs can be combined with `fallback`.

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
'getDefault',
'getDefaults',
'getFallback',
'getFallbacks',
'is',
'keyof',
'message',
'omit',
'parse',
'parser',
'partial',
'pick',
'pipe',
'required',
'safeParse',
'safeParser',
'unwrap',
]}
/>

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
'hexadecimal',
'hexColor',
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

### flatten

Flatten the error messages of issues.

```ts
const errors = v.flatten<TSchema>(issues);
```

#### Generics

- `TSchema`

#### Parameters

- `issues`

##### Explanation

The error messages of issues without a path that belong to the root of the schema are added to the `.root` key.

The error messages of issues with a path that belong to the nested parts of the schema and can be converted to a dot path are added to the `.nested` key.

Some issue paths, for example for complex data types like `Set` and `Map`, have no key or a key that cannot be converted to a dot path. These error messages are added to the `.other` key.

#### Returns

- `errors`

#### Examples

The following example show how `flatten` can be used.

```ts
const Schema = v.object({
  nested: v.object({
    foo: v.string('Value of "nested.foo" is invalid.'),
  }),
});

const result = v.safeParse(Schema, { nested: { foo: null } });

if (result.issues) {
  const flatErrors = v.flatten<typeof Schema>(result.issues);

  // ...
}
```

#### Related

The following APIs can be combined with `flatten`.

##### Methods

### forward

Forwards the issues of the passed validation action.

```ts
const Action = v.forward<TInput, TIssue, TPath>(action, path);
```

#### Generics

- `TInput`
- `TIssue`
- `TPath`

#### Parameters

- `action`
- `path`

##### Explanation

`forward` allows you to forward the issues of the passed validation `action` via `path` to a nested field of a schema.

#### Returns

- `Action`

#### Examples

The following examples show how `forward` can be used.

##### Register schema

Schema that ensures that the two passwords match.

```ts
const RegisterSchema = v.pipe(
  v.object({
    email: v.pipe(
      v.string(),
      v.nonEmpty('Please enter your email.'),
      v.email('The email address is badly formatted.')
    ),
    password1: v.pipe(
      v.string(),
      v.nonEmpty('Please enter your password.'),
      v.minLength(8, 'Your password must have 8 characters or more.')
    ),
    password2: v.string(),
  }),
  v.forward(
    v.partialCheck(
      [['password1'], ['password2']],
      (input) => input.password1 === input.password2,
      'The two passwords do not match.'
    ),
    ['password2']
  )
);
```

#### Related

The following APIs can be combined with `forward`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'custom',
'looseObject',
'looseTuple',
'object',
'objectWithRest',
'record',
'strictObject',
'strictTuple',
'tuple',
'tupleWithRest',
'union',
'unknown',
'variant',
]}
/>

##### Methods

##### Actions

\<ApiList
items={\[
'check',
'checkItems',
'empty',
'everyItem',
'excludes',
'filterItems',
'findItem',
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
'reduceItems',
'someItem',
'sortItems',
]}
/>

##### Utils

### getDefault

Returns the default value of the schema.

```ts
const value = v.getDefault<TSchema>(schema, dataset, config);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`
- `dataset`
- `config`

#### Returns

- `value`

#### Examples

The following examples show how `getDefault` can be used.

##### Optional string schema

Get the default value of an optional string schema.

```ts
const OptionalStringSchema = v.optional(v.string(), "I'm the default!");
const defaultValue = v.getDefault(OptionalStringSchema); // "I'm the default!"
```

#### Related

The following APIs can be combined with `getDefault`.

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
'keyof',
'message',
'omit',
'partial',
'pick',
'pipe',
'required',
'unwrap',
]}
/>

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

### getDefaults

Returns the default values of the schema.

> The difference to `getDefault` is that for object and tuple schemas this function recursively returns the default values of the subschemas instead of `undefined`.

```ts
const values = v.getDefaults<TSchema>(schema);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`

#### Returns

- `values`

#### Examples

The following examples show how `getDefaults` can be used.

##### Object defaults

Get the default values of an object schema.

```ts
const ObjectSchema = v.object({
  key: v.optional(v.string(), "I'm the default!"),
});

const defaultValues = v.getDefaults(ObjectSchema); // { key: "I'm the default!" }
```

##### Tuple defaults

Get the default values of a tuple schema.

```ts
const TupleSchema = v.tuple([v.nullable(v.number(), 100)]);
const defaultValues = v.getDefaults(TupleSchema); // [100]
```

#### Related

The following APIs can be combined with `getDefaults`.

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
'keyof',
'message',
'omit',
'partial',
'pick',
'pipe',
'required',
'unwrap',
]}
/>

### getDescription

Returns the description of the schema.

> If multiple descriptions are defined, the last one of the highest level is returned. If no description is defined, `undefined` is returned.

```ts
const description = v.getDescription<TSchema>(schema);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`

#### Returns

- `description`

#### Examples

The following examples show how `getDescription` can be used.

##### Get description of schema

Get the description of a username schema.

```ts
const UsernameSchema = v.pipe(
  v.string(),
  v.regex(/^[a-z0-9_-]{4,16}$/iu),
  v.title('Username'),
  v.description(
    'A username must be between 4 and 16 characters long and can only contain letters, numbers, underscores and hyphens.'
  )
);

const description = v.getDescription(UsernameSchema);
```

##### Overriding inherited descriptions

Get the description of a Gmail schema with an overridden description.

```ts
const EmailSchema = v.pipe(v.string(), v.email(), v.description('Email'));

const GmailSchema = v.pipe(
  EmailSchema,
  v.endsWith('@gmail.com'),
  v.description('Gmail')
);

const description = v.getDescription(GmailSchema); // 'Gmail'
```

#### Related

The following APIs can be combined with `getDescription`.

##### Actions

### getExamples

Returns the examples of the schema.

> If multiple examples are defined, it concatenates them using depth-first search. If no examples are defined, an empty array is returned.

```ts
const examples = v.getExamples<TSchema>(schema);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`

#### Returns

- `examples`

#### Examples

The following examples show how `getExamples` can be used.

##### String schema

```ts
const StringSchema = v.pipe(v.string(), v.examples(['foo', 'bar', 'baz']));

const examples = v.getExamples(StringSchema);

// ['foo', 'bar', 'baz']
```

##### Nested schema

```ts
const NestedSchema = v.pipe(
  v.string(),
  v.examples(['foo', 'bar', 'baz']),
  v.pipe(v.string(), v.examples(['qux', 'quux']))
);

const examples = v.getExamples(NestedSchema);

// ['foo', 'bar', 'baz', 'qux', 'quux']
```

#### Related

The following APIs can be combined with `getExamples`.

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

### getFallback

Returns the fallback value of the schema.

```ts
const value = v.getFallback<TSchema>(schema, dataset, config);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`
- `dataset`
- `config`

#### Returns

- `value`

#### Examples

The following examples show how `getFallback` can be used.

##### Fallback string schema

Get the fallback value of a string schema.

```ts
const FallbackStringSchema = v.fallback(v.string(), "I'm the fallback!");
const fallbackValue = v.getFallback(FallbackStringSchema); // "I'm the fallback!"
```

#### Related

The following APIs can be combined with `getFallback`.

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
'keyof',
'message',
'omit',
'partial',
'pick',
'pipe',
'required',
'unwrap',
]}
/>

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

### getFallbacks

Returns the fallback values of the schema.

> The difference to `getFallback` is that for object and tuple schemas this function recursively returns the fallback values of the subschemas instead of `undefined`.

```ts
const values = v.getFallbacks<TSchema>(schema);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`

#### Returns

- `values`

#### Examples

The following examples show how `getFallbacks` can be used.

##### Object fallbacks

Get the fallback values of an object schema.

```ts
const ObjectSchema = v.object({
  key: v.fallback(v.string(), "I'm the fallback!"),
});

const fallbackValues = v.getFallbacks(ObjectSchema); // { key: "I'm the fallback!" }
```

##### Tuple fallbacks

Get the fallback values of a tuple schema.

```ts
const TupleSchema = v.tuple([v.fallback(v.number(), 100)]);
const fallbackValues = v.getFallbacks(TupleSchema); // [100]
```

#### Related

The following APIs can be combined with `getFallbacks`.

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
'keyof',
'message',
'omit',
'partial',
'pick',
'pipe',
'required',
'unwrap',
]}
/>

### getMetadata

Returns the metadata of the schema.

> If multiple metadata are defined, it shallowly merges them using depth-first search. If no metadata is defined, an empty object is returned.

```ts
const metadata = v.getMetadata<TSchema>(schema);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`

#### Returns

- `metadata`

#### Examples

The following examples show how `getMetadata` can be used.

##### Get metadata of schema

Get the metadata of a username schema.

```ts
const UsernameSchema = v.pipe(
  v.string(),
  v.regex(/^[a-z0-9_-]{4,16}$/iu),
  v.title('Username'),
  v.metadata({
    length: { min: 4, max: 16 },
    chars: ['letters', 'numbers', 'underscores', 'hyphens'],
  })
);

const metadata = v.getMetadata(UsernameSchema);
```

#### Related

The following APIs can be combined with `getMetadata`.

##### Actions

### getTitle

Returns the title of the schema.

> If multiple titles are defined, the last one of the highest level is returned. If no title is defined, `undefined` is returned.

```ts
const title = v.getTitle<TSchema>(schema);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`

#### Returns

- `title`

#### Examples

The following examples show how `getTitle` can be used.

##### Get title of schema

Get the title of a username schema.

```ts
const UsernameSchema = v.pipe(
  v.string(),
  v.regex(/^[a-z0-9_-]{4,16}$/iu),
  v.title('Username'),
  v.description(
    'A username must be between 4 and 16 characters long and can only contain letters, numbers, underscores and hyphens.'
  )
);

const title = v.getTitle(UsernameSchema); // 'Username'
```

##### Overriding inherited titles

Get the title of a Gmail schema with an overridden title.

```ts
const EmailSchema = v.pipe(v.string(), v.email(), v.title('Email'));

const GmailSchema = v.pipe(
  EmailSchema,
  v.endsWith('@gmail.com'),
  v.title('Gmail')
);

const title = v.getTitle(GmailSchema); // 'Gmail'
```

#### Related

The following APIs can be combined with `getTitle`.

##### Actions

### is

Checks if the input matches the scheme.

> By using a type predicate, this function can be used as a type guard.

```ts
const result = v.is<TSchema>(schema, input);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`
- `input`

##### Explanation

`is` does not modify the `input`. Therefore, transformations have no effect and unknown keys of an object are not removed. That is why this approach is not as safe and powerful as `parse` and `safeParse`.

#### Returns

- `result`

#### Example

The following example show how `is` can be used.

```ts
const EmailSchema = v.pipe(v.string(), v.email());
const data: unknown = 'jane@example.com';

if (v.is(EmailSchema, data)) {
  const email = data; // string
}
```

#### Related

The following APIs can be combined with `is`.

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
'keyof',
'message',
'omit',
'partial',
'pick',
'pipe',
'required',
'unwrap',
]}
/>

### keyof

Creates a picklist schema of object keys.

```ts
const Schema = v.keyof<TSchema, TMessage>(schema, message);
```

#### Generics

- `TSchema`
- `TMessage`

#### Parameters

- `schema`
- `message`

#### Returns

- `Schema`

#### Examples

The following examples show how `keyof` can be used.

##### Object key schema

Schema to validate the keys of an object.

```ts
const ObjectSchema = v.object({ key1: v.string(), key2: v.number() });
const ObjectKeySchema = v.keyof(ObjectSchema); // 'key1' | 'key2'
```

#### Related

The following APIs can be combined with `keyof`.

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
'getDefault',
'getDefaults',
'getFallback',
'getFallbacks',
'is',
'message',
'parse',
'parser',
'pipe',
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
'flavor',
'guard',
'metadata',
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
