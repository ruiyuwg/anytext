# Payment Intents

A PaymentIntent guides you through the process of collecting a payment from your customer. We recommend that you create exactly one PaymentIntent for each order or customer session in your system. You can reference the PaymentIntent later to see the history of payment attempts for a particular session.

A PaymentIntent transitions through [multiple statuses](https://docs.stripe.com/payments/paymentintents/lifecycle.md) throughout its lifetime as it interfaces with Stripe.js to perform authentication flows and ultimately creates at most one successful charge.

Related guide: [Payment Intents API](https://docs.stripe.com/docs/payments/payment-intents.md)

## Endpoints

### Create a PaymentIntent

- [POST /v1/payment\_intents](https://docs.stripe.com/api/payment_intents/create.md)

### Update a PaymentIntent

- [POST /v1/payment\_intents/:id](https://docs.stripe.com/api/payment_intents/update.md)

### Retrieve a PaymentIntent

- [GET /v1/payment\_intents/:id](https://docs.stripe.com/api/payment_intents/retrieve.md)

### List all PaymentIntent LineItems

- [GET /v1/payment\_intents/:id/amount\_details\_line\_items](https://docs.stripe.com/api/payment_intents/amount_details_line_items.md)

### List all PaymentIntents

- [GET /v1/payment\_intents](https://docs.stripe.com/api/payment_intents/list.md)

### Cancel a PaymentIntent

- [POST /v1/payment\_intents/:id/cancel](https://docs.stripe.com/api/payment_intents/cancel.md)

### Capture a PaymentIntent

- [POST /v1/payment\_intents/:id/capture](https://docs.stripe.com/api/payment_intents/capture.md)

### Confirm a PaymentIntent

- [POST /v1/payment\_intents/:id/confirm](https://docs.stripe.com/api/payment_intents/confirm.md)

### Increment an authorization

- [POST /v1/payment\_intents/:id/increment\_authorization](https://docs.stripe.com/api/payment_intents/increment_authorization.md)

### Reconcile a customer\_balance PaymentIntent

- [POST /v1/payment\_intents/:id/apply\_customer\_balance](https://docs.stripe.com/api/payment_intents/apply_customer_balance.md)

### Search PaymentIntents

- [GET /v1/payment\_intents/search](https://docs.stripe.com/api/payment_intents/search.md)

### Verify microdeposits on a PaymentIntent

- [POST /v1/payment\_intents/:id/verify\_microdeposits](https://docs.stripe.com/api/payment_intents/verify_microdeposits.md)
