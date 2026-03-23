This topic uses an example to describe how to effectively group resources. Resource grouping lays a foundation for permission isolation, cost allocation, and operations management.

## **Overview**

As cloud usage deepens and business expands, the number of resources within a single account increases dramatically, which increases resource management complexity. You can use [resource groups](/help/en/resource-management/resource-group/product-overview/resource-group-overview) to sort resources within a single account based on dimensions such as department, project, and environment. This helps resolve complex issues such as fine-grained authorization, cost allocation, and group-based monitoring and improves resource management efficiency.

## **Procedure**

### **Phase 1: Plan and design resource groups**

-   Check [Alibaba Cloud services that support resource groups](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group) to determine whether the resource types used in your business support resource groups.
    
-   Determine the dimension for resource grouping, such as project, environment, or department. Make sure that each resource can be assigned to a unique resource group based on the dimension and that the dimension can meet the requirements for future business development. An inappropriate dimension may increase the costs and risks of adjusting resource groups.
    
-   Establish a unified naming convention for resource groups. Names should be simple and clear, have specific semantics, and be easy to identify and manage.
    
-   Plan resource group permissions based on the principle of least privilege to avoid excessive permissions.
    

For more information, see [Best practices for designing resource groups](/help/en/resource-management/resource-group/use-cases/best-practices-for-designing-resource-groups).

### **Phase 2: Implement resource grouping**

#### **Group newly created resources**

Specify a resource group when you create a resource to ensure that the resource is included in the correct resource group from the beginning. This effectively prevents chaotic resource management and complex resource group adjustments. If you do not specify a resource group, the resource is assigned to the default resource group by default.

You can use one of the following methods to sort new resources:

-   Specify a resource group when you create a resource in the Alibaba Cloud Management Console. For more information, see the documentation of an Alibaba Cloud service.
    
    The following figure shows the resource group specified when an Elastic Compute Service (ECS) instance is purchased.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5116912471/p928667.png)
    
-   Specify a resource group when you create a resource by calling an API operation. For more information, see the documentation of an Alibaba Cloud service.
    
    For example, when you call [CreateInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createinstance) to create an ECS instance, you can specify a resource group for the instance by using the `ResourceGroupId` request parameter.
    

#### **Group existing resources**

##### **Automatic transfer**

When you group existing resources, we recommend that you use the Automatic Resource Transfer feature to automatically transfer resources that meet specific conditions to desired resource groups. This improves transfer efficiency and reduces O&M costs. The Automatic Resource Transfer feature supports the following types of transfer rules:

-   [Custom transfer rule](/help/en/resource-management/resource-group/user-guide/auto-group-of-custom-rules): enables resources to be automatically transferred based on conditions such as resource names and tags.
    
-   [Transfer rule for associated resources](/help/en/resource-management/resource-group/user-guide/use-the-transfer-associated-resources-feature): enables associated resources to be automatically transferred to resource groups to which their primary resources belong.
    

In actual scenarios, you can use both types of rules to further improve grouping efficiency. For example, you can use custom transfer rules to transfer ECS instances that meet specific conditions to the desired resource groups. In addition, you can enable the Transfer Associated Resources feature and configure transfer rules to ensure that the resources associated with the ECS instances, such as disks and network interface controllers (NICs), are transferred together with the ECS instances.

1.  Enable the system to automatically transfer ECS instances to which the tag `project:project A` is added or whose names contain `projectA` to the resource group Project-A.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7685273371/p869904.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7685273371/p869908.png)
    
2.  Enable the Transfer Associated Resources feature and configure transfer rules to ensure that the resources associated with the ECS instances, such as disks, ENIs, elastic IP address (EIPs), and snapshots, are transferred to the same resource group when the ECS instances are transferred.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5116912471/p928871.png)
    

##### Manual transfer

For resources that do not support the Automatic Resource Transfer feature, you can use one of the following methods to manually transfer them:

-   Manually transfer resources in the [Resource Center console](https://resourcemanager.console.alibabacloud.com/resource-center) or [Resource Group console](https://resourcemanager.console.alibabacloud.com/resource-groups). Both the Resource Group and Resource Center services provided by Resource Management deliver a global view of resources and allow you to search for and transfer resources across Alibaba Cloud services or regions. For more information, see [Transfer resources between resource groups manually](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group).
    
-   Call the [API operation that is used to move multiple resources to a resource group at a time](/help/en/resource-management/api-moveresources) to manually transfer resources. The [API operation](/help/en/resource-management/api-moveresources) is provided by Resource Group and allows you to transfer multiple resources that reside in different regions or belong to different services or resource groups to the same resource group at a time.
    
-   Call the resource transfer API operation provided by the related Alibaba Cloud service to manually transfer resources. For more information, see the **References** column in [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group).
    

##### **Impact of resource transfer**

Transferring resources across resource groups does not affect the resources. For example, after a resource is transferred across resource groups, the system does not restart the resource, and the network configurations and owner of the resource are not changed.

However, if you have an authorization policy that is created based on a resource group and transfer a resource from the resource group to another, the access permissions of RAM identities on the resource may be changed. For example, you grant operation permissions on resources in Resource Group A to members for Project A. In this case, the members can be used to access the resources. If a resource is transferred from Resource Group A to Resource Group B, the members can no longer be used to access the resource.

Therefore, before you transfer resources, you must check the relevant permission settings and evaluate the impact of the transfer on the permissions of Resource Access Management (RAM) identities. If necessary, adjust the permission settings of RAM identities in a timely manner to ensure the effectiveness of permissions.

### **Phase 3: Apply resource groups**

After resource grouping is complete, you can perform operations such as resource access control, resource cost allocation, and automated O&M based on resource groups in other Alibaba Cloud services.

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

### **Phase 4: Perform continuous governance**

-   Adjust inappropriate resource groups
    
    If you find that the dimensions used to classify resource groups no longer meet future business development trends, you need to adjust them as early as possible. This avoids increasing the costs and risks of resource group adjustments as your business grows. For example, a company classifies resource groups by department. As business grows, each department will have multiple business systems in the future. As a result, classification by department cannot meet the requirements of permission isolation. To resolve this issue, you must classify resource groups by business system and adjust the permissions of RAM identities on resource groups.
    
-   Clean up unused resource groups
    
    If a resource group is no longer required, you need to delete it at the earliest opportunity to reduce management costs. For example, you classify resource groups by project for your enterprise, and you create resource groups such as Project A and Project B. If Project A is no longer required, you must transfer the resources in Project A to another resource group or release the resources in Project A and delete Project A at the earliest opportunity to reduce management costs.
    

## **References**

-   [What is Resource Group?](/help/en/resource-management/resource-group/product-overview/resource-group-overview)
    
-   [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group)
    
-   [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group)
    
-   [Grant permissions on resource groups to a RAM identity](/help/en/resource-management/resource-group/user-guide/add-ram-authorization)
    
-   [Transfer resources between resource groups manually](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group)
    
-   [Transfer resources between resource groups automatically](/help/en/resource-management/resource-group/user-guide/automatic-resource-transfer/)
