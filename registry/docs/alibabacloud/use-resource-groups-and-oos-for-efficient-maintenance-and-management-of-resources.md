Use resource groups to select resources for your operations and manage them efficiently in CloudOps Orchestration Service (OOS).

## **Use cases**

As your cloud footprint grows, cloud O&M becomes increasingly critical. Traditional manual O&M can no longer keep pace with rapidly growing cloud businesses. [OOS](/help/en/oos/product-overview/introduction-to-oos) provides a standardized platform for O&M tasks. OOS lets you convert runbooks, operating procedures, and maintenance guides into templates, enabling an automated O&M approach known as Operations as Code. However, a prerequisite for automated O&M is identifying the target resources. You can use resource groups to centrally manage your cloud resources by organizing them according to dimensions such as deployment environment, department, or project. By combining resource groups with OOS, you can efficiently manage your cloud resources.

This topic provides an example of an enterprise with three departments, each with multiple cloud resources and different O&M requirements. The enterprise has a single Alibaba Cloud account that contains more than 100 ECS instances. The goal is to organize O&M by department for more efficient resource management.

## **Procedure**

1.  Create resource groups and transfer resources to them.
    
    1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
        
    2.  Create resource groups.
        
        In this example, create one resource group for each department.
        
        For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group).
        
    3.  Transfer resources to the corresponding resource groups.
        
        In this example, transfer the ECS instances that belong to different departments to their respective resource groups.
        
        For more information, see [Transfer resources between resource groups manually](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group).
        
2.  Create an O&M task based on a resource group.
    
    1.  Log on to the [OOS console](https://oos.console.alibabacloud.com).
        
    2.  Create an execution from a public template.
        
        In this example, select the **Run Command** public template. When you select target instances, you can select them by resource group. You can create executions from different templates for each of the three resource groups.
        
        For more information, see [Automatic execution](/help/en/oos/user-guide/automatic-execution).
        
    3.  View the execution results.
        
        For more information, see [View the details of an execution](/help/en/oos/user-guide/view-the-details-of-an-execution).
