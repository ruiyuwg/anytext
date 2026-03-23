PolarDB for MySQL allows you to upgrade PolarDB for MySQL clusters between different major **versions** and **editions**. During the upgrade, the system automatically creates the destination PolarDB cluster and synchronizes data from the source cluster. The destination PolarDB for MySQL cluster retains the accounts, databases, IP whitelists, and required parameters of the source PolarDB for MySQL cluster.

-   **Version upgrades**
    
    -   Upgrade a PolarDB for MySQL 5.6 cluster to a PolarDB for MySQL 5.7, 8.0.1, or 8.0.2 cluster.
        
    -   Upgrade a PolarDB for MySQL 5.7 cluster to a PolarDB for MySQL 8.0.1 or 8.0.2 cluster.
        
    -   Upgrade a PolarDB for MySQL 8.0.1 cluster to a PolarDB for MySQL 8.0.2 cluster.
        
-   **Edition upgrades**
    
    Enterprise Edition cluster: upgrade from **Cluster Edition** to [Multi-master Cluster (Limitless)](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) Edition.
    
-   **Billing method changes**
    
    -   Change a subscription or pay-as-you-go cluster with defined specifications to a [serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless/) cluster.
        
    -   Change a [serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless/) cluster to a subscription or pay-as-you-go cluster with defined specifications.
        

For more information, see [Upgrade procedure](/help/en/polardb/polardb-for-mysql/user-guide/procedure).

## **Benefits**

-   The endpoints of the source cluster are retained. You can switch to the new version without the need to change the connection settings of your applications.
    
-   Incremental data migration is supported. This allows you to migrate data with a service downtime of less than 10 minutes.
    
-   Hot upgrades are supported. Only one transient connection occurs during the upgrade.
    
-   Rollback is supported. If the upgrade fails, the cluster can be restored within 10 minutes.
    

## **Limits**

**Category**

**Description**

Limits on source database

-   The server to which the source database belongs must have sufficient egress bandwidth. Otherwise, the upgrade speed is affected.
    
-   The tables to be migrated must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
-   To perform incremental migration, you must enable the binary logging feature. You must also set the `loose_polar_log_bin` parameter to **ON** in the PolarDB console. Otherwise, an error message is returned during the precheck and the upgrade task cannot be started.
    
    **Note**
    
    For both a full data and incremental data migration task, the binary logs of the source database must be stored for at least seven days. After a full data migration is completed, you can set the retention period to more than 24 hours. Otherwise, Data Transmission Service (DTS) may fail to obtain the binary logs and the task may fail. In exceptional circumstances, data inconsistency or loss may occur. Make sure that you specify the retention period of binary logs based on the preceding requirements. Otherwise, the service reliability and performance stated in the Service Level Agreement (SLA) of DTS cannot be achieved.
    
-   Limits on operations to perform on the source database:
    
    During schema migration and full data migration, do not perform DDL operations to change the schemas of databases or tables. Otherwise, the data migration task fails.
    

Limits on SQL statements

**Note**

