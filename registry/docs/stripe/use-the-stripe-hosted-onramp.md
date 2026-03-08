# Use the Stripe-hosted onramp

Generate a redirect URL and mint a session for the standalone onramp.

The Stripe-hosted, standalone onramp is a prebuilt frontend integration of the crypto onramp hosted at <https://crypto.link.com>. Platforms can integrate the crypto onramp by redirecting their users to the standalone onramp, rather than hosting an embedded version of the onramp within their application.

## Before you begin

To access the Stripe onramp, including testing environments, you must follow these steps to submit your application:

1. [Create or sign in to your Stripe account](https://dashboard.stripe.com/register).
2. If you haven’t already, [activate your Stripe account](https://dashboard.stripe.com/account/onboarding).
3. [Submit your onramp application](https://dashboard.stripe.com/crypto-onramp/get-started). We review most onramp applications within 48 hours, and notify you when you’ve been approved or if we need more information. You can check your application status anytime in the [Dashboard](https://dashboard.stripe.com/crypto-onramp/onboarding).
4. After we approve your application, [choose an integration](https://docs.stripe.com/crypto/onramp.md#integration-options) and start development using a [sandbox](https://docs.stripe.com/sandboxes.md).

## Stripe-hosted onramp

The standalone onramp redirect URL supports parameter customization and lets you prefill fields such as the destination currency and the source amount or destination amount.

Share the link by sending it directly to users or by displaying it with a button, as in the following demo.

## Customize the Stripe-hosted onramp

You can also generate a redirect URL with code using the `Standalone` function and passing in the desired fields. Choose to either generate a redirect URL or mint a session with a redirect URL:

| Customization option               | Overview                                                                                                                                                                                                                                                                                                           | Best for                                                                                  |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Generate a redirect URL            | Generate a redirect URL in the frontend without a Stripe account. Customize the suggested source or destination amount, destination currency, and network.                                                                                                                                                         | If you want a lightweight front-end integration with light customization and no branding. |
| Mint a session with a redirect URL | Mint a session with a redirect URL in the backend with a Stripe account. Allows full customization, including the destination wallet address. For a full list of parameters, see [Pre-populate transaction parameters](https://docs.stripe.com/crypto/onramp/stripe-hosted.md#prepopulate-transaction-parameters). | If you want a fully customized onramp with branding.                                      |

### Generate a redirect URL

Include the following scripts using script tags within the `<head>` element of your HTML. These scripts must always load directly from Stripe domains (*https://js.stripe.com* and *https://crypto-js.stripe.com*) for compatibility and *PCI compliance* (Any party involved in processing, transmitting, or storing credit card data must comply with the rules specified in the Payment Card Industry (PCI) Data Security Standards. PCI compliance is a shared responsibility and applies to both Stripe and your business). Don’t include the scripts in a bundle or host a copy yourself. If you do, your integration might break without warning.

```html
<head>
  <title>Onramp</title>
  <script src="https://js.stripe.com/clover/stripe.js"></script>
  <script src="https://crypto-js.stripe.com/crypto-onramp-outer.js"></script>
</head>
```

Generate a redirect URL using the `Standalone` function, passing in the desired parameters:

```js
const standaloneOnramp = window.StripeOnramp.Standalone({
  source_currency: 'usd',
  amount: {source_amount: '42'},
  destination_networks: ['ethereum', 'bitcoin'],
  destination_currencies: ['eth', 'btc'],
  destination_currency: 'btc',
  destination_network: 'bitcoin'
});
const redirectUrl = standaloneOnramp.getUrl();
```

You can pre-populate these parameters:

- `source_currency`: The fiat currency for the transaction (`usd` and `eur`).
- `amount`: The fixed amount of fiat currency or cryptocurrency for this purchase. Specify a fiat amount by passing in `source_amount` (`{source_amount: 42}`). Specify a cryptocurrency amount by passing in `destination_amount` (`{destination_amount: 42}`). You can only specify one amount.
- `destination_currencies`: An array of cryptocurrencies you want to restrict to (`['eth', 'usdc']`).
- `destination_networks`: An array of crypto networks you want to restrict to (`['ethereum', 'polygon']`).
- `destination_network`: The default crypto network for this onramp (`ethereum`).
- `destination_currency`: The default cryptocurrency for this onramp session (`eth`).

Redirect your users to the URL for a prebuilt front-end integration of the crypto onramp on the standalone onramp.

### Mint a session with a redirect URL

Similar to other integrations, you need to implement a server endpoint to [create a new onramp session](https://docs.stripe.com/api/crypto/onramp_sessions/create.md) for every user visit. The onramp session creation request returns a `redirect_url`. Redirect your users to the URL for a fully customized and branded crypto onramp on the standalone onramp.

Generate a crypto onramp session with a `redirect_url` by running the following curl command:

```bash
curl -X POST https://api.stripe.com/v1/crypto/onramp_sessions \
  -u <<YOUR_SECRET_KEY>>:
```

You receive a response similar to the following:

```json
{
  "id": "cos_0MpKNb589O8KAxCGjmaOVF8T",
  "object": "crypto.onramp_session",
  "client_secret": "cos_0MpKNb589O8KAxCGjmaOVF8T_secret_fqV1TAdhSCFeO9FW5HnygRXca00AwEHIOu8",
  "created": 1679701843,
  "livemode": false,
  "redirect_url": "https://crypto.link.com?session_hash=CCwaGwoZYWNjdF8yOERUNTg5TzhLQXhDR2JMbXh5WijU7vigBjIGmyBbkqO4Oi10eFHEaFln9gFSsTGQBoQf5qRZK-A0NhiEIeH3QaCMrz-d4oYotirrAd_Bkz4",
  "status": "initialized",
  "transaction_details": {
    "destination_currency": null,
    "destination_amount": null,
    "destination_network": null,
    "fees": null,
    "lock_wallet_address": false,
    "source_currency": null,
    "source_amount": null,
    "destination_currencies": [
      "btc",
      "eth",
      "sol",
      "usdc",
      "xlm"
    ],
    "destination_networks": [
      "bitcoin",
      "ethereum",
      "solana",
      "polygon",
      "stellar"
    ],
    "transaction_id": null,
    "wallet_address": null,
    "wallet_addresses": null
  }
}
```
