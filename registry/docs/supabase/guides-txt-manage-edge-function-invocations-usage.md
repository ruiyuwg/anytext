# Manage Edge Function Invocations usage

## What you are charged for

You are charged for the number of times your functions get invoked, regardless of the response status code. Preflight (OPTIONS) requests are not billed.

## How charges are calculated

Edge Function Invocations are billed using Package pricing, with each package representing 1 million invocations. If your usage falls between two packages, you are billed for the next whole package.

### Example

For simplicity, let's assume a package size of 1 million and a charge of  per package without a free quota.

| Invocations | Packages Billed | Costs               |
| ----------- | --------------- | ------------------- |
| 999,999     | 1               |  |
| 1,000,000   | 1               |  |
| 1,000,001   | 2               |  |
| 1,500,000   | 2               |  |

### Usage on your invoice

Usage is shown as "Function Invocations" on your invoice.

## Pricing

per 1 million invocations. You are only charged for usage exceeding your
subscription plan's quota.

| Plan       | Quota     | Over-Usage                                    |
| ---------- | --------- | --------------------------------------------- |
| Free       | 500,000   | -                                             |
| Pro        | 2 million |  per 1 million invocations |
| Team       | 2 million |  per 1 million invocations |
| Enterprise | Custom    | Custom                                        |

## Billing examples

### Within quota

The organization's function invocations are within the quota, so no charges apply.

| Line Item            | Units                 | Costs                    |
| -------------------- | --------------------- | ------------------------ |
| Pro Plan             | 1                     |      |
| Compute Hours Micro  | 744 hours             |      |
| Function Invocations | 1,800,000 invocations |       |
| **Subtotal**         |                       | \*\*\*\* |
| Compute Credits      |                       | -    |
| **Total**            |                       | \*\*\*\* |

### Exceeding quota

The organization's function invocations exceed the quota by 1.4 million, incurring charges for this additional usage.

| Line Item            | Units                 | Costs                    |
| -------------------- | --------------------- | ------------------------ |
| Pro Plan             | 1                     |      |
| Compute Hours Micro  | 744 hours             |      |
| Function Invocations | 3,400,000 invocations |       |
| **Subtotal**         |                       | \*\*\*\* |
| Compute Credits      |                       | -    |
| **Total**            |                       | \*\*\*\* |

## View usage

You can view Edge Function Invocations usage on the [organization's usage page](/dashboard/org/_/usage). The page shows the usage of all projects by default. To view the usage for a specific project, select it from the dropdown. You can also select a different time period.

\<Image
alt="Usage page navigation bar"
src={{
light: '/docs/img/guides/platform/usage-navbar--light.png',
dark: '/docs/img/guides/platform/usage-navbar--dark.png',
}}
width={1546}
height={208}
/>

In the Edge Function Invocations section, you can see how many invocations your projects have had during the selected time period.

\<Image
alt="Usage page Edge Function Invocations section"
src={{
light: '/docs/img/guides/platform/usage-function-invocations--light.png',
dark: '/docs/img/guides/platform/usage-function-invocations--dark.png',
}}
width={2008}
height={734}
/>

## Exceeding Quotas

If you are on a paid plan and have [Spend Cap](/docs/guides/platform/cost-control#spend-cap) disabled or your organization is on Team Plan or above, you will pay for any overages.

When you are exceeding your quotas while being on a Free Plan or having [Spend Cap](/docs/guides/platform/cost-control#spend-cap) enabled, you will get a notification to your billing email address and put under a grace period. For more details, refer to our [Fair Use Policy](/docs/guides/platform/billing-faq#fair-use-policy).
