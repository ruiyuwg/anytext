ApsaraDB RDS provides a complete suite of high availability features such as the dedicated instance family, high availability-centered RDS editions, multi-zone deployment, and cross-region backup and restoration.

## RDS editions and instance families

When you [create an RDS instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb), note the following high availability-related options:

-   **Edition**: ApsaraDB RDS supports multiple editions. We recommend that you select **High-availability Edition** or **Cluster Edition**.
    
    -   **High-availability Edition**: In RDS High-availability Edition, the database system consists of a primary RDS instance and a secondary RDS instance.
        
    -   **Cluster Edition**
        
        -   ApsaraDB RDS for SQL Server: In RDS Cluster Edition, the database system consists of a primary RDS instance, a secondary RDS instance, and up to seven read-only RDS instances. The read-only RDS instances help scale out the read capability of the database system.
            
        -   ApsaraDB RDS for MySQL: In RDS Cluster Edition, the database system uses a high availability (HA) architecture that contains one primary node and multiple secondary nodes and supports compute-storage separation. RDS Cluster Edition for ApsaraDB RDS for MySQL supports the following features: automated failover, primary/secondary switchover, readable secondary nodes, node addition and deletion, multi-zone disaster recovery, node-level monitoring, and cluster topology management. RDS Cluster Edition for ApsaraDB RDS for MySQL also allows you to enable the MySQL group replication (MGR) mode to ensure a Recovery Point Objective (RPO) of 0. ApsaraDB RDS for MySQL instances on RDS Cluster Edition are more cost-effective, flexible, and reliable than self-managed databases.
            
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2243128961/p725997.png)
-   **Zone**: ApsaraDB RDS supports both single-zone deployment and multi-zone deployment. We recommend that you use multi-zone deployment. If your database spans multiple zones, it can provide zone-level disaster recovery.![可用区](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6875364361/p62048.png)
    
-   **Instance Type**: We recommend that you select **Dedicated** or **Dedicated Host**.
    
    -   **Dedicated**: A dedicated instance exclusively occupies the CPU and memory resources allocated to it. Its performance and stability are independent of the other instances deployed on the same physical host.
        
    -   **Dedicated Host**: This is the top configuration of the **Dedicated** instance family. A dedicated host instance occupies all resources on the physical host where it is housed.
        
    
    ![规格](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6875364361/p62056.png)

## Automatic backup

We recommend that you configure an [automatic backup](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#concept-l1m-xgn-ydb) policy for your RDS instance. If your RDS instance becomes unavailable due to misoperations or other exceptions, you can use the backups to restore the RDS instance to its latest state.

## Cross-region disaster recovery

ApsaraDB RDS for MySQL provides the cross-region disaster recovery feature to protect your data and increase the availability of your RDS instances.

-   [Create a disaster recovery ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-a-disaster-recovery-apsaradb-rds-for-mysql-instance#concept-bpb-gw5-vdb): You can use [Data Transmission Service (DTS)](/help/en/dts/product-overview/what-is-data-transmission-service#concept-1917748) to synchronize data between the primary RDS instance and its disaster recovery RDS instance in real time. Both the primary and disaster recovery RDS instances are deployed based on the primary/secondary high availability architecture. If your application cannot connect to either the primary or secondary RDS instance due to a natural disaster, you can switch services over to the disaster recovery RDS instance and then update the endpoints on your application. This minimizes the downtime of your database system.
    
-   [Use the cross-region backup feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#concept-405443): Your database system automatically replicates its backup files to an Object Storage Service (OSS) bucket in a different region.
    

## Monitoring and alerting

To prevent unavailability caused by CPU, disk, memory, connection, or other exceptions, we recommend that you monitor and configure thresholds for the performance metrics of your RDS instances. If the value of a metric reaches the preset threshold, the system generates alerts. For more information, see [Configure alert rules for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-an-alert-rule-for-an-apsaradb-rds-for-mysql-instance#concept-ir2-twp-wdb).

![报警](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2646364361/p62119.png)

## Data restoration

If you have built a high availability architecture for your database system as instructed above, your service can run without downtime in normal scenarios and can even be restored within a short time in the event of exceptions.

-   If a single RDS instance of your database system is faulty, you can [switch workloads over between primary and secondary ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-mysql-instances#task-ftz-42j-wdb). This operation is unavailable in RDS Basic Edition.
    
-   In the multi-zone deployment solution, the primary RDS instance can be switched to another zone if the current zone is faulty. In the single-zone deployment solution, you must wait until the fault is rectified or switch services over to the disaster recovery RDS instance.
    
-   If the region of your database system is faulty, you can switch services over to the disaster recovery RDS instance. You also have the option to restore the data to a new RDS instance by using cross-region backup.
    

For more information about how to restore data, see the following topics:

-   [Restore the data of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#concept-vrh-qp4-ydb)
    
-   [Restore individual databases and tables of an RDS instance](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#concept-ocr-swk-ngb)
    
-   [Restore the data of an ApsaraDB RDS for PostgreSQL instance across regions](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-across-regions#concept-405831)
