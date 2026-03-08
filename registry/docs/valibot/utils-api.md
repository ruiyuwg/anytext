## Utils (API)

### entriesFromList

Creates an object entries definition from a list of keys and a schema.

```ts
const entries = v.entriesFromList<TList, TSchema>(list, schema);
```

#### Generics

- `TList`
- `TSchema`

#### Parameters

- `list`
- `schema`

#### Returns

- `entries`

#### Examples

The following example show how `entriesFromList` can be used.

```ts
const ObjectSchema = v.object(
  v.entriesFromList(['foo', 'bar', 'baz'], v.string())
);
```

#### Related

The following APIs can be combined with `entriesFromList`.

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
'undefinedable',
'union',
'unionWithRest',
'unknown',
'variant',
'void',
]}
/>

### entriesFromObjects

Creates a new object entries definition from existing object schemas.

```ts
const entries = v.entriesFromObjects<TSchemas>(schemas);
```

#### Generics

- `TSchemas`

#### Parameters

- `schemas`

#### Returns

- `entries`

#### Examples

The following example show how `entriesFromObjects` can be used.

> Hint: The third schema of the list overwrites the `foo` and `baz` properties of the previous schemas.

```ts
const ObjectSchema = v.object(
  v.entriesFromObjects([
     v.object({ foo:  v.string(), bar:  v.string() });
     v.object({ baz:  v.number(), qux:  v.number() });
     v.object({ foo:  v.boolean(), baz:  v.boolean() });
  ])
);
```

#### Related

The following APIs can be combined with `entriesFromObjects`.

##### Schemas

### getDotPath

Creates and returns the dot path of an issue if possible.

```ts
const dotPath = v.getDotPath<TSchema>(issue);
```

#### Generics

- `TSchema`

#### Parameters

- `issue`

#### Returns

- `dotPath`

### isOfKind

A generic type guard to check the kind of an object.

```ts
const result = v.isOfKind<TKind, TObject>(kind, object);
```

#### Generics

- `TKind`
- `TObject`

#### Parameters

- `kind`
- `object`

#### Returns

- `result`

### isOfType

A generic type guard to check the type of an object.

```ts
const result = v.isOfType<TType, TObject>(type, object);
```

#### Generics

- `TType`
- `TObject`

#### Parameters

- `type`
- `object`

#### Returns

- `result`

### isValiError

A type guard to check if an error is a ValiError.

```ts
const result = v.isValiError<TSchema>(error);
```

#### Generics

- `TSchema`

#### Parameters

- `error`

#### Returns

- `result`

### ValiError

Creates a Valibot error with useful information.

```ts
const error = new v.ValiError<TSchema>(issues);
```

#### Generics

- `TSchema`

#### Parameters

- `issues`

#### Returns

- `error`

## Async (API)

### argsAsync

Creates a function arguments transformation action.

```ts
const Action = v.argsAsync<TInput, TSchema>(schema);
```

#### Generics

- `TInput`
- `TSchema`

#### Parameters

- `schema`

##### Explanation

With `argsAsync` you can force the arguments of a function to match the given `schema`.

#### Returns

- `Action`

#### Examples

The following examples show how `argsAsync` can be used.

##### Product function schema

Schema of a function that returns a product by its ID.

```ts
import { isValidProductId } from '~/api';

const ProductFunctionSchema = v.pipeAsync(
  v.function(),
  v.argsAsync(
    v.tupleAsync([v.pipeAsync(v.string(), v.checkAsync(isValidProductId))])
  ),
  v.returnsAsync(
    v.pipeAsync(
      v.promise(),
      v.awaitAsync(),
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
      })
    )
  )
);
```

#### Related

The following APIs can be combined with `argsAsync`.

##### Schemas

\<ApiList
items={\[
'any',
'custom',
'looseTuple',
'function',
'strictTuple',
'tuple',
'tupleWithRest',
]}
/>

##### Methods

##### Utils

##### Async

\<ApiList
items={\[
'customAsync',
'looseTupleAsync',
'pipeAsync',
'returnsAsync',
'strictTupleAsync',
'tupleAsync',
'tupleWithRestAsync',
]}
/>
