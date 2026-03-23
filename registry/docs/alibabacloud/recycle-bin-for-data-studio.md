Data Studio provides a recycle bin that stores deleted nodes, workflows, tables, and resources within the current workspace. From the recycle bin, you can restore these objects to their original locations or permanently delete them.

## Usage notes

-   When a node, workflow, resource, or function is restored from the recycle bin, the creator, creation time, modifier, and modification time of the object are changed.
    
-   When you undeploy (remove from the production environment) a node that is deployed to production in Data Studio:
    
    -   If you confirm to delete the node during the undeploy operation, the node is moved to the recycle bin.
        
    -   If you skip deletion during the undeploy operation, the node is not moved to the recycle bin, and the node ID is left empty.
        
-   If a deleted object is located inside a directory, the directory itself is not displayed in the recycle bin. When you restore the object, the directory is automatically restored along with it.
    

## What goes to the recycle bin

The following table describes which deleted objects are moved to the recycle bin and which are not.

**Moved to the recycle bin**

**Not moved to the recycle bin**

**Nodes and workflows** deleted from the **Workspace Directories** section of the DATASTUDIO pane

Objects deleted from the **Personal Directory** section of the DATASTUDIO pane (see [details below](#section-1a223ed7))

**Workflows and nodes** deleted from the **Manual Triggered Workflows** and **Manual Triggered Tasks** sections of the MANUALLY TRIGGERED OBJECTS pane

Empty directories at any location

**Script templates** deleted from the **Workspace SQL Script Templates** section of the SQL SCRIPT TEMPLATES pane

Tables and views deleted from **Data Catalog**

**Resources and functions** deleted from the RESOURCE MANAGEMENT pane

### Personal Directory objects that bypass the recycle bin

The following objects deleted from the **Personal Directory** section of the DATASTUDIO pane are not moved to the recycle bin:

-   Files in the **My Files** directory.
    
-   On-premises folders and files in those folders that were added by clicking the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6526599371/p865391.png) icon.
    
-   Files in the File Storage NAS file system mounted to a personal development environment. The default mount target is `/mnt/data`.
    
-   Files in the built-in storage space of a personal development environment, stored in the `/mnt/workspace` directory.
    

**Note**

If files in on-premises folders are deleted from Data Studio, the files are also deleted from your on-premises device and are not moved to the recycle bin on your on-premises device.

**Note**

If you enable the [recycle bin](/help/en/nas/user-guide/recycle-bin) feature in the [NAS console](https://nas.console.alibabacloud.com/overview), deleted NAS files can be found in the NAS recycle bin.

## Open the RECYCLE BIN pane

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the left-side navigation pane of the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6526599371/p854857.png) icon to open the RECYCLE BIN pane.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6526599371/p854858.png)

## View deleted objects

In the RECYCLE BIN pane, you can view all deleted nodes, workflows, tables, and resources in the current workspace. To see only the items that you deleted, select the **Show Only My** check box.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6526599371/p854862.png)

## Restore an object

Find the object that you want to restore and click **Restore**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6526599371/p854870.png)

## Permanently delete an object

**Important**

Nodes, workflows, tables, and resources that are permanently deleted from the recycle bin cannot be restored.

-   To delete a single object, find the object and click **Delete**.
    
-   To clear the entire recycle bin, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6526599371/p854867.png) icon.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6526599371/p854875.png)
