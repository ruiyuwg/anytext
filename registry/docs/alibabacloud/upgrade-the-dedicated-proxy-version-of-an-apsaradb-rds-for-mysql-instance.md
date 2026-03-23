ApsaraDB RDS for MySQL upgrades the database proxy version at irregular intervals. You can view the release notes for the database proxy version of ApsaraDB RDS for MySQL and determine whether to upgrade the database proxy version based on your business requirements. This topic describes how to upgrade the database proxy version of an ApsaraDB RDS for MySQL instance in the ApsaraDB RDS console or by calling an API operation.

For more information about the database proxy version, see [Release notes for the database proxy version](/help/en/rds/apsaradb-rds-for-mysql/release-notes-of-dedicated-proxy-versions#reference-1962349).

## Prerequisites

The database proxy feature is enabled. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178).

## Usage notes

-   When you upgrade the database proxy version of your RDS instance, new sessions are connected to the database proxy of the new version to reduce the impacts on your workloads.
    
    -   Active sessions on the database proxy of the original version are retained for 8 hours. The database proxy of the original version is automatically disconnected within the first maintenance window.
        
    -   When the database proxy of the original version is disconnected, existing connections on the database proxy are immediately terminated. Make sure that your application is configured to automatically reconnect to your database system.
        
-   If you upgrade the database proxy version multiple times within a short period of time, the system retains only the sessions on the database proxy before the most recent upgrade.
    
-   We recommend that you perform the upgrade during off-peak hours. Make sure that your application can automatically reconnect to your RDS instance.
    

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Basic Information** section, click **Upgrade** to the right of the **Proxy Version** parameter.
    
    **Note**
    
    If the database proxy uses the latest version, the Upgrade button is not displayed.
    
4.  In the dialog box that appears, configure the **Upgrade Time** parameter and click **OK**.
    
    **Note**
    
    -   You can select **Upgrade Now** or **Upgrade Within Maintenance Window** for the Upgrade Time parameter. For more information about the maintenance window, see [Configure a maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance).
        
    -   After you set the **Upgrade Time** parameter to **Upgrade Within Maintenance Window** and click **OK**, the RDS instance generates an upgrade plan based on the current maintenance window. If you modify the maintenance window, the upgrade plan that is generated is not affected.
        
    

## References

-   [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178)
    
-   [Release notes for the database proxy version](/help/en/rds/apsaradb-rds-for-mysql/release-notes-of-dedicated-proxy-versions#reference-1962349)
    
-   [Configure a maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance)
    
-   [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929)
    

## Related operations

**Operation**

**Description**

[UpgradeDBProxyInstanceKernelVersion](/help/en/rds/developer-reference/api-rds-2014-08-15-upgradedbproxyinstancekernelversion)

Upgrades the database proxy version.
