You can copy a custom image to deploy ECS instances across regions, or change the encryption status of an image within the same region or across regions. After you copy an image, a new image with a unique ID is created in the destination region. The tags, resource group, and encryption attributes of the new image are determined by the parameters you specify during the copy operation. Image copying is supported only within Alibaba Cloud (public cloud).

## Prerequisites

-   A custom image is created. For more information, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-a-snapshot-1#concept-gpg-t5l-xdb) or [Create a custom image from a snapshot](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance#concept-ech-5bm-xdb).
    
-   To perform an encrypted copy, make sure that Key Management Service (KMS) is activated. For more information, see [Activate KMS](/help/en/kms/key-management-service/support/overview-7#section-ovx-psh-9wb).
    

## Background information

### Scenarios

Alibaba Cloud ECS provides two types of image copy: **standard copy** and **encrypted copy**. Choose the appropriate type based on your use case.

-   Standard copy
    
    Use standard copy to replicate an image to a different region while preserving its encryption status.
    
    **Scenario**
    
    **Description**
    
    **Steps**
    
    **Cross-region, same-account** deployment
    
    Copy an image to another region. A new image with a unique ID is created in the destination region (tags, resource group, and encryption attributes are determined by the copy parameters). Use the new image to create ECS instances.
    
    1.  Select Standard Copy and choose the destination region (this topic).
        
    
    **Cross-region, cross-account** deployment
    
    Copy an image to another region, then share the image with another Alibaba Cloud account. The recipient uses the shared image to create ECS instances.
    
    1.  Select Standard Copy and choose the destination region (this topic).
        
    2.  [Share the image](/help/en/ecs/user-guide/share-a-custom-image/#concept-e1j-jgm-xdb)
        
    
    **Same-region, cross-account** deployment
    
    Share an image directly with another Alibaba Cloud account. The recipient uses the shared image to create ECS instances.
    
    1.  [Share the image](/help/en/ecs/user-guide/share-a-custom-image/#concept-e1j-jgm-xdb)
        
    
-   Encrypted copy
    
    Use encrypted copy to change the encryption status of a custom image. Encrypted copy takes longer than standard copy.
    
    **Scenario**
    
    **Supported**
    
    Non-encrypted image → Encrypted image
    
    Yes
    
    Encrypted image → Encrypted image (change key)
    
    Yes
    
    Encrypted image → Non-encrypted image
    
    No
    
    **Scenario**
    
    **Description**
    
    **Steps**
    
    **Change encryption status** (takes longer than standard copy)
    
    -   Copy an encrypted image to an encrypted image (change the encryption key)
        
    -   Copy a non-encrypted image to an encrypted image
        
    
    Copy an image within the same region or across regions, then use the encrypted image to create ECS instances.
    
    **Note**
    
    When you create an ECS instance from an encrypted custom image, the system disk and data disks (if any) are automatically encrypted with the same key used by the image.
    
    1.  Select Encrypted Copy and choose the destination region (same-region or cross-region) and encryption key (this topic).
        
    

### Usage notes

Before you copy an image, take note of the following items:

-   **Billing**
    
    -   Snapshot storage fees: Copying an image creates corresponding snapshots in the destination region. You are charged based on the storage size of these snapshots. For more information, see [Snapshot billing](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb).
        
        **Note**
        
        Snapshots created by image copying are retained indefinitely, regardless of the retention policy of the source image snapshots.
        
    -   No data transfer fees are charged for cross-region image copying. Alibaba Cloud does not currently charge for this traffic. Any changes to this policy will be announced in advance.
        
-   **Copy duration**
    
    The time required to copy an image depends on the image size, network conditions, and the number of concurrent copy tasks in the queue.
    
    **Note**
    
    Copying large images directly may be slow and subject to capacity constraints. Snapshot copy is typically faster and avoids these limitations. For images larger than 2 TiB, we recommend that you copy the underlying snapshot to the destination region first, and then create an image from the snapshot. For more information, see [Copy a snapshot across regions](/help/en/ecs/user-guide/copy-a-snapshot#task-2438417) and [Create a custom image from a snapshot](/help/en/ecs/user-guide/create-a-custom-image-from-a-snapshot-1#concept-gpg-t5l-xdb).
    
-   **Limits**
    
    -   Standard copy supports only cross-region copy. To copy within the same region, use encrypted copy.
        
    -   Encrypted images can only be copied by using encrypted copy.
        
    -   Alibaba Cloud account users can copy to up to 5 destination regions per operation.
        
    -   You can add new tags during copy, but you cannot modify the existing custom tags from the source image. The source image tags are preserved in the copied image.
        

## Procedure

1.  Go to [ECS console - Images](https://ecs.console.alibabacloud.com/image).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **Images** page, click the **Custom Images** tab.
    
4.  Find the image that you want to copy. In the **Actions** column, click **Copy Image**.
    
5.  In the **Copy Image** dialog box, configure the parameters based on the copy type.
    
    #### **Standard copy**
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Copy Mode**
    
    Yes
    
    Select **Copy**.
    
    **Destination Region**
    
    Yes
    
    Select the destination region. Standard copy supports only cross-region copy.
    
    **Note**
    
    Alibaba Cloud account users can copy to up to 5 destination regions per operation.
    
    **Custom Image Name**
    
    Yes
    
    Enter the name for the image in the destination region. Example: **Image\_from\_hangzhou**.
    
    **Description**
    
    No
    
    Enter a description for the image in the destination region.
    
    **Resource Group**
    
    No
    
    Select a resource group to organize and manage the image.
    
    **Tag**
    
    No
    
    Add tags to categorize the image for easier search and batch management.
    
    **Note**
    
    You can add new tags during copy, but you cannot modify the existing custom tags from the source image. The source image tags are preserved in the copied image.
    
    #### **Encrypted copy**
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Copy Mode**
    
    Yes
    
    Select **Copy and Encrypt**.
    
    **Note**
    
    If the source image is already encrypted, only Encrypted Copy is available.
    
    **Copy Mode**
    
    Yes
    
    Configure the destination region and encryption key.
    
    -   **Destination Region**: Select the region (same-region or cross-region).
        
    -   **Encryption Key**: Select a service key or a customer master key (CMK) that you created in KMS. For more information about CMK restrictions, see [Key Management Service](/help/en/kms/key-management-service/support/overview-7#section-ovx-psh-9wb).
        
    
    **Note**
    
    Alibaba Cloud account users can copy to up to 5 destination regions per operation. Click **Add Destination Region** to add more regions with different encryption keys.
    
    **Custom Image Name**
    
    Yes
    
    Enter the name for the image in the destination region. Example: **Image\_from\_hangzhou**.
    
    **Description**
    
    No
    
    Enter a description for the image in the destination region.
    
    **Resource Group**
    
    No
    
    Select a resource group to organize and manage the image.
    
    **Tag**
    
    No
    
    Add tags to categorize the image for easier search and batch management.
    
    **Note**
    
    You can add new tags during copy, but you cannot modify the existing custom tags from the source image. The source image tags are preserved in the copied image.
    
6.  After you verify the settings, click **OK** to start copying the image.
    
7.  Check the copy progress in the destination region.
    
    In the top navigation bar, switch to the destination region and view the progress of the custom image. When the progress reaches 100% and the status changes to **Available**, the copy is complete. The new image has a unique image ID.
    

(Optional) If the copy status is **Creating**, you can cancel the copy at any time by clicking **Cancel Copying** in the **Actions** column.

You can also cancel a pending copy by calling the [CancelCopyImage](https://www.alibabacloud.com/help/en/ecs/developer-guide/api-cancelcopyimage) API operation.

## Related operations

-   To copy an image by using API, see [CopyImage](https://www.alibabacloud.com/help/en/ecs/developer-guide/api-copyimage).
    
-   After you copy an image, you can [create an instance from the image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image#task-w5v-sgv-xdb) or [Replace the operating system (system disk)](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance).
    
-   To share an image with another account, see [Share a custom image](/help/en/ecs/user-guide/share-a-custom-image/#concept-e1j-jgm-xdb).
