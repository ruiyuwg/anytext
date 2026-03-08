# Money movement timelines

Learn about the timelines for various types of money movement with Financial Accounts for platforms.

Financial Accounts for platforms integrates with banking partners and payment networks, which have varying processing and cutoff times.

## OutboundPayment and OutboundTransfer transactions

| Network            | Behavior                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ach`              | `OutboundPayment` and `OutboundTransfer` requests processed before the cutoff time are submitted to our banking partner on the same day. These transfers are expected to arrive at the receiving bank within the next one to two business days. Same-day *ACH* (Automated Clearing House (ACH) is a US financial network used for electronic payments and money transfers that doesn’t rely on paper checks, credit card networks, wire transfers, or cash) transactions arrive at the receiving bank the same business day if the request is received before the cutoff time. |
| `us_domestic_wire` | `OutboundPayment` and `OutboundTransfer` requests processed before the cutoff are expected to arrive at the receiving bank on the same business day.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `stripe`           | `OutboundPayment` and `OutboundTransfer` requests using the `stripe` network post immediately and arrive at the receiving financial account within 30 minutes, both during and outside of business hours.                                                                                                                                                                                                                                                                                                                                                                      |

## Transaction timing

The best indication that your transaction has been submitted to the network is the presence of tracking details. Stripe doesn’t provide a precise status of the network submission on v1 OutboundPayments, but you can use the tables below to understand when you can expect your transaction to send to the network and when you can expect to receive your tracking details.

Learn more about transaction timing terms:

- Submission cutoff: The time that you must submit a transaction by so that it appears in the subsequent columns on-time.
- Processing time: The time Stripe’s partner bank submits the transaction to the network.
- Tracking details received: The time Stripe receives settlement confirmation of these transactions. Settlement confirmation means a transaction has completed its process through the network and is deposited into the destination account, barring any complications at the receiving institution.

Stripe estimates the expected arrival date based on bank partner cutoff timing, payment method, and network speed. Slight delays can occur. You can programmatically access the `expected_arrival_date` attribute on the [OutboundPayment](https://docs.stripe.com/api/treasury/outbound_payments/object.md#outbound_payment_object-expected_arrival_date) or the [OutboundTransfer](https://docs.stripe.com/api/treasury/outbound_transfers/object.md#outbound_transfer_object-expected_arrival_date) to reference when Stripe expects the funds to arrive at their destination based on bank partner cutoff times.

Requests, including default speed requests, that are received after the cutoff time are processed the following business day. Same-day ACH requests received after the cutoff time arrive by the end of the following business day.

### Same-day ACH timing

All times in this table are in Eastern Time.

| Submission cutoff (ET) | Processing time (ET) | Time tracking details are received (ET) |
| ---------------------- | -------------------- | --------------------------------------- |
| By 7:45 AM             | 8:50 AM              | 12:45 PM                                |
| By 12:15 PM            | 1:20 PM              | 4:15 PM                                 |
| By 1:45 PM             | 2:50 PM              | 2:00 AM (T+1 the next day)              |

### Standard ACH timing

Because standard ACH submission is at minimum T+1, an ACH payment submitted on day 1 doesn’t process until at least the following day. Tracking details are received at settlement after the transaction processes, usually the next day (T+2).

All times in this table are in Eastern Time.

| Submission cutoff (ET) | Processing time (ET)                               | Time tracking details are received (ET) |
| ---------------------- | -------------------------------------------------- | --------------------------------------- |
| 8:30 PM                | Every 1–2 hours between 9:30 AM and 12:00 AM (T+1) | 5:00 AM (T+2)                           |

### Wire timing

All times in this table are in Eastern Time.

| Submission cutoff (ET) | Processing time (ET) | Time tracking details are received (ET)                                |
| ---------------------- | -------------------- | ---------------------------------------------------------------------- |
| 08:00 AM–5:00 PM       | Same day             | Individually throughout the day (usually within an hour of processing) |

## InboundTransfer transactions

| Network | Behavior                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ach`   | `InboundTransfer` If using the default speed, `InboundTransfer` requests processed before the cutoff time are submitted to our banking partner on the same business day. Otherwise, they’re submitted on the following business day. Transfers are expected to arrive in the financial account on the morning of the fourth business day after submission to the banking partner, if no returns are received during that time. |

### Bank Partner Timelines

