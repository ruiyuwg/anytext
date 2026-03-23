Tair (Redis OSS-compatible) provides the transparent data encryption (TDE) feature. This feature lets you encrypt and decrypt Redis Database (RDB) files. You can enable TDE in the console to allow the system to encrypt and decrypt RDB files, improving data security and compliance.

## Prerequisites

-   The instance is a Tair (Enterprise Edition) memory-optimized instance.
    
-   The instance is deployed in classic (local disk) mode.
    
-   The minor version of the instance is 1.7.1 or later. For information about how to update the minor version, see [Update the minor version of an instance](/help/en/redis/user-guide/update-the-minor-version).
    

## Background information

Tair (Redis OSS-compatible) TDE feature encrypts RDB data files before they are written to disks and decrypts them when they are read from disks to memory. TDE does not increase storage space usage and does not require changes to client applications.

## Impacts

You cannot disable TDE after it is enabled. You must evaluate the impacts on your business before you enable TDE. Take note of the following impacts:

-   After TDE is enabled for an instance, the instance cannot be migrated across zones. For more information, see [Migrate an instance across zones](/help/en/redis/user-guide/migrate-an-instance-across-zones#concept-kpz-c5v-4gb).
    
-   After TDE is enabled for an instance, the offline key analysis feature is not supported for the instance. For more information, see [Offline key analysis](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb).
    
-   After TDE is enabled for an instance, the instance cannot be converted into a child instance of a distributed instance. For more information, see [Create a distributed instance](/help/en/redis/user-guide/create-a-distributed-instance#section-evg-7x6-t3b).
    
-   After TDE is enabled for an instance, the instance cannot be migrated or synchronized by using [Data Transmission Service (DTS)](/help/en/dts/product-overview/what-is-dts#concept-26592-zh).
    

## Precautions

-   TDE can be enabled for an instance but not for a key or a database.
    
-   TDE encrypts data files written to disks (RDB backup files, such as dump.rdb).
    
-   The keys used by TDE are generated and managed by [Key Management Service (KMS)](/help/en/kms/key-management-service/support/what-is-key-management-service#concept-28935-zh). Tair (Redis OSS-compatible) does not provide keys or certificates required for encryption.
    
-   Instances for which TDE is enabled cannot be restored from the [recycle bin](/help/en/redis/user-guide/manage-instances-in-the-recycle-bin#concept-l4n-pl4-m2b).
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance is deployed. Then, find the instance and click its ID.
    
2.  In the navigation pane on the left, click **TDE Settings**.
    
3.  Turn on the switch next to **TDE Status**.
    
    **Note**
    
    If an earlier minor version is used, the switch is dimmed. For information about how to view and update the minor version of an instance, see [Update the minor version and proxy version](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb).
    
4.  In the dialog box that appears, select **Use Automatically Generated Key** or **Use Custom Key**, and then click **OK**.
    
    Figure 2. Select a key type for enabling TDE![开启TDE选择密钥](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2083611361/p303792.png)
    
    **Note**
    
    -   The first time you enable TDE for an instance within your Alibaba Cloud account, follow the instructions on the page to assign the **AliyunRdsInstanceEncryptionDefaultRole** role. After the authorization is complete, you can use the related key services.
        
    -   For information about how to create a custom key, see [Create a key](/help/en/kms/key-management-service/support/create-a-cmk-1#task-1939967).
        
    
    After the setting is complete, the instance status changes to **Modifying TDE**. When the instance status changes to **In operation**, the operation is complete.
    

## Related API operations

**API operation**

**Description**

[ModifyInstanceTDE](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancetde-redis)

Enables TDE for an instance. You can use automatically generated keys or existing custom keys.

[DescribeInstanceTDEStatus](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstancetdestatus-redis)

Queries whether TDE is enabled for an instance.

[DescribeEncryptionKeyList](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeencryptionkeylist-redis)

Queries the custom keys that are available for an instance to use TDE.

[DescribeEncryptionKey](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeencryptionkey-redis)

Queries the details of a custom key that is available for an instance to use TDE.

[CheckCloudResourceAuthorized](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-checkcloudresourceauthorized-redis)

Queries whether the instance is authorized to use KMS.

## FAQ

-   How do I decrypt an encrypted RDB data file that I have downloaded?
    
    Currently, you cannot decrypt it. You can restore the backup set to a new instance. After the restoration is complete, the data is automatically decrypted.
    
-   Why is the data read by clients still displayed in plaintext?
    
    Only data files written to disks (RDB backup files) are encrypted. When querying data, the system reads from memory (which is not encrypted), so the data is displayed in plaintext.
