If backup files are created for an ApsaraDB RDS for PostgreSQL instance, you can restore the backup data to a new RDS instance. This method is suitable for the analysis of historical data and the restoration of data on which unintended operations are performed.

## Feature description

ApsaraDB RDS for PostgreSQL allows you to restore data from a backup set or to a point in time. The entire restoration process consists of the following steps:

1.  Restore the backup data to a new RDS instance.
    
2.  Log on to the new RDS instance and verify the data on the new RDS instance.
    
3.  Migrate the data from the new RDS instance to the original RDS instance.
    

**Note**

For more information about data restoration methods, see [Overview of data restoration methods](/help/en/doc-detail/444453.html#task-2223561).

## Prerequisites

The original RDS instance meets the following requirements:

-   The original RDS instance is in the **Running** state.
    
-   No ongoing migration tasks exist.
    
-   At least one backup set is complete. This requirement must be met if you want to restore data from backup sets.
    
-   The log backup feature is enabled for the original RDS instance. This requirement must be met if you want to restore data to a specific point in time. For more information, see [Configure automatic backups](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#section-f33-lk4-ydb).
    
    **Note**
    
    RDS instances that run RDS Basic Edition do not support the log backup feature. You cannot restore data of the RDS instance to a point in time.
    

## Usage notes

-   The new RDS instance and the original RDS instance must have the same backup and parameter settings.
    
-   The data and account information of the new RDS instance must be the same as the data and account information that is indicated by the specified data or log backup file of the original RDS instance.
    
-   If your RDS instance uses cloud disks and you use this method to restore the data of the RDS instance to a new RDS instance, the new RDS instance does not inherit the whitelist and security group configurations of the original RDS instance. You must reconfigure the whitelists and security groups after data is restored.
    

## Billing rules

You are charged for the new RDS instance. You can view the price of the new RDS instance when you create the instance.

**Note**

-   If you want to temporarily use an RDS instance, you can create a pay-as-you-go RDS instance or a serverless RDS instance. After data is restored to the new RDS instance, you can migrate the data to the original RDS instance and then release the new RDS instance. For more information, see [Migrate data between ApsaraDB RDS instances](/help/en/dts/user-guide/migrate-data-between-apsaradb-rds-instances#concept-610471) and [Release or unsubscribe from an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/release-or-unsubscribe-from-an-apsaradb-rds-for-postgresql-instance).
    
-   You are immediately charged for the new RDS instance after the instance is created.
    

## Restore data to a new RDS instance

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  In the upper-left corner of the page that appears, click **Restore Database**.
    
4.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    -   **Subscription**: A subscription RDS instance is an instance for which you pay an upfront fee. For long-term usage, the subscription billing method is more cost-effective than the pay-as-you-go billing method. You are charged lower prices for longer subscription periods.
        
    -   **Pay-as-you-go**: A pay-as-you-go RDS instance is billed per hour based on your actual resource usage. We recommend that you select the pay-as-you-go billing method for short-term use. If you no longer need your pay-as-you-go RDS instance, you can release it to reduce costs.
        
    
    **Note**
    
    If the billing method of the RDS instance is serverless, you can restore data only to a new serverless RDS instance.
    
    **Restoration Mode**
    
    -   **By Point in Time**: allows you to restore data to a point in time within the specified log retention period. For more information about how to view or change the log backup retention period, see [Back up an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#concept-l1m-xgn-ydb).
        
    -   **By Backup Set**: allows you to restore the data from a backup set.
        
    
    **Note**
    
    The **By Time** option is available only if the log backup feature is enabled.
    
    **Edition**
    
    -   **Basic Edition**: The database system consists of only one RDS instance. Computing is separated from storage to increase cost-effectiveness.
        
    -   **High-availability Edition**: The database system adopts the classic high-availability architecture that consists of one primary RDS instance and one secondary RDS instance.
        
    -   **Cluster Edition**: The database system adopts a high-availability architecture that consists of one primary node and multiple secondary nodes.
        
    
    **Note**
    
    The available RDS editions vary based on the region and database engine version that you select. For more information, see [Overview](/help/en/rds/overview-11).
    
    **Deployment Method**
    
    You can select the **Single-zone Deployment** or **Multi-zone Development** method. A zone is an independent physical location within a region. The **Zone of Primary Node** parameter specifies the zone to which the primary RDS instance belongs. The **Zone of Secondary Node** parameter specifies the zone to which the secondary RDS instance belongs.
    
    -   **Single-zone Deployment**: If you select this deployment method, the values of the **Zone of Primary Node** and **Zone of Secondary Node** parameters are the same.
        
    -   **Multi-zone Development**: If you select this deployment method, the values of the **Zone of Primary Node** and **Zone of Secondary Node** parameters are different. We recommend that you select this deployment method to implement zone-disaster recovery. You must configure the **Zone of Primary Node** and **Zone of Secondary Node** parameters.
        
    
    **Note**
    
    -   After the new RDS instance is created, you can view information about the new RDS instance and its secondary RDS instance on the **Service Availability** page.
        
    -   If you select Basic Edition, the database system consists of only one primary RDS instance and supports only the single-zone deployment method.
        
    
    **Instance Type**
    
    -   **General-purpose Instance Types**: allows you to select a general-purpose instance type. A general-purpose RDS instance exclusively occupies the allocated memory and I/O resources, but shares CPU and storage resources with the other general-purpose RDS instances that are deployed on the same server.
        
    -   **Dedicated Instance Types**: allows you to select a dedicated instance type or a dedicated host instance type. A dedicated RDS instance exclusively occupies the CPU, memory, storage, and I/O resources that are allocated. Dedicated host instance types provide the highest specifications in the dedicated instance family. A dedicated host RDS instance occupies all CPU, memory, storage, and I/O resources on the physical host where the RDS instance is deployed.
        
    
    **Note**
    
    Each instance type supports a specified number of cores, memory capacity, maximum number of connections, and maximum IOPS. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types).
    
    **Storage Capacity**
    
    Configure the storage capacity for your RDS instance. The storage capacity is provisioned to store data files, system files, log files, and transaction files in the RDS instance. You can adjust the storage capacity at a step size of 5 GB.
    
    **Note**
    
    A dedicated RDS instance that uses Premium Local SSDs exclusively occupies the allocated resources, and its storage capacity varies based on the instance type. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types).
    
5.  Click **Next: Instance Configuration**.
    
6.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    The network type of the RDS instance. Select **VPC**. A virtual private cloud (VPC) is an isolated network that provides higher security and better performance than the classic network. If you select the VPC network type, you must configure the **VPC** and **vSwitch of Primary Node** parameters. If you set the **Deployment Method** parameter to **Multi-zone deployment** in the Basic Resources step, you must also configure the **vSwitch of Secondary Node** parameter.
    
    **Note**
    
    Make sure that the RDS instance and the ECS instance to which you want to connect have the same network type. If their network types are different, they cannot communicate over an internal network.
    
    **Resource Group**
    
    The resource group to which the RDS instance belongs.
    
7.  Click **Next: Confirm Order**.
    
8.  Confirm the settings in the **Parameter Configuration** section, configure the **Quantity** and **Subscription Duration** parameters, read and select Terms of Service, click **Pay Now**, and then complete the payment. You must configure the Subscription Duration parameter only when you select the subscription billing method for the RDS instance.
    

## Log on to the new RDS instance and verify the data

For more information, see [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance-1#concept-stt-3hg-wdb).

## Migrate data to the original RDS instance

After you verify the data on the new RDS instance, you can migrate the data from the new RDS instance to the original RDS instance. For more information, see [Migrate data between RDS instances](/help/en/dts/user-guide/migrate-data-between-apsaradb-rds-instances).

**Note**

Data migration indicates the process of replicating the data of the source RDS instance to the destination RDS instance. Data migration does not interrupt the workloads on the source RDS instances.

## **References**

-   To restore data of specific databases or tables on an RDS instance, follow the instructions in [Restore individual databases and tables](/help/en/rds/apsaradb-rds-for-postgresql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-postgresql-instance).
    
-   To restore a small amount of data, such as the data of a table, you can use a logical backup file to quickly restore the data. For more information, see [Use pg\_restore to restore data from a logical backup file](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-from-a-logical-backup-file).
    
-   To restore the backup data of an RDS instance to a self-managed PostgreSQL instance, follow the instructions in [Restore the data of an ApsaraDB RDS for PostgreSQL instance to a self-managed PostgreSQL instance by using a CSV file or an SQL file](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-to-a-self-managed-postgresql-instance-by-using-a-csv-file-or-an-sql-file).
