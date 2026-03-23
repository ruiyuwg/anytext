If you have a large number of instances, you can create multiple tags and add different tags to different instances to classify and filter the instances by tag.

## Precautions

-   A tag consists of a key-value pair. Each key must be unique for an Alibaba Cloud account in a region. This constraint does not apply to key values.
    
    **Note**
    
    A key can have zero to multiple values.
    
-   You can edit tags for a maximum of 50 instances at a time.
    
-   You can add up to 20 tags to an instance.
    
-   You can add or remove up to 20 tags at a time.
    

## Create tags

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides.
    
2.  Perform one of the following steps to create tags for one or more instances:
    
    -   Create tags for a single instance
        
        In the **Tag** column corresponding to the instance that you want to manage, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9428364271/p838138.png) icon.
        
    -   Create tags for multiple instances
        
        Select the instances and click **Edit Tags** below the instance list.
        
    
3.  In the dialog box that appears, specify tag keys and tag values.
    
    **Note**
    
    You can select an existing tag to add the tag to the instance.
    
4.  In the lower-right corner of the dialog box, click **OK**.
    

## Filter instances by tag

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides.
    
2.  On the **Instances** page, click the **tag filter** and select the desired tag key and tag value.
    
    **Note**
    
    After you create a tag or update an existing tag, you must refresh the page to view the updated tag list.
    
3.  Click **Search**.
    

## Remove or delete tags

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides.
    
2.  In the **Tag** column corresponding to the instance that you want to manage, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9428364271/p838138.png) icon and click **Edit**.
    
3.  In the dialog box that appears, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9428364271/p838142.png) icon next to the tag that you want to remove or delete.
    
    **Note**
    
    -   You can remove up to 20 tags at a time.
        
    -   If you remove a tag from all instances to which the tag is added, the tag is automatically deleted.
        
    -   An instance keeps running when you remove tags from the instance. After all tags of an instance are removed, the instance cannot be filtered by tag.
        
    
4.  Click **OK**.
    

## Related API operations

**Operation**

**Description**

[TagResources](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-tagresources-redis)

Adds tags to one or more instances.

[ListTagResources](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-listtagresources-redis)

Queries the tags that are added to an instance.

[UntagResources](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-untagresources-redis)

Removes tags from one or more instances.
