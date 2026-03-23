When Key Management Service (KMS) releases a new image version, you must manually upgrade your KMS instance to access the latest features and improvements.

**Important**

You can upgrade the image only to the **latest version**. Upgrading to a specific version is not supported.

## Prerequisites

Before you begin, make sure that:

-   Your instance is a **software key management instance** with an image version later than **dkms-1.3.0**
    
-   You are the **owner of the KMS instance**
    
-   You have reviewed the [Release notes](/help/en/kms/key-management-service/product-overview/release-notes) for the new image version
    

## Impact

The upgrade takes approximately **30 minutes**. During this process, your services may experience transient connections. Normal service is automatically restored after the upgrade completes.

Schedule the upgrade during off-peak hours to minimize disruption.

## Upgrade the image version

### Step 1: Check whether an upgrade is available

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Resource** > **Instances**.
    
2.  Find the target instance and click **Actions** in the **Details** column.
    
3.  On the **Configure Basic Information** tab, check the **Image Version** field.
    
    -   If **Upgrade** is displayed, a new version is available.
        
    -   If **The current version is the latest version.** is displayed, no upgrade is needed.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0663183571/p966459.png)
    

### Step 2: Back up keys and credentials

We recommend that you back up the keys and credentials of your KMS instance before the upgrade. For more information, see [Backup management](/help/en/kms/key-management-service/user-guide/backups).

**Note**

The backup feature is supported only for **software key management instances**.

### Step 3: Start the upgrade

Click **Upgrade** and select an upgrade method:

**Method**

**Description**

**Automatic Upgrade**

Schedule the upgrade for a specific time within the next **30 days**. You can modify the schedule before the upgrade begins.

**Manual Upgrade**

Click **OK** to immediately start the upgrade.

### Step 4: Verify the upgrade result

After approximately 30 minutes, check the upgrade status:

-   **Status** is **Succeeded**: The upgrade is complete.
    
-   **Status** is **Failed**: Contact Alibaba Cloud technical support.
    

### Step 5: Verify service availability

1.  Confirm that the instance status is **Enabled**.
    
2.  Test critical features to make sure that cryptographic operations and credential retrieval work as expected.
    
3.  On the [Overview](https://yundun.console.aliyun.com/?&p=kms#/overview/cn-hangzhou) page, check for **4xx error requests** or **5xx error requests** to verify that your services are running correctly.
    

## Roll back the image version

If a service fault occurs after an upgrade, roll back to the previous image version. The rollback option is available for **one week** after the upgrade.

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Resource** > **Instances**.
    
2.  Find the target instance and click **Actions** in the **Details** column.
    
3.  On the **Instance** tab, click **Roll Back Now**. If the rollback fails, contact Alibaba Cloud technical support. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0663183571/p966464.png)
    

## Related topics

To view management events related to the image upgrade, see [Use ActionTrail to query the management events of Key Management Service](/help/en/kms/key-management-service/security-and-compliance/use-actiontrail-to-query-kms-event-logs-1).