The keywords of PolarDB for MySQL are 100% compatible with those of [MySQL](https://dev.mysql.com/doc/mysqld-version-reference/en/keywords-8-0.html?spm=gcc-ticket-workbench._workbench_ticket_00069GNYXY.0.0.65ceiG3wiG3wrN).

-   The following DML operations are supported:
    
    -   **INSERT**
        
    -   **UPDATE**
        
    -   **DELETE**
        
-   The following DDL operations are supported:
    
    -   **ALTER TABLE and ALTER VIEW**
        
    -   **CREATE FUNCTION, CREATE INDEX, CREATE PROCEDURE, CREATE TABLE, and CREATE VIEW**
        
    -   **DROP INDEX and DROP TABLE**
        
    -   **RENAME TABLE**
        
    -   **TRUNCATE TABLE**
        

Other limits

-   New databases cannot be migrated. To migrate a new database, go to the [DTS console](https://dts.console.alibabacloud.com/sync), modify the synchronization objects and add the new database to the forward and reverse synchronization tasks.
    
-   Before you migrate data, evaluate the impact of data migration on the performance of the source and destination databases. We recommend that you migrate data during off-peak hours. During full data migration, DTS uses the read and write resources of the source and destination databases. This may increase the loads on the database servers.
    
-   During full data migration, concurrent **INSERT** operations cause fragmentation in the tables of the destination database. After a full data migration is completed, the size of the used tablespace of the destination database is larger than that of the source database.
    
-   Make sure that the precision settings for columns of the FLOAT or DOUBLE data type meet your business requirements. DTS uses the `ROUND(COLUMN,PRECISION)` function to retrieve values from columns of the FLOAT or DOUBLE data type. If you do not specify a precision value, DTS sets the precision for the FLOAT data type to 38 digits and the precision for the DOUBLE data type to 308 digits.
    
-   DTS attempts to resume data migration tasks that failed within the last seven days. Before you switch workloads to the destination cluster, stop or release the data migration task. You can also run the `revoke` command to revoke the write permissions from the accounts that are used by DTS to access the destination cluster. Otherwise, the data in the source database overwrites the data in the destination cluster after the task is resumed.
    

Other issues

DTS regularly executes the `CREATE DATABASE IF NOT EXISTS 'test'` statement in the source database to move forward the binary log file position.

## **Usage notes**

-   If SSL is enabled for the endpoint of the source cluster and you select **Switch with Endpoints**, make sure that SSL is enabled for the endpoint of the destination cluster.
    
-   You cannot upgrade the version of a cluster that is added to a global database network (GDN).
    
-   SSL is not supported for the endpoints of PolarDB for MySQL clusters of Multi-master Cluster (Database/Table) Edition. Therefore, if you perform an edition upgrade for a source cluster with SSL enabled on its endpoint to a cluster of Multi-master Cluster (Database/Table) Edition, switch with endpoints is not supported.
    
-   During the upgrade, the initial full data synchronization uses the read and write resources of the source and destination databases. This may increase the load on the databases.
    
-   During the upgrade, the initial full data synchronization performs concurrent INSERT operations and causes fragmentation in the tables of the destination database. After full data synchronization is complete, the tablespace of the destination database is larger than that of the source database.
    
-   Do not manually release DTS tasks during the upgrade.
    
-   Full data synchronization requires some time to complete. The time consumption varies based on the amount of data. During full data synchronization, the destination is in the **Creating** state.
    
-   If a PolarDB cluster to be upgraded is the source or destination of an existing DTS task, you can [perform a DTS task switchover](/help/en/polardb/polardb-for-mysql/user-guide/procedure#5b80633136g7o) during the upgrade process to change the source or destination cluster of the DTS synchronization or migration task. This ensures smooth business transition.
    
-   After the upgrade is complete, the performance of some SQL statements may be low. This is because the query plans change after the upgrade. For example, the query plans are not using appropriate indexes. Such changes are mainly caused by differences in the following aspects:
    
    -   Database engine version: The algorithm used by the optimizer of the new version may be different from that of the old version. The behavior of the optimizer may change.
        
    -   Storage structure and statistics: Even with the same data, the new database and old database use different InnoDB B-tree storage structures and table statistics. The optimizer may choose different query plans.
        

## **Billing rules**

-   You are charged for the DTS data synchronization task and the destination PolarDB cluster.
    
    -   During the upgrade, a DTS task is automatically created to synchronize data from the source cluster to the destination cluster. For more information about the billing rules of DTS tasks, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).
        
    -   The destination PolarDB cluster:
        
        -   If the destination PolarDB cluster is a serverless cluster or a subscription cluster, the destination cluster starts to be billed when it enters the **Running** state.
            
        -   For a subscription cluster, you need to complete the payment when you create the cluster.
            
-   If you no longer need a **subscription** cluster for which you have upgraded the major version, you can apply for unsubscription refunds to reduce resources and costs. For more information, see [Unsubscription refunds after upgrade](/help/en/polardb/polardb-for-mysql/user-guide/unsubscription-refunds-after-upgrade).
    

## **Switch with endpoints**

The switch with endpoints feature is supported when you upgrade a PolarDB for MySQL cluster. The system automatically switches the endpoints of the source and destination clusters. The following figures show the endpoint mapping.

-   Endpoint mapping for version upgrades
    
    ![从PolarDB升级](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3458084861/p495276.png)
    
-   Endpoint mapping for edition upgrades from Cluster Edition to Multi-master Cluster (Database/Table) Edition
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6468084861/p580325.png)
    
    Edition upgrade allows you to specify the endpoints of the source and destination clusters to be switched. For example, you can switch between the primary endpoint of the source cluster and the cluster endpoint of the destination cluster, between the primary endpoint of the source cluster and the custom endpoint of the destination cluster, and between the cluster endpoint of the source cluster and the custom endpoint of the destination cluster. The following figure shows the internal mapping of endpoints.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6468084861/p580279.png)
    

When you use the switch with endpoints feature, take note of the following points:

-   Only the endpoints of the source and destination clusters are switched. The other configurations such as the vSwitches and virtual IP addresses remain unchanged.
    
-   Endpoints can be switched only if both the source and destination clusters have endpoints. By default, only the private endpoints can be switched.
    
    **Note**
    
    If an endpoint of the source cluster has a public endpoint, you must apply for a public endpoint for the corresponding endpoint on the destination cluster. This ensures that the public endpints are successfully switched during the endpoint switchover process.
    
-   If you select switch with endpoints for a version upgrade, the primary endpoints of the source and destination clusters are switched. You can choose whether to switch multiple groups of endpoints.
    
-   If you select switch with endpoints for an edition upgrade, you can specify the endpoints of the source and destination clusters to be switched. You can choose whether to switch multiple groups of endpoints.
    
-   If you want to switch to a different endpoint, you must create the endpoint before the switchover. For more information about how to create endpoints for a PolarDB cluster, see [Manage the endpoints of a cluster](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint).
    
-   The ports are not switched when the endpoints are switched. Make sure that the port of the source cluster is the same as that of the destination cluster. By default, port 3306 is used for PolarDB clusters. For more information about how to modify ports, see [Change the endpoint and port number](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint#section-ljw-83w-f13).
    
-   After the endpoints are switched, issues may occur due to the expiration of the DNS cache data. The databases in the PolarDB cluster may fail to be connected or support only read operations. To resolve this issue, we recommend that you refresh the DNS cache.
    

## **Upgrade evaluation**

The upgrade evaluation feature is provided by PolarDB to ensure the successful execution of upgrade tasks and high upgrade efficiency. This feature allows you to precheck the prerequisites such as the cluster status, upgrade task dependencies, and attributes of the source cluster before you upgrade a PolarDB for MySQL cluster. This way, you can identify the factors that may affect the upgrade progress and resolve the issue in advance to reduce the processing and resource costs during the upgrade.

For more information, see [Upgrade evaluation](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-assessment).

## **Expert service**

If you have any questions about major version upgrades, you can join the DingTalk group (ID: 43055001012). To join the group number, you can scan the following QR code or search for the group ID.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5524830171/p759620.png)
