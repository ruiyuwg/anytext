# Tax registrations

Learn how to allow connected accounts to manage their tax registrations for Stripe Tax.

The Tax registrations component gives your connected accounts control over their tax compliance. Your connected accounts interact with this component by managing their tax registrations directly in your platform. This component is suitable for [software platforms](https://docs.stripe.com/tax/tax-for-platforms.md), which means that your connected accounts are liable to collect taxes.

If you’re a platform integrating Stripe Tax, you must collect information about the [registrations with tax authorities](https://docs.stripe.com/tax/registering.md) of your connected accounts in the applicable jurisdictions. Your connected accounts need to register with their tax authorities before they add their tax registrations in your platform. To correctly calculate and collect taxes for your platform, you must collect the tax registrations of your connected accounts.

Note: The following is a preview/demo component that behaves differently than live mode usage with real connected accounts. The actual component has more functionality than what might appear in this demo component. For example, for connected accounts without Stripe dashboard access (custom accounts), no user authentication is required in production.

The Tax registrations component uses the [Tax Registrations API](https://docs.stripe.com/tax/registrations-api.md) to display a list of tax registrations to your connected accounts. To calculate tax on their payments in a location, connected accounts need to add their tax registration with the Tax registrations component. If the connected account wish to stop calculating tax in a certain location, they can end the tax registration in the component.

## Requirements

- Your integration must follow the [software platforms guide](https://docs.stripe.com/tax/tax-for-platforms.md) for [Tax on Connect](https://docs.stripe.com/tax/connect.md). This means that your connected accounts are liable to collect taxes.
- If you haven’t already, render the [Tax settings component](https://docs.stripe.com/connect/supported-embedded-components/tax-settings.md). You need both the Tax settings component and the Tax registrations component to provide tax compliance control to your connected accounts.

## Integrate the tax registrations component

When [creating an Account Session](https://docs.stripe.com/api/account_sessions/create.md), enable tax registrations by specifying `tax_registrations` in the `components` parameter.

```curl
curl https://api.stripe.com/v1/account_sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d account="{{CONNECTEDACCOUNT_ID}}" \
  -d "components[tax_registrations][enabled]"=true
```

After creating the account session and [initializing ConnectJS](https://docs.stripe.com/connect/get-started-connect-embedded-components.md#account-sessions), you can render the tax registrations component in the frontend:

#### React

```jsx
// Include this React component
import {
  ConnectTaxRegistrations,
  ConnectComponentsProvider,
} from "@stripe/react-connect-js";

return (
  <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
    <div>
      <h2>Tax Registrations</h2>
      <ConnectTaxRegistrations
        // Optional
        // displayCountries={["US", "CA", "DE"]}
        // onAfterTaxRegistrationAdded={({id: registrationId}) => console.log({registrationId})}
        // onAfterTaxRegistrationExpired={({id: registrationId}) => console.log({registrationId})}
       />
    </div>
  </ConnectComponentsProvider>
);
```

#### HTML + JS

| Method                             | Type                     | Description                                                                                                                                                                                                                                                     | Default                             |
| ---------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `setDisplayCountries`              | `string[]`               | Array of [two-letter country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) that the connected account can [choose from for a new tax registration](https://docs.stripe.com/api/tax/registrations/object.md#tax_registration_object-country_options). | undefined (all countries permitted) |
| `setOnAfterTaxRegistrationAdded`   | `({id: string}) => void` | Callback executed with an object containing the newly added tax registration ID                                                                                                                                                                                 | undefined (not a required method)   |
| `setOnAfterTaxRegistrationExpired` | `({id: string}) => void` | Callback executed with an object containing the tax registration ID ended by the user                                                                                                                                                                           | undefined (not a required method)   |

#### React

| React prop                      | Type                     | Description                                                                                                                                                                                                                                                     | Default                             | Required or optional |
| ------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | -------------------- |
| `displayCountries`              | `string[]`               | Array of [two-letter country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) that the connected account can [choose from for a new tax registration](https://docs.stripe.com/api/tax/registrations/object.md#tax_registration_object-country_options). | undefined (all countries permitted) | optional             |
| `onAfterTaxRegistrationAdded`   | `({id: string}) => void` | Callback executed with the newly added tax registration ID                                                                                                                                                                                                      | undefined (not a required method)   | optional             |
| `onAfterTaxRegistrationExpired` | `({id: string}) => void` | Callback executed with an object containing the tax registration ID ended by the user                                                                                                                                                                           | undefined (not a required method)   | optional             |

## Limitations

The following features are available in the Dashboard and the API, but aren’t currently supported by the Tax registrations component:

- Scheduling start or end dates for registrations. You can only create or end registrations immediately.
- Specifying US state sales tax elections when creating tax registrations.

## See also

- [Tax on Connect](https://docs.stripe.com/tax/connect.md)
- [Tax for software platforms](https://docs.stripe.com/tax/tax-for-platforms.md)
- [Tax settings component](https://docs.stripe.com/connect/supported-embedded-components/tax-settings.md)
