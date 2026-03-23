# Test your Issuing integration

Learn how to test your integration and simulate purchases.

Learn more about [testing](https://docs.stripe.com/testing.md) your Stripe integration.

You can issue cards and simulate purchases using your own Stripe integration in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment. This allows you to test your integration before you go live without having to make real purchases. You can only use these cards for testing within your Stripe account and not for external purchases.

> When testing your [authorization endpoint](https://docs.stripe.com/issuing/purchases/authorizations.md), make sure that you’ve set the test endpoint in your [Issuing settings](https://dashboard.stripe.com/account/issuing). You can view test data by switching into your *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment.

## Fund your test Issuing balance

Before you create test transactions, you must add test funds to the Issuing balance on your account. These aren’t real funds, and you can only use them for simulating test purchases.

### Issuing users in the US

Issuing users in the US use “pull” funding, and use *top-ups* to fund their Issuing balance. You can create test top-ups in the Dashboard, or with the [Top-ups API](https://docs.stripe.com/api/topups/create.md). Learn more about funding Issuing balances for [US users](https://docs.stripe.com/issuing/funding/balance.md?push-pull-preference=pull).

### Issuing users in the UK and euro area

To top up their balance, Issuing users in the UK and Europe “push” funds using *funding instructions*. You can do this in your *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment, which you  access from the Dashboard, or with the [Funding Instructions API](https://docs.stripe.com/api/funding_instructions.md). Learn more about funding Issuing balances for [UK and euro area users](https://docs.stripe.com/issuing/funding/balance.md?push-pull-preference=push).

# Without code

> This is a Without code for when testing-method is without-code. View the full page at https://docs.stripe.com/issuing/testing?testing-method=without-code.

You can simulate a card purchase by specifying authorization details in the Dashboard.

## Create a card \[Dashboard]

Use the [API](https://docs.stripe.com/api/issuing/cards.md) or the [Dashboard](https://dashboard.stripe.com/issuing/cards) to create a test cardholder and card. Visit [Create virtual cards](https://docs.stripe.com/issuing/cards/virtual/issue-cards.md) or [Create physical cards](https://docs.stripe.com/issuing/cards/physical/issue-cards.md) for Dashboard-specific instructions.

## Create a test purchase \[Dashboard]

Go to the [Issuing Cards page](https://dashboard.stripe.com/issuing/cards) in your *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment, find your newly-created card, then click **Create test purchase**.
![Issuing card details menu with 'Create test purchase' option](https://b.stripecdn.com/docs-statics-srv/assets/card-details-menu.34670985a02c84d359ed55331aafc730.png)

You can select to create either an [Authorization](https://docs.stripe.com/api/issuing/authorizations/object.md) or [Transaction](https://docs.stripe.com/api/issuing/transactions/object.md) by force capture.
![Create test purchase sidebar form](https://b.stripecdn.com/docs-statics-srv/assets/create-test-purchase.49735340603617a6226fbe471c8ddaf7.png)

Depending on your selection, you can provide a number of properties, such as amount, business data, and so on.

Click **Submit** to create the purchase. If you selected authorization and have configured your [synchronous webhook](https://docs.stripe.com/issuing/controls/real-time-authorizations.md), you can use it to approve or decline the authorization. The browser redirects to the page for the newly-created authorization.

## Create a capture \[Dashboard]

To create a test capture with an authorization in the Dashboard, switch to your *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment and complete the following steps:

1. Go to the [Authorizations](https://dashboard.stripe.com/issuing/authorizations) page under **Issued Cards**.
2. Click the authorization you want to capture, and click **Capture**.![Issuing authorization details](https://b.stripecdn.com/docs-statics-srv/assets/issuing-authorization-details.24989e6ddba734d4e63df884bf171371.png)

You can capture an authorization for an amount that’s more, less, or equivalent to the authorized total. You can also [capture multiple times](https://docs.stripe.com/issuing/purchases/transactions.md?issuing-capture-type=multi_capture) regardless of the authorization’s current state.
![Capture Issuing authorization form](https://b.stripecdn.com/docs-statics-srv/assets/capture-authorization.166a462b58fae6d07aa62135577ce06e.png)

Enter the amount you want to capture, and click **Submit** to create the capture. The browser redirects you to the Transactions page and selects the newly created transaction.

# With code

> This is a With code for when testing-method is with-code. View the full page at https://docs.stripe.com/issuing/testing?testing-method=with-code.

## Create a card \[Server-side]

[Create a cardholder](https://docs.stripe.com/api.md#create_issuing_cardholder) with a name, billing address, and entity type. You can also provide additional information, if necessary.

```curl
curl https://api.stripe.com/v1/issuing/cardholders \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d name="Jenny Rosen" \
  --data-urlencode email="jenny.rosen@example.com" \
  --data-urlencode phone_number="+18008675309" \
  -d status=active \
  -d type=individual \
  -d "individual[first_name]"=Jenny \
  -d "individual[last_name]"=Rosen \
  -d "individual[dob][day]"=1 \
  -d "individual[dob][month]"=11 \
  -d "individual[dob][year]"=1981 \
  -d "billing[address][line1]"="123 Main Street" \
  -d "billing[address][city]"="San Francisco" \
  -d "billing[address][state]"=CA \
  -d "billing[address][postal_code]"=94111 \
  -d "billing[address][country]"=US
```

Next, [create a Card](https://docs.stripe.com/api/.md#create_issuing_card) for the cardholder.

```curl
curl https://api.stripe.com/v1/issuing/cards \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d cardholder="{{ISSUINGCARDHOLDER_ID}}" \
  -d type=virtual \
  -d currency=usd \
  -d status=active
```

## Create an authorization \[Server-side]

An [Authorization](https://docs.stripe.com/api.md#issuing_authorization_object) represents a cardholder’s attempt to make a purchase on a card. You can simulate the creation of an authorization in test-mode with the [Authorization test helpers API](https://docs.stripe.com/api/issuing/authorizations/test_mode_create.md).

```curl
curl https://api.stripe.com/v1/test_helpers/issuing/authorizations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d card="{{ISSUINGCARD_ID}}" \
  -d amount=1000 \
  -d authorization_method=chip \
  -d "merchant_data[category]"=taxicabs_limousines \
  -d "merchant_data[city]"="San Francisco" \
  -d "merchant_data[country]"=US \
  -d "merchant_data[name]"="Rocket Rides" \
  -d "merchant_data[network_id]"=1234567890 \
  -d "merchant_data[postal_code]"=94107 \
  -d "merchant_data[state]"=CA
```

After you configure [real-time authorizations](https://docs.stripe.com/issuing/controls/real-time-authorizations.md), Stripe sends the `issuing_authorization.request` webhook event. You can respond to this event directly to approve or decline it. Learn more about the [real-time authorization endpoint builder](https://docs.stripe.com/issuing/controls/real-time-authorizations/quickstart.md).

## Capture an authorization \[Server-side]

After approval, an Authorization is in a `pending` state while it waits for [capture](https://docs.stripe.com/issuing/purchases/transactions.md). You can simulate capture of the authorization with the API.

```curl
curl -X POST https://api.stripe.com/v1/test_helpers/issuing/authorizations/{{ISSUINGAUTHORIZATION_ID}}/capture \
  -u "<<YOUR_SECRET_KEY>>:"
```

This generates a new [Transaction](https://docs.stripe.com/api.md#issuing_transaction_object) resource and the authorization status updates to `closed`.
