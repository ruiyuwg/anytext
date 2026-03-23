When the number of connections to an ApsaraDB RDS for MariaDB instance reaches the upper limit or performance issues occur on the RDS instance, you can restart the RDS instance.

## Prerequisites

The RDS instance is in the **Running** state.

## Impacts

-   If you restart an RDS instance, a transient connection that lasts approximately 30 seconds occurs. Make sure that your application is configured to automatically reconnect to the RDS instance. To ensure business continuity, we recommend that you stop writing data to the RDS instance and take appropriate measures before you restart the RDS instance.
    
    **Warning**
    
    If your RDS instance runs RDS Basic Edition, no secondary RDS instance is provisioned as a hot standby. In this case, if your RDS instance exits unexpectedly, your database service becomes unavailable. If you restart the RDS instance, change the specifications of the RDS instance, or upgrade the database engine version of the RDS instance, your database service also becomes unavailable. The unavailability may last for a long period of time. If you require high service availability, we recommend that you use a more advanced edition, such as RDS High-availability Edition, instead of RDS Basic Edition. If you use RDS Basic Edition, you can upgrade your RDS instance from RDS Basic Edition to RDS High-availability Edition. The upgrade is supported only when your RDS instance meets the specified requirements. For more information, see [Upgrade the edition of an RDS instance from RDS Basic Edition to RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-basic-edition#section-5sr-8hd-e8j).
    
-   If your RDS instance has a read-only RDS instance and you restart the RDS instance, the read-only RDS instance is not restarted, and data replication resumes after the RDS instance is restarted.
    

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the upper-right corner of the page that appears, click **Restart Instance**.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0368248361/p10248.png)
    
3.  In the message that appears, click **OK**.
    
    **Warning**
    
    After you click **Restart Instance**, the status of the RDS instance changes to **Restarting**, and your workloads may be interrupted. To ensure business continuity, we recommend that you take appropriate measures before your restart the RDS instance.
    

## FAQ

-   I need to restart my RDS instance when the number of connections to the RDS instance reaches the upper limit or performance issues occur on the RDS instance. Do I need to restart my RDS instance in other situations?
    
    If you cannot delete the temporary file due to system downtime, you can restart the RDS instance. If other issues occur on your RDS instance, you can also restart the RDS instance to resolve the issues.
    
-   If an RDS instance runs RDS High-availability Edition and the primary RDS instance is restarted, does a primary/secondary switchover occur?
    
    A primary/secondary switchover may occur. After you restart the primary RDS instance, the zones of the primary and secondary RDS instances may be switched over.
    
-   Do the endpoints and virtual IP address of my RDS instance change after the RDS instance is restarted?
    
    No, the endpoints and virtual IP address of your RDS instance remain unchanged.
    
-   What factors affect the period of time that is required to restart an RDS instance? How do I reduce the period of time?
    
    The period of time that is required to restart an RDS instance varies based on various factors, such as the number of tables, the number of databases, the number of active connections, and service traffic of the RDS instance. To reduce the period of time that is required to restart an RDS instance, we recommend that you reduce the number of active connections and the volume of service traffic before the restart and create only necessary tables and databases. After the RDS instance is restarted, reconnect your application to the RDS instance.
    

## Related operations

**Operation**

**Description**

[Restart an instance](/help/en/rds/api-restart-an-apsaradb-for-rds-instance#doc-api-Rds-RestartDBInstance)

Restarts an instance.
