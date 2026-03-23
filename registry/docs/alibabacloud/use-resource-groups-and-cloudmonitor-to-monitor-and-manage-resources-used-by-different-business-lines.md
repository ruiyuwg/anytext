Resource Management allows you to create application groups from resource groups in the CloudMonitor console and add resources in the resource groups to the application groups for monitoring and management.

## **Scenarios**

To monitor the cloud resources of your enterprise, you need to manage resources, such as Elastic Compute Service (ECS) instances, databases, Server Load Balancer (SLB) instances, and storage resources, that are used by different business lines in a centralized manner. You can classify the resources of your enterprise by business line into different resource groups. Then, you can create application groups from the resource groups in the [CloudMonitor console](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor) and add the resources in the resource groups to the application groups. This allows you to manage alert rules and view monitoring data by business line and helps improve O&M efficiency.

This topic provides an example to describe how to monitor and manage resources used by different business lines. In this example, an enterprise has three business lines, and each business line uses multiple types of resources and configures different alert rules for the resources. The enterprise has only one Alibaba Cloud account, and 10 SLB instances and more than 100 ECS instances are created within the account. The enterprise wants to monitor and manage the resources from the business perspective in a centralized manner, and configure different alert rules for the resources used by different business lines.

## **Procedure**

1.  Create resource groups and transfer resources to the resource groups.
    
    1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
        
    2.  Create resource groups.
        
        In this example, the following three resource groups are created: `Business line A`, `Business line B`, and `Business line C`.
        
        For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group).
        
    3.  Transfer resources to the resource groups.
        
        In this example, ECS instances and SLB instances that are used by different business lines are transferred to the related resource groups.
        
        For more information, see [Transfer resources across resource groups](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group).
        
2.  Create application groups from the resource groups in the CloudMonitor console.
    
    1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
        
    2.  Create application groups.
        
        In this example, the Creation Method parameter is set to **Create from Resource Group**. Then, you can select the resource groups from the **Application Group Name** drop-down list. You can create different application groups for the three resource groups based on your business requirements.
        
        For more information, see [Create an application group from a resource group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-application-group#section-3i7-wir-8vv).
        
    3.  View an application group.
        
        After you create an application group, you can view items such as the resources, monitoring dashboards, fault list, and availability monitoring tasks of the application group, and perform various operations. An application group provides centralized resource management to allow you to receive alert notifications and handle faults at the earliest opportunity.
        
        For information about how to view an application group, see [View an application group](/help/en/cms/cloudmonitor-1-0/user-guide/view-an-application-group).
