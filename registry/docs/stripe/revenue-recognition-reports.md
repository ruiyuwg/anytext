# Revenue Recognition reports

Generate and export revenue reports using Stripe Revenue Recognition.

Stripe Revenue Recognition automatically generates reports that you can view in the Stripe Dashboard and export as CSV files. These reports include key information such as revenue and deferred revenue. They’re available in both aggregate views for high-level analysis, and detailed views so you can validate data.

## Integration requirements

Stripe Revenue Recognition assumes that you’ve properly modeled your business. This includes:

- Modeling subscriptions using [products and prices](https://docs.stripe.com/products-prices/overview.md), and [customers](https://docs.stripe.com/billing/customer.md).
- Setting taxes using the [default\_tax\_rates](https://docs.stripe.com/api/subscriptions/object.md#subscription_object-default_tax_rates) attribute, not as line items.
- Setting discounts using the [discount](https://docs.stripe.com/api/subscriptions/object.md#subscription_object-discount) object, not as *invoice* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice) items.

> Revenue recognition requirements vary based on a number of factors, including the location of your business and the goods and services that you sell. You need to make sure that you understand and comply with the requirements applicable to your business, and that you model your business accordingly.

## Dashboard

The Revenue Recognition section of your Dashboard provides high-level information regarding the operations and financial health of your business. It includes [graphs for recognized revenue and deferred revenue](https://dashboard.stripe.com/revenue-recognition), a [monthly summary](https://dashboard.stripe.com/revenue-recognition), and a [revenue waterfall report](https://dashboard.stripe.com/revenue-recognition/accounting-reports).

The Revenue Recognition section is also where you can manage your Stripe integration, such as [uploading your revenue data](https://dashboard.stripe.com/revenue-recognition/data-import), [defining custom rules](https://dashboard.stripe.com/revenue-recognition/rules) on how to treat your revenue, and [mapping to the chart of accounts](https://docs.stripe.com/revenue-recognition/chart-of-accounts.md) that you use in your general ledger.

> Revenue Recognition generates reports from transactions processed by Stripe. Expect a 72 hour delay before the data displays in the Dashboard.
>
> Also, all report information is accessible only after you [import the data](https://docs.stripe.com/revenue-recognition/data-import.md).

### Revenue graphs

The revenue graphs in the Dashboard provide a high-level view of your business by displaying revenue activity over time. The recognized revenue graph shows your net recognized revenue and the deferred revenue graph shows your ending balance per month.

The monthly and daily charts differentiate between open and closed accounting periods using colors. The figures continue to change until the accounting period closes. Toggling to the daily view provides a day-by-day snapshot of recognized and deferred revenue for the selected month. Revenue from usage-based billing is recognized in full when invoices finalize, or when the accounting period closes.

### AR aging graphs

The accounts receivable (AR) aging graphs in the Dashboard provide a high-level view of your accounts receivable activity over time. Use this information to understand the financial health of your customers. The balance graph shows the outstanding invoice amounts for the specified periods. The summary table shows unpaid invoice amounts and categorizes them by how long the invoices have been outstanding for the specified period.

### Monthly summary

The [monthly summary](https://docs.stripe.com/revenue-recognition/reports/monthly-summary.md) provides a detailed breakdown of activity for the last complete month. Use this information to understand how your activity affected revenue and to book journal entries. You can also see activity that contributed to your net revenue. For example, you can see the portions of new billings that you recognized, and contra revenue items. This section also lists changes to deferred revenue based on your activity, like portions of new billings that you haven’t recognized and contra revenue items.

The monthly summary only shows details if you had activity. For example, if you don’t have any contra revenue, the monthly summary doesn’t include it.

### Revenue waterfall

The [revenue waterfall](https://docs.stripe.com/revenue-recognition/reports/waterfall.md), sometimes called a revenue schedule chart, displays expected recognizable revenue over time. Use this to understand how activity from each period affects revenue in future periods.

This report shows expected revenue amounts based on historical billings. It doesn’t model future billings and it doesn’t predict future revenue from those potential billings. The expected future revenue amounts change as you add future billings.

### Statements and CSV reports

Use the [Statements tab](https://dashboard.stripe.com/revenue-recognition/statements) to access all key financial reports associated with revenue recognition in Stripe. You can view summaries and detailed breakdowns, download financial documents, and share feedback on the reports.
![Statements tab](https://b.stripecdn.com/docs-statics-srv/assets/statements-old.8233b1c5cb4ac74526eed1ef9c5b3463.png)

#### Statements overview

In the Statements tab, access:

| Report Type                                                                                                   | Description                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Balance sheet](https://docs.stripe.com/revenue-recognition/reports/balance-sheet.md)                         | Review your company’s assets and liabilities at a specific time to gauge overall financial stability.                                                                                                                                                                                      |
| [Income statement](https://docs.stripe.com/revenue-recognition/reports/income-statement.md)                   | Analyze your revenue, expenses, and net income to understand financial performance over a specific period.                                                                                                                                                                                 |
| [Trial balance](https://docs.stripe.com/revenue-recognition/reports/trial-balance.md)                         | Prepare for book closing and make sure all debit and credit account balances are equal to confirm balanced books. Click on **Net change** amounts to audit detailed transaction activity.                                                                                                  |
| [Accounts receivable aging](https://docs.stripe.com/revenue-recognition/reports/accounts-receivable-aging.md) | Monitor outstanding invoices categorized by age to evaluate customer payment behavior and manage credit risk.                                                                                                                                                                              |
| [Debits and credits](https://docs.stripe.com/revenue-recognition/reports/debits-and-credits.md)               | Examine detailed transaction entries to uphold accurate bookkeeping and aid in the reconciliation of accounts. Use the **Entries** filter to view all transactions or isolate [corrections](https://docs.stripe.com/revenue-recognition/reports/debits-and-credits.md#review-corrections). |

Reports available in the [Statements tab](https://dashboard.stripe.com/revenue-recognition/statements) integrate with other financial management tools in Stripe, which helps ensure consistency and facilitate financial processing.

You can download any accounting report or statement you’re viewing by clicking **Download**. Below is a list of the different report formats available to you for download as a CSV file:

| Report format            | Description                                                                                                                                                                                                                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Summary**              | This report provides a summary of revenue recognition on your account for the selected period.                                                                                                                                                                                                                                                          |
| **Product**              | This report provides a detailed view of revenue recognition on your account over the selected period, organized by product.                                                                                                                                                                                                                             |
| **Price**                | This report provides a detailed view of revenue recognition on your account over the selected period, organized by price. It can include information such as pricing metadata and pricing intervals.                                                                                                                                                    |
| **Customer**             | This report provides a detailed view of revenue recognition on your account over the selected period, organized by customer. It can include information such as customer name, email, and address.                                                                                                                                                      |
| **Invoice**              | This report provides a detailed view of revenue recognition on your account over the selected period, organized by invoice. It can include information such as charges, refunds, and dispute IDs.                                                                                                                                                       |
| **Line item**            | This report provides a detailed view of revenue recognition on your account over the selected period, organized by line item. It can include information at the granularity of a line item (such as charges, refunds, and dispute IDs).                                                                                                                 |
| **Metadata**             | This report provides a customized summary of revenue recognition on your account for the selected period, grouped by the user selected metadata object type and key. This report supports grouping by charge, customer, invoice, invoice item, product, or subscription metadata. Learn more about [metadata](https://docs.stripe.com/api/metadata.md). |
| **Event type**           | This report is available in the debits and credits reports. It provides a detailed view of revenue recognition on your account over the selected period, organized by event type. The event type provides a brief description of the recorded event, which can help you understand the nature of each journal entry.                                    |
| **Invoice event type**   | This report is available in the debits and credits reports. It provides a detailed view of revenue recognition on your account over the selected period, organized by invoice and event type. It can include information such as charges, refunds, and dispute IDs.                                                                                     |
| **Line item event type** | This report is available in the debits and credits reports. It provides a detailed view of revenue recognition on your account over the selected period, organized by line item and event type. It can include information at the granularity of a line item (such as charges, refunds, and dispute IDs).                                               |

#### Feedback and customization

The Statements tab lets you provide feedback on each report, which prompts improvements and tailored solutions based on user needs.

## Activity breakdown

The [activity breakdown](https://docs.stripe.com/revenue-recognition/reports/activity-breakdown.md) provides detailed, transaction-level insights into the activity that affects specific accounts in your Revenue Recognition system. Access this view by clicking **Net change** amounts in the [trial balance](https://docs.stripe.com/revenue-recognition/reports/trial-balance.md) to audit the underlying transactions that contribute to account balances and changes.

## See also

- [Revenue Recognition methodology](https://docs.stripe.com/revenue-recognition/methodology.md)
- [Revenue Recognition examples](https://docs.stripe.com/revenue-recognition/examples.md)
