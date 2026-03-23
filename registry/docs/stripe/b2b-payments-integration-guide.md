# B2B payments integration guide

Build a B2B payments integration with Issuing.

Check out our introductory guide to using [embedded finance for SaaS Platforms](https://stripe.com/guides/introduction-to-embedded-finance).

Build a US B2B payments integration by using Stripe [Issuing](https://docs.stripe.com/issuing/how-issuing-works.md) to create cards for your business, employees, or contractors to make purchases on your behalf.

By the end of this guide, you’ll know how to:

- Fund your Issuing Balance
- Create virtual cards for your own business
- Use these cards to spend funds from your Issuing Balance

## Before you begin

1. Sign up for a [Stripe account](https://dashboard.stripe.com/register).
2. [Activate Issuing](https://dashboard.stripe.com/issuing/activate) in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment from the Dashboard.

## Add funds

To spend money using cards, add funds to the Issuing balance on your account. This balance represents funds reserved for Issuing and is safely separated from your earnings, payouts, and funds from other Stripe products.

You can add funds from your [Dashboard](https://dashboard.stripe.com/balance/overview#issuing-summary).

## Create cardholders and cards

### Create a cardholder

The [Cardholder](https://docs.stripe.com/api/.md#issuing_cardholder_object) is the company or business entity that’s authorized to use card funding by the Issuing balance. The `Cardholder` object includes relevant details, such as a [name](https://docs.stripe.com/api/issuing/cardholders/object.md#issuing_cardholder_object-name) to display on cards and a [billing](https://docs.stripe.com/api/issuing/cardholders/object.md#issuing_cardholder_object-billing) address, which is usually the business address.

The following API call creates a new `Cardholder`:

```curl
curl https://api.stripe.com/v1/issuing/cardholders \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d name="Company Card" \
  --data-urlencode email="company@example.com" \
  --data-urlencode phone_number="+18008675309" \
  -d status=active \
  -d type=company \
  -d "billing[address][line1]"="123 Main Street" \
  -d "billing[address][city]"="San Francisco" \
  -d "billing[address][state]"=CA \
  -d "billing[address][postal_code]"=94111 \
  -d "billing[address][country]"=US
```

Stripe returns a `Cardholder` object that contains the information you provided and sends the `issuing_cardholder.created` webhook event.

### Create a card

Create a card and attach it to the `Cardholder` that you want to make the authorized user of the card.

In the following examples, we show you how to create a [virtual card](https://docs.stripe.com/issuing/cards/virtual.md). You can, however, create [physical cards](https://docs.stripe.com/issuing/cards/physical.md) and ship them to cardholders in live mode.

```curl
curl https://api.stripe.com/v1/issuing/cards \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d currency=usd \
  -d type=virtual \
  -d cardholder="{{ISSUINGCARDHOLDER_ID}}"
```

Stripe returns a `Card` object on creation, and sends the `issuing_card.created` webhook event:

```json
{
  "id": "ic_1NvPjF2SSJdH5vn2OVbE7r0b",
  "object": "issuing.card",
  "brand": "Visa",
  ...
  "status": "inactive",
  "type": "virtual"
}
```

You need to activate the card before a user can use it. While you can activate virtual cards in the same API call you used to create it, you must activate physical cards separately. When ready, activate the card by marking the `status` as `active`:

```curl
curl https://api.stripe.com/v1/issuing/cards/ic_1NvPjF2SSJdH5vn2OVbE7r0b \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d status=active
```

At this point, there’s now an active card attached to a cardholder. See the [Issuing page](https://dashboard.stripe.com/issuing/overview) to view the card and cardholder information.

```json
{
  "id": "ic_1NvPjF2SSJdH5vn2OVbE7r0b",
  "object": "issuing.card",
  "brand": "Visa",
  ...
  "status": "active",
  "type": "virtual"
}
```

To learn more, see:

- [Virtual cards](https://docs.stripe.com/issuing/cards/virtual.md)
- [Physical cards](https://docs.stripe.com/issuing/cards/physical.md)
- [Use the Dashboard for Issuing with Connect](https://docs.stripe.com/issuing/connect.md#using-dashboard-issuing)
- [Create cards with the API](https://docs.stripe.com/api/issuing/cards.md)

## Use the card

### Create an authorization

To observe the impact of card activity on the associated balance, generate a test authorization. You can do this in the **Issuing page** of the Dashboard, or with the following call to the [Authorization API](https://docs.stripe.com/api/issuing/authorizations.md):

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

After approval, Stripe creates an `Authorization` in a `pending` state while it waits for [capture](https://docs.stripe.com/issuing/purchases/transactions.md). Note the authorization `id` that you’ll use to capture the funds:

```json
{"id": "iauth_1NvPyY2SSJdH5vn2xZQE8C7k",
  "object": "issuing.authorization",
  "amount": 1000,
  ...
  "status": "pending",
  "transactions": []
}
```

### Capture the funds

Capture the funds using the following code:

```curl
curl -X POST https://api.stripe.com/v1/test_helpers/issuing/authorizations/{{ISSUINGAUTHORIZATION_ID}}/capture \
  -u "<<YOUR_SECRET_KEY>>:"
```

After the authorization is captured, Stripe creates an Issuing [Transaction](https://docs.stripe.com/issuing/purchases/transactions.md), the `status` of the authorization is set to `closed`.

## See also

- [Spending controls](https://docs.stripe.com/issuing/controls/spending-controls.md)
- [Issuing authorizations](https://docs.stripe.com/issuing/purchases/authorizations.md)
- [Issuing transactions](https://docs.stripe.com/issuing/purchases/transactions.md)
- [Working with Stripe Issuing cards and Financial Accounts for platforms](https://docs.stripe.com/financial-accounts/connect/account-management/issuing-cards.md)
- [Manage transaction fraud](https://docs.stripe.com/issuing/manage-fraud.md)
