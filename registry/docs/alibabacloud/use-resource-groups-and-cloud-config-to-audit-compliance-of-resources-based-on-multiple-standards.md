Resource Management allows you to use Cloud Config to audit compliance of resources in different resource groups based on multiple standards.

## **Scenarios**

When you audit compliance of cloud resources used by your enterprise, you may encounter the issue that the compliance standards of the resources are different. For example, requirements for resource security in the production environment and those in the development environment are different, and different departments have different standards and requirements for resources. You can classify your resources into different resource groups based on various dimensions such as environment and project. Then, you can create audit rules for the resource groups in the [Cloud Config console](/help/en/cloud-config/latest/what-is-cloud-config) to audit compliance of the resources in the resource groups based on multiple standards.

This topic provides an example to describe how to perform such compliance audit. In this example, an enterprise has three departments, and each department uses multiple types of resources and has different standards and requirements for resources. The enterprise has only one Alibaba Cloud account, and more than 100 Elastic Compute Service (ECS) instances are created within the account. The enterprise wants to audit compliance of resources by department to resolve the issue that different departments have different standards and requirements for the resources.

## **Procedure**

1.  Create resource groups and transfer resources to the resource groups.
    
    1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
        
    2.  Create resource groups.
        
        In this example, the following three resource groups are created: `Department A`, `Department B`, and `Department C`.
        
        For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group).
        
    3.  Transfer resources to the resource groups.
        
        In this example, ECS instances that belong to each department are transferred to the related resource groups.
        
        For more information, see [Transfer resources across resource groups](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group).
        
2.  Create audit rules for the resource groups and view the compliance evaluation results of the resources.
    
    1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
        
    2.  Create audit rules based on templates.
        
        In this example, Create from managed rule is selected. If the templates cannot meet your business requirements, you can create audit rules based on your business requirements. When you specify a resource scope, select the desired resource groups from the **Effective for the designated resource groups** drop-down list. You can create different types of audit rules for the three resource groups based on your business requirements.
        
        For more information, see [Create a rule based on a managed rule](/help/en/cloud-config/latest/create-a-rule-based-on-a-managed-rule).
        
    3.  View the compliance evaluation results of the resources.
        
        For more information, see [View the compliance evaluation results](/help/en/cloud-config/latest/view-the-compliance-evaluation-results).
