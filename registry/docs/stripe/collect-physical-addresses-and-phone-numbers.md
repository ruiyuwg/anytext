# Collect physical addresses and phone numbers

Learn how to collect customer addresses and phone numbers in your mobile app with the Address Element.

# iOS (UIKit)

> This is a iOS (UIKit) for when payment-ui is mobile and platform is ios. View the full page at https://docs.stripe.com/payments/mobile/collect-addresses?payment-ui=mobile\&platform=ios.

To collect complete addresses for billing or shipping, use the [Address Element](https://docs.stripe.com/payments/mobile/address-element.md).

You can also use the Address Element to:

- Collect customer [phone numbers](https://stripe.dev/stripe-ios/stripepaymentsheet/documentation/stripepaymentsheet/addressviewcontroller/addressdetails/phone)
- Utilize autocomplete (enabled by default in iOS)
- Prefill billing information in the Payment Element by passing in a shipping address

Stripe combines the collected address information and the payment method to create a *PaymentIntent* (API object that represents your intent to collect payment from a customer, tracking charge attempts and payment state changes throughout the process).
![Examples of a checkout process where a user selects the Add Shipping Address option. Then they're taken to a new screen to add their shipping address into a form. As they type in their address, auto-complete suggestions are presented for your user to choose from.](https://b.stripecdn.com/docs-statics-srv/assets/ios-overview.4e83bb4e46fd7d131b5c4ff8abee27ea.png)

## Set up Stripe \[Server-side] \[Client-side]

First, you need a Stripe account. [Register now](https://dashboard.stripe.com/register).

The [Stripe iOS SDK](https://github.com/stripe/stripe-ios) is open source, [fully documented](https://stripe.dev/stripe-ios/index.html), and compatible with apps supporting iOS 13 or above.

#### Swift Package Manager

To install the SDK, follow these steps:

1. In Xcode, select **File** > **Add Package Dependencies…** and enter `https://github.com/stripe/stripe-ios-spm` as the repository URL.
2. Select the latest version number from our [releases page](https://github.com/stripe/stripe-ios/releases).
3. Add the **StripePaymentSheet** product to the [target of your app](https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app).

#### CocoaPods

1. If you haven’t already, install the latest version of [CocoaPods](https://guides.cocoapods.org/using/getting-started.html).
2. If you don’t have an existing [Podfile](https://guides.cocoapods.org/syntax/podfile.html), run the following command to create one:
   ```bash
   pod init
   ```
3. Add this line to your `Podfile`:
   ```podfile
   pod 'StripePaymentSheet'
   ```
4. Run the following command:
   ```bash
   pod install
   ```
5. Don’t forget to use the `.xcworkspace` file to open your project in Xcode, instead of the `.xcodeproj` file, from here on out.
6. In the future, to update to the latest version of the SDK, run:
   ```bash
   pod update StripePaymentSheet
   ```

#### Carthage

1. If you haven’t already, install the latest version of [Carthage](https://github.com/Carthage/Carthage#installing-carthage).
2. Add this line to your `Cartfile`:
   ```cartfile
   github "stripe/stripe-ios"
   ```
3. Follow the [Carthage installation instructions](https://github.com/Carthage/Carthage#if-youre-building-for-ios-tvos-or-watchos). Make sure to embed all of the required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripePaymentSheet/README.md#manual-linking).
4. In the future, to update to the latest version of the SDK, run the following command:
   ```bash
   carthage update stripe-ios --platform ios
   ```

#### Manual Framework

1. Head to our [GitHub releases page](https://github.com/stripe/stripe-ios/releases/latest) and download and unzip **Stripe.xcframework.zip**.
2. Drag **StripePaymentSheet.xcframework** to the **Embedded Binaries** section of the **General** settings in your Xcode project. Make sure to select **Copy items if needed**.
3. Repeat step 2 for all required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripePaymentSheet/README.md#manual-linking).
4. In the future, to update to the latest version of our SDK, repeat steps 1–3.

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-ios/releases) page on GitHub. To receive notifications when a new release is published, [watch releases](https://help.github.com/en/articles/watching-and-unwatching-releases-for-a-repository#watching-releases-for-a-repository) for the repository.

Configure the SDK with your Stripe [publishable key](https://dashboard.stripe.com/test/apikeys) on app start. This enables your app to make requests to the Stripe API.

#### Swift

```swift
import UIKitimportStripePaymentSheet

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {StripeAPI.defaultPublishableKey = "<<YOUR_PUBLISHABLE_KEY>>"
        // do any other necessary launch configuration
        return true
    }
}
```

> Use your [test keys](https://docs.stripe.com/keys.md#obtain-api-keys) while you test and develop, and your [live mode](https://docs.stripe.com/keys.md#test-live-modes) keys when you publish your app.

## Set up address autocomplete suggestions

Autocomplete is enabled by default on iOS.

## Configure the Address Element

You can configure the Address Element with details such as displaying default values, setting allowed countries, customizing the appearance, and so on. Refer to [AddressViewController.Configuration](https://github.com/stripe/stripe-ios/blob/address-element-private-beta-2/Stripe/AddressViewController%2BConfiguration.swift#L72-L162) for the complete list of configuration options.

```swift
let addressConfiguration = AddressViewController.Configuration(
  additionalFields: .init(phone: .required),
  allowedCountries: ["US", "CA", "GB"],
  title: "Shipping Address"
)
```

## Retrieve address details

Retrieve the address details by conforming to `AddressViewControllerDelegate` and then using [addressViewControllerDidFinish](https://github.com/stripe/stripe-ios/blob/address-element-private-beta-2/Stripe/AddressViewController.swift#L19) to dismiss the view controller. The address value is either a valid [address](https://github.com/stripe/stripe-ios/blob/8399ea6cfe4e32190238375882e0a793b483d426/Stripe/AddressViewController%2BConfiguration.swift#L16-L36) or nil.

```swift
extension MyViewController: AddressViewControllerDelegate {
    func addressViewControllerDidFinish(_ addressViewController: AddressViewController, with address: AddressViewController.AddressDetails?) {
        addressViewController.dismiss(animated: true)
        self.addressDetails = address
    }
}

```

## Present the Address Element

Create an [AddressViewController](https://github.com/stripe/stripe-ios/blob/address-element-private-beta-2/Stripe/AddressViewController.swift#L26) using the address configuration and delegate from the previous steps. You can either present it in a navigation controller or push it onto a navigation controller.

```swift
self.addressViewController = AddressViewController(configuration: addressConfiguration, delegate: self)
let navigationController = UINavigationController(rootViewController: addressViewController)

present(navigationController, animated: true)
```

## Optional: Prefill shipping addresses in the Payment Element

If you use the mobile Payment Element, set [PaymentSheet.Configuration.shippingDetails](https://stripe.dev/stripe-ios/stripepaymentsheet/documentation/stripepaymentsheet/paymentsheet/configuration-swift.struct/shippingdetails/) to the address collected by the address element. When `shippingDetails` is populated, users have their billing address prefilled and they see a **Billing address is the same as shipping** checkbox. Confirmed PaymentIntents with `shippingDetails` populated also have the [shipping](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-shipping) intent property populated when the PaymentIntent is confirmed.

```swift
var configuration = PaymentSheet.Configuration()
// ...
configuration.shippingDetails = { [weak self] in
    return self?.addressDetails
}

```

## Optional: Customize the appearance

Now that you’ve added the Address Element to your app, you can customize the appearance to fit with the design of the rest of your app. You can configure the appearance with the [Appearance API](https://docs.stripe.com/elements/appearance-api/mobile.md?platform=ios) using [AddressViewController.Configuration.appearance](https://github.com/stripe/stripe-ios/blob/address-element-private-beta-2/Stripe/AddressViewController%2BConfiguration.swift#L149).

## Optional: Set default billing details

To set default values for billing details collected in the payment sheet, configure the `defaultBillingDetails` property. The `PaymentSheet` pre-populates its fields with the values that you provide.

```swift
var configuration = PaymentSheet.Configuration()
configuration.defaultBillingDetails.address.country = "US"
configuration.defaultBillingDetails.email = "foo@bar.com"
```

## Optional: Customize billing details collection

Use `billingDetailsCollectionConfiguration` to specify how you want to collect billing details in the payment sheet.

You can collect your customer’s name, email, phone number, and address.

If you only want to billing details required by the payment method, set `billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod` to true. In that case, the `PaymentSheet.Configuration.defaultBillingDetails` are set as the payment method’s [billing details](https://docs.stripe.com/api/payment_methods/object.md?lang=node#payment_method_object-billing_details).

If you want to collect additional billing details that aren’t necessarily required by the payment method, set `billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod` to false. In that case, the billing details collected through the `PaymentSheet` are set as the payment method’s billing details.

```swift
var configuration = PaymentSheet.Configuration()
configuration.defaultBillingDetails.email = "foo@bar.com"
configuration.billingDetailsCollectionConfiguration.name = .always
configuration.billingDetailsCollectionConfiguration.email = .never
configuration.billingDetailsCollectionConfiguration.address = .full
configuration.billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod = true
```

> Consult with your legal counsel regarding laws that apply to collecting information. Only collect phone numbers if you need them for the transaction.

# iOS (SwiftUI)

> This is a iOS (SwiftUI) for when payment-ui is mobile and platform is plugins. View the full page at https://docs.stripe.com/payments/mobile/collect-addresses?payment-ui=mobile\&platform=plugins.

To collect complete addresses for billing or shipping, use the [Address Element](https://docs.stripe.com/payments/mobile/address-element.md) in SwiftUI.

You can also use the Address Element to:

- Collect customer [phone numbers](https://stripe.dev/stripe-ios/stripepaymentsheet/documentation/stripepaymentsheet/addresselement/addressdetails/phone)
- Use autocomplete (enabled by default in iOS)
- Prefill billing information in the Payment Element by passing in a shipping address

Stripe combines the collected address information and the payment method to create a *PaymentIntent* (API object that represents your intent to collect payment from a customer, tracking charge attempts and payment state changes throughout the process).
![Examples of a checkout process where a user selects the Add Shipping Address option. They're taken to a new screen to add their shipping address into a form. Auto-complete suggests options for your user to choose from.](https://b.stripecdn.com/docs-statics-srv/assets/ios-overview.4e83bb4e46fd7d131b5c4ff8abee27ea.png)

## Set up Stripe \[Server-side] \[Client-side]

First, you need a Stripe account. [Register now](https://dashboard.stripe.com/register).

The [Stripe iOS SDK](https://github.com/stripe/stripe-ios) is open source, [fully documented](https://stripe.dev/stripe-ios/index.html), and compatible with apps supporting iOS 13 or above.

#### Swift Package Manager

To install the SDK, follow these steps:

1. In Xcode, select **File** > **Add Package Dependencies…** and enter `https://github.com/stripe/stripe-ios-spm` as the repository URL.
2. Select the latest version number from our [releases page](https://github.com/stripe/stripe-ios/releases).
3. Add the **StripePaymentSheet** product to the [target of your app](https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app).

#### CocoaPods

1. If you haven’t already, install the latest version of [CocoaPods](https://guides.cocoapods.org/using/getting-started.html).
2. If you don’t have an existing [Podfile](https://guides.cocoapods.org/syntax/podfile.html), run the following command to create one:
   ```bash
   pod init
   ```
3. Add this line to your `Podfile`:
   ```podfile
   pod 'StripePaymentSheet'
   ```
4. Run the following command:
   ```bash
   pod install
   ```
5. Don’t forget to use the `.xcworkspace` file to open your project in Xcode, instead of the `.xcodeproj` file, from here on out.
6. In the future, to update to the latest version of the SDK, run:
   ```bash
   pod update StripePaymentSheet
   ```

#### Carthage

1. If you haven’t already, install the latest version of [Carthage](https://github.com/Carthage/Carthage#installing-carthage).
2. Add this line to your `Cartfile`:
   ```cartfile
   github "stripe/stripe-ios"
   ```
3. Follow the [Carthage installation instructions](https://github.com/Carthage/Carthage#if-youre-building-for-ios-tvos-or-watchos). Make sure to embed all of the required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripePaymentSheet/README.md#manual-linking).
4. In the future, to update to the latest version of the SDK, run the following command:
   ```bash
   carthage update stripe-ios --platform ios
   ```

#### Manual Framework

1. Head to our [GitHub releases page](https://github.com/stripe/stripe-ios/releases/latest) and download and unzip **Stripe.xcframework.zip**.
2. Drag **StripePaymentSheet.xcframework** to the **Embedded Binaries** section of the **General** settings in your Xcode project. Make sure to select **Copy items if needed**.
3. Repeat step 2 for all required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripePaymentSheet/README.md#manual-linking).
4. In the future, to update to the latest version of our SDK, repeat steps 1–3.

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-ios/releases) page on GitHub. To receive notifications when a new release is published, [watch releases](https://help.github.com/en/articles/watching-and-unwatching-releases-for-a-repository#watching-releases-for-a-repository) for the repository.

Configure the SDK with your Stripe [publishable key](https://dashboard.stripe.com/test/apikeys) on app start. This enables your app to make requests to the Stripe API.

#### Swift

```swift
import UIKitimportStripePaymentSheet

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {StripeAPI.defaultPublishableKey = "<<YOUR_PUBLISHABLE_KEY>>"
        // do any other necessary launch configuration
        return true
    }
}
```

> Use your [test keys](https://docs.stripe.com/keys.md#obtain-api-keys) while you test and develop, and your [live mode](https://docs.stripe.com/keys.md#test-live-modes) keys when you publish your app.

## Set up address autocomplete suggestions

Autocomplete is enabled by default on iOS.

## Configure the Address Element

You can configure the Address Element with details such as displaying default values, setting allowed countries, customizing the appearance, and so on. Refer to `AddressElement.Configuration` for the complete list of configuration options.

```swift
var configuration = AddressElement.Configuration()
configuration.allowedCountries = ["US", "CA", "GB", "AU"]
configuration.buttonTitle = "Save Address"
```

## Present the Address Element

```swift
import SwiftUI
import StripePaymentSheet

struct MyView: View {
    @State private var showingAddressElement = false
    @State private var collectedAddress: AddressElement.AddressDetails?
    
    var body: some View {
        VStack {
            Button("Collect Address") {
                showingAddressElement = true
            }
            .sheet(isPresented: $showingAddressElement) {
                AddressElement(
                    address: $collectedAddress,
                    configuration: configuration
                )
            }
            
            // Display collected address
            if let address = collectedAddress {
                AddressView(address: address)
            }
        }
    }
} 
```

## Retrieve address details

The Address Element automatically updates the bound `address` variable when the customer completes or cancels the address collection:

```swift
struct AddressView: View {
    let address: AddressElement.AddressDetails
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Collected Address:")
                .font(.headline)
            
            if let name = address.name {
                Text("Name: \(name)")
            }
            
            Text("Address: \(address.address.line1)")
            
            if let city = address.address.city {
                Text("City: \(city)")
            }
            
            Text("Country: \(address.address.country)")
            
            if let phone = address.phone {
                Text("Phone: \(phone)")
            }
        }
        .padding()
    }
}
```

## Optional: Customize the appearance

Now that you’ve added the Address Element to your app, you can customize the appearance to fit with the design of the rest of your app. You can configure the appearance with the Appearance API using `AddressElement.Configuration.appearance`.

## Optional: Set default billing details

To set default values for billing details collected in the payment sheet, configure the `defaultBillingDetails` property. The `PaymentSheet` pre-populates its fields with the values that you provide.

```swift
var configuration = PaymentSheet.Configuration()
configuration.defaultBillingDetails.address.country = "US"
configuration.defaultBillingDetails.email = "foo@bar.com"
```

## Optional: Customize billing details collection

Use `billingDetailsCollectionConfiguration` to specify how you want to collect billing details in the payment sheet.

You can collect your customer’s name, email, phone number, and address.

If you only want to billing details required by the payment method, set `billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod` to true. In that case, the `PaymentSheet.Configuration.defaultBillingDetails` are set as the payment method’s [billing details](https://docs.stripe.com/api/payment_methods/object.md?lang=node#payment_method_object-billing_details).

If you want to collect additional billing details that aren’t necessarily required by the payment method, set `billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod` to false. In that case, the billing details collected through the `PaymentSheet` are set as the payment method’s billing details.

```swift
var configuration = PaymentSheet.Configuration()
configuration.defaultBillingDetails.email = "foo@bar.com"
configuration.billingDetailsCollectionConfiguration.name = .always
configuration.billingDetailsCollectionConfiguration.email = .never
configuration.billingDetailsCollectionConfiguration.address = .full
configuration.billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod = true
```

> Consult with your legal counsel regarding laws that apply to collecting information. Only collect phone numbers if you need them for the transaction.

# Android

> This is a Android for when payment-ui is mobile and platform is android. View the full page at https://docs.stripe.com/payments/mobile/collect-addresses?payment-ui=mobile\&platform=android.

To collect complete addresses for billing or shipping, use the [Address Element](https://docs.stripe.com/payments/mobile/address-element.md).

You can also use the Address Element to:

- Collect customer [phone numbers](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet.addresselement/-address-launcher/-additional-fields-configuration/index.html)
- Enable [autocomplete](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet.addresselement/-address-launcher/-configuration/index.html)
- Prefill billing information in the Payment Element by passing in a shipping address

Stripe combines the collected address information and the payment method to create a *PaymentIntent* (API object that represents your intent to collect payment from a customer, tracking charge attempts and payment state changes throughout the process).
![Examples of a checkout process where a user selects the Add Shipping Address option. They're then taken to a new screen to add their shipping address into a form (they see auto-complete suggestions as they type in their address).](https://b.stripecdn.com/docs-statics-srv/assets/android-overview.6061212dc737aa700b79242cb5f77782.png)

## Set up Stripe \[Server-side] \[Client-side]

First, you need a Stripe account. [Register now](https://dashboard.stripe.com/register).

The [Stripe Android SDK](https://github.com/stripe/stripe-android) is open source and [fully documented](https://stripe.dev/stripe-android/).

To install the SDK, add `stripe-android` to the `dependencies` block of your [app/build.gradle](https://developer.android.com/studio/build/dependencies) file:

#### Kotlin

```kotlin
plugins {
    id("com.android.application")
}

android { ... }

dependencies {
  // ...

  // Stripe Android SDK
  implementation("com.stripe:stripe-android:23.0.2")
  // Include the financial connections SDK to support US bank account as a payment method
  implementation("com.stripe:financial-connections:23.0.2")
}
```

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-android/releases) page on GitHub. To receive notifications when a new release is published, [watch releases for the repository](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).

Configure the SDK with your Stripe [publishable key](https://dashboard.stripe.com/apikeys) so that it can make requests to the Stripe API, such as in your `Application` subclass:

#### Kotlin

```kotlin
import com.stripe.android.PaymentConfiguration

class MyApp : Application() {
    override fun onCreate() {
        super.onCreate()
        PaymentConfiguration.init(
            applicationContext,
            "<<YOUR_PUBLISHABLE_KEY>>"
        )
    }
}
```

> Use your [test keys](https://docs.stripe.com/keys.md#obtain-api-keys) while you test and develop, and your [live mode](https://docs.stripe.com/keys.md#test-live-modes) keys when you publish your app.

## Set up address autocomplete suggestions

The address element uses the [Google Places SDK](https://developers.google.com/maps/documentation/places/android-sdk/overview) to fetch address autocomplete suggestions. To enable autocomplete suggestions, you need to include the Google Places SDK dependency to your app’s `build.gradle`.

#### Groovy

```groovy
dependencies {
    implementation 'com.google.android.libraries.places:places:2.6.0'
}
```

Address autocomplete suggestions requires a Google Places API key. Follow the [Google Places SDK setup guide](https://developers.google.com/maps/documentation/places/android-sdk/cloud-setup) to generate your API key.

## Configure the Address Element

You can configure the Address Element with details such as displaying default values, setting allowed countries, customizing the appearance, and so on. Refer to [AddressLauncher.Configuration](https://github.com/stripe/stripe-android/blob/master/paymentsheet/src/main/java/com/stripe/android/paymentsheet/addresselement/AddressLauncher.kt#L72) for the complete list of configuration options.

```kotlin
val addressConfiguration = AddressLauncher.Configuration(
  additionalFields: AddressLauncher.AdditionalFieldsConfiguration(
    phone: AdditionalFieldsConfiguration.FieldConfiguration.Required
  ),
  allowedCountries: setOf("US", "CA", "GB"),
  title: "Shipping Address",
  googlePlacesApiKey = "(optional) YOUR KEY HERE"
)
```

## Retrieve address details

Retrieve the address details by creating an instance of `AddressLauncher` in the `onCreate` lifecycle method of your `Activity` or `Fragment` and creating a callback method that implements the `AddressLauncherResultCallback` interface.

```kotlin
private lateinit var addressLauncher: AddressLauncher
private var shippingDetails: AddressDetails? = null

override fun onCreate(savedInstanceState: Bundle?) {
    addressLauncher = AddressLauncher(this, ::onAddressLauncherResult)
}

private fun onAddressLauncherResult(result: AddressLauncherResult) {
    // TODO: Handle result and update your UI
    when (result) {
        is AddressLauncherResult.Succeeded -> {
            shippingDetails = result.address
        }
        is AddressLauncherResult.Canceled -> {
            // TODO: Handle cancel
        }
    }
}
```

The `AddressLauncherResult` can be `Succeeded` or `Canceled`. See more [implementation details](https://github.com/stripe/stripe-android/blob/master/paymentsheet/src/main/java/com/stripe/android/paymentsheet/addresselement/AddressLauncherResult.kt).

> Stripe requires that you instantiate the `AddressLauncher` during the `onCreate` lifecycle event and not after. Otherwise, the callback can’t be registered properly, and your app will crash.

## Present the Address Element

Present the address element using the address launcher and configuration from the previous steps.

```kotlin
addressLauncher.present(
   publishableKey = publishableKey,
   configuration = addressConfiguration
)
```

## Optional: Prefill shipping addresses in the Payment Element

If you use the mobile Payment Element, set [PaymentSheet.Configuration.shippingDetails](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-configuration/index.html) to the address collected by the address element. When `shippingDetails` is populated, users have their billing address prefilled and they see a **Billing address is the same as shipping** checkbox. Confirmed PaymentIntents with `shippingDetails` populated also have the [shipping](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-shipping) intent property populated when the PaymentIntent is confirmed

```kotlin
val configuration = PaymentSheet.Configuration.Builder("Example, Inc.")
  // ...
  .shippingDetails(shippingDetails)
  .build()
```

## Optional: Customize the appearance

Now that you’ve added the Address Element to your app, you can customize the appearance to fit with the design of the rest of your app. You can configure the appearance with the [Appearance API](https://docs.stripe.com/elements/appearance-api/mobile.md?platform=android) using [AddressLauncher.Configuration.appearance](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet.addresselement/-address-launcher/-configuration/index.html).

## Optional: Set default billing details

To set default values for billing details collected in the payment sheet, configure the `defaultBillingDetails` property. The `PaymentSheet` pre-populates its fields with the values that you provide.

#### Kotlin

```kotlin
val address = PaymentSheet.Address(country = "US")
val billingDetails = PaymentSheet.BillingDetails(
  address = address,
  email = "foo@bar.com"
)
val configuration = PaymentSheet.Configuration.Builder(merchantDisplayName = "Merchant, Inc.")
  .defaultBillingDetails(billingDetails)
  .build()
```

## Optional: Customize billing details collection

### Configure collection of billing details

Use `BillingDetailsCollectionConfiguration` to specify how you want to collect billing details in the PaymentSheet.

You can collect your customer’s name, email, phone number, and address.

If you want to attach default billing details to the PaymentMethod object even when those fields aren’t collected in the UI, set `billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod` to `true`.

#### Kotlin

```kotlin
val billingDetails = PaymentSheet.BillingDetails(
  email = "foo@bar.com"
)
val billingDetailsCollectionConfiguration = BillingDetailsCollectionConfiguration(
  attachDefaultsToPaymentMethod = true,
  name = BillingDetailsCollectionConfiguration.CollectionMode.Always,
  email = BillingDetailsCollectionConfiguration.CollectionMode.Never,
  address = BillingDetailsCollectionConfiguration.AddressCollectionMode.Full,
)
val configuration = PaymentSheet.Configuration.Builder(merchantDisplayName = "Merchant, Inc.")
  .defaultBillingDetails(billingDetails)
  .billingDetailsCollectionConfiguration(billingDetailsCollectionConfiguration)
  .build()
```

> Consult with your legal counsel regarding laws that apply to collecting information. Only collect phone numbers if you need them for the transaction.

# React Native

> This is a React Native for when payment-ui is mobile and platform is react-native. View the full page at https://docs.stripe.com/payments/mobile/collect-addresses?payment-ui=mobile\&platform=react-native.

To collect complete addresses for billing or shipping, use the [Address Element](https://docs.stripe.com/payments/mobile/address-element.md).

You can also use the Address Element to:

- Collect customer [phone numbers](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet.addresselement/-address-launcher/-additional-fields-configuration/index.html)
- Enable [autocomplete](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet.addresselement/-address-launcher/-configuration/index.html)
- Prefill billing information in the Payment Element by passing in a shipping address

Stripe combines the collected address information and the payment method to create a *PaymentIntent* (API object that represents your intent to collect payment from a customer, tracking charge attempts and payment state changes throughout the process).
![Examples of a checkout process where a user selects the Add Shipping Address option. They're then taken to a new screen to add their shipping address into a form (they see auto-complete suggestions as they type in their address).](https://b.stripecdn.com/docs-statics-srv/assets/android-overview.6061212dc737aa700b79242cb5f77782.png)

## Set up Stripe \[Server-side] \[Client-side]

First, you need a Stripe account. [Register now](https://dashboard.stripe.com/register).

The [React Native SDK](https://github.com/stripe/stripe-react-native) is open source and fully documented. Internally, it uses the native [iOS](https://github.com/stripe/stripe-ios) and [Android](https://github.com/stripe/stripe-android) SDKs. To install Stripe’s React Native SDK, run one of the following commands in your project’s directory (depending on which package manager you use):

#### yarn

```bash
yarn add @stripe/stripe-react-native
```

#### npm

```bash
npm install @stripe/stripe-react-native
```

Next, install some other necessary dependencies:

- For iOS, go to the **ios** directory and run `pod install` to make sure that you also install the required native dependencies.
- For Android, you don’t need to install any more dependencies.

### Stripe initialization

To initialize Stripe in your React Native app, either wrap your payment screen with the `StripeProvider` component, or use the `initStripe` initialization method. Only the API [publishable key](https://docs.stripe.com/keys.md#obtain-api-keys) in `publishableKey` is required. The following example shows how to initialize Stripe using the `StripeProvider` component.

```javascript
import { StripeProvider } from '@stripe/stripe-react-native';

function App() {
  return (
    <StripeProvider
      publishableKey="<<YOUR_PUBLISHABLE_KEY>>"
    >
      // Your app code here
    </StripeProvider>
  );
}
```

> Use your API [test keys](https://docs.stripe.com/keys.md#obtain-api-keys) while you test and develop, and your [live mode](https://docs.stripe.com/keys.md#test-live-modes) keys when you publish your app.

## Set up address autocomplete suggestions

Autocomplete is enabled by default on iOS, but to enable autocomplete suggestions on Android, you need to include the [Google Places SDK](https://developers.google.com/maps/documentation/places/android-sdk/overview) dependency in your app’s `build.gradle`:

#### Groovy

```groovy
dependencies {
    implementation 'com.google.android.libraries.places:places:2.6.0'
}
```

Address autocomplete suggestions requires a Google Places API key. Follow the [Google Places SDK setup guide](https://developers.google.com/maps/documentation/places/android-sdk/cloud-setup) to generate your API key.

## Configure the Address Element

You can configure the Address Element with details such as displaying default values, setting allowed countries, customizing the appearance, and so on. See the [list of available options](https://github.com/stripe/stripe-react-native/blob/master/src/components/AddressSheet.tsx#L19-L51) for more information.

```jsx
<AddressSheet
  appearance={{
    colors: {
      primary: '#F8F8F2',
      background: '#272822'
    }
  }}
  defaultValues={{
    phone: '111-222-3333',
    address: {
      country: 'United States',
      city: 'San Francisco',
    },
  }}
  additionalFields={{
    phoneNumber: 'required',
  }}
  allowedCountries={['US', 'CA', 'GB']}
  primaryButtonTitle={'Use this address'}
  sheetTitle={'Shipping Address'}
  googlePlacesApiKey={'(optional) YOUR KEY HERE'}
/>
```

## Present the Address Element and retrieve details

Retrieve the address details by setting the `visible` property to `true`, and adding callback methods for the `onSubmit` and `onError` properties:

```jsx
<AddressSheet
  visible={true}
  onSubmit={async (addressDetails) => {
    // Make sure to set `visible` back to false to dismiss the address element.
    setAddressSheetVisible(false);

    // Handle result and update your UI
  }}
  onError={(error) => {
    if (error.code === AddressSheetError.Failed) {
      Alert.alert('There was an error.', 'Check the logs for details.');
      console.log(err?.localizedMessage);
    }
   // Make sure to set `visible` back to false to dismiss the address element.
    setAddressSheetVisible(false);
  }}
/>
```

## Optional: Prefill shipping addresses in the Payment Element

If you use the mobile Payment Element, set [defaultShippingDetails](https://github.com/stripe/stripe-react-native/blob/address-element-private-beta/src/types/PaymentSheet.ts#L17) to the address collected by the address element. When `defaultShippingDetails` is populated, users have their billing address prefilled and they see a **Billing address is the same as shipping** checkbox. Confirmed PaymentIntents with `defaultShippingDetails` populated also have the [shipping](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-shipping) intent property populated when the PaymentIntent is confirmed

```jsx
const { error } = await initPaymentSheet({
  ...
  defaultShippingDetails: addressDetails,
});
```

## Optional: Customize the appearance

Now that you’ve added the Address Element to your app, you can customize the appearance to fit with the design of the rest of your app. You can configure the appearance with the [Appearance API](https://docs.stripe.com/elements/appearance-api/mobile.md?platform=react-native), using the `appearance` property on the `<AddressSheet/>` component.

## Optional: Set default billing details

To set default values for billing details collected in the PaymentSheet, configure the `defaultBillingDetails` property. The `PaymentSheet` pre-populates its fields with the values that you provide.

```javascript
await initPaymentSheet({
  // ...
  defaultBillingDetails: {
      email: 'foo@bar.com',
      address: {
        country: 'US',
      },
  },
});
```

## Optional: Customize billing details collection

Use `billingDetailsCollectionConfiguration` to specify how you want to collect billing details in the PaymentSheet.

You can collect your customer’s name, email, phone number, and address.

If you don’t intend to collect the values that the payment method requires, you must do the following:

1. Attach the values that aren’t collected by `PaymentSheet` to the `defaultBillingDetails` property.
2. Set `billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod` to `true`.

```javascript
await initPaymentSheet({
  // ...
  defaultBillingDetails: {
    email: 'foo@bar.com',
  },
  billingDetailsCollectionConfiguration: {
    name: PaymentSheet.CollectionMode.ALWAYS,
    email: PaymentSheet.CollectionMode.NEVER,
    address: PaymentSheet.AddressCollectionMode.FULL,
    attachDefaultsToPaymentMethod: true
  },
});
```

> Consult with your legal counsel regarding laws that apply to collecting information. Only collect phone numbers if you need them for the transaction.
