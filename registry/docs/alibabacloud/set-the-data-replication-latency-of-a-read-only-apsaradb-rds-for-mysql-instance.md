This topic describes how to configure the latency at which a read-only ApsaraDB RDS for MySQL instance synchronizes data from its primary RDS instance.

## Prerequisites

The primary RDS instance of the read-only RDS instance runs RDS High-availability Edition.

## Usage notes

After you configure the data replication latency for a read-only RDS instance, you cannot add the instance to the read/write splitting link. Before you can add the instance to the read/write splitting link, you must set the data replication latency of the instance to 0. For more information, see [Enable the read/write splitting feature for an ApsaraDB RDS for MySQL instance (shared proxy)](/help/en/rds/enable-the-read-or-write-splitting-feature-for-an-apsaradb-rds-for-mysql-instance#concept-mkx-gt4-wdb).

## Procedure

1.  Go to the **Basic Information** page of the read-only RDS instance.
    
    1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
        
    2.  Find the read-only RDS instance and click its ID.
        
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  Click **Set Delayed Replication**.
    
4.  In the dialog box that appears, configure the data replication latency and click **OK**.
    
    **Note**
    
    The data replication latency is measured in seconds. The default value is 0. If you set the data replication latency to 0 seconds, the primary RDS instance sends operation logs to the read-only RDS instance after the logged operations are complete. After the read-only RDS instance receives the operation logs, it immediately performs the logged operations.
