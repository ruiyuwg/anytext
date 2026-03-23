The backup and restoration feature allows you to restore an HSM to its previous state or to that of other HSMs in either the same or different regions, catering to data restoration and cross-region service deployment needs. This topic describes how to use this feature.

Each backup creates a complete image of an HSM's data. If an image already contains backed-up data, creating a new backup will overwrite the existing data. HSM supports data backup and restoration for all HSMs within a cluster or for an individual HSM.

Backup and restoration operations are auditable through ActionTrail.

## **Backup data**

**Backup data**

**Description**

User information

User account password and identity type.

Certificate information

Cluster certificate, self-signed certificate.

Key

Key and its properties, such as key identifier, key type, key policy, key usage, key status, key owner information, KCV identifier, elliptic curve type (for ECC keys only), CRT parameters (for RSA keys only).

**Note**

The [hardware-protected key](/help/en/kms/key-management-service/user-guide/manage-keys-2#048bc9dccfdk7) of KMS relies on HSM and includes key material (encrypted key) and key metadata. HSM can back up the key material of the hardware key, but not hardware key metadata.

-   Key material refers to the essential parameters of the key generated and hosted by KMS within the physically isolated HSM environment.
    
-   Key metadata includes business data information stored on KMS, such as key ID, KMS instance hosting the key, ARN, key policy.
    

## **Backup method and time**

Only full backups are supported. Incremental backups are not.

After activating the data backup and restoration on day T, the system initiates the first backup at 00:00 (UTC+8) on day T+1, followed by daily backups at 00:00 (UTC+8). Each backup creates an image. If all images are in use, the newest image will overwrite the oldest one.

**Note**

Before creating an image, HSM compares the current data's digest with the previous image's digest. If the digests match, indicating no change in HSM data, a new image will not be generated, to conserve your image quota.

## **Backup** download and deletion restrictions

Neither backups nor images within them can be downloaded or used to view detailed image data, reducing the risk of unauthorized data replication or leakage.

Backups and images within them cannot be manually deleted. After the HSM instance is released for 90 days, the backups are automatically deleted, and all image data within the backups will be released. Before the backups are deleted, you can perform cross-region replication or instance restoration.

## **Billing**

Enabling data backup for HSM instances is charged based on the number of selected images, at 10 USD per image.

## **Back up HSM data**

When backing up data, ensure the status of HSM is **Enabled**. You can activate data backup and restoration during the purchase of an HSM instance. Because HSM supports only cluster deployment, select at least two HSMs in dual zones when purchasing the instance. This selection will activate data backup and restoration for all HSMs. Alternatively, you can choose to not enable data backup and restoration during purchase and activate it for a single HSM later.

-   Method 1: Data backup and restoration were selected during the purchase of the HSM instance.
    
    For specific operations, see [Purchase and Enable an HSM Instance](/help/en/kms/cloud-hardware-security-module/user-guide/purchase-password-machine-instance). After successful activation, backups will occur automatically at set times. You can view the backups on the **Data Backup and Restoration Management** page.
    
-   Method 2: Data backup and restoration is enabled after purchase.
    
    1.  Go to the [VSMs](https://yundun.console.alibabacloud.com/?p=hsm#/Encrypt/list) page of the Cloud Hardware Security Module console. In the top navigation bar, select a region.
        
    2.  Locate the target HSM and click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1010628171/p800418.png)** > **Upgrade** in the **Actions** column.
        
        **Note**
        
        If you cannot see **Upgrade**, the backup and restoration feature may already be enabled on the HSM.
        
    3.  On the **Upgrade/Downgrade** page, enable **Data Backup and Restoration** and select at least two images. Read and agree to the service terms, then click **Buy Now** and follow the on-screen instructions to complete the purchase.
        
        After a successful purchase, backups will occur automatically at set times. On the **Data Backup and Restoration** page, you can see the names of the generated backups. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1010628171/p800459.png)
        
    

## **Cross-region image replication**

This is only supported outside of the Chinese mainland. Once replication is complete, a backup labeled **Backup Type** as **Cross-region Copy** will be automatically created in the destination region, containing the replicated image. For example, you can replicate an image from the Singapore region to Malaysia (Kuala Lumpur).

