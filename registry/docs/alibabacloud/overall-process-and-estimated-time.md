If you accidentally modify tables, you can use the database and table restoration feature to restore the affected tables to the original cluster.

You can restore databases and tables using a point-in-time restore or by restoring from a backup set (snapshot). If your target restore point is the same as the creation time of a backup set, restoring from the backup set is more convenient. If your target restore point is different from the creation time of any existing backup set, you must use a point-in-time restore.

**Note**

The new database and table restoration workflow, which includes the [Fast Import feature](/help/en/polardb/polardb-for-mysql/user-guide/fast-import-instructions), is available in a phased release for PolarDB for MySQL 8.0.1 clusters with minor version 8.0.1.1.49 or later.

## Overall process

Regardless of whether you use a point-in-time restore or restore from a backup set (snapshot), the key process is the same. First, a temporary node is created and data from a specific point in time is restored to that node. Then, the data is restored from the temporary node to the original cluster.

The new version of the database and table restoration feature was released on April 3, 2024. Compared to the old version, this version reduces the time required to restore data to the original cluster. Data is also automatically synchronized to Hot Standby Clusters and GDN secondary clusters, which significantly reduces the restoration time.

### **Scenarios**

The database and table restoration feature supports PolarDB Enterprise Edition and Standard Edition, but requires specific cluster revision versions. The following table lists the minimum revision versions required for different scenarios.

-   **Basic Features**: The minimum revision version required to support database and table restoration.
    
