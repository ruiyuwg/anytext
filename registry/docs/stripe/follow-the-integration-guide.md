# Design an advanced Connect integration using the Accounts v1 API

Learn about alternative configuration combinations for a Connect integration based on the Accounts v1 API.

> #### Accounts v2 API integrations
>
> This guide only applies to existing Connect platforms that use the Accounts v1 API. If you’re a new Connect user, use the Accounts v2 API instead. See the [Interactive platform guide](https://docs.stripe.com/connect/interactive-platform-guide.md) for information about how to configure a Connect platform using the Accounts v2 API.

Use this guide to explore different Connect integrations and create a list of personalized integration steps. Before starting your integration in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment, you must [create a Stripe Account or log in](https://dashboard.stripe.com) and [onboard your platform to Connect](https://dashboard.stripe.com/settings/connect/platform-profile).

## Select properties

### Create and onboard accounts

Stripe enables you to create accounts on behalf of users, called connected accounts. When using Connect, you create connected accounts for each user that receives money on your platform.

#### Item 1

Send connected accounts to a Stripe-hosted onboarding flow. Stripe-hosted onboarding allows you to redirect your user to Stripe to complete the onboarding process in a co-branded interface.
![Screenshot of Connect Onboarding form](https://b.stripecdn.com/docs-statics-srv/assets/Kavholm-Seamless-Standard.78b64d90c0bf87130c8b6ba1ef53df7f.png)

Best for when you want to launch quickly with the lowest integration effort:

- Connected accounts leave your site and are redirected to Stripe to complete the flow.
- Co-branding with Stripe and limited options to customize.
- Stripe handles all of the onboarding flow logic.
- Automatically supports 46+ countries and 14 languages.

#### Item 2

Embed a highly themeable onboarding UI with limited Stripe branding directly into your application. Connected account users interact with the embedded component without ever leaving your application. You can integrate embedded onboarding in a few lines of code.

Note: The following is a preview/demo component that behaves differently than live mode usage with real connected accounts. The actual component has more functionality than what might appear in this demo component. For example, for connected accounts without Stripe dashboard access (custom accounts), no user authentication is required in production.

Best for when you want to keep users on your site with a more integrated experience and a low integration effort:

- Connected accounts remain on your site.
- Highly themable. Limited to no Stripe branding.
- Stripe handles all the onboarding flow logic.
- Automatically supports 46+ countries and 14 languages.

#### Item 3

Build out each aspect of the onboarding flow by calling the corresponding Stripe APIs. You need to build custom logic in your integration to satisfy all required verification information.

> #### Stripe recommendation
>
> Building and maintaining an API onboarding flow is resource-intensive and requires regular updates. If you want to implement a customized onboarding flow, Stripe strongly recommends that you use [embedded onboarding](https://docs.stripe.com/connect/embedded-onboarding.md).
> (See full diagram at https://docs.stripe.com/connect/design-an-integration)
> Best for when you want to have full control over the onboarding flow:

- Build and maintain all onboarding flow logic yourself. Can be resource intensive and expensive to build.
- You manage risk with full responsibility for negative balance liabilities on connected accounts.
- You must keep your flows up to date as verification requirements change, and also build additional flows to communicate and collect such requirements from your users. Review and update onboarding requirements at least every six months to make sure you build the latest requirements into your flow.
- You must build a custom form to collect bank accounts or debit cards so that connected accounts can be set up with a payout account.

### Set up dashboard flows

Connected accounts need access to a dashboard to manage their account. Provide connected accounts with access to the Stripe Dashboard, the Express Dashboard, or a dashboard built using the Stripe API and embedded components.

#### Item 1

Provide access to the Stripe Dashboard to connected accounts.

The Stripe Dashboard provides connected accounts with a full suite of functionality, including viewing payouts, managing refunds, handling disputes, accessing reporting, and processing charges on their own. Users can sign into their Stripe Dashboard at any time and can access the Dashboard by visiting Stripe directly. Users have access to Stripe support and Stripe can reach out and communicate with users about their account.

Use the Stripe Dashboard when:

- Your users need access to powerful payments workflows and advanced user management features.
- You prefer Stripe to manage risk of loss and take responsibility for negative balance liability on connected accounts.
- You’re comfortable with Stripe branding and limited platform co-branding.

You can always add [embedded components](https://docs.stripe.com/connect/get-started-connect-embedded-components.md) to your own website in tandem with providing access to the Stripe Dashboard.

#### Item 2

Provide access to the Express dashboard for connected accounts to manage their account.

The Express Dashboard enables connected accounts to view their available balance, see upcoming payouts, and track their earnings in real time. Users can’t manage refunds or disputes through the Express dashboard. Users have access to Stripe support and Stripe can reach out and communicate with users about their account.

Use the Express Dashboard when:

- Your users are marketplace sellers that need limited access to workflows.
- You primarily send payouts to these users. Users won’t manage refunds or disputes directly.
- You want to fully brand the dashboard look and feel.
- You’re comfortable taking responsibility for negative balance liability and managing risk of loss on connected accounts.

You can always add [Connect embedded components](https://docs.stripe.com/connect/get-started-connect-embedded-components.md) to your own website in tandem with providing access to the Stripe Dashboard.

#### Item 3

Create a dashboard using Stripe APIs or embedded components to enable connected accounts to manage their account.

Connected accounts won’t have access to the Stripe Dashboard or Express Dashboard. It’s up to you to provide access to these workflows by building your user’s dashboard, refunds, disputes workflows and reporting functionality. Your users might not realize that they have a Stripe account through your platform.

We recommend integrating [Connect embedded components](https://docs.stripe.com/connect/get-started-connect-embedded-components.md) to add dashboard functionality to your platform application with a low integration effort. Embedded components are highly themable and can support connected accounts with:

- Payments workflows such as viewing payments and payouts, managing refunds and responding to disputes
- Payout workflows such as managing payout schedules, creating manual payouts or updating payout accounts
- Reporting workflows to download and export payments and payouts
- Account management workflows such as updating business information

> For an account without Stripe-hosted Dashboard access where Stripe is liable for negative balances, use Connect embedded components to provide self-serve account updates. You can’t create [Account Links](https://docs.stripe.com/api/account_links.md) of type `account_update` for such accounts.

### Accept a payment

You create a charge to accept a payment from a customer on behalf of your connected account. The type of charge you create:

- Determines how payment funds are split among all parties involved
- Impacts how the charge appears on the customer’s bank or billing statement (with your platform’s information or your user’s)
- Determines which account Stripe debits for refunds and chargebacks

#### Item 1

A direct charge is a customer payment made directly to a connected account. Customers directly transact with your connected account, often unaware of your platform’s existence.

This charge type is best suited for platforms providing software as a service. For example, Shopify provides tools for building online storefronts, and Thinkific enables educators to sell online courses.

#### Item 2

Create destination charges on your platform and immediately transfer funds to connected accounts. Customers transact with your platform for products or services provided by your connected accounts.

This charge type is best suited for marketplaces such as Airbnb, a home rental marketplace or Lyft, a ridesharing app.

Destination charges are created on the platform, but as part of the charge operation, funds are immediately transferred to the connected account you specified. You can decide whether some or all of those funds are transferred.

Unless you’re eligible for [cross-border payouts](https://docs.stripe.com/connect/cross-border-payouts.md), your platform and the connected account you transfer funds to must be in the same region to create a Destination charge. Attempting to transfer funds across a disallowed border returns an error.

#### Item 3

Create separate charges and transfers to transfer funds from one payment to multiple connected accounts, or when a specific user isn’t known at the time of charge. The charge on your platform account is decoupled from the transfers to your connected accounts.

This charge type is best suited for marketplaces that need to split payments between multiple parties, such as DoorDash, a restaurant delivery platform.

While separate charges and transfers provide a lot of flexibility, they require a more complex integration to manage account balances between your platform and your users. You must monitor your platform account balance carefully to make sure you have enough available funds to cover the transfer amount.

Unless you’re eligible for [cross-border payouts](https://docs.stripe.com/connect/cross-border-payouts.md), your platform and the connected account you transfer funds to must be in the same region to use separate charges and transfers. Attempting to transfer funds across a disallowed border returns an error.

### Stripe fees

#### Item 1

Stripe collects Stripe fees from your platform account, inclusive of processing fees. You control the processing fee amounts you bill connected accounts. Use the application fee parameter to collect processing fees from your connected accounts.

#### Item 1

(See full diagram at https://docs.stripe.com/connect/design-an-integration)

#### Item 2

(See full diagram at https://docs.stripe.com/connect/design-an-integration)

#### Item 3

(See full diagram at https://docs.stripe.com/connect/design-an-integration)

#### Item 2

Stripe collects Stripe fees directly from your connected accounts. You can collect an optional application fee when you create the direct charge.
(See full diagram at https://docs.stripe.com/connect/design-an-integration)

### Pay out users

When the funds from the payment settle and your user’s connected account has a positive Stripe balance, you can pay out those funds to their external account.

#### Item 1

If you onboard users in your own flow using the Stripe API, you must also collect bank accounts or debit cards to set up your connected accounts with a payout account. When you’ve collected the user’s information for the payout account, attach it as an external account. Payouts are blocked if your connected account doesn’t have a verified external account.

#### Item 2

#### Item 3

By default, Stripe pays out funds that have settled in your connected accounts’ balances on a daily rolling basis. If you prefer, you can configure different automatic payout schedules, trigger payouts manually instead of automatically, or pay out instantly.

### Responsibility for negative balances

#### Item 1

Your platform is liable for losses incurred by negative balances on your connected accounts. Your platform is responsible for reviewing new connected accounts during onboarding and determining the risk profile of your users.

Recommended for marketplaces that collect payments from buyers to payout sellers, or for advanced platforms that want full control over how risk and negative liabilities are managed on connected accounts:

- Your platform must monitor connected accounts for ongoing risk of loss.
- Your platform has to build flows to communicate and remediate connected accounts when you detect fraud or risk.
- You have both the operational team and the engineering resources to establish processes for managing ongoing risk of loss and preventing fraud.

Before creating accounts with this setup, carefully consider and acknowledge your platform responsibilities for negative balance liabilities.

#### Item 2

Stripe monitors risk signals on connected accounts, implements risk interventions on connected accounts in response to observed signals, and seeks to recover negative balances from your connected accounts.

For most software as a service platforms, this is the best default choice, especially for those that are new to embedding payments:

- Stripe monitors your connected accounts for credit and fraud risk, as well as protection against risk of loss in the event of negative balances attributed to business risk.
- Stripe handles all the end to end communications and remediations directly with your connected accounts through hosted flows or embedded components.

#### Item 1

#### Required embedded components

When Stripe is responsible for negative balances on your connected accounts, you must integrate embedded components for onboarding, account management, and the notification banner.

Stripe uses the embedded notification banner component to notify connected accounts of outstanding requirements or other managed risk related requests. The account management component is required so your connected accounts can manage their authentication credentials and their business information.

Stripe also emails your connected accounts on your behalf to manage risk and confirm ongoing compliance. You can customize and brand these email communications with your own email domain and platform branding.

For any other optional components, you can also use [embedded components](https://docs.stripe.com/connect/get-started-connect-embedded-components.md) or build your own UI.

#### Item 2

#### Item 3

## Integration steps for your selections

The following integration steps are based on the options you selected above. You can see different steps by selecting different options above or in the panel to the right of the steps. The options on this page only control the steps displayed below. They don’t affect your platform configuration.

The following button generates an LLM prompt based on your selections. It only supports Stripe-hosted Dashboard and hosted onboarding.
