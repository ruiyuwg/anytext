A Cloud Enterprise Network (CEN) instance is the top-level container for building a cloud enterprise network. Each CEN instance holds one or more transit routers, which connect to each other through inter-region connections to enable communication between network instances across regions. Create a CEN instance before attaching any network instances through transit routers.

## Create a CEN instance

### Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account with permissions to create CEN resources
    
-   (Optional) A resource group to organize the CEN instance. If not specified, the instance is added to the default resource group. For more information, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management)
    

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click **Create CEN Instance**.
    
3.  In the **Create CEN Instance** dialog box, configure the following parameters, and then click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    Enter a name for the CEN instance.
    
    **Description**
    
    Enter a description for the CEN instance.
    
    **Resource Group**
    
    Select a resource group. If no resource group is selected, the instance is added to the default resource group. Manage resource groups in the [Resource Management console](https://resourcemanager.console.alibabacloud.com/overview).
    
    **Tag**
    
    Add tags to the CEN instance. You can add multiple tags. Tag key constraints: maximum 64 characters, cannot be an empty string, cannot start with `acs:` or `aliyun`, and cannot contain `http://` or `https://`. Tag value constraints: maximum 128 characters, can be an empty string, cannot start with `acs:` or `aliyun`, and cannot contain `http://` or `https://`. For more information, see [Manage tags](/help/en/cen/user-guide/manage-tags-2).
    
    The CEN instance appears on the **Instances** page after creation.
    

> To create a CEN instance by calling an API operation, see [CreateCen](/help/en/cen/developer-reference/api-e6f85a#doc-api-Cbn-CreateCen).

### Next steps

After creating a CEN instance, create a transit router in the target region and attach network instances such as VPCs and VBRs. For more information, see the following topics:

-   [Create a transit router](/help/en/cen/user-guide/transit-routers)
    
-   [Create a VPC connection](/help/en/cen/user-guide/connect-vpcs)
    
-   [Create a VBR connection](/help/en/cen/user-guide/connect-vbrs)
    

## Delete a CEN instance

Deleting a CEN instance permanently removes it and all associated configurations. Before deleting, remove all dependent resources from every transit router in the instance.

### Prerequisites

Before you delete a CEN instance, make sure that the following conditions are met.

**Network connections**

-   All network instance connections are deleted. For more information, see [Delete a network instance connection](/help/en/cen/user-guide/delete-a-network-instance-connection).
    
-   All inter-region connections are deleted. For more information, see [Delete an inter-region connection](/help/en/cen/user-guide/manage-inter-region-connections).
    
-   No bandwidth plans are associated with the CEN instance. For more information, see [Disassociate a bandwidth plan from a CEN instance](/help/en/cen/user-guide/work-with-a-bandwidth-plan#section-5pn-hnn-nk5).
    

**Routing configuration**

-   All custom route tables on the transit router are deleted. For more information, see [Delete a custom route table](/help/en/cen/user-guide/custom-route-tables).
    
-   The default route table contains no custom route entries. For more information, see [Delete a custom route from an Enterprise Edition transit router](/help/en/cen/user-guide/manage-custom-routes-of-a-transit-router).
    
-   No prefix lists are associated with transit router route tables. For more information, see [Disassociate a prefix list from a transit router route table](/help/en/cen/user-guide/prefix-lists).
    
-   All aggregate routes are deleted. For more information, see [Delete an aggregate route](/help/en/cen/user-guide/aggregate-routes).
    

**Advanced features**

-   The transit router is not associated with any multicast domain. For more information, see [Delete a multicast domain](/help/en/cen/user-guide/create-and-manage-a-multicast-network).
    
-   No traffic marking policies are associated with the transit router. For more information, see [Delete a traffic marking policy](/help/en/cen/user-guide/use-traffic-scheduling-to-limit-bandwidth-for-inter-region-connections).
    

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, find the CEN instance to delete and click **Delete** in the **Actions** column.
    
3.  In the **Delete CEN Instance** message, verify the instance ID and click **OK**.
    
    The CEN instance is removed from the **Instances** page.
    

> To delete a CEN instance by calling an API operation, see [DeleteCen](/help/en/cen/developer-reference/api-980d06#doc-api-Cbn-DeleteCen).

## References

-   [CreateCen](/help/en/cen/developer-reference/api-e6f85a#doc-api-Cbn-CreateCen) - Create a CEN instance by calling an API operation.
    
-   [DeleteCen](/help/en/cen/developer-reference/api-980d06#doc-api-Cbn-DeleteCen) - Delete a CEN instance by calling an API operation.
