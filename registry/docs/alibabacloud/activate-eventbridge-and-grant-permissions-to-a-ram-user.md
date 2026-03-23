Before you use EventBridge, you must activate the service on the EventBridge product page. This topic describes how to activate EventBridge. If you are a Resource Access Management (RAM) user, you must be granted the required permissions by an Alibaba Cloud account before you use the EventBridge console or call API operations to access resources in EventBridge and use the resources to route events.

## Prerequisites

An Alibaba Cloud account is created.

## Step 1: Activate EventBridge

1.  Log on to the [Alibaba Cloud official website](https://www.aliyun.com/) and choose **Products** > **Middleware** > **Applications Integration** > **EventBridge**.
    
2.  On the [EventBridge product page](https://www.alibabacloud.com/product/eventbridge?spm=a3c0i.7919406.6791778070.dnavproductmsg5.2e232129Wod0A6), click **Activate Now**.
    
3.  Read and agree to the **EventBridge (Pay-as-you-go) Terms of Service**. Then, click **Activate Now**.
    
    After you activate EventBridge, you can log on to the EventBridge console.
    

## Step 2: (Required for RAM users) Grant permissions to a RAM user

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, find the required RAM user, and click **Add Permissions** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6555724171/p794639.png)
    
    You can also select multiple RAM users and click **Add Permissions** in the lower part of the page to grant permissions to the RAM users at a time.
    
4.  In the **Grant Permission** panel, grant permissions to the RAM user.
    
    1.  Configure the **Resource Scope** parameter.
        
        -   **Account**: The authorization takes effect on the current Alibaba Cloud account.
            
        -   **ResourceGroup**: The authorization takes effect on a specific resource group.
            
            **Important**
            
            If you select Resource Group for the Resource Scope parameter, make sure that the required cloud service supports resource groups. For more information, see [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group#concept-flc-p3m-4fb). For more information about how to grant permissions on a resource group, see [Use a resource group to grant a RAM user the permissions to manage a specific ECS instance](/help/en/ram/use-cases/use-a-resource-group-to-manage-an-ecs-instance).
            
    2.  Configure the Principal parameter.
        
        The principal is the RAM user to which you want to grant permissions. The current RAM user is automatically selected.
        
    3.  Configure the Policy parameter.
        
        A policy contains a set of permissions. Policies can be classified into system policies and custom policies. You can select multiple policies at a time.
        
        -   System policies: policies that are created by Alibaba Cloud. You can use but cannot modify these policies. Version updates of the policies are maintained by Alibaba Cloud. For more information, see [Services that work with RAM](/help/en/ram/product-overview/services-that-work-with-ram).
            
            **Note**
            
            The system automatically identifies high-risk system policies, such as AdministratorAccess and AliyunRAMFullAccess. We recommend that you do not grant unnecessary permissions by attaching high-risk policies.
            
        -   Custom policies: You can manage and update custom policies based on your business requirements. You can create, update, and delete custom policies. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy).
            
    4.  Click **Grant permissions**.
        
    
5.  Click **Close**.
    

EventBridge provides the following system policies. You can grant permissions to the RAM user based on the permission scope.

**Policy**

**Description**

AliyunEventBridgeFullAccess

The permissions to manage EventBridge. Such permissions are equivalent to the permissions that an Alibaba Cloud account has. A RAM user to which this policy is attached can publish events and use all features of the EventBridge console.

AliyunEventBridgeReadOnlyAccess

The read-only permissions on EventBridge. A RAM user to which this policy is attached can only read resource information in the EventBridge console or by calling API operations.

AliyunEventBridgeResourceCreatePolicy

The permissions to create resources in EventBridge. A RAM user to which this policy is attached can create resources in the EventBridge console or by calling API operations.

AliyunEventBridgeResourceUpdatePolicy

The permissions to modify resources in EventBridge. A RAM user to which this policy is attached can modify resources in the EventBridge console or by calling API operations.

AliyunEventBridgeResourceDeletePolicy

The permissions to delete resources from EventBridge. A RAM user to which this policy is attached can delete resources in the EventBridge console or by calling API operations.

AliyunEventBridgePutEventsPolicy

The permissions to publish events in EventBridge. A RAM user to which this policy is attached can publish events in the EventBridge console or by calling API operations.

**Note**

System policies cover a large permission scope. For example, if you attach the AliyunEventBridgeFullAccess policy to a RAM user, the RAM user can manage all resources in EventBridge. To meet your requirements on fine-grained permission management, EventBridge also provides custom policies. For more information, see the "[Custom policies](/help/en/eventbridge/policies#section-eay-85t-px3)" section of the Policies topic.

## What to do next

You can click **Console** to create resources. For more information, see [Overview](/help/en/eventbridge/user-guide/event-source-overview#concept-1988888).
