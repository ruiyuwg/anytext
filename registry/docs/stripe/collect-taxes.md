# Collect taxes

Use Stripe Tax APIs to implement tax calculations in your custom integration.

Stripe Tax APIs enable you to calculate tax in custom payment flows. After your customer completes their payment, record the transaction so it appears in Stripe Tax reporting. The examples in this guide use Stripe payments APIs, but you can use the Tax API with any payment processor, or multiple payment processors.

If your custom payment flow uses the [Payment Intents API](https://docs.stripe.com/api/payment_intents.md), see [Calculate tax in your custom payment flows](https://docs.stripe.com/tax/payment-intent.md). This integration offers automatic liability tracking, receipts and Dashboard support. We also offer a public preview feature that lets you use the [Tax ID Element](https://docs.stripe.com/elements/tax-id-element.md) to collect tax IDs from customers. See [Collect customer tax IDs](https://docs.stripe.com/tax/custom.md#collect-customer-tax-ids) below for more information.

Alternatively, you can integrate Stripe Tax with [Payment Links](https://docs.stripe.com/tax/payment-links.md), [Checkout](https://docs.stripe.com/tax/checkout.md), [Billing](https://docs.stripe.com/tax/subscriptions.md), and [Invoicing](https://docs.stripe.com/tax/invoicing.md) with no or low code setups.
A diagram providing a high-level overview of the Tax API integration (See full diagram at https://docs.stripe.com/tax/custom)
This video walks through a Stripe Tax API integration that uses the Payment Intents API and the Payment Element.
[Watch on YouTube](https://www.youtube.com/watch?v=OfHJiC9Iek0)

## Add registrations

Stripe Tax only calculates tax in jurisdictions where you’re registered to collect tax. You must [add your registrations](https://docs.stripe.com/tax/registering.md#add-a-registration) in the Dashboard.

## Optional: Collect customer address \[Client-side]

The tax you collect typically depends on your customer’s location. For the most accurate tax calculation, collect your customer’s full address. Before collecting an address, you can show your customer an estimate based on their [IP address](https://docs.stripe.com/tax/custom.md#ip-address).

> The examples below use a simple custom address form, but you can also use the [Address Element](https://docs.stripe.com/elements/address-element.md) to collect addresses from customers with autocomplete and localization features.

The form below collects a full postal address:

```html
<form>
    <label for="address_line1">Address Line 1</label> <input type="text" id="address_line1" />
    <label for="address_city">City</label> <input type="text" id="address_city" />
    <label for="address_state">State</label> <select id="address_state">
      <option value="WA">Washington</option>
      <!-- add more states here -->
    </select>
    <label for="address_postal_code">Postal code</label> <input type="text" id="address_postal_code" />
    <label for="address_country">Country</label> <select id="address_country">
      <option value="US">United States</option>
      <option value="DE">Germany</option>
      <option value="IE">Ireland</option>
      <!-- add more countries here -->
    </select>
</form>
```

You might pass the address to your server endpoint as follows:

```js
const address = {
  line1: document.getElementById('address_line1').value,
  city: document.getElementById('address_city').value,
  state: document.getElementById('address_state').value,
  postal_code: document.getElementById('address_postal_code').value,
  country: document.getElementById('address_country').value,
};
var response = fetch('/preview-cart', {
  method: 'POST',
  body: JSON.stringify({address: address}),
  headers: {'Content-Type': 'application/json'},
}).then(function(response) {
  return response.json();
}).then(function(responseJson) {
  // Handle errors, or display calculated tax to your customer.
});
```

The address information that’s required to calculate tax [varies by customer country](https://docs.stripe.com/tax/customer-locations.md#supported-formats):

- **United States**: We require your customer’s postal code at a minimum. We recommend providing a full address for the most accurate tax calculation result.
- **Canada**: We require your customer’s postal code or province.
- **Other countries**: We only require your customer’s country code.

## Calculate tax \[Server-side]

You choose when and how often to [calculate tax](https://docs.stripe.com/api/tax/calculations/create.md). For example, you can:

- Show a tax estimate [based on your customer’s IP address](https://docs.stripe.com/tax/custom.md#ip-address) when they enter your checkout flow
- Recalculate tax as your customer types their billing or shipping address
- Calculate the final tax amount to collect when your customer finishes typing their address

Stripe [charges a fee](https://stripe.com/tax/pricing) per tax calculation API call. You can throttle tax calculation API calls to manage your costs.

The examples below show how to calculate tax in a variety of scenarios. Stripe Tax only calculates tax in jurisdictions where you’re registered to collect tax. You must [add your registrations](https://docs.stripe.com/tax/registering.md#add-a-registration) in the Dashboard.

#### Example - United States: tax-exclusive item

This example calculates tax for a US shipping address. The line item has a price of 10 USD and uses your account’s [preset tax code](https://docs.stripe.com/tax/set-up.md#preset-tax-code).

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "customer_details[address][line1]"="920 5th Ave" \
  -d "customer_details[address][city]"=Seattle \
  -d "customer_details[address][state]"=WA \
  -d "customer_details[address][postal_code]"=98104 \
  -d "customer_details[address][country]"=US \
  -d "customer_details[address_source]"=shipping
```

#### Example - United States: multiple items with shipping

This example has multiple tax-exclusive line items, and a 5 USD shipping cost.

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "line_items[0][tax_code]"=txcd_99999999 \
  -d "line_items[1][amount]"=5000 \
  -d "line_items[1][reference]"=L2 \
  -d "line_items[1][tax_code]"=txcd_99999999 \
  -d "line_items[2][amount]"=9999 \
  -d "line_items[2][reference]"=L3 \
  -d "line_items[2][tax_code]"=txcd_99999999 \
  -d "shipping_cost[amount]"=500 \
  -d "customer_details[address][line1]"="920 5th Ave" \
  -d "customer_details[address][city]"=Seattle \
  -d "customer_details[address][state]"=WA \
  -d "customer_details[address][postal_code]"=98104 \
  -d "customer_details[address][country]"=US \
  -d "customer_details[address_source]"=shipping
```

#### Example - United States: item with quantity

In New York, clothing isn’t subject to sales tax if each item is less than 110 USD. This example has a clothing line item with a total price of 150 USD and a quantity of 3. This means that each item of clothing is 50 USD and sales tax is exempt.

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=15000 \
  -d "line_items[0][quantity]"=3 \
  -d "line_items[0][reference]"=Clothing \
  -d "line_items[0][tax_code]"=txcd_30011000 \
  -d "shipping_cost[amount]"=500 \
  -d "customer_details[address][state]"=NY \
  -d "customer_details[address][postal_code]"=10001 \
  -d "customer_details[address][country]"=US \
  -d "customer_details[address_source]"=shipping
```

#### Example - Europe: tax-inclusive item

This example calculates tax for a billing address in Ireland, where tax is typically included in prices for non-business customers. The line item has a price of 29.99 EUR and uses tax code `txcd_10302000` (ebook).

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=eur \
  -d "line_items[0][amount]"=2999 \
  -d "line_items[0][reference]"=L1 \
  -d "line_items[0][tax_behavior]"=inclusive \
  -d "line_items[0][tax_code]"=txcd_10302000 \
  -d "customer_details[address][country]"=IE \
  -d "customer_details[address_source]"=billing
```

#### Example - Europe: multiple items with shipping

This example calculates tax for a shipping address in Ireland, where tax is typically included in prices for non-business customers. The item being shipped has a price of 59.99 EUR, and a shipping cost of 5 EUR. Since both amounts are tax-inclusive, the customer always pays 64.99 EUR.

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=eur \
  -d "line_items[0][amount]"=5999 \
  -d "line_items[0][reference]"=L1 \
  -d "line_items[0][tax_behavior]"=inclusive \
  -d "line_items[0][tax_code]"=txcd_99999999 \
  -d "shipping_cost[amount]"=500 \
  -d "shipping_cost[tax_behavior]"=inclusive \
  -d "customer_details[address][line1]"="123 Some House" \
  -d "customer_details[address][city]"=Dublin \
  -d "customer_details[address][country]"=IE \
  -d "customer_details[address_source]"=shipping
```

#### Example - Ship-from address

With this beta feature, taxes are levied based on the ship-from address, if you provide a ship-from address in certain states (such as Illinois) and the shipment contains physical goods. If the shipment contains both physical goods and services, taxes are applied to both based on the ship-from address.

This example calculates tax based on where the order ships from in Naperville, IL, instead of the business location (outside Illinois) and the ship-to address in Springfield, IL.

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "line_items[0][tax_behavior]"=exclusive \
  -d "line_items[0][tax_code]"=txcd_99999999 \
  -d "shipping_cost[amount]"=500 \
  -d "shipping_cost[tax_behavior]"=exclusive \
  -d "customer_details[address][city]"=Springfield \
  -d "customer_details[address][state]"=IL \
  -d "customer_details[address][postal_code]"=62704 \
  -d "customer_details[address][country]"=US \
  -d "customer_details[address_source]"=billing \
  -d "ship_from_details[address][city]"=Naperville \
  -d "ship_from_details[address][state]"=IL \
  -d "ship_from_details[address][postal_code]"=60540 \
  -d "ship_from_details[address][country]"=US
```

The [calculation response](https://docs.stripe.com/api/tax/calculations/object.md) contains amounts you can display to your customer, and use to take payment:

| Attribute                                                                                                                  | Description                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [amount\_total](https://docs.stripe.com/api/tax/calculations/object.md#tax_calculation_object-amount_total)                 | The grand total after calculating tax. Use this to set the PaymentIntent [amount](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-amount) to charge your customer.                                                    |
| [tax\_amount\_exclusive](https://docs.stripe.com/api/tax/calculations/object.md#tax_calculation_object-tax_amount_exclusive) | The amount of tax added on top of your line item amounts and shipping cost. This tax amount increases the `amount_total`. Use this to show your customer the amount of tax added to the transaction subtotal.                                     |
| [tax\_amount\_inclusive](https://docs.stripe.com/api/tax/calculations/object.md#tax_calculation_object-tax_amount_inclusive) | The amount of tax that’s included in your line item amounts and shipping cost (if using tax-inclusive pricing). This tax amount doesn’t increase the `amount_total`. Use this to show your customer the tax included in the total they’re paying. |
| [tax\_breakdown](https://docs.stripe.com/api/tax/calculations/object.md#tax_calculation_object-tax_breakdown)               | A list of tax amounts broken out by country or state tax rate. Use this to show your customer the specific taxes you’re collecting.                                                                                                               |

### Handle customer location errors

The calculation returns the `customer_tax_location_invalid` error code, if your customer’s address is invalid or isn’t precise enough to calculate tax:

```json
{
  "error": {
    "doc_url": "https://docs.stripe.com/error-codes#customer-tax-location-invalid","code": "customer_tax_location_invalid",
    "message": "We could not determine the customer's tax location based on the provided customer address.",
    "param": "customer_details[address]",
    "type": "invalid_request_error"
  }
}
```

If you receive this error, prompt your customer to check the address they entered and fix any typos.

### Use calculation with another processor

If you process transactions outside of Stripe, you can skip the following steps and apply the calculation to your externally-processed transactions.

## Create tax transaction \[Server-side]

Creating a tax transaction records the tax you’ve collected from your customer, so that later you can [download exports and generate reports](https://docs.stripe.com/tax/reports.md) to help with filing your taxes. You can [create a transaction](https://docs.stripe.com/api/tax/transactions/create_from_calculation.md) from a calculation until the [expires\_at](https://docs.stripe.com/api/tax/calculations/object.md#tax_calculation_object-expires_at) timestamp, 90 days after it’s created. Attempting to use it after this time returns an error.

> The transaction is considered effective on the date when `create_from_calculation` is called, and tax amounts won’t be recalculated.

When creating a tax transaction, you must provide a unique `reference` for the tax transaction and each line item. The references appear in tax exports to help you reconcile the tax you collected with the orders in your system.

For example, a tax transaction with reference `pi_123456789`, line item references `L1` and `L2`, and a shipping cost, looks like this in the itemized tax exports:

| ID           | line\_item\_id | type     | currency | transaction\_date    |
| ------------ | ------------ | -------- | -------- | ------------------- |
| pi\_123456789 | L1           | external | usd      | 2023-02-23 17:01:16 |
| pi\_123456789 | L2           | external | usd      | 2023-02-23 17:01:16 |
| pi\_123456789 | shipping     | external | usd      | 2023-02-23 17:01:16 |

When your customer pays, use the calculation ID to record the tax collected. You can do this in two ways:

- If your server has an endpoint where your customer submits their order, you can create the tax transaction after the order is successfully submitted.
- Listen for the [payment\_intent.succeeded](https://docs.stripe.com/api/events/types.md#event_types-payment_intent.succeeded) webhook event. Retrieve the calculation ID from the PaymentIntent `metadata`.

The example below creates a transaction and uses the PaymentIntent ID as the unique reference:

```curl
curl https://api.stripe.com/v1/tax/transactions/create_from_calculation \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d calculation={{TAX_CALCULATION}} \
  -d reference="{{PAYMENTINTENT_ID}}" \
  -d "expand[]"=line_items
```

Store the [tax transaction ID](https://docs.stripe.com/api/tax/transactions/object.md#tax_transaction_object-id) to record refunds later. You can store the transaction ID in your database or in the PaymentIntent’s metadata:

```curl
curl https://api.stripe.com/v1/payment_intents/{{PAYMENTINTENT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "metadata[tax_transaction]"={{TAX_TRANSACTION}}
```

## Record refunds \[Server-side]

After creating a tax transaction to record a sale to your customer, you might need to record refunds. These are also represented as tax transactions, with `type=reversal`. Reversal transactions offset an earlier transaction by having amounts with opposite signs. For example, a transaction that recorded a sale for 50 USD might later have a full reversal of -50 USD.

When you issue a refund (using Stripe or outside of Stripe), you must create a reversal tax transaction with a unique `reference`. Common strategies include:

- Append a suffix to the original reference. For example, if the original transaction has reference `pi_123456789`, then create the reversal transaction with reference `pi_123456789-refund`.
- Use the ID of the [Stripe refund](https://docs.stripe.com/api/refunds/object.md) or a refund ID from your system. For example, `re_3MoslRBUZ691iUZ41bsYVkOg` or `myRefund_456`.

Choose the approach that works best for how you reconcile your customer orders with your [tax exports](https://docs.stripe.com/tax/reports.md).

### Fully refund a sale

When you fully refund a sale in your system, create a reversal transaction with `mode=full`.

In the example below, `tax_1MEFAAI6rIcR421eB1YOzACZ` is the tax transaction that records the sale to your customer:

```curl
curl https://api.stripe.com/v1/tax/transactions/create_reversal \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d mode=full \
  -d original_transaction=tax_1MEFAAI6rIcR421eB1YOzACZ \
  -d reference=pi_123456789-cancel \
  -d "expand[]"=line_items
```

This returns the full reversal transaction that’s created:

```json
{
  "id": "tax_1MEFtXI6rIcR421e0KTGXvCK",
  "object": "tax.transaction",
  "created": 1670866467,
  "currency": "eur",
  "customer": null,
  "customer_details": {
    "address": {
      "city": null,
      "country": "IE",
      "line1": null,
      "line2": null,
      "postal_code": null,
      "state": null
    },
    "address_source": "billing",
    "ip_address": null,
    "tax_ids": [],
    "taxability_override": "none"
  },
  "line_items": {
    "object": "list",
    "data": [
      {
        "id": "tax_li_MyCIgTuP9F9mEU",
        "object": "tax.transaction_line_item",
        "amount": -4999,
        "amount_tax": -1150,
        "livemode": false,
        "metadata": {
        },
        "quantity": 1,
        "reference": "L1",
        "reversal": {
          "original_line_item": "tax_li_MyBXPByrSUwm6r"
        },
        "tax_behavior": "exclusive",
        "tax_code": "txcd_10000000",
        "type": "reversal"
      },
      {
        "id": "tax_li_MyCIUNXExXmJKU",
        "object": "tax.transaction_line_item",
        "amount": -1090,
        "amount_tax": -90,
        "livemode": false,
        "metadata": {
        },
        "quantity": 1,
        "reference": "L2",
        "reversal": {
          "original_line_item": "tax_li_MyBX3Wu3qd2mXj"
        },
        "tax_behavior": "exclusive",
        "tax_code": "txcd_10000000",
        "type": "reversal"
      }
    ],
    "has_more": false,
    "total_count": 2,
    "url": "/v1/tax/transactions/tax_1MEFtXI6rIcR421e0KTGXvCK/line_items"
  },
  "livemode": false,
  "metadata": {
  },
  "reference": "pi_123456789-cancel",
  "reversal": {
    "original_transaction": "tax_1MEFAAI6rIcR421eB1YOzACZ"
  },
  "shipping_cost": null,
  "tax_date": 1670863654,
  "type": "reversal"
}
```

Fully reversing a transaction doesn’t affect previous partial reversals. When you record a full reversal, make sure you [fully reverse](https://docs.stripe.com/tax/custom.md#reversals-void-refund) any previous partial reversals for the same transaction to avoid duplicate refunds.

### Partially refund a sale

After [issuing a refund](https://docs.stripe.com/api/refunds/create.md) to your customer, create a reversal tax transaction with `mode=partial`. This allows you to record a partial refund by providing the line item amounts refunded. You can create up to 30 partial reversals for each sale. Reversing more than the amount of tax you collected returns an error.

The example below records a refund of only the first line item in the original transaction:

```curl
curl https://api.stripe.com/v1/tax/transactions/create_reversal \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d mode=partial \
  -d original_transaction=tax_1MEFAAI6rIcR421eB1YOzACZ \
  -d reference=pi_123456789-refund_1 \
  -d "line_items[0][original_line_item]"=tax_li_MyBXPByrSUwm6r \
  -d "line_items[0][reference]"=L1 \
  -d "line_items[0][amount]"=-4999 \
  -d "line_items[0][amount_tax]"=-1150 \
  -d "metadata[refund]"="{{REFUND_ID}}" \
  --data-urlencode "metadata[refund_reason]"="Refunded line 1 of pi_123456789 (customer was unhappy)" \
  -d "expand[0]"=line_items
```

This returns the partial reversal transaction that’s created:

```json
{
  "id": "tax_1MEFACI6rIcR421eHrjXCSmD",
  "object": "tax.transaction",
  "created": 1670863656,
  "currency": "eur",
  ...
  "line_items": {
    "object": "list",
    "data": [
      {
        "id": "tax_li_MyBXC98AhtaR37",
        "object": "tax.transaction_line_item",
        "amount": -4999,
        "amount_tax": -1150,
        "livemode": false,
        "metadata": {
        },
        "quantity": 1,
        "reference": "L1",
        "reversal": {
          "original_line_item": "tax_li_MyBXPByrSUwm6r"
        },
        "tax_behavior": "exclusive",
        "tax_code": "txcd_10000000",
        "type": "reversal"
      }
    ],
    "has_more": false,
    "total_count": 1,
    "url": "/v1/tax/transactions/tax_1MEFACI6rIcR421eHrjXCSmD/line_items"
  },
  "livemode": false,
  "metadata": {
    "refund": "{{REFUND_ID}}",
    "description": "Refunding pi_123456789 (customer was unhappy)"
  },
  "reference": "pi_123456789-refund_1",
  "reversal": {
    "original_transaction": "tax_1MEFAAI6rIcR421eB1YOzACZ"
  },
  "shipping_cost": null,
  "tax_date": 1670863654,
  "type": "reversal"
}
```

For each line item reversed, you must provide the `amount` and `amount_tax` reversed. The `amount` is tax-inclusive if the original calculation line item was tax-inclusive.

How `amount` and `amount_tax` are determined depends on your situation:

- If your transactions always have a single line item, use [full reversals](https://docs.stripe.com/tax/custom.md#reversals-full) instead.
- If you always refund entire line items, use the original transaction line item `amount` and `amount_tax`, but with negative signs.
- If you refund parts of line items, you must calculate the amounts refunded. For example, for a sale transaction with `amount=5000` and `amount_tax=500`, after refunding half the line item, you create a partial reversal with line item `amount=-2500` and `amount_tax=-250`.

#### Tax reports with partial refunds

If you refund a tax amount such that the total tax is no longer proportional to the subtotal, your tax reporting can be unreliable. It won’t automatically adjust the taxable and nontaxable amounts, and won’t reflect the reason for the tax reversal (such as product exempt, customer exempt, or reverse charge). We recommend not refunding partial line item tax amounts. Instead, fully reverse the transaction and create a new one with appropriate inputs for an accurate tax calculation.

### Partially refund a sale by a flat amount

Alternatively, you can create a reversal with `mode=partial` by specifying a flat after-tax amount to refund. The amount distributes across each line item and shipping cost proportionally, depending on the remaining amount left to refund on each.

In the example below, the transaction has two line items: one 10 USD item and one 20 USD item, both taxed at 10%. The total amount of the transaction is 33.00 USD. A refund for a flat 16.50 USD is recorded:

```curl
curl https://api.stripe.com/v1/tax/transactions/create_reversal \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d mode=partial \
  -d original_transaction=tax_1NVcKqBUZ691iUZ4xMZtcGYt \
  -d reference=pi_234567890-refund_1 \
  -d flat_amount=-1650 \
  -d "metadata[refund]"="{{REFUND_ID}}" \
  --data-urlencode "metadata[refund_reason]"="Refunded 16.50 USD of pi_234567890 (customer was unhappy)" \
  -d "expand[]"=line_items
```

This returns the partial reversal transaction that’s created:

```json
{
  "id": "tax_1NVcQYBUZ691iUZ4SBPukGa6",
  "object": "tax.transaction",
  "created": 1689780994,
  "currency": "usd",
  ...
  "line_items": {
    "object": "list",
    "data": [
      {
        "id": "tax_li_OICqymcWjlbevq",
        "object": "tax.transaction_line_item",
        "amount": -500,
        "amount_tax": -50,
        "livemode": false,
        "metadata": {},
        "product": null,
        "quantity": 1,
        "reference": "refund_li_1",
        "reversal": {
          "original_line_item": "tax_li_OICmRXkFuWr8Df"
        },
        "tax_behavior": "exclusive",
        "tax_code": "txcd_10103000",
        "type": "reversal"
      },
      {
        "id": "tax_li_OICq2H1qHjwyzX",
        "object": "tax.transaction_line_item",
        "amount": -1000,
        "amount_tax": -100,
        "livemode": false,
        "metadata": {},
        "product": null,
        "quantity": 1,
        "reference": "refund_li_2",
        "reversal": {
          "original_line_item": "tax_li_OICmxhnSJxF7rY"
        },
        "tax_behavior": "exclusive",
        "tax_code": "txcd_10103000",
        "type": "reversal"
      }
    ],
    "has_more": false,
    "total_count": 2,
    "url": "/v1/tax/transactions/tax_1NVcQYBUZ691iUZ4SBPukGa6/line_items"
  },
  "livemode": false,
  "metadata": {
    "refund": "{{REFUND_ID}}",
    "description": "Refunding pi_234567890 (customer was unhappy)"
  },
  "reference": "pi_234567890-refund_1",
  "reversal": {
    "original_transaction": "tax_1NVcKqBUZ691iUZ4xMZtcGYt"
  },
  "shipping_cost": null,
  "tax_date": 1670863654,
  "type": "reversal"
}
```

For each line item and shipping cost in the original transaction, the refunded amounts and tax are calculated as follows:

1. First, we calculate the total remaining funds in the transaction available to refund. Because this transaction hasn’t had any other reversals recorded, the total amount is 33.00 USD.
2. Next, we calculate the total amount to refund for each line item. We base this calculation on the proportion of the item’s total available amount to refund versus the total remaining amount of the transaction. For example, the 10 USD item, which has 11.00 USD total remaining to refund, represents 33.33% of the transaction’s remaining total, so the total amount to refund is `-16.50 USD * 33.33% = -5.50 USD`.
3. Finally, the total amount to refund is divided between `amount` and `amount_tax`. We also do this proportionally, depending on how much tax is available to refund in the line item compared to the total funds left to refund. Using the 10 USD item example, tax (1.00 USD) represents 9.09% of the total remaining to refund (11.00 USD), so the `amount_tax` is `-5.50 USD * 9.09% = -0.50 USD`.

The flat amount distributes according to what’s *left* to refund in the transaction, not what was originally recorded. For example, instead of recording a refund for a flat 16.50 USD, you first record a partial reversal for the total amount of the 10 USD item:

```curl
curl https://api.stripe.com/v1/tax/transactions/create_reversal \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d mode=partial \
  -d original_transaction=tax_1NVcKqBUZ691iUZ4xMZtcGYt \
  -d reference=pi_234567890-refund_1 \
  -d "line_items[0][original_line_item]"=tax_li_OICmRXkFuWr8Df \
  -d "line_items[0][reference]"=partial_refund_l1 \
  -d "line_items[0][amount]"=-1000 \
  -d "line_items[0][amount_tax]"=-100 \
  -d "metadata[refund]"="{{REFUND_ID}}" \
  --data-urlencode "metadata[refund_reason]"="Refunded line 1 of pi_234567890 (customer was unhappy)" \
  -d "expand[0]"=line_items
```

After this, you record a 16.50 USD flat amount reversal:

```curl
curl https://api.stripe.com/v1/tax/transactions/create_reversal \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d mode=partial \
  -d original_transaction=tax_1NVcKqBUZ691iUZ4xMZtcGYt \
  -d reference=pi_234567890-refund_2 \
  -d flat_amount=-1650 \
  -d "metadata[refund]"="{{REFUND_ID}}" \
  --data-urlencode "metadata[refund_reason]"="Refunded 16.50 USD of pi_234567890 (customer was still unhappy)" \
  -d "expand[]"=line_items
```

This returns the partial reversal transaction:

```json
{
  "id": "tax_1NVxFIBUZ691iUZ4saOIloxB",
  "object": "tax.transaction",
  "created": 1689861020,
  "currency": "usd",
  ...
  "line_items": {
    "object": "list",
    "data": [
      {
        "id": "tax_li_OIYM8xd8BzrATd",
        "object": "tax.transaction_line_item",
        "amount": 0,
        "amount_tax": 0,
        "livemode": false,
        "metadata": {},
        "product": null,
        "quantity": 1,
        "reference": "refund_li_1",
        "reversal": {
          "original_line_item": "tax_li_OICmRXkFuWr8Df"
        },
        "tax_behavior": "exclusive",
        "tax_code": "txcd_10103000",
        "type": "reversal"
      },
      {
        "id": "tax_li_OIYMNBH6s8oQj9",
        "object": "tax.transaction_line_item",
        "amount": -1500,
        "amount_tax": -150,
        "livemode": false,
        "metadata": {},
        "product": null,
        "quantity": 1,
        "reference": "refund_li_2",
        "reversal": {
          "original_line_item": "tax_li_OICmxhnSJxF7rY"
        },
        "tax_behavior": "exclusive",
        "tax_code": "txcd_10103000",
        "type": "reversal"
      }
    ],
    "has_more": false,
    "total_count": 2,
    "url": "/v1/tax/transactions/tax_1NVxFIBUZ691iUZ4saOIloxB/line_items"
  },
  "livemode": false,
  "metadata": {},
  "reference": "pi_234567890-refund_2",
  "reversal": {
    "original_transaction": "tax_1NVcKqBUZ691iUZ4xMZtcGYt"
  },
  "shipping_cost": null,
  "tax_date": 1670863654,
  "type": "reversal"
}
```

Because the total amount remaining in the transaction is now 22.00 USD and the 10 USD item is completely refunded, the 16.50 USD distributes entirely to the 20 USD item. The 16.50 USD then distributes, using the logic from step 3, into `amount = -15.00 USD` and `amount_tax = -1.50 USD`. Meanwhile, the 10 USD item in the transaction records a refund of 0 USD.

### Undo a partial refund

Tax transactions are immutable, but you can cancel a partial refund by creating a [full reversal](https://docs.stripe.com/api/tax/transactions/create_reversal.md#tax_transaction_create_reversal-mode).

You might need to do this when:

- The payment [refund fails](https://docs.stripe.com/refunds.md#failed-refunds) and you haven’t provided the good or service to your customer
- The wrong order is refunded or the wrong amounts are refunded
- The original sale is fully refunded and the partial refunds are no longer valid

In the example below, `tax_1MEFACI6rIcR421eHrjXCSmD` is the transaction that represents the partial refund:

```curl
curl https://api.stripe.com/v1/tax/transactions/create_reversal \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d mode=full \
  -d original_transaction=tax_1MEFACI6rIcR421eHrjXCSmD \
  -d reference=pi_123456789-refund_1-cancel \
  -d "metadata[refund_reason]"="User called to cancel because they selected the wrong item" \
  -d "expand[]"=line_items
```

This returns the full reversal transaction that’s created:

```json
{
  "id": "tax_1MEFADI6rIcR421e94fNTOCK",
  "object": "tax.transaction",
  "created": 1670863657,
  "currency": "eur",
  ...
  "line_items": {
    "object": "list",
    "data": [
      {
        "id": "tax_li_MyBXMOlwenCyFB",
        "object": "tax.transaction_line_item",
        "amount": 4999,
        "amount_tax": 1150,
        "livemode": false,
        "metadata": {
        },
        "quantity": 1,
        "reference": "L1",
        "reversal": {
          "original_line_item": "tax_li_MyBXC98AhtaR37"
        },
        "tax_behavior": "exclusive",
        "tax_code": "txcd_10000000",
        "type": "reversal"
      }
    ],
    "has_more": false,
    "total_count": 1,
    "url": "/v1/tax/transactions/tax_1MEFADI6rIcR421e94fNTOCK/line_items"
  },
  "livemode": false,
  "metadata": {
    "refund_reason": "User called to cancel because they picked the wrong item"
  },
  "reference": "pi_123456789-refund_1-cancel",
  "reversal": {
    "original_transaction": "tax_1MEFACI6rIcR421eHrjXCSmD"
  },
  "shipping_cost": null,
  "tax_date": 1670863654,
  "type": "reversal"
}
```

## Testing

Use *sandboxes* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes), which is identical in response structure to live mode, to confirm your integration works correctly before going live.

> In testing environments, calculations aren’t guaranteed to return up-to-date taxation results. You’re limited to 1,000 tax calculations per day. If you need a higher limit, contact [Stripe support](https://support.stripe.com/contact). For guidance on automated testing and strategies to avoid rate limits in testing environments, see [Automated testing](https://docs.stripe.com/automated-testing.md).

## View tax transactions

You can view all tax transactions for your account on the [Tax Transactions](https://dashboard.stripe.com/test/tax/transactions) page in the Dashboard. Click an individual transaction to see a detailed breakdown of calculated tax by jurisdiction, and by the individual products included in the transaction.

> The Tax Transactions page only includes *transactions* and not *calculations*. If you expect to see a calculation and can’t find it on this page, verify that you successfully [created a tax transaction](https://docs.stripe.com/tax/custom.md#tax-transaction) from the calculation.

## Optional: Integration examples

You can calculate tax for your customer before collecting payment method details and [creating a PaymentIntent](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=paymentintents#web-create-intent). For example, you can display a shopping cart total when the customer provides their postal code.

In the example below, your server defines a `/preview-cart` endpoint, where the customer’s address is sent from your client-side form. The server combines the cart’s line items and the customer’s address to calculate tax.

#### Node.js

```javascript
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');
const express = require('express');
const app = express();

// Parse the request body as JSON.
app.use(express.json());

app.post('/preview-cart', async (req, res) => {
  const cart = ...; // Load the cart/order from your system

  // Convert each cart item to a Stripe line item object
  const lineItems = cart.items.map(
    cartItem => ({
      reference: cartItem.id,
      amount: cartItem.unitPrice * cartItem.quantity,
      quantity: cartItem.quantity
    })
  );

  // Get the customer's address from the request body
  const address = req.body.address;
// Create a tax calculation using the Stripe API
  const calculation = await stripe.tax.calculations.create({
    currency: cart.currency,
    line_items: lineItems,
    customer_details: {
      address: {
        line1: address.line1,
        city: address.city,
        state: address.state,
        postal_code: address.postal_code,
        country: address.country,
      },
      address_source: "billing"
    },
    expand: ['line_items.data.tax_breakdown']
  });

  // Return the tax amount as a JSON response
  res.json({
    tax_amount: calculation.tax_amount_exclusive
  });
});

app.listen(4242, () => {
  console.log('Running on port 4242');
});
```

When you’re ready to take payment, create a PaymentIntent from the tax calculation result. Store the tax calculation ID in the PaymentIntent’s [metadata](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-metadata) or in your own database, so you can create a tax transaction when your customer completes payment.

The example below shows a server endpoint that calculates tax, creates (or updates) a PaymentIntent, and returns the result to the client. You can then display the tax to your customer. Use the `client_secret` to [take the payment](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=paymentintents#web-collect-payment-details).

#### Node.js

```javascript
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');
const express = require('express');
const app = express();

// Parse the request body as JSON.
app.use(express.json());

app.post('/calculate-cart', async (req, res) => {
  const cart = ...; // Load the cart/order from your system

  // Create a tax calculation using the Stripe API
  const calculation = await stripe.tax.calculations.create(...);

  let paymentIntent;

  // Update the PaymentIntent if one already exists for this cart.
  if (cart.paymentIntent) {
    paymentIntent = await stripe.paymentIntents.update(cart.paymentIntent, {
      amount: calculation.amount_total,
      metadata: {tax_calculation: calculation.id},
    });
  } else {
    paymentIntent = await stripe.paymentIntents.create({
      currency: cart.currency,
      amount: calculation.amount_total,
      metadata: {tax_calculation: calculation.id},
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {enabled: true},
    });
  }

  // Store PaymentIntent ID in cart or customer session.
  cart.paymentIntent = paymentIntent.id;

  // Return calculated amounts and PaymentIntent secret to the client.
  res.json({
    total: calculation.amount_total,
    tax_amount: calculation.tax_amount_exclusive,
    client_secret: paymentIntent.client_secret
  });
});

app.listen(4242, () => {
  console.log('Running on port 4242');
});
```

If your integration uses the Payment Element, [fetch updates from the server](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=paymentintents#fetch-updates) after updating the PaymentIntent.

## Optional: Calculate tax on shipping costs \[Server-side]

To calculate tax on shipping costs, use the `shipping_cost` parameter:

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "customer_details[address][line1]"="920 5th Ave" \
  -d "customer_details[address][city]"=Seattle \
  -d "customer_details[address][state]"=WA \
  -d "customer_details[address][postal_code]"=98104 \
  -d "customer_details[address][country]"=US \
  -d "customer_details[address_source]"=shipping \
  -d "shipping_cost[amount]"=500 \
  -d "shipping_cost[tax_code]"=txcd_92010001
```

Pass the ID of an existing [ShippingRate](https://docs.stripe.com/api/shipping_rates/object.md) to use its `amount`, `tax_code`, and `tax_behavior`:

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "customer_details[address][line1]"="920 5th Ave" \
  -d "customer_details[address][city]"=Seattle \
  -d "customer_details[address][state]"=WA \
  -d "customer_details[address][postal_code]"=98104 \
  -d "customer_details[address][country]"=US \
  -d "customer_details[address_source]"=shipping \
  -d "shipping_cost[shipping_rate]"=shr_1Mlh8YI6rIcR421eUr9SJzAD
```

## Optional: Estimate taxes with an IP address \[Server-side]

If you provide your customer’s [IP address](https://docs.stripe.com/api/tax/calculations/create.md#calculate_tax-customer_details-ip_address), we geolocate it and use that location as your customer’s location. Use this to show your customer a tax estimate before they provide their postal address.

> Because the location of an IP address might be some distance from the actual customer location, we recommend against using an IP address to determine the *final* amount of tax to collect.

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "customer_details[ip_address]"="127.0.0.1"
```

## Optional: Collect customer tax IDs \[Server-side]

In some cases, such as the cross-border supply of services, your customer might need to account for tax on a [reverse charge](https://docs.stripe.com/tax/zero-tax.md#reverse-charges) basis. Instead of collecting the tax, you must issue an invoice with the text, “Tax to be paid on reverse charge basis.” This informs your customer that they’re responsible for any tax on their purchase.

Provide your customer’s [tax IDs](https://docs.stripe.com/api/tax/calculations/create.md#calculate_tax-customer_details-tax_ids) to automatically determine when reverse charge applies:

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "customer_details[address][country]"=IE \
  -d "customer_details[address_source]"=billing \
  -d "customer_details[tax_ids][0][type]"=eu_vat \
  -d "customer_details[tax_ids][0][value]"=DE123456789
```

If you provide a tax ID with an invalid format, the calculation returns a `tax_id_invalid` error code:

```json
{
  "error": {
    "code": "tax_id_invalid",
    "doc_url": "https://docs.stripe.com/error-codes#tax-id-invalid",
    "message": "Invalid value for eu_vat.",
    "param": "customer_details[tax_ids][0][value]",
    "type": "invalid_request_error"
  }
}
```

The Tax API doesn’t automatically validate tax IDs against government databases. To validate a tax ID before calculating tax, you must use [customer tax ID validation](https://docs.stripe.com/billing/customer/tax-ids.md#validation).

## Optional: Tax-inclusive pricing \[Server-side]

By default, tax is calculated on top of the line item and shipping cost amounts you provide. To calculate the tax included in your prices, set the `tax_behavior` to `inclusive` for the [line item](https://docs.stripe.com/api/tax/calculations/create.md#calculate_tax-line_items-tax_behavior) or [shipping cost](https://docs.stripe.com/api/tax/calculations/create.md#calculate_tax-shipping_cost-tax_behavior).

In the example below, the customer always pays 100 EUR:

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=eur \
  -d "line_items[0][amount]"=10000 \
  -d "line_items[0][reference]"=L1 \
  -d "line_items[0][tax_behavior]"=inclusive \
  -d "line_items[0][tax_code]"=txcd_10103000 \
  -d "customer_details[address][country]"=IE \
  -d "customer_details[address_source]"=billing
```

The response returns the tax included:

```json
{
  ...
  "amount_total": 10000,
  ...
  "tax_amount_exclusive": 0,"tax_amount_inclusive": 1870,
  "tax_breakdown": [
    {
      "amount": 1870,
      "inclusive": true,
      "tax_rate_details": {
        "country": "IE",
        "percentage_decimal": "23.0",
        "state": null,
        "tax_type": "vat"
      },
      "taxability_reason": "standard_rated",
      "taxable_amount": 8130
    }
  ],
  ...
}
```

## Optional: Use an existing Product object \[Server-side]

You can provide a [Product](https://docs.stripe.com/api/products/object.md) object for each line item. If the product has a [tax\_code](https://docs.stripe.com/api/products/object.md#product_object-tax_code), we use it as the line item’s `tax_code`, if it’s not already populated. We don’t use other product values, including the `tax_behavior` and `price`, during tax calculation.

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "line_items[0][product]"="{{PRODUCT_ID}}" \
  -d "customer_details[address][country]"=IE \
  -d "customer_details[address_source]"=billing
```

## Optional: Use an existing Account or Customer \[Server-side]

The tax calculation automatically uses the relevant [Customer](https://docs.stripe.com/api/customers/object.md) address and tax IDs according to the availability of customer data:

- The customer shipping address populates the calculation’s `customer_details.address`.
- Otherwise, the customer address populates the calculation’s `customer_details.address`.
- The customer IP address populates the calculation’s `customer_details.ip_address`.
- If the customer has tax exemption, it populates the calculation’s `customer_details.taxability_override`.
- The customer’s tax IDs populate the calculation’s `customer_details.tax_ids`.

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d customer="{{CUSTOMER_ID}}"
```

## Optional: Override customer taxability \[Server-side]

You don’t need to collect tax in certain cases, such as when your customer is tax-exempt. You can provide the tax exemption to Stripe Tax using the [taxability\_override](https://docs.stripe.com/api/tax/calculations/create.md#calculate_tax-customer_details-taxability_override) parameter.

To provide the customer taxability override to your calculations:

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "customer_details[address][line1]"="920 5th Ave" \
  -d "customer_details[address][city]"=Seattle \
  -d "customer_details[address][state]"=WA \
  -d "customer_details[address][postal_code]"=98104 \
  -d "customer_details[address][country]"=US \
  -d "customer_details[address_source]"=billing \
  -d "customer_details[taxability_override]"=customer_exempt
```

### Reverse charge

Some regions, such as the European Union, implement a “reverse charge” scheme where the customer is responsible for accounting for tax if they’re purchasing as a business. For Stripe Tax to apply the correct tax treatment, we recommend you collect [Tax IDs](https://docs.stripe.com/tax/custom.md#tax-ids) from your customers. Sometimes you might not have your customer’s tax IDs, or you’ve separately determined that the reverse charge scheme applies. In these types of scenarios, you can use `taxability_override` to force Stripe Tax to apply the reverse charge scheme.

To provide the customer taxability override to your calculations:

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=eur \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "customer_details[address][country]"=IE \
  -d "customer_details[address_source]"=billing \
  -d "customer_details[taxability_override]"=reverse_charge
```

## Optional: Specify a ship-from location \[Server-side]

If you ship goods from a location other than your main place of business, you can provide that address for tax calculations.

To provide a ship-from location, use the `ship_from_details` parameter. In this example, the user is based in Florida, their customer is based in Springfield, IL, and the user is shipping the goods from Naperville, IL:

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "line_items[0][tax_behavior]"=exclusive \
  -d "line_items[0][tax_code]"=txcd_99999999 \
  -d "customer_details[address][city]"=Springfield \
  -d "customer_details[address][state]"=IL \
  -d "customer_details[address][postal_code]"=62704 \
  -d "customer_details[address][country]"=US \
  -d "customer_details[address_source]"=billing \
  -d "ship_from_details[address][city]"=Naperville \
  -d "ship_from_details[address][state]"=IL \
  -d "ship_from_details[address][postal_code]"=60540 \
  -d "ship_from_details[address][country]"=US
```

The response returns the calculated tax based on the shipping origin of the order (Naperville, IL) instead of the destination (Springfield, IL) or the seller’s business origin:

```json
{
  ...
  "amount_total": 1078,
  ...
  "tax_amount_exclusive": 78,
  ...
  "tax_breakdown": [
    {
      "amount": 78,
      "inclusive": true,"tax_rate_details": {
        "country": "US",
        "percentage_decimal": "7.75",
        "state": "IL",
        "tax_type": "sales_tax"
      },
      "taxability_reason": "standard_rated",
      "taxable_amount": 1000
    }
  ],
  ...
}
```

To learn more about how we calculate taxes in these scenarios, see the [Stripe Tax documentation](https://docs.stripe.com/tax/calculating.md).

## Optional: Calculate the retail delivery fee \[Server-side]

Stripe Tax supports calculating the retail delivery fee in Minnesota and Colorado.

After you add a tax registration of the `state_retail_delivery_fee` type in the supported states, the retail delivery fee gets calculated on tax calculations.

```curl
curl https://api.stripe.com/v1/tax/registrations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d country=US \
  -d "country_options[us][state]"=CO \
  -d "country_options[us][type]"=state_retail_delivery_fee \
  -d active_from=now
```

To calculate the retail delivery fee, call the tax calculations API using a [physical item product tax code](https://docs.stripe.com/tax/tax-codes.md?type=physical), such as `txcd_30011000`, which represents Clothing and Footwear.

Not all physical items trigger calculation of the retail delivery fee. Refer to the state’s documentation for when the tax applies:

- [Retail Delivery Fee—Colorado](https://docs.stripe.com/tax/supported-countries/united-states/collect-tax.md?tax-jurisdiction-united-states=colorado#other-taxes)
- [Retail Delivery Fee—Minnesota](https://docs.stripe.com/tax/supported-countries/united-states/collect-tax.md?tax-jurisdiction-united-states=minnesota#other-taxes)

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "line_items[0][tax_behavior]"=exclusive \
  -d "line_items[0][tax_code]"=txcd_30011000 \
  -d "shipping_cost[amount]"=400 \
  -d "customer_details[address][line1]"="1437 Bannock St Room 451" \
  -d "customer_details[address][city]"=Springfield \
  -d "customer_details[address][state]"=CO \
  -d "customer_details[address][postal_code]"=80202 \
  -d "customer_details[address][country]"=US \
  -d "customer_details[address_source]"=shipping
```

The response returns the calculated tax with the retail delivery fee for Colorado. It’s an additional entry in the `tax_breakdown` object, with`tax_breakdown.tax_rate_details.rate_type` set to `flat_amount`:

```json
{
  ...
  "amount_total": 2165,
  ...
  "tax_amount_exclusive": 165,
  ...
  "tax_breakdown": [
    {
      "amount": 88,
      "inclusive": false,
      "tax_rate_details": {
        "percentage_decimal": "8.81",
        "rate_type": "percentage",
        "tax_type": "sales_tax",
        ...
      },
      "taxability_reason": "standard_rated",
      "taxable_amount": 1000
    },
    ...
    {
      "amount": 29,
      "inclusive": false,"tax_rate_details": {
        "flat_amount": {
          "amount": 29,
          "currency": "usd"
        },
        "percentage_decimal": "0.0",
        "rate_type": "flat_amount",
        "tax_type": "retail_delivery_fee",
        ...
      },
      "taxability_reason": "standard_rated",
      "taxable_amount": 1000
    }
  ],
  ...
}
```

## Optional: Detailed line item tax breakdowns \[Server-side]

The top-level [tax\_breakdown](https://docs.stripe.com/api/tax/calculations/object.md#tax_calculation_object-tax_breakdown) is always returned and provides a simple breakdown that’s suitable for displaying a list of taxes at checkout or on a receipt.

You can use the [taxability\_reason](https://docs.stripe.com/api/tax/calculations/object.md#tax_calculation_object-line_items-data-tax_breakdown-taxability_reason) to understand why tax isn’t applied while building your integration. For example, `not_collecting` doesn’t collect tax in the country or state where tax would be due. Adding [tax registrations](https://docs.stripe.com/tax/set-up.md#add-registrations) to your account settings tells Stripe where you’re collecting tax. If you added registration for Washington, the taxability reason displayed in your result is `standard_rated`, which indicates that the product is taxed at the standard rate.

Expand the line item [tax\_breakdown](https://docs.stripe.com/api/tax/calculations/object.md#tax_calculation_object-line_items-data-tax_breakdown) attribute to get a detailed breakdown, including local taxes and attributes that explain the reason for each tax.

- The `tax_type` field from [tax\_rate\_details](https://docs.stripe.com/api/tax/calculations/object.md#tax_calculation_object-line_items-data-tax_breakdown-tax_rate_details) is a high-level tax type indication that might not always match the type returned in reports and transaction exports. For example, it doesn’t distinguish between US sales tax and US use tax.
- Use the `display_name` field from [tax\_rate\_details](https://docs.stripe.com/api/tax/calculations/object.md#tax_calculation_object-line_items-data-tax_breakdown-tax_rate_details) in your Checkout flow to show all of the taxes. The taxes are localized based on customer location and product tax information. For example, if VAT is applied for Germany because the customer is in Germany and the product is taxed at the destination, such as [txcd\_10103001: Software as a service (SaaS) for business use](https://docs.stripe.com/tax/tax-codes.md?tax_code=txcd_10103001), we show `Umsatzsteuer (USt)`, which is the German representation for VAT. If VAT is applied for France because the head office address is set to France and the product is taxed at the origin, such as [txcd\_20030000: General - Services](https://docs.stripe.com/tax/tax-codes.md?tax_code=txcd_20030000), we show `Taxe sur la valeur ajoutée (TVA)`, which is the French representation of VAT.

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "customer_details[address][line1]"="920 5th Ave" \
  -d "customer_details[address][city]"=Seattle \
  -d "customer_details[address][state]"=WA \
  -d "customer_details[address][postal_code]"=98104 \
  -d "customer_details[address][country]"=US \
  -d "customer_details[address_source]"=shipping \
  -d "expand[0]"="line_items.data.tax_breakdown"
```

```json
{
  ...
  "tax_breakdown": [
    {
      "amount": 103,
      "inclusive": false,
      "tax_rate_details": {
        "country": "US",
        "percentage_decimal": "10.25",
        "state": "WA",
        "tax_type": "sales_tax"
      },"taxability_reason": "standard_rated",
      "taxable_amount": 1000
    }
  ],
  "line_items": {
    "object": "list",
    "data": [
      {
        "id": "tax_li_O84jA8hvV7ZyAa",
        "object": "tax.calculation_line_item",
        "amount": 1000,
        "amount_tax": 103,
        "product": null,
        "quantity": 1,
        "reference": "L1",
        "tax_behavior": "exclusive",
        "tax_breakdown": [
          {
            "amount": 65,
            "jurisdiction": {
              "country": "US",
              "display_name": "Washington",
              "level": "state",
              "state": "WA"
            },
            "sourcing": "destination",
            "tax_rate_details": {
              "display_name": "Retail Sales and Use Tax",
              "percentage_decimal": "6.5",
              "tax_type": "sales_tax"
            },"taxability_reason": "standard_rated",
            "taxable_amount": 1000
          },
          {
            "amount": 0,
            "jurisdiction": {
              "country": "US",
              "display_name": "KING",
              "level": "county",
              "state": "WA"
            },
            "sourcing": "destination",
            "tax_rate_details": null,"taxability_reason": "not_subject_to_tax",
            "taxable_amount": 0
          },
          {
            "amount": 22,
            "jurisdiction": {
              "country": "US",
              "display_name": "SEATTLE",
              "level": "city",
              "state": "WA"
            },
            "sourcing": "destination",
            "tax_rate_details": {
              "display_name": "Local Sales and Use Tax",
              "percentage_decimal": "2.2",
              "tax_type": "sales_tax"
            },"taxability_reason": "standard_rated",
            "taxable_amount": 1000
          },
          {
            "amount": 14,
            "jurisdiction": {
              "country": "US",
              "display_name": "REGIONAL TRANSIT AUTHORITY",
              "level": "district",
              "state": "WA"
            },
            "sourcing": "destination",
            "tax_rate_details": {
              "display_name": "Local Sales and Use Tax",
              "percentage_decimal": "1.4",
              "tax_type": "sales_tax"
            },"taxability_reason": "standard_rated",
            "taxable_amount": 1000
          },
          {
            "amount": 2,
            "jurisdiction": {
              "country": "US",
              "display_name": "SEATTLE TRANSPORTATION BENEFIT DISTRICT",
              "level": "district",
              "state": "WA"
            },
            "sourcing": "destination",
            "tax_rate_details": {
              "display_name": "Local Sales and Use Tax",
              "percentage_decimal": "0.15",
              "tax_type": "sales_tax"
            },"taxability_reason": "standard_rated",
            "taxable_amount": 1000
          }
        ],
        "tax_code": "txcd_10000000"
      }
    ],
    "has_more": false,
    "total_count": 1,
    "url": "/v1/tax/calculations/taxcalc_1NLoZvBUZ691iUZ4z4cTW6tQ/line_items"
  },
  ...
}
```

## Optional: Troubleshoot common errors \[Server-side]

Follow the steps below to troubleshoot errors in your tax integration.

### Resolve invalid tax code errors

If you receive an `Invalid tax code` error, refer to the [Product tax codes](https://docs.stripe.com/tax/tax-codes.md) for a list of available tax codes. Then, follow these steps to resolve the issue:

1. **Check the tax code**: Make sure you’re using a valid tax code from the [list of available tax codes](https://docs.stripe.com/tax/tax-codes.md). Common mistakes include:

   - Using an empty string or `null` as the tax code
   - Misspelling the tax code
   - Using a non-existent tax code

2. **Update your code**: Make sure you pass a valid tax code when creating a `TaxCalculation`. For example:

   ```curl
   curl https://api.stripe.com/v1/tax/calculations \
     -u "<<YOUR_SECRET_KEY>>:" \
     -d currency=usd \
     -d "line_items[0][amount]"=1000 \
     -d "line_items[0][reference]"=L1 \
     -d "line_items[0][tax_code]"=txcd_10000000 \
     -d "customer_details[address][line1]"="354 Oyster Point Blvd" \
     -d "customer_details[address][city]"="South San Francisco" \
     -d "customer_details[address][state]"=CA \
     -d "customer_details[address][postal_code]"=94080 \
     -d "customer_details[address][country]"=US \
     -d "customer_details[address_source]"=shipping
   ```

3. **Use the default tax code**: Stripe Tax uses a default tax code for calculations when a specific tax code isn’t provided for a product or in a tax calculation request. You can view and update the default value in your tax settings.

   Use the API to update the default tax code:

   ```curl
   curl https://api.stripe.com/v1/tax/settings \
     -u "<<YOUR_SECRET_KEY>>:" \
     -d "defaults[tax_code]"=txcd_10000000
   ```

4. **Review your product catalog**: If you use tax codes associated with products in your Stripe product catalog, make sure the tax codes are correctly assigned to your products.

5. **Check for data inconsistencies**: Make sure the tax code is correctly passed from your database or front end to your server-side code that makes the API call to Stripe.

For more accurate tax calculations, use the most specific tax code that applies to your product or service. If you’re unsure which tax code to use, consult the [tax codes documentation](https://docs.stripe.com/tax/tax-codes.md).

If you continue to experience issues, review the [Tax Settings API documentation](https://docs.stripe.com/api/tax/settings.md).

## Collect customer tax IDs

Displaying a customer’s tax ID and legal business name on *invoices* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice) is a common requirement. You can use the [Tax ID Element](https://docs.stripe.com/elements/tax-id-element.md) to collect this information. This feature is in [public preview](https://docs.stripe.com/release-phases.md).

> #### Disclaimer
>
> The Payment Intents API is designed to collect business tax IDs, which might have formats similar to personal tax IDs in certain jurisdictions. You must make sure that only business tax IDs, as designated for this field, are provided when using this feature.

### Enable the beta

The Tax ID Element with the Payment Intents API requires you to enable the `elements_tax_id_1` beta. Add the beta to your Stripe.js initialization:

```javascript
const stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>', {
  betas: ['elements_tax_id_1'],
});
```

### Create a CustomerSession (optional)

To save tax IDs and redisplay them for returning customers, create a [CustomerSession](https://docs.stripe.com/api/customer_sessions.md), which provides secure, temporary access to customer data without exposing your secret API key to the client.

If you don’t use `CustomerSession`, the Tax ID Element still works but without save and redisplay functionality. You can use [getValue](https://docs.stripe.com/js/elements_object/get_value_tax_id_element) to read the tax ID values from the element and handle them manually.

#### Customer v1

Create or retrieve a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments):

```curl
curl https://api.stripe.com/v1/customers \
  -u "<<YOUR_SECRET_KEY>>:" \
  --data-urlencode email="customer@example.com" \
  -d name="Jenny Rosen"
```

Create a `CustomerSession` with the Tax ID Element component enabled:

```curl
curl https://api.stripe.com/v1/customer_sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Version: 2026-03-04.preview" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "components[tax_id_element][enabled]"=true \
  -d "components[tax_id_element][features][tax_id_redisplay]"=enabled \
  -d "components[tax_id_element][features][tax_id_save]"=enabled
```

The `CustomerSession` returns a `client_secret` that you’ll pass to the client side.

### Create a PaymentIntent or SetupIntent

Create a [PaymentIntent](https://docs.stripe.com/api/payment_intents.md) or [SetupIntent](https://docs.stripe.com/api/setup_intents.md) on your server. When using `CustomerSession`, include the customer reference parameter to enable tax ID save and redisplay functionality:

#### Customer v1

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d customer="{{CUSTOMER_ID}}"
```

> You don’t need to include any tax-ID-specific parameters when creating the Payment Intent or Setup Intent. The Tax ID Element automatically handles tax ID collection and saves it to the *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments) when using a Customer Session with the appropriate permissions.

### Initialize Elements

Create an Elements instance using the `clientSecret` from your PaymentIntent or SetupIntent.

To enable saving tax IDs to a Customer and redisplaying them for returning customers, include the `customerSessionClientSecret`:

```javascript
const stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>', {
  betas: ['elements_tax_id_1'],
});

// Fetch the clientSecret from your server
const {clientSecret} = await fetch('/create-payment-intent', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
}).then((res) => res.json());

// Fetch the customerSessionClientSecret from your server
const {customerSessionClientSecret} = await fetch('/create-customer-session', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
}).then((res) => res.json());

const elements = stripe.elements({
  clientSecret,customerSessionClientSecret,
  appearance: { /* ... */ }
});
```

### Create and mount the Tax ID Element

Create an instance of the Tax ID Element and mount it to your page:

```html
<form id="payment-form">
  <div id="tax-id-element">
    <!--Stripe.js injects the Tax ID Element-->
  </div>
  <button type="submit">Pay</button>
</form>
```

```javascript
const taxIdElement = elements.create('taxId', {
  visibility: 'auto', // 'auto' | 'always' | 'never'
});
taxIdElement.mount('#tax-id-element');
```

You can customize the Tax ID Element with options such as `visibility`, `fields`, and `validation`. See [Create a Tax ID Element](https://docs.stripe.com/js/elements_object/create_tax_id_element) for more details.

### Use with Address Element (optional)

When you use the Tax ID Element with the [Address Element](https://docs.stripe.com/elements/address-element.md), Stripe automatically determines the tax ID type and element visibility based on the customer’s address.

### Complete the payment

When the customer submits the payment form, call [confirmPayment](https://docs.stripe.com/js/payment_intents/confirm_payment) or [confirmSetup](https://docs.stripe.com/js/setup_intents/confirm_setup). Stripe automatically includes the tax ID information and saves it to the Customer if the payment succeeds:

```javascript
const form = document.getElementById('payment-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const {error} = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: 'https://example.com/order/complete',
    },
  });

  if (error) {
    // Handle error
    console.error(error.message);
  }
  // Customer gets redirected to return_url if successful
});
```

You can also use [getValue](https://docs.stripe.com/js/elements_object/get_value_tax_id_element) on the client side to read the tax ID values before submitting the payment.

### Test your integration

In testing environments, you can enter any alphanumeric string that is in the correct format of a supported tax ID type (for example, `DE123456789` for `eu_vat`). For a full list of example tax IDs you can reference our [Customer Tax ID guide](https://docs.stripe.com/billing/customer/tax-ids.md#supported-tax-id). You can also use our [test tax IDs](https://docs.stripe.com/connect/testing.md#test-business-tax-ids) to test various verification state flows.

### Tax ID validation

During payment or setup confirmation, Stripe verifies that the provided tax IDs are formatted correctly, but not that they’re valid. You’re responsible for ensuring the validity of customer information. To help, Stripe automatically performs asynchronous validation against government databases for [Australian Business Numbers (ABNs)](https://docs.stripe.com/tax/invoicing/tax-ids.md#australian-business-numbers-abn), [European Value Added Tax](https://docs.stripe.com/tax/invoicing/tax-ids.md#european-value-added-tax-eu-vat-numbers) (EU VAT), and [United Kingdom Value Added Tax](https://docs.stripe.com/tax/invoicing/tax-ids.md#united-kingdom-value-added-tax-gb-vat-numbers) (GB VAT) numbers. Learn more about the [validation we perform](https://docs.stripe.com/tax/invoicing/tax-ids.md#validation), and how to consume the status of those checks.

### Supported Tax ID types

The Tax ID Element supports tax ID collection in the following countries and regions:

| Country | Enum       | Description                                                                 | Example              | Impact in Tax Calculation\* |
| ------- | ---------- | --------------------------------------------------------------------------- | -------------------- | -------------------------- |
| AE      | ae\_trn     | United Arab Emirates TRN                                                    | 123456789012345      | Yes                        |
| AL      | al\_tin     | Albania Tax Identification Number                                           | J12345678N           | Yes                        |
| AM      | am\_tin     | Armenia Tax Identification Number                                           | 02538904             | Yes                        |
| AO      | ao\_tin     | Angola Tax Identification Number                                            | 5123456789           | No                         |
| AT      | eu\_vat     | European VAT number                                                         | ATU12345678          | Yes                        |
| AU      | au\_abn     | Australian Business Number (AU ABN)                                         | 12345678912          | Yes                        |
| AW      | aw\_tin     | Aruba Tax Identification Number                                             | 12345678             | Yes                        |
| AZ      | az\_tin     | Azerbaijan Tax Identification Number                                        | 0123456789           | Yes                        |
| BA      | ba\_tin     | Bosnia and Herzegovina Tax Identification Number                            | 123456789012         | Yes                        |
| BB      | bb\_tin     | Barbados Tax Identification Number                                          | 1123456789012        | No                         |
| BD      | bd\_bin     | Bangladesh Business Identification Number                                   | 123456789-0123       | Yes                        |
| BE      | eu\_vat     | European VAT number                                                         | BE0123456789         | Yes                        |
| BF      | bf\_ifu     | Burkina Faso Tax Identification Number (Numéro d'Identifiant Fiscal Unique) | 12345678A            | Yes                        |
| BG      | eu\_vat     | European VAT number                                                         | BG0123456789         | Yes                        |
| BH      | bh\_vat     | Bahraini VAT Number                                                         | 123456789012345      | Yes                        |
| BJ      | bj\_ifu     | Benin Tax Identification Number (Identifiant Fiscal Unique)                 | 1234567890123        | Yes                        |
| BS      | bs\_tin     | Bahamas Tax Identification Number                                           | 123.456.789          | No                         |
| BY      | by\_tin     | Belarus TIN Number                                                          | 123456789            | Yes                        |
| CA      | ca\_bn      | Canadian BN                                                                 | 123456789            | No                         |
| CA      | ca\_gst\_hst | Canadian GST/HST number                                                     | 123456789RT0002      | Yes                        |
| CA      | ca\_pst\_bc  | Canadian PST number (British Columbia)                                      | PST-1234-5678        | No                         |
| CA      | ca\_pst\_mb  | Canadian PST number (Manitoba)                                              | 123456-7             | No                         |
| CA      | ca\_pst\_sk  | Canadian PST number (Saskatchewan)                                          | 1234567              | No                         |
| CA      | ca\_qst     | Canadian QST number (Québec)                                                | 1234567890TQ1234     | Yes                        |
| CD      | cd\_nif     | Congo (DR) Tax Identification Number (Número de Identificação Fiscal)       | A0123456M            | No                         |
| CH      | ch\_vat     | Switzerland VAT number                                                      | CHE-123.456.789 MWST | Yes                        |
| CL      | cl\_tin     | Chilean TIN                                                                 | 12.345.678-K         | Yes                        |
| CM      | cm\_niu     | Cameroon Tax Identification Number (Numéro d'Identifiant fiscal Unique)     | M123456789000L       | No                         |
| CR      | cr\_tin     | Costa Rican tax ID                                                          | 1-234-567890         | No                         |
| CV      | cv\_nif     | Cape Verde Tax Identification Number (Número de Identificação Fiscal)       | 213456789            | No                         |
| CY      | eu\_vat     | European VAT number                                                         | CY12345678Z          | Yes                        |
| CZ      | eu\_vat     | European VAT number                                                         | CZ1234567890         | Yes                        |
| DE      | eu\_vat     | European VAT number                                                         | DE123456789          | Yes                        |
| DK      | eu\_vat     | European VAT number                                                         | DK12345678           | Yes                        |
| EC      | ec\_ruc     | Ecuadorian RUC number                                                       | 1234567890001        | No                         |
| EE      | eu\_vat     | European VAT number                                                         | EE123456789          | Yes                        |
| EG      | eg\_tin     | Egyptian Tax Identification Number                                          | 123456789            | Yes                        |
| ES      | es\_cif     | Spanish NIF number (previously Spanish CIF number)                          | A12345678            | No                         |
| ES      | eu\_vat     | European VAT number                                                         | ESA1234567Z          | Yes                        |
| ET      | et\_tin     | Ethiopia Tax Identification Number                                          | 1234567890           | Yes                        |
| FI      | eu\_vat     | European VAT number                                                         | FI12345678           | Yes                        |
| FR      | eu\_vat     | European VAT number                                                         | FRAB123456789        | Yes                        |
| GB      | eu\_vat     | Northern Ireland VAT number                                                 | XI123456789          | Yes                        |
| GB      | gb\_vat     | United Kingdom VAT number                                                   | GB123456789          | Yes                        |
| GE      | ge\_vat     | Georgian VAT                                                                | 123456789            | Yes                        |
| GN      | gn\_nif     | Guinea Tax Identification Number (Número de Identificação Fiscal)           | 123456789            | Yes                        |
| GR      | eu\_vat     | European VAT number                                                         | EL123456789          | Yes                        |
| HR      | eu\_vat     | European VAT number                                                         | HR12345678912        | Yes                        |
| HU      | eu\_vat     | European VAT number                                                         | HU12345678           | Yes                        |
| HU      | hu\_tin     | Hungary tax number (adószám)                                                | 12345678-1-23        | No                         |
| IE      | eu\_vat     | European VAT number                                                         | IE1234567AB          | Yes                        |
| IN      | in\_gst     | Indian GST number                                                           | 12ABCDE3456FGZH      | Yes                        |
| IS      | is\_vat     | Icelandic VAT                                                               | 123456               | Yes                        |
| IT      | eu\_vat     | European VAT number                                                         | IT12345678912        | Yes                        |
| KE      | ke\_pin     | Kenya Revenue Authority Personal Identification Number                      | P000111111A          | No                         |
| KG      | kg\_tin     | Kyrgyzstan Tax Identification Number                                        | 12345678901234       | No                         |
| KH      | kh\_tin     | Cambodia Tax Identification Number                                          | 1001-123456789       | Yes                        |
| KR      | kr\_brn     | Korean BRN                                                                  | 123-45-67890         | Yes                        |
| KZ      | kz\_bin     | Kazakhstani Business Identification Number                                  | 123456789012         | Yes                        |
| LA      | la\_tin     | Laos Tax Identification Number                                              | 123456789-000        | No                         |
| LI      | li\_vat     | Liechtensteinian VAT number                                                 | 12345                | Yes                        |
| LK      | lk\_vat     | Sri Lanka VAT number                                                        | 123456789-1234       | Yes                        |
| LT      | eu\_vat     | European VAT number                                                         | LT123456789123       | Yes                        |
| LU      | eu\_vat     | European VAT number                                                         | LU12345678           | Yes                        |
| LV      | eu\_vat     | European VAT number                                                         | LV12345678912        | Yes                        |
| MA      | ma\_vat     | Morocco VAT Number                                                          | 12345678             | Yes                        |
| MD      | md\_vat     | Moldova VAT Number                                                          | 1234567              | Yes                        |
| ME      | me\_pib     | Montenegro PIB Number                                                       | 12345678             | No                         |
| MK      | mk\_vat     | North Macedonia VAT Number                                                  | MK1234567890123      | Yes                        |
| MR      | mr\_nif     | Mauritania Tax Identification Number (Número de Identificação Fiscal)       | 12345678             | No                         |
| MT      | eu\_vat     | European VAT number                                                         | MT12345678           | Yes                        |
| MX      | mx\_rfc     | Mexican RFC number                                                          | ABC010203AB9         | No                         |
| NG      | ng\_tin     | Nigerian Tax Identification Number                                          | 12345678-0001        | No                         |
| NL      | eu\_vat     | European VAT number                                                         | NL123456789B12       | Yes                        |
| NO      | no\_vat     | Norwegian VAT number                                                        | 123456789MVA         | Yes                        |
| NP      | np\_pan     | Nepal PAN Number                                                            | 123456789            | Yes                        |
| NZ      | nz\_gst     | New Zealand GST number                                                      | 123456789            | Yes                        |
| OM      | om\_vat     | Omani VAT Number                                                            | OM1234567890         | Yes                        |
| PE      | pe\_ruc     | Peruvian RUC number                                                         | 12345678901          | Yes                        |
| PH      | ph\_tin     | Philippines Tax Identification Number                                       | 123456789012         | Yes                        |
| PL      | eu\_vat     | European VAT number                                                         | PL1234567890         | Yes                        |
| PL      | pl\_nip     | Polish NIP number                                                           | 1234567890           | No                         |
| PT      | eu\_vat     | European VAT number                                                         | PT123456789          | Yes                        |
| RO      | eu\_vat     | European VAT number                                                         | RO1234567891         | Yes                        |
| RS      | rs\_pib     | Serbian PIB number                                                          | 123456789            | No                         |
| RU      | ru\_inn     | Russian INN                                                                 | 1234567891           | Yes                        |
| RU      | ru\_kpp     | Russian KPP                                                                 | 123456789            | Yes                        |
| SA      | sa\_vat     | Saudi Arabia VAT                                                            | 123456789012345      | Yes                        |
| SE      | eu\_vat     | European VAT number                                                         | SE123456789123       | Yes                        |
| SG      | sg\_gst     | Singaporean GST                                                             | M12345678X           | Yes                        |
| SI      | eu\_vat     | European VAT number                                                         | SI12345678           | Yes                        |
| SK      | eu\_vat     | European VAT number                                                         | SK1234567891         | Yes                        |
| SN      | sn\_ninea   | Senegal NINEA Number                                                        | 12345672A2           | No                         |
| SR      | sr\_fin     | Suriname FIN Number                                                         | 1234567890           | Yes                        |
| TH      | th\_vat     | Thai VAT                                                                    | 1234567891234        | Yes                        |
| TJ      | tj\_tin     | Tajikistan Tax Identification Number                                        | 123456789            | Yes                        |
| TR      | tr\_tin     | Turkish Tax Identification Number                                           | 0123456789           | Yes                        |
| TW      | tw\_vat     | Taiwanese VAT                                                               | 12345678             | Yes                        |
| TZ      | tz\_vat     | Tanzania VAT Number                                                         | 12345678A            | Yes                        |
| UA      | ua\_vat     | Ukrainian VAT                                                               | 123456789            | Yes                        |
| UG      | ug\_tin     | Uganda Tax Identification Number                                            | 1014751879           | Yes                        |
| UY      | uy\_ruc     | Uruguayan RUC number                                                        | 123456789012         | Yes                        |
| UZ      | uz\_tin     | Uzbekistan TIN Number                                                       | 123456789            | No                         |
| UZ      | uz\_vat     | Uzbekistan VAT Number                                                       | 123456789012         | Yes                        |
| ZA      | za\_vat     | South African VAT number                                                    | 4123456789           | Yes                        |
| ZM      | zm\_tin     | Zambia Tax Identification Number                                            | 1004751879           | No                         |
| ZW      | zw\_tin     | Zimbabwe Tax Identification Number                                          | 1234567890           | No                         |

\*Stripe Tax won't apply tax if this tax ID is provided, in line with the relevant laws.

### Use tax IDs in calculations (optional)

In some cases, such as the cross-border supply of services, your customer might need to account for tax on a [reverse charge](https://docs.stripe.com/tax/zero-tax.md#reverse-charges) basis. Instead of collecting the tax, you must issue an invoice with the text, “Tax to be paid on reverse charge basis.”

When you provide your customer’s [tax IDs](https://docs.stripe.com/api/tax/calculations/create.md#calculate_tax-customer_details-tax_ids) to Stripe Tax, we automatically determine when reverse charge applies:

```curl
curl https://api.stripe.com/v1/tax/calculations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d "line_items[0][amount]"=1000 \
  -d "line_items[0][reference]"=L1 \
  -d "customer_details[address][country]"=IE \
  -d "customer_details[address_source]"=billing \
  -d "customer_details[tax_ids][0][type]"=eu_vat \
  -d "customer_details[tax_ids][0][value]"=DE123456789
```

If you provide a tax ID with an invalid format, the calculation returns a `tax_id_invalid` error code.

## See also

- [Use Stripe Tax with Connect](https://docs.stripe.com/tax/connect.md)
