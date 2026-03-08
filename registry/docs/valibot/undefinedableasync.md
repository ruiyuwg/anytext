### undefinedableAsync

Creates an undefinedable schema.

```ts
const Schema = v.undefinedableAsync<TWrapped, TDefault>(wrapped, default_);
```

#### Generics

- `TWrapped`
- `TDefault`

#### Parameters

- `wrapped`
- `default_` {/\* prettier-ignore \*/}

##### Explanation

With `undefinedableAsync` the validation of your schema will pass `undefined` inputs, and if you specify a `default_` input value, the schema will use it if the input is `undefined`. For this reason, the output type may differ from the input type of the schema.

> `undefinedableAsync` behaves exactly the same as `optionalAsync` at runtime. The only difference is the input and output type when used for object entries. While `optionalAsync` adds a question mark to the key, `undefinedableAsync` does not.

> Note that `undefinedableAsync` does not accept `null` as an input. If you want to accept `null` inputs, use `nullableAsync`, and if you want to accept `null` and `undefined` inputs, use `nullishAsync` instead. Also, if you want to set a default output value for any invalid input, you should use `fallbackAsync` instead.

#### Returns

- `Schema`

#### Examples

The following examples show how `undefinedableAsync` can be used.

##### Undefinedable username schema

Schema that accepts a unique username or `undefined`.

> By using a function as the `default_` parameter, the schema will return a unique username from the function call each time the input is `undefined`.

```ts
import { getUniqueUsername, isUsernameUnique } from '~/api';

const UndefinedableUsernameSchema = v.undefinedableAsync(
  v.pipeAsync(
    v.string(),
    v.nonEmpty(),
    v.checkAsync(isUsernameUnique, 'The username is not unique.')
  ),
  getUniqueUsername
);
```

##### New user schema

Schema to validate new user details.

```ts
import { isEmailUnique, isUsernameUnique } from '~/api';

const NewUserSchema = v.objectAsync({
  email: v.pipeAsync(
    v.string(),
    v.email(),
    v.checkAsync(isEmailUnique, 'The email is not unique.')
  ),
  username: v.undefinedableAsync(
    v.pipeAsync(
      v.string(),
      v.nonEmpty(),
      v.checkAsync(isUsernameUnique, 'The username is not unique.')
    )
  ),
  password: v.pipe(v.string(), v.minLength(8)),
});

/*
  The input and output types of the schema:
    {
      email: string;
      password: string;
      username: string | undefined;
    }
*/
```

##### Unwrap undefinedable schema

Use `unwrap` to undo the effect of `undefinedableAsync`.

```ts
import { isUsernameUnique } from '~/api';

const UsernameSchema = v.unwrap(
  // Assume this schema is from a different file and is reused here
  v.undefinedableAsync(
    v.pipeAsync(
      v.string(),
      v.nonEmpty(),
      v.checkAsync(isUsernameUnique, 'The username is not unique.')
    )
  )
);
```

#### Related

The following APIs can be combined with `undefinedableAsync`.

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
'nonUndefinedable',
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

\<ApiList
items={\[
'brand',
'check',
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

##### Async

\<ApiList
items={\[
'arrayAsync',
'awaitAsync',
'checkAsync',
'customAsync',
'exactOptionalAsync',
'fallbackAsync',
'getDefaultsAsync',
'getFallbacksAsync',
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
'parseAsync',
'parserAsync',
'partialCheckAsync',
'pipeAsync',
'rawCheckAsync',
'rawTransformAsync',
'recordAsync',
'safeParseAsync',
'safeParserAsync',
'setAsync',
'strictObjectAsync',
'strictTupleAsync',
'transformAsync',
'tupleAsync',
'tupleWithRestAsync',
'unionAsync',
'variantAsync',
]}
/>
