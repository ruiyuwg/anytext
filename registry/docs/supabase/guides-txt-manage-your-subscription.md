# Manage your subscription

## Manage your subscription plan

To change your subscription plan

1. On the [organization's billing page](/dashboard/org/_/billing), go to section **Subscription Plan**
2. Click **Change subscription plan**
3. On the side panel, choose a subscription plan
4. Follow the prompts

### Upgrade

Upgrades take effect immediately. During the process, you are informed of the associated costs.

\<Image
alt="Subscription upgrade modal"
src={{
light: '/docs/img/guides/platform/upgrade-to-pro-plan-modal--light.png',
dark: '/docs/img/guides/platform/upgrade-to-pro-plan-modal--dark.png',
}}
className="max-w-\[577px]"
width={1536}
height={1116}
/>

If you still have credits in your account, we will use the credits first before charging your card.

### Downgrade

Downgrades take effect immediately. During the process, you are informed of the implications.

\<Image
alt="Subscription downgrade modal"
src={{
light: '/docs/img/guides/platform/downgrade-to-free-plan-modal--light.png',
dark: '/docs/img/guides/platform/downgrade-to-free-plan-modal--dark.png',
}}
className="max-w-\[577px]"
width={2096}
height={1649}
/>

#### Credits upon downgrade

Upon subscription downgrade, any prepaid subscription fee will be credited back to your organization for unused time in the billing cycle. These credits do not expire and will be applied to future invoices.

**Example:**
If you start a Pro Plan subscription on January 1 and downgrade to the Free Plan on January 15, your organization will receive about 50% of the subscription fee as credits for the unused time between January 15 and January 31.

As stated in our [Terms of Service](/terms#1-fees), we do not offer refunds to the payment method on file.

#### Charges on downgrade

When you downgrade from a paid plan to the Free Plan, you will get credits for the unused time on the paid plan. However, you will also be charged for any excessive usage in the billing cycle.

The plan line item (e.g. Pro Plan) gets charged upfront, whereas all usage charges get charged in arrears, as we only know your usage by the end of the billing cycle. Excessive usage is charged whenever a billing cycle resets, so either when your monthly cycle resets, or whenever you do a plan change.

If you got charged after downgrading to the Free Plan, you had excessive usage in the previous billing cycle. You can check your invoices to see what exactly you were charged for.

### Cancel subscription

To cancel your subscription, go to your [organization's billing settings](/dashboard/org/_/billing), click "Change subscription plan" and select the Free Plan. The cancellation is immediate, refer to [downgrade docs](#downgrade) for full details.

Cancellations are fully self-serve. Your Free Plan subscription will run indefinitely unless you delete the organization through your [organization's settings](/dashboard/org/_/general).

## Manage your payment methods

You can add multiple payment methods, but only one can be active at a time.

### Add a payment method

1. On the [organization's billing page](/dashboard/org/_/billing), go to section **Payment Methods**
2. Click **Add new card**
3. Provide your credit card details
4. Click **Add payment method**

### Delete a payment method

1. On the [organization's billing page](/dashboard/org/_/billing), go to section **Payment Methods**
2. In the context menu of the payment method you want to delete, click **Delete card**
3. Click **Confirm**

### Set a payment method as active

1. On the [organization's billing page](/dashboard/org/_/billing), go to section **Payment Methods**
2. In the context menu of the payment method you want to delete, click **Use this card**
3. Click **Confirm**

## Manage your billing details

You can update your billing email address, billing address and tax ID on the [organization's billing page](/dashboard/org/_/billing).

Any changes made to your billing details will only be reflected in your upcoming invoices. Our payment provider cannot regenerate previous invoices.

# Manage your usage

Each subpage breaks down a specific usage item and details what you're charged for, how costs are calculated, and how to optimize usage and reduce costs.

- [Compute](/docs/guides/platform/manage-your-usage/compute)
- [Read Replicas](/docs/guides/platform/manage-your-usage/read-replicas)
- [Branching](/docs/guides/platform/manage-your-usage/branching)
- [Egress](/docs/guides/platform/manage-your-usage/egress)
- [Disk Size](/docs/guides/platform/manage-your-usage/disk-size)
- [Disk Throughput](/docs/guides/platform/manage-your-usage/disk-throughput)
- [Disk IOPS](/docs/guides/platform/manage-your-usage/disk-iops)
- [Monthly Active Users](/docs/guides/platform/manage-your-usage/monthly-active-users)
- [Monthly Active Third-Party Users](/docs/guides/platform/manage-your-usage/monthly-active-users-third-party)
- [Monthly Active SSO Users](/docs/guides/platform/manage-your-usage/monthly-active-users-sso)
- [Storage Size](/docs/guides/platform/manage-your-usage/storage-size)
- [Storage Image Transformations](/docs/guides/platform/manage-your-usage/storage-image-transformations)
- [Edge Function Invocations](/docs/guides/platform/manage-your-usage/edge-function-invocations)
- [Realtime Messages](/docs/guides/platform/manage-your-usage/realtime-messages)
- [Realtime Peak Connections](/docs/guides/platform/manage-your-usage/realtime-peak-connections)
- [Custom Domains](/docs/guides/platform/manage-your-usage/custom-domains)
- [Point-in-Time Recovery](/docs/guides/platform/manage-your-usage/point-in-time-recovery)
- [IPv4](/docs/guides/platform/manage-your-usage/ipv4)
- [MFA Phone](/docs/guides/platform/manage-your-usage/advanced-mfa-phone)
- [Log Drains](/docs/guides/platform/manage-your-usage/log-drains)

# Migrating to Supabase

Learn how to migrate to Supabase from another database service.

## Migration guides

{(migrationPages) => (

```
      {migrationPages.map((page) => (
        
          <GlassPanel
            icon={page.icon}
            title={page.name}
            hasLightIcon={page.hasLightIcon}
            background={false}
            className="[&>div]:p-4"
          />
        
      ))}
    
  )}
```

# Migrating within Supabase

Learn how to migrate from one Supabase project to another

If you are on a Paid Plan and have physical backups enabled, you should instead use the [Restore
to another project feature](/docs/guides/platform/clone-project).

## Database migration guides

If you need to migrate from one Supabase project to another, choose the appropriate guide below:

### Backup file from the dashboard (\*.backup)

Follow the [Restore dashboard backup guide](/docs/guides/platform/migrating-within-supabase/dashboard-restore)

### SQL backup files (\*.sql)

Follow the [Backup and Restore using the CLI guide](/docs/guides/platform/migrating-within-supabase/backup-restore)

## Transfer project to a different organization

Project migration is primarily for changing regions or upgrading to new major versions of the platform in some scenarios. If you need to move your project to a different organization without touching the infrastructure, see [project transfers](/docs/guides/platform/project-transfer).
