# Test Apple and Google wallet rendering

Compare your integration against working demo integrations to identify possible rendering issues.

The following demo shows different Stripe payment integrations with Apple Pay and Google Pay set up. Use the demo to visually compare how these wallets display in the demo integrations and your own integration.

- If the Apple Pay and Google Pay payment options appear as expected and in both the demo and your integration, they’re configured correctly.
- If you have a valid wallet, but you don’t see it as a payment method option in the demo, [adjust your device and browser setup](https://docs.stripe.com/testing/wallets.md#device-requirements) until Apple Pay and Google Pay appear as expected.
- If you see your wallet displayed in the demos but not in your own integration, [check your integration](https://docs.stripe.com/testing/wallets.md#integration-requirements).

# Payment Element

> This is a Payment Element for when ui is payment-element. View the full page at https://docs.stripe.com/testing/wallets?ui=payment-element.

For this integration path, Stripe.js detects and supports the following wallets based on the state of your device.

## Check your device and browser setup

If you can’t see your expected wallet in the demos, your device or browser might not meet the following Apple Pay or Google Pay conditions.

- The wallet must have at least one card.
- You must use a compatible [Apple Pay device](https://support.apple.com/en-us/102896) and [Google Pay device](https://developers.google.com/pay/issuers/overview/supported-devices#compatibility_requirements).
- You must use a [supported version](https://docs.stripe.com/js/appendix/supported_browsers) of a [supported browser](https://docs.stripe.com/stripe-js/elements/payment-request-button.md?client=html#testing) for the wallet you’re testing.
- Allow applicable browsers to access your wallet.
  - Chrome: **Settings** > **Autofill and passwords** > **Payment methods** > **Allow sites to check if you have payment methods saved**
  - Safari: **Settings** > **Advanced** > **Allow websites to check for Apple Pay and Apple card**
- Don’t use a Chrome incognito window or Safari private window.
- Confirm you’re operating from a supported [Apple Pay region](https://support.apple.com/en-us/102775) and [Google Pay region](https://support.google.com/wallet/answer/12060037?sjid=7404612469520417090-NA#zippy=%2Cuse-google-wallet-for-payments).
- Stripe doesn’t display Apple Pay or Google Pay for IP addresses in India or for Stripe accounts based in India.
- For Apple Pay, confirm your device supports [biometric authentication](https://support.apple.com/en-us/102626#:~:text=iPhone%20or%20.iPad,on%20all%20devices.).

## Check your integration

If you see the expected wallet payment methods in the demo payment forms, but they don’t display in your own integration, the following checkpoints might resolve the issue.

### Register your domains

Check your [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_method_domains) to confirm your domain registrations. You must [register every domain and sub-domain](https://docs.stripe.com/payments/payment-methods/pmd-registration.md?dashboard-or-api=dashboard#register-your-domain) separately for each environment, including live mode and each *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes).

Connect users must also consider the funds flow configuration (direct or destination charge) for correct [domain registration](https://docs.stripe.com/payments/payment-methods/pmd-registration.md?dashboard-or-api=dashboard#register-your-domain-while-using-connect).

### (Apple Pay) Register all domains when using iframes

To see Apple Pay in an integration using iframes you must:

1. Make sure the iframe and top-level site domains match if you support pre-Safari 17 browser versions.
2. Set the `allow="payment"` attribute on the iframe.
3. Register both the iframe domain and top-level domain of the site, if they’re different (supported by Safari 17 or later).

### Enable wallets for your integration

- Enable supported wallets in your [Payment Method Configurations](https://dashboard.stripe.com/test/settings/payment_methods) to make sure [Dynamic Payment Methods](https://docs.stripe.com/payments/payment-methods/dynamic-payment-methods.md) can render them.
- To manually specify wallet payment methods, include `payment_method_types= ['card']` when:
  - [Creating the payment intent](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method_types)
  - [Initializing Elements](https://docs.stripe.com/js/elements_object/create_without_intent#stripe_elements_no_intent-options-paymentMethodTypes) from your client to  collect payment details [before creating an Intent](https://docs.stripe.com/payments/accept-a-payment-deferred.md).

# Express Checkout Element

> This is a Express Checkout Element for when ui is express-checkout-element. View the full page at https://docs.stripe.com/testing/wallets?ui=express-checkout-element.

For this integration path, Stripe.js detects and supports the following wallets based on the state of your device.

## Check your device and browser setup

If you can’t see your expected wallet in the demos, your device or browser might not meet the following Apple Pay or Google Pay conditions.

- The wallet must have at least one card.
  > You can still show a wallet with no detected cards in the Express Checkout Element. Pass the [paymentMethods](https://docs.stripe.com/js/elements_object/create_express_checkout_element) object with a wallet set to `always` during creation.
- You must use a compatible [Apple Pay device](https://support.apple.com/en-us/102896) and [Google Pay device](https://developers.google.com/pay/issuers/overview/supported-devices#compatibility_requirements).
- You must use a [supported version](https://docs.stripe.com/js/appendix/supported_browsers) of a [supported browser](https://docs.stripe.com/elements/express-checkout-element.md#supported-browsers) for the wallet you’re testing.
- Allow applicable browsers to access your wallet.
  - Chrome: **Settings** > **Autofill and passwords** > **Payment methods** > **Allow sites to check if you have payment methods saved**
  - Safari: **Settings** > **Advanced** > **Allow websites to check for Apple Pay and Apple card**
  - Opera: **Settings** > **Advanced** > **Payment methods** > **Allow sites to check if you have payment methods saved**
  - Edge: **Settings** > **Privacy, Search, and Services** > **Allow sites to check if you have payment methods saved**
- Don’t use a Chrome incognito window or Safari, Edge, or Opera private window.
- Confirm you’re operating from a supported [Apple Pay region](https://support.apple.com/en-us/102775) and [Google Pay region](https://support.google.com/wallet/answer/12060037?sjid=7404612469520417090-NA#zippy=%2Cuse-google-wallet-for-payments).
- Stripe doesn’t display Apple Pay or Google Pay for IP addresses in India.
- For Apple Pay, confirm your device supports [biometric authentication](https://support.apple.com/en-us/102626#:~:text=iPhone%20or%20.iPad,on%20all%20devices.).

## Check your integration

If you see the expected wallet payment methods in the demo payment forms, but they don’t display in your own integration, the following checkpoints might resolve the issue.

### Register your domains

Check your [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_method_domains) to confirm your domain registrations. You must [register every domain and sub-domain](https://docs.stripe.com/payments/payment-methods/pmd-registration.md?dashboard-or-api=dashboard#register-your-domain) separately for each environment, including live mode and each sandbox.

Connect users must also consider the funds flow configuration (direct or destination charge) for correct [domain registration](https://docs.stripe.com/payments/payment-methods/pmd-registration.md?dashboard-or-api=dashboard#register-your-domain-while-using-connect).

### (Apple Pay) Register all domains when using iframes

To see Apple Pay in an integration using iframes you must:

1. Make sure the iframe and top-level site domains match if you support pre-Safari 17 browser versions.
2. Set the `allow="payment"` attribute on the iframe.
3. Register both the iframe domain and top-level domain of the site, if they’re different (supported by Safari 17 or later).

### Enable wallets for your integration

- Enable supported wallets in your [Payment Method Configurations](https://dashboard.stripe.com/test/settings/payment_methods) to make sure [Dynamic Payment Methods](https://docs.stripe.com/payments/payment-methods/dynamic-payment-methods.md) can render them.
- To manually specify wallet payment methods, include `payment_method_types= ['card']` when:
  - [Creating the payment intent](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method_types)
  - [Initializing Elements](https://docs.stripe.com/js/elements_object/create_without_intent#stripe_elements_no_intent-options-paymentMethodTypes) from your client to  collect payment details [before creating an Intent](https://docs.stripe.com/payments/accept-a-payment-deferred.md).

# Checkout Sessions

> This is a Checkout Sessions for when ui is embedded-form. View the full page at https://docs.stripe.com/testing/wallets?ui=embedded-form.

For this integration path, Stripe.js detects and supports the following wallets based on the state of your device.

## Check your device and browser setup

If you can’t see your expected wallet in the demos, your device or browser might not meet the following Apple Pay or Google Pay conditions.

- The wallet must have at least one card.
- You must use a compatible [Apple Pay device](https://support.apple.com/en-us/102896) and [Google Pay device](https://developers.google.com/pay/issuers/overview/supported-devices#compatibility_requirements).
- You must use a [supported version](https://docs.stripe.com/js/appendix/supported_browsers) of a [supported browser](https://docs.stripe.com/elements/express-checkout-element.md#supported-browsers) for the wallet you’re testing.
- Allow applicable browsers to access your wallet.
  - Chrome: **Settings** > **Autofill and passwords** > **Payment methods** > **Allow sites to check if you have payment methods saved**
  - Safari: **Settings** > **Advanced** > **Allow websites to check for Apple Pay and Apple card**
  - Opera: **Settings** > **Advanced** > **Payment methods** > **Allow sites to check if you have payment methods saved**
  - Edge: **Settings** > **Privacy, Search, and Services** > **Allow sites to check if you have payment methods saved**
- Don’t use a Chrome incognito window or Safari, Edge, or Opera private window.
- Confirm you’re operating from a supported [Apple Pay region](https://support.apple.com/en-us/102775) and [Google Pay region](https://support.google.com/wallet/answer/12060037?sjid=7404612469520417090-NA#zippy=%2Cuse-google-wallet-for-payments).
- Stripe doesn’t display Apple Pay or Google Pay for IP addresses in India.
- For Apple Pay, confirm your device supports [biometric authentication](https://support.apple.com/en-us/102626#:~:text=iPhone%20or%20.iPad,on%20all%20devices.).

## Check your integration

If you see the expected wallet payment methods in the demo payment forms, but they don’t display in your own integration, the following checkpoints might resolve the issue.

### (Embedded Checkout) Register your domains

Check your [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_method_domains) to confirm your domain registrations. You must [register every domain and sub-domain](https://docs.stripe.com/payments/payment-methods/pmd-registration.md?dashboard-or-api=dashboard#register-your-domain) separately for each environment, including live mode and each sandbox.

Connect users must also consider the funds flow (direct or destination charge) configuration for correct [domain registration](https://docs.stripe.com/payments/payment-methods/pmd-registration.md?dashboard-or-api=dashboard#register-your-domain-while-using-connect).

### Enable wallets for your integration

- Enable supported wallets in your [Payment Method Configurations](https://dashboard.stripe.com/test/settings/payment_methods) to make sure [Dynamic Payment Methods](https://docs.stripe.com/payments/payment-methods/dynamic-payment-methods.md) can render them.
- To manually specify wallet payment methods, include `payment_method_types= ['card']` when [creating the checkout session](https://docs.stripe.com/api/checkout/session/create.md#create_checkout_session-payment_method_types).

### Wallets might appear in a carousel

Checkout Sessions display Apple Pay and Google Pay in a payment method carousel, rather than as standalone buttons, if:

- You set [consent\_collection.terms\_of\_service](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-consent_collection-terms_of_service) to `required`.
- You use [custom\_fields](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-custom_fields).
- You set [tax\_id\_collection.required](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-tax_id_collection-required) to `if_supported`.
- The customer’s IP address is in Finland or Sweden and non-card payment methods are also available.

### Limitations

- Checkout Sessions using [Stripe Tax](https://docs.stripe.com/tax.md) only show Google Pay if you enable[shipping\_address\_collection](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-shipping_address_collection).
- (Embedded Checkout) Apple Pay requires Safari 17 or later because embedded checkout uses iframes with different domains.

# Payment Request Button

> This is a Payment Request Button for when ui is payment-request-button-element. View the full page at https://docs.stripe.com/testing/wallets?ui=payment-request-button-element.

For this integration path, Stripe.js detects and supports the following wallets based on the state of your device.

## Check your device and browser setup

If you can’t see your expected wallet in the demos, your device or browser might not meet the following Apple Pay or Google Pay conditions.

- The wallet must have at least one card.
- (Google Pay) Log out of Link. If you see **Pay with Link** in the demo, your Link account takes priority over Google Pay. To log out:
  1. Click **Pay with link** in the demo.
  2. In the popup, click the overflow menu (⋯) at the top right of the window.
  3. Click **Log out**, then the **Log out** confirmation prompt.
  4. After the popup closes, verify that you see Google Pay in the demo.
- You must use a compatible [Apple Pay device](https://support.apple.com/en-us/102896) and [Google Pay device](https://developers.google.com/pay/issuers/overview/supported-devices#compatibility_requirements).
- You must use a [supported version](https://docs.stripe.com/js/appendix/supported_browsers) of a [supported browser](https://docs.stripe.com/stripe-js/elements/payment-request-button.md?client=html#testing) for the wallet you’re testing.
- Allow applicable browsers to access your wallet.
  - Chrome: **Settings** > **Autofill and passwords** > **Payment methods** > **Allow sites to check if you have payment methods saved**
  - Safari: **Settings** > **Advanced** > **Allow websites to check for Apple Pay and Apple card**
- Don’t use a Chrome incognito window or Safari private window.
- Confirm you’re operating from a supported [Apple Pay region](https://support.apple.com/en-us/102775) and [Google Pay region](https://support.google.com/wallet/answer/12060037?sjid=7404612469520417090-NA#zippy=%2Cuse-google-wallet-for-payments).
- Stripe doesn’t display Apple Pay or Google Pay for IP addresses in India.
- For Apple Pay, confirm your device supports [biometric authentication](https://support.apple.com/en-us/102626#:~:text=iPhone%20or%20.iPad,on%20all%20devices.).

## Check your integration

If you see the expected wallet payment methods in the demo payment forms, but they don’t display in your own integration, the following checkpoints might resolve the issue.

### Register your domains

Check your [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_method_domains) to confirm your domain registrations. You must [register every domain and sub-domain](https://docs.stripe.com/payments/payment-methods/pmd-registration.md?dashboard-or-api=dashboard#register-your-domain) separately for each environment, including live mode and each sandbox.

Connect users must also consider the funds flow configuration (direct or destination charge) for correct [domain registration](https://docs.stripe.com/payments/payment-methods/pmd-registration.md?dashboard-or-api=dashboard#register-your-domain-while-using-connect).

### (Apple Pay) Register all domains when using iframes

To see Apple Pay in an integration using iframes you must:

1. Make sure the iframe and top-level site domains match if you support pre-Safari 17 browser versions.
2. Set the `allow="payment"` attribute on the iframe.
3. Register both the iframe domain and top-level domain of the site, if they’re different (supported by Safari 17 or later).
