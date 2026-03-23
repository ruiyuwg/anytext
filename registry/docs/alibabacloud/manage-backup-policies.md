In Cloud Backup, a backup policy is a reusable template of rules, defining settings like the backup schedule and retention period. To protect a data source, you associate a policy with it, which creates a backup plan. The plan then executes backups according to the policy's rules. This topic covers how to create, modify, and manage these policies.

## **Usage notes**

### **General limitations**

The following limits apply to all backup policies:

-   Supported regions: Backup policies can be created only in specific regions. Find the supported regions on the **Policy Center** page in the console. For more information, see [Features supported by region](/help/en/cloud-backup/product-overview/feature-availability-by-alibaba-cloud-region#593ff87568wdf).
    
-   Supported data sources: Policies are available for ECS file backup, ECS instance backup, OSS backup, Alibaba Cloud NAS backup, on-premises NAS backup, Tablestore backup, CPFS backup, and on-premises file backup.
    

### **Feature availability**

-   **Backup Vault**: Available only for general backup policies.
    
-   **Automatic Archiving**: Available for ECS file backup, ECS instance backup, OSS backup, Alibaba Cloud NAS backup, on-premises NAS backup, CPFS backup, and on-premises file backup.
    
-   **Immutable Backup**: Supported by both general and ECS instance backup policies.
    
-   **Backup Point Virus Detection**: Available for ECS file backup (new version), on-premises file backup (new version), OSS backup, Alibaba Cloud NAS backup, and on-premises NAS backup.
    
-   **Associate Resource Tag**: Supported by ECS instance backup, ECS file backup, OSS backup, Alibaba Cloud NAS backup, and Tablestore backup.
    

### **Notes for legacy backup policies**

If a policy's Policy Type is Legacy Backup Policy, it is considered deprecated and is subject to the following limitations:

#### **Usage restrictions**

-   Editing and associations: While existing legacy policies can still be edited and their current associations remain active, they cannot be used for new backups.
    
-   New backups: To protect new ECS instances, you must create and use an ECS instance backup policy.
    
-   Backup method: Legacy policies use snapshots directly. The backup data is not stored in a backup vault, and therefore does not support features like cross-region replication or automatic archiving.
    

#### **Configuration management**

The location for managing backup settings depends on whether the legacy policy is associated with a backup vault:

-   If not associated with a backup vault: All instance backup settings are editable on the ECS Instance Backup page.
    
-   If associated with a backup vault:
    
    -   Backup vault configurations are editable on the Policy Center page.
        
    -   Instance-specific settings are still visible on the ECS Instance Backup page, but they cannot be modified there.
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8538994271/p824571.png)

## Prerequisites

