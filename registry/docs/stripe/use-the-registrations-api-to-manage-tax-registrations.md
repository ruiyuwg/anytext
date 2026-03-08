# Use the Registrations API to manage tax registrations

Learn how to add, schedule, and check active tax registrations.

Businesses are required to register to collect taxes in locations where they have tax obligations. The [Tax Registration API](https://docs.stripe.com/api/tax/registrations.md) lets you retrieve and configure tax registrations using an API instead of the Dashboard. Adding your registrations in Stripe turns on tax calculation and collection for your transactions made through Stripe.

Different rules determine when and how a business needs to register to collect tax depending on the location. You can also use [Stripe to register](https://docs.stripe.com/tax/use-stripe-to-register.md) on your behalf or do it yourself. [Learn more about tax collection in different locations](https://docs.stripe.com/tax/supported-countries.md).

- **Connect platform**: As a platform, you can use this API to manage the registrations of your connected accounts or to check an account’s active registrations.
- **Direct usage**: You can use this API to manage and check your registrations.

# Connect platform

> This is a Connect platform for when tax-integration is connect-platform. View the full page at https://docs.stripe.com/tax/registrations-api?tax-integration=connect-platform.

## List all tax registrations for your connected accounts

To get a list of your connected accounts’ tax registrations, make a [list registrations](https://docs.stripe.com/api/tax/registrations/all.md) call. You can filter the response by setting the `status` parameter to `active`, `expired`, or `scheduled`.

```curl
curl -G https://api.stripe.com/v1/tax/registrations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d status=active \
  -d limit=3
```

If your connected accounts don’t have access to the Stripe Dashboard, your platform can provide a UI for them to manage their tax registrations. The registrations endpoint helps you implement that functionality.

## Add a tax registration for your connected account

If you know a connected account’s tax registration status, you can add their registration in Stripe by calling [create Registration](https://docs.stripe.com/api/tax/registrations/create.md) and providing the connected account ID as the `Stripe-Account` header.

```curl
curl https://api.stripe.com/v1/tax/registrations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d country=IE \
  -d "country_options[ie][type]"=oss_union \
  -d active_from=now
```

In this case, a `tax.registration` object is created in the connected account.

```json
{
  "object": "tax.registration",
  "active_from": 1669249440,
  "country": "IE",
  "country_options": {
    "ie": {
      "type": "oss_union"
    }
  },
  "livemode": false,
  "status": "active",
  ...
}
```

Alternatively, for connected accounts with access to the Stripe Dashboard (for example, Standard accounts), you can instruct them to [set up Stripe Tax](https://docs.stripe.com/tax/set-up.md) using the Dashboard, which includes adding tax registrations.

### Head office address requirement

To add a tax registration, the connected account must first set up a head office address. Without a defined head office address, an `invalid_request_error` gets triggered with a message about setting your head office address.

Use the [tax settings API](https://docs.stripe.com/tax/settings-api.md) to add a head office address as a platform:

```curl
curl https://api.stripe.com/v1/tax/settings \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "head_office[address][country]"=DE
```

Location-specific validation and errors might occur, details of which are found in our [tax settings guide](https://docs.stripe.com/tax/settings-api.md?tax-integration=connect-platform#validations-and-errors).

## Update and expire a tax registration for your connected account

You can’t delete a connected account’s tax registration in Stripe Tax. If a connected account deregisters with local tax authorities and needs to stop collecting tax in that location, expire its registration. To expire a connected account’s tax registration, set its `expires_at` timestamp by calling [update Registration](https://docs.stripe.com/api/tax/registrations/update.md#tax_registration_update-expires_at) and providing the connected account ID as the `Stripe-Account` header.

```curl
curl https://api.stripe.com/v1/tax/registrations/taxreg_NkyGPRPytKq66j \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d expires_at=now
```

In this case, the registration expires immediately. [Tax calculations](https://docs.stripe.com/api/tax/calculations.md) performed for the connected account after the `expires_at` won’t use this registration.

```json
{
  "object": "tax.registration",
  "active_from": 1669248000,
  "created": 1669219200,"expires_at": 1669334400,
  "livemode": false,
  "status": "active",
  ...
}
```

## Optional: Add a tax registration for the retail delivery fee \[Server-side]

To calculate the retail delivery fee for your connected account, you need to add a tax registration in Colorado, United States, or in Minnesota, United States, with the registration type `state_retail_delivery_fee`. You must add this registration to your connected account.

```curl
curl https://api.stripe.com/v1/tax/registrations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d country=US \
  -d "country_options[us][state]"=CO \
  -d "country_options[us][type]"=state_retail_delivery_fee \
  -d active_from=now
```

After adding the tax registration, the retail delivery fee applies to tax calculations if the item sold meets the requirements of the different states. The fee applies in Minnesota, for example, on orders above 100 USD.

Refer to the documentation to check if the retail delivery fee applies:

- [Retail Delivery Fee—Colorado](https://docs.stripe.com/tax/supported-countries/united-states/collect-tax.md?tax-jurisdiction-united-states=colorado#other-taxes)
- [Retail Delivery Fee—Minnesota](https://docs.stripe.com/tax/supported-countries/united-states/collect-tax.md?tax-jurisdiction-united-states=minnesota#other-taxes)

## See also

- [Use the Settings API to configure Stripe Tax](https://docs.stripe.com/tax/settings-api.md)
- [Use Stripe Tax with Connect](https://docs.stripe.com/tax/connect.md)

# Direct usage

> This is a Direct usage for when tax-integration is direct. View the full page at https://docs.stripe.com/tax/registrations-api?tax-integration=direct.

## Add a tax registration

After you register with local tax authorities, add the registration to Stripe Tax by calling [create Registration](https://docs.stripe.com/api/tax/registrations/create.md):

```curl
curl https://api.stripe.com/v1/tax/registrations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d country=IE \
  -d "country_options[ie][type]"=oss_union \
  -d active_from=now
```

In this case, Stripe creates a `tax.registration` object:

```json
{
  "object": "tax.registration",
  "active_from": 1669249440,
  "country": "IE",
  "country_options": {
    "ie": {
      "type": "oss_union"
    }
  },
  "livemode": false,
  "status": "active",
  ...
}
```

### Head office address requirement

To add a tax registration, you must first set up a head office address. Without a defined head office address, an `invalid_request_error` gets triggered with a message about setting your head office address.

Use the [tax settings API](https://docs.stripe.com/tax/settings-api.md) to add a head office address:

```curl
curl https://api.stripe.com/v1/tax/settings \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "head_office[address][country]"=DE
```

Location-specific validation and errors might occur, details of which are found in our [tax settings guide](https://docs.stripe.com/tax/settings-api.md?tax-integration=direct#validations-and-errors).

## Update and expire a tax registration

You can’t delete a tax registration in Stripe Tax. If you deregister with local tax authorities and need to stop collecting tax in that location, expire the registration. To expire a tax registration, set its `expires_at` timestamp by calling [update Registration](https://docs.stripe.com/api/tax/registrations/update.md#tax_registration_update-expires_at):

```curl
curl https://api.stripe.com/v1/tax/registrations/taxreg_NkyGPRPytKq66j \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d expires_at=now
```

In this case, the registration expires immediately. [Tax calculations](https://docs.stripe.com/api/tax/calculations.md) performed after the `expires_at` won’t use this registration:

```json
{
  "object": "tax.registration",
  "active_from": 1669248000,
  "created": 1669219200,"expires_at": 1669334400,
  "livemode": false,
  "status": "active",
  ...
}
```

## List all your tax registrations

You can display all your tax registrations performing a [list registrations](https://docs.stripe.com/api/tax/registrations.md) call. The `status` parameter allows you to filter for only `active`, `expired`, or `scheduled` tax registrations:

```curl
curl -G https://api.stripe.com/v1/tax/registrations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d status=active \
  -d limit=3
```

## Optional: Add a tax registration for the retail delivery fee \[Server-side]

To calculate the retail delivery fee, you need to add a tax registration in Colorado, United States, or in Minnesota, United States, with the registration type `state_retail_delivery_fee`.

```curl
curl https://api.stripe.com/v1/tax/registrations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d country=US \
  -d "country_options[us][state]"=CO \
  -d "country_options[us][type]"=state_retail_delivery_fee \
  -d active_from=now
```

After adding the tax registration, the retail delivery fee applies to tax calculations if the item sold meets the requirements of the different states. The fee applies in Minnesota, for example, on orders above 100 USD.

Refer to the documentation to check if the retail delivery fee applies:

- [Retail Delivery Fee—Colorado](https://docs.stripe.com/tax/supported-countries/united-states/collect-tax.md?tax-jurisdiction-united-states=colorado#other-taxes)
- [Retail Delivery Fee—Minnesota](https://docs.stripe.com/tax/supported-countries/united-states/collect-tax.md?tax-jurisdiction-united-states=minnesota#other-taxes)

## See also

- [Use the Settings API to configure Stripe Tax](https://docs.stripe.com/tax/settings-api.md)
- [Use Stripe to register](https://docs.stripe.com/tax/use-stripe-to-register.md)
