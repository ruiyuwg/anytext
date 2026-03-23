This topic describes how to change the configurations of an ApsaraDB RDS for MySQL instance, including changing the instance edition, upgrading or downgrading the instance type, and scaling the storage space.

For more information about all the configuration changes that are supported for ApsaraDB RDS for MySQL instances, see [Instance configuration changes](/help/en/rds/apsaradb-rds-for-mysql/configuration-items-for-an-apsaradb-rds-for-mysql-instance#concept-2020970).

To change the configurations of instances that run other database engines, see the following topics:

-   [Change the configurations of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/change-the-specifications-of-an-apsaradb-rds-for-sql-server-instance#concept-efl-pln-wdb)
    
-   [Change the configurations of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance#concept-efl-pln-wdb)
    
-   [Change the configurations of an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/change-the-specifications-of-an-apsaradb-rds-for-mariadb-instance#concept-efl-pln-wdb)
    

## Prerequisites

-   The instance uses the subscription or pay-as-you-go billing method.
    
    **Note**
    
    If the instance uses the serverless billing method, see [Configure a serverless ApsaraDB RDS for MySQL instance](/help/en/doc-detail/421557.html#task-2202683).
    
-   Your Alibaba Cloud account has no overdue renewal payments.
    
-   The instance is in the **Running** state. If your instance is locked, [unlock the instance](/help/en/rds/apsaradb-rds-for-mysql/what-do-i-do-if-my-apsaradb-rds-instance-is-in-the-locking-state) before you change its configurations.
    

## Limits

-   Order limit: After you submit a configuration change order, you cannot cancel it. Carefully evaluate your business requirements before you change the configurations.
    
-   **Limits on read-only instances**:
    
    -   When you change the configurations of a read-only instance, its primary instance must be in the Running state.
        
    -   The storage space of the read-only instance must be greater than or equal to the current storage space of its primary instance. We recommend that you first expand the storage space of all read-only instances and then expand the storage space of the primary instance.
        
-   **Limits on scaling in storage space**:
    
    -   Scale-in for instances that use local disks with enhanced performance
        
        -   The storage space after the scale-in must be at least 120% of the used storage space.
            
            _Example: An instance has 100 GB of storage space, of which 50 GB is used. After a scale-in, at least 60 GB (50 × 120%) of storage space must be retained._
            
    -   General scale-in limits
        
        -   For Basic Edition or High-availability Edition instances, you can scale in the storage space of instances that are of the same edition and architecture.
            
        -   The minimum storage space to which you can scale in is calculated using the following formula: `min{current usage × 1.3, current usage + 400 GB}`. The result must be greater than or equal to the minimum storage space that is supported by the current instance type.
            
        -   Step size: The storage space can be adjusted in increments of 5 GB.
            
        -   If binary logs are rapidly generated on the instance, you must retain a sufficient number of logs on the local disk before you can scale in the storage space of the instance. For more information about how to enable binary logging, see [Modify the backup policy for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#87397dc0ee6q5).
            
-   **Limits on product type changes**:
    
    -   Zone compatibility: The Yitian Edition supports [fewer zones](/help/en/rds/product-overview/product-types) than the Standard Edition. If you cannot change the product type because of this incompatibility, first [change the zone of the instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-an-apsaradb-rds-for-mysql-instance-across-zones-in-the-same-region), and then change the product type.
        
    -   Minor engine version constraints: The new minor engine version must be the same as or later than the current minor engine version. You cannot downgrade the minor engine version.
        
    -   Edition constraints: For Basic Edition instances, you can only change the product type from Yitian Edition to Standard Edition. For High-availability Edition and Cluster Edition instances, you can change the product type between Yitian Edition and Standard Edition.
        
-   Limits on [legacy instance types](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#section-exw-oe8-kzg): You cannot directly change the configurations of a legacy instance. You must first upgrade the instance to a current instance type. Then, you can change its configurations.
    
-   Other limits: You can change only the items listed in [Instance configuration changes](/help/en/rds/apsaradb-rds-for-mysql/configuration-items-for-an-apsaradb-rds-for-mysql-instance#concept-2020970).
    

## Impacts

[**Instance storage type**](/help/en/rds/product-overview/storage-types#concept-kpg-5wx-5db)

**Configuration change item**

**Impact**

Instances that use local disks with enhanced performance

Instance type, edition, or storage space

If you change the instance type or edition when no local resources are available, data is automatically migrated. After the migration is complete, a switchover is performed based on the switchover time that you specify. During the migration, incremental data synchronization is performed.

**Important**

-   The configuration change causes an instance switchover. The switchover typically takes about 30 seconds. The actual duration may be longer if the client is not properly configured or the driver version is earlier than the required version. Change the configurations during off-peak hours and make sure that your application is configured with an [automatic reconnection mechanism](#d142f7c27fxpj).
    
-   During the instance switchover, most operations related to databases, accounts, and networks cannot be performed. For more information, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    

Instances that use disks

Instance type or edition

The configuration change takes several minutes. The duration is not affected by the data volume.

**Important**

-   The configuration change causes an instance switchover. The switchover typically takes about 30 seconds. The actual duration may be longer if the client is not properly configured or the driver version is earlier than the required version. Change the configurations during off-peak hours and make sure that your application is configured with an [automatic reconnection mechanism](#d142f7c27fxpj).
    
-   During the instance switchover, most operations related to databases, accounts, and networks cannot be performed. For more information, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    

Storage space

-   When you scale out the storage space, a transient connection occurs if the instance uses standard SSDs. No transient connection occurs if the instance uses ESSDs or premium performance disks.
    
-   When you scale in the storage space, a transient connection occurs. For more information, see [Scale in the storage space of an instance that uses disks (Scale-in is not supported for instances that use standard SSDs)](/help/en/rds/support/reduce-the-storage-capacity-of-an-apsaradb-rds-for-mysql-instance-that-uses-essds).
    

**Note**

If a snapshot is being created for a disk, the task to expand the disk or change the performance level of the disk is performed after the snapshot is created.

**Note**

-   You do not need to manually restart the instance after a configuration change. The stored data is not lost.
    
-   The instance ID and endpoint do not change. However, if the instance is migrated across hosts, the IP address that corresponds to the endpoint changes. We recommend that you use the endpoint to connect to the database from your application.
    

## Billing rules

For more information, see [Billing rules for configuration changes](/help/en/rds/product-overview/specification-changes#concept-syv-qk2-vdb).

## Procedure

**Important**

After you submit a configuration change order, you cannot cancel it. Carefully evaluate your business requirements before you change the configurations.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Configuration Information** area, click **Change Specifications**.
    
3.  **(This step is required for subscription instances only.)** In the dialog box that appears, select a change method and click **Next**.
    
    The following table describes the methods.
    
    **Upgrade** or **Downgrade**: The new configuration takes effect immediately after the change. Both subscription instances and pay-as-you-go instances support immediate upgrades or downgrades.
    
    After you submit the configuration change task, the system synchronizes the disk data to a new instance. At the specified switchover time, the system points the original instance ID and endpoint to the new instance. The instance ID and endpoint do not change.
    
4.  Modify the instance configurations.
    
    **Note**
    
    -   All instance types support [changes to instance types](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#concept-2096487) and storage space. For a [**legacy instance type**](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#section-exw-oe8-kzg), you must first upgrade the instance to a current instance type before you can expand its storage space.
        
    -   You can scale in the storage space of High-availability Edition instances that use local disks with enhanced performance and Basic Edition or High-availability Edition instances that use disks (excluding standard SSDs). You cannot scale in the storage space of other instances.
        
    -   You can change an ApsaraDB RDS for MySQL 5.6 instance of RDS Enterprise Edition to High-availability Edition.
        
    -   You can upgrade an ApsaraDB RDS for MySQL 5.7 instance of Basic Edition to a High-availability Edition instance that uses local disks with enhanced performance.
        
    -   You can change an ApsaraDB RDS for MySQL 8.0 or 5.7 instance of High-availability Edition that uses ESSDs to a Cluster Edition instance.
        
    -   On the **Upgrade/Downgrade Instance** page, the instance type is set to **Current Type** by default. Verify that the parameters of the new instance type meet your requirements to prevent potential issues.
        
    
5.  You can select **Switch Time**.
    
    -   **Execute Immediately**: The switch occurs immediately after data migration.
        
    -   **Switch Within Maintenance Window**: The switch occurs within the [maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance#concept-xqk-jcj-wdb).
        
    
    **Important**
    
    -   If you select **Switch Within Maintenance Window**, the instance will remain in the **Upgrading or Downgrading** status until the switch is complete. During this period, you cannot perform instance-level operations, such as upgrades, downgrades, version upgrades, or cross-zone migrations.
        
    -   If you only increase the storage space or change the ESSD storage type, the change takes effect immediately and typically does not affect your services. You do not need to select **Switch Within Maintenance Window**.
        
    -   A Basic Edition instance has only one database node and does not have a secondary node for hot backup. Therefore, a service interruption occurs when you change the configurations of the node. Change the configurations during off-peak hours to prevent business interruptions.
        
    -   For instances that are not of Basic Edition, one or two instance switchovers may occur when the configuration change takes effect. This can cause a transient connection. We recommend that you change configurations during off-peak hours or ensure that your application is configured with an automatic reconnection mechanism. For more information about the impacts of an instance switchover, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
        
    
6.  On the **Change Specifications** page, confirm the changes to the instance, click **Confirm Order**, and complete the payment.
    
    **Warning**
    
    -   After you submit a configuration change order, you cannot cancel it. Carefully evaluate your business requirements before you change the configurations.
        
    -   To ensure that the configuration change completes successfully, do not perform DDL operations from the time you submit the order to the time the configuration change is complete.
        
    

## FAQ

### **Disk scale-out and scale-in**

-   Q: Why is my instance still locked after I expanded its disk?
    
    A: An instance that is locked because its disk is full is automatically unlocked after the disk scale-out task is complete. On the **Basic Information** page of the instance, you can click the ![button](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4733085371/p892071.png) button in the upper-right corner to open the **Task List** page and view the progress of the scale-out task.
    
-   Q: Why does a transient connection occur when I expand the storage space?
    
    A: Storage expansion requires an instance switchover. For more information about the impacts of the transient connection, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   Q: Is the free backup quota increased after I expand the disk?
    
    A: Yes, it is. For more information, see [Free backup quota](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance#e3bc355236uxl).
    

### **Storage type change**

-   Q: How do I change the storage type (local disk with enhanced performance, standard SSD, or ESSD)?
    
    A: See [Change the storage type of an instance that uses disks to local disks with enhanced performance](/help/en/rds/support/how-do-i-change-the-storage-type-from-standard-ssd-to-premium-local-ssd#concept-zz4-1ks-zgb).
    
-   Q: How do I enable automatic storage expansion for an instance that uses local disks with enhanced performance?
    
    A: You can [change the storage type from local disk with enhanced performance to disk](/help/en/rds/apsaradb-rds-for-mysql/change-the-storage-type-from-local-ssd-to-essd) and then enable automatic storage expansion. Alternatively, you can purchase a new instance that uses disks and [migrate data](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances#concept-fxm-bhp-ydb) to the new instance.
    
-   Q: The storage space of my ApsaraDB RDS for MySQL instance that uses local disks with enhanced performance has reached its upper limit. How do I increase the storage space?
    
    A: For more information about the storage space range of an ApsaraDB RDS for MySQL 8.0 or 5.7 instance of High-availability Edition that uses local disks with enhanced performance, see [ApsaraDB RDS for MySQL High-availability Edition (with local disks)](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#section-4sr-5xx-wtl). To increase the storage space, you can [change the storage type from local disk with enhanced performance to disk](/help/en/rds/apsaradb-rds-for-mysql/change-the-storage-type-from-local-ssd-to-essd) to obtain a larger storage capacity.
    

### **Storage space management**

-   Q: What do I do if the "Insufficient Inventory" message is displayed when I upgrade the storage space?
    
    A: We recommend that you [migrate the instance to another zone](/help/en/rds/apsaradb-rds-for-mysql/migrate-an-apsaradb-rds-for-mysql-instance-across-zones-in-the-same-region#concept-zwp-gdj-wdb) and then expand the storage space. After the migration, the endpoint remains unchanged, but the IP address changes. You must configure an automatic reconnection mechanism for your application.
    
-   Q: If I only expand the storage space, do I need to migrate data to a new instance?
    
    A: In most cases, when you expand the storage space of an instance that uses disks and is not of Basic Edition, no transient connection occurs. When you expand the storage space of an instance that uses local disks with enhanced performance, one of the following situations occurs:
    
    -   The host has sufficient storage: The storage space is directly expanded without affecting the instance.
        
    -   The host has insufficient storage: A new primary instance and a new secondary instance are automatically created, and data is synchronized to the new instances. A transient connection that lasts about 30 seconds occurs during the switchover.
        
    
    **Note**
    
    You cannot query the remaining storage space of the host where the instance is deployed.
    
-   Q: If I delete a database from an ApsaraDB RDS for MySQL instance, is the disk space released?
    
    A: Yes, the space is released if you execute the `DROP` statement. If you execute the `DELETE` statement, fragmentation occurs and the disk space is not released.
    

### **Impacts of configuration upgrades**

-   Q: If I upgrade the CPU, memory, and disk at the same time, how long will the service be unavailable?
    
    A: The service is unavailable for several minutes regardless of whether you upgrade a single item or multiple items. During the upgrade, an instance switchover or restart may occur, and most operations related to databases, accounts, and networks cannot be performed. We recommend that you perform configuration changes within the maintenance window. For more information about the business impacts of each configuration change, see [Impacts of configuration changes](#section-4tv-40z-j8m).
    
-   Q: What factors affect the duration of a configuration change?
    
    A: See [What factors affect the duration of a configuration change for an ApsaraDB RDS for MySQL instance?](/help/en/rds/support/which-factors-affect-the-time-that-is-required-to-change-the-specifications-of-my-apsaradb-rds-for-mysql-instance#concept-2068805).
    
-   Q: Does a configuration change affect online services?
    
    A: See the [Impacts](#section-4tv-40z-j8m) section of this topic.
    

### **Read-only instances**

-   Q: If I upgrade the primary instance, are the read-only instances also upgraded?
    
    A: No, they are not. You must manually upgrade the configurations of the read-only instances.
    
-   Q: Does expanding the storage space of the primary instance affect the primary/secondary replication of read-only instances?
    
    A: No, it does not.
    

### **Connections and network**

-   Q: Does the endpoint change after a configuration change?
    
    A: No, it does not. The endpoint (for example, `rm-bpxxxxx.mysql.rds.aliyuncs.com`) remains unchanged, but the IP address may change. We recommend that you use the endpoint instead of the IP address in your application.
    
-   Q: How do I configure an automatic reconnection mechanism for my application?
    
    A: For Java applications, we recommend that you set the TTL to a value no more than 60 seconds. This ensures that when the IP address of the endpoint changes, the application can query DNS again to obtain and use the new IP address. For more information about how to set the TTL in Java, see the [official JDK documentation](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/InetAddress.html).
    

### **Instance types and billing**

-   Q: Can I change a regular instance to a serverless instance?
    
    A: You cannot change a subscription instance to a serverless instance. To use a serverless instance, you can create one. For more information, see [Create a serverless ApsaraDB RDS for MySQL instance](/help/en/doc-detail/412231.html#concept-wzp-ncf-vdb).
    
-   Q: How am I charged for automatic storage expansion?
    
    A: The automatic storage expansion feature is disabled by default and is free of charge. After you enable this feature, you are charged in the same way as for manual expansion. For more information, see [Change instance configurations](/help/en/rds/product-overview/specification-changes#concept-syv-qk2-vdb).
    
-   Q: I mistakenly downgraded the configurations and then immediately upgraded them to the original configurations. Why is the difference between the refund and the fee so large?
    
    A: The instance may have been purchased during a promotional event. If you upgrade the instance after the event, no discount is applied and the price increases.
    

### **Automatic expansion and scale-in**

-   Q: What are the rules for automatic storage expansion?
    
    A: For more information, see [Enable automatic storage expansion](/help/en/rds/apsaradb-rds-for-mysql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-mysql-instance#task-2559889).
    
-   Q: What are the impacts of scaling in the storage space of an instance that uses disks?
    
    A: A transient connection occurs when you scale in the storage space of an instance that uses disks. For more information, see [Scale in the storage space of an instance that uses disks](/help/en/rds/support/reduce-the-storage-capacity-of-an-apsaradb-rds-for-mysql-instance-that-uses-essds).
    
-   Q: Can I scale in an instance that uses local disks with enhanced performance?
    
    A: Yes, you can. When the instance is running, click **Change Configuration** and then select **Downgrade**.
    

### **Zone migration**

Q: How do I change a single-zone deployment to a multi-zone deployment?

A: For more information, see [Migrate an instance across zones](/help/en/rds/apsaradb-rds-for-mysql/migrate-an-apsaradb-rds-for-mysql-instance-across-zones-in-the-same-region#concept-zwp-gdj-wdb).

## Related APIs

**API**

**Description**

[ModifyDBInstanceSpec](/help/en/rds/api-change-instance-configuration#reference-ddv-lp2-12b)

Changes the configurations of an ApsaraDB RDS instance.
