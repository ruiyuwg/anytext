# Advanced uses and examples

Source: https://payloadcms.com/docs/ecommerce/advanced

The plugin also exposes its internal utilities so that you can use only the parts that you need without using the entire plugin. This is useful if you want to build your own ecommerce solution on top of Payload.

## Using only the collections

You can import the collections directly from the plugin and add them to your Payload configuration. This way, you can use the collections without using the entire plugin:

| Name                             | Collection       | Description                                                                                                                                     |
| -------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `createAddressesCollection`      | `addresses`      | Used for customer addresses (like shipping and billing). [More](#createAddressesCollection)                                                     |
| `createCartsCollection`          | `carts`          | Carts can be used by customers, guests and once purchased are kept for records and analytics. [More](#createCartsCollection)                    |
| `createOrdersCollection`         | `orders`         | Orders are used to store customer-side information and are related to at least one transaction. [More](#createOrdersCollection)                 |
| `createTransactionsCollection`   | `transactions`   | Handles payment information accessible by admins only, related to Orders. [More](#createTransactionsCollection)                                 |
| `createProductsCollection`       | `products`       | All the product information lives here, contains prices, relations to Variant Types and joins to Variants. [More](#createProductsCollection)    |
| `createVariantsCollection`       | `variants`       | Product variants, unique purchasable items that are linked to a product and Variant Options. [More](#createVariantsCollection)                  |
| `createVariantTypesCollection`   | `variantTypes`   | A taxonomy used by Products to relate Variant Options together. An example of a Variant Type is "size". [More](#createVariantTypesCollection)   |
| `createVariantOptionsCollection` | `variantOptions` | Related to a Variant Type to handle a unique property of it. An example of a Variant Option is "small". [More](#createVariantOptionsCollection) |

### createAddressesCollection

Use this to create the `addresses` collection. This collection is used to store customer addresses. It takes the following properties:

| Property             | Type            | Description                                                           |
| -------------------- | --------------- | --------------------------------------------------------------------- |
| `access`             | `object`        | Access control for the collection.                                    |
| `addressFields`      | `Field[]`       | Custom fields to add to the address.                                  |
| `customersSlug`      | `string`        | (Optional) Slug of the customers collection. Defaults to `customers`. |
| `supportedCountries` | `CountryType[]` | (Optional) List of supported countries. Defaults to all countries.    |

The access object can contain the following properties:

| Property          | Type          | Description                                                                                                                                                       |
| ----------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isAdmin`         | `Access`      | Access control to check if the user has `admin` permissions.                                                                                                      |
| `isAuthenticated` | `Access`      | Access control to check if the user is authenticated. Use on the `create` access to allow any customer to create a new address.                                   |
| `isCustomer`      | `FieldAccess` | Checks if the user is a customer (authenticated but not admin). Used to auto-assign customer ID when creating addresses.                                          |
| `isDocumentOwner` | `Access`      | Access control to check if the user owns the document via the `customer` field. Used to limit read, update or delete to only the customers that own this address. |

See the [access control section](./plugin#access) for more details on each of these functions.

Example usage:

```ts
import { createAddressesCollection } from 'payload-plugin-ecommerce'

const Addresses = createAddressesCollection({
  access: {
    isAdmin,
    isAuthenticated,
    isCustomer,
    isDocumentOwner,
  },
  addressFields: [
    {
      name: 'company',
      type: 'text',
      label: 'Company',
    },
  ],
})
```

### createCartsCollection

Use this to create the `carts` collection to store customer carts. It takes the following properties:

| Property           | Type               | Description                                                             |
| ------------------ | ------------------ | ----------------------------------------------------------------------- |
| `access`           | `object`           | Access control for the collection.                                      |
| `customersSlug`    | `string`           | (Optional) Slug of the customers collection. Defaults to `customers`.   |
| `productsSlug`     | `string`           | (Optional) Slug of the products collection. Defaults to `products`.     |
| `variantsSlug`     | `string`           | (Optional) Slug of the variants collection. Defaults to `variants`.     |
| `enableVariants`   | `boolean`          | (Optional) Whether to enable variants in the cart. Defaults to `true`.  |
| `currenciesConfig` | `CurrenciesConfig` | (Optional) Currencies configuration to enable a subtotal to be tracked. |

The access object can contain the following properties:

| Property          | Type     | Description                                                                                                                                                    |
| ----------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isAdmin`         | `Access` | Access control to check if the user has `admin` permissions.                                                                                                   |
| `isAuthenticated` | `Access` | Access control to check if the user is authenticated.                                                                                                          |
| `isDocumentOwner` | `Access` | Access control to check if the user owns the document via the `customer` field. Used to limit read, update or delete to only the customers that own this cart. |
| `publicAccess`    | `Access` | (Optional) Allow anyone to create a new cart, useful for guests.                                                                                               |

See the [access control section](./plugin#access) for more details on each of these functions.

Example usage:

```ts
import { createCartsCollection } from 'payload-plugin-ecommerce'

const Carts = createCartsCollection({
  access: {
    isAdmin,
    isAuthenticated,
    isDocumentOwner,
  },
  enableVariants: true,
  currenciesConfig: {
    defaultCurrency: 'usd',
    currencies: [
      {
        code: 'usd',
        symbol: '$',
      },
      {
        code: 'eur',
        symbol: '€',
      },
    ],
  },
})
```

### createOrdersCollection

Use this to create the `orders` collection to store customer orders. It takes the following properties:

| Property           | Type               | Description                                                                 |
| ------------------ | ------------------ | --------------------------------------------------------------------------- |
| `access`           | `object`           | Access control for the collection.                                          |
| `customersSlug`    | `string`           | (Optional) Slug of the customers collection. Defaults to `customers`.       |
| `transactionsSlug` | `string`           | (Optional) Slug of the transactions collection. Defaults to `transactions`. |
| `productsSlug`     | `string`           | (Optional) Slug of the products collection. Defaults to `products`.         |
| `variantsSlug`     | `string`           | (Optional) Slug of the variants collection. Defaults to `variants`.         |
| `enableVariants`   | `boolean`          | (Optional) Whether to enable variants in the order. Defaults to `true`.     |
| `currenciesConfig` | `CurrenciesConfig` | (Optional) Currencies configuration to enable the amount to be tracked.     |
| `addressFields`    | `Field[]`          | (Optional) The fields to be used for the shipping address.                  |

The access object can contain the following properties:

| Property               | Type          | Description                                                                                                                                   |
| ---------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `isAdmin`              | `Access`      | Access control to check if the user has `admin` permissions. Used to limit create, update and delete access to only admins.                   |
| `isDocumentOwner`      | `Access`      | Access control to check if the user owns the document via the `customer` field. Used to limit read to only the customers that own this order. |
| `adminOnlyFieldAccess` | `FieldAccess` | Field level access control to check if the user has `admin` permissions. Limits the transaction ID field to admins only.                      |

See the [access control section](./plugin#access) for more details on each of these functions.

Example usage:

```ts
import { createOrdersCollection } from 'payload-plugin-ecommerce'

const Orders = createOrdersCollection({
  access: {
    isAdmin,
    isDocumentOwner,
    adminOnlyFieldAccess,
  },
  enableVariants: true,
  currenciesConfig: {
    defaultCurrency: 'usd',
    currencies: [
      {
        code: 'usd',
        symbol: '$',
      },
      {
        code: 'eur',
        symbol: '€',
      },
    ],
  },
  addressFields: [
    {
      name: 'deliveryInstructions',
      type: 'text',
      label: 'Delivery Instructions',
    },
  ],
})
```

### createTransactionsCollection

Use this to create the `transactions` collection to store payment transactions. It takes the following properties:

| Property           | Type               | Description                                                                   |
| ------------------ | ------------------ | ----------------------------------------------------------------------------- |
| `access`           | `object`           | Access control for the collection.                                            |
| `customersSlug`    | `string`           | (Optional) Slug of the customers collection. Defaults to `customers`.         |
| `cartsSlug`        | `string`           | (Optional) Slug of the carts collection. Defaults to `carts`.                 |
| `ordersSlug`       | `string`           | (Optional) Slug of the orders collection. Defaults to `orders`.               |
| `productsSlug`     | `string`           | (Optional) Slug of the products collection. Defaults to `products`.           |
| `variantsSlug`     | `string`           | (Optional) Slug of the variants collection. Defaults to `variants`.           |
| `enableVariants`   | `boolean`          | (Optional) Whether to enable variants in the transaction. Defaults to `true`. |
| `currenciesConfig` | `CurrenciesConfig` | (Optional) Currencies configuration to enable the amount to be tracked.       |
| `addressFields`    | `Field[]`          | (Optional) The fields to be used for the billing address.                     |
| `paymentMethods`   | `PaymentAdapter[]` | (Optional) The payment methods to be used for the transaction.                |

The access object can contain the following properties:

| Property  | Type     | Description                                                                                           |
| --------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `isAdmin` | `Access` | Access control to check if the user has `admin` permissions. Used to limit all access to only admins. |

See the [access control section](./plugin#access) for more details on each of these functions.

Example usage:

```ts
import { createTransactionsCollection } from 'payload-plugin-ecommerce'

const Transactions = createTransactionsCollection({
  access: {
    isAdmin,
  },
  enableVariants: true,
  currenciesConfig: {
    defaultCurrency: 'usd',
    currencies: [
      {
        code: 'usd',
        symbol: '$',
      },
      {
        code: 'eur',
        symbol: '€',
      },
    ],
  },
  addressFields: [
    {
      name: 'billingInstructions',
      type: 'text',
      label: 'Billing Instructions',
    },
  ],
  paymentMethods: [
    // Add your payment adapters here
  ],
})
```

### createProductsCollection

Use this to create the `products` collection to store products. It takes the following properties:

| Property           | Type                        | Description                                                                      |
| ------------------ | --------------------------- | -------------------------------------------------------------------------------- |
| `access`           | `object`                    | Access control for the collection.                                               |
| `variantsSlug`     | `string`                    | (Optional) Slug of the variants collection. Defaults to `variants`.              |
| `variantTypesSlug` | `string`                    | (Optional) Slug of the variant types collection. Defaults to `variantTypes`.     |
| `enableVariants`   | `boolean`                   | (Optional) Whether to enable variants on products. Defaults to `true`.           |
| `currenciesConfig` | `CurrenciesConfig`          | (Optional) Currencies configuration to enable price fields.                      |
| `inventory`        | `boolean` `InventoryConfig` | (Optional) Inventory configuration to enable stock tracking. Defaults to `true`. |

The access object can contain the following properties:

| Property                 | Type     | Description                                                                                                                                                             |
| ------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isAdmin`                | `Access` | Access control to check if the user has `admin` permissions. Used to limit create, update or delete to only admins.                                                     |
| `adminOrPublishedStatus` | `Access` | Access control to check if the user has `admin` permissions or if the product has a `published` status. Used to limit read access to published products for non-admins. |

See the [access control section](./plugin#access) for more details on each of these functions.

Example usage:

```ts
import { createProductsCollection } from 'payload-plugin-ecommerce'

const Products = createProductsCollection({
  access: {
    isAdmin,
    adminOrPublishedStatus,
  },
  enableVariants: true,
  currenciesConfig: {
    defaultCurrency: 'usd',
    currencies: [
      {
        code: 'usd',
        symbol: '$',
      },
      {
        code: 'eur',
        symbol: '€',
      },
    ],
  },
  inventory: {
    enabled: true,
    trackByVariant: true,
    lowStockThreshold: 5,
  },
})
```

### createVariantsCollection

Use this to create the `variants` collection to store product variants. It takes the following properties:

| Property             | Type                        | Description                                                                      |
| -------------------- | --------------------------- | -------------------------------------------------------------------------------- |
| `access`             | `object`                    | Access control for the collection.                                               |
| `productsSlug`       | `string`                    | (Optional) Slug of the products collection. Defaults to `products`.              |
| `variantOptionsSlug` | `string`                    | (Optional) Slug of the variant options collection. Defaults to `variantOptions`. |
| `currenciesConfig`   | `CurrenciesConfig`          | (Optional) Currencies configuration to enable price fields.                      |
| `inventory`          | `boolean` `InventoryConfig` | (Optional) Inventory configuration to enable stock tracking. Defaults to `true`. |

The access object can contain the following properties:

| Property                 | Type     | Description                                                                                                                                                                                 |
| ------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isAdmin`                | `Access` | Access control to check if the user has `admin` permissions. Used to limit all access to only admins.                                                                                       |
| `adminOrPublishedStatus` | `Access` | Access control to check if the user has `admin` permissions or if the related product has a `published` status. Used to limit read access to variants of published products for non-admins. |

See the [access control section](./plugin#access) for more details on each of these functions.

Example usage:

```ts
import { createVariantsCollection } from 'payload-plugin-ecommerce'

const Variants = createVariantsCollection({
  access: {
    isAdmin,
    adminOrPublishedStatus,
  },
  currenciesConfig: {
    defaultCurrency: 'usd',
    currencies: [
      {
        code: 'usd',
        symbol: '$',
      },
      {
        code: 'eur',
        symbol: '€',
      },
    ],
  },
  inventory: {
    enabled: true,
    lowStockThreshold: 5,
  },
})
```

### createVariantTypesCollection

Use this to create the `variantTypes` collection to store variant types. It takes the following properties:

| Property             | Type     | Description                                                                      |
| -------------------- | -------- | -------------------------------------------------------------------------------- |
| `access`             | `object` | Access control for the collection.                                               |
| `variantOptionsSlug` | `string` | (Optional) Slug of the variant options collection. Defaults to `variantOptions`. |

The access object can contain the following properties:

| Property       | Type     | Description                                                                                           |
| -------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `isAdmin`      | `Access` | Access control to check if the user has `admin` permissions. Used to limit all access to only admins. |
| `publicAccess` | `Access` | (Optional) Allow anyone to read variant types.                                                        |

See the [access control section](./plugin#access) for more details on each of these functions.

Example usage:

```ts
import { createVariantTypesCollection } from 'payload-plugin-ecommerce'

const VariantTypes = createVariantTypesCollection({
  access: {
    isAdmin,
    publicAccess,
  },
})
```

### createVariantOptionsCollection

Use this to create the `variantOptions` collection to store variant options. It takes the following properties:

| Property           | Type     | Description                                                                  |
| ------------------ | -------- | ---------------------------------------------------------------------------- |
| `access`           | `object` | Access control for the collection.                                           |
| `variantTypesSlug` | `string` | (Optional) Slug of the variant types collection. Defaults to `variantTypes`. |

The access object can contain the following properties:

| Property       | Type     | Description                                                                                           |
| -------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `isAdmin`      | `Access` | Access control to check if the user has `admin` permissions. Used to limit all access to only admins. |
| `publicAccess` | `Access` | (Optional) Allow anyone to read variant options.                                                      |

See the [access control section](./plugin#access) for more details on each of these functions.

Example usage:

```ts
import { createVariantOptionsCollection } from 'payload-plugin-ecommerce'

const VariantOptions = createVariantOptionsCollection({
  access: {
    isAdmin,
    publicAccess,
  },
})
```

## Typescript

There are several common types that you'll come across when working with this package. These are export from the package as well and are used across individual utilities as well.

### CurrenciesConfig

Defines the supported currencies in Payload and the frontend. It has the following properties:

| Property          | Type             | Description                                                                       |
| ----------------- | ---------------- | --------------------------------------------------------------------------------- |
| `defaultCurrency` | `string`         | The default currency code. Must match one of the codes in the `currencies` array. |
| `currencies`      | `CurrencyType[]` | An array of supported currencies. Each currency must have a unique code.          |

### Currency

Defines a currency to be used in the application. It has the following properties:

| Property   | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| `code`     | `string` | The ISO 4217 currency code. Example `'usd'`.     |
| `symbol`   | `string` | The symbol of the currency. Example `'$'`        |
| `label`    | `string` | The name of the currency. Example `'USD'`        |
| `decimals` | `number` | The number of decimal places to use. Example `2` |

The decimals is very important to provide as we store all prices as integers to avoid floating point issues. For example, if you're using USD, you would store a price of $10.00 as `1000` (10 \* 10^2), so when formatting the price for display we need to know how many decimal places the currency supports.

### CountryType

Used to define a country in address fields and supported countries lists. It has the following properties:

| Property | Type     | Description                  |
| -------- | -------- | ---------------------------- |
| `value`  | `string` | The ISO 3166-1 alpha-2 code. |
| `label`  | `string` | The name of the country.     |

### InventoryConfig

It's used to customise the inventory tracking settings on products and variants. It has the following properties:

| Property    | Type     | Description                                                                          |
| ----------- | -------- | ------------------------------------------------------------------------------------ |
| `fieldName` | `string` | (Optional) The name of the field to use for tracking stock. Defaults to `inventory`. |

# Examples

Source: https://payloadcms.com/docs/examples/overview

Payload provides a vast array of examples to help you get started with your project no matter what you are working on. These examples are designed to be easy to get up and running, and to be easy to understand. They showcase nothing more than the specific features being demonstrated so you can easily decipher precisely what is going on.

- [Auth](https://github.com/payloadcms/payload/tree/main/examples/auth)
- [Custom Components](https://github.com/payloadcms/payload/tree/main/examples/custom-components)
- [Draft Preview](https://github.com/payloadcms/payload/tree/main/examples/draft-preview)
- [Email](https://github.com/payloadcms/payload/tree/main/examples/email)
- [Form Builder](https://github.com/payloadcms/payload/tree/main/examples/form-builder)
- [Live Preview](https://github.com/payloadcms/payload/tree/main/examples/live-preview)
- [Multi-tenant](https://github.com/payloadcms/payload/tree/main/examples/multi-tenant)
- [Tailwind / Shadcn-ui](https://github.com/payloadcms/payload/tree/main/examples/tailwind-shadcn-ui)
- [White-label Admin UI](https://github.com/payloadcms/payload/tree/main/examples/whitelabel)

If you'd like to run the examples, you can use `create-payload-app` to create a project from one:

```sh
npx create-payload-app --example example_name
```

We are adding new examples every day, so if your particular use case is not demonstrated in any existing example, please feel free to start a new [Discussion](https://github.com/payloadcms/payload/discussions) or open a new [PR](https://github.com/payloadcms/payload/pulls) to add it yourself.
