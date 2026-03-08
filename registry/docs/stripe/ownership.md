# Access ownership details for a Financial Connections account

Learn how to access an account's ownership details with your user's permission.

The Financial Connections API allows you to retrieve the ownership details of a [Financial Connections account](https://docs.stripe.com/api/financial_connections/accounts/object.md). Ownership data is useful for a variety of applications, including reducing the risk of fraud when onboarding users or underwriting.

## Before you begin

You must have a completed Financial Connections registration to access ownership in live mode. Visit your [Dashboard settings](https://dashboard.stripe.com/settings/financial-connections) to check the state of your registration or begin the registration process. Financial Connections test data is always available.

## Create a customer \[Recommended] \[Server-side]

We recommend that you create a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments) with an email address and phone number to represent your user, that you then attach to your payment. Attaching a `Customer` object allows you to [list previously linked accounts ](https://docs.stripe.com/api/financial_connections/accounts/list.md) later. By providing the email address and phone number on the `Customer` object, Financial Connections can improve the authentication flow by simplifying sign-in or sign-up for your user, depending on whether they’re a returning [Link](https://support.stripe.com/questions/link-for-financial-connections-support-for-businesses) user.

```curl
curl https://api.stripe.com/v1/customers \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d email={{CUSTOMER_EMAIL}} \
  -d phone={{CUSTOMER_PHONE}}
```

## Request access to an account's ownership data \[Server-side]

You must collect an account before you can access its ownership data. To learn more about how to collect Financial Connections Accounts, read the integration guide most relevant to your use case (for example, [accept payments](https://docs.stripe.com/financial-connections/ach-direct-debit-payments.md), [facilitate Connect payouts](https://docs.stripe.com/financial-connections/connect-payouts.md), or [build other-data powered products](https://docs.stripe.com/financial-connections/other-data-powered-products.md)).

If you use [Connect Onboarding for Custom Accounts](https://docs.stripe.com/connect/payouts-bank-accounts.md?bank-account-collection-integration=prebuilt-web-form) to collect Financial Connections Accounts, configure which data you want access to in the [Dashboard](https://dashboard.stripe.com/settings/connect/custom).

If you use an API integration to collect accounts, specify the data you need access to with the [permissions](https://docs.stripe.com/financial-connections/fundamentals.md#data-permissions) parameter. The set of requested data permissions are viewable by the user in the [authentication flow](https://docs.stripe.com/financial-connections/fundamentals.md#authentication-flow). Financial Connections Accounts are collectible through various integration paths, and how you specify the parameter varies slightly by API.

#### Setup Intents

```curl
curl https://api.stripe.com/v1/setup_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "payment_method_types[]"=us_bank_account \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=ownership \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=payment_method
```

#### Payment Intents

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=20000 \
  -d currency=usd \
  -d customer="{{CUSTOMER_ID}}" \
  -d "payment_method_types[]"=us_bank_account \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=ownership \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=payment_method
```

#### Sessions

```curl
curl https://api.stripe.com/v1/financial_connections/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "account_holder[type]"=customer \
  -d "account_holder[customer]"="{{CUSTOMER_ID}}" \
  -d "permissions[]"=ownership
```

#### Checkout

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "payment_method_types[]"=us_bank_account \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=ownership \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=payment_method
```

#### Invoices

```curl
curl https://api.stripe.com/v1/invoices \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "payment_settings[payment_method_types][]"=us_bank_account \
  -d "payment_settings[payment_method_options][us_bank_account][financial_connections][permissions][]"=ownership \
  -d "payment_settings[payment_method_options][us_bank_account][financial_connections][permissions][]"=payment_method
```

#### Subscriptions

```curl
curl https://api.stripe.com/v1/subscriptions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer={{CUSTOMER_ID}} \
  -d "payment_settings[payment_method_types][]"=us_bank_account \
  -d "payment_settings[payment_method_options][us_bank_account][financial_connections][permissions][]"=ownership \
  -d "payment_settings[payment_method_options][us_bank_account][financial_connections][permissions][]"=payment_method
```

When using dynamic payment methods for certain payments APIs, you can also configure requested permissions in the Dashboard. Learn how to [access additional account data on Financial Connections accounts](https://docs.stripe.com/financial-connections/ach-direct-debit-payments.md?dashboard-or-api=dashboard#access).

## Initiate an ownership refresh \[Server-side]

All Financial Connections data retrievals are asynchronous. You initiate an ownership refresh and wait for it to complete, then retrieve the results. You can initiate ownership refreshes with the `prefetch` API parameter or the [Refresh API](https://docs.stripe.com/api/financial_connections/accounts/refresh.md).

### Prefetch ownership data

Specify whether you want to prefetch account ownership details *before* account collection. This initiates the refresh process as soon as your user connects their account in the [authentication flow](https://docs.stripe.com/financial-connections/fundamentals.md#authentication-flow). Set `prefetch` when you require ownership data for every linked account, to make sure you receive it with minimal delay. The `prefetch` parameter is available on all APIs that support Financial Connections.

```curl
curl https://api.stripe.com/v1/setup_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "payment_method_types[]"=us_bank_account \
  -d "payment_method_options[us_bank_account][financial_connections][prefetch][]"=ownership \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=payment_method \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=ownership
```

### Initiate an on-demand refresh

Use the [Refresh API](https://docs.stripe.com/api/financial_connections/accounts/refresh.md) to initiate on-demand ownership refreshes *after* account collection, and fetch ownership information for a specific account at your convenience, allowing you to defer the decision until a later time. Although account ownership data can change, it generally doesn’t change as frequently as [balance](https://docs.stripe.com/financial-connections/balances.md) or [transaction](https://docs.stripe.com/financial-connections/transactions.md) data.

Use the Financial Connections account ID to initiate a refresh. If you’re integrating through a payments flow, find the account ID [on the associated Payment Method](https://docs.stripe.com/financial-connections/ach-direct-debit-payments.md#finding-the-financial-connections-account-id). When using a Financial Connections Session, retrieve it [through the session](https://docs.stripe.com/financial-connections/other-data-powered-products.md?platform=web#collect-an-account).

```curl
curl https://api.stripe.com/v1/financial_connections/accounts/{{FINANCIALCONNECTIONSACCOUNT_ID}}/refresh \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "features[]"=ownership
```

> Refreshes aren’t allowed on inactive accounts.

### Wait for the ownership refresh to complete

The [ownership\_refresh](https://docs.stripe.com/api/financial_connections/accounts/object.md#financial_connections_account_object-ownership_refresh) field on a Financial Connections account represents the ownership refresh state. This field remains `null` until you request the `ownership` permission and initiate a refresh. After you start an ownership refresh, the state changes to `pending`, and after completion, it moves to either `succeeded` or `failed`. We send the [financial\_connections.account.refreshed\_ownership](https://docs.stripe.com/api/events/types.md#event_types-financial_connections.account.refreshed_ownership) event when the ownership refresh completes. To determine the success of the ownership refresh, check the `ownership_refresh.status` field while handling the webhook.
Ownership refresh flow (See full diagram at https://docs.stripe.com/financial-connections/ownership)
After an ownership refresh completes, Stripe sets the availability of future refreshes through the [ownership\_refresh.next\_refresh\_available\_at](https://docs.stripe.com/api/financial_connections/accounts/object.md#financial_connections_account_object-ownership_refresh-next_refresh_available_at) field. Check this field before initiating a new ownership refresh to make sure that refreshes are currently available. If you attempt a refresh while the value is `null` (as is always the case when the refresh is pending or the account is inactive) or the current time is less than the `next_refresh_available_at` timestamp, the refresh won’t be initiated.

> In the unlikely event that a refresh fails, the `error` field on the refresh hash is a preview feature that provides the cause of the failure and recommended next steps. If you’d like to use it, [email us](mailto:financial-connections-beta+refresh-error@stripe.com) for access.

## Retrieve an account's ownership data \[Server-side]

After the ownership refresh completes, retrieve the Financial Connections account from the API and expand the [ownership](https://docs.stripe.com/api/financial_connections/accounts/object.md#financial_connections_account_object-ownership) field to see ownership details.

```curl
curl -G https://api.stripe.com/v1/financial_connections/accounts/{{FINANCIALCONNECTIONSACCOUNT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "expand[]"=ownership
```

This returns the Financial Connections account with the ownership field expanded to list the account’s owners:

```json
{
  "id": "fca_zbyrdjTrwcYZJZc6WBs6GPid",
  "object": "financial_connections.account",
  "ownership": {
    "id": "fcaowns_1MzTG4IG1CZuezXppfPbUpXb",
    "object": "financial_connections.account_ownership",
    "created": 1651784999,
    "owners": {
      "object": "list",
      "data": [{
          "name": "Jenny Rosen",
          "email": "jenny.rosen@example.com",
          "phone": "+1 555-555-5555",
          "ownership": "fcaowns_1MzTG4IG1CZuezXppfPbUpXb",
          "raw_address": "510 Townsend San Francisco, CA 94103",
          "refreshed_at": 1651784999
        }
      ],
      "has_more": false,
      "url": "/v1/financial_connections/accounts/fca_zbyrdjTrwcYZJZc6WBs6GPid/owners?ownership=fcaowns_1MzTG4IG1CZuezXppfPbUpXb"
    }
  },
  "ownership_refresh": {
    "status": "succeeded",
    "last_attempted_at": 1651784999,
    "next_refresh_available_at": 1651785000
  },
  // ...
}
```

Stripe returns the ownership information made available by a financial institution, and the availability of ownership details varies. We return all available fields and owners provided by the bank. Ownership details can include account owner name, address, email, and phone number.

> The Ownership Match API is a preview feature that returns match scores using Financial Connections ownership data compared with input owner information. Your business might use this data to reduce exposure to fraudulent actors and account takeovers when accepting ACH payments or paying out funds. If you’re interested in using this preview feature, [email us](mailto:financial-connections-beta+ownership-match@stripe.com) for access.
