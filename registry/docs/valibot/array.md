### array

Creates an array schema.

```ts
const Schema = v.array<TItem, TMessage>(item, message);
```

#### Generics

- `TItem`
- `TMessage`

#### Parameters

- `item`
- `message`

##### Explanation

With `array` you can validate the data type of the input. If the input is not an array, you can use `message` to customize the error message.

> If your array has a fixed length, consider using `tuple` for a more precise typing.

#### Returns

- `Schema`

#### Examples

The following examples show how `array` can be used.

##### String array schema

Schema to validate an array of strings.

```ts
const StringArraySchema = v.array(v.string(), 'An array is required.');
```

##### Object array schema

Schema to validate an array of objects.

```ts
const ObjectArraySchema = v.array(v.object({ key: v.string() }));
```

##### Validate length

Schema that validates the length of an array.

```ts
const ArrayLengthSchema = v.pipe(
  v.array(v.number()),
  v.minLength(1),
  v.maxLength(3)
);
```

##### Validate content

Schema that validates the content of an array.

```ts
const ArrayContentSchema = v.pipe(
  v.array(v.string()),
  v.includes('foo'),
  v.excludes('bar')
);
```

#### Related

The following APIs can be combined with `array`.

##### Schemas

\<ApiList
items={\[
'any',
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
'checkItems',
'brand',
'description',
'empty',
'everyItem',
'excludes',
'filterItems',
'findItem',
'flavor',
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
'rawTransform',
'readonly',
'reduceItems',
'someItem',
'sortItems',
'title',
'transform',
]}
/>

##### Utils

### bigint

Creates a bigint schema.

```ts
const Schema = v.bigint<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `bigint` you can validate the data type of the input. If the input is not a bigint, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `bigint` can be used.

##### Force minimum

Schema that forces a minimum bigint value.

```ts
const MinBigintSchema = v.pipe(v.bigint(), v.toMinValue(10n));
```

##### Validate maximum

Schema that validates a maximum bigint value.

```ts
const MaxBigintSchema = v.pipe(v.bigint(), v.maxValue(999n));
```

#### Related

The following APIs can be combined with `bigint`.

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
'gtValue',
'guard',
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
'title',
'toBoolean',
'toDate',
'toMaxValue',
'toMinValue',
'toNumber',
'toString',
'transform',
'value',
'values',
]}
/>

##### Utils

### blob

Creates a blob schema.

> The `Blob` class is not available by default in Node.js v16 and below.

```ts
const Schema = v.blob<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `blob` you can validate the data type of the input. If the input is not a blob, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `blob` can be used.

##### Image schema

Schema to validate an image.

```ts
const ImageSchema = v.pipe(
  v.blob('Please select an image file.'),
  v.mimeType(['image/jpeg', 'image/png'], 'Please select a JPEG or PNG file.'),
  v.maxSize(1024 * 1024 * 10, 'Please select a file smaller than 10 MB.')
);
```

#### Related

The following APIs can be combined with `blob`.

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
'maxSize',
'metadata',
'mimeType',
'minSize',
'notSize',
'rawCheck',
'rawTransform',
'readonly',
'size',
'title',
'transform',
]}
/>

##### Utils

### boolean

Creates a boolean schema.

```ts
const Schema = v.boolean<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `boolean` you can validate the data type of the input. If the input is not a boolean, you can use `message` to customize the error message.

> Instead of using a `pipe` to force `true` or `false` as a value, in most cases it makes more sense to use `literal` for better typing.

#### Returns

- `Schema`

#### Examples

The following examples show how `boolean` can be used.

##### Custom message

Boolean schema with a custom error message.

```ts
const BooleanSchema = v.boolean('A boolean is required');
```

#### Related

The following APIs can be combined with `boolean`.

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
'gtValue',
'guard',
'ltValue',
'maxValue',
'maxWords',
'metadata',
'minValue',
'notValue',
'notValues',
'rawCheck',
'rawTransform',
'readonly',
'title',
'toMaxValue',
'toMinValue',
'transform',
'value',
'values',
]}
/>

##### Utils
