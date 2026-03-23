Storage compression reduces the physical storage footprint of your ApsaraDB RDS for MySQL instance by up to 50%, allowing you to store up to 2.5 times more data within the same storage capacity. The feature compresses table data in data storage and files in log storage, such as transaction log files, at the hardware level with minimal performance impact and no application changes. Storage compression is disabled by default.

## How it works

Storage compression uses an Alibaba Cloud intelligent transparent compression disk with an embedded dedicated chip. The chip compresses and decompresses data in real time at the physical disk layer, using a compression algorithm equivalent to zlib Level 6.

Key characteristics:

-   **Transparent to applications.** Compression and decompression happen at the storage layer. No changes to queries, schemas, or application logic are required.
    
-   **Reduces write amplification.** Transparent compression reduces data migration within the disk, lowering the inherent write amplification of SSDs.
    
-   **Hardware-accelerated.** A dedicated chip handles compression. Compared with software-based compression, transparent compression is more efficient and has minimal impact on performance.
    

For example, an instance with 100 GB of storage capacity can hold up to 250 GB of data after you enable storage compression. Actual ratios depend on data characteristics.

## Prerequisites

Before you enable storage compression, verify that your RDS instance meets all of the following requirements:

**Requirement**

**Supported values**

MySQL version

MySQL 8.0, MySQL 5.7, or MySQL 5.6

Edition

RDS High-availability Edition or RDS Cluster Edition

Instance type

Dedicated instance type

Storage type

Premium ESSD or Premium Local SSD

Storage capacity (Premium ESSD)

1,000 to 25,000 GB

Storage capacity (Premium Local SSD)

1,000 to 2,400 GB

Billing method

Subscription or pay-as-you-go

## Enable storage compression

**Important**

