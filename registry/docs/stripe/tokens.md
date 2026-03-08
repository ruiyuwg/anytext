# Tokens

Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. A token representing this information is returned to your server to use. Use our [recommended payments integrations](https://docs.stripe.com/docs/payments.md) to perform this process on the client-side. This guarantees that no sensitive card data touches your server, and allows your integration to operate in a PCI-compliant way.

If you can’t use client-side tokenization, you can also create tokens using the API with either your publishable or secret API key. If your integration uses this method, you’re responsible for any PCI compliance that it might require, and you must keep your secret API key safe. Unlike with client-side tokenization, your customer’s information isn’t sent directly to Stripe, so we can’t determine how it’s handled or stored.

You can’t store or use tokens more than once. To store card or bank account information for later use, create [Customer](https://docs.stripe.com/docs/api.md#customers) objects or [External accounts](https://docs.stripe.com/api.md#external_accounts). [Radar](https://docs.stripe.com/docs/radar.md), our integrated solution for automatic fraud protection, performs best with integrations that use client-side tokenization.

## Endpoints

### Create a bank account token

- [POST /v1/tokens](https://docs.stripe.com/api/tokens/create_bank_account.md)

### Create a card token

- [POST /v1/tokens](https://docs.stripe.com/api/tokens/create_card.md)

### Create a CVC update token

- [POST /v1/tokens](https://docs.stripe.com/api/tokens/create_cvc_update.md)

### Create a person token

- [POST /v1/tokens](https://docs.stripe.com/api/tokens/create_person.md)

### Create a PII token

- [POST /v1/tokens](https://docs.stripe.com/api/tokens/create_pii.md)

### Create an account token

- [POST /v1/tokens](https://docs.stripe.com/api/tokens/create_account.md)

### Retrieve a token

- [GET /v1/tokens/:id](https://docs.stripe.com/api/tokens/retrieve.md)
