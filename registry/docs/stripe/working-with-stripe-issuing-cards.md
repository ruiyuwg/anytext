# Working with Stripe Issuing cards

Learn how to integrate Stripe Issuing with Financial Accounts for platforms.

> #### Accounts v2 API compatibility
>
> The Accounts v2 API doesn’t support Issuing workflows. If you have accounts created with Accounts v2, you can use Accounts v1 to manage the `treasury` and `card_issuing` capabilities. For details, see [Use Accounts as customers](https://docs.stripe.com/connect/use-accounts-as-customers.md).

[Stripe Issuing](https://docs.stripe.com/issuing.md) lets you create physical and virtual cards using a financial account as the source of funds.

## Enable Issuing on connected accounts

Request the `card_issuing` [account capability](https://docs.stripe.com/connect/account-capabilities.md) for the connected accounts on your platform and provide the [required information](https://docs.stripe.com/issuing/connect.md#required-verification-information) for onboarding.

```curl
curl https://api.stripe.com/v1/accounts/{{CONNECTED_ACCOUNT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "capabilities[treasury][requested]"=true \
  -d "capabilities[card_issuing][requested]"=true \
  -d "capabilities[transfers][requested]"=true
```

If successful, the response returns the connected account [Account object](https://docs.stripe.com/api/accounts/object.md) with the `capabilities` hash listing the requested capabilities as `active`.

If you haven’t already, also request access to the `card_issuing` feature on the financial account.

```curl
curl https://api.stripe.com/v1/treasury/financial_accounts/{{TREASURYFINANCIALACCOUNT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "treasury[access][requested]"=true \
  -d "card_issuing[access][requested]"=true
```

If successful, the response returns the financial account object with the features listed in the `active_features` or `pending_features` array.

## Create a card

After the `card_issuing` capability is active, the sellers and service providers that own your platform’s connected accounts can create cardholders and cards. You can issue cards only through the API.

A [Cardholder object](https://docs.stripe.com/api/.md#issuing_cardholder_object) represents an individual or business entity that you can issue cards to. You can begin by creating a `Cardholder` with name, billing information, and whether they’re an `individual` or `company`.

```curl
curl https://api.stripe.com/v1/issuing/cardholders \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
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
  -d "billing[address][line1]"="1234 Main Street" \
  -d "billing[address][city]"="San Francisco" \
  -d "billing[address][state]"=CA \
  -d "billing[address][postal_code]"=94111 \
  -d "billing[address][country]"=US
```

If successful, the response returns the newly created `Cardholder` object.

Create a [Card](https://docs.stripe.com/api/.md#issuing_card_object) and assign it to both the `Cardholder` you just created and a financial account. To assign the cardholder and financial account, specify the cardholder ID in the `cardholder` parameter and the financial account ID in the `financial_account` parameter of the `/v1/issuing/cards` request.

```curl
curl https://api.stripe.com/v1/issuing/cards \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d cardholder={{CARDHOLDER_ID}} \
  -d financial_account="{{TREASURYFINANCIALACCOUNT_ID}}" \
  -d currency=usd \
  -d type=virtual \
  -d status=active
```

If successful, the response returns the newly created `Card` object.

## Handle authorizations

Review the [Issuing authorizations](https://docs.stripe.com/issuing/purchases/authorizations.md) guide to properly handle authorizations.

### Create test authorizations

You can test the cards you just issued by following the steps in [Testing Issuing](https://docs.stripe.com/issuing/testing.md) to simulate purchases.

If the financial account associated with the issued card has [outbound\_flows](https://docs.stripe.com/api/treasury/financial_accounts/create.md#create_financial_account-platform_restrictions-outbound_flows) restricted, authorizations on the card aren’t allowed.

See the [Issuing transactions](https://docs.stripe.com/issuing/purchases/transactions.md#handling-other-transactions) guide for information on different transaction types you might test against.

## Handle captures and refunds

See the [Issuing transactions](https://docs.stripe.com/issuing/purchases/transactions.md) guide to learn how to handle refunds and captures.

## Handle disputes

See the [Issuing disputes](https://docs.stripe.com/issuing/purchases/disputes.md) guide to learn how to properly handle disputes.
