## Options

| Option         | Type               | Description                                                                                                              |
| -------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `access`       | `object`           | Configuration to override the default access control, use this when checking for roles or multi tenancy. [More](#access) |
| `addresses`    | `object`           | Configuration for addresses collection and supported fields. [More](#addresses)                                          |
| `carts`        | `object`           | Configuration for carts collection. [More](#carts)                                                                       |
| `currencies`   | `object`           | Supported currencies by the store. [More](#currencies)                                                                   |
| `customers`    | `object`           | Used to provide the customers slug. [More](#customers)                                                                   |
| `inventory`    | `boolean` `object` | Enable inventory tracking within Payload. Defaults to `true`. [More](#inventory)                                         |
| `payments`     | `object`           | Configuring payments and supported payment methods. [More](#payments)                                                    |
| `products`     | `object`           | Configuration for products, variants collections and more. [More](#products)                                             |
| `orders`       | `object`           | Configuration for orders collection. [More](#orders)                                                                     |
| `transactions` | `boolean` `object` | Configuration for transactions collection. [More](#transactions)                                                         |

Note that the fields in overrides take a function that receives the default fields and returns an array of fields. This allows you to add fields to the collection.

```ts
ecommercePlugin({
  access: {
    adminOnlyFieldAccess,
    adminOrPublishedStatus,
    isAdmin,
    isAuthenticated,
    isCustomer,
    isDocumentOwner,
  },
  customers: {
    slug: 'users',
  },
  payments: {
    paymentMethods: [
      stripeAdapter({
        secretKey: process.env.STRIPE_SECRET_KEY!,
        publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
        webhookSecret: process.env.STRIPE_WEBHOOKS_SIGNING_SECRET!,
      }),
    ],
  },
  products: {
    variants: {
      variantsCollection: VariantsCollection,
    },
    productsCollection: ProductsCollection,
  },
})
```