-   **New restoration process**: A higher revision version is required to benefit from the speed optimization of the [new restoration process](/help/en/polardb/polardb-for-mysql/overall-process-and-estimated-time#b30f4a343cpq3).
    

**Edition Series**

**MySQL Version**

**Architecture**

**Basic Features (Minimum Revision Version)**

**New Restoration Process (Minimum Revision Version)**

Enterprise Edition (Cluster Edition)

5.6

X86

`5.6.1.0.25`

`5.6.1.0.42`

5.7

X86

`5.7.1.0.8`

`5.7.1.0.36`

8.0.1

X86

`8.0.1.1.14`

`8.0.1.1.46`

8.0.2

X86

`8.0.2.2.0`

`8.0.2.2.26`

Standard Edition

5.6

X86

`5.6.1.0.42`

`5.6.1.0.42`

5.7

X86

`5.7.1.0.30`

`5.7.1.0.30`

8.0.1

X86

`8.0.1.1.38.2`

`8.0.1.1.38.2`

Yitian (ARM)

`8.0.1.1.41`

`8.0.1.1.41`

8.0.2

X86

`8.0.2.2.21`

`8.0.2.2.21`

**Note**

You can view the kernel version of your cluster in the **Configuration Information** section on the **Basic Information** page of your PolarDB for MySQL cluster.

### **Flowcharts of old and new versions**

If your cluster's revision version meets the requirements, the new database and table restoration workflow is automatically used. The following diagrams illustrate the old and new workflows.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0511214671/CAEQORiBgMDWmcfIsRkiIDI2MWIzMmI1MzU5YzQzZTJhNmU0YmQ3OTBiNGViOGU24075278_20231109135250.575.svg)

**Note**

We recommend that you restore data during off-peak hours.

## Estimated time

### **Estimated time for each step**

**Step**

**Estimated time**

Create a temporary node and restore data from the backup set to the node.

About 3 to 10 minutes.

Restore incremental data from redo logs.

**Note**

This step is required only for a point-in-time restore. The time required depends on the size of the redo logs to be applied.

1.5 GB/minute.

Restore data to the original cluster.

For the estimated time, see [Reference for database and table restoration speed tests](#7d409ed07eufj).

**Note**

-   The preceding data is for reference only.
    
-   To restore terabytes of data, the database and table restoration operation may take a long time. For a faster restoration, use the full restoration from a backup set feature. This process usually takes only a few minutes. For more information, see [Method 1 for full restoration: Restore data from a backup set](/help/en/polardb/polardb-for-mysql/user-guide/method-1-for-cluster-restoration-restore-from-a-backup-set).
    

### **Reference for database and table restoration speed tests**

**CPU and memory (dedicated)**

**Test data**

**innodb\_io\_capacity**

**innodb\_io\_capacity\_max**

**Old workflow**

**New workflow**

**Speed comparison: New vs. old workflow**

**Enable hot standby for storage**

**Restoration duration**

**Restoration speed**

**Restoration speed configuration**

**Restoration duration**

**Restoration speed**

**Hot Standby Cluster enabled (Old workflow)**

**Speed increase**

2 cores, 8 GB

Single table, about 200 GB

4000

8000

Yes

3 hours 38 minutes 25 seconds

1.03 GB/minute

Standard

1 hour 43 minutes 36 seconds

2.16 GB/minute

Yes

110%

No

2 hours 23 minutes 0 seconds

1.57 GB/minute

No

38%

4 cores, 16 GB

Single table, about 200 GB

4000

8000

Yes

3 hours 3 minutes 31 seconds

1.14 GB/minute

Quick

54 minutes 13 seconds

3.70 GB/minute

Yes

225%

No

88%

Standard

1 hour 20 minutes

2.5 GB/minute

Yes

119%

No

1 hour 45 minutes 53 seconds

1.97 GB/minute

No

27%

Safe

2 hours 12 minutes

1.52 GB/minute

Yes

33%

No

\-30%

8000

16000

Yes

3 hours 3 minutes 15 seconds

1.14 GB/minute

Quick

42 minutes 18 seconds

4.76 GB/minute

Yes

318%

No

142%

Standard

54 minutes 16 seconds

3.70 GB/minute

Yes

225%

No

1 hour 45 minutes 53 seconds

1.97 GB/minute

No

88%

Safe

1 hour 20 minutes

2.5 GB/minute

Yes

119%

No

27%

8 cores, 32 GB

Single table, about 200 GB

4000

8000

Yes

2 hours 50 minutes 56 seconds

1.19 GB/minute

Quick

54 minutes 39 seconds

3.70 GB/minute

Yes

211%

No

80%

Standard

1 hour 21 minutes

2.47 GB/minute

Yes

108%

No

1 hour 38 minutes 57 seconds

2.05 GB/minute

No

20%

Safe

2 hours 12 minutes

1.52 GB/minute

Yes

28%

No

\-35%

18000

36000

Yes

2 hours 51 minutes 5 seconds

1.19 GB/minute

Quick

41 minutes 48 seconds

4.88 GB/minute

Yes

310%

No

273%

Standard

54 minutes 43 seconds

3.70 GB/minute

Yes

211%

No

1 hour 38 minutes 33 seconds

1.31 GB/minute

No

182%

Safe

1 hour 21 minutes

2.47 GB/minute

Yes

108%

No

89%

16 cores, 64 GB

Single table, about 200 GB

4000

8000

Yes

2 hours 55 minutes 26 seconds

1.17 GB/minute

Quick

53 minutes 28 seconds

3.77 GB/minute

Yes

222%

No

88%

Standard

1 hour 20 minutes

2.5 GB/minute

Yes

114%

No

1 hour 42 minutes 20 seconds

2.01 GB/minute

No

24%

Safe

2 hours 12 minutes

1.52 GB/minute

Yes

30%

No

\-32%

20000

40000

Yes

2 hours 53 minutes 49 seconds

1.19 GB/minute

Quick

41 minutes 1 second

4.88 GB/minute

Yes

310%

No

138%

Standard

54 minutes 5 seconds

3.70 GB/minute

Yes

211%

No

1 hour 40 minutes 35 seconds

2.05 GB/minute

No

80%

Safe

1 hour 20 minutes

2.5 GB/minute

Yes

110%

No

22%

**Note**

-   **Restoration speed** refers to the speed at which data is restored to the original cluster. It does not include the time required to create a temporary node or restore incremental logs in the [restoration process](#d0e170d49aj74).
    
-   The **restoration speed** depends on several factors: whether a Hot Standby Cluster is enabled, the primary node specifications, the value of the `innodb_io_capacity` parameter, the restoration speed configuration, and the number of tables being restored.
    
-   You can adjust the restoration speed by dynamically changing the values of the `innodb_io_capacity` and `innodb_io_capacity_max` parameters. Changing these parameter values has a minor effect on the restoration speed of the old workflow but has a major effect on the new workflow.
    
-   The restoration speed is categorized into three configurations based on the input/output operations per second (IOPS) used: **Quick**, **Standard**, and **Safe**. A higher IOPS value results in a faster restoration speed. The speed increase is especially noticeable when you restore large tables.
    
-   The **Restoration speed configuration** has a minor effect on the restoration speed of the old workflow but has a major effect on the new workflow.
    
-   Because the 2-core, 8 GB specification is small and has high I/O fluctuations, the restoration speed configuration may not have a noticeable effect. Therefore, test results for this configuration are not listed.
    
-   The preceding test data does not cover scenarios where many tables are restored. If you restore many tables at once, the restoration speed is also affected.
    
-   The preceding test data is for reference only. The actual restoration speed is affected by factors such as the underlying machine model and network conditions.
