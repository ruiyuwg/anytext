# Account Setup

After purchasing a Supabase subscription on the AWS Marketplace, the next and final step is to link the newly purchased subscription to a Supabase organization. This can either be an existing organization or a newly created one.

An AWS Marketplace subscription is linked to exactly one Supabase organization. If you want to manage multiple organizations through the AWS Marketplace, you must purchase a separate marketplace subscription for each organization.

\<Image
alt="Supabase product subscribe"
src={{
dark: '/docs/img/guides/platform/aws-marketplace-onboarding-page-extended--dark.png',
light: '/docs/img/guides/platform/aws-marketplace-onboarding-page-extended--light.png',
}}
width={3040}
height={1312}
/>

## Implications of linking a Supabase organization to a marketplace subscription

- The billing details from your AWS account, such as the billing address and tax ID, are used. These details are managed through the [AWS Billing and Cost Management console](https://console.aws.amazon.com/billing).
- The subscription plan is managed through the AWS Marketplace. You can read more about this in the [Manage your subscription](./manage-your-subscription#manage-your-subscription-plan) guide.
- Charges will come from AWS rather than Supabase, using the default payment method set in your AWS account.
- The [Spend Cap](/docs/guides/platform/cost-control#spend-cap) for the organization is disabled. The Spend Cap is not available for organizations managed through AWS.
- When you downgrade your plan to the Free Plan, all projects within the organization will be paused if you exceed the [free projects limit](/docs/guides/platform/billing-on-supabase#free-plan).

### Linking an existing Supabase organization

Linking an existing organization will result in the following:

- The organization will be upgraded or downgraded to the plan purchased on the AWS Marketplace.
- The organization’s billing cycle will be adjusted. The start date will be set to the date your marketplace subscription became active.
- The credit card you have on file with Supabase may receive a closing charge. This charge covers usage costs incurred up until the point when the marketplace subscription became active.

## Prerequisites for linking a Supabase organization to a marketplace subscription

- The Supabase user must have the Owner or Admin role
- There must be no overdue invoices within the organization
- The organization must not already be managed through another marketplace (e.g. Vercel Marketplace)

# AWS Marketplace FAQ

#### The payment for completing the subscription on the AWS Marketplace fails.

For more information on payment errors, refer to the [AWS documentation](https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-paying-for-products.html#payment-methods).

#### How can the Spend Cap for an organization managed through the AWS Marketplace be enabled?

For organizations on the Pro Plan that are managed through the AWS Marketplace, the Spend Cap is not available.
In your AWS account, you can set up a budget for marketplace purchases (or for a specific marketplace product) and receive notifications once the budget is exceeded.

#### How to cancel your AWS Marketplace subscription

You can cancel your marketplace subscription within 48 hours of purchase. To do so, open a support ticket via the Supabase dashboard. After the 48-hour period, cancellation is no longer possible. If you cancel within the first 48 hours, the upfront charge for the fixed subscription fee will be refunded. Any usage costs incurred up to that point will not be refunded.

#### Does purchasing Supabase through the AWS Marketplace count toward your AWS spend commitment?

Yes, marketplace purchases do count toward the spend commitment.
