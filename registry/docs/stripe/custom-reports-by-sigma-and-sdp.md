# Custom reports by Sigma and SDP

Learn how to build your own Revenue Recognition reports using Sigma and SDP.

You can build your customized reports using `revenue_recognition_debits_and_credits` and other tables in [Sigma](https://docs.stripe.com/stripe-data/how-sigma-works.md).

## Recognized revenue from unpaid invoices example

This sample query generates a report for revenue recognized from the unpaid open invoices and groups the invoices by invoice ID. You can add your desired time frames and adjust the grouping parameters.

> If you’re using our [chart of accounts](https://docs.stripe.com/revenue-recognition/chart-of-accounts.md) beta feature, be sure to update the `debit` and `credit` mappings in the query below to reflect the accounts in your general ledger.

```sql
with revrec as (
  select
    *
  from
    revenue_recognition_debits_and_credits
  where
    debit = 'DeferredRevenue' and credit = 'Revenue'
), sigmainv as (
  select
    *
  from
    invoices
  where
    status = 'open'
)
select
  revrec.invoice_id,
  SUM(revrec.presentment_amount) AS recognized_revenue
from
  sigmainv
  left join revrec on revrec.invoice_id = sigmainv.id
group by revrec.invoice_id
```
