This topic describes how to add tags to one or more ApsaraDB RDS instances. You can use tags to classify a large number of RDS instances. Each tag consists of a key and a value. You can use tag keys and values to further classify RDS instances.

## Limits

-   You can add up to 20 tags to each RDS instance. Each tag must have a unique key. If two tags have the same key, the tag that is created later overwrites the earlier tag.
    
-   You can add tags to up to 50 RDS instances at a time.
    
-   RDS instances in different regions do not share the same tag namespace.
    
-   After you remove a tag from an RDS instance, ApsaraDB RDS checks whether the tag is added to other RDS instances. If the tag is not added to other RDS instances, ApsaraDB RDS deletes the tag.
    

## Add tags to an RDS instance

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Click the ![Tag icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0953715561/p441106.png) icon in the **Tags** column of the required RDS instance. In the window that appears, click **Edit**. If you have added a tag to the RDS instance, you can click **Edit** to edit the tag.
    
3.  In the **Configure Tags** dialog box, configure the **Tag Key** and **Tag Value** parameters and then click **OK**.
    

## Add tags to multiple RDS instances at a time

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Select the RDS instances to which you want to add tags and click **Edit Tag** below the instance list.
    
    **Note**
    
    If **Edit Tag** is not displayed on the page, scroll down the instance list to the bottom.
    
    ![Edit tags for multiple RDS instances at a time](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0953715561/p441158.png)
    
3.  In the **Configure Tags** dialog box, configure the **Tag Key** and **Tag Value** parameters and then click **OK**.
    

## Related operations

**Operation**

**Description**

[TagResources](/help/en/rds/api-create-and-bind-tags#doc-api-Rds-TagResources)

Add tags to one or more ApsaraDB RDS instances.
