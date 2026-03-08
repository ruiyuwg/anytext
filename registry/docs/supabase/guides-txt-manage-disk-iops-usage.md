# Manage Disk IOPS usage

## What you are charged for

Each database has a dedicated disk, and you are charged for its provisioned disk IOPS. However, unless you explicitly opt in for additional IOPS, no charges apply.

Refer to our [disk guide](/docs/guides/platform/compute-and-disk#disk) for details on how disk IOPS, disk throughput, disk size, disk type and compute size interact, along with their limitations and constraints.

Disk IOPS Hours are **not** covered by the [Spend Cap](/docs/guides/platform/cost-control#spend-cap).

Launching a Read Replica creates an additional database with its own dedicated disk. Read Replicas inherit the primary database's disk IOPS settings. You are charged for the provisioned IOPS of the Read Replica. Refer to [Manage Read Replica usage](/docs/guides/platform/manage-your-usage/read-replicas) for details on billing.

## How charges are calculated

Disk IOPS is charged by IOPS-Hrs. 1 IOPS-Hr represents 1 IOPS being provisioned for 1 hour. For example, having 10 IOPS provisioned for 5 hours results in 50 IOPS-Hrs (10 IOPS × 5 hours).

### Usage on your invoice

Usage is shown as "Disk IOPS-Hrs" on your invoice.

## Pricing

Pricing depends on the [disk type](/docs/guides/platform/compute-and-disk#disk-types), with type gp3 being the default.

### General purpose disks (gp3)

per IOPS-Hr ( per IOPS per month). gp3 disks
come with a default IOPS of 3,000. You are only charged for provisioned IOPS exceeding these 3,000
IOPS.

| Plan       | Included Disk IOPS | Over-Usage per IOPS per month | Over-Usage per IOPS-Hr       |
| ---------- | ------------------ | ----------------------------- | ---------------------------- |
| Pro        | 3,000              |        |  |
| Team       | 3,000              |        |  |
| Enterprise | Custom             | Custom                        | Custom                       |

### High performance disks (io2)

per IOPS-Hr ( per IOPS per month). Unlike general
purpose disks, high performance disks are billed from the first provisioned IOPS.

| Plan       | Included Disk IOPS | Usage per IOPS per month | Usage per IOPS-Hr          |
| ---------- | ------------------ | ------------------------ | -------------------------- |
| Pro        | 0                  |   |  |
| Team       | 0                  |   |  |
| Enterprise | Custom             | Custom                   | Custom                     |

## Billing examples

### Gp3

Project 1 doesn't exceed the included IOPS, so no charges for IOPS apply. Project 2 exceeds the included IOPS by 600, incurring charges for this additional usage.

| Line Item                     | Units      | Costs                        |
| ----------------------------- | ---------- | ---------------------------- |
| Pro Plan                      | 1          |          |
|                               |            |                              |
| Compute Hours Micro Project 1 | 744 hours  |          |
| Disk IOPS Project 1           | 3,000 IOPS |           |
|                               |            |                              |
| Compute Hours Large Project 2 | 744 hours  |         |
| Disk IOPS Project 2           | 3,600 IOPS |       |
|                               |            |                              |
| **Subtotal**                  |            | \*\*\*\* |
| Compute Credits               |            | -        |
| **Total**                     |            | \*\*\*\* |

### Io2

This disk type is billed from the first IOPS provisioned, meaning for 8000 IOPS.

| Line Item                     | Units      | Costs                       |
| ----------------------------- | ---------- | --------------------------- |
| Pro Plan                      | 1          |         |
| Compute Hours Large Project 1 | 744 hours  |        |
| Disk IOPS Project 1           | 8,000 IOPS |        |
| **Subtotal**                  |            | **,087** |
| Compute Credits               |            | -       |
| **Total**                     |            | **,077** |
