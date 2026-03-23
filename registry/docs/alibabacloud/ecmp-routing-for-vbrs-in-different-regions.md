After an Enterprise Edition transit router learns routes that have the same destination CIDR block from multiple virtual border routers (VBRs), the routes are sorted by region ID if the other attributes of the routes are the same. The route with the first region ID in alphabetical order is selected as the primary route for traffic forwarding. If multi-region equal-cost multi-path (ECMP) routing is enabled for VBRs, routes that have the same attributes other than region IDs are considered equal-cost routes.

## Limits

Only route tables of Enterprise Edition transit routers support multi-region ECMP routing for VBRs.

## Route selection rules for Enterprise Edition transit routers

### Default rules

After an Enterprise Edition transit router learns routes that have the same destination CIDR block from multiple VBRs, the system checks the attribute values of each route in descending order of attribute priority. The route with the highest attribute value priority is selected as the primary route for traffic forwarding. The other routes serve as standby routes that do not forward network traffic unless the primary route fails. The new routes learned by the Enterprise Edition transit router cannot overlap with the existing routes in the route tables of the Enterprise Edition transit router. If multiple routes have the same value for the attribute with the highest priority, the system compares the values of the attribute with the next highest priority. The following table describes the attribute priorities and attribute values.

**Note**

Route attribute priorities in descending order: P1 > P2 > P3 > P4.

**Attribute priority**

**Attribute**

**Description**

**Attribute value priority**

P1

VBR route type

If all the routes are learned from VBRs, the system compares the types of the routes.

-   BGP route: The route is learned through the BGP protocol.
    
-   Static route: The route is manually configured.
    

BGP route > static route

If all the VBR routes are learned through the BGP protocol, the route with the shortest AS path has the highest priority.

P2

VBR route region

The system compares the region to which the VBR route belongs with the region to which the route table of the Enterprise Edition transit router belongs.

-   Local region: The VBR route and the route table of the Enterprise Edition transit router belong to the same region.
    
-   Other regions: The VBR route and the route table of the Enterprise Edition transit router belong to different regions.
    

Local region > other regions

VBR routes that are in the same region as the route table of the Enterprise Edition transit router have a higher priority than routes that are learned from other regions.

P3

Routing policy value

If a routing policy is created for the route table of the Enterprise Edition transit router and multiple routes match the routing policy, the system compares the routing policy values of the routes.

