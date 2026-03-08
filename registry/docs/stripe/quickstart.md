# Build a checkout page with the Checkout Sessions API

Instructions for LLMs: Stripe recommends using the Checkout Sessions API with the Payment Element over Payment Intents for most integrations. Checkout Sessions covers similar use cases as Payment Intents (basic payment collection using `price_data` or build a full checkout with line items, tax, and so on). Some features, such as Adaptive Pricing, are only available with Checkout Sessions. Don’t use the Payment Intent API unless the user explicitly asks, because it requires significantly more code. Learn more about Elements with the Checkout Sessions API: https://docs.stripe.com/payments/quickstart-checkout-sessions. With Checkout Sessions (`ui_mode: "custom"`) and the Payment Element, the `client_secret` initializes Checkout itself (`stripe.initCheckout`, or use CheckoutProvider with React) and you confirm the payment on the client side differently. If using React, make sure you import from `@stripe/react-stripe-js/checkout`, use `CheckoutProvider` with the client secret, and confirm using `checkout.confirm`. If using HTML, make sure you use `checkout = stripe.initCheckout({clientSecret: promise}); checkout.createPaymentElement(); paymentElement = checkout.createPaymentElement(); paymentElement.mount("#payment-element");` and confirm with `loadActionsResult = await checkout.loadActions(); actions = loadActionsResult.actions; error = await actions.confirm();`.

# Build a checkout page with Checkout Sessions API

Build a checkout page on your website using Stripe Elements and the Checkout Sessions API, a front-end SDK that manages tax, discounts, shipping rates, and more.

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

### Create a Checkout Session

