# Manage Storage size usage

## What you are charged for

You are charged for the total size of all assets in your buckets.

## How charges are calculated

Storage size is charged by Gigabyte-Hours (GB-Hrs). 1 GB-Hr represents the use of 1 GB of storage for 1 hour.
For example, storing 10 GB of data for 5 hours results in 50 GB-Hrs (10 GB × 5 hours).

### Usage on your invoice

Usage is shown as "Storage Size GB-Hrs" on your invoice.

## Pricing

per GB-Hr ( per GB per month). You are only
charged for usage exceeding your subscription plan's quota.

| Plan       | Quota in GB | Over-Usage per GB       | Quota in GB-Hrs | Over-Usage per GB-Hr         |
| ---------- | ----------- | ----------------------- | --------------- | ---------------------------- |
| Free       | 1           | -                       | 744             | -                            |
| Pro        | 100         |  | 74,400          |  |
| Team       | 100         |  | 74,400          |  |
| Enterprise | Custom      | Custom                  | Custom          | Custom                       |

## Billing examples

### Within quota

The organization's Storage size usage is within the quota, so no charges for Storage size apply.

| Line Item           | Units     | Costs                    |
| ------------------- | --------- | ------------------------ |
| Pro Plan            | 1         |      |
| Compute Hours Micro | 744 hours |      |
| Storage Size        | 85 GB     |       |
| **Subtotal**        |           | \*\*\*\* |
| Compute Credits     |           | -    |
| **Total**           |           | \*\*\*\* |

### Exceeding quota

The organization's Storage size usage exceeds the quota by 257 GB, incurring charges for this additional usage.

| Line Item           | Units     | Costs                      |
| ------------------- | --------- | -------------------------- |
| Pro Plan            | 1         |        |
| Compute Hours Micro | 744 hours |        |
| Storage Size        | 357 GB    |       |
| **Subtotal**        |           | \*\*\*\* |
| Compute Credits     |           | -      |
| **Total**           |           | \*\*\*\* |

## View usage

### Usage page

You can view Storage size usage on the [organization's usage page](/dashboard/org/_/usage). The page shows the usage of all projects by default. To view the usage for a specific project, select it from the dropdown. You can also select a different time period.

\<Image
alt="Usage page navigation bar"
src={{
light: '/docs/img/guides/platform/usage-navbar--light.png',
dark: '/docs/img/guides/platform/usage-navbar--dark.png',
}}
width={1546}
height={208}
/>

In the Storage size section, you can see how much storage your projects have used during the selected time period.

\<Image
alt="Usage page Storage Size section"
src={{
light: '/docs/img/guides/platform/usage-storage-size--light.png',
dark: '/docs/img/guides/platform/usage-storage-size--dark.png',
}}
width={2028}
height={882}
/>

### SQL Editor

Since we designed Storage to work as an integrated part of your Postgres database on Supabase, you can query information about your Storage objects in the `storage` schema.

List files larger than 5 MB:

```sql
select
    name,
    bucket_id as bucket,
    case
        when (metadata->>'size')::int >= 1073741824 then
            ((metadata->>'size')::int / 1073741824.0)::numeric(10, 2) || ' GB'
        when (metadata->>'size')::int >= 1048576 then
            ((metadata->>'size')::int / 1048576.0)::numeric(10, 2) || ' MB'
        when (metadata->>'size')::int >= 1024 then
            ((metadata->>'size')::int / 1024.0)::numeric(10, 2) || ' KB'
        else
            (metadata->>'size')::int || ' bytes'
        end as size
from
    storage.objects
where
    (metadata->>'size')::int > 1048576 * 5
order by (metadata->>'size')::int desc
```

List buckets with their total size:

```sql
select
    bucket_id,
    (sum((metadata->>'size')::int) / 1048576.0)::numeric(10, 2) as total_size_megabyte
from
    storage.objects
group by
    bucket_id
order by
    total_size_megabyte desc;
```

## Optimize usage

- [Limit the upload size](/docs/guides/storage/production/scaling#limit-the-upload-size) for your buckets
- [Delete assets](/docs/guides/storage/management/delete-objects) that are no longer in use

## Exceeding Quotas

If you are on a paid plan and have [Spend Cap](/docs/guides/platform/cost-control#spend-cap) disabled or your organization is on Team Plan or above, you will pay for any overages.

When you are exceeding your quotas while being on a Free Plan or having [Spend Cap](/docs/guides/platform/cost-control#spend-cap) enabled, you will get a notification to your billing email address and put under a grace period. For more details, refer to our [Fair Use Policy](/docs/guides/platform/billing-faq#fair-use-policy).
