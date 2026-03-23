Each workspace includes two default queues for running tasks: dev\_queue and root\_queue. To isolate and manage resources, you can add queues. This topic describes basic queue operations.

## Prerequisites

You have created a workspace. For more information, see [Manage workspaces](/help/en/emr/emr-serverless-spark/user-guide/manage-workspaces).

## **Add a queue**

**Note**

You can add queues to isolate and manage resources. If you do not add a new resource queue, you can use the default dev\_queue and root\_queue to run tasks. If you purchase a subscription quota, the system creates a `subscription_queue` queue by default.

1.  Go to the Resource Management page.
    
    1.  Log in to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **Spark**.
        
    3.  On the **Spark** page, click the name of the target workspace.
        
    4.  On the **EMR Serverless Spark** page, in the navigation pane on the left, click **Resource Management**.
        
2.  On the **Queue Resources** tab, click **Add Queue**.
    
3.  In the **Add Queue** dialog box, set the following parameters based on the billing method of the workspace and click **OK**.
    
    ## Pay-as-you-go
    
    **Parameter**
    
    **Description**
    
    **Queue Name**
    
    The queue name must be unique.
    
    **Note**
    
    You cannot change the **Queue Name** after the queue is added.
    
    **Elastic Concurrency Limit (CU)**
    
    The maximum number of compute units (CUs) that can run concurrently in the queue. Based on the configuration of the session instance, set the concurrency limit of the selected deployment queue to at least 3 CU.
    
    To adjust the concurrency limit for other queues, see [Adjust queue resources](#2f19b70b019ql)**.**
    
    **Application Environment**
    
    -   **Development**: An environment where developers write, test, and debug code. It usually includes an integrated development environment (IDE), a versioning system, and various debugging tools for developers to build and debug software.
        
    -   **Production**: The actual running environment for users. It provides stable, efficient, and secure services.
        
    
    ## Subscription
    
    **Parameter**
    
    **Description**
    
    **Queue Name**
    
    The queue name must be unique.
    
    **Note**
    
    You cannot change the **Queue Name** after the queue is added.
    
    **Fixed Resource Quota (CU)**
    
    The maximum amount of resources is determined by the remaining subscription quota of the current workspace. If the remaining subscription quota is insufficient, you can adjust it in one of the following ways:
    
    -   Adjust the resource amount of other queues. For more information, see [Adjust queue resources](#2f19b70b019ql)**.**
        
    -   Purchase a new subscription quota. For more information, see [Subscription](/help/en/emr/emr-serverless-spark/product-overview/computing-resources-package-year-and-package-month).
        
    
    **Application Environment**
    
    -   **Development**: An environment where developers write, test, and debug code. It usually includes an IDE, a versioning system, and various debugging tools for developers to build and debug software.
        
    -   **Production**: The actual running environment for users. It provides stable, efficient, and secure services.
        
    
    ## Hybrid billing
    
    **Parameter**
    
    **Description**
    
    **Queue Name**
    
    The queue name must be unique.
    
    **Note**
    
    You cannot change the **Queue Name** after the queue is added.
    
    **Elastic Concurrency Limit (CU)**
    
    The maximum number of CUs that can run concurrently in the queue. Based on the configuration of the session instance, set the concurrency limit of the selected deployment queue to at least 3 CU.
    
    To adjust the concurrency limit for other queues, see [Adjust queue resources](#2f19b70b019ql)**.**
    
    **Fixed Resource Quota (CU)**
    
    The maximum amount of resources is determined by the remaining subscription quota of the current workspace. If the remaining subscription quota is insufficient, you can adjust it in the following way:
    
    Adjust the resource amount of other queues. For more information, see [Adjust queue resources](#2f19b70b019ql)**.**
    
    **Application Environment**
    
    -   **Development**: An environment where developers write, test, and debug code. It usually includes an IDE, a versioning system, and various debugging tools for developers to build and debug software.
        
    -   **Production**: The actual running environment for users. It provides stable, efficient, and secure services.
        
    

## Edit a queue

### Adjust queue resources

Follow the steps for the billing method of your workspace.

## Pay-as-you-go

1.  On the **Queue Resources** tab of the **Resource Management** page, click **Edit Queue** in the Actions column of the target queue.
    
2.  On the **Resources** tab of the **Edit Queue** dialog box, adjust the **Elastic Concurrency Limit (CU)**.
    
3.  Click **OK**.
    

## Subscription

1.  On the **Queue Resources** tab of the **Resource Management** page, click **Edit Queue** in the Actions column of the target queue.
    
2.  On the **Resources** tab of the **Edit Queue** dialog box, adjust the **Fixed Resource Quota (CU)**.
    
3.  Click **OK**.
    

## Hybrid billing

1.  On the **Queue Resources** tab of the **Resource Management** page, click **Edit Queue** in the Actions column of the target queue.
    
2.  On the **Resources** tab of the **Edit Queue** dialog box, adjust the **Fixed Resource Quota (CU)** and **Elastic Concurrency Limit (CU)**.
    
3.  Click **OK**.
    

### **Edit queue permissions**

1.  On the **Queue Resources** tab of the **Resource Management** page, click **Edit Queue** in the Actions column of the target queue.
    
2.  In the **Edit Permission** dialog box, click the **Permission** tab.
    
3.  Add, modify, or remove users and their permissions.
    
4.  Click **OK**.
    

## **Delete a queue**

**Important**

-   You cannot delete the root\_queue.
    
-   Before you delete a resource queue, make sure that it is not associated with any tasks in the workspace. Otherwise, all associated tasks will be affected.
    

1.  On the **Queue Resources** tab of the **Resource Management** page, click **Delete** in the Actions column of the target queue.
    
2.  In the **Delete Queue** dialog box, click **Delete Queue**.
    

## **References**

-   For information about operations such as creating and running workflows, see [Manage workflows](/help/en/emr/emr-serverless-spark/user-guide/manage-workflows).
    
-   For information about operations related to permissions, see [Manage users and roles](/help/en/emr/emr-serverless-spark/user-guide/manage-users-and-roles).
    
-   For information about operations related to SQL sessions, see [Manage SQL sessions](/help/en/emr/emr-serverless-spark/user-guide/manage-sql-sessions).
