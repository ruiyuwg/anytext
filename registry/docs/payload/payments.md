## Payments

The `payments` option is used to configure payments and supported payment methods.

| Option           | Type    | Description                                                                                       |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------- |
| `paymentMethods` | `array` | An array of payment method adapters. Currently, only Stripe is supported. [More](#stripe-adapter) |

### Payment adapters

The plugin supports payment adapters to integrate with different payment gateways. Currently, only the [Stripe adapter](#stripe-adapter) is available. Adapters will provide a client side version as well with slightly different arguments.

Every adapter supports the following arguments in addition to their own:

| Argument         | Type                               | Description                                                             |
| ---------------- | ---------------------------------- | ----------------------------------------------------------------------- |
| `label`          | `string`                           | Human readabale label for this payment adapter.                         |
| `groupOverrides` | `GroupField` with `FieldsOverride` | Use this to override the available fields for the payment adapter type. |

Client side base arguments are the following:

| Argument | Type     | Description                                     |
| -------- | -------- | ----------------------------------------------- |
| `label`  | `string` | Human readabale label for this payment adapter. |

See the [Stripe adapter](#stripe-adapter) for an example of client side arguments and the [React section](#react) for usage.

#### `groupOverrides`

The `groupOverrides` option allows you to customize the fields that are available for a specific payment adapter. It takes a `GroupField` object with a `fields` function that receives the default fields and returns an array of fields.
These fields are stored in transactions and can be used to collect additional information for the payment method. Stripe, for example, will track the `paymentIntentID`.

Example for overriding the default fields:

```ts
payments: {
  paymentMethods: [
    stripeAdapter({
      secretKey: process.env.STRIPE_SECRET_KEY,
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      webhookSecret: process.env.STRIPE_WEBHOOKS_SIGNING_SECRET,
      groupOverrides: {
        fields: ({ defaultFields }) => {
          return [
            ...defaultFields,
            {
              name: 'customField',
              label: 'Custom Field',
              type: 'text',
            },
          ]
        }
      }
    }),
  ],
},
```

### Stripe Adapter

The Stripe adapter is used to integrate with the Stripe payment gateway. It requires a secret key, publishable key, and optionally webhook secret.

Note that Payload will not install the Stripe SDK package for you
automatically, so you will need to install it yourself:

```
pnpm add stripe
```

| Argument         | Type               | Description                                                                                                                                                                          |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `secretKey`      | `string`           | Required for communicating with the Stripe API in the backend.                                                                                                                       |
| `publishableKey` | `string`           | Required for communicating with the Stripe API in the client side.                                                                                                                   |
| `webhookSecret`  | `string`           | The webhook secret used to verify incoming webhook requests from Stripe.                                                                                                             |
| `webhooks`       | `WebhookHandler[]` | An array of webhook handlers to register within Payload's REST API for Stripe to callback.                                                                                           |
| `apiVersion`     | `string`           | The Stripe API version to use. See [docs](https://stripe.com/docs/api/versioning). This will be deprecated soon by Stripe's SDK, configure the API version in your Stripe Dashboard. |
| `appInfo`        | `object`           | The application info to pass to Stripe. See [docs](https://stripe.com/docs/api/app_info).                                                                                            |

```ts
import { stripeAdapter } from '@payloadcms/plugin-ecommerce/payments/stripe'

stripeAdapter({
  secretKey: process.env.STRIPE_SECRET_KEY!,
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  webhookSecret: process.env.STRIPE_WEBHOOKS_SIGNING_SECRET!,
})
```

#### Stripe `webhooks`

The `webhooks` option allows you to register custom webhook handlers for [Stripe events](https://docs.stripe.com/api/events). This is useful if you want to handle specific events that are not covered by the default handlers provided by the plugin.

```ts
stripeAdapter({
  webhooks: {
    'payment_intent.succeeded': ({ event, req }) => {
      // Access to Payload's req object and event data
    },
  },
}),
```

#### Stripe client side

On the client side, you can use the `publishableKey` to initialize Stripe and handle payments. The client side version of the adapter only requires the `label` and `publishableKey` arguments. Never expose the `secretKey` or `webhookSecret` keys on the client side.

```ts
import { stripeAdapterClient } from '@payloadcms/plugin-ecommerce/payments/stripe'

<EcommerceProvider
  paymentMethods={[
    stripeAdapterClient({
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    }),
  ]}
>
  {children}
</EcommerceProvider>
```
