### optional

Creates an optional schema.

```ts
const Schema = v.optional<TWrapped, TDefault>(wrapped, default_);
```

#### Generics

- `TWrapped`
- `TDefault`

#### Parameters

- `wrapped`
- `default_` {/\* prettier-ignore \*/}

##### Explanation

With `optional` the validation of your schema will pass `undefined` inputs, and if you specify a `default_` input value, the schema will use it if the input is `undefined`. For this reason, the output type may differ from the input type of the schema.

> Note that `optional` does not accept `null` as an input. If you want to accept `null` inputs, use `nullable`, and if you want to accept `null` and `undefined` inputs, use `nullish` instead. Also, if you want to set a default output value for any invalid input, you should use `fallback` instead.

#### Returns

- `Schema`

#### Examples

The following examples show how `optional` can be used.

##### Optional string schema

Schema that accepts `string` and `undefined`.

```ts
const OptionalStringSchema = v.optional(v.string(), "I'm the default!");
```

##### Optional date schema

Schema that accepts [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and `undefined`.

> By using a function as the `default_` parameter, the schema will return a new [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) instance each time the input is `undefined`.

```ts
const OptionalDateSchema = v.optional(v.date(), () => new Date());
```

##### Optional entry schema

Object schema with an optional entry.

```ts
const OptionalEntrySchema = v.object({
  key: v.optional(v.string()),
});
```

##### Unwrap optional schema

Use `unwrap` to undo the effect of `optional`.

```ts
const OptionalNumberSchema = v.optional(v.number());
const NumberSchema = v.unwrap(OptionalNumberSchema);
```

#### Related

The following APIs can be combined with `optional`.

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
'partialCheck',
'rawCheck',
'rawTransform',
'readonly',
'title',
'transform',
]}
/>

##### Utils

### picklist

Creates a picklist schema.

```ts
const Schema = v.picklist<TOptions, TMessage>(options, message);
```

#### Generics

- `TOptions`
- `TMessage`

#### Parameters

- `options`
- `message`

##### Explanation

With `picklist` you can validate that the input corresponds to a picklist option. If the input is invalid, you can use `message` to customize the error message.

> `picklist` works in a similar way to `enum`. However, in many cases it is easier to use because you can pass an array of values instead of an enum.

#### Returns

- `Schema`

#### Examples

The following examples show how `picklist` can be used.

##### Language schema

Schema to validate programming languages.

```ts
const LanguageSchema = v.picklist(['JavaScript', 'TypeScript']);
```

##### Country schema

Schema to validate country codes.

```ts
const countries = [
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'United States', code: 'US' },
] as const;

const CountrySchema = v.picklist(
  countries.map((country) => country.code),
  'Please select your country.'
);
```

#### Related

The following APIs can be combined with `picklist`.

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

### promise

Creates a promise schema.

```ts
const Schema = v.promise<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `promise` you can validate the data type of the input. If the input is not a promise, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `promise` can be used.

##### Number promise

Schema to validate a promise that resolves to a number.

```ts
const NumberPromiseSchema = v.pipeAsync(
  v.promise(),
  v.awaitAsync(),
  v.number()
);
```

#### Related

The following APIs can be combined with `promise`.

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
]}
/>

##### Actions

\<ApiList
items={\[
'awaitAsync',
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
