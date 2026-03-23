You cannot directly release a distributed instance. To free up idle resources from a distributed instance, you can remove or release the child instances of the distributed instance.

## **Precautions**

When a child instance is removed or released from a distributed instance, the distributed instance does not experience transient connections. After the last child instance is removed or released, the distributed instance is automatically released.

## Procedure

1.  Log on to the [console](https://kvstore.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Global Distributed Cache**.
    
3.  Find the distributed instance that you want to manage and click the ![加号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6452706261/p167844.png) icon before the instance ID.
    
4.  In the **Child Instances** section, find the child instance that you want to remove and click **Remove** in the **Actions** column.
    
5.  In the dialog box that appears, select the operation that you want to perform.
    
    -   **Remove**: After you perform this operation, the instance is removed from the distributed instance and converted to a regular instance. The data of the instance is retained. You can find the instance in the instance list of the corresponding region.
        
    -   **Release**: After you perform this operation, the instance and its data are permanently deleted. The instance is retained in the recycle bin for seven days. We recommend that you create a backup for the child instance and download the backup set before you release the instance. For more information, see [Automatic or manual backup](/help/en/redis/user-guide/automatic-or-manual-backup).
        
        **Note**
        
        The **Release** option is available only for pay-as-you-go instances.
        
    
6.  Repeat the preceding steps until all child instances of the distributed instance are removed or released. Then, the distributed instance is automatically released.
    

## References

For child instances that have been removed, you can release them if they are no longer needed. For more information, see [Release pay-as-you-go instances](/help/en/redis/user-guide/release-pay-as-you-go-instances)

.

## Related API operations

**API operation**

**Description**

[RemoveSubInstance](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-removesubinstance-redis)

Removes a child instance from a distributed instance and converts the child instance to a regular instance. During this process, data is retained.
