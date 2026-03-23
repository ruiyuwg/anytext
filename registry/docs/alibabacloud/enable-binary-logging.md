PolarDB for MySQL uses redo logs, which are more advanced than binary logs. Binary logging is disabled by default. Enable it when you need MySQL ecosystem compatibility, for example, to replicate data through Data Transmission Service (DTS), stream changes to Elasticsearch or AnalyticDB, or synchronize data across clusters.

## Use cases

-   **Data replication**: Synchronize data [from a PolarDB for MySQL cluster to an ApsaraDB RDS for MySQL instance](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-an-apsaradb-rds-for-mysql-instance#task-259707), [from an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-polardb-for-mysql-cluster-1#concept-dfn-f5y-bgb), or [between PolarDB for MySQL clusters](/help/en/polardb/polardb-for-mysql/user-guide/synchronize-data-between-polardb-for-mysql-clusters).
    
-   **Ecosystem integration**: Connect to [Elasticsearch](/help/en/es/use-cases/use-dataworks-to-synchronize-data-from-a-mysql-database-to-an-alibaba-cloud-elasticsearch-cluster#task-2481135) or AnalyticDB for analytics and search.
    

## Limits

Clusters created before April 5, 2019 must update to the latest minor version before enabling binary logging. For details, see [Revision version management](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version#task-2449714). Clusters created on or after that date support binary logging directly.

## Billing

Binary logs consume cluster storage space, charged at your cluster's storage rate.

**Storage billing method**

**Billing behavior**

[Subscription](/help/en/polardb/polardb-for-mysql/storage-space#d2e4c8a4debst)

No additional fees as long as total storage stays within your purchased capacity

[Pay-as-you-go](/help/en/polardb/polardb-for-mysql/storage-space#80c90557f9u38)

Charged based on the actual storage occupied by binary log data

## Performance impact

Binary logging affects write operations (INSERT, UPDATE, DELETE) only -- read performance is unaffected. The typical impact is within 10%, but can reach 40% under extreme workloads.

Large transaction commits can block other transactions and extend restart or configuration change duration.

## **Enable binary logging**

### Enable during cluster creation

Select **Enable** in the **Enable Binary Logging** section when creating a cluster. For details, see [Custom purchase](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster#task-1580301) or [Purchase a subscription cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-subscription-cluster#task-1580301).

### Enable for an existing cluster

**Important**

Enabling binary logging triggers an automatic cluster restart that typically takes 5 to 15 minutes, with a service interruption of approximately 40 seconds. Recovery time varies based on data volume and table count. Perform this operation during off-peak hours and make sure your application supports automatic reconnection.

#### Method 1: Use the Binary Logs page

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner, select the region of the cluster. In the cluster list, find the cluster and click its ID to go to the **Basic Information** page.
    
2.  In the left-side navigation pane, click **Binary Logs**.
    
3.  Click **Enable Now**.
    
4.  In the **Enable Binary Logging** dialog box, set the Effective Mode parameter to **Now** or **Scheduled**. If you select Scheduled, specify when to enable binary logging.
    
5.  Click **OK**.
    

#### Method 2: Set the loose\_polar\_log\_bin parameter

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner, select the region of the cluster. In the cluster list, find the cluster and click its ID to go to the **Basic Information** page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Parameters**.
    
3.  Find the loose\_polar\_log\_bin parameter and change its value. For details, see the "Modify parameters" section of [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#section-osq-bhy-ydb).
    
    **MySQL version**
    
    **Parameter value**
    
    MySQL 5.6
    
    ON\_WITH\_GTID
    
    MySQL 5.7 or 8.0
    
    ON
    

## **Disable binary logging**

### Method 1: Use the Binary Logs page

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner, select the region of the cluster. In the cluster list, find the cluster and click its ID to go to the **Basic Information** page.
    
2.  In the left-side navigation pane, click **Binary Logs**.
    
3.  Click **Disable Binary Logging**.
    
4.  In the **Disable Binary Logging** dialog box, set the Effective Mode parameter to **Now** or **Scheduled**. If you select Scheduled, specify when to disable binary logging. Optionally, select **Clear Local Binary Logs**.
    
5.  Click **OK**.
    

### Method 2: Set the loose\_polar\_log\_bin parameter

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner, select the region of the cluster. In the cluster list, find the cluster and click its ID to go to the **Basic Information** page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Parameters**.
    
3.  Find the loose\_polar\_log\_bin parameter and change its value. For details, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#section-osq-bhy-ydb).
    
    **MySQL version**
    
    **Parameter value**
    
    MySQL 5.6
    
    OFF\_WITH\_GTID
    
    MySQL 5.7 or 8.0
    
    OFF
    

**Note**

After you disable binary logging, existing binary log files are permanently retained. To free storage space, shorten the retention period before disabling the feature. Wait for older logs to be automatically purged, then disable binary logging.

## **Binary log retention**

### Retention policies

**Condition**

**Default retention**

Binary logging enabled

3 days

Binary logging disabled

Existing files retained permanently

Binary log files are automatically deleted after the retention period expires.

**Note**

-   For a PolarDB for MySQL cluster that was purchased before November 23, 2023, binary log files are retained for two weeks (14 days) by default.
    
-   For a PolarDB for MySQL cluster that was purchased before January 17, 2024, binary log files are retained for one week (seven days) by default.
    

### **Modify the retention period**

**Important**

-   Changing the retention period does not disrupt connections or require a cluster restart.
    
-   If a large volume of binary logs (such as 10 TB) needs to be purged, brief write operation exceptions may occur. In this case, change the retention period during off-peak hours. Alternatively, shorten the period progressively so that only a portion of logs is cleared at a time.
    
-   Deleted binary log files cannot be restored.
    

Modify one of the following parameters based on your MySQL version:

**MySQL version**

**Parameter**

**Valid values**

**Unit**

**Default**

5.6

loose\_expire\_logs\_hours

0-2376

Hours

72

5.7 or 8.0

binlog\_expire\_logs\_seconds

0-4294967295

Seconds

259200 (3 days)

A value of `0` means binary log files are never automatically deleted.

For instructions on modifying parameters, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#section-osq-bhy-ydb).

**Trigger immediate purging**

After changing the retention parameter, historical logs are not immediately cleared. Use one of these methods to trigger purging:

-   Wait for the active binary log file to reach the size set by `max_binlog_size`. When it rotates, all expired files are automatically deleted.
    
-   Run flush binary logs with the privileged account.
    
-   Restart the cluster.
    

**Delete binary logs when binary logging is disabled**

If binary logging is disabled and you want to remove accumulated log files:

1.  Re-enable binary logging. See [Enable binary logging](#e577a3c3c1u6c).
    
2.  Set loose\_expire\_logs\_hours or binlog\_expire\_logs\_seconds to a smaller value.
    
3.  Wait for expired logs to be automatically purged.
    
4.  Disable binary logging again.
    

## **View and parse binary logs**

Use the `mysqlbinlog` tool to retrieve and parse binary logs remotely. For details, see [Remotely obtain and parse the binary log files of a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/remotely-obtain-and-parse-binary-log-records-from-a-cluster-of-the-polardb-for-mysql#concept-2009811).

To check the last write time of each binary log file, run:

```
show full binary logs;
```

This returns the file name, size, and last write time for each binary log file.

**Note**

`show full binary logs` requires one of the following minimum revision versions:

-   MySQL 8.0.2: revision 8.0.2.2.0 or later
    
-   MySQL 8.0.1: revision 8.0.1.1.14 or later
    
-   MySQL 5.7: revision 5.7.1.0.27 or later
    
-   MySQL 5.6: revision 5.6.1.0.38 or later
    

## Usage notes

-   **Use the primary endpoint**: When consuming binary logs through DTS or other services, connect to the **Primary Endpoint** of your cluster. This endpoint always points to the primary node that generates binary logs. To find the primary endpoint, see the "View the endpoint and port" section of [Manage the endpoints of a cluster](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint#section-7nv-xxd-hd6).
    
-   **Global vs. session-level logging**: The loose\_polar\_log\_bin parameter controls binary logging at the global level. For session-level control, use the sql\_log\_bin parameter (disabled by default). To enable sql\_log\_bin, go to [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/polardb/quotas), find the **polardb SQL\_log\_bin parameter permissions** quota, and click **Apply** in the **Actions** column.
    
-   **Automatic enablement during migration**: DTS automatically enables binary logging when migrating data from an ApsaraDB RDS instance to a PolarDB cluster.
    

## FAQ

### What does `Could not find first log file name in binary log index file` mean?

The binary log file has been deleted. Deleted files cannot be restored.

### Can I use Canal for change data capture?

Yes. After enabling binary logging, Canal can capture changes from your PolarDB for MySQL cluster.

### Why can't I perform lock-free DDL operations in DMS?

[Lock-free DDL operations](/help/en/dms/perform-lock-free-ddl-operations#multiTask4072) in Data Management Service (DMS) require binary logging to be enabled. If you do not want to enable it, use online DDL instead.

### Does `SHOW BINARY LOGS` affect cluster performance?

No. This is a metadata query that does not write data. It has no measurable impact on read or write performance.

### How do I view binary logs generated at a specific point in time?

Restore data to that point in time, then parse the binary logs from the restored instance. For details, see [Database and table restoration: Restore data to an earlier point in time](/help/en/polardb/polardb-for-mysql/database-and-table-restoration-restore-data-to-a-previous-point-in-time).
