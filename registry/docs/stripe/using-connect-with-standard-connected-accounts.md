# Using Connect with Standard connected accounts

Use Standard connected accounts to get started using Connect right away, and let Stripe handle the majority of the connected account experience.

> #### Newer Connect integrations
>
> The information on this page applies only to platforms that already use legacy connected account types. If you’re setting up a new Connect platform, or your integration uses the Accounts v2 API, see [Configure the behavior of connected accounts](https://docs.stripe.com/connect/accounts-v2/connected-account-configuration.md) to learn about connected account configurations. If your integration uses the Accounts v1 API, see [Account controller properties](https://docs.stripe.com/connect/migrate-to-controller-properties.md#account-controller-properties).

The process described here is the recommended method for creating standard accounts. If you’re an extension or an application that needs access to an existing account so you can provide services to your users, you can still use [OAuth](https://docs.stripe.com/connect/oauth-reference.md).

A *Standard* connected account is a conventional Stripe account where your connected account has a relationship with Stripe, is able to log in to the [Dashboard](https://dashboard.stripe.com), and can process charges on their own.

Stripe’s sample integration, [Kavholm](https://github.com/stripe-samples/connect-onboarding-for-standard), shows you how to use [Connect Onboarding](https://stripe.com/connect/onboarding) for a seamless user onboarding experience.
![Screenshot of Connect Onboarding form](https://b.stripecdn.com/docs-statics-srv/assets/Kavholm-Seamless-Standard.78b64d90c0bf87130c8b6ba1ef53df7f.png)

## How to use Connect Onboarding for Standard accounts

1. Go to your [Connect settings page](https://dashboard.stripe.com/account/applications/settings) to customize the visual appearance of the form with the name, color, and icon of your brand. Connect Onboarding requires this information.

2. Use the `/v1/accounts` API to [create](https://docs.stripe.com/api/accounts/create.md) a new account and get the account ID. You can prefill information on the account object for the user before you generate the account link. You must pass the following parameter:

   - `type` = `standard`

   > After you’ve created the new account, check to see that the account displays in the Dashboard.

3. Call the [Account Links](https://docs.stripe.com/api/account_links.md) API to create a link for the account to onboard with.

4. In the onboarding flow for your own platform, redirect your user to the `url` returned by [Account Links](https://docs.stripe.com/api/account_links.md).

5. Handle additional account states, redirecting your account to the Connect Onboarding flow if necessary.

6. *Optional*: You can add additional procedures, such as Tax or Climate, to the Connect Onboarding flow through the [Connect onboarding options](https://dashboard.stripe.com/settings/connect/onboarding-options) in the Dashboard.

## Create a Standard account and prefill information

Use the [Create Account](https://docs.stripe.com/api/accounts/create.md) API to create a connected account with `type` set to `standard`. You can prefill any information, but at a minimum, you must specify the `type`. The country of the account defaults to the same country as your platform, and the account confirms the selection during onboarding. If you know what [capabilities](https://docs.stripe.com/connect/account-capabilities.md) the account needs, you can request them when you create it.

> This example includes only some of the fields you can set when creating an account. For a full list of the fields you can set, such as `address` and `website_url`, see the [Create Account API reference](https://docs.stripe.com/api/accounts/create.md).

```curl
curl https://api.stripe.com/v1/accounts \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d type=standard
```

### Prefill information (Optional)

If you’ve already collected information for your connected accounts, you can prefill that information on the `Account` object. You can prefill any account information, including personal and business information, external account information, and so on.

After creating the `Account`, create a [Person](https://docs.stripe.com/api/persons/create.md) to represent the person responsible for opening the account, with `relationship.representative` set to true and any account information you want to prefill (for example, their first and last name).

```curl
curl https://api.stripe.com/v1/accounts/{{ACCOUNT_ID}}/persons \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d first_name=Jenny \
  -d last_name=Rosen \
  -d "relationship[representative]"=true
```

Connect Onboarding doesn’t ask for the prefilled information. However, it does ask the account holder to confirm the prefilled information before accepting the [Connect service agreement](https://docs.stripe.com/connect/service-agreement-types.md).

When testing your integration, prefill account information using [test data](https://docs.stripe.com/connect/testing.md).

## Create an account link

You can create an account link by calling the [Account Links](https://docs.stripe.com/api/account_links.md) API with the following parameters:

- `account` - use the account ID returned by the API from the previous step
- `refresh_url`
- `return_url`
- `type` = `account_onboarding`

```curl
curl https://api.stripe.com/v1/account_links \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d account="{{CONNECTEDACCOUNT_ID}}" \
  --data-urlencode refresh_url="https://example.com/reauth" \
  --data-urlencode return_url="https://example.com/return" \
  -d type=account_onboarding
```

## Redirect your user to the account link URL

The response to your [Account Links](https://docs.stripe.com/api/account_links.md) request includes a value for the key `url`. Redirect to this link to send your user into the flow. You can only use URLs from the [account links](https://docs.stripe.com/api/account_links.md) once because they grant access to the account holder’s personal information. Authenticate the user in your application before redirecting them to this URL. After you create an account link on a Standard account, you won’t be able to read or write [Know Your Customer](https://support.stripe.com/questions/know-your-customer) (KYC) information. Prefill any KYC information before creating the first account link.

> Don’t email, text, or otherwise send account link URLs outside of your platform application. Instead, provide them to the authenticated account holder within your application.

## Handle the user returning to your platform

Connect Onboarding requires you to pass both a `return_url` and `refresh_url` to handle all cases where you redirect the user to your platform. It’s important that you implement these correctly to provide the best experience for your user.

> You can use HTTP for your `return_url` and `refresh_url` while in you’re in a testing environment (for example, to test with localhost), but you can only use HTTPS in live mode. Be sure to swap testing URLs for HTTPS URLs before going live.

#### return\_url

Stripe issues a redirect to this URL when the user completes the Connect Onboarding flow. This doesn’t mean that all information has been collected or that there are no outstanding requirements on the account. This only means the flow was entered and exited properly.

No state is passed through this URL. After redirecting a user to your `return_url`, check the state of the `details_submitted` parameter on their account by doing either of the following:

- Listening to `account.updated` *webhooks* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests)
- Calling the [Accounts](https://docs.stripe.com/api/accounts.md) API and inspecting the returned object

#### refresh\_url

Your user redirects to the `refresh_url` in these cases:

- The link expired (a few minutes went by since the link was created)
- The user already visited the link (they refreshed the page, or clicked back or forward in the browser)
- Your platform is no longer able to access the account
- The account has been rejected

Your `refresh_url` triggers a method on your server to call [Account Links](https://docs.stripe.com/api/account_links.md) again with the same parameters, and redirect the user to the Connect Onboarding flow to create a seamless experience.

## Handle users that have not completed onboarding

A user that is redirected to your `return_url` might not have completed the onboarding process. Use the `/v1/accounts` endpoint to retrieve the user’s account and check for `charges_enabled`. If the account isn’t fully onboarded, provide UI prompts to allow the user to continue onboarding later. The user can complete their account activation through a new account link (generated by your integration). You can check the state of the `details_submitted` parameter on their account to see if they’ve completed the onboarding process.

## Optional: Enable Stripe Tax obligation monitoring

Use Stripe Tax to enable connected accounts to monitor their [tax obligations](https://docs.stripe.com/tax/monitoring.md) during payment processing. Stripe sends [notifications](https://docs.stripe.com/tax/monitoring.md#tax-threshold-notifications) to these accounts when they exceed specific tax thresholds. To enable obligation monitoring, activate Stripe Tax in your [Connect onboarding options](https://dashboard.stripe.com/settings/connect/onboarding-options). This enables an extra step that requests basic tax information, such as your connected account’s [preset tax code](https://docs.stripe.com/tax/products-prices-tax-codes-tax-behavior.md#product-tax-code), which appears during the onboarding process for connected accounts with access to the Stripe Dashboard. Stripe Tax uses this information to calculate when tax thresholds might be crossed.

Learn how to [collect tax as a platform](https://docs.stripe.com/tax/connect.md).

## See also

- [Creating charges](https://docs.stripe.com/connect/charges.md)
- [Authentication](https://docs.stripe.com/connect/authentication.md)
- [OAuth reference](https://docs.stripe.com/connect/oauth-reference.md)
