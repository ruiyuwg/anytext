# Embedded Components onramp

Learn about the Embedded Components onramp.

Build an entire onramp flow native to your app with components that provide authentication and secure data collection, tailored to your app’s design. [Get started](https://docs.stripe.com/crypto/onramp/embedded-components-integration-guide.md)

## Customer flow

1. A customer visits your app and wants to convert fiat to crypto or purchase crypto.
2. Your app prompts them to onboard by signing up or logging in to [Link](https://docs.stripe.com/payments/link.md).
3. They sign up or log into Link without leaving your app.
4. They grant your app permission to use their saved payment methods and wallets. If they’re missing required data (such as KYC information, payment methods, or wallets) they complete account configuration in your app.
5. They purchase or convert crypto in a CryptoOnramp session in your app. Returning customers have the option for one-click checkout.

## Integration overview

Choose how you want to get started with your integration, using one of the following:

- **[Quickstart](https://docs.stripe.com/crypto/onramp/embedded-components-quickstart.md?client=react)**: Provides minimal code that you can run to see the full flow and explore the integration.
- **[Integration guide](https://docs.stripe.com/crypto/onramp/embedded-components-integration-guide.md)**: Provides step-by-step instructions that you can follow to build your own flow.

### Mobile SDK configuration

Your app adds the Onramp dependency (React Native via Gradle/Podfile or Expo, or native iOS/Android) and wraps the app with [StripeProvider](https://stripe.dev/stripe-react-native/api-reference/functions/StripeProvider.html) so Stripe and Onramp are available. You can customize your business display name and appearance (for example, colors and theme) so the minimal Stripe UI matches your app.

### Authentication

A [Link](https://link.com/) account is required to proceed with the onramp purchase flow. Your client checks for an existing Link account with [hasLinkAccount](https://stripe.dev/stripe-react-native/api-reference/functions/useOnramp.html). If none, it registers the user with [registerLinkUser](https://stripe.dev/stripe-react-native/api-reference/functions/useOnramp.html). After sign-up or sign-in, your backend creates a `LinkAuthIntent` with onramp OAuth scopes, and the client runs [authorize](https://stripe.dev/stripe-react-native/api-reference/functions/useOnramp.html) to complete consent. Your backend then calls the Stripe API to get an access token for all subsequent API requests.

### Identity

The user must complete account setup before an onramp transaction. Your backend uses the Stripe APIs to see whether KYC and identity verification are done. When something is missing, your client uses the SDK: [attachKycInfo](https://stripe.dev/stripe-react-native/api-reference/functions/useOnramp.html) to collect KYC, [presentKycInfoVerification](https://stripe.dev/stripe-react-native/api-reference/functions/useOnramp.html) to confirm existing KYC, and [verifyIdentity](https://stripe.dev/stripe-react-native/api-reference/functions/useOnramp.html) for identity verification before checkout.

### Payment

The user needs at least one registered wallet and one payment token. You can design the flow in either of these ways: let the user choose which registered wallet to deposit to (for example, use the Stripe API to show a list of wallets), or abstract the wallet choice and always use a specific wallet (for example, the user’s primary or only wallet) so the user never sees or selects a destination.

For checkout, your backend creates a [CryptoOnrampSession](https://docs.stripe.com/api/crypto/onramp_sessions/create.md) with amount, currencies, network, and wallet, then returns the session to the client. Your backend calls the Stripe API to confirm and fulfill. When fulfilled, the client receives the session status and blockchain transaction ID.

## Next steps

- [Sign up to join the private preview](https://docs.stripe.com/crypto/onramp.md#sign-up)
- [Embedded Components onramp quickstart](https://docs.stripe.com/crypto/onramp/embedded-components-quickstart.md)
- [Integrate the Embedded Components onramp](https://docs.stripe.com/crypto/onramp/embedded-components-integration-guide.md)
- Try our sample apps: [iOS](https://github.com/stripe/stripe-ios/tree/master/Example/CryptoOnramp%20Example) and [Android](https://github.com/stripe/stripe-android/tree/master/crypto-onramp-example)
