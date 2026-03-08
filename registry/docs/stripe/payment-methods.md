# Payment Methods

PaymentMethod objects represent your customer’s payment instruments. You can use them with [PaymentIntents](https://docs.stripe.com/docs/payments/payment-intents.md) to collect payments or save them to Customer objects to store instrument details for future payments.

Related guides: [Payment Methods](https://docs.stripe.com/docs/payments/payment-methods.md) and [More Payment Scenarios](https://docs.stripe.com/docs/payments/more-payment-scenarios.md).

## Endpoints

### Create a PaymentMethod

- [POST /v1/payment\_methods](https://docs.stripe.com/api/payment_methods/create.md)

### Update a PaymentMethod

- [POST /v1/payment\_methods/:id](https://docs.stripe.com/api/payment_methods/update.md)

### Retrieve a Customer's PaymentMethod

- [GET /v1/customers/:id/payment\_methods/:id](https://docs.stripe.com/api/payment_methods/customer.md)

### Retrieve a PaymentMethod

- [GET /v1/payment\_methods/:id](https://docs.stripe.com/api/payment_methods/retrieve.md)

### List a Customer's PaymentMethods

- [GET /v1/customers/:id/payment\_methods](https://docs.stripe.com/api/payment_methods/customer_list.md)

### List PaymentMethods

- [GET /v1/payment\_methods](https://docs.stripe.com/api/payment_methods/list.md)

### Attach a PaymentMethod to a Customer

- [POST /v1/payment\_methods/:id/attach](https://docs.stripe.com/api/payment_methods/attach.md)

### Detach a PaymentMethod from a Customer

- [POST /v1/payment\_methods/:id/detach](https://docs.stripe.com/api/payment_methods/detach.md)
