The route learning feature lets transit routers automatically learn routes from network instances. This feature reduces the errors of manual configuration and improves efficiency.

## Limit

Only Enterprise Edition transit routers support route learning. [View the edition of a transit router](/help/en/cen/user-guide/transit-routers#section-3qx-d5r-25n) to see whether the feature is available for your transit router.

## **Scenario**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4633969471/CAEQQBiBgMDp652HuxkiIGM1NWQzYjY2YjlhOTQzYWFiNDFiOWExMDc0ZGFkMmE14990858_20250320164649.277.svg)

Assume you have created two virtual private clouds (VPCs) in the China (Hangzhou) region and connected them to a transit router.

With the route learning feature, the transit router learns the system routes of the two VPCs and adds them to its default route table.

If the two VPC connections are [associated with the default route table](/help/en/cen/user-guide/associated-forwarding) of the transit router, traffic from the VPCs to the transit router is forwarded to the next hop based on the routes that are automatically learned by the transit router.

## **Route advertisement**

Route learning can be established between:

-   The route table of an Enterprise Edition transit router and multiple network instances.
    
-   A network instance and route tables of multiple Enterprise Edition transit routers.
    

After route learning is enabled, the instance automatically advertises routes to the Enterprise Edition transit router.

**Connection type**

**Instance type**

**Automatically advertised routes**

VPC connection

VPC

System routes of VPCs.

-   To propagate custom routes in the system route table of a VPC to the Enterprise Edition transit router, [advertise these routes to CEN](/help/en/cen/user-guide/advertise-routes-to-a-transit-router).
    
-   Custom routes in custom route tables of VPCs cannot be advertised to CEN.
    

VBR connection

Virtual border router (VBR)

-   VBR routes whose next hops point to Express Connect circuits. You can find them under the **Custom Route Entry** tab.
    
-   VBR routes that are under the **BGP Route Entry** tab.
    

For more information about how to find these routes, see [Add and manage routes](/help/en/express-connect/user-guide/add-and-manage-routes).

ECR connection

Express Connect Router (ECR)

Routes whose next hop is VBR.

VPN connection

IPsec-VPN connection

The routes in the destination route tables of IPsec-VPN connections and BGP route tables.

Inter-region connection

Transit router

-   If the local and peer transit routers of an inter-region connection are both of Enterprise Edition, and [route synchronization](/help/en/cen/user-guide/route-synchronization) is enabled for the connection, the system automatically propagates the routes from the peer route table associated with the connection to the local route table.
    
-   If the local transit router is of Enterprise Edition and the peer is of Basic Edition, and [route synchronization](/help/en/cen/user-guide/route-synchronization) is enabled for the connection, the system automatically propagates the routes from the peer route tables to the local route table.
    

## Create a route learning policy

### **Method 1: Create a policy along with a connection**

When you create a network instance connection, select **Propagate System Routes to Default Route Table of Transit Router** in the **Advanced Settings** section as shown in the figure below. This creates a route learning policy, which lets the transit router automatically learn routes from the network instance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3892217471/p939582.png)

To connect other types of instances, see [Create a VPC connection](/help/en/cen/user-guide/connect-vpcs), [Create an ECR connection](/help/en/cen/user-guide/connect-ecrs), [Create a VBR connection](/help/en/cen/user-guide/connect-vbrs), [Create a VPN connection](/help/en/cen/user-guide/attach-an-ipsec-vpn-connection-to-a-transit-router), and [Create an inter-region connection](/help/en/cen/user-guide/manage-inter-region-connections#18528e2013275).

### **Method 2: Create only a route learning policy**

You can create only a route learning policy in the following scenarios:

-   **Propagate System Routes to Default Route Table of Transit Router** is not selected when creating a network instance connection.
    
-   A custom route table has been created for the transit router to learn routes from the network instance.
    

To create a route learning policy, perform the following steps:

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage. On the details page of the route table, click the **Route Propagation** tab.
    
6.  On the **Route Propagation** tab, click **Enable Route Propagation**. In the **Enable Route Propagation** dialog box, configure the following parameters and click **OK**:
    
    **Parameter**
    
    **Description**
    
    **Route Table**
    
    The current route table is selected by default.
    
    **Transit Router**
    
    The current transit router is selected by default.
    
    **Associated Connection**
    
    Select the network instance connection for which you want to enable route learning.
    
    Once enabled, the network instance automatically advertises routes to the route table. Find the routes on the **Route Entry** tab.
    

## Delete a route learning policy

After route learning is disabled between a network instance and a transit router, the routes advertised from the instance to the transit router are automatically withdrawn.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage. On the details page of the route table, click the **Route Propagation** tab.
    
6.  On the **Route Propagation** tab, find the target network instance connection and click **Delete** in the **Actions** column.
    
7.  In the **Disable Route Propagation** dialog box, check the details and click **OK**.
    

## References

-   [EnableTransitRouterRouteTablePropagation](/help/en/cen/developer-reference/api-cbn-2017-09-12-enabletransitrouterroutetablepropagation): Creates a route learning policy.
    
-   [ListTransitRouterRouteTablePropagations](/help/en/cen/developer-reference/api-cbn-2017-09-12-listtransitrouterroutetablepropagations): Queries route learning policies of a route table in an Enterprise Edition transit router.
    
-   [DisableTransitRouterRouteTablePropagation](/help/en/cen/developer-reference/api-cbn-2017-09-12-disabletransitrouterroutetablepropagation): Disables route learning.
