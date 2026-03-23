ApsaraDB RDS for PostgreSQL provides the cloud disk encryption feature free of charge to ensure data security. If you use the cloud disk encryption feature for your ApsaraDB RDS for PostgreSQL instance, the snapshots that are created for the RDS instance are automatically encrypted, and you do not need to modify the configuration of your application.

## Background information

Cloud disk encryption protects data and eliminates the need to modify your business or application configurations. In addition, ApsaraDB RDS automatically applies cloud disk encryption to both the snapshots that are generated from the encrypted cloud disks and to the cloud disks that are created from those snapshots.

The cloud disk encryption feature is provided free of charge. You are not charged for the read and write operations that you perform on the encrypted cloud disks.

## Prerequisites

-   Your RDS instance meets the following requirements:
    
    -   The RDS instance runs RDS Basic Edition, RDS High-availability Edition, or RDS Cluster Edition.
        
    -   The RDS instance uses Enterprise SSDs (ESSDs) or Premium ESSDs.
        
    
    **Note**
    
    The cloud disk encryption feature is not supported for serverless RDS instances.
    
-   Key Management Service (KMS) is activated. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance).
    

## Usage notes

-   The cloud disk encryption feature does not interrupt your business, and you do not need to modify your application.
    
-   If you enable the cloud disk encryption feature for your RDS instance, the snapshots that are created for the RDS instance are automatically encrypted. If you use the encrypted snapshots to create an RDS instance that uses cloud disks, the cloud disk encryption feature is automatically enabled for the new RDS instance.
    
-   If your KMS instance is overdue, the cloud disks of your RDS instance cannot be decrypted. Make sure that your KMS instance is normal. For more information, see [What is Key Management Service?](/help/en/kms/key-management-service/support/what-is-key-management-service#concept-28935-zh)
    
-   If you disable or delete the KMS key that is used for cloud disk encryption, your RDS instance cannot run as expected. In this case, your RDS instance is locked and cannot be accessed. In addition, you cannot perform all O&M operations on the RDS instance. For example, you cannot perform backups, change instance specifications, clone or restart the RDS instance, perform a high-availability switchover, or modify instance parameters. To prevent these issues, we recommend that you use the service key that is managed by ApsaraDB RDS.
    
-   If you create an RDS instance that uses the general-purpose instance type and cloud disks, you can select only the service key that is managed by ApsaraDB RDS to enable the cloud disk encryption feature for the RDS instance. If you create an RDS instance that uses the dedicated instance type and cloud disks, you can select the service key that is managed by ApsaraDB RDS or a CMK to enable the cloud disk encryption feature for the RDS instance. For more information, see [\[Product changes/Feature changes\] The cloud disk encryption feature of ApsaraDB RDS is adjusted from January 15, 2024](/help/en/rds/apsaradb-rds-for-postgresql/announcements-change-of-cloud-disk-encryption-instance-creation-from-january-15-2024).
    
-   If you enable or disable the cloud disk encryption feature or modify the feature settings on the **Data Encryption** tab of the **Data Security** page, the RDS instance is restarted and a transient connection occurs. Make sure that your application is configured to automatically reconnect to your RDS instance.
    

## **Enable the cloud disk encryption feature**

### **Enable the cloud disk encryption feature for a new RDS instance**

If the prerequisites are met and an RDS instance is being created, you can select **Cloud Disk Encryption** to the right of the **Storage Type** parameter and then specify a **key**. For more information, see [Prerequisites](#section-uk2-9x0-88e). Default Service CMK is selected by default.

Create an RDS instance. For more information, see [Create an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance-1#DAS).

### **Enable the cloud disk encryption feature for an existing RDS instance**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Data Security**.
    
3.  On the **Data Encryption** tab, click **Enable Encryption**.
    
4.  In the dialog box that appears, select a key as needed and click **OK**.
    
    We recommend that you select Use Automatically Generated Key. The value specifies the service key that is automatically generated by Alibaba Cloud and managed by ApsaraDB RDS.
    
    If you enable the cloud disk encryption feature for an RDS instance, the status of the RDS instance changes. After the status of the RDS instance changes to **Running**, the cloud disk encryption feature is enabled.
    

**Note**

-   You can go to the **Basic Information** page of the RDS instance or the **Data Encryption** tab of the **Data Security** page to view the key that is used to enable the cloud disk encryption feature for an RDS instance.
    
-   In the KMS console, you can view all keys within the current account. To view the key managed by an Alibaba Cloud service, perform the following operation: In the left-side navigation page of the KMS console, click **Keys**. On the page that appears, click the **Default Key** tab and then find the key you want to view. If the value in the **Key Usage** column is **Service Key**, the key is managed by an Alibaba Cloud service. The alias of the service key managed by ApsaraDB RDS is `alias/acs/rds`. If you do not find the key, no service key has been created in the region. When you enable disk encryption and select Default Service CMK during instance creation in the ApsaraDB RDS console, the system automatically creates a service key.
    
-   The key specification of the default service CMK is `Aliyun_AES_256`. The key rotation feature is disabled by default. If you want to enable key rotation, purchase the key rotation feature in the KMS console. For more information, see [Configure key rotation](/help/en/kms/key-management-service/user-guide/configure-key-rotation).
    

## Change the service key that is used to enable the cloud disk encryption feature

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Data Security**.
    
3.  On the **Data Encryption** tab, click Replace Key.
    
4.  In the dialog box that appears, select a key as needed and click **OK**.
    

## Disable the cloud disk encryption feature

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Data Security**.
    
3.  On the **Data Encryption** tab, click **Replace Key**.
    
4.  In the dialog box that appears, select **Disable Key** and click **OK**.
    

## **Related APIs**

You can call the [ModifyDBInstanceConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstanceconfig-postgresql) operation to enable, replace, or disable the cloud disk encryption feature for an RDS instance.