Storage compression cannot be disabled after it is enabled. Review the [Limitations](#5751551229jka) and [Billing](#bd56f243bal72) sections before proceeding.

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the top navigation bar, select the region of your RDS instance. Find the instance and click its ID.
    
2.  In the **Configuration Information** section of the **Basic Information** page, click **Enable Storage Compression**.
    
    **Note**
    
    If the button is not displayed, your RDS instance does not meet the prerequisites listed above.
    
3.  In the **Enable Storage Compression** dialog box, read and confirm the usage notes and click **OK**.
    
4.  Click **OK** to confirm. The instance status changes to **Upgrading/Downgrading**. When the process completes, the **Configuration Information** section displays **Enabled** for storage compression.
    

## Monitor storage after enabling compression

After you enable storage compression, monitor the following metrics on the **Standard Monitoring** tab of the **Monitoring and Alerts** page:

**Metric**

**Description**

**MySQL Storage Space Used (MB)**

Logical (uncompressed) storage used by MySQL data

**MySQL Physical Storage Used (MB)**

Physical (compressed) storage used on disk

**Disk Usage (%)**

Percentage of physical storage capacity in use

Compare **MySQL Storage Space Used (MB)** and **MySQL Physical Storage Used (MB)** to assess the compression ratio. For more information, see [View the monitoring information](/help/en/rds/apsaradb-rds-for-mysql/view-the-metrics-of-an-apsaradb-rds-for-mysql-instance).

## Billing

After you enable storage compression, the storage capacity fee increases by a 1.25x multiplier to reflect the expanded effective capacity. Billing is based on physical (compressed) data.

### Storage capacity fee

**Compression status**

**Fee formula**

Disabled

Unit price of storage capacity x Storage capacity x Usage duration

Enabled

1.25 x Unit price of storage capacity x Storage capacity x Usage duration

When you enable storage compression, the system creates an order. For subscription instances, this generates a configuration upgrade order with a price difference payment. For pay-as-you-go instances, this generates a specification change order and the new rate applies immediately. The billing logic follows the same rules as a [specification change](/help/en/rds/product-overview/specification-changes). Fees shown in the ApsaraDB RDS console are authoritative.

### Free quota on backup storage

Storage compression doubles the free quota on backup storage. Backups are measured against uncompressed (logical) data size.

**Storage type**

**Compression status**

**Free quota**

Premium ESSD

Disabled

200% of purchased storage capacity

Premium ESSD

Enabled

400% of purchased storage capacity

Premium Local SSD

Disabled

50% of purchased storage capacity

Premium Local SSD

Enabled

100% of purchased storage capacity

To view your current free quota, check the **Backup Usage** parameter in the **Instance Resources** section of the **Basic Information** page. The Backup Usage parameter indicates the actual amount of logical data.

If backup files exceed the free quota, excess backup storage is charged hourly:

**Hourly fee** = (Total backup file size - Free quota) x Unit price of backup storage

For details on backup billing, see [Billable items](/help/en/rds/apsaradb-rds-for-mysql/billable-items-billing-methods-and-pricing#1f9b1a94d7ykv) and [Backup storage fees](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance#e3bc5c6736ltc).

## Limitations

### Irreversibility

Storage compression cannot be disabled after it is enabled.

### Specification change restrictions

After you enable storage compression, the following specification changes are restricted:

**Restriction**

**Details**

Instance type

Cannot change from a dedicated instance type to a general-purpose instance type

Billing method

Cannot change from pay-as-you-go to serverless

Storage type

Premium Local SSD instances cannot change storage type to cloud disk

Storage capacity

Cannot reduce storage capacity below 1,000 GB

Elastic upgrade

Cloud disk instances cannot perform elastic upgrades

For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance).

### Read-only instances

-   Enable storage compression on all read-only instances **before** enabling it on the primary instance. For more information, see [Read-only ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/mysql-read-only-instance/).
    
-   New read-only instances attached to a compression-enabled primary instance automatically inherit the storage compression setting.
    

### Backup and restoration

-   Database backups contain uncompressed (logical) data. Backup data itself is not compressed.
    
-   Storage compression can be enabled on instances restored from backup files. For more information, see [Backup and restoration](/help/en/rds/apsaradb-rds-for-mysql/backup-and-restoration-2/).
    

### Recycle bin

Instances restored from the recycle bin inherit the storage compression setting of the original instance. For more information, see [Use the recycle bin feature](/help/en/rds/apsaradb-rds-for-mysql/manage-apsaradb-rds-for-mysql-instances-in-the-recycle-bin#t41790.html).

## Performance impact

Storage compression has minimal impact on instance performance. Stress test results show that throughput changes remain within -5% to +5% under various workloads and concurrency levels.

### Test environment

**Parameter**

**Value**

Application server

Alibaba Cloud Elastic Compute Service (ECS) instance

RDS edition and instance type

RDS High-availability Edition, dedicated (8 cores, 32 GB memory)

Storage type

Premium ESSD with I/O performance burst enabled

Storage capacity

1,000 GB

Test tool

sysbench

Test cases

oltp\_read\_only, oltp\_read\_write, oltp\_write\_only

### Results: 12 GB dataset

**Concurrency**

**oltp\_read\_only (before)**

**oltp\_read\_only (after)**

**Change**

**oltp\_read\_write (before)**

**oltp\_read\_write (after)**

**Change**

**oltp\_write\_only (before)**

**oltp\_write\_only (after)**

**Change**

1

6738.05

6534.69

\-3%

4698.92

4620.96

\-2%

3296.62

3151.49

\-4%

8

49446.32

48834.86

\-1%

30464.41

29389.79

\-4%

17935.94

17371.47

\-3%

16

79411.76

78639.35

\-1%

47852.25

46415.14

\-3%

27851.15

27257.97

\-2%

32

100070.48

100314.49

0%

68408.67

68521.40

0%

40468.31

39921.37

\-1%

64

113637.50

112402.16

\-1%

82387.07

82751.29

0%

57843.89

57267.82

\-1%

128

113871.22

112133.53

\-2%

90124.61

89783.53

0%

69850.39

68477.59

\-2%

256

108770.33

107001.19

\-2%

88390.16

88001.18

0%

79330.67

79290.03

0%

512

104325.11

102797.59

\-1%

85701.04

84782.41

\-1%

77186.74

76983.98

0%

### Results: 48 GB dataset

**Concurrency**

**oltp\_read\_only (before)**

**oltp\_read\_only (after)**

**Change**

**oltp\_read\_write (before)**

**oltp\_read\_write (after)**

**Change**

**oltp\_write\_only (before)**

**oltp\_write\_only (after)**

**Change**

1

1945.09

1902.89

\-2%

1700.04

1748.47

3%

1639.68

1722.17

5%

8

15934.45

15155.32

\-5%

13049.89

13230.25

1%

12203.44

12518.78

3%

16

32436.32

31072.30

\-4%

23130.89

23727.46

3%

20668.33

21196.57

3%

32

56018.88

55409.98

\-1%

38182.38

39864.06

4%

30498.33

31356.85

3%

64

72838.53

73459.99

1%

51153.83

51888.10

1%

41560.41

42073.77

1%

128

80598.87

80788.34

0%

58943.65

58837.55

0%

50755.55

51526.62

2%

256

80500.57

80369.96

0%

58969.94

59222.25

0%

56874.20

56512.52

\-1%

512

74476.62

74758.10

0%

58756.28

58347.02

\-1%

58009.10

58565.04

1%

## FAQ

### How do I check the compression ratio after enabling storage compression?

Go to **Monitoring and Alerts** > **Standard Monitoring** on your instance page. Compare the **MySQL Storage Space Used (MB)** metric (logical data) with **MySQL Physical Storage Used (MB)** (physical data on disk). The ratio between these two values reflects the actual compression ratio for your workload.

### Can I disable storage compression after enabling it?

No. Storage compression is irreversible. Once enabled, it cannot be disabled. Review the [Limitations](#5751551229jka) section before enabling.

### Does storage compression affect my backups?

Backups contain uncompressed (logical) data. Backup file sizes are not reduced by storage compression. However, the free quota on backup storage is doubled when compression is enabled. See the [Free quota on backup storage](#96ec762f67wb3) section for details.

### Why is the Enable Storage Compression button not displayed?

Your instance does not meet one or more prerequisites. Verify the MySQL version, edition, instance type, storage type, storage capacity, and billing method against the [Prerequisites](#8797c679de0g8) table.

## References

-   [Billable items](/help/en/rds/apsaradb-rds-for-mysql/billable-items-billing-methods-and-pricing#1f9b1a94d7ykv)
    
-   [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance)
    
-   [Backup and restoration](/help/en/rds/apsaradb-rds-for-mysql/backup-and-restoration-2/)
    
-   [View the monitoring information](/help/en/rds/apsaradb-rds-for-mysql/view-the-metrics-of-an-apsaradb-rds-for-mysql-instance)
    
-   [Read-only ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/mysql-read-only-instance/)
    
-   [Use the recycle bin feature](/help/en/rds/apsaradb-rds-for-mysql/manage-apsaradb-rds-for-mysql-instances-in-the-recycle-bin#t41790.html)
