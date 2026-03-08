# Add funds to your card program

Learn about your options to fund card spend.

To enable card spend, Stripe Issuing users must fund an Issuing balance. Your default funding option is to use an external bank account. Depending on your integration and region, you have the option to pull or push funds from an external bank account to your Issuing balance. If you use Stripe to process payments, you can fund your Issuing balance from your Stripe acquiring balance or from your external bank account.

There are four funding types available: [pull-funded top ups](https://docs.stripe.com/issuing/adding-funds-to-your-card-program.md#pull-funded-top-ups), [push-funded top-ups](https://docs.stripe.com/issuing/adding-funds-to-your-card-program.md#push-funded-top-ups), [Stripe balance transfers](https://docs.stripe.com/issuing/adding-funds-to-your-card-program.md#stripe-balance-transfers), and [Connect balance transfers](https://docs.stripe.com/issuing/adding-funds-to-your-card-program.md#connect-balance-transfers). This page provides information to help you decide which type works better for your integration.

## Fund your card program

Determining how to fund your card program is a core part of your Stripe Issuing integration. To avoid insufficient funds declines when making purchases on issued cards, your account needs to have sufficient funds in the Issuing Balance. As a best practice, you should:

1. Add funds to cover planned spending.
2. Create alerts that tell you [when your Issuing balance is low](https://docs.stripe.com/issuing/funding/balance.md#enable-notifications-about-your-balance).
3. Review funding options to efficiently move money into your Issuing balance.

The default way to fund your card spend is a top-up from an external bank account:

- In the US, the default is a [pull-funded top-up](https://docs.stripe.com/issuing/adding-funds-to-your-card-program.md#pull-funded-top-ups)
- In the UK and Europe, the default is a [push-funded top-up](https://docs.stripe.com/issuing/adding-funds-to-your-card-program.md#push-funded-top-ups)

## Compare funding options

|                  | [Pull-funded top-ups](https://docs.stripe.com/issuing/adding-funds-to-your-card-program.md#pull-funded-top-ups) | [Push-funded top-ups](https://docs.stripe.com/issuing/adding-funds-to-your-card-program.md#push-funded-top-ups)                                                                                                     | [Stripe balance transfers](https://docs.stripe.com/issuing/adding-funds-to-your-card-program.md#stripe-balance-transfers) (preview) | [Connect balance transfers](https://docs.stripe.com/issuing/adding-funds-to-your-card-program.md#connect-balance-transfers) (preview) |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Overview         | Funds your Issuing balance from an external bank account.                                                       | Funds your Issuing balance from an external bank account, but you don’t need to add your external bank account to Stripe.                                                                                           | Moves funds to your Issuing balance from your Stripe balance.                                                                       | Transfers funds to or from the Issuing balance of a connected account from the platform’s Issuing balance.                            |
| Best for         | Users who want to build their own logic around when they want to top up.                                        | Users focused on capital efficiency.                                                                                                                                                                                | Users that also use Stripe to process their payments.                                                                               | Users that have a Connect integration and plan to programmatically fund connected accounts.                                           |
| Fund origination | External bank account                                                                                           | External bank account                                                                                                                                                                                               | Stripe balance (Payments)                                                                                                           | Platform Issuing balance (Connect)                                                                                                    |
| Settlement time  | Up to 5 business days. Expedited top-ups might be available.                                                    | Depends on the *payment rails* (A financial network that provides the technological infrastructure to electronically move money from a payer to a payee) used. Your first few top-ups might have additional delays. | Instant in the US. Within 1 business day in the UK and Europe.                                                                      | Instant in all available regions.                                                                                                     |
| Availability     | - US                                                                                                            | - US (preview)

- UK
- Europe                                                                                                                                                                                    | - US
- UK
- Europe                                                                                                              | - US
- UK
- Europe                                                                                                                |

### Pull-funded top-ups

- US

Pull-funded top-ups fund your Issuing balance from an external bank account. This is the default funding method in the US, and is sufficient as the sole funding method. Funds can take up to 5 business days to become available. In some cases, expedited top-ups are available.

If you have a [direct](https://docs.stripe.com/issuing/funding/balance.md?push-pull-preference=pull) or [Connect](https://docs.stripe.com/issuing/connect/funding.md?issuing-funding-type=us-pull-funding) integration, you can initiate pull-funded top-ups using the [create top-up](https://docs.stripe.com/api/topups/create.md) endpoint or in the Dashboard. A platform’s connected accounts can initiate pull-funded top-ups using the API only.

Pull-funded top-ups are best for users who want to build their own logic around when they want to top up. For example, you can build a flow to use the Balances API to view your current balances and automatically trigger a pull-funded top-up if your Issuing balance goes below a certain threshold. For US users, this is the easiest funding method to start with, especially when using the Dashboard.

### Push-funded top-ups

- EU
- GB
- US

Push-funded top-ups also fund your Issuing balance from an external bank account. However, unlike pull-funded top-ups, you don’t need to add your external bank account to Stripe. Instead, push-funded top-ups use an account or routing number to push funds to your Issuing balance using:

- Same-day wire or ACH credit transfer (US) (preview)
- BACS / FPS (UK)
- Sepa Credit Transfer (Europe)

You can find routing information in the [Dashboard](https://docs.stripe.com/issuing/funding/balance.md?issuing-currency=usd#access-account-information-for-push-funding-in-the-dashboard) or by making a `create` or `list` call to the [Funding Instruction](https://docs.stripe.com/api/issuing/funding_instructions.md) endpoint. However, connected accounts can only view routing information by calling [List Funding Instructions](https://docs.stripe.com/api/issuing/funding_instructions/list.md).

- US (preview): See the documentation for push-funded top-ups for [Connect](https://docs.stripe.com/issuing/connect/funding.md?issuing-funding-type=us-push-funding) or [direct](https://docs.stripe.com/issuing/funding/balance.md?push-pull-preference=push) integrations.
- UK and Europe: See the documentation for push-funded top-ups for Connect ([UK](https://docs.stripe.com/issuing/connect/funding.md?issuing-funding-type=uk-push-funding), [Europe](https://docs.stripe.com/issuing/connect/funding.md?issuing-funding-type=euro-push-funding)) and [direct](https://docs.stripe.com/issuing/funding/balance.md?push-pull-preference=push) integrations.

This is the default funding method for in the UK and Europe. Push-funded top-ups are sufficient as the sole funding method. Funding speed depends on the *payment rails* (A financial network that provides the technological infrastructure to electronically move money from a payer to a payee) that transfer the funds. There might be additional delays for your first few top-ups.

Push-funded top-ups are best for users focused on capital efficiency, since this funding method allows platforms to fund their Issuing balance on the same day. Platforms can then hold more funds in an interest-bearing account outside of Stripe and quickly move those funds into their Issuing balance as needed. Push-funded top-ups are also good for users who have originating banks with APIs that support automated integrations. Some users also prefer not to connect an external bank account to their Issuing balance.

### Stripe balance transfers (preview)

- EU
- GB
- US

Balance transfers move funds to your Issuing balance from your Stripe balance, which contains your payments proceeds. This funding method requires you to use Stripe to process payments. Optional in the US, UK, and Europe. Funds settle instantly in the US and within 1 business day in the UK and Europe.

Users with a [direct](https://docs.stripe.com/issuing/funding/balance.md?push-pull-preference) or [Connect](https://docs.stripe.com/issuing/connect/funding.md?issuing-funding-type=us-pull-funding) integration can initiate Stripe balance transfers using the balance transfer API endpoint or in the Dashboard. A platform’s connected accounts can only initiate Stripe balance transfers to Issuing balance using the API.

If you need to pay out excess funds in the Issuing balance, you can initiate a [Payout](https://docs.stripe.com/api/payouts/create.md).

Balance transfers are best for users that also use Stripe to process their payments since it allows the user to use their acquiring balance to fund their Issuing balance.

### Connect balance transfers (preview)

- EU
- GB
- US

Transfers funds to or from the Issuing balance of a connected account from the platform’s Issuing balance. This funding method requires Stripe Connect. Optional in the US, UK, and Europe. Funds settle instantly in all available regions.

Connect balance transfers are best for users that have a [Connect integration](https://docs.stripe.com/issuing/connect/funding.md?issuing-funding-type=us-pull-funding) and plan to programmatically fund connected accounts, since this funding mechanism allows the platform to instantly pre-fund any connected account’s Issuing balance to the right level to avoid transaction declines.

## Using funding methods in practice

Businesses on Stripe Issuing can operate a card program with the default funding method and nothing more. But if your business has additional Stripe integrations such as Connect, you can benefit by using multiple funding methods.

For example, suppose you’re an e-commerce platform providing an expense management card to each of the online shops on your platform. In this case, build a [Connect integration](https://docs.stripe.com/issuing/connect.md) where each shop on your platform represents a connected account. Shops on your platform can accept payments and fund cards by transferring balances, all on Stripe. If your merchants also collect funds from users outside of Stripe, they can use push-funded top-ups from an external bank account. When you’re ready, allocate collected funds by transferring funds from your platform Issuing balance to the Issuing balance of specific connected accounts.

Taking a US platform as an example, your funding setup could look like this:
Diagram of fund set up with bank to platform Issuing balance (See full diagram at https://docs.stripe.com/issuing/adding-funds-to-your-card-program)
You could also enable your shops, represented as connected accounts, to directly accept payments and move funds into their account to pay for their expenses.
Diagram of fund set up with bank to connect account Issuing balance (See full diagram at https://docs.stripe.com/issuing/adding-funds-to-your-card-program)
