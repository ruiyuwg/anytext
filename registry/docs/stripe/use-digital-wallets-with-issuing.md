# Use digital wallets with Issuing

Learn how to use Issuing to add cards to digital wallets.

> Digital wallets tokens are only available in live mode. To fully test these features, you need to be approved for live use cases and use real cards.

Issuing allows users to add cards to digital wallets like Apple Pay and Google Pay. Stripe supports the addition of cards through two methods:

1. **Manual Provisioning:** cardholders enter their card details into a phone’s wallet application to add it to their digital wallets.
2. **Push Provisioning:** mobile applications allow users to add cards to their digital wallets straight from the app.

When a card is added to a digital wallet, a tokenized representation of that card is created. Network tokens are managed separately from cards. For more information about network tokens and how they work, see [Token Management](https://docs.stripe.com/issuing/controls/token-management.md).

## Manual Provisioning

Cardholders can add Stripe Issuing [virtual cards](https://docs.stripe.com/issuing/cards/virtual.md) and [physical cards](https://docs.stripe.com/issuing/cards/physical.md) to their Apple Pay, Google Pay, and Samsung Pay wallets through manual provisioning.

To do so, cardholders open the wallet app on their phone and enter their card details. Stripe then sends a 6-digit verification code to the `phone_number` or `email` of the cardholder associated with the card.

A `card not supported` error displays if neither field is set on the cardholder when the card was provisioned.

No code is required to implement manual provisioning, but the process to set it up can vary depending on the digital wallet provider and the country you’re based in:

### US

Apple Pay wallets require approval from Apple. Check your [digital wallets settings](https://dashboard.stripe.com/settings/issuing/digital-wallets) to view the status of Apple Pay in your account. You might need to submit an application before using Apple Pay. After the application is submitted, approval can take 1-2 weeks.

Google Pay and Samsung Pay have no additional required steps.

### EU and UK

Digital wallet integrations require additional approval from the Stripe partnership team. Get in touch with your account representative or [contact Stripe](https://stripe.com/contact/sales) for more information.

Apple Pay wallets require additional approval. Check your [digital wallets settings](https://dashboard.stripe.com/settings/issuing/digital-wallets) to view the status of Apple Pay in your account. You might need to submit an application before using Apple Pay.

## Push provisioning

Push provisioning allows cardholders to add a Stripe Issuing cards to their digital wallets directly from your app by pressing an “add to wallet” button like the ones shown below.

Users must first complete manual provisioning steps to enable push provisioning in the US. In addition to manual provisioning approval, push provisioning requires you to integrate with the Stripe SDK.

This requires both approval processes through Stripe and code integration with the Stripe SDK for each platform you wish to support push provisioning on. Platform approvals cascade down to all of their connected accounts.

Samsung Pay push provisioning isn’t supported with our SDKs.

# iOS

> This is a iOS for when platform is ios. View the full page at https://docs.stripe.com/issuing/cards/digital-wallets?platform=ios.
> ![A black UI button that says Add to Apple Wallet. There is an Apple Wallet logo image to the left of the text. It's a grey wallet with blue, yellow, green, and red cards stacked slightly offset.](https://b.stripecdn.com/docs-statics-srv/assets/add_to_apple_wallet.fe8cd234760a7478e34f5e91d22677bb.png)

## Request access

> You must get accesss to [manual provisioning](https://docs.stripe.com/issuing/cards/digital-wallets.md?platform=android#manual-provisioning) before you can request push provisioning.

Push provisioning requires a special entitlement from Apple called `com.apple.developer.payment-pass-provisioning`. You can request it by emailing <support-issuing@stripe.com>. In your email, include your:

- **Card network**: Visa or MasterCard.
- **Card name**: The name of the card displayed in the wallet.
- **App name**: Your app’s name.
- **Developer team ID**: Found in your Apple Developer account settings under [membership](https://developer.apple.com/account/#/membership) (for example, `2A23JCNA5E`).
- **ADAM ID**: Your app’s unique numeric ID. Found in [App Store Connect](https://appstoreconnect.apple.com), or in the App Store link to your app (for example, `https://apps.apple.com/app/id123456789`).
- **Bundle ID**: Your app’s bundle identifier, also found in App Store Connect (for example, `com.example.yourapp`).

If you have multiple apps (such as for testing), that have any different fields for the above attributes, you’ll need to request access for each of these.

After we approve and apply your request, your app appears on the details page of a provisioned card in the Wallet app, and the `PKSecureElementPass` object is available in your app by calling `PKPassLibrary().passes()`. You might need to remove and re-provision the card for the change to take effect.

## Check eligibility \[Client-side]

Make sure you’ve integrated the latest version of the [Stripe iOS SDK](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=mobile\&platform=ios) with your app.

Determine if the device is eligible to use push provisioning.

1. Check that the value of `wallets[apple_pay][eligible]` in the issued card is `true`.
2. Call `PKPassLibrary().canAddSecureElementPass(primaryAccountIdentifier:)` with the `wallets[primary_account_identifier]` from your card, and check that the result is `true`. If the `primary_account_identifier` is empty, pass an empty string to `canAddSecureElementPass()`.

Retrieve these values on your back end, then pass them to your app for the eligibility check.

> You must check the server-side `wallets[apple_pay][eligible]` flag and the result of `canAddSecureElementPass()` before showing the `PKAddPassButton`. If you show an **Add to Apple Wallet** button without checking these values, App Review might reject your app.

#### Swift

```swift
import Stripe

class MyViewController: UIViewController {

  @IBOutlet weak var addPassButton: PKAddPassButton!
  // ...
  func handleEligibilityResponse(eligible: Bool, primaryAccountIdentifier: String?) {
    if eligible &&
    PKPassLibrary().canAddSecureElementPass(primaryAccountIdentifier: primaryAccountIdentifier ?? "") {
      addPassButton.isHidden = false
    } else {
      addPassButton.isHidden = true
    }
  }

}
```

For more context, see the code snippets and references to the sample app at each step. For this step, see how the [sample app](https://github.com/stripe-samples/push-provisioning-samples/blob/main/client/ios/Code/ViewController.swift#L201-L218) checks eligibility.

## Provision a card \[Client-side]

When the user taps the `PKAddPassButton`, create and present a `PKAddPaymentPassViewController`, which contains Apple’s UI for the push provisioning flow.

`PKAddPaymentPassViewController` can use the `primaryAccountIdentifier` from the previous step to determine if a card has already been provisioned on a specific device. For example, if the card has already been added to an iPhone, Apple’s UI offers to add it to a paired Apple Watch.

#### Swift

```swift
import Stripe

class MyViewController: UIViewController {
  // ...
  func beginPushProvisioning() {
    let config = STPPushProvisioningContext.requestConfiguration(
      withName: "Jenny Rosen", // the cardholder's name
      description: "RocketRides Card", // optional; a description of your card
      last4: "4242", // optional; the last 4 digits of the card
      brand: .visa, // optional; the brand of the card
      primaryAccountIdentifier: self.primaryAccountIdentifier // the primary_account_identifier value from the previous step
    )
    let controller = PKAddPaymentPassViewController(requestConfiguration: config, delegate: self)
    self.present(controller!, animated: true, completion: nil)
  }
}
```

For more context, see how the [sample app](https://github.com/stripe-samples/push-provisioning-samples/blob/main/client/ios/Code/ViewController.swift#L280-L288) uses a `PKAddPaymentPassViewController`.

The `PKAddPaymentPassViewController`’s initializer takes a delegate that you need to implement – typically this can just be the view controller from which you’re presenting it. We provide a class called `STPPushProvisioningContext` to help you implement these methods.

#### Swift

```swift
class MyViewController: UIViewController {
  var pushProvisioningContext: STPPushProvisioningContext? = nil
  // ...
}

extension MyViewController: PKAddPaymentPassViewControllerDelegate {
  func addPaymentPassViewController(_ controller: PKAddPaymentPassViewController, generateRequestWithCertificateChain certificates: [Data], nonce: Data, nonceSignature: Data, completionHandler handler: @escaping (PKAddPaymentPassRequest) -> Void) {
    self.pushProvisioningContext = STPPushProvisioningContext(keyProvider: self)
    // STPPushProvisioningContext implements this delegate method for you, by retrieving encrypted card details from the Stripe API.
    self.pushProvisioningContext?.addPaymentPassViewController(controller, generateRequestWithCertificateChain: certificates, nonce: nonce, nonceSignature: nonceSignature, completionHandler: handler);
  }

  func addPaymentPassViewController(_ controller: PKAddPaymentPassViewController, didFinishAdding pass: PKPaymentPass?, error: Error?) {
    // Depending on if `error` is present, show a success or failure screen.
    self.dismiss(animated: true, completion: nil)
  }
}
```

For more context, see how the [sample app](https://github.com/stripe-samples/push-provisioning-samples/blob/main/client/ios/Code/ViewController.swift#L293-L349) implements `PKAddPaymentPassViewControllerDelegate`.

You can see that the `STPPushProvisioningContext`’s initializer expects a `keyProvider`. This is an instance of a class that implements the `STPIssuingCardEphemeralKeyProvider` protocol.

This protocol defines a single required method, `createIssuingCardKeyWithAPIVersion:completion`. To implement this method, make an API call to your backend. Your backend creates an Ephemeral Key object using the Stripe API, and returns it to your app. Your app then calls the provided completion handler with your backend’s API response.

#### Swift

```swift
extension MyViewController: STPIssuingCardEphemeralKeyProvider {
    func createIssuingCardKey(withAPIVersion apiVersion: String, completion: @escaping STPJSONResponseCompletionBlock) {
        // This example uses Alamofire for brevity, but you can make the request however you want
        AF.request("https://myapi.com/ephemeral_keys",
                   method: .post,
                   parameters: ["api_version": apiVersion])
        .responseJSON { response in
            switch response.result {
            case .success:
                if let data = response.data {
                    do {
                        let obj = try JSONSerialization.jsonObject(with: data, options: []) as! [AnyHashable: Any]
                        completion(obj, nil)
                    } catch {
                        completion(nil, error)
                    }
                }
            case .failure(let error):
                completion(nil, error)
            }
        }
    }
}
```

For more context, see how the [sample app](https://github.com/stripe-samples/push-provisioning-samples/blob/main/client/ios/Code/ViewController.swift#L379-L394) implements `STPIssuingCardEphemeralKeyProvider`.

## Update your backend \[Server-side]

The push provisioning implementation exposes methods that expect you to communicate with your own backend to create a Stripe Ephemeral Key and return a JSON of it to your app. This key is a short-lived API credential that you can use to retrieve the encrypted card details for a single instance of a card object.

To make sure that the object returned by the Stripe API is compatible with the version of the iOS or Android SDK you’re using, the Stripe SDK lets you know what API version it prefers. You must explicitly pass this API version to our API when creating the key.

#### curl

```bash
curl https://api.stripe.com/v1/ephemeral_keys \
  -u <<YOUR_SECRET_KEY>>: \
  -d "issuing_card"="{{ISSUING_CARD_ID}}" \
  -H "Stripe-Version: {{API_VERSION}}"
```

```json
{
    "id": "ephkey_1G4V6eEEs6YsaMZ2P1diLWdj",
    "object": "ephemeral_key",
    "associated_objects": [
        {
            "id": "{{CARD_ID}}",
            "type": "issuing.card"
        }
    ],
    "created": 1586556828,
    "expires": 1586560428,
    "livemode": false,
    "secret": "ek_test_YWNjdF8xRmdlTjZFRHelWWxwWVo5LEtLWFk0amJ2N0JOa0htU1JzEZkd2RpYkpJdnM_00z2ftxCGG"
}
```

For more context, see how the [sample backend](https://github.com/stripe-samples/push-provisioning-samples/blob/main/server/ruby/README.md) creates a [Stripe Ephemeral Key](https://github.com/stripe-samples/push-provisioning-samples/blob/main/server/ruby/server.rb#L68-L88).

## Testing

The `com.apple.developer.payment-pass-provisioning` entitlement only works with distribution provisioning profiles, meaning even after you obtain it, the only way to test the end-to-end push provisioning flow is by distributing your app with TestFlight or the App Store.

To help with testing, we provide a mock version of `PKAddPaymentPassViewController` called `STPFakeAddPaymentPassViewController` that you can use interchangeably during testing. This only works in [test mode](https://docs.stripe.com/testing-use-cases.md#test-versus-live-mode) using test mode cards.

#### Swift

```swift
import Stripe

class MyViewController: UIViewController {
  // ...
  func beginPushProvisioning() {
    let config = STPPushProvisioningContext.requestConfiguration(
      withName: "Jenny Rosen", // the cardholder's name
      description: "RocketRides Card", // optional; a description of your card
      last4: "4242", // optional; the last 4 digits of the card
      brand: .visa // optional; the brand of the card
    )let controller = STPFakeAddPaymentPassViewController(requestConfiguration: config, delegate: self)
    self.present(controller!, animated: true, completion: nil)
  }
}
```

To build the sample app, follow the steps in the [readme](https://github.com/stripe-samples/push-provisioning-samples/blob/main/client/ios/README.md). You don’t need to build the app to follow the instructions above.

# Android

> This is a Android for when platform is android. View the full page at https://docs.stripe.com/issuing/cards/digital-wallets?platform=android.
> ![A black UI button that says Add to Google Wallet. There is a Google Wallet logo image to the left of the text.](https://b.stripecdn.com/docs-statics-srv/assets/add_to_google_pay_black.2df6c169bbc605123ec73d37dc73a86e.png)

## Request access

> You must get accesss to [manual provisioning](https://docs.stripe.com/issuing/cards/digital-wallets.md?platform=android#manual-provisioning) before you can request push provisioning.

Stripe provides an SDK wrapper around a private Google library for push provisioning. To distribute your app on the Google Pay Store with push provisioning you need to:

1. [Request access to Google Pay](https://developers.google.com/pay/issuers/requesting-access?api=true). After you complete the form, expect approval within a few hours to a day.
2. After receiving approval, download Google’s [TapAndPay private SDK](https://developers.google.com/pay/issuers/apis/push-provisioning/android/releases). The most recently tested version of the TapAndPay SDK is version 18.
3. [Request access to the push provisioning API](https://support.google.com/faqs/contact/pp_api_allowlist) for your app. You must provide your [application ID](https://developer.android.com/studio/build/application-id) to be added to Google’s allowlist. Details on this process are available in Google’s [documentation](https://developers.google.com/pay/issuers/apis/push-provisioning/android/allowlist). After the process is complete, Google grants push provisioning entitlements.
4. After Google has granted push provisioning entitlements, [contact Stripe](mailto:support-issuing@stripe.com) with your application name, application ID, card network, and card name to complete this step.

## Update your app \[Client-side]

To update your app:

1. Import Google’s [private SDK](https://developers.google.com/pay/issuers/apis/push-provisioning/android/setup).
2. Import Stripe’s SDK.

```java
dependencies {
  [... your dependencies]
  implementation 'com.stripe:stripe-android-issuing-push-provisioning:1.2.2'
}
```

For more context, see the code snippets and references to the sample app at each step. For this step, see how the [sample app](https://github.com/stripe-samples/push-provisioning-samples/blob/main/client/android/app/build.gradle.kts#L111-L118) imports these SDKs.

- Prepare your backend to create ephemeral keys for your cards. [See section below](https://docs.stripe.com/issuing/cards/digital-wallets.md#backend-changes).
- Create an `EphemeralKeyProvider` that extends `PushProvisioningEphemeralKeyProvider`. As the ephemeral key provider will be passed to another activity, it also needs to implement `Parcelable` (see [Parcelable](https://developer.android.com/reference/android/os/Parcelable)). For more context, see how the [sample app](https://github.com/stripe-samples/push-provisioning-samples/blob/main/client/android/app/src/main/java/com/stripe/android/pushprovisioning/network/BackendPushProvisioningEphemeralKeyProvider.kt#L20-L43) defines its `EphemeralKeyProvider`.
- Implement the **Add to Google Pay** button [according to Google’s specifications](https://developers.google.com/pay/issuers/apis/push-provisioning/android/branding-guidelines). The [sample app](https://github.com/stripe-samples/push-provisioning-samples/blob/main/client/android/app/src/main/res/layout/card_picker_item.xml#L19-L25) provides an example of the button adhering to branding guidelines.

> As [recommended](https://developers.google.com/pay/issuers/apis/push-provisioning/android/faq#implementation_questions) by Google, don’t require your users to install the Google Pay app, or check its existence programmatically. The app is only a frontend and you don’t need it for Google Pay to work. Users can manage their cards from within their Google settings in the “Settings” app.

Google requires that the **Add to Google Pay** button only displays when a card doesn’t already exist on the user’s device, and that users with cards pending verification complete the final guided activation process. Use Google’s [list of checkpoints](https://developers.google.com/pay/issuers/apis/push-provisioning/android/test-cases) to help you verify that your implementation is correct.

To check the status of your users’ cards, use [listTokens()](https://developers.google.com/pay/issuers/apis/push-provisioning/android/reading-wallet#listtokens) to retrieve a list of all of your cards already present on the device. Compare the value of `getFpanLastFour()` on each returned object to Stripe’s [last4](https://docs.stripe.com/api/issuing/cards/object.md#issuing_card_object-last4)) property of the [Issued Card object](https://docs.stripe.com/api/issuing/cards/object.md) for the card you want to add. Discard all non-matching objects from the response list.

- If the resulting list is empty, it means that the card you intend to add isn’t present on the device yet. You can proceed with displaying the button as described below.
- If the resulting list contains a `TokenInfo` object, check its [TokenState](https://developers.google.com/pay/issuers/apis/push-provisioning/android/enumerated-values#token_status) by invoking `getTokenState()`.
  - If the status is `TOKEN_STATE_NEEDS_IDENTITY_VERIFICATION`, your user has already attempted to manually add the given card to their device. Display the **Add to Google Pay** button, but help them to recover from this situation by wiring the `onActivityResult` listener to the `tokenize()` method as [outlined in Google’s documentation](https://developers.google.com/pay/issuers/apis/push-provisioning/android/wallet-operations#resolving_yellow_path).
  - If the status is anything else, the card is already present on the device. **Don’t display a Google Pay button.**

Make sure to provide your application ID to Stripe before starting internal testing. Setup can take more than a week, and the consequences of an incomplete setup include receiving inconsistent responses to these two methods. The result of `listTokens()` **only contains cards added after** Stripe completes the setup.

When a user taps the button, launch Stripe’s `PushProvisioningActivity` using the `PushProvisioningActivityStarter`.

```java
new PushProvisioningActivityStarter(
  this, // The Activity or Fragment you are initiating the push provisioning from
  new PushProvisioningActivityStarter.Args(
  "Stripe Card", // The name that will appear on the push provisioning UI
  ephemeralKeyProvider, // Your instance of EphemeralKeyProvider
  false // If you want to enable logs or not
)).startForResult();
```

For more context, see how the [sample app](https://github.com/stripe-samples/push-provisioning-samples/blob/main/client/android/app/src/main/java/com/stripe/android/pushprovisioning/MainActivity.kt#L119-L124) launches `PushProvisioningActivity`.

This prepares the push provisioning and launches the UI to add the card to the wallet. Implement the callback in your `onActivityResult`.

```java
protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
  if (requestCode == PushProvisioningActivityStarter.REQUEST_CODE) {
    if (resultCode == PushProvisioningActivity.RESULT_OK) {
      PushProvisioningActivityStarter.Result success = PushProvisioningActivityStarter.Result.fromIntent(data);
    } else if (resultCode == PushProvisioningActivity.RESULT_ERROR) {
      PushProvisioningActivityStarter.Error error = PushProvisioningActivityStarter.Error.fromIntent(data);
    }
  }
}
```

For more context, see how the [sample app](https://github.com/stripe-samples/push-provisioning-samples/blob/main/client/android/app/src/main/java/com/stripe/android/pushprovisioning/MainActivity.kt#L132-L167) implements `onActivityResult`.

If the provisioning was successful, you’ll receive a `PushProvisioningActivityStarter.Result` containing a `cardTokenId` which is Google’s ID for the card in the active wallet. You can use the rest of the wallet functions with this ID.

If the provisioning encountered an error, a `PushProvisioningActivityStarter.Error` will be returned with a `code` and a `message`. The `message` is a developer-friendly text explaining the error. The `code` can have the following values:

| Enum                                              | Meaning                                                                                            |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **USER\_CANCELED**                                | The user canceled the provisioning.                                                                |
| **CARD\_CANCELED**                                | The card has been canceled or is lost or stolen and can’t be provisioned.                          |
| **EPHEMERAL\_KEY\_ERROR**                         | There was an error retrieving the ephemeral key.                                                   |
| **TAP\_AND\_PAY\_UNAVAILABLE**                    | The TapAndPay library can’t be used, most likely because the app isn’t added to an allowlist.      |
| **NO\_STABLE\_HARDWARE\_ID**                      | This can happen in the development emulator. The app can’t retrieve the stable hardware ID.        |
| **NO\_ACTIVE\_WALLET\_FOUND**                     | No active wallet available. Note that emulators generally don’t have Google Pay.                   |
| **PUSH\_PROVISIONING\_ENCRYPTED\_PAYLOAD\_ERROR** | There was an error contacting Stripe’s servers to get the encrypted payload for push provisioning. |
| **UNKNOWN\_ERROR**                                | An unexpected error occurred. The `message` will have additional information.                      |

## Update your backend \[Server-side]

The push provisioning implementation exposes methods that expect you to communicate with your own backend to create a Stripe Ephemeral Key and return a JSON of it to your app. This key is a short-lived API credential that you can use to retrieve the encrypted card details for a single instance of a card object.

To make sure that the object returned by the Stripe API is compatible with the version of the iOS or Android SDK you’re using, the Stripe SDK lets you know what API version it prefers. You must explicitly pass this API version to our API when creating the key.

#### curl

```bash
curl https://api.stripe.com/v1/ephemeral_keys \
  -u <<YOUR_SECRET_KEY>>: \
  -d "issuing_card"="{{ISSUING_CARD_ID}}" \
  -H "Stripe-Version: {{API_VERSION}}"
```

```json
{
    "id": "ephkey_1G4V6eEEs6YsaMZ2P1diLWdj",
    "object": "ephemeral_key",
    "associated_objects": [
        {
            "id": "{{CARD_ID}}",
            "type": "issuing.card"
        }
    ],
    "created": 1586556828,
    "expires": 1586560428,
    "livemode": false,
    "secret": "ek_test_YWNjdF8xRmdlTjZFRHelWWxwWVo5LEtLWFk0amJ2N0JOa0htU1JzEZkd2RpYkpJdnM_00z2ftxCGG"
}
```

For more context, see how the [sample backend](https://github.com/stripe-samples/push-provisioning-samples/blob/main/server/ruby/README.md) creates a [Stripe Ephemeral Key](https://github.com/stripe-samples/push-provisioning-samples/blob/main/server/ruby/server.rb#L68-L88).

## Testing

All testing must be done in live mode, with live Issuing cards, and on physical devices.

To build the sample app, follow the steps in the [readme](https://github.com/stripe-samples/push-provisioning-samples/blob/main/client/android/README.md). You don’t need to build the app to follow the instructions above.

# React Native

> This is a React Native for when platform is react-native. View the full page at https://docs.stripe.com/issuing/cards/digital-wallets?platform=react-native.
> ![A black UI button that says Add to Apple Wallet. There is an Apple Wallet logo image to the left of the text. It's a grey wallet with blue, yellow, green, and red cards stacked slightly offset.](https://b.stripecdn.com/docs-statics-srv/assets/add_to_apple_wallet.fe8cd234760a7478e34f5e91d22677bb.png)
> ![A black UI button that says Add to Google Wallet. There is a Google Wallet logo image to the left of the text.](https://b.stripecdn.com/docs-statics-srv/assets/add_to_google_pay_black.2df6c169bbc605123ec73d37dc73a86e.png)

## Request access

> You must get accesss to [manual provisioning](https://docs.stripe.com/issuing/cards/digital-wallets.md?platform=android#manual-provisioning) before you can request push provisioning.

### Requesting access for iOS

Push provisioning requires a special entitlement from Apple called `com.apple.developer.payment-pass-provisioning`. You can request it by emailing <support-issuing@stripe.com>. In your email, include your:

- **Card network**: Visa or MasterCard.
- **Card name**: The name of the card displayed in the wallet.
- **App name**: Your app’s name.
- **Developer team ID**: Found in your Apple Developer account settings under [membership](https://developer.apple.com/account/#/membership).
- **ADAM ID**: Your app’s unique numeric ID. Found in [App Store Connect](https://appstoreconnect.apple.com), or in the App Store link to your app (for example, `https://apps.apple.com/app/id123456789`).
- **Bundle ID**: Your app’s bundle identifier, also found in App Store Connect (for example, `com.example.yourapp`).

### Requesting access for Android

Stripe provides an SDK wrapper around a private Google library for push provisioning. To distribute your app on the Google Pay Store with push provisioning you need to request access to this library:

- [Request access to Google Pay](https://developers.google.com/pay/issuers/requesting-access?api=true)
- Download Google’s [TapAndPay private SDK](https://developers.google.com/pay/issuers/apis/push-provisioning/android/releases) (current compatible version is [17.1.2](https://developers.google.com/static/pay/issuers/apis/push-provisioning/android/downloads/tapandpay_sdk.m2repo_2021-07-19_v17.1.2.zip))
- [Request access to the push provisioning API](https://support.google.com/faqs/contact/pp_api_allowlist) for your app. You’ll need to provide your [application ID](https://developer.android.com/studio/build/application-id) to be added to Google’s allowlist. Details on this process are available in Google’s [documentation](https://developers.google.com/pay/issuers/apis/push-provisioning/android/allowlist).
- Provide the same application ID, your app name, card network, and card name to <support-issuing@stripe.com>.

## Setup your app \[Client-side]

The [React Native SDK](https://github.com/stripe/stripe-react-native) is open source and fully documented. Internally, it uses the [native iOS](https://github.com/stripe/stripe-ios) and [Android](https://github.com/stripe/stripe-android) SDKs. To install Stripe’s React Native SDK, run one of the following commands in your project’s directory (depending on which package manager you use):

#### yarn

```bash
yarn add @stripe/stripe-react-native
```

#### npm

```bash
npm install @stripe/stripe-react-native
```

Next, install some other necessary dependencies:

- For iOS, go to the **ios** directory and run `pod install` to ensure that you also install the required native dependencies.
- For Android, there are no more dependencies to install.

> We recommend following the [official TypeScript guide](https://reactnative.dev/docs/typescript#adding-typescript-to-an-existing-project) to add TypeScript support.

### Stripe initialization

To initialize Stripe in your React Native app, either wrap your payment screen with the `StripeProvider` component, or use the `initStripe` initialization method. Only the API [publishable key](https://docs.stripe.com/keys.md#obtain-api-keys) in `publishableKey` is required. The following example shows how to initialize Stripe using the `StripeProvider` component.

```jsx
import { useState, useEffect } from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';

function App() {
  const [publishableKey, setPublishableKey] = useState('');

  const fetchPublishableKey = async () => {
    const key = await fetchKey(); // fetch key from your server here
    setPublishableKey(key);
  };

  useEffect(() => {
    fetchPublishableKey();
  }, []);

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      {/* Your app code here */}
    </StripeProvider>
  );
}
```

> Use your API [test keys](https://docs.stripe.com/keys.md#obtain-api-keys) while you test and develop, and your [live mode](https://docs.stripe.com/keys.md#test-live-modes) keys when you publish your app.

### Android-specific setup

To enable push provisioning on Android, after you receive access to the TapAndPay SDK (see above), you need to [include it in your native Android project](https://developers.google.com/pay/issuers/apis/push-provisioning/android/setup).

Then, you need to import Stripe’s native Android push provisioning library by adding the following to your `android/app/build.gradle` file:

#### Groovy

```groovy
dependencies {
    // ...implementation 'com.stripe:stripe-android-issuing-push-provisioning:1.1.0'
}
```

### iOS-specific setup

To enable push provisioning on iOS, after Stripe confirms the entitlement has been granted, you need to [add the capability to your provisioning profile on app store connect](https://developer.apple.com/account/resources/profiles/list).

Then, you need to add the new entitlement to your `ios/app.config.js` file:

```
"entitlements": {
  "com.apple.developer.payment-pass-provisioning": true
}
```

## Update your backend \[Server-side]

The push provisioning implementation exposes methods that expect you to communicate with your own backend to create a Stripe Ephemeral Key and return a JSON of it to your app. This key is a short-lived API credential that you can use to retrieve the encrypted card details for a single instance of a card object.

To make sure that the object returned by the Stripe API is compatible with the version of the SDK you’re using, you must explicitly pass the API version exported by the React Native SDK to our API when creating the key.

#### curl

```bash
curl https://api.stripe.com/v1/ephemeral_keys \
  -u <<YOUR_SECRET_KEY>>: \
  -d "issuing_card"="{{ISSUING_CARD_ID}}" \
  -H "Stripe-Version: {{API_VERSION}}"
```

```json
{
  "id": "ephkey_1G4V6eEEs6YsaMZ2P1diLWdj",
  "object": "ephemeral_key",
  "associated_objects": [
    {
      "id": "{{CARD_ID}}",
      "type": "issuing.card"
    }
  ],
  "created": 1586556828,
  "expires": 1586560428,
  "livemode": false,
  "secret": "ek_test_YWNjdF8xRmdlTjZFRHelWWxwWVo5LEtLWFk0amJ2N0JOa0htU1JzEZkd2RpYkpJdnM_00z2ftxCGG"
}
```

You should also create an endpoint to retrieve issuing card details that you must pass to the `<AddToWalletButton />` component:

```curl
curl https://api.stripe.com/v1/issuing/cards/ISSUING_CARD_ID \
  -u "<<YOUR_SECRET_KEY>>:"
```

## Update your app \[Client-side]

First, determine if the device is eligible to use push provisioning by checking that the value of `wallets.apple_pay.eligible` in the issued card (retrieved from the second endpoint you created above in step 3) is `true`. If it’s, save the card details to use later in our component, and proceed. If `wallets.apple_pay.eligible` is `false`, don’t show the `<AddToWalletButton />` on iOS, or App Review might reject your app. The same applies to `wallets.google_pay.eligible` for Android.

```javascript
import React, {useEffect, useState} from 'react';
import {Constants} from '@stripe/stripe-react-native';
import {View} from 'react-native';

export default function MyScreen() {
  const [key, setKey] = useState(null);const [card, setCard] = useState(null);

  useEffect(() => {
    fetchEphemeralKey();fetchIssuingCard();
  }, []);
const fetchIssuingCard = async () => {
    const response = await fetch(`${API_URL}/issuing-card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ISSUING_CARD_ID: '{{ISSUING_CARD_ID}}',
      }),
    });

    const card = await response.json();

    if (!card.wallets.apple_pay.eligible) {
      // Do not show <AddToWalletButton /> component on iOS. See card.wallets.apple_pay.ineligible_reason for details
    } else if (!card.wallets.google_pay.eligible) {
      // Do not show <AddToWalletButton /> component on Android. See card.wallets.google_pay.ineligible_reason for details
    } else {
      setCard(card);
    }
  };

  const fetchEphemeralKey = async () => {
    // See above
  };

  return <View />;
}
```

Next, fetch your ephemeral key from the first endpoint you created in Step 3 above, and save it.

```javascript
import React, {useEffect, useState} from 'react';
import {Constants} from '@stripe/stripe-react-native';
import {View} from 'react-native';

export default function MyScreen() {
  const [key, setKey] = useState(null);

  useEffect(() => {
    fetchEphemeralKey();
  }, []);

  const fetchEphemeralKey = async () => {
    const response = await fetch(`${API_URL}/ephemeral-key`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ISSUING_CARD_ID: '{{ISSUING_CARD_ID}}',
        API_VERSION: Constants.API_VERSIONS.ISSUING,
      }),
    });
    const myKey = await response.json();
    setKey(myKey);
  };

  return <View />;
}
```

You don’t need any more server communication. Next, you must determine if the card *can* be added to the wallet. You can check for this with the `canAddCardToWallet` method, which returns an object containing a boolean field `canAddCard`. If `canAddCard` is `false`, don’t render the `AddToWalletButton`, otherwise your app might be rejected by Apple.

On Android, the card might be in the wallet already, but stuck in a bad state. You can add logic to handle this case by checking for a `token` in the `details` object returned from `canAddCardToWallet`. If that response is non-null, and the `token.status` is `"TOKEN_STATE_NEEDS_IDENTITY_VERIFICATION"`, pass that `token` into `<AddToWalletButton />`'s props.

```javascript
import React, {useEffect, useState} from 'react';
import {Constants, canAddCardToWallet, GooglePayCardToken} from '@stripe/stripe-react-native';
import {View} from 'react-native';

export default function MyScreen() {
  const [key, setKey] = useState(null);
  const [card, setCard] = useState(null);const [showAddToWalletButton, setShowAddToWalletButton] = useState(false);
  const [androidCardToken, setAndroidCardToken] = useState(null);

  useEffect(() => {
    fetchEphemeralKey();
    fetchIssuingCard();
  }, []);
const checkIfCanAddCard = async () => {
    const { canAddCard, details, error } = await canAddCardToWallet({
      primaryAccountIdentifier: card?.wallets?.primary_account_identifier,
      cardLastFour: card.last4,
      hasPairedAppleWatch: // Pass a boolean indicating whether or not the device has a paired Apple Watch. iOS only.
    });

    if (error) {
      Alert.alert(error.code, error.message);
    } else {
      setShowAddToWalletButton(canAddCard);
      if (details?.token?.status === 'TOKEN_STATE_NEEDS_IDENTITY_VERIFICATION') {
        setAndroidCardToken(details.token);
      }
    }
  };

  const fetchIssuingCard = async () => {
    // See aboveawait checkIfCanAddCard();
  };

  const fetchEphemeralKey = async () => {
    // See above
  };

  return <View />;
}
```

Now we have all the information we need to show the button:

```javascript
import React, {useEffect, useState} from 'react';
import {
  Constants,
  canAddCardToWallet,
  AddToWalletButton,
  GooglePayCardToken,
} from '@stripe/stripe-react-native';
import {View, Image, Alert, StyleSheet} from 'react-native';

import AddToGooglePayPNG from '../assets/Add-to-Google-Pay-Button-dark-no-shadow.png';

export default function MyScreen() {
  const [key, setKey] = useState(null);
  const [card, setCard] = useState(null);
  const [showAddToWalletButton, setShowAddToWalletButton] = useState(false);
  const [androidCardToken, setAndroidCardToken] = useState<null | GooglePayCardToken>(null);

  useEffect(() => {
    fetchEphemeralKey();
    fetchIssuingCard();
  }, []);

  const canAddCard = async () => {
    // See above
  };

  const fetchIssuingCard = async () => {
    // See above
  };

  const fetchEphemeralKey = async () => {
    // See above
  };

  return (<View>
      {showAddToWalletButton && (
        <AddToWalletButton
          token={androidCardToken}
          androidAssetSource={Image.resolveAssetSource(AddToGooglePayPNG)}
          testEnv={true}
          style={styles.payButton}
          iOSButtonStyle="onLightBackground"
          cardDetails={{
            name: card?.cardholder?.name,
            primaryAccountIdentifier:
              card?.wallets?.primary_account_identifier, // This can be null, but should still always be passed. Failing to pass the primaryAccountIdentifier can result in a failure to provision the card.
            lastFour: card?.last4,
            description: 'Added by Stripe',
          }}
          ephemeralKey={myKey} // this value must contain the full response you received from calling the ${API_URL}/ephemeral-key API
          onComplete={({error}) => {
            Alert.alert(
              error ? error.code : 'Success',
              error
                ? error.message
                : 'Card was successfully added to the wallet.',
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  payButton: {
    // You may add custom styles to your button, but make sure it complies
    // with the relevant platform guidelines:
    // iOS : https://developer.apple.com/wallet/add-to-apple-wallet-guidelines/
    // Android : https://developers.google.com/pay/issuers/apis/push-provisioning/android/branding-guidelines
  },
});
```

When a user taps the button, it launches the UI to add the card to the wallet. Implement the callback in your `onComplete` prop. If the `error` field is non-null, an error occurred and the card wasn’t added to the wallet. If the `error` is null, then the card was successfully provisioned.

### Button style

On iOS, the button style is determined by the `iOSButtonStyle` prop. Set this prop to:

- `onLightBackground` when you show the button on top of a light or white background.
- `onDarkBackground` when you show the button on top of a dark or black background.

On Android, you must pass in the actual image asset to the `androidAssetSource` prop. You can download all the possible asset options [directly from Google](https://developers.google.com/static/pay/issuers/apis/push-provisioning/android/downloads/add-to-wallet-png.zip). Follow [Google’s branding guidelines](https://developers.google.com/pay/issuers/apis/push-provisioning/android/branding-guidelines#style) when implementing your button.

To pass your chosen PNG to the `AddToWalletButton` component, add it to your project, import it like you would any other asset, and then resolve the source with `Image.resolveAssetSource`:

```javascript
import {Image} from 'react-native';
import AddToGooglePayPNG from '../assets/Add-to-Google-Pay-Button-dark-no-shadow.png';

...

<AddToWalletButton
  ...
  androidAssetSource={Image.resolveAssetSource(AddToGooglePayPNG)}
  ...
/>
```

## Testing

### iOS

On iOS, you can test push provisioning in development, on simulators, and with test cards as long as you pass `testEnv={true}` to the `AddToWalletButton` component. Be aware that if the `testEnv` prop is set to `true`, cards won’t actually be added to the device’s wallet. In testing environments, you don’t need the `com.apple.developer.payment-pass-provisioning` entitlement.

### Android

On Android, the `testEnv` prop has no effect. All testing must be done in live mode, with live issuing cards, and on physical devices.

Make sure to provide your application ID to Stripe before starting internal testing.
