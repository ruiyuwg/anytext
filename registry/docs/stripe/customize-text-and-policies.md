# Customize text and policies

Customize the text that your customers see, and the policies Checkout displays.

When customers pay with Stripe Checkout using either a hosted payment page or an embedded payment form, you can present additional text, such as shipping and processing times.

> You’re prohibited from using this feature to create custom text that violates or creates ambiguity with the Stripe generated text on Checkout, obligations under your Stripe agreement, Stripe’s policies, and applicable laws.

#### Stripe-hosted page

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d "shipping_address_collection[allowed_countries][0]"=US \
  --data-urlencode "custom_text[shipping_address][message]"="Please note that we can't guarantee 2-day delivery for PO boxes at this time." \
  --data-urlencode "custom_text[submit][message]"="We'll email you instructions on how to get started." \
  --data-urlencode "custom_text[after_submit][message]"="Learn more about **your purchase** on our [product page](https://www.stripe.com/)." \
  --data-urlencode success_url="https://example.com/success"
```

#### Embedded form

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d "shipping_address_collection[allowed_countries][0]"=US \
  --data-urlencode "custom_text[shipping_address][message]"="Please note that we can't guarantee 2-day delivery for PO boxes at this time." \
  --data-urlencode "custom_text[submit][message]"="We'll email you instructions on how to get started." \
  --data-urlencode "custom_text[after_submit][message]"="Learn more about **your purchase** on our [product page](https://www.stripe.com/)." \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

![Custom text near shipping address collection](https://b.stripecdn.com/docs-statics-srv/assets/shipping-address-custom-text.b0b578d66d2bd415d0b0fe03106d27df.png)

Custom text near the shipping address collection fields
![Custom text above the pay button](https://b.stripecdn.com/docs-statics-srv/assets/submit-custom-text.bf46135c06b7c33c1ce9c9b09e4206c9.png)

Custom text above the **Pay** button
![Custom text below the pay button](https://b.stripecdn.com/docs-statics-srv/assets/custom-text-after-submit.32dbd97008b3f189145bcd07c4562bb4.png)

Custom text after the **Pay** button

Your custom text can be up to 1200 characters in length. However, Stripe Checkout is optimized for conversion, and adding extra information might affect your conversion rate. You can bold text or insert a link using [Markdown syntax](https://www.markdownguide.org/cheat-sheet/).

## Customize the Submit button

To better align Checkout with your business model, configure the text displayed on the Checkout submit button for one-time purchases.

Define a `submit_type` on your session. In this example (for a 5 USD donation), your customized Checkout submit button displays **Donate $5.00**. See the [API reference](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-submit_type) for a complete list of `submit_type` options.

#### Stripe-hosted page

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d submit_type=donate \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

#### Embedded form

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d submit_type=donate \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

## Localization and supported languages

By default, Checkout detects the locale of the customer’s browser and displays a translated version of the page in their language, if Stripe [supports it](https://support.stripe.com/questions/supported-languages-for-stripe-checkout). You can override the browser locale for Checkout by passing the `locale` [parameter](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-locale) when you create a Checkout Session.

Checkout also uses the locale to format numbers and currencies. For example, when selling a product whose price is set in EUR with the locale set to `auto`, a browser configured to use English (`en`) would display €25.00 while one configured for German (`de`) would display 25,00 €.

## Customize policies and contact information

You can display your return, refund, and legal policies, and your support contact information to your customers on Checkout. Go to [Checkout Settings](https://dashboard.stripe.com/settings/checkout) to configure the information you want to display, including:

- Details about your return and refund policies
- Your support phone number, email, and website
- Links to your terms of service and privacy policy

Presenting this information can increase buyer confidence and minimize cart abandonment.

### Configure support and legal policies

From [Checkout Settings](https://dashboard.stripe.com/settings/checkout), add support contact information to your sessions by enabling **Contact information**. Similarly, add links to your **Terms of service** and **Privacy policy** to your sessions by enabling **Legal policies**. If you require customers to implicitly consent to your legal policies when they complete their checkout, select the **Display agreement to legal terms** checkbox.

You must add your support contact information and legal policy links in your [Public Detail Settings](https://dashboard.stripe.com/settings/public).

The following previews show how Checkout displays a dialog with the support contact information, links to the store legal policies, and information about the payment terms.
![A checkout page with contact information.](https://b.stripecdn.com/docs-statics-srv/assets/contact-modal.2b81bc2e74657f7c94a45a743439c81f.png)

Preview of contact information on Checkout.
![A checkout page with legal policies.](https://b.stripecdn.com/docs-statics-srv/assets/legal-modal.9351cb51408c2a9f5c0ae23aab03e138.png)

Preview of legal policies on Checkout.

### Configure return and refund policies

Display your return, refund, or exchange policies, by enabling **Return and Refund policies**. Although businesses that sell physical goods use return policies, businesses that sell digital goods or customized physical goods typically use refund policies. Because they’re not mutually exclusive, you can select both options if your business sells both categories of goods. You can edit your return and refund details, including:

- Whether you accept returns, refunds, or exchanges
- Whether returns, refunds, or exchanges are free or if they’re subject to a fee
- How many days after a purchase you’ll accept returns, refunds, or exchanges
- How customers can return items shipped to them
- Whether you accept in-store returns
- A link to the full return and refund policy
- A custom message

If you accept free returns, refunds, or exchanges, Checkout highlights the policy for customers.

The following previews show how Checkout displays a return policy. In this example, it’s for purchases that can be returned by shipping them or in-store for a full refund (or exchange) for up to 60 days. You can display similar information for refunds.
![Preview of return policies on Checkout](https://b.stripecdn.com/docs-statics-srv/assets/return-policy-modal.0c7a9ff71b8bc2c155842532801e06a8.png)

Preview of return policies on Checkout.
![Preview of a policy highlight on Checkout](https://b.stripecdn.com/docs-statics-srv/assets/policy-highlight.334828420693a33d376977a2c0fe5851.png)

Preview of a policy highlight on Checkout.

### Collect a terms of service agreement

Businesses often require their customers to agree to their terms of service before they can pay. This might depend on the type of product or subscription. Checkout helps you collect the necessary agreement by requiring a customer to accept your terms before paying.
![Collect terms of service agreement](https://b.stripecdn.com/docs-statics-srv/assets/terms-of-service-consent-collection.dec90bde6d1a3c5d4c0b3e7b8e644a52.png)

Collect terms of service agreement

You can collect a terms of service agreement with Stripe Checkout when you create a Session:

#### Stripe-hosted page

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=2 \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success" \
  -d "consent_collection[terms_of_service]"=required \
  --data-urlencode "custom_text[terms_of_service_acceptance][message]"="I agree to the [Terms of Service](https://example.com/terms)"
```

