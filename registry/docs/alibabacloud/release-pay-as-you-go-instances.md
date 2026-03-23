You can release idle pay-as-you-go Tair (Redis OSS-compatible) instances to reduce resource usage.

## Prerequisites

-   The billing method of the instances that you want to release is pay-as-you-go.
-   Child instances that belong to one or more distributed instances must be released on the **Global Live More** tab of the Global Distributed Cache page in the Tair console. For more information, see [Remove a distributed instance](/help/en/redis/user-guide/release-a-distributed-instance#task-2004070).

## Precautions

-   Only instances in the Running state can be released.
-   Instances that meet specific requirements are retained in the recycle bin for a specific period of time. You can unlock or restore these instances from the recycle bin. For more information, see [Manage instances in the recycle bin](/help/en/redis/user-guide/manage-instances-in-the-recycle-bin#concept-l4n-pl4-m2b).
-   We recommend that you create backup files for the instance that you want to release and download these backup files. For more information, see [Backup and restoration solutions](/help/en/redis/user-guide/backup-and-restoration-solutions/#task-1715457).

## Procedure

**Warning**

This operation immediately deletes the instance and its data. Proceed with caution.

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides.
    
2.  Find the target instance and click **![More ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0215287061/p96323.png)** > **Release** in the **Actions** column.
    
3.  In the dialog box that appears, copy the **Instance ID** to the text box and click **OK**.
    
    For security purposes, complete secondary authentication, such as Multi-Factor Authentication (MFA), as prompted. After you pass the authentication, you do not need to authenticate again for 15 minutes.
    
    If a dialog box indicates that the operation cannot be performed, it is because [release protection](/help/en/redis/user-guide/enable-the-release-protection-feature#task-2495422) is enabled for the instance. Disable release protection and retry the operation.
    

## Related API operations

**API operation**

**Description**

[DeleteInstance](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-deleteinstance-redis#main-107864)

Releases a pay-as-you-go instance.

**Note**

You cannot release a subscription instance by calling an API operation.
