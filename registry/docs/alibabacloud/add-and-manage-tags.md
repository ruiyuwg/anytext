Express Connect circuits, shared ports, virtual border routers (VBRs) and VBR-to-VPC connections support tags. You can use tags to label and classify them, which facilitates resource search and aggregation. This topic describes how to manage and use tags of Express Connect circuits and shared ports.

## Tag overview

Tags are used to classify instances. Each tag consists of a key-value pair. For more information about tags, see [What is a tag?](/help/en/resource-management/tag/product-overview/tag-overview)

You can add tags to an instance during or after you create the instance. For more information about how to add tags during instance creation, see the following documents:

-   [Create and manage a dedicated connection over an Express Connect circuit](/help/en/express-connect/user-guide/classic-mode#task-2367309)
    
-   [Create a shared port for a new hosted connection of a tenant](/help/en/express-connect/user-guide/manage-connections-for-tenants#section-we6-ay8-jok)
    
-   [Create and manage a VBR](/help/en/express-connect/user-guide/create-and-manage-a-vbr)
    
-   [Create and manage a VBR-to-VPC connection](/help/en/express-connect/user-guide/create-and-manage-a-vbr-to-vpc-connection)
    

## Add tags

1.  Log on to the [Express Connect Console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region.
    
3.  On the **Physical Connection** page, perform the following operations to add tags to Express Connect circuits:
    
    -   Add tags to an instance
        
        1.  You can add tags to an instance by using one of the following methods.
            
            **Tag**
            
            **Method 1**
            
            **Method 2**
            
            No tag added to the instance
            
            1.  Find the Express Connect circuit that you want to manage and move the pointer over the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9452671071/p707300.png)icon in the **Tags** column.
                
            2.  Click **Add** in the pop-up box.
                
            
            1.  Find the Express Connect circuit that you want to manage and click the ID of the circuit.
                
            2.  In the **Basic Information** section of the instance details page, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0552671071/p707299.png) icon on the right side of Tags.
                
            
            Tags added to the instance
            
            1.  Find the Express Connect circuit that you want to manage and move the pointer over the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9452671071/p707302.png)icon in the **Tags** column.
                
            2.  Click **Edit** in the pop-up box.
                
            
        2.  In the **Configure Tags** dialog box, specify the key and value then click **OK**.
            
            **Parameter**
            
            **Description**
            
            **Tag Key**
            
            You can select or enter a tag key.
            
            The tag key must be 1 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
            
            **Tag Value**
            
            You can select or enter a tag value.
            
            The tag value can be 1 to 128 characters in length. It cannot contain `http://` or `https://`.
            
    -   Add tags to multiple instances
        
        1.  Select the instances to which you want to add tags and choose **Set label** > **Batch add labels** in the lower-left corner.
            
        2.  In the **Configure Tags** dialog box, specify **Tag Key** and **Tag Value**, and click **OK**.
            

## Filter instances by tags

After you add tags to instances, you can filter instances by tag.

1.  Log on to the [Express Connect Console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region.
    
3.  On the **Physical Connection** page, click **Filter by Tag**.
    
4.  In the **Filter by Tag** dialog box, select or enter a tag key and a tag value.
    
    You can select or enter a key-value pair, or select or enter only a tag key.
    

## Remove tags from instances

If a tag is added to multiple instances and then removed from one instance, the tag still remains on the other instances.

1.  Log on to the [Express Connect Console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region.
    
3.  On the **Physical Connection** page, perform the following operations to remove tags from Express Connect circuits:
    
    -   Remove tags from an instance
        
        1.  You can find the tags that you want to remove by using one of the following methods.
            
            **Method**
            
            **Procedure**
            
            Method 1:
            
            1.  Find the Express Connect circuit that you want to manage and move the pointer over the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9452671071/p707302.png)icon in the **Tags** column.
                
            2.  Click **Edit** in the pop-up box.
                
            
            Method 2:
            
            1.  Find the Express Connect circuit that you want to manage and click the ID of the circuit.
                
            2.  In the **Basic Information** section of the instance details page, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0552671071/p707299.png) icon on the right side of **Tags**.
                
            
        2.  In the **Configure Tags** dialog box, find the key-value pairs that you want to remove, click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9452671071/p707355.png) on the right side, and then click **OK**.
            
    -   Remove tags from multiple instances
        
        1.  Select the Express Connect circuits from which you want to remove tags and choose **Set label** > **Batch delete labels** in the lower-left corner.
            
        2.  In the **Delete Tags for Multiple Resources** dialog box, find the key-value pairs that you want to remove, click the icon on the right side of the key-value pairs, and then click OK.
            

## References

-   [TagResourcesForExpressConnect](/help/en/express-connect/developer-reference/api-453497#doc-api-Vpc-TagResourcesForExpressConnect): creates tags and adds them to one or more specified Express Connect circuits.
    
-   [UntagResourcesForExpressConnect](/help/en/express-connect/developer-reference/api-untagresourcesforexpressconnect#doc-api-Vpc-UntagResourcesForExpressConnect): removes tags from one or more specified Express Connect circuits.
    
-   [ListTagResourcesForExpressConnect](/help/en/express-connect/developer-reference/api-listtagresourcesforexpressconnect#doc-api-Vpc-ListTagResourcesForExpressConnect): queries tags that are added to an Express Connect circuit.
