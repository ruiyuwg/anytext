Before you can use Simple Message Queue (SMQ, formerly MNS), you must activate the service on the product page of SMQ. If your account is a RAM user, you must grant permissions to the RAM user before you can use the console or call API operations to manage SMQ resources, and send or receive messages by using SDKs. This topic describes how to activate SMQ and authorize RAM users to access SMQ.

## Prerequisites

An Alibaba Cloud account is created.

## Step 1: Activate SMQ

1.  Go to the [official website of Alibaba Cloud](https://www.alibabacloud.com/). In the top navigation bar, choose **Products >** \> **Middleware >** \> **ApsaraMQ >** \> **Simple Message Queue (formerly MNS)**.
    
2.  On the product page, click **Get it Free**.
    
3.  Read **MNS Terms of Service**, select **I have read and agree MNS Terms of Service**, and then click **activate Now**.
    
    The following message appears on the page: **Congratulations. The service is activated.**
    

## Step 2: (Required for RAM users) Authorize RAM users to access SMQ

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
    

SMQ provides the following system policies. You can grant related permissions to the RAM user based on the permission scope.

**Policy**

**Description**

AliyunMNSFullAccess

The permissions to manage Simple Message Queue (formerly MNS), which are equivalent to the permissions that the Alibaba Cloud account has. A RAM user to which this policy is attached can send and subscribe to all messages and use all the features of the console.

AliyunMNSReadOnlyAccess

The read-only permissions on Simple Message Queue (formerly MNS). A RAM user to which this policy is attached can only read resource information in the console or by calling API operations.

**Note**

System policies cover a large permission scope. For example, after a RAM user is granted AliyunMNSFullAccess that represents full permissions, the RAM user can manage all SMQ resources. To grant fine-grained permissions, SMQ provides custom policies. For more information, see [Permission policies and examples](/help/en/mns/permission-policies-and-examples#section-77c-1j4-v06).

## What to do next

You can click **Console** to create resources. For more information, see [Get started with queue-based messaging](/help/en/mns/getting-started/get-started-with-queues) and [Get started with topic-based messaging](/help/en/mns/getting-started/get-started-with-topics).
