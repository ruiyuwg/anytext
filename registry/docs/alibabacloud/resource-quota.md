Allocate resources in the resource pool by creating or updating resource quotas. After a resource quota is associated with a specific workspace, you can use it for AI development and training within the workspace. This allows you to use and manage resources in a flexible and efficient manner.

## Features

After you purchase resources in the resource pool, you can create resource quotas or adjust the limits of existing resource quotas. Resources in different resource groups can be associated with the same resource quota. You can also create a multi-level hierarchy of child-level resource quotas.

The following types of resource quotas are supported based on resource types:

-   **Cloud-native resource quotas**: include Lingjun resources and general computing resources. You can create parent and child resource quotas to form a tree structure (called QuotaTree) as shown in the following figure, which provides enhanced queueing and scheduling capabilities. Among them:
    
    -   The resource quota created by allocating resources from the resource pool is Root Quota.
        
    -   With the root resource quota as the parent node, you can continue to divide multiple levels of Child Quotas.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7186513771/CAEQQRiBgMCOxJPJvxkiIGVlMjIxMTBhNWJkYzQwMTA4Mjc0ZThjNDk2MmNlYmMx4199921_20240131212402.740.svg)
        
        You can divide and use quotas based on organizations or projects to manage jobs and resources more efficiently.
        
-   **Big data engine resource quotas**: include MaxCompute and fully managed Flink resources.
    

## **Create and use resource quotas**

-   Cloud-native resource quotas
    
    To create Lingjun resources or general computing resource quotas, see [Create a resource quota](/help/en/pai/user-guide/create-resource-quotas).
    
-   Big data resource quotas
    
    -   For more information about how to purchase and use MaxCompute resources, see [MaxCompute resource quota](/help/en/pai/user-guide/manage-maxcompute-resources).
        
    -   For more information about how to purchase and use fully managed Flink resources, see [Fully managed Flink Resource Management](/help/en/pai/user-guide/flink-resource-management).
        

## **Manage cloud-native resource quotas**

-   Basic configurations: includes operations such as creating child-level quotas, scaling, viewing quota lists and details. For more information, see [Manage resource quotas](/help/en/pai/user-guide/manage-resource-quotas).
    
-   Advanced configurations:
    
    -   [Scheduling policy](/help/en/pai/user-guide/scheduling-policies): Improve dequeuing efficiency and computing resource utilization by configuring scheduling policies.
        
    -   [Preemption policy](/help/en/pai/user-guide/resource-quota-quota-preemption-policy): Enable computing resource preemption at the current or child level, allowing tasks submitted in the current resource quota to preempt computing resources from peer or child-level resource quotas, thereby fully utilizing computing resources.
        
    -   [Quota monitoring and alerting](/help/en/pai/user-guide/resource-quota-monitoring-and-alerting): View monitoring data, configure monitoring alert notifications, and subscribe to monitoring metrics through [Cloud Monitor](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor) and [ARMS](/help/en/arms/product-overview/what-is-arms).
        

Additionally, you can effectively manage and utilize resources by creating parent-child resource quotas to allocate resources to different teams. For more information, see [Training and inference resource management](/help/en/pai/user-guide/training-push-integrated-resource-management).
