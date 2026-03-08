# Terminal SDK migration guide

Learn how to migrate to version 5.0.0 of the Stripe Terminal SDK.

The Stripe Terminal iOS and Android SDKs have been updated with a number of breaking changes in APIs and behavior, some of which require you to update your integration with the Stripe Terminal SDK. To improve consistency between our SDKs and to simplify your application logic and integration, we regularly make changes in major version updates that might affect the way your integration works or behaves. This guide explains the latest changes to help you upgrade your integration.

> Building a new Stripe Terminal integration? Visit our [Design an integration](https://docs.stripe.com/terminal/designing-integration.md) page to learn how to get started.

## Migrate to version 5.0.0

Here’s what you need to know about the version 5.0.0 Stripe Terminal iOS and Android SDKs:

- Simplified payment integration
  - Process payments, setup intents, and refunds with a single method call combining collect and confirm steps.
- Supports modern Swift async variants and Kotlin Coroutines for simplifying complex asynchronous flows
  - Swift concurrency (async/await) for iOS and Kotlin Coroutines for Android.
- Customer cancellation enabled by default
  - On supported readers, customers can now cancel transactions by default during payment, setup, refund, and data collection flows.
- Improved mobile reader and Tap to Pay reader auto reconnection observability
  - Enhanced reader auto-reconnection handling with more connection status states for mobile readers (Bluetooth and USB) and Tap to Pay readers.
- Discover card acceptance support for Tap to Pay on Android (Public preview)
  - Accept Discover card payments with Tap to Pay on Android.
- Updates to minimum supported platform versions from iOS 14.0 to iOS 15.0

# iOS

> This is a iOS for when terminal-sdk-platform is ios. View the full page at https://docs.stripe.com/terminal/references/sdk-migration-guide?terminal-sdk-platform=ios.

If your application currently uses a Terminal iOS SDK version earlier than 5.0.0, there are several changes you need to make to upgrade. For a detailed list of the changes from version 4.x to 5.0.0, see the [SDK changelog](https://github.com/stripe/stripe-terminal-ios/blob/master/CHANGELOG.md).

## Update your minimum supported version to iOS 15 or higher

We regularly update the minimum supported version of our SDKs to streamline our developer support efforts.

Existing 4.X versions of the Terminal iOS SDK will continue to support devices running *iOS 14* and higher.

## Simplified payment integration

### Update to unified payment processing

The v5 SDK includes methods that combine the collect and confirm steps into a single operation. While the existing `collectPaymentMethod` and `confirmPaymentIntent` methods continue to work, we recommend using the unified methods for simpler integrations.

#### Processing payments with processPaymentIntent

Replace two-step collect and confirm with a single `processPaymentIntent` method call.

*Before*

#### Swift

```swift
// Step 1: Collect payment method
Terminal.shared.collectPaymentMethod(paymentIntent, collectConfig: collectConfig) { collectedPaymentIntent, collectError in
    guard let collectedPaymentIntent = collectedPaymentIntent else {
        // Payment method collection failed
        return
    }
    // Step 2: Confirm the payment
    Terminal.shared.confirmPaymentIntent(collectedPaymentIntent) { confirmedPaymentIntent, confirmError in
        if let confirmedPaymentIntent = confirmedPaymentIntent {
            // Payment successful
        } else {
            // Payment confirmation failed
        }
    }
}
```

*After*

#### Swift

```swift
// Process and confirm the payment in one step
Terminal.shared.processPaymentIntent(paymentIntent, collectConfig: collectConfig) { processedPaymentIntent, processError in
    if let processedPaymentIntent = processedPaymentIntent {
        // Payment successful
    } else {
        // Payment failed
    }
}
```

#### Processing refunds with processRefund

The `collectRefundPaymentMethod` and `confirmRefund` methods are now deprecated. Use `processRefund` instead.

*Before*

#### Swift

```swift
// Step 1: Collect refund payment method
Terminal.shared.collectRefundPaymentMethod(refundParams) { collectError in
    guard collectError == nil else {
        // Refund collection failed
        return
    }
    // Step 2: Confirm the refund
    Terminal.shared.confirmRefund { refund, confirmError in
        if let refund = refund {
            // Refund successful
        } else {
            // Refund confirmation failed
        }
    }
}
```

*After*

#### Swift

```swift
// Process the refund in one step
Terminal.shared.processRefund(refundParams) { refund, refundError in
    if let refund = refund {
        // Refund successful
    } else {
        // Refund failed
    }
}
```

#### Processing setup intents with processSetupIntent

Replace two-step collect and confirm with a single `processSetupIntent` method call.

*Before*

#### Swift

```swift
// Step 1: Collect setup intent payment method
Terminal.shared.collectSetupIntentPaymentMethod(setupIntent, customerConsentCollected: true) { collectedSetupIntent, collectError in
    guard let collectedSetupIntent = collectedSetupIntent else {
        // Setup intent collection failed
        return
    }
    // Step 2: Confirm the setup intent
    Terminal.shared.confirmSetupIntent(collectedSetupIntent) { confirmedSetupIntent, confirmError in
        if let confirmedSetupIntent = confirmedSetupIntent {
            // Setup intent successful
        } else {
            // Setup intent confirmation failed
        }
    }
}
```

*After*

#### Swift

```swift
// Configure with allowRedisplay
let config = try CollectSetupIntentConfigurationBuilder()
    .setAllowRedisplay(.always)
    .build()

// Process the setup intent in one step
Terminal.shared.processSetupIntent(setupIntent, collectConfig: config) { processedSetupIntent, setupError in
    if let processedSetupIntent = processedSetupIntent {
        // Setup intent successful
    } else {
        // Setup intent failed
    }
}
```

### Swift async variant support

The SDK now provides async variants for Terminal methods. You can write cleaner, sequential code instead of nesting completion handlers.

*Before*

```swift
let cancelable = Terminal.shared.collectPaymentMethod(paymentIntent, collectConfig: collectConfig) { collectedPaymentIntent, collectError in
    guard let collectedPaymentIntent = collectedPaymentIntent else {
        // Payment method collection failed
        return
    }
    Terminal.shared.confirmPaymentIntent(collectedPaymentIntent) { confirmedPaymentIntent, confirmError in
        // Handle confirmation
    }
}
```

*After*

```swift
let collectTask = Task {
    do {
        let collectedIntent = try await Terminal.shared.collectPaymentMethod(paymentIntent, collectConfig: collectConfig)
        let confirmedIntent = try await Terminal.shared.confirmPaymentIntent(collectedIntent)
        // Payment successful
    } catch {
        // Handle error
    }
}
// Use collectTask.cancel() to cancel the operation when needed
```

## Platform and initialization

### Update Terminal initialization

The `setTokenProvider` method has been removed. You must now initialize the SDK with the static `Terminal.initWithTokenProvider(_tokenProvider:)` method before accessing the `Terminal.shared` singleton.

*Before*

#### Swift

```swift
// In your AppDelegate or scene delegate
Terminal.setTokenProvider(yourTokenProvider)
```

*After*

#### Swift

```swift
// In your AppDelegate or scene delegate, at app launch
Terminal.initWithTokenProvider(yourTokenProvider)
```

## Reader discovery and connection

### Update DiscoveryConfiguration initialization

You can no longer initialize `DiscoveryConfiguration` objects directly with `init` or `new`. You must now use their associated builder classes.

*Before*

#### Swift

```swift
let config = SCPInternetDiscoveryConfiguration(isSimulated: true)
```

*After*

#### Swift

```swift
let config = InternetDiscoveryConfiguration.Builder()
    .setSimulated(true)
    .build()
```

### Handle reconnection status changes

A new `.reconnecting` value has been added to the `ConnectionStatus` enum. During a reconnect, `Terminal.shared.connectedReader` will now be `nil` until the reconnection is successful.

*Before*

#### Swift

```swift
func terminal(_ terminal: Terminal, didChange connectionStatus: ConnectionStatus) {
    switch connectionStatus {
    case .notConnected:
        // Handle not connected
    case .connected:
        // Handle connected
    @unknown default:
        break
    }
}
```

*After*

#### Swift

```swift
func terminal(_ terminal: Terminal, didChange connectionStatus: ConnectionStatus) {
    switch connectionStatus {
    case .notConnected:
        // Handle not connected
    case .connected:
        // Handle connected
    case .reconnecting:
        // Handle reconnection in progress
    @unknown default:
        break
    }
}
```

### Streamlined connection with easyConnect

For smart readers and Tap to Pay integrations using iOS SDK 5.1 or newer, you can now use `Terminal.shared.easyConnect`, which combines discovery and connection into a single method call.

*Before*

#### Swift

```swift
// Step 1: Discover the reader
Terminal.shared.discoverReaders(config, delegate: discoveryDelegate) { error in
    if let error = error {
        // Handle discovery error
    }
}

// In your DiscoveryDelegate
func terminal(_ terminal: Terminal, didUpdateDiscoveredReaders readers: [Reader]) {
    guard let selectedReader = readers.first else { return }
    // Step 2: Connect to the reader
    Terminal.shared.connectReader(selectedReader, connectionConfig: connectionConfig) { reader, error in
        if let reader = reader {
            // Handle successful connection
        } else if let error = error {
            // Handle connection error
        }
    }
}
```

*After*

#### Swift

```swift
// Discover and connect in one step by providing discovery filter
let discoveryConfig = try InternetDiscoveryConfigurationBuilder()
    .setLocationId("tml_1234567890") // optional, specify your location ID
    .setDiscoveryFilter(.bySerial("YOUR-READER-SERIAL-NUMBER"))
    .build()

let connectionConfig = try InternetConnectionConfigurationBuilder()
    .setFailIfInUse(false)
    .build()

let easyConnectConfig = InternetEasyConnectConfiguration(
    discoveryConfiguration: discoveryConfig,
    connectionConfiguration: connectionConfig
)

Terminal.shared.easyConnect(
    easyConnectConfig,
    delegate: internetReaderDelegate
) { reader, error in
    if let reader = reader {
        // Handle successful connection
    } else if let error = error {
        // Handle failure
    }
}
```

### Internet reader discovery filtering

Internet reader discovery now supports filtering by reader ID or serial number. Set the `discoveryFilter` property on `InternetDiscoveryConfigurationBuilder` to discover a specific reader.

*Before*

#### Swift

```swift
let config = InternetDiscoveryConfigurationBuilder()
    .setLocationId("tml_1234567890")
    .build()
```

*After*

#### Swift

```swift
let config = try InternetDiscoveryConfigurationBuilder()
    .setLocationId("tml_1234567890") // optional
    .setDiscoveryFilter(.bySerial("READER-SERIAL-NUMBER")) // or .byReaderId("tmr_YOUR-READER-STRIPE-ID") to filter by reader id
    .build()
```

## Payment acceptance and data collection

### Customer cancellation is now enabled by default

On supported readers, the ability for customers to cancel transactions is now *enabled by default*. The `customerCancellation` property has changed from a `Bool` to the new `SCPCustomerCancellation` enum.

*Before*

#### Swift

```swift
let collectConfig = try CollectConfigurationBuilder()
    .setEnableCustomerCancellation(false)
    .build()
```

*After*

#### Swift

```swift
let collectConfig = try CollectPaymentIntentConfigurationBuilder()
    .setCustomerCancellation(.disableIfAvailable)
    .build()
```

### Interac refund parameter updates

If you create `SCPRefundParameters` for an Interac refund using a PaymentIntent ID, you must now also pass the PaymentIntent’s `clientSecret`. You can alternatively continue using the charge ID, which doesn’t require the `clientSecret`.

*Before*

#### Swift

```swift
let refundParams = try RefundParametersBuilder(
    paymentIntentId: "pi_123",
    amount: 1000,
    currency: "cad"
).build()
```

*After*

#### Swift

```swift
let refundParams = try RefundParametersBuilder(
    paymentIntentId: "pi_123",
    clientSecret: "pi_123_secret_abc",
    amount: 1000,
    currency: "cad"
).build()
```

# Android

> This is a Android for when terminal-sdk-platform is android. View the full page at https://docs.stripe.com/terminal/references/sdk-migration-guide?terminal-sdk-platform=android.

If your application currently uses a Terminal Android SDK version earlier than 5.0.0, there are several changes you need to make to upgrade. For a detailed list of the changes from version 4.x to 5.0.0, see the [SDK changelog](https://github.com/stripe/stripe-terminal-android/blob/master/CHANGELOG.md).

## Simplified payment integration

### Update to unified payment processing

The v5 SDK introduces streamlined methods that combine the collect and confirm steps into a single operation. While the existing `collectPaymentMethod` and `confirmPaymentIntent` methods continue to work, we recommend using the new unified methods for simpler integrations.

#### Processing payments with processPaymentIntent

Replace two-step collect and confirm with a single `processPaymentIntent` method call.

*Before*

#### Kotlin

```kotlin
// Step 1: Collect payment method
Terminal.getInstance().collectPaymentMethod(
    paymentIntent,
    collectConfig,
    object : PaymentIntentCallback {
        override fun onSuccess(paymentIntent: PaymentIntent) {
            // Step 2: Confirm the payment
            Terminal.getInstance().confirmPaymentIntent(paymentIntent, object : PaymentIntentCallback {
                override fun onSuccess(confirmedPaymentIntent: PaymentIntent) {
                    // Payment successful
                }
                override fun onFailure(e: TerminalException) {
                    // Payment confirmation failed
                }
            })
        }
        override fun onFailure(e: TerminalException) {
            // Payment method collection failed
        }
    }
)
```

*After*

#### Kotlin

```kotlin
// Process and confirm the payment in one step
Terminal.getInstance().processPaymentIntent(
    paymentIntent,
    collectConfig,
    confirmConfig,
    object : PaymentIntentCallback {
        override fun onSuccess(paymentIntent: PaymentIntent) {
            // Payment successful
        }
        override fun onFailure(e: TerminalException) {
            // Payment failed
        }
    }
)
```

#### Processing refunds with processRefund

The `collectRefundPaymentMethod` and `confirmRefund` methods are now deprecated. Use `processRefund` instead.

*Before*

#### Kotlin

```kotlin
// Step 1: Collect refund payment method
val refundParams = RefundParameters.ByChargeId(
    id = "ch_123",
    amount = 1000L,
    currency = "cad"
).build()

Terminal.getInstance().collectRefundPaymentMethod(
    refundParams,
    object : Callback {
        override fun onSuccess() {
            // Step 2: Confirm the refund
            Terminal.getInstance().confirmRefund(object : RefundCallback {
                override fun onSuccess(refund: Refund) {
                    // Refund successful
                }
                override fun onFailure(e: TerminalException) {
                    // Refund confirmation failed
                }
            })
        }
        override fun onFailure(e: TerminalException) {
            // Refund collection failed
        }
    }
)
```

*After*

#### Kotlin

```kotlin
val refundParams = RefundParameters.ByChargeId(
    id = "ch_123",
    amount = 1000,
    currency = "cad"
).build()

// Process the refund in one step
Terminal.getInstance().processRefund(
    refundParams,
    object : RefundCallback {
        override fun onSuccess(refund: Refund) {
            // Refund successful
        }
        override fun onFailure(e: TerminalException) {
            // Refund failed
        }
    }
)
```

#### Processing setup intents with processSetupIntent

Replace two-step collect and confirm with a single `processSetupIntent` method call.

*Before*

#### Kotlin

```kotlin
// Step 1: Collect setup intent payment method
Terminal.getInstance().collectSetupIntentPaymentMethod(
    intent = setupIntent,
    allowRedisplay = AllowRedisplay.ALWAYS,
    callback = object : SetupIntentCallback {
        override fun onSuccess(setupIntent: SetupIntent) {
            // Step 2: Confirm the setup intent
            Terminal.getInstance().confirmSetupIntent(setupIntent, object : SetupIntentCallback {
                override fun onSuccess(confirmedSetupIntent: SetupIntent) {
                    // Setup intent successful
                }
                override fun onFailure(e: TerminalException) {
                    // Setup intent confirmation failed
                }
            })
        }
        override fun onFailure(e: TerminalException) {
            // Setup intent collection failed
        }
    }
)
```

*After*

#### Kotlin

```kotlin
// Configure with allowRedisplay
val config = CollectSetupIntentConfiguration.Builder()
    .build()

// Process the setup intent in one step
Terminal.getInstance().processSetupIntent(
    intent = setupIntent,
    allowRedisplay = AllowRedisplay.ALWAYS,
    collectConfig = config,
    callback = object : SetupIntentCallback {
        override fun onSuccess(setupIntent: SetupIntent) {
            // Setup intent successful
        }
        override fun onFailure(e: TerminalException) {
            // Setup intent failed
        }
    }
)
```

### Kotlin Coroutines support

For Kotlin developers, a new optional module `stripeterminal-ktx` provides `suspend` function wrappers for asynchronous Terminal APIs.

> Add this dependency: `implementation("com.stripe:stripeterminal-ktx:5.0.0")`

*Before*

```kotlin
Terminal.getInstance().discoverReaders(config, object : DiscoveryListener {
    override fun onUpdateDiscoveredReaders(readers: List<Reader>) {
        val selectedReader = readers[0]
        Terminal.getInstance().connectReader(selectedReader, connectionConfig, object : ReaderCallback {
            override fun onSuccess(reader: Reader) {
                // Handle successful connection
            }
            override fun onFailure(e: TerminalException) {
                // Handle connection failure
            }
        })
    }
})
```

*After*

```kotlin
// Add dependency: implementation("com.stripe:stripeterminal-ktx:5.0.0")
coroutineScope {
    try {
        val readers = Terminal.getInstance().discoverReaders(discoveryConfig)
            .filter { it.isNotEmpty() }
            .first()
        val selectedReader = readers.first()
        val reader = Terminal.getInstance().connectReader(selectedReader, connectConfig)
        // Handle successful connection
    } catch(e: TerminalException) {
        // Handle failures on discovery or connect
    }
}
```

## Platform and initialization

### Update Terminal initialization

The `Terminal.initTerminal` method has been renamed to `Terminal.init`. It now requires a nullable `OfflineListener` parameter.

*Before*

#### Kotlin

```kotlin
Terminal.initTerminal(applicationContext, LogLevel.VERBOSE, tokenProvider, terminalListener)
```

*After*

#### Kotlin

```kotlin
Terminal.init(applicationContext, LogLevel.VERBOSE, tokenProvider, terminalListener, offlineListener)
```

## Reader discovery and connection

### Handle reconnection status changes

A new `RECONNECTING` value has been added to the `ConnectionStatus` enum. During initial connection `Terminal.getInstance().getConnectedReader()` will now be `null` until the connection attempt succeeds.

*Before*

#### Kotlin

```kotlin
override fun onConnectionStatusChange(status: ConnectionStatus) {
    when (status) {
        ConnectionStatus.NOT_CONNECTED -> {
            // Handle not connected
        }
        ConnectionStatus.CONNECTED -> {
            // Handle connected
        }
    }
}
```

*After*

#### Kotlin

```kotlin
override fun onConnectionStatusChange(status: ConnectionStatus) {
    when (status) {
        ConnectionStatus.NOT_CONNECTED -> {
            // Handle not connected
        }
        ConnectionStatus.CONNECTED -> {
            // Handle connected
        }
        ConnectionStatus.RECONNECTING -> {
            // Handle reconnection in progress
        }
    }
}
```

### Streamlined connection with easyConnect

For smart readers, Tap to Pay, and Apps on Devices integrations, you can now use `Terminal.easyConnect`, which combines discovery and connection into a single method call.

*Before*

#### Kotlin

```kotlin
// Step 1: Discover the reader
Terminal.getInstance().discoverReaders(config, object : DiscoveryListener {
    override fun onUpdateDiscoveredReaders(readers: List<Reader>) {
        val selectedReader = readers[0]
        // Step 2: Connect to the reader
        Terminal.getInstance().connectReader(selectedReader, connectionConfig, readerCallback)
    }
})
```

*After*

#### Kotlin

```kotlin
// Discover and connect in one step by providing discovery filter
val easyConnectConfig = InternetEasyConnectConfiguration(
    discoveryConfiguration = DiscoveryConfiguration.InternetDiscoveryConfiguration(
        location = "YOUR-LOCATION-ID", // optional
        discoveryFilter = DiscoveryFilter.BySerial("YOUR-READER-SERIAL-NUMBER"),
    ),
    connectionConfiguration = ConnectionConfiguration.InternetConnectionConfiguration(
        internetReaderListener = internetReaderListener,
    )
)

Terminal.getInstance().easyConnect(
    easyConnectConfig,
    object : ReaderCallback {
        override fun onSuccess(reader: Reader) {
            // Handle successful connection
        }
        override fun onFailure(e: TerminalException) {
            // Handle failure
        }
    }
)
```

### Internet reader discovery filtering

Internet reader discovery now supports filtering by reader ID or serial number. Set the `discoveryFilter` property on `InternetDiscoveryConfiguration` to discover a specific reader.

*Before*

#### Kotlin

```kotlin
val config = InternetDiscoveryConfiguration(location = "tml_1234567890")
```

*After*

#### Kotlin

```kotlin
val config = InternetDiscoveryConfiguration(
    location = "tml_1234567890", // optional
    discoveryFilter = DiscoveryFilter.BySerial("READER-SERIAL-NUMBER"), // or DiscoveryFilter.ByReaderId("tmr_YOUR-READER-STRIPE-ID) to filter by reader id
)
```

## Payment acceptance and data collection

### Customer cancellation is now enabled by default

On Android-based readers, the ability for customers to cancel transactions is now *enabled by default*. You can disable this feature by setting `customerCancellation` to `DISABLE_IF_AVAILABLE`.

*Before*

#### Kotlin

```kotlin
val config = CollectConfiguration.Builder()
    .setEnableCustomerCancellation(false)
    .build()
```

*After*

#### Kotlin

```kotlin
val config = CollectPaymentIntentConfiguration.Builder()
    .setCustomerCancellation(CustomerCancellation.DISABLE_IF_AVAILABLE)
    .build()
```

### Interac refund parameter updates

If you create `RefundParameters` for an Interac refund using a PaymentIntent ID, you must now also pass the PaymentIntent’s `clientSecret`. You can alternatively continue using the charge ID, which doesn’t require the `clientSecret`.

*Before*

#### Kotlin

```kotlin
val refundParams = RefundParameters.Builder(
    RefundParameters.Id.PaymentIntent("pi_123"),
    1000,
    "cad"
).build()
```

*After*

#### Kotlin

```kotlin
val refundParams = RefundParameters.ByPaymentIntentId(
    paymentIntentId = "pi_123",
    clientSecret = "pi_123_secret_abc",
    amount = 1000,
    currency = "cad"
).build()
```

## Update your Apps on Devices integration

The Maven coordinates for the Apps on Devices feature have changed to `com.stripe:stripeterminal-appsondevices:5.0.0`. Update your build dependencies to point to the new artifact name. Stripe will no longer update the old `handoffclient` artifact.

We renamed all `Handoff` class names to `AppsOnDevices` to better describe the feature’s functionality.

*Before*

#### Kotlin

```kotlin
dependencies {
    implementation("com.stripe:stripeterminal-handoffclient:4.0.0")
}
```

*After*

#### Kotlin

```kotlin
dependencies {
    implementation("com.stripe:stripeterminal-appsondevices:5.0.0")
}
```

### Rename Handoff classes to AppsOnDevices

We’ve renamed all `Handoff` class names to `AppsOnDevices` across discovery configuration, connection configuration, listeners, and token providers.

*Before*

#### Kotlin

```kotlin
val discoveryConfig = HandoffDiscoveryConfiguration()

Terminal.getInstance().discoverReaders(
    discoveryConfig,
    object : DiscoveryListener {
        override fun onUpdateDiscoveredReaders(readers: List<Reader>) {
            val reader = readers.first()
            val connectionConfig = HandoffConnectionConfiguration(
                handoffReaderListener = object : HandoffReaderListener {
                    override fun onDisconnect(reason: DisconnectReason) {
                        // Handle disconnect
                    }
                }
            )
            Terminal.getInstance().connectReader(reader, connectionConfig, readerCallback)
        }
    }
)

val tokenProvider = HandoffConnectionTokenProvider()
```

*After*

#### Kotlin

```kotlin
val discoveryConfig = AppsOnDevicesDiscoveryConfiguration()

Terminal.getInstance().discoverReaders(
    discoveryConfig,
    object : DiscoveryListener {
        override fun onUpdateDiscoveredReaders(readers: List<Reader>) {
            val reader = readers.first()
            val connectionConfig = AppsOnDevicesConnectionConfiguration(
                appsOnDevicesListener = object : AppsOnDevicesListener {
                    override fun onDisconnect(reason: DisconnectReason) {
                        // Handle disconnect
                    }
                }
            )
            Terminal.getInstance().connectReader(reader, connectionConfig, readerCallback)
        }
    }
)

val tokenProvider = AppsOnDevicesConnectionTokenProvider()
```

## Update Tap to Pay on Android integration

### System requirements

Tap to Pay on Android 5.0.0 and above requires your Android device to be running Android 13 or higher.

This version also requires that your Android device’s KeyStore supports hardware-backed key agreements. This is checked automatically for you by `supportsReadersOfType()`, but can also be verified by checking that your device’s [`FEATURE_HARDWARE_KEYSTORE`](https://developer.android.com/reference/android/content/pm/PackageManager#FEATURE_HARDWARE_KEYSTORE) version is 100 or above. Since this requirement depends on the hardware capabilities of a device, it might not be met by devices that were originally released with Android 12 or lower, even if they’ve been upgraded to meet the Android 13 runtime requirement. This new requirement means that devices like the Samsung Galaxy Tab Active4 Pro are no longer supported in SDK versions 5.0.0 and above.

For production environments, reader discovery fails with a `TAP_TO_PAY_INSECURE_ENVIRONMENT` error if developer options, USB or Wi-Fi debugging, or other debug options are enabled on the device. This doesn’t apply to usage of the simulated Tap to Pay reader.

### TapZone configuration refactoring

The `TapToPayUxConfiguration.TapZone` class has been refactored. The `indicator` and `position` fields are replaced by a single `TapZone` object.

*Before*

#### Kotlin

```kotlin
val config = TapToPayUxConfiguration.Builder()
    .setTapZone(
        indicator = TapZoneIndicator.ABOVE,
        position = TapZonePosition.Manual(0.5f, 0.2f)
    )
    .build()
```

*After*

#### Kotlin

```kotlin
// Position the tap zone above the reader UI
val config = TapToPayUxConfiguration.Builder()
    .setTapZone(TapZone.Above(horizontalBias = 0.2f))
    .build()

// Or position it on the left side of the screen
val config2 = TapToPayUxConfiguration.Builder()
    .setTapZone(TapZone.Left()) // Center vertically by default
    .build()
```
