ApsaraDB RDS provides various disaster recovery solutions to protect your data.

## Data backup and restoration

-   By default, ApsaraDB RDS provides the data backup feature. Automatic backup and manual backup are supported. You can specify a cycle for automatic backups and initiate backup tasks at any point in time based on your business requirements. For more information, see [Backup and restoration](/help/en/rds/support/backup-and-restoration-4).
    
-   By default, ApsaraDB RDS allows you to restore data from backup files or restore data to a specific point in time. In most cases, you can restore data to any point in time within seven days to a temporary or cloned RDS instance. After the data is verified, you can migrate the data back to the primary RDS instance to complete data backtracking. For more information, see [Backup and restoration](/help/en/rds/support/backup-and-restoration-4).
    
-   ApsaraDB RDS also provides the cross-region backup and restoration feature. For more information, see [Use the cross-region backup feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#concept-405443) and [Restore data across regions](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-across-regions#concept-405831).
    

## Zone-disaster recovery

**Note**

If you use an RDS edition in which primary and secondary RDS instances are provisioned, such as RDS High-availability Edition and RDS Cluster Edition, we recommend that you use the multi-zone deployment method to implement cross-zone disaster recovery.

**RDS edition**

**Description**

RDS Basic Edition

-   Data backups are stored in Object Storage Service (OSS) buckets or distributed cloud disks. Multi-replica redundancy is used to ensure data reliability. This backup mechanism is used for all RDS instances.
    
-   Your database system consists of only one primary RDS instance. No secondary RDS instances are provided for hot standby. When a fault occurs on your RDS instance, a long period of time is required to recover the RDS instance from the fault. This edition is suitable for scenarios that do not require high availability.
    

RDS High-availability Edition

Your database system consists of a primary RDS instance and a secondary RDS instance. The RDS instances work in active-active mode to ensure high availability. This RDS edition is suitable for more than 80% of business scenarios. When the primary RDS instance fails, the workloads are switched over to the secondary RDS instance within seconds. The switchover process is transparent to the application. When the secondary RDS instance fails, ApsaraDB RDS automatically creates another secondary RDS instance to ensure the high availability of your database system.

-   Single-zone RDS instances: The primary RDS instance and the secondary RDS instance reside in the same zone. The primary RDS instance and the secondary RDS instance are deployed on different physical servers. Redundant racks, heating, ventilation and air conditioning (HVAC) systems, circuits, and networks are available in the zone to ensure the high availability of your database system.
    
-   Multi-zone RDS instances: These instances are also called local dual-data center or local disaster recovery instances. The primary RDS instance and the secondary RDS instance reside in different zones of the same region. Cross-zone disaster recovery is supported without additional fees.
    

**Note**

-   Single-zone RDS instances and multi-zone RDS instances can be mutually converted. For more information, see the following topics:
    
    -   [Migrate an ApsaraDB RDS for MySQL instance across zones](/help/en/rds/apsaradb-rds-for-mysql/migrate-an-apsaradb-rds-for-mysql-instance-across-zones-in-the-same-region#concept-zwp-gdj-wdb)
        
    -   [Migrate an ApsaraDB RDS for PostgreSQL instance across zones](/help/en/rds/apsaradb-rds-for-postgresql/migrate-an-apsaradb-rds-for-postgresql-instance-across-zones-in-the-same-region#concept-zwp-gdj-wdb)
        
    -   [Migrate an ApsaraDB RDS for SQL Server instance across zones](/help/en/rds/apsaradb-rds-for-sql-server/migrate-an-apsaradb-rds-for-sql-server-instance-across-zones#concept-zwp-gdj-wdb)
        
-   If the secondary RDS instance becomes faulty, the primary RDS instance performs backups in real time. When a backup is about to be completed, a FLUSH TABLE WITH READ LOCK (FTWRL) statement is executed. This triggers a global lock for up to 5 seconds. Before the global lock is released, you can only read data from the primary RDS instance.
    

RDS Cluster Edition

## ApsaraDB RDS for MySQL

RDS Cluster Edition is supported by MySQL 5.7 and MySQL 8.0. RDS Cluster Edition provides the following benefits. For more information, see [RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-cluster-edition#undefined). An RDS instance that runs RDS Cluster Edition is referred to as an RDS cluster.

-   Your RDS cluster consists of one primary node and multiple secondary nodes. The nodes work in high availability (HA) mode.
    
-   The secondary nodes can process read requests. This way, the read capability of your database system is linearly increased, and you do not need to purchase read-only RDS clusters.
    
-   The multi-zone disaster recovery feature allows you to deploy the RDS cluster across zones.
    
-   Automatic failover of nodes in an RDS cluster is supported.
    
-   The secondary nodes can be accessed by using the read-only endpoint for the RDS cluster. During a failover, ApsaraDB RDS automatically performs the following steps to implement high availability:
    
    -   Promotes a secondary node to the primary node, removes the secondary node from the read-only endpoint of the RDS cluster, and then deletes the read connections to the secondary node. In this case, transient connections occur on the read-only endpoint of the RDS cluster.
        
    -   Removes the faulty primary node from the read/write endpoint of the RDS cluster. Then, adds the promoted secondary node to the read/write endpoint. This way, you can connect to the RDS cluster by using the read/write endpoint.
        
    -   Adds the original primary node to the read-only endpoint of the RDS cluster after the original primary node is restored. The original primary node inherits the read weight that is specified for the promoted secondary node.
        
    
    If the RDS cluster has only one secondary node, the read-only endpoint of the RDS cluster is inaccessible before the faulty primary node is restored. If the RDS cluster has multiple secondary nodes, a transient connection occurs on the read-only endpoint of the cluster during the failover. During the transient connection, other secondary nodes process read requests.
    
    Therefore, we recommend that you configure multiple secondary nodes for your RDS cluster to ensure sustainable access to the read-only endpoint of the RDS cluster during failovers.
    

## ApsaraDB RDS for SQL Server

Your RDS cluster consists of a primary RDS instance and a secondary RDS instance. You can create up to seven read-only RDS instances for the primary RDS instance to scale out the read capability. The data of the secondary RDS instance and the data of all read-only RDS instances are synchronized from the primary RDS instance. RDS Cluster Edition provides the same high availability as RDS High-availability Edition. In RDS Cluster Edition, a read-only node can be deployed in a zone other than the zones of the primary and secondary nodes. For more information, see [Overview of read-only ApsaraDB RDS for SQL Server instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-sql-server-instances).

## Get started with ApsaraDB RDS

-   [Getting Started](/help/en/rds/getting-started#concept-rrc-tdh-wdb)
    
-   [RDS Learning Path](https://www.alibabacloud.com/getting-started/learningpath/rds)
    

## References

-   [Purchase guide](/help/en/rds/product-overview/purchase-guide#concept-2491212)
    
-   [Build a high availability architecture](/help/en/rds/apsaradb-rds-for-mysql/build-a-high-availability-architecture#task-2309997)
