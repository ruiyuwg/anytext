# Manage Realtime Messages usage

## What you are charged for

You are charged for the number of messages going through Supabase Realtime throughout the billing cycle. Includes database changes, Broadcast and Presence.

**Database changes**
Each database change counts as one message per client that listens to the event. For example, if a database change occurs and 5 clients listen to that database event, it counts as 5 messages.

**Broadcast**
Each broadcast message counts as one message sent plus one message per subscribed client that receives it. For example, if you broadcast a message and 4 clients listen to it, it counts as 5 messages—1 sent and 4 received.

## How charges are calculated

Realtime Messages are billed using Package pricing, with each package representing 1 million messages. If your usage falls between two packages, you are billed for the next whole package.

### Example

For simplicity, let's assume a package size of 1,000,000 and a charge of  per package without quota.

| Messages  | Packages Billed | Costs                  |
| --------- | --------------- | ---------------------- |
| 999,999   | 1               |  |
| 1,000,000 | 1               |  |
| 1,000,001 | 2               |  |
| 1,500,000 | 2               |  |

### Usage on your invoice

Usage is shown as "Realtime Messages" on your invoice.

## Pricing

per 1 million messages. You are only charged for usage exceeding your subscription
plan's quota.

| Plan       | Quota     | Over-Usage                                    |
| ---------- | --------- | --------------------------------------------- |
| Free       | 2 million | -                                             |
| Pro        | 5 million |  per 1 million messages |
| Team       | 5 million |  per 1 million messages |
| Enterprise | Custom    | Custom                                        |

## Billing examples

### Within quota

The organization's Realtime messages are within the quota, so no charges apply.

| Line Item           | Units                | Costs                    |
| ------------------- | -------------------- | ------------------------ |
| Pro Plan            | 1                    |      |
| Compute Hours Micro | 744 hours            |      |
| Realtime Messages   | 1.8 million messages |       |
| **Subtotal**        |                      | \*\*\*\* |
| Compute Credits     |                      | -    |
| **Total**           |                      | \*\*\*\* |

### Exceeding quota

The organization's Realtime messages exceed the quota by 3.5 million, incurring charges for this additional usage.

| Line Item           | Units                | Costs                    |
| ------------------- | -------------------- | ------------------------ |
| Pro Plan            | 1                    |      |
| Compute Hours Micro | 744 hours            |      |
| Realtime Messages   | 8.5 million messages |      |
| **Subtotal**        |                      | \*\*\*\* |
| Compute Credits     |                      | -    |
| **Total**           |                      | \*\*\*\* |

## View usage

You can view Realtime Messages usage on the [organization's usage page](/dashboard/org/_/usage). The page shows the usage of all projects by default. To view the usage for a specific project, select it from the dropdown. You can also select a different time period.

\<Image
alt="Usage page navigation bar"
src={{
light: '/docs/img/guides/platform/usage-navbar--light.png',
dark: '/docs/img/guides/platform/usage-navbar--dark.png',
}}
width={1546}
height={208}
/>

In the Realtime Messages section, you can see the usage for the selected time period.

\<Image
alt="Usage page Realtime Messages section"
src={{
light: '/docs/img/guides/platform/usage-realtime-messages--light.png',
dark: '/docs/img/guides/platform/usage-realtime-messages--dark.png',
}}
width={2036}
height={760}
/>

## Exceeding Quotas

If you are on a paid plan and have [Spend Cap](/docs/guides/platform/cost-control#spend-cap) disabled or your organization is on Team Plan or above, you will pay for any overages.

When you are exceeding your quotas while being on a Free Plan or having [Spend Cap](/docs/guides/platform/cost-control#spend-cap) enabled, you will get a notification to your billing email address and put under a grace period. For more details, refer to our [Fair Use Policy](/docs/guides/platform/billing-faq#fair-use-policy).
