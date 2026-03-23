Data encryption is recommended for scenarios that require high data security or compliance. You can use Customer Master Keys (CMKs) from Key Management Service (KMS) or keys managed by Object Storage Service (OSS) to encrypt OSS volumes in ACK clusters. This method helps ensure data privacy and control.

## Encryption methods

OSS volume encryption can be categorized as server-side encryption (SSE) or client-side encryption. ACK supports only SSE.

-   Server-side encryption: OSS encrypts data before it is saved to disks in a data center and automatically decrypts the data when you download the objects.
    
-   Client-side encryption: You can use a client-side encryption software development kit (SDK) to encrypt data locally before you upload it to OSS.
    

OSS provides two server-side encryption methods for different scenarios. You can use only one server-side encryption method for an object at a time.

-   Use CMKs from KMS for encryption (SSE-KMS)
    
    -   Use the default CMK: When you upload an object, set the `X-OSS-server-side-encryption` request header to `KMS` and do not specify a CMK ID.
        
    -   Use a specified CMK ID: When you upload an object, set the `X-OSS-server-side-encryption` request header to `KMS` and set `X-OSS-server-side-encryption-key-id` to the `CMK ID`.
        
    
    **Important**
    
    Using KMS keys incurs a small fee for API calls. For more information about billing, see [Billing of KMS](/help/en/kms/key-management-service/support/billing-of-kms#concept-52608-zh).
    
    This method is cost-effective because data does not need to be sent over the network to the KMS server for encryption and decryption.
    
-   Use keys managed by OSS for encryption (SSE-OSS)
    
    -   This encryption method uses keys that are managed by OSS. The encryption is an attribute of the object.
        
    -   OSS generates and manages data encryption keys and uses the industry-standard AES-256 encryption algorithm.
        
    -   When you upload an object, set the `X-OSS-server-side-encryption` request header to `AES256`.
        

You can configure the encryption parameters for an OSS volume using the ossfs tool. The configuration takes effect when the persistent volume (PV) is mounted.

> For more information about how to configure and install ossfs, see [Install ossfs 1.0](/help/en/oss/developer-reference/install-ossfs-1-0).

## Preparations

-   The CSI plug-in is installed in the cluster. If an upgrade is required, refer to [Upgrade csi-plugin and csi-provisioner](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
    
    **Note**
    
    If your cluster uses FlexVolume, upgrade to CSI, because FlexVolume is deprecated. For details, see [Upgrade from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/). To verify your storage component type, go to the **Add-ons** page, and click the **Storage** tab.
    
-   An OSS bucket is created. For more information, see [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb). The bucket and the cluster belong to the same Alibaba Cloud account.
    
    **Important**
    
    Do not use OSS across different accounts.
    
-   [Key Management Service (KMS) is activated](/help/en/kms/key-management-service/support/purchase-a-dedicated-kms-instance#task-1962255).
    

## **Scenario 1: Use the default CMK hosted in KMS for encryption**

1.  Copy the following content to a file named kms-cmk-default.yaml.
    
    ```
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: oss-csi-pv
    spec:
      capacity:
        storage: 5Gi
      accessModes:
        - ReadOnlyMany
      csi:
        driver: ossplugin.csi.alibabacloud.com
        volumeHandle: oss-csi-pv
        volumeAttributes:
          bucket: "python"
          url: "oss-cn-hangzhou.aliyuncs.com"
          otherOpts: "-o umask=022 -o max_stat_cache_size=100000 -o allow_other"
          akId: "<YourAccessKey ID>"           # Replace with your AccessKey ID.
          akSecret: "<YourAccessKey Secret>"   # Replace with your AccessKey secret.
          path: "/"
          encrypted: "kms"
    ```
    
    **Parameter**
    
    **Description**
    
    `akId`
    
    AccessKey ID
    
    `akSecret`
    
    AccessKey secret
    
    `encrypted`
    
    The encryption method for the volume:
    
    -   `kms`: KMS encryption.
        
    -   `aes256`: AES-256 encryption.
        
    
2.  Create the encrypted volume.
    
    ```
    kubectl create -f kms-cmk-default.yaml
    ```
    
3.  View the created encrypted volume.
    
    ```
    kubectl get pv
    ```
    

## **Scenario 2: Use a specified CMK ID hosted in KMS for encryption**

### **1\. Configure KMS access permissions**

To encrypt an OSS object with a specified KMS-managed CMK ID, you must grant KMS access permissions to the RAM user or role for the PV's AccessKey. For more information, see [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8#section-oe2-ypt-1fi).

> Before you begin, make sure that you have [created a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user#task-187540) or [created a RAM role](/help/en/ram/user-guide/create-a-ram-role/).

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using an Alibaba Cloud account or as a RAM administrator.
    
2.  In the navigation pane on the left, choose **Identities** > **Users** or **Roles**.
    
3.  Find the target RAM user and click **Add Permissions** in the **Actions** column. Alternatively, find the target RAM role and click **Grant Permission** in the **Actions** column. Follow the on-screen instructions to add the permissions. You can select the AliyunKMSFullAccess system policy or the AliyunOSSEncryptCustomizedPolicy **custom policy**.
    
    The AliyunKMSFullAccess permission provides extensive access. If you require fine-grained access control, you can [create a custom policy](/help/en/ram/create-a-custom-policy) named AliyunOSSEncryptCustomizedPolicy with the following content.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "kms:List*",
            "kms:DescribeKey",
            "kms:GenerateDataKey",
            "kms:Decrypt"
          ],
          "Resource": [
            "acs:kms:*:141661496593****:*"  // This allows the entity to call all KMS keys under this Alibaba Cloud account ID. If you want to allow the use of only a specific CMK, enter the corresponding CMK ID.
          ]
        }
      ]
    }
    ```
    

### **2\. Create the encrypted volume**

1.  Create a file named kms-cmk.yaml.
    
    ```
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: oss-csi-pv
    spec:
      capacity:
        storage: 5Gi
      accessModes:
        - ReadOnlyMany
      csi:
        driver: ossplugin.csi.alibabacloud.com
        volumeHandle: oss-csi-pv
        volumeAttributes:
          bucket: "python"
          url: "oss-cn-hangzhou.aliyuncs.com"
          otherOpts: "-o umask=022 -o max_stat_cache_size=100000 -o allow_other"
          akId: "<YourAccessKey ID>"           # Replace with your AccessKey ID.
          akSecret: "<YourAccessKey Secret>"   # Replace with your AccessKey secret.
          path: "/"
          encrypted: "kms"
          kmsKeyId: "<YourCMKID>"          # Replace with your CMK ID.
    ```
    
2.  Create the encrypted volume.
    
    ```
    kubectl create -f kms-cmk.yaml
    ```
    
3.  View the created encrypted volume.
    
    ```
    kubectl get pv
    ```
    

## **Scenario 3: Use keys fully managed by OSS for encryption**

1.  Create a file named sse-oss.yaml.
    
    ```
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: oss-csi-pv
    spec:
      capacity:
        storage: 5Gi
      accessModes:
        - ReadOnlyMany
      csi:
        driver: ossplugin.csi.alibabacloud.com
        volumeHandle: oss-csi-pv
        volumeAttributes:
          bucket: "python"
          url: "oss-cn-hangzhou.aliyuncs.com"
          otherOpts: "-o umask=022 -o max_stat_cache_size=100000 -o allow_other"
          akId: "<YourAccessKey ID>"             # Replace with your AccessKey ID.
          akSecret: "<YourAccessKey Secret>"     # Replace with your AccessKey secret.
          path: "/"
          encrypted: "aes256"
    ```
    
2.  Create the encrypted volume.
    
    ```
    kubectl create -f sse-oss.yaml
    ```
    
3.  View the created encrypted volume.
    
    ```
    kubectl get pv
    ```
