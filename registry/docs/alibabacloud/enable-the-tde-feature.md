Lindorm supports Transparent Data Encryption (TDE). This feature uses a key hierarchy to encrypt data files so that all data stored in the file system exists as ciphertext. You can enable TDE in the console to encrypt instance data and improve data security. This topic describes how to enable TDE.

## Prerequisites

-   The Lindorm instance is deployed in a **single zone**. For more information, see [Create an instance](/help/en/lindorm/getting-started/create-an-instance#task-2045184).
    
-   Key Management Service (KMS) is enabled. For more information, see [Enable Key Management Service](/help/en/kms/key-management-service/support/purchase-a-dedicated-kms-instance#task-1962255).
    
-   You have granted Lindorm permissions to access KMS using a service-linked role. For more information, see [Lindorm service-linked role](/help/en/lindorm/security-and-compliance/service-linked-roles-of-lindorm#task-2101828).
    

## Background information

The TDE feature in Lindorm supports the AES and SMS4 algorithms. The keys used for TDE are generated and managed by Key Management Service (KMS). KMS uses envelope encryption, where a master key encrypts a data key, and the data key then encrypts your data. During decryption, the data key ciphertext is read first. The master key then decrypts the data key ciphertext to obtain the plaintext data key, which is used to decrypt the data. The master key provided by KMS is created using an API call. You can also encrypt the master key with a password to enhance its security.

## Notes

-   Enabling TDE restarts the instance once and causes a transient disconnection. We recommend that you perform this operation during off-peak hours and ensure that your application has a reconnection mechanism.
    
-   The instance restart and transient disconnection do not cause data loss.
    
-   The TDE feature cannot be disabled after it is enabled.
    

## Procedure

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com).
    
2.  Click the target instance ID to go to the **Instances** page.
    
3.  In the navigation pane on the left, choose **Wide Table Engine** > **Data Security**. The **Transparent Data Encryption (TDE)** page is displayed by default.
    
4.  Turn on the **Current Status:** switch.
    
5.  In the **Enable TDE** dialog box, select **Use Automatically Generated Key** or **Use Custom Key**.
    
    ![Enable TDE dialog box](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1541726761/p300106.png)
    
    -   If you select **Use Automatically Generated Key**, click **OK** to enable TDE.
        
    -   If you select **Use Custom Key**, select a KMS-generated key from the **Set Key:** list, and click **OK** to enable TDE.
        
        **Note**
        
        To use your own imported key, click **Manage Key**. In the KMS console, create a key and import your key material. For more information, see [Create a key](/help/en/kms/key-management-service/support/create-a-cmk#task-1939967).
        
    

## What to do next

After you enable TDE, you must connect to the instance using Lindorm-cli and perform Data Definition Language (DDL) operations on Lindorm tables to encrypt the data. For more information about how to connect to the instance, see [Connect to and use LindormTable using Lindorm-cli](/help/en/lindorm/user-guide/use-lindorm-cli-to-connect-to-and-use-lindormtable#concept-2088134). The required operations are as follows:

-   For new tables, add the `WITH (FILEVERSION = 5, ENCRYPTION = AES)` statement when you create the table.
    
    ```
    CREATE table testsql (p1 varchar, p2 varchar, p3 bigint, c1 varchar, c2 double, constraint primary key (p1, p2, p3 desc)) WITH (FILEVERSION = 5, ENCRYPTION = AES);
    ```
    
-   For existing tables, use the `ALTER` keyword and the `WITH (FILEVERSION = 5, ENCRYPTION = SMS4)` statement.
    
    ```
    ALTER table testsql WITH (FILEVERSION = 5, ENCRYPTION = SMS4) ;
    ```
    

**Note**

-   `FILEVERSION` specifies the file version. Set this parameter to 5 to use the encryption feature.
    
-   `ENCRYPTION` specifies the encryption algorithm. Valid values: AES and SMS4.
    
-   You can use the `ENCRYPTION=NONE` statement to decrypt data.
    
-   You can change the encryption algorithm, for example, from AES to SMS4. However, this is not recommended. The steps are as follows:
    
    1.  Use the `ENCRYPTION=NONE` statement to decrypt the table data.
        
    2.  Perform a `major_compact` operation on the table and wait for it to complete.
        
    3.  Use the `ENCRYPTION=SMS4` statement to set the data encryption algorithm to SMS4.