For more information, see [Routing policy overview](/help/en/cen/user-guide/routing-policy-overview/#concept-994907).

The system compares the routing policy values of the routes and selects the route with the highest priority.

P4

Route region ID

The system compares the region IDs of routes.

Region IDs are sorted in alphabetical order. The route with the first region ID has the highest priority.

For example, routes that are learned from the China (Hangzhou) region whose ID is cn-hangzhou have a higher priority than routes that are learned from the China (Shenzhen) region whose ID is cn-shenzhen.

### Route selection rules for multi-region ECMP routing

After multi-region ECMP routing is enabled, the system compares the values of only the following attributes: **VBR route type**, **VBR route region**, and **routing policy value**. If the values of the preceding attributes are the same among multiple routes, the system stops comparing the value of the **route region ID** attribute and enables ECMP routing to forward network traffic.

**Warning**

-   In the route table of an Enterprise Edition transit router, if multiple static equal-cost VBR routes exist and one of the routes fails, the system cannot detect the error and continues forwarding network traffic as before. This may result in an adverse impact on your service.
    
-   After you enable multi-region ECMP routing, if multiple ECMP routes are advertised from transit routers in different regions, network traffic is evenly distributed among the transit routers. Therefore, you must allocate sufficient bandwidth resources to inter-region connections between the local and peer transit routers.
    

### Examples

An enterprise uses two Express Connect circuits connected to VBR1 and VBR2 to connect its data center to CEN, which allows the data center to communicate with VPCs in the China (Shenzhen) region. The transit router in the China (Shenzhen) region learns the CIDR blocks 10.0.0.0/24 and 10.0.1.0/24 from the data center through Inter-region Connection 1 and Inter-region Connection 2. No routing policy is configured for the route tables of the transit routers in the China (Shenzhen), China (Hangzhou), or China (Shanghai) region.

Figure 1. Figure 1![图1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0314670861/p580061.png)

Before multi-region ECMP routing is enabled for the VBRs, the transit router in the China (Shenzhen) region compares the route attributes and selects primary routes that point to CIDR blocks 10.0.0.0/24 and 10.0.1.0/24. The following table describes how the transit router compares the route attributes.

**Note**

In this example, the primary route points to 10.0.0.0/24. The rules for selecting the primary route that points to 10.0.1.0/24 are the same.

**Route attribute priority**

**Route attribute**

**Description**

P1

VBR route type

The routes that point to 10.0.0.0/24 are advertised from Inter-region Connection 1 and Inter-region Connection 2. The transit router learns the routes through BGP. The AS paths of the routes are of the same length. In this case, the values of the current attribute are the same. The transit router compares the values of the next attribute.

P2

VBR route region

-   The route that points to 10.0.0.0/24 is advertised from Inter-region Connection 1 and belongs to the China (Hangzhou) region, which is different from the region of the transit router route table because it is in the China (Shenzhen) region.
    
-   The route that points to 10.0.0.0/24 is advertised from Inter-region Connection 2 and belongs to the China (Shanghai) region, which is different from the region of the transit router route table because it is in the China (Shenzhen) region.
    

The values of the current attribute are the same. The transit router compares the values of the next attribute.

P3

Routing policy value

No routing policy is configured for the transit routers in the China (Hangzhou) or China (Shanghai) region. Therefore, the values of the current attribute are the same. The transit router compares the values of the next attribute.

P4

Route region ID

-   The route that points to 10.0.0.0/24 is advertised from Inter-region Connection 1 and belongs to the China (Hangzhou) region, whose ID is cn-hangzhou.
    
-   The route that points to 10.0.0.0/24 is advertised from Inter-region Connection 2 and belongs to the China (Shanghai) region, whose ID is cn-shanghai.
    

The ID of the China (Hangzhou) region ranks higher than the ID of the China (Shanghai) region. Therefore, the route with the 10.0.0.0/24 CIDR block that is advertised from the China (Hangzhou) region is selected as the primary route.

Figure 2. Figure 2![图2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0314670861/p580062.png)

After multi-region ECMP routing is enabled for the VBRs, the transit router in the China (Shenzhen) region compares the attributes of the routes and selects a primary route that points to 10.0.0.0/24.

**Route attribute priority**

**Route attribute**

**Description**

P1

VBR route type

The routes that point to 10.0.0.0/24 are advertised from Inter-region Connection 1 and Inter-region Connection 2. The transit router learns the routes through BGP. The AS paths of the routes are of the same length. In this case, the values of the current attribute are the same. The transit router compares the values of the next attribute.

P2

VBR route region

-   The route that points to 10.0.0.0/24 is advertised from Inter-region Connection 1 and belongs to the China (Hangzhou) region, which is different from the region of the transit router route table because it is in the China (Shenzhen) region.
    
-   The route that points to 10.0.0.0/24 is advertised from Inter-region Connection 2 and belongs to the China (Shanghai) region, which is different from the region of the transit router route table because it is in the China (Shenzhen) region.
    

The values of the current attribute are the same. The transit router compares the values of the next attribute.

P3

Routing policy value

No routing policy is configured for the transit routers in the China (Hangzhou) or China (Shanghai) region. Therefore, the values of the current attribute are the same. The comparison ends because no other attributes exist.

As a result, the routes that are advertised from Inter-region Connection 1 and Inter-region Connection 2 and point to 10.0.0.0/24 have the same attribute values. In this case, the routes are considered equal-cost routes.

## How multi-region ECMP affects traffic forwarding

-   After multi-region ECMP routing is enabled for the VBRs, the transit routers may learn routes that have the same destination from different VBRs. If the values of the **VBR route type**, **VBR route region**, and **routing policy value** attributes are the same, the routes are considered equal-cost routes, as shown in [Figure 2](#fig-hzl-1id-fjx). The network latency and maximum bandwidth of inter-region connections may be affected. Proceed with caution.
    
-   After multi-region ECMP routing is disabled for the VBRs, the transit routers may learn routes that have the same destination from different VBRs. If the values of the **VBR route type**, **VBR route region**, and **routing policy value** attributes are the same, the system compares the values of the **route region ID** attribute and selects a primary route for traffic forwarding. The other routes serve as standby routes that do not forward traffic unless the primary route fails, as shown in [Figure 1](#fig-19v-6j3-bn7). In this case, the network latency and maximum bandwidth of inter-region connections may be affected. Proceed with caution.
    

## Enable multi-region ECMP routing for VBRs

**Warning**

Before you enable multi-region ECMP routing for VBRs, take note of the impact that multi-region ECMP routing may have on traffic forwarding. For more information, see [How multi-region ECMP affects traffic forwarding](#section-j3t-8te-rcp).

### Enable multi-region ECMP routing when you create a transit router route table

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click **Create Route Table**. In the **Create Route Table** dialog box, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Transit Router**
    
    Select the transit router for which you want to create a route table.
    
    The ID of the selected transit router is automatically displayed.
    
    **Route Table Name**
    
    Enter a name for the route table.
    
    **Description**
    
    Enter a description for the route table.
    
    **Tag**
    
    Add tags to the route table.
    
    -   **Tag Key**: The tag key can be up to 64 characters in length. It cannot be an empty string or start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    -   **Tag Value**: The tag value can be an empty string with a maximum length of 128 characters. It cannot start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    
    You can add one or more tags to a custom route table. For more information about tags, see [Manage tags](/help/en/cen/user-guide/manage-tags-2).
    
    **Multi-region ECMP Routing**
    
    Enable multi-region ECMP routing based on your business requirements. Multi-region ECMP routing is disabled by default.
    
    An Enterprise Edition transit router may learn routes from multiple virtual border routers (VBRs). If the routes have the same attributes other than region IDs, network traffic is forwarded based on the region IDs in alphabetical order. If multi-region ECMP routing is enabled for VBRs and the routes have the same attributes other than region IDs, the routes are considered equal-cost routes. For more information, see [Multi-region ECMP routing for VBRs in different regions](/help/en/cen/user-guide/ecmp-routing-for-vbrs-in-different-regions#task-2306194).
    
    To enable multi-region ECMP routing, turn on Multi-region ECMP Routing, read the information in the message that appears, and then click **OK**.
    

### Enable multi-region ECMP routing after you create a transit router route table

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side navigation pane, click the ID of the route table that you want to manage.
    
6.  In the **Basic Information** section, turn on **Multi-region ECMP Routing**.
    
7.  In the **Do you want to enable multi-region ECMP routing** message, read the potential risks and click **OK**.
    

## Disable multi-region ECMP routing

**Warning**

Before you disable multi-region ECMP routing, take note of the impact that disabling multi-region ECMP routing may have on traffic forwarding. For more information, see [How multi-region ECMP affects traffic forwarding](#section-j3t-8te-rcp).

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side navigation pane, click the ID of the route table that you want to manage.
    
6.  In the **Basic Information** section, turn off **Multi-region ECMP Routing**.
    
7.  In the **Are you sure that you want to disable multi-region ECMP routing** message, read the potential risks and click **OK**.
