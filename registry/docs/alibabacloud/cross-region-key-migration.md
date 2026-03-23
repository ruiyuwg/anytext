Upgrades and improvements are required for specific regions and zones to provide efficient and high-quality services. If you receive migration notifications, you must migrate Key Management Service (KMS) keys and secrets at the earliest opportunity. This topic describes how to migrate keys across regions.

## **Keys used for data encryption in Alibaba Cloud services**

Migrate data of an Alibaba Cloud service by using a data migration solution of the service. For more information, see the official documentation of the Alibaba Cloud service.

## **Keys used for data encryption in self-managed applications**

**Important**

You must disable the key rotation feature before migration. For more information, see [Configure key rotation](/help/en/kms/key-management-service/user-guide/configure-key-rotation).

### **Keys in the software key management instances**

Purchase a software key management instance in the destination region. Then, migrate keys to the destination region by using backup and restoration. In the following example, keys in KMS Instance A in Region A are migrated to KMS Instance B in Region B.

1.  Create and enable KMS Instance B in Region B. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance).
    
2.  Back up the data of KMS Instance A in Region A.
    
    **Note**
    
    KMS provides one backup instance free of charge in each region. You can back up the data of one software key management instance. If you want to back up multiple instances, you must purchase additional backup instances.
    
    1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Security Operations** > **Disaster Recovery** > **Backups**.
        
    2.  On the **Backups** page, find the backup instance that you want to enable and click **Enable** in the **Actions** column.
        
    3.  In the **Enable Backup** panel, select KMS Instance A for the **Source Instance** parameter, enter a custom alias in the **Backup Alias** field, and then click **OK**.
        
        **Note**
        
        It takes about 5 minutes to back up data. The more resources in the instance, the longer the backup time required.
        
3.  Restore the data of KMS Instance A to KMS Instance B.
    
    -   Data restoration in the Chinese mainland
        
        1.  In the upper part of the page, select Region A. Navigate to the **Backups** page, find the desired backup instance, and then click **Details** in the **Actions** column.
            
        2.  Select **Fully Backed up Keys** for the **Data Type** parameter, select the keys that you want to migrate and click **Batch Restore** in the lower part of the page.
            
        3.  In the **Restore Data** panel, select KMS Instance B in Region B and click **OK**.
            
    -   Cross-border data restoration
        
        1.  In the upper part of the page, select Region A. Navigate to the **Backups** page, find the desired backup instance, and then click **Download** in the **Actions** column.
            
        2.  Set the **Backup Date** parameter and click **OK**. Click the icon next to **Encryption Key** to save the encryption key to your computer. Click Download next to **Backup Data** to download the backup data.
            
        3.  In the upper part of the page, select Region B. Navigate to the **Backups** page and click **Upload Backup**.
            
        4.  Enter the information required for **Decryption Key** and **Backup Name** (backup alias you defined). Click **OK**. In the dialog box that appears, select the backup data file of KMS Instance A to upload.
            
        5.  In the backup list, find the backup file that you uploaded and click **View Data** in the **Actions** column.
            
        6.  On the **Fully Backed up Keys**, **Incrementally Backed up Keys**, or **Rotated Keys** tab, click **Restore Data** in the **Actions** column, select the instance to which you want to restore the data for the **Destination Instance** parameter, and then click **OK**.
            
4.  Modify your application to call the KMS instance in Region B.
    
    **Operation**
    
    **Description**
    
    Management operations
    
    You can use Alibaba Cloud SDK to perform such operations. You need to change the endpoint to the KMS endpoint in Region B. For more information about KMS endpoints, see [Regions and endpoints](/help/en/kms/key-management-service/product-overview/supported-regions).
    
    Cryptographic operations
    
    You can use KMS Instance SDK to perform such operations. To achieve this, you need to replace some parameter settings in the code, such as the content of the client key file and the CA certificate of a KMS instance.
    
    1.  Create an application access point (AAP) in Region B for access to KMS Instance B. For more information, see [Create an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap).
        
        **Note**
        
        After you create the AAP, save the following content:
        
        -   Application Access Secret(ClientKeyContent): By default, Application Access Secret(ClientKeyContent) is saved in a file named in the `clientKey_****.json` format.
            
        -   Password: By default, Password is saved in a file named in the `clientKey_****_Password.txt` format.
            
        -   CA certificate of the KMS instance: By default, the CA certificate is downloaded to a file named in the PrivateKmsCA\_kst-\*\*\*\*\*\*.pem format.
            
        
    2.  Modify the code.
        
        Replace parameter settings for initializing your KMS Instance SDK with KMS Instance B and the content of the newly created client key file. For example, if you use [KMS instance SDK (Java)](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk-for-java/), you need to modify the following settings when you create a client:
        
        -   `clientKeyFilePath` or `clientKeyContent`: Replace its value with the path or content of the new client key file.
            
        -   `clientKeyPass`: Replace its value with the new password in the newly created client key file.
            
        -   `endpoint`: Replace it with the domain name of KMS Instance B in the `kst-hzz659dfeee864za2****.cryptoservice.kms.aliyuncs.com` format.
            
        -   `caCertPath` or `caCert`: Replace its value with the path or content of the CA certificate of KMS Instance B.
            
    

