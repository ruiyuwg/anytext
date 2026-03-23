Directory quotas for General-purpose NAS file systems let you limit the storage space and number of files within a specific directory. The feature allows setting quotas for the directory as a whole (directory quota), for specific users and groups within that directory (user/group quota), and even different resource quotas for multiple users in the same path.

## Prerequisites

-   A General-purpose NAS file system is created. For more information, see [Create a file system](/help/en/nas/user-guide/create-a-file-system#task-27530-zh).
    
-   A mount target is created. For more information, see [Add a mount target](/help/en/nas/user-guide/manage-mount-targets#section-6xi-a3u-zkq).
    
-   A permission group and rules are created. For more information, see [Procedure](/help/en/nas/user-guide/manage-a-permission-group#section-0la-i30-27g).
    
-   The file system is mounted, and a directory is created in the file system as required by your scenario. For more information, see [Mounting scenarios](/help/en/nas/user-guide/usage-notes#section-ygl-mdt-hbd).
    

## Quota types

**Category**

**Quota type**

Quota scope

-   Directory quota: Tracks the file system usage of all users in a directory.
    
-   User (group) quota: Tracks the file system usage of a specific user or group in a directory.
    

**Note**

Only General-purpose NAS file systems that use the NFS protocol support user (group) quotas.

Quota restriction level

-   Statistical quota: Monitors and reports usage without enforcing limits.
    
-   Restrictive quota: Enforces limits. If the quota is exceeded, write operations such as creating files, appending data, or moving files into the directory will be blocked.
    

## Usage notes

-   File system instances
    
    -   General-purpose NAS file systems that use the NFS protocol support directory quotas and user (group) quotas.
        
    -   General-purpose NAS file systems that use the SMB protocol support directory quotas.
        
    -   Extreme NAS file systems do not support directory quotas.
        
-   Quotas
    
    -   A single file system supports quotas on up to 500 directories. The maximum supported directory depth for a quota is 8 levels. For example, the root directory / is at depth 0, /workspace is at depth 1, and /workspace/dir1 is at depth 2.
        
    -   A single directory can have quotas for up to 500 unique users (UIDs) and groups (GIDs). Exceeding this limit may cause configuration failures or read errors.
        
    
    **Important**
    
    -   After you set a restrictive quota, write operations fail if file usage exceeds the limit. These operations include increasing file length, creating files and directories, and moving files into the directory. The application layer receives an IOError. For more information, see [Why is the "Disk quota exceeded" error message returned when writing data to a file system?](#ed5230951djx6)
        
    -   Restrictive quotas can block critical write operations and impact your applications. It is crucial to thoroughly test them in a non-production environment before applying them to business-critical paths.
        
    -   After you create a directory quota, it enters an initialization process and its status is **Initializing**. This process can take several hours or longer, depending on the number of files and directories in the file system. After initialization is complete, the status changes to **Running**. You can query the directory quota status in the NAS console or by calling the [DescribeDirQuotas](/help/en/nas/developer-reference/api-nas-2017-06-26-describedirquotas) API operation.
        
    -   NAS quota settings are applied asynchronously. Therefore, there is a delay, typically 5 to 15 minutes, before a restrictive quota takes effect or is disabled.
        
    
-   Regions
    
    -   General-purpose NAS file systems that use the NFS protocol: All regions.
        
    -   General-purpose NAS file systems that use the SMB protocol: All regions except China (Shenzhen) Finance.
        

## Create a directory quota

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose ****File System**** > **File System List**.
    
3.  In the top navigation bar, select the resource group and region where your file system resides.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1691062371/p872876.png)
    
4.  Find the target file system and click its ID or click **Manage**. On the **Quota Management** page, click **Create Directory Quota**.
    
5.  In the **Create Directory Quota** dialog box, set the **Directory Path**.
    
    **Important**
    
    -   Quotas can be set only for existing directories in a General-purpose NAS file system. The directory path must be an absolute path starting from the root of the NAS file system (such as `/mydir`), not the local mount path on your client (such as `/mnt/mydir`).
        
    -   Directory paths cannot contain Chinese characters.
        
    
    For example, a General-purpose NAS file system is mounted to the local path `/mnt`. In the General-purpose NAS file system, the root directory is `/`, and it has a level-1 subdirectory `/dir0` and a level-2 subdirectory `/dir/subdir1`. To configure directory quotas for the root directory, the level-1 subdirectory, and the level-2 subdirectory, the directory paths are as follows:
    
    -   Root directory: `/`
        
    -   Level-1 subdirectory: `/dir0`
        
    -   Level-2 subdirectory: `/dir/subdir1`
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4455659171/p807284.png)
    
6.  Check the directory quota status.
    
    After you create a directory quota, its status is **Initializing** while it is being created. This process can take several hours or longer, depending on the number of files and directories in the file system. After initialization is complete, the status changes to **Running**. A user quota entry is automatically created in the user quota list. For this entry, the user type is All Users and the quota type is Statistical. The quota type is modifiable, but the user type is not.
    

## Add a user quota

A statistical quota tracks usage, while a restrictive quota enforces limits on storage space and file counts for a specific user or group within the directory.

**Note**

-   Only General-purpose NAS file systems that use the NFS protocol support user (group) quotas.
    
-   Only one quota type can be configured for each user type.
    

### **Procedure**

In the **Quota Management** area, find the target directory path and click **Manage Quotas**. In the panel that appears, click **Assign Quota to User** and configure the parameters in the dialog box. ![add_user_quota](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4964027071/p99857.png)

**Parameter**

**Required**

**Description**

**User Type**

Yes

The type of user ID. Valid values are Uid, Gid, and All Users. These values correspond to a user, a user group, and all users, respectively. You can set different quotas for multiple users in the same path.

**ID**

No

This parameter is required when **User Type** is set to Uid or Gid. It specifies the user or user group to limit.

For example:

-   To limit a user with UID=500, set User Type to Uid and ID to 500.
    
-   To limit a user group with GID=100, set User Type to Gid and ID to 100.
    

**Quota Type**

Yes

-   **Statistical**: Monitors usage without enforcing limits.
    
-   **Restrictive**: Enforces the specified limits. Write operations will be blocked if the quota is exceeded.
    

**Capacity Limit (GiB)**

No

This parameter is required when the **Quota Type** is set to **Restrictive**. It specifies the maximum storage capacity that a quota user can use for files and directories in the quota path.

**Note**

-   The minimum value is 0 GiB and the maximum value is 10,000,000 GiB.
    
-   You must specify at least one of Capacity Limit (GiB) and File Count Limit.
    

**File Limit**

No

This parameter is required if you set the **Quota Type** parameter to **Restrictive**. This parameter specifies the maximum number of files and subdirectories that a user can create in a directory.

**Note**

-   You must specify at least one of Capacity Limit (GiB) and File Count Limit.
    
-   The minimum value is 1 and the maximum value is 1,000,000,000.
    

## Delete a user quota

In the user quota list, find the target quota entry and click **Delete**.

**Important**

When you delete a directory that has a quota configured, NAS also deletes the corresponding directory quota and user quota entries.

## Edit a user quota

In the user quota list, find the target quota entry and click **Edit**. The quota type, capacity limit, and file count limit are editable.

**Note**

The capacity limit and file count limit are editable only for restrictive quotas. At least one of these two parameters must be modified.

## API

The quota management feature provides the following API operations:

-   [SetDirQuota](/help/en/nas/api-setdirquota#doc-api-NAS-SetDirQuota)
    
-   [DescribeDirQuotas](/help/en/nas/api-describedirquotas#doc-api-NAS-DescribeDirQuotas)
    
-   [CancelDirQuota](/help/en/nas/api-canceldirquota#doc-api-NAS-CancelDirQuota)
    

## **FAQ**

### Why is the `**Disk quota exceeded**` error message returned when writing data to a file system?

-   **Cause**
    
    This error indicates that the user or group has exceeded the storage space or file count limit defined by a restrictive quota on the target directory. These operations include increasing file length, creating files or directories, and moving files into the directory. An error message such as `Disk quota exceeded` is returned.
    
-   **Solution**
    
    1.  Free up space by deleting data or increase the capacity limit of the directory. For more information, see [Edit a user quota](#section-usj-b35-slz).
        
    2.  After freeing up space, perform a small write operation (such as `touch testfile`) in the directory. This helps trigger a faster refresh of the quota statistics. Once the write operation succeeds, restart your application.
