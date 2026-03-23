In a versioning-enabled bucket, every overwrite or deletion creates a new object version. Previous versions and orphaned delete markers accumulate over time, increasing storage costs and slowing object listing. Use lifecycle rules to automatically delete the previous versions and expired delete markers you no longer need.

## Prerequisites

Before you begin, ensure that you have:

-   A bucket with versioning enabled. See [Enable versioning](/help/en/oss/user-guide/overview-78/#title-6ui-6jl-81c)
    

## Key concepts

**Delete marker**: When you delete an object without specifying a version ID, OSS inserts a delete marker instead of removing the object. The delete marker becomes the current version, and the previous data is stored as a previous version.

**Expired delete marker**: A delete marker that has no remaining previous versions associated with the object. OSS can automatically remove expired delete markers through a lifecycle rule to reduce clutter in object listings.

**Previous version**: Any object version that is no longer the current version. Previous versions are stored indefinitely unless a lifecycle rule removes them.

## Example scenario

A user uploaded `example.txt` to `examplebucket` on February 8, 2020, then performed several overwrite and delete operations during the same year. OSS assigned a globally unique version ID to each operation and preserved the overwritten and deleted data as previous versions.

![versioning](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0665727561/p243905.jpg)

**Goals**:

-   Retain only the versions generated on May 8, 2020 and September 10, 2020
    
-   Restore the previous version from May 8, 2020 as the current version
    

The following steps show how to achieve both goals using lifecycle rules and the OSS console.

## Step 1: Retain specified object versions

Assume the current date is September 10, 2020. Create a lifecycle rule that expires previous versions older than 90 days and removes expired delete markers.

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, click **examplebucket**.
    
3.  In the left-side navigation tree, choose **Data Management** > **Lifecycle**.
    
4.  On the Lifecycle page, click **Create Rule**.
    
5.  In the Create Rule panel, configure the following parameters and keep the default settings for all other parameters.
    
    **Section**
    
    **Parameter**
    
    **Value**
    
    **Basic Settings**
    
    **Status**
    
    Enabled
    
    **Applied To**
    
    —
    
    Whole Bucket
    
    **Policy for Current Versions**
    
    **Object Lifecycle**
    
    Removal of Delete Marker
    
    **Policy for Previous Versions**
    
    **Object Lifecycle**
    
    Validity Period (Days)
    
    **Lifecycle-based Rules**
    
    **Modified Time**
    
    90
    
    **Policy for Parts**
    
    **Part Lifecycle**
    
    Validity Period (Days)
    
    **Rules for Parts**
    
    —
    
    90
    
    **Why this retains the May 8 version**: On September 10, 2020, the May 8 version has just transitioned to a previous version. Because fewer than 90 days have elapsed since it became a previous version, the rule does not delete it. Earlier versions that have been previous versions for more than 90 days are deleted the day after they expire.
    
    **Parts**: [Multipart upload](/help/en/oss/user-guide/multipart-upload#concept-wzs-2gb-5db) parts expire 90 days after they are generated and are deleted the following day.
    
6.  Click **OK**.
    

## Step 2: Restore a previous version

To restore the May 8, 2020 version as the current version:

1.  In the left-side navigation tree of **examplebucket**, choose **Object Management** > **Objects**.
    
2.  In the upper-right corner of the object list, click **Show** next to **Previous Versions**.
    
3.  Find the version you want to restore.
    
4.  Click **Restore** in the **Actions** column.
    

## Expiration behavior by versioning state

The behavior of a lifecycle expiration rule depends on the target version type and the bucket's versioning state.

**Action target**

**Versioning-enabled bucket**

**Versioning-suspended bucket**

**Current version**

OSS adds a delete marker. The current version becomes a previous version, and the delete marker becomes the new current version.

OSS adds a delete marker with a null version ID as the new current version. If an existing version already has a null version ID, it is overwritten.

**Previous version**

The previous version is permanently deleted and cannot be restored.

The previous version is permanently deleted and cannot be restored.

**Warning**

Deleting a previous version through a lifecycle rule is permanent. There is no way to recover it.

For more information about lifecycle rule configuration options, see [Lifecycle rules based on the last modified time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#concept-y2g-szy-5db).

## What's next

To restore a previous version programmatically, copy the previous version to the same bucket using the [CopyObject](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db) API. OSS stores the copied version as the new current version.