|              | Evolve      | Fifth Third Bank |
| ------------ | ----------- | ---------------- |
| ACH          | 7:00 PM ET  | 8:30 PM ET       |
| Same-day ACH | 12:00 PM ET | 1:00 PM ET       |

| Submission date (prior to cutoff) | Expected arrival date |
| --------------------------------- | --------------------- |
| Monday                            | Friday                |
| Tuesday                           | Monday                |
| Wednesday                         | Tuesday               |
| Thursday                          | Wednesday             |
| Friday                            | Thursday              |
| Saturday                          | Friday                |
| Sunday                            | Friday                |

## ReceivedCredit and ReceivedDebit transactions

Credits and debits initiated from outside Stripe and received on a financial account are processed as soon as Stripe receives notification of the transfer. The time it takes to complete the transfer depends on the originating institution.

| Network            | Behavior                                                                                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ach`              | Available same day or next business day, depending on originating institution.                                                                                                                                                                          |
| `us_domestic_wire` | Depends on originating institution. Wires received by the federal wire network during a business day are typically available in the financial account the morning of the following business day.                                                        |
| `stripe`           | Transfers using the `stripe` network post immediately and are expected to arrive at the receiving financial account within minutes.                                                                                                                     |
| `card`             | Card transactions are typically captured within 24 hours of authorization approval; however, some companies can capture funds up to 30 days after authorization. See [Issuing transactions](https://docs.stripe.com/issuing/purchases/transactions.md). |

## Automatic payouts

All platforms using Financial Accounts for platforms have access to standard automatic payouts, which move money from Stripe Payments to a financial account on a T+2 or slower schedule from the time of transaction (T+2 for card payments, slower for ACH).

You can request a platform risk review to access faster payouts; upon approval, your platform can use T+1 automatic payouts for connected accounts. T+1 faster payout schedules apply to all payment types, including both card payments and ACH payments, and the timelines start when the transaction occurs (faster payouts eliminate the need to wait for standard payments fund settlement times).

To request access to faster payouts for your platform, email <treasury-support@stripe.com>.

For more details, see the [Automatic payouts guide](https://docs.stripe.com/financial-accounts/connect/moving-money/payouts.md#automatic-payouts).

## Manual payouts

Platforms using Financial Accounts for platforms also have access to standard manual payouts, which move funds in one business day (T+1 schedule) but can only draw on an account’s `available` payments balance. In other words, you must wait for funds from a payment to settle in the payments balance before initiating a standard manual payout to a financial account.

Platforms granted access to faster payouts also have access to instant manual payouts. Instant manual payouts move funds to a connected account’s financial account within an hour (T+0 schedule) and are available any time, including nights, weekends, and holidays. Instant manual payouts are drawn on a connected account’s `instant_available` balance rather than being limited to the `available` balance.

For more details, see the [Manual payouts guide](https://docs.stripe.com/financial-accounts/connect/moving-money/payouts.md#manual-payouts).

## Top-ups

Stripe *Connect* (Connect is Stripe's solution for multi-party businesses, such as marketplace or software platforms, to route payments between sellers, customers, and other recipients) platform users can top up their existing Stripe platform account balance using a financial account by verifying the routing and account numbers. These funds settle to your account balance according to [Top-ups settlement timing](https://docs.stripe.com/connect/top-ups.md#settlement-timing).

For more details, see [Adding funds to your platform balance](https://docs.stripe.com/connect/top-ups.md).

## Same-day ACH regulations

ACH transactions are regulated by [Nacha](https://www.nacha.org/content/how-ach-rules-are-made). Consider the following when using same-day ACH:

- Individual same-day ACH transactions [can’t exceed 1,000,000 USD](https://www.nacha.org/million). Stripe rejects transactions that exceed this limit. To process transactions greater than 1,000,000 USD, use standard ACH processing instead of same-day ACH.

> ACH operators monitor for attempts to evade the limit, such as by splitting a single large transaction into multiple smaller transactions. If they suspect an evasion attempt, they process those transactions for next-day settlement in the next available processing window.

## See also

- [Moving money out of financial accounts](https://docs.stripe.com/financial-accounts/connect/moving-money/moving-money-out.md)
- [Moving money into financial accounts](https://docs.stripe.com/financial-accounts/connect/moving-money/moving-money-into-financial-accounts.md)
- [Payouts](https://docs.stripe.com/financial-accounts/connect/moving-money/payouts.md)
