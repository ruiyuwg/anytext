By default, the SQL audit and analysis features provided by PolarDB-X are disabled. You can enable the features in the console.

## Prerequisites

-   An Alibaba Cloud account is created and real-name verification is complete.
-   Log Service is activated.
    
    The first time you log on to the Log Service console, activate the service by following the on-screen instructions.
    
-   A database is created on the PolarDB-X instance. For more information about how to create a database, see [Create a database](/help/en/polardb/polardb-for-xscale/create-a-database-1#task-2545040).

## Procedure

1.  Log on to the [PolarDB for Xscale console](https://polardb-x.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region where the target instance is located.
    
3.  On the **Instances** page, click the **PolarDB-X 2.0** tab.
4.  Find the target instance and click its ID.
    
5.  In the left-side navigation pane, choose **Diagnostics and Optimization** > **SQL Audit and Analysis**.
6.  On the right side of the page, turn on the switch next to **Current Database SQL audit log status**.

## Results

After the SQL audit feature is enabled, the audit log entries of PolarDB-X databases in the same region are written to the same Logstore. Log Service provides the following default configuration.

**Warning** Log Service provides frequent updates and upgrades for the SQL log audit feature. Log Service automatically updates the indexes and default reports of dedicated Logstores. Take note of the precautions before you delete or modify the default project, Logstore, indexes, and dashboards that are created by Log Service.

**Default configuration item**

**Description**

Project

A project whose name is in the `polardbx-sqlaudit-Region ID-Alibaba Cloud account ID` format is created. For example, the `polardbx-sqlaudit-cn-hangzhou-123456789` project is created.

Logstore

A Logstore named `polardbx-sqlaudit-log` is created.

Region

The audit log entries of PolarDB-X databases in the same region are written to the same Logstore. For example, the audit log entries of PolarDB-X databases that are deployed in all zones in the cn-hangzhou region are written to the `polardbx-sqlaudit-cn-hangzhou-Alibaba Cloud account ID` Logstore.

Shard

By default, five [shards](/help/en/sls/shard#concept-wnn-rqn-vdb) are created and the [Manage shards](/help/en/sls/manage-shards#concept-yks-jj5-vdb) feature is enabled.

Index

Indexes are automatically created.

**Warning** The indexes are automatically updated each time the feature is updated. Do not modify or delete indexes.

Log retention period

By default, log entries are stored for 45 days. Expired log entries are automatically deleted.

Dashboard

By default, the following dashboards are created for PolarDB-X:

-   Operations Center
-   Performance Center
-   Security Center

For more information about the dashboards, see [Log reports](/help/en/polardb/polardb-for-xscale/log-reports-1#task-1955180).

**Note** Do not modify the default dashboard configuration. Default dashboards are automatically updated each time the feature is updated. You can create custom dashboards. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
