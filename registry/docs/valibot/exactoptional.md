### exactOptional

Creates an exact optional schema.

```ts
const Schema = v.exactOptional<TWrapped, TDefault>(wrapped, default_);
```

#### Generics

- `TWrapped`
- `TDefault`

#### Parameters

- `wrapped`
- `default_` {/\* prettier-ignore \*/}

##### Explanation

With `exactOptional` the validation of your schema will pass missing object entries, and if you specify a `default_` input value, the schema will use it if the object entry is missing. For this reason, the output type may differ from the input type of the schema.

> The difference to `optional` is that this schema function follows the implementation of TypeScript's [`exactOptionalPropertyTypes` configuration](https://www.typescriptlang.org/tsconfig/#exactOptionalPropertyTypes) and only allows missing but not undefined object entries.

#### Returns

- `Schema`

#### Examples

The following examples show how `exactOptional` can be used.

##### Exact optional object entries

Object schema with exact optional entries.

> By using a function as the `default_` parameter, the schema will return a new [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) instance each time the input is `undefined`.

```ts
const OptionalEntrySchema = v.object({
  key1: v.exactOptional(v.string()),
  key2: v.exactOptional(v.string(), "I'm the default!"),
  key3: v.exactOptional(v.date(), () => new Date()),
});
```

##### Unwrap exact optional schema

Use `unwrap` to undo the effect of `exactOptional`.

```ts
const OptionalNumberSchema = v.exactOptional(v.number());
const NumberSchema = v.unwrap(OptionalNumberSchema);
```

#### Related

The following APIs can be combined with `exactOptional`.

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

### file

Creates a file schema.

> The `File` class is not available by default in Node.js v18 and below.

```ts
const Schema = v.file<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `file` you can validate the data type of the input. If the input is not a file, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `file` can be used.

##### Image schema

Schema to validate an image.

```ts
const ImageSchema = v.pipe(
  v.file('Please select an image file.'),
  v.mimeType(['image/jpeg', 'image/png'], 'Please select a JPEG or PNG file.'),
  v.maxSize(1024 * 1024 * 10, 'Please select a file smaller than 10 MB.')
);
```

#### Related

The following APIs can be combined with `file`.

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

### function

Creates a function schema.

```ts
const Schema = v.function<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `function` you can validate the data type of the input. If the input is not a function, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Related

The following APIs can be combined with `function`.

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

### instance

Creates an instance schema.

```ts
const Schema = v.instance<TClass, TMessage>(class_, message);
```

#### Generics

- `TClass`
- `TMessage`

#### Parameters

- `class_` {/\* prettier-ignore \*/}
- `message`

##### Explanation

With `instance` you can validate the data type of the input. If the input is not an instance of the specified `class_`, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `instance` can be used.

##### Error schema

Schema to validate an `Error` instance.

```ts
const ErrorSchema = v.instance(Error, 'Error instance required.');
```

##### File schema

Schema to validate an `File` instance.

```ts
const FileSchema = v.pipe(
  v.instance(File),
  v.mimeType(['image/jpeg', 'image/png']),
  v.maxSize(1024 * 1024 * 10)
);
```

#### Related

The following APIs can be combined with `instance`.

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
'ltValue',
'maxSize',
'maxValue',
'metadata',
'mimeType',
'minSize',
'minValue',
'notSize',
'notValue',
'notValues',
'rawCheck',
'rawTransform',
'readonly',
'size',
'title',
'toMaxValue',
'toMinValue',
'transform',
'value',
'values',
]}
/>

##### Utils
