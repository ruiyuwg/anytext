# Capital application component

Show an end-to-end application flow for Capital financing.

The Capital application component allows your eligible connected accounts to complete a financing application in your platform’s website or application. They can select their offer amount and terms, view contractual details, and submit their application.

Note: The following is a preview/demo component that behaves differently than live mode usage with real connected accounts. The actual component has more functionality than what might appear in this demo component. For example, for connected accounts without Stripe dashboard access (custom accounts), no user authentication is required in production.

This component is similar to the [Capital promotion](https://docs.stripe.com/connect/supported-embedded-components/capital-financing-promotion.md) component, but it invokes the application directly and excludes educational or promotional content. Use this embedded component if you want to customize how to display the financing offer and program information to eligible connected accounts.

## Before you begin

- Embedded components are only available to display to connected accounts in the US and UK.
- Before you go live, you must [enable automatic offers](https://docs.stripe.com/capital/embedded-component-integration.md#enable-automatic-offers) and [submit your integration to Stripe for review](https://docs.stripe.com/connect/supported-embedded-components/capital-financing-application.md#submit-for-review).
- When you [render the component](https://docs.stripe.com/connect/supported-embedded-components/capital-financing-application.md#render-the-component), it links out to Stripe content by default. You can replace the link for [Privacy policy](https://stripe.com/privacy) and [How Capital for platforms works](https://docs.stripe.com/capital/how-capital-for-platforms-works.md) with your equivalent documentation.

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

If you don’t already use Stripe embedded components in your application, [initialize Connect.js](https://docs.stripe.com/connect/get-started-connect-embedded-components.md?platform=web#account-sessions) before you integrate the application component.

## Create an Account Session

In your [create an Account Session](https://docs.stripe.com/api/account_sessions/create.md) request, specify `capital_financing_application` in the `components` parameter.

```curl
curl https://api.stripe.com/v1/account_sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Version: 2026-02-25.preview; embedded_connect_beta=v2;" \
  -d account="{{CONNECTEDACCOUNT_ID}}" \
  -d "components[capital_financing_application][enabled]"=true
```

## Render the application component

Render the Capital application component in the front end:

#### JavaScript

```js
// Include this element in your HTML
const capitalFinancingApplication = stripeConnectInstance.create('capital-financing-application');
container.appendChild(capitalFinancingApplication);
```

#### HTML + JS

| Method                       | Type                       | Description                                                                       | Default                                                           |
| ---------------------------- | -------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `setOnApplicationSubmitted`  | `() => void`               | The connected account has successfully submitted their application for financing. |                                                                   |
| `setOnApplicationStepChange` | `({step: string}) => void` | The connected account has navigated through the application.                      |                                                                   |
| `setPrivacyPolicyUrl`        | `string`                   | Absolute URL of a page containing your privacy policy.                            | `https://stripe.com/privacy`                                      |
| `setHowCapitalWorksUrl`      | `string`                   | Absolute URL of a page with information about the Capital program.                | `https://docs.stripe.com/capital/how-capital-for-platforms-works` |

#### React

| React prop                | Type                       | Description                                                                       | Default                                                           | Required or Optional |
| ------------------------- | -------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------- | -------------------- |
| `onApplicationSubmitted`  | `() => void`               | The connected account has successfully submitted their application for financing. |                                                                   | required             |
| `onApplicationStepChange` | `({step: string}) => void` | The connected account has navigated through the application.                      |                                                                   | optional             |
| `privacyPolicyUrl`        | `string`                   | Absolute URL of a page containing your privacy policy.                            | `https://stripe.com/privacy`                                      | optional             |
| `howCapitalWorksUrl`      | `string`                   | Absolute URL of a page with information about the Capital program.                | `https://docs.stripe.com/capital/how-capital-for-platforms-works` | optional             |

## Set the display state

Add the application component on a page your connected accounts use to view payments and payouts reporting information, or a dedicated **Financing** page in your platform’s UI. Make sure to use a different location than the [Connect promotion component](https://docs.stripe.com/connect/supported-embedded-components/capital-financing-promotion.md) (if applicable).

To determine if a connected account is eligible for an offer, call the [List financing offers](https://docs.stripe.com/api/capital/financing_offers/list.md) endpoint and pass the connected account ID in the `connected_account` parameter.

The application component displays content dynamically based on the connected account’s financing status:

- **No active financing**: If an account doesn’t have an eligible financing offer, then the application component doesn’t render (returns null).

- **With active offer**: If the connected account is eligible for an offer, the component shows  full offer details with a **Start application** button.

- **Offer in review**: After an eligible connected account accepts and applies for a financing offer, use this state to display an application status tracker. Listen to the `onApplicationStepChange` event to track their offer’s progress. This event is emitted when the connected account advances to the next step or navigates back to a previous step or page in the Capital application process. The name of the next step is provided to the handler you provide in the step field. These steps can appear in any order and repeat. You can modify, add, and remove the step names at any time.

  Only use the `onApplicationStepChange` object for analytics purposes, such as tracking the average page completion time or pages with the most drop off. Don’t use the `onApplicationStepChange` object to trigger operational or support workflows, such as sending emails to connected accounts who stopped application progress at a specific page.

- **Submitted offer**: If a connected account has already submitted their financing application, the Capital financing application component renders an empty screen. Listen to the `onApplicationSubmitted` event to display a confirmation screen instead.

- **Active financing in progress**: The component doesn’t render (returns null).

### The onApplicationStepChange type

The `onApplicationStepChange` type is defined in connect.js. Every time the connected account navigates from one step to another in the Capital application process, the step change handler receives a onApplicationStepChange object with the following property:

| Name   | Type                                 | Example value   |
| ------ | ------------------------------------ | --------------- |
| `step` | `string` (must be a valid step name) | `business_type` | The unique reference to an onboarding step. |

### Step Names

Each page in an onboarding flow has one of the following step names.

| Step name                                 | Description                                                                                                                                     |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `stripe_user_authentication`              | Handles user authentication using a Stripe-hosted window to verify identity and secure the financing workflow.                                  |
| `offer_selector`                          | Introduces connected accounts to the financing application, providing an overview of the offer and the financing.                               |
| `offer_summary`                           | Displays a detailed summary of the financing offer, including key terms and conditions.                                                         |
| `business_details`                        | Collects detailed information about the connected account’s business, such as business address, industry, and operational specifics.            |
| `business_verification`                   | Gathers documentation and information that verifies the existence and legitimacy of the connected account’s business entity.                    |
| `business_summary`                        | Provides a review of all business-related information submitted during onboarding, allowing the connected account to confirm or update details. |
| `owners`                                  | Collects information about the beneficial owners of the business applying for financing.                                                        |
| `directors`                               | Gathers details about the directors of the business, if applicable.                                                                             |
| `executives`                              | Collects information about key executives associated with the business.                                                                         |
| `representative_details`                  | Collects information about the individual representing the business in the financing application.                                               |
| `representative_additional_document`      | Allows the connected account to upload supplementary documents verifying the representative’s identity or authority.                            |
| `representative_document`                 | Collects a government-issued ID or equivalent document that verifies the identity of the business representative.                               |
| `person_summary`                          | Provides a review of all person-level information (owners, representatives, executives) submitted, allowing for updates or corrections.         |
| `offer_annual_revenue`                    | Collects information regarding the connected account’s annual revenue to assess financing eligibility and terms.                                |
| `offer_financial_data`                    | Requests additional financial documents and data necessary for underwriting and approval of the financing offer.                                |
| `offer_missing_contact_info`              | Prompts the connected account to provide or update missing contact information relevant to the financing application.                           |
| `offer_payout_details`                    | Collects payment and payout details to facilitate disbursement of financing funds to the connected account’s bank account.                      |
| `lending_network_offer_review_agreements` | Provides connected accounts with agreements specific to financing offers sourced through Stripe’s Lending Network for review and acceptance.    |
| `offer_review_agreements`                 | Presents the legal agreements and terms related to the selected financing offer for review and acceptance by the connected account.             |
| `offer_complete`                          | Confirms that the financing offer has been submitted and the application process is complete.                                                   |

#### Step Restrictions

- The StepChange object is only for analytics.
- Steps can appear in any order and can repeat.
- The list of valid step names can change at any time, without notice.

## Submit the component for review

To use any of the Capital components in live mode, Stripe and our financial partners must review and approve all customer-facing content that references Stripe Capital:

1. [Create a test offer in a sandbox](https://docs.stripe.com/capital/testing.md#create-offer), and set the offer status to `delivered`. Use this test offer to preview the application component in your platform’s website or dashboard.
2. Capture a preview of the sandbox offer and how the embedded component displays in your platform’s UI (such as screenshots or a recorded video).
3. [Submit the preview to Stripe](https://form.asana.com/?k=8K51UWmWhttehNFD5qBLdg\&d=974470123217835). After approval, Stripe enables you to use the component in live mode.

## Optional: Additional embedded components

The application component is one of several [embedded components](https://docs.stripe.com/capital/embedded-component-integration.md#select-components) available for Capital for platforms. For example, you can embed the [Capital financing component](https://docs.stripe.com/connect/supported-embedded-components/capital-financing.md), which allows your connected accounts to manage their payments and view transaction history.

## See also

- [Set up Capital embedded components](https://docs.stripe.com/capital/embedded-component-integration.md)
