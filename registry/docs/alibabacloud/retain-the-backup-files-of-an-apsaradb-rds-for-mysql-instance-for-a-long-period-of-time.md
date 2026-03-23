This topic describes how to retain the backup files of an ApsaraDB RDS for MySQL instance for a long period. Long-term retention helps you restore data when needed and protects your data assets.

## Background information

When you use a database, you may encounter the following scenarios:

-   Your data is accidentally deleted, but only backups from the last seven days are available. As a result, you cannot restore older data.
    
-   Your RDS instance is accidentally released or is released due to an overdue payment. Because the instance has been released for a long time, both your data and backups are unrecoverable.
    
-   You want to release your RDS instance but retain its backups for future use.
    

## Method 1: Increase the backup retention period

You can increase the number of days that backup files are retained to restore older data when needed.

**Note**

This operation increases your [backup size](/help/en/rds/apsaradb-rds-for-mysql/view-and-manage-the-size-of-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-2045428) and may increase your [backup storage costs](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance#concept-ipg-lm4-ydb).

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the navigation pane on the left, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, click the **Backup Strategy** tab. In the **Basic backup** section, click **Edit**.
    
4.  In the dialog box that appears, increase the data backup or log backup retention period. For example, you can change the default value from 7 days to 30 days.
    
    **Note**
    
    -   The log backup retention period cannot exceed the data backup retention period.
        
    -   If your instance uses **Premium Local SSDs**, select **Permanently retained before instance release**. After you select this option, you do not need to set a data backup retention period. All data backups are retained until the instance is released. For more information, see [Automatic backup](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance).
        
    
5.  Click **OK**.
    

## Method 2: Configure the backup retention policy after instance release

Typically, when an RDS instance expires or has an overdue payment, both the instance and its backups are [retained for a period of time](/help/en/rds/product-overview/overdue-payments#concept-drz-ml2-vdb). After this period elapses, the instance and its backups are released and deleted. To resolve this issue, you can configure a backup retention policy for your RDS instance. Once configured, the RDS instance's backup files are retained for an extended period, even if the RDS instance is unexpectedly released. You can download the backup files from the ApsaraDB RDS console to your computer or restore the backup files to a new RDS instance to prevent data loss. This long-term retention of backup files ensures comprehensive data security.

### **Limits**

This feature is not supported for RDS for MySQL instances that use Premium Local SSDs and run on RDS Enterprise Edition.

### Billing rules

After your RDS for MySQL instance is deleted, you are charged for backup storage. **Backup storage is free for seven days after the instance is released. After seven days, you are charged based on the pay-as-you-go billing method.** The unit prices are as follows:

Backup storage pricing for deleted instances with high-performance local disks

**Billing site**

**Storage region**

**Unit price (USD per GB-day)**

Public cloud

China (Hangzhou), China (Beijing), China (Shanghai), China (Shenzhen), China (Qingdao), China (Zhangjiakou), China (Hohhot), China (Chengdu), China (Heyuan), China (Ulanqab), and China (Guangzhou)

0.00058

China (Hong Kong), Singapore, US (Silicon Valley), Germany (Frankfurt), Indonesia (Jakarta), Philippines (Manila), and Thailand (Bangkok)

0.00067

Japan (Tokyo) and South Korea (Seoul)

0.0007

US (Virginia)

0.00062

Malaysia (Kuala Lumpur)

0.00064

UK (London)

0.00065

UAE (Dubai)

0.00072

Unit price for backup storage of deleted RDS for MySQL instances that use cloud disks

**Storage region**

**Unit price** **(USD per GB-day)**

China (Beijing), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Chengdu), China (Qingdao), China (Guangzhou), and China (Zhangjiakou)

0.0009375

China (Hong Kong), US (Silicon Valley), US (Virginia), Singapore, Japan (Tokyo), Germany (Frankfurt), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), UK (London), South Korea (Seoul), and Thailand (Bangkok)

0.001125

**Note**

You cannot purchase storage plans to offset backup storage fees for deleted RDS for MySQL instances.

### Usage notes

-   For recently deleted (released) RDS for MySQL instances, backup files may take some time to appear on the **Backups** > **Backup for Deleted Instances** page. Typically, the backups appear within 30 minutes after the background instance release task is complete. Please wait.
    
-   If your account remains overdue for more than 30 days, Alibaba Cloud stops the backup retention service for deleted instances and permanently deletes related backups.
    

### Procedure

**Important**

-   For RDS for MySQL **cloud disk instances** purchased on or after February 1, 2024, the default **backup retention policy for released instances** is **Lastest**.
    
    Storage is free for 7 days after the instance is released. After 7 days, backup storage costs are incurred. To avoid these charges, set the backup retention policy to **Do Not Retain**.
    
-   For new RDS for MySQL **instances with Premium Local SSDs**, the default **backup retention policy for released instances** is **Do Not Retain**.
    

Select a configuration method based on the current state of your instance.

#### **Method 1: Configure the policy when you purchase an instance**

This method applies only to new **subscription** RDS for MySQL **instances with Premium Local SSDs**. You can set the **Backup Retention After Release** parameter on the purchase page.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3742343271/p823112.png)

#### **Method 2: Configure the policy on the instance details page (before release)**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the navigation pane on the left, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, click the **Backup Strategy** tab. In the **Basic Backup** section, click **Edit**.
    
