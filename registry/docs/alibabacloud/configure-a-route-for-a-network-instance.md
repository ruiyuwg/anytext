You can add custom routes for virtual private clouds (VPCs) or virtual border routers (VBRs) that are connected to an Enterprise Edition transit router. Custom routes are available only when route synchronization is disabled for the network instance. The next hop of these routes points to the VPC or VBR connection by default, which directs traffic to the Enterprise Edition transit router.

## Prerequisites

Make sure the following requirements are met before you add a custom route:

-   The transit router is of [Enterprise Edition](/help/en/cen/user-guide/transit-routers#section-3qx-d5r-25n).
    
-   The network instance is a VPC or VBR. IPsec-VPN connections and Express Connect Router (ECR) instances are not supported.
    

Custom routes that you add are automatically propagated to the route tables of the VBR or VPC and consume the custom route quota.

## Add a route

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Network Routes** tab, select the network instance and the route table to which you want to add a route, and then click **Add Route Entry**.
    
5.  In the **Create Route Entry** dialog box, set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Network Instance ID**
    
    The ID of the network instance for which the route is added.
    
    **Route Table ID**
    
    The ID of the route table to which the route is added.
    
    **Destination CIDR Block**
    
    The destination CIDR block of the route. Example: 192.168.10.0/24.
    
    **Next Hop**
    
    By default, displays the transit router ID of the current region. The actual next hop is the network instance and cannot be changed.
    

## Delete a route

You can delete only routes whose **Type** is **Transit Router Connection**.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the transit router details page, click the **Network Routes** tab.
    
5.  On the **Network Routes** tab, select the network instance and the route table that you want to manage, find the route that you want to delete, and then click **Delete** in the **Actions** column.
    
6.  In the **Delete Instance** message, confirm the information and click **OK**.
