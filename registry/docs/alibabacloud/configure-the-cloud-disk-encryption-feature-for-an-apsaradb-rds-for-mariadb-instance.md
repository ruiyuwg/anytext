ApsaraDB RDS for MariaDB provides the cloud disk encryption feature free of charge. The feature encrypts data on each data disk of your ApsaraDB RDS for MariaDB instance based on block storage. This way, backup data cannot be decrypted even if the data is leaked. This ensures data security. If you use the cloud disk encryption feature for your RDS instance, the snapshots that are created for the RDS instance are automatically encrypted, and you do not need to modify the configuration of your application.

## Prerequisites

-   Your RDS instance is being created. The cloud disk encryption feature cannot be enabled after your RDS instance is created. For more information, see [Create an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-an-apsaradb-rds-for-mariadb-instance#concept-wzp-ncf-vdb).
    
-   Your RDS instance is created in standard mode.
    
-   A key is created for your RDS instance based on the MariaDB version of the RDS instance. Different MariaDB versions support different keys. For more information about how to create a key, see [Create a CMK](/help/en/kms/key-management-service/support/create-a-cmk-1#task-1939967).
    
    -   If you want to create an RDS instance that runs MariaDB 10.3 and enable the cloud disk encryption feature for the RDS instance, you can use only a customer master key (CMK).
        
    -   If you want to create an RDS instance that runs MariaDB 10.6 and enable the cloud disk encryption feature for the RDS instance, take note of the following items:
        
        -   If you select a general-purpose instance type for the RDS instance, you can use only the service key that is managed by ApsaraDB RDS.
            
        -   If you select a dedicated instance type for the RDS instance, you can use the service key that is managed by ApsaraDB RDS or a CMK.
            
        
        **Note**
        
        The service key is managed by ApsaraDB RDS and is permanently valid. When you enable the cloud disk encryption feature in the ApsaraDB RDS console, if you select Default Service CMK, the system automatically creates a service key.
        

## Billing rules

The cloud disk encryption feature is provided free of charge. You are not charged for the read and write operations that you perform on the encrypted disks.

## Usage notes

-   You cannot disable the cloud disk encryption feature after you enable the feature.
    
-   The cloud disk encryption feature does not interrupt your business, and you do not need to modify your application.
    
-   If you enable the cloud disk encryption feature for your RDS instance, the snapshots that are created for the RDS instance are automatically encrypted. If you use the encrypted snapshots to create an RDS instance that uses cloud disks, the cloud disk encryption feature is automatically enabled for the new RDS instance.
    
-   If your Alibaba Cloud Key Management Service (KMS) is overdue, the cloud disks of your RDS instance cannot be decrypted. Make sure that your KMS is normal. For more information, see [What is KMS?](/help/en/kms/key-management-service/support/what-is-key-management-service#concept-28935-zh)
    
-   If you disable or delete the KMS key that is used for cloud disk encryption, your RDS instance cannot run as expected. In this case, your RDS instance is locked and cannot be accessed. In addition, you cannot perform all O&M operations on the RDS instance. For example, you cannot perform backups, change instance specifications, clone or restart the RDS instance, perform a high-availability switchover, or modify instance parameters.
    
    **Note**
    
    To prevent these issues on RDS instances that run MariaDB 10.6, we recommend that you use the service key that is managed by ApsaraDB RDS.
    

## Enable the cloud disk encryption feature

When you create an RDS instance, configure the **Storage Type** parameter, select **Disk Encryption**, and then configure the Key parameter. For more information, see [Create an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-an-apsaradb-rds-for-mariadb-instance#concept-wzp-ncf-vdb).

**Note**

-   For more information about how to create a key, see [Create a CMK](/help/en/kms/key-management-service/support/create-a-cmk-1#task-1939967).
    
-   After the RDS instance is created, you can go to the **Basic Information** page of the instance and view the key that is used for disk encryption.
    
-   By default, the service key managed by ApsaraDB RDS is used for cloud disk encryption for RDS instances that run MariaDB 10.6. The key specification of the service key managed by ApsaraDB RDS is `Aliyun_AES_256`. The key rotation feature is disabled by default. If you want to enable the key rotation feature, purchase the key rotation feature in the KMS console. For more information, see [Configure key rotation](/help/en/kms/key-management-service/user-guide/configure-key-rotation).
    
-   In the KMS console, you can view all keys within the current account. In the left-side navigation page of the KMS console, click **Keys**. On the page that appears, click the **Default Key** tab and find the key that you want to view. If the value in the **Key Usage** column is **Service Key**, the key is a service key managed by an Alibaba Cloud service. The alias of the service key managed by ApsaraDB RDS is `alias/acs/rds`. If you do not find the key, no service key is created in the region. If you enable the cloud disk encryption feature and select Default Service CMK during the instance creation in the ApsaraDB RDS console, the system automatically creates a service key.
    

## Check whether the cloud disk encryption feature is enabled for an RDS instance

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Basic Information** section, check whether the **AccessKey Pair** parameter exists. If the parameter exists, the cloud disk encryption feature is enabled for the RDS instance.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0808827071/p726379.png)
    

## Related operations

**Operation**

**Description**

[CreateDBInstance](/help/en/rds/apsaradb-rds-for-mariadb/api-rds-2014-08-15-createdbinstance-mariadb)

Creates an instance.
