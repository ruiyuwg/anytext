ossbrowser is a graphical tool for managing Object Storage Service (OSS) buckets and objects. For example, use ossbrowser to create buckets, delete buckets, upload objects, download objects, preview objects, copy objects, move objects, and share objects.

## Prerequisites

[Install](/help/en/oss/developer-reference/install-ossbrowser-1-0#task-2065478) and [log on to ossbrowser 1.0](/help/en/oss/developer-reference/logon-to-ossbrowser-1-0).

## **Use cases**

-   Upload and download a large object that is greater than 5 GB in size
    
    By default, ossbrowser uses multipart and resumable uploads. The maximum object size is 48.8 TB. ossbrowser automatically splits the object into parts during the upload and combines the parts into a complete object after the parts are uploaded.
    
-   Access a bucket directory with a token
    
    Use a token obtained from Security Token Service (STS) to log on to ossbrowser. Provide these tokens to other users for temporary, authorized access to a specific directory. The token automatically becomes invalid after it expires.
    

**Note**

The examples in this topic use the list view. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8504575171/p794978.png) icon to switch to the tiled view.

## **Manage buckets**

You can perform the same bucket operations in ossbrowser as you can in the OSS console. Follow the on-screen instructions in ossbrowser to manage buckets.

**Note**

Managing buckets requires the necessary permissions. For more information, see [Manage permissions](/help/en/oss/developer-reference/permission-management-1#concept-c3k-mvr-gfb).

**Operation**

**Description**

Create a bucket

A bucket is a container for storing objects in OSS. Before you upload an object to OSS, you must create a bucket. For more information about bucket naming rules, regions, access control lists (ACLs), and storage classes, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4).

List buckets

After logging on, ossbrowser automatically lists all buckets in the account.

Delete a bucket

If you no longer use a bucket, delete the bucket to prevent unnecessary charges. For more information, see [Delete buckets](/help/en/oss/user-guide/delete-buckets).

Query the region of a bucket

Click the name of a bucket and view its region in the upper-right corner of the page that appears. For example, oss-cn-hangzhou represents the China (Hangzhou) region.

For more information about the mappings between region IDs and region names, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).

## Manage objects

You can use ossbrowser to perform the same object-level operations that you can perform in the OSS console. Follow the on-screen instructions in ossbrowser to manage objects. Before managing objects in a bucket, you must click the name of the bucket to view the object list.

**Note**

-   To perform a specific operation on objects, you must have the required permissions. For more information, see [Manage permissions](/help/en/oss/developer-reference/permission-management-1#concept-c3k-mvr-gfb).
    
-   For more details on an operation, refer to the corresponding topic for the OSS console.
    

**Operation**

**Description**

Upload an object

By default, ossbrowser uses multipart and resumable uploads. The maximum object size is 48.8 TB. If an upload is interrupted, the uploaded portion is stored as parts in the bucket. To avoid storage fees for unneeded parts, delete them using one of the following methods:

-   Manually delete parts. For more information, see [Delete parts](/help/en/oss/user-guide/delete-parts#concept-r3h-c1y-5db).
    
-   Use lifecycle rules to automatically delete parts. For more information, see [Lifecycle rules based on the last modified time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time).
    

**Important**

If the uploaded object has the same name as an existing object in the bucket, the existing object is overwritten.

Upload a directory

Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1741053071/p742274.png) icon to upload a directory.

Download an object

Select the object that you want to download and click **Download** in the Actions column.

**Note**

Select multiple objects and click **Download** in the upper part of the object list to download them at a time.

Download a directory

Select the directory that you want to download and click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1741053071/p742278.png) icon in the upper part of the object list.

List objects

If you click the name of a bucket, objects in the bucket are automatically listed.

Preview an object

Click the name of an object to preview the object.

Copy an object

In the source bucket, select the object that you want to copy and click **Copy**. In the destination bucket, click **Paste**.

**Important**

-   The maximum object size for copying is 5 GB. For objects larger than 5 GB, use [ossutil](/help/en/oss/developer-reference/overview-59/#concept-cnr-3d4-vdb).
    
-   If the operation is interrupted during a batch copy, the tool cannot resume the task.
    

Move an object

Choose **More** > **Move**.

**Important**

The move operation copies the object to the destination and then deletes the source. Note the following:

-   The maximum object size for moving is 5 GB. For objects larger than 5 GB, use [ossutil](/help/en/oss/developer-reference/overview-59/#concept-cnr-3d4-vdb) to copy the object and then delete the source object.
    
-   If the copy fails during the move process, the source object is not deleted. If the copy succeeds but the deletion of the source object fails (for example, due to insufficient permissions), both the source and destination objects are retained.
    
-   If the operation is interrupted during a batch move, the tool cannot resume the task.
    

Rename an object

Select the object that you want to rename and choose **More** > **Rename** at the top of the object list.

**Important**

The rename operation copies the source object to the destination and then deletes the source object. Note the following:

-   If the copy fails during the rename process, the source object is not deleted. If the copy succeeds but the deletion of the source object fails (for example, due to insufficient permissions), both the source and destination objects are retained.
    
-   If the operation is interrupted when you rename a folder, the tool cannot resume the task.
    

Search for objects

Enter an object prefix in the search box at the top of the object list. View the objects and folders that match the specified prefix in the bucket root directory.

Restore an object

Select the object that you want to restore and choose **More** > **Restore** at the top of the object list.

Delete an object

Select the object and click **Remove** in the Actions column.

Create a symbolic link for an object

1.  Select the object for which you want to create a symbolic link and choose **More** > **Set Soft Link** at the top of the object list.
    
2.  In the **Set Soft Link** dialog box, configure the **Soft Link File or Folder** parameter and click OK.
    

Manage metadata of an object

1.  Select the object whose metadata you want to manage and choose **More** > **Http Headers** at the top of the object list.
    
2.  In the **Http Headers** dialog box, configure the metadata headers and click OK.
    

Share an object

Share an object's URL with third parties, allowing them to download or preview it. To share an object, find the object and click **Address** in the Actions column to generate a URL.

Configure the ACL of an object

1.  Select the object for which you want to configure ACL and choose **More** > **ACL** at the top of the object list.
    
2.  In the **Update ACL** dialog box, specify the desired ACL and click OK.
