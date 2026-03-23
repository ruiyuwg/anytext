ApsaraDB RDS for PostgreSQL supports three data replication modes for High-availability Edition instances: asynchronous, synchronous, and semi-synchronous. Change the replication mode to balance write performance against data protection based on your workload requirements.

## How it works

In a High-availability Edition deployment, your RDS instance continuously replicates data from the primary instance to a standby instance. The data replication mode controls how the primary instance handles transaction commits relative to standby replication:

-   **Asynchronous** -- The primary instance commits transactions without waiting for the standby to confirm receipt. This delivers the fastest write performance but allows potential data loss during failover.
    
-   **Synchronous** -- The primary instance waits for the standby to confirm that data has been written before committing. This provides the strongest data protection at the cost of higher write latency.
    
-   **Semi-synchronous** -- The primary instance waits for the standby up to a configurable timeout. If the standby does not respond within the timeout, the instance falls back to asynchronous mode temporarily. After data catches up, it returns to semi-synchronous mode automatically. This balances performance and protection for most production workloads.
    

## When to use each mode

**Data replication mode**

**Protection level**

**Performance**

**Data loss risk on failover**

**Best for**

**Asynchronous** (default)

Optimal performance

Highest write speed

Medium

Logging, analytics ingestion, dev/test workloads where brief data loss is acceptable

**Synchronous**

Optimal protection

Medium write speed

Lowest

Financial transactions, order processing, workloads requiring strong data protection

**Semi-synchronous**

High availability

Balanced

Low (bounded by timeout)

Most production workloads that need both reliable performance and strong data protection

## Prerequisites

Before you begin, make sure that you have:

-   An RDS instance running **High-availability Edition** with **cloud disks**
    
-   Minor engine version **20220228 or later** (required only for the **Semi-synchronous** mode). For details, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance#concept-gnx-vgj-wdb11)
    

## Check the current data replication mode

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance. Then, click the instance ID.
    
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  In the **Instance Availability** section, find the **Data Replication Mode** value.
    
    ![Data Replication Mode in the Instance Availability section](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7515838961/p726873.png)
    

## Change the data replication mode

#### **Method 1: Use the console**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance. Then, click the instance ID.
    
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  Click **Change Data Replication Mode**.
    
    ![Change Data Replication Mode button](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7515838961/p726874.png)
    
4.  Select the desired **Data Replication Mode**.
    
    ![Data Replication Mode dialog](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5115291661/p478740.png)
    
    **Important**
    
    To use **Semi-synchronous** mode, make sure that the minor engine version of your RDS instance is 20220228 or later. For details, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance#concept-gnx-vgj-wdb11).
    
5.  Click **Ok**.
    

#### **Method 2: Modify parameters**

Modify the `synchronous_commit`, `rds_sync_replication_timeout`, and `synchronous_standby_names` parameters directly to change the replication mode.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance. Then, click the instance ID.
    
2.  In the left-side navigation pane, click **Parameters**.
    
3.  On the **Modifiable Parameters** tab, find the `synchronous_commit`, `rds_sync_replication_timeout`, and `synchronous_standby_names` parameters.
    
4.  In the **Running Value** column, click the edit icon next to the parameter value. Enter the new value and click **Ok**.
    
    Set the parameters according to the target replication mode:
    
    **Asynchronous mode**
    
    **Parameter**
    
    **Value**
    
    `synchronous_commit`
    
    `off`
    
    **Note**
    
    When `synchronous_commit` is set to `off`, the `rds_sync_replication_timeout` parameter has no effect.
    
    **Synchronous mode**
    
    **Parameter**
    
    **Value**
    
    `synchronous_commit`
    
    `remote_write`
    
    `rds_sync_replication_timeout`
    
    `0`
    
    `synchronous_standby_names`
    
    `'standby1'`
    
    **Semi-synchronous mode**
    
    **Parameter**
    
    **Value**
    
    `synchronous_commit`
    
    `remote_write`
    
    `rds_sync_replication_timeout`
    
    Greater than `0`. Range: 0--300000 ms. Recommended: `500`.
    
    `synchronous_standby_names`
    
    `'standby1'`
    
    **Note**
    
    The `rds_sync_replication_timeout` parameter specifies the synchronization timeout in milliseconds. If a synchronization operation times out, the instance temporarily falls back to asynchronous mode (optimal performance protection level). After data synchronization catches up, the instance automatically returns to semi-synchronous mode (high availability protection level).
    
    **Important**
    
    The default value of `synchronous_standby_names` is `standby1`. If you have a self-managed secondary instance, do not name it `standby1`. Otherwise, the RDS instance may replicate data to the self-managed instance in synchronous or semi-synchronous mode, which can cause data loss during a primary/secondary switchover.
    
5.  Click **Apply Changes**.
    
    ![Apply Changes button](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7595018061/p81129.png)
    

## Verify the change

After changing the data replication mode, verify that the new mode is active:

1.  In the left-side navigation pane, click **Service Availability**.
    
2.  In the **Instance Availability** section, confirm that the **Data Replication Mode** value matches your configuration.
    

## Usage notes

-   This feature is available only for instances running **High-availability Edition** with **cloud disks**.
    
-   **Semi-synchronous** mode requires minor engine version **20220228 or later**.
    
-   If you have a self-managed secondary instance, do not name it `standby1`. The default value of `synchronous_standby_names` is `standby1`. A naming conflict can cause the RDS instance to replicate data to the self-managed instance in synchronous or semi-synchronous mode, leading to potential data loss during a primary/secondary switchover.
    
-   In semi-synchronous mode, if the standby does not respond within the `rds_sync_replication_timeout` period, the instance temporarily operates in asynchronous mode. Normal semi-synchronous replication resumes automatically after the standby catches up.
    

## References

-   [Update the minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance#concept-gnx-vgj-wdb11)
