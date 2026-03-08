# Manual currency prices

Present local currencies to customers with manual currency prices.

# Stripe-hosted page

> This is a Stripe-hosted page for when payment-ui is stripe-hosted. View the full page at https://docs.stripe.com/payments/checkout/localize-prices/manual-currency-prices?payment-ui=stripe-hosted.

Stripe supports manually defining prices in different currencies when creating [products](https://docs.stripe.com/products-prices/overview.md#get-started). However, Stripe recommends using [Adaptive Pricing](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md) instead of manual currency prices to reduce currency exchange rate fluctuation risk and to automatically enable support for over 100 local currencies.

Use manual currency prices instead of Adaptive Pricing when:

- Adaptive Pricing isn’t [supported](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md#restrictions) for your business or Checkout configuration.
- You’re supporting a region where you’re comfortable taking on fluctuations in the currency’s exchange rate.

Manually defined multi-currency prices override Adaptive Pricing for those currencies, even if it’s enabled.

## Create a multi-currency price \[Dashboard] \[Server-side]

#### Dashboard

1. Go to a product in the [Dashboard](https://dashboard.stripe.com/products?active=true).
2. Click  **+Add another price** to create a new price.
3. Fill in the price and select a currency. This first currency is the price’s default currency. Make sure all of your prices have the same default currency.
4. Click **+Add a price by currency** to search and select from supported currencies, adding them to your price.
5. Use the multi-currency price you created by passing its ID into [line items](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-price) when you create a Checkout Session.

#### API

Add multiple currencies to a Price by specifying `currency_options` when using the [Prices API](https://docs.stripe.com/api/prices/object.md#price_object-currency_options).

```curl
curl https://api.stripe.com/v1/prices \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d unit_amount=1000 \
  -d "currency_options[eur][unit_amount]"=950 \
  -d "currency_options[jpy][unit_amount]"=1500 \
  -d "product_data[name]"="My Product"
```

In this example, the Price is created in USD, with additional currency options in EUR and JPY.

## Create a Checkout Session \[Server-side]

Create a Checkout Session using the multi-currency price:

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

## Testing \[Server-side] \[Client-side]

To test local currency presentment for Checkout, Payment Links, and the [pricing table](https://docs.stripe.com/payments/checkout/pricing-table.md), pass in a location-formatted customer email that includes a suffix in a `+location_XX` format in the local part of the email. `XX` must be a valid [two-letter ISO country code](https://www.nationsonline.org/oneworld/country_code_list.htm).

For example, to test currency presentment for a customer in France, pass in an email such as `test+location_FR@example.com`.

When you visit the URL for a Checkout Session, Payment Link, or pricing table created with a location-formatted email, you see the same currency as a customer does in the specified country.

### Testing Checkout

When you create a Checkout Session, pass the location-formatted email as [customer\_email](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-customer_email) to simulate Checkout from a particular country.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d success_url="https://example.com/success" \
  --data-urlencode customer_email="test+location_FR@example.com"
```

You can also create a [Customer](https://docs.stripe.com/api/customers/create.md) and specify their email that contains the `+location_XX` suffix. Stripe test cards work as usual.

When it’s possible to present the customer’s local currency in Checkout, the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md) object changes. Fields like `currency`, `payment_method_types`, and `amount_total` reflect the local currency and price.

### Testing Payment Links

For Payment Links, pass the location-formatted email as the `prefilled_email` [URL parameter](https://docs.stripe.com/payment-links/customize.md#customize-checkout-with-url-parameters) to test currency presentment for customers in different countries.

### Testing Pricing table

For the pricing table, pass the location-formatted email as the [customer-email](https://docs.stripe.com/payments/checkout/pricing-table.md#customer-email) attribute to test currency presentment for customers in different countries.

## Optional: Specify a currency \[Server-side]

When you use multi-currency Prices in a Session, Checkout automatically handles currency localization for your customers. However, you can override this behavior by specifying a currency when you create the Checkout Session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=eur \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

In this example, the Checkout Session’s currency is always EUR (`eur`) regardless of the customer’s location.

## Local payment methods

The Checkout Session presents customers with popular payment methods compatible with their local currencies. For example, for customers located in the Netherlands, the Checkout Session converts prices to EUR and also present popular Dutch payment methods like iDEAL.

You can configure which payment methods you accept in your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods).

## Pricing tables

Manual currency prices also work with [pricing tables](https://docs.stripe.com/payments/checkout/pricing-table.md). To render local currencies to customers viewing your pricing table, all of the pricing table’s Prices must include the customer’s local currency in their `currency_options`. They must also include a `tax_behavior` for the given currency if you’re using Stripe Tax.

## Supported integrations

Checkout automatically presents the local currency to customers if all of the following are true:

- The Checkout Session’s prices, shipping rates, and discounts have the relevant currency in their `currency_options`.
- If a price on the Checkout Session has an upsell, the upsell’s price has the relevant currency in its `currency_options`.
- For a Checkout Session using Stripe Tax, the `tax_behavior` on the Checkout Session is specified for the relevant currency for all of the Checkout Session’s prices, shipping rates, and discounts.
- You didn’t specify a currency during Checkout Session creation.

If Checkout can’t localize the currency because the relevant currency option or `tax_behavior` is missing, the Session presents to the customer in the default currency. The default currency must be the same across all prices, shipping rates, and discounts.

### Restrictions

Price localization isn’t available for Checkout Sessions that:

- Use manual tax rates.
- Use `payment_intent_data.application_fee_amount` or `payment_intent_data.transfer_data.amount`.

## Fees

Stripe’s standard transaction fees apply to automatically converted transactions:

- Cards or payment methods fee
- International cards or payment methods fee (if applicable)
- Currency conversion fee

See the [pricing page](https://stripe.com/pricing) for more details about these fees.

# Embedded form

> This is a Embedded form for when payment-ui is embedded-form. View the full page at https://docs.stripe.com/payments/checkout/localize-prices/manual-currency-prices?payment-ui=embedded-form.

Stripe supports manually defining prices in different currencies when creating [products](https://docs.stripe.com/products-prices/overview.md#get-started). However, Stripe recommends using [Adaptive Pricing](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md) instead of manual currency prices to reduce currency exchange rate fluctuation risk and to automatically enable support for over 100 local currencies.

Use manual currency prices instead of Adaptive Pricing when:

- Adaptive Pricing isn’t [supported](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md#restrictions) for your business or Checkout configuration. Reach out to <adaptive-pricing-beta@stripe.com> to ask about joining the preview.
- You’re supporting a region where you’re comfortable taking on fluctuations in the currency’s exchange rate.

Manually defined multi-currency prices override Adaptive Pricing for those currencies, even if it’s enabled.

## Create a multi-currency price \[Dashboard] \[Server-side]

#### Dashboard

1. Go to a product in the [Dashboard](https://dashboard.stripe.com/products?active=true).
2. Click  **+Add another price** to create a new price.
3. Fill in the price and select a currency. This first currency is the price’s default currency. Make sure all of your prices have the same default currency.
4. Click **+Add a price by currency** to search and select from supported currencies, adding them to your price.
5. Use the multi-currency price you created by passing its ID into [line items](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-price) when you create a Checkout Session.

#### API

Add multiple currencies to a Price by specifying `currency_options` when using the [Prices API](https://docs.stripe.com/api/prices/object.md#price_object-currency_options).

```curl
curl https://api.stripe.com/v1/prices \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d unit_amount=1000 \
  -d "currency_options[eur][unit_amount]"=950 \
  -d "currency_options[jpy][unit_amount]"=1500 \
  -d "product_data[name]"="My Product"
```

In this example, the Price is created in USD, with additional currency options in EUR and JPY.

## Create a Checkout Session \[Server-side]

Create a Checkout Session using the multi-currency price:

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

## Testing \[Server-side] \[Client-side]

To test local currency presentment, pass in a location-formatted customer email that includes a suffix in a `+location_XX` format in the local part of the email. `XX` must be a valid [two-letter ISO country code](https://www.nationsonline.org/oneworld/country_code_list.htm).

For example, to test currency presentment for a customer in France, pass in an email like `test+location_FR@example.com`. When you visit the URL for a Checkout Session created with a location-formatted email, you see the same currency as a customer does in the specified country.

When you create a Checkout Session, pass the location-formatted email as [customer\_email](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-customer_email) to simulate a particular country.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d ui_mode=embedded \
  -d return_url="https://example.com/return" \
  --data-urlencode customer_email="test+location_FR@example.com"
```

You can also create a [Customer](https://docs.stripe.com/api/customers/create.md) and specify their email that contains the `+location_XX` suffix. Stripe test cards work as usual.

When it’s possible to present the customer’s local currency, the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md) object changes. Fields like `currency`, `payment_method_types`, and `amount_total` reflect the local currency and price.

## Optional: Specify a currency \[Server-side]

When you use multi-currency Prices, the Checkout Session automatically handles currency localization for your customers. However, you can override this behavior by specifying a currency when you create the Checkout Session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=eur \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

In this example, the Checkout Session’s currency is always EUR (`eur`) regardless of the customer’s location.

## Local payment methods

The Checkout Session presents customers with popular payment methods compatible with their local currencies. For example, for customers located in the Netherlands, the Checkout Session converts prices to EUR and also present popular Dutch payment methods like iDEAL.

You can configure which payment methods you accept in your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods).

## Supported integrations

Checkout automatically presents the local currency to customers if all of the following are true:

- The Checkout Session’s prices, shipping rates, and discounts have the relevant currency in their `currency_options`.
- If a price on the Checkout Session has an upsell, the upsell’s price has the relevant currency in its `currency_options`.
- For a Checkout Session using Stripe Tax, the `tax_behavior` on the Checkout Session is specified for the relevant currency for all of the Checkout Session’s prices, shipping rates, and discounts.
- You didn’t specify a currency during Checkout Session creation.

If Checkout can’t localize the currency because the relevant currency option or `tax_behavior` is missing, the Session presents to the customer in the default currency. The default currency must be the same across all prices, shipping rates, and discounts.

### Restrictions

Price localization isn’t available for Checkout Sessions that:

- Use manual tax rates.
- Use `payment_intent_data.application_fee_amount` or `payment_intent_data.transfer_data.amount`.

## Fees

Stripe’s standard transaction fees apply to automatically converted transactions:

- Cards or payment methods fee
- International cards or payment methods fee (if applicable)
- Currency conversion fee

See the [pricing page](https://stripe.com/pricing) for more details about these fees.
