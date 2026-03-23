# Create and send an invoice

Build an example Invoicing integration.

# Create and send an invoice

Build a full, working invoicing integration using Stripe Invoicing. Learn how to look up a customer, get a price from an object that represents a database, and create and send an invoice.

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
export FLASK_APP=server.py
python3 -m flask run --port=4242
```

1. Build the server

```
bundle install
```

2. Run the server

```
ruby server.rb -o 0.0.0.0
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
dotnet build
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

```
stripe listen --forward-to localhost:4242/webhook.php
```

```
stripe listen --forward-to localhost:4242/webhook
```

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

### Manage Products, Prices, and Customers

First, create a price for your product in the [Dashboard](https://docs.stripe.com/invoicing/products-prices.md) or through the [API](https://docs.stripe.com/api/prices/create.md). After you create a price and associate it with a product, store its ID in your database.

Next, look up a [Customer](https://docs.stripe.com/api/customers.md) in your database by [email](https://docs.stripe.com/api/customers/object.md?lang=dotnet#customer_object-email). If that customer doesn’t exist, create the `Customer` and store their ID for future purchases. The next step, for example, uses the [id](https://docs.stripe.com/api/customers/object.md#customer_object-id) of [Customer object](https://docs.stripe.com/api/customers/object.md) to create an invoice.

> The `Customer` object represents the customer purchasing your product. It’s required for creating an invoice.

### Manage Products, Prices, and customer-configured Accounts

First, create a price for your product in the [Dashboard](https://docs.stripe.com/invoicing/products-prices.md) or through the [API](https://docs.stripe.com/api/prices/create.md). After you create a price and associate it with a product, store its ID in your database.

Next, look up a customer in your database by email. If that customer doesn’t exist, create the [Account](https://docs.stripe.com/api/v2/core/accounts.md) for the [customer](https://docs.stripe.com/connect/account-capabilities.md?accounts-namespace=v2#customer) and store their ID for future purchases. The next step, for example, uses the [id](https://docs.stripe.com/api/v2/core/accounts/object.md#v2_account_object-id) of [Account object](https://docs.stripe.com/api/v2/core/accounts/object.md) to create an invoice.

> The customer-configured `Account` object represents the customer purchasing your product. It’s required for creating an invoice.

### Create an Empty Invoice

Set the [collection\_method](https://docs.stripe.com/api/invoices/object.md#invoice_object-collection_method) attribute to `send_invoice`. For Stripe to mark an invoice as past due, you must add the [days\_until\_due](https://docs.stripe.com/api/invoices/create.md#create_invoice-days_until_due) parameter. When you send an invoice, Stripe emails the invoice to the customer with payment instructions.

> The other available collection method is `charge_automatically`. When charging automatically, Stripe attempts to immediately pay the invoice using the default source that’s attached to the customer. Here, we use `send_invoice` to prevent an immediate, undesired customer charge.

### Create an Invoice Item

Create an invoice item by passing in the customer `id`, product `price`, and invoice ID `invoice`.

The maximum number of invoice items is 250.

> If invoice items are created before an invoice is created, set the [pending\_invoice\_items\_behavior](https://docs.stripe.com/api/invoices/create.md#create_invoice-pending_invoice_items_behavior) to `include` when creating the invoice so that all pending invoice items are automatically added to the invoice. In this case, only add invoice items to a single customer at a time to avoid adding them to the wrong customer.
>
> Creating an invoice adds up to 250 pending invoice items with the remainder to be added on the next invoice. To see your customer’s pending invoice items, see the **Customer details** page or set the [pending](https://docs.stripe.com/api/invoiceitems/list.md#list_invoiceitems-pending) attribute to `true` when you use the API to list all of the invoice items.

Send the invoice to the email address associated with the customer. As soon as you send an invoice, Stripe finalizes it. Many jurisdictions consider finalized invoices a legal document making certain fields unalterable. If you send invoices that have already been paid, there’s no reference to the payment in the email.

With any finalized invoice, you can either download and send a [PDF](https://docs.stripe.com/api/invoices/object.md#invoice_object-invoice_pdf) or [link](https://docs.stripe.com/api/invoices/object.md#invoice_object-hosted_invoice_url) to the associated [Hosted Invoice Page](https://docs.stripe.com/invoicing/hosted-invoice-page.md).

## Congratulations!

You’ve created and sent your first invoice. Take your integration further and learn how to quickly automate tax collection through the API.

### Automate tax collection

Calculate and collect the right amount of tax on your Stripe transactions. Learn more about [Stripe Tax](https://docs.stripe.com/tax.md), and how to [activate it](https://dashboard.stripe.com/tax) in the Dashboard before you integrate it.

### Add the automatic tax parameter

Set the `automatic_tax` parameter to `enabled: true`.

// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require('stripe')('<\<YOUR\_SECRET\_KEY>>');
// You probably have a database to keep track of preexisting customers.
// But to keep things simple, we'll use an Object to store Stripe object IDs in this example.
const CUSTOMERS = \[{stripeId: "cus\_123456789", email: "jenny.rosen@example.com"}];
// Prices on Stripe model the pricing scheme of your business.
// Create Prices in the Dashboard or with the API before accepting payments
// and store the IDs in your database.
const PRICES = {basic: "price\_123456789", professional: "price\_987654321"};

const sendInvoice = async function (email) {
// Look up a customer in your database
let customer = CUSTOMERS.find(c => c.email === email);
let customerId;
if (!customer) {
// Create a new Customer
customer = await stripe.customers.create({
email,
description: 'Customer to invoice',
});
// Store the Customer ID in your database to use for future purchases
CUSTOMERS.push({stripeId: customer.id, email: email});
customerId = customer.id;
} else {
// Read the Customer ID from your database
customerId = customer.stripeId;
}
// You probably have a database to keep track of preexisting customers.
// But to keep things simple, we'll use an Object to store Stripe object IDs in this example.
const CUSTOMERS = \[{stripeId: "acct\_123456789", email: "jenny.rosen@example.com"}];
// Prices on Stripe model the pricing scheme of your business.
// Create Prices in the Dashboard or with the API before accepting payments
// and store the IDs in your database.
const PRICES = {basic: "price\_123456789", professional: "price\_987654321"};

const sendInvoice = async function (email) {
// Look up a customer in your database
let customer = CUSTOMERS.find(c => c.email === email);
let customerId;
if (!customer) {
// Create a new customer-configured Account
customer = await stripe.v2.core.accounts.create({
contact\_email: email,
display\_name: 'Customer to invoice',
configuration: {
customer: {
capabilities: {
automatic\_indirect\_tax: {requested: true}
},
},
},
});
// Store the Customer ID in your database to use for future purchases
CUSTOMERS.push({stripeId: customer.id, email: email});
customerId = customer.id;
} else {
// Read the Customer ID from your database
customerId = customer.stripeId;
}

// Create an Invoice
const invoice = await stripe.invoices.create({
customer: customerId,
collection\_method: 'send\_invoice',
days\_until\_due: 30,
automatic\_tax: {enabled: true},
});

// Create an Invoice
const invoice = await stripe.invoices.create({
customer\_account: customerId,
collection\_method: 'send\_invoice',
days\_until\_due: 30,
automatic\_tax: {enabled: true},
});

// Create an Invoice Item with the Price, and Customer you want to charge
const invoiceItem = await stripe.invoiceItems.create({
customer: customerId,
pricing: {
price: PRICES.basic,
},
invoice: invoice.id
});

// Create an Invoice Item with the Price and the customer-configured Account you want to charge
const invoiceItem = await stripe.invoiceItems.create({
customer\_account: customerId,
pricing: {
price: PRICES.basic,
},
invoice: invoice.id
});

// Send the Invoice
await stripe.invoices.sendInvoice(invoice.id);
};
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
const stripe = require('stripe')('<\<YOUR\_SECRET\_KEY>>');
\# This is a public sample test API key.

# Don’t submit any personally identifiable information in requests made with this key.

# Sign in to see your own test API key embedded in code samples.

Stripe.api\_key = '<\<YOUR\_SECRET\_KEY>>'
\# This is a public sample test API key.

# Don’t submit any personally identifiable information in requests made with this key.

# Sign in to see your own test API key embedded in code samples.

$CLIENT = Stripe::StripeClient.new('<\<YOUR\_SECRET\_KEY>>')
\# You probably have a database to keep track of preexisting customers.

# But to keep things simple, we'll use an Object to store Stripe object IDs in this example.

$CUSTOMERS = \[{ stripeId: 'cus\_123456789', email: 'jenny.rosen@example.com' }]

# Prices on Stripe model the pricing scheme of your business.

# Create Prices in the Dashboard or with the API before accepting payments

# and store the IDs in your database.

$PRICES = { basic: 'price\_123456', professional: 'price\_456789' }

def send\_invoice(email)

# Look up a customer in your database

customer = $CUSTOMERS.find { |customer\_obj| customer\_obj\[:email] == email }
customer\_id = nil

if !customer
\# Create a new Customer
customer = Stripe::Customer.create({
email: email,
description: 'Customer to invoice'
})
\# Store the Customer ID in your database to use for future purchases
$CUSTOMERS << { stripeId: customer.id, email: email }
customer\_id = customer.id
else
\# Read the Customer ID from your database
customer\_id = customer\[:stripeId]
end
\# You probably have a database to keep track of preexisting customers.

# But to keep things simple, we'll use an Object to store Stripe object IDs in this example.

$CUSTOMERS = \[{ stripeId: 'acct\_123456789', email: 'jenny.rosen@example.com' }]

# Prices on Stripe model the pricing scheme of your business.

# Create Prices in the Dashboard or with the API before accepting payments

# and store the IDs in your database.

$PRICES = { basic: 'price\_123456', professional: 'price\_456789' }

def send\_invoice(email)

# Look up a customer in your database

customer = $CUSTOMERS.find { |customer\_obj| customer\_obj\[:email] == email }
customer\_id = nil

if !customer
\# Create a new customer-configured Account
customer = $CLIENT.v2.core.accounts.create({
contact\_email: email,
display\_name: 'Customer to invoice',
configuration: {
customer: {
capabilities: {automatic\_indirect\_tax: {requested: true}}
}\
}
})
\# Store the Customer ID in your database to use for future purchases
$CUSTOMERS << { stripeId: customer.id, email: email }
customer\_id = customer.id
else
\# Read the Customer ID from your database
customer\_id = customer\[:stripeId]
end

\# Create an Invoice
invoice = Stripe::Invoice.create({
customer: customer\_id,
collection\_method: 'send\_invoice',
days\_until\_due: 30,
automatic\_tax: {
enabled: true
},
})

\# Create an Invoice
invoice = $CLIENT.v1.invoices.create({
customer\_account: customer\_id,
collection\_method: 'send\_invoice',
days\_until\_due: 30,
automatic\_tax: {
enabled: true
},
})

\# Create an Invoice Item
invoice\_item = Stripe::InvoiceItem.create({
customer: customer\_id,
pricing: {price: $PRICES\[:basic]},
invoice: invoice.id
})

\# Create an Invoice Item
invoice\_item = $CLIENT.v1.invoice\_items.create({
customer\_account: customer\_id,
pricing: {price: $PRICES\[:basic]},
invoice: invoice.id
})

\# Send the Invoice
Stripe::Invoice.send\_invoice(invoice\[:id])

\# Send the Invoice
$CLIENT.v1.invoices.send\_invoice(invoice\[:id])
Stripe.api\_key = '<\<YOUR\_SECRET\_KEY>>'
import stripe
\# This is a public sample test API key.

# Don’t submit any personally identifiable information in requests made with this key.

# Sign in to see your own test API key embedded in code samples.

stripe.api\_key = '<\<YOUR\_SECRET\_KEY>>'
import stripe
\# This is a public sample test API key.

# Don’t submit any personally identifiable information in requests made with this key.

# Sign in to see your own test API key embedded in code samples.

client = stripe.StripeClient('<\<YOUR\_SECRET\_KEY>>')
\# You probably have a database to keep track of preexisting customers

# But to keep things simple, we'll use an Object to store Stripe object IDs in this example.

CUSTOMERS = \[{"stripe\_id": "cus\_123456789", "email": "jenny.rosen@example.com"}]

# Prices in Stripe model the pricing scheme of your business.

# Create Prices in the Dashboard or with the API before accepting payments

# and store the IDs in your database.

PRICES = {"basic": "price\_123456789", "professional": "price\_987654321"}

def send\_invoice(email):

# Look up a customer in your database

```
customers = [c for c in CUSTOMERS if c["email"] == email]
if customers:
    customer_id=customers[0]["stripe_id"]
else:
    # Create a new Customer
    customer = stripe.Customer.create(
        email=email, # Use your email address for testing purposes
        description="Customer to invoice",
    )
    # Store the customer ID in your database for future purchases
    CUSTOMERS.append({"stripe_id": customer.id, "email": email})
    # Read the Customer ID from your database
    customer_id = customer.id
```

\# You probably have a database to keep track of preexisting customers

# But to keep things simple, we'll use an Object to store Stripe object IDs in this example.

CUSTOMERS = \[{"stripe\_id": "acct\_123456789", "email": "jenny.rosen@example.com"}]

# Prices in Stripe model the pricing scheme of your business.

# Create Prices in the Dashboard or with the API before accepting payments

# and store the IDs in your database.

PRICES = {"basic": "price\_123456789", "professional": "price\_987654321"}

def send\_invoice(email):

# Look up a customer in your database

```
customers = [c for c in CUSTOMERS if c["email"] == email]
if customers:
    customer_id=customers[0]["stripe_id"]
else:
    # Create a new customer-configured Account
    customer = client.v2.core.accounts.create({
        "contact_email": email, # Use your email address for testing purposes
        "display_name": "Customer to invoice",
        "configuration": {
            "customer": {
                "capabilities": {"automatic_indirect_tax": {"requested": True}}
            },
        },
    })
    \# Store the customer ID in your database for future purchases
    CUSTOMERS.append({"stripe_id": customer.id, "email": email})
    # Read the Customer ID from your database
    customer_id = customer.id

\# Create an Invoice
invoice = stripe.Invoice.create(
    customer=customer_id,
    collection_method='send_invoice',
    days_until_due=30,

\# Create an Invoice
invoice = client.v1.invoices.create({
    "customer_account": customer_id,
    "collection_method": 'send_invoice',
    "days_until_due": 30,
    "automatic_tax": { 'enabled': True },

\# Create an Invoice Item with the Price and Customer you want to charge
stripe.InvoiceItem.create(
    customer=customer_id,
    pricing={"price": PRICES["basic"]},
    invoice=invoice.id
)

\# Create an Invoice Item with the Price and the customer-configured Account you want to charge
client.v1.invoice_items.create({
    "customer_account": customer_id,
    "pricing": {"price": PRICES["basic"]},
    "invoice": invoice.id
})

\# Send the Invoice
stripe.Invoice.send_invoice(invoice.id)
return

\# Send the Invoice
client.v1.invoices.send_invoice(invoice.id)
return
```

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
stripe.api\_key = '<\<YOUR\_SECRET\_KEY>>'
\Stripe\Stripe::setApiKey($stripeSecretKey);
$CLIENT = new \Stripe\StripeClient($stripeSecretKey);
// You probably have a database to keep track of preexisting customers.
// But to keep things simple, we'll use an Object to store Stripe object IDs in this example.
$CUSTOMERS = \[
\[
'stripeId' => 'cus\_123456789',
'email' => 'jenny.rosen@example.com'
],
];
// Prices on Stripe model the pricing scheme of your business.
// Create Prices in the Dashboard or with the API before accepting payments
// and store the IDs in your database.
$PRICES = \[
'basic' => 'price\_123456789',
'professional' => 'price\_987654321',
];

function sendInvoice($email) {
// Look up a customer in your database
global $CUSTOMERS;
global $PRICES;

$customerId = null;

$customers = array\_filter($CUSTOMERS, function ($customer) use ($email) {
return $customer\['email'] === $email;
});

if (!$customers) {
// Create a new Customer
$customer = \Stripe\Customer::create(\[
'email' => $email,
'description' => 'Customer to invoice',
]);
// Store the Customer ID in your database to use for future purchases
$CUSTOMERS\[] = \[
'stripeId' => $customer->id,
'email' => $email
];

```
$customerId = $customer->id;
```

}
else {
// Read the Customer ID from your database
$customerId = $customers\[0]\['stripeId'];
}
// You probably have a database to keep track of preexisting customers.
// But to keep things simple, we'll use an Object to store Stripe object IDs in this example.
$CUSTOMERS = \[
\[
'stripeId' => 'acct\_123456789',
'email' => 'jenny.rosen@example.com'
],
];
// Prices on Stripe model the pricing scheme of your business.
// Create Prices in the Dashboard or with the API before accepting payments
// and store the IDs in your database.
$PRICES = \[
'basic' => 'price\_123456789',
'professional' => 'price\_987654321',
];

function sendInvoice($email) {
// Look up a customer in your database
global $CUSTOMERS;
global $PRICES;
global $CLIENT;

$customerId = null;

$customers = array\_filter($CUSTOMERS, function ($customer) use ($email) {
return $customer\['email'] === $email;
});

if (!$customers) {
// Create a new customer-configured Account
$customer = $CLIENT->v2->core->accounts->create(\[
'contact\_email' => $email,
'display\_name' => 'Customer to invoice',
'configuration' => \[
'customer' => \[
'capabilities' => \[
'automatic\_indirect\_tax' => \[
'requested' => true,
],
],
],
]
]);
// Store the Customer ID in your database to use for future purchases
$CUSTOMERS\[] = \[
'stripeId' => $customer->id,
'email' => $email
];

```
$customerId = $customer->id;
```

}
else {
// Read the Customer ID from your database
$customerId = $customers\[0]\['stripeId'];
}

// Create an Invoice
$invoice = \Stripe\Invoice::create(\[
'customer' => $customerId,
'collection\_method' => 'send\_invoice',
'days\_until\_due' => 30,
'automatic\_tax' => \[
'enabled' => true,
],
]);

// Create an Invoice
$invoice = $CLIENT->v1->invoices->create(\[
'customer\_account' => $customerId,
'collection\_method' => 'send\_invoice',
'days\_until\_due' => 30,
'automatic\_tax' => \[
'enabled' => true,
],
]);

// Create an Invoice Item with the Price, and Customer you want to charge
$invoiceItem = \Stripe\InvoiceItem::create(\[
'customer' => $customerId,
'pricing' => \['price' => $PRICES\['basic']],
'invoice' => $invoice->id
]);

// Create an Invoice Item with the Price and the customer-configured Account you want to charge
$invoiceItem = $CLIENT->v1->invoiceItems->create(\[
'customer\_account' => $customerId,
'pricing' => \['price' => $PRICES\['basic']],
'invoice' => $invoice->id
]);

// Send the Invoice
$invoice->sendInvoice();
}

// Send the Invoice
$CLIENT->v1->invoices->sendInvoice();
}
$stripeSecretKey = '<\<YOUR\_SECRET\_KEY>>';
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
private static StripeClient Client { get; set; } = new StripeClient("<\<YOUR\_SECRET\_KEY>>");

```
public static void Main(string[] args)
{
  // Add a Customer
  Customers.Add(new MyCustomer()
  {
    StripeId = "acct_123456789",
    Email = "jenny.rosen@example.com"
  });
public static void sendInvoice(String email)
{
  // Look up a customer in your database
  var customer = Customers.Find(customer => customer.Email == email);
  String customerId;
  if(customer == null) {
    // Create a new Customer
    var customerOptions = new CustomerCreateOptions
    {
      Email = email,
      Description = "Customer to invoice",
    };
    var stripeCustomer = Client.V1.Customers.Create(customerOptions);
    customerId = stripeCustomer.Id;

    // Store the Customer ID in your database to use for future purchases
    Customers.Add(new MyCustomer()
    {
      StripeId = stripeCustomer.Id,
      Email = stripeCustomer.Email,
    });
  } else {
    // Read the Customer ID from your database
    customerId = customer.StripeId;
  }

public static void sendInvoice(String email)
{
  // Look up a customer in your database
  var customer = Customers.Find(customer => customer.Email == email);
  String customerId;
  if(customer == null) {
    // Create a new customer-configured Account
    var customerOptions = new Stripe.V2.Core.AccountCreateOptions
    {
      ContactEmail = email,
      DisplayName = "Customer to invoice",
      Configuration = new Stripe.V2.Core.AccountCreateConfigurationOptions
      {
        Customer = new Stripe.V2.Core.AccountCreateConfigurationCustomerOptions
        {
          Capabilities = new Stripe.V2.Core.AccountCreateConfigurationCustomerCapabilitiesOptions
          {
              AutomaticIndirectTax = new Stripe.V2.Core.AccountCreateConfigurationCustomerCapabilitiesAutomaticIndirectTaxOptions
              {
                  Requested = true,
              },
          },
        }
      },
    };
    var stripeCustomer = Client.V2.Core.Accounts.Create(customerOptions);
    customerId = stripeCustomer.Id;

    // Store the Customer ID in your database to use for future purchases
    Customers.Add(new MyCustomer()
    {
      StripeId = stripeCustomer.Id,
      Email = stripeCustomer.CustomerEmail,
    });
  } else {
    // Read the Customer ID from your database
    customerId = customer.StripeId;
  }

  // Create an Invoice
  var invoiceOptions = new InvoiceCreateOptions
  {
    Customer = customerId,
    CollectionMethod = "send_invoice",
    DaysUntilDue = 30,
    AutomaticTax = new InvoiceAutomaticTaxOptions
    {
      Enabled = true,
    },
  };
  var invoice = Client.V1.Invoices.Create(invoiceOptions);
  // Create an Invoice
  var invoiceOptions = new InvoiceCreateOptions
  {
    CustomerAccount = customerId,
    CollectionMethod = "send_invoice",
    DaysUntilDue = 30,
    AutomaticTax = new InvoiceAutomaticTaxOptions
    {
      Enabled = true,
    },
  };
  var invoice = Client.V1.Invoices.Create(invoiceOptions);
  // Create an Invoice Item with the Price, and Customer you want to charge
  var invoiceItemOptions = new InvoiceItemCreateOptions
  {
    Customer = customerId,
    Pricing = new InvoiceItemPricingOptions
    {
        Price = Prices["basic"],
    },
    Invoice = invoice.Id
  };
  Client.V1.InvoiceItems.Create(invoiceItemOptions);
  // Create an Invoice Item with the Price and the customer-configured Account you want to charge
  var invoiceItemOptions = new InvoiceItemCreateOptions
  {
    CustomerAccount = customerId,
    Pricing = new InvoiceItemPricingOptions
    {
        Price = Prices["basic"],
    },
    Invoice = invoice.Id
  };
  Client.V1.InvoiceItems.Create(invoiceItemOptions);

  // Send the Invoice
  Client.V1.Invoices.SendInvoice(invoice.Id);
}
```

}
}
services.AddSingleton(new StripeClient("<\<YOUR\_SECRET\_KEY>>"));
"github.com/stripe/stripe-go/v84"
"github.com/stripe/stripe-go/v84/customer"
"github.com/stripe/stripe-go/v84/invoice"
"github.com/stripe/stripe-go/v84/invoiceitem"
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
stripe.Key = "<\<YOUR\_SECRET\_KEY>>"
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
client := stripe.NewClient("<\<YOUR\_SECRET\_KEY>>")
// You probably have a database to keep track of preexisting customers.
// But to keep things simple, we'll hardcode a list of fake customers.
customers := \[]MyCustomer{
{
StripeId: "cus\_123456789",
Email: "jenny.rosen@example.com",
},
}
// Prices on Stripe model the pricing scheme of your business.
// Create Prices in the Dashboard or with the API before accepting payments
// and store the IDs in your database.
prices := \[]MyPrice{
{
Tier: "basic",
StripeId: "price\_123456789",
},
{
Tier: "professional",
StripeId: "price\_987654321",
},
}

```
customerID := ""
// Look up a customer in your database
for _, x := range customers {
    if x.Email == email {
        customerID = x.StripeId
        break
    }
}

if customerID == "" {
    params := &stripe.CustomerParams{
        Email: stripe.String("jenny.rosen@example.com"),
        Description: stripe.String("Customer to invoice"),
    }
    cus, _ := customer.New(params)
    newCus := MyCustomer{
        Email: email,
        StripeId: cus.ID,
    }
    customers = append(customers, newCus)
    customerID = cus.ID
}

// Look up the Price ID from your database
var priceID string
for _, y := range prices {
    if y.Tier == "basic" {
        priceID = y.StripeId
        break
    }
}
// You probably have a database to keep track of preexisting customers.
// But to keep things simple, we'll hardcode a list of fake customers.
customers := []MyCustomer{
    {
        StripeId: "acct_123456789",
        Email: "jenny.rosen@example.com",
    },
}
// Prices on Stripe model the pricing scheme of your business.
// Create Prices in the Dashboard or with the API before accepting payments
// and store the IDs in your database.
prices := []MyPrice{
    {
      Tier: "basic",
      StripeId: "price_123456789",
    },
    {
      Tier: "professional",
      StripeId: "price_987654321",
    },
}

customerID := ""
// Look up a customer in your database
for _, x := range customers {
    if x.Email == email {
        customerID = x.StripeId
        break
    }
}

if customerID == "" {
    params := &stripe.V2CoreAccountCreateParams{
        ContactEmail: stripe.String("jenny.rosen@example.com"),
        DisplayName: stripe.String("Customer to invoice"),
        Configuration: &stripe.V2CoreAccountCreateConfigurationParams{
            Customer: &stripe.V2CoreAccountCreateConfigurationCustomerParams{
                Capabilities: &stripe.V2CoreAccountCreateConfigurationCustomerCapabilitiesParams{
                    AutomaticIndirectTax: &stripe.V2CoreAccountCreateConfigurationCustomerCapabilitiesAutomaticIndirectTaxParams{
                    Requested: stripe.Bool(true),
                    },
                },
            },
        },
    }  
    cus, _ := client.V2CoreAccounts.Create(context.TODO(), params)
    newCus := MyCustomer{
        Email: email,
        StripeId: cus.ID,
    }
    customers = append(customers, newCus)
    customerID = cus.ID
}

// Look up the Price ID from your database
var priceID string
for _, y := range prices {
    if y.Tier == "basic" {
        priceID = y.StripeId
        break
    }
}

// Create an Invoice
inParams := &stripe.InvoiceParams{
  Customer: stripe.String(customerID),
  CollectionMethod: stripe.String("send_invoice"),
  DaysUntilDue: stripe.Int64(30),
  AutomaticTax: &stripe.CheckoutSessionAutomaticTaxParams{Enabled: stripe.Bool(true)},
}
in, _ := invoice.New(inParams)

// Create an Invoice
inParams := &stripe.InvoiceCreateParams{
  CustomerAccount: stripe.String(customerID),
  CollectionMethod: stripe.String("send_invoice"),
  DaysUntilDue: stripe.Int64(30),
  AutomaticTax: &stripe.CheckoutSessionAutomaticTaxParams{Enabled: stripe.Bool(true)},
}
in, _ := client.V1Invoices.Create(context.TODO(), inParams)
// Create an Invoice Item with the Price, and Customer you want to charge
iiParams := &stripe.InvoiceItemParams{
  Customer: stripe.String(customerID),
  Pricing: &stripe.InvoiceItemPricingParams{
    Price: sstripe.String(priceID),
    },
  Invoice: stripe.String(in.ID)
}
invoiceitem.New(iiParams)
// Create an Invoice Item with the Price and the customer-configured Account you want to charge
iiParams := &stripe.InvoiceItemCreateParams{
  CustomerAccount: stripe.String(customerID),
  Pricing: &stripe.InvoiceItemCreatePricingParams{
    Price: sstripe.String(priceID),
    },
  Invoice: stripe.String(in.ID)
}
client.V1InvoiceItems.Create(context.TODO(), iiParams)
// Send the Invoice
params := &stripe.InvoiceSendInvoiceParams{}
invoice.SendInvoice(in.ID, params)
// Send the Invoice
params := &stripe.InvoiceSendInvoiceParams{}
client.V1Invoices.SendInvoice(context.TODO(), in.ID, params)
```

require github.com/stripe/stripe-go/v84 v84.4.0
"github.com/stripe/stripe-go/v84"
"github.com/stripe/stripe-go/v84/webhook"
stripe.Key = "<\<YOUR\_SECRET\_KEY>>"
import com.stripe.Stripe;
import com.stripe.model.Customer;
import com.stripe.param.CustomerCreateParams;
import com.stripe.StripeClient;
import com.stripe.model.v2.core.Account;
import com.stripe.param.v2.core.AccountCreateParams;
public static void main(String\[] args) {
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
Stripe.apiKey = "<\<YOUR\_SECRET\_KEY>>";

```
    // Simulate data in the DB
    customers.add(new MyCustomer("cus_123456789", "jenny.rosen@example.com"));
    prices.add(new MyPrice("price_123456", "basic"));
    prices.add(new MyPrice("price_789123", "professional"));
}
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
public static StripeClient client = new StripeClient("<<YOUR_SECRET_KEY>>");

public static void main(String[] args) {

    // Simulate data in the DB
    customers.add(new MyCustomer("acct_123456789", "jenny.rosen@example.com"));
    prices.add(new MyPrice("price_123456", "basic"));
    prices.add(new MyPrice("price_789123", "professional"));
}
static void sendInvoice(String email) {
    Customer stripeCustomer;
    // Look up a customer in your database
    String customerId = null;
    for (MyCustomer c : customers) {
        if (c.getEmail().equals(email)) {
            customerId = c.getStripeId();
        }
    }

    // Create a new Customer
    if(customerId == null) {
      CustomerCreateParams params =
        CustomerCreateParams
          .builder()
          .setEmail(email)
          .setDescription("Customer to invoice")
          .build();

      try {
        // Store the Customer ID in your database to use for future purchases
        stripeCustomer = Customer.create(params);
        customers.add(new MyCustomer(stripeCustomer.getId(), email));
        customerId = stripeCustomer.getId();
      } catch(StripeException e) {
        System.out.println(e.getMessage());
      }
    }
static void sendInvoice(String email) {
    Account stripeCustomer;
    // Look up a customer in your database
    String customerId = null;
    for (MyCustomer c : customers) {
        if (c.getEmail().equals(email)) {
            customerId = c.getStripeId();
        }
    }

    // Create a new customer-configured Account
    if(customerId == null) {
      AccountCreateParams params =
        AccountCreateParams
          .builder()
          .setContactEmail(email)
          .setDisplayName("Customer to invoice")
          .setConfiguration(
            AccountCreateParams.Configuration.builder()
            .setCustomer(
              AccountCreateParams.Configuration.Customer.builder()
                .setCapabilities(
                  AccountCreateParams.Configuration.Customer.Capabilities.builder()
                    .setAutomaticIndirectTax(
                      AccountCreateParams.Configuration.Customer.Capabilities.AutomaticIndirectTax.builder()
                        .setRequested(true)
                        .build()
                    )
                    .build()
                )
                  .build()
              )
              .build()
          )
          .build();

      try {
        // Store the Customer ID in your database to use for future purchases
        stripeCustomer = client.v2().core().accounts().create(params);
        customers.add(new MyCustomer(stripeCustomer.getId(), email));
        customerId = stripeCustomer.getId();
      } catch(StripeException e) {
        System.out.println(e.getMessage());
      }
    }
    try {
      // Create an Invoice
      InvoiceCreateParams invoiceParams =
        InvoiceCreateParams
          .builder()
          .setCustomer(customerId)
          .setCollectionMethod(InvoiceCreateParams.CollectionMethod.SEND_INVOICE)
          .setDaysUntilDue(30L)
          .setAutomaticTax(
            InvoiceCreateParams.AutomaticTax.builder().setEnabled(true).build()
          )
          .build();

      Invoice invoice = Invoice.create(invoiceParams);

    try {
      // Create an Invoice
      InvoiceCreateParams invoiceParams =
        InvoiceCreateParams
          .builder()
          .setCustomerAccount(customerId)
          .setCollectionMethod(InvoiceCreateParams.CollectionMethod.SEND_INVOICE)
          .setDaysUntilDue(30L)
          .setAutomaticTax(
            InvoiceCreateParams.AutomaticTax.builder().setEnabled(true).build()
          )
          .build();

      Invoice invoice = client.v1().invoices().create(invoiceParams);

    // Look up the Price ID from your database
    String priceId = null;
    for (MyPrice p : prices) {
        if (p.getTier().equals("basic")) {
            priceId = p.getStripeId();
        }
    }

    // Create an Invoice Item with the Price and Customer you want to charge
    InvoiceItemCreateParams invoiceItemParams =
      InvoiceItemCreateParams.builder()
        .setCustomer(customerId)
        .setPricing(
          InvoiceItemCreateParams.Pricing.builder()
            .setPrice(priceId)
            .build()
        )
        .setInvoice(invoice.getId())
        .build();

    try {
      InvoiceItem.create(invoiceItemParams);
    } catch(StripeException e) {
      System.out.println(e.getMessage());
    }
    // Look up the Price ID from your database
    String priceId = null;
    for (MyPrice p : prices) {
        if (p.getTier().equals("basic")) {
            priceId = p.getStripeId();
        }
    }

    // Create an Invoice Item with the Price and the customer-configured Account you want to charge
    InvoiceItemCreateParams invoiceItemParams =
      InvoiceItemCreateParams.builder()
        .setCustomerAccount(customerId)
        .setPricing(
          InvoiceItemCreateParams.Pricing.builder()
            .setPrice(priceId)
            .build()
        )
        .setInvoice(invoice.getId())
        .build();

    try {
      client.v1().invoiceItems().create(invoiceItemParams);
    } catch(StripeException e) {
      System.out.println(e.getMessage());
    }
      // Send an Invoice
      InvoiceSendInvoiceParams params = InvoiceSendInvoiceParams.builder().build();
      invoice.sendInvoice(params);
      // Send an Invoice
      InvoiceSendInvoiceParams params = InvoiceSendInvoiceParams.builder().build();
      client.v1().invoices().sendInvoice(params);
    Stripe.apiKey = "<<YOUR_SECRET_KEY>>";
```

## Next steps

#### [Use incoming webhooks to get real-time updates](https://docs.stripe.com/webhooks.md)

Listen for events on your Stripe account so your integration can automatically trigger reactions.

#### [Customize invoices](https://docs.stripe.com/invoicing/customize.md)

You can use the [Invoice template](https://dashboard.stripe.com/account/billing/invoice) to customize ​​the content of an invoice. You can also set a customer preferred language and include public information in your [account details](https://dashboard.stripe.com/settings/account/?support_details=true).

#### [Invoicing API](https://docs.stripe.com/api/invoices.md)

Learn more about the Invoicing API.

#### [Stripe CLI](https://docs.stripe.com/stripe-cli.md)

The Stripe CLI has several commands that can help you test your Stripe application beyond invoicing.
