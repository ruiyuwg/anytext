### lazy

Creates a lazy schema.

```ts
const Schema = v.lazy<TWrapped>(getter);
```

#### Generics

- `TWrapped`

#### Parameters

- `getter`

##### Explanation

The `getter` function is called lazily to retrieve the schema. This is necessary to be able to access the input through the first argument of the `getter` function and to avoid a circular dependency for recursive schemas.

> Due to a TypeScript limitation, the input and output types of recursive schemas cannot be inferred automatically. Therefore, you must explicitly specify these types using `GenericSchema`. Please see the examples below.

#### Returns

- `Schema`

#### Examples

The following examples show how `lazy` can be used.

##### Binary tree schema

Recursive schema to validate a binary tree.

```ts
type BinaryTree = {
  element: string;
  left: BinaryTree | null;
  right: BinaryTree | null;
};

const BinaryTreeSchema: v.GenericSchema<BinaryTree> = v.object({
  element: v.string(),
  left: v.nullable(v.lazy(() => BinaryTreeSchema)),
  right: v.nullable(v.lazy(() => BinaryTreeSchema)),
});
```

##### JSON data schema

Schema to validate all possible `JSON` values.

```ts
import * as v from 'valibot';

type JsonData =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JsonData }
  | JsonData[];

const JsonSchema: v.GenericSchema<JsonData> = v.lazy(() =>
  v.union([
    v.string(),
    v.number(),
    v.boolean(),
    v.null(),
    v.record(v.string(), JsonSchema),
    v.array(JsonSchema),
  ])
);
```

##### Lazy union schema

Schema to validate a discriminated union of objects.

> In most cases, `union` and `variant` are the better choices for creating such a schema. I recommend using `lazy` only in special cases.

```ts
const LazyUnionSchema = v.lazy((input) => {
  if (input && typeof input === 'object' && 'type' in input) {
    switch (input.type) {
      case 'email':
        return v.object({
          type: v.literal('email'),
          email: v.pipe(v.string(), v.email()),
        });
      case 'url':
        return v.object({
          type: v.literal('url'),
          url: v.pipe(v.string(), v.url()),
        });
      case 'date':
        return v.object({
          type: v.literal('date'),
          date: v.pipe(v.string(), v.isoDate()),
        });
    }
  }
  return v.never();
});
```

#### Related

The following APIs can be combined with `lazy`.

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
'undefined',
'union',
'unionWithRest',
'undefinedable',
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

### literal

Creates a literal schema.

```ts
const Schema = v.literal<TLiteral, TMessage>(literal, message);
```

#### Generics

- `TLiteral`
- `TMessage`

#### Parameters

- `literal`
- `message`

##### Explanation

With `literal` you can validate that the input matches a specified value. If the input is invalid, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `literal` can be used.

##### String literal

Schema to validate a string literal.

```ts
const StringLiteralSchema = v.literal('foo');
```

##### Number literal

Schema to validate a number literal.

```ts
const NumberLiteralSchema = v.literal(26);
```

##### Boolean literal

Schema to validate a boolean literal.

```ts
const BooleanLiteralSchema = v.literal(true);
```

#### Related

The following APIs can be combined with `literal`.

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
