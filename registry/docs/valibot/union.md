### union

Creates an union schema.

> I recommend that you read the unions guide before using this schema function.

```ts
const Schema = v.union<TOptions, TMessage>(options, message);
```

#### Generics

- `TOptions`
- `TMessage`

#### Parameters

- `options`
- `message`

##### Explanation

With `union` you can validate if the input matches one of the given `options`. If the input does not match a schema and cannot be clearly assigned to one of the options, you can use `message` to customize the error message.

If a bad input can be uniquely assigned to one of the schemas based on the data type, the result of that schema is returned. Otherwise, a general issue is returned that contains the issues of each schema as subissues. This is a special case within the library, as the issues of `union` can contradict each other.

#### Returns

- `Schema`

#### Examples

The following examples show how `union` can be used.

##### URL schema

Schema to validate an URL or empty string.

```ts
const UrlSchema = v.union([v.pipe(v.string(), v.url()), v.literal('')]);
```

##### Number schema

Schema to validate a number or decimal string.

```ts
const NumberSchema = v.union([v.number(), v.pipe(v.string(), v.decimal())]);
```

##### Date schema

Schema to validate a `Date` or ISO timestamp.

```ts
const DateSchema = v.union([v.date(), v.pipe(v.string(), v.isoTimestamp())]);
```

#### Related

The following APIs can be combined with `union`.

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
