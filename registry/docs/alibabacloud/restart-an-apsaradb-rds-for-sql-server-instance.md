If the number of connections to your ApsaraDB RDS for SQL Server instance reaches the upper limit or a performance issue occurs on the RDS instance, you can restart the RDS instance to alleviate or resolve the issue.

## Background information

If the following issues occur on your RDS instance, you can restart the RDS instance to alleviate or resolve the issues:

-   If the number of connections to your RDS instance reaches the upper limit or a performance issue occurs on the RDS instance, you can restart the RDS instance to resolve the issue.
    
-   If you modify the settings of some parameters for your RDS instance and want the modifications to take effect, you can restart the RDS instance.
    
-   If the storage capacity of your RDS instance is exhausted and fails to be expanded, you can restart the RDS instance to release TempDB to resolve the issue.
    
    **Note**
    
    TempDB is one of the system libraries of SQL Server. TempDB is used to store temporary user objects, internal objects, and row version data. TempDB is rebuilt each time the RDS instance is restarted.
    
-   If the minor engine version of your RDS instance is outdated and has unresolved issues, you can restart the RDS instance to alleviate the issues and then update the minor engine version to resolve the issues. For more information, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-sql-server/update-the-minor-engine-version-of-an-apsaradb-rds-for-sql-server-instance#task-2075103).
    
-   If your RDS instance works in mirroring mode to achieve high availability, memory leaks may occur. In this case, you can restart the RDS instance to alleviate the issue and then upgrade the major engine version to resolve the issue. For more information, see [Upgrade the major engine version and RDS edition of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance#concept-1426110).
    

## Prerequisites

The RDS instance is in the **Running** state.

## Impacts

-   The period of time that is required to restart an RDS instance varies based on various factors, such as instance performance, dirty pages in memory, and long-running transactions. An instance restart may cause a transient connection that lasts approximately 30 seconds in about 90% of the cases. Make sure that your application is configured to reconnect to your RDS instance. To ensure business continuity, we recommend that you take appropriate measures before your restart the RDS instance.
    
    **Note**
    
    RDS Basic Edition does not provide a secondary instance that serves as a hot standby. When your RDS instance that runs RDS Basic Edition unexpectedly fails or you restart the RDS instance, change the specifications, or upgrade the database engine of the RDS instance, your database service may become unavailable for an extended period of time. If you require high availability for your database system, we recommend that you select other RDS editions, such as RDS High-availability Edition, instead of RDS Basic Edition. Alternatively, you can upgrade your RDS instance from RDS Basic Edition to RDS High-availability Edition for instances of specific database engines. For more information, see [Upgrade the edition of an RDS instance from RDS Basic Edition to RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-basic-edition#section-5sr-8hd-e8j).
    
-   If a read-only RDS instance is attached to the primary RDS instance and you restart the primary RDS instance, the read-only RDS instance is not restarted, and data replication resumes after the primary RDS instance is restarted.
    
-   After you trigger an instance restart, the status of the RDS instance changes to **Restarting**, which interrupts the connection. We recommend that you prepare a restart schedule to reduce the impacts.
    

## **Procedure**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the upper-right corner of the page that appears, click **Restart Instance**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3700651961/p699493.png)
    
3.  In the message that appears, click **OK**.
    
4.  In the dialog box that appears, complete SMS verification or multi-factor authentication (MFA).
    

## Related operations

You can call the RestartDBInstance operation to restart your RDS instance. For more information, see [RestartDBInstance](/help/en/rds/developer-reference/api-rds-2014-08-15-restartdbinstance).

## FAQ

-   If an RDS instance runs RDS High-availability Edition and the primary RDS instance is restarted, does a primary/secondary switchover occur?
    
    If you restart your RDS instance, the primary and secondary RDS instances are restarted. No primary/secondary switchover occurs, and the zones of the primary and secondary RDS instances remain unchanged.
    
-   Do the endpoints and IP addresses of the primary and secondary RDS instances change after an RDS instance is restarted?
    
    No, the endpoints and IP addresses of the primary and secondary RDS instances remain unchanged. Instance restart operations do not involve the changes of network settings.
    
-   What phases are required for an instance restart? What factors are involved in an instance restart? How do I reduce the period of time that is required to restart an RDS instance?
    
    Two phases are required for an instance restart:
    
    -   The phase to stop the RDS instance: The duration varies based on factors such as the overall performance of the host, the overall performance of the instance, and the dirty pages in the memory.
        
    -   The phase to start the RDS instance. The duration varies based on various factors, such as the performance of the RDS instance, the performance of the host on which the RDS instance is deployed, and the size of the log files that are used for data restoration. The size of the log files varies based on the dirty pages in memory when you stop the RDS instance and the long-running transactions on the RDS instance. The size of the log files also varies based on the value of the `recovery interval` parameter. We recommend that you use the default value of the recovery interval parameter. If you want to change the value of this parameter, see the description in [Configure the recovery interval (min) (server configuration option)](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-recovery-interval-server-configuration-option?view=sql-server-ver16).
        
    
    You can reduce the number of long-running transactions or change the value of the `recovery interval` parameter to reduce the duration that is required to restart the RDS instance.
