# Platform financial accounts

Learn about the financial account for your platform.

After you’ve [gained API access](https://docs.stripe.com/financial-accounts/connect/access.md) to Financial Accounts for platforms, we automatically provision your platform with a financial account. For *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environments, it’s a test platform financial account.

The test platform financial account on your sandbox environment enables you to set up and test your integration without actually affecting your live account’s platform financial account.

The live mode platform financial account is where you store your own funds as working capital for your Financial Accounts for platforms program. The live mode platform financial account has its own routing number and account number and supports most of the same types of money movement as the financial accounts attached to your platform’s connected accounts.

## Platform financial account differences

The financial accounts (both live and test) for your platform are essentially the same as the financial accounts attached to your platform’s connected accounts. You use the same API requests regardless of which financial account is involved; however, you don’t include a [Stripe-Account header](https://docs.stripe.com/connect/authentication.md#stripe-account-header) when making API calls against your platform financial account. The `Stripe-Account` header signals that a request is for the associated connected account’s financial account rather than your platform’s.

The following list itemizes the differences between platform financial accounts and financial accounts attached to connected accounts:

- You can’t attach Stripe Issuing cards to platform financial accounts.
  - You can attach Stripe Issuing cards to the financial accounts attached to connected accounts.

- You can’t transfer funds from your platform financial account balance directly to the account balance of a connected account.
  - You can transfer funds from your platform financial account balance directly to the balance of a financial account attached to a connected account.

- You must use the Stripe Dashboard (rather than the API) to set the platform financial account as a `BankAccount` object that you can use for payouts from or top-ups to the platform payments balance.
  - See the [Payouts and top-ups](https://docs.stripe.com/financial-accounts/connect/moving-money/payouts.md#financial-accounts-as-external-accounts) guide for more information.

- You can’t accelerate payouts from the platform account balance to the platform financial account balance.

## Retrieving platform financial account details

You can retrieve the details of your platform financial accounts through the API and the Stripe Dashboard.

#### Dashboard

View your platform financial accounts, along with their routing numbers, account numbers, and balances, in the **Financial accounts** section under the **Balances** tab of your Stripe [Dashboard](https://dashboard.stripe.com/test/treasury/balances).

Click a platform financial account to open an expanded view, where you can see more detailed information, including:

- Financial account features
- Balance history
- Recent transactions
- Events and logs

#### API

Use `GET /v1/treasury/financial_accounts` to list all the details of your platform financial accounts through the API. A `Stripe-Account` header isn’t included, signaling this request is for the platform financial account.

```curl
curl https://api.stripe.com/v1/treasury/financial_accounts \
  -u "<<YOUR_SECRET_KEY>>:"
```

If successful, the response includes your platform financial account `id`. You can use the financial account ID to directly retrieve your platform financial account details using `GET /v1/treasury/financial_accounts/{{FINANCIALACCOUNT_ID}}`.

```curl
curl https://api.stripe.com/v1/treasury/financial_accounts/{{TREASURYFINANCIALACCOUNT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:"
```

The `FinancialAccount` object displays the data that defines your financial account, including your balance and the balance of any pending transactions.

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
    // `closed` is null if financial account is not closed
    "closed": {
      // List of one or more reasons why the FinancialAccount was closed:
      // - account_rejected
      // - closed_by_platform
      // - other
      "reasons": []
    }
  },

  // User-defined metadata
  "metadata": {}
}
```

### Retrieve platform financial account features

Use `GET /v1/treasury/financial_accounts/{{FINANCIALACCOUNT_ID}}/features` to retrieve your platform’s financial account feature information.

```curl
curl https://api.stripe.com/v1/treasury/financial_accounts/{{TREASURYFINANCIALACCOUNT_ID}}/features \
  -u "<<YOUR_SECRET_KEY>>:"
```

If successful, the response itemizes the features assigned to your platform financial account.

```json
{
  "object": "treasury.financial_account_features",
  "card_issuing": {
    "requested": true,
    "status": "active",
    "status_details": []
  },
  "deposit_insurance": {
    "requested": true,
    "status": "active",
    "status_details": []
  },
  "financial_addresses": {
    "aba": {
      "requested": true,
      "status": "active",
      "status_details": []
    }
  },
  "inbound_transfers": {
    "ach": {
      "requested": true,
      "status": "active",
      "status_details": []
    }
  },
  "intra_stripe_flows": {
    "requested": true,
    "status": "active",
    "status_details": []
  },
  "outbound_payments": {
    "ach": {
      "requested": true,
      "status": "active",
      "status_details": []
    },
    "us_domestic_wire": {
      "requested": true,
      "status": "active",
      "status_details": []
    }
  }
}

```

## Create additional financial accounts for your platform

You can create up to 3 financial accounts on your platform account. Use `POST /v1/treasury/financial_accounts` without a `Stripe-Account` header to create a new financial account.

## Platform default financial account

Your platform includes one default financial account, which Stripe uses to service your platform. For example, Stripe uses the default financial account to remediate negative balances incurred by connected accounts.

By default, the first financial account you create on your platform account becomes your default financial account. To verify this, check that the `is_default` field is set to `true` on the financial account.

## Moving money between the financial accounts of the platform and its connected accounts

Use `OutboundPayments` over the `stripe` network to instantly move funds between a platform financial account and the financial accounts of connected accounts associated with the same platform. See [Creating an OutboundPayment to a financial account](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/outbound-payments.md#create-obp-for-fa) for more information.

## See also

- [Financial Accounts for platforms account structure](https://docs.stripe.com/financial-accounts/connect/account-management/accounts-structure.md)
- [Working with connected accounts](https://docs.stripe.com/financial-accounts/connect/account-management/connected-accounts.md)
- [Working with balances](https://docs.stripe.com/financial-accounts/connect/account-management/working-with-balances-and-transactions.md)
- [Moving money into financial accounts](https://docs.stripe.com/financial-accounts/connect/moving-money/moving-money-into-financial-accounts.md)
- [Moving money out of financial accounts](https://docs.stripe.com/financial-accounts/connect/moving-money/moving-money-out.md)
