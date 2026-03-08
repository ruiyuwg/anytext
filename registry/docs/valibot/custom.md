### custom

Creates a custom schema.

> This schema function allows you to define a schema that matches a value based on a custom function. Use it whenever you need to define a schema that cannot be expressed using any of the other schema functions.

```ts
const Schema = v.custom<TInput, TMessage>(check, message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `check`
- `message`

##### Explanation

With `custom` you can validate the data type of the input. If the input does not match the validation of `check`, you can use `message` to customize the error message.

> Make sure that the validation in `check` matches the data type of `TInput`.

#### Returns

- `Schema`

#### Examples

The following examples show how `custom` can be used.

##### Pixel string schema

Schema to validate a pixel string.

```ts
const PixelStringSchema = v.custom<`${number}px`>((input) =>
  typeof input === 'string' ? /^\d+px$/.test(input) : false
);
```

#### Related

The following APIs can be combined with `custom`.

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
'toBigint',
'toBoolean',
'toDate',
'toLowerCase',
'toMaxValue',
'toMinValue',
'toNumber',
'toString',
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

### date

Creates a date schema.

```ts
const Schema = v.date<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `date` you can validate the data type of the input. If the input is not a date, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `date` can be used.

##### Force minimum

Schema that forces a minimum date of today.

```ts
const MinDateSchema = v.pipe(v.date(), v.toMinValue(new Date()));
```

##### Validate range

Schema that validates a date in a range.

```ts
const DateRangeSchema = v.pipe(
  v.date(),
  v.minValue(new Date(2019, 0, 1)),
  v.maxValue(new Date(2020, 0, 1))
);
```

#### Related

The following APIs can be combined with `date`.

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

### enum

Creates an enum schema.

```ts
const Schema = v.enum<TEnum, TMessage>(enum, message);
```

#### Generics

- `TEnum`
- `TMessage`

#### Parameters

- `enum` {/\* prettier-ignore \*/}
- `message`

##### Explanation

With `enum` you can validate that the input corresponds to an enum option. If the input is invalid, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `enum` can be used.

##### Direction enum

Schema to validate a direction enum option.

```ts
enum Direction {
  Left,
  Right,
}

const DirectionSchema = v.enum(Direction, 'Invalid direction');
```

#### Related

The following APIs can be combined with `enum`.

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
