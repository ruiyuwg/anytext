# Customize checkout for Payment Links

Collect additional information, taxes, or update your branding.

When you create a payment link, you can customize the look and feel of a Checkout Session for your user. You can also choose what type of customer information to collect and save for later.

See [After a payment link payment](https://docs.stripe.com/payment-links/post-payment.md) for more information about customizing a session post-payment, such as redirecting the customer to a branded confirmation page or emailing a receipt.

## Limit the number of times a payment link can be paid

You can limit the number of times a payment link is paid for. For example, you can place a limit if you have limited inventory, or only want the links to be used once. When the payment link reaches the limit, it automatically deactivates and customers can’t use it to make a purchase. If a customer tries to open the link after the limit has been reached, they’re shown the default message for deactivated links or [a message that you can customize](https://docs.stripe.com/payment-links/customize.md#custom-deactivated-link-message).

A payment link is considered “paid for” when a Checkout Session is complete. You can see the payments for completed sessions in two different ways, depending on the type of payment link:

- For payment links that include subscriptions (that is, any link that has a [recurring price](https://docs.stripe.com/products-prices/pricing-models.md)), go to **Billing** > **Subscriptions**.
- For all other payment links, go to the payment link’s details page, then **Payments and analytics** > **Recent payments**.

#### Dashboard

To limit the number of payments using the Dashboard:

1. [Create](https://dashboard.stripe.com/payment-links/create) or edit a payment link.
2. Select **Limit the number of payments** and enter the number of payments you want to allow before the link deactivates.

#### API

To limit the number of payments with the API, pass the `restrictions[completed_sessions][limit]` parameter when you [create](https://docs.stripe.com/api/payment-link/create.md#create_payment_link-restrictions-completed_sessions-limit) or [update](https://docs.stripe.com/api/payment-link/update.md#update_payment_link-restrictions-completed_sessions-limit) a payment link. A payment link is considered “paid for” when Stripe sends the [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) event.

```curl
curl https://api.stripe.com/v1/payment_links \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d "restrictions[completed_sessions][limit]"=1
```

## Set a custom message for deactivated links

If customers try to open a deactivated payment link, they’re shown a default message. You can customize this message in the Dashboard or with the API.

#### Dashboard

You can customize the message for a deactivated link in the Dashboard in two ways:

- When you [create](https://dashboard.stripe.com/payment-links/create) or edit a payment link, select **Limit the number of payments**. Then select **Change deactivation message** and add your custom message.
- When you attempt to deactivate a payment link, a modal with a prompt to change the default deactivation message appears. Use that to update the message.

#### API

To set a customized message for deactivated link with the API, pass the `inactive_message` parameter when you [create](https://docs.stripe.com/api/payment-link/create.md#create_payment_link-restrictions-completed_sessions-limit) or [update](https://docs.stripe.com/api/payment-link/update.md#update_payment_link-restrictions-completed_sessions-limit) a payment link.

```curl
curl https://api.stripe.com/v1/payment_links \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  --data-urlencode inactive_message="Sorry, we're out of stock for now!"
```

## Collect customer addresses and phone numbers

You can collect addresses and phone numbers with payment links by adding those fields to the `Checkout Session`.

#### Dashboard

### Collect an address

To collect addresses from your customers:

1. [Create](https://dashboard.stripe.com/payment-links/create) or edit a payment link.

   To edit a payment link go to its details page and click the overflow menu (⋯).

2. Select **Collect customer addresses** in the **Options** section.

3. You  can collect **Billing addresses only** or you can collect **Billing and shipping addresses**. Choosing either makes these fields required for customers.

4. If you collect shipping addresses:

   - You need to select the countries you ship to. These countries appear in the **Country** dropdown in the **Shipping Address form** in the checkout session.
   - You can optionally add shipping rates.

### Collect a phone number

If you need to collect phone numbers to complete the transaction:

1. [Create](https://dashboard.stripe.com/payment-links/create) or edit a payment link.
2. Select **Require customers to provide a phone number**.

#### API

### Collect an address

To collect a customer’s billing address in a payment link, pass the `billing_address_collection` parameter when you [create a payment link](https://docs.stripe.com/api/payment-link/create.md). You have to specify whether to always collect the billing address (`required`) or only when it’s necessary (like for tax calculations) (`auto`).

To collect a customer’s shipping address in a payment link, pass the `shipping_address_collection` parameter when you [create a payment link](https://docs.stripe.com/api/payment-link/create.md).

When you collect a shipping address, you must also specify which countries to allow shipping to. Configure the `allowed_countries` property with an array of [two-letter ISO country codes](https://www.nationsonline.org/oneworld/country_code_list.htm).

When the customer completes the session, the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md) object saves the collected shipping address on the `shipping_details` property and includes it in the payload of the `checkout.session.completed` *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests). You can also see shipping information in the payment details page in the Dashboard.

### Collect a phone number

To collect a customer’s phone number in a payment link, pass the `phone_number_collection` parameter when you [create a payment link](https://docs.stripe.com/api/payment-link/create.md).

You can configure Payment Links to always collect a billing address, or always collect both a billing and a shipping address. When you collect shipping addresses, you can define the allowed values for shipping countries, and create one or more shipping rates to include in your link.

You can configure Payment Links to collect a phone number for shipping or invoicing. Only collect phone numbers if you need them for the transaction. When choosing this option, the payment page shows a required field to capture your customer’s phone number.

## Collect customer business names and full names

Collect customers’ business names and full names as fields on your Payment Links.

#### Dashboard

To collect names from your customers using the Dashboard:

1. [Create](https://dashboard.stripe.com/payment-links/create) or edit a payment link.
2. Select **Collect customer names**
3. Configure whether you want to collect business names, individual names or both.
4. (Optional) Select **Mark as optional** if you want customers to provide their names if they choose. Otherwise, the name fields will be required before checkout.

#### API

To enable name collection with the API, pass the `name_collection` parameter when you [create](https://docs.stripe.com/api/payment-link/create.md#create_payment_link-name_collection) or [update](https://docs.stripe.com/api/payment-link/update.md#update_payment_link-name_collection) a payment link.

```curl
curl https://api.stripe.com/v1/payment_links \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d "name_collection[business][enabled]"=true \
  -d "name_collection[business][optional]"=true \
  -d "name_collection[individual][enabled]"=true
```

If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

When a customer completes a session, the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md) object saves the collected names on the `business_name` and `individual_name` fields in the `collected_information` property. If a [Customer](https://docs.stripe.com/api/customers/object.md) object was created or updated, the collected names also appear on the `business_name` and `individual_name` properties. You can also view your customers in the [Dashboard](https://dashboard.stripe.com/customers).

## Collect business customer tax IDs

To display a customer’s tax ID and legal business name on invoices, enable tax ID collection on your Payment Links. Learn how to [collect customer tax IDs with Checkout](https://docs.stripe.com/tax/checkout/tax-ids.md).

## Collect taxes

Payment Links work with [Stripe Tax](https://stripe.com/tax) to calculate and collect tax on your payments. Stripe Tax is a paid product that automatically calculates the tax on your transactions without the need to define the rates and rules.

Fees only apply after you’ve added at least one location where you’re registered to calculate and remit tax.

To get started, [activate Stripe Tax](https://dashboard.stripe.com/tax) in the Dashboard. Learn how to use [products, prices, tax codes, and tax behavior](https://docs.stripe.com/tax/products-prices-tax-codes-tax-behavior.md) to automatically calculate tax.

#### Dashboard

To enable automatic tax collection using the Dashboard:

1. [Create](https://dashboard.stripe.com/payment-links/create) or edit a payment link.
2. Select **Collect tax automatically**.

To accurately determine tax, Stripe Tax collects the customer’s billing address (full address for US customers).

#### API

To enable automatic tax collection with the API, pass the `automatic_tax[enabled]=true` parameter when you [create](https://docs.stripe.com/api/payment-link/create.md#create_payment_link-automatic_tax-enabled) or [update](https://docs.stripe.com/api/payment-link/update.md#update_payment_link-automatic_tax-enabled) a payment link.

```curl
curl https://api.stripe.com/v1/payment_links \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d "automatic_tax[enabled]"=true
```

## Collect agreement to your terms of service

#### Dashboard

You can require that your customers accept your terms of service before completing their purchase. When you set a terms of service URL in your account’s [Public details](https://dashboard.stripe.com/settings/public), you have the option to require a terms of service agreement when you create a payment link in the Dashboard. Enabling this setting requires that your customers click a checkbox to accept your terms in the checkout page. The checkout page also links to your privacy policy if you set a privacy policy URL in your account’s [Public details](https://dashboard.stripe.com/settings/public).

#### API

Collect terms of service agreement from your customers by setting [consent\_collection.terms\_of\_service](https://docs.stripe.com/api/payment_links/payment_links/create.md#create_payment_link-consent_collection-terms_of_service) to `required`. This displays a checkbox for collecting the customer’s terms of service agreement, and links the customer to the terms of service URL set in your Stripe Dashboard’s [Public details](https://dashboard.stripe.com/settings/public).

If you set [consent\_collection.terms\_of\_service](https://docs.stripe.com/api/payment_links/payment_links/create.md#create_payment_link-consent_collection-terms_of_service) to `none`, Checkout won’t display the checkbox and won’t require customers to accept your terms of service.

Before requiring agreement to your terms, set your terms of service URL in your business’s [Public details](https://dashboard.stripe.com/settings/public). Setting a privacy policy URL is optional. Checkout also links to your privacy policy when a URL to your privacy policy is set in your [Public details](https://dashboard.stripe.com/settings/public).

```curl
curl https://api.stripe.com/v1/payment_links \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d "payment_method_types[0]"=card \
  -d "consent_collection[terms_of_service]"=required
```

## Add custom fields

> Don’t use custom fields to collect personal, protected, or sensitive data, or information restricted by law.

#### Dashboard

You can add custom fields on the payment form to collect additional information from your customers. The information is available after the payment is complete and is useful for fulfilling the purchase. You can add the following types of fields.

| Type         | Description                                                                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text         | Collects freeform text up to 255 characters.                                                                                                                                                                |
| Numbers only | Collects only numerical values up to 255 digits.                                                                                                                                                            |
| Dropdown     | Presents your customers with a list of options to select from. Payment links created through the Dashboard support up to 10 options. You can add up to 200 options after you create a link through the API. |

1. Click **Add custom fields** in the **Options** section.
2. Select a type of field to add.
3. Enter a label for the field.
4. (Optional) Mark your field as required.

Labels for custom fields aren’t translated, but you can use the `locale` [URL parameter](https://docs.stripe.com/payment-links/customize.md#customize-checkout-with-url-parameters) to set the language of your payment link to match the same language as your labels.
![](https://b.stripecdn.com/docs-statics-srv/assets/customize-payment-link.8d578e56ad9a6171b4763b46e027aa01.png)

After your customer completes the payment, you can view the fields on the payment details page in the Dashboard.
![](https://b.stripecdn.com/docs-statics-srv/assets/payment.56e708902bb56215b40e523371418a6e.png)

The custom fields are also included in the [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) upon payment completion.

#### API

Create a payment link while specifying an array of [custom fields](https://docs.stripe.com/api/payment_links/payment_links/create.md#create_payment_link-custom_fields). Each field must have a unique `key` that your integration uses to reconcile it. Also provide a label for the field that you display to your customer. Labels for custom fields aren’t translated, but you can use the `locale` [URL parameter](https://docs.stripe.com/payment-links/url-parameters.md) to set the language of your payment link to match the same language as your labels.

```curl
curl https://api.stripe.com/v1/payment_links \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d "custom_fields[0][key]"=engraving \
  -d "custom_fields[0][label][type]"=custom \
  -d "custom_fields[0][label][custom]"="Personalized engraving" \
  -d "custom_fields[0][type]"=text
```

After your customer completes the Checkout Session, the fields are available on the payments details page in the Dashboard, or you can [retrieve the completed custom fields](https://docs.stripe.com/payments/checkout/custom-components.md#retrieve-fields).

The custom fields are also included in the [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) upon payment completion.

## Automatically convert prices to local currencies

Each Payment Link you share automatically allows your customers to complete payment in their local currency with [Adaptive Pricing](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md).

You can also set pricing manually for each currency using [manual currency prices](https://docs.stripe.com/payments/checkout/localize-prices/manual-currency-prices.md).

## Save payment details for future use

> Consult with your legal counsel or compliance team regarding saving and using payment details. For example, the European Data Protection Board issued [guidance](https://edpb.europa.eu/system/files/2021-05/recommendations022021_on_storage_of_credit_card_data_en_1.pdf) regarding the saving of payment details for faster future checkouts.
>
> If you want to save the payment method information to provide returning customers an optional 1-click payment experience in the future, we recommend using [Link](https://docs.stripe.com/payments/link/checkout-link.md).

To save payment details for a customer, select **Save payment details for future use** in the **Advanced options** section when you [create a Payment Link](https://dashboard.stripe.com/test/payment-links/create).

## Apply branding

You can customize the look and feel of the payment page in the Stripe Dashboard. Go to your [branding settings](https://dashboard.stripe.com/account/branding/checkout) to:

- Upload a logo or icon
- Customize the payment page’s background color, button color, font, and shapes

Learn more about [custom fonts and font compatibility](https://docs.stripe.com/payments/checkout/customization/appearance.md#font-compatibility).

## Use your own domain

If you have your own custom domain, you can add it in the Stripe Dashboard. Instead of Stripe-branded payment links (`buy.stripe.com/`), you can create links using your own subdomain (`pay.example.com`). Learn more about [custom domains](https://docs.stripe.com/payments/checkout/custom-domains.md).

## Set store policies and contact information

You can display your return, refund, and legal policies on the payment page in addition to your support contact information.

Go to the [Checkout and Payment Links settings](https://dashboard.stripe.com/settings/checkout) to configure the information you want to display.

Presenting this information can increase buyer confidence and minimize [cart abandonment](https://docs.stripe.com/payments/checkout/abandoned-carts.md).

## Customize checkout with URL parameters

URL parameters allow you to add additional context to your payment page and streamline checkout. Specify the language that appears during checkout, prefill an email address or promotional code for your customers, track campaigns, and streamline reconciliation.

You can configure URL parameters directly from the Stripe Dashboard, and use them in the query string of your payment link URL. From the [payment links page](https://dashboard.stripe.com/payment-links), click a specific payment link, then click the dropdown menu on the **Copy** button to add URL parameters.

Here’s an example link with prefilled email, promotional code, and locale parameters.

```missinglanguage
https://buy.stripe.com/test_eVa3do41l4Ye6KkcMN?prefilled_email=jenny%40example.com&prefilled_promo_code=20off&locale=de
```

| Parameter                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Syntax                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prefilled_email`        | Use `prefilled_email` to enter an email address on the payment page automatically. Your end customer can still edit this field, so the email you pass in for `prefilled_email` might not be the same email that your customer uses to complete the payment.                                                                                                                                                                                                                                 | `prefilled_email` must be a valid email address. Invalid values are disregarded and your payment page continues to work as expected.

We recommend [encoding](https://en.wikipedia.org/wiki/Percent-encoding) email addresses that you attach as URL parameters to reduce the risk of them not being passed through to your payment page.                                                                                                                      |
| `locked_prefilled_email` | Use `locked_prefilled_email` to enter an uneditable email address on the payment page automatically.                                                                                                                                                                                                                                                                                                                                                                                        | `locked_prefilled_email` must be a valid email address. Invalid values are disregarded and your payment page continues to work as expected. If both `prefilled_email` and `locked_prefilled_email` are passed, `locked_prefilled_email` takes precedence.

We recommend [encoding](https://en.wikipedia.org/wiki/Percent-encoding) email addresses that you attach as URL parameters to reduce the risk of them not being passed through to your payment page. |
| `prefilled_promo_code`   | Use `prefilled_promo_code` to enter a [promotion code](https://docs.stripe.com/api/promotion_codes.md) on the payment page automatically. Your customer can still edit this field, so the promotion code you pass in for `prefilled_promo_code` might not be the same promotion code that your customer uses to complete the payment.

You must also [enable promotion codes](https://docs.stripe.com/payment-links/promotions.md) on your payment link, or this parameter has no effect. | `prefilled_promo_code` must be composed of alphanumeric characters and can’t use any special characters. Promotion codes are case insensitive. Invalid values are disregarded and your payment page continues to work as expected.                                                                                                                                                                                                                               |
| `locale`                 | Use `locale` to display your payment link in a specific language for your customers regardless of their location.                                                                                                                                                                                                                                                                                                                                                                           | View the complete list of all [supported languages](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-locale).                                                                                                                                                                                                                                                                                                                     |

You can also use URL parameters to [track payment links and related campaigns](https://docs.stripe.com/payment-links/url-parameters.md).

## Limit customers to one subscription

You can redirect customers that already have a subscription to the *customer portal* (The customer portal is a secure, Stripe-hosted page that lets your customers manage their subscriptions and billing details) or your website to manage their subscription. Learn more about [limiting customers to one subscription](https://docs.stripe.com/payments/checkout/limit-subscriptions.md).

## Support free trials without collecting payment method details

For Payment Links that you create with a product that includes a free trial, you can allow customers to sign up for a subscription without providing their payment method details.

#### Dashboard

To configure trials without payment methods for Payment Links in the Dashboard:

- When you [create](https://dashboard.stripe.com/payment-links/create) or edit a payment link with a subscription product, select **Include a free trial**. Then select **Let customers start trial without payment method**.
- Set [subscription email reminders](https://docs.stripe.com/payments/checkout/free-trials.md#collect-payment) to make sure that Stripe prompts your customer to add their payment information before the trial ends. Otherwise, Stripe pauses the trial.

#### API

To configure trials without payment methods for Payment Links in the API:

- Configure the duration of the trial period using [subscription\_data.trial\_period\_days](https://docs.stripe.com/api/payment-link/create.md#create_payment_link-subscription_data-trial_period_days).
- Determine what happens when the trial period ends using [subscription\_data.trial\_settings.end\_behavior.missing\_payment\_method](https://docs.stripe.com/api/payment-link/create.md#create_payment_link-subscription_data-trial_settings-end_behavior-missing_payment_method).
- Set [payment\_method\_collection](https://docs.stripe.com/api/payment-link/create.md#create_payment_link-payment_method_collection) to `if_required`. This can only be done for Payment Links with subscription products. Learn how to [collect payment method information](https://docs.stripe.com/payments/checkout/free-trials.md#collect-payment) outside of Checkout before a customer’s trial ends. Otherwise, Stripe sends your customer an invoice.

## Allow adjustable quantities

You can configure payment links to allow your customers to update the quantity of the items they purchase.

#### Dashboard

To let your customers update the quantity of the items they purchase, [create a payment link](https://docs.stripe.com/payment-links/create.md) and add a product. In the payment link editor, go to **Payment page** > **Product** section, and then select **Let customers adjust quantity** in the product description. You can optionally set the minimum and maximum quantities.

#### API

To let your customers update the quantity of the items they purchase, specify [adjustable\_quantity](https://docs.stripe.com/api/payment_links/payment_links/create.md#create_payment_link-line_items-adjustable_quantity) for the line item. You can also set the minimum and maximum quantities that customers can purchase:

```curl
curl https://api.stripe.com/v1/payment_links \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d "line_items[0][adjustable_quantity][enabled]"=true \
  -d "line_items[0][adjustable_quantity][minimum]"=1 \
  -d "line_items[0][adjustable_quantity][maximum]"=10
```
