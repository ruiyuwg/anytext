# Manage Monthly Active Third-Party Users usage

## What you are charged for

You are charged for the number of distinct users who log in or refresh their token during the billing cycle using a third-party authentication provider (Clerk, Firebase Auth, Auth0, AWS Cognito). Each unique user is counted only once per billing cycle, regardless of how many times they authenticate. These users are referred to as "Third-Party MAUs".

### Example

Your billing cycle runs from January 1 to January 31. Although User-1 was signed in multiple times, they are counted as a single SSO MAU for this billing cycle.

\<StepHikeCompact.Step step={1}>
\<StepHikeCompact.Details title="User-1 signs in via Auth0 on January 3">
The Third-Party MAU count increases
from 0 to 1.
\</StepHikeCompact.Details>

```
<StepHikeCompact.Code>
  <Image
    alt="Third-Party MAU login screen"
    src={{
      light: '/docs/img/guides/platform/third-party-mau-auth0-login-screen.png',
      dark: '/docs/img/guides/platform/third-party-mau-auth0-login-screen.png',
    }}
    className="max-h-[190px]"
    width={1098}
    height={1970}
  />
</StepHikeCompact.Code>
```

\</StepHikeCompact.Step>

{' '}

\<StepHikeCompact.Step step={2}>

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="User-1 signs in via Auth0 again on January 17">
The Third-Party MAU count remains 1.
\</StepHikeCompact.Details>

```
<StepHikeCompact.Code>
  <Image
    alt="Third-Party MAU login screen"
    src={{
      light: '/docs/img/guides/platform/third-party-mau-auth0-login-screen.png',
      dark: '/docs/img/guides/platform/third-party-mau-auth0-login-screen.png',
    }}
    className="max-h-[190px]"
    width={1098}
    height={1970}
  />
</StepHikeCompact.Code>
```

\</StepHikeCompact.Step>

## How charges are calculated

You are charged by Third-Party MAU.

### Usage on your invoice

Usage is shown as "Monthly Active Third-Party Users" on your invoice.

## Pricing

## Pricing

per Third-Party MAU. You are only charged for usage exceeding your subscription
plan's quota.

For a detailed breakdown of how charges are calculated, refer to [Manage Monthly Active Third-Party Users usage](/docs/guides/platform/manage-your-usage/monthly-active-users-third-party).

The count resets at the start of each billing cycle.

| Plan       | Quota   | Over-Usage                                    |
| ---------- | ------- | --------------------------------------------- |
| Free       | 50,000  | -                                             |
| Pro        | 100,000 |  per Third-Party MAU |
| Team       | 100,000 |  per Third-Party MAU |
| Enterprise | Custom  | Custom                                        |

## Billing examples

### Within quota

The organization's Third-Party MAU usage for the billing cycle is within the quota, so no charges apply.

| Line Item                        | Units                  | Costs                    |
| -------------------------------- | ---------------------- | ------------------------ |
| Pro Plan                         | 1                      |      |
| Compute Hours Micro              | 744 hours              |      |
| Monthly Active Third-Party Users | 37,000 Third-Party MAU |       |
| **Subtotal**                     |                        | \*\*\*\* |
| Compute Credits                  |                        | -    |
| **Total**                        |                        | \*\*\*\* |

### Exceeding quota

The organization's Third-Party MAU usage for the billing cycle exceeds the quota by 4950, incurring charges for this additional usage.

| Line Item                        | Units                   | Costs                        |
| -------------------------------- | ----------------------- | ---------------------------- |
| Pro Plan                         | 1                       |          |
| Compute Hours Micro              | 744 hours               |          |
| Monthly Active Third-Party Users | 130,000 Third-Party MAU |       |
| **Subtotal**                     |                         | \*\*\*\* |
| Compute Credits                  |                         | -        |
| **Total**                        |                         | \*\*\*\* |

## View usage

You can view Monthly Active Third-Party Users usage on the [organization's usage page](/dashboard/org/_/usage). The page shows the usage of all projects by default. To view the usage for a specific project, select it from the dropdown. You can also select a different time period.

\<Image
alt="Usage page Monthly Active SSO Users section"
src={{
light: '/docs/img/guides/platform/usage-mau-third-party--light.png',
dark: '/docs/img/guides/platform/usage-mau-third-party--dark.png',
}}
width={2040}
height={1040}
/>

## Exceeding Quotas

If you are on a paid plan and have [Spend Cap](/docs/guides/platform/cost-control#spend-cap) disabled or your organization is on Team Plan or above, you will pay for any overages.

When you are exceeding your quotas while being on a Free Plan or having [Spend Cap](/docs/guides/platform/cost-control#spend-cap) enabled, you will get a notification to your billing email address and put under a grace period. For more details, refer to our [Fair Use Policy](/docs/guides/platform/billing-faq#fair-use-policy).
