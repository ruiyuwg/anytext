### checkAsync

Creates a check validation action.

```ts
const Action = v.checkAsync<TInput, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `checkAsync` you can freely validate the input and return `true` if it is valid or `false` otherwise. If the input does not match your `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `checkAsync` can be used.

##### Cart item schema

Schema to check a cart item object.

```ts
import { getProductItem } from '~/api';

const CartItemSchema = v.pipeAsync(
  v.object({
    itemId: v.pipe(v.string(), v.regex(/^[a-z0-9]{10}$/i)),
    quantity: v.pipe(v.number(), v.minValue(1)),
  }),
  v.checkAsync(async (input) => {
    const productItem = await getProductItem(input.itemId);
    return productItem?.quantity >= input.quantity;
  }, 'The required quantity is greater than available.')
);
```

#### Related

The following APIs can be combined with `checkAsync`.

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

##### Utils

##### Async

\<ApiList
items={\[
'arrayAsync',
'awaitAsync',
'customAsync',
'exactOptionalAsync',
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
'pipeAsync',
'recordAsync',
'setAsync',
'strictObjectAsync',
'strictTupleAsync',
'tupleAsync',
'tupleWithRestAsync',
'unionAsync',
'variantAsync',
]}
/>

### checkItemsAsync

Creates a check items validation action.

```ts
const Action = v.checkItemsAsync<TInput, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `checkItemsAsync` you can freely validate the items of an array and return `true` if they are valid or `false` otherwise. If an item does not match your `requirement`, you can use `message` to customize the error message.

> The special thing about `checkItemsAsync` is that it automatically forwards each issue to the appropriate item.

#### Returns

- `Action`

#### Examples

The following examples show how `checkItemsAsync` can be used.

##### Cart items schema

Schema to check an array of cart item objects.

```ts
import { getProductItem } from '~/api';

const CartItemsSchema = v.pipeAsync(
  v.array(
    v.object({
      itemId: v.pipe(v.string(), v.uuid()),
      quantity: v.pipe(v.number(), v.minValue(1)),
    })
  ),
  v.checkItemsAsync(async (input) => {
    const productItem = await getProductItem(input.itemId);
    return (productItem?.quantity ?? 0) >= input.quantity;
  }, 'The required quantity is greater than available.')
);
```

#### Related

The following APIs can be combined with `checkItemsAsync`.

##### Schemas

##### Utils

##### Async
