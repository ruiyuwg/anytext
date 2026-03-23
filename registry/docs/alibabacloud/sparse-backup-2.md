In addition to regular backups, RDS for MySQL supports sparse backup. This feature lets you set backup policies with more flexibility and retain a minimum number of backup sets. Sparse backup reduces recovery time and lowers backup storage costs. This topic describes how to configure this feature.

## **Prerequisites**

**Important**

-   RDS for MySQL 5.7 instances on the Basic Edition do not support sparse backup.
    
-   Instances with [Cold Archive](/help/en/oss/user-guide/overview-53/#section-lfu-pgj-2yn) enabled do not support sparse backup.
    

-   If you are using the RDS backup service for the first time, you must use your Alibaba Cloud account to authorize the service-linked role for Data Disaster Recovery (AliyunServiceRoleForDBS). For more information, see [Authorize the service-linked role for Data Disaster Recovery](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs).
    
-   You have switched the backup policy page to the Premium Edition. For more information, see [Switch to the advanced backup policy](#0b7c4450bewz8).
    
    **Note**
    
    You must switch to the premium backup policy page before you can [set a backup policy](#5f064780be0q5) to implement **sparse backup**.
    

## Differences between regular and sparse backups

**Item**

**Regular backup**

**Sparse backup**

**Backup set retention policy**

Backup sets are retained based on the configured data retention policy. You must retain 2 to 7 backup sets per week.

For example, you can set a policy to retain one backup set on Monday and one on Sunday of each week for 365 days.

You can set a more flexible backup policy and retain the minimum number of backup sets.

For example, you can retain one backup set on Monday and one on Sunday of each week for 7 days, and retain one backup set on the last day of each month for long-term retention.

**Storage cost**

Regular backups generate many backup sets, which results in high backup storage costs.

Sparse backup lets you set a more flexible backup policy to retain the minimum number of backup sets. This results in low backup storage costs.

## **Precautions**

-   A sparse backup policy takes effect in about 10 to 15 minutes after it is configured.
    
-   The first backup policy for the instance is fixed to **Every Week**, must be configured for backups on at least two days, and cannot be deleted.
    
-   If multiple sparse backup policies are scheduled for the same day, the system generates only one backup set and retains it for the longest specified retention period.
    
-   After you [delete](#0109c485bfuma) a sparse backup policy, the backup sets that have been generated are still retained for their original retention period.
    
-   After you configure a sparse backup policy, if a backup set fails to be generated or dumped within the backup window on a specific day, the backup for that day is skipped. No extra backup set is retained. Examples of failures include a failed backup, a locked instance, or a dump that is not completed before the level-1 backup expires.
    
    For example, you set a policy to perform a backup on the first day of each month and retain the backup set for 30 days. If the backup fails within the backup window on December 1, no backup set is retained for December 1.
    

## **Billing**

You are not charged for backups if the total size of your backup sets does not exceed your free quota. If the free quota is exceeded, you are charged for backup storage costs. For more information about the free quota and billing, see [Backup storage costs](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance).

## Switch to the advanced backup policy

You must switch to the advanced backup policy page to set a backup policy that implements sparse backup. If you have already switched, you can skip this step.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, click the **Backup Strategy** tab. Then, click Switch to Advanced Backup Policy.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5131462171/p581059.png)
    
    **Important**
    
    If the **Switch to Advanced Backup Policy** button is not displayed on the page, submit a ticket to request access. After your request is approved, refresh the page and proceed with the following steps.
    
4.  In the dialog box that appears, select **Understood** and click **OK**.
    
    **Important**
    
    The backup policy page of the instance is switched to the premium version. You cannot switch back to the basic version.
    
    The **Backup Policy** page appears as shown in the following figure. This indicates that you have switched to the advanced backup policy page. You can now [set a sparse backup policy](#5f064780be0q5) on this page.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5131462171/p582133.png)
    

## Set a sparse backup policy

You can manually configure one or more backup policies to retain the minimum number of backup sets. This is known as sparse backup.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, click the **Backup Strategy** tab. Then, click the **circled number** between **MySQL** and **Level-1 Backup**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5066683171/p713086.png)
    
4.  In the dialog box that appears, click **Add Backup Policy**, configure the sparse backup policy, and then click **OK**.
    
    **Backup Cycle**
    
    **Backup Time**
    
    **Retention Period**
    
    **Every Week**
    
    You can select one or more days of the week.
    
    You can set a different retention period for each policy. The retention period can range from 7 to 7,300 days.
    
    **Note**
    
    You can also select **Long-term Retention** for a backup policy to retain the backup sets for a long term.
    
    **Every Month**
    
    You can select one or more days of the month, or select **Last Day Of Each Month**.
    
    **Every Year**
    
    You can select a specific day of the year. For example, you can select January 1.
    
    **Note**
    
    -   RDS for MySQL 5.6 and 5.7 instances of the high-availability series that use high-performance local disks support **High-frequency Incremental Backup**. You can enable and configure this feature. In addition to the full backups that are performed at the specified time points, the system preferentially performs physical **incremental** backups at the specified **High-frequency Incremental Backup Frequency**. For more information about this feature, see [Use the high-frequency physical backup feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-high-frequency-physical-backup-feature-of-an-apsaradb-rds-for-mysql-instance).
        
        -   The retention period for high-frequency incremental backup sets ranges from 7 to 30 days. This retention period must be shorter than or equal to the retention period specified in the backup policy.
            
        -   If a full backup set expires but the incremental backup sets that are based on it have not expired, the full backup set is not automatically deleted. The full backup set and all its subsequent incremental backup sets are deleted together only after all the incremental backup sets expire.
            
    -   The first backup policy for the instance is fixed to **Every Week**, must be configured for backups on at least two days, and cannot be deleted.
        
    -   For information about other parameter settings, see [Automatic backup](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance) and [Backup encryption](/help/en/rds/apsaradb-rds-for-mysql/backup-encryption).
        
    
5.  In the lower-left corner of the **Backup Policy** tab, click **Save**.
    

### **Configuration example**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5131462171/p747678.png)

The following list describes the parameter settings in the preceding figure:

-   ①: A backup is performed every day from Monday to Sunday. The backup sets are retained for 7 days.
    
-   ②: A backup is performed every Monday. The backup sets are retained for 30 days.
    
-   ③: A backup is performed on the first and last day of each month. The backup sets are retained for 365 days.
    
-   ④: A backup is performed on January 1 of each year. The backup sets are retained long-term.
    

## **What to do next**

### View the backup policy

On the **Backup Policy** page, you can move the mouse pointer over the **circled number** to view the configured backup policies.

**Note**

The number in the circle indicates the number of configured backup policies.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5131462171/p582201.png)

### Delete a backup policy

On the **Level-1 Backup** page, you can delete the backup policies that you added.

**Note**

The first backup policy for the instance is fixed to **Every Week**, must be configured for backups on at least two days, and cannot be deleted.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5131462171/p581390.png)