4.  In the dialog box that appears, set the **Retain Backup Files After Instance Release** parameter and click **OK**.
    
    -   **Lastest** or **All**: After the instance is released, completed backups are retained based on your selection.
        
    -   **Do Not Retain**: After the instance is released, no backups are retained. Data cannot be recovered. Use this option with caution.
        
    
    **Important**
    
    -   After the instance is released, the system retains the backup files for the **long term** based on the configured policy. You cannot specify a retention period.
        
    -   Retained backup files are stored free of charge for **7 days. After 7 days, you are charged**. For more information about pricing, see [Billing](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances#66f7706b9aaeo).
        
    -   For more information about how to use backup files retained after an instance is released, see [Use backup files from a released instance](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances#54ffe35eedumm).
        
    

#### **Method 3: Configure the policy on the Backup Management page (after release)**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Backups**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  On the **Backups for Deleted Instances** tab, find the target instance and click **Settings** in the **Retention Policy** column.
    
3.  In the dialog box that appears, set the **Data Backup Retention Policy** and click **OK**.
    
    -   **Lastest** or **All**: After the instance is released, completed backups are retained based on your selection.
        
    -   **Do Not Retain**: After the instance is released, no backups are retained. Data cannot be recovered. Use this option with caution.
        
    
    **Important**
    
    -   After the instance is released, the system retains the backup files for the **long term** based on the configured policy. You cannot specify a retention period.
        
    -   Retained backup files are stored free of charge for **7 days. After 7 days, you are charged**. For more information about pricing, see [Billing](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances#66f7706b9aaeo).
        
    -   For more information about how to use backup files retained after an instance is released, see [Use backup files from a released instance](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances#54ffe35eedumm).
        
    

**Note**

For more information, see [Configure the backup retention policy after instance release](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances).

## Method 3: Download a backup

You can also download backups to your local machine or to an [Elastic Compute Service (ECS)](/help/en/ecs/user-guide/what-is-ecs#EcsWelcome) instance for long-term storage. For more information, see [Download backups](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#section-lxw-cn4-ydb).

## FAQ

What is the backup retention policy for released instances and how do I use it?

The backup retention policy for released RDS for MySQL instances is a key feature that helps you protect and recover data. After you [enable this feature](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances#a2dece28276wi), you can retrieve important data from the **Backups** page in the RDS console, even if an RDS for MySQL instance is accidentally deleted or manually released. You can then [download the backups to a local device or restore them to a new RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances#54ffe35eedumm).

My RDS for MySQL instance has been released. Why am I still being charged for backups?

Your RDS for MySQL instance has been released. However, if you [enabled the backup retention policy for released instances](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances#a2dece28276wi) before you released the instance, the backup files are retained on the **Backups** page in the RDS console. Backup storage is free for seven days after the instance is released. After this period, you will be charged for the storage.

Backup storage costs are incurred if the retention period exceeds the free 7-day period. These costs are based on the actual storage amount and the region. For more information about billing, see [Billing details](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances#66f7706b9aaeo). If you do not need the backups, you can go to the **Backups for Deleted Instances** tab and set the retention policy for the destination instance to **Do Not Retain**. This prevents future backup storage costs.

I never set a backup retention policy for released RDS for MySQL instances. Why am I being billed for this feature after my instance was released?

For RDS for MySQL **cloud disk instances** purchased on or after February 1, 2024, the backup retention policy for released instances is set to **Retain the last backup** by **default**. Because this policy is applied at instance creation, the system automatically retains the last backup of the instance after it is released. You are charged for these backups after the free 7-day retention period expires.

**Note**

To avoid misunderstandings or unnecessary costs, regularly check the backup policy settings for your instance and adjust them as needed. If you no longer need these backups, you can [manually delete the backups of the released instance](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances#59462523207ln) to save on storage costs.

How do I delete the **backup files of a released instance**?

If you no longer need the retained backup files and want to avoid backup storage costs, you can [delete the backup files of a released instance](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances#59462523207ln).

My RDS for MySQL instance has been released. Why are the retained backup sets not yet displayed on the [Backups of Deleted Instances](https://rds.console.alibabacloud.com/backupManage/cn-hangzhou/delInsBack) page?

After an RDS for MySQL instance is released, the display of its retained backup files on the **Backups** > **Backups for Deleted Instances** page may be delayed. The files are typically displayed within 30 minutes after the instance release task is complete.

I plan to release my RDS for MySQL instance after my business ends, but I want to restore data from backups later. How do I back up my RDS data to prevent data loss?

-   Method 1: Download existing RDS backup sets from the ApsaraDB RDS console. Restore these backups to a self-managed MySQL database. Later, you can restore the backup data from the self-managed MySQL database to the required RDS for MySQL instance. For more information, see [Download backups](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance), [Restore RDS for MySQL physical backup files to a self-managed MySQL database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-physical-backup-file-to-a-self-managed-mysql-database), and [Restore backups from a self-managed MySQL 5.7 or 8.0 database to RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-a-self-managed-mysql-instance-to-an-apsaradb-rds-for-mysql-instance). To download the most recent backup data, you can perform a [manual backup](/help/en/rds/apsaradb-rds-for-mysql/manually-back-up-an-apsaradb-rds-for-mysql-instance).
    
-   Method 2: Before you release your instance, configure the backup retention policy after instance release. After you configure the policy, your backups remain available even if the instance is released. For more information, see [Configure the backup retention policy after instance release](#section-pwm-nbk-ii5).
    
-   For more options, see [Overview of backup methods](/help/en/doc-detail/281778.html) and [Overview of data restoration methods](/help/en/doc-detail/157519.html).
