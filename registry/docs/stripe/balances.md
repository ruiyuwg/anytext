# Access balances for a Financial Connections account

Learn how to access an account's balances with your user's permission.

The Financial Connections API allows you to retrieve up-to-date balances of a [Financial Connections Account](https://docs.stripe.com/api/financial_connections/accounts.md). Balance data is useful for a variety of applications, including reducing the risk of insufficient funds failures for ACH, underwriting, or building financial management tools.

## Before you begin

You must have a completed Financial Connections registration to access balances in live mode. Visit your [Dashboard settings](https://dashboard.stripe.com/settings/financial-connections) to check the state of your registration or begin the registration process. Financial Connections test data is always available.

## Create a customer \[Recommended] \[Server-side]

We recommend that you create a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments) with an email address and phone number to represent your user, that you then attach to your payment. Attaching a `Customer` object allows you to [list previously linked accounts ](https://docs.stripe.com/api/financial_connections/accounts/list.md) later. By providing the email address and phone number on the `Customer` object, Financial Connections can improve the authentication flow by simplifying sign-in or sign-up for your user, depending on whether they’re a returning [Link](https://support.stripe.com/questions/link-for-financial-connections-support-for-businesses) user.

```curl
curl https://api.stripe.com/v1/customers \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d email={{CUSTOMER_EMAIL}} \
  -d phone={{CUSTOMER_PHONE}}
```

## Request access to an account's balances \[Server-side]

You must collect an account before you can access its balance data. To learn more about how to collect Financial Connections Accounts consult the integration guide most relevant to your use case: [accept payments](https://docs.stripe.com/financial-connections/ach-direct-debit-payments.md), [facilitate Connect payouts](https://docs.stripe.com/financial-connections/connect-payouts.md), or [build other-data powered products](https://docs.stripe.com/financial-connections/other-data-powered-products.md).

When collecting an account, you specify the data you need access to with the [permissions](https://docs.stripe.com/financial-connections/fundamentals.md#data-permissions) parameter. The set of requested data permissions are viewable by the user in the [authentication flow](https://docs.stripe.com/financial-connections/fundamentals.md#authentication-flow). Financial Connections Accounts are collectible through various integration paths, and how you specify the parameter varies slightly by API.

#### Payment Intents

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=20000 \
  -d currency=usd \
  -d customer="{{CUSTOMER_ID}}" \
  -d "payment_method_types[]"=us_bank_account \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=balances \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=payment_method
```

#### Setup Intents

```curl
curl https://api.stripe.com/v1/setup_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "payment_method_types[]"=us_bank_account \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=balances \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=payment_method
```

#### Sessions

```curl
curl https://api.stripe.com/v1/financial_connections/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "account_holder[type]"=customer \
  -d "account_holder[customer]"="{{CUSTOMER_ID}}" \
  -d "permissions[]"=balances
```

#### Checkout

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "payment_method_types[]"=us_bank_account \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=balances \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=payment_method
```

#### Invoices

```curl
curl https://api.stripe.com/v1/invoices \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "payment_settings[payment_method_types][]"=us_bank_account \
  -d "payment_settings[payment_method_options][us_bank_account][financial_connections][permissions][]"=balances \
  -d "payment_settings[payment_method_options][us_bank_account][financial_connections][permissions][]"=payment_method
```

#### Subscriptions

```curl
curl https://api.stripe.com/v1/subscriptions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer={{CUSTOMER_ID}} \
  -d "payment_settings[payment_method_types][]"=us_bank_account \
  -d "payment_settings[payment_method_options][us_bank_account][financial_connections][permissions][]"=balances \
  -d "payment_settings[payment_method_options][us_bank_account][financial_connections][permissions][]"=payment_method
```

When using dynamic payment methods for certain payments APIs, you can also configure requested permissions in the Dashboard. Learn how to [access additional account data on Financial Connections accounts](https://docs.stripe.com/financial-connections/ach-direct-debit-payments.md?dashboard-or-api=dashboard#access).

## Initiate a balance refresh \[Server-side]

All Financial Connections data retrievals are asynchronous. You initiate a balance refresh and wait for it to complete, then retrieve the results. You can initiate balance refreshes with the `prefetch` API parameter or the [Refresh API](https://docs.stripe.com/api/financial_connections/accounts/refresh.md).

### Prefetch balance data

Specify whether you want to prefetch account balances *before* account collection. This initiates the refresh process as soon as your user connects their account in the [authentication flow](https://docs.stripe.com/financial-connections/fundamentals.md#authentication-flow). Set `prefetch` when you require balance data for every linked account, to make sure you receive it with minimal delay. An example of this is if you plan to perform balance checks prior to initiating an ACH payment. The `prefetch` parameter is available on all APIs that support Financial Connections.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=20000 \
  -d currency=usd \
  -d "payment_method_types[]"=us_bank_account \
  -d "payment_method_options[us_bank_account][financial_connections][prefetch][]"=balances \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=payment_method \
  -d "payment_method_options[us_bank_account][financial_connections][permissions][]"=balances
```

### Initiate an on-demand refresh

Use the [Refresh API](https://docs.stripe.com/api/financial_connections/accounts/refresh.md) to initiate on-demand balance refreshes *after* account collection, and fetch balance information for a specific account at your convenience, allowing you to defer the decision until a later time.

Use the Financial Connections account ID to initiate a refresh. If you’re integrating through a payments flow, find the account ID [on the associated Payment Method](https://docs.stripe.com/financial-connections/ach-direct-debit-payments.md#finding-the-financial-connections-account-id). When using a Financial Connections Session, retrieve it [through the session](https://docs.stripe.com/financial-connections/other-data-powered-products.md?platform=web#collect-an-account).

```curl
curl https://api.stripe.com/v1/financial_connections/accounts/{{FINANCIALCONNECTIONSACCOUNT_ID}}/refresh \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "features[]"=balance
```

> Refreshes aren’t allowed on inactive accounts.

### Wait for the balance refresh to complete

The [balance\_refresh](https://docs.stripe.com/api/financial_connections/accounts/object.md#financial_connections_account_object-balance_refresh) field on a Financial Connections account represents the balance refresh state. This field remains `null` until you request the `balances` permission and initiate a refresh. After you start a balance refresh, the state changes to `pending`, and after completion, it moves to either `succeeded` or `failed`. We send the [financial\_connections.account.refreshed\_balance](https://docs.stripe.com/api/events/types.md#event_types-financial_connections.account.refreshed_balance) event when the balance refresh completes. To determine the success of the refresh, check the `balance_refresh.status` field while handling the webhook.
Balance refresh flow (See full diagram at https://docs.stripe.com/financial-connections/balances)
After a balance refresh completes, Stripe sets the availability of future refreshes through the [balance\_refresh.next\_refresh\_available\_at](https://docs.stripe.com/api/financial_connections/accounts/object.md#financial_connections_account_object-balance_refresh-next_refresh_available_at) field. Check this field before initiating a new balance refresh to make sure that refreshes are currently available. If you attempt a refresh while the value is `null` (as is always the case when the refresh is pending or the account is inactive) or the current time is less than the `next_refresh_available_at` timestamp, the refresh won’t be initiated.

> In the unlikely event that a refresh fails, the `error` field on the refresh hash is a preview feature that provides the cause of the failure and recommended next steps. If you’d like to use it, [email us](mailto:financial-connections-beta+refresh-error@stripe.com) for access.

## Retrieve an account's balances \[Server-side]

After the balance refresh has completed, retrieve the Financial Connections Account from the body of the [financial\_connections.account.refreshed\_balance](https://docs.stripe.com/api/events/types.md#event_types-financial_connections.account.refreshed_balance) event or through the API.

```curl
curl https://api.stripe.com/v1/financial_connections/accounts/{{FINANCIALCONNECTIONSACCOUNT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:"
```

If the refresh completed successfully, the account object contains balance data.

```json
{
  "id": "fca_1Jbry3BAjqvGMUSxCDjFsrLU",
  "object": "financial_connections.account",
  "balance": {
    "as_of": 1651516592,
    "cash": {
      "available": {
        "usd": 6000
      }
    },
    "current": {
      "usd": 6000
    },
    "type": "cash"
  },
  "balance_refresh": {
    "last_attempted_at": 1651516582,
    "next_refresh_available_at": 1651516583,
    "status": "succeeded",
  },
  // ... other fields on the Financial Connections Account
}
```

#### Balance data details

The `balance` hash describes the different types of balances made available by a financial institution.

| Balance Types | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `current`     | The `current` balance is the amount of funds that have posted to the account. This amount ignores events that have yet to post to an account such as incoming transfers, outgoing transfers, and other holds. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.                                                                                                                                                                                                             |
| `available`   | The balance object is polymorphic, with types `cash` and `credit`. If the balance has `type: "cash"`, you’ll see a `cash` sub-object with the `available` property, which is the amount of funds available for use, such as any to be transferred or paid out, after considering incoming and outgoing holds.                                                                                                                                                                                                                                         |
| `used`        | The balance object is polymorphic, with types `cash` and `credit`. If the balance has `type: "credit"`, you’ll see a `credit` sub-object with the `used` property, which is the amount of funds that have been consumed after taking outgoing holds into account. For credit balances, `current` and `used` amounts use the same sign convention used for cash balances: a positive amount means funds owed *to* the account holder, a negative amount means funds owed *by* the account holder. In most cases a credit balance has negative amounts. |

The availability of balances varies by underlying financial institution. We return all balance data that we have access to. In rare cases, most often when dealing with smaller financial institutions, Stripe can’t retrieve balance data from a financial institution or partner of any kind, in which case the `balance` object is `null`. The balance object is also `null` if the account has been disconnected. In some instances only a `current` balance is returned, or a balance that is up to 24 hours stale. See our list of [supported institutions](https://docs.stripe.com/financial-connections/supported-institutions.md) for data coverage.

For the `cash` balance type, use the `available` sub-object to confirm sufficient funds exist prior to initiating an ACH Direct Debit payment. If an `available` balance is null, you might want to use the `current` balance to confirm sufficient funds prior to initiating an ACH Direct Debit, but be mindful that this amount ignores events that have yet to post to an account such as incoming transfers, outgoing transfers, and other holds.

The `as_of` field on a balance is the date and time that the financial institution calculated this balance. This isn’t the same as the date and time of balance data retrieval. For example, certain institutions only update balance data once per day, while others update more frequently.
