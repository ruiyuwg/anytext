Purchase and configure MaxCompute resource quotas for large-scale distributed training tasks.

## Overview

MaxCompute is a cloud data warehouse with serverless architecture for fast, fully managed analysis of massive datasets. For more information, see [Overview of MaxCompute resources](/help/en/maxcompute/product-overview/what-is-maxcompute).

## Resource types

PAI supports MaxCompute CPU resources with two billing methods:

-   Pay-as-you-go Standard Edition (recommended)
    
-   Subscription standard compute resources
    

Key differences between resource types:

**Note**

MaxCompute billable items include **computing resources**, **storage resources**, and **data transfer**. PAI training tasks typically do not incur **data transfer** charges.

For pay-as-you-go billing, PAI generates bills for algorithm tasks, while MaxCompute generates bills for other tasks (such as SQL).

**Item**

**Pay-as-you-go Standard Edition (recommended)**

**Subscription standard compute resources**

Computing resources

Shared pool. Jobs preempt resources on demand without usage limits.

Reserved resources (exclusive) and optional non-reserved resources.

Storage resources

Shared pool. Data stored on demand without usage limits.

Shared pool. Data stored on demand without usage limits.

Billing - computing resources

[Compute fees (pay-as-you-go)](/help/en/maxcompute/product-overview/computing-pricing-pay-as-you-go#concept-2245130)

[Compute fees (pay-as-you-go)](/help/en/maxcompute/product-overview/computing-pricing-pay-as-you-go#concept-2245130)

Billing - storage resources

[Storage fees (pay-as-you-go)](/help/en/maxcompute/storage-pricing#concept-2245135)

None

Use cases

Projects with fluctuating job volumes requiring flexible storage.

Online projects running stably.

## Prerequisites

-   Alibaba Cloud account (recommended): All operations available without additional authorization.
    
-   RAM user:
    
    -   To enable and purchase MaxCompute resources, grant `AliyunBSSOrderAccess` and `AliyunDataWorksFullAccess` permissions to the RAM user. For more information, see [Prepare a RAM user](/help/en/maxcompute/getting-started/prepare-a-ram-user).
        
    -   To associate MaxCompute resources with a workspace, assign the administrator role to the RAM user in the workspace. For more information, see [Manage members](/help/en/pai/manage-the-members-of-a-workspace#task-2121366).
        
    -   To use MaxCompute resources for model training in Designer, assign the MaxCompute developer role to the RAM user in the workspace. For more information, see [Manage members](/help/en/pai/manage-the-members-of-a-workspace#task-2121366).
        

## Purchase resources

Go to the [MaxCompute purchase page](https://common-buy-intl.alibabacloud.com/) to enable and purchase resources.

## Management

Associate an enabled resource with a workspace to make it available for tasks. Go to Resource Management in MaxCompute console to plan and manage resources.

-   Associate resource with workspace
    
    When creating a workspace, associate it with a resource and specify the project name. For more information, see [Create and manage a workspace](/help/en/pai/user-guide/create-and-manage-workspaces#task-2121913). Training tasks in the workspace use the associated resource.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8209875471/p860311.png)
    
    To modify the associated resource after workspace creation, see [Manage a workspace - Configure compute resources](/help/en/pai/user-guide/create-and-manage-workspaces#967e5acfb1ykq).
    
-   View and manage resources
    
    Log on to the [PAI console](https://pai.console.alibabacloud.com/). On **AI Computing Resources** > **Resource Quota**, view available resources in the current region.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1688489271/p860320.png)
    
    -   View compute unit (CU) quota and billing method (subscription or pay-as-you-go) for the current resource.
        
    -   Subscription quotas control budget by managing CU count. Pay-as-you-go quotas have no CU control. Click **Resource Management** to plan quotas for subscription resources. For more information, see [Compute resources - Quota management](/help/en/maxcompute/user-guide/manage-quotas-in-the-maxcompute-console).
