When you create Elastic Container Instance resources, you can specify a resource group for each resource. This allows you to manage resources by group. This topic describes how to grant Resource Access Management (RAM) users the permissions on resource groups. Then, the RAM users can manage only resources in the resource groups on which they have permissions.

## Background information

You can use resource groups to categorize and manage resources in your Alibaba Cloud account. This simplifies the resource and permission management of your Alibaba Cloud account. Take note of the following items when you use resource groups:

-   A resource group can contain cloud resources that are deployed in different regions. For example, Resource Group A can contain instances from the China (Beijing) and China (Hangzhou) regions.
    
-   If resources that belong to different resource groups in the same account are located within the same region, these resources can be correlated with each other. For example, an instance in the China (Beijing) region of Resource Group A can be added to a virtual private cloud (VPC) in the China (Beijing) region of Resource Group B.
    
-   Resource groups inherit the global permissions of a RAM user. For example, if you authorize a RAM user to manage all Alibaba Cloud resources, all the resource groups in the Alibaba Cloud account are visible to the RAM user.
    

## Scenarios

Elastic Container Instance resources include elastic container instances and image caches. Each Elastic Container Instance resource must belong to only one resource group. When you create an Elastic Container Instance resource, you can specify a resource group for the resource. If no resource group is specified, the resource is added to the default resource group.

**Note**

To change the resource group to which an existing Elastic Container Instance resource belongs, go to the **Resource Groups** page in the [RAM console](https://resourcemanager.console.alibabacloud.com/). For more information, see [Transfer resources across resource groups](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group).

You can add Elastic Container Instance resources that are used for different purposes to specific resource groups. Then, you can specify different RAM users as administrators for these resource groups to manage resources in a decentralized manner.

For example, if you have one elastic container instance for the production environment and the other instance for the test environment, you can add the two instances to their respective resource groups in the production and test environments. Then, you can authorize RAM User A to perform operations on the instance in the resource group of the production environment and RAM User B to perform operations on the other instance in the resource group of the test environment. To test a product, RAM User B performs operations on the instance in the resource group of the test environment. To launch a product, RAM User A performs operations on the instance in the resource group of the production environment. The two environments are managed by different RAM users. This facilitates permission control and helps prevent misoperations.

## Procedure

In the following sample scenarios, two resource groups are created to group Elastic Container Instance resources and RAM users are authorized to perform operations on the resources in specific resource groups.

-   Two resource groups are created. One is created for the production environment, and the other is created for the test environment.
    
-   Two RAM users are created. RAM User A has the AliyunECIFullAccess permission on the production environment, and RAM User B has the AliyunECIFullAccess permission on the test environment.
    
    **Note**
    
    AliyunECIFullAccess is a system policy provided by RAM and contains all permissions to perform operations on Elastic Container Instance resources.
    

Perform the following steps:

1.  Create two resource groups. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
2.  Create two RAM users. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
3.  Specify each RAM user as an administrator for only a resource group. For more information, see [Add RAM authorization](/help/en/resource-management/resource-group/user-guide/add-ram-authorization#task-sst-wjm-4fb).
    
    When you grant permissions to the two RAM users, select the AliyunECIFullAccess permission.
    
4.  Create an elastic container instance with its resource group specified.
    
    -   If you create an elastic container instance on the [instance buy page in the Elastic Container Instance console](https://eci.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.18a33e06qDrEax#/eci/createEci), specify a resource group on the **Other Settings (Optional)** step.
        
    -   If you create an elastic container instance by calling the CreateContainerGroup API operation, pass in ResourceGroupId to specify the resource group ID.
        

## Expected results

Expected results:

-   In the Elastic Container Instance console, the RAM user can view and perform operations only on the elastic container instance in the resource group on which the user has permissions.
    
-   If a RAM user calls an API operation, the RAM user can view and perform operations only on the elastic container instance in the resource group on which the RAM user has permissions. Examples:
    
    -   CreateContainerGroup
        
        To create an elastic container instance, the RAM user must specify the resource group ID for authentication. If no resource group ID is specified or the specified resource group ID is incorrect, the authentication fails.
        
        **Note**
        
        If the RAM user has permissions on the default resource group, the RAM user does not need to specify the resource group ID. The elastic container instance is added to the default resource group by default.
        
    -   DescribeContainerGroups
        
        To query the information about elastic container instances, the RAM user must specify the resource group ID for authentication. If no resource group ID is specified or the specified resource group ID is incorrect, the authentication fails.
        
        **Note**
        
        If the ID of the specified elastic container instance does not match the resource group ID, the elastic container instance does not belong to the resource group. In this case, the RAM user cannot view the information about the elastic container instance even if the resource group ID is correct.
        
    -   DescribeContainerLog
        
        To query the logs of an elastic container instance, the RAM user does not need to specify the resource group ID. The system automatically retrieves the resource group to which the elastic container instance belongs and authenticates the request.
        
    -   DeleteContainerGroup
        
        To delete an elastic container instance, the RAM user does not need to specify the resource group ID. The system automatically retrieves the resource group to which the elastic container instance belongs and authenticates the request.
