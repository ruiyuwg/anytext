# Manage Read Replica usage

## What you are charged for

Each [Read Replica](/docs/guides/platform/read-replicas) is a dedicated database. You are charged for its resources, which are the following, and mirrored from the primary database:

- [Compute](/docs/guides/platform/compute-and-disk#compute)
- [Disk Size](/docs/guides/platform/database-size#disk-size)
- Provisioned [Disk IOPS](/docs/guides/platform/compute-and-disk#provisioned-disk-throughput-and-iops)
- Provisioned [Disk Throughput](/docs/guides/platform/compute-and-disk#provisioned-disk-throughput-and-iops)
- [IPv4](/docs/guides/platform/ipv4-address).

Read Replicas are **not** covered by the [Spend Cap](/docs/guides/platform/cost-control#spend-cap).

## How we calculate charges

Read Replica charges are the total of the charges listed below.

### Compute

Compute is charged by the hour, meaning you are charged for the exact number of hours that a Read Replica is running and, therefore, incurring Compute usage. If a Read Replica runs for part of an hour, you are still charged for the full hour.

Read Replicas run on the same Compute size as the primary database.

### Disk size

Read [the Manage Disk Size usage guide](/docs/guides/platform/manage-your-usage/disk-size) for details on how we calculate charges. The disk size of a Read Replica is 1.25x the size of the primary disk to account for WAL archives. With a Read Replica you go beyond your subscription plan's quota for Disk Size.

{/\* supa-mdx-lint-disable-next-line Rule001HeadingCase \*/}

### Provisioned Disk IOPS (optional)

Read Replicas inherit any additional provisioned Disk IOPS from the primary database. Read the [Manage Disk IOPS usage guide](/docs/guides/platform/manage-your-usage/disk-iops) for details on how we calculate charges.

{/\* supa-mdx-lint-disable-next-line Rule001HeadingCase \*/}

### Provisioned Disk Throughput (optional)

Read Replicas inherit any additional provisioned Disk Throughput from the primary database. Read the [Manage Disk Throughput usage guide](/docs/guides/platform/manage-your-usage/disk-throughput) for details on how we calculate charges.

{/\* supa-mdx-lint-enable-next-line Rule001HeadingCase \*/}

### IPv4 (optional)

If the primary database has configured an IPv4 address add-on, its Read Replicas are also assigned one, with charges for each. Read the [Manage IPv4 usage guide](/docs/guides/platform/manage-your-usage/ipv4) for details on how we calculate charges.

### Usage on your invoice

Compute incurred by Read Replicas is shown as "Replica Compute Hours" on your invoice. Disk Size, Disk IOPS, Disk Throughput and IPv4 are not shown separately for Read Replicas and are rolled up into the project.

## Billing examples

### No additional resources configured

The project has one Read Replica, no IPv4, and no additional Disk IOPS and Disk Throughput configured.

| Line Item                     | Units     | Costs                       |
| ----------------------------- | --------- | --------------------------- |
| Pro Plan                      | 1         |         |
|                               |           |                             |
| Compute Hours Small Project 1 | 744 hours |         |
| Disk Size Project 1           | 8 GB      |          |
|                               |           |                             |
| Compute Hours Small Replica   | 744 hours |         |
| Disk Size Replica             | 10 GB     |       |
|                               |           |                             |
| **Subtotal**                  |           | \*\*\*\* |
| Compute Credits               |           | -       |
| **Total**                     |           | \*\*\*\* |

### Additional resources configured

The project has two Read Replicas, IPv4, and additional Disk IOPS and Disk Throughput configured.

| Line Item                     | Units     | Costs                        |
| ----------------------------- | --------- | ---------------------------- |
| Pro Plan                      | 1         |          |
|                               |           |                              |
| Compute Hours Large Project 1 | 744 hours |         |
| Disk Size Project 1           | 8 GB      |           |
| Disk IOPS Project 1           | 3600      |       |
| Disk Throughput Project 1     | 200 MB/s  |        |
| IPv4 Hours Project 1          | 744 hours |           |
|                               |           |                              |
| Compute Hours Large Replica 1 | 744 hours |         |
| Disk Size Replica 1           | 10 GB     |        |
| Disk IOPS Replica 1           | 3600      |       |
| Disk Throughput Replica 1     | 200 MB/s  |        |
| IPv4 Hours Replica 1          | 744 hours |           |
|                               |           |                              |
| Compute Hours Large Replica 2 | 744 hours |         |
| Disk Size Replica 2           | 10 GB     |        |
| Disk IOPS Replica 2           | 3600      |       |
| Disk Throughput Replica 2     | 200 MB/s  |        |
| IPv4 Hours Replica 2          | 744 hours |           |
|                               |           |                              |
| **Subtotal**                  |           | \*\*\*\* |
| Compute Credits               |           | -        |
| **Total**                     |           | \*\*\*\* |

## FAQ

### Do Compute Credits apply to Read Replica Compute?

No, Compute Credits do not apply to Read Replica Compute.
