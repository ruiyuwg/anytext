## Currencies

The `currencies` option is used to configure the supported currencies by the store. Defaults to `true` which will support `USD`. It also takes an object:

| Option                | Type         | Description                                                                                                                     |
| --------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `supportedCurrencies` | `Currency[]` | An array of supported currencies by the store. Defaults to `USD`. See [Currencies](#currencies-list) for available currencies.  |
| `defaultCurrency`     | `string`     | The default currency code to use for the store. Defaults to the first currency. Must be one of the `supportedCurrencies` codes. |

The `Currency` type is as follows:

```ts
type Currency = {
  code: string // The currency code in ISO 4217 format, e.g. 'USD'
  decimals: number // The number of decimal places for the currency, e.g. 2 for USD
  label: string // A human-readable label for the currency, e.g. 'US Dollar'
  symbol: string // The currency symbol, e.g. '$'
}
```

For example, to support JYP in addition to USD:

```ts
import { ecommercePlugin } from '@payloadcms/plugin-ecommerce'
import { USD } from '@payloadcms/plugin-ecommerce'

ecommercePlugin({
  currencies: {
    supportedCurrencies: [
      USD,
      {
        code: 'JPY',
        decimals: 0,
        label: 'Japanese Yen',
        symbol: '¥',
      },
    ],
    defaultCurrency: 'USD',
  },
})
```

Note that adding a new currency could generate a new schema migration as it adds new prices fields in your products.

We currently support the following currencies out of the box:

- `USD`
- `EUR`
- `GBP`

You can import these from the plugin:

```ts
import { EUR } from '@payloadcms/plugin-ecommerce'
```

Note that adding new currencies here does not automatically enable them in
your payment gateway. Make sure to enable the currencies in your payment
gateway dashboard as well.

## Inventory

The `inventory` option is used to enable or disable inventory tracking within Payload. It defaults to `true`. It also takes an object:

| Option      | Type     | Description                                                               |
| ----------- | -------- | ------------------------------------------------------------------------- |
| `fieldName` | `string` | Override the field name used to track inventory. Defaults to `inventory`. |

For now it's quite rudimentary tracking with no integrations to 3rd party services. It will simply add an `inventory` field to the `variants` collection and decrement the inventory when an order is placed.
