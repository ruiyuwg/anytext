# Revenue Recognition for direct charges

Learn how revenue recognition works with direct charges.

## Revenue collected with application fees

With Connect, your platform can make charges directly on the connected account and take application fees in the process. To add an application fee on a [direct charge](https://docs.stripe.com/connect/direct-charges.md), pass an optional `application_fee_amount` value. Stripe recognizes the revenue immediately.

In this example, the `application_fee_amount="200"` is set on the direct charge.

- On January 15, you make a direct charge of 10 USD with a 2 USD application fee.
  - The 2 USD application fee transfers to your platform.
  - 8 USD is netted in the connected account.

| Account | Jan   |
| ------- | ----- |
| Revenue | +2.00 |
| Cash    | +2.00 |

## Contra revenue with issuing refunds

To refund an application fee, pass a `refund_application_fee` value of `true` in the refund request or provide a `refund_application_fee` value of `false` to refund the application fee separately through the API. In both cases, Stripe books the refunded application fee as contra revenue.

In this example, the `application_fee_amount="200"` is set on the charge.

- On January 15, you make a direct charge of 10 USD with a 2 USD application fee.
  - The 2 USD application fee transfers to your platform.
  - 8 USD is netted in the connected account.
- On February 21, Stripe refunds the full charge amount of 10 USD and the full application fee amount of 2 USD.

| Account | Jan   | Feb   |
| ------- | ----- | ----- |
| Revenue | +2.00 |       |
| Cash    | +2.00 | -2.00 |
| Refunds |       | +2.00 |
