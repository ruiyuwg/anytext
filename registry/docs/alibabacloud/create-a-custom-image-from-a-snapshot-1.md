A custom image captures the operating system, software, configurations, and data from a system disk snapshot. Use it to create ECS instances that replicate the original instance environment.

## Prerequisites

Before you begin, make sure that you have:

-   A system disk snapshot. For details, see [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb)
    
-   Removed sensitive data (credentials, private keys, personal information) from the snapshot
    

## Snapshot and region restrictions

Restriction

Details

Region

The snapshot and resulting custom image must be in the same region. To use the image in another region, [copy the custom image](/help/en/ecs/user-guide/copy-an-image#concept-a3m-5dm-xdb) after creation.

Snapshot type

Only system disk snapshots are supported. Data disk snapshots and shared snapshots cannot be used.

Encryption

Both encrypted and unencrypted snapshots are supported. An image created from an encrypted snapshot is encrypted by default, using the same encryption key as the source snapshot.

## Billing

Snapshots incur storage fees. For pricing details, see [Snapshot billing](/help/en/ecs/snapshots-1).

If the source snapshot has an automatic release time configured, you must delete all images created from it before the release time. Otherwise, the snapshot cannot be released automatically and continues to incur fees.

## Create a custom image from a snapshot

Image creation time depends on the size of the underlying cloud disk. The image becomes available after snapshots for all associated cloud disks are complete.

> The custom image remains available even if the source ECS instance is released or expires. Instances created from the custom image are also unaffected.

You can create a custom image from a system disk snapshot on the **Images** page, the **Instance Details** page, or the **Snapshots** page. The following steps use the **Snapshots** page.

1.  Go to [ECS console - Snapshots](https://ecs.console.alibabacloud.com/snapshot).
    
2.  In the top navigation bar, select the region and resource group. ![Region selector](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png)
    
3.  On the **Disk Snapshots** tab, find a snapshot whose **Disk Type** is **System Disk**. In the **Actions** column, click **Create Custom Image**.
    
4.  In the **Create Custom Image** dialog box, configure the following parameters:
    
    Parameter
    
    Required
    
    Description
    
    **Name**
    
    Yes
    
    Enter a name for the custom image.
    
    **Image Check**
    
    No
    
    Validates whether the custom image can create fully functional ECS instances. **Check After Creation** is selected by default. After the check completes, view results in the **Check Result** column of the custom image list. To fix detected issues, use the [ACS-ECS-RepairImage](https://oos.console.alibabacloud.com/cn-hangzhou/execution/create/ACS-ECS-RepairImage) CloudOps Orchestration Service (OOS) template for one-click repair, or fix them manually.
    
    **Note**
    
    Image Check is supported only for specific operating systems. For details, see [Check and fix custom images](/help/en/ecs/user-guide/detect-custom-images-and-repair).
    
    **Image Family**
    
    No
    
    Assign the image to an [image family](/help/en/ecs/user-guide/overview-37#concept-2557141) for version management. Images in a family can be deprecated or restored, enabling smooth updates and rollbacks.
    
    **Snapshot Settings**
    
    No
    
    Include data disks in the image. Select **Add Data Disk** and click **Add** to specify data disk snapshot IDs. If you do not add a data disk snapshot, the system creates an empty data disk with a default capacity of 5 GiB. If you add a data disk snapshot, the new data disk has the same capacity as the snapshot. For details, see [Create a disk from a snapshot](/help/en/ecs/user-guide/create-a-cloud-disk-using-a-snapshot).
    
    **Billing of Snapshots**
    
    Conditional
    
    If the source snapshot has an automatic release time, select **I have read the Billing of Snapshots**. You must manually delete all images created from this snapshot before it expires. Otherwise, the snapshot cannot be released automatically and continues to incur fees. See [Snapshot billing](/help/en/ecs/snapshots-1).
    
    **Description**
    
    No
    
    Enter a description for the custom image.
    
    **Tag**
    
    No
    
    Select a tag. This parameter is optional in most scenarios. This parameter is required if the RAM user you are using is granted a RAM policy that enforces tag binding. Otherwise, a permission error is reported. See [Tags](/help/en/ecs/user-guide/label-overview).
    
    **Resource Group**
    
    No
    
    Select a resource group to manage the custom image by purpose or permissions. See [Resource groups](/help/en/ecs/user-guide/resource-groups).
    
5.  Click **OK** and wait for the image creation to complete.
    
6.  Go to the **Images** page in the ECS console. Verify that the new custom image appears in the list with the expected name and status.
    

## Next steps

After creating a custom image, you can:

-   [Create an instance from a custom image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image#task-w5v-sgv-xdb)
    
-   [Change the operating system](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance) of an existing instance
    
-   [Share the image](/help/en/ecs/user-guide/shared-images) with other Alibaba Cloud accounts
    
-   [Copy the custom image](/help/en/ecs/user-guide/copy-an-image#concept-a3m-5dm-xdb) to another region
    

## Related information

-   To create an image programmatically, use the [CreateImage](/help/en/ecs/api-createimage) API operation.
    
-   To create an image directly from a running instance, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance).
    
-   A custom image depends on its source snapshot. To [delete the snapshot](/help/en/ecs/user-guide/delete-a-snapshot-1), you must first delete the custom image created from it.