1.  Go to the [Data Backup and Restoration](https://yundun.console.alibabacloud.com/?p=hsm#/BackUp/list) page of the Cloud Hardware Security Module console. In the top navigation bar, select a region.
    
2.  In the left-side navigation pane, choose **Data Backup and Restoration**.
    
3.  Click **View Image** in the **Actions** column of the target backup.
    
4.  Find the target **Image ID** and click **Cross-region copy** in the **Actions** column.
    
5.  In the **Copy Image** dialog box, select the **Destination Region**, and then click **OK**.
    
6.  Switch to the destination region and view the image on the **Data Backup and Restoration** page.
    
    1.  Locate the backup labeled **Backup Type** as **Cross-region Copy** and click **View Image** in the **Actions** column. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1010628171/p800724.png)
        
        **Note**
        
        This backup aggregates all images replicated from other regions and does not have an expiration time.
        
    2.  Review the replicated image based on the replication timestamp.
        
        Hover over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1010628171/p800759.png) icon next to the Image ID to view details such as the source backup ID, source image ID, source instance ID, and source image region.
        

## **Restore HSM data through images**

HSM supports data restoration to HSMs within the same region or across regions. Image restoration allows you to revert an HSM to its original state or create a new one with identical data.

**Important**

The target HSM must meet the following conditions:

-   Region Compatibility:
    
    -   The HSM must be located in the same region as the image.
        
    -   For cross-region restoration, ensure the image is replicated to the HSM's region before starting the restoration process.
        
-   Type Compatibility: The HSM must be the same instance type as the HSM the image was created from.
    
-   HSM State:
    
    -   The HSM must not be part of a cluster.
        
    -   The HSM status must be either `New` or `Disabled`.
        
    -   The HSM cannot be initialized.
        

1.  Prepare the HSM instance.
    
    -   If there is no HSM in the destination region, [purchase one](/help/en/kms/cloud-hardware-security-module/user-guide/purchase-password-machine-instance#f1859e21abjm5).
        
        Do not enable the HSM instance after purchase.
        
    -   If the target HSM is in use, contact Alibaba Cloud technical support to disable and reset the HSM.
        
2.  Locate the target image.
    
    1.  Go to the [Data Backup and Restoration](https://yundun.console.alibabacloud.com/?p=hsm#/BackUp/list/ap-southeast-3) page of the Cloud Hardware Security Module console. In the top navigation bar, select a region.
        
    2.  On the **Data Backup and Restoration** page, locate the target image.
        
        -   Same-region restoration: Find the backup labeled **Backup Type** as **Auto Create** and click **View Image** in the **Actions** column of the target backup.
            
        -   Cross-region restoration: Find the backup labeled **Backup Type** as **Cross-region Copy** and click **View Image** in the **Actions** column.
            
3.  Click on the target **Image ID** and select **Restore Instance** in the **Actions** column.
    
4.  In the **Restore Instance** dialog box, choose the target **Instance**, and click **OK**.
    
    After successful restoration, the data from the image will be copied to the target HSM.
    

## **Process for common scenarios**

### **Scenario 1: Restore all HSMs in a cluster to a specified date**

To restore HSM data in a cluster, first remove all HSMs from the cluster, then use the image to recreate the HSMs and redeploy the cluster. This process will erase all data in the cluster. The following steps are for reference. We recommend contacting technical support before proceeding.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6945182471/CAEQORiBgICA1ueRrBkiIDJlMjM0ZDA5NzgyNzQ4NDc4NTdlNTUwZjVhZTg0MTY04951558_20250303145840.329.svg)

### **Scenario 2: Cross-region deployment,** replicate data from HSM 1 in region A to an HSM cluster in region B

The process is as follows. Note that when purchasing HSMs in region B, you must purchase at least two HSMs due to dual-zone deployment requirements. After purchase, there is no need to enable or initialize the HSMs.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6945182471/CAEQORiBgMCjuY.SrBkiIDgxN2Q0YjE2MGJmMTQxOWU4YjJlNDhhNWU0NGQyZGU44951558_20250303150455.518.svg)
