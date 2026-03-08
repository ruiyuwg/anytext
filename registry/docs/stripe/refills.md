# Refills

Learn how to enable refills for your Capital program.

> Capital for platforms is available in [public preview](https://docs.stripe.com/release-phases.md).

Refills are additional financing offers sent to connected accounts who’ve made substantial repayment progress towards their in-progress financing offer balance. If approved, refill offers pay down the remaining balance on the in-progress balance.

## Before you begin

- This guide assumes you completed an [API integration](https://docs.stripe.com/capital/api-integration.md).
- Refills aren’t enabled by default. After you update your integration to support refills, you must submit details about your integration and API use to Stripe for compliance review using the [Change Request Form](https://form.asana.com/?k=8K51UWmWhttehNFD5qBLdg\&d=974470123217835).

## Refill offer lifecycle

1. Stripe evaluates active Capital connected accounts for refill financing eligibility on a daily basis.

2. When a refill offer is created, you receive a `capital.financing_offer.created` *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) which contains `"product_type": "refill"` to indicate it’s a refill offer.

3. Depending on the `product_type` and `offered_terms.campaign_type` fields, use approved messaging to communicate the financing offer to the customer.

4. The connected account accesses the refill application with the same Account Link setup from the [API set up guide](https://docs.stripe.com/capital/api-integration.md#send-offer-email). The connected account can adjust a custom slider up to the maximum qualified offer amount.
   ![](https://b.stripecdn.com/docs-statics-srv/assets/hosted-refill-application-top.40804c55076712cb0cc698770d8f71c1.png)

   Refill application
   ![](https://b.stripecdn.com/docs-statics-srv/assets/hosted-refill-application-bottom.8c9a6a4c86841af24b3ddf6f2726ae10.png)

   Refill application

5. Connected accounts who accept the refill offer might be offered a discount (taken as a percentage on the remaining premium of their existing balance). This discount rate is exposed as `previous_financing_fee_discount_rate` under `offered_terms`.

6. If the customer accepts the refill offer, we send a `capital.financing_offer.accepted` *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests). The webhook payload contains an `accepted_terms` field with the amounts selected by the customer. The `previous_financing_fee_discount_amount` field is `null` until the previous financing has been fully repaid, and we’ve determined the discount amount. If there’s no discount, `previous_financing_fee_discount_amount` remains `null` even after the previous financing has been fully repaid.

   Example webhook:

   ```json
   {
       "type": "capital.financing_offer.accepted",
       "api_version": "2022-02-28",
       "created": 123456789,
       "data": {
           "object": {
               "id": "financingoffer_abcdef123456",
               "object": "capital.financing_offer",
               "account": "acct_abcdef123456",
               "created_at": 123456789,
               "expires_after": 123456789,
               "livemode": true,
               "status": "accepted",
               "accepted_terms": {
                   "currency": "usd",
                   "advance_amount": 100000,
                   "fee_amount": 10000,
                   "withhold_rate": 0.15,
                   "previous_financing_fee_discount_amount": null
               },
               "financing_type": "flex_loan",
               "offered_terms": {
                   "currency": "usd",
                   "advance_amount": 100000,
                   "fee_amount": 10000,
                   "withhold_rate": 0.15,
                   "campaign_type": "repeat_user",
                   "previous_financing_fee_discount_rate": 0.5
               },
               "product_type": "refill"
           }
       }
   }
   ```

7. The new financing will first repay and close out the customer’s active balance. The customer receives the difference. This new financing payout will send the `capital.financing_offer.paid_out` webhook, at which point the `previous_financing_fee_discount_amount` field will be set.

8. [Retrieve the financing summary](https://docs.stripe.com/api/capital/financing_summary.md) to see the details of the customer’s `paid_out` financing.

   Example response:

   ```json
       {
         "object": "capital.financing_summary",
         "details": {
           "currency": "usd",
           "advance_amount": 1000000,
           "fee_amount": 100000,
           "withhold_rate": 0.2,
           "remaining_amount": 0,
           "paid_amount": 0,
           "current_repayment_interval": {
             "due_at": 123456789,
             "remaining_amount": 50,
             "paid_amount": 50
           },
           "repayments_begin_at": 123456789,
           "advance_paid_out_at": 123456789
         }
       }
   ```

9. Details about the refill and original financing are also available on the [Financing Reporting](https://dashboard.stripe.com/test/connect/capital/financing_offers) page.
   ![](https://b.stripecdn.com/docs-statics-srv/assets/hosted-reporting-refilled-loan.d7b504bb46de1d09f47ed957225cba3a.png)

   Hosted reporting of original financing offer
   ![](https://b.stripecdn.com/docs-statics-srv/assets/hosted-reporting-refill-loan.b36f24d4f2d4916ff693fee8cc9f08d9.png)

   Hosted reporting of newly refilled financing offer

## See also

- [Set up an API integration](https://docs.stripe.com/capital/api-integration.md)
