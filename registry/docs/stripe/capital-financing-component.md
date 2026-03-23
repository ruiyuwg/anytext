# Capital financing component

Allow a connected account to view and manage their active Capital financing.

The Capital financing embedded component allows connected accounts to view and manage their financing status after they accept an offer. Connected accounts can:

- View their payment progress
- Monitor transaction history
- Make payments, if applicable to their [type of financing](https://docs.stripe.com/capital/how-capital-for-platforms-works.md#types-of-financing-offers)

Note: The following is a preview/demo component that behaves differently than live mode usage with real connected accounts. The actual component has more functionality than what might appear in this demo component. For example, for connected accounts without Stripe dashboard access (custom accounts), no user authentication is required in production.

## Before you begin

- Embedded components are only available to display to connected accounts in the US and UK.
- Before you go live, you must [enable automatic offers](https://docs.stripe.com/capital/embedded-component-integration.md#enable-automatic-offers) and [submit your integration to Stripe for review](https://docs.stripe.com/connect/supported-embedded-components/capital-financing.md#submit-for-review).
- When you [render the component](https://docs.stripe.com/connect/supported-embedded-components/capital-financing.md#render-the-component), it links out to Stripe content by default. You can replace the link for [Privacy policy](https://stripe.com/privacy) and [How Capital for platforms works](https://docs.stripe.com/capital/how-capital-for-platforms-works.md) with your equivalent documentation.

## Install Capital embedded components

Install a beta version of the Stripe SDKs to create account sessions for private preview components:

- [Ruby](https://github.com/stripe/stripe-ruby/#public-preview-sdks) `>=15.5.0-beta.1`
- [Python](https://github.com/stripe/stripe-python/#public-preview-sdks) `>=12.5.0b1`
- [PHP](https://github.com/stripe/stripe-php/#public-preview-sdks) `>=17.6.0-beta.1`
- [Node](https://github.com/stripe/stripe-node/#public-preview-sdks) `>=18.5.0-beta.1`
- [.NET](https://github.com/stripe/stripe-dotnet#public-preview-sdks) `>=48.5.0-beta.1`
- [Java](https://github.com/stripe/stripe-java#public-preview-sdks) `>=29.5.0-beta.1`
- [Go](https://github.com/stripe/stripe-go#public-preview-sdks) `>=82.5.0-beta.1`

Use the beta version of the Stripe’s client-side libraries to render private preview components:

#### npm

Install the library:

```bash
npm install --save @stripe/connect-js@preview
```

If you’re using React in your application:

```bash
npm install --save @stripe/react-connect-js@preview
```

#### GitHub

Download the [@stripe/connect-js](https://github.com/stripe/connect-js) and [@stripe/react-connect-js](https://github.com/stripe/react-connect-js) libraries source code directly from GitHub.

## Set up Connect.js

If you don’t already use Stripe embedded components in your application, [initialize Connect.js](https://docs.stripe.com/connect/get-started-connect-embedded-components.md?platform=web#account-sessions) before you integrate the financing component.

## Create an Account Session

In your [create an Account Session](https://docs.stripe.com/api/account_sessions/create.md) request, specify `capital_financing` in the `components` parameter to enable the financing component.

```curl
curl https://api.stripe.com/v1/account_sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Version: 2026-02-25.preview; embedded_connect_beta=v2;" \
  -d account="{{CONNECTEDACCOUNT_ID}}" \
  -d "components[capital_financing][enabled]"=true
```

## Render the component

Render the Capital financing component in the front end:

#### JavaScript

```js
// Include this element in your HTML
const capitalFinancing = stripeConnectInstance.create('capital-financing');
container.appendChild(capitalFinancing);
```

#### HTML + JS

| Method                     | Type                        | Description                                                                                                                                                                                       | Default                                                    |
| -------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `setDefaultFinancingOffer` | `string`                    | [Financing Offer](https://docs.stripe.com/api/capital/financing_offers.md) ID to render on initial load of the component. If omitted, the component displays the active or most recent financing. |                                                            |
| `setShowFinancingSelector` | `boolean`                   | If true, render the financing dropdown selector to allow the connected account to change the displayed financing.                                                                                 | `true`                                                     |
| `setOnFinancingsLoaded`    | `({total: number}) => void` | The component loaded the connected account’s financing history.                                                                                                                                   |                                                            |
| `setSupportUrl`            | `string`                    | Absolute URL of your support site.                                                                                                                                                                | `https://support.stripe.com/`                              |
| `setHowCapitalWorksUrl`    | `string`                    | Absolute URL of a page with information about the Capital program.                                                                                                                                | `https://docs.stripe.com/capital/how-stripe-capital-works` |

#### React

| React property          | Type                        | Description                                                                                                                                                                                       | Default                                                    | Required or Optional |
| ----------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------- |
| `defaultFinancingOffer` | `string`                    | [Financing Offer](https://docs.stripe.com/api/capital/financing_offers.md) ID to render on initial load of the component. If omitted, the component displays the active or most recent financing. | `null`                                                     | optional             |
| `showFinancingSelector` | `boolean`                   | If true, render the financing dropdown selector to allow the connected account to change the displayed financing.                                                                                 | `true`                                                     | optional             |
| `onFinancingsLoaded`    | `({total: number}) => void` | The component loaded the connected account’s financing history.                                                                                                                                   |                                                            | optional             |
| `supportUrl`            | `string`                    | Absolute URL of your support site.                                                                                                                                                                | `https://support.stripe.com/`                              | optional             |
| `howCapitalWorksUrl`    | `string`                    | Absolute URL of a page with information about the Capital program.                                                                                                                                | `https://docs.stripe.com/capital/how-stripe-capital-works` | optional             |

## Style and customize the component

[Customize embedded components](https://docs.stripe.com/connect/customize-connect-embedded-components.md) to align the component’s fonts, colors, and UI style with your platform’s branding.

## Set the display state

Place the financing component on a page your connected accounts currently use to view payments and payouts reporting information, or a dedicated **Financing** page.

The financing component displays content dynamically based on the connected account’s financing status:

- **No financing history**: If a connected account has an offer, but hasn’t accepted or applied for it yet, the financing component displays nothing. Listen to the `onFinancingsLoaded` event to display a custom message in the financing component for this state or hide the financing component until financing data becomes available.

- **Offer in review**: After an eligible connected account accepts and applies for a financing offer, use this state to render the component to display an application status tracker while they wait for offer approval.

## Handle load errors

After rendering the component, review how to [handle load errors](https://docs.stripe.com/connect/get-started-connect-embedded-components.md?platform=web#reacting-to-load-errors) to make sure your integration can gracefully manage cases when components fail to load.

## Submit the component for review

To use any of the Capital components in live mode, Stripe and our financial partners must review and approve all customer-facing content that references Stripe Capital:

1. [Create a test offer in a sandbox](https://docs.stripe.com/capital/testing.md#create-offer), and set the offer status to `delivered`. Use this test offer to preview the application component in your platform’s website or dashboard.
2. Capture a preview of the sandbox offer and how the embedded component displays in your platform’s UI (such as screenshots or a recorded video).
3. [Submit the preview to Stripe](https://form.asana.com/?k=8K51UWmWhttehNFD5qBLdg\&d=974470123217835). After approval, Stripe enables you to use the component in live mode.

## Optional: Additional embedded components

The financing component is one of several embedded components available for Capital. Learn more about embedded components in the [Set up Capital embedded components](https://docs.stripe.com/capital/embedded-component-integration.md) guide.

## See also

- [Set up Capital embedded components](https://docs.stripe.com/capital/embedded-component-integration.md)
