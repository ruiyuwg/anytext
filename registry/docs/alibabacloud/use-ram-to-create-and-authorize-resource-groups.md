If you have multiple resources on Alibaba Cloud and you want to grant users the permissions to view and manage specific resources, you can create resource groups and classify the resources into the resource groups. Then, you can create Resource Access Management (RAM) users in RAM and grant permissions to the RAM users on different resource groups.

## Background information

A gaming enterprise is developing three gaming projects. Each project requires various cloud resources.

The enterprise has the following requirements:

-   Independent project management: Project managers can manage their own project members and the permissions that the project members require to access cloud resources.
    
-   Separate bills: The financial department of the enterprise requires that each project receives separate bills.
    

The enterprise has the following optional solutions:

-   Multi-account solution
    
    -   This solution supports independent project management. The enterprise creates three Alibaba Cloud accounts (one account for each project) and assigns one project manager for each account. Then, project managers can manage their own project members and access permissions of each member.
        
    -   This solution supports separate bills. By default, each Alibaba Cloud account receives separate bills. The enterprise can use the consolidated billing feature provided by Alibaba Cloud to consolidate the bills and invoices of the multiple Alibaba Cloud accounts.
        
-   Single-account solution with tagged resources
    
    -   This solution does not support independent project management. The enterprise can tag its cloud resources by group, but project managers cannot manage their own members and access permissions of each member.
        
    -   This solution supports separate bills. The enterprise can tag its cloud resources by project. Then, each project can receive separate bills.
        
-   Single-account resource group-based solution
    
    -   This solution supports independent project management. Each resource group has an administrator. Administrators can manage their own group members and access permissions of each member.
        
    -   This solution supports separate bills. Alibaba Cloud provides the consolidated billing feature that allows resource groups to receive separate bills.
        

The multi-account solution is suitable for scenarios in which different projects are completely isolated and managed by project members. The central team can manage multiple accounts in a centralized manner to ensure consistency and standard implementation. The single-account resource group-based solution is suitable for scenarios in which a central team is responsible for the IT and O&M operations of the entire enterprise, and different project teams manage resources in related resource groups. The gaming enterprise decides to adopt the single-account resource group-based solution. This topic describes how to implement the single-account resource group-based solution.

## Solution

A resource group is a mechanism in which resources are managed by group in an Alibaba Cloud account. The single-account resource group-based solution allows the enterprise to create three resource groups and three RAM users that correspond to the three gaming projects by using only one Alibaba Cloud account. The three RAM users are allocated to three administrators of the three gaming projects. For more information, see [Resource Group overview](/help/en/resource-management/resource-group/product-overview/resource-group-overview).

![资源组解决方案](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2132559951/p14357.png)

Resource group authorization takes effect only for cloud services and resources that support resource groups. For more information, see [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group).

## Procedure

The following operations are performed by an account administrator.

1.  Create RAM users in the [RAM console](https://ram.console.alibabacloud.com).
    
    In this example, create the following three RAM users. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
    -   RAM user `Alice`: the administrator of Gaming Project 1.
        
    -   RAM user `Bob`: the administrator of Gaming Project 2.
        
    -   RAM user `Charlie`: the administrator of Gaming Project 3.
        
    
2.  Create resource groups in the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
    In this example, create the following three resource groups For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group).
    
    -   Resource group `Game1`: manages resources for Gaming Project 1.
        
    -   Resource group `Game2`: manages resources for Gaming Project 2.
        
    -   Resource group `Game3`: manages resources for Gaming Project 3.
        
    
3.  Classify resources into the resource groups.
    
    -   Newly purchased or created resources: When you purchase or create a resource, select a resource group. For more information, see [Purchase resources for a resource group](/help/en/resource-management/resource-group/user-guide/groups-for-newly-created-resources).
        
    -   Existing resources: Transfer resources to the required resource group. For more information, see [Transfer resources across resource groups](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group).
        
    
4.  Grant permissions on the required resource groups to the RAM users.
    
    In this example, the enterprise wants to set three RAM users as resource group administrators. You must attach the `AdministratorAccess` policy to grant the RAM users the full management permissions on the required resource groups. For example, you can attach the `AdministratorAccess` policy to the RAM user `Alice` to grant the permissions on the `Game1` resource group.
    
    In actual business environments, we recommend that you grant only the required permissions to RAM users based on the principle of least privilege. This helps prevent security risks caused by excessive user permissions.
    
    You can grant permissions to the RAM users by using one of the following methods:
    
    -   Grant permissions to RAM users in the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups). For more information, see [Add RAM authorization](/help/en/resource-management/resource-group/user-guide/add-ram-authorization).
        
    -   Grant permissions to RAM users in the [RAM console](https://ram.console.alibabacloud.com). For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
        
        **Important**
        
        You must set the **Resource Scope** parameter to **Resource Group**.
        
    

## Result

In this example, Alice, Bob, and Charlie are the resource group administrators of Game1, Game2, and Game3. The administrators have the following permissions:

-   In the consoles of the related cloud services, the administrators can view, manage, and create resources in the related resource groups.
    
    **Important**
    
    The administrators can view the resources in the resource groups only after the administrators select the related resource groups.
    
-   In the Resource Management console, the administrators can manage RAM users, RAM user groups, and RAM roles that have permissions on the related resource groups.
    

## **References**

To allow a RAM user to view and manage only the ECS instances on which the RAM user has permissions, refer to [Use a resource group to restrict a RAM user to managing only specific ECS instances](/help/en/ram/use-cases/use-a-resource-group-to-manage-an-ecs-instance).
