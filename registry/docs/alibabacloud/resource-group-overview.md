Resource Group allows you to sort resources owned by your Alibaba Cloud account into groups. This simplifies resource and permission management within your Alibaba Cloud account.

## **Features**

-   **Manage resources by resource group**
    
    You can create resource groups to manage multiple types of resources of your Alibaba Cloud account in multiple regions in a centralized manner. You can also sort resources into groups based on various dimensions such as department, project, and environment. For more information, see [Best practices for designing resource groups](/help/en/resource-management/resource-group/use-cases/best-practices-for-designing-resource-groups) and [Best practices for resource grouping](/help/en/resource-management/resource-group/use-cases/resource-grouping-best-practices).
    
-   **Grant permissions on resources by resource group**
    
    You can grant permissions on different resource groups to different RAM users within an Alibaba Cloud account.
    
-   **Allocate resource costs by resource group**
    
    You can view billing statements by resource group to facilitate cost allocation.
    

## **Methods of managing resources by resource group**

We recommend that you use one of the following methods to manage newly created or existing resources by resource group. For more information, see [Best practices for resource grouping](/help/en/resource-management/resource-group/use-cases/resource-grouping-best-practices).

**Resource scenario**

**Method of managing resources by resource group**

Manage newly created resources

When you create a resource in the console of an Alibaba Cloud service, you can specify a custom resource group and add the resource to the resource group.

When you create a resource by calling an API operation of an Alibaba Cloud service, you can specify a custom resource group in the request parameters of the API operation to add the resource to the resource group.

Manage existing resources

You can use the Automatic Resource Transfer feature to automatically transfer the resources that meet specific conditions to the desired resource groups.

-   [Custom transfer rules](/help/en/resource-management/resource-group/user-guide/auto-group-of-custom-rules): enable resources to be automatically transferred based on conditions such as resource names and tags.
    
-   [Transfers rule for associated resources](/help/en/resource-management/resource-group/user-guide/use-the-transfer-associated-resources-feature): enable associated resources to be automatically transferred to resource groups to which their primary resources belong.
    

You can transfer an existing resource from a resource group to a custom resource group on the [Resource Search page](https://resourcemanager.console.alibabacloud.com/resource-center) or the [Resource Group page](https://resourcemanager.console.alibabacloud.com/resource-groups) of the Resource Management console.

Both the Resource Group and Resource Center services provided by Resource Management deliver a global view of resources and allow you to search for and transfer resources across Alibaba Cloud services or regions. For more information, see [Transfer resources between resource groups manually](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group).

You can call the [API operation that is used to move multiple resources to a resource group at a time](/help/en/resource-management/api-moveresources) to manually transfer resources. The [API operation](/help/en/resource-management/api-moveresources) is provided by the Resource Group service and allows you to transfer multiple resources that reside in different regions or belong to different services or resource groups to the same resource group at a time.

You can call the resource transfer API operation provided by the related Alibaba Cloud service to manually transfer resources. For more information, see the **References** column in [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group).

## **Services integrated with Resource Group**

**Service name**

**Scenario**

**Category**

**References**

RAM

You want to grant permissions on resources in different resource groups to different RAM users within an Alibaba Cloud account to isolate the permissions of the RAM users on the resources.

Fine-grained access control

-   [Classify resources into resource groups and grant permissions on the resource groups](/help/en/resource-management/resource-group/use-cases/use-ram-to-create-and-authorize-resource-groups)
    
-   [Use a resource group to grant a RAM user the permissions to manage a specific ECS instance](/help/en/resource-management/resource-group/use-cases/use-a-resource-group-to-manage-an-ecs-instance)
    

Billing Management

You want to create cost centers based on resource groups and query bills for different resources by resource group.

Resource cost allocation

[View billing statements by resource group](/help/en/resource-management/resource-group/use-cases/view-billing-statements-by-resource-group)

Cloud Config

You want to specify the resource groups on which audit rules can take effect and audit the compliance of the resources in the resource groups based on multiple standards.

Compliance audit

[Use resource groups and Cloud Config to audit compliance of resources based on multiple standards](/help/en/resource-management/resource-group/use-cases/use-resource-groups-and-cloud-config-to-audit-compliance-of-resources-based-on-multiple-standards)

Tag

You want to use the automatic tag inheritance feature provided by Resource Management to enable resources that are added to or created in a resource group to automatically inherit the tags that are added to the resource group.

Resource management

[Enable automatic tag inheritance from a resource group](/help/en/resource-management/tag/user-guide/enable-automatic-tag-inheritance-from-a-resource-group)

CloudMonitor

You want to create application groups from resource groups in the CloudMonitor console and add the resources in the resource groups to the application groups for monitoring and management.

O&M management

[Use resource groups and CloudMonitor to monitor and manage resources used by different business lines](/help/en/resource-management/resource-group/use-cases/use-resource-groups-and-cloudmonitor-to-monitor-and-manage-resources-used-by-different-business-lines)

Resource Orchestration Service (ROS)

You want to determine resources that require O&M by selecting resource groups and want to use ROS to implement efficient O&M and management of the resources.

O&M management

[Use resource groups and ROS to implement efficient O&M and management of resources](/help/en/resource-management/resource-group/use-cases/use-resource-groups-and-ros-for-efficient-maintenance-and-management-of-resources)

CloudOps Orchestration Service (OOS)

You want to determine resources that require O&M by selecting resource groups and want to use OOS to implement efficient O&M and management of the resources.

O&M management

[Use resource groups and OOS for efficient O&M and management of resources](/help/en/resource-management/resource-group/use-cases/use-resource-groups-and-oos-for-efficient-maintenance-and-management-of-resources)

## Services that work with Resource Group

For more information, see [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group).

## Limitations

**Item**

**Upper limit**

**Adjustable**

Number of resource groups

30

[Apply for a quota](https://quotas.console.alibabacloud.com/products/entconsole/quotas?groupCode=entconsole_group)

Number of characters for a resource group identifier

50

N/A

Number of characters for a resource group name

50

N/A

Number of custom transfer rules

10

N/A

Number of transfer conditions in each custom transfer rule

10

N/A

## **Billing**

This service provides basic capabilities for cloud platforms and is free of charge. You need to pay separately for the purchased cloud products.
