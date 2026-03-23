You can manually transfer resources across resource groups to adjust the resource groups to which the resources belong.

## Methods used to transfer resources across resource groups

You can use one of the following methods to manually transfer resources across resource groups:

-   Resource Group page of the Resource Management console
    
    You can transfer resources across resource groups on the Resource Group page of the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
-   Resource Search page of the Resource Management console
    
    Resource Management provides the Resource Center service, which delivers a global view of resources within your Alibaba Cloud accounts and allows you to search for resources across accounts, services, or regions. You can log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-center) and go to the Resource Search page below Resource Center to transfer resources across resource groups. For more information, see [Transfer resources between resource groups](/help/en/resource-management/resource-center/user-guide/manage-resource-groups-3#section-m31-3z9-3xm).
    
-   API operations
    
    You can use the API operation provided by a service to move a resource of the service to a different resource group. You can also use the MoveResources API operation provided by the Resource Group service to move multiple resources to a different resource group at a time. The [MoveResources](/help/en/resource-management/api-moveresources) API operation allows you to move multiple resources that reside in different regions or belong to different services or resource groups to the same resource group at a time. For more information, see [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group#concept-flc-p3m-4fb).
    

This topic describes how to transfer resources across resource groups on the Resource Group page of the Resource Management console.

## Impacts

Transferring resources across resource groups does not affect the resources. For example, after a resource is transferred across resource groups, the system does not restart the resource, and the network configurations and owner of the resource are not changed.

However, if you have an authorization policy that is created based on a resource group and transfer a resource from the resource group to another, the access permissions of RAM identities on the resource may be changed. For example, you grant operation permissions on resources in Resource Group A to members for Project A. In this case, the members can be used to access the resources. If a resource is transferred from Resource Group A to Resource Group B, the members can no longer be used to access the resource.

## Transfer resources from a resource group

To transfer resources from a resource group, perform the following steps:

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
2.  In the left-side navigation pane, choose **Resource Group** > **Resource Group**.
    
3.  On the **Resource Group** page, find the resource group from which you want to transfer resources and click **Manage Resource** in the **Actions** column.
    
4.  Select the resources that you want to transfer out, and click **Transfer resource group** in the lower part of the page.
    
5.  In the **Select Destination Resource Group** panel, select the resource group to which you want to transfer the selected resources and click **OK**.
    
6.  View the transfer result and click **OK**.
    

## Transfer resources to a resource group

To transfer resources to a resource group, perform the following steps:

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
2.  In the left-side navigation pane, choose **Resource Group** > **Resource Group**.
    
3.  On the **Resource Group** page, find the resource group to which you want to transfer resources and click **Manage Resource** in the **Actions** column.
    
4.  In the upper part of the resource list, click **Transfer In**.
    
5.  In the **Select Resource** panel, select the resources that you want to transfer to the current resource group and click **OK**.
    
6.  View the transfer result and click **OK**.
    

## **References**

To transfer resources across resource groups in a more efficient manner, you can enable the Automatic Resource Transfer feature and configure transfer rules. This way, resources can be automatically transferred based on the rules. For more information, see [Transfer resources between resource groups automatically](/help/en/resource-management/resource-group/user-guide/automatic-resource-transfer/).
