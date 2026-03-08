# Collect taxes for recurring payments

Learn how to collect and report taxes for recurring payments.

To calculate tax for recurring payments, Stripe offers Stripe Tax and Tax Rates.

- **Stripe Tax**—a paid product that automatically calculates the tax on your transactions without the need to define the rates and rules. Fees only apply after you’ve added at least one location where you’re registered to calculate and remit tax. For more information, see [Stripe Tax](https://docs.stripe.com/tax.md).

- **Tax Rates**—a free feature that allows you to define any number of tax rates for *invoices* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice), *subscriptions* (A Subscription represents the product details associated with the plan that your customer subscribes to. Allows you to charge the customer on a recurring basis), and one-time payments that use Checkout. Stripe won’t create or maintain any tax rates on your behalf. For more information, see [Tax Rates](https://docs.stripe.com/api/tax_rates.md) and [how to use them](https://docs.stripe.com/billing/taxes/tax-rates.md).

# Stripe Tax

> This is a Stripe Tax for when tax-calculation is stripe-tax. View the full page at https://docs.stripe.com/billing/taxes/collect-taxes?tax-calculation=stripe-tax.

Stripe Tax allows you to calculate the tax amount on your recurring payments when using Stripe Billing. Use your customer’s location details to preview the tax amount before creating a subscription and then create it with Stripe Tax enabled when your customer is ready to pay. Stripe Tax integrates with Stripe Billing and automatically handles tax calculation with your [pricing model](https://docs.stripe.com/products-prices/pricing-models.md), [prorations](https://docs.stripe.com/billing/subscriptions/prorations.md), [discounts](https://docs.stripe.com/billing/subscriptions/coupons.md), [trials](https://docs.stripe.com/billing/subscriptions/trials.md), and so on.

#### Customer v1

A diagram providing a high level overview of a Stripe Tax and Billing integration using Customer v1. (See full diagram at https://docs.stripe.com/billing/taxes/collect-taxes)
This guide assumes you’re setting up Stripe Tax and Billing for the first time. See how to [update existing subscriptions](https://docs.stripe.com/tax/subscriptions/update.md).

If you’re using Stripe Checkout to create new subscriptions, see how to [automatically collect tax on Checkout sessions](https://docs.stripe.com/tax/checkout.md), or watch the short video below:
[Watch on YouTube](https://www.youtube.com/watch?v=3QBRs4IfDNo)

## Estimate taxes and total \[Server-side]

#### Before address collection

When a customer first enters your checkout flow, you might not have their address information yet. In this case, [create a preview invoice](https://docs.stripe.com/api/invoices/create_preview.md) and set [customer\_details.tax.ip\_address](https://docs.stripe.com/api/invoices/create_preview.md#create_create_preview-customer_details-tax-ip_address) to let Stripe locate them using their IP address.

> In most cases, Stripe can resolve an IP address to a physical area, but its precision varies and might not reflect your customer’s actual location. We don’t recommend relying on a customer’s IP address to determine their address beyond an initial estimate.

```curl
curl https://api.stripe.com/v1/invoices/create_preview \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "automatic_tax[enabled]"=true \
  -d "customer_details[tax][ip_address]"={{IP_ADDRESS}} \
  -d "subscription_details[items][0][price]"="{{PRICE_ID}}"
```

#### After address collection

When your customer fills in their address details, set [customer\_details.address](https://docs.stripe.com/api/invoices/create_preview.md#create_create_preview-customer_details-address) also. Use [customer\_details.shipping](https://docs.stripe.com/api/invoices/create_preview.md#create_create_preview-customer_details-shipping) if you’re collecting shipping addresses.

```curl
curl https://api.stripe.com/v1/invoices/create_preview \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "automatic_tax[enabled]"=true \
  -d "customer_details[address][line1]"={{LINE1}} \
  -d "customer_details[address][line2]"={{LINE2}} \
  -d "customer_details[address][city]"={{CITY}} \
  -d "customer_details[address][state]"={{STATE}} \
  -d "customer_details[address][postal_code]"={{POSTAL_CODE}} \
  -d "customer_details[address][country]"={{COUNTRY}} \
  -d "customer_details[tax][ip_address]"={{IP_ADDRESS}} \
  -d "subscription_details[items][0][price]"="{{PRICE_ID}}"
```

Check the [automatic\_tax.status](https://docs.stripe.com/api/invoices/object.md#invoice_object-automatic_tax-status) of the invoice. If the status is `requires_location_inputs`, it means that the address details are invalid or insufficient. In this case, prompt your customer to re-enter their address details or provide accurate address details.

The invoice [total](https://docs.stripe.com/api/invoices/object.md#invoice_object-total) is how much your customer pays and [tax](https://docs.stripe.com/api/invoices/object.md#invoice_object-tax) is the sum of all tax amounts on the invoice. If you want a breakdown of taxes, see [total\_tax\_amounts](https://docs.stripe.com/api/invoices/object.md#invoice_object-total_tax_amounts). All amounts are in cents.

> #### Zero tax
>
> If the `tax` is zero, make sure that you have a tax registration in your customer’s location. See how to [register for sales tax, VAT, and GST](https://docs.stripe.com/tax/registering.md) and learn more about [zero tax amounts and reverse charges](https://docs.stripe.com/tax/zero-tax.md).

## Collect customer information \[Client-side]

After you have an estimate of the taxes and the total, start collecting customer information including their shipping address (if applicable), billing address, and their payment details. Notice that when you use Stripe Tax, you collect payment details without an Intent. The first step is to [create an Elements object without an Intent](https://docs.stripe.com/js/elements_object/create_without_intent):

```javascript
const stripe = Stripe("<<YOUR_PUBLISHABLE_KEY>>");

const elements = stripe.elements({
  mode: 'subscription',
  currency: '{{CURRENCY}}',
  amount: {{TOTAL}}, // This is the invoice total.
});
```

Next, [create an Address Element](https://docs.stripe.com/js/elements_object/create_address_element) and [a Payment Element](https://docs.stripe.com/js/elements_object/create_payment_element) and [mount](https://docs.stripe.com/js/element/mount) both:

```javascript
const addressElement = elements.create('address', {
  mode: 'billing' // or 'shipping', if you are shipping goods
});
addressElement.mount('#address-element');

const paymentElementOptions = { layout: 'accordion'};
const paymentElement = elements.create('payment', paymentElementOptions);
paymentElement.mount('#payment-element');
```

Then you can listen to [change events](https://docs.stripe.com/js/element/events/on_change?type=paymentElement#element_on_change-event) on the Address Element. When the address changes, [re-estimate](https://docs.stripe.com/tax/subscriptions.md?estimate=after#estimate-taxes-total) the taxes and the total.

```javascript
addressElement.on('change', function(event) {
  // Throttle your requests to avoid overloading your server or hitting
  // Stripe's rate limits.
  const { tax, total } = await updateEstimate(event.value.address);

  elements.update({ amount: total });
  // Update your page to display the new tax and total to the user...
});
```

> When your customer is entering their address, Address Element fires a `change` event for each keystroke. To avoid overloading your server and hitting Stripe’s [rate limits](https://docs.stripe.com/rate-limits.md), wait for some time after the last `change` event before re-estimating the taxes and the total.

## Handle submission \[Client-side]

When your customer submits the form, call [elements.submit()](https://docs.stripe.com/js/elements/submit) to validate the form fields and collect any data required for wallets. You must wait for this function’s promise to resolve before performing any other operations.

```javascript
document.querySelector("#form").addEventListener("submit", function(event) {
  // We don't want to let default form submission happen here,
  // which would refresh the page.
  event.preventDefault();

  const { error: submitError } = await elements.submit();
  if (submitError) {
    // Handle error...
    return;
  }

  const { value: customerDetails } = await addressElement.getValue();

  // See the "Save customer details" section below to implement this
  // server-side.
  await saveCustomerDetails(customerDetails); // Makes a request to your server to save the customer details.

  // See the "Create subscription" section below to implement this server-side.
  const { clientSecret } = await createSubscription(); // latest_invoice.confirmation_secret.client_secret of the new subscription. // Makes a request to your server to create a subscription.

  const { error: confirmError } = await stripe.confirmPayment({
    elements,
    clientSecret,
    confirmParams: {
      return_url: {{RETURN_URL}}, // The URL Stripe redirects your customer to after they complete the payment.
    },
  });
  if (confirmError) {
    // Handle error...
    return;
  }

  // Upon a successful confirmation, your user will be redirected to the
  // return_url you provide before the Promise ever resolves.
});
```

## Save customer details \[Server-side]

#### Customer v1

[Update](https://docs.stripe.com/api/customers/update.md) your `Customer` object using the details you’ve collected from your customer, so that Stripe Tax can determine their precise location for accurate results.

> If your customer is in the United States, provide a full address if possible. We use the term “rooftop-accurate” to mean that we can attribute your customer’s location to a specific house or building. This provides greater accuracy, where two houses located side-by-side on the same street might be subject to different tax rates, because of complex jurisdiction boundaries.

If you haven’t already created a `Customer` object (for example, when your customer first signs up on your website), you can [create](https://docs.stripe.com/api/customers/create.md) one now.

#### Update customer

```curl
curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "address[line1]"={{LINE1}} \
  -d "address[line2]"={{LINE2}} \
  -d "address[city]"={{CITY}} \
  -d "address[state]"={{STATE}} \
  -d "address[postal_code]"={{POSTAL_CODE}} \
  -d "address[country]"={{COUNTRY}} \
  -d "tax[validate_location]"=immediately
```

> If your customer has other existing subscriptions with automatic tax enabled and you update their address information, the tax and total amounts on their future invoices might be different. This is because tax rates vary depending on customer location.

#### Create customer

```curl
curl https://api.stripe.com/v1/customers \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "address[line1]"={{LINE1}} \
  -d "address[line2]"={{LINE2}} \
  -d "address[city]"={{CITY}} \
  -d "address[state]"={{STATE}} \
  -d "address[postal_code]"={{POSTAL_CODE}} \
  -d "address[country]"={{COUNTRY}} \
  -d "tax[validate_location]"=immediately
```

Your customer must have a valid tax location in order to enable automatic tax on their subscription. Set [tax.validate\_location](https://docs.stripe.com/api/customers/update.md#update_customer-tax-validate_location) to `immediately` to validate the customer’s tax location. If validation fails, Stripe fails your request with the [customer\_tax\_location\_invalid](https://docs.stripe.com/error-codes.md#customer-tax-location-invalid) error code. Checking the [automatic\_tax.status](https://docs.stripe.com/api/invoices/object.md#invoice_object-automatic_tax-status) of your preview invoices helps avoid this failure.

## Create subscription \[Server-side]

[Create](https://docs.stripe.com/api/subscriptions/create.md) a subscription with automatic tax enabled.

#### Customer v1

```curl
curl https://api.stripe.com/v1/subscriptions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "automatic_tax[enabled]"=true \
  -d customer="{{CUSTOMER_ID}}" \
  -d "items[0][price]"="{{PRICE_ID}}" \
  -d "payment_settings[save_default_payment_method]"=on_subscription \
  -d "expand[0]"="latest_invoice.confirmation_secret"
```

The [latest\_invoice.confirmation\_secret.client\_secret](https://docs.stripe.com/api/invoices/object.md#invoice_object-confirmation_secret-client_secrett) is the *client secret* (The client secret is a unique key returned from Stripe as part of a PaymentIntent. This key lets the client access important fields from the PaymentIntent (status, amount, currency) while hiding sensitive ones (metadata, customer)) of the *payment intent* (API object that represents your intent to collect payment from a customer, tracking charge attempts and payment state changes throughout the process) of the first (and the latest) invoice of the new subscription. You need to pass the client secret to your front end to be able to *confirm* (Confirming a PaymentIntent indicates that the customer intends to pay with the current or provided payment method. Upon confirmation, the PaymentIntent attempts to initiate a payment) the payment intent.

> Don’t store, log, or expose the client secret to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.

If your customer has a default payment method, the first invoice of the subscription is paid automatically. You can confirm this using [latest\_invoice.status](https://docs.stripe.com/api/invoices/object.md#invoice_object-status) of the subscription. If you want to use the new payment details you collected from your customer in your checkout flow, make sure that the first invoice isn’t paid automatically. Pass `default_incomplete` for the [payment\_behavior](https://docs.stripe.com/api/subscriptions/create.md#create_subscription-payment_behavior) when you’re creating your subscription and confirm the payment intent using [stripe.confirmPayment()](https://docs.stripe.com/js/payment_intents/confirm_payment) as shown. See [Billing collection methods](https://docs.stripe.com/billing/collection-method.md) for more information.

## Optional: Update your products and prices

Stripe Tax uses information stored on *products* (Products represent what your business sells—whether that's a good or a service) and *prices* (Prices define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the interval if the price is for subscriptions) to calculate tax, such as *tax code* (A tax code is the category of your product for tax purposes) and *tax behavior* (Tax behavior determines whether you want to include taxes in the price ("inclusive") or add them on top ("exclusive")). If you don’t explicitly specify these configurations, Stripe Tax will use the default tax code selected in [Tax Settings](https://dashboard.stripe.com/settings/tax).

For more information, see [Specify product tax codes and tax behavior](https://docs.stripe.com/tax/products-prices-tax-codes-tax-behavior.md).

## Optional: Handle refunds \[Server-side]

When you create a refund for an Invoice payment, Stripe Tax automatically reduces your tax liability.

Alternatively, you can issue [Credit Notes](https://docs.stripe.com/api/credit_notes/object.md) to track tax liability decreases and provide records to your customers.

#### Refund invoice amount

To refund an amount associated with an invoice total, create a Credit Note and a Refund.

#### Credit Note with automatic Refund

Create a Credit Note and a [Refund](https://docs.stripe.com/api/refunds/object.md) together by calling [create Credit Note](https://docs.stripe.com/api/credit_notes/create.md) and providing a `refund_amount` value.

```curl
curl https://api.stripe.com/v1/credit_notes \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d invoice="{{INVOICE_ID}}" \
  -d refund_amount=1000
```

#### Credit Note with manual Refund

[Create a Refund](https://docs.stripe.com/api/refunds/create.md), then include its ID when you create a [Credit Note](https://docs.stripe.com/api/credit_notes/object.md). In this case, don’t include a `refund_amount` value.

```curl
curl https://api.stripe.com/v1/credit_notes \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d invoice="{{INVOICE_ID}}" \
  -d "refunds[0][refund]"="{{REFUND_ID}}" \
  -d "refunds[0][amount_refunded]"=1000
```

Stripe Tax automatically distributes the total refund amount between taxes and the net amount.

#### Refund invoice line item amount

If you want to refund an amount associated with an invoice line item, first calculate the [total](https://docs.stripe.com/api/credit_notes/object.md#credit_note_object-total) and [total\_excluding\_tax](https://docs.stripe.com/api/credit_notes/object.md#credit_note_object-total_excluding_tax) amounts by calling [preview Credit Note](https://docs.stripe.com/api/credit_notes/preview.md).

```curl
curl -G https://api.stripe.com/v1/credit_notes/preview \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d invoice="{{INVOICE_ID}}" \
  -d "lines[0][type]"=invoice_line_item \
  --data-urlencode "lines[0][invoice_line_item]"="{{line item id from invoice}}" \
  -d "lines[0][amount]"=1000
```

Then, create a [Credit Note](https://docs.stripe.com/api/credit_notes/object.md) and a [Refund](https://docs.stripe.com/api/refunds/object.md).

#### Credit Note with automatic Refund

Create a Credit Note and a [Refund](https://docs.stripe.com/api/refunds/object.md) together by calling [create Credit Note](https://docs.stripe.com/api/credit_notes/create.md) and providing a `refund_amount` value.

```curl
curl https://api.stripe.com/v1/credit_notes \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d invoice="{{INVOICE_ID}}" \
  -d refund_amount=1000 \
  -d "lines[0][type]"=invoice_line_item \
  -d "lines[0][invoice_line_item]"="{{line item id from invoice}}" \
  -d "lines[0][amount]"=1000
```

#### Credit Note with manual Refund

[Create a Refund](https://docs.stripe.com/api/refunds/create.md) using the `total` calculated by the Credit Note preview, then include its ID when you create a [Credit Note](https://docs.stripe.com/api/credit_notes/object.md). In this case, don’t include a `refund_amount` value.

```curl
curl https://api.stripe.com/v1/credit_notes \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d invoice="{{INVOICE_ID}}" \
  -d "refunds[0][refund]"="{{REFUND_ID}}" \
  -d "refunds[0][amount_refunded]"=1000 \
  -d "lines[0][type]"=invoice_line_item \
  -d "lines[0][invoice_line_item]"="{{line item id from invoice}}" \
  -d "lines[0][amount]"=1000
```

## Use webhooks

We recommend listening to subscription events with *webhooks* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) because most subscription activity happens asynchronously.

When you start using Stripe Tax, make sure to listen to [invoice.finalization\_failed](https://docs.stripe.com/api/events/types.md#event_types-invoice.finalization_failed) events. If the [automatic\_tax.status](https://docs.stripe.com/api/invoices/object.md#invoice_object-automatic_tax-status) of the invoice is `requires_location_inputs`, it means that the address details of your customer are invalid or insufficient. In this case, Stripe can’t calculate the taxes, can’t finalize the invoice, and can’t collect the payment. Notify your customer to re-enter their address details or provide an accurate address.

See [Using webhooks with subscriptions](https://docs.stripe.com/billing/subscriptions/webhooks.md) to learn more.

# Tax Rates

> This is a Tax Rates for when tax-calculation is tax-rates. View the full page at https://docs.stripe.com/billing/taxes/collect-taxes?tax-calculation=tax-rates.

To collect taxes on a subscription, set [tax rates on the subscription](https://docs.stripe.com/billing/taxes/collect-taxes.md#static-configuration) or [set the tax rates on invoices as the subscription renews](https://docs.stripe.com/billing/taxes/collect-taxes.md#dynamic-configuration). Or, if you use Checkout, you can [specify tax rates in Checkout Sessions](https://docs.stripe.com/billing/taxes/collect-taxes.md#adding-tax-rates-to-checkout) to apply taxes to subscriptions.

## Set tax rates on a subscription  (Recommended)

Subscriptions create draft invoices that stay editable for about an hour. During this time, you can correct the tax rates using the steps outlined below.

You can apply taxes at the subscription level and the subscription item level and set up to [five tax rates](https://docs.stripe.com/billing/taxes/tax-rates.md#using-multiple-tax-rates) on each subscription item.

When invoices are generated for subscriptions, tax rates are copied from the subscription to the invoice. In the example below, the first subscription item has two tax rates: 3% and 5%, which overrides the 1% from the subscription level tax rate. The second item doesn’t have any tax rates set directly on it, so the 1% from the subscription level tax rate is automatically applied.

| Subscription item 1 | 3% and 5%    | ➡️ | Invoice item 1 | 3% and 5%    |
| ------------------- | ------------ | -- | -------------- | ------------ |
| Subscription item 2 | (no tax set) | ➡️ | Invoice item 2 | (no tax set) |
| Subscription        | 1%           | ➡️ | Invoice        | 1%           |

You can set tax rates when you create or update subscription items by passing the [tax rate IDs](https://docs.stripe.com/api/subscription_items/object.md#subscription_item_object-tax_rates-id). The example below updates an existing subscription item with two tax rates:

```curl
curl https://api.stripe.com/v1/subscription_items/si_F2yjdxUlCCOAtv \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "tax_rates[]"=txr_1F6kmAAJVYItwOKqV9IWehUH \
  -d "tax_rates[]"=txr_2J8lmBBGHJYyuUJqF6QJtkNM
```

You can set subscription level tax rates when you create or update subscriptions. Set the tax rates you want to apply by passing the [default tax rate IDs](https://docs.stripe.com/api/subscriptions/object.md#subscription_object-default_tax_rates). The example below updates an existing subscription with two tax rates:

```curl
curl https://api.stripe.com/v1/subscriptions/sub_BVxXIrxAAYb7Fb \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "default_tax_rates[]"=txr_1EO66sClCIKljWvs98IiVfHW \
  -d "default_tax_rates[]"=txr_1EEOvcClCIKljWvsqYb9U0MB
```

## Dynamically configure tax rates on each subscription service period

If you add [extra invoice items](https://docs.stripe.com/billing/invoices/subscription.md#adding-upcoming-invoice-items), or sell in enough jurisdictions that tax rates change frequently, you can dynamically calculate and assign tax rates to the subscription’s invoice as it’s created.

When a subscription renews and creates an invoice, Stripe sends the `invoice.created` *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) event. Stripe [waits approximately one hour](https://docs.stripe.com/billing/subscriptions/webhooks.md#understand) before finalizing the invoice and attempting payment or sending an email. During that delay, the invoice is a [draft](https://docs.stripe.com/api/invoices/object.md#invoice_object-status) and can be edited. Follow the process to [assign tax rates](https://docs.stripe.com/invoicing/taxes/tax-rates.md) to that invoice.

If you have credit [prorations](https://docs.stripe.com/billing/subscriptions/prorations.md), use the `proration_details` parameter in the [(Invoice) Line Item](https://docs.stripe.com/api/invoice-line-item/object.md) object to reference to the original debit line items that the credit proration applies to. Use this reference to adjust the tax amounts correctly for credit prorations.

## Add tax rates to Checkout

You can specify [tax rates](https://docs.stripe.com/billing/taxes/tax-rates.md) (Sales, VAT, GST, and others) in Checkout Sessions to apply taxes to *subscriptions* (A Subscription represents the product details associated with the plan that your customer subscribes to. Allows you to charge the customer on a recurring basis).

- Use fixed tax rates when you know the exact tax rate to charge your customers before they start the checkout process (for example, you only sell to customers in the UK and always charge 20% VAT).
- With the *Prices* (Prices define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the interval if the price is for subscriptions) API, you can use dynamic tax rates when you require more information from your customer (for example, their billing or shipping address) before determining the tax rate to charge. With dynamic tax rates, you create tax rates for different regions (for example, a 20% VAT tax rate for customers in the UK and a 7.25% sales tax rate for customers in California, US) and Stripe attempts to match your customer’s location to one of those tax rates.

#### Fixed tax rates

Set [subscription\_data.default\_tax\_rates](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-subscription_data-default_tax_rates) to apply a default tax rate to a subscription started with Checkout.

#### curl

```bash
curl https://api.stripe.com/v1/checkout/sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -d "payment_method_types[]"=card \
  -d "line_items[][price]"="{{PRICE_ID}}" \
  -d "line_items[][quantity]"=1 \-d "subscription_data[default_tax_rates][]"="{{TAX_RATE_ID}}" \
  -d mode=subscription \
  -d success_url="https://example.com/success" \
```

You can also specify [line\_items.tax\_rates](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-tax_rates) or [subscription\_data.items.tax\_rates](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-subscription_data-items-tax_rates) to apply tax rates to specific plans or invoice line items.

#### curl

```bash
curl https://api.stripe.com/v1/checkout/sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -d "payment_method_types[]"="card" \
  -d "line_items[][price]"="{{PRICE_ID}}" \
  -d "line_items[][quantity]"=1 \-d "line_items[][tax_rates][0]"="{{TAX_RATE_ID}}" \
  -d "mode"="subscription" \
  -d "success_url"="https://example.com/success" \
```

#### Dynamic tax rates

Pass an array of [tax rates](https://docs.stripe.com/api/tax_rates/object.md) to [line\_items.dynamic\_tax\_rates](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-dynamic_tax_rates). Each tax rate must have a [supported](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-dynamic_tax_rates) `country`, and for the US, a `state`.

This list matches tax rates to your customer’s [shipping address](https://docs.stripe.com/payments/collect-addresses.md), billing address, or country. The shipping address takes precedence over the billing address for determining the tax rate to charge.

If you’re not collecting shipping or billing addresses, your customer’s country (and postal code where applicable) is used to determine the tax rate. If you haven’t passed a tax rate that matches your customer’s shipping address, billing address, or country, no tax rate is applied.

#### curl

```bash
curl https://api.stripe.com/v1/checkout/sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -d "payment_method_types[]"="card" \
  -d "line_items[][price]"="{{PRICE_ID}}" \
  -d "line_items[][quantity]"=1 \-d "line_items[][dynamic_tax_rates][]"="{{FIRST_TAX_RATE_ID}}" \
  -d "line_items[][dynamic_tax_rates][]"="{{SECOND_TAX_RATE_ID}}" \
  -d "mode"="subscription" \
  -d "success_url"="https://example.com/success" \
```

> [subscription\_data.default\_tax\_rates](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-subscription_data-default_tax_rates) and [line\_items.tax\_rates](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-tax_rates) can’t be used in combination with [line\_items.dynamic\_tax\_rates](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-dynamic_tax_rates).

You can use Stripe’s data exports to populate the periodic reports required for remittance. Visit [Tax reporting and remittance](https://docs.stripe.com/billing/taxes/tax-rates.md#remittance) for more information.

## See also

- [Determining customer locations](https://docs.stripe.com/tax/customer-locations.md)
- [Customer tax IDs](https://docs.stripe.com/billing/customer/tax-ids.md)
- [Reporting and filing](https://docs.stripe.com/tax/reports.md)
- [Tax Rates](https://docs.stripe.com/billing/taxes/tax-rates.md)
- [Tax Rates on Invoices](https://docs.stripe.com/invoicing/taxes/tax-rates.md)
