You can use Key Management Service (KMS) to encrypt your Elastic Compute Service (ECS) disks. This helps you meet compliance requirements and protects your data from security threats, such as physical theft and unauthorized access. Disk encryption ensures the confidentiality and integrity of your data.

## How encryption and decryption works

Encrypted disks use a two-tiered key system to secure your data:

-   Data key: Used to encrypt and decrypt the data on a disk.
    
-   KMS key: Stored in KMS and used to encrypt and decrypt the data key.
    

When you create an encrypted disk, a data key that is encrypted by a KMS key is stored with the disk. When the instance starts, ECS requests KMS to decrypt the data key. ECS then loads the decrypted, plaintext data key into memory to encrypt and decrypt data.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9052779671/CAEQThiBgMC2xauG0BkiIDQ4NDIxMDM3NWVlOTQ0YjliYjA4ZTk5YmI1MzJlMDU55730712_20250922175559.087.svg)

## Create an encrypted disk

1.  Create an encrypted disk.
    
    **Important**
    
    Encryption is irreversible. An encrypted disk cannot be converted back to an unencrypted state.
    
    #### **Console**
    
    You can create a disk in the following scenarios.
    
    -   **Create a disk from an unshared encrypted snapshot**: By default, the disk is encrypted using the same key as the snapshot. You can select a different KMS key from the drop-down list.
        
    -   **Create a disk from a shared encrypted snapshot**: By default, the disk is encrypted using a service key. You can select a different KMS key from the drop-down list.
        
    -   **Create a disk in a region where account-level default encryption for Elastic Block Storage is enabled**: By default, the disk is encrypted using the specified account-level key. You can select a different KMS key from the drop-down list.
        
    -   Other scenarios: Select the **Encryption** checkbox and then select a KMS key from the drop-down list. By default, a service key is used for encryption.
        
    
    KMS offers the following two types of keys.
    
    -   **Service key**: A key that is automatically created and managed by a cloud service for ECS. The key alias is `alias/acs/ecs`. Service keys are easy to use and meet basic encryption needs. They do not require key lifecycle management.
        
    -   **Customer master key (CMK)**: A key that you create in or import into KMS. This gives you full control. CMKs are suitable for scenarios with high data security requirements where you need to manage the key lifecycle, including key rotation, disabling, and deletion.
        
    
    > When you select a CMK for encryption for the first time, you must follow the on-screen instructions to grant the `AliyunECSDiskEncryptDefaultRole` role to ECS. This role allows ECS to access KMS resources.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3987690671/p1007332.png)
    
    #### **API**
    
    -   Encrypt the system disk and data disks when you create an ECS instance.
        
        Call the [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) operation to create an ECS instance. To encrypt the system disk or data disks, set the `Encrypted` and `KMSKeyId` parameters.
        
    -   Create a standalone encrypted data disk.
        
        Call the [CreateDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createdisk) operation to create a data disk. To encrypt the disk, set the `Encrypted` and `KMSKeyId` parameters.
        
    
2.  Next steps.
    
    -   System disk: Ready to use.
        
    -   Data disk:
        
        -   Created with an instance:
            
            -   Windows: Ready to use.
                
            -   Linux: You must [initialize the disk](/help/en/ecs/user-guide/initialize-a-data-disk/) before you can use it.
                
        -   Created separately: You must [attach the disk to an ECS instance](/help/en/ecs/user-guide/attach-a-data-disk) and then [initialize the disk](/help/en/ecs/user-guide/initialize-a-data-disk/) before you can use it.
            

## **Convert an unencrypted disk to an encrypted one**

You cannot directly encrypt an existing unencrypted disk. Instead, you must create an encrypted copy of the disk using an encrypted custom image or an encrypted snapshot. You can then replace the operating system with the encrypted image or attach the new encrypted disk.

