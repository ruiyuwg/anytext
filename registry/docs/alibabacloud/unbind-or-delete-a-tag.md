When a tag is no longer needed in an ApsaraDB for MongoDB instance, you can remove the tag from the instance. If the tag is not added to other instances, the tag is deleted.

## Prerequisites

Log on to the MongoDB console using an Alibaba Cloud account. Resource Access Management (RAM) users do not have the permission to manage or use tags.

## Usage notes

-   You can remove up to 20 tags at a time.
    
-   If you remove a tag from all instances to which the tag is added, the tag is automatically deleted.
    
-   An instance keeps running when you remove tags from the instance. After all tags of an instance are removed, the instance cannot be filtered by tag.
    

## Remove one or more tags

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances**.
    
3.  In the upper-left corner of the page that appears, select the resource group and region to which the instance belongs.
    
4.  Remove one or more tags.
    
    ## Remove multiple tags in a batch
    
    1.  Select the instance from which you want to remove tags, and then click **Batch Remove Tags** in the lower-left corner.
        
    2.  In the **Delete Tags for Multiple Resources** dialog box, select tags that you want to remove, and then proceed to delete the tags.
        
    3.  After the **Tag Edited Successfully.** message appears, click **Close**.
        
    
    ## Remove a single tag
    
    1.  Find the instance from which you want to remove a single tag, move the pointer over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9314615171/p795070.png) icon in the **Tag** column, and then click **Edit**.
        
    2.  In the Configure Tags dialog box, find the tag that you want to remove, and then click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1614615171/p795128.png) icon on the right of the tag.
        
    3.  Click **OK**.
        
    4.  After the **Tag Edited Successfully.** message appears, click **Close**.
        
    

## **Delete a tag**

If you remove a tag from all instances to which the tag is added, the tag is automatically deleted.