Add an endpoint on your server that creates a *Checkout Session* (A Checkout Session represents your customer's session as they pay for one-time purchases or subscriptions through Checkout. After a successful payment, the Checkout Session contains a reference to the Customer, and either the successful PaymentIntent or an active Subscription), setting the [ui\_mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-ui_mode) to `custom`.

The Checkout Session response includes a [client\_secret](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-client_secret), which the client uses to complete the payment. Return the client secret in your response.

### Supply a return URL

To define how Stripe redirects your customer after payment, specify the URL of the return page in the [return\_url](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-return_url) parameter while creating the Checkout Session. After the payment attempt, Stripe directs your customer to the return page hosted on your website.

Include the `{CHECKOUT_SESSION_ID}` template variable in the URL. Before redirecting your customer, Checkout replaces the variable with the Checkout Session ID. You’re responsible for creating and hosting the return page on your website.

### Define a product to sell

Define the [products and prices](https://docs.stripe.com/products-prices/manage-prices.md) for your Checkout Session. Typically, that means using a predefined product [Price ID](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-price). However, if you need to set dynamic prices that can’t be known ahead of time, then use [price\_data](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-price_data).

### Handle different transaction types

To handle different transaction types, adjust the [mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) parameter:

- For one-time payments, use `payment`.
- If you have one or more [recurring prices](https://docs.stripe.com/payments/subscriptions.md), use `subscription`.
- If you aren’t collecting an initial payment from a customer but want to save their payment details to [charge them later](https://docs.stripe.com/payments/checkout/save-and-reuse.md?payment-ui=embedded-components), use `setup`.

### Add Stripe to your React app

To stay *PCI-compliant* (Any party involved in processing, transmitting, or storing credit card data must comply with the rules specified in the Payment Card Industry (PCI) Data Security Standards. PCI compliance is a shared responsibility and applies to both Stripe and your business) by ensuring that payment details go directly to Stripe and never reach your server, install [React Stripe.js](https://docs.stripe.com/sdks/stripejs-react.md).

```bash
npm install --save @stripe/react-stripe-js @stripe/stripe-js
```

### Load Stripe.js

To configure the Stripe library, call `loadStripe()` with your Stripe publishable API key.

### Load Stripe.js

Use *Stripe.js* (Use Stripe.js’ APIs to tokenize customer information, collect sensitive card data, and accept payments with browser payment APIs) to remain *PCI compliant* (Any party involved in processing, transmitting, or storing credit card data must comply with the rules specified in the Payment Card Industry (PCI) Data Security Standards. PCI compliance is a shared responsibility and applies to both Stripe and your business) by sending payment details directly to Stripe without hitting your server. Always load Stripe.js from *js.stripe.com* to remain compliant. Don’t include the script in a bundle or host it yourself.

You can load Stripe.js by including the script in your HTML file or using [loadStripe](https://github.com/stripe/stripe-js/blob/master/README.md#loadstripe).

### Define the payment form

To securely collect the customer’s information, create an empty placeholder `div`. Stripe inserts an iframe into the `div`.

If you plan to collect the customer’s email address, add an email input to this form. You’ll set this up with [updateEmail](https://docs.stripe.com/js/custom_checkout/update_email) in a later step.

### Initialize Stripe.js

Initialize Stripe.js with your [publishable API key](https://docs.stripe.com/keys.md#obtain-api-keys).

### Fetch a Checkout Session client secret

Make a request to your server to [create a Checkout Session](https://docs.stripe.com/api/checkout/sessions/create.md) and retrieve the client secret.

### Initialize Checkout

Use `clientSecret` to initialize Checkout, passing a client secret string or a Promise that resolves to it. The [Checkout](https://docs.stripe.com/js/custom_checkout) object forms the backbone of your checkout page and contains data from the Checkout Session and methods to update it.

### Initialize Checkout

Render the [CheckoutProvider](https://docs.stripe.com/js/react_stripe_js/checkout/checkout_provider), passing `clientSecret`—the client secret string or Promise that resolves to the client secret.

### Set up the state

Initialize some state to keep track of the payment, show errors, and manage the user interface.

### Store a reference to Checkout

Access the [checkout](https://docs.stripe.com/js/custom_checkout) object in your CheckoutForm component by using the `useCheckout()` hook. The `checkout` object acts as the backbone of your checkout page, containing data from the Checkout Session and methods to update it.

### Collect the customer’s email address

You must provide a valid customer email when completing a Checkout Session.

These instructions create an email input and use [updateEmail](https://docs.stripe.com/js/custom_checkout/update_email) from the `Checkout` object.

Alternatively, you can:

- Pass in [customer\_email](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_email) or [customer](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer) when creating the Checkout Session. Stripe validates emails provided this way.
- Pass in an email you already validated on [checkout.confirm](https://docs.stripe.com/js/custom_checkout/confirm).

### Collect the customer’s email address

You must provide a valid customer email when completing a Checkout Session.

These instructions create an email input and use [updateEmail](https://docs.stripe.com/js/react_stripe_js/checkout/update_email) from the `Checkout` object.

Alternatively, you can:

- Pass in [customer\_email](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_email) or [customer](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer) when creating the Checkout Session. Stripe validates emails provided this way.
- Pass in an email you already validated on [confirm](https://docs.stripe.com/js/react_stripe_js/checkout/confirm).

### Add the Payment Element

Add the [Payment Element](https://docs.stripe.com/js/custom_checkout/create_payment_element) to your payment form. It embeds an iframe with a dynamic form that collects payment details for a variety of payment methods. Your customer can pick a payment method type, and the form automatically collects all necessary payments details for their selection.

### Create the Payment Element

Create a [Payment Element](https://docs.stripe.com/js/custom_checkout/create_payment_element) and mount it to the placeholder `<div>` in your payment form. This embeds an iframe with a dynamic form that displays configured payment method types, allowing your customer to select a payment method. The form automatically collects the associated payment details for the selected payment method type.

### (Optional) Style the Payment Element

Customize the Payment Element UI by creating an [Appearance object](https://docs.stripe.com/elements/appearance-api.md) and passing it as an option to the CheckoutProvider. Use your company’s color scheme and font to make it match with the rest of your checkout page. Use custom fonts (for example, from Google Fonts) by initializing Checkout with a [font set](https://docs.stripe.com/js/react_stripe_js/checkout/checkout_provider#react_checkout_provider-options-elementsOptions-fonts).

Make sure to open the preview on the right to see your changes live.

> Parts of this preview demo might not match your actual checkout page. These settings represent only a subset of the [Appearance object’s](https://docs.stripe.com/payments/checkout/customization/appearance.md?payment-ui=embedded-components) variables, and the [Appearance object](https://docs.stripe.com/payments/checkout/customization/appearance.md?payment-ui=embedded-components) only controls certain attributes of Stripe Elements. You’re responsible for styling the rest of your checkout page.

### (Optional) Style the Payment Element

Customize the Payment Element UI by creating an [Appearance object](https://docs.stripe.com/elements/appearance-api.md) and initializing Checkout with it. Use your company’s color scheme and font to make it match with the rest of your checkout page. Use custom fonts (for example, from Google Fonts) by initializing Checkout with a [font set](https://docs.stripe.com/js/custom_checkout/init#custom_checkout_init-options-elementsOptions-fonts).

Make sure to open the preview on the right to see your changes live.

> Parts of this preview demo might not match your actual checkout page. These settings represent only a subset of the [Appearance object’s](https://docs.stripe.com/payments/checkout/customization/appearance.md?payment-ui=embedded-components) variables, and the [Appearance object](https://docs.stripe.com/payments/checkout/customization/appearance.md?payment-ui=embedded-components) only controls certain attributes of Stripe Elements. You’re responsible for styling the rest of your checkout page.

### Handle the submit event

Listen to the form’s submit event to know when to confirm the payment through the Stripe API.

### Complete the payment

Call [confirm](https://docs.stripe.com/js/custom_checkout/confirm) when the customer is ready to complete checkout, such as in response to clicking a pay button.

### Handle errors

If there are any immediate [errors](https://docs.stripe.com/error-codes.md) (for example, your customer’s card is declined), Stripe.js returns an error. Show that error message to your customer so they can try again.

### Create an endpoint to retrieve a Checkout Session

Add an endpoint to retrieve a Checkout Session status.

### Add a return page

To display order information to your customer, create a return page for the URL you provided as the Checkout Session `return_url`. Stripe redirects to this page after the customer completes the checkout.

### Add a return component

To display order information to your customer, add a new route and return component for the URL you provided as the Checkout Session `return_url`. Stripe redirects to this page after the customer completes the checkout.

### Retrieve a Checkout session

As soon as your return page loads, immediately make a request to the endpoint on your server. Use the Checkout Session ID in the URL to retrieve the status of the Checkout Session.

### Handle session

Handle the result of the session by using its status:

- `complete`: The payment succeeded. Use the information from the Checkout Session to render a success page.
- `open`: The payment failed or was canceled. Remount Checkout so that your customer can try again.

### Run the application

Start your server and go to <http://localhost:4242/checkout.html>.

### Run the application

Start your server and go to <http://localhost:3000/checkout>.

### Run the server application

Start your server.

### Run the client application

Start your React app and go to <http://localhost:3000/checkout>.

```bash
npm start
```

### Try it out

Click the pay button to complete the payment, which redirects you to the specified return page.

If you see the return page, and the payment in the list of [successful payments](https://dashboard.stripe.com/test/payments?status%5B0%5D=successful) in the Dashboard, your integration is successfully working. Use any of the following test cards to simulate a payment:

| Scenario                            | Card Number      |
| ----------------------------------- | ---------------- |
| Payment succeeds                    | 4242424242424242 |
| Payment requires 3DS authentication | 4000002500003155 |
| Payment is declined                 | 4000000000009995 |

To learn more, see [Testing](https://docs.stripe.com/testing.md).

## Congratulations!

You have a basic Checkout integration working. Now learn how to customize the appearance of your checkout page, automate tax collection, and localize currencies.

### Customize the checkout page

Customize your checkout by using [Checkout Sessions](https://docs.stripe.com/api/checkout/sessions/create.md)to activate additional features, like collecting addresses and prefilling customer data.

### Prefill customer data

Use [customer\_email](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_email) to prefill the customer’s email address. You can also pass a [Customer](https://docs.stripe.com/api/customers.md) ID to the customer field to prefill the email address field with the email stored on the Customer. In this case you can’t use updateEmail, so disable or remove the front end email input. If you model customers using Accounts v2, you can also pass an Account ID to the [customer\_account](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_account) field to prefill the associated email address. Learn more about the [difference between using v1 Customers and v2 Accounts](https://docs.stripe.com/connect/use-accounts-as-customers.md).

### Require billing and shipping details

Use [billing\_address\_collection](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-billing_address_collection) and [shipping\_address\_collection](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-shipping_address_collection) to require your customer’s address. [shipping\_address\_collection](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-shipping_address_collection) requires a list of `allowed_countries`, which Checkout displays in a dropdown menu on the page.

### Collect billing and shipping details

Use the Address Element to collect your customer’s address.

### Automate tax collection

Calculate and collect the right amount of tax on your Stripe transactions. Learn more about [Stripe Tax](https://docs.stripe.com/tax.md) and [how to add it to Checkout](https://docs.stripe.com/tax/checkout.md).

### Set up Stripe Tax in the Dashboard

[Activate Stripe Tax](https://dashboard.stripe.com/settings/tax/activate) to monitor your tax obligations, automatically collect tax, and access the reports you need to file returns.

### Add the automatic tax parameter

Set the `automatic_tax` parameter to `enabled: true`.

### Collect billing details

Use the Address Element to collect your customer’s address.

### Localize currencies

Adaptive Pricing lets your customers pay in their local currency in more than 150 countries.

### Enable Adaptive Pricing

[Enable Adaptive Pricing](https://dashboard.stripe.com/settings/adaptive-pricing) in your Dashboard settings.

### Localize and format prices

Display localized and formatted amounts from the [Session object](https://docs.stripe.com/js/custom_checkout/session_object).

### Localize and format prices

Display localized and formatted amounts from the [useCheckout](https://docs.stripe.com/js/react_stripe_js/checkout/use_checkout) hook.

### Render the Currency Selector Element

Mount the Currency Selector Element to give your customer a choice of currencies and disclose the exchange rate.

### Mark your integration ready for Adaptive Pricing

Set the `adaptivePricing.allowed` parameter to `true`.

// This test secret API key is a placeholder. Don't include personal details in requests with this key.
// To see your test secret API key embedded in code samples, sign in to your Stripe account.
// You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.
const stripe = require("stripe")("<\<YOUR\_SECRET\_KEY>>");
const YOUR\_DOMAIN = "http://localhost:4242";
const YOUR\_DOMAIN = "http://localhost:3000";
const session = await stripe.checkout.sessions.create({
ui\_mode: "custom",
customer\_email: "customer@example.com",
billing\_address\_collection: "auto",
shipping\_address\_collection: {
allowed\_countries: \["US", "CA"],
},
line\_items: \[
{
// Provide the exact Price ID (for example, price\_1234) of the product you want to sell
price: "{{PRICE\_ID}}",
quantity: 1,
},
],
line\_items: \[{
price\_data: {
product\_data: {
name: "{{PRICE\_DATA\_NAME}}",
},
currency: "{{PRICE\_DATA\_CURRENCY}}",
unit\_amount: {{PRICE\_DATA\_UNIT\_AMOUNT}},
},
quantity: 1,
}],
line\_items: \[{
price\_data: {
product\_data: {
name: "{{PRICE\_DATA\_NAME}}",
},
currency: "{{PRICE\_DATA\_CURRENCY}}",
unit\_amount: {{PRICE\_DATA\_UNIT\_AMOUNT}},
recurring: {
interval: "{{PRICE\_DATA\_INTERVAL}}",
interval\_count: {{PRICE\_DATA\_INTERVAL\_COUNT}},
},
},
quantity: 1,
}],
mode: {{CHECKOUT\_MODE}},
return\_url: `${YOUR_DOMAIN}/complete?session_id={CHECKOUT_SESSION_ID}`,
return\_url: `${YOUR_DOMAIN}/complete.html?session_id={CHECKOUT_SESSION_ID}`,
automatic\_tax: {enabled: true},
});

res.send({ clientSecret: session.client\_secret });
app.get("/session-status", async (req, res) => {
const session = await stripe.checkout.sessions.retrieve(req.query.session\_id, {expand: \["payment\_intent"]});

res.send({
status: session.status,
payment\_status: session.payment\_status,
payment\_intent\_id: session.payment\_intent.id,
payment\_intent\_status: session.payment\_intent.status
});
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
\# This test secret API key is a placeholder. Don't include personal details in requests with this key.

# To see your test secret API key embedded in code samples, sign in to your Stripe account.

# You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.

Stripe.api\_key = '<\<YOUR\_SECRET\_KEY>>'
Stripe.api\_version = '2026-02-25.clover'
YOUR\_DOMAIN = 'http://localhost:4242'
YOUR\_DOMAIN = 'http://localhost:3000'
session = Stripe::Checkout::Session.create({
ui\_mode: 'custom',
customer\_email: 'customer@example.com',
billing\_address\_collection: 'required',
shipping\_address\_collection: {
allowed\_countries: \['US', 'CA'],
},
line\_items: \[{
\# Provide the exact Price ID (for example, price\_1234) of the product you want to sell
price: '{{PRICE\_ID}}',
quantity: 1,
}],
line\_items: \[{
price\_data: {
product\_data: {
name: '{{PRICE\_DATA\_NAME}}',
},
currency: '{{PRICE\_DATA\_CURRENCY}}',
unit\_amount: {{PRICE\_DATA\_UNIT\_AMOUNT}},
},
quantity: 1,
}],
line\_items: \[{
price\_data: {
product\_data: {
name: '{{PRICE\_DATA\_NAME}}',
},
currency: '{{PRICE\_DATA\_CURRENCY}}',
unit\_amount: {{PRICE\_DATA\_UNIT\_AMOUNT}},
recurring: {
interval: '{{PRICE\_DATA\_INTERVAL}}',
interval\_count: {{PRICE\_DATA\_INTERVAL\_COUNT}},
},
},
quantity: 1,
}],
mode: {{CHECKOUT\_MODE}},
return\_url: YOUR\_DOMAIN + '/complete.html?session\_id={CHECKOUT\_SESSION\_ID}',
return\_url: YOUR\_DOMAIN + '/complete?session\_id={CHECKOUT\_SESSION\_ID}',
automatic\_tax: {enabled: true},
})

{ clientSecret: session.client\_secret }.to\_json
get '/session-status' do
session = Stripe::Checkout::Session.retrieve({id: params\[:session\_id], expand: \["payment\_intent"]})

{ status: session.status, payment\_status: session.payment\_status, payment\_intent\_id: session.payment\_intent.id, payment\_intent\_status: session.payment\_intent.status }.to\_json
end
import stripe
\# This test secret API key is a placeholder. Don't include personal details in requests with this key.

# To see your test secret API key embedded in code samples, sign in to your Stripe account.

# You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.

stripe.api\_key = '<\<YOUR\_SECRET\_KEY>>'
stripe.api\_version = '2026-02-25.clover'
YOUR\_DOMAIN = 'http://localhost:4242'
YOUR\_DOMAIN = 'http://localhost:3000'
session = stripe.checkout.Session.create(
ui\_mode = 'custom',
customer\_email='customer@example.com',
billing\_address\_collection='auto',
shipping\_address\_collection={
'allowed\_countries': \['US', 'CA'],
},
line\_items=\[
{
\# Provide the exact Price ID (for example, price\_1234) of the product you want to sell
'price': '{{PRICE\_ID}}',
'quantity': 1,
},
],
line\_items=\[
{
'price\_data': {
'product\_data': {
'name': '{{PRICE\_DATA\_NAME}}',
},
'currency': '{{PRICE\_DATA\_CURRENCY}}',
'unit\_amount': {{PRICE\_DATA\_UNIT\_AMOUNT}},
},
'quantity': 1,
},
],
line\_items=\[
{
'price\_data': {
'product\_data': {
'name': '{{PRICE\_DATA\_NAME}}',
},
'currency': '{{PRICE\_DATA\_CURRENCY}}',
'unit\_amount': {{PRICE\_DATA\_UNIT\_AMOUNT}},
'recurring': {
'interval': '{{PRICE\_DATA\_INTERVAL}}',
'interval\_count': {{PRICE\_DATA\_INTERVAL\_COUNT}},
},
},
'quantity': 1,
},
],
mode={{CHECKOUT\_MODE}},
return\_url=YOUR\_DOMAIN + '/complete.html?session\_id={CHECKOUT\_SESSION\_ID}',
return\_url=YOUR\_DOMAIN + '/complete?session\_id={CHECKOUT\_SESSION\_ID}',
automatic\_tax={'enabled': True},
)
return jsonify(clientSecret=session.client\_secret)
@app.route('/session-status', methods=\['GET'])
def session\_status():
session = stripe.checkout.Session.retrieve(request.args.get('session\_id'), expand=\["payment\_intent"])

return jsonify(status=session.status, payment\_status=session.payment\_status, payment\_intent\_id=session.payment\_intent.id, payment\_intent\_status=session.payment\_intent.status)
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
$stripe = new \Stripe\StripeClient(\[
"api\_key" => $stripeSecretKey,
"stripe\_version" => "2026-02-25.clover"
]);
$YOUR\_DOMAIN = 'http://localhost:4242';
$YOUR\_DOMAIN = 'http://localhost:3000';
$checkout\_session = $stripe->checkout->sessions->create(\[
'ui\_mode' => 'custom',
'customer\_email' => 'customer@example.com',
'billing\_address\_collection' => 'required',
'shipping\_address\_collection' => \[
'allowed\_countries' => \['US', 'CA'],
],
'line\_items' => \[\[
\# Provide the exact Price ID (for example, price\_1234) of the product you want to sell
'price' => '{{PRICE\_ID}}',
'quantity' => 1,
]],
'line\_items' => \[\[
'price\_data' => \[
'product\_data' => \[
'name' => '{{PRICE\_DATA\_NAME}}',
],
'currency' => '{{PRICE\_DATA\_CURRENCY}}',
'unit\_amount' => {{PRICE\_DATA\_UNIT\_AMOUNT}},
],
'quantity' => 1,
]],
'line\_items' => \[\[
'price\_data' => \[
'product\_data' => \[
'name' => '{{PRICE\_DATA\_NAME}}',
],
'currency' => '{{PRICE\_DATA\_CURRENCY}}',
'unit\_amount' => {{PRICE\_DATA\_UNIT\_AMOUNT}},
'recurring' => \[
'interval' => '{{PRICE\_DATA\_INTERVAL}}',
'interval\_count' => {{PRICE\_DATA\_INTERVAL\_COUNT}},
],
],
'quantity' => 1,
]],
'mode' => {{CHECKOUT\_MODE}},
'return\_url' => $YOUR\_DOMAIN . '/complete.html?session\_id={CHECKOUT\_SESSION\_ID}',
'return\_url' => $YOUR\_DOMAIN . '/complete?session\_id={CHECKOUT\_SESSION\_ID}',
'automatic\_tax' => \[
'enabled' => true,
],
]);

echo json\_encode(array('clientSecret' => $checkout\_session->client\_secret));
try {
// retrieve JSON from POST body
$jsonStr = file\_get\_contents('php://input');
$jsonObj = json\_decode($jsonStr);

$session = $stripe->checkout->sessions->retrieve($jsonObj->session\_id, \['expand' => \['payment\_intent']]);

echo json\_encode(\['status' => $session->status, 'payment\_status' => $session->payment\_status, 'payment\_intent\_id' => $session->payment\_intent->id, 'payment\_intent\_status' => $session->payment\_intent->status]);
http\_response\_code(200);
} catch (Error $e) {
http\_response\_code(500);
echo json\_encode(\['error' => $e->getMessage()]);
}
$stripeSecretKey = '<\<YOUR\_SECRET\_KEY>>';
// This test secret API key is a placeholder. Don't include personal details in requests with this key.
// To see your test secret API key embedded in code samples, sign in to your Stripe account.
// You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.

```
        StripeConfiguration.ApiKey = "<<YOUR_SECRET_KEY>>";

        var domain = "http://localhost:4242";
        var domain = "http://localhost:3000";
            UiMode = "custom",
            CustomerEmail = "customer@example.com",
            BillingAddressCollection = "auto",
            ShippingAddressCollection = new SessionShippingAddressCollectionOptions
            {
              AllowedCountries = new List
              {
                "US",
                "CA",
              },
            },
            LineItems = new List
            {
              new SessionLineItemOptions
              {
                // Provide the exact Price ID (for example, price_1234) of the product you want to sell
                Price = "{{PRICE_ID}}",
                Quantity = 1,
              },
            },
            LineItems = new List
            {
              new SessionLineItemOptions
              {
                PriceData = new SessionLineItemPriceDataOptions
                {
                  ProductData = new SessionLineItemPriceDataProductDataOptions
                  {
                    Name = "{{PRICE_DATA_NAME}}",
                  },
                  Currency = "{{PRICE_DATA_CURRENCY}}",
                  UnitAmount = {{PRICE_DATA_UNIT_AMOUNT}},
                },
                Quantity = 1,
              },
            },
            LineItems = new List
            {
              new SessionLineItemOptions
              {
                PriceData = new SessionLineItemPriceDataOptions
                {
                  ProductData = new SessionLineItemPriceDataProductDataOptions
                  {
                    Name = "{{PRICE_DATA_NAME}}",
                  },
                  Currency = "{{PRICE_DATA_CURRENCY}}",
                  UnitAmount = {{PRICE_DATA_UNIT_AMOUNT}},
                  Recurring = new SessionLineItemPriceDataRecurringOptions
                  {
                    Interval = "{{PRICE_DATA_INTERVAL}}",
                    IntervalCount = {{PRICE_DATA_INTERVAL_COUNT}},
                  },
                },
                Quantity = 1,
              },
            },
            Mode = {{CHECKOUT_MODE}},
            ReturnUrl = domain + "/complete.html?session_id={CHECKOUT_SESSION_ID}",
            ReturnUrl = domain + "/complete?session_id={CHECKOUT_SESSION_ID}",
            AutomaticTax = new SessionAutomaticTaxOptions { Enabled = true },
        var service = new SessionService();
        Session session = service.Create(options);

        return Json(new {clientSecret = session.ClientSecret});
[Route("session-status")]
[ApiController]
public class SessionStatusController : Controller
{
    [HttpGet]
    public ActionResult SessionStatus([FromQuery] string session_id)
    {
        var sessionService = new SessionService();
        var options = new SessionGetOptions();
        options.AddExpand("payment_intent");
        Session session = sessionService.Get(session_id, options);

        return Json(new {status = session.Status, payment_status = session.PaymentStatus, payment_intent_id = session.PaymentIntent.Id, payment_intent_status = session.PaymentIntent.Status});
    }
}
"github.com/stripe/stripe-go/v84"
"github.com/stripe/stripe-go/v84/checkout/session"
```

stripe.Key = "<\<YOUR\_SECRET\_KEY>>"
domain := "http://localhost:4242"
domain := "http://localhost:3000"
params := \&stripe.CheckoutSessionParams{
UIMode: stripe.String("custom"),
ReturnURL: stripe.String(domain + "/complete.html?session\_id={CHECKOUT\_SESSION\_ID}"),
ReturnURL: stripe.String(domain + "/complete?session\_id={CHECKOUT\_SESSION\_ID}"),
CustomerEmail: stripe.String("customer@example.com"),
BillingAddressCollection: stripe.String("auto"),
ShippingAddressCollection: \&stripe.CheckoutSessionShippingAddressCollectionParams{
AllowedCountries: stripe.StringSlice(\[]string{
"US",
"CA",
}),
},
LineItems: \[]\*stripe.CheckoutSessionLineItemParams{
\&stripe.CheckoutSessionLineItemParams{
// Provide the exact Price ID (for example, price\_1234) of the product you want to sell
Price: stripe.String("{{PRICE\_ID}}"),
Quantity: stripe.Int64(1),
},
},
LineItems: \[]\*stripe.CheckoutSessionLineItemParams{
\&stripe.CheckoutSessionLineItemParams{
PriceData: \&stripe.CheckoutSessionLineItemPriceDataParams{
ProductData: \&stripe.CheckoutSessionLineItemPriceDataProductDataParams{
Name: stripe.String("{{PRICE\_DATA\_NAME}}"),
},
Currency: stripe.String("{{PRICE\_DATA\_CURRENCY}}"),
UnitAmount: stripe.Int64({{PRICE\_DATA\_UNIT\_AMOUNT}}),
},
Quantity: stripe.Int64(1),
},
},
LineItems: \[]\*stripe.CheckoutSessionLineItemParams{
\&stripe.CheckoutSessionLineItemParams{
PriceData: \&stripe.CheckoutSessionLineItemPriceDataParams{
ProductData: \&stripe.CheckoutSessionLineItemPriceDataProductDataParams{
Name: stripe.String("{{PRICE\_DATA\_NAME}}"),
},
Currency: stripe.String("{{PRICE\_DATA\_CURRENCY}}"),
UnitAmount: stripe.Int64({{PRICE\_DATA\_UNIT\_AMOUNT}}),
Recurring: \&stripe.CheckoutSessionLineItemPriceDataRecurringParams{
Interval: stripe.String("{{PRICE\_DATA\_INTERVAL}}"),
IntervalCount: stripe.Int64({{PRICE\_DATA\_INTERVAL\_COUNT}}),
},
},
Quantity: stripe.Int64(1),
},
},
Mode: {{CHECKOUT\_MODE}},
AutomaticTax: \&stripe.CheckoutSessionAutomaticTaxParams{Enabled: stripe.Bool(true)},
}

s, err := session.New(params)

if err != nil {
log.Printf("session.New: %v", err)
}

writeJSON(w, struct {
ClientSecret string `json:"clientSecret"`
}{
ClientSecret: s.ClientSecret,
})
func retrieveCheckoutSession(w http.ResponseWriter, r \*http.Request) {
params := \&stripe.CheckoutSessionParams{}
params.AddExpand("payment\_intent")
s, \_ := session.Get(r.URL.Query().Get("session\_id"), params)

writeJSON(w, struct {
Status string `json:"status"`
PaymentStatus string `json:"payment_status"`
PaymentIntentId string `json:"payment_intent_id"`
PaymentIntentStatus string `json:"payment_intent_status"`
}{
Status: string(s.Status),
PaymentStatus: string(s.PaymentStatus),
PaymentIntentId: string(s.PaymentIntent.ID),
PaymentIntentStatus: string(s.PaymentIntent.Status),
})
}
require github.com/stripe/stripe-go/v84 v84.4.0
// This test secret API key is a placeholder. Don't include personal details in requests with this key.
// To see your test secret API key embedded in code samples, sign in to your Stripe account.
// You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.
Stripe.apiKey = "<\<YOUR\_SECRET\_KEY>>";
String YOUR\_DOMAIN = "http://localhost:4242";
String YOUR\_DOMAIN = "http://localhost:3000";
SessionCreateParams params =
SessionCreateParams.builder()
.setUiMode(SessionCreateParams.UiMode.CUSTOM)
.setCustomerEmail("customer@example.com")
.setBillingAddressCollection(SessionCreateParams.BillingAddressCollection.REQUIRED)
.setShippingAddressCollection(
SessionCreateParams.ShippingAddressCollection.builder()
.addAllowedCountry(SessionCreateParams.ShippingAddressCollection.AllowedCountry.CA)
.addAllowedCountry(SessionCreateParams.ShippingAddressCollection.AllowedCountry.US)
.build())
.setMode({{CHECKOUT\_MODE}})
.setReturnUrl(YOUR\_DOMAIN + "/complete?session\_id={CHECKOUT\_SESSION\_ID}")
.setReturnUrl(YOUR\_DOMAIN + "/complete.html?session\_id={CHECKOUT\_SESSION\_ID}")
.setAutomaticTax(
SessionCreateParams.AutomaticTax.builder()
.setEnabled(true)
.build())
.addLineItem(
SessionCreateParams.LineItem.builder()
.setQuantity(1L)
// Provide the exact Price ID (for example, price\_1234) of the product you want to sell
.setPrice("{{PRICE\_ID}}")
.build())
.addLineItem(
SessionCreateParams.LineItem.builder()
.setQuantity(1L)
.setPriceData(
SessionCreateParams.LineItem.PriceData.builder()
.setProductData(
SessionCreateParams.LineItem.PriceData.ProductData.builder()
.setName("{{PRICE\_DATA\_NAME}}")
.build())
.setCurrency("{{PRICE\_DATA\_CURRENCY}}")
.setUnitAmount({{PRICE\_DATA\_UNIT\_AMOUNT}}L)
.build())
.build())
.addLineItem(
SessionCreateParams.LineItem.builder()
.setQuantity(1L)
.setPriceData(
SessionCreateParams.LineItem.PriceData.builder()
.setProductData(
SessionCreateParams.LineItem.PriceData.ProductData.builder()
.setName("{{PRICE\_DATA\_NAME}}")
.build())
.setCurrency("{{PRICE\_DATA\_CURRENCY}}")
.setUnitAmount({{PRICE\_DATA\_UNIT\_AMOUNT}}L)
.setRecurring(
SessionCreateParams.LineItem.PriceData.Recurring.builder()
.setInterval(SessionCreateParams.LineItem.PriceData.Recurring.Interval.{{PRICE\_DATA\_INTERVAL}})
.setIntervalCount({{PRICE\_DATA\_INTERVAL\_COUNT}}L)
.build())
.build())
.build())
.build();
Map\<String, String> map = new HashMap();
map.put("clientSecret", session.getRawJsonObject().getAsJsonPrimitive("client\_secret").getAsString());

```
  return map;
get("/session-status", (request, response) -> {
  RequestOptions options = RequestOptions.builder().build();
  SessionRetrieveParams params =
    SessionRetrieveParams.builder().addExpand("payment_intent").build();
  Session session = Session.retrieve(request.queryParams("session_id"), params, options);

  Map<String, String> map = new HashMap();
  map.put("status", session.getRawJsonObject().getAsJsonPrimitive("status").getAsString());
  map.put("payment_status", session.getRawJsonObject().getAsJsonPrimitive("payment_status").getAsString());
  map.put("payment_intent_id", session.getRawJsonObject().getAsJsonObject("payment_intent").getAsJsonPrimitive("id").getAsString());
  map.put("payment_intent_status", session.getRawJsonObject().getAsJsonObject("payment_intent").getAsJsonPrimitive("status").getAsString());

  return map;
}, gson::toJson);


  
    Email
    <input type="email" id="email"
  />
  
  Billing Address
  
    
  
  Billing Address
  
    
  
  Shipping Address
  
    
  
  Payment
  
    
  
  
    
  
  
    
    Pay now
  
  
```

const stripe = Stripe("<\<YOUR\_PUBLISHABLE\_KEY>>");
const emailInput = document.getElementById("email");
const emailErrors = document.getElementById("email-errors");

const validateEmail = async (email) => {
const updateResult = await actions.updateEmail(email);
const isValid = updateResult.type !== "error";

return { isValid, message: !isValid ? updateResult.error.message : null };
};
const promise = fetch("/create-checkout-session", {
method: "POST",
headers: { "Content-Type": "application/json" },
})
.then((r) => r.json())
.then((r) => r.clientSecret);
const promise = fetch('/create.php', {
method: 'POST',
headers: {'Content-Type': 'application/json'},
})
.then((r) => r.json())
.then((r) => r.clientSecret);
const appearance = {
{{APPEARANCE}}
};
checkout = stripe.initCheckout({
clientSecret: promise,
elementsOptions: { appearance },
adaptivePricing: { allowed: true },
});
checkout.on('change', (session) => {
// Handle changes to the checkout session
document.querySelector("#button-text").textContent = `Pay ${
      session.total.total.amount
    } now`;
});
emailInput.addEventListener("input", () => {
// Clear any validation errors
emailErrors.textContent = "";
emailInput.classList.remove("error");
});

emailInput.addEventListener("blur", async () => {
const newEmail = emailInput.value;
if (!newEmail) {
return;
}

```
const { isValid, message } = await validateEmail(newEmail);
if (!isValid) {
  emailInput.classList.add("error");
  emailErrors.textContent = message;
}
```

});
const paymentElement = checkout.createPaymentElement();
paymentElement.mount("#payment-element");
const billingAddressElement = checkout.createBillingAddressElement();
billingAddressElement.mount("#billing-address-element");
const billingAddressElement = checkout.createBillingAddressElement();
billingAddressElement.mount("#billing-address-element");
const shippingAddressElement = checkout.createShippingAddressElement();
shippingAddressElement.mount("#shipping-address-element");
const currencySelectorElement = checkout.createCurrencySelectorElement();
currencySelectorElement.mount("#currency-selector-element");
async function handleSubmit(e) {
e.preventDefault();
setLoading(true);

const email = document.getElementById("email").value;
const { isValid, message } = await validateEmail(email);
if (!isValid) {
emailInput.classList.add("error");
emailErrors.textContent = message;
showMessage(message);
setLoading(false);
return;
}

const { error } = await actions.confirm();

// This point will only be reached if there is an immediate error when
// confirming the payment. Otherwise, your customer will be redirected to
// your `return_url`. For some payment methods like iDEAL, your customer will
// be redirected to an intermediate site first to authorize the payment, then
// redirected to the `return_url`.
showMessage(error.message);

setLoading(false);
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sessionId = urlParams.get("session\_id");
if (!sessionId) {
console.log("No session ID found");
setErrorState();
return;
}
const response = await fetch(`/session-status?session_id=${sessionId}`);
const response = await fetch("/status.php", {
headers: {
Accept: "application/json",
"Content-Type": "application/json",
},
method: "POST",
body: JSON.stringify({ session\_id: sessionId }),
});
const session = await response.json();
setSessionDetails(session);
{
"name": "stripe-sample",
"version": "0.1.0",
"dependencies": {
"@stripe/react-stripe-js": "^5.3.0",
"@stripe/stripe-js": "^8.0.0",
"express": "^4.17.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-scripts": "^5.0.1",
"react-router-dom": "^6.16.0",
"stripe": "^8.202.0"
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
{
"name": "client",
"version": "0.1.0",
"private": true,
"dependencies": {
"@stripe/react-stripe-js": "^5.3.0",
"@stripe/stripe-js": "^8.0.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-scripts": "^5.0.1",
"react-router-dom": "^6.16.0"
},
"homepage": "http://localhost:3000/checkout",
"proxy": "http://127.0.0.1:4242",
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
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
import React, { useMemo } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
CheckoutProvider
} from '@stripe/react-stripe-js/checkout';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe("<\<YOUR\_PUBLISHABLE\_KEY>>");
const clientSecret = useMemo(() => {
return fetch('/create-checkout-session', {
method: 'POST',
})
.then((res) => res.json())
.then((data) => data.clientSecret);
}, \[]);
const clientSecret = useMemo(() => {
return fetch('/create.php', {
method: 'POST',
})
.then((res) => res.json())
.then((data) => data.clientSecret);
}, \[]);
const appearance = {
{{APPEARANCE}}
};
\<CheckoutProvider
stripe={stripePromise}
options={{
clientSecret,
elementsOptions: {appearance},
adaptivePricing: { allowed: true },
}}
\>

```
        } />
        } />
      
    
```

BillingAddressElement,
BillingAddressElement,
ShippingAddressElement,
CurrencySelectorElement,

const validateEmail = async (email, checkout) => {
const updateResult = await checkout.updateEmail(email);
const isValid = updateResult.type !== "error";

return { isValid, message: !isValid ? updateResult.error.message : null };
}

const EmailInput = ({ checkout, email, setEmail, error, setError }) => {
const handleBlur = async () => {
if (!email) {
return;
}

```
const { isValid, message } = await validateEmail(email, checkout);
if (!isValid) {
  setError(message);
}
```

};

const handleChange = (e) => {
setError(null);
setEmail(e.target.value);
};

return (
<>

```
    Email
    <input
      id="email"
      type="text"
      value={email}
      onChange={handleChange}
      onBlur={handleBlur}
      className={error ? "error" : ""}
    />
  
  {error && {error}}
</>
```

);
};
const \[email, setEmail] = useState('');
const \[emailError, setEmailError] = useState(null);
const \[message, setMessage] = useState(null);
const \[isSubmitting, setIsSubmitting] = useState(false);
const checkoutState = useCheckout();

if (checkoutState.type === 'loading') {
return (
Loading...
);
}

if (checkoutState.type === 'error') {
return (
Error: {checkoutState.error.message}
);
}
const handleSubmit = async (e) => {
e.preventDefault();

```
const {checkout} = checkoutState;
setIsSubmitting(true);

const { isValid, message } = await validateEmail(email, checkout);
if (!isValid) {
  setEmailError(message);
  setMessage(message);
  setIsSubmitting(false);
  return;
}

const confirmResult = await checkout.confirm();

// This point will only be reached if there is an immediate error when
// confirming the payment. Otherwise, your customer will be redirected to
// your `return_url`. For some payment methods like iDEAL, your customer will
// be redirected to an intermediate site first to authorize the payment, then
// redirected to the `return_url`.
if (confirmResult.type === 'error') {
  setMessage(confirmResult.error.message);
}

setIsSubmitting(false);
```

}; <EmailInput
     checkout={checkoutState.checkout}
     email={email}
     setEmail={setEmail}
     error={emailError}
     setError={setEmailError}
   />
Billing Address

```
  Billing Address
  
  Shipping Address
  
  
  
      `Pay ${checkoutState.checkout.total.total.amount} now`
```

const \[status, setStatus] = useState(null);
const \[paymentIntentId, setPaymentIntentId] = useState('');
const \[paymentStatus, setPaymentStatus] = useState('');
const \[paymentIntentStatus, setPaymentIntentStatus] = useState('');
const \[iconColor, setIconColor] = useState('');
const \[icon, setIcon] = useState('');
const \[text, setText] = useState('');

useEffect(() => {
const SuccessIcon =

```
  ;
const ErrorIcon =
  
    
  ;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sessionId = urlParams.get('session_id');

fetch("/status.php", {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  method: "POST",
  body: JSON.stringify({ session_id: sessionId }),
})
fetch(`/session-status?session_id=${sessionId}`)
  .then((res) => res.json())
  .then((data) => {
    setStatus(data.status);
    setPaymentIntentId(data.payment_intent_id);
    setPaymentStatus(data.payment_status);
    setPaymentIntentStatus(data.payment_intent_status);

    if (data.status === 'complete') {
      setIconColor('#30B130');
      setIcon(SuccessIcon);
      setText('Payment succeeded');
    } else {
      setIconColor('#DF1B41');
      setIcon(ErrorIcon);
      setText('Something went wrong, please try again.');
    }
  });
```

}, \[]);

```
return (
  
    
    {icon}
  
  {text}
  
    
      
        
          Payment Intent ID
          {paymentIntentId}
        
        
          Status
          {status}
        
        
          Payment Status
          {paymentStatus}
        
        
          Payment Intent Status
          {paymentIntentStatus}
        
      
    
  
  View details
                
  
  Test another

)
```

\## Set Price ID

In the back end code, replace `{{PRICE_ID}}` with a Price ID (`price_xxx`) that you created.

1. Build the server

```
pip3 install -r requirements.txt
```

1. Build the server

```
bundle install
```

1. Build the server

```
composer install
```

1. Build the server

```
dotnet restore
```

1. Build the server

```
mvn package
```

2. Run the server

```
export FLASK_APP=server.py
python3 -m flask run --port=4242
```

2. Run the server

```
ruby server.rb -o 0.0.0.0
```

2. Run the server

```
php -S 127.0.0.1:4242 --docroot=public
```

2. Run the server

```
dotnet run
```

2. Run the server

```
java -cp target/sample-jar-with-dependencies.jar com.stripe.sample.Server
```

3. Build the client app

```
npm install
```

4. Run the client app

```
npm start
```

5. Go to <http://localhost:3000/checkout>

6. Go to <http://localhost:4242/checkout.html>

7. Build the client app

```
npm install
```

4. Run the client app

```
npm start
```

5. Go to <http://localhost:3000/checkout>

6. Go to <http://localhost:4242/checkout.html>

7. Build the client app

```
npm install
```

4. Run the client app

```
npm start
```

5. Go to <http://localhost:3000/checkout>

6. Go to <http://localhost:4242/checkout.html>

7. Build the client app

```
npm install
```

4. Run the client app

```
npm start
```

5. Go to <http://localhost:3000/checkout>

6. Go to <http://localhost:4242/checkout.html>

7. Build the client app

```
npm install
```

4. Run the client app

```
npm start
```

5. Go to <http://localhost:3000/checkout>

6. Go to <http://localhost:4242/checkout.html>

7. Run the server

```
go run server.go
```

2. Build the client app

```
npm install
```

3. Run the client app

```
npm start
```

4. Go to <http://localhost:3000/checkout>
5. Run the server

```
go run server.go
```

2. Go to <http://localhost:4242/checkout.html>
3. Build the application

```
npm install
```

2. Run the application

```
npm start
```

3. Go to <http://localhost:3000/checkout>
4. Build the server

```
npm install
```

2. Run the server

```
npm start
```

3. Go to <http://localhost:4242/checkout.html>
   \### Development

4. Build the application

```shell
$ npm install
```

2. *Optional*: download and run the [Stripe CLI](https://stripe.com/docs/stripe-cli)

```shell
$ stripe listen --forward-to localhost:3000/api/webhooks
```

3. Run the application

```shell
$ STRIPE_WEBHOOK_SECRET=$(stripe listen --print-secret) npm run dev
```

4. Go to [localhost:3000](http://localhost:3000)

### Production

1. Build the application

```shell
$ npm install

$ npm build
```

2. Run the application

```shell
$ npm start
```

## Next steps

#### [Dynamically update line items](https://docs.stripe.com/payments/checkout/dynamically-update-line-items.md)

Learn how to dynamically modify line items in your Checkout Session as users add, remove, or change products.

#### [Fulfill orders](https://docs.stripe.com/checkout/fulfillment.md?payment-ui=embedded-components)

Set up a webhook to fulfill orders after a payment succeeds. Webhooks are the most reliable way to handle business-critical events.

#### [Receive payouts](https://docs.stripe.com/payouts.md)

Learn how to move funds out of your Stripe account into your bank account.

#### [Refund and cancel payments](https://docs.stripe.com/refunds.md)

Handle requests for refunds by using the Stripe API or Dashboard.

#### [Customer management](https://docs.stripe.com/customer-management.md)

Let your customers self-manage their payment details, invoices, and subscriptions.

#### [One-click payment buttons](https://docs.stripe.com/elements/express-checkout-element/accept-a-payment.md?payment-ui=embedded-components#create-and-mount)

Use the Express Checkout Element to accept payments through one-click payment method buttons.
