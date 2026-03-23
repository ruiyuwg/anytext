This topic describes the procedure to clone an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster with one click, the two cloning methods and their comparisons, benefits, prerequisites, limits, and billing rules.

## Precautions

If you migrate data to a PolarDB cluster by using one-click cloning, the incremental data of the source ApsaraDB RDS for MySQL instance is not synchronized to the PolarDB cluster.

**Note**

For more information about how to synchronize incremental data from the source ApsaraDB RDS for MySQL instance to the PolarDB cluster when you create a PolarDB cluster, see [Create a PolarDB for MySQL cluster by upgrading an ApsaraDB RDS for MySQL instance](/help/en/polardb/polardb-for-mysql/user-guide/overview-43#task-1580301).

## Background information

PolarDB allows you to clone data from an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster. You can use the one-click cloning method to create a PolarDB cluster that has the same data as the source ApsaraDB RDS instance. The PolarDB cluster retains the accounts, databases, IP whitelists, and required parameters of the source ApsaraDB RDS instance.

Source ApsaraDB RDS for MySQL instances and destination PolarDB for MySQL clusters must meet the following requirements:

-   Source ApsaraDB RDS for MySQL instances that run **all MySQL versions** and that use **all storage types** can be cloned. You can clone instances that run MySQL 5.6, 5.7, and 8.0 and that use local SSDs and cloud disks to PolarDB for MySQL clusters with one click.
    
-   ApsaraDB RDS for MySQL instances can be cloned to PolarDB for MySQL clusters that run **the same or different MySQL versions** with one click. For example, you can clone an ApsaraDB RDS for MySQL 5.6 instance to a PolarDB for MySQL 5.6 cluster, or to a PolarDB for MySQL 8.0 cluster.
    

**Note**

The logical migration method is used in the following scenarios: cloning an ApsaraDB RDS for MySQL 8.0 instance, cloning an ApsaraDB RDS for MySQL instance with cloud disks to a PolarDB for MySQL cluster, and cloning an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster that runs a different MySQL version. This method is implemented based on the data synchronization capability of Data Transmission Service (DTS).

## Comparison between physical migration and logical migration

The one-click cloning feature supports physical migration (physical replication) and logical migration (data synchronization over DTS).

-   **Physical migration**: You can use the physical replication method to copy full data from the source ApsaraDB RDS for MySQL instance to the destination PolarDB for MySQL cluster.
    
-   **Logical migration**: You can create a data synchronization task on DTS to migrate the schemas and full data of the source ApsaraDB RDS for MySQL instance to the destination PolarDB for MySQL cluster.
    

The following table compares the physical migration and logical migration methods.

**Item**

**Physical migration**

**Logical migration**

Whether DTS is required

No.

Yes.

Whether incremental data migration or synchronization is supported

No.

No.

Whether operations on the source ApsaraDB RDS for MySQL instance are affected

No.

No.

Whether the source and destination can run different MySQL versions

Only source instances that run MySQL 5.6 and 5.7 and that use local disks can be cloned to destination clusters that run the same MySQL version.

The MySQL versions can be the same or different between the source and destination.

Whether new database accounts must be created in PolarDB clusters after the cloning

No. After the cloning, the destination PolarDB cluster contains the accounts of the source instance.

No. After the cloning, the destination PolarDB cluster contains the accounts of the source instance.

Whether new databases can be migrated

No.

No.

The following table describes the MySQL versions and storage types supported by the two migration methods.

**ApsaraDB RDS for MySQL version**

**Basic Edition**

**High-availability Edition**

**Cluster Edition**

**Enterprise Edition**

5.6

N/A

Local SSD

N/A

Local SSD

5.7

Cloud disk

Local SSD and cloud disk

Cloud disk

Local SSD

8.0

Cloud disk

Local SSD and cloud disk

Cloud disk

Local SSD

Physical migration is used only for cloning an ApsaraDB RDS for MySQL 5.6 or 5.7 instance of High-availability Edition that uses local SSDs to a PolarDB for MySQL cluster of the same MySQL version. Logical migration is used for cloning an ApsaraDB RDS for MySQL instance of other specifications to a PolarDB for MySQL cluster of the same or different versions.

## Benefits

-   The cloning feature is free of charge.
    
-   No data loss occurs during the cloning process.
    

## Prerequisites

-   When physical migration is used, the source ApsaraDB RDS instance must meet the following requirements. Logical migration is not subject to these requirements.
    
    -   For ApsaraDB RDS for MySQL 5.6, the minor version of the instance must be 20190815 or later.
        
    -   For ApsaraDB RDS for MySQL 5.7, the minor version of the instance must be 20200331 or later.
        
    
    **Note**
    
    You can execute the `SHOW VARIABLES LIKE '%rds_release_date%';` statement to view the minor version of the source ApsaraDB RDS instance. If the minor version is earlier than the required version, you can clone the minor version to the latest version. For more information, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).
    
