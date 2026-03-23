# Accept in-person payments

# Accept in-person payments

This guide shows you how to accept in-person payments in your own point of sale (POS) application using Stripe Terminal. You don’t need any hardware to complete these steps with our [simulated reader](https://docs.stripe.com/terminal/references/testing.md#simulated-reader). Optionally, you can download the example and run the application.

When you’re ready to use a physical reader, you only need to update the [reader registration step](https://docs.stripe.com/terminal/quickstart.md#register-reader) (for server-driven integrations) or [reader discovery step](https://docs.stripe.com/terminal/quickstart.md#discover-reader) (for SDK integrations).

> #### Verifone reader support
>
> Verifone reader support is in public preview for the United States and Canada. Some verifone readers are in private preview for Ireland and the United Kingdom (V660p, UX700, P630) and for Singapore (V660p, P630). To join the preview, you must [contact the Sales team to order the applicable reader](https://stripe.com/contact/sales).

### Install the Stripe Node library

Install the package and import it in your code. Alternatively, if you’re starting from scratch and need a package.json file, download the project files using the Download link in the code editor.

#### npm

Install the library:

```bash
npm install --save stripe
```

#### GitHub

Or download the stripe-node library source code directly [from GitHub](https://github.com/stripe/stripe-node).

### Install the Stripe Ruby library

Install the Stripe ruby gem and require it in your code. Alternatively, if you’re starting from scratch and need a Gemfile, download the project files using the link in the code editor.

#### Terminal

Install the gem:

```bash
gem install stripe
```

#### Bundler

Add this line to your Gemfile:

```bash
gem 'stripe'
```

#### GitHub

Or download the stripe-ruby gem source code directly [from GitHub](https://github.com/stripe/stripe-ruby).

### Install the Stripe Java library

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a sample pom.xml file (for Maven), download the project files using the link in the code editor.

#### Maven

Add the following dependency to your POM and replace {VERSION} with the version number you want to use.

```bash
<dependency>\n<groupId>com.stripe</groupId>\n<artifactId>stripe-java</artifactId>\n<version>{VERSION}</version>\n</dependency>
```

#### Gradle

Add the dependency to your build.gradle file and replace {VERSION} with the version number you want to use.

```bash
implementation "com.stripe:stripe-java:{VERSION}"
```

#### GitHub

Download the JAR directly [from GitHub](https://github.com/stripe/stripe-java/releases/latest).

### Install the Stripe Python package

Install the Stripe package and import it in your code. Alternatively, if you’re starting from scratch and need a requirements.txt file, download the project files using the link in the code editor.

#### pip

Install the package through pip:

```bash
pip3 install stripe
```

#### GitHub

Download the stripe-python library source code directly [from GitHub](https://github.com/stripe/stripe-python).

### Install the Stripe PHP library

Install the library with composer and initialize with your secret API key. Alternatively, if you’re starting from scratch and need a composer.json file, download the files using the link in the code editor.

#### Composer

Install the library:

```bash
composer require stripe/stripe-php
```

#### GitHub

Or download the stripe-php library source code directly [from GitHub](https://github.com/stripe/stripe-php).

### Set up your server

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a go.mod file, download the project files using the link in the code editor.

#### Go

Make sure to initialize with Go Modules:

```bash
go get -u github.com/stripe/stripe-go/v84
```

#### GitHub

Or download the stripe-go module source code directly [from GitHub](https://github.com/stripe/stripe-go).

### Install the Stripe.net library

Install the package with .NET or NuGet. Alternatively, if you’re starting from scratch, download the files which contains a configured .csproj file.

#### dotnet

Install the library:

```bash
dotnet add package Stripe.net
```

#### NuGet

Install the library:

```bash
Install-Package Stripe.net
```

#### GitHub

Or download the Stripe.net library source code directly [from GitHub](https://github.com/stripe/stripe-dotnet).

### Install the Stripe libraries

Install the packages and import them in your code. Alternatively, if you’re starting from scratch and need a `package.json` file, download the project files using the link in the code editor.

Install the libraries:

```bash
npm install --save stripe @stripe/stripe-js next
```

### Create Locations for your readers

[Create Locations](https://docs.stripe.com/terminal/fleet/locations-and-zones.md) to organize your readers. Locations group readers and allow them to automatically download the reader configuration needed for their region of use. You must assign a Location to each reader when you [register it](https://docs.stripe.com/terminal/fleet/register-readers.md), which you can do using the API or the Dashboard.

### Register a reader

A simulated reader lets you get started quickly and build a working integration without requiring physical hardware. Create a simulated reader by using the special registration code `simulated-s700`. Keep track of your reader ID so you can use it later to process a payment on the reader.

### Register a reader

A simulated reader lets you get started quickly and build a working integration without requiring physical hardware. Create a simulated reader by using the special registration code `simulated-s710`. Keep track of your reader ID so you can use it later to process a payment on the reader.

### Register a reader

A simulated reader lets you get started quickly and build a working integration without requiring physical hardware. Create a simulated reader by using the special registration code `simulated-v660p`. Keep track of your reader ID so you can use it later to process a payment on the reader.

### Register a reader

A simulated reader lets you get started quickly and build a working integration without requiring physical hardware. Create a simulated reader by using the special registration code `simulated-wpe`. Keep track of your reader ID so you can use it later to process a payment on the reader.

### Create a PaymentIntent

Create a PaymentIntent on your server. A PaymentIntent tracks the customer’s payment lifecycle, keeping track of any failed attempts and ensuring they’re only charged once. Store the PaymentIntent ID to process later.

### Process the PaymentIntent on your reader

Create a PaymentIntent with the specific amount, and process the payment on your simulated reader. The reader prompts the customer to present their card by inserting or tapping it before attempting authorization.

### Simulate card presentment on your reader

> In a real transaction flow, the customer inserts or taps their card on the physical reader. With a simulated reader, you simulate the card presentment step by making another API call.

This call successfully confirms the PaymentIntent with a test card. You can also try other test cards.

### Capture the PaymentIntent

After the PaymentIntent is confirmed successfully, you can capture it to move the funds.

### Handle errors

Each error scenario has a specific code that your application needs to handle. Errors usually require intervention from a cashier in the store, show an appropriate message in your point-of-sale application so they can react accordingly. Refer to the [error handling documentation](https://docs.stripe.com/terminal/payments/collect-card-payment.md?terminal-sdk-platform=server-driven#handle-errors) for more details.

### Run the application

Run your server and go to http://localhost:4242.

### Use a test card number to try your integration

You can configure the simulated reader to test different flows within your point of sale application such as different card brands or error scenarios like a declined charge. To enable this behavior, pass a test payment method to the [present payment method](https://docs.stripe.com/api/terminal/readers/present_payment_method.md) API call.

| Scenario            | Card Number      |
| ------------------- | ---------------- |
| Payment succeeds    | 4242424242424242 |
| Payment is declined | 4000000000009995 |

### Install the Stripe Node library

Install the package and import it in your code. Alternatively, if you’re starting from scratch and need a package.json file, download the project files using the Download link in the code editor.

#### npm

Install the library:

```bash
npm install --save stripe
```

#### GitHub

Or download the stripe-node library source code directly [from GitHub](https://github.com/stripe/stripe-node).

### Install the Stripe Ruby library

Install the Stripe ruby gem and require it in your code. Alternatively, if you’re starting from scratch and need a Gemfile, download the project files using the link in the code editor.

#### Terminal

Install the gem:

```bash
gem install stripe
```

#### Bundler

Add this line to your Gemfile:

```bash
gem 'stripe'
```

#### GitHub

Or download the stripe-ruby gem source code directly [from GitHub](https://github.com/stripe/stripe-ruby).

### Install the Stripe Java library

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a sample pom.xml file (for Maven), download the project files using the link in the code editor.

#### Maven

Add the following dependency to your POM and replace {VERSION} with the version number you want to use.

```bash
<dependency>\n<groupId>com.stripe</groupId>\n<artifactId>stripe-java</artifactId>\n<version>{VERSION}</version>\n</dependency>
```

#### Gradle

Add the dependency to your build.gradle file and replace {VERSION} with the version number you want to use.

```bash
implementation "com.stripe:stripe-java:{VERSION}"
```

#### GitHub

Download the JAR directly [from GitHub](https://github.com/stripe/stripe-java/releases/latest).

### Install the Stripe Python package

Install the Stripe package and import it in your code. Alternatively, if you’re starting from scratch and need a requirements.txt file, download the project files using the link in the code editor.

#### pip

Install the package through pip:

```bash
pip3 install stripe
```

#### GitHub

Download the stripe-python library source code directly [from GitHub](https://github.com/stripe/stripe-python).

### Install the Stripe PHP library

Install the library with composer and initialize with your secret API key. Alternatively, if you’re starting from scratch and need a composer.json file, download the files using the link in the code editor.

#### Composer

Install the library:

```bash
composer require stripe/stripe-php
```

#### GitHub

Or download the stripe-php library source code directly [from GitHub](https://github.com/stripe/stripe-php).

### Set up your server

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a go.mod file, download the project files using the link in the code editor.

#### Go

Make sure to initialize with Go Modules:

```bash
go get -u github.com/stripe/stripe-go/v84
```

#### GitHub

Or download the stripe-go module source code directly [from GitHub](https://github.com/stripe/stripe-go).

### Install the Stripe.net library

Install the package with .NET or NuGet. Alternatively, if you’re starting from scratch, download the files which contains a configured .csproj file.

#### dotnet

Install the library:

```bash
dotnet add package Stripe.net
```

#### NuGet

Install the library:

```bash
Install-Package Stripe.net
```

#### GitHub

Or download the Stripe.net library source code directly [from GitHub](https://github.com/stripe/stripe-dotnet).

### Install the Stripe libraries

Install the packages and import them in your code. Alternatively, if you’re starting from scratch and need a `package.json` file, download the project files using the link in the code editor.

Install the libraries:

```bash
npm install --save stripe @stripe/stripe-js next
```

> #### Terminal access on macOS
>
> The Stripe Terminal SDK requires local network access. When using macOS, you must explicitly allow your browser apps access to local network devices. For more information, see the [Stripe Support article](https://support.stripe.com/questions/ensuring-stripe-terminal-javascript-sdk-functionality-on-macos-15).

### Create a ConnectionToken endpoint

To connect to a reader, your back end needs to give the SDK permission to use it with your Stripe account by providing it with the secret from a [ConnectionToken](https://docs.stripe.com/api/terminal/connection_tokens.md). Create connection tokens only for trusted clients, and [pass a location ID](https://docs.stripe.com/terminal/fleet/locations-and-zones.md#connection-tokens) when creating a connection token to control access to readers. ​​If you’re using Connect, [scope the connection token](https://docs.stripe.com/terminal/features/connect.md) to the relevant connected accounts.

### Install the SDK

This script must always load directly from https://js.stripe.com for compatibility with the latest reader software. Don’t include the script in a bundle or host a copy yourself as this could break your integration without warning. We also provide an npm package that makes it easier to load and use the Terminal JS SDK as a module. For more information, check out [the project on GitHub](https://github.com/stripe/terminal-js).

### Create Locations for your readers

[Create Locations](https://docs.stripe.com/terminal/fleet/locations-and-zones.md) to organize your readers. Locations group readers and allow them to automatically download the reader configuration needed for their region of use. You must assign a Location to each reader when you [register it](https://docs.stripe.com/terminal/fleet/register-readers.md), which you can do using the API or the Dashboard.

### Fetch ConnectionToken

To give the SDK access to this endpoint, create a function in your web application that requests a ConnectionToken from your back end and returns the secret from the ConnectionToken object.

### Initialize the SDK

To initialize a `StripeTerminal` instance in your JavaScript application, provide the `onFetchConnectionToken` function. You must also provide the `onUnexpectedReaderDisconnect` function to handle unexpected disconnects from the reader.

### Discover readers

The Stripe Terminal SDK comes with a built-in simulated card reader, so you can develop and test your app without connecting to physical hardware. To use the simulated reader, call `discoverReaders` to search for readers, with the simulated option set to true. ​To discover intended readers more easily, filter by location.

### Connect to the simulated reader

When `discoverReaders` returns a result, call `connectReader` to connect to the simulated reader.

### Create a PaymentIntent

Add an endpoint on your server that creates a PaymentIntent. A PaymentIntent tracks the customer’s payment lifecycle, keeping track of any failed payment attempts and ensuring they’re only charged once. Return the PaymentIntent’s client secret in the response. If you’re using Connect, you can also specify [connected account information](https://docs.stripe.com/terminal/features/connect.md) based on your platform’s charge logic.

### Fetch the PaymentIntent

Make a request to your server for a PaymentIntent to initiate the payment process.

### Collect payment method details

Call `collectPaymentMethod` with the PaymentIntent’s client secret to collect a payment method. When connected to the simulated reader, calling this method immediately updates the PaymentIntent object with a [simulated test card](https://docs.stripe.com/terminal/references/testing.md#simulated-test-cards). When connected to a physical reader, the connected reader waits for a card to be presented.

### Process the payment

After successfully collecting payment method data, call `processPayment` with the updated PaymentIntent to process the payment. A successful call results in a PaymentIntent with a status of `requires_capture` for manual capture or `succeeded` for automatic capture.

### Create an endpoint to capture the PaymentIntent

Create an endpoint on your back end that accepts a PaymentIntent ID and sends a request to the Stripe API to capture it.

### Capture the PaymentIntent

If you defined `capture_method` as `manual` during PaymentIntent creation, the SDK returns an authorized but not captured PaymentIntent to your application. When the PaymentIntent status is `requires_capture`, notify your back end to capture the PaymentIntent.

For connected accounts, before manually capturing a payment, inspect the PaymentIntent’s `application_fee_amount` and modify it if needed.

### Run the application

Run your server and go to [localhost:4242](http://localhost:4242).

### Use a test card number to try your integration

You can configure the simulated reader to test different flows within your point of sale application such as different card brands or error scenarios like a declined charge. To enable this behavior, insert this line of code before you call `collectPaymentMethod`.

| Scenario            | Card Number      |
| ------------------- | ---------------- |
| Payment succeeds    | 4242424242424242 |
| Payment is declined | 4000000000009995 |

### Install the Stripe Node library

Install the package and import it in your code. Alternatively, if you’re starting from scratch and need a package.json file, download the project files using the Download link in the code editor.

#### npm

Install the library:

```bash
npm install --save stripe
```

#### GitHub

Or download the stripe-node library source code directly [from GitHub](https://github.com/stripe/stripe-node).

### Install the Stripe Ruby library

Install the Stripe ruby gem and require it in your code. Alternatively, if you’re starting from scratch and need a Gemfile, download the project files using the link in the code editor.

#### Terminal

Install the gem:

```bash
gem install stripe
```

#### Bundler

Add this line to your Gemfile:

```bash
gem 'stripe'
```

#### GitHub

Or download the stripe-ruby gem source code directly [from GitHub](https://github.com/stripe/stripe-ruby).

### Install the Stripe Java library

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a sample pom.xml file (for Maven), download the project files using the link in the code editor.

#### Maven

Add the following dependency to your POM and replace {VERSION} with the version number you want to use.

```bash
<dependency>\n<groupId>com.stripe</groupId>\n<artifactId>stripe-java</artifactId>\n<version>{VERSION}</version>\n</dependency>
```

#### Gradle

Add the dependency to your build.gradle file and replace {VERSION} with the version number you want to use.

```bash
implementation "com.stripe:stripe-java:{VERSION}"
```

#### GitHub

Download the JAR directly [from GitHub](https://github.com/stripe/stripe-java/releases/latest).

### Install the Stripe Python package

Install the Stripe package and import it in your code. Alternatively, if you’re starting from scratch and need a requirements.txt file, download the project files using the link in the code editor.

#### pip

Install the package through pip:

```bash
pip3 install stripe
```

#### GitHub

Download the stripe-python library source code directly [from GitHub](https://github.com/stripe/stripe-python).

### Install the Stripe PHP library

Install the library with composer and initialize with your secret API key. Alternatively, if you’re starting from scratch and need a composer.json file, download the files using the link in the code editor.

#### Composer

Install the library:

```bash
composer require stripe/stripe-php
```

#### GitHub

Or download the stripe-php library source code directly [from GitHub](https://github.com/stripe/stripe-php).

### Set up your server

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a go.mod file, download the project files using the link in the code editor.

#### Go

Make sure to initialize with Go Modules:

```bash
go get -u github.com/stripe/stripe-go/v84
```

#### GitHub

Or download the stripe-go module source code directly [from GitHub](https://github.com/stripe/stripe-go).

### Install the Stripe.net library

Install the package with .NET or NuGet. Alternatively, if you’re starting from scratch, download the files which contains a configured .csproj file.

#### dotnet

Install the library:

```bash
dotnet add package Stripe.net
```

#### NuGet

Install the library:

```bash
Install-Package Stripe.net
```

#### GitHub

Or download the Stripe.net library source code directly [from GitHub](https://github.com/stripe/stripe-dotnet).

### Install the Stripe libraries

Install the packages and import them in your code. Alternatively, if you’re starting from scratch and need a `package.json` file, download the project files using the link in the code editor.

Install the libraries:

```bash
npm install --save stripe @stripe/stripe-js next
```

> #### Terminal access on macOS
>
> The Stripe Terminal SDK requires local network access. When using macOS, you must explicitly allow your browser apps access to local network devices. For more information, see the [Stripe Support article](https://support.stripe.com/questions/ensuring-stripe-terminal-javascript-sdk-functionality-on-macos-15).

### Create a ConnectionToken endpoint

To connect to a reader, your back end needs to give the SDK permission to use it with your Stripe account by providing it with the secret from a [ConnectionToken](https://docs.stripe.com/api/terminal/connection_tokens.md). Create connection tokens only for trusted clients, and [pass a location ID](https://docs.stripe.com/terminal/fleet/locations-and-zones.md#connection-tokens) when creating a connection token to control access to readers. ​​If you’re using Connect, [scope the connection token](https://docs.stripe.com/terminal/features/connect.md) to the relevant connected accounts.

### Install the SDK

The iOS SDK is [open source](https://github.com/stripe/stripe-terminal-ios), fully documented, and compatible with apps supporting iOS 10 or later. Import the Stripe SDK into your checkout screen’s UIViewController.

#### CocoaPods

Add this line to your Podfile, and use the .xcworkspace file to open your project in Xcode, instead of the .xcodeproj file, from here on out.

```bash
pod 'StripeTerminal', '~> 5.0'
```

#### Carthage

Add this line to your Cartfile.

```bash
github "stripe/stripe-terminal-ios"
```

#### XCFramework

1. Download StripeTerminal.xcframework.zip from the latest release on GitHub.
2. Unzip it and drag the .xcframework in to your project making sure to select “Copy items if needed”.
3. Ensure the xcframework is included in the “Frameworks, Libraries, and Embedded Content” section of your application target in Xcode and set to “Embed & Sign”.

#### Swift Package Manager

1. In Xcode, select **File** > **Add Packages…** from the menu bar.
2. Enter the Stripe Terminal iOS SDK’s GitHub URL:

```bash
https://github.com/stripe/stripe-terminal-ios
```

### Create Locations for your readers

[Create Locations](https://docs.stripe.com/terminal/fleet/locations-and-zones.md) to organize your readers. Locations group readers and allow them to automatically download the reader configuration needed for their region of use. You must assign a Location to each reader when you [register it](https://docs.stripe.com/terminal/fleet/register-readers.md), which you can do using the API or the Dashboard.

### Configure your app

To prepare your app to work with the Stripe Terminal SDK, make a few changes to your Info.plist file in Xcode.

#### Location

Enable location services with the following key-value pair.

```bash
<key>NSLocationWhenInUseUsageDescription</key>\n<string>Location access is required to accept payments.</string>
```

#### Background Modes

Make sure that your app runs in the background and remains connected to Bluetooth readers.

```bash
<key>UIBackgroundModes</key>\n<array>\n<string>bluetooth-central</string>\n</array>
```

#### Bluetooth Peripheral

Pass app validation checks when submitting to the App Store.

```bash
<key>NSBluetoothPeripheralUsageDescription</key>\n<string>Bluetooth access is required to connect to supported bluetooth card readers.</string>
```

#### Bluetooth Always

Allow your app to display a Bluetooth permission dialog.

```bash
<key>NSBluetoothAlwaysUsageDescription</key>\n<string>This app uses Bluetooth to connect to supported card readers.</string>
```

### Fetch ConnectionToken

Implement the ConnectionTokenProvider protocol in your app, which defines a single function that requests a connection token from your back end.

### Initialize the SDK

To get started, provide your ConnectionTokenProvider. You can only call `setTokenProvider` once in your app, and must call it before accessing `Terminal.shared`.

### Discover readers

The Stripe Terminal SDK comes with a built-in simulated card reader, so you can develop and test your app without connecting to physical hardware. To use the simulated reader, call `discoverReaders` to search for readers, with the simulated option set to true.

### Discover readers

The Stripe Terminal SDK comes with a built-in simulated card reader, so you can develop and test your app without connecting to physical hardware. To use the simulated reader, call `discoverReaders` to search for readers, with the simulated option set to true. To discover intended readers more easily, filter by location.

### Connect to the simulated reader

When the `didUpdateDiscoveredReaders` delegate method is called, call `connectReader` to connect to the simulated reader.

### Create a PaymentIntent

Create a [PaymentIntent](https://docs.stripe.com/api/payment_intents.md) object using the SDK. A PaymentIntent tracks the customer’s payment lifecycle, keeping track of any failed payment attempts and ensuring the customer is only charged once.

### Process the PaymentIntent

Call `processPaymentIntent` with the PaymentIntent to collect a payment method and authorize the payment. When connected to the simulated reader, calling this method immediately updates the PaymentIntent object with a [simulated test card](https://docs.stripe.com/terminal/references/testing.md#simulated-test-cards). When connected to a physical reader, the connected reader waits for a card to be presented. A successful call results in a PaymentIntent with a status of `requires_capture` for manual capture, or `succeeded` for automatic capture.

### Create an endpoint to capture the PaymentIntent

Create an endpoint on your back end that accepts a PaymentIntent ID and sends a request to the Stripe API to capture it.

### Capture the PaymentIntent

If you defined `capture_method` as `manual` during PaymentIntent creation, the SDK returns an authorized but not captured PaymentIntent to your application. When the PaymentIntent status is `requires_capture`, notify your back end to capture the PaymentIntent.

For connected accounts, before manually capturing a payment, inspect the PaymentIntent’s `application_fee_amount` and modify it if needed.

### Run the application

Run your server and go to [localhost:4242](http://localhost:4242).

### Use a test card number to try your integration

You can configure the simulated reader to test different flows within your point of sale application such as different card brands or error scenarios like a declined charge. To enable this behavior, insert this line of code before you call `collectPaymentMethod`.

| Scenario            | Card Number      |
| ------------------- | ---------------- |
| Payment succeeds    | 4242424242424242 |
| Payment is declined | 4000000000009995 |

### Install the Stripe Node library

Install the package and import it in your code. Alternatively, if you’re starting from scratch and need a package.json file, download the project files using the Download link in the code editor.

#### npm

Install the library:

```bash
npm install --save stripe
```

#### GitHub

Or download the stripe-node library source code directly [from GitHub](https://github.com/stripe/stripe-node).

### Install the Stripe Ruby library

Install the Stripe ruby gem and require it in your code. Alternatively, if you’re starting from scratch and need a Gemfile, download the project files using the link in the code editor.

#### Terminal

Install the gem:

```bash
gem install stripe
```

#### Bundler

Add this line to your Gemfile:

```bash
gem 'stripe'
```

#### GitHub

Or download the stripe-ruby gem source code directly [from GitHub](https://github.com/stripe/stripe-ruby).

### Install the Stripe Java library

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a sample pom.xml file (for Maven), download the project files using the link in the code editor.

#### Maven

Add the following dependency to your POM and replace {VERSION} with the version number you want to use.

```bash
<dependency>\n<groupId>com.stripe</groupId>\n<artifactId>stripe-java</artifactId>\n<version>{VERSION}</version>\n</dependency>
```

#### Gradle

Add the dependency to your build.gradle file and replace {VERSION} with the version number you want to use.

```bash
implementation "com.stripe:stripe-java:{VERSION}"
```

#### GitHub

Download the JAR directly [from GitHub](https://github.com/stripe/stripe-java/releases/latest).

### Install the Stripe Python package

Install the Stripe package and import it in your code. Alternatively, if you’re starting from scratch and need a requirements.txt file, download the project files using the link in the code editor.

#### pip

Install the package through pip:

```bash
pip3 install stripe
```

#### GitHub

Download the stripe-python library source code directly [from GitHub](https://github.com/stripe/stripe-python).

### Install the Stripe PHP library

Install the library with composer and initialize with your secret API key. Alternatively, if you’re starting from scratch and need a composer.json file, download the files using the link in the code editor.

#### Composer

Install the library:

```bash
composer require stripe/stripe-php
```

#### GitHub

Or download the stripe-php library source code directly [from GitHub](https://github.com/stripe/stripe-php).

### Set up your server

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a go.mod file, download the project files using the link in the code editor.

#### Go

Make sure to initialize with Go Modules:

```bash
go get -u github.com/stripe/stripe-go/v84
```

#### GitHub

Or download the stripe-go module source code directly [from GitHub](https://github.com/stripe/stripe-go).

### Install the Stripe.net library

Install the package with .NET or NuGet. Alternatively, if you’re starting from scratch, download the files which contains a configured .csproj file.

#### dotnet

Install the library:

```bash
dotnet add package Stripe.net
```

#### NuGet

Install the library:

```bash
Install-Package Stripe.net
```

#### GitHub

Or download the Stripe.net library source code directly [from GitHub](https://github.com/stripe/stripe-dotnet).

### Install the Stripe libraries

Install the packages and import them in your code. Alternatively, if you’re starting from scratch and need a `package.json` file, download the project files using the link in the code editor.

Install the libraries:

```bash
npm install --save stripe @stripe/stripe-js next
```

> #### Terminal access on macOS
>
> The Stripe Terminal SDK requires local network access. When using macOS, you must explicitly allow your browser apps access to local network devices. For more information, see the [Stripe Support article](https://support.stripe.com/questions/ensuring-stripe-terminal-javascript-sdk-functionality-on-macos-15).

### Create a ConnectionToken endpoint

To connect to a reader, your back end needs to give the SDK permission to use it with your Stripe account by providing it with the secret from a [ConnectionToken](https://docs.stripe.com/api/terminal/connection_tokens.md). Create connection tokens only for trusted clients, and [pass a location ID](https://docs.stripe.com/terminal/fleet/locations-and-zones.md#connection-tokens) when creating a connection token to control access to readers. ​​If you’re using Connect, [scope the connection token](https://docs.stripe.com/terminal/features/connect.md) to the relevant connected accounts.

### Install the SDK

To install the SDK, add `stripeterminal` to the dependencies block of your build.gradle file.

#### Gradle

Add the dependencies to your build.gradle file:

#### Groovy

```groovy
dependencies {
    // ...

    // Stripe Terminal SDK
    implementation 'com.stripe:stripeterminal:5.3.0'
}
```

#### GitHub

The Stripe Android SDK is open-sourced. [View on GitHub.](https://github.com/stripe/stripe-android)

### Install the SDK

To install the Tap to Pay SDK, add `stripeterminal-taptopay` and `stripeterminal-core` to the dependencies block of your `build.gradle` or `build.gradle.kts` file.

If you already have `stripeterminal` dependencies, replace them with the following by adding the dependencies to your `build.gradle` or `build.gradle.kts` file:

#### Groovy

```groovy
dependencies {
    // ...

    // Stripe Tap to Pay SDK
    implementation 'com.stripe:stripeterminal-taptopay:5.3.0'
    implementation 'com.stripe:stripeterminal-core:5.3.0'
}
```

### Create Locations for your readers

[Create Locations](https://docs.stripe.com/terminal/fleet/locations-and-zones.md) to organize your readers. Locations group readers and allow them to automatically download the reader configuration needed for their region of use. You must assign a Location to each reader when you [register it](https://docs.stripe.com/terminal/fleet/register-readers.md), which you can do using the API or the Dashboard.

### Verify ACCESS\_FINE\_LOCATION permission

Add a check to make sure that the `ACCESS_FINE_LOCATION` permission is enabled in your app.

### Verify user location permission

Override the `onRequestPermissionsResult` method in your app and check the permission result to verify that the app user grants location permission.

### Fetch ConnectionToken

Implement the ConnectionTokenProvider interface in your app, which defines a single function that requests a connection token from your back end.

### Configure TerminalApplicationDelegate

To prevent memory leaks and ensure proper cleanup of long-running Terminal SDK processes, your application must subclass `Application` and call out to the `TerminalApplicationDelegate` from the `onCreate` method.

### Initialize the SDK

To get started, provide the current application context, the ConnectionTokenProvider, and a TerminalListener object.

### Discover readers

The Stripe Terminal SDK comes with a built-in simulated card reader, so you can develop and test your app without connecting to physical hardware. To use the simulated reader, call `discoverReaders` to search for readers, with the simulated option set to true.

### Discover readers

The Stripe Terminal SDK comes with a built-in simulated card reader, so you can develop and test your app without connecting to physical hardware. To use the simulated reader, call `discoverReaders` to search for readers, with the simulated option set to true. To discover intended readers more easily, filter by location.

### Connect to the simulated reader

When `discoverReaders` returns a result, call `connectReader` to connect to the simulated reader.

### Create a PaymentIntent

Create a [PaymentIntent](https://docs.stripe.com/api/payment_intents.md) object using the SDK. A PaymentIntent tracks the customer’s payment lifecycle, keeping track of any failed payment attempts and ensuring the customer is only charged once.

### Process the PaymentIntent

Call `processPaymentIntent` with the PaymentIntent to collect a payment method and authorize the payment. When connected to the simulated reader, calling this method immediately updates the PaymentIntent object with a [simulated test card](https://docs.stripe.com/terminal/references/testing.md#simulated-test-cards). When connected to a physical reader, the connected reader waits for a card to be presented. A successful call results in a PaymentIntent with a status of `requires_capture` for manual capture, or `succeeded` for automatic capture.

### Create an endpoint to capture the PaymentIntent

Create an endpoint on your back end that accepts a PaymentIntent ID and sends a request to the Stripe API to capture it.

### Capture the PaymentIntent

If you defined `capture_method` as `manual` during PaymentIntent creation, the SDK returns an authorized but not captured PaymentIntent to your application. When the PaymentIntent status is `requires_capture`, notify your back end to capture the PaymentIntent.

For connected accounts, before manually capturing a payment, inspect the PaymentIntent’s `application_fee_amount` and modify it if needed.

### Run the application

Run your server and go to [localhost:4242](http://localhost:4242).

### Use a test card number to try your integration

You can configure the simulated reader to test different flows within your point of sale application such as different card brands or error scenarios like a declined charge. To enable this behavior, insert this line of code before you call `collectPaymentMethod`.

| Scenario            | Card Number      |
| ------------------- | ---------------- |
| Payment succeeds    | 4242424242424242 |
| Payment is declined | 4000000000009995 |

### Install the Stripe Node library

Install the package and import it in your code. Alternatively, if you’re starting from scratch and need a package.json file, download the project files using the Download link in the code editor.

#### npm

Install the library:

```bash
npm install --save stripe
```

#### GitHub

Or download the stripe-node library source code directly [from GitHub](https://github.com/stripe/stripe-node).

### Install the Stripe Ruby library

Install the Stripe ruby gem and require it in your code. Alternatively, if you’re starting from scratch and need a Gemfile, download the project files using the link in the code editor.

#### Terminal

Install the gem:

```bash
gem install stripe
```

#### Bundler

Add this line to your Gemfile:

```bash
gem 'stripe'
```

#### GitHub

Or download the stripe-ruby gem source code directly [from GitHub](https://github.com/stripe/stripe-ruby).

### Install the Stripe Java library

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a sample pom.xml file (for Maven), download the project files using the link in the code editor.

#### Maven

Add the following dependency to your POM and replace {VERSION} with the version number you want to use.

```bash
<dependency>\n<groupId>com.stripe</groupId>\n<artifactId>stripe-java</artifactId>\n<version>{VERSION}</version>\n</dependency>
```

#### Gradle

Add the dependency to your build.gradle file and replace {VERSION} with the version number you want to use.

```bash
implementation "com.stripe:stripe-java:{VERSION}"
```

#### GitHub

Download the JAR directly [from GitHub](https://github.com/stripe/stripe-java/releases/latest).

### Install the Stripe Python package

Install the Stripe package and import it in your code. Alternatively, if you’re starting from scratch and need a requirements.txt file, download the project files using the link in the code editor.

#### pip

Install the package through pip:

```bash
pip3 install stripe
```

#### GitHub

Download the stripe-python library source code directly [from GitHub](https://github.com/stripe/stripe-python).

### Install the Stripe PHP library

Install the library with composer and initialize with your secret API key. Alternatively, if you’re starting from scratch and need a composer.json file, download the files using the link in the code editor.

#### Composer

Install the library:

```bash
composer require stripe/stripe-php
```

#### GitHub

Or download the stripe-php library source code directly [from GitHub](https://github.com/stripe/stripe-php).

### Set up your server

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a go.mod file, download the project files using the link in the code editor.

#### Go

Make sure to initialize with Go Modules:

```bash
go get -u github.com/stripe/stripe-go/v84
```

#### GitHub

Or download the stripe-go module source code directly [from GitHub](https://github.com/stripe/stripe-go).

### Install the Stripe.net library

Install the package with .NET or NuGet. Alternatively, if you’re starting from scratch, download the files which contains a configured .csproj file.

#### dotnet

Install the library:

```bash
dotnet add package Stripe.net
```

#### NuGet

Install the library:

```bash
Install-Package Stripe.net
```

#### GitHub

Or download the Stripe.net library source code directly [from GitHub](https://github.com/stripe/stripe-dotnet).

### Install the Stripe libraries

Install the packages and import them in your code. Alternatively, if you’re starting from scratch and need a `package.json` file, download the project files using the link in the code editor.

Install the libraries:

```bash
npm install --save stripe @stripe/stripe-js next
```

> #### Terminal access on macOS
>
> The Stripe Terminal SDK requires local network access. When using macOS, you must explicitly allow your browser apps access to local network devices. For more information, see the [Stripe Support article](https://support.stripe.com/questions/ensuring-stripe-terminal-javascript-sdk-functionality-on-macos-15).

### Create a ConnectionToken endpoint

To connect to a reader, your back end needs to give the SDK permission to use it with your Stripe account by providing it with the secret from a [ConnectionToken](https://docs.stripe.com/api/terminal/connection_tokens.md). Create connection tokens only for trusted clients, and [pass a location ID](https://docs.stripe.com/terminal/fleet/locations-and-zones.md#connection-tokens) when creating a connection token to control access to readers. ​​If you’re using Connect, [scope the connection token](https://docs.stripe.com/terminal/features/connect.md) to the relevant connected accounts.

### Install the SDK

```bash
yarn install @stripe/stripe-terminal-react-native
```

### Create Locations for your readers

[Create Locations](https://docs.stripe.com/terminal/fleet/locations-and-zones.md) to organize your readers. Locations group readers and allow them to automatically download the reader configuration needed for their region of use. You must assign a Location to each reader when you [register it](https://docs.stripe.com/terminal/fleet/register-readers.md), which you can do using the API or the Dashboard.

### Fetch ConnectionToken

To give the SDK access to this endpoint, create a function in your web application that requests a ConnectionToken from your back end and returns the secret from the ConnectionToken object.

### Configure permissions

#### Android

Add a check to make sure that the `ACCESS_FINE_LOCATION` permission is enabled in your app.

#### iOS

To prepare your app to work with the Stripe Terminal SDK, make a few changes to your Info.plist file in Xcode.

#### Location

Enable location services with the following key-value pair.

```bash
<key>NSLocationWhenInUseUsageDescription</key>\n<string>Location access is required to accept payments.</string>
```

#### Background Modes

Make sure that your app runs in the background and remains connected to Bluetooth readers.

```bash
<key>UIBackgroundModes</key>\n<array>\n<string>bluetooth-central</string>\n</array>
```

#### Bluetooth Peripheral

Pass app validation checks when submitting to the App Store.

```bash
<key>NSBluetoothPeripheralUsageDescription</key>\n<string>Bluetooth access is required to connect to supported bluetooth card readers.</string>
```

#### Bluetooth Always

Allow your app to display a Bluetooth permission dialog.

```bash
<key>NSBluetoothAlwaysUsageDescription</key>\n<string>This app uses Bluetooth to connect to supported card readers.</string>
```

### Set up the context provider

Pass the `onFetchConnectionToken` function to `StripeTerminalProvider` as a prop.

### Initialize the SDK

To initialize a `StripeTerminal` instance in your React Native application, call the initialize method from `useStripeTerminal` hook. You must call the `initialize` method from a component nested within `StripeTerminalProvider` and not from the component that contains the `StripeTerminalProvider`.

### Discover readers

The Stripe Terminal SDK comes with a built-in simulated card reader, so you can develop and test your app without connecting to physical hardware. To use the simulated reader, call `discoverReaders` to search for readers, with the simulated option set to true.

### Discover readers

The Stripe Terminal SDK comes with a built-in simulated card reader. To use the simulated reader, call `discoverReaders` to search for readers, with the simulated option set to true.

### Discover readers

The Stripe Terminal SDK comes with a built-in simulated card reader, so you can develop and test your app without connecting to physical hardware. To use the simulated reader, call `discoverReaders` to search for readers, with the simulated option set to true. To discover intended readers more easily, filter by location.

### Connect to the simulated reader

When `discoverReaders` returns a result, call `connectReader` to connect to the simulated reader.

### Create a PaymentIntent

Add an endpoint on your server that creates a PaymentIntent. A PaymentIntent tracks the customer’s payment lifecycle, keeping track of any failed payment attempts and ensuring they’re only charged once. Return the PaymentIntent’s client secret in the response. If you’re using Connect, you can also specify [connected account information](https://docs.stripe.com/terminal/features/connect.md) based on your platform’s charge logic.

### Fetch the PaymentIntent

Make a request to your server for a PaymentIntent to initiate the payment process.

### Collect payment method details

Call `collectPaymentMethod` with the PaymentIntent’s client secret to collect a payment method. When connected to the simulated reader calling this method immediately updates the PaymentIntent object with a [simulated test card](https://docs.stripe.com/terminal/references/testing.md#simulated-test-cards). When connected to a physical reader the connected reader waits for a card to be presented.

### Process the payment

After successfully collecting payment method data, call `processPayment` with the updated PaymentIntent to process the payment. A successful call results in a PaymentIntent with a status of `requires_capture` for manual capture or `succeeded` for automatic capture.

### Create an endpoint to capture the PaymentIntent

Create an endpoint on your back end that accepts a PaymentIntent ID and sends a request to the Stripe API to capture it.

### Capture the PaymentIntent

If you defined `capture_method` as `manual` during PaymentIntent creation, the SDK returns an authorized but not captured PaymentIntent to your application. When the PaymentIntent status is `requires_capture`, notify your back end to capture the PaymentIntent.

For connected accounts, before manually capturing a payment, inspect the PaymentIntent’s `application_fee_amount` and modify it if needed.

### Run the application

Run your server and go to [localhost:4242](http://localhost:4242).

### Use a test card number to try your integration

You can configure the simulated reader to test different flows within your point of sale application such as different card brands or error scenarios like a declined charge. To enable this behavior, insert this line of code before you call `collectPaymentMethod`.

| Scenario            | Card Number      |
| ------------------- | ---------------- |
| Payment succeeds    | 4242424242424242 |
| Payment is declined | 4000000000009995 |

// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")("<\<YOUR\_SECRET\_KEY>>");
const createLocation = async () => {
const location = await stripe.terminal.locations.create({
display\_name: '{{TERMINAL\_LOCATION\_NAME}}',
address: {
line1: '{{TERMINAL\_LOCATION\_LINE1}}',
line2: '{{TERMINAL\_LOCATION\_LINE2}}',
city: '{{TERMINAL\_LOCATION\_CITY}}',
state: '{{TERMINAL\_LOCATION\_STATE}}',
country: '{{TERMINAL\_LOCATION\_COUNTRY}}',
postal\_code: '{{TERMINAL\_LOCATION\_POSTAL}}',
},
});

return location;
};
const createLocation = async () => {
const location = await stripe.terminal.locations.create({
display\_name: '{{TERMINAL\_LOCATION\_NAME}}',
display\_name\_kana: '{{TERMINAL\_LOCATION\_NAMEKANA}}',
display\_name\_kanji: '{{TERMINAL\_LOCATION\_NAMEKANJI}}',
phone: '{{TERMINAL\_LOCATION\_PHONE}}',
address\_kana: {
line1: '{{TERMINAL\_LOCATION\_LINE1KANA}}',
line2: '{{TERMINAL\_LOCATION\_LINE2KANA}}',
town: '{{TERMINAL\_LOCATION\_TOWNKANA}}',
city: '{{TERMINAL\_LOCATION\_CITYKANA}}',
state: '{{TERMINAL\_LOCATION\_STATEKANA}}',
postal\_code: '{{TERMINAL\_LOCATION\_POSTALCODEKANA}}',
},
address\_kanji: {
line1: '{{TERMINAL\_LOCATION\_LINE1KANJI}}',
line2: '{{TERMINAL\_LOCATION\_LINE2KANJI}}',
town: '{{TERMINAL\_LOCATION\_TOWNKANJI}}',
city: '{{TERMINAL\_LOCATION\_CITYKANJI}}',
state: '{{TERMINAL\_LOCATION\_STATEKANJI}}',
postal\_code: '{{TERMINAL\_LOCATION\_POSTALCODEKANJI}}',
},
});

return location;
};
app.post("/create\_location", async (req, res) => {
const location = await stripe.terminal.locations.create({
display\_name: req.body.display\_name,
address: {
line1: req.body.address.line1,
city: req.body.address.city,
state: req.body.address.state,
country: req.body.address.country,
postal\_code: req.body.address.postal\_code,
},
});

res.json(location);
});
app.post("/create\_location", async (req, res) => {
const location = await stripe.terminal.locations.create({
display\_name: '{{TERMINAL\_LOCATION\_NAME}}',
display\_name\_kana: '{{TERMINAL\_LOCATION\_NAMEKANA}}',
display\_name\_kanji: '{{TERMINAL\_LOCATION\_NAMEKANJI}}',
phone: '{{TERMINAL\_LOCATION\_PHONE}}',
address\_kana: {
line1: '{{TERMINAL\_LOCATION\_LINE1KANA}}',
line2: '{{TERMINAL\_LOCATION\_LINE2KANA}}',
town: '{{TERMINAL\_LOCATION\_TOWNKANA}}',
city: '{{TERMINAL\_LOCATION\_CITYKANA}}',
state: '{{TERMINAL\_LOCATION\_STATEKANA}}',
postal\_code: '{{TERMINAL\_LOCATION\_POSTALCODEKANA}}',
},
address\_kanji: {
line1: '{{TERMINAL\_LOCATION\_LINE1KANJI}}',
line2: '{{TERMINAL\_LOCATION\_LINE2KANJI}}',
town: '{{TERMINAL\_LOCATION\_TOWNKANJI}}',
city: '{{TERMINAL\_LOCATION\_CITYKANJI}}',
state: '{{TERMINAL\_LOCATION\_STATEKANJI}}',
postal\_code: '{{TERMINAL\_LOCATION\_POSTALCODEKANJI}}',
},
});

res.json(location);
});
app.post("/register\_reader", async (req, res) => {
const reader = await stripe.terminal.readers.create({
location: req.body.location\_id,
label: 'Quickstart - S700 Simulated Reader',
registration\_code: 'simulated-s700'
label: 'Quickstart - S710 Simulated Reader',
registration\_code: 'simulated-s710'
label: 'Quickstart - V660p Simulated Reader',
registration\_code: 'simulated-v660p'
label: 'Quickstart - WisePOS E Simulated Reader',
registration\_code: 'simulated-wpe'
});

res.json(reader);
});
// The ConnectionToken's secret lets you connect to any Stripe Terminal reader
// and take payments with your Stripe account.
// Be sure to authenticate the endpoint for creating connection tokens.
app.post("/connection\_token", async (req, res) => {
let connectionToken = await stripe.terminal.connectionTokens.create();
res.json({secret: connectionToken.secret});
})
app.post("/create\_payment\_intent", async (req, res) => {
// For Terminal payments, the 'payment\_method\_types' parameter must include
// 'card\_present'.
// To automatically capture funds when a charge is authorized,
// set `capture_method` to `automatic`.
const intent = await stripe.paymentIntents.create({
amount: req.body.amount,
currency: '{{TERMINAL\_CURRENCY}}',
payment\_method\_types: \[
'{{TERMINAL\_PAYMENT\_METHODS}}'
],
capture\_method: 'automatic',
payment\_method\_options: {
card\_present: {
capture\_method: 'manual\_preferred'
}
}
});
res.json(intent);
});
app.post("/process\_payment", async (req, res) => {
var attempt = 0;
const tries = 3;
while (true) {
attempt++;
try {
const reader = await stripe.terminal.readers.processPaymentIntent(
req.body.reader\_id,
{
payment\_intent: req.body.payment\_intent\_id,
}
);
return res.send(reader);
} catch (error) {
console.log(error);
switch (error.code) {
case "terminal\_reader\_timeout":
// Temporary networking blip, automatically retry a few times.
if (attempt == tries) {
return res.send(error);
}
break;
case "terminal\_reader\_offline":
// Reader is offline and won't respond to API requests. Make sure the reader is powered on
// and connected to the internet before retrying.
return res.send(error);
case "terminal\_reader\_busy":
// Reader is currently busy processing another request, installing updates or changing settings.
// Remember to disable the pay button in your point-of-sale application while waiting for a
// reader to respond to an API request.
return res.send(error);
case "intent\_invalid\_state":
// Check PaymentIntent status because it's not ready to be processed. It might have been already
// successfully processed or canceled.
const paymentIntent = await stripe.paymentIntents.retrieve(
req.body.payment\_intent\_id
);
console.log(
"PaymentIntent is already in " + paymentIntent.status + " state."
);
return res.send(error);
default:
return res.send(error);
}
}
}
});
app.post("/simulate\_payment", async (req, res) => {
const reader = await stripe.testHelpers.terminal.readers.presentPaymentMethod(
req.body.reader\_id,
{
card\_present: {
number: req.body.card\_number,
},
type: "card\_present",
}
);

res.send(reader);
});
app.post("/capture\_payment\_intent", async (req, res) => {
const intent = await stripe.paymentIntents.capture(req.body.payment\_intent\_id);
res.send(intent);
});
{
"name": "stripe-sample",
"version": "1.0.0",
"description": "A sample Stripe implementation",
"main": "server.js",
"scripts": {
"start": "node server.js"
},
"author": "stripe-samples",
"license": "ISC",
"dependencies": {
"express": "^4.17.1",
"stripe": "^20.4.0"
}
}
{
"name": "stripe-sample",
"version": "0.1.0",
"dependencies": {
"@stripe/react-stripe-js": "^3.7.0",
"@stripe/stripe-js": "^7.3.0",
"express": "^4.17.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-scripts": "^3.4.0",
"stripe": "20.4.0"
},
"devDependencies": {
"concurrently": "4.1.2"
},
"homepage": "http://localhost:3000/checkout",
"proxy": "http://localhost:4242",
"scripts": {
"start-client": "react-scripts start",
"start-server": "node server.js",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"start": "concurrently "yarn start-client" "yarn start-server""
},
"eslintConfig": {
"extends": "react-app"
},
"browserslist": {
"production": \[
">0.2%",
"not dead",
"not op\_mini all"
],
"development": \[
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
}
}
require 'stripe'

\# This is a public sample test API key.

# Don’t submit any personally identifiable information in requests made with this key.

# Sign in to see your own test API key embedded in code samples.

Stripe.api\_key = '<\<YOUR\_SECRET\_KEY>>'
def create\_location
Stripe::Terminal::Location.create({
display\_name: '{{TERMINAL\_LOCATION\_NAME}}',
phone: '{{TERMINAL\_LOCATION\_PHONE}}',
address: {
line1: '{{TERMINAL\_LOCATION\_LINE1}}',
line2: '{{TERMINAL\_LOCATION\_LINE2}}',
city: '{{TERMINAL\_LOCATION\_CITY}}',
state: '{{TERMINAL\_LOCATION\_STATE}}',
country: '{{TERMINAL\_LOCATION\_COUNTRY}}',
postal\_code: '{{TERMINAL\_LOCATION\_POSTAL}}',
}
})
end
def create\_location
Stripe::Terminal::Location.create({
display\_name: '{{TERMINAL\_LOCATION\_NAME}}',
display\_name\_kana: '{{TERMINAL\_LOCATION\_NAMEKANA}}',
display\_name\_kanji: '{{TERMINAL\_LOCATION\_NAMEKANJI}}',
phone: '{{TERMINAL\_LOCATION\_PHONE}}',
address\_kana: {
line1: '{{TERMINAL\_LOCATION\_LINE1KANA}}',
line2: '{{TERMINAL\_LOCATION\_LINE2KANA}}',
town: '{{TERMINAL\_LOCATION\_TOWNKANA}}',
city: '{{TERMINAL\_LOCATION\_CITYKANA}}',
state: '{{TERMINAL\_LOCATION\_STATEKANA}}',
postal\_code: '{{TERMINAL\_LOCATION\_POSTALCODEKANA}}',
},
address\_kanji: {
line1: '{{TERMINAL\_LOCATION\_LINE1KANJI}}',
line2: '{{TERMINAL\_LOCATION\_LINE2KANJI}}',
town: '{{TERMINAL\_LOCATION\_TOWNKANJI}}',
city: '{{TERMINAL\_LOCATION\_CITYKANJI}}',
state: '{{TERMINAL\_LOCATION\_STATEKANJI}}',
postal\_code: '{{TERMINAL\_LOCATION\_POSTALCODEKANJI}}',
}
})
end
post '/create\_location' do
content\_type 'application/json'
data = JSON.parse(request.body.read)

location = Stripe::Terminal::Location.create({
display\_name: data\['display\_name'],
address: {
line1: data\['address']\['line1'],
city: data\['address']\['city'],
state: data\['address']\['state'],
country: data\['address']\['country'],
postal\_code: data\['address']\['postal\_code'],
}
})

location.to\_json
end
post '/create\_location' do
content\_type 'application/json'

location = Stripe::Terminal::Location.create({
display\_name: '{{TERMINAL\_LOCATION\_NAME}}',
display\_name\_kana: '{{TERMINAL\_LOCATION\_NAMEKANA}}',
display\_name\_kanji: '{{TERMINAL\_LOCATION\_NAMEKANJI}}',
phone: '{{TERMINAL\_LOCATION\_PHONE}}',
address\_kana: {
line1: '{{TERMINAL\_LOCATION\_LINE1KANA}}',
line2: '{{TERMINAL\_LOCATION\_LINE2KANA}}',
town: '{{TERMINAL\_LOCATION\_TOWNKANA}}',
city: '{{TERMINAL\_LOCATION\_CITYKANA}}',
state: '{{TERMINAL\_LOCATION\_STATEKANA}}',
postal\_code: '{{TERMINAL\_LOCATION\_POSTALCODEKANA}}',
},
address\_kanji: {
line1: '{{TERMINAL\_LOCATION\_LINE1KANJI}}',
line2: '{{TERMINAL\_LOCATION\_LINE2KANJI}}',
town: '{{TERMINAL\_LOCATION\_TOWNKANJI}}',
city: '{{TERMINAL\_LOCATION\_CITYKANJI}}',
state: '{{TERMINAL\_LOCATION\_STATEKANJI}}',
postal\_code: '{{TERMINAL\_LOCATION\_POSTALCODEKANJI}}',
},
})

location.to\_json
end
post '/register\_reader' do
content\_type 'application/json'
data = JSON.parse(request.body.read)

reader = Stripe::Terminal::Reader.create(
location: data\['location\_id'],
label: 'Quickstart - S700 Simulated Reader',
registration\_code: 'simulated-s700'
label: 'Quickstart - S710 Simulated Reader',
registration\_code: 'simulated-s710'
label: 'Quickstart - V660p Simulated Reader',
registration\_code: 'simulated-v660p'
label: 'Quickstart - WisePOS E Simulated Reader',
registration\_code: 'simulated-wpe'
)
reader.to\_json
end
\# The ConnectionToken's secret lets you connect to any Stripe Terminal reader

# and take payments with your Stripe account.

# Be sure to authenticate the endpoint for creating connection tokens.

post '/connection\_token' do
content\_type 'application/json'

connection\_token = Stripe::Terminal::ConnectionToken.create
{secret: connection\_token.secret}.to\_json
end
post '/create\_payment\_intent' do
content\_type 'application/json'
data = JSON.parse(request.body.read)

\# For Terminal payments, the 'payment\_method\_types' parameter must include

# 'card\_present'.

# To automatically capture funds when a charge is authorized,

# set `capture_method` to `automatic`.

intent = Stripe::PaymentIntent.create(
amount: data\['amount'],
currency: '{{TERMINAL\_CURRENCY}}',
payment\_method\_types: \[
'{{TERMINAL\_PAYMENT\_METHODS}}'
],
capture\_method: 'automatic',
payment\_method\_options: {
card\_present: {
capture\_method: 'manual\_preferred'
}
}
)

intent.to\_json
end
post '/process\_payment' do
content\_type 'application/json'
data = JSON.parse(request.body.read)

tries = 0
begin
tries += 1
reader = Stripe::Terminal::Reader.process\_payment\_intent(
data\['reader\_id'],
payment\_intent: data\['payment\_intent\_id']
)
reader.to\_json
rescue Stripe::InvalidRequestError => e
case e.code
when 'terminal\_reader\_timeout'
\# Temporary networking blip, automatically retry a few times.
retry if tries < 3
when 'terminal\_reader\_offline'
\# Reader is offline and won't respond to API requests. Make sure the reader is powered on
\# and connected to the internet before retrying.
request.logger.error(e.message)
when 'terminal\_reader\_busy'
\# Reader is currently busy processing another request, installing updates, or changing settings.
\# Remember to disable the pay button in your point-of-sale application while waiting for a
\# reader to respond to an API request.
request.logger.error(e.message)
when 'intent\_invalid\_state'
\# Check PaymentIntent status because it's not ready to be processed. It might have been already
\# successfully processed or canceled.
payment\_intent = Stripe::PaymentIntent.retrieve(data\['payment\_intent\_id'])
request.logger.error("PaymentIntent is already in #{payment\_intent.status} state.")
else
request.logger.error(e.message)
end

```
  e.to_json
end
```

end
post '/simulate\_payment' do
content\_type 'application/json'
data = JSON.parse(request.body.read)

options = {
card\_present: { number: data\['card\_number'] },
type: 'card\_present'
}

reader = Stripe::Terminal::Reader::TestHelpers.present\_payment\_method(
data\['reader\_id'], options
)

reader.to\_json
end
post '/capture\_payment\_intent' do
data = JSON.parse(request.body.read)

intent = Stripe::PaymentIntent.capture(data\['payment\_intent\_id'])

intent.to\_json
end
import stripe

\# This is a public sample test API key.

# Don’t submit any personally identifiable information in requests made with this key.

# Sign in to see your own test API key embedded in code samples.

stripe.api\_key = '<\<YOUR\_SECRET\_KEY>>'
def create\_location():
location = stripe.terminal.Location.create(
display\_name='{{TERMINAL\_LOCATION\_NAME}}',
phone='{{TERMINAL\_LOCATION\_PHONE}}',
address={
'line1': '{{TERMINAL\_LOCATION\_LINE1}}',
'line2': '{{TERMINAL\_LOCATION\_LINE2}}',
'city': '{{TERMINAL\_LOCATION\_CITY}}',
'state': '{{TERMINAL\_LOCATION\_STATE}}',
'country': '{{TERMINAL\_LOCATION\_COUNTRY}}',
'postal\_code': '{{TERMINAL\_LOCATION\_POSTAL}}',
},
)

return location
def create\_location():
location = stripe.terminal.Location.create(
display\_name='{{TERMINAL\_LOCATION\_NAME}}',
display\_name\_kana='{{TERMINAL\_LOCATION\_NAMEKANA}}',
display\_name\_kanji='{{TERMINAL\_LOCATION\_NAMEKANJI}}',
phone='{{TERMINAL\_LOCATION\_PHONE}}',
address\_kana={
'line1': '{{TERMINAL\_LOCATION\_LINE1KANA}}',
'line2': '{{TERMINAL\_LOCATION\_LINE2KANA}}',
'town': '{{TERMINAL\_LOCATION\_TOWNKANA}}',
'city': '{{TERMINAL\_LOCATION\_CITYKANA}}',
'state': '{{TERMINAL\_LOCATION\_STATEKANA}}',
'postal\_code': '{{TERMINAL\_LOCATION\_POSTALCODEKANA}}',
},
address\_kanji={
'line1': '{{TERMINAL\_LOCATION\_LINE1KANJI}}',
'line2': '{{TERMINAL\_LOCATION\_LINE2KANJI}}',
'town': '{{TERMINAL\_LOCATION\_TOWNKANJI}}',
'city': '{{TERMINAL\_LOCATION\_CITYKANJI}}',
'state': '{{TERMINAL\_LOCATION\_STATEKANJI}}',
'postal\_code': '{{TERMINAL\_LOCATION\_POSTALCODEKANJI}}',
},
)

return location
@app.route('/create\_location', methods=\['POST'])
def create\_location():
data = json.loads(request.data)

location = stripe.terminal.Location.create(
display\_name=data\['display\_name'],
address={
'line1': data\['address']\['line1'],
'city': data\['address']\['city'],
'state': data\['address']\['state'],
'country': data\['address']\['country'],
'postal\_code': data\['address']\['postal\_code'],
},
)

return location
@app.route('/create\_location', methods=\['POST'])
def create\_location():
location = stripe.terminal.Location.create(
display\_name='{{TERMINAL\_LOCATION\_NAME}}',
display\_name\_kana='{{TERMINAL\_LOCATION\_NAMEKANA}}',
display\_name\_kanji='{{TERMINAL\_LOCATION\_NAMEKANJI}}',
phone='{{TERMINAL\_LOCATION\_PHONE}}',
address\_kana={
'line1': '{{TERMINAL\_LOCATION\_LINE1KANA}}',
'line2': '{{TERMINAL\_LOCATION\_LINE2KANA}}',
'town': '{{TERMINAL\_LOCATION\_TOWNKANA}}',
'city': '{{TERMINAL\_LOCATION\_CITYKANA}}',
'state': '{{TERMINAL\_LOCATION\_STATEKANA}}',
'postal\_code': '{{TERMINAL\_LOCATION\_POSTALCODEKANA}}',
},
address\_kanji={
'line1': '{{TERMINAL\_LOCATION\_LINE1KANJI}}',
'line2': '{{TERMINAL\_LOCATION\_LINE2KANJI}}',
'town': '{{TERMINAL\_LOCATION\_TOWNKANJI}}',
'city': '{{TERMINAL\_LOCATION\_CITYKANJI}}',
'state': '{{TERMINAL\_LOCATION\_STATEKANJI}}',
'postal\_code': '{{TERMINAL\_LOCATION\_POSTALCODEKANJI}}',
},
)

return location
@app.route('/register\_reader', methods=\['POST'])
def register\_reader():
data = json.loads(request.data)

reader = stripe.terminal.Reader.create(
location=data\['location\_id'],
label='Quickstart - S700 Simulated Reader',
registration\_code='simulated-s700'
label='Quickstart - S710 Simulated Reader',
registration\_code='simulated-s710'
label='Quickstart - V660p Simulated Reader',
registration\_code='simulated-v660p'
label='Quickstart - WisePOS E Simulated Reader',
registration\_code='simulated-wpe'
)

return reader
@app.route('/create\_payment\_intent', methods=\['POST'])
def secret():
data = json.loads(request.data)

\# For Terminal payments, the 'payment\_method\_types' parameter must include

# 'card\_present'.

# To automatically capture funds when a charge is authorized,

# set `capture_method` to `automatic`.

intent = stripe.PaymentIntent.create(
amount=data\['amount'],
currency='{{TERMINAL\_CURRENCY}}',
payment\_method\_types=\[
'{{TERMINAL\_PAYMENT\_METHODS}}'
],
capture\_method='automatic',
payment\_method\_options={
"card\_present": {
"capture\_method": "manual\_preferred"
}
}
)
return intent
@app.route('/process\_payment', methods=\['POST'])
def process\_payment():
data = json.loads(request.data)

tries = 3
for attempt in range(tries):
try:
reader = stripe.terminal.Reader.process\_payment\_intent(
data\['reader\_id'],
payment\_intent=data\['payment\_intent\_id'],
)
return reader
except stripe.error.InvalidRequestError as e:
if e.code == 'terminal\_reader\_timeout':
\# Temporary networking blip, automatically retry a few times.
if attempt < tries - 1:
continue
else:
return e.json\_body
elif e.code == 'terminal\_reader\_offline':
\# Reader is offline and won't respond to API requests. Make sure the reader is powered on
\# and connected to the internet before retrying.
app.logger.error(e)
return e.json\_body
elif e.code == 'terminal\_reader\_busy':
\# Reader is currently busy processing another request, installing updates or changing settings.
\# Remember to disable the pay button in your point-of-sale application while waiting for a
\# reader to respond to an API request.
app.logger.error(e)
return e.json\_body
elif e.code == 'intent\_invalid\_state':
\# Check PaymentIntent status because it's not ready to be processed. It might have been already
\# successfully processed or canceled.
payment\_intent = stripe.PaymentIntent.retrieve(data\['payment\_intent\_id'])
app.logger.error('PaymentIntent is already in %s state.' % payment\_intent.status)
return e.json\_body
else:
app.logger.error(e)
return e.json\_body
@app.route('/simulate\_payment', methods=\['POST'])
def simulate\_payment():
data = json.loads(request.data)

options = {
"card\_present": {
"number": data\['card\_number']
},
"type": "card\_present"
}

reader = stripe.terminal.Reader.TestHelpers.present\_payment\_method(
data\['reader\_id'],
\*\*options
)

return reader
\# The ConnectionToken's secret lets you connect to any Stripe Terminal reader

# and take payments with your Stripe account.

# Be sure to authenticate the endpoint for creating connection tokens.

@app.route('/connection\_token', methods=\['POST'])
def token():
connection\_token = stripe.terminal.ConnectionToken.create()
return jsonify(secret=connection\_token.secret)
@app.route('/capture\_payment\_intent', methods=\['POST'])
def capture():
data = json.loads(request.data)

intent = stripe.PaymentIntent.capture(
data\['payment\_intent\_id']
)

return intent
certifi==2026.1.4
chardet==5.2.0
click==8.3.1
Flask==3.1.2
idna==3.11
itsdangerous==2.2.0
Jinja2==3.1.6
MarkupSafe==3.0.3
requests==2.32.5
stripe==14.4.0
toml==0.10.2
Werkzeug==3.1.5
$stripe = new \Stripe\StripeClient('<\<YOUR\_SECRET\_KEY>>');
$data = json\_decode(file\_get\_contents('php://input'), true);

$location = $stripe->terminal->locations->create(\[
'display\_name' => $data\['display\_name'],
'address' => \[
'line1' => $data\['address']\['line1'],
'city' => $data\['address']\['city'],
'state' => $data\['address']\['state'],
'country' => $data\['address']\['country'],
'postal\_code' => $data\['address']\['postal\_code'],
],
]);
$location = $stripe->terminal->locations->create(\[
'display\_name' => '{{TERMINAL\_LOCATION\_NAME}}',
'display\_name\_kana' => '{{TERMINAL\_LOCATION\_NAMEKANA}}',
'display\_name\_kanji' => '{{TERMINAL\_LOCATION\_NAMEKANJI}}',
'phone' => '{{TERMINAL\_LOCATION\_PHONE}}',
'address\_kana' => \[
'line1' => "{{TERMINAL\_LOCATION\_LINE1KANA}}",
'line2' => "{{TERMINAL\_LOCATION\_LINE2KANA}}",
'town' => "{{TERMINAL\_LOCATION\_TOWNKANA}}",
'city' => "{{TERMINAL\_LOCATION\_CITYKANA}}",
'state' => "{{TERMINAL\_LOCATION\_STATEKANA}}",
'postal\_code' => "{{TERMINAL\_LOCATION\_POSTALCODEKANA}}",
],
'address\_kanji' => \[
'line1' => "{{TERMINAL\_LOCATION\_LINE1KANJI}}",
'line2' => "{{TERMINAL\_LOCATION\_LINE2KANJI}}",
'town' => "{{TERMINAL\_LOCATION\_TOWNKANJI}}",
'city' => "{{TERMINAL\_LOCATION\_CITYKANJI}}",
'state' => "{{TERMINAL\_LOCATION\_STATEKANJI}}",
'postal\_code' => "{{TERMINAL\_LOCATION\_POSTALCODEKANJI}}",
],
]);
$stripe = new \Stripe\StripeClient('<\<YOUR\_SECRET\_KEY>>');
$reader = $stripe->terminal->readers->create(\[
'location' => $json\_obj->location\_id,
'label' => 'Quickstart - S700 Simulated Reader',
'registration\_code' => 'simulated-s700'
'label' => 'Quickstart - S710 Simulated Reader',
'registration\_code' => 'simulated-s710'
'label' => 'Quickstart - V660p Simulated Reader',
'registration\_code' => 'simulated-v660p'
'label' => 'Quickstart - WisePOS E Simulated Reader',
'registration\_code' => 'simulated-wpe'
]);
$stripe = new \Stripe\StripeClient('<\<YOUR\_SECRET\_KEY>>');
$intent = $stripe->paymentIntents->create(\[
'amount' => $json\_obj->amount,
'currency' => '{{TERMINAL\_CURRENCY}}',
'payment\_method\_types' => \[
'{{TERMINAL\_PAYMENT\_METHODS}}'
],
'capture\_method' => 'automic',
'payment\_method\_options' => \[
'card\_present' => \[
'capture\_method' => 'manual\_preferred'
]
]
]);
$stripe = new \Stripe\StripeClient('<\<YOUR\_SECRET\_KEY>>');
$reader = $stripe->terminal->readers->processPaymentIntent($json\_obj->reader\_id, \[
'payment\_intent' => $json\_obj->payment\_intent\_id,
]);
} catch (\Stripe\Exception\InvalidRequestException $e) {
switch($e->getStripeCode()) {
case "terminal\_reader\_timeout":
// Temporary networking blip, automatically retry a few times.
if ($attempt == $tries) {
$shouldRetry = false;
echo json\_encode(\['error' => $e->getMessage()]);
} else {
$shouldRetry = true;
}
break;
case "terminal\_reader\_offline":
// Reader is offline and won't respond to API requests. Make sure the reader is powered on
// and connected to the internet before retrying.
$shouldRetry = false;
echo json\_encode(\['error' => $e->getMessage()]);
break;
case "terminal\_reader\_busy":
// Reader is currently busy processing another request, installing updates or changing settings.
// Remember to disable the pay button in your point-of-sale application while waiting for a
// reader to respond to an API request.
$shouldRetry = false;
echo json\_encode(\['error' => $e->getMessage()]);
break;
case "intent\_invalid\_state":
// Check PaymentIntent status because it's not ready to be processed. It might have been already
// successfully processed or canceled.
$shouldRetry = false;
$paymentIntent = $stripe->paymentIntents->retrieve($json\_obj->payment\_intent\_id);
echo json\_encode(\['error' => 'PaymentIntent is already in ' . $paymentIntent->status . ' state.']);
break;
default:
$shouldRetry = false;
echo json\_encode(\['error' => $e->getMessage()]);
break;
}
}
} while($shouldRetry);
$stripe = new \Stripe\StripeClient('<\<YOUR\_SECRET\_KEY>>');
$params = \[
"card\_present" => \[
"number" => $json\_obj->card\_number
],
"type" => "card\_present"
];
$reader = $stripe->testHelpers->terminal->readers->presentPaymentMethod($json\_obj->reader\_id, $params);
$stripe = new \Stripe\StripeClient('<\<YOUR\_SECRET\_KEY>>');
$intent = $stripe->paymentIntents->capture($json\_obj->payment\_intent\_id);
$stripe = new \Stripe\StripeClient('<\<YOUR\_SECRET\_KEY>>');
$connectionToken = $stripe->terminal->connectionTokens->create();
echo json\_encode(array('secret' => $connectionToken->secret));
private static Location createLocation(){
var options = new LocationCreateOptions
{
DisplayName = "{{TERMINAL\_LOCATION\_NAME}}",
Phone = "{{TERMINAL\_LOCATION\_PHONE}}",
Address = new AddressOptions
{
Line1 = "{{TERMINAL\_LOCATION\_LINE1}}",
Line2 = "{{TERMINAL\_LOCATION\_LINE2}}",
City = "{{TERMINAL\_LOCATION\_CITY}}",
State = "{{TERMINAL\_LOCATION\_STATE}}",
Country = "{{TERMINAL\_LOCATION\_COUNTRY}}",
PostalCode = "{{TERMINAL\_LOCATION\_POSTAL}}",
},
};

```
var client = new StripeClient("<<YOUR_SECRET_KEY>>");
var location = client.V1.Terminal.Locations.Create(options);

return location;
```

}
private static Location createLocation(){
var options = new LocationCreateOptions
{
DisplayName = "{{TERMINAL\_LOCATION\_NAME}}",
DisplayNameKana = "{{TERMINAL\_LOCATION\_NAMEKANA}}",
DisplayNameKanji = "{{TERMINAL\_LOCATION\_NAMEKANJI}}",
Phone = "{{TERMINAL\_LOCATION\_PHONE}}",
AddressKana = new AddressJapanOptions
{
Line1 = "{{TERMINAL\_LOCATION\_LINE1KANA}}",
Line2 = "{{TERMINAL\_LOCATION\_LINE2KANA}}",
Town = "{{TERMINAL\_LOCATION\_TOWNKANA}}",
City = "{{TERMINAL\_LOCATION\_CITYKANA}}",
State = "{{TERMINAL\_LOCATION\_STATEKANA}}",
PostalCode = "{{TERMINAL\_LOCATION\_POSTALCODEKANA}}",
},
AddressKanji = new AddressJapanOptions
{
Line1 = "{{TERMINAL\_LOCATION\_LINE1KANJI}}",
Line2 = "{{TERMINAL\_LOCATION\_LINE2KANJI}}",
Town = "{{TERMINAL\_LOCATION\_TOWNKANJI}}",
City = "{{TERMINAL\_LOCATION\_CITYKANJI}}",
State = "{{TERMINAL\_LOCATION\_STATEKANJI}}",
PostalCode = "{{TERMINAL\_LOCATION\_POSTALCODEKANJI}}",
},
};

```
var client = new StripeClient("<<YOUR_SECRET_KEY>>");
var location = client.V1.Terminal.Locations.Create(options);

return location;
```

}
// This is a public sample test API key.
// Don't submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
services.AddSingleton(new StripeClient("<\<YOUR\_SECRET\_KEY>>"));
// The ConnectionToken's secret lets you connect to any Stripe Terminal reader
// and take payments with your Stripe account.
// Be sure to authenticate the endpoint for creating connection tokens.
\[Route("connection\_token")]
\[ApiController]
public class ConnectionTokenApiController : Controller
{
private readonly StripeClient \_client;

```
public ConnectionTokenApiController(StripeClient client)
{
  _client = client;
}

[HttpPost]
public ActionResult Post()
{
  var options = new ConnectionTokenCreateOptions{};
  var connectionToken = _client.V1.Terminal.ConnectionTokens.Create(options);

  return Json(new {secret = connectionToken.Secret});
}
```

}
\[Route("create\_location")]
\[ApiController]
public class CreateLocationApiController : Controller
{
private readonly StripeClient \_client;

```
public CreateLocationApiController(StripeClient client)
{
  _client = client;
}

[HttpPost]
public ActionResult Post(CreateLocationRequest request)
{
  var options = new LocationCreateOptions
  {
    DisplayName = request.DisplayName,
    Address = new AddressOptions
    {
      Line1 = request.Address.Line1,
      City = request.Address.City,
      State = request.Address.State,
      Country = request.Address.Country,
      PostalCode = request.Address.PostalCode,
    },
  };
  var location = _client.V1.Terminal.Locations.Create(options);
  return Json(location);
}
```

}

public class CreateLocationRequest
{
\[JsonProperty("display\_name")]
public string DisplayName { get; set; }

```
[JsonProperty("address")]
public CreateLocationAddress Address { get; set; }
```

}

public class CreateLocationAddress
{
\[JsonProperty("line1")]
public string Line1 { get; set; }

```
[JsonProperty("city")]
public string City { get; set; }

[JsonProperty("state")]
public string State { get; set; }

[JsonProperty("country")]
public string Country { get; set; }

[JsonProperty("postal_code")]
public string PostalCode { get; set; }
```

}
\[Route("create\_location")]
\[ApiController]
public class CreateLocationApiController : Controller
{
private readonly StripeClient \_client;

```
public CreateLocationApiController(StripeClient client)
{
  _client = client;
}

[HttpPost]
public ActionResult Post()
{
  var options = new LocationCreateOptions
  {
    DisplayName = "{{TERMINAL_LOCATION_NAME}}",
    DisplayNameKana = "{{TERMINAL_LOCATION_NAMEKANA}}",
    DisplayNameKanji = "{{TERMINAL_LOCATION_NAMEKANJI}}",
    Phone = "{{TERMINAL_LOCATION_PHONE}}",
    AddressKana = new AddressJapanOptions
    {
      Line1 = "{{TERMINAL_LOCATION_LINE1KANA}}",
      Line2 = "{{TERMINAL_LOCATION_LINE2KANA}}",
      Town = "{{TERMINAL_LOCATION_TOWNKANA}}",
      City = "{{TERMINAL_LOCATION_CITYKANA}}",
      State = "{{TERMINAL_LOCATION_STATEKANA}}",
      PostalCode = "{{TERMINAL_LOCATION_POSTALCODEKANA}}",
    },
    AddressKanji = new AddressJapanOptions
    {
      Line1 = "{{TERMINAL_LOCATION_LINE1KANJI}}",
      Line2 = "{{TERMINAL_LOCATION_LINE2KANJI}}",
      Town = "{{TERMINAL_LOCATION_TOWNKANJI}}",
      City = "{{TERMINAL_LOCATION_CITYKANJI}}",
      State = "{{TERMINAL_LOCATION_STATEKANJI}}",
      PostalCode = "{{TERMINAL_LOCATION_POSTALCODEKANJI}}",
    },
  };
  var location = _client.V1.Terminal.Locations.Create(options);
  return Json(location);
}
```

}
\[Route("register\_reader")]
\[ApiController]
public class RegisterReaderApiController : Controller
{
private readonly StripeClient \_client;

```
public RegisterReaderApiController(StripeClient client)
{
  _client = client;
}

[HttpPost]
public ActionResult Post(RegisterReaderRequest request)
{
  var options = new ReaderCreateOptions
  {
    Location = request.LocationId,
    Label = "Quickstart - S700 Simulated Reader",
    RegistrationCode = "simulated-s700",
    Label = "Quickstart - S710 Simulated Reader",
    RegistrationCode = "simulated-s710",
    Label = "Quickstart - V660p Simulated Reader",
    RegistrationCode = "simulated-v660p",
    Label = "Quickstart - WisePOS E Simulated Reader",
    RegistrationCode = "simulated-wpe",
  };
  var reader = _client.V1.Terminal.Readers.Create(options);
  return Json(reader);
}
```

}

public class RegisterReaderRequest
{
\[JsonProperty("location\_id")]
public string LocationId { get; set; }
}
\[Route("create\_payment\_intent")]
\[ApiController]
public class PaymentIntentApiController : Controller
{
private readonly StripeClient \_client;

```
public PaymentIntentApiController(StripeClient client)
{
  _client = client;
}

[HttpPost]
public ActionResult Post(PaymentIntentCreateRequest request)
{
  // For Terminal payments, the 'payment_method_types' parameter must include
  // 'card_present'.
  // To automatically capture funds when a charge is authorized,
  // set `capture_method` to `automatic`.
  var options = new PaymentIntentCreateOptions
  {
      Amount = long.Parse(request.Amount),
      Currency = "{{TERMINAL_CURRENCY}}",
      PaymentMethodTypes = new List
      {
        "{{TERMINAL_PAYMENT_METHODS}}"
      },
      CaptureMethod = "automatic",
      PaymentMethodOptions = new PaymentIntentPaymentMethodOptionsOptions
      {
          CardPresent = new PaymentIntentPaymentMethodOptionsCardPresentOptions
          {
              CaptureMethod = "manual_preferred"
          }
      }
  };
  var intent = _client.V1.PaymentIntents.Create(options);

  return Json(intent);
}

public class PaymentIntentCreateRequest
{
  [JsonProperty("amount")]
  public string Amount { get; set; }
}
```

}
\[Route("process\_payment")]
\[ApiController]
public class ProcessPaymentApiController : Controller
{
private readonly StripeClient \_client;

```
public ProcessPaymentApiController(StripeClient client)
{
  _client = client;
}

[HttpPost]
public ActionResult Post(ProcessPaymentRequest request)
{
  var options = new ReaderProcessPaymentIntentOptions
  {
    PaymentIntent = request.PaymentIntentId,
  };

  var attempt = 0;
  var tries = 3;
  while (true)
  {
    attempt++;
    try
    {
      var reader = _client.V1.Terminal.Readers.ProcessPaymentIntent(request.ReaderId, options);
      return Json(reader);
    }
    catch (StripeException e)
    {
      switch (e.StripeError.Code)
      {
        case "terminal_reader_timeout":
          // Temporary networking blip, automatically retry a few times.
          if (attempt == tries)
          {
            return Json(e.StripeError);
          }
          break;
        case "terminal_reader_offline":
          // Reader is offline and won't respond to API requests. Make sure the reader is powered on
          // and connected to the internet before retrying.
          return Json(e.StripeError);
        case "terminal_reader_busy":
          // Reader is currently busy processing another request, installing updates or changing settings.
          // Remember to disable the pay button in your point-of-sale application while waiting for a
          // reader to respond to an API request.
          return Json(e.StripeError);
        case "intent_invalid_state":
          // Check PaymentIntent status because it's not ready to be processed. It might have been already
          // successfully processed or canceled.
          var paymentIntent = _client.V1.PaymentIntents.Get(request.PaymentIntentId);
          Console.WriteLine($"PaymentIntent is already in {paymentIntent.Status} state.");
          return Json(e.StripeError);
        default:
          return Json(e.StripeError);
      }
    }
  }
}

public class ProcessPaymentRequest
{
  [JsonProperty("reader_id")]
  public string ReaderId { get; set; }

  [JsonProperty("payment_intent_id")]
  public string PaymentIntentId { get; set; }
}
```

}
\[Route("simulate\_payment")]
\[ApiController]
public class SimulatePaymentApiController : Controller
{
private readonly StripeClient \_client;

```
public SimulatePaymentApiController(StripeClient client)
{
  _client = client;
}

[HttpPost]
public ActionResult Post(SimulatePaymentRequest request)
{
  var parameters = new Stripe.TestHelpers.Terminal.ReaderPresentPaymentMethodOptions
  {
      CardPresent = new Stripe.TestHelpers.Terminal.ReaderCardPresentOptions
      {
          Number = request.CardNumber
      },
      Type = "card_present"
  };

  var reader = _client.TestHelpers.Terminal.Readers.PresentPaymentMethod(request.ReaderId, parameters);
  return Json(reader);
}

public class SimulatePaymentRequest
{
  [JsonProperty("reader_id")]
  public string ReaderId { get; set; }

  [JsonProperty("card_number")]
  public string CardNumber { get; set; }
}
```

}
\[Route("capture\_payment\_intent")]
\[ApiController]
public class CapturePaymentIntentApiController : Controller
{
private readonly StripeClient \_client;

```
public CapturePaymentIntentApiController(StripeClient client)
{
  _client = client;
}

[HttpPost]
public ActionResult Post(PaymentIntentCaptureRequest request)
{
  var intent = _client.V1.PaymentIntents.Capture(request.PaymentIntentId, null);
  return Json(intent);
}

public class PaymentIntentCaptureRequest
{
  [JsonProperty("payment_intent_id")]
  public string PaymentIntentId { get; set; }
}
```

}
"github.com/stripe/stripe-go/v84"
"github.com/stripe/stripe-go/v84/paymentintent"
"github.com/stripe/stripe-go/v84/terminal/connectiontoken"
"github.com/stripe/stripe-go/v84/terminal/location"
"github.com/stripe/stripe-go/v84/terminal/reader"
readertesthelpers "github.com/stripe/stripe-go/v84/testhelpers/terminal/reader"
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
stripe.Key = "<\<YOUR\_SECRET\_KEY>>"
http.HandleFunc("/connection\_token", handleConnectionToken)
http.HandleFunc("/create\_location", handleCreateLocation)
http.HandleFunc("/register\_reader", handleRegisterReader)
http.HandleFunc("/process\_payment", handleProcessPayment)
http.HandleFunc("/simulate\_payment", handleSimulatePayment)
func createLocation(w http.ResponseWriter, r \*http.Request) \*stripe.TerminalLocation {
params := \&stripe.TerminalLocationParams{
Address: \&stripe.AddressParams{
Line1: stripe.String("{{TERMINAL\_LOCATION\_LINE1}}"),
Line2: stripe.String("{{TERMINAL\_LOCATION\_LINE2}}"),
City: stripe.String("{{TERMINAL\_LOCATION\_CITY}}"),
State: stripe.String("{{TERMINAL\_LOCATION\_STATE}}"),
Country: stripe.String("{{TERMINAL\_LOCATION\_COUNTRY}}"),
PostalCode: stripe.String("{{TERMINAL\_LOCATION\_POSTAL}}"),
},
DisplayName: stripe.String("{{TERMINAL\_LOCATION\_NAME}}"),
Phone: stripe.String("{{TERMINAL\_LOCATION\_PHONE}}"),
}

l, \_ := location.New(params)

return l
}
func createLocation(w http.ResponseWriter, r \*http.Request) \*stripe.TerminalLocation {
params := \&stripe.TerminalLocationParams{
AddressKana: \&stripe.TerminalLocationAddressKanaParams{
Line1: stripe.String("{{TERMINAL\_LOCATION\_LINE1KANA}}"),
Line2: stripe.String("{{TERMINAL\_LOCATION\_LINE2KANA}}"),
Town: stripe.String("{{TERMINAL\_LOCATION\_TOWNKANA}}"),
City: stripe.String("{{TERMINAL\_LOCATION\_CITYKANA}}"),
State: stripe.String("{{TERMINAL\_LOCATION\_STATEKANA}}"),
PostalCode: stripe.String("{{TERMINAL\_LOCATION\_POSTALCODEKANA}}"),
},
AddressKanji: \&stripe.TerminalLocationAddressKanjiParams{
Line1: stripe.String("{{TERMINAL\_LOCATION\_LINE1KANJI}}"),
Line2: stripe.String("{{TERMINAL\_LOCATION\_LINE2KANJI}}"),
Town: stripe.String("{{TERMINAL\_LOCATION\_TOWNKANJI}}"),
City: stripe.String("{{TERMINAL\_LOCATION\_CITYKANJI}}"),
State: stripe.String("{{TERMINAL\_LOCATION\_STATEKANJI}}"),
PostalCode: stripe.String("{{TERMINAL\_LOCATION\_POSTALCODEKANJI}}"),
},
DisplayName: stripe.String("{{TERMINAL\_LOCATION\_NAME}}"),
DisplayNameKana: stripe.String("{{TERMINAL\_LOCATION\_NAMEKANA}}"),
DisplayNameKanji: stripe.String("{{TERMINAL\_LOCATION\_NAMEKANJI}}"),
Phone: stripe.String("{{TERMINAL\_LOCATION\_PHONE}}"),
}

l, \_ := location.New(params)

return l
}
func handleCreateLocation(w http.ResponseWriter, r \*http.Request) {
var req struct {
DisplayName string `json:"display_name"`
Address struct {
Line1 string `json:"line1"`
City string `json:"city"`
State string `json:"state"`
Country string `json:"country"`
PostalCode string `json:"postal_code"`
} `json:"address"`
}

if err := json.NewDecoder(r.Body).Decode(\&req); err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("json.NewDecoder.Decode: %v", err)
return
}

params := \&stripe.TerminalLocationParams{
Address: \&stripe.AddressParams{
Line1: stripe.String(req.Address.Line1),
City: stripe.String(req.Address.City),
State: stripe.String(req.Address.State),
Country: stripe.String(req.Address.Country),
PostalCode: stripe.String(req.Address.PostalCode),
},
DisplayName: stripe.String(req.DisplayName),
}

l, err := location.New(params)

if err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("location.New: %v", err)
return
}

writeJSON(w, l)
}
func handleCreateLocation(w http.ResponseWriter, r \*http.Request) {
params := \&stripe.TerminalLocationParams{
AddressKana: \&stripe.TerminalLocationAddressKanaParams{
Line1: stripe.String("{{TERMINAL\_LOCATION\_LINE1KANA}}"),
Line2: stripe.String("{{TERMINAL\_LOCATION\_LINE2KANA}}"),
Town: stripe.String("{{TERMINAL\_LOCATION\_TOWNKANA}}"),
City: stripe.String("{{TERMINAL\_LOCATION\_CITYKANA}}"),
State: stripe.String("{{TERMINAL\_LOCATION\_STATEKANA}}"),
PostalCode: stripe.String("{{TERMINAL\_LOCATION\_POSTALCODEKANA}}"),
},
AddressKanji: \&stripe.TerminalLocationAddressKanjiParams{
Line1: stripe.String("{{TERMINAL\_LOCATION\_LINE1KANJI}}"),
Line2: stripe.String("{{TERMINAL\_LOCATION\_LINE2KANJI}}"),
Town: stripe.String("{{TERMINAL\_LOCATION\_TOWNKANJI}}"),
City: stripe.String("{{TERMINAL\_LOCATION\_CITYKANJI}}"),
State: stripe.String("{{TERMINAL\_LOCATION\_STATEKANJI}}"),
PostalCode: stripe.String("{{TERMINAL\_LOCATION\_POSTALCODEKANJI}}"),
},
DisplayName: stripe.String("{{TERMINAL\_LOCATION\_NAME}}"),
DisplayNameKana: stripe.String("{{TERMINAL\_LOCATION\_NAMEKANA}}"),
DisplayNameKanji: stripe.String("{{TERMINAL\_LOCATION\_NAMEKANJI}}"),
Phone: stripe.String("{{TERMINAL\_LOCATION\_PHONE}}"),
}

l, err := location.New(params)

if err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("location.New: %v", err)
return
}

writeJSON(w, l)
}
func handleRegisterReader(w http.ResponseWriter, r \*http.Request) {
var req struct {
LocationID string `json:"location_id"`
}

if err := json.NewDecoder(r.Body).Decode(\&req); err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("json.NewDecoder.Decode: %v", err)
return
}

params := \&stripe.TerminalReaderParams{
Location: stripe.String(req.LocationID),
Label: stripe.String("Quickstart - S700 Simulated Reader"),
RegistrationCode: stripe.String("simulated-s700"),
Label: stripe.String("Quickstart - S710 Simulated Reader"),
RegistrationCode: stripe.String("simulated-s710"),
Label: stripe.String("Quickstart - V660p Simulated Reader"),
RegistrationCode: stripe.String("simulated-v660p"),
Label: stripe.String("Quickstart - WisePOS E Simulated Reader"),
RegistrationCode: stripe.String("simulated-wpe"),
}

reader, err := reader.New(params)

if err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("reader.New: %v", err)
return
}

writeJSON(w, reader)
}
// The ConnectionToken's secret lets you connect to any Stripe Terminal reader
// and take payments with your Stripe account.
// Be sure to authenticate the endpoint for creating connection tokens.
func handleConnectionToken(w http.ResponseWriter, r \*http.Request) {
if r.Method != "POST" {
http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
return
}

params := \&stripe.TerminalConnectionTokenParams{}
ct, err := connectiontoken.New(params)

if err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("pi.New: %v", err)
return
}

writeJSON(w, struct {
Secret string `json:"secret"`
}{
Secret: ct.Secret,
})
}
func handleCreate(w http.ResponseWriter, r \*http.Request) {
if r.Method != "POST" {
http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
return
}

var req struct {
PaymentIntentAmount string `json:"amount"`
}

if err := json.NewDecoder(r.Body).Decode(\&req); err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("json.NewDecoder.Decode: %v", err)
return
}

amount, \_ := strconv.ParseInt(req.PaymentIntentAmount, 10, 64)

// For Terminal payments, the 'payment\_method\_types' parameter must include
// 'card\_present'.
// To automatically capture funds when a charge is authorized,
// set `capture_method` to `automatic`.
params := \&stripe.PaymentIntentParams{
Amount: stripe.Int64(amount),
Currency: stripe.String(string(stripe.Currency{{TERMINAL\_CURRENCY}})),
PaymentMethodTypes: stripe.StringSlice(\[]string{
"{{TERMINAL\_PAYMENT\_METHODS}}"
}),
CaptureMethod: stripe.String("automatic"),
PaymentMethodOptions: \&stripe.PaymentIntentPaymentMethodOptionsParams{
CardPresent: \&stripe.PaymentIntentPaymentMethodOptionsCardPresentParams{
CaptureMethod: stripe.String("manual\_preferred"),
},
},
}
pi, err := paymentintent.New(params)

if err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("pi.New: %v", err)
return
}

writeJSON(w, pi)
}
func handleProcessPayment(w http.ResponseWriter, r \*http.Request) {
var req struct {
ReaderID string `json:"reader_id"`
PaymentIntentID string `json:"payment_intent_id"`
}

if err := json.NewDecoder(r.Body).Decode(\&req); err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("json.NewDecoder.Decode: %v", err)
return
}

params := \&stripe.TerminalReaderProcessPaymentIntentParams{
PaymentIntent: stripe.String(req.PaymentIntentID),
}

reader, err := reader.ProcessPaymentIntent(req.ReaderID, params)

if err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("reader.New: %v", err)
return
}

writeJSON(w, reader)
}
func handleSimulatePayment(w http.ResponseWriter, r \*http.Request) {
var req struct {
ReaderID string `json:"reader_id"`
CardNumber string `json:"card_number"`
}

if err := json.NewDecoder(r.Body).Decode(\&req); err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("json.NewDecoder.Decode: %v", err)
return
}

```
params := &stripe.TestHelpersTerminalReaderPresentPaymentMethodParams{
	CardPresent: map[string]interface{}{
		"number": stripe.String(req.CardNumber),
	},
	Type: stripe.String("card_present"),
}
```

reader, err := readertesthelpers.PresentPaymentMethod(req.ReaderID, params)

if err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("reader.New: %v", err)
return
}

writeJSON(w, reader)
}
func handleCapture(w http.ResponseWriter, r \*http.Request) {
if r.Method != "POST" {
http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
return
}

var req struct {
PaymentIntentID string `json:"payment_intent_id"`
}

if err := json.NewDecoder(r.Body).Decode(\&req); err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("json.NewDecoder.Decode: %v", err)
return
}

pi, err := paymentintent.Capture(req.PaymentIntentID, nil)

if err != nil {
http.Error(w, err.Error(), http.StatusInternalServerError)
log.Printf("pi.Capture: %v", err)
return
}

writeJSON(w, pi)
}
require github.com/stripe/stripe-go/v84 v84.4.0
import com.stripe.model.terminal.ConnectionToken;
import com.stripe.model.terminal.Reader;
import com.stripe.param.terminal.ReaderProcessPaymentIntentParams;
import com.stripe.param.terminal.ReaderCreateParams;
static class CreateLocationParams {
private String display\_name;
private Address address;

```
static class Address {
  private String line1;
  private String city;
  private String state;
  private String country;
  private String postal_code;

  public String getLine1() {
    return line1;
  }

  public String getCity() {
    return city;
  }

  public String getState() {
    return state;
  }

  public String getCountry() {
    return country;
  }

  public String getPostalCode() {
    return postal_code;
  }
}

public String getDisplayName() {
  return display_name;
}

public Address getAddress() {
  return address;
}
```

}

static class ReaderParams {
private String reader\_id;
private String location\_id;
private String card\_number;

```
public String getReaderId() {
  return reader_id;
}

public String getLocationId() {
  return location_id;
}

public String getCardNumber() {
  return card_number;
}
```

}

static class ProcessPaymentParams {
private String reader\_id;
private String payment\_intent\_id;

```
public String getReaderId() {
  return reader_id;
}

public String getPaymentIntentId() {
  return payment_intent_id;
}
```

}
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
Stripe.apiKey = "<\<YOUR\_SECRET\_KEY>>";
post("/create\_location", (request, response) -> {
CreateLocationParams postBody = gson.fromJson(request.body(), CreateLocationParams.class);

```
  LocationCreateParams.Address address =
  LocationCreateParams.Address.builder()
    .setLine1(postBody.getAddress().getLine1())
    .setCity(postBody.getAddress().getCity())
    .setState(postBody.getAddress().getState())
    .setCountry(postBody.getAddress().getCountry())
    .setPostalCode(postBody.getAddress().getPostalCode())
    .build();

  LocationCreateParams params =
    LocationCreateParams.builder()
      .setDisplayName(postBody.getDisplayName())
      .setAddress(address)
      .build();

  Location location = Location.create(params);
  return location.toJson();
});
```

post("/create\_location", (request, response) -> {

```
  LocationCreateParams.AddressKana addressKana =
  LocationCreateParams.AddressKana.builder()
    .setLine1("{{TERMINAL_LOCATION_LINE1KANA}}")
    .setLine2("{{TERMINAL_LOCATION_LINE2KANA}}")
    .setTown("{{TERMINAL_LOCATION_TOWNKANA}}")
    .setCity("{{TERMINAL_LOCATION_CITYKANA}}")
    .setState("{{TERMINAL_LOCATION_STATEKANA}}")
    .setPostalCode("{{TERMINAL_LOCATION_POSTALCODEKANA}}")
    .build();

  LocationCreateParams.AddressKanji addressKanji =
  LocationCreateParams.AddressKanji.builder()
    .setLine1("{{TERMINAL_LOCATION_LINE1KANJI}}")
    .setLine2("{{TERMINAL_LOCATION_LINE2KANJI}}")
    .setTown("{{TERMINAL_LOCATION_TOWNKANJI}}")
    .setCity("{{TERMINAL_LOCATION_CITYKANJI}}")
    .setState("{{TERMINAL_LOCATION_STATEKANJI}}")
    .setPostalCode("{{TERMINAL_LOCATION_POSTALCODEKANJI}}")
    .build();

  LocationCreateParams params =
    LocationCreateParams.builder()
      .setDisplayName("{{TERMINAL_LOCATION_NAME}}")
      .setDisplayNameKana("{{TERMINAL_LOCATION_NAMEKANA}}")
      .setDisplayNameKanji("{{TERMINAL_LOCATION_NAMEKANJI}}")
      .setPhone("{{TERMINAL_LOCATION_PHONE}}")
      .setAddressKana(addressKana)
      .setAddressKanji(addressKanji)
      .build();

  Location location = Location.create(params);
  return location.toJson();
});
// The ConnectionToken's secret lets you connect to any Stripe Terminal reader
// and take payments with your Stripe account.
// Be sure to authenticate the endpoint for creating connection tokens.
post("/connection_token", (request, response) -> {
  response.type("application/json");
  ConnectionTokenCreateParams params = ConnectionTokenCreateParams.builder()
    .build();

  ConnectionToken connectionToken = ConnectionToken.create(params);

  Map<String, String> map = new HashMap();
  map.put("secret", connectionToken.getSecret());

  return gson.toJson(map);
});
post("/register_reader", (request, response) -> {
  ReaderParams postBody = gson.fromJson(request.body(), ReaderParams.class);

  ReaderCreateParams params =
    ReaderCreateParams.builder()
      .setLocation(postBody.getLocationId())
      .setLabel("Quickstart - S700 Simulated Reader")
      .setRegistrationCode("simulated-s700")
      .setLabel("Quickstart - S710 Simulated Reader")
      .setRegistrationCode("simulated-s710")
      .setLabel("Quickstart - V660p Simulated Reader")
      .setRegistrationCode("simulated-v660p")
      .setLabel("Quickstart - WisePOS E Simulated Reader")
      .setRegistrationCode("simulated-wpe")
      .build();

  Reader reader = Reader.create(params);
  return reader.toJson();
});
post("/create_payment_intent", (request, response) -> {
  response.type("application/json");

  PaymentIntentParams postBody = gson.fromJson(request.body(), PaymentIntentParams.class);

  // For Terminal payments, the 'payment_method_types' parameter must include
  // 'card_present'.
  // To automatically capture funds when a charge is authorized,
  // set `capture_method` to `automatic`.
  PaymentIntentCreateParams createParams = PaymentIntentCreateParams.builder()
    .setCurrency("{{TERMINAL_CURRENCY}}")
    .setAmount(postBody.getAmount())
    .setCaptureMethod(PaymentIntentCreateParams.CaptureMethod.AUTOMATIC)
    .putPaymentMethodOption(
      "card_present",
      PaymentIntentCreateParams.PaymentMethodOptions.CardPresent.builder()
        .setCaptureMethod(PaymentIntentCreateParams.PaymentMethodOptions.CardPresent.CaptureMethod.MANUAL_PREFERRED)
        .build()
    )
    {{TERMINAL_PAYMENT_METHODS}}
    .build();
  // Create a PaymentIntent with the order amount and currency
  PaymentIntent intent = PaymentIntent.create(createParams);

  return intent.toJson();
});
post("/process_payment", (request, response) -> {
  ProcessPaymentParams postBody = gson.fromJson(request.body(), ProcessPaymentParams.class);

  ReaderProcessPaymentIntentParams params =
    ReaderProcessPaymentIntentParams.builder()
      .setPaymentIntent(postBody.getPaymentIntentId())
      .build();

  Reader reader = Reader.retrieve(postBody.getReaderId());

  int attempt = 0;
  int tries = 3;
  while (true) {
    attempt++;
    try {
      reader = reader.processPaymentIntent(params);
      return reader.toJson();
    } catch (InvalidRequestException e) {
      switch (e.getCode()) {
        case "terminal_reader_timeout":
          // Temporary networking blip, automatically retry a few times.
          if (attempt == tries) {
            return e.getStripeError().toJson();
          }
          break;
        case "terminal_reader_offline":
          // Reader is offline and won't respond to API requests. Make sure the reader is
          // powered on and connected to the internet before retrying.
          return e.getStripeError().toJson();
        case "terminal_reader_busy":
          // Reader is currently busy processing another request, installing updates or
          // changing settings. Remember to disable the pay button in your point-of-sale
          // application while waiting for a reader to respond to an API request.
          return e.getStripeError().toJson();
        case "intent_invalid_state":
          // Check PaymentIntent status because it's not ready to be processed. It might
          // have been already successfully processed or canceled.
          PaymentIntent paymentIntent = PaymentIntent.retrieve(postBody.getPaymentIntentId());
          Map<String, String> errorResponse = Collections.singletonMap("error",
              "PaymentIntent is already in " + paymentIntent.getStatus() + " state.");
          return new Gson().toJson(errorResponse);

        default:
          return e.getStripeError().toJson();
      }
    }
  }
});
post("/simulate_payment", (request, response) -> {
  ReaderParams postBody = gson.fromJson(request.body(), ReaderParams.class);

  Reader reader = Reader.retrieve(postBody.getReaderId());

  Map<String, Object> paymentOptions = new HashMap<>();
  Map<String, Object> cardPresent = new HashMap<>();
  cardPresent.put("number", postBody.getCardNumber());
  paymentOptions.put("card_present", cardPresent);
  paymentOptions.put("type", "card_present");

  reader = reader.getTestHelpers().presentPaymentMethod(paymentOptions);
  return reader.toJson();
});
post("/capture_payment_intent", (request, response) -> {
  response.type("application/json");

  PaymentIntentParams postBody = gson.fromJson(request.body(), PaymentIntentParams.class);

  PaymentIntent intent = PaymentIntent.retrieve(postBody.getPaymentIntentId());
  intent = intent.capture();

  return intent.toJson();
});
```

public static Location createLocation() throws StripeException {
LocationCreateParams.Address address =
LocationCreateParams.Address.builder()
.setLine1("{{TERMINAL\_LOCATION\_LINE1}}")
.setLine2("{{TERMINAL\_LOCATION\_LINE2}}")
.setCity("{{TERMINAL\_LOCATION\_CITY}}")
.setState("{{TERMINAL\_LOCATION\_STATE}}")
.setCountry("{{TERMINAL\_LOCATION\_COUNTRY}}")
.setPostalCode("{{TERMINAL\_LOCATION\_POSTAL}}")
.build();

```
LocationCreateParams params =
  LocationCreateParams.builder()
    .setDisplayName("{{TERMINAL_LOCATION_NAME}}")
    .setPhone("{{TERMINAL_LOCATION_PHONE}}")
    .setAddress(address)
    .build();

Location location = Location.create(params);

return location;
```

}
public static Location createLocation() throws StripeException {
LocationCreateParams.AddressKana addressKana =
LocationCreateParams.AddressKana.builder()
.setLine1("{{TERMINAL\_LOCATION\_LINE1KANA}}")
.setLine2("{{TERMINAL\_LOCATION\_LINE2KANA}}")
.setTown("{{TERMINAL\_LOCATION\_TOWNKANA}}")
.setCity("{{TERMINAL\_LOCATION\_CITYKANA}}")
.setState("{{TERMINAL\_LOCATION\_STATEKANA}}")
.setPostalCode("{{TERMINAL\_LOCATION\_POSTALCODEKANA}}")
.build();

```
LocationCreateParams.AddressKanji addressKanji =
LocationCreateParams.AddressKanji.builder()
  .setLine1("{{TERMINAL_LOCATION_LINE1KANJI}}")
  .setLine2("{{TERMINAL_LOCATION_LINE2KANJI}}")
  .setTown("{{TERMINAL_LOCATION_TOWNKANJI}}")
  .setCity("{{TERMINAL_LOCATION_CITYKANJI}}")
  .setState("{{TERMINAL_LOCATION_STATEKANJI}}")
  .setPostalCode("{{TERMINAL_LOCATION_POSTALCODEKANJI}}")
  .build();

LocationCreateParams params =
  LocationCreateParams.builder()
    .setDisplayName("{{TERMINAL_LOCATION_NAME}}")
    .setDisplayNameKana("{{TERMINAL_LOCATION_NAMEKANA}}")
    .setDisplayNameKanji("{{TERMINAL_LOCATION_NAMEKANJI}}")
    .setPhone("{{TERMINAL_LOCATION_PHONE}}")
    .setAddressKana(addressKana)
    .setAddressKanji(addressKanji)
    .build();

Location location = Location.create(params);

return location;
```

}
export const fetchConnectionToken = async () => {
const response = await fetch('http://localhost:4242/connection\_token', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
});
const data = await response.json();

if (!data) {
throw Error('No data in response from ConnectionToken endpoint');
}

if (!data.secret) {
throw Error('Missing `secret` in ConnectionToken JSON response');
}
return data.secret;
};
export const fetchPaymentIntent = async () => {
const parameters = {
amount: 1000,
};

const response = await fetch('http://localhost:4242/create\_payment\_intent', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(parameters),
});
const data = await response.json();

if (!data) {
throw Error('No data in response from PaymentIntent endpoint');
}

if (!data.client\_secret) {
throw Error('Missing `client_secret` in ConnectionToken JSON response');
}
return data.client\_secret;
};
export const capturePaymentIntent = async () => {
const parameters = {
id: 'paymentIntentId',
};

const response = await fetch('http://localhost:4242/capture\_payment\_intent', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(parameters),
});

if (response.status >= 200 && response.status < 300) {
return true;
} else {
return false;
}
};
const { reader, error } = await connectReader({
discoveryMethod: 'internet',
reader: selectedReader,
});
const { reader, error } = await connectReader({
discoveryMethod: 'tapToPay',
reader: selectedReader,
locationId: selectedReader.locationId,
});
const { reader, error } = await connectReader({
discoveryMethod: 'bluetoothScan',
reader: selectedReader,
locationId: selectedReader.locationId,
});
useEffect(() => {
async function init() {
try {
const granted = await PermissionsAndroid.request(
'android.permission.ACCESS\_FINE\_LOCATION',
{
title: 'Location Permission',
message: 'Stripe Terminal needs access to your location',
buttonPositive: 'Accept',
},
);
if (granted === PermissionsAndroid.RESULTS.GRANTED) {
console.log('You can use the Location');
setPermissionsGranted(true);
} else {
Alert.alert(
'Location services are required to connect to a reader.',
);
}
} catch {
Alert.alert(
'Location services are required to connect to a reader.',
);
}
}

```
if (Platform.OS === 'android') {
  init();
} else {
  setPermissionsGranted(true);
}
```

}, \[]);
const {error} = await discoverReaders({
discoveryMethod: 'internet',
simulated: true,
});
const {error} = await discoverReaders({
discoveryMethod: 'tapToPay',
simulated: true,
});
const {error} = await discoverReaders({
discoveryMethod: 'bluetoothScan',
simulated: true,
});
await setSimulatedCard("4242424242424242");
const {paymentIntent, error} = await retrievePaymentIntent(clientSecret);

```
if (error) {
  console.log(`Couldn't retrieve payment intent: ${error.message}`);
} else if (paymentIntent) {
  const {paymentIntent: collectedPaymentIntent, error: collectError} =
    await collectPaymentMethod(paymentIntent.id);
const {paymentIntent: processPaymentPaymentIntent, error} =
  await confirmPaymentIntent(paymentIntent);
```

import {
StripeTerminalProvider,
} from '@stripe/stripe-terminal-react-native'; <StripeTerminalProvider
       logLevel="verbose"
       tokenProvider={fetchConnectionToken}
     >

var terminal = StripeTerminal.create({
onFetchConnectionToken: fetchConnectionToken,
onUnexpectedReaderDisconnect: unexpectedDisconnect,
});

function unexpectedDisconnect() {
// In this function, your app should notify the user that the reader disconnected.
// You can also include a way to attempt to reconnect to a reader.
console.log("Disconnected from reader")
}
function fetchConnectionToken() {
// Do not cache or hardcode the ConnectionToken. The SDK manages the ConnectionToken's lifecycle.
return fetch('/connection\_token', { method: "POST" })
.then(function(response) {
return response.json();
})
.then(function(data) {
return data.secret;
});
}
var config = {simulated: true};
terminal.discoverReaders(config).then(function(discoverResult) {
terminal.connectReader(selectedReader).then(function(connectResult) {
function fetchPaymentIntentClientSecret(amount) {
const bodyContent = JSON.stringify({ amount: amount });
return fetch('/create\_payment\_intent', {
method: "POST",
headers: {
'Content-Type': 'application/json'
},
body: bodyContent
})
.then(function(response) {
return response.json();
})
.then(function(data) {
return data.client\_secret;
});
}
// Use test card number to simulate different payment flows within your point of sale application
terminal.setSimulatorConfiguration({testCardNumber: '4242424242424242'});
terminal.collectPaymentMethod(client\_secret).then(function(result) {
terminal.processPayment(result.paymentIntent).then(function(result) {
function capture(paymentIntentId) {
return fetch('/capture\_payment\_intent', {
method: "POST",
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({"payment\_intent\_id": paymentIntentId})
})
.then(function(response) {
return response.json();
})
.then(function(data) {
log('server.capture', data);
});
}
const terminal = StripeTerminal.create({
onFetchConnectionToken: fetchConnectionToken,
onUnexpectedReaderDisconnect: unexpectedDisconnect,
});

function unexpectedDisconnect() {
// In this function, your app should notify the user that the reader disconnected.
// You can also include a way to attempt to reconnect to a reader.
console.log("Disconnected from reader")
}

async function fetchConnectionToken() {
// Do not cache or hardcode the ConnectionToken. The SDK manages the ConnectionToken's lifecycle.
const response = await fetch('/connection\_token', { method: "POST" });
const data = await response.json();
return data.secret;
}
const config = {simulated: true};
const discoverResult = await terminal.discoverReaders(config);
const selectedReader = discoveredReaders\[0];
const connectResult = await terminal.connectReader(selectedReader);
async function fetchPaymentIntentClientSecret(amount) {
const bodyContent = JSON.stringify({ amount: amount });
const response = await fetch('/create\_payment\_intent', {
method: "POST",
headers: {
'Content-Type': 'application/json'
},
body: bodyContent
});
const data = await response.json();
return data.client\_secret;
}
// Use test card number to simulate different payment flows within your point of sale application
terminal.setSimulatorConfiguration({testCardNumber: '4242424242424242'});
const collectResult = await terminal.collectPaymentMethod(client\_secret);
const processResult = await terminal.processPayment(result.paymentIntent);
async function capture(paymentIntentId) {
const result = await fetch('/capture\_payment\_intent', {
method: "POST",
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({"payment\_intent\_id": paymentIntentId})
})

const data = result.json();
log('server.capture', data);
}

```
    Terminal.initWithTokenProvider(APIClient.shared)
    let config = try InternetDiscoveryConfigurationBuilder().setSimulated(true).build()
    let config = try TapToPayDiscoveryConfigurationBuilder().setSimulated(true).build()
    let config = try BluetoothScanDiscoveryConfigurationBuilder().setSimulated(true).build()
    let params = try PaymentIntentParametersBuilder(amount: 1000,
                                                    currency: "{{TERMINAL_CURRENCY}}")
        .setPaymentMethodTypes([{{TERMINAL_PAYMENT_METHODS}}])
        .build()
            Terminal.shared.processPaymentIntent(paymentIntent, collectConfig: nil, confirmConfig: nil) { processResult, processError in
    let connectionConfig: InternetConnectionConfiguration
    do {
        connectionConfig = try InternetConnectionConfigurationBuilder(delegate: self).build()
    } catch {
        // Handle the error building the connection configuration
        print("Error building connection configuration: \(error)")
        return
    }
    let connectionConfig: TapToPayConnectionConfiguration
    do {
        connectionConfig = try TapToPayConnectionConfigurationBuilder(
            delegate: self,
            locationId: selectedReader.locationId!
          ).build()
    } catch {
        // Handle the error building the connection configuration
        print("Error building connection configuration: \(error)")
        return
    }
    let connectionConfig: BluetoothConnectionConfiguration
    do {
        connectionConfig = try BluetoothConnectionConfigurationBuilder(
            delegate: self,
            // When connecting to a physical reader, your integration should specify either the
            // same location as the last connection (selectedReader.locationId) or a new location
            // of your user's choosing.
            //
            // Since the simulated reader is not associated with a real location, we recommend
            // specifying its existing mock location.
            locationId: selectedReader.locationId!
        ).build()
    } catch {
        // Handle the error building the connection configuration
        print("Error building connection configuration: \(error)")
        return
    }
```

extension ViewController: MobileReaderDelegate {
func reader(\_ reader: Reader, didDisconnect reason: DisconnectReason) {
// Handle reader disconnect
}

func reader(\_ reader: Reader, didRequestReaderInput inputOptions: ReaderInputOptions = \[]) {
readerMessageLabel.text = Terminal.stringFromReaderInputOptions(inputOptions)
}

func reader(\_ reader: Reader, didRequestReaderDisplayMessage displayMessage: ReaderDisplayMessage) {
readerMessageLabel.text = Terminal.stringFromReaderDisplayMessage(displayMessage)
}

func reader(\_ reader: Reader, didStartInstallingUpdate update: ReaderSoftwareUpdate, cancelable: Cancelable?) {
// Show UI communicating that a required update has started installing
}

func reader(\_ reader: Reader, didReportReaderSoftwareUpdateProgress progress: Float) {
// Update the progress of the install
}

func reader(\_ reader: Reader, didFinishInstallingUpdate update: ReaderSoftwareUpdate?, error: Error?) {
// Report success or failure of the update
}

func reader(\_ reader: Reader, didReportAvailableUpdate update: ReaderSoftwareUpdate) {
// Show UI communicating that an update is available
}
}
extension ViewController: InternetReaderDelegate {
func reader(\_ reader: Reader, didDisconnect reason: DisconnectReason) {
print("Disconnected from reader: (reader)")
}
}
extension ViewController: TapToPayReaderDelegate {
func tapToPayReader(\_ reader: Reader, didStartInstallingUpdate update: ReaderSoftwareUpdate, cancelable: Cancelable?) {
// In your app, let the user know that an update is being installed on the reader
}

```
func tapToPayReader(_ reader: Reader, didReportReaderSoftwareUpdateProgress progress: Float) {
    // The update or configuration process has reached the specified progress (0.0 to 1.0)
    // If you are displaying a progress bar or percentage, this can be updated here
}

func tapToPayReader(_ reader: Reader, didFinishInstallingUpdate update: ReaderSoftwareUpdate?, error: Error?) {
    // The reader has finished installing an update
    // If `error` is nil, it is safe to proceed and start collecting payments
    // Otherwise, check the value of `error` for more information on what went wrong
}

func tapToPayReader(_ reader: Reader, didRequestReaderDisplayMessage displayMessage: ReaderDisplayMessage) {
    // This is called to request that a prompt be displayed in your app.
    readerMessageLabel.text = Terminal.stringFromReaderDisplayMessage(displayMessage)
}

func tapToPayReader(_ reader: Reader, didRequestReaderInput inputOptions: ReaderInputOptions = []) {
    // This is called when the reader begins waiting for input
    readerMessageLabel.text = Terminal.stringFromReaderInputOptions(inputOptions)
}
```

}
func fetchConnectionToken(\_ completion: @escaping ConnectionTokenCompletionBlock) {
let config = URLSessionConfiguration.default
let session = URLSession(configuration: config)
let url = URL(string: "/connection\_token", relativeTo: APIClient.backendUrl)!
var request = URLRequest(url: url)
request.httpMethod = "POST"

```
    let task = session.dataTask(with: request) { (data, response, error) in
        if let data = data {
            do {
                // Warning: casting using 'as? [String: String]' looks simpler, but isn't safe:
                let json = try JSONSerialization.jsonObject(with: data, options: []) as? [String: Any]
                if let secret = json?["secret"] as? String {
                    completion(secret, nil)
                } else {
                    let error = NSError(domain: "com.stripe-terminal-ios.example",
                                        code: 2000,
                                        userInfo: [NSLocalizedDescriptionKey: "Missing 'secret' in ConnectionToken JSON response"])
                    completion(nil, error)
                }
            } catch {
                completion(nil, error)
            }
        } else {
            let error = NSError(domain: "com.stripe-terminal-ios.example",
                                code: 1000,
                                userInfo: [NSLocalizedDescriptionKey: "No data in response from ConnectionToken endpoint"])
            completion(nil, error)
        }
    }

    task.resume()
}
func capturePaymentIntent(_ paymentIntentId: String, completion: @escaping ErrorCompletionBlock) {
    let config = URLSessionConfiguration.default
    let session = URLSession(configuration: config, delegate: nil, delegateQueue: OperationQueue.main)
    let url = URL(string: "/capture_payment_intent", relativeTo: APIClient.backendUrl)!

    let parameters = "{\"payment_intent_id\": \"\(paymentIntentId)\"}"

    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
    request.httpBody = parameters.data(using: .utf8)

    let task = session.dataTask(with: request) {(data, response, error) in
        if let response = response as? HTTPURLResponse, let data = data {
            switch response.statusCode {
            case 200..<300:
                completion(nil)
            case 402:
                let description = String(data: data, encoding: .utf8) ?? "Failed to capture payment intent"
                completion(NSError(domain: "com.stripe-terminal-ios.example", code: 2, userInfo: [NSLocalizedDescriptionKey: description]))
            default:
                completion(error ?? NSError(domain: "com.stripe-terminal-ios.example", code: 0, userInfo: [NSLocalizedDescriptionKey: "Other networking error encountered."]))
            }
        } else {
            completion(error)
        }
    }
    task.resume()
}
    // Move this to your App initialization
    Terminal.initWithTokenProvider(APIClient.shared)
        let config = try InternetDiscoveryConfigurationBuilder().setSimulated(true).build()
        let config = try TapToPayDiscoveryConfigurationBuilder().setSimulated(true).build()
        let config = try BluetoothScanDiscoveryConfigurationBuilder().setSimulated(true).build()
        let connectionConfig = try InternetConnectionConfigurationBuilder(delegate: self).build()
        let connectionConfig = try TapToPayConnectionConfigurationBuilder(
            delegate: self,
            locationId: reader.locationId!
        ).build()
        let connectionConfig = try BluetoothConnectionConfigurationBuilder(
            delegate: self,
            // When connecting to a physical reader, your integration should specify either the
            // same location as the last connection (reader.locationId) or a new location
            // of your user's choosing.
            //
            // Since the simulated reader is not associated with a real location, we recommend
            // specifying its existing mock location.
            locationId: reader.locationId!
        ).build()
        let params = try PaymentIntentParametersBuilder(amount: 1000,
                                                        currency: "{{TERMINAL_CURRENCY}}")
            .setPaymentMethodTypes([{{TERMINAL_PAYMENT_METHODS}}])
            .build()
        let processedIntent = try await Terminal.shared.processPaymentIntent(paymentIntent, collectConfig: nil, confirmConfig: nil)
```

// MARK: - Mobile Reader Delegate
extension TerminalManager: @MainActor MobileReaderDelegate {
func reader(\_ reader: Reader, didDisconnect reason: DisconnectReason) {
statusMessage = "Reader disconnected"
currentState = .initial
buttonTitle = "Discover Readers"
connectedReader = nil
}

```
func reader(_ reader: Reader, didRequestReaderInput inputOptions: ReaderInputOptions = []) {
    statusMessage = Terminal.stringFromReaderInputOptions(inputOptions)
}

func reader(_ reader: Reader, didRequestReaderDisplayMessage displayMessage: ReaderDisplayMessage) {
    statusMessage = Terminal.stringFromReaderDisplayMessage(displayMessage)
}

func reader(_ reader: Reader, didStartInstallingUpdate update: ReaderSoftwareUpdate, cancelable: Cancelable?) {
    statusMessage = "Installing update..."
}

func reader(_ reader: Reader, didReportReaderSoftwareUpdateProgress progress: Float) {
    statusMessage = "Update progress: \(Int(progress * 100))%"
}

func reader(_ reader: Reader, didFinishInstallingUpdate update: ReaderSoftwareUpdate?, error: Error?) {
    if let error = error {
        statusMessage = "Update failed: \(error.localizedDescription)"
    } else {
        statusMessage = "Update complete"
    }
}

func reader(_ reader: Reader, didReportAvailableUpdate update: ReaderSoftwareUpdate) {
    statusMessage = "Update available"
}
```

}
// MARK: - Internet Reader Delegate
extension TerminalManager: @MainActor InternetReaderDelegate {
func reader(\_ reader: Reader, didDisconnect reason: DisconnectReason) {
statusMessage = "Reader disconnected"
currentState = .initial
buttonTitle = "Discover Readers"
connectedReader = nil
}
}
// MARK: - Tap To Pay Reader Delegate
extension TerminalManager: @MainActor TapToPayReaderDelegate {
func tapToPayReader(\_ reader: Reader, didStartInstallingUpdate update: ReaderSoftwareUpdate, cancelable: Cancelable?) {
statusMessage = "Installing update..."
}

```
func tapToPayReader(_ reader: Reader, didReportReaderSoftwareUpdateProgress progress: Float) {
    statusMessage = "Update progress: \(Int(progress * 100))%"
}

func tapToPayReader(_ reader: Reader, didFinishInstallingUpdate update: ReaderSoftwareUpdate?, error: Error?) {
    if let error = error {
        statusMessage = "Update failed: \(error.localizedDescription)"
    } else {
        statusMessage = "Update complete"
    }
}

func tapToPayReader(_ reader: Reader, didRequestReaderDisplayMessage displayMessage: ReaderDisplayMessage) {
    statusMessage = Terminal.stringFromReaderDisplayMessage(displayMessage)
}

func tapToPayReader(_ reader: Reader, didRequestReaderInput inputOptions: ReaderInputOptions = []) {
    statusMessage = Terminal.stringFromReaderInputOptions(inputOptions)
}
```

}
func fetchConnectionToken(\_ completion: @escaping ConnectionTokenCompletionBlock) {
Task {
do {
let secret = try await fetchConnectionTokenAsync()
completion(secret, nil)
} catch {
completion(nil, error)
}
}
}

```
private func fetchConnectionTokenAsync() async throws -> String {
    let url = URL(string: "/connection_token", relativeTo: APIClient.backendUrl)!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    
    let (data, response) = try await URLSession.shared.data(for: request)
    
    guard let httpResponse = response as? HTTPURLResponse,
          (200...299).contains(httpResponse.statusCode) else {
        throw NSError(domain: "com.stripe-terminal-ios.example",
                     code: 1000,
                     userInfo: [NSLocalizedDescriptionKey: "Invalid response from ConnectionToken endpoint"])
    }
    
    let json = try JSONSerialization.jsonObject(with: data, options: []) as? [String: Any]
    guard let secret = json?["secret"] as? String else {
        throw NSError(domain: "com.stripe-terminal-ios.example",
                     code: 2000,
                     userInfo: [NSLocalizedDescriptionKey: "Missing 'secret' in ConnectionToken JSON response"])
    }
    
    return secret
}
func capturePaymentIntent(_ paymentIntentId: String) async throws {
    let url = URL(string: "/capture_payment_intent", relativeTo: APIClient.backendUrl)!
    
    let parameters = ["payment_intent_id": paymentIntentId]
    let jsonData = try JSONSerialization.data(withJSONObject: parameters)
    
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
    request.httpBody = jsonData
    
    let (data, response) = try await URLSession.shared.data(for: request)
    
    guard let httpResponse = response as? HTTPURLResponse else {
        throw NSError(domain: "com.stripe-terminal-ios.example",
                     code: 0,
                     userInfo: [NSLocalizedDescriptionKey: "Invalid response"])
    }
    
    switch httpResponse.statusCode {
    case 200..<300:
        return
    case 402:
        let description = String(data: data, encoding: .utf8) ?? "Failed to capture payment intent"
        throw NSError(domain: "com.stripe-terminal-ios.example",
                     code: 2,
                     userInfo: [NSLocalizedDescriptionKey: description])
    default:
        throw NSError(domain: "com.stripe-terminal-ios.example",
                     code: 0,
                     userInfo: [NSLocalizedDescriptionKey: "Capture failed with status code \(httpResponse.statusCode)"])
    }
}
```

@interface ViewController () \<SCPDiscoveryDelegate, SCPInternetReaderDelegate>
@interface ViewController () \<SCPDiscoveryDelegate, SCPTapToPayReaderDelegate>
@interface ViewController () \<SCPDiscoveryDelegate, SCPMobileReaderDelegate>
\[SCPTerminal initWithTokenProvider:APIClient.shared];
NSError \*configError = nil;
SCPInternetDiscoveryConfiguration \*config = \[\[\[SCPInternetDiscoveryConfigurationBuilder new]
setSimulated:YES]
build:\&configError];
if (configError) {
NSLog(@"Unexpected error building discovery configuration!");
} else {
self.discoverCancelable = \[\[SCPTerminal shared] discoverReaders:config
delegate:self
completion:^(NSError \* \_Nullable error) {
NSError \*configError = nil;
SCPTapToPayDiscoveryConfiguration \*config = \[\[\[SCPTapToPayDiscoveryConfigurationBuilder new]
setSimulated:YES]
build:\&configError];
if (configError) {
NSLog(@"Unexpected error building discovery configuration!");
} else {
self.discoverCancelable = \[\[SCPTerminal shared] discoverReaders:config
delegate:self
completion:^(NSError \* \_Nullable error) {
NSError \*configError = nil;
SCPBluetoothProximityDiscoveryConfiguration \*config = \[\[\[SCPBluetoothProximityDiscoveryConfigurationBuilder new]
setSimulated:YES]
build:\&configError];
if (configError) {
NSLog(@"Unexpected error building discovery configuration!");
} else {
self.discoverCancelable = \[\[SCPTerminal shared] discoverReaders:config
delegate:self
completion:^(NSError \* \_Nullable error) {
NSError \*error = nil;
SCPPaymentIntentParameters \*paymentIntentParams = \[\[\[\[SCPPaymentIntentParametersBuilder alloc] initWithAmount:1000
currency:@"{{TERMINAL\_CURRENCY}}"]
setPaymentMethodTypes:@\[{{TERMINAL\_PAYMENT\_METHODS}}]]
build:\&error];
\[\[SCPTerminal shared] processPaymentIntent:intent
collectConfig:nil
confirmConfig:nil
completion:^(SCPPaymentIntent \* \_Nullable processedIntent, NSError \* \_Nullable processError) {
// When connecting to a physical reader, your integration should specify either the
// same location as the last connection (selectedReader.locationId) or a new location
// of your user's choosing.
//
// Since the simulated reader is not associated with a real location, we recommend
// specifying its existing mock location.
NSError \*configError = nil;
SCPBluetoothConnectionConfiguration \*config = \[\[\[SCPBluetoothConnectionConfigurationBuilder alloc]
initWithDelegate:self
locationId:selectedReader.locationId]
build:\&configError];
if (configError) {
NSLog(@"Error building connection configuration, check location id!");
} else {
NSError \*configError = nil;
SCPInternetConnectionConfiguration \*config = \[\[\[\[SCPInternetConnectionConfigurationBuilder alloc]
initWithDelegate:self]
setFailIfInUse:YES]
build:\&configError];
if (configError) {
NSLog(@"Error building connection configuration, check location id!");
} else {
NSError \*configError = nil;
SCPTapToPayConnectionConfiguration \*config = \[\[\[SCPTapToPayConnectionConfigurationBuilder alloc]
initWithDelegate:self
locationId:selectedReader.locationId]
build:\&configError];
if (configError) {
NSLog(@"Error building connection configuration, check location id!");
} else {
\#pragma mark - SCPBluetoothReaderDelegate

- (void)reader:(SCPReader \*)reader didRequestReaderInput:(SCPReaderInputOptions)inputOptions {
  // Update UI requesting reader input
  self.readerMessageLabel.text = \[SCPTerminal stringFromReaderInputOptions:inputOptions];
  }

- (void)reader:(SCPReader \*)reader didRequestReaderDisplayMessage:(SCPReaderDisplayMessage)displayMessage {
  // Update UI showing reader message
  self.readerMessageLabel.text = \[SCPTerminal stringFromReaderDisplayMessage:displayMessage];
  }

- (void)reader:(nonnull SCPReader \*)reader didStartInstallingUpdate:(SCPReaderSoftwareUpdate \*)update cancelable:(nullable SCPCancelable \*)cancelable {
  // Show UI communicating that a required update has started installing
  }

- (void)reader:(nonnull SCPReader \*)reader didReportReaderSoftwareUpdateProgress:(float)progress {
  // Update the progress of the install
  }

- (void)reader:(nonnull SCPReader \*)reader didFinishInstallingUpdate:(nullable SCPReaderSoftwareUpdate \*)update error:(nullable NSError \*)error {
  // Report success or failure of the update
  }

- (void)reader:(nonnull SCPReader \*)reader didReportAvailableUpdate:(SCPReaderSoftwareUpdate \*)update {
  // An update is available for the connected reader. Show this update in your application.
  // This update can be installed using Terminal.shared.installAvailableUpdate.
  }
  \#pragma mark - SCPInternetReaderDelegate

- (void)reader:(SCPReader \*)reader didDisconnect:(SCPDisconnectReason)reason {
  // Handle reader disconnects here.
  }
  \#pragma mark - SCPTapToPayReaderDelegate

- (void)tapToPayReader:(nonnull SCPReader \*)reader didStartInstallingUpdate:(nonnull SCPReaderSoftwareUpdate \*)update cancelable:(nullable SCPCancelable \*)cancelable {
  // In your app, let the user know that an update is being installed on the reader
  }

- (void)tapToPayReader:(nonnull SCPReader \*)reader didReportReaderSoftwareUpdateProgress:(float)progress {
  // The update or configuration process has reached the specified progress (0.0 to 1.0)
  // If you are displaying a progress bar or percentage, this can be updated here
  }

- (void)tapToPayReader:(nonnull SCPReader \*)reader didFinishInstallingUpdate:(nullable SCPReaderSoftwareUpdate \*)update error:(nullable NSError \*)error {
  // The reader has finished installing an update
  // If `error` is nil, it is safe to proceed and start collecting payments
  // Otherwise, check the value of `error` for more information on what went wrong
  }

- (void)tapToPayReader:(nonnull SCPReader \*)reader didRequestReaderDisplayMessage:(SCPReaderDisplayMessage)displayMessage {
  // This is called to request that a prompt be displayed in your app.
  self.readerMessageLabel.text = \[SCPTerminal stringFromReaderDisplayMessage:displayMessage];
  }

- (void)tapToPayReader:(nonnull SCPReader \*)reader didRequestReaderInput:(SCPReaderInputOptions)inputOptions {
  // This is called when the reader begins waiting for input
  self.readerMessageLabel.text = \[SCPTerminal stringFromReaderInputOptions:inputOptions];
  }

- (void)fetchConnectionToken:(SCPConnectionTokenCompletionBlock)completion {
  NSURLSessionConfiguration \*config = \[NSURLSessionConfiguration defaultSessionConfiguration];
  NSURLSession \*session = \[NSURLSession sessionWithConfiguration:config];
  NSURL \*url = \[NSURL URLWithString:@"/connection\_token" relativeToURL:\[APIClient backendUrl]];
  if (!url) {
  NSAssert(NO, @"Invalid backend URL");
  }
  NSMutableURLRequest \*request = \[\[NSMutableURLRequest alloc] initWithURL:url];
  request.HTTPMethod = @"POST";
  NSURLSessionDataTask \*task = \[session dataTaskWithRequest:request completionHandler:^(NSData \*data, NSURLResponse \*response, NSError \*error) {
  id jsonObject = nil;
  NSError \*jsonSerializationError;
  if (data) {
  jsonObject = \[NSJSONSerialization JSONObjectWithData:data options:(NSJSONReadingOptions)kNilOptions error:\&jsonSerializationError];
  }
  else {
  NSError \*error = \[NSError errorWithDomain:@"com.stripe-terminal-ios.example"
  code:1000
  userInfo:@{NSLocalizedDescriptionKey: @"No data in response from ConnectionToken endpoint"}];
  completion(nil, error);
  }
  if (!(jsonObject && \[jsonObject isKindOfClass:\[NSDictionary class]])) {
  completion(nil, jsonSerializationError);
  return;
  }
  NSDictionary \*json = (NSDictionary \*)jsonObject;
  id secret = json\[@"secret"];
  if (!(secret && \[secret isKindOfClass:\[NSString class]])) {
  NSError \*error = \[NSError errorWithDomain:@"com.stripe-terminal-ios.example"
  code:2000
  userInfo:@{NSLocalizedDescriptionKey: @"Missing 'secret' in ConnectionToken JSON response"}];
  completion(nil, error);
  return;
  }
  completion((NSString \*)secret, nil);
  }];
  \[task resume];
  }

- (void)capturePaymentIntent:(NSString \*)paymentIntentId
  completion:(SCPErrorCompletionBlock)completion {
  NSURLSessionConfiguration \*config = \[NSURLSessionConfiguration defaultSessionConfiguration];
  NSURLSession \*session = \[NSURLSession sessionWithConfiguration:config];
  NSURL \*url = \[NSURL URLWithString:@"/capture\_payment\_intent" relativeToURL:\[APIClient backendUrl]];

  NSString \*parameters = \[NSString stringWithFormat:@"{"payment\_intent\_id":"%@"}", paymentIntentId];

  NSMutableURLRequest \*request = \[\[NSMutableURLRequest alloc] initWithURL:url];
  request.HTTPMethod = @"POST";
  request.HTTPBody = \[parameters dataUsingEncoding:NSUTF8StringEncoding];

  NSURLSessionDataTask \*task = \[session dataTaskWithRequest:request
  completionHandler:^(NSData \* \_Nullable data, NSURLResponse \* \_Nullable response, NSError \* \_Nullable error) {
  if (response) {
  NSHTTPURLResponse \*httpResponse = (NSHTTPURLResponse \*) response;
  if (httpResponse.statusCode >= 200 && httpResponse.statusCode < 300) {
  completion(nil);
  } else if (httpResponse.statusCode == 402) {
  NSString \*description = \[\[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
  if (!description) {
  description = @"Failed to capture payment intent";
  }

  ```
            NSError *error = [NSError errorWithDomain:@"com.stripe-terminal-ios.example"
                                                  code:2
                                              userInfo:@{NSLocalizedDescriptionKey: description}];

            completion(error);
        } else {
            if(error) {
                completion(error);
            } else {
                NSError *error = [NSError errorWithDomain:@"com.stripe-terminal-ios.example"
                                                      code:0
                                                  userInfo:@{NSLocalizedDescriptionKey: @"Other networking error occurred"}];

                completion(error);
            }
        }
    } else {
        completion(error);
    }
  ```

  }];

  \[task resume];
  }
  private val paymentIntentParams =
  PaymentIntentParameters.Builder(listOf(PaymentMethodType.CARD\_PRESENT))
  .setAmount(500)
  .setCurrency("{{TERMINAL\_CURRENCY}}")
  .build()
  private val discoveryConfig =
  DiscoveryConfiguration.InternetDiscoveryConfiguration(isSimulated = true)
  private val discoveryConfig =
  DiscoveryConfiguration.TapToPayDiscoveryConfiguration(isSimulated = true)
  private val discoveryConfig =
  DiscoveryConfiguration.BluetoothDiscoveryConfiguration(isSimulated = true)
  Terminal.getInstance()
  .processPaymentIntent(
  intent = paymentIntent,
  callback = processPaymentIntentCallback,
  )
  // Check for location permissions
  if (!isGranted(Manifest.permission.ACCESS\_FINE\_LOCATION)) {
  // If we don't have them yet, request them before doing anything else
  requestPermissionLauncher.launch(arrayOf(Manifest.permission.ACCESS\_FINE\_LOCATION))
  } else if (!Terminal.isInitialized() && verifyGpsEnabled()) {
  initialize()
  }
  if (!isGranted(Manifest.permission.ACCESS\_FINE\_LOCATION)) add(Manifest.permission.ACCESS\_FINE\_LOCATION)
  private fun onPermissionResult(result: Map\<String, Boolean>) {
  val deniedPermissions: List = result
  .filter { !it.value }
  .map { it.key }

  ```
    // If we receive a response to our permission check, initialize
    if (deniedPermissions.isEmpty() && !Terminal.isInitialized() && verifyGpsEnabled()) {
        initialize()
    }
  ```

  }
  try {
  Terminal.init(
  context = applicationContext,
  logLevel = LogLevel.VERBOSE,
  tokenProvider = TokenProvider(),
  listener = TerminalEventListener(),
  offlineListener = null,
  )
  } catch (e: TerminalException) {
  throw RuntimeException(
  "Location services are required to initialize " +
  "the Terminal.",
  e
  )
  }
  Terminal.getInstance().discoverReaders(discoveryConfig, discoveryListener, discoveryCallback)
  Terminal.getInstance().createPaymentIntent(paymentIntentParams, createPaymentIntentCallback)
  class TokenProvider : ConnectionTokenProvider {

  override fun fetchConnectionToken(callback: ConnectionTokenCallback) {
  try {
  val token = ApiClient.createConnectionToken()
  callback.onSuccess(token)
  } catch (e: ConnectionTokenException) {
  callback.onFailure(e)
  }
  }
  }
  class StripeTerminalApplication : Application() {

  override fun onCreate() {
  super.onCreate()

  ```
    // If you already have a class that extends 'Application',
    // put whatever code you had in the 'onCreate' method here.

    TerminalApplicationDelegate.onCreate(this)
  ```

  }
  }
  class StripeTerminalApplication : Application() {

  override fun onCreate() {
  super.onCreate()

  ```
    // If you already have a class that extends 'Application',
    // put whatever code you had in the 'onCreate' method here.

    // Skip initialization if running in the TTPA process.
    if (TapToPay.isInTapToPayProcess()) return

    TerminalApplicationDelegate.onCreate(this)
  ```

  }
  }
  import com.stripe.stripeterminal.external.callable.InternetReaderListener
  import com.stripe.stripeterminal.external.callable.TapToPayReaderListener
  // When connecting to a physical reader, your integration should specify either the
  // same location as the last connection (reader.locationId) or a new location
  // of your user's choosing.
  //
  // Since the simulated reader is not associated with a real location, we recommend
  // specifying its existing mock location.

  ```
    val connectionConfig =
        ConnectionConfiguration.BluetoothConnectionConfiguration(
          locationId = reader.location!!.id!!,
          autoReconnectOnUnexpectedDisconnect = true,
          bluetoothReaderListener = TerminalBluetoothReaderListener(),
        )
    val connectionConfig =
        ConnectionConfiguration.InternetConnectionConfiguration(
            failIfInUse = true,
            internetReaderListener = object : InternetReaderListener {
                override fun onDisconnect(reason: DisconnectReason) {
                    // Show UI that your reader disconnected
                }
            },
        )
    val connectionConfig =
        ConnectionConfiguration.TapToPayConnectionConfiguration(
            locationId = reader.location?.id
                ?: throw RuntimeException("No location ID available"),
            autoReconnectOnUnexpectedDisconnect = true,
            tapToPayReaderListener = object : TapToPayReaderListener {}
        )
    Terminal.getInstance().connectReader(
        reader = reader,
        config = connectionConfig,
        connectionCallback = readerCallback,
    )
  ```

  @Throws(Exception::class)
  internal fun createPaymentIntent(
  amount: Int, currency: String, callback: Callback
  ) {
  service.createPaymentIntent(amount, currency).enqueue(callback)
  }
  internal fun capturePaymentIntent(id: String) {
  service.capturePaymentIntent(id).execute()
  }
  import com.stripe.example.ServerPaymentIntent
  /\*\*

  - Create a payment intent on the backend
    \*/
    @FormUrlEncoded
    @POST("create\_payment\_intent")
    fun createPaymentIntent(
    @Field("amount") amount: Int,
    @Field("currency") currency: String
    ): Call
    implementation "com.stripe:stripeterminal:5.3.0"
    implementation("com.stripe:stripeterminal-taptopay:5.3.0")
    implementation("com.stripe:stripeterminal-core:5.3.0")
    .setAmount(500)
    private final DiscoveryConfiguration discoveryConfig =
    new DiscoveryConfiguration.InternetDiscoveryConfiguration(0, null, true, DiscoveryFilter.None.INSTANCE);
    private final TapToPayDiscoveryConfiguration discoveryConfig =
    new DiscoveryConfiguration.TapToPayDiscoveryConfiguration(true);
    private final DiscoveryConfiguration discoveryConfig =
    new DiscoveryConfiguration.BluetoothDiscoveryConfiguration(0, true);
    Terminal.getInstance()
    .processPaymentIntent(paymentIntent, new CollectPaymentIntentConfiguration.Builder().build(), new ConfirmPaymentIntentConfiguration.Builder().build(), processPaymentIntentCallback);
    Terminal.getInstance()
    .createPaymentIntent(paymentIntentParams, createPaymentIntentCallback);
    try {
    Terminal.init(
    getApplicationContext(), LogLevel.VERBOSE, new TokenProvider(),
    new TerminalEventListener(), null);
    } catch (TerminalException e) {
    throw new RuntimeException(
    "Location services are required to initialize " +
    "the Terminal.",
    e
    );
    }
    Terminal.getInstance()
    .discoverReaders(discoveryConfig, discoveryListener, discoveryCallback);
    if (!isGranted(Manifest.permission.ACCESS\_FINE\_LOCATION)) {
    if (!isGranted(Manifest.permission.ACCESS\_FINE\_LOCATION)) {
    deniedPermissions.add(Manifest.permission.ACCESS\_FINE\_LOCATION);
    }
    void onPermissionResult(Map\<String, Boolean> result) {
    List deniedPermissions = result.entrySet().stream()
    .filter(it -> !it.getValue())
    .map(it -> it.getKey())
    .collect(Collectors.toList());

    // If we receive a response to our permission check, initialize
    if (deniedPermissions.isEmpty() && !Terminal.isInitialized() && verifyGpsEnabled()) {
    initialize();
    }
    }
    public class TokenProvider implements ConnectionTokenProvider {

  @Override
  public void fetchConnectionToken(ConnectionTokenCallback callback) {
  try {
  final String token = ApiClient.createConnectionToken();
  callback.onSuccess(token);
  } catch (ConnectionTokenException e) {
  callback.onFailure(e);
  }
  }
  }
  public class StripeTerminalApplication extends Application {
  @Override
  public void onCreate() {
  super.onCreate();

  ```
    // If you already have a class that extends 'Application',
    // put whatever code you had in the 'onCreate' method here.

    TerminalApplicationDelegate.onCreate(this);
  ```

  }
  }
  public class StripeTerminalApplication extends Application {
  @Override
  public void onCreate() {
  super.onCreate();

  ```
    // If you already have a class that extends 'Application',
    // put whatever code you had in the 'onCreate' method here.

    // Skip initialization if running in the TTPA process.
    if (TapToPay.isInTapToPayProcess()) return;

    TerminalApplicationDelegate.onCreate(this);
  ```

  }
  }
  import com.stripe.stripeterminal.external.callable.InternetReaderListener;
  import com.stripe.stripeterminal.external.callable.TapToPayReaderListener;
  ConnectionConfiguration.InternetConnectionConfiguration connectionConfig =
  new ConnectionConfiguration.InternetConnectionConfiguration(
  true,
  new InternetReaderListener() {
  @Override
  public void onDisconnect(@NonNull DisconnectReason reason) {
  final MainActivity activity = activityRef.get();
  if (activity != null) {
  activity.runOnUiThread(() -> {
  // Show UI that your reader disconnected
  });
  }
  }
  }
  );
  ConnectionConfiguration.TapToPayConnectionConfiguration connectionConfig =
  new ConnectionConfiguration.TapToPayConnectionConfiguration(
  locationId,
  true,
  new TapToPayReaderListener() {}
  );
  ConnectionConfiguration.BluetoothConnectionConfiguration connectionConfig =
  new ConnectionConfiguration.BluetoothConnectionConfiguration(
  locationId,
  true,
  new TerminalBluetoothReaderListener()
  );
  Terminal.getInstance().connectReader(
  reader,
  connectionConfig,
  new ReaderCallback() {
  @Override
  public void onSuccess(@NonNull Reader reader) {
  final MainActivity activity = activityRef.get();
  if (activity != null) {
  activity.runOnUiThread(() -> {
  // Update UI w/ connection success
  activity.updateReaderConnection(true);
  });
  }
  }

  ```
              @Override
              public void onFailure(@NonNull TerminalException e) {
                  final MainActivity activity = activityRef.get();
                  if (activity != null) {
                      activity.runOnUiThread(() -> {
                          // Update UI w/ connection failure
                      });
                  }
              }
          }
  );
  ```

  public static void createPaymentIntent(
  Integer amount,
  String currency,
  Callback callback)
  {
  mService.createPaymentIntent(amount, currency).enqueue(callback);
  }

  public static void capturePaymentIntent(@NonNull String id) throws IOException {
  mService.capturePaymentIntent(id).execute();
  /\*\*

  - Create a payment intent on the backend
    */
    @FormUrlEncoded
    @POST("create\_payment\_intent")
    Call createPaymentIntent(
    @Field("amount") Integer amount,
    @Field("currency") String currency
    );
    /*\*
  - Create a payment intent on the backend
    \*/
    @FormUrlEncoded
    @POST("create\_payment\_intent")
    Call createPaymentIntent(
    @Field("amount") Integer amount,
    @Field("currency") String currency
    );
    implementation 'com.stripe:stripeterminal:5.3.0'
    implementation 'com.stripe:stripeterminal-taptopay:5.3.0'
    implementation 'com.stripe:stripeterminal-core:5.3.0'

1. Build the server

```
npm install
```

2. Run the server

```
npm start
```

1. Run the server

```
go run server.go
```

1. Build the server

```
pip3 install -r requirements.txt
```

2. Run the server

```
export FLASK_APP="server.py" && python3 -m flask run --port=4242
```

1. Build the server

```
bundle install
```

2. Run the server

```
ruby server.rb
```

1. Build the server

```
composer install
```

2. Run the server

```
php -S 127.0.0.1:4242 --docroot=public
```

1. Build the server

```
dotnet restore
```

2. Run the server

```
dotnet run
```

1. Build the server

```
mvn package
```

2. Run the server

```
java -cp target/sample-jar-with-dependencies.jar com.stripe.sample.Server
```

## Next steps

#### [Connecting to a reader](https://docs.stripe.com/terminal/payments/connect-reader.md)

Learn what it means to connect your app to a reader.

#### [Fleet management](https://docs.stripe.com/terminal/fleet/locations-and-zones.md)

Group and manage a fleet of readers by physical location.

#### [Connect](https://docs.stripe.com/terminal/features/connect.md)

Integrate Stripe Terminal with your Connect platform.