#### Embedded form

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=2 \
  -d mode=payment \
  -d "consent_collection[terms_of_service]"=required \
  --data-urlencode "custom_text[terms_of_service_acceptance][message]"="I agree to the [Terms of Service](https://example.com/terms)" \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

When `consent_collection.terms_of_service='required'`, Checkout dynamically displays a checkbox for collecting the customer’s terms of service agreement. If `consent_collection.terms_of_service='none'`, Checkout won’t display the checkbox and won’t require customers to accept the terms of service. Before requiring agreement to your terms, set your terms of service URL in your [public details](https://dashboard.stripe.com/settings/public) of your business. Setting a privacy policy URL is optional—Checkout also links to your privacy policy when a URL to your Privacy policy is set in your [public details](https://dashboard.stripe.com/settings/public).

After a customer completes checkout, you can verify that the customer accepted your terms of service by looking at the Session object in the `checkout.session.completed` webhook, or by retrieving the Session using the API. When the terms are accepted, the Session’s [consent.terms\_of\_service](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-consent) field is set to `accepted`.

You can customize the text that appears next to the checkbox by using `custom_text.terms_of_service_acceptance`. You need to set `consent_collection.terms_of_service='required'`. To use your own terms, insert a Markdown link. For example: `I agree to the [Terms of Service](https://example.com/terms)`

> Consult your legal and compliance advisors before making any changes to this text. You can’t use this feature to display custom text that violates or creates ambiguity with the Stripe-generated text on Checkout, obligations under your Stripe agreement, Stripe policies, and applicable laws.

### Collect consent for promotional emails

You can send promotional emails to inform customers of new products and to share coupons and discounts. Before doing so, you must [collect their consent](https://docs.stripe.com/payments/checkout/promotional-emails-consent.md) to receive promotional emails.

## Customize payment method reuse agreement and subscription terms

When a session is in either `setup` or `subscription` mode, or is in `payment` mode with `setup_future_usage` set, Checkout displays a message about reusing the customer’s payment method. The message can include information specific to the selected payment method. You can hide or customize the default text, but not the payment method-specific text.

For a subscription, the custom text can include information such as the following:

- A link to your subscription terms
- A link to your customer portal
- Cancellation mechanisms and policies
  ![Default payment method reuse agreement display in subscription mode](https://b.stripecdn.com/docs-statics-srv/assets/default-subscription-mode-payment-method-reuse-agreement.caee311155d9948637a53aafded801af.png)

Default payment method reuse agreement in subscription mode

> By customizing this text, you’re responsible for maintaining compliance, which includes updating this text as card network rules and local regulations change. Don’t use this feature without consulting with your legal team or setting custom text that includes information regarding the reuse of the payment method. Make sure that your customized text covers all modes you plan to support.

To hide the payment method reuse agreement text, set `consent_collection.payment_method_reuse_agreement.position='hidden'`. Checkout won’t display its default language governing the reuse of the payment method. To set your own text in place of Stripe’s default language, set `custom_text.after_submit.message`. You can also use `custom_text.submit` or `custom_text.terms_of_service_acceptance` to display your own version of this language.

#### Stripe-hosted page

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=subscription \
  --data-urlencode success_url="https://example.com/success" \
  -d "consent_collection[payment_method_reuse_agreement][position]"=hidden \
  --data-urlencode "custom_text[after_submit][message]"="You can cancel your subscription at any time by [logging into your account](https://www.example.com/)"
```

#### Embedded form

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=subscription \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return" \
  -d "consent_collection[payment_method_reuse_agreement][position]"=hidden \
  --data-urlencode "custom_text[after_submit][message]"="You can cancel your subscription at any time by [logging into your account](https://www.example.com/)"
```
