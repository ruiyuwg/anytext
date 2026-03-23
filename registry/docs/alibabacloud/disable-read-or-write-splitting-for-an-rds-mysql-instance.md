This topic describes how to disable read/write splitting for an RDS MySQL instance.

This topic applies only to RDS instances that run in shared proxy mode. For more information about RDS instances that run in dedicated proxy mode, see [What are dedicated proxies](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#concept-2020985 "This topic introduces the dedicated proxies that are provided in ApsaraDB RDS for MySQL.").

## Prerequisites

The read/write splitting function has been enabled for the RDS instance. For more information, see [Enable the read/write splitting feature for an ApsaraDB RDS for MySQL instance (shared proxy)](/help/en/rds/enable-the-read-or-write-splitting-feature-for-an-apsaradb-rds-for-mysql-instance#concept-mkx-gt4-wdb "This topic describes how to enable the read/write splitting feature for an ApsaraDB RDS for MySQL instance for which the shared proxy service is enabled. This feature provides a read/write splitting endpoint. This endpoint can distribute write requests to your RDS instance and read requests to the read-only RDS instances that are attached to your RDS instance. The distribution is based on the read weights of these instances.").

## Precautions

-   When the read/write splitting function is being disabled, the RDS instance is disconnected for 30 seconds or less. We recommend that you disable this function during off-peak hours and make sure that your application can automatically reconnect to the RDS instance.
-   After the read/write splitting function is disabled, the read/write splitting address becomes invalid. Make sure that your application no longer uses the read/write splitting address to connect to the RDS instance.

## Procedure

1.  Log on to the [RDS console](https://rds.console.alibabacloud.com).
2.  In the upper-left corner, select the region where the target RDS instance is located.![选择地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2514264361/p36543.png)
3.  Find the target RDS instance and click the instance ID.
4.  In the left-side navigation pane, click Database Connection or Database Proxy.
5.  Click the Read/Write Splitting tab.
6.  In the Basic Information of Read/Write Splitting section, click Disable Read/Write Splitting.
7.  In the displayed dialog box, click Confirm.
