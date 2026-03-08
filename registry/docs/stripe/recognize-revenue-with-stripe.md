# Recognize revenue with Stripe

Learn how to use Stripe for your revenue recognition.

You can import your transaction data, set up rules to automate your revenue recognition, generate and customize revenue reports, and test your transaction model before going live.

All Stripe Revenue Recognition features are available from the [Dashboard](https://dashboard.stripe.com/revenue-recognition).

> #### Try for free
>
> Stripe offers a 30-day free trial for Revenue Recognition if you want to preview it. When you [sign up](https://dashboard.stripe.com), use a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) to explore all the features for free.

## Set up revenue recognition

Revenue Recognition is already automated for some business use cases but requires additional setup for others. Below is a list of some common billing models. Click them to learn more:

### Simple subscriptions

If you have subscriptions through Stripe Billing (like monthly, quarterly, and so on), no further setup is required. Stripe Revenue Recognition automatically recognizes this revenue for you.

Stripe recognizes the transaction amount by the service period for each [invoice line item](https://docs.stripe.com/api/invoice-line-item/object.md). By default, we recognize the revenue by the second.

> If you want to recognize your subscription revenue by the month, instead of by the second, please [create a ticket](https://support.stripe.com/contact/email?topic=financial_reports) on our support page to join our beta.

As an example, say you have a customer who started an annual subscription on September 1 for the price of 365 USD. If you want to recognize the amount monthly, your report at the end of December would show this:

| Account         | Sep 2026 | Oct 2026 | Nov 2026 | Dec 2026 |
| --------------- | -------- | -------- | -------- | -------- |
| Revenue         | +30.00   | +31.00   | +30.00   | +31.00   |
| DeferredRevenue | +335.00  | -31.00   | -30.00   | -31.00   |

### Usage-based billing subscriptions

No further setup is required if you have a usage-based billing metered event through Stripe Billing. Stripe Revenue Recognition automatically recognizes this revenue for you.

As an example, say you have a customer on a pricing model where it costs 1 USD per unit with a subscription for 100 units. They consume these units over multiple days and months as follows:

- 20 units on March 2
- 25 units on March 30
- 15 units on April 1
- 25 units on April 20
- 15 units on April 28

In this case, the customer consumes a total of 45 units in March and 55 units in April without being billed. The ledger entries for this revenue recognition are as follows:

| Month | Debit                      | Credit  | Amount | Description                           |
| ----- | -------------------------- | ------- | ------ | ------------------------------------- |
| March | UnbilledAccountsReceivable | Revenue | 45.00  | Revenue in March from 45 usage units. |
| April | UnbilledAccountsReceivable | Revenue | 55.00  | Revenue in April from 55 usage units. |

### Billed usage-based metered event

Based on your configuration, Stripe creates an invoice for the consumed units that reflects the recorded usage.

To continue with the previous example, Stripe finalizes an invoice on April 1, for a total consumption of 60 units. At the end of the month, the journal entries appear as follows:

| Month | Debit                      | Credit                     | Amount | Description                                                            |
| ----- | -------------------------- | -------------------------- | ------ | ---------------------------------------------------------------------- |
| March | UnbilledAccountsReceivable | Revenue                    | 45.00  | Revenue in March from 45 usage units.                                  |
| April | UnbilledAccountsReceivable | Revenue                    | 55.00  | Revenue in April from 55 usage units.                                  |
| April | Revenue                    | UnbilledAccountsReceivable | 60.00  | The reversal of revenue with the April invoice for billed usage units. |

### Third-party recurring billing

You can set up [rules](https://docs.stripe.com/revenue-recognition/rules.md) to automatically recognize your recurring revenue even if you don’t use Stripe Billing (but still use Stripe as a payment gateway).

As an example, say you receive two types of recurring payments from your customers: a 10 USD payment and a 120 USD payment. You need to recognize the 10 USD payment over 1 month, and the 120 USD payment over 1 year, so you [create these revenue recognition rules](https://dashboard.stripe.com/revenue-recognition/rules/create):

| Name                                  | Apply to                                                       | Treatment                                                                                                         |
| ------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `Recognize 10.00 USD over 1 month`    | **Other payments**

- **Amount is equal to** `10.00` **USD**  | **Amortize over custom service period**
- **Amortize starting** `0` **Days from paid time over** `1` **Months** |
  | `Recognize 120.00 USD over 12 months` | **Other payments**
- **Amount is equal to** `120.00` **USD** | **Amortize over custom service period**
- **Amortize starting** `0` **Days from paid time over** `1` **Years**  |

### Product bundles

Use more than one invoice item to structure a product bundle so you can recognize the revenue from more than one product. Each invoice item represents a different product with its own amount and service period.

You can create invoice items with these APIs:

- [Invoice Items](https://docs.stripe.com/api/invoiceitems.md)—Create an invoice item with a specific service period and amount. When you create an invoice, Stripe automatically includes the invoice items in the invoice for you.
- [Subscription Schedules](https://docs.stripe.com/api/subscription_schedules.md)—Create a schedule for a subscription. You can add one-time invoice items to a subscription schedule that would show up in an invoice. This can be useful for one-time fees on a recurring service.

If you want to recognize revenue differently for any invoice item, [import the recognition dates](https://docs.stripe.com/revenue-recognition/data-import.md) that Stripe should use.

As an example, say you offer a 9 USD monthly service with a one-time setup fee of 50 USD. The invoices would look something like:

| Date     | Invoice                                              |
| -------- | ---------------------------------------------------- |
| Jan 2026 | 9.00 monthly service fee

50.00 one-time setup fee |
| Feb 2026 | 9.00 monthly service fee                             |
| Mar 2026 | 9.00 monthly service fee                             |

The revenue schedule would look something like:

| Month    | Revenue |
| -------- | ------- |
| Jan 2026 | 59.00   |
| Feb 2026 | 9.00    |
| Mar 2026 | 9.00    |

## Generate reports and charts

By default, the Dashboard displays all [revenue recognition reports and charts](https://docs.stripe.com/revenue-recognition/reports.md#dashboard) by accounting periods (which we define as the start and end dates of a given month). It takes up to 24 hours for reports to generate and become available for download.

> If you’d like to recognize revenue based on custom accounting periods such as the 4-5-4 retail calendar, please [create a ticket](https://support.stripe.com/contact/email?topic=financial_reports) on our support page to join our beta.

Below is a short summary of the reports and charts you can view, download, or both.

| Reports and charts            | Description                                                                                                                                                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Revenue overview**          | High-level bar graphs that show your revenue activity (that is, your net recognized revenue and your ending balance per month) over time.                                                                               |
| **Monthly summary**           | Details of the accounting activities for the last month or a specified previous month. See [Monthly summary](https://docs.stripe.com/revenue-recognition/reports/monthly-summary.md) for more information.              |
| **Revenue waterfall**         | Displays expected recognizable revenue over time. This is also referred to as a revenue schedule chart. See [Revenue waterfall](https://docs.stripe.com/revenue-recognition/reports/waterfall.md) for more information. |
| **Income statement**          | Details of the revenue and contra revenue by month.                                                                                                                                                                     |
| **Balance sheet**             | Details of the balance sheet account by month.                                                                                                                                                                          |
| **Debits and credits**        | Details of the monthly debit-credit journal entries for accounts with activity.                                                                                                                                         |
| **Accounts receivable aging** | Details of the monthly and MTD outstanding invoice amounts that affect the accounts receivable ledger account.                                                                                                          |
| **Corrections**               | Details of the monthly debit-credit correction journal entries for accounts.                                                                                                                                            |
| **Trial balance**             | Shows the account balances for each general ledger account during each accounting period. See [Trial balance](https://docs.stripe.com/revenue-recognition/reports/trial-balance.md) for more information.               |

Sometimes you’ll see mismatches between your accounting reports after you import the data and set up Stripe.

## Test your transaction model

Use a sandbox in the Dashboard to generate test revenue reports based on your transactions.

Before going live, you can test the transaction model without your test transactions. Create rules to exclude transactions from specific customers, products, invoices, or payments.

For example, you can exclude all revenues produced by a test customer, named `test@example.com`. [Create a rule](https://dashboard.stripe.com/revenue-recognition/rules/create) that applies to this customer and choose **Exclude revenue 100%** as the revenue treatment.

## Other considerations

You might need to handle other considerations such as [tax revenue](https://docs.stripe.com/revenue-recognition/get-started.md#third-party-tax), [passthrough fees](https://docs.stripe.com/revenue-recognition/get-started.md#passthrough-fees), [amortization granularity](https://docs.stripe.com/revenue-recognition/revenue-settings.md#amortization-granularity), and [catch-up revenue](https://docs.stripe.com/revenue-recognition/revenue-settings.md#catch-up-revenue). You can further set up revenue recognition so Stripe can handle it for you.

### Recognize tax revenue from third-party solutions

You can set up rules for Stripe Revenue Recognition to automatically calculate your tax revenue if you’re not using Stripe Tax.

First, set the tax amount to the [tax](https://docs.stripe.com/billing/taxes/tax-rates.md) parameter of an invoice or an invoice line item. Then, set up a rule to recognize the amount as tax. You can track the revenue from tax in the reports under **Tax liability**.

As an example, say you’re using Avalara AvaTax to calculate sales tax for your products. You want to treat the invoice line item for `AvaTax` as tax so you [create this rule](https://dashboard.stripe.com/revenue-recognition/rules/create):

| Name                                | Apply to                                                                           | Treatment                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------ |
| `Recognize tax revenue from AvaTax` | **Invoices**

- **Line item description contains all of the following:** `AvaTax` | **Treat as tax**
- **Allocation** `100%` |

### Calculate passthrough fees

You can set up [rules](https://docs.stripe.com/revenue-recognition/rules.md) so Stripe can automatically calculate the passthrough fees and, separately, your revenue on [invoice line items](https://docs.stripe.com/api/invoice-line-item/object.md) or a portion of an invoice line item.

For example, say you have an invoice line item `Service A` that costs 100 USD. You want to recognize 10 USD as passthrough fees and recognize 90 USD as revenue, so you [create this rule](https://dashboard.stripe.com/revenue-recognition/rules/create):

| **Name**                              | **Apply to**                                                                           | **Treatment**                                                                                                                                                                                                                       |
| ------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Service A includes passthrough fees` | **Invoices**

- **Line item description contains all of the following:** `Service A` | **Defer upon event & amortize over line item service period**

- **Allocation** `90%`

- **Defer from finalized time and amortize over line item service period**

**Treatment as passthrough fees**

- **Allocation** `10%` |

### Adjust revenue recognition controls

While Stripe Revenue Recognition is designed to work out-of-the-box for many business types, we understand that each business might have unique needs. We offer advanced configurations on your revenue recognition reporting through our [Controls](https://docs.stripe.com/revenue-recognition/revenue-settings.md) page, where you can easily adjust for settings like revenue amortization granularity and catch-up revenue treatment.

## See also

- [Subscriptions and Tax](https://docs.stripe.com/billing/taxes/collect-taxes.md)