### **Keys in KMS instances of the hardware key management type and keys outside KMS instances**

KMS does not support migration of such keys. To eliminate the dependency on keys in the source region, use the following solutions:

-   Keys used for encryption and decryption (ENCRYPT/DECRYPT)
    
    The solution is suitable for symmetric keys and asymmetric keys.
    
    1.  Decrypt all data ciphertext and data key ciphertext that are generated by using a key in the source region.
        
    2.  Migrate the decrypted data and data key plaintext to the destination region.
        
    3.  Purchase a KMS instance in the destination region and use a key in the KMS instance to encrypt data.
        
        1.  Purchase and enable a KMS instance. For more information, see [Instance selection](/help/en/kms/key-management-service/product-overview/service-selection) and [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance).
            
        2.  Use the KMS instance to encrypt the data in self-managed applications. For more information, see [Use a key to encrypt and decrypt data](/help/en/kms/key-management-service/use-cases/use-a-kms-cmk-to-encrypt-and-decrypt-data-online) and [Use envelope encryption](/help/en/kms/key-management-service/use-cases/use-envelope-encryption).
            
    4.  Disable the key in the source region and then schedule key deletion after you confirm that the key is no longer in use. This operation is recommended. For more information, see [Disable a key](/help/en/kms/key-management-service/user-guide/manage-keys-2#section-505-ot2-bnd) and [Schedule deletion of a key](/help/en/kms/key-management-service/user-guide/manage-keys-2#section-khj-kzx-r49).
        
-   Keys used for signing and verification (SIGN/VERIFY)
    
    1.  Download the public key of the corresponding customer master key (CMK) in the source region and save the public key until the public key is no longer used for signing and verification.
        
        [Log on to the KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base) and obtain the public key.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8716202071/p739440.png)
        
    2.  Purchase and enable a KMS instance in the destination region. For more information, see [Instance selection](/help/en/kms/key-management-service/product-overview/service-selection) and [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance).
        
    3.  Create a key in the KMS instance. For more information, see [Software-protected key](/help/en/kms/key-management-service/user-guide/manage-keys-2#b73f279134wka) or [Hardware-protected key](/help/en/kms/key-management-service/user-guide/manage-keys-2#46e9b8103403y).
        
    4.  Use KMS Instance SDK for signing and verification. For more information, see [KMS Instance SDK](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk-for-java/).
        
    5.  Disable the key in the source region and then schedule key deletion after you confirm that the key is no longer in use. This operation is recommended. For more information, see [Disable a key](/help/en/kms/key-management-service/user-guide/manage-keys-2#section-505-ot2-bnd) and [Schedule deletion of a key](/help/en/kms/key-management-service/user-guide/manage-keys-2#section-khj-kzx-r49).
        

## **What are the keys outside KMS instances?**

[Log on to the KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select the desired region. Navigate to the **Keys** page and click the **Default Key** tab. The keys displayed on this tab are keys outside KMS instances.

**Note**

If you use KMS 3.0, the Default Key tab displays one CMK and multiple service keys. If you use an old version of KMS, the **Default Key** tab displays all your CMKs, as shown in the red box in the following figure. You can only view these CMKs in KMS 3.0. If you want to modify the properties of a CMK, go to the [old version of the KMS console](https://yundun.console.alibabacloud.com/?p=kms).

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7030532071/p743374.png)
