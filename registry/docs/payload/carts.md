## Carts

The `carts` option is used to configure the carts collection. Defaults to `true` which will create a `carts` collection with default fields and enable guest carts. It also takes an object:

| Option                    | Type                 | Description                                                                                                                    |
| ------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `allowGuestCarts`         | `boolean`            | Allow unauthenticated users to create carts. Defaults to `true`.                                                               |
| `cartsCollectionOverride` | `CollectionOverride` | Allows you to override the collection for `carts` with a function where you can access the `defaultCollection` as an argument. |
| `cartItemMatcher`         | `CartItemMatcher`    | Custom function to determine item uniqueness when adding to cart. [More](#cart-item-matcher)                                   |

You can add your own fields or modify the structure of the existing on in the collection. Example for overriding the default fields:

```ts
carts: {
  cartsCollectionOverride: ({ defaultCollection }) => ({
    ...defaultCollection,
    fields: [
      ...defaultCollection.fields,
      {
        name: 'notes',
        label: 'Notes',
        type: 'textarea',
      },
    ],
  })
}
```

### Guest Carts

By default, guest carts are enabled (`allowGuestCarts: true`), allowing unauthenticated users to create and manage carts. This is useful for anonymous checkout flows where users can shop without logging in.

To disable guest carts and require authentication:

```ts
carts: {
  allowGuestCarts: false,
}
```

Carts are created when a customer adds their first item to the cart. The cart is then updated as they add or remove items. The cart is linked to a *Customer* via the `customer` field. If the user is authenticated, this will be set to their user ID. If the user is not authenticated, this will be `null`.

When guest carts are enabled and the user is not authenticated, the cart ID is stored in local storage and used to fetch the cart on subsequent requests. Access control by default works so that if the user is not authenticated then they can only access carts that have no customer linked to them.

### Cart API Endpoints

The plugin automatically adds custom endpoints to the carts collection for managing cart items. These endpoints use a reducer-like pattern with MongoDB-style operators for flexible updates.

#### Add Item

Adds an item to the cart. If an item matching the same criteria already exists (determined by the `cartItemMatcher`), its quantity is incremented instead of creating a duplicate entry.

```
POST /api/carts/:cartID/add-item
```

| Body Parameter | Type                                    | Description                                          |
| -------------- | --------------------------------------- | ---------------------------------------------------- |
| `item`         | `{ product: string, variant?: string }` | The item to add (product ID and optional variant ID) |
| `quantity`     | `number`                                | Quantity to add. Defaults to `1`.                    |
| `secret`       | `string`                                | Secret for guest cart access (if applicable).        |

#### Update Item

Updates an item in the cart. Supports both setting a specific quantity and incrementing/decrementing using MongoDB-style operators.

```
POST /api/carts/:cartID/update-item
```

| Body Parameter | Type                         | Description                                                                           |
| -------------- | ---------------------------- | ------------------------------------------------------------------------------------- |
| `itemID`       | `string`                     | The cart item row ID to update.                                                       |
| `quantity`     | `number \| { $inc: number }` | Set to a number or use `{ $inc: n }` to increment (positive) or decrement (negative). |
| `removeOnZero` | `boolean`                    | Remove item if quantity reaches 0. Defaults to `true`.                                |
| `secret`       | `string`                     | Secret for guest cart access (if applicable).                                         |

Examples:

```ts
// Set quantity to 5
fetch('/api/carts/123/update-item', {
  method: 'POST',
  body: JSON.stringify({ itemID: 'item-456', quantity: 5 }),
})

// Increment by 1
fetch('/api/carts/123/update-item', {
  method: 'POST',
  body: JSON.stringify({ itemID: 'item-456', quantity: { $inc: 1 } }),
})

// Decrement by 1
fetch('/api/carts/123/update-item', {
  method: 'POST',
  body: JSON.stringify({ itemID: 'item-456', quantity: { $inc: -1 } }),
})
```

#### Remove Item

Removes an item from the cart by its row ID.

```
POST /api/carts/:cartID/remove-item
```

| Body Parameter | Type     | Description                                   |
| -------------- | -------- | --------------------------------------------- |
| `itemID`       | `string` | The cart item row ID to remove.               |
| `secret`       | `string` | Secret for guest cart access (if applicable). |

#### Clear Cart

Removes all items from the cart.

```
POST /api/carts/:cartID/clear
```

| Body Parameter | Type     | Description                                   |
| -------------- | -------- | --------------------------------------------- |
| `secret`       | `string` | Secret for guest cart access (if applicable). |

### Cart Item Matcher

The `cartItemMatcher` option allows you to customize how the plugin determines if two cart items should be considered the same. When items match, their quantities are combined instead of creating separate entries. When items don't match, they appear as separate line items in the cart.

By default, items are matched by `product` and `variant` IDs only. This means if a customer adds the same product twice, the quantity is incremented rather than creating a duplicate entry.

However, many ecommerce scenarios require distinguishing the same product based on additional criteria:

- **Fulfillment options**: Same product for shipping vs. in-store pickup
- **Gift wrapping**: Same item with or without gift wrapping
- **Personalization**: Same product with different engraving text
- **Subscription intervals**: Same product with weekly vs. monthly delivery

The `cartItemMatcher` function receives both the existing cart item and the new item being added, and returns `true` if they should be combined or `false` if they should remain separate.

#### Example: Fulfillment Options

This example shows how to allow the same product to appear as separate cart items when different fulfillment options (shipping vs. pickup) are selected.

First, add a `fulfillment` field to cart items using `cartsCollectionOverride`:

```ts
import type { CollectionConfig } from 'payload'
import type { CartItemMatcher } from '@payloadcms/plugin-ecommerce'
import { ecommercePlugin } from '@payloadcms/plugin-ecommerce'

/**
 * Custom cart item matcher that includes fulfillment option.
 * This ensures the same product with different fulfillment options
 * are listed as separate items in the cart.
 */
const fulfillmentCartItemMatcher: CartItemMatcher = ({
  existingItem,
  newItem,
}) => {
  const existingProductID =
    typeof existingItem.product === 'object'
      ? existingItem.product.id
      : existingItem.product

  const existingVariantID =
    existingItem.variant && typeof existingItem.variant === 'object'
      ? existingItem.variant.id
      : existingItem.variant

  const productMatches = existingProductID === newItem.product

  // Variant matching: both must have same variant or both must have no variant
  const variantMatches = newItem.variant
    ? existingVariantID === newItem.variant
    : !existingVariantID

  // Fulfillment matching: items with different fulfillment options are separate
  const existingFulfillment = existingItem.fulfillment as string | undefined
  const newFulfillment = newItem.fulfillment as string | undefined
  const fulfillmentMatches = existingFulfillment === newFulfillment

  return productMatches && variantMatches && fulfillmentMatches
}

export default buildConfig({
  // ... other config
  plugins: [
    ecommercePlugin({
      carts: {
        cartItemMatcher: fulfillmentCartItemMatcher,
        cartsCollectionOverride: ({ defaultCollection }): CollectionConfig => ({
          ...defaultCollection,
          fields: defaultCollection.fields.map((f) => {
            if ('name' in f && f.name === 'items' && f.type === 'array') {
              return {
                ...f,
                fields: [
                  ...f.fields,
                  {
                    name: 'fulfillment',
                    type: 'select',
                    defaultValue: 'shipping',
                    options: [
                      { label: 'Shipping', value: 'shipping' },
                      { label: 'Pickup', value: 'pickup' },
                    ],
                  },
                ],
              }
            }
            return f
          }),
        }),
      },
      // ... other options
    }),
  ],
})
```

Then, when adding items to the cart from the frontend, include the `fulfillment` field:

```ts
const { addItem } = useCart()

// These will be separate line items in the cart
await addItem({ product: 'product-123', fulfillment: 'shipping' })
await addItem({ product: 'product-123', fulfillment: 'pickup' })
```

#### Default Matcher

You can import and extend the default matcher for simpler customizations:

```ts
import {
  defaultCartItemMatcher,
  type CartItemMatcher,
  type CartItemMatcherArgs,
} from '@payloadcms/plugin-ecommerce'

const customMatcher: CartItemMatcher = (args) => {
  // First check the default criteria (product + variant)
  const defaultMatch = defaultCartItemMatcher(args)

  // Then add your custom criteria
  return defaultMatch && args.existingItem.giftWrap === args.newItem.giftWrap
}
```

### Cart Operations (Server-side)

The plugin exports isolated cart operation functions that can be used directly in your own endpoints, hooks, or local API operations:

```ts
import {
  addItem,
  removeItem,
  updateItem,
  clearCart,
} from '@payloadcms/plugin-ecommerce'

// Add item to cart
const result = await addItem({
  payload,
  cartsSlug: 'carts',
  cartID: '123',
  item: { product: 'prod-1', variant: 'var-1' },
  quantity: 2,
})

// Update item quantity with $inc operator
const result = await updateItem({
  payload,
  cartsSlug: 'carts',
  cartID: '123',
  itemID: 'item-row-id',
  quantity: { $inc: 1 }, // or just a number to set directly
})

// Remove item
const result = await removeItem({
  payload,
  cartsSlug: 'carts',
  cartID: '123',
  itemID: 'item-row-id',
})

// Clear cart
const result = await clearCart({
  payload,
  cartsSlug: 'carts',
  cartID: '123',
})
```

## Customers

The `customers` option is required and is used to provide the customers collection slug. This collection is used to link orders, carts, and addresses to a customer.

| Option | Type     | Description                           |
| ------ | -------- | ------------------------------------- |
| `slug` | `string` | The slug of the customers collection. |

While it's recommended to use just one collection for customers and your editors, you can use any collection you want for your customers. Just make sure that your access control is checking for the correct collections as well.
