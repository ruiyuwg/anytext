This topic describes how to remove tags from an ApsaraDB RDS for SQL Server instance. If you change the configuration of your RDS instance or you no longer require specific tags, you can remove these tags from your RDS instance.

## Limits

-   You can remove a maximum of 20 tags at a time.
    
-   After you remove a tag from your RDS instance, ApsaraDB RDS checks whether the tag is added to other RDS instances. If the tag is not added to other RDS instances, ApsaraDB RDS deletes the tag.
    

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  Use one of the following methods to remove tags:
    
    ## Remove a tag from an RDS instance
    
    1.  Find the RDS instance and move the pointer over the ![标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9769983561/p436854.png) icon in the Tags column. In the popover that appears, click **Edit**.
        
    2.  Click the ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9769983561/p436857.png) icon on the right side of the tag that you want to remove.
        
    3.  Click **OK**.
        
    
    ## Remove tags from multiple RDS instances at a time
    
    1.  Select the RDS instances from which you want to remove tags.
        
    2.  Click **Delete Tags for Multiple Resources** below the instance list.
        
    3.  In the dialog box that appears, select the tags that you want to remove.
        
    4.  Click **Unbind x tags**. x indicates the number of tags that you want to remove.
        
        In the **Configure Tags successfully** message, you can view the removal details.
        
    

## References

You can call an API operation to remove tags from a specific ApsaraDB RDS instance. For more information, see [UntagResources](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-untagresources-sqlserver).
