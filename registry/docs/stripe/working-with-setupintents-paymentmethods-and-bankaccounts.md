# Working with SetupIntents, PaymentMethods, and BankAccounts

Set up money movements with Financial Accounts for platorms.

> #### Accounts v2 API compatibility
>
> The Accounts v2 API doesn’t support Financial Accounts workflows. If you have accounts created with Accounts v2, you can use Accounts v1 to manage the `treasury` and `card_issuing` capabilities. For details, see [Use Accounts as customers](https://docs.stripe.com/connect/use-accounts-as-customers.md).

You can use [PaymentMethod](https://docs.stripe.com/payments/payment-methods.md#payment-method-object) objects to save account credentials for a US-based bank account for future use. After creating the `PaymentMethod`, you can use the same object repeatedly to move funds into and out of a financial account. Depending on your use case, you can attach the `PaymentMethod` to either a [Customer](https://docs.stripe.com/api/customers.md) object or the Stripe account.

- Attach the `PaymentMethod` to a `Customer` object if you intend to use the payment method for an outbound payment to a third party.
- Attach the `PaymentMethod` to a connected account or platform account if you intend to use the payment method for an inbound transfer or outbound transfer between an external account that belongs to the same business as the Stripe account.

> The `Customer` object defines a third-party entity that represents the owner of an external bank account.

If you previously collected customer payment details with Stripe using the [BankAccounts](https://docs.stripe.com/ach-deprecated.md) object, you can substitute the `BankAccount` for a `PaymentMethod` in those requests. For `InboundTransfers`, the `BankAccount` `status` value in this case must be `verified`. We recommend using `PaymentMethods` where possible to get the full suite of features.

In some cases, banks on the receiving end of ACH money movements notify Stripe that account information (such as account number or routing number) has changed. If we receive a notification for an account associated with a `PaymentMethod` or `BankAccount` object, we automatically update the object. See [ACH NOC and SEC handling](https://docs.stripe.com/financial-accounts/connect/moving-money/noc-sec-handling.md) for more information.

## Create a SetupIntent to save us\_bank\_account details

[SetupIntents](https://docs.stripe.com/payments/setup-intents.md) enable you to set up a payment method to use with money movement endpoints of the Stripe API. Use `SetupIntents` to save customer or account credentials as a payment method and optimize them for the objects you intend to use it with. For example, when setting up a US bank account, it’s necessary to verify the bank account if you intend to debit that external account with an inbound transfer. Stripe updates the `SetupIntent` object throughout the setup process.

The following example demonstrates using a `SetupIntent` with a bank account that allows for bidirectional fund transfers. For complete details on how to set up a payment method for creating payments and bank account verification, see the [Save details for future payments with ACH Direct Debit](https://docs.stripe.com/payments/ach-direct-debit/set-up-payment.md) guide. When setting up payment methods for managing financial account funds with `SetupIntents`, the following fields are the most relevant:

- [flow\_directions](https://docs.stripe.com/api/setup_intents/create.md#create_setup_intent-flow_directions): this array defines the directionality of the flows for a payment method. Its possible values are `inbound` and `outbound`, denoting whether the payment method can move funds into, out of, or both into and out of a financial account. You can also configure an existing payment method to become bidirectional.
- [attach\_to\_self](https://docs.stripe.com/api/setup_intents/create.md#create_setup_intent-attach_to_self): a Boolean flag to indicate whether you want to attach this payment method to the in-context `Account` object. Set this value to true to create an account-attached payment method for managing this account’s own money movement flows such as inbound transfers and outbound transfers.
- [customer](https://docs.stripe.com/api/setup_intents/create.md#create_setup_intent-confirm): ID of the `Customer` object the payment method is attached to on successful setup. You can use `Customer`-attached payment methods with outbound payments to send money to third parties and customers. You can also use them with Stripe Payments `PaymentIntents` to receive money. You must set the `attach_to_self` attribute to false or leave it blank when creating a customer-attached payment method.

### Permissions

To use a payment method for ‘inbound’ flow directions (such as `InboundTransfers`), you need [permission from the account holder](https://docs.stripe.com/payments/setup-intents.md#mandates). Creating this agreement (`Mandate` object) up front and associating it with the payment method allows you to charge the payment method later.

Add terms to your website or app that state how you plan to debit funds from external accounts, and let connected accounts opt in. At a minimum, make sure that your terms cover the following:

- Connected account permission for you to initiate a debit or a series of debits on their behalf
- The anticipated frequency of debits (one-time or recurring)
- How the debit amount is determined

While you need a mandate to debit an external bank account in the US with inbound transfers, you don’t need it to send money to a bank account with outbound transfers or outbound payments.

### Creating a SetupIntent

To create a `SetupIntent`, you must either use an existing payment method with the `payment_method` parameter, or provide new credentials using the inline `payment_method_data` parameter.

Use `POST /v1/setup_intents` to create a `SetupIntent`.

```curl
curl https://api.stripe.com/v1/setup_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d payment_method="{{PAYMENTMETHOD_ID}}"
```

If successful, the response returns the newly created `SetupIntent` object.

#### JSON (commented)

```json
{
  // ID of the Customer to attach the resulting PaymentMethod to
  "customer": "{{CUSTOMER_ID}}",
  "attach_to_self": false,
  // Configure what direction of funds flows this PaymentMethod will support.
  "flow_directions": ["inbound", "outbound"],
 // US Bank Account credentials
  "payment_method_types": ["us_bank_account"],
  "payment_method_data": {
    "type": "us_bank_account",
    "us_bank_account": {
      "routing_number": "12341234",
      "account_number": "0123456789",
      "account_holder_type": "individual" | "company"
    },
    "billing_details": {
      // `name` must be specified for `us_bank_account` type
      "name": "Jenny Rosen",
      "phone": null | "{{String}}",
      "email": null | "{{String}}",
      "address": null | {
        "line1": null | "{{String}}",
        "line2": null | "{{String}}",
        "city": null | "{{String}}",
        "state": null | "{{String}}",
        "postal_code": null | "{{String}}",
        "country": null | "{{String}}"
      }
    }
  },
  // For `inbound` flows, we need to verify the bank account
  "payment_method_options": {
    "us_bank_account": {
      "verification_method": "microdeposits"
    }
  },
  // For `inbound` flows with us_bank_account, we need mandate information
  "mandate_data": {
    "customer_acceptance": {
      "type": "online",
      "online": {
        "ip_address": "123.123.123.123",
        "user_agent": "curl/1.2.3"
      }
    }
  },
  "confirm": true
}
```

The `SetupIntent` has one of the following statuses:

| STATUS            | DESCRIPTION                                                                   | NEXT STEPS                                 |
| ----------------- | ----------------------------------------------------------------------------- | ------------------------------------------ |
| `succeeded`       | The bank account has been instantly verified or verification isn’t necessary. | No action needed.                          |
| `requires_action` | Further action needed to complete bank account verification.                  | See `next_action` for further setup steps. |

After successfully confirming the `SetupIntent`, Stripe sends an email confirmation of the mandate and collected bank account details to your connected account. The default email references Stripe Payments, so if you use Financial Accounts for platforms without Stripe Payments, you might want to turn off Stripe emails and send [custom messages](https://docs.stripe.com/payments/ach-direct-debit.md#mandate-and-microdeposit-emails) instead.
