Global Accelerator (GA) supports tags. You can use tags to classify GA instances, bandwidth plans, and the access control lists (ACLs) and endpoint groups of standard GA instances. This facilitates the search and aggregation of resources. This topic uses standard GA instances as an example to describe how to manage and use tags.

## Background information

As the number of GA resources increases, the difficulty of managing the resources also increases. You can use tags to group instances. This allows you to search for and filter instances in a more efficient way.

Tags are used to classify instances. Each tag consists of a key-value pair. Before you use tags, take note of the following limits:

-   Each tag key added to an instance must be unique.
    
-   You cannot create tags without adding the tags to instances. All tags must be added to instances.
    
-   You can modify the key and value of a tag or remove a tag from an instance.
    
-   If you delete an instance, all tags added to the instance are deleted. This operation does not affect the tags added to other instances.
    
-   You can add up to 20 tags to each instance. You cannot increase the quota.
    

## Add tags to a standard GA instance

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, perform the following steps to add tags to a standard GA instance.
    
    -   Add tags to a GA instance
        
        1.  Find the GA instance to which you want to add tags, move the pointer over ![标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7261472761/p531215.png) in the **Tag** column, and then click **Edit** in the pop-up message.
            
            If the **Tag** column is not displayed, you can click ![设置.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1613606071/p747433.png) in the upper-right corner to configure the columns to be displayed.
            
        2.  In the **Configure Tags** dialog box, configure tags based on the following information and click **OK**.
            
            **Parameter**
            
            **Description**
            
            **Tag Key**
            
            You can select or enter a tag key.
            
            The tag key must be 1 to 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
            
            **Tag Value**
            
            You can select or enter a tag value.
            
            The tag value can be 1 to 128 characters in length, but cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
            
        3.  In the **Configure Tags successfully** message, confirm the information about the instance and the tags, and then click **Close**.
            
    -   Add tags to multiple instances
        
        1.  Select the instances to which you want to add tags and choose **Manage Tag** > **Batch Add Tags** in the lower-left corner.
            
        2.  In the **Configure Tags** dialog box, specify **Tag Key** and **Tag Value**, and then click **OK**.
            
        3.  In the **Configure Tags successfully** message, confirm the information about the instances and the tags, and then click **Close**.
            

## Use tags to search for standard GA instances

After you add tags to GA instances, you can search for the GA instances by tag.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, click **Filter by Tag**.
    
3.  In the **Filter by Tag** section, select a tag key and a tag value.
    
    The instance list displays the standard GA instances that meet the filter conditions.
    
4.  **Optional.** You can click **Clear Filter Condition** above the instance list to clear the filter conditions.
    

## Remove tags from a standard GA instance

If a tag is added to multiple instances and you remove the tag from an instance, the tag is not removed from other instances.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, perform the following steps to remove tags from a standard GA instance:
    
    -   Remove tags from an instance
        
        1.  Find the standard GA instance that you want to manage, move the pointer over the ![标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7261472761/p531215.png) icon in the **Tag** column, and then click **Edit**.
            
        2.  In the **Configure Tags** dialog box, find the key-value pairs that you want to remove, click ![删除图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7018559951/p67530.png) on the right side, and then click **OK**.
            
        3.  In the **Configure Tags successfully** message, confirm the information about the instance and the tags, and then click **Close**.
            
    -   Remove tags from multiple instances
        
        1.  Find the instances from which you want to remove tags and choose **Manage Tag** > **Batch Delete Tags** in the lower-left corner.
            
        2.  In the **Delete Tags for Multiple Resources** dialog box, select the key-value pairs and click **Unbind _N_ tags**.
            
            _N_ represents the number of tags to remove.
            
        3.  In the **Configure Tags successfully** message, confirm the information about the instances and the tags, and then click **Close**.
            

## References

-   [TagResources](/help/en/ga/api-tagresources#doc-api-Ga-TagResources): adds tags to GA resources.
    
-   [ListTagResources](/help/en/ga/api-listtagresources#doc-api-Ga-ListTagResources): queries the tags that are added to GA resources.
    
-   [UntagResources](/help/en/ga/api-untagresources#doc-api-Ga-UntagResources): removes tags from GA resources.
