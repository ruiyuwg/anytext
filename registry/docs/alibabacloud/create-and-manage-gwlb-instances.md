A Gateway Load Balancer (GWLB) instance can receive requests from clients and forward requests to backend servers. This topic describes how to create and manage a GWLB instance.

## Prerequisites

-   A virtual private cloud (VPC) is created. For more information, see [Create a VPC with an IPv4 CIDR block](/help/en/vpc/getting-started/create-vpc-with-ipv4#task-1512598).
    
-   The AliyunServiceRoleForGwlb service-linked role is created within your Alibaba Cloud account. The first time you create a GWLB instance, you must create the AliyunServiceRoleForGwlb service-linked role to allow GWLB to access other Alibaba Cloud resources. For more information, see [System policies for GWLB](/help/en/slb/security-and-compliance/gwlb).
    

## Create a GWLB instance

1.  Log on to the [GWLB console](https://slb.console.alibabacloud.com/gwlb/).
    
2.  In the top navigation bar, select the region where the GWLB instance is deployed.
    
3.  On the **Instances** page, click **Create GWLB**.
    
4.  On the **Gateway Load Balancer - Alibaba Cloud International Site** page, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Region and Zone**
    
    Select the region in which you want to create the GWLB instance.
    
    **VPC**
    
    Select the VPC where you want to deploy the GWLB instance.
    
    **Zone**
    
    Select the zone in which you want to create the GWLB instance. GWLB supports multi-zone deployment. You must specify at least one zone and one subnet. After the GWLB instance is created, the specified zones and subnets cannot be cleared for the GWLB instance.
    
    **IP version**
    
    Select an IP version.
    
    **IPv4**: GWLB supports IPv4 traffic access.
    
    **Instance Name**
    
    Enter a name for the GWLB instance.
    
    **Resource Group**
    
    Select a resource group for the GWLB instance.
    
    **Tag**
    
    Add one or more [tags](/help/en/resource-management/tag/product-overview/tag-overview) for the GWLB instance: Specify **Tay Key** and **Tag Value** for each tag.
    
    -   **Tag Key**: Cannot be an empty string. It can be up to 128 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
        
    -   **Tag Value**: Can be an empty string. It can be up to 256 characters in length and cannot contain `http://` or `https://`.
        
    
    **Service-linked Role**
    
    The first time you create a GWLB instance, you must click **Create Service-linked Role** and create the **AliyunServiceRoleForGwlb** service-linked role.
    
    **Note**
    
    This parameter is displayed only the first time you create a GWLB instance.
    
5.  Click **Buy Now** and complete the payment.
    
6.  On the **Instances** page, select the region in which the GWLB instance is deployed to view the GWLB instance.
    

## Release a GWLB instance

You can release GWLB instances that are not in use to reduce costs. After you release a GWLB instance, you are no longer charged for the GWLB instance.

**Warning**

-   After a GWLB instance is released, the configurations and data of the GWLB instance are cleared and cannot be restored.
    
-   If your GWLB instance is managed by another Alibaba Cloud service, the GWLB instance cannot be released. For example, if your GWLB instance is associated with endpoints, you must delete the endpoint configurations before you can release the GWLB instance.
    

1.  Log on to the [GWLB console](https://slb.console.alibabacloud.com/gwlb/).
    
2.  In the top navigation bar, select the region where the GWLB instance is deployed.
    
3.  On the GWLB **Instances** page, find the instance that you want to release and click **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4846770371/p814239.png)** > **Release** in the **Actions** column.
    
4.  In the **Release Instance** message, click **OK**.
    

## Related operations

**Operation**

**Procedure**

Rename a GWLB instance

1.  On the **Instances** page, find the GWLB instance that you want to manage, and click the instance ID.
    
2.  On the **Instance Details** tab, click **Edit** next to the instance name.
    
3.  In the dialog box that appears, enter a new name, and click **OK**.
    

Change the GWLB instance zone

1.  On the **Instances** page, use one of the following methods to edit the instance zone or subnet.
    
    -   Find the instance that you want to manage, and click **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4846770371/p814176.png)** > **Modify Zone/Subnet**.
        
    -   Click the instance ID. On the **Instance Details** tab, click **Modify Zone/Subnet** in the **Zone** section.
        
2.  In the **Modify Zone/Subnet** dialog box, select or clear zones and vSwitches, and click **OK**.
    

**Note**

You can only add zones for a GWLB instance. Specified zones for a GWLB instance cannot be cleared and edited.

Manage tags

Each tag is a key-value pair.

-   You can add at most 20 tags to each GWLB instance.
    
-   The keys of tags that are added to a GWLB instance must be unique.
    

**Add tags**

You can use tags to classify GWLB instances by category, such as by purpose or owner.

1.  On the **Instances** page, find the GWLB instance that you want to manage, and move the pointer over the ![标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1876810961/p185180.png) icon in the **Tag** column.
    
    -   If no tag is added to the GWLB instance, click **Apply**.
        
    -   If a tag is added to the GWLB instance, click **Edit**.
        
2.  In the **Modify Tag** dialog box, select or enter keys and values and click **OK**.
    
    You can also click the ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2500088561/p437159.png) icon next to a tag to remove the tag.
    

**Filter by tag**

You can filter GWLB instances by tag.

-   On the **Instances** page, click **Filter by Tag** above the instance list.
    
-   Select a **tag key** and a **tag value** from the drop-down list.
    
    You can click **Clear Filter Condition** above the instance list to clear the filter conditions.
    

Release multiple GWLB instances at a time

1.  On the **Instances** page, select more than one instance that you want to manage, and click **Release**.
    
2.  In the **Confirm** message, click **Release**.
    

## What to do next

-   Configure a listener to forward all IP packets across all ports to corresponding backend server groups via the Geneve protocol. For more information, see [Add and manage IP listeners](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/create-and-manage-a-listener).
    
-   A GWLB instance must work with GWLB endpoints provided by the PrivateLink service.
    

## References

Product overview:

-   For use scenarios and components of GWLB, see [What is GWLB?](/help/en/slb/gateway-based-load-balancing-gwlb/product-overview/what-is-gateway-load-balancer-gwlb/)
    
-   For GWLB features, see [GWLB features](/help/en/slb/gateway-based-load-balancing-gwlb/product-overview/functional-characteristics).
    
-   For regions and zones in which GWLB is available, see [Regions and zones in which GWLB is available](/help/en/slb/gateway-based-load-balancing-gwlb/product-overview/regions-and-zones-supported-by-gwlb).
