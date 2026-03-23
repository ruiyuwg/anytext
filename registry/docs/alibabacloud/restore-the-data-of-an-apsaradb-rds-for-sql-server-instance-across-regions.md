This topic describes how to restore the data of an ApsaraDB RDS for SQL Server instance from a cross-region backup file to a new RDS instance. The new RDS instance must reside in the same region as the cross-region backup file.

## Prerequisites

Your RDS instance is backed up across regions. For more information, see [Use the cross-region backup feature](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#concept-405443).

**Note**

-   For more information about data restoration methods, see [Methods to restore an ApsaraDB RDS for PostgreSQL instance](/help/en/doc-detail/444449.html#task-2222081).
    
-   For more information about how to restore the data of an ApsaraDB RDS for MySQL instance across regions, see [Restore the data of an ApsaraDB RDS for MySQL instance across regions](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-across-regions#concept-405831).
    
-   For more information about how to restore the data of an ApsaraDB RDS for PostgreSQL instance across regions, see [Restore the data of an ApsaraDB RDS for PostgreSQL instance across regions](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-across-regions#task-2056360).
    

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Backups**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  On the **Backup Instances** tab of the **Cross-region Backup** tab, find the RDS instance and click the ID of the instance.
    
3.  On the page that appears, find the backup set that you want to use and click **Restore** in the **Actions** column.
    
    **Note**
    
    You can restore data of the RDS instance by using full or incremental backup sets. **You cannot restore data of the RDS instance by using log backup sets**.
    
4.  In the message that appears, click **OK**.
    
    **Note**
    
    You can restore data only to a new instance. You cannot restore data to an existing instance.
    
5.  On the **Restore Database** page, configure the following parameters.
    
    **Note**
    
    The following table describes only the key parameters. By default, the database engine, RDS edition, instance type, and storage type of the new RDS instance remain the same as those of the original RDS instance and cannot be changed.
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    -   **Subscription**: A subscription instance is an instance for which you pay an upfront fee. For long-term use, the subscription billing method is more cost-effective than the pay-as-you-go billing method. You are offered lower prices for longer subscription periods.
        
    -   **Pay-as-you-go**: A pay-as-you-go instance is billed per hour based on your actual resource usage. We recommend that you select the pay-as-you-go billing method for short-term use. If you no longer require a pay-as-you-go RDS instance, you can release it to reduce costs.
        
    
    **Restoration Mode**
    
    -   **By Backup Set**: allows you to restore the data of your RDS instance from a data backup file.
        
    -   **By Point in Time**: allows you to restore the data of your RDS instance to a specific point in time. The point in time must be within the specified log backup retention period.
        
    
    **By Backup Set**
    
    The data backup file from which you want to restore the data of your RDS instance. This parameter appears only when you set the **Restoration Mode** parameter to **By Backup Set**.
    
    **Restoration Time**
    
    The point in time to which you want to restore the data of your RDS instance. This parameter appears only when you set the **Restoration Method** parameter to **By Point in Time**.
    
    **Database**
    
    The databases that you want to restore. Valid values: **All** and **Some**.
    
    **Note**
    
    -   If you select Some, separate multiple databases with commas (,). Example: `TestDB1,TestDB2,TestDB3`.
        
    -   If the original RDS instance uses the snapshot backup method and you select By Point in Time for the Restoration Mode parameter, all databases are restored by default. In this case, you cannot restore specific databases.
        
    
    **Region**
    
    The region in which the new RDS instance resides. The value is fixed as the region in which the cross-region backup files of the original RDS instance are stored.
    
    **Cloud Disk Encryption**
    
    If the backup method of the original RDS instance is **Physical Backup**, you can specify whether to enable the cloud disk encryption feature for the new RDS instance. For more information, see [Configure the cloud disk encryption feature](/help/en/rds/apsaradb-rds-for-sql-server/configure-disk-encryption-for-an-apsaradb-rds-for-sql-server-instance). The cloud disk encryption feature encrypts data on each data disk of your RDS instance based on block storage to ensure data security. If you select this check box, the cloud disk encryption feature is enabled. By default, the service key that is managed by ApsaraDB RDS is used to encrypt data.
    
    **Note**
    
    -   If the backup method of the original RDS instance is **Snapshot Backup**, you do not need to specify this parameter. **By default, the cloud disk encryption feature is enabled for the new RDS instance** and the service key that is managed by ApsaraDB RDS is used. **Only** **ApsaraDB RDS for SQL Server instances** that run RDS Cluster Edition support **cross-region snapshot backups**. For more information, see [RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-sql-server/rds-cluster-edition) and [Use the snapshot backup feature](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#task-2067291).
        
    -   For more information, see [Comparison between snapshot backup and physical backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#section-cwj-t5p-dr4).
        
    
    **Deployment Method**
    
    A zone is an independent physical location within a region. The **Zone of Primary Node** parameter specifies the zone in which the primary RDS instance resides. The **Zone of Secondary Node** parameter specifies the zone in which the secondary RDS instance resides.
    
    You can select the **Single-zone Deployment** or **Multi-zone Development** method.
    
    -   **Single-zone Deployment**: If you select this deployment method, the values of the **Zone of Primary Node** and **Zone of Secondary Node** parameters are the same.
        
    -   **Multi-zone Development**: If you select this deployment method, the values of the **Zone of Primary Node** and **Zone of Secondary Node** parameters are different. We recommend that you select this deployment method to perform zone-disaster recovery. You must manually configure the **Zone of Primary Node** and **Zone of Secondary Node** parameters.
        
    
    **Note**
    
    -   After the RDS instance is created, you can view information about the new RDS instance and its secondary RDS instance on the **Service Availability** page.
        
    -   If you select RDS Basic Edition, the database system consists of only one primary RDS instance and supports only the single-zone deployment method.
        
    
    **Instance Type**
    
    1.  Configure the **Category** parameter. Valid values: General-purpose, Dedicated, and Shared. The available instance types vary based on the RDS edition and database engine. Refer to the available instance types in the ApsaraDB RDS console.
        
        **Instance type**
        
        **Description**
        
        **Benefit**
        
        **General-purpose**
        
        A general-purpose RDS instance occupies all the allocated memory and I/O resources.
        
        A general-purpose RDS instance shares CPU and storage resources with the other general-purpose RDS instances that are deployed on the same host.
        
        RDS instances of the general-purpose instance type are cost-effective.
        
        **Dedicated**
        
        A dedicated RDS instance occupies all the allocated CPU, memory, storage, and I/O resources.
        
        **Note**
        
        The dedicated host instance family is the highest configuration of the dedicated instance family. A dedicated host RDS instance exclusively occupies all the CPU, memory, storage, and I/O resources of the host on which the RDS instance is deployed.
        
        RDS instances of the dedicated instance type provide higher performance and higher stability.
        
        **Note**
        
        An RDS instance that runs RDS Basic Edition does not support the dedicated instance family.
        
        **Shared**
        
        A shared RDS instance exclusively occupies the allocated memory and storage resources.
        
        A shared RDS instance shares CPU resources with other RDS instances that are deployed on the same host.
        
        A shared RDS instance is cost-effective but delivers moderate stability.
        
    2.  Configure detailed specifications, including CPU cores, memory capacity, and maximum number of connections.
        
        **Note**
        
        For more information, see [Primary ApsaraDB RDS for SQL Server instance types](/help/en/rds/apsaradb-rds-for-sql-server/primary-apsaradb-rds-for-sql-server-instance-types#concept-2096545).
        
    
    **Storage Capacity**
    
    The storage capacity is used to store data files, system files, archived log files, and transaction files. The valid values of the Storage Capacity parameter vary based on the values of the Storage Type and Instance Type parameters that you specify. You can adjust the storage capacity at a step size of 5 GB.
    
6.  Click **Next: Instance Configuration** to configure the network type and resource group of the RDS instance.
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    -   **Classic Network**: the traditional type of network.
        
    -   **VPC**: the recommended type of network. A virtual private cloud (VPC) is an isolated network that provides higher security and better performance than the classic network. If you select the VPC network type, you must also specify the **VPC** and **vSwitch of Primary Node** parameters.
        
    
    **Note**
    
    The network type of the RDS instance must be the same as the network type of the ECS instance that you want to connect. If the RDS instance and the ECS instance both reside in VPCs, these instances must reside in the same VPC. If the RDS instance and the ECS instance reside in different VPCs, these instances cannot communicate over an internal network.
    
    **Resource Group**
    
    You can use resource groups to categorize the resources of your Alibaba Cloud account. Resource groups help you simplify the management of resources and permissions in your Alibaba Cloud account. You can select an existing resource group or create a resource group. If you do not need to group resources, select **Default Resource Group**.
    
7.  Click **Next: Confirm Order**.
    
8.  Confirm the settings in the **Parameters** section, configure the **Purchase Plan** and **Duration** parameters, read and select Terms of Service, click **Pay Now**, and then complete the payment. You must configure the Duration parameter only when you select the subscription billing method for the RDS instance.
    
    **Note**
    
    If you select the subscription billing method for the new RDS instance, we recommend that you select **Auto-Renew Enabled** below the Duration parameter. This way, you do not need to renew the new RDS instance on a regular basis. This also helps prevent interruptions on your workloads on the new RDS instance if a payment becomes overdue.
    
9.  **Optional.** Log on to the new RDS instance and verify the data. For more information, see [Connect to an ApsaraDB RDS for SQL Server instance](/help/en/rds/connect-to-sql-server-instance).
    

## References

After you create an RDS instance, you must configure IP address whitelists or security groups and create accounts. For more information, see [Configure an IP address whitelist](/help/en/rds/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-sql-server-instance-1#concept-jvp-nwz-vdb) and [Create an account](/help/en/rds/apsaradb-rds-for-sql-server/create-a-standard-account-privileged-account-and-a-global-read-only-account#concept-n3n-1zz-vdb). If you want to connect to the RDS instance over the Internet, you must also apply for a public endpoint. For more information, see [Apply for or release a public endpoint](/help/en/rds/apsaradb-rds-for-sql-server/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-sql-server-instance#concept-nsl-hff-vdb). After you complete these operations, you can connect to the RDS instance. For more information, see [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-sql-server/connection-instance#concept-y5f-rj1-wdb).

## Related operations

**Operation**

**Description**

[CheckCreateDdrDBInstance](/help/en/rds/api-check-cross-region-backup#doc-api-Rds-CheckCreateDdrDBInstance)

Checks whether an instance has a cross-region backup set that can be used to restore data across regions.

[CreateDdrInstance](/help/en/rds/api-restore-data-to-a-new-instance-across-regions#doc-api-Rds-CreateDdrInstance)

Restores the data of an instance to a new instance.

[ModifyInstanceCrossBackupPolicy](/help/en/rds/api-modify-cross-region-backup-settings#doc-api-Rds-ModifyInstanceCrossBackupPolicy)

Modifies the cross-region backup settings of an instance.

[DescribeInstanceCrossBackupPolicy](/help/en/rds/api-query-cross-region-backup-settings#doc-api-Rds-DescribeInstanceCrossBackupPolicy)

Queries the cross-region backup settings of an instance.

[DescribeCrossRegionBackups](/help/en/rds/api-query-cross-region-data-backup-files#doc-api-Rds-DescribeCrossRegionBackups)

Queries the cross-region data backup files of an instance.

[DescribeCrossRegionLogBackupFiles](/help/en/rds/api-query-cross-region-log-backup-files#doc-api-Rds-DescribeCrossRegionLogBackupFiles)

Queries the cross-region log backup files of an instance.

[DescribeAvailableCrossRegion](/help/en/rds/api-query-regions-that-support-cross-region-backup#doc-api-Rds-DescribeAvailableCrossRegion)

Queries the available destination regions to which the cross-region backup files from a specific source region can be replicated.

[DescribeAvailableRecoveryTime](/help/en/rds/api-query-the-time-range-to-which-you-can-restore-data-by-using-a-cross-region-backup-set#doc-api-Rds-DescribeAvailableRecoveryTime)

Queries the restorable time range that is supported by a specified cross-region backup file.

[DescribeCrossRegionBackupDBInstance](/help/en/rds/api-query-apsaradb-for-rds-instances-on-which-cross-region-backup-is-enabled#doc-api-Rds-DescribeCrossRegionBackupDBInstance)

Queries the instances for which the cross-region backup feature is enabled in a region and the cross-region backup settings of the instances.
