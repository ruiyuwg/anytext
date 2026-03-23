MaxCompute charges for storage based on the compressed size of a single data replica — not your raw data size.

## Background

MaxCompute stores data in columnar compression format with a typical compression ratio of 1:5. Data is redundantly stored across three replicas by default, but you are billed for only one replica. This means your actual storage costs are often significantly lower than your raw data volume would suggest.

MaxCompute supports two redundancy configurations:

-   **Multi-zone storage**: Data is redundantly stored across multiple zones in the same region, providing zone-level fault tolerance. For more information, see [Zone-disaster recovery](/help/en/maxcompute/user-guide/disaster-recovery-in-the-same-city). For more information about the billing formulas and pricing for multi-zone storage, see [Multi-zone storage pricing](#bfba004ae7toq).
    
-   **Single-zone storage**: Data is redundantly stored across multiple storage devices within the same zone, providing hardware-level fault tolerance. For more information about the billing formulas and pricing for single-zone storage, see [Single-zone storage pricing](#875ca4e808fyz).
    
-   **Backup storage**: Automatic backup and restoration. For more information about the billing formulas and pricing for data backup, see [Backup storage pricing](#section-6ot-pkd-lrz).
    

Within multi-zone and single-zone storage, you can select from three access tiers: Standard storage, Infrequent Access (IA) storage, and Long-term storage.

If a MaxCompute project has an overdue payment, the project and associated services may be suspended. To prevent service interruption, pay any outstanding balance as soon as possible. For more information, see [Alerts for overdue payments and rules for service suspension](/help/en/maxcompute/product-overview/description-of-overdue-payments-and-service-suspension#concept-r3f-lgd-5db).

**Note**

Storage bills are typically generated within three hours after the billing cycle ends. The maximum delay is six hours. For example, the previous day's bill is generated before 06:00 the current day. The actual generation time depends on the system. After a bill is generated, the fee is automatically deducted from your account balance. You can view bill details on the [Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail) page.

If you have other questions, [submit a support request](https://wx-in-i.dingtalk.com/yydy/yq.html?encodeDeptId=null&corpId=dingb682fb31ec15e09f35c2f4657eb6378f&inviterUid=null&scene=allMemberConversationDetail-copyLink&cid=6465538762&inviteCode=GKO5lWJbFEZkWl7&origin=2&originMeta=globalGroup&method=copyLink) or join the MaxCompute developer community on DingTalk (group ID: 11782920) to contact MaxCompute technical support.

## Choosing a storage tier

Use the table below to select the tier that matches your access patterns:

**Use case**

**Recommended tier**

Data queried frequently (daily or near-daily access)

Standard storage

Data that is infrequently accessed

Infrequent Access (IA) storage

Archival or compliance data, rarely or never queried

Long-term storage

## How storage volume is measured

MaxCompute takes an hourly snapshot of each project's storage volume. The storage volume recorded is the size of a single compressed data replica.

**Average daily storage volume** is calculated as:

Average daily storage volume (GB) = Sum of 24 hourly snapshots ÷ 24

**Daily storage fee** is then:

Daily storage fee = Average daily storage volume (GB) × Unit price (USD/GB/day)

For IA storage and Long-term storage, an additional data access fee applies whenever data is read:

Data access fee = Amount of data accessed (GB) × Access unit price (USD/GB)

## Storage billing

### **Multi-zone storage pricing**

**Billing formula:**

Daily storage fee = Average daily storage volume (GB) × Storage unit price (USD/GB/day) For IA and Long-term tiers: Data access fee = Amount of data accessed (GB) × Access unit price (USD/GB)

**Storage type**

**Storage unit price**

**Access unit price**

Multi-zone storage - Standard storage

0.00078 USD/GB/day

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price in this region is 0.000936 USD/GB/day.

—

Multi-zone storage - Infrequent Access (IA) storage

0.000536 USD/GB/day

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price in this region is 0.000643 USD/GB/day.

0.006191 USD/GB

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price in this region is 0.007429 USD/GB.

Multi-zone storage - Long-term storage

0.000221 USD/GB/day

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price in this region is 0.000265 USD/GB/day.

0.080793 USD/GB

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price in this region is 0.096952 USD/GB.

**Storage type change rules:**

-   If the storage type of a table or partition is changed from IA storage to standard storage or long-term storage, you are charged data access fees for IA storage of the entire table or partition.
    
-   If the storage type of a table or partition is changed from long-term storage to standard storage or IA storage, you are charged data access fees for long-term storage of the entire table or partition.
    

**Worked example:**

A project stores 10,000 GB (10 TB, measured as compressed single-replica size) at the Standard storage tier for one day:

10,000 GB × 0.00078 USD/GB/day = 7.80 USD/day

### **Single-zone storage pricing**

**Billing formula:**

Daily storage fee = Average daily storage volume (GB) × Storage unit price (USD/GB/day) For IA and Long-term tiers: Data access fee = Amount of data accessed (GB) × Access unit price (USD/GB)

**Storage type**

**Storage unit price**

**Access unit price**

Single-zone storage - Standard storage

Free if total project volume <= 1 GB; 0.0006 USD/GB/day for volume exceeding 1 GB

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price in this region is 0.00072 USD/GB/day.

—

Single-zone storage - IA storage

0.000412 USD/GB/day

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price in this region is 0.000494 USD/GB/day.

0.006191 USD/GB

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price in this region is 0.007429 USD/GB.

Single-zone storage - Long-term storage

0.00017 USD/GB/day

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price in this region is 0.000204 USD/GB/day.

0.080793 USD/GB

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price in this region is 0.096952 USD/GB.

**Free tier:** If the actual storage volume of a project is 1 GB or less, Standard storage on single-zone is free of charge. Charges apply only to the volume exceeding 1 GB.

**Storage type change rules:**

-   If the storage type of a table or partition is changed from IA storage to standard storage or long-term storage, you are charged data access fees for IA storage of the entire table or partition.
    
-   If the storage type of a table or partition is changed from long-term storage to standard storage or IA storage, you are charged data access fees for long-term storage of the entire table or partition.
    

### Backup storage pricing

MaxCompute supports automatic backup and restoration. For more information, see [Backup and restoration](/help/en/maxcompute/user-guide/backup-and-restoration#concept-2549238).

By default, MaxCompute retains one day of backup data at no charge. If a project administrator extends the retention period beyond one day, pay-as-you-go charges apply to backup storage for each additional day of retention.

**Billing formula:**

Daily backup storage fee = Average daily backup storage volume (GB) × Storage unit price (USD/GB/day) Average daily backup storage volume (GB) = Sum of collected backup storage volume ÷ 24

**Storage type**

**Storage unit price**

**Description**

Backup storage

0.0006 USD/GB/day

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner. The unit price in this region is 0.00072 USD/GB/day.

-   By default, MaxCompute projects provide automatic backup with a one-day data retention period for free.
    
-   If the project administrator changes the data retention period to more than one day, MaxCompute charges you on a pay-as-you-go basis for the backup data that is retained for more than one day.
    

Average daily backup storage volume = Sum of the collected backup storage volume/24

## Bill generation and payment

Storage bills are typically generated within three hours after the billing cycle ends. The maximum delay is six hours. For example, the previous day's bill is generated before 06:00 the current day. The actual generation time depends on the system. After a bill is generated, the fee is automatically deducted from your account balance. You can view bill details on the [Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail) page.

## Get support

If you have questions, [submit a support request](https://wx-in-i.dingtalk.com/yydy/yq.html?encodeDeptId=null&corpId=dingb682fb31ec15e09f35c2f4657eb6378f&inviterUid=null&scene=allMemberConversationDetail-copyLink&cid=6465538762&inviteCode=GKO5lWJbFEZkWl7&origin=2&originMeta=globalGroup&method=copyLink) or join the MaxCompute developer community on DingTalk (group ID: 11782920) to contact MaxCompute technical support.
