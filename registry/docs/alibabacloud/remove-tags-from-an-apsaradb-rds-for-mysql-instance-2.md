This topic describes how to remove tags from an ApsaraDB RDS for PostgreSQL instance. If you change the configuration of your RDS instance or you no longer require specific tags, you can remove these tags from your RDS instance.

## Limits

-   You can remove a maximum of 20 tags at a time.
    
-   After you remove a tag from your RDS instance, ApsaraDB RDS checks whether the tag is added to other RDS instances. If the tag is not added to other RDS instances, the tag is deleted.
    

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  Select one of the following methods to remove tags from RDS instances:
    
    ## Method 1: Remove a tag from an RDS instance
    
    1.  Find the RDS instance and move the pointer over the ![标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9769983561/p436854.png) icon in the **Tags** column. In the message that appears, click **Edit**.
        
    2.  In the **Configure Tags** dialog box, click the ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9769983561/p436857.png) icon to the right of the tag that you want to remove.
        
    3.  Click **OK**.
        
    
    ## Method 2: Remove tags from multiple RDS instances at a time
    
    1.  Select the RDS instances from which you want to remove tags.
        
    2.  Click **Delete Tags for Multiple Resources** below the instance list.
        
    3.  In the **Delete Tags for Multiple Resources** dialog box, select the tags that you want to remove.
        
    4.  Click **Unbind X tags**. In the **Configure Tags successfully** message, you can confirm the removal details.
        
    

## Related operations

**Operation**

**Description**

[UntagResources](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-untagresources-mysql)

Removes tags from instances.
