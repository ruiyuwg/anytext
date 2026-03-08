# Working with financial accounts

Use financial accounts to store, send, and receive funds.

> #### Accounts v2 API compatibility
>
> The Accounts v2 API doesn’t support Financial Accounts workflows. If you have accounts created with Accounts v2, you can use Accounts v1 to manage the `treasury` and `card_issuing` capabilities. For details, see [Use Accounts as customers](https://docs.stripe.com/connect/use-accounts-as-customers.md).

After you [gain API access to Financial Accounts for platforms](https://docs.stripe.com/financial-accounts/connect/access.md), Stripe attaches a financial account to your platform account and enables you to provision financial accounts for eligible connected accounts on your platform. Each financial account has its own distinct [balance of funds](https://docs.stripe.com/financial-accounts/connect/account-management/working-with-balances-and-transactions.md), separate from the balance of the account it’s linked to. For example, the owner of a connected account on your platform might have a 100 USD connected account balance and a 200 USD financial account balance. In this scenario, the connected account owner has a sum of 300 USD spread between their financial account and connected account balances. These two balances remain separate, but the API provides the ability to move money from the connected account balance to the financial account balance.

In the Stripe API, `FinancialAccount` objects serve as the source and destination of money movement API requests. You request `Features` through the API to assign to `FinancialAccounts` that provide additional functionality for the financial accounts on your platform. For example, to enable payment card features on a specific financial account, you send an API request with the `FinancialAccount` ID for the `card_issuing` feature. See [Financial account features](https://docs.stripe.com/financial-accounts/connect/account-management/financial-account-features.md) for more information on `Feature` objects. See the [Available features](https://docs.stripe.com/financial-accounts/connect/account-management/financial-account-features.md#available-features) section within that guide to check required connected account capabilities for each `Feature`.

Before you create financial accounts in live mode for your Financial Accounts for platforms integration, we recommend you first create test financial accounts in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment. Test financial accounts can’t receive or send real money, can’t be used in live mode, and don’t generate a live account with real routing and account information, but are otherwise identical in configuration and functionality.

## Create a FinancialAccount

Use `POST /v1/treasury/financial_accounts` to create `FinancialAccounts`. Include the connected account ID as the value of the `Stripe-Account` header of the call to associate the `FinancialAccount` with a connected account.

Your platform account and connected accounts can have multiple financial accounts associated with them. You can create another financial account on your connected account by providing the connected account ID as the value of the `Stripe-Account` header. You can associate a maximum of 3 financial accounts to a single connected account (closed financial accounts don’t contribute to the limit). The same limit applies to the number of financial accounts attached to the platform account. If you need a higher financial account threshold, contact <treasury-support@stripe.com>.

The following JSON defines the `FinancialAccount` object structure:

#### JSON (commented)

```json
{
  "object": "treasury.financial_account",
  "created": 1612927106,
  "id": "fa_123",
  "country": "US",
  "supported_currencies": ["usd"],
  // Arrays of active, pending and restricted features summarize the status of all requested features
  "active_features": ["financial_addresses.aba", "deposit_insurance"],
  "pending_features": ["inbound_transfers.ach"],
  "restricted_features": ["intra_stripe_flows", "outbound_payments.ach", "outbound_payments.us_domestic_wire"],
  "balance": {
    "cash": {"usd": 9000},
    "inbound_pending": {"usd": 0},
    "outbound_pending": {"usd": 1000}
  },
  // The FinancialAccount gains a FinancialAddress once the `financial_addresses.aba` feature is active. For more information, see "Activating features"
  "financial_addresses": [
    {
      "type": "aba",
      "supported_networks": ["ach", "domestic_wire_us"],
      "aba": {
        "account_number_last4": "7890",
        // Use the expand[] parameter to view the `account_number` field hidden by default
        "account_number": "1234567890",
        "routing_number": "000000001",
        "bank_name": "Goldman Sachs"
      }
    }
  ],
  "livemode": true,
  // Financial accounts begin in the "open" state, but can be closed
  // `status_details.closed` is populated once a financial account is closed
  "status": "open",
  "status_details": {
    "closed": {
      // List of one or more reasons why the FinancialAccount was closed:
      // - account_rejected
      // - closed_by_platform
      // - other
      "reasons": []
    }
  },
  // User-defined metadata
  "metadata": {},
  "nickname": {},
  // Restrictions that the platform can apply to the FinancialAccount
  "platform_restrictions": {
    "inbound_flows": "unrestricted",
    "outbound_flows": "restricted"
  }
}
```

Typically, you also request [financial account features](https://docs.stripe.com/financial-accounts/connect/account-management/financial-account-features.md) when you make the API request to create the account. Regardless of the `Features` you request, the connected account must have the `treasury` capability enabled. If you’re unsure if the connected account has the capability, use `GET /v1/accounts/{{CONNECTED_ACCOUNT_ID}}` to check. The account’s `capabilities` hash must have a `treasury` value of `active`.

> #### Accounts v2 API compatibility
>
> The Accounts v2 API doesn’t support Financial Accounts workflows. If you have accounts created with Accounts v2, you can use Accounts v1 to manage the `treasury` and `card_issuing` capabilities. For details, see [Use Accounts as customers](https://docs.stripe.com/connect/use-accounts-as-customers.md).

```json
…
  "capabilities": {
    "card_issuing": "active",
    "card_payments": "active",
    "transfers": "active","treasury": "active",
    "us_bank_account_ach_payments": "active"
  },
…
```

If you want to issue cards attached to the financial account balance, your platform’s connected accounts must also have the Issuing (`card_issuing`) capability enabled. The connected account must have this capability before you can request the `card_issuing` feature for its financial account. If the connected account doesn’t have the capability, attempting to create a `FinancialAccount` with a request for the `card_issuing` feature results in an error.

Set the `nickname` field of a `FinancialAccount` object to designate a custom name for the financial account. You can use nicknames to create identifiers, which is useful when working with multiple financial accounts under a single connected account. Valid nicknames must:

- Be a non-blank string
- Contain less than 250 characters

If you don’t provide a nickname upon account creation, the nickname field will be empty and will return `null`. You can [update](https://docs.stripe.com/financial-accounts/connect/account-management/financial-accounts.md#update-a-financialaccount) nicknames after creating a `FinancialAccount`.

The following request creates a financial account assigned to the connected account with the ID assigned in the `Stripe-Account` header.

```curl
curl https://api.stripe.com/v1/treasury/financial_accounts \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "supported_currencies[]"=usd \
  -d nickname={{OPTIONAL_NICKNAME}} \
  -d "features[card_issuing][requested]"=true \
  -d "features[deposit_insurance][requested]"=true \
  -d "features[financial_addresses][aba][requested]"=true \
  -d "features[inbound_transfers][ach][requested]"=true \
  -d "features[intra_stripe_flows][requested]"=true \
  -d "features[outbound_payments][ach][requested]"=true \
  -d "features[outbound_payments][us_domestic_wire][requested]"=true \
  -d "features[outbound_transfers][ach][requested]"=true \
  -d "features[outbound_transfers][us_domestic_wire][requested]"=true
```

The response is a `FinancialAccount` object to confirm financial account creation.

```json
{
  "object": "treasury.financial_account",
  "created": 1612927106,
  "id": "{{FINANCIAL_ACCOUNT_ID}}",
  "country": "US",
  "supported_currencies": ["usd"],
  "active_features": [
    "card_issuing",
  ],
  // Features that require activation enter a pending state before activating
  "pending_features": [
    "deposit_insurance",
    "financial_addresses.aba",
    "inbound_transfers.ach",
    "intra_stripe_flows",
    "outbound_payments.ach",
    "outbound_payments.us_domestic_wire",
    "outbound_transfers.ach",
    "outbound_transfers.us_domestic_wire"
  ],
  "restricted_features": [],
  // A FinancialAddress is not added until the financial_addresses.aba feature has been activated
  "financial_addresses": [],
  "livemode": true,
  "nickname": "{{ACCOUNT_NICKNAME}}",
  "status": "open",
  ...
}
```

## Update a FinancialAccount

Use `POST /v1/treasury/financial_accounts/{{FINANCIAL_ACCOUNT_ID}}` to update the `FinancialAccount` with the associated ID. Include the connected account ID as the `Stripe-Account` header value. The following example updates the [metadata](https://docs.stripe.com/api/metadata.md) of the FinancialAccount.

```curl
curl https://api.stripe.com/v1/treasury/financial_accounts/{{TREASURYFINANCIALACCOUNT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "metadata[key]"=value
```

## Retrieve a FinancialAccount and account number

Use `GET /v1/treasury/financial_accounts/{{FINANCIALACCOUNT_ID}}` to retrieve the `FinancialAccount` with the associated ID. Include the connected account ID as the `Stripe-Account` header value.

```curl
curl https://api.stripe.com/v1/treasury/financial_accounts/{{TREASURYFINANCIALACCOUNT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}"
```

By default, the account number for a financial account isn’t included in the response. To retrieve the account number, include the `financial_addresses.aba.account_number` field in the `expand` array.

```curl
curl -G https://api.stripe.com/v1/treasury/financial_accounts/{{TREASURYFINANCIALACCOUNT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "expand[]"="financial_addresses.aba.account_number"
```

If successful, the response returns the `FinancialAccount` object with or without the account number depending on the inclusion of the `expand` array.

#### Response with account expanded

```json
{
  "id": {{FINANCIAL_ACCOUNT_ID}},
  ...
  "financial_addresses": [
    {
      "aba": {
        "account_holder_name": "jenny",
        "account_number": "4242424242420239",
        "account_number_last4": "0239",
        "bank_name": "Stripe Test Bank",
        "routing_number": "000000001"
      },
      ...
    }
  ],
  ...
}
```

For more information on the `expand` parameter, see [expanding responses](https://docs.stripe.com/expand.md).

### Feature summary

The `FinancialAccount` object contains a summary of the state of all its `Features` in three arrays - `active_features`, `pending_features`, and `restricted_features`.

```json
{
  "object": "treasury.financial_account",
  "id": "fa_987",
  "status": "open",
  ...
  "active_features": ["card_issuing"],
  "pending_features": ["financial_addresses.aba"],
  "restricted_features": ["outbound_transfers.ach"]
}
```

These arrays provide a convenient way to see:

- Inactive features (included in `pending_features` or `restricted_features`)
- Active features (included in `active_features`)
- Restricted features that require action (included in `restricted_features`)

See [Financial account features](https://docs.stripe.com/financial-accounts/connect/account-management/financial-account-features.md) for more information.

## Close a FinancialAccount

You can permanently close a financial account if it meets the following conditions:

- There are no pending inbound transfers.
- All attached Issuing cards are canceled.
- The account balance is zero and the account has no activity in the past 75 days. Alternatively, you can provide another financial account or [verified external account](https://docs.stripe.com/financial-accounts/connect/examples/moving-money.md#verifying-an-external-bank-account) to [forward](https://docs.stripe.com/financial-accounts/connect/account-management/financial-accounts.md#handling-transactions-on-closed-accounts) incoming debits and credits to.

> You can’t reopen financial accounts after you’ve closed them.

Closing a financial account has no impact on data retention for associated objects, such as `Transactions`.

## FinancialAccount closure using the API

You can use `POST/v1/treasury/financial_accounts/{{FINANCIAL_ACCOUNT_ID}}/close` to close the financial account with the associated ID. Include the associated connected account ID as a header value.

```bash
curl https://api.stripe.com/v1/treasury/financial_accounts/{{FINANCIAL_ACCOUNT_ID}}/close \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -H "Stripe-Account: {{CONNECTED_STRIPE_ACCOUNT_ID}}"
```

```curl
curl -X POST https://api.stripe.com/v1/treasury/financial_accounts/{{TREASURYFINANCIALACCOUNT_ID}}/close \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}"
```

The response is the `FinancialAccount` object with a `status` of `closed` to confirm the action.

```json
{
  "id": "{{FINANCIAL_ACCOUNT_ID}}",
  "object": "treasury.financial_account",
  "status": "closed",
  "status_details": {
    "closed": {
      "reasons": ["closed_by_platform"]
    }
  },
  "active_features": [],
  "pending_features": [],
  "restricted_features": ["financial_addresses.aba"],
  ...
}
```

### Handling transactions on closed accounts

In rare circumstances, financial accounts might receive credits or debits on closed accounts that Stripe can’t return automatically. As a platform owner, you’re responsible for negative balances incurred after account closure. Stripe support works with you to return any remaining funds owed to the seller or service provider and to remediate closed accounts with a negative balance. By including forwarding settings when closing a financial account, Stripe can automatically forward debits and credits to the selected account.

Provide forwarding settings when you [close](https://docs.stripe.com/api/treasury/financial_accounts/close.md) the financial account. The following example uses an external bank account as the forwarding account.

```curl
curl https://api.stripe.com/v1/treasury/financial_accounts/{{TREASURYFINANCIALACCOUNT_ID}}/close \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "forwarding_settings[type]"=payment_method \
  -d "forwarding_settings[payment_method]"="{{PAYMENTMETHOD_ID}}"
```

## Webhooks

You can create financial accounts before fulfilling onboarding requirements. In this case, the financial account opens asynchronously and then triggers a `treasury.financial_account.features_status_updated` [webhook](https://docs.stripe.com/webhooks.md) with an updated view on any features still restricted due to outstanding onboarding requirements.

- `account.updated`
  - When requesting new Features, the platform might get an `account.updated` webhook prompting that the requirements hash has changed and some new fields are now in `pending_verification`.
- `treasury.financial_account.created`
  - Triggered whenever a new FinancialAccount is created.
- `treasury.financial_account.closed`
  - Notifies when the status of the top-level FinancialAccount changes to closed.
- `treasury.financial_account.features_status_updated`
  - Indicates that one or more Features have changed status. This is reflected in changes to the `active_features, pending_features` or `restricted_features` arrays.