-   The table storage engine for the source RDS instance must be InnoDB or X-Engine.
    
-   Transparent Data Encryption (TDE) and SSL are disabled on the source ApsaraDB RDS for MySQL instance. For more information, see [TDE](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#task-jrp-dw4-ydb) and [SSL](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb). If TDE or SSL is enabled, you can manually create a data synchronization task on DTS to migrate the source instance to the destination PolarDB cluster. For more information, see [Migrate data from an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-polardb-for-mysql-cluster-1#task-2067480).
    
-   If Database Proxy (Safe Mode) is enabled for the ApsaraDB RDS for MySQL instance, a privileged account is created or the network connection mode of the ApsaraDB RDS for MySQL instance is switched to high-performance mode. For more information, see [Create an account](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance#section-wkq-j35-q2b) and [\[Product changes/Feature changes\] The network connection mode of an ApsaraDB RDS instance is upgraded](/help/en/rds/apsaradb-rds-for-mysql/rds-network-link-upgrade#concept-vyz-wf2-wfb). ![查看数据库模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0720359951/p54653.png)
    

## Limits

-   You can upgrade an ApsaraDB RDS for MySQL instance only to a PolarDB for MySQL cluster of the same or a later MySQL version, but not to a cluster of an earlier MySQL version.
    
    For example, you cannot upgrade an ApsaraDB RDS for MySQL 5.7 instance to a PolarDB for MySQL 5.6 cluster, or upgrade an ApsaraDB RDS for MySQL 8.0.2 instance to a PolarDB for MySQL 8.0.1 cluster.
    
-   The physical migration method is subject to the following limits:
    
    -   Cross-region data migration is not supported.
        
    -   You cannot configure parameters of the source ApsaraDB RDS for MySQL instance during data migration.
        
-   The logical migration method is subject to the following limits:
    
    -   Cross-region data migration is not supported.
        
    -   You cannot configure the parameters of the source ApsaraDB RDS for PostgreSQL instance during data migration.
        
    -   The source ApsaraDB RDS for PostgreSQL instance is subject to the limits described in the following table.
        
        **Item**
        
        **Description**
        
        Limits on the source instance
        
        -   The tables to be synchronized must have PRIMARY KEY or UNIQUE constraints, and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
            
        -   If you select tables as the objects to be synchronized and you want to edit the tables, such as renaming tables or columns, you can synchronize up to 1,000 tables in a single data synchronization task. If you run a task to synchronize more than 1,000 tables, a request error occurs. In this case, we recommend that you configure multiple tasks to synchronize the tables in batches or configure a task to synchronize the entire database.
            
        -   Binary logging: The binary logging feature must be enabled. For more information about how to enable binary logging, see [Modify instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb). In addition, the binlog\_row\_image parameter must be set to full. Otherwise, error messages are returned during precheck, and the data synchronization task cannot be started.
            
        
    -   The following limits also apply:
        
        **Item**
        
        **Description**
        
        Other limits
        
        -   Before you synchronize data, evaluate the impact of data synchronization on the performance of the source and destination databases. We recommend that you synchronize data during off-peak hours. During initial full data synchronization, DTS uses the read and write resources of the source and destination databases. This may increase the loads on the database servers.
            
        -   During initial full data synchronization, concurrent INSERT operations cause fragmentation in the tables of the destination database. Therefore, after initial full data synchronization is complete, the size of the used tablespace of the destination database is larger than that of the source database.
            
        -   If you select one or more tables instead of an entire database as the objects to synchronize, do not use gh-ost or pt-online-schema-change to perform DDL operations on the tables during data synchronization. Otherwise, data may fail to be synchronized.
            
            If you use only DTS to write data to the destination database, you can use Data Management (DMS) to perform online DDL operations on source tables during data synchronization. For more information, see [Change schemas without locking tables](/help/en/dms/perform-lock-free-ddl-operations).
            
        -   Data inconsistency between the source and destination databases occurs if data from other sources is written to the destination database during the data synchronization. For example, if you use DMS to execute online DDL statements while data from other sources is written to the destination database, data loss may occur in the destination database.
            
        -   By default, DTS disables FOREIGN KEY constraints for the destination database in a data synchronization task. Therefore, specific operations such as the cascade and delete operations of the source database are not synchronized to the destination database.
            
        

## Billing rules

-   The following billing rules are applicable to the physical migration method:
    
    You are not charged for data migration from the source ApsaraDB RDS for MySQL instance to the PolarDB cluster. You are charged only for purchasing the PolarDB cluster. For more information, see [Billable items overview](/help/en/polardb/polardb-for-mysql/enterprise-billing-item-overview#concept-zbj-4pg-tdb).
    
-   The following billing rules are applicable to the logical migration method:
    
    You are charged for both purchasing PolarDB clusters and creating data synchronization tasks on DTS. However, the upgrade feature is in the free-trial phase. No fees are charged for a synchronization task within 30 days after it is created. The free trial is not available for virtual network operator (VNO) accounts and RAM users. The following table describes the billing rules for the logical migration method.
    
    **Migration object**
    
    **Billing rules**
    
    Schema synchronization and full data synchronization
    
    No fees are generated for a synchronization task within 30 days after the task is created.
    
    After more than 30 days, the synchronization task will be canceled.
    
    **Note**
    
    You can go to the [Data Synchronization page](https://dts.console.alibabacloud.com/sync/cn-hangzhou?orderColumn=createTime&orderDirection=DESC&status=&type=&params=&pageNumber=1&pageSize=20) of the new DTS console to view the remaining time of the synchronization task.
    

The following sections describe the procedure to clone an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster.

## **Precheck for logical migration**

### **Precheck whether the service-linked role for PolarDB is created**

Before you use the logical migration (data synchronization over DTS) method to perform a one-click cloning, check whether the service-linked role for PolarDB has been created. Perform the following steps:

1.  Log on to the **Roles** page in the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/roles).
    
2.  Check whether a service-linked role named **AliyunServiceRoleForPolarDB** already exists in the list as shown in the following figure.![ram](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5679898561/p467021.jpg)
    
    1.  If the service-linked role exists in the list, skip this check.
        
    2.  If the service-linked role does not exist in the list, continue this check.
        
3.  In the upper-left corner, click **Create Role**. In the Select Role Type step of the **Create Role** panel, select **Alibaba Cloud Service** and click **Next**. ![阿里云服务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5679898561/p467027.png)
    
4.  In the Configure Role step, set Role Type to **Service Linked Role** and select **ApsaraDB for PolarDB** from the Select Service drop-down list.
    
    ![服务关联角色](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5679898561/p467032.png)
    
5.  Click **OK**. Return back to the role list to confirm that the role is created.
    

### **Precheck whether redundant system accounts are removed from the source instance**

To ensure compatibility between ApsaraDB RDS for MySQL and PolarDB in terms of the system account structure and to prevent the system accounts of the destination PolarDB cluster from being overwritten during cloning, make sure that the root and aliyun\_root accounts do not exist in the source ApsaraDB RDS instance at the same time. Before you initiate the cloning process, we recommend that you remove extra system accounts from the source ApsaraDB for RDS instance.

The following table lists the correct system account name for each version of ApsaraDB RDS for MySQL.

**ApsaraDB RDS for MySQL version**

**Correct system account name**

RDS MySQL 5.6

root

RDS MySQL 5.7

aliyun\_root

RDS MySQL 8.0

aliyun\_root

Apart from the corresponding system account for each version mentioned in the preceding table, all other system accounts must be removed. For example, aliyun\_root is correct in RDS MySQL 5.7. If you create root in the console, you must remove it. Before you remove root, confirm that it is not used in your business.

**Note**

Extra system accounts may have been created by users or inherited from the source version during a version upgrade. In some scenarios, specific accounts may not be visible in the console.

The following example shows how to remove extra system accounts from an ApsaraDB RDS for MySQL 5.6 instance:

1.  Use a privileged account to connect to the database.
    
2.  Find all root and aliyun\_root system accounts.
    
    ```
    SELECT * FROM mysql.user WHERE `user` IN ('root', 'aliyun_root');
    ```
    
3.  Remove extra system accounts. The correct system account name of ApsaraDB RDS for MySQL 5.6 is root. Therefore, you must remove the aliyun\_root account.
    
    ```
    DELETE FROM mysql.user WHERE `user` = 'aliyun_root' LIMIT n;
    ```
    

## Step 1: Migrate data from the source ApsaraDB RDS for MySQL instance

In this step, a PolarDB cluster is created. The cluster stores the same data as the source ApsaraDB RDS for MySQL instance.

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Click **Create Cluster**.
    
4.  Set **Billing Method** to **Subscription**, **Pay-as-you-go**, or **Serverless**.
    
    -   Subscription: You must pay upfront for compute nodes when you create a cluster. Storage is billed based on actual hourly usage, and fees are deducted from your account on an hourly basis.
        
    -   Pay-as-you-go: An upfront payment is not required. You are charged fees for the compute nodes and the amount of storage that is consumed by your data. These fees are deducted from your account on an hourly basis.
        
    -   Serverless: An upfront payment is not required. Resources such as compute nodes, storage space, and PolarProxy dynamically scales based on the actual demand. You are charged fees based on the actual usage of these scaled resources.
        
5.  Configure the following parameters.
    
    **Note**
    
    For information about the parameters that are not described in the following table, see [Purchase clusters](/help/en/polardb/polardb-for-mysql/user-guide/purchasing-clusters/).
    
    **Parameter**
    
    **Description**
    
    **Creation Method**
    
    Select **Clone from RDS**.
    
    **Region**
    
    The region where the source ApsaraDB RDS for MySQL instance is deployed.
    
    **Note**
    
    The destination PolarDB cluster must be also deployed in this region.
    
    **Source RDS Version**
    
    The engine version of the source RDS instance. You can select **5.6**, **5.7**, or **8.0**.
    
    **Source RDS Instance**
    
    The source ApsaraDB RDS for MySQL instance. Read-only ApsaraDB RDS for MySQL instances are not displayed.
    
    **Database Engine**
    
    The database engine version of the destination PolarDB cluster. You can select the same version as the source ApsaraDB RDS for MySQL instance or a different version.
    
    **Node Specification**
    
    The node specifications of the cluster. You can specify node specifications based on your business requirements. We recommend that you select specifications that are the same as or higher than the specifications of the source ApsaraDB RDS for MySQL instance. For more information about PolarDB node specifications, see [Compute node specifications of PolarDB for MySQL Enterprise Edition](/help/en/polardb/polardb-for-mysql/specifications-of-compute-nodes#concept-2035312).
    
6.  In the upper-right corner of the page, check the cluster configurations and configure the **Duration**, **Quantity**, and **Auto-renewal** parameters. The Duration parameter is available only for **subscription** clusters.
    
7.  Read and select terms of service. Click **Confirm Order**.
    
8.  On the **Purchase** page, confirm the order and the payment method, and click **Purchase**.
    
    **Note**
    
    -   After you complete the payment, wait 10 to 15 minutes. Then, you can view the newly created cluster on the **Clusters** page.
        
    -   If specific nodes in the cluster are in the **Creating** state, the cluster is still being created and is unavailable. The cluster is available only when the cluster is in the **Running** state.
        
    -   Make sure that you have selected the region in which the cluster is deployed. Otherwise, you cannot view the cluster.
        
    
9.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com) and check the status of the new PolarDB cluster.
    
    **Note**
    
    If the logical migration method is used, click the cluster ID to go to the **Basic Information** page and view the migration status. If the Status field in the RDS Migration section is **Precheck Failed**, follow the instructions in the **error message** to troubleshoot the issue.![预检查失败](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5679898561/p467072.png)
    
    For example, if a trigger is created in the source ApsaraDB RDS for MySQL instance, the precheck fails and the "The RDS instance has a trigger." error message is reported. You can delete the trigger and then click **Continue Migration**. Alternatively, you can click **Cancel Migration** and then manually create a data synchronization task in the DTS console. For more information, see [Configure a data synchronization task for a source database that contains a trigger](/help/en/dts/use-cases/configure-a-data-synchronization-task-for-a-source-database-that-contains-a-trigger#multiTask2397).
    
    You can also click **Cancel** to cancel the migration task. For more information, see [FAQ](#section-3l3-e5l-u2i).
    

## Step 2: View the details of a data synchronization task (for logical migration only)

If the logical migration method is used, click the cluster ID to go to the **Basic Information** page and view the migration status. If migration errors (such as a precheck failure) or other exceptions (such as very high replication latency) occur, you can go to the details page of the data synchronization task to view the details.

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com).
    
2.  Find the target cluster and click its ID.
    
3.  In the **RDS Migration** section of the **Basic Information** page, click the name of **DTS Data Synchronization Task** to go to the data synchronization task list in the DTS console.
    
    ![DTS任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5679898561/p467076.png)
    
4.  Find the data synchronization task. You can view precheck failure details, data synchronization task details, and data synchronization task logs.
    
    ![进入详情](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1890955861/p477501.png)![详情](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3476154661/p477502.png)
    

## FAQ

-   What are the differences between [upgrading an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/overview-43#task-1580301) and cloning an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster?
    
    The following table describes the differences.
    
    **Item**
    
    [Upgrading an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/overview-43#task-1580301)
    
    **Cloning an ApsaraDB RDS for MySQL instance to a** **PolarDB for MySQL** **cluster**
    
    Whether incremental data migration or synchronization is supported
    
    Yes.
    
    No.
    
    Whether operations on the source instance are affected
    
    No.
    
    No.
    
    Whether the source and destination databases can use different MySQL versions
    
    Yes.
    
    Yes.
    
-   Is the source ApsaraDB RDS for MySQL instance affected when data is cloned from the ApsaraDB RDS for MySQL instance?
    
    No, the data cloning does not interrupt the running of the source ApsaraDB RDS for MySQL instance but consumes some resources of the source instance.
    
-   What happens when I cancel the migration?
    
    After you cancel the migration, the following impacts occur:
    
    -   The synchronization link from the source instance to the destination cluster is disconnected. The source instance is no longer associated with the destination cluster.
        
    -   The destination cluster becomes readable and writable and is not automatically released. **If you no longer use the destination cluster, release the cluster at the earliest opportunity to prevent additional costs**.
        
    -   You can specify whether to disable the binary logging feature for the cluster when you manually cancel the migration. The binary logging feature is not disabled when the migration is automatically canceled.
        
        **Note**
        
        If you disable the binary logging feature for the cluster, the write performance of the cluster is slightly improved. After you disable the binary logging feature, existing binary logs are retained. To delete the binary logs, you can first reduce the retention period for the binary logs. After the binary logs have been automatically deleted, you can then disable the binary logging feature. After you disable the binary logging feature, the cluster automatically restarts. The restart task is completed within 5 minutes. The service is interrupted for approximately 40 seconds during the restart. The restart duration varies based on the amount of data and the number of tables. We recommend that you disable the binary logging feature during off-peak hours and make sure that your application can automatically reconnect to the database service.
        

## Related API operations

**API**

**Operation**

[CreateDBCluster](/help/en/polardb/polardb-for-mysql/api-createdbcluster#doc-api-polardb-CreateDBCluster)

Creates a PolarDB cluster.

**Note**

If you create a PolarDB cluster by cloning an ApsaraDB RDS for MySQL instance, set CreationOption to CloneFromRDS.

## What to do next

You must change the endpoint over which your application accesses the database to the endpoint of the PolarDB cluster at the earliest opportunity. For more information, see [Manage the endpoints of a cluster](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint#task-1580301).
