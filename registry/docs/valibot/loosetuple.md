### looseTuple

Creates a loose tuple schema.

```ts
const Schema = v.looseTuple<TItems, TMessage>(items, message);
```

#### Generics

- `TItems`
- `TMessage`

#### Parameters

- `items`
- `message`

##### Explanation

With `looseTuple` you can validate the data type of the input and whether the content matches `items`. If the input is not an array, you can use `message` to customize the error message.

> The difference to `tuple` is that this schema does include unknown items into the output.

#### Returns

- `Schema`

#### Examples

The following examples show how `looseTuple` can be used. Please see the arrays guide for more examples and explanations.

##### Simple tuple schema

Schema to validate a loose tuple with two specific items.

```ts
const SimpleTupleSchema = v.looseTuple([v.string(), v.number()]);
```

#### Related

The following APIs can be combined with `looseTuple`.

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

### map

Creates a map schema.

```ts
const Schema = v.map<TKey, TValue, TMessage>(key, value, message);
```

#### Generics

- `TKey`
- `TValue`
- `TMessage`

#### Parameters

- `key`
- `value`
- `message`

##### Explanation

With `map` you can validate the data type of the input and whether the entries matches `key` and `value`. If the input is not a map, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `map` can be used.

##### String map schema

Schema to validate a map with string values.

```ts
const StringMapSchema = v.map(v.string(), v.string());
```

##### Object map schema

Schema to validate a map with object values.

```ts
const ObjectMapSchema = v.map(v.string(), v.object({ key: v.string() }));
```

#### Related

The following APIs can be combined with `map`.

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
'brand',
'description',
'flavor',
'guard',
'maxSize',
'metadata',
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

### nan

Creates a NaN schema.

```ts
const Schema = v.nan<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `nan` you can validate the data type of the input and if it is not `NaN`, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Related

The following APIs can be combined with `nan`.

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

### never

Creates a never schema.

```ts
const Schema = v.never<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

When validated, `never` always returns an issue. You can use `message` to customize the error message.

#### Returns

- `Schema`

#### Related

The following APIs can be combined with `never`.

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

##### Utils

### nonNullable

Creates a non nullable schema.

> This schema function can be used to override the behavior of `nullable`.

```ts
const Schema = v.nonNullable<TWrapped, TMessage>(wrapped, message);
```

#### Generics

- `TWrapped`
- `TMessage`

#### Parameters

- `wrapped`
- `message`

##### Explanation

With `nonNullable` the validation of your schema will not pass `null` inputs. If the input is `null`, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `nonNullable` can be used.

##### Non nullable string

Schema that does not accept `null`.

```ts
const NonNullableStringSchema = v.nonNullable(v.nullable(v.string()));
```

##### Unwrap non nullable

Use `unwrap` to undo the effect of `nonNullable`.

```ts
const NonNullableNumberSchema = v.nonNullable(v.nullable(v.number()));
const NullableNumberSchema = v.unwrap(NonNullableNumberSchema);
```

#### Related

The following APIs can be combined with `nonNullable`.

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

### nonNullish

Creates a non nullish schema.

> This schema function can be used to override the behavior of `nullish`.

```ts
const Schema = v.nonNullish<TWrapped, TMessage>(wrapped, message);
```

#### Generics

- `TWrapped`
- `TMessage`

#### Parameters

- `wrapped`
- `message`

##### Explanation

With `nonNullish` the validation of your schema will not pass `null` and `undefined` inputs. If the input is `null` or `undefined`, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `nonNullish` can be used.

##### Non nullish string

Schema that does not accept `null` and `undefined`.

```ts
const NonNullishStringSchema = v.nonNullish(v.nullish(v.string()));
```

##### Unwrap non nullish

Use `unwrap` to undo the effect of `nonNullish`.

```ts
const NonNullishNumberSchema = v.nonNullish(v.nullish(v.number()));
const NullishNumberSchema = v.unwrap(NonNullishNumberSchema);
```

#### Related

The following APIs can be combined with `nonNullish`.

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

### nonOptional

Creates a non optional schema.

> This schema function can be used to override the behavior of `optional`.

```ts
const Schema = v.nonOptional<TWrapped, TMessage>(wrapped, message);
```

#### Generics

- `TWrapped`
- `TMessage`

#### Parameters

- `wrapped`
- `message`

##### Explanation

With `nonOptional` the validation of your schema will not pass `undefined` inputs. If the input is `undefined`, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Examples

The following examples show how `nonOptional` can be used.

##### Non optional string

Schema that does not accept `undefined`.

```ts
const NonOptionalStringSchema = v.nonOptional(v.optional(v.string()));
```

##### Unwrap non optional

Use `unwrap` to undo the effect of `nonOptional`.

```ts
const NonOptionalNumberSchema = v.nonOptional(v.optional(v.number()));
const OptionalNumberSchema = v.unwrap(NonOptionalNumberSchema);
```

#### Related

The following APIs can be combined with `nonOptional`.

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

### null

Creates a null schema.

```ts
const Schema = v.null<TMessage>(message);
```

#### Generics

- `TMessage`

#### Parameters

- `message`

##### Explanation

With `null` you can validate the data type of the input and if it is not `null`, you can use `message` to customize the error message.

#### Returns

- `Schema`

#### Related

The following APIs can be combined with `null`.

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
