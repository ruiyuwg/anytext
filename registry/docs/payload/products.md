## Products

The `products` option is used to configure the products and variants collections. Defaults to `true` which will create `products` and `variants` collections with default fields. It also takes an object:

| Option                       | Type                 | Description                                                                                                                                                 |
| ---------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `productsCollectionOverride` | `CollectionOverride` | Allows you to override the collection for `products` with a function where you can access the `defaultCollection` as an argument.                           |
| `variants`                   | `boolean` `object`   | Configuration for the variants collection. Defaults to true. [More](#variants)                                                                              |
| `validation`                 | `ProductsValidation` | Customise the validation used for checking products or variants before a transaction is created or a payment can be confirmed. [More](#products-validation) |

You can add your own fields or modify the structure of the existing on in the collections. Example for overriding the default fields:

```ts
products: {
  productsCollectionOverride: ({ defaultCollection }) => ({
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

### Variants

The `variants` option is used to configure the variants collection. It takes an object:

| Option                             | Type                 | Description                                                                                                                             |
| ---------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `variantsCollectionOverride`       | `CollectionOverride` | Allows you to override the collection for `variants` with a function where you can access the `defaultCollection` as an argument.       |
| `variantTypesCollectionOverride`   | `CollectionOverride` | Allows you to override the collection for `variantTypes` with a function where you can access the `defaultCollection` as an argument.   |
| `variantOptionsCollectionOverride` | `CollectionOverride` | Allows you to override the collection for `variantOptions` with a function where you can access the `defaultCollection` as an argument. |

You can add your own fields or modify the structure of the existing on in the collection. Example for overriding the default fields:

```ts
variants: {
  variantsCollectionOverride: ({ defaultCollection }) => ({
    ...defaultCollection,
    fields: [
      ...defaultCollection.fields,
      {
        name: 'customField',
        label: 'Custom Field',
        type: 'text',
      },
    ],
  })
}
```

The key differences between these collections:

- `variantTypes` are the types of variants that a product can have, e.g. Size, Color.
- `variantOptions` are the options for each variant type, e.g. Small, Medium, Large for Size.
- `variants` are the actual variants of a product, e.g. a T-Shirt in Size Small and Color Red.

### Products validation

We use an addition validation step when creating transactions or confirming payments to ensure that the products and variants being purchased are valid. This is to prevent issues such as purchasing a product that is out of stock or has been deleted.

You can customise this validation by providing your own validation function via the `validation` option which receives the following arguments:

| Option             | Type               | Description                                                                                              |
| ------------------ | ------------------ | -------------------------------------------------------------------------------------------------------- |
| `currenciesConfig` | `CurrenciesConfig` | The full currencies configuration provided in the plugin options.                                        |
| `product`          | `TypedCollection`  | The product being purchased.                                                                             |
| `variant`          | `TypedCollection`  | The variant being purchased, if a variant was selected for the product otherwise it will be `undefined`. |
| `quantity`         | `number`           | The quantity being purchased.                                                                            |
| `currency`         | `string`           | The currency code being used for the purchase.                                                           |

The function should throw an error if the product or variant is not valid. If the function does not throw an error, the product or variant is considered valid.

The default validation function checks for the following:

- A currency is provided.
- The product or variant has a price in the selected currency.
- The product or variant has enough inventory for the requested quantity.

```ts
export const defaultProductsValidation: ProductsValidation = ({
  currenciesConfig,
  currency,
  product,
  quantity = 1,
  variant,
}) => {
  if (!currency) {
    throw new Error('Currency must be provided for product validation.')
  }

  const priceField = `priceIn${currency.toUpperCase()}`

  if (variant) {
    if (!variant[priceField]) {
      throw new Error(
        `Variant with ID ${variant.id} does not have a price in ${currency}.`,
      )
    }

    if (
      variant.inventory === 0 ||
      (variant.inventory && variant.inventory < quantity)
    ) {
      throw new Error(
        `Variant with ID ${variant.id} is out of stock or does not have enough inventory.`,
      )
    }
  } else if (product) {
    // Validate the product's details only if the variant is not provided as it can have its own inventory and price
    if (!product[priceField]) {
      throw new Error(`Product does not have a price in.`, {
        cause: { code: MissingPrice, codes: [product.id, currency] },
      })
    }

    if (
      product.inventory === 0 ||
      (product.inventory && product.inventory < quantity)
    ) {
      throw new Error(
        `Product is out of stock or does not have enough inventory.`,
        {
          cause: { code: OutOfStock, codes: [product.id] },
        },
      )
    }
  }
}
```

## Orders

The `orders` option is used to configure the orders collection. Defaults to `true` which will create an `orders` collection with default fields. It also takes an object:

| Option                     | Type                 | Description                                                                                                                     |
| -------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `ordersCollectionOverride` | `CollectionOverride` | Allows you to override the collection for `orders` with a function where you can access the `defaultCollection` as an argument. |

You can add your own fields or modify the structure of the existing on in the collection. Example for overriding the default fields:

```ts
orders: {
  ordersCollectionOverride: ({ defaultCollection }) => ({
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

## Transactions

The `transactions` option is used to configure the transactions collection. Defaults to `true` which will create a `transactions` collection with default fields. It also takes an object:

| Option                           | Type                 | Description                                                                                                                           |
| -------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `transactionsCollectionOverride` | `CollectionOverride` | Allows you to override the collection for `transactions` with a function where you can access the `defaultCollection` as an argument. |

You can add your own fields or modify the structure of the existing on in the collection. Example for overriding the default fields:

```ts
transactions: {
  transactionsCollectionOverride: ({ defaultCollection }) => ({
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

## Translations

The plugin includes translations for admin UI labels and messages under the `plugin-ecommerce` namespace. To add the plugin's translations to your Payload config, use the `i18n.translations` key.

### Adding translations

Import the plugin translations and add them to your Payload config:

```ts
import { buildConfig } from 'payload'
import { ecommercePlugin } from '@payloadcms/plugin-ecommerce'
import { en } from '@payloadcms/translations/languages/en'
import { enTranslations as ecommerceEn } from '@payloadcms/plugin-ecommerce/translations/languages/en'

export default buildConfig({
  // ...
  i18n: {
    supportedLanguages: { en },
    translations: {
      en: ecommerceEn,
    },
  },
  plugins: [
    ecommercePlugin({
      /* ... */
    }),
  ],
})
```

### Overriding translations

You can override specific translation strings by providing your own values under the `plugin-ecommerce` namespace:

```ts
import { buildConfig } from 'payload'
import { ecommercePlugin } from '@payloadcms/plugin-ecommerce'
import { en } from '@payloadcms/translations/languages/en'
import { enTranslations as ecommerceEn } from '@payloadcms/plugin-ecommerce/translations/languages/en'

export default buildConfig({
  // ...
  i18n: {
    supportedLanguages: { en },
    translations: {
      en: {
        ...ecommerceEn,
        'plugin-ecommerce': {
          ...ecommerceEn['plugin-ecommerce'],
          cart: 'Shopping Cart',
          orders: 'My Orders',
        },
      },
    },
  },
  plugins: [
    ecommercePlugin({
      /* ... */
    }),
  ],
})
```
