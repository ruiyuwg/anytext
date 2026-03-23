Keep your backups safe and your workloads resilient by copying snapshots across regions or within your local region. For sensitive workloads, encrypt snapshot copies to update encryption settings or protect critical data from unauthorized access..

## Prerequisites

-   To encrypt snapshot copies, you must [have Key Management Service (KMS) activated](/help/en/kms/key-management-service/support/overview-7#section-ovx-psh-9wb).
    
-   Archived snapshots cannot be copied.
    

## Use cases

You can copy snapshots for the following purposes:

-   DevOps
    
    Deploy services or migrate workloads to another region using snapshot copies, reducing O&M costs and improving availability.
    
-   Backup and disaster recovery
    
    Meet compliance requirements or improve reliability by maintaining off‑site snapshot copies. When disaster strikes, they let you restore services quickly, reducing both Recovery Time Objective (RTO) and Recovery Point Objective (RPO).
    

Snapshot copies can be standard or encrypted. Choose the copy type based on your encryption requirements.

**Copy type**

**Use case**

**Security implications**

**Procedure**

Standard copy

Back up an unencrypted snapshot to another region, or create a disk from the copy in the destination region.

The data is stored in plain text. Anyone with access to the snapshot can read it without an encryption key.

[Copy](#3fc017611e4qu)

Encrypted copy

-   Encrypt an existing _unencrypted snapshot_ (same region).
    
-   Copy an _encrypted snapshot_ to rotate its KMS key.
    
-   Create cross‑region _encrypted copies_ for off‑site backup or to create disks.
    
-   Optionally rotate the KMS key during a cross‑region copy of an encrypted snapshot.
    

Data in an encrypted snapshot is accessible only with the correct KMS key. This protects sensitive information from unauthorized access and helps meet compliance requirements.

[Copy and Encrypt](#3fc017641emf2)

## Billing

**Important**

Review billing rules before initiating snapshot copies to estimate charges.

Billing rules apply to copies derived from the same source snapshot:

**Copy type**

**Destination region**

**Size basis**

**Fees**

Standard copy of an unencrypted snapshot

Cross-region

First copy = full snapshot size. Subsequent copies to the same region are incremental.

-   Snapshot storage fee
    
-   Data transfer fee
    

Encrypted copy of an unencrypted snapshot

Same region

First copy = full disk size. Subsequent copies are incremental. Changing the KMS key triggers a new full copy, after which following copies are incremental.

-   Snapshot storage fee
    
-   KMS fee
    

Cross-region

Same process as same‑region.

-   Snapshot storage fee
    
-   Data transfer fee
    
-   KMS fee
    

Encrypted copy of an encrypted snapshot

Same region

First copy = full snapshot size. Subsequent copies are incremental. Changing the KMS key triggers a new full copy, after which following copies are incremental.

-   Snapshot storage fee
    
-   KMS fee
    

Cross-region

Same process as same‑region.

-   Snapshot storage fee
    
-   Data transfer fee
    
-   KMS fee
    

-   Snapshot storage fee
    
    Applicable to the destination region copies. See [snapshot Billing](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb) for calculation details.
    
-   Data transfer fee
    
    Calculated as:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8511023771/CAEQTxiBgMDiz93f1BkiIGI3ZmMzNDc5NTQ4YjRhYjliYjkzOGE1MDNlZDQzMTVm4425663_20240522161750.585.svg)
    -   **Unit price**: Find per-region prices on the  [ECS product page](https://www.alibabacloud.com/product/ecs). Navigate to the **Pricing** section, select a region, then check **Snapshot** > **Snapshot replication service fee details**.
        
    -   **Snapshot size**: The unit is GB. [View snapshot size](/help/en/ecs/user-guide/view-the-snapshot-size).
        
        **Important**
        
        For the first encrypted copy of an unencrypted snapshot, _snapshot size_ refers to the size of the source disk.
        
-   KMS fee
    
    Using the default service key for server‑side encryption is free of charge. Charges may apply when you use custom KMS keys. See [KMS billing](/help/en/kms/key-management-service/product-overview/kms-billing) for more information.
    

## Limitations

-   Source snapshot's retention period and tags are not copied.
    
    > In the ECS console, copied snapshots are retained permanently by default. The [CopySnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-copysnapshot) API allows setting a retention period for new snapshots.
    
-   The ID of the new snapshot differs from the source snapshot ID. You cannot roll back the source disk using the new snapshot.
    
-   Copied snapshots do not support [instant access](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).
    
-   A standard copy produces a standard snapshot.
    

## Procedure

1.  Go to [ECS console - Snapshots](https://ecs.console.alibabacloud.com/snapshot).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **Disk Snapshot** tab, locate your snapshot. In the **Actions** column, select ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6509599371/p917962.png) > **Copy Snapshot**.
    
4.  In the **Copy Snapshot** dialog box, configure the parameters based on the copy type.
    
    #### **Copy**
    
    **Parameter**
    
    **Description**
    
    **Snapshot Name**
    
    Name for the new snapshot.
    
    **Destination Region**
    
    Select the destination region. Standard copies can only be created in a different region.
    
    **Copy Type**
    
    Select **Copy**.
    
    (Optional) **Advanced Settings**
    
    **Description**
    
    Add purpose and environment notes for easier management.
    
    **Tags**
    
    Add a tag as needed.
    
    **Note**
    
    Tags from the source snapshot are not copied.
    
    #### **Copy and Encrypt**
    
    **Parameter**
    
    **Description**
    
    **Snapshot Name**
    
    Name for the new snapshot.
    
    **Destination Region**
    
    Select the destination region. Standard copies can only be created in the same region or in a different region.
    
    > Copying encrypted snapshots to **China (Nanjing - Local Region) Closing Down** is not supported.
    
    **Copy Type**
    
    Select **Copy and Encrypt**.
    
    > Snapshots derived from encrypted disks are automatically encrypted and must be copied using this option.
    
    **Encryption Key**
    
    Select the default service key or a customer master key (CMK) from the drop-down list.
    
    > The default service key (alias/acs/ecs) is fully managed by ECS. Alternatively, you can use a Customer Master Key (CMK), which you create or import in KMS to maintain full control over encryption policies. For more information, see [KMS integration](/help/en/kms/key-management-service/user-guide/integration-with-kms).
    
    (Optional) **Advanced Settings**
    
    **Description**
    
    Add purpose and environment notes for easier management.
    
    **Tags**
    
    Add tags as needed.
    
    > Tags from the source snapshot are not copied.
    
5.  Click **Confirm.** The copy process starts.
    
6.  (Optional) To view progress, switch to the destination region.
    
    -   If the **Progress** changes to **Processing**, the copy is in progress. To cancel, click **Delete Snapshot** in the **Actions** column. This action cancels the task and deletes the partial snapshot.
        
    -   When the **Progress** changes to **Available**, the snapshot copy is complete.
        
        -   Hover over **Snapshot Copy** in the **Creation Method** column to view the ID of the original snapshot.
            
        -   Go to the snapshot details page. View the encryption status and the encryption key in the **Encrypted/Unencrypted** section.
            

## References

-   [CopySnapshot](/help/en/ecs/api-copysnapshot#doc-api-Ecs-CopySnapshot)\- Copy snapshots programmatically.
    
-   [Create from a snapshot](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot#concept-yyn-11b-ydb) - Restore data in the destination region.
    
-   [Create a custom image from the snapshot](/help/en/ecs/user-guide/create-a-custom-image-from-a-snapshot#concept-gpg-t5l-xdb) and [create an instance from the custom image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image) - Use system disk snapshots to quickly replicate application environments.
    
-   To avoid unnecessary charges, [delete the snapshot](/help/en/ecs/user-guide/delete-a-snapshot-1) you no longer needed.
