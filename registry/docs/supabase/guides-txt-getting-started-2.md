# Getting Started

## Before you start

Depending on whether a Supabase organization is managed and billed through the AWS Marketplace or directly through the Supabase platform, there are differences. To help you make an informed decision about which approach is better suited for your needs, you can find an overview of these differences in the table below.

| Feature/Aspect       | Managed via AWS Marketplace                                                                                                                                       | Managed directly via Supabase platform                                                                                                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Available Plans      | Pro, Team, Enterprise                                                                                                                                             | Free, Pro, Team, Enterprise                                                                                                                                                                           |
| Mid-cycle downgrades | No                                                                                                                                                                | Yes                                                                                                                                                                                                   |
| Cost Control         | Spend Cap not available                                                                                                                                           | Spend Cap available                                                                                                                                                                                   |
| Downgrade Behaviour  | If a downgrade to the Free Plan causes you to exceed the [free projects limit](/docs/guides/platform/billing-on-supabase#free-plan), all projects will be paused. | If a downgrade to the Free Plan causes you to exceed the [free projects limit](/docs/guides/platform/billing-on-supabase#free-plan), you have the option to prevent pausing by transferring projects. |
| Invoicing            | Separate invoices, one for fixed costs and one for usage costs                                                                                                    | One invoice for both fixed costs and usage costs                                                                                                                                                      |

## Purchase Supabase through the AWS Marketplace

Purchasing Supabase through the AWS Marketplace involves two steps. First, you purchase the corresponding subscription on the marketplace. Then, to complete the setup, you must link this subscription to a Supabase organization on the Supabase platform.

For more details on completing the setup and what it means to link an organization, see our [Account Setup guide](./account-setup).

\<StepHikeCompact.Step step={1}>
\<StepHikeCompact.Details title="Go to the AWS Marketplace" fullWidth>
Go to the [Supabase product page on the AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-zjciuce2qsb3q) and click "View purchase options".

```
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={2}>
\<StepHikeCompact.Details title="Configure the subscription" fullWidth>
Select the desired plan (Pro Plan or Team Plan) and configure whether the subscription should automatically renew after one month.

```
    Disabling auto-renewal means that the subscription will be downgraded to the Free Plan after one month.

    If the downgrade causes you to exceed the [free projects limit](/docs/guides/platform/billing-on-supabase#free-plan), **all** projects within the organization will be paused. We do not make the decision about which projects continue to run and which are paused. You must then decide which projects you want to keep active and manually reactivate them through the Supabase dashboard.
  

  
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Subscribe" fullWidth>
Click "Subscribe" at the bottom of the page.

```
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Go to the Supabase platform" fullWidth>
After the payment has been confirmed and your marketplace subscription is active, click "Set up your account" to be redirected to the Supabase platform.

```
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={5}>
\<StepHikeCompact.Details title="Complete the setup on the Supabase platform" fullWidth>
Complete the setup by linking a Supabase organization to the AWS Marketplace subscription.

```
  <Image
    alt="Supabase product subscribe"
    src={{
        dark: '/docs/img/guides/platform/aws-marketplace-onboarding-page--dark.png',
        light: '/docs/img/guides/platform/aws-marketplace-onboarding-page--light.png',
      }}
    width={3048}
    height={1058}
  />
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>

# Invoices

## Where to find your invoices

You can view your invoices in the [AWS Billing and Cost Management console](https://console.aws.amazon.com/billing/home#/bills) under the "Bills" section.

## What invoices you get from AWS

You'll receive two invoices for your marketplace subscription.

### Invoice 1 - charge type "subscription"

- What for: The fixed subscription fee paid in advance
- When: At the time of subscription, and in subsequent months on the same day of the month the subscription was started

### Invoice 2 - charge type "usage"

- What for: Usage that exceeds the quota included in the plan, or usage not covered by the plan (e.g. Custom Domain add-on, IPv4 add-on, additionally provisioned Disk IOPS).
- When: No later than the third day of the month for the previous month. This is independent of your subscription’s billing cycle and instead covers the period from the first to the last day of the previous month.

## More information

- Detailed explanations of how each usage item is billed, independent of the AWS Marketplace. Refer to the [Manage Your Usage guide](../manage-your-usage).
