To ensure stability and high performance, we recommend that you upgrade the network connection mode of your ApsaraDB RDS instance from the safe mode to the high-performance mode. The safe mode refers to the database proxy mode, and the high-performance mode refers to the standard mode.

## Potential risks of not performing the upgrade

If you do not perform the upgrade, network jitter may occur when you attempt to access resources. This causes interruptions to your business. To ensure stability, we recommend that you perform the upgrade at the earliest opportunity.

## Benefits of the upgrade

-   After the upgrade, the network connection established is shorter. Your RDS instance is more stable.
    
-   After the upgrade, the network connection established is shorter. The average response time decreases by 20%, and the performance of your RDS instance increases.
    

## Upgrade range

You must upgrade the network connection modes of all ApsaraDB RDS for MySQL instances, ApsaraDB RDS for MySQL instances, and AnalyticDB for PostgreSQL instances that are in the database proxy mode with read/write splitting disabled. To check whether an RDS instance is in the database proxy mode, perform the following steps:

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Connection**. In the Database Connection section of the page that appears, check the value of the **Database Proxy Status** parameter.
    
    -   If the value is **Disabled**, you do not need to upgrade the network connection mode of the RDS instance.
        
    -   If the value is **Enabled**, you must upgrade the network connection mode of the RDS instance.
        
        **Note**
        
        -   If the RDS instance runs MySQL with read/write splitting enabled, upgrade the network connection mode of the RDS instance by following the instructions provided in [Upgrade the database proxy of an ApsaraDB RDS for MySQL instance from a shared proxy to a dedicated proxy](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-database-proxy-of-an-apsaradb-rds-for-mysql-instance-from-a-shared-proxy-to-a-dedicated-proxy#task-2438932).
            
        -   If the RDS instance has read-only RDS instances, you need to only upgrade the network connection mode of the RDS instance. The system automatically upgrades the network connection modes of the read-only RDS instances.
            
        

## Impacts of the upgrade

-   During the upgrade, an instance switchover is performed. Make sure that your application is configured to automatically reconnect to your RDS instance. For more information about the impacts of an instance switchover, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   In the database proxy mode, multi-statement execution is enabled by default at the protocol layer. After you disable the database proxy mode, multi-statement execution is also disabled. In this case, if you execute a multi-statement string, the system reports errors. Before you disable the database proxy mode, we recommend that you check and add the connection parameters of your RDS instance. For example, add the allowMultiQueries parameter in Java Database Connectivity (JDBC).
    
    ```
    dbc:mysql:///test?allowMultiQueries=true
    ```
    

## Upgrade method 1

1.  Navigate to the **Database Connection** page in the ApsaraDB RDS console and click **Switch Access Mode**.
    
2.  In the dialog box that appears, click **OK** to disable the database proxy mode.
    
3.  Verify that your RDS instance is running as expected.
    
    **Note**
    
    Do not skip this step.
    

## Upgrade method 2

**Note**

This method is suitable only for some RDS instances.

1.  Navigate to the **Database Proxy** page in the ApsaraDB RDS console and click **Enabled**.
    
2.  In the dialog box that appears, click **OK** to disable the database proxy mode.
    
3.  Verify that your RDS instance is running as expected.
    
    **Note**
    
    Do not skip this step.
    

## FAQ

1.  How do I determine whether I need to upgrade the network connection mode of my RDS instance?
    
    For more information, see [Upgrade range](#section-hzy-lkr-mgb).
    
2.  Why am I unable to upgrade the network connection mode of my RDS instance?
    
    If read/write splitting is enabled, you cannot upgrade the network connection mode of your RDS instance. An upgrade method is under development for RDS instances that have read/write splitting enabled.
    
3.  Which configuration data do I need to modify on my application after the upgrade?
    
    When you upgrade the network connection mode, an instance switchover is performed. Make sure that your application is configured to automatically reconnect to your RDS instance. If your application is not configured to automatically reconnect to your RDS instance, you may need to manually restart the application. After the upgrade, the endpoints and IP addresses of your RDS instance remain unchanged. You do not need to update this information on your application. For more information about the impacts of an instance switchover, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
4.  Can I switch the network connection mode of my RDS instance back to the database proxy mode?
    
    Yes, you can switch the network connection mode of your RDS instance to the database proxy mode. However, you do not need to do so. The database proxy mode is suitable for communication over both the Internet and an internal network. These types of communication are also supported by the standard mode.
    
5.  If my RDS instance has read-only RDS instances, do I need to upgrade the network connection mode of each read-only instance separately?
    
    No, you need to upgrade only the network connection mode of your RDS instance. The system automatically upgrades the network connection modes of the attached read-only RDS instances.
