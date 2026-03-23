# Set up your development environment

Get familiar with the Stripe CLI and our server-side SDKs.

Check out our [no-code docs](https://docs.stripe.com/no-code.md), use a [prebuilt solution](https://stripe.com/partners/directory) from our partner directory, or hire a [Stripe-certified expert](https://stripe.com/partners/directory?t=Consulting).

Stripe’s server-side SDKs and command-line interface (CLI) allow you to interact with Stripe’s REST APIs. Start with the Stripe CLI to streamline your development environment and make API calls.

Use the SDKs to avoid writing boilerplate code. To start sending requests from your environment, choose a language to follow a quickstart guide.

> #### Chrome extensions
>
> We recommend you build your payment integration with Stripe (such as [Elements](https://docs.stripe.com/payments/elements.md) or [Checkout](https://docs.stripe.com/payments/checkout.md)) on your own website. Then, set up your Chrome extension to send users to this payment page when they’re ready to complete a purchase.
>
> This method is more secure and easier to maintain than trying to handle payments directly within the extension.

# Ruby

> This is a Ruby for when lang is ruby. View the full page at https://docs.stripe.com/get-started/development-environment?lang=ruby.

In this quickstart, you install the [Stripe CLI](https://docs.stripe.com/stripe-cli.md)—an essential tool that gets you command line access to your Stripe integration. You also install the [Stripe Ruby server-side SDK](https://github.com/stripe/stripe-ruby) to get access to Stripe APIs from applications written in Ruby.

## What you learn

In this quickstart, you’ll learn:

- How to call Stripe APIs without writing a line of code
- How to manage third-party dependencies using a bundler with RubyGems
- How to install the Stripe Ruby SDK v18.4.0
- How to send your first SDK request

## Initial setup

First, [create a Stripe account](https://dashboard.stripe.com/register) or [sign in](https://dashboard.stripe.com/login).

## Set up the Stripe CLI

First, [create a Stripe account](https://dashboard.stripe.com/register) or [sign in](https://dashboard.stripe.com/login).

### Install

From the command-line, use an install script or download and extract a versioned archive file for your operating system to install the CLI.

#### homebrew

To install the Stripe CLI with [homebrew](https://brew.sh/), run:

```bash
brew install stripe/stripe-cli/stripe
```

This command fails if you run it on the Linux version of homebrew, but you can use this alternative or follow the instructions on the Linux tab.

```bash
brew install stripe-cli
```

#### apt

> The Debian build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on Debian and Ubuntu-based distributions:

1. Add Stripe CLI’s GPG key to the apt sources keyring:

```bash
curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public | gpg --dearmor | sudo tee /usr/share/keyrings/stripe.gpg
```

1. Add CLI’s apt repository to the apt sources list:

```bash
echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" | sudo tee -a /etc/apt/sources.list.d/stripe.list
```

1. Update the package list:

```bash
sudo apt update
```

1. Install the CLI:

```bash
sudo apt install stripe
```

#### yum

> The RPM build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on RPM-based distributions:

1. Add CLI’s yum repository to the yum sources list:

```bash
echo -e "[Stripe]\nname=stripe\nbaseurl=https://packages.stripe.dev/stripe-cli-rpm-local/\nenabled=1\ngpgcheck=0" >> /etc/yum.repos.d/stripe.repo
```

1. Install the CLI:

```bash
sudo yum install stripe
```

#### Scoop

To install the Stripe CLI with [Scoop](https://scoop.sh/), run:

```bash
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
```

```bash
scoop install stripe
```

#### macOS

To install the Stripe CLI on macOS without homebrew:

1. Download the latest `mac-os` tar.gz file of your cpu architecture type from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_[X.X.X]_mac-os_[ARCH_TYPE].tar.gz`.

Optionally, install the binary in a location where you can execute it globally (for example, `/usr/local/bin`).

#### Linux

To install the Stripe CLI on Linux without a package manager:

1. Download the latest `linux` tar.gz file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_X.X.X_linux_x86_64.tar.gz`.
3. Move `./stripe` to your execution path.

#### Windows

To install the Stripe CLI on Windows without Scoop:

1. Download the latest `windows` zip file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the `stripe_X.X.X_windows_x86_64.zip` file.
3. Add the path to the unzipped `stripe.exe` file to your `Path` environment variable. To learn how to update environment variables, see the [Microsoft PowerShell documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3#saving-changes-to-environment-variables).

> Windows anti-virus scanners occasionally flag the Stripe CLI as unsafe. This is likely a false positive. For more information, see [issue #692](https://github.com/stripe/stripe-cli/issues/692) in the GitHub repository.

1. Run the unzipped `.exe` file.

#### Docker

The Stripe CLI is also available as a [Docker image](https://hub.docker.com/r/stripe/stripe-cli). To install the latest version, run:

```bash
docker run --rm -it stripe/stripe-cli:latest
```

### Authenticate

Log in and authenticate your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) to generate a set of restricted keys. To learn more, see [Stripe CLI keys and permissions](https://docs.stripe.com/stripe-cli/keys.md).

```bash
  stripe login
```

Press **Enter** on your keyboard to complete the authentication process in your browser.

```bash
Your pairing code is: enjoy-enough-outwit-win
This pairing code verifies your authentication with Stripe.
Press Enter to open the browser or visit https://dashboard.stripe.com/stripecli/confirm_auth?t=THQdJfL3x12udFkNorJL8OF1iFlN8Az1 (^C to quit)
```

### Confirm setup

Now that you’ve installed the CLI, you can make a single API request to [Create a product](https://docs.stripe.com/api/products/create.md).

#### bash

```bash
stripe products create \
--name="My First Product" \
--description="Created with the Stripe CLI"
```

Look for the product identifier (in `id`) in the response object. Save it for the next step.

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "prod_LTenIrmp8Q67sa", // The identifier looks like this.
  "object": "product",
  "active": true,
  "attributes": [],
  "created": 1668198126,
  "default_price": null,
  "description": "Created with the Stripe CLI",
  "identifiers": {},
  "images": [],
  "livemode": false,
  "metadata": {},
  "name": "My First Product",
  "package_dimensions": null,
  "price": null,
  "product_class": null,
  "shippable": null,
  "sku": "my-first-product-10",
  "statement_descriptor": null,
  "tax_code": null,
  "type": "service",
  "unit_label": null,
  "updated": 1668198126,
  "url": null
}
```

Next, call [Create a price](https://docs.stripe.com/api/prices/create.md) to attach a price of 30 USD. Swap the placeholder in `product` with your product identifier (for example, `prod_LTenIrmp8Q67sa`).

#### bash

```bash
stripe prices create \
  --unit-amount=3000 \
  --currency=usd \
  --product="{{PRODUCT_ID}}"
```

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "price_1KzlAMJJDeE9fu01WMJJr79o", // The identifier looks like this.
  "object": "price",
  "active": true,
  "billing_scheme": "per_unit",
  "created": 1652636348,
  "currency": "usd",
  "livemode": false,
  "lookup_key": null,
  "metadata": {},
  "nickname": null,
  "product": "prod_Lh9iTGZhb2mcBy",
  "recurring": null,
  "tax_behavior": "unspecified",
  "tiers_mode": null,
  "transform_quantity": null,
  "type": "one_time",
  "unit_amount": 3000,
  "unit_amount_decimal": "3000"
}
```

## Manage third-party dependencies

We recommend managing third-party dependencies using the [RubyGems](http://rubygems.org/) command-line tool, which allows you to add new libraries and include them in your Ruby projects. Check whether RubyGems is installed:

### Install RubyGems

#### Install RubyGems

```bash
gem --version
```

If you get `gem: command not found`, [download RubyGems](http://rubygems.org/pages/download) from their downloads page.

## Install the Ruby server-side SDK

The latest version of the Stripe Ruby server-side SDK is v18.4.0. It supports Ruby versions 2.3+.

Check your Ruby version:

```bash
ruby -v
```

### Install the library

[Create a gem file](https://guides.rubygems.org/make-your-own-gem/) and install the generated gem using a bundler with [RubyGems](https://rubygems.org/).

Add the latest version of the [Stripe gem](https://rubygems.org/gems/stripe) to a project:

```bash
bundle add stripe
```

Install the required gems from your specified sources:

```bash
bundle install
```

### Installation alternatives

**Add as dependency**—Add the latest version of the library as a gem dependency:

```ruby
source 'https://rubygems.org'

gem 'rails'
gem 'stripe'
```

**Global installation**—Install the library globally with [RubyGems](https://rubygems.org/):

```bash
gem install stripe
```

**Manual installation**—[Build the gem from source](https://github.com/stripe/stripe-ruby), and then install the library by running:

```bash
gem build stripe.gemspec
```

## Run your first SDK request

Now that you have the Ruby SDK installed, you can create a subscription [Product](https://docs.stripe.com/api/products/create.md) and attach a [Price](https://docs.stripe.com/api/prices/create.md) with a couple API requests. We’re using the product identifier returned in the response to create the price in this example.

> This sample uses the default keys of your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) for your *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment. Only you can see these values.

#### Create a product and price

```ruby
require 'rubygems'
require 'stripe'
Stripe.api_key = "sk_test_BQokikJOvBiI2HlWgH4olfQ2"

starter_subscription = Stripe::Product.create(
  name: 'Starter Subscription',
  description: '$12/Month subscription',
)

starter_subscription_price = Stripe::Price.create(
  currency: 'usd',
  unit_amount: 1200,
  recurring: {interval: 'month'},
  product: starter_subscription['id'],
)

puts "Success! Here is your starter subscription product id: #{starter_subscription.id}"
puts "Success! Here is your starter subscription price id: #{starter_subscription_price.id}"
```

Save the file as `create_price.rb`. From the command line, `cd` to the directory containing the file you just saved and run:

#### create\_price.rb

```bash
ruby create_price.rb
```

If everything worked, the command line shows the following response. Save these identifiers so you can use them while building your integration.

#### bash

```bash
Success! Here is your starter subscription product id: prod_0KxBDl589O8KAxCG1alJgiA6
Success! Here is your starter subscription price id: price_0KxBDm589O8KAxCGMgG7scjb
```

## See also

This wraps up the quickstart. See the links below for a few different ways to process a payment for the product you just created.

- [Create a payment link](https://docs.stripe.com/payment-links.md)
- [Stripe-hosted page](https://docs.stripe.com/checkout/quickstart.md)
- [Advanced integration](https://docs.stripe.com/payments/quickstart-checkout-sessions.md)

# Python

> This is a Python for when lang is python. View the full page at https://docs.stripe.com/get-started/development-environment?lang=python.

In this quickstart, you install the [Stripe CLI](https://docs.stripe.com/stripe-cli.md)—an essential tool that gets you command line access to your Stripe integration. You also install the [Stripe Python server-side SDK](https://github.com/stripe/stripe-python) to get access to Stripe APIs from applications written in Python.

## What you learn

In this quickstart, you’ll learn:

- How to call Stripe APIs without writing a line of code
- How to manage third-party dependencies using a virtual environment and the pip package manager
- How to install the latest Stripe Python SDK v14.4.0
- How to send your first SDK request

## Initial setup

First, [create a Stripe account](https://dashboard.stripe.com/register) or [sign in](https://dashboard.stripe.com/login).

## Set up the Stripe CLI

### Install

From the command-line, use an install script or download and extract a versioned archive file for your operating system to install the CLI.

#### homebrew

To install the Stripe CLI with [homebrew](https://brew.sh/), run:

```bash
brew install stripe/stripe-cli/stripe
```

This command fails if you run it on the Linux version of homebrew, but you can use this alternative or follow the instructions on the Linux tab.

```bash
brew install stripe-cli
```

#### apt

> The Debian build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on Debian and Ubuntu-based distributions:

1. Add Stripe CLI’s GPG key to the apt sources keyring:

```bash
curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public | gpg --dearmor | sudo tee /usr/share/keyrings/stripe.gpg
```

1. Add CLI’s apt repository to the apt sources list:

```bash
echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" | sudo tee -a /etc/apt/sources.list.d/stripe.list
```

1. Update the package list:

```bash
sudo apt update
```

1. Install the CLI:

```bash
sudo apt install stripe
```

#### yum

> The RPM build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on RPM-based distributions:

1. Add CLI’s yum repository to the yum sources list:

```bash
echo -e "[Stripe]\nname=stripe\nbaseurl=https://packages.stripe.dev/stripe-cli-rpm-local/\nenabled=1\ngpgcheck=0" >> /etc/yum.repos.d/stripe.repo
```

1. Install the CLI:

```bash
sudo yum install stripe
```

#### Scoop

To install the Stripe CLI with [Scoop](https://scoop.sh/), run:

```bash
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
```

```bash
scoop install stripe
```

#### macOS

To install the Stripe CLI on macOS without homebrew:

1. Download the latest `mac-os` tar.gz file of your cpu architecture type from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_[X.X.X]_mac-os_[ARCH_TYPE].tar.gz`.

Optionally, install the binary in a location where you can execute it globally (for example, `/usr/local/bin`).

#### Linux

To install the Stripe CLI on Linux without a package manager:

1. Download the latest `linux` tar.gz file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_X.X.X_linux_x86_64.tar.gz`.
3. Move `./stripe` to your execution path.

#### Windows

To install the Stripe CLI on Windows without Scoop:

1. Download the latest `windows` zip file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the `stripe_X.X.X_windows_x86_64.zip` file.
3. Add the path to the unzipped `stripe.exe` file to your `Path` environment variable. To learn how to update environment variables, see the [Microsoft PowerShell documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3#saving-changes-to-environment-variables).

> Windows anti-virus scanners occasionally flag the Stripe CLI as unsafe. This is likely a false positive. For more information, see [issue #692](https://github.com/stripe/stripe-cli/issues/692) in the GitHub repository.

1. Run the unzipped `.exe` file.

#### Docker

The Stripe CLI is also available as a [Docker image](https://hub.docker.com/r/stripe/stripe-cli). To install the latest version, run:

```bash
docker run --rm -it stripe/stripe-cli:latest
```

### Authenticate

Log in and authenticate your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) to generate a set of restricted keys. To learn more, see [Stripe CLI keys and permissions](https://docs.stripe.com/stripe-cli/keys.md).

```bash
  stripe login
```

Press **Enter** on your keyboard to complete the authentication process in your browser.

```bash
Your pairing code is: enjoy-enough-outwit-win
This pairing code verifies your authentication with Stripe.
Press Enter to open the browser or visit https://dashboard.stripe.com/stripecli/confirm_auth?t=THQdJfL3x12udFkNorJL8OF1iFlN8Az1 (^C to quit)
```

### Confirm setup

Now that you’ve installed the CLI, you can make a single API request to [Create a product](https://docs.stripe.com/api/products/create.md).

#### bash

```bash
stripe products create \
--name="My First Product" \
--description="Created with the Stripe CLI"
```

Look for the product identifier (in `id`) in the response object. Save it for the next step.

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "prod_LTenIrmp8Q67sa", // The identifier looks like this.
  "object": "product",
  "active": true,
  "attributes": [],
  "created": 1668198126,
  "default_price": null,
  "description": "Created with the Stripe CLI",
  "identifiers": {},
  "images": [],
  "livemode": false,
  "metadata": {},
  "name": "My First Product",
  "package_dimensions": null,
  "price": null,
  "product_class": null,
  "shippable": null,
  "sku": "my-first-product-10",
  "statement_descriptor": null,
  "tax_code": null,
  "type": "service",
  "unit_label": null,
  "updated": 1668198126,
  "url": null
}
```

Next, call [Create a price](https://docs.stripe.com/api/prices/create.md) to attach a price of 30 USD. Swap the placeholder in `product` with your product identifier (for example, `prod_LTenIrmp8Q67sa`).

#### bash

```bash
stripe prices create \
  --unit-amount=3000 \
  --currency=usd \
  --product="{{PRODUCT_ID}}"
```

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "price_1KzlAMJJDeE9fu01WMJJr79o", // The identifier looks like this.
  "object": "price",
  "active": true,
  "billing_scheme": "per_unit",
  "created": 1652636348,
  "currency": "usd",
  "livemode": false,
  "lookup_key": null,
  "metadata": {},
  "nickname": null,
  "product": "prod_Lh9iTGZhb2mcBy",
  "recurring": null,
  "tax_behavior": "unspecified",
  "tiers_mode": null,
  "transform_quantity": null,
  "type": "one_time",
  "unit_amount": 3000,
  "unit_amount_decimal": "3000"
}
```

## Manage third-party dependencies

We recommend managing third-party dependencies using the [venv](https://docs.python.org/3/tutorial/venv.html) module, which allows you to add new libraries and include them in your Python 3 projects.

### On Windows (cmd.exe):

#### On Windows (cmd.exe)

```bash
python3 -m venv env
.\env\Scripts\activate.bat
```

### On GNU Linux or MacOS (bash):

#### On GNU/Linux or MacOS (bash)

```bash
python3 -m venv env
source env/bin/activate
```

## Install the Python server-side SDK

The latest version of the Stripe Python server-side SDK is v14.4.0. It supports Python versions 3.6+.

Check your Python version:

```bash
python3 --version
```

### Install the library

Install the library from [PyPi](http://pypi.python.org/pypi/stripe/), a package manager for Python:

```bash
pip3 install --upgrade stripe
```

Next, specify the following version in your requirements.txt file:

```txt
stripe>=14.4.0
```

### Installation alternatives

**Manual installation**—[Download the source code](https://github.com/stripe/stripe-python) for the SDK, and install the library by running:

```bash
python3 setup.py install
```

## Run your first SDK request

Now that you have the Python SDK installed, you can create a subscription [Product](https://docs.stripe.com/api/products/create.md) and attach a [Price](https://docs.stripe.com/api/prices/create.md) with a couple API requests. We’re using the product identifier returned in the response to create the price in this example.

> This sample uses the default keys of your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) for your *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment. Only you can see these values.

#### Create a product and price

```python
import stripe
stripe.api_key = "sk_test_BQokikJOvBiI2HlWgH4olfQ2"

starter_subscription = stripe.Product.create(
  name="Starter Subscription",
  description="$12/Month subscription",
)

starter_subscription_price = stripe.Price.create(
  unit_amount=1200,
  currency="usd",
  recurring={"interval": "month"},
  product=starter_subscription['id'],
)

# Save these identifiers
print(f"Success! Here is your starter subscription product id: {starter_subscription.id}")
print(f"Success! Here is your starter subscription price id: {starter_subscription_price.id}")
```

Save the file as `create_price.py`. From the command line, `cd` to the directory containing the file you just saved and run:

#### create\_price.py

```bash
python3 create_price.py
```

If everything worked, the command line shows the following response. Save these identifiers so you can use them while building your integration.

#### bash

```bash
Success! Here is your starter subscription product id: prod_0KxBDl589O8KAxCG1alJgiA6
Success! Here is your starter subscription price id: price_0KxBDm589O8KAxCGMgG7scjb
```

## See also

This wraps up the quickstart. See the links below for a few different ways to process a payment for the product you just created.

- [Create a payment link](https://docs.stripe.com/payment-links.md)
- [Stripe-hosted page](https://docs.stripe.com/checkout/quickstart.md)
- [Advanced integration](https://docs.stripe.com/payments/quickstart-checkout-sessions.md)

# Go

> This is a Go for when lang is go. View the full page at https://docs.stripe.com/get-started/development-environment?lang=go.

In this quickstart, you install the [Stripe CLI](https://docs.stripe.com/stripe-cli.md)—an essential tool that gets you command line access to your Stripe integration. You also install the [Stripe Go server-side SDK](https://github.com/stripe/stripe-go) to get access to Stripe APIs from applications written in Go.

## What you learn

In this quickstart, you’ll learn:

- How to call Stripe APIs without writing a line of code
- How to manage third-party dependencies using Go modules
- How to install the latest Stripe Go SDK v84.4.0
- How to send your first SDK request

## Initial setup

First, [create a Stripe account](https://dashboard.stripe.com/register) or [sign in](https://dashboard.stripe.com/login).

## Set up the Stripe CLI

### Install

From the command-line, use an install script or download and extract a versioned archive file for your operating system to install the CLI.

#### homebrew

To install the Stripe CLI with [homebrew](https://brew.sh/), run:

```bash
brew install stripe/stripe-cli/stripe
```

This command fails if you run it on the Linux version of homebrew, but you can use this alternative or follow the instructions on the Linux tab.

```bash
brew install stripe-cli
```

#### apt

> The Debian build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on Debian and Ubuntu-based distributions:

1. Add Stripe CLI’s GPG key to the apt sources keyring:

```bash
curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public | gpg --dearmor | sudo tee /usr/share/keyrings/stripe.gpg
```

1. Add CLI’s apt repository to the apt sources list:

```bash
echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" | sudo tee -a /etc/apt/sources.list.d/stripe.list
```

1. Update the package list:

```bash
sudo apt update
```

1. Install the CLI:

```bash
sudo apt install stripe
```

#### yum

> The RPM build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on RPM-based distributions:

1. Add CLI’s yum repository to the yum sources list:

```bash
echo -e "[Stripe]\nname=stripe\nbaseurl=https://packages.stripe.dev/stripe-cli-rpm-local/\nenabled=1\ngpgcheck=0" >> /etc/yum.repos.d/stripe.repo
```

1. Install the CLI:

```bash
sudo yum install stripe
```

#### Scoop

To install the Stripe CLI with [Scoop](https://scoop.sh/), run:

```bash
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
```

```bash
scoop install stripe
```

#### macOS

To install the Stripe CLI on macOS without homebrew:

1. Download the latest `mac-os` tar.gz file of your cpu architecture type from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_[X.X.X]_mac-os_[ARCH_TYPE].tar.gz`.

Optionally, install the binary in a location where you can execute it globally (for example, `/usr/local/bin`).

#### Linux

To install the Stripe CLI on Linux without a package manager:

1. Download the latest `linux` tar.gz file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_X.X.X_linux_x86_64.tar.gz`.
3. Move `./stripe` to your execution path.

#### Windows

To install the Stripe CLI on Windows without Scoop:

1. Download the latest `windows` zip file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the `stripe_X.X.X_windows_x86_64.zip` file.
3. Add the path to the unzipped `stripe.exe` file to your `Path` environment variable. To learn how to update environment variables, see the [Microsoft PowerShell documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3#saving-changes-to-environment-variables).

> Windows anti-virus scanners occasionally flag the Stripe CLI as unsafe. This is likely a false positive. For more information, see [issue #692](https://github.com/stripe/stripe-cli/issues/692) in the GitHub repository.

1. Run the unzipped `.exe` file.

#### Docker

The Stripe CLI is also available as a [Docker image](https://hub.docker.com/r/stripe/stripe-cli). To install the latest version, run:

```bash
docker run --rm -it stripe/stripe-cli:latest
```

### Authenticate

Log in and authenticate your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) to generate a set of restricted keys. To learn more, see [Stripe CLI keys and permissions](https://docs.stripe.com/stripe-cli/keys.md).

```bash
  stripe login
```

Press **Enter** on your keyboard to complete the authentication process in your browser.

```bash
Your pairing code is: enjoy-enough-outwit-win
This pairing code verifies your authentication with Stripe.
Press Enter to open the browser or visit https://dashboard.stripe.com/stripecli/confirm_auth?t=THQdJfL3x12udFkNorJL8OF1iFlN8Az1 (^C to quit)
```

### Confirm setup

Now that you’ve installed the CLI, you can make a single API request to [Create a product](https://docs.stripe.com/api/products/create.md).

#### bash

```bash
stripe products create \
--name="My First Product" \
--description="Created with the Stripe CLI"
```

Look for the product identifier (in `id`) in the response object. Save it for the next step.

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "prod_LTenIrmp8Q67sa", // The identifier looks like this.
  "object": "product",
  "active": true,
  "attributes": [],
  "created": 1668198126,
  "default_price": null,
  "description": "Created with the Stripe CLI",
  "identifiers": {},
  "images": [],
  "livemode": false,
  "metadata": {},
  "name": "My First Product",
  "package_dimensions": null,
  "price": null,
  "product_class": null,
  "shippable": null,
  "sku": "my-first-product-10",
  "statement_descriptor": null,
  "tax_code": null,
  "type": "service",
  "unit_label": null,
  "updated": 1668198126,
  "url": null
}
```

Next, call [Create a price](https://docs.stripe.com/api/prices/create.md) to attach a price of 30 USD. Swap the placeholder in `product` with your product identifier (for example, `prod_LTenIrmp8Q67sa`).

#### bash

```bash
stripe prices create \
  --unit-amount=3000 \
  --currency=usd \
  --product="{{PRODUCT_ID}}"
```

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "price_1KzlAMJJDeE9fu01WMJJr79o", // The identifier looks like this.
  "object": "price",
  "active": true,
  "billing_scheme": "per_unit",
  "created": 1652636348,
  "currency": "usd",
  "livemode": false,
  "lookup_key": null,
  "metadata": {},
  "nickname": null,
  "product": "prod_Lh9iTGZhb2mcBy",
  "recurring": null,
  "tax_behavior": "unspecified",
  "tiers_mode": null,
  "transform_quantity": null,
  "type": "one_time",
  "unit_amount": 3000,
  "unit_amount_decimal": "3000"
}
```

## Manage third-party dependencies

We recommend managing third-party dependencies using [Go modules](https://go.dev/blog/using-go-modules), which allows you to add new libraries and include them in your Go projects.

### Initialize Go

If you’re starting from scratch in a new directory, you first need to create a `go.mod` file for tracking dependencies. For example:

#### Initialize Go

```bash
go mod init stripe-example
```

## Install the Go server-side SDK

The latest version of the Stripe Go server-side SDK is v84.4.0. It supports Go versions 1.15+.

### Install the library

Install the library with [Go modules](https://go.dev/blog/using-go-modules), a package manager for Go:

```bash
go get github.com/stripe/stripe-go/v84
```

After you install the library with Go modules to a *new* project, the library is automatically added as a dependency in your project’s go.mod file. For example:

```go.mod
module stripe-example

go 1.18

require github.com/stripe/stripe-go/v84 84.4.0 // indirect
```

### Synchronize dependencies

To keep your managed dependency set tidy for an *existing* project, run the following command to [sync your code’s dependencies](https://go.dev/doc/modules/managing-dependencies).

```bash
go mod tidy
```

## Run your first SDK request

Now that you have the Go SDK installed, you can create a subscription [Product](https://docs.stripe.com/api/products/create.md) and attach a [Price](https://docs.stripe.com/api/prices/create.md) with a couple API requests. We’re using the product identifier returned in the response to create the price in this example.

> This sample uses the default keys of your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) for your *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment. Only you can see these values.

#### Create a product and price

```go
package main

import (
  "fmt"
  "github.com/stripe/stripe-go/v84"
  "github.com/stripe/stripe-go/v84/product"
  "github.com/stripe/stripe-go/v84/price"
)

func main() {
  stripe.Key = "sk_test_BQokikJOvBiI2HlWgH4olfQ2"

	product_params := &stripe.ProductParams{
		Name:        stripe.String("Starter Subscription"),
		Description: stripe.String("$12/Month subscription"),
	}
	starter_product, _ := product.New(product_params)

	price_params := &stripe.PriceParams{
		Currency: stripe.String(string(stripe.CurrencyUSD)),
		Product:  stripe.String(starter_product.ID),
		Recurring: &stripe.PriceRecurringParams{
			Interval: stripe.String(string(stripe.PriceRecurringIntervalMonth)),
		},
		UnitAmount: stripe.Int64(1200),
	}
	starter_price, _ := price.New(price_params)

	fmt.Println("Success! Here is your starter subscription product id: " + starter_product.ID)
	fmt.Println("Success! Here is your starter subscription price id: " + starter_price.ID)
}
```

Save the file as `create_price.go`. From the command line, `cd` to the directory containing the file you just saved and run:

#### create\_price.rb

```bash
go run create_price.go
```

If everything worked, the command line shows the following response. Save these identifiers so you can use them while building your integration.

#### bash

```bash
Success! Here is your starter subscription product id: prod_0KxBDl589O8KAxCG1alJgiA6
Success! Here is your starter subscription price id: price_0KxBDm589O8KAxCGMgG7scjb
```

## See also

This wraps up the quickstart. See the links below for a few different ways to process a payment for the product you just created.

- [Create a payment link](https://docs.stripe.com/payment-links.md)
- [Stripe-hosted page](https://docs.stripe.com/checkout/quickstart.md)
- [Advanced integration](https://docs.stripe.com/payments/quickstart-checkout-sessions.md)

# Java

> This is a Java for when lang is java. View the full page at https://docs.stripe.com/get-started/development-environment?lang=java.

In this quickstart, you install the [Stripe CLI](https://docs.stripe.com/stripe-cli.md)—an essential tool that gets you command line access to your Stripe integration. You also install the [Stripe Java server-side SDK](https://github.com/stripe/stripe-java) to get access to Stripe APIs from applications written in Java.

## What you learn

In this quickstart, you’ll learn:

- How to call Stripe APIs without writing a line of code
- How to manage third-party dependencies using Maven or Gradle
- How to install the latest Stripe Java SDK v31.4.0
- How to send your first SDK request

## Initial setup

First, [create a Stripe account](https://dashboard.stripe.com/register) or [sign in](https://dashboard.stripe.com/login).

## Set up the Stripe CLI

### Install

From the command-line, use an install script or download and extract a versioned archive file for your operating system to install the CLI.

#### homebrew

To install the Stripe CLI with [homebrew](https://brew.sh/), run:

```bash
brew install stripe/stripe-cli/stripe
```

This command fails if you run it on the Linux version of homebrew, but you can use this alternative or follow the instructions on the Linux tab.

```bash
brew install stripe-cli
```

#### apt

> The Debian build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on Debian and Ubuntu-based distributions:

1. Add Stripe CLI’s GPG key to the apt sources keyring:

```bash
curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public | gpg --dearmor | sudo tee /usr/share/keyrings/stripe.gpg
```

1. Add CLI’s apt repository to the apt sources list:

```bash
echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" | sudo tee -a /etc/apt/sources.list.d/stripe.list
```

1. Update the package list:

```bash
sudo apt update
```

1. Install the CLI:

```bash
sudo apt install stripe
```

#### yum

> The RPM build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on RPM-based distributions:

1. Add CLI’s yum repository to the yum sources list:

```bash
echo -e "[Stripe]\nname=stripe\nbaseurl=https://packages.stripe.dev/stripe-cli-rpm-local/\nenabled=1\ngpgcheck=0" >> /etc/yum.repos.d/stripe.repo
```

1. Install the CLI:

```bash
sudo yum install stripe
```

#### Scoop

To install the Stripe CLI with [Scoop](https://scoop.sh/), run:

```bash
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
```

```bash
scoop install stripe
```

#### macOS

To install the Stripe CLI on macOS without homebrew:

1. Download the latest `mac-os` tar.gz file of your cpu architecture type from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_[X.X.X]_mac-os_[ARCH_TYPE].tar.gz`.

Optionally, install the binary in a location where you can execute it globally (for example, `/usr/local/bin`).

#### Linux

To install the Stripe CLI on Linux without a package manager:

1. Download the latest `linux` tar.gz file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_X.X.X_linux_x86_64.tar.gz`.
3. Move `./stripe` to your execution path.

#### Windows

To install the Stripe CLI on Windows without Scoop:

1. Download the latest `windows` zip file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the `stripe_X.X.X_windows_x86_64.zip` file.
3. Add the path to the unzipped `stripe.exe` file to your `Path` environment variable. To learn how to update environment variables, see the [Microsoft PowerShell documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3#saving-changes-to-environment-variables).

> Windows anti-virus scanners occasionally flag the Stripe CLI as unsafe. This is likely a false positive. For more information, see [issue #692](https://github.com/stripe/stripe-cli/issues/692) in the GitHub repository.

1. Run the unzipped `.exe` file.

#### Docker

The Stripe CLI is also available as a [Docker image](https://hub.docker.com/r/stripe/stripe-cli). To install the latest version, run:

```bash
docker run --rm -it stripe/stripe-cli:latest
```

### Authenticate

Log in and authenticate your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) to generate a set of restricted keys. To learn more, see [Stripe CLI keys and permissions](https://docs.stripe.com/stripe-cli/keys.md).

```bash
  stripe login
```

Press **Enter** on your keyboard to complete the authentication process in your browser.

```bash
Your pairing code is: enjoy-enough-outwit-win
This pairing code verifies your authentication with Stripe.
Press Enter to open the browser or visit https://dashboard.stripe.com/stripecli/confirm_auth?t=THQdJfL3x12udFkNorJL8OF1iFlN8Az1 (^C to quit)
```

### Confirm setup

Now that you’ve installed the CLI, you can make a single API request to [Create a product](https://docs.stripe.com/api/products/create.md).

#### bash

```bash
stripe products create \
--name="My First Product" \
--description="Created with the Stripe CLI"
```

Look for the product identifier (in `id`) in the response object. Save it for the next step.

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "prod_LTenIrmp8Q67sa", // The identifier looks like this.
  "object": "product",
  "active": true,
  "attributes": [],
  "created": 1668198126,
  "default_price": null,
  "description": "Created with the Stripe CLI",
  "identifiers": {},
  "images": [],
  "livemode": false,
  "metadata": {},
  "name": "My First Product",
  "package_dimensions": null,
  "price": null,
  "product_class": null,
  "shippable": null,
  "sku": "my-first-product-10",
  "statement_descriptor": null,
  "tax_code": null,
  "type": "service",
  "unit_label": null,
  "updated": 1668198126,
  "url": null
}
```

Next, call [Create a price](https://docs.stripe.com/api/prices/create.md) to attach a price of 30 USD. Swap the placeholder in `product` with your product identifier (for example, `prod_LTenIrmp8Q67sa`).

#### bash

```bash
stripe prices create \
  --unit-amount=3000 \
  --currency=usd \
  --product="{{PRODUCT_ID}}"
```

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "price_1KzlAMJJDeE9fu01WMJJr79o", // The identifier looks like this.
  "object": "price",
  "active": true,
  "billing_scheme": "per_unit",
  "created": 1652636348,
  "currency": "usd",
  "livemode": false,
  "lookup_key": null,
  "metadata": {},
  "nickname": null,
  "product": "prod_Lh9iTGZhb2mcBy",
  "recurring": null,
  "tax_behavior": "unspecified",
  "tiers_mode": null,
  "transform_quantity": null,
  "type": "one_time",
  "unit_amount": 3000,
  "unit_amount_decimal": "3000"
}
```

## Manage third-party dependencies

We recommend managing third-party dependencies using [Maven](https://maven.apache.org/guides/getting-started/index.html) or [Gradle](https://docs.gradle.org), which help you add new libraries and include them in your Java projects.

### Initialize a project

- To create a project with **Maven**, see [How do I make my first Maven project?](https://maven.apache.org/guides/getting-started/index.html#How_do_I_make_my_first_Maven_project).
- To create a project with **Gradle**, see [Building Java Applications Sample](https://docs.gradle.org/current/samples/sample_building_java_applications.html).

## Install the Java server-side SDK

The latest version of the Stripe Java server-side SDK is v31.4.0. It supports Java versions 1.8+.

Check your Java version:

```bash
java -version
```

### Install the library

- With **Maven**, place the following in your project’s pom.xml file:

```xml
<dependency>
  <groupId>com.stripe</groupId>
  <artifactId>stripe-java</artifactId>
  <version>31.4.0</version>
</dependency>
```

- With **Gradle**, paste the next line inside the dependencies block of your build.gradle file:

```groovy
implementation 'com.stripe:stripe-java:31.4.0'
```

### Installation alternatives

**Manual installation**—You can manually install stripe-java with the following JARs: [Download the Stripe JAR (.jar)](https://search.maven.org/remote_content?g=com.stripe\&a=stripe-java\&v=LATEST).

[Download the Gson JAR (.jar)](https://repo1.maven.org/maven2/com/google/code/gson/gson/2.8.9/gson-2.8.9.jar) for [Google Gson](https://github.com/google/gson).

**Proguard**—If you’re using ProGuard, be sure to exclude the library by adding the following to your `proguard.cfg` file:

```proguard
-keep class com.stripe.** { *; }
```

## Run your first SDK request

Now that you have the Java SDK installed, you can create a subscription [Product](https://docs.stripe.com/api/products/create.md) and attach a [Price](https://docs.stripe.com/api/prices/create.md) with a couple API requests. We’re using the product identifier returned in the response to create the price in this example.

> This sample uses the default keys of your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) for your *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment. Only you can see these values.

#### Create a product and price

```java
package com.stripe.sample;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Product;
import com.stripe.param.ProductCreateParams;
import com.stripe.param.PriceCreateParams;
import com.stripe.model.Price;

public class Server {
    public static void main(String[] args) throws StripeException {
        Stripe.apiKey = "sk_test_BQokikJOvBiI2HlWgH4olfQ2";


        ProductCreateParams productParams =
            ProductCreateParams.builder()
                .setName("Starter Subscription")
                .setDescription("$12/Month subscription")
                .build();
        Product product = Product.create(productParams);
        System.out.println("Success! Here is your starter subscription product id: " + product.getId());

        PriceCreateParams params =
            PriceCreateParams
                .builder()
                .setProduct(product.getId())
                .setCurrency("usd")
                .setUnitAmount(1200L)
                .setRecurring(
                    PriceCreateParams.Recurring
                        .builder()
                        .setInterval(PriceCreateParams.Recurring.Interval.MONTH)
                        .build())
                .build();
        Price price = Price.create(params);
        System.out.println("Success! Here is your starter subscription price id: " + price.getId());
    }
}
```

Save the file as `CreatePrice.java`. From the project in your IDE for Maven or Gradle, run the sample. For example: `Run 'CreatePrice.main()'`.

If everything worked, the command line shows the following response. Save these identifiers so you can use them while building your integration.

#### bash

```bash
Success! Here is your starter subscription product id: prod_0KxBDl589O8KAxCG1alJgiA6
Success! Here is your starter subscription price id: price_0KxBDm589O8KAxCGMgG7scjb
```

## See also

This wraps up the quickstart. See the links below for a few different ways to process a payment for the product you just created.

- [Create a payment link](https://docs.stripe.com/payment-links.md)
- [Stripe-hosted page](https://docs.stripe.com/checkout/quickstart.md)
- [Advanced integration](https://docs.stripe.com/payments/quickstart-checkout-sessions.md)

# Node.js

> This is a Node.js for when lang is node. View the full page at https://docs.stripe.com/get-started/development-environment?lang=node.

In this quickstart, you install the [Stripe CLI](https://docs.stripe.com/stripe-cli.md)—an essential tool that gets you command line access to your Stripe integration. You also install the [Stripe Node.js server-side SDK](https://github.com/stripe/stripe-node) to get access to Stripe APIs from applications written in Node.js.

## What you learn

In this quickstart, you’ll learn:

- How to call Stripe APIs without writing a line of code
- How to manage third-party dependencies using the npm or yarn package manager
- How to install the latest Stripe Node SDK v20.4.0
- How to send your first SDK request

## Initial setup

First, [create a Stripe account](https://dashboard.stripe.com/register) or [sign in](https://dashboard.stripe.com/login).

## Set up the Stripe CLI

### Install

From the command-line, use an install script or download and extract a versioned archive file for your operating system to install the CLI.

#### homebrew

To install the Stripe CLI with [homebrew](https://brew.sh/), run:

```bash
brew install stripe/stripe-cli/stripe
```

This command fails if you run it on the Linux version of homebrew, but you can use this alternative or follow the instructions on the Linux tab.

```bash
brew install stripe-cli
```

#### apt

> The Debian build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on Debian and Ubuntu-based distributions:

1. Add Stripe CLI’s GPG key to the apt sources keyring:

```bash
curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public | gpg --dearmor | sudo tee /usr/share/keyrings/stripe.gpg
```

1. Add CLI’s apt repository to the apt sources list:

```bash
echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" | sudo tee -a /etc/apt/sources.list.d/stripe.list
```

1. Update the package list:

```bash
sudo apt update
```

1. Install the CLI:

```bash
sudo apt install stripe
```

#### yum

> The RPM build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on RPM-based distributions:

1. Add CLI’s yum repository to the yum sources list:

```bash
echo -e "[Stripe]\nname=stripe\nbaseurl=https://packages.stripe.dev/stripe-cli-rpm-local/\nenabled=1\ngpgcheck=0" >> /etc/yum.repos.d/stripe.repo
```

1. Install the CLI:

```bash
sudo yum install stripe
```

#### Scoop

To install the Stripe CLI with [Scoop](https://scoop.sh/), run:

```bash
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
```

```bash
scoop install stripe
```

#### macOS

To install the Stripe CLI on macOS without homebrew:

1. Download the latest `mac-os` tar.gz file of your cpu architecture type from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_[X.X.X]_mac-os_[ARCH_TYPE].tar.gz`.

Optionally, install the binary in a location where you can execute it globally (for example, `/usr/local/bin`).

#### Linux

To install the Stripe CLI on Linux without a package manager:

1. Download the latest `linux` tar.gz file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_X.X.X_linux_x86_64.tar.gz`.
3. Move `./stripe` to your execution path.

#### Windows

To install the Stripe CLI on Windows without Scoop:

1. Download the latest `windows` zip file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the `stripe_X.X.X_windows_x86_64.zip` file.
3. Add the path to the unzipped `stripe.exe` file to your `Path` environment variable. To learn how to update environment variables, see the [Microsoft PowerShell documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3#saving-changes-to-environment-variables).

> Windows anti-virus scanners occasionally flag the Stripe CLI as unsafe. This is likely a false positive. For more information, see [issue #692](https://github.com/stripe/stripe-cli/issues/692) in the GitHub repository.

1. Run the unzipped `.exe` file.

#### Docker

The Stripe CLI is also available as a [Docker image](https://hub.docker.com/r/stripe/stripe-cli). To install the latest version, run:

```bash
docker run --rm -it stripe/stripe-cli:latest
```

### Authenticate

Log in and authenticate your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) to generate a set of restricted keys. To learn more, see [Stripe CLI keys and permissions](https://docs.stripe.com/stripe-cli/keys.md).

```bash
  stripe login
```

Press **Enter** on your keyboard to complete the authentication process in your browser.

```bash
Your pairing code is: enjoy-enough-outwit-win
This pairing code verifies your authentication with Stripe.
Press Enter to open the browser or visit https://dashboard.stripe.com/stripecli/confirm_auth?t=THQdJfL3x12udFkNorJL8OF1iFlN8Az1 (^C to quit)
```

### Confirm setup

Now that you’ve installed the CLI, you can make a single API request to [Create a product](https://docs.stripe.com/api/products/create.md).

#### bash

```bash
stripe products create \
--name="My First Product" \
--description="Created with the Stripe CLI"
```

Look for the product identifier (in `id`) in the response object. Save it for the next step.

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "prod_LTenIrmp8Q67sa", // The identifier looks like this.
  "object": "product",
  "active": true,
  "attributes": [],
  "created": 1668198126,
  "default_price": null,
  "description": "Created with the Stripe CLI",
  "identifiers": {},
  "images": [],
  "livemode": false,
  "metadata": {},
  "name": "My First Product",
  "package_dimensions": null,
  "price": null,
  "product_class": null,
  "shippable": null,
  "sku": "my-first-product-10",
  "statement_descriptor": null,
  "tax_code": null,
  "type": "service",
  "unit_label": null,
  "updated": 1668198126,
  "url": null
}
```

Next, call [Create a price](https://docs.stripe.com/api/prices/create.md) to attach a price of 30 USD. Swap the placeholder in `product` with your product identifier (for example, `prod_LTenIrmp8Q67sa`).

#### bash

```bash
stripe prices create \
  --unit-amount=3000 \
  --currency=usd \
  --product="{{PRODUCT_ID}}"
```

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "price_1KzlAMJJDeE9fu01WMJJr79o", // The identifier looks like this.
  "object": "price",
  "active": true,
  "billing_scheme": "per_unit",
  "created": 1652636348,
  "currency": "usd",
  "livemode": false,
  "lookup_key": null,
  "metadata": {},
  "nickname": null,
  "product": "prod_Lh9iTGZhb2mcBy",
  "recurring": null,
  "tax_behavior": "unspecified",
  "tiers_mode": null,
  "transform_quantity": null,
  "type": "one_time",
  "unit_amount": 3000,
  "unit_amount_decimal": "3000"
}
```

## Install the Node.js server-side SDK

The latest version of the Stripe Node.js server-side SDK is v20.4.0. It supports Node.js versions 12+.

Check your Node version:

```bash
node --version
```

### Initialize Node

#### Initialize Node

```bash
npm init
```

### Install the library

Install the library with [npm](https://www.npmjs.com/package/node), a package manager for Node:

```bash
npm install stripe --save
```

After you install the library with npm, the library is automatically added as a dependency in your project’s package.json file. For example:

```json
{
  "name": "stripe-node-example",
  "version": "1.0.0",
  "description": "A Stripe demo",
  "main": "index.js",
  "scripts": {
    "node ": "node create_price.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "stripe": "^20.4.0"
  }
}
```

### Installation alternatives

**Yarn**—You can install the library with [yarn](https://yarnpkg.com/), another package manager for Node:

```bash
yarn add stripe
```

## Run your first SDK request

Now that you have the Node.js SDK installed, you can create a subscription [Product](https://docs.stripe.com/api/products/create.md) and attach a [Price](https://docs.stripe.com/api/prices/create.md) with a couple API requests. The Node.js SDK returns [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which can be used as chainable callbacks. To demonstrate, we’re passing the product identifier returned in the Product response to create a Price in this example.

> This sample uses the default keys of your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) for your *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment. Only you can see these values.

#### Create a product and price

```node
const stripe = require('stripe')('sk_test_BQokikJOvBiI2HlWgH4olfQ2');

stripe.products.create({
  name: 'Starter Subscription',
  description: '$12/Month subscription',
}).then(product => {
  stripe.prices.create({
    unit_amount: 1200,
    currency: 'usd',
    recurring: {
      interval: 'month',
    },
    product: product.id,
  }).then(price => {
    console.log('Success! Here is your starter subscription product id: ' + product.id);
    console.log('Success! Here is your starter subscription price id: ' + price.id);
  });
});
```

Save the file as `create_price.js`. From the command line, `cd` to the directory containing the file you just saved and run:

#### create\_price.js

```bash
node create_price.js
```

If everything worked, the command line shows the following response. Save these identifiers so you can use them while building your integration.

#### bash

```bash
Success! Here is your starter subscription product id: prod_0KxBDl589O8KAxCG1alJgiA6
Success! Here is your starter subscription price id: price_0KxBDm589O8KAxCGMgG7scjb
```

## See also

This wraps up the quickstart. See the links below for a few different ways to process a payment for the product you just created.

- [Create a payment link](https://docs.stripe.com/payment-links.md)
- [Stripe-hosted page](https://docs.stripe.com/checkout/quickstart.md)
- [Advanced integration](https://docs.stripe.com/payments/quickstart-checkout-sessions.md)

# PHP

> This is a PHP for when lang is php. View the full page at https://docs.stripe.com/get-started/development-environment?lang=php.

In this quickstart, you install the [Stripe CLI](https://docs.stripe.com/stripe-cli.md)—an essential tool that gets you command line access to your Stripe integration. You also install the [Stripe PHP server-side SDK](https://github.com/stripe/stripe-php) to get access to Stripe APIs from applications written in PHP.

## What you learn

In this quickstart, you’ll learn:

- How to call Stripe APIs without writing a line of code
- How to manage third-party dependencies using Composer
- How to install the latest Stripe PHP SDK v19.4.0
- How to send your first SDK request

## Initial setup

First, [create a Stripe account](https://dashboard.stripe.com/register) or [sign in](https://dashboard.stripe.com/login).

## Set up the Stripe CLI

### Install

From the command-line, use an install script or download and extract a versioned archive file for your operating system to install the CLI.

#### homebrew

To install the Stripe CLI with [homebrew](https://brew.sh/), run:

```bash
brew install stripe/stripe-cli/stripe
```

This command fails if you run it on the Linux version of homebrew, but you can use this alternative or follow the instructions on the Linux tab.

```bash
brew install stripe-cli
```

#### apt

> The Debian build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on Debian and Ubuntu-based distributions:

1. Add Stripe CLI’s GPG key to the apt sources keyring:

```bash
curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public | gpg --dearmor | sudo tee /usr/share/keyrings/stripe.gpg
```

1. Add CLI’s apt repository to the apt sources list:

```bash
echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" | sudo tee -a /etc/apt/sources.list.d/stripe.list
```

1. Update the package list:

```bash
sudo apt update
```

1. Install the CLI:

```bash
sudo apt install stripe
```

#### yum

> The RPM build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on RPM-based distributions:

1. Add CLI’s yum repository to the yum sources list:

```bash
echo -e "[Stripe]\nname=stripe\nbaseurl=https://packages.stripe.dev/stripe-cli-rpm-local/\nenabled=1\ngpgcheck=0" >> /etc/yum.repos.d/stripe.repo
```

1. Install the CLI:

```bash
sudo yum install stripe
```

#### Scoop

To install the Stripe CLI with [Scoop](https://scoop.sh/), run:

```bash
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
```

```bash
scoop install stripe
```

#### macOS

To install the Stripe CLI on macOS without homebrew:

1. Download the latest `mac-os` tar.gz file of your cpu architecture type from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_[X.X.X]_mac-os_[ARCH_TYPE].tar.gz`.

Optionally, install the binary in a location where you can execute it globally (for example, `/usr/local/bin`).

#### Linux

To install the Stripe CLI on Linux without a package manager:

1. Download the latest `linux` tar.gz file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_X.X.X_linux_x86_64.tar.gz`.
3. Move `./stripe` to your execution path.

#### Windows

To install the Stripe CLI on Windows without Scoop:

1. Download the latest `windows` zip file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the `stripe_X.X.X_windows_x86_64.zip` file.
3. Add the path to the unzipped `stripe.exe` file to your `Path` environment variable. To learn how to update environment variables, see the [Microsoft PowerShell documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3#saving-changes-to-environment-variables).

> Windows anti-virus scanners occasionally flag the Stripe CLI as unsafe. This is likely a false positive. For more information, see [issue #692](https://github.com/stripe/stripe-cli/issues/692) in the GitHub repository.

1. Run the unzipped `.exe` file.

#### Docker

The Stripe CLI is also available as a [Docker image](https://hub.docker.com/r/stripe/stripe-cli). To install the latest version, run:

```bash
docker run --rm -it stripe/stripe-cli:latest
```

### Authenticate

Log in and authenticate your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) to generate a set of restricted keys. To learn more, see [Stripe CLI keys and permissions](https://docs.stripe.com/stripe-cli/keys.md).

```bash
  stripe login
```

Press **Enter** on your keyboard to complete the authentication process in your browser.

```bash
Your pairing code is: enjoy-enough-outwit-win
This pairing code verifies your authentication with Stripe.
Press Enter to open the browser or visit https://dashboard.stripe.com/stripecli/confirm_auth?t=THQdJfL3x12udFkNorJL8OF1iFlN8Az1 (^C to quit)
```

### Confirm setup

Now that you’ve installed the CLI, you can make a single API request to [Create a product](https://docs.stripe.com/api/products/create.md).

#### bash

```bash
stripe products create \
--name="My First Product" \
--description="Created with the Stripe CLI"
```

Look for the product identifier (in `id`) in the response object. Save it for the next step.

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "prod_LTenIrmp8Q67sa", // The identifier looks like this.
  "object": "product",
  "active": true,
  "attributes": [],
  "created": 1668198126,
  "default_price": null,
  "description": "Created with the Stripe CLI",
  "identifiers": {},
  "images": [],
  "livemode": false,
  "metadata": {},
  "name": "My First Product",
  "package_dimensions": null,
  "price": null,
  "product_class": null,
  "shippable": null,
  "sku": "my-first-product-10",
  "statement_descriptor": null,
  "tax_code": null,
  "type": "service",
  "unit_label": null,
  "updated": 1668198126,
  "url": null
}
```

Next, call [Create a price](https://docs.stripe.com/api/prices/create.md) to attach a price of 30 USD. Swap the placeholder in `product` with your product identifier (for example, `prod_LTenIrmp8Q67sa`).

#### bash

```bash
stripe prices create \
  --unit-amount=3000 \
  --currency=usd \
  --product="{{PRODUCT_ID}}"
```

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "price_1KzlAMJJDeE9fu01WMJJr79o", // The identifier looks like this.
  "object": "price",
  "active": true,
  "billing_scheme": "per_unit",
  "created": 1652636348,
  "currency": "usd",
  "livemode": false,
  "lookup_key": null,
  "metadata": {},
  "nickname": null,
  "product": "prod_Lh9iTGZhb2mcBy",
  "recurring": null,
  "tax_behavior": "unspecified",
  "tiers_mode": null,
  "transform_quantity": null,
  "type": "one_time",
  "unit_amount": 3000,
  "unit_amount_decimal": "3000"
}
```

## Manage third-party dependencies

We recommend managing third-party dependencies from [Packagist](https://packagist.org/) using [Composer](https://getcomposer.org/download/), which allows you to add new libraries and include them in your PHP projects.

### Install Composer

From the command line, [download Composer](https://getcomposer.org/download/) using the instructions.

## Install the PHP server-side SDK

The latest version of the Stripe PHP server-side SDK is v19.4.0. It supports PHP versions 5.6.0+.

Check your PHP version:

```bash
php --version
```

### Install the library

Install the library with [Composer](http://getcomposer.org/), a package manager for PHP:

```bash
composer require stripe/stripe-php
```

After you install the library with Composer, it’s automatically added as a dependency in your project’s composer.json file. For example:

```json
{
    "require": {
        "stripe/stripe-php": "^19.4.0"
    }
}
```

To use the bindings, use Composer’s [autoload](https://getcomposer.org/doc/01-basic-usage.md#autoloading). For example:

```php
require_once('vendor/autoload.php');
```

### Installation alternatives

**Manual installation**

You can [download the latest release](https://github.com/stripe/stripe-php/releases) to use the bindings, then include the init.php file:

```php
require_once('/path/to/stripe-php/init.php');
```

Then, add the following extensions: [cURL](https://secure.php.net/manual/en/book.curl.php) (or optionally, use your own non-curl client) [json](https://secure.php.net/manual/en/book.json.php) [mbstring](https://secure.php.net/manual/en/book.mbstring.php)

## Run your first SDK request

Now that you have the PHP SDK installed, you can create a subscription [Product](https://docs.stripe.com/api/products/create.md) and attach a [Price](https://docs.stripe.com/api/prices/create.md) with a couple API requests. We’re using the product identifier returned in the response to create the price in this example.

> This sample uses the default keys of your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) for your *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment. Only you can see these values.

#### Create a product and price

```php
<?php
require_once('vendor/autoload.php');

$stripe = new \Stripe\StripeClient("sk_test_BQokikJOvBiI2HlWgH4olfQ2");

$product = $stripe->products->create([
  'name' => 'Starter Subscription',
  'description' => '$12/Month subscription',
]);
echo "Success! Here is your starter subscription product id: " . $product->id . "\n";

$price = $stripe->prices->create([
  'unit_amount' => 1200,
  'currency' => 'usd',
  'recurring' => ['interval' => 'month'],
  'product' => $product['id'],
]);
echo "Success! Here is your starter subscription price id: " . $price->id . "\n";

?>
```

Save the file as `create_price.php`. From the command line, `cd` to the directory containing the file you just saved and run:

#### create\_price.php

```bash
php create_price.php

```

If everything worked, the command line shows the following response. Save these identifiers so you can use them while building your integration.

#### bash

```bash
Success! Here is your starter subscription product id: price_0KxBDl589O8KAxCG1alJgiA6
Success! Here is your starter subscription price id: price_0KxBDm589O8KAxCGMgG7scjb
```

## See also

This wraps up the quickstart. See the links below for a few different ways to process a payment for the product you just created.

- [Create a payment link](https://docs.stripe.com/payment-links.md)
- [Stripe-hosted page](https://docs.stripe.com/checkout/quickstart.md)
- [Advanced integration](https://docs.stripe.com/payments/quickstart-checkout-sessions.md)

# .NET

> This is a .NET for when lang is dotnet. View the full page at https://docs.stripe.com/get-started/development-environment?lang=dotnet.

In this quickstart, you install the [Stripe CLI](https://docs.stripe.com/stripe-cli.md)—an essential tool that gets you command line access to your Stripe integration. You also install the [Stripe .NET server-side SDK](https://github.com/stripe/stripe-dotnet) to get access to Stripe APIs from applications written in C#.

## What you learn

In this quickstart, you’ll learn:

- How to call Stripe APIs without writing a line of code
- How to manage third-party dependencies using the .NET Core CLI, NuGet CLI or the Package Manager Console
- How to install the latest Stripe .NET SDK v50.4.0
- How to send your first SDK request

## Initial setup

First, [create a Stripe account](https://dashboard.stripe.com/register) or [sign in](https://dashboard.stripe.com/login).

## Set up the Stripe CLI

### Install

From the command-line, use an install script or download and extract a versioned archive file for your operating system to install the CLI.

#### homebrew

To install the Stripe CLI with [homebrew](https://brew.sh/), run:

```bash
brew install stripe/stripe-cli/stripe
```

This command fails if you run it on the Linux version of homebrew, but you can use this alternative or follow the instructions on the Linux tab.

```bash
brew install stripe-cli
```

#### apt

> The Debian build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on Debian and Ubuntu-based distributions:

1. Add Stripe CLI’s GPG key to the apt sources keyring:

```bash
curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public | gpg --dearmor | sudo tee /usr/share/keyrings/stripe.gpg
```

1. Add CLI’s apt repository to the apt sources list:

```bash
echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" | sudo tee -a /etc/apt/sources.list.d/stripe.list
```

1. Update the package list:

```bash
sudo apt update
```

1. Install the CLI:

```bash
sudo apt install stripe
```

#### yum

> The RPM build for the CLI is available on JFrog at https://packages.stripe.dev, which isn’t a domain owned by Stripe. When you visit this URL, it redirects you to the Jfrog artifactory list.

To install the Stripe CLI on RPM-based distributions:

1. Add CLI’s yum repository to the yum sources list:

```bash
echo -e "[Stripe]\nname=stripe\nbaseurl=https://packages.stripe.dev/stripe-cli-rpm-local/\nenabled=1\ngpgcheck=0" >> /etc/yum.repos.d/stripe.repo
```

1. Install the CLI:

```bash
sudo yum install stripe
```

#### Scoop

To install the Stripe CLI with [Scoop](https://scoop.sh/), run:

```bash
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
```

```bash
scoop install stripe
```

#### macOS

To install the Stripe CLI on macOS without homebrew:

1. Download the latest `mac-os` tar.gz file of your cpu architecture type from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_[X.X.X]_mac-os_[ARCH_TYPE].tar.gz`.

Optionally, install the binary in a location where you can execute it globally (for example, `/usr/local/bin`).

#### Linux

To install the Stripe CLI on Linux without a package manager:

1. Download the latest `linux` tar.gz file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the file: `tar -xvf stripe_X.X.X_linux_x86_64.tar.gz`.
3. Move `./stripe` to your execution path.

#### Windows

To install the Stripe CLI on Windows without Scoop:

1. Download the latest `windows` zip file from [GitHub](https://github.com/stripe/stripe-cli/releases/latest).
2. Unzip the `stripe_X.X.X_windows_x86_64.zip` file.
3. Add the path to the unzipped `stripe.exe` file to your `Path` environment variable. To learn how to update environment variables, see the [Microsoft PowerShell documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3#saving-changes-to-environment-variables).

> Windows anti-virus scanners occasionally flag the Stripe CLI as unsafe. This is likely a false positive. For more information, see [issue #692](https://github.com/stripe/stripe-cli/issues/692) in the GitHub repository.

1. Run the unzipped `.exe` file.

#### Docker

The Stripe CLI is also available as a [Docker image](https://hub.docker.com/r/stripe/stripe-cli). To install the latest version, run:

```bash
docker run --rm -it stripe/stripe-cli:latest
```

### Authenticate

Log in and authenticate your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) to generate a set of restricted keys. To learn more, see [Stripe CLI keys and permissions](https://docs.stripe.com/stripe-cli/keys.md).

```bash
  stripe login
```

Press **Enter** on your keyboard to complete the authentication process in your browser.

```bash
Your pairing code is: enjoy-enough-outwit-win
This pairing code verifies your authentication with Stripe.
Press Enter to open the browser or visit https://dashboard.stripe.com/stripecli/confirm_auth?t=THQdJfL3x12udFkNorJL8OF1iFlN8Az1 (^C to quit)
```

### Confirm setup

Now that you’ve installed the CLI, you can make a single API request to [Create a product](https://docs.stripe.com/api/products/create.md).

#### bash

```bash
stripe products create \
--name="My First Product" \
--description="Created with the Stripe CLI"
```

Look for the product identifier (in `id`) in the response object. Save it for the next step.

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "prod_LTenIrmp8Q67sa", // The identifier looks like this.
  "object": "product",
  "active": true,
  "attributes": [],
  "created": 1668198126,
  "default_price": null,
  "description": "Created with the Stripe CLI",
  "identifiers": {},
  "images": [],
  "livemode": false,
  "metadata": {},
  "name": "My First Product",
  "package_dimensions": null,
  "price": null,
  "product_class": null,
  "shippable": null,
  "sku": "my-first-product-10",
  "statement_descriptor": null,
  "tax_code": null,
  "type": "service",
  "unit_label": null,
  "updated": 1668198126,
  "url": null
}
```

Next, call [Create a price](https://docs.stripe.com/api/prices/create.md) to attach a price of 30 USD. Swap the placeholder in `product` with your product identifier (for example, `prod_LTenIrmp8Q67sa`).

#### bash

```bash
stripe prices create \
  --unit-amount=3000 \
  --currency=usd \
  --product="{{PRODUCT_ID}}"
```

If everything worked, the command-line displays the following response.

#### bash

```json
{
  "id": "price_1KzlAMJJDeE9fu01WMJJr79o", // The identifier looks like this.
  "object": "price",
  "active": true,
  "billing_scheme": "per_unit",
  "created": 1652636348,
  "currency": "usd",
  "livemode": false,
  "lookup_key": null,
  "metadata": {},
  "nickname": null,
  "product": "prod_Lh9iTGZhb2mcBy",
  "recurring": null,
  "tax_behavior": "unspecified",
  "tiers_mode": null,
  "transform_quantity": null,
  "type": "one_time",
  "unit_amount": 3000,
  "unit_amount_decimal": "3000"
}
```

## Install the .NET server-side SDK

The latest version of the Stripe .NET server-side SDK is v50.4.0. It supports .NET Standard 2.0+, .NET Core 2.0+, and .NET Framework 4.6.1+.

Check your [.NET SDK](https://docs.microsoft.com/en-us/dotnet/core/install/how-to-detect-installed-versions) version:

```bash
dotnet --list-sdks
```

### Install the library

Use the [.NET Core Command Line Interface (CLI)](https://docs.microsoft.com/en-us/dotnet/core/tools/) to create a new project from the command line:

```bash
dotnet new console
```

To install the library, run this command to add the package reference to your project file (`.csproj`):

```bash
dotnet add package Stripe.net
```

After you install the library with the CLI, the library is automatically added as a dependency in your project file (`.csproj`). For example:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net6.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Stripe.net" Version="50.4.0" />
  </ItemGroup>

</Project>
```

### Installation alternatives

**NuGet Command Line Interface (CLI)**—You can use the [NuGet CLI](https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference) to install the library:

```bash
nuget install Stripe.net
```

**Package Manager Console (PowerShell)**—If you’re using the [Package Manager Console (PowerShell)](https://docs.microsoft.com/en-us/nuget/tools/package-manager-console), run the following command to install the library:

```PowerShell
Install-Package Stripe.net
```

**VisualStudio**—To add the Stripe.net package to Visual Studio: Open the Solution Explorer. Right-click your project. Click **Manage NuGet Packages**. Click the **Browse** tab and search for **Stripe.net**. Click the **Stripe.net** package, select the appropriate version in the tab and click **Install**.

## Run your first SDK request

Now that you have the .NET SDK installed, you can create a subscription [Product](https://docs.stripe.com/api/products/create.md) and attach a [Price](https://docs.stripe.com/api/prices/create.md) with a couple API requests. We’re using the product identifier returned in the response to create the price in this example.

> This sample uses the default keys of your Stripe user [account](https://docs.stripe.com/get-started/account/activate.md) for your *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment. Only you can see these values.

#### Create a product and price

```dotnet
using System;
using Stripe;

class Program
{
  static void Main(string[] args)
  {
    var client = new StripeClient("sk_test_BQokikJOvBiI2HlWgH4olfQ2");

    var optionsProduct = new ProductCreateOptions
    {
      Name = "Starter Subscription",
      Description = "$12/Month subscription",
    };
    Product product = client.V1.Products.Create(optionsProduct);
    Console.Write("Success! Here is your starter subscription product id: {0}\n", product.Id);

    var optionsPrice = new PriceCreateOptions
    {
      UnitAmount = 1200,
      Currency = "usd",
      Recurring = new PriceRecurringOptions
      {
          Interval = "month",
      },
      Product = product.Id
    };
    Price price = client.V1.Prices.Create(optionsPrice);
    Console.Write("Success! Here is your starter subscription price id: {0}\n", price.Id);
  }
}
```

Save the code to the `Program.cs` file in your project. From the command line, `cd` to the directory containing the file you just saved and run:

#### Program.cs

```bash
dotnet run
```

If everything worked, the command line shows the following response. Save these identifiers so you can use them while building your integration.

#### bash

```bash
Success! Here is your starter subscription product id: prod_0KxBDl589O8KAxCG1alJgiA6
Success! Here is your starter subscription price id: price_0KxBDm589O8KAxCGMgG7scjb
```

## See also

This wraps up the quickstart. See the links below for a few different ways to process a payment for the product you just created.

- [Create a payment link](https://docs.stripe.com/payment-links.md)
- [Stripe-hosted page](https://docs.stripe.com/checkout/quickstart.md)
- [Advanced integration](https://docs.stripe.com/payments/quickstart-checkout-sessions.md)
