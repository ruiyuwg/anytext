# Test Stripe Invoicing

Learn how to test your Invoicing integration.

To learn more about testing an integration, see Stripe’s general-purpose [testing page](https://docs.stripe.com/testing.md). For a Subscriptions integration, go to [Testing Stripe Billing](https://docs.stripe.com/billing/testing.md).

Use these common scenarios to test your invoicing integration before taking it live.

## Test webhook notifications

Stripe triggers event notifications when an *invoice’s* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice) [status changes](https://docs.stripe.com/invoicing/integration/workflow-transitions.md#status-transitions-endpoints). After you set up the Stripe CLI and link to your Stripe account, you can test webhooks by:

- Triggering event notifications with the [Stripe CLI](https://docs.stripe.com/stripe-cli.md). See a complete list of [invoice event types](https://docs.stripe.com/api/events/types.md#event_types-invoice.created).

- Using the Dashboard to [create invoices](https://dashboard.stripe.com/test/invoices/create) in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes).

You can add an endpoint and see its received events by going to the [Webhooks tab](https://dashboard.stripe.com/workbench/webhooks) in [Workbench](https://docs.stripe.com/workbench.md).

### Test events with fake data

By using the Stripe CLI to trigger events, you can see event notifications on your server as they come in. This means that you can check your webhook integration directly without complicating factors such as network tunnels or firewalls. When you use the Stripe CLI, the event your webhook receives contains fake data that doesn’t correlate to invoice information.

### Test events with real data

The most reliable way to test webhook notifications is to create test invoices for existing customers and handle the corresponding events.

## Test payment failures

To trigger payment failures for invoices, you can use the test credit card numbers in [Declined payments](https://docs.stripe.com/testing.md#declined-payments). If you want to simulate a declined payment for a card that’s been successfully attached to a customer, use **4000 0000 0000 0341** as their default payment method.

Depending on your [retry settings](https://docs.stripe.com/invoicing/automatic-collection.md), you might have to wait a day or more to see the first retry attempt. To see what happens for a successful retry, you can use this waiting period to update the customer’s payment method to a working test card.

## Test payments that require 3D Secure

Use the [**4000 0027 6000 3184**](https://docs.stripe.com/testing.md#regulatory-cards) card to simulate 3D Secure triggering for invoices. When Stripe triggers a 3D Secure authentication, you can test authenticating or failing the payment attempt in the 3DS dialog that opens. If the payment is authenticated successfully, the invoice is paid. When a payment attempt fails, the authentication attempt is unsuccessful and the invoice remains `open`.

## Test bank transfer payments

To test manual payments on invoices through bank transfers:

1. Create a testmode invoice with the collection method set to `send_invoice` and `payment_settings[payment_method_types]` array set to `[customer_balance]`.

2. Find the invoice in the Dashboard and click **Send**. This generates a unique virtual bank account number for your customer.

3. Retrieve your customer’s unique virtual bank account number using the [Customer Balance Funding Instructions API](https://docs.stripe.com/payments/customer-balance/funding-instructions.md#create-funding-instructions). You can also find your customer’s virtual banking details in the Hosted Invoice Page and PDF.

## Test customer tax ID verification

Use these magic tax IDs to trigger certain verification conditions in testing environments. The tax ID type must be the Australian Business Number (ABN), EU VAT Number, or UK Value-Added-Tax (GB VAT) number.

| Number      | Type                                      |
| ----------- | ----------------------------------------- |
| `000000000` | Successful verification                   |
| `111111111` | Unsuccessful verification                 |
| `222222222` | Verification remains pending indefinitely |
