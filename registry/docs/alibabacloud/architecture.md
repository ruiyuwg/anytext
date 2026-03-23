This topic describes the architectures and components of ApsaraDB for MongoDB.

## Service architecture

![MongoDB系统架构](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5264809261/p39713.png)

## Components

-   Task control system
    
    ApsaraDB for MongoDB instances support various tasks, such as instance creation, configuration change, and instance backup. The system manages and tracks tasks in a flexible manner, and handles errors based on the operation instructions that you send.
    
-   HA control system
    
    The system acts as a high-availability detection module to detect the running status of ApsaraDB for MongoDB instances. If the system determines that the primary node of an ApsaraDB for MongoDB instance is unavailable, the system fails over to a secondary node to maintain the availability of the instance. You can also manually perform a switchover between the primary and secondary nodes. For more information, see [Switch node roles](/help/en/mongodb/user-guide/switch-node-roles#concept-943865).
    
-   Log collection system
    
    The system collects the running logs of ApsaraDB for MongoDB, such as slow query logs and audit logs. For more information, see [Log management](/help/en/mongodb/user-guide/log-management/#concept-1937968) and [Enable the audit log feature](/help/en/mongodb/user-guide/enable-the-audit-log-feature#task-2488775).
    
-   Monitoring system
    
    The system monitors the performance of ApsaraDB for MongoDB instances and collects information such as the basic metrics, disk capacity, access requests, and IOPS of the instances. For more information, see [Basic monitoring](/help/en/mongodb/user-guide/basic-monitoring#task-2080535).
    
-   Backup system
    
    The system backs up ApsaraDB for MongoDB instances and stores generated backup files in Object Storage Service (OSS). The system allows you to customize a backup policy to manually or automatically back up the instances. The system retains the backup files for up to seven days. For more information, see [Configure automatic backup for an instance](/help/en/mongodb/user-guide/configure-automatic-backup-for-an-instance#concept-gs1-qrp-dgb) and [Configure manual backup for an instance](/help/en/mongodb/user-guide/back-up-mongodb-data-manually#concept-e1s-szs-qgb).
    
-   Online migration system
    
    If the physical server on which an instance resides fails, the system creates an instance from the backup files in the backup system to prevent impacts on your business. For more information, see [Data migration and synchronization](/help/en/mongodb/user-guide/data-migration-and-synchronization/#concept-ujv-lml-cgb).
    

## **Architectures of ApsaraDB for MongoDB instances**

-   [Standalone instances](/help/en/mongodb/product-overview/standalone-instances)
    
-   [Replica set instances](/help/en/mongodb/product-overview/replica-set-instances)
    
-   [Sharded cluster instances](/help/en/mongodb/product-overview/sharded-cluster-instances)
