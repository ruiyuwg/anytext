To allocate costs by resource group after you create resource groups, you can create cost centers and map the resource groups to the cost centers.

## Scenarios

A gaming company has three gaming projects under development: `G1`, `G2`, and `G3`. Each project requires multiple types of resources. The company has only one Alibaba Cloud account but more than 100 Elastic Compute Service (ECS) instances within this account. The finance department of the company wants separate bills to be generated for the projects.

## Procedure

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups) and go to the Resource Group page to create resource groups.
    
    1.  Create a resource group for each project. The names of the resource groups correspond to those of the project. The names of the resource groups are `R-G1`, `R-G2`, and `R-G3`.
        
        For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
        
    2.  Move the ECS instances to the desired resource groups based on the actual users of the ECS instances.
        
        For more information, see [Transfer resources between resource groups](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group#task-py1-sjm-4fb).
        
2.  Log on to the **Expenses and Costs console** and go to the [Cost Centers](https://usercenter2-intl.console.alibabacloud.com/finance/finance-unit/list) page. On the page, create cost centers `R-G1`, `R-G2`, and `R-G3`. Then, configure automatic allocation rules for the resource groups. This way, the ECS instances are allocated to the desired cost centers based on the resource groups to which the ECS instances belong. For more information, see [Cost center](/help/en/user-center/cost-center-overview).
    
3.  Go to the [Split Bill](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill) page of the **Expenses and Costs console** and view bills by cost center.
