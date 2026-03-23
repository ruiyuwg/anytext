When the number of connections to an ApsaraDB RDS for PostgreSQL instance reaches the upper limit or performance issues occur on the RDS instance, you can restart the RDS instance.

## Prerequisites

The RDS instance is in the **Running** state.

## Impacts

-   If you restart an RDS instance, a transient connection that lasts approximately 30 seconds occurs. Make sure that your application is configured to automatically reconnect to the RDS instance. To ensure business continuity, we recommend that you stop writing data to the RDS instance and take appropriate measures before you restart the RDS instance.
    
    **Note**
    
    RDS Basic Edition does not provide a secondary instance that serves as a hot standby. If your RDS instance that runs RDS Basic Edition unexpectedly fails or you restart the RDS instance, change the specifications, or upgrade the database engine of the RDS instance, your database service may become unavailable for an extended period of time. If you require high availability for your database system, we recommend that you select other RDS editions (such as RDS High-availability Edition) instead of RDS Basic Edition. Alternatively, you can upgrade your RDS instance from RDS Basic Edition to RDS High-availability Edition for instances of specific database engine versions. For more information, see [Upgrade the edition of an RDS instance from RDS Basic Edition to RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-basic-edition#section-5sr-8hd-e8j).
    
-   If your RDS instance uses Premium Local SSDs, the system updates your RDS instance to the latest minor engine version after your RDS instance is restarted. For more information, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance#concept-gnx-vgj-wdb11).
    
-   If read-only RDS instances are attached to the primary RDS instance, the read-only RDS instances are not restarted when you restart the primary RDS instance. The data replication between the primary and read-only RDS instances automatically resumes after the primary RDS instance is restarted.
    

## Procedure

**Warning**

After you click **Restart Instance**, the status of the RDS instance changes to **Restarting**, and your workloads may be interrupted. To ensure business continuity, we recommend that you take appropriate measures before your restart the RDS instance.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the upper-right corner of the page that appears, click **Restart Instance**.
    
3.  In the message that appears, click **OK**.
    

## Related operations

**Operation**

**Description**

[Restart an instance](/help/en/rds/api-restart-an-apsaradb-for-rds-instance#doc-api-Rds-RestartDBInstance)

Restarts an instance.

## FAQ

-   I need to manually restart my RDS instance when the number of connections to the RDS instance reaches the upper limit or performance issues occur on the RDS instance. Do I need to manually restart my RDS instance in other situations?
    
    If your RDS instance runs a PostgreSQL version earlier than PostgreSQL 14 and the temporary file cannot be deleted due to system downtime, you can manually restart the RDS instance. If other issues occur on your RDS instance, you can also restart the RDS instance to resolve the issues.
    
-   If I use RDS High-availability Edition and the primary RDS instance is restarted, is a primary/secondary switchover triggered?
    
    A primary/secondary switchover may be triggered. After you restart the primary RDS instance, the zones of the primary and secondary RDS instances may be switched over.
    
-   Do the endpoints and virtual IP address of my RDS instance change after the RDS instance is restarted?
    
    No, the endpoints and virtual IP address of your RDS instance remain unchanged.
    
-   What factors affect the period of time that is required to restart an RDS instance? How do I reduce the period of time?
    
    The period of time that is required to restart an RDS instance varies based on various factors, such as the number of tables, the number of databases, the number of active connections, and service traffic. To reduce the period of time that is required to restart an instance, we recommend that you create only necessary tables and databases and reduce the number of active connections and service traffic before the instance restart. After the RDS instance is restarted, reconnect your services to the RDS instance.
