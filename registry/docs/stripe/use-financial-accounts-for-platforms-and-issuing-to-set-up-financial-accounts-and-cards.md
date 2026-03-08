# Use Financial Accounts for platforms and Issuing to set up financial accounts and cards

Follow a sample Financial Accounts for platforms and Issuing integration that sets up a financial account and creates cards.

Homebox is a fictitious vertical SaaS that builds software for home-services companies like HVAC technicians, cleaners, and plumbers. Homebox begins its Financial Accounts for platforms integration by setting up a financial account and creating payment cards. To see how Homebox moves money to and from external bank accounts, see the [Using Financial Accounts for platforms to move money](https://docs.stripe.com/financial-accounts/connect/examples/moving-money.md) example integration.

## Platform onboarding

Homebox is already a Stripe platform with [Payments](https://docs.stripe.com/payments.md) and [Connect](https://docs.stripe.com/connect.md) enabled. Homebox uses [Custom connected accounts](https://docs.stripe.com/connect/accounts.md), and those connected accounts already have the `card_payments` capability enabled.

## Add capabilities

> #### Accounts v2 API compatibility
>
> The Accounts v2 API doesn’t support Financial Accounts workflows. If you have accounts created with Accounts v2, you can use Accounts v1 to manage the `treasury` and `card_issuing` capabilities. For details, see [Use Accounts as customers](https://docs.stripe.com/connect/use-accounts-as-customers.md).

To use Financial Accounts for platforms and Issuing services, Homebox needs to request the additional `treasury` and `card_issuing` capabilities for the platform’s connected accounts. Each connected account must then onboard before Stripe can create a financial account for it.

To use ACH transfers with Financial Accounts for platforms, Homebox also needs to request the `us_bank_account_ach_payments` capability.

To request the `treasury`, `card_issuing`, and `us_bank_account_ach_payments` capabilities, Homebox makes a request to the [Accounts API](https://docs.stripe.com/api/accounts.md).

```curl
curl https://api.stripe.com/v1/accounts/{{CONNECTED_ACCOUNT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "capabilities[treasury][requested]"=true \
  -d "capabilities[card_issuing][requested]"=true \
  -d "capabilities[us_bank_account_ach_payments][requested]"=true
```

To use Hosted Onboarding, Homebox makes a call to [Account Links](https://docs.stripe.com/api/account_links.md) to retrieve a URL that their connected account can use to submit onboarding information for the financial account.

```curl
curl https://api.stripe.com/v1/account_links \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d account="{{CONNECTEDACCOUNT_ID}}" \
  --data-urlencode refresh_url="https://example.com/reauth" \
  --data-urlencode return_url="https://example.com/return" \
  -d type=account_onboarding
```

The response includes a URL the connected account uses to access the application, which must be done before the link expires.

```json
{
  "object": "account_link",
  "created": 1612927106,
  "expires_at": 1612927406,"url": "https://connect.stripe.com/setup/s/iCtLfmYb2tEU"
}
```

Homebox listens for the `account.updated` webhook to confirm the following fields and capabilities on the connected account:

```json
{
  "object": {
    "id": "{{CONNECTED_ACCOUNT_ID}}",
    "object": "account",
    "capabilities": {
      "card_payments": "active",
      "treasury": "active",
      "card_issuing": "active", // Only appears if requesting the `card_issuing` capability.
      "us_bank_account_ach_payments": "active", // Only appears if requesting the `us_bank_account_ach_payments` capability.
    },
    ...
  }
}
```

## Create a FinancialAccount

After Stripe adds the `treasury` capability to an account, Homebox can create the `FinancialAccount` object for the account. To do so, Homebox calls the [Financial Accounts API](https://docs.stripe.com/api/treasury/financial_accounts.md) and requests the `Features` the company wants to provide.

```curl
curl https://api.stripe.com/v1/treasury/financial_accounts \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "supported_currencies[]"=usd \
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

The response confirms the account is processing. After processing completes and all relevant features are active, Homebox gets a confirmation from their `treasury.financial_account.features_status_updated` webhook listener.

```json
{
  "object": "treasury.financial_account",
  "created": 1612927106,
  "id": "{{FINANCIAL_ACCOUNT_ID}}",
  "country": "US",
  "supported_currencies": ["usd"],
  "financial_addresses": [ // This field is empty until the "financial_addresses.aba" feature becomes active
    {
      "type": "aba",
      "supported_networks": ["ach", "us_domestic_wire"],
      "aba": {
        "account_number_last4": "7890",
        // Use the expand[] parameter to view the `account_number` field hidden by default
        "account_number": "1234567890",
        "routing_number": "000000001",
        "bank_name": "Bank of Earth"
      }
    }
  ],
  "livemode": true,

  // State machine:
  // open - the account is ready to be used
  // closed - the account is closed
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

  "active_features": ["card_issuing"],
  "pending_features": ["deposit_insurance", "financial_addresses.aba", "outbound_payments.ach", "us_domestic_wire", "inbound_transfers.ach", "outbound_transfers.ach", "outbound_transfers.us_domestic_wire"],
  "restricted_features": [],

  "features": {
    "object": "treasury.financial_account_features",
    "card_issuing": {
      "status": "active",
      "status_details": [],
      "access": "active"
    },
    "deposit_insurance": {
      "requested": true,
      "status": "pending", // Becomes "active" after the financial account is set up
      "status_details": [{"code": "activating", "resolution": null}]
    },
    "financial_addresses": {
      "aba": {
        "requested": true,
        "status": "pending", // Becomes "active" after the financial account is set up
        "status_details": [{"code": "activating", "resolution": null}]
      }
    },
    "outbound_payments": {
      "ach": {
        "requested": true,
        "status": "pending", // Becomes "active" after the financial account is set up
        "status_details": [{"code": "activating", "resolution": null}]
      },
      "us_domestic_wire": {
        "requested": true,
        "status": "pending", // Becomes "active" after the financial account is set up
        "status_details": [{"code": "activating", "resolution": null}]
      }
    },
    "inbound_transfers": {
      "ach": {
        "requested": true,
        "status": "pending", // Becomes "active" after the financial account is set up
        "status_details": [{"code": "activating", "resolution": null}]
      }
    },
    "outbound_transfers": {
      "ach": {
        "requested": true,
        "status": "pending", // Becomes "active" after the financial account is set up
        "status_details": [{"code": "activating", "resolution": null}]
      },
      "us_domestic_wire": {
        "requested": true,
        "status": "pending", // Becomes "active" once the financial account is set up
        "status_details": [{"code": "activating", "resolution": null}]
      }
    }
  },
  "platform_restrictions": {
    "inbound_flows": "unrestricted",
    "outbound_flows": "unrestricted"
  },
  "metadata": {},
  ...
}

```

## Create a payment cardholder

Before Homebox can create cards for financial accounts, it needs to create cardholders. The cardholders in this example are plumbers who use Homebox services and own the connected accounts on the platform.

# Dashboard

> This is a Dashboard for when testing-method is without-code. View the full page at https://docs.stripe.com/financial-accounts/connect/examples/financial-accounts?testing-method=without-code.

1. Visit the [Connected accounts](https://dashboard.stripe.com/test/issuing/cards) page in the Dashboard.
2. Select the connected account you want to create a cardholder on to expand its details.
3. Select the **Card issuing** tab.
4. Click the **+** button next to **Cardholders**.
5. Fill in the cardholder’s details and click **Create cardholder**.

# API

> This is a API for when testing-method is with-code. View the full page at https://docs.stripe.com/financial-accounts/connect/examples/financial-accounts?testing-method=with-code.

```curl
curl https://api.stripe.com/v1/issuing/cardholders \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d name="Jenny Bath Remodeling" \
  -d type=company \
  --data-urlencode email="jenny@example.com" \
  --data-urlencode phone_number="+18008675309" \
  -d status=active \
  -d "billing[address][line1]"="1234 Main Street" \
  -d "billing[address][city]"="San Francisco" \
  -d "billing[address][state]"=CA \
  -d "billing[address][postal_code]"=94111 \
  -d "billing[address][country]"=US
```

The response confirms the cardholder is created.

```json
{
    "id": "{{CARDHOLDER_ID}}",
    "object": "issuing.cardholder",
    "billing": {
        "address": {
            "city": "\"San Francisco\"",
            "country": "US",
            "line1": "\"1234 Main Street\"",
            "postal_code": "94111",
            "state": "CA"
        }
    },
    "created": 1623803705,
    "email": "jenny@example.com",
    "livemode": false,
    "metadata": {},
    "name": "Jenny Bath Remodeling",
    "phone_number": "+18008675309",
    "requirements": {
        "disabled_reason": "under_review",
        "past_due": []
    },
    "spending_controls": {
        "allowed_categories": [],
        "blocked_categories": [],
        "spending_limits": []
    },
    "status": "active",
    "type": "company"
}
```

## Create payment cards

Now that the connected account has a `FinancialAccount` object associated with it and an available cardholder, Homebox can create a payment card using the `FinancialAccount` balance as the card’s available balance.

# Dashboard

> This is a Dashboard for when testing-method is without-code. View the full page at https://docs.stripe.com/financial-accounts/connect/examples/financial-accounts?testing-method=without-code.

> You can’t create [Financial accounts](https://docs.stripe.com/financial-accounts/connect/account-management/financial-accounts.md) in the Dashboard. You must use the API to create them.

1. Visit the [Connected accounts](https://dashboard.stripe.com/test/issuing/cards) page in the Dashboard.
2. Select the connected account you want to create a cardholder on to expand its details.
3. Select the **Card issuing** tab.
4. Click the **+** button next to **Cards**.
5. Select the card type and the financial account that you want to fund the card with and click **Create**.

# API

> This is a API for when testing-method is with-code. View the full page at https://docs.stripe.com/financial-accounts/connect/examples/financial-accounts?testing-method=with-code.

```curl
curl https://api.stripe.com/v1/issuing/cards \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d currency=usd \
  -d type=virtual \
  -d cardholder="{{ISSUINGCARDHOLDER_ID}}" \
  -d financial_account="{{TREASURYFINANCIALACCOUNT_ID}}"
```

The response confirms the card is issued.

```json
{
  "id": "{{CARD_ID}}",
  "object": "issuing.card",
  "cardholder": {
    "id": "{{CARDHOLDER_ID}}",
    "object": "issuing.cardholder",
    "billing": {
      "address": {
        "city": "San Francisco",
        "country": "US",
        "line1": "123 Main Street",
        "line2": null,
        "postal_code": "94111",
        "state": "CA"
      }
    },
    ...
  },
  "created": 1643293629,
  "currency": "usd",
  "exp_month": 12,
  "exp_year": 2024,
  "last4": "0930",
  "livemode": false,
  ...
}

```

## See also

- [Using Financial Accounts for platforms to move money](https://docs.stripe.com/financial-accounts/connect/examples/moving-money.md)
- [API reference](https://docs.stripe.com/api/treasury/financial_accounts.md)