-   System disk
    
    1.  [Create a custom image from the target instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance).
        
    2.  [Copy the custom image](/help/en/ecs/user-guide/copy-an-image#concept-a3m-5dm-xdb) and select the encryption option to create an encrypted copy.
        
    3.  Use one of the following methods to create an encrypted system disk.
        
        -   [Replace the operating system of the original ECS instance](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance-1) using the encrypted image.
            
        -   [Create a new instance from the encrypted image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image).
            
-   Data disk
    
    1.  For the data disk, [create a snapshot](/help/en/ecs/user-guide/create-a-snapshot).
        
    2.  [Copy the snapshot to create an encrypted snapshot](/help/en/ecs/user-guide/copy-a-snapshot).
        
    3.  [Create a new data disk from the encrypted snapshot](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot).
        
    4.  [Attach](/help/en/ecs/user-guide/attach-a-data-disk) the newly created encrypted disk to the original ECS instance.
        

## **Apply in production**

-   **Do not delete or disable keys unnecessarily.**
    
    If you delete or disable a key, all encrypted resources that use it, such as cloud disks, snapshots, and images, cannot be decrypted. This can cause unrecoverable data loss. Before you proceed, [check for any resources associated with the key](/help/en/kms/key-management-service/user-guide/manage-keys-2#eaf3e10072rgb).
    
    **Important**
    
    You are responsible for any data loss caused by disabling or deleting a key.
    
-   **Restrict RAM users to create only encrypted disks.**
    
    To meet specific security and compliance requirements and prevent data breaches from unencrypted cloud disks, you can configure a custom policy for all Resource Access Management (RAM) users in your account to [restrict them to creating only encrypted cloud disks](/help/en/ecs/user-guide/custom-policies-for-ecs#fe5ed79e1d6b9). This helps protect data confidentiality.
    
-   **Prevent RAM users from managing keys.**
    
    To prevent accidental deletion or disabling of keys, you can grant RAM users read-only permissions for KMS by attaching the AliyunKMSReadOnlyAccess policy.
    
-   **Encrypt existing system disks in bulk**
    
    You can use the OOS public template [ACS-ECS-BulkyEncryptSystemDisk](https://oos.console.alibabacloud.com/cn-hangzhou/template/public/detail/ACS-ECS-BulkyEncryptSystemDisk) to [encrypt the system disks of multiple ECS instances](/help/en/oos/use-cases/automatically-encrypt-the-system-disk-through-oos) by replacing their operating systems.
    

## Billing

-   **Disk fees**: Encrypted disks and unencrypted disks are billed using the same rules. The encryption feature does not incur additional fees. For more information, see [Block Storage billing](/help/en/ecs/block-storage-devices).
    
-   **Key fees**: The use of keys is free of charge.
    

## **Quotas and limitations**

-   **Instance types**
    
    When you encrypt a system disk or create an encrypted data disk from a snapshot, you cannot attach the disk to the following instance types: ecs.ebmg5, ecs.ebmgn5t, ecs.ebmi3, ecs.sccg5, ecs.scch5, ecs.ebmc4, and ecs.ebmhfg5.
    
-   **Disk types**
    
    When you encrypt a system disk or create an encrypted data disk from a snapshot, you can encrypt only Enterprise SSD (ESSD) series disks. This includes enterprise SSDs (ESSDs), ESSD Entry disks, ESSD AutoPL disks, and regional ESSDs.
    
-   **Regions**
    
    -   **Regions where you cannot create encrypted disks:** China (Nanjing - Local Region - Closing Down), South Korea (Seoul).
        
    -   **Regions where you cannot use CMKs:** China (Fuzhou - Local Region - Closing Down), Thailand (Bangkok).
        

## FAQ

#### **How can I verify that data is encrypted at rest?**

**Important**

This method verifies encryption by disabling the key, which causes read and write errors on the system disk. We recommend that you [purchase a test instance](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard) for this test.

1.  When you purchase a test instance, create a system disk that is encrypted with a CMK.
    
2.  Disable the CMK.
    
    1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Keys**.
        
    2.  On the **Customer Master Keys** or **Default Keys** tab, find the target key and click **Disable** in the **Actions** column.
        
    3.  In the **Disable Key** dialog box, confirm the action and click **Confirm**.
        
        **Important**
        
        Before you disable a CMK, check for associated cloud resources to avoid service disruptions.
        
3.  Verify the encryption.
    
    Connect to the ECS instance and run the `sudo reboot` command to restart the operating system. Because the KMS key that is associated with the encrypted system disk is disabled, the system cannot decrypt the data, which causes an I/O hang. If you then [connect to the ECS instance using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc), a black screen appears. This proves that the data is encrypted.
    
4.  Enable the CMK and [release the test instance](/help/en/ecs/user-guide/release-an-instance).
    

## **References**

-   For more information about KMS keys, see [Key types that support cloud service encryption](/help/en/kms/key-management-service/user-guide/integration-with-kms#title-u7p-0lg-ltz).
    
-   For more information about how encryption works, see [Overview of KMS integration for cloud service encryption](/help/en/kms/key-management-service/user-guide/integration-with-kms#section-9m2-0px-v1b).
