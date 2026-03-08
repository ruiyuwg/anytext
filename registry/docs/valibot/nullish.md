### nullish

Creates a nullish schema.

```ts
const Schema = v.nullish<TWrapped, TDefault>(wrapped, default_);
```

#### Generics

- `TWrapped`
- `TDefault`

#### Parameters

- `wrapped`
- `default_` {/\* prettier-ignore \*/}

##### Explanation

With `nullish` the validation of your schema will pass `undefined` and `null` inputs, and if you specify a `default_` input value, the schema will use it if the input is `undefined` or `null`. For this reason, the output type may differ from the input type of the schema.

> Note that `nullish` accepts `undefined` and `null` as an input. If you want to accept only `null` inputs, use `nullable`, and if you want to accept only `undefined` inputs, use `optional` instead. Also, if you want to set a default output value for any invalid input, you should use `fallback` instead.

#### Returns

- `Schema`

#### Examples

The following examples show how `nullish` can be used.

##### Nullish string schema

Schema that accepts `string`, `undefined` and `null`.

```ts
const NullishStringSchema = v.nullish(v.string(), "I'm the default!");
```

##### Nullish date schema

Schema that accepts [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), `undefined` and `null`.

> By using a function as the `default_` parameter, the schema will return a new [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) instance each time the input is `undefined` or `null`.

```ts
const NullishDateSchema = v.nullish(v.date(), () => new Date());
```

##### Nullish entry schema

Object schema with a nullish entry.

```ts
const NullishEntrySchema = v.object({
  key: v.nullish(v.string()),
});
```

##### Unwrap nullish schema

Use `unwrap` to undo the effect of `nullish`.

```ts
const NullishNumberSchema = v.nullish(v.number());
const NumberSchema = v.unwrap(NullishNumberSchema);
```

#### Related

The following APIs can be combined with `nullish`.

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

### number

Creates a number schema.

```ts
const Schema = v.number<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `number` you can validate the data type of the input. If the input is not a number, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `number` can be used.

##### Integer schema

Schema to validate an integer.

```ts
const IntegerSchema = v.pipe(v.number(), v.integer());
```

##### Force minimum

Schema that forces a minimum number of 10.

```ts
const MinNumberSchema = v.pipe(v.number(), v.toMinValue(10));
```

##### Validate range

Schema that validates a number in a range.

```ts
const NumberRangeSchema = v.pipe(v.number(), v.minValue(10), v.maxValue(20));
```

#### Related

The following APIs can be combined with `number`.

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
'finite',
'flavor',
'gtValue',
'guard',
'integer',
'ltValue',
'maxValue',
'metadata',
'minValue',
'multipleOf',
'notValue',
'notValues',
'rawCheck',
'rawTransform',
'readonly',
'safeInteger',
'title',
'toBoolean',
'toDate',
'toBigint',
'toMaxValue',
'toMinValue',
'toString',
'transform',
'value',
'values',
]}
/>

##### Utils
