# Revenue Recognition API

Access Stripe Revenue Recognition reports programmatically to automate your accrual accounting.

For accrual accounting, Stripe Revenue Recognition provides [downloadable reports](https://docs.stripe.com/revenue-recognition/reports.md), such as a [monthly summary](https://docs.stripe.com/revenue-recognition/reports/monthly-summary.md) and a [revenue waterfall](https://docs.stripe.com/revenue-recognition/reports/waterfall.md). You can download these reports in CSV format through the [Dashboard](https://dashboard.stripe.com/revenue-recognition) or you can programmatically access them through the API.

Stripe Revenue Recognition has six supported report types:

- `revenue_recognition.debit_credit_summary.1`
- `revenue_recognition.debit_credit_by_price.1`
- `revenue_recognition.debit_credit_by_product.1`
- `revenue_recognition.debit_credit_by_customer.1`
- `revenue_recognition.debit_credit_by_invoice.1`
- `revenue_recognition.debit_credit_by_invoice_line_item.1`

> Because this feature is in beta, the data fields might change.

## Download a report

The following example downloads the debits and credits by summary for May 2025.

First, create a report run using [Create a Report Run](https://docs.stripe.com/api/reporting/report_run/create.md).

To get a report for May 2025, set `parameters[interval_start]` to 1 May 2025 and `parameters[interval_end]` to 1 Jun 2025.

```curl
curl https://api.stripe.com/v1/reporting/report_runs \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d report_type="revenue_recognition.debit_credit_summary.1" \
  -d "parameters[interval_start]"=1746057600 \
  -d "parameters[interval_end]"=1748736000
```

Next, check whether the [Report Run](https://docs.stripe.com/api/reporting/report_run/object.md) object succeeds by fetching the report run object:

The report run object ID starts with `frr_`.

```curl
curl https://api.stripe.com/v1/reporting/report_runs/{{REPORT_RUN_OBJECT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:"
```

When the object’s `status` is `succeeded`, you can download the CSV using its `result.id` value, as in the following example:

The report run result ID starts with `file_`.

#### curl

```bash
curl https://files.stripe.com/v1/files/{{REPORT_RUN_RESULT_ID}}/contents \
  -u <<YOUR_SECRET_KEY>>:
```

## Report Run Parameters

| Report Type                                             | Required Run Parameters               | Optional Run Parameters                                                 |
| ------------------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------- |
| revenue\_recognition.debit\_credit\_summary.1              | - `interval_start`

- `interval_end` | - `decimal_format`                                                      |
  | revenue\_recognition.debit\_credit\_by\_price.1             | - `interval_start`
- `interval_end` | - `customer`
- `decimal_format`                                       |
  | revenue\_recognition.debit\_credit\_by\_product.1           | - `interval_start`
- `interval_end` | - `customer`
- `decimal_format`                                       |
  | revenue\_recognition.debit\_credit\_by\_customer.1          | - `interval_start`
- `interval_end` | - `decimal_format`                                                      |
  | revenue\_recognition.debit\_credit\_by\_invoice.1           | - `interval_start`
- `interval_end` | - `customer`
- `invoice`
- `invoice_line_item`
- `decimal_format` |
  | revenue\_recognition.debit\_credit\_by\_invoice\_line\_item.1 | - `interval_start`
- `interval_end` | - `customer`
- `invoice`
- `invoice_line_item`
- `decimal_format` |

## Report Run Columns

By default, reports are run with the default set of columns. You can customize the selection and ordering of columns in the output by including the optional columns parameter with a [list of column names](https://docs.stripe.com/reports/api.md#report-runs). You can find the supported columns for each report type below.

### Summary

API report type: `revenue_recognition.debit_credit_summary.1`

| Column Name            | Default   | Description                                                                                               |
| ---------------------- | --------- | --------------------------------------------------------------------------------------------------------- |
| accounting\_period      | ✓ default | The accounting period                                                                                     |
| open\_accounting\_period | ✓ default | The open accounting period; entries in open periods are subject to change                                 |
| currency               | ✓ default | Three-letter [ISO code for the currency](https://docs.stripe.com/currencies.md) of the amount.            |
| debit                  | ✓ default | The debited account                                                                                       |
| credit                 | ✓ default | The credited account                                                                                      |
| amount                 | ✓ default | Amount change, expressed in major units of the currency (for example, dollars for USD, or pesos for MXN). |
| credit\_gl\_code         |           | The credited general ledger code                                                                          |
| debit\_gl\_code          |           | The debited general ledger code                                                                           |

### By Price

API report type: `revenue_recognition.debit_credit_by_price.1`

| Column Name            | Default   | Description                                                                                               |
| ---------------------- | --------- | --------------------------------------------------------------------------------------------------------- |
| accounting\_period      | ✓ default | The accounting period                                                                                     |
| open\_accounting\_period | ✓ default | The open accounting period; entries in open periods are subject to change                                 |
| currency               | ✓ default | Three-letter [ISO code for the currency](https://docs.stripe.com/currencies.md) of the amount.            |
| price\_id               | ✓ default | The price associated with this change.                                                                    |
| debit                  | ✓ default | The debited account                                                                                       |
| credit                 | ✓ default | The credited account                                                                                      |
| amount                 | ✓ default | Amount change, expressed in major units of the currency (for example, dollars for USD, or pesos for MXN). |
| credit\_gl\_code         |           | The credited general ledger code                                                                          |
| debit\_gl\_code          |           | The debited general ledger code                                                                           |

### By Product

API report type: `revenue_recognition.debit_credit_by_product.1`

| Column Name            | Default   | Description                                                                                               |
| ---------------------- | --------- | --------------------------------------------------------------------------------------------------------- |
| accounting\_period      | ✓ default | The accounting period                                                                                     |
| open\_accounting\_period | ✓ default | The open accounting period; entries in open periods are subject to change                                 |
| currency               | ✓ default | Three-letter [ISO code for the currency](https://docs.stripe.com/currencies.md) of the amount.            |
| product\_id             | ✓ default | The product associated with this change.                                                                  |
| debit                  | ✓ default | The debited account                                                                                       |
| credit                 | ✓ default | The credited account                                                                                      |
| amount                 | ✓ default | Amount change, expressed in major units of the currency (for example, dollars for USD, or pesos for MXN). |
| credit\_gl\_code         |           | The credited general ledger code                                                                          |
| debit\_gl\_code          |           | The debited general ledger code                                                                           |

### By Customer

API report type: `revenue_recognition.debit_credit_by_customer.1`

| Column Name            | Default   | Description                                                                                               |
| ---------------------- | --------- | --------------------------------------------------------------------------------------------------------- |
| accounting\_period      | ✓ default | The accounting period                                                                                     |
| open\_accounting\_period | ✓ default | The open accounting period; entries in open periods are subject to change                                 |
| currency               | ✓ default | Three-letter [ISO code for the currency](https://docs.stripe.com/currencies.md) of the amount.            |
| customer\_id            | ✓ default | The customer associated with this change.                                                                 |
| debit                  | ✓ default | The debited account                                                                                       |
| credit                 | ✓ default | The credited account                                                                                      |
| amount                 | ✓ default | Amount change, expressed in major units of the currency (for example, dollars for USD, or pesos for MXN). |
| credit\_gl\_code         |           | The credited general ledger code                                                                          |
| debit\_gl\_code          |           | The debited general ledger code                                                                           |

### By Invoice

API report type: `revenue_recognition.debit_credit_by_invoice.1`

| Column Name            | Default   | Description                                                                                                               |
| ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| accounting\_period      | ✓ default | The accounting period                                                                                                     |
| open\_accounting\_period | ✓ default | The open accounting period; entries in open periods are subject to change                                                 |
| currency               | ✓ default | Three-letter [ISO code for the currency](https://docs.stripe.com/currencies.md) of the amount.                            |
| transaction\_model\_id   | ✓ default | The model in Stripe associated with this change - either an invoice line item, invoice, invoiceitem, charge, or and so on |
| debit                  | ✓ default | The debited account                                                                                                       |
| credit                 | ✓ default | The credited account                                                                                                      |
| booked\_date            | ✓ default | The date that the ledger entry is added to the books.                                                                     |
| amount                 | ✓ default | Amount change, expressed in major units of the currency (for example, dollars for USD, or pesos for MXN).                 |
| debit\_gl\_code          |           | The debited general ledger code                                                                                           |
| credit\_gl\_code         |           | The credited general ledger code                                                                                          |
| invoice\_id             |           | The invoice associated with this change. Standalone charges or invoice items not associated with an invoice are `null`.   |
| invoice\_line\_item\_id   |           | The ID of the invoice line\_item.                                                                                          |
| invoice\_item\_id        |           | The ID of the invoice item                                                                                                |
| invoice\_number         |           | The customer unique number associated with the invoice.                                                                   |
| subscription\_item\_id   |           | The ID of the subscription\_item.                                                                                          |
| price\_id               |           | The price associated with this change. Standalone charges or invoice items not associated with a price are `null`.        |
| product\_id             |           | The product associated with this price.                                                                                   |
| customer\_id            |           | The customer associated with this change.                                                                                 |
| subscription\_id        |           | The subscription associated with this change.                                                                             |
| charge\_id              |           | The charge associated with this change.                                                                                   |
| refund\_id              |           | The refund associated with this change.                                                                                   |
| dispute\_id             |           | The dispute associated with this change.                                                                                  |
| presentment\_currency   |           | The presentment (customer facing) currency of the transaction.                                                            |
| presentment\_amount     |           | The presentment (customer facing) amount.                                                                                 |

### By Invoice Line Item

API report type: `revenue_recognition.debit_credit_by_invoice_line_item.1`

| Column Name            | Default   | Description                                                                                                             |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| accounting\_period      | ✓ default | The accounting period                                                                                                   |
| open\_accounting\_period | ✓ default | The open accounting period; entries in open periods are subject to change                                               |
| currency               | ✓ default | Three-letter [ISO code for the currency](https://docs.stripe.com/currencies.md) of the amount.                          |
| transaction\_model\_id   | ✓ default | The model in Stripe associated with this change—an invoice line item, invoice, invoice item, charge, and so on.         |
| debit                  | ✓ default | The debited account                                                                                                     |
| credit                 | ✓ default | The credited account                                                                                                    |
| booked\_date            | ✓ default | The date that the ledger entry is added to the books.                                                                   |
| amount                 | ✓ default | Amount change, expressed in major units of the currency (for example, dollars for USD, or pesos for MXN).               |
| debit\_gl\_code          |           | The debited general ledger code                                                                                         |
| credit\_gl\_code         |           | The credited general ledger code                                                                                        |
| invoice\_id             |           | The invoice associated with this change. Standalone charges or invoice items not associated with an invoice are `null`. |
| invoice\_line\_item\_id   |           | The ID of the invoice line\_item.                                                                                        |
| invoice\_item\_id        |           | The ID of the invoice item                                                                                              |
| subscription\_item\_id   |           | The ID of the subscription\_item.                                                                                        |
| price\_id               |           | The price associated with this change. Standalone charges or invoice items not associated with a price are `null`.      |
| product\_id             |           | The product associated with this price.                                                                                 |
| customer\_id            |           | The customer associated with this change.                                                                               |
| subscription\_id        |           | The subscription associated with this change.                                                                           |
| charge\_id              |           | The charge associated with this change.                                                                                 |
| refund\_id              |           | The refund associated with this change.                                                                                 |
| dispute\_id             |           | The dispute associated with this change.                                                                                |
| presentment\_currency   |           | The presentment (customer facing) currency of the transaction.                                                          |
| presentment\_amount     |           | The presentment (customer facing) amount.                                                                               |

If you encounter any issues, you can contact <revenue-recognition-api-beta@stripe.com>.
