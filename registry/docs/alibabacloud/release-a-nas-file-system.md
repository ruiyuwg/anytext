If you no longer use a NAS file system, you can delete it to prevent additional costs.

**Warning**

After you delete a file system, the data stored in the file system is deleted and cannot be restored. Before you delete a file system, make sure that you no longer need to use the data in the file system. If you need to continue to use the data in the file system, migrate the data in advance. For more information about how to migrate data, see [Usage notes](/help/en/nas/user-guide/usage-notes-2/).

## Prerequisites

-   If you are a RAM user, make sure that the RAM user has full access to the file system. For more information, see [Example 1: Grant a RAM user the permissions on a NAS file system](/help/en/nas/user-guide/perform-access-control-based-on-ram-policies#section-gq2-wj6-mgk).
    
-   The file system is unmounted from the directory that was previously mounted. For more information, see [Unmount file systems](/help/en/nas/user-guide/unmount-file-systems/).
    

## Precautions

If the billing method of an Extreme NAS file system is subscription, you cannot delete the file system by using the console or by calling API operations. To delete a subscription Extreme NAS file system, you can unsubscribe from the file system based on the subscription status on the **Unsubscribe** page of the Expenses and Costs console. For more information, see [Unsubscribe from a subscription Extreme NAS file system](/help/en/nas/product-overview/refund-policy#section-yqb-8b0-0qz).

## Procedure

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose ****File System**** > ****File System List****.
    
3.  In the top navigation bar, select the resource group and region where your file system resides.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1691062371/p872876.png)
    
4.  On the **File System List** page, find the file system that you want to delete, and choose **![扩展](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0962326661/p494575.png)** > **Delete** in the **Actions** column.
    
5.  In the **Delete File System** dialog box, confirm the name of the file system and click **Delete**.
    
    If a General-purpose NAS file system has related resources or configurations, such as mount targets, lifecycle policies, log dump tasks, data retrieval tasks, and the recycle bin feature, you must clear these resources and configurations in the **Delete File System** dialog box, and then click **Delete**.
    
    **Note**
    
    -   When you delete a file system, you do not need to delete the associated permission group. For more information about how to delete a permission group and custom rules in the permission group, see [Manage a permission group](/help/en/nas/user-guide/manage-a-permission-group).
        
    -   You cannot delete or modify the default permission group.
        
    
    After the file system is deleted, no fees are incurred for the file system in the next billing cycle.
    

## **References**

For more information about how to unsubscribe from NAS resources, see [Refund policy](/help/en/nas/product-overview/refund-policy).

For more information about how to query the bills and resource usage of NAS, see [Resource usage and bills](/help/en/nas/product-overview/view-billing-and-usage-details).

## **FAQ**

### **How do I deactivate NAS or stop being charged for NAS?**

You cannot stop being charged for NAS by deactivating the service. This is because deactivating the service can result in business disruptions. However, you can deactivate NAS or stop being charged for NAS based on the following solutions:

-   Pay-as-you-go
    
    If you no longer need to use a pay-as-you-go NAS file system, make sure that the data has been migrated or is no longer used. Then, unmount the directory from the compute node, log on to the [NAS console](https://nas.console.alibabacloud.com/cn-hangzhou/filesystem), and delete the file system from the file system list. This way, no fee is deducted in the next billing cycle. For more information about how to delete a file system, see [Delete a file system](/help/en/nas/user-guide/delete-a-file-system).
    
    **Note**
    
    If the files that you store in a General-purpose NAS file system have not been accessed for more than 14 days but you still want to retain the files, we recommend that you enable the lifecycle management feature to dump the files to the IA or Archive storage class. This way, you can reduce the costs by 50% to 80%.
    
    For more information about how to switch storage classes by using the lifecycle management feature, see [Manage lifecycle policies](/help/en/nas/user-guide/manage-a-lifecycle-policy).
    
-   Subscription
    
    You cannot delete a subscription Extreme NAS file system by using the console or by calling API operations. For information about how to delete a subscription Extreme NAS file system, see [Unsubscribe from a subscription Extreme NAS file system](/help/en/nas/product-overview/refund-policy#section-yqb-8b0-0qz). If you unsubscribe from a file system, the data stored in the file system is directly deleted. Before you unsubscribe from a file system, make sure that the data has been migrated or is no longer used.
    
-   Storage plan
    
    For a General-purpose NAS file system to which a storage plan has been attached, you cannot manually detach the storage plan. You can detach the storage plan only by deleting the related General-purpose NAS file system. For information about how to replace a storage plan with a resource plan, see [How do I replace a storage plan with a resource plan?](/help/en/nas/product-overview/billing-faq#section-4gi-5t5-d6q)
    

### **Why do I still receive a bill after I delete a NAS file system?**

Bills are not generated in real time. The bill you receive is the bill of the previous hour. You can wait until the billing data is updated.