You have [activated Cloud Backup](/help/en/cloud-backup/product-overview/activate-hbr#section-brb-b0s-37f). Activating Cloud Backup is free of charge.

## Create a backup policy

1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
    
2.  In the navigation pane on the left, choose **Backup** > **Policy Center**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Policy Center** page, click **Create Backup Policy**.
    
5.  In the **Create Backup Policy** dialog box, configure parameters such as Policy Type, Policy Name, Execution Plan, Lifecycle, Auto-archive Settings, Backup Vault Configuration, and Replication Policy, and then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5323138671/p1025738.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4346890671/p1013679.png)
    
    ## **General Backup Policy** **parameters**
    
    **Important**
    
    Select the appropriate policy type for your requirements and carefully read the parameter descriptions to ensure that the configurations meet your needs.
    
    **Parameter**
    
    **Description**
    
    **Policy Type**
    
    Specify the policy type.
    
    This policy type applies to all data sources except for ECS instance backups. Supported data sources include ECS files, local files, OSS, Alibaba Cloud NAS, CPFS, Tablestore, and on-premises NAS. Backup data is stored in a general backup vault.
    
    **Policy Name**
    
    Enter a custom name for the backup policy.
    
    The name must be 2 to 128 characters in length. It cannot start with \`auto\`, a special character, or a digit. It can contain only periods (.), underscores (\_), hyphens (-), and colons (:).
    
    **Schedule**
    
    **Backup Frequency**
    
    Specify the backup cycle.
    
    **Note**
    
    If the previous backup job is still running when the current backup job starts, the current job is skipped and will run during the next scheduling cycle.
    
    -   **Hourly**: Executes a backup at a fixed hourly interval.
        
    -   **Daily**: Executes a backup at a fixed interval of days.
        
    -   **Weekly**: Executes a backup on the specified days of the week.
        
    -   **Monthly**: Executes a backup in the specified months.
        
    
    **First Execution Time**
    
    Specify the first execution time.
    
    **Time Interval**
    
    Specify the backup interval.
    
    **Incremental Backup Interval**
    
    This setting is required only for Tablestore. For other data sources, Cloud Backup automatically performs full or incremental backups.
    
    -   **No**: Disables incremental backup.
        
    -   **Specify Time**: Specify the interval for Tablestore incremental backups.
        
    
    **Lifecycle**
    
    **Retention Period**
    
    Set the retention period for backup data.
    
    -   **Permanent**: The backup data is retained permanently and is not deleted.
        
    -   **Specify Time**: The total retention period for the backup data, measured in days with a maximum of 999 years. For example, if you set the value to 210 days, the backup data is retained for 210 days and is deleted after the retention period expires.
        
        When you set a value for **Days to Transfer to Archive Tier**, data in the archive tier must be retained for at least 60 days. Therefore, the total retention period must be at least 60 days longer than the **Days to Transfer to Archive Tier** value.
        
        For example, if data is automatically archived after 30 days, the total retention period must be at least 30 + 60 = 90 days.
        
    
    **Special Retention Period**
    
    In addition to standard backup policies, to meet data security requirements, Cloud Backup supports special retention policies. A special retention policy lets you keep the first available backup of each week, month, or year for a longer period. A single backup policy can include weekly, monthly, and yearly special retention rules at the same time. For more information, see [Special retention period](/help/en/cloud-backup/user-guide/special-retention-periods-of-granular-recent-backups-with-long-term-sparse-retention#reference-2274553).
    
    **Important**
    
    Limits apply to the special retention period and the standard retention period. Configure the special retention period based on system recommendations. Note the following limits:
    
    -   A special retention period cannot be set for backups that are retained permanently.
        
    -   The special retention period must be longer than the standard retention period.
        
    -   The special retention period cannot exceed 999 years when converted from weeks, months, or years.
        
    
    **Keep At Least One Backup Version**
    
    Recommended. When this option is enabled, the latest backup version generated by this backup plan will not be deleted due to retention period expiration or accidental operations. This ensures that at least one recovery point is always available, preventing data loss from misconfigured retention settings. For more information, see [Retain at least one backup version](/help/en/cloud-backup/use-cases/keep-at-least-one-backup-version#reference-2274495).
    
    **Important**
    
    -   This feature takes effect only after a data source is associated with this backup policy.
        
    -   For general backup policies, at least one version of the backup points that are replicated to another region is retained.
        
    -   Tablestore backup is not supported.
        
    -   The latest backup is not automatically archived.
        
    
    **Automatic Archiving**
    
    **Days to Transfer to Archive Tier**
    
    Set the number of days after which backup data is moved to the Archive tier. By default, backup data is stored in the Standard tier of the backup vault. For data that requires long-term storage, use this feature to move backup points from the Standard tier to the Archive tier. This reduces data protection costs.
    
    **Important**
    
    -   When you use [cross-region backup](/help/en/cloud-backup/user-guide/cross-region-backup), data in the Archive tier of the backup vault is not replicated to another region. After data in the Standard tier of the backup vault is transferred to the Archive tier, the corresponding data in the replication target vault is also deleted.
        
    -   The fees for data in the Archive tier are calculated based on the size of the raw data that is archived. An object or a file that is smaller than 64 KB is billed as 64 KB. For scenarios that involve many small files, carefully evaluate whether to archive the data. For more information about the rules, see [Automatic archiving](/help/en/cloud-backup/user-guide/automatic-archiving).
        
    -   Backup data must be retained in the Standard tier for at least 30 days before it can be archived. After backup data is moved to the Archive tier, the data must be retained in the Archive tier for at least 60 days.
        
    
    -   **No**: The backup data is retained in the Standard tier and is not transferred to the Archive tier.
        
    -   **Specify Time**: The number of days can be from 30 to 65,535. To balance data access frequency, recovery needs, storage costs, and data lifecycle, backup points must be retained in the Standard tier for at least 30 days before they can be automatically archived. This policy is based on the higher probability of recovering recent data. It helps reduce your long-term storage costs and minimizes the high fees for restoring data from the Archive tier.
        
        If objects are transitioned to the Archive layer 30 days after the **Specified Time**:
        
        -   If the **Retention Period** for the backup data is **Permanent**: The backup data is transferred to the Archive tier after 30 days and is permanently retained in the Archive tier. The data will not be deleted.
            
        -   If the **Retention Period** for backup data is 210 days: The data is transferred to the Archive tier after 30 days, retained in the Archive tier for an additional 180 days, and then automatically deleted. The total retention period is 210 days.
            
        
    
    **Backup Vault**
    
    **Backup Vault**
    
    Configure the backup vault to store backup data.
    
    -   **Create Backup Vault**: Create a new backup vault to store backup data. By default, the vault name is assigned based on the date and time.
        
    -   **Select Vault**: Select an existing backup vault from the Backup vault name drop-down list.
        
    
    To maximize the redundancy of backup data, the system automatically selects the [vault type](/help/en/cloud-backup/user-guide/storage-vault-types#4f423fe0dcx9q) based on region support. It creates a **zone-redundant backup vault** by default in regions that support zone-redundant storage and a **locally redundant backup vault** in other regions.
    
    **Vault Name**
    
    Configure this parameter only when you set **Backup Vault** to Create backup vault or Select backup vault. Enter or select the name of the backup vault.
    
    **Vault Resource Group**
    
    This parameter is required only when the **Backup Vault** parameter is set to Create Backup Vault. This parameter specifies the resource group to which the backup vault belongs.
    
    A resource group is a mechanism for managing resources in groups under your Alibaba Cloud account. Resource groups help you simplify resource grouping and authorization management within a single Alibaba Cloud account. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
    **Vault Encryption Method**
    
    This parameter is required only when you set the **Backup Vault** parameter to Create Backup Vault. This parameter specifies the encryption method for the backup vault.
    
    -   **Cloud Backup-managed** (Default): The backup service uses its default encryption method.
        
    -   **KMS**: Use a custom key from Alibaba Cloud KMS for encryption. You must specify the **KMS KeyId** parameter. Select the **Use KMS Alias** check box to use the alias of a KMS key as the key identifier.
        
    
    **Important**
    
    -   After you enable encryption for a backup vault using Key Management Service (KMS), you cannot change the KMS key.
        
    -   To encrypt a backup vault with a KMS key, you must first create a key ID in KMS. For more information, see [Create a key](/help/en/kms/key-management-service/support/create-a-cmk-1#task-1939967).
        
    
    **Replication Policy**
    
    **Backup Vault Replication**
    
    After you enable backup vault replication, all existing backup data in the Standard tier of the source backup vault and new backup data generated after the current time are automatically synchronized to the replication target vault. This provides cross-region and cross-account data protection.
    
    **Important**
    
    When automatic archiving is enabled for the source backup vault, data in the Archive tier is not synchronized to the replication target vault. After data in the Standard tier of the source backup vault is moved to the Archive tier, the corresponding data in the replication target vault is also deleted.
    
    -   Enabling **Replication to Other Region** incurs storage and cross-region data transfer fees. For more information about the billing methods, see [Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items).
        
    -   In a general backup policy, enabling the **Backup Vault Replication** feature is equivalent to **Configuring Backup Vault Replication** for the backup vault associated with the policy. [Configure cross-region backup](/help/en/cloud-backup/user-guide/cross-region-backup#8baf11c05cz02) in **Vault Management**.
        
    -   After you enable **Backup Vault Replication**, the backup vaults that correspond to the data sources in the backup policy automatically sync both existing and newly added backup points to the replication target vault based on the configured rules.
        
    
    **Note**
    
    The **Remote Retention Period** for a cross-region general backup is the same as the retention period of the source backup point.
    
    **Replication Target Vault Configuration**
    
    Select an existing replication target vault or create a new one as needed.
    
    -   Create replication target vault: Create a vault in the current account for cross-region replication.
        
    -   Select replication target vault: If you have created a replication target vault in another account and shared it with the current account, perform cross-account replication or cross-account cross-region replication. If you select a replication target vault in another region of the current account, perform cross-region replication.
        
    
    **Destination Region**
    
    This parameter is required only when you enable **Backup Vault Replication**.
    
    Select the region where the replication target vault is located.
    
    **Backup Vault Encryption Method**
    
    This parameter is required only if you enable **Backup Vault Replication** and select **Create Replication Target Vault**.
    
    The encryption method for the destination backup vault must be the same as that of the source backup vault. The valid values are **Cloud Backup-managed** and **KMS**.
    
    **Data Security**
    
    **Immutable Backup**
    
    Once you enable [immutable backup](/help/en/cloud-backup/user-guide/immutable-backup), it cannot be disabled.
    
    -   After this feature is enabled, the backup vault and all its backup data cannot be deleted before they expire.
        
    -   If **Replication to Other Region** is also enabled, the replicated backup vault and backup points are also locked.
        
    
    **Backup Point Virus Detection**
    
    After you enable the [Backup point virus detection](/help/en/cloud-backup/user-guide/malicious-file-detection) option, the system automatically scans the backup data for viruses after the backup is complete. View the specific scan results at the backup point.
    
    **Important**
    
    -   After you enable virus detection in a backup policy, the system performs a full virus scan on the first backup point and incremental virus scans on subsequent backup points.
        
    -   You are charged for using the Backup Point Virus Detection feature.
        
    -   After a backup point virus detection task starts, it cannot be canceled.
        
    
    **Associate Resource Tag**
    
    Associate the backup policy with multiple resources by specifying tags.
    
    **Resource Type**: ECS File, OSS Bucket, NAS, Tablestore.
    
    **Select Resource**: Associate all resources of the resource type, or select **Specify Tag** to associate specific resources.
    
    **Resource Tag**: A resource is matched only if it has all the specified tags. Click **Associate Tags** to add multiple tags.
    
    The specified tags must correspond to the resource type:
    
    -   If the resource type is ECS File, specify the tags of the ECS instances.
        
    -   If the resource type is OSS Bucket, specify the tags of the OSS buckets.
        
    -   If the resource type is Alibaba Cloud NAS, specify the tags of the NAS file systems.
        
    -   If the resource type is Tablestore, specify the tags of the Tablestore instances.
        
    
    **Note**
    
    -   Up to 30 resource tags can be specified.
        
    -   If an ECS instance is associated with a backup policy using tags and the resource type is set to ECS File, Cloud Backup automatically deploys the ECS File Backup client when the next backup job starts. Conversely, if the tags of an ECS instance are no longer associated with any backup policy and all related backup jobs have expired, Cloud Backup automatically uninstalls the ECS File Backup client.
        
    -   When a backup policy runs, it automatically manages resource associations based on tags:
        
        1.  New associations: If a new resource matches the policy's tags, it is automatically associated and included in the next backup cycle.
            
        2.  Stale associations: If an associated resource no longer matches the tags, its backups are paused, and the association is removed after the backup cycle ends.
            
    
    **Detect Hit Resources**: Click **Detect Now** to check which resources match the resource tags that you set.
    
    To add resources of multiple resource types, click **Add Resource**.
    
    ## **Instance Backup Policy** parameters
    
    **Important**
    
    Select the appropriate policy type for your requirements and carefully read the parameter descriptions to ensure that the configurations meet your needs.
    
    **Parameter**
    
    **Description**
    
    **Policy Type**
    
    Specify the policy type.
    
    This applies only to [ECS instance backup](/help/en/cloud-backup/user-guide/ecs-server-backup-overview). Backup data uses the snapshot capacity and is not stored in a backup vault.
    
    **Policy Name**
    
    Enter a custom name for the backup policy.
    
    The name must be 2 to 128 characters in length. It cannot start with \`auto\`, a special character, or a digit. It can contain only periods (.), underscores (\_), hyphens (-), and colons (:).
    
    **Schedule**
    
    **Backup Frequency**
    
    Specify the backup cycle.
    
    **Note**
    
    If the previous backup job is still running when the current backup job is triggered, the current backup job is skipped and will be run in the next scheduling cycle.
    
    -   **Hourly**: Backs up data at a fixed hourly interval.
        
    -   **Daily**: Executes backups at a fixed interval of days.
        
    -   **Weekly**: Backs up data on the specified days of the week.
        
    -   **Monthly**: Backs up data in the specified months.
        
    
    **First Execution Time**
    
    Specify the first execution time.
    
    **Time Interval**
    
    Specify the backup interval.
    
    **Lifecycle**
    
    **Retention Period**
    
    Set the retention period for the backup data.
    
    **Important**
    
    ECS instance backup does not support permanent retention.
    
    **Specify Time**: The total retention period for the backup data. The retention period is specified in days, with a maximum of 999 years. For example, if you set the value to 210 days, the backup data is retained for 210 days and is deleted when the retention period expires.
    
    If you set a value for **Days to Transfer to Archive Tier**, data in the archive tier has a minimum retention period of 60 days. Therefore, the total retention period must be at least the sum of the days before archiving and 60 days.
    
    For example, if you set data to be archived after 15 days, the total retention period must be at least 75 days (15 + 60).
    
    **Special Retention Period**
    
    In addition to a general backup policy, Cloud Backup supports a special retention policy to meet data security requirements. This policy sets a longer retention period for the first available backup within a specified cycle, such as weekly, monthly, or yearly. A single backup policy can include weekly, monthly, and yearly special retention rules. For more information, see [Special retention period](/help/en/cloud-backup/user-guide/special-retention-periods-of-granular-recent-backups-with-long-term-sparse-retention#reference-2274553).
    
    **Important**
    
    When you configure a special retention period, follow the system recommendations and note the following limits:
    
    -   The special retention period must be longer than the general retention period.
        
    -   The special retention period cannot exceed 999 years when converted from weeks, months, or years.
        
    
    **Keep At Least One Backup Version**
    
    Recommended. When this option is enabled, the latest backup version generated by this backup plan is not deleted due to the expiration of the retention period or accidental operations. This prevents the risk that no backup version is available for restoration due to reasons such as improper backup plan settings.
    
    **Important**
    
    -   This feature takes effect only after a data source is associated with this backup policy.
        
    -   The backup points of an ECS instance backup that are replicated to another region are not affected by the "Keep at least one backup version" setting of the local policy.
        
    -   The latest backup is not automatically archived.
        
    
    **Automatic Archiving**
    
    **Days to Transfer to Archive Tier**
    
    Set the number of days after which to move data to the Archive tier. By default, backup data is stored in the Standard tier. Use this feature to move backup points from the Standard tier to the Archive tier for long-term retention. This reduces data protection costs.
    
    **Important**
    
    -   This setting applies only to new ECS instance backup points created after the auto-archive policy is set or modified. Backup points created before the policy is configured cannot be archived.
        
    -   The ECS service charges for data in the Archive tier based on [archive snapshot](/help/en/ecs/user-guide/archive-snapshots) storage. Before an ECS instance backup point is moved to the Archive tier, its unarchived snapshots are billed as standard snapshots. Once successfully archived, they are billed as [archive snapshots](/help/en/ecs/user-guide/archive-snapshots).
        
    -   Backup points must be kept in the Standard tier for at least 14 days before they can be archived. After a backup point is moved to the Archive tier, it must be kept there for at least 60 days. If you manually delete a backup point before the 60-day period ends, you are charged for the remainder of the minimum retention period.
        
    
    -   **No**: Backup data remains in the Standard tier and is not transferred to the Archive tier.
        
    -   **Specify Time**: The range is 14 to 65,535 days. To balance data access frequency, recovery needs, storage costs, and time to live, backup points must be kept in the Standard tier for at least 14 days before they are automatically archived. This policy is based on the higher probability of recovering recent data. It helps reduce your long-term storage costs and avoids the high fees that can occur when recovering data from the Archive tier.
        
        For example, if you set **Specify Time** to 30 days and the **Retention Period** is 210 days, the backup data is transferred to the Archive tier after 30 days. The data is then kept in the Archive tier for the remaining 180 days and then automatically deleted. The total retention period is 210 days.
        
    
    **Replication Policy**
    
    **Replication to Other Region**
    
    After you enable the **Replication to Other Region** feature, new backups are immediately and automatically replicated to the destination region for cross-region protection.
    
    -   Depending on the backup source type, enabling cross-region replication incurs storage fees or cross-region data transfer fees. For more information about billing methods, see [Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items).
        
    -   Cloud Backup provides the following technology for cross-region replication of backup data:
        
        Backups are replicated across regions using the snapshot cross-region replication technology. This method applies only to [backing up entire ECS instances](/help/en/cloud-backup/user-guide/back-up-ecs-instances).
        
    
    **Important**
    
    -   After you enable **Replication to Other Region**, existing backups are not replicated. Only backup points created after this feature is enabled are replicated.
        
    -   After you disable **Replication to Other Region**, backup points that are replicated to the destination region are not immediately deleted. They are automatically cleared after their retention period expires.
        
    
    **Destination Region**
    
    This parameter is required only when you enable **Replication to Other Region**. Specify the destination region to which backup data is replicated.
    
    **Remote Retention Period**
    
    Configure this parameter when you enable the **Replication to Other Region** feature. Set the retention period for backup data in the destination region.
    
    **Note**
    
    ECS instance backup does not support permanent retention.
    
    **Specify Time**: The total retention period for geo-redundant backup data, in days. The default value is 7 days. The maximum retention period cannot exceed 999 years. Backup data is automatically deleted after the retention period expires.
    
    When you set the **Archive after days** parameter, data in the Archive storage class must be retained for at least 60 days. Therefore, the total retention period for geo-redundant data must be at least the number of days before archiving plus 60 days.
    
    For example, if you set data to be automatically archived after 15 days, the total retention period must be at least 15 + 60 = 75 days.
    
    **Archive after days**
    
    Configure this parameter when you enable **Replication to Other Region**.
    
    By default, geo-redundant backup data is stored in the Standard tier. To reduce data protection costs, set a time to move long-term backup data from the Standard tier to the Archive tier.
    
    **Important**
    
    -   Data in the Archive tier is billed as [archive snapshot](/help/en/ecs/user-guide/archive-snapshots) storage. These fees are charged by the ECS service. Before a backup point for an entire ECS instance moves to the Archive tier, snapshots that fail to archive are billed as standard snapshots. Successfully archived snapshots are billed as [archive snapshots](/help/en/ecs/user-guide/archive-snapshots).
        
    -   A backup point must be stored in the Standard tier for at least 14 days before it can be archived. After a backup point is moved to the Archive tier, it must be stored there for at least 60 days. If you manually delete the backup point within 60 days, you must pay a fee for the remaining duration of the minimum retention period.
        
    -   If the value of **Archive after days** is greater than or equal to the value of **Remote Retention Period**, no backups are transferred to the Archive tier.
        
    
    -   **No**: Geo-redundant backup data remains in the Standard tier and is not moved to the Archive tier.
        
    -   **Specify Time**: The range is 14 to 65,535 days. To balance data access frequency, recovery needs, storage costs, and data lifecycle, a backup point must be stored in the Standard tier for at least 14 days before it is automatically archived. This policy is based on the higher probability of recovering recent data. It helps reduce your long-term storage costs and avoids high fees for data recovery from the Archive tier.
        
        For example, assume you select the **Specify Time** option and set the period to 30 days. If the **Remote Retention Period** is 210 days, the geo-redundant backup data is transferred to the Archive tier after 30 days. It is then stored in the Archive tier for another 180 days and then automatically deleted. The total retention period is 210 days.
        
    
    **Data Security**
    
    **Immutable Backup**
    
    The [immutable backup](/help/en/cloud-backup/user-guide/immutable-backup) feature cannot be disabled after it is enabled.
    
    -   After you enable this feature, backup points of ECS instances cannot be deleted until they automatically expire.
        
    -   Only backup points created in the next backup cycle are locked. Existing backup points are not locked.
        
    -   If you also enable **Replication to Other Region**, backup points replicated to another region are also locked.
        
    -   This feature does not affect the normal use of the corresponding cloud disks and snapshots, such as creating cloud disks and sharing snapshots.
        
    
    **Associate Resource Tag**
    
    A backup policy lets you associate multiple resources using tags.
    
    **Resource Type**: ECS instance.
    
    **Select Resource**: Associate all resources of the specified resource type, or associate specific resources using **Specify Tag**.
    
    **Resource Tag**: A resource is matched only if it has all the specified tags. Click **Associate Tags** to add multiple tags. Specify the tags for the ECS instances.
    
    **Note**
    
    -   Up to 30 resource tags can be added.
        
    -   If you associate an ECS instance with a backup policy using tags and set the resource type to ECS File, Cloud Backup automatically deploys an ECS File Backup client when the next backup job starts. Conversely, if an ECS instance's tags are no longer associated with any backup policy and all related backup jobs have expired, Cloud Backup automatically uninstalls the ECS File Backup client.
        
    -   Each time a backup policy runs, Cloud Backup checks for tag matches as follows:
        
        1.  Automatically associate new resources: If a data source that is not associated with the current backup policy matches the policy's tags, the policy automatically associates with that data source. Backups for the data source start at the next scheduled backup time and run periodically.
            
        2.  Automatically adjust associated resources: For data sources already associated with the policy, Cloud Backup checks if they still match the policy's tags. If a data source no longer matches, Cloud Backup automatically pauses its backups. After the backup cycle ends, Cloud Backup automatically dissociates the data source from the policy.
            
    
    **Detect Hit Resources**: Click **Detect Now** to see which resources match all the tags you set.
    
    To add resources of multiple resource types, click **Add Resource**.
    
    After you create a backup policy, view it in the policy list in the Policy Center.
    
    -   When you select **General Backup Policy**, the created backup policy is displayed as shown in the following figure.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8538994271/p824595.png)
        
    -   If you set Policy Type to **ECS Instance Backup Policy**, the created backup policy is displayed as shown in the following figure.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3246520371/p859210.png)
        
    

## **Associate a backup policy with data sources**

After creating a backup policy, associate it with data sources to enable automatic backups. This can be done in several ways:

-   Associate a backup policy when you create a backup plan for a data source.
    
-   In the backup policy list, [associate resources in batches by resource ID](#2e2c4292445rl).
    
-   Specify resource tags in a backup policy to automatically associate matching resources. For more information, see [Automatic resource association based on tags](/help/en/cloud-backup/user-guide/tag-based-automatic-resource-association-and-backup).
    

Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8024679271/p843588.png) to the left of a backup policy to view the associated data sources.

## Associate **resources** by resource ID in batches

After you create a backup policy, click **Associate Resource** in the **Actions** column for the target backup policy to associate other resources in batches.

For general backup policies:

-   If the resource type is **ECS File**, click the **ECS Instance** drop-down list to select multiple ECS instances.
    
    The specified ECS instances are automatically backed up according to this policy. By default, all files are backed up except for those in system directories. (For information about the system directories, see the console.)
    
-   When the resource type is **OSS Bucket**, click the **OSS Bucket** drop-down list to select multiple OSS Buckets.
    
    The specified OSS buckets (Standard and Infrequent Access) are automatically backed up according to this policy. By default, the entire bucket is backed up.
    
-   If you set Resource Type to **NAS**, click the **NAS Filesystem** drop-down list to select one or more NAS file systems.
    
    The specified NAS file systems (General-purpose) are automatically backed up according to this policy. By default, the entire file system is backed up.
    
-   If you set the resource type to **Tablestore**, click the **Tablestore Instance** drop-down list to select one or more Tablestore instances.
    
    The specified Tablestore instances are automatically backed up according to this policy. By default, the entire instance is backed up.
    

For ECS instance backup policies:

-   If you set Resource Type to **ECS Instance**, click the **ECS Instance** drop-down list to select one or more ECS instances.
    
    The specified ECS instances are automatically backed up according to this policy. By default, all cloud disks are backed up.
    

To add resources of multiple resource types, click **Associate Resource**.

## **Modify a backup policy**

After a backup policy is created, find the target policy in the policy list. In the **Actions** column, click **Edit Policy** to modify its settings. The modified settings take effect during the next backup task execution.

## **Run a backup policy immediately**

-   Run a backup job for all data sources that are associated with a backup policy.
    
    Find the target policy in the policy list, and in the **Actions** column, select ****⋮**** > **Execute Immediately**. This action immediately runs a backup job on all associated data sources. After the job runs successfully, go to the **Backup Jobs** page for each data source to view the progress.
    
-   Run a backup job for a specific data source.
    
    Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8538994271/p802756.png) to expand the backup policy details and switch to the corresponding data source in the left-side menu. In the **Actions** column of the target data source, select ****⋮**** > **Run Now**. This action immediately runs a backup job on the target data source.
    

## **Dissociate a backup policy**

To dissociate an existing backup policy from a data source, select the data source in the navigation pane on the left, click the **Backup Plans** tab, and find the target backup plan. In the **Actions** column, choose ****⋮**** > ****Delete Plan****. After you dissociate the policy, the backup plan is no longer run for the data source.

**Warning**

After you dissociate a backup policy from a data source, the backup plan for the data source is no longer run, and the data source is no longer protected. Existing backups are not affected. Proceed with caution.

## **Delete a backup policy**

After a backup policy is created, find the target policy in the policy list and select ****⋮**** > **Delete** in the **Actions** column to delete the policy. Existing backup data is not affected by this action.

**Warning**

-   You cannot delete a backup policy while it is associated with any data sources. To delete a policy, you must first dissociate all of its associated resources.
    
-   Once deleted, the policy is permanently removed and cannot be recovered. Proceed with caution.
    

## Dissociate **a resource tag**

To dissociate a resource tag from a backup policy, find the policy in the policy list, click **Edit Policy** in the **Actions** column, and then click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3582115671/p843435.png) icon for a resource tag. Dissociating a resource tag automatically removes its associated data sources from the policy. This change takes effect during the next policy run.
