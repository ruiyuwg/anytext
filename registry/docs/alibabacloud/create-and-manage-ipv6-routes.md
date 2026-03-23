A route table consists of routes that specify destinations for network traffic. You can add and manage IPv6 routes in a route table to control IPv6 traffic within a VPC.

## IPv6 routes

If you enable IPv6 for a VPC and its vSwitches, the system automatically adds the following routes to the route tables of all vSwitches in the VPC:

-   System route: A route whose destination CIDR block is the IPv6 CIDR block of the vSwitch. This route allows instances within the vSwitch to communicate with each other over IPv6.
    
-   Custom route: A custom route whose destination CIDR block is `::/0` and whose next hop is an IPv6 gateway. This route enables cloud resources in the VPC to communicate with the Internet using IPv6 addresses.
    

You can also add custom IPv6 routes to the route tables that are associated with vSwitches to control traffic paths.

-   Destination CIDR block: A custom **IPv6 CIDR Block** or a **[prefix list](/help/en/vpc/vpc-prefix-lists#section-vv0-mox-r0m)**.
    
-   Next hop: You can select **ECS Instance**, **IPv6 Gateway**, **Elastic Network Interface (ENI)**, **Router Interface (to Virtual Border Router)**, **Express Connect Router (ECR)**, **VPC Peering Connection**, **Gateway Load Balancer Endpoint (GWLBe)**, or **Transit Router**. For more information about the typical scenarios for different next hop types, see [Configuration examples](/help/en/vpc/vpc-route-table/#00636f079b26x).
    

> You cannot add routes to a gateway route table that is associated with an IPv6 gateway, but you can [change the next hop of a route](/help/en/vpc/vpc-route-table/#e60d4b9897jdo).

### **Console**

#### **Create a route**

1.  Log on to the VPC console. On the [Route Tables](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/route-tables) page, go to the details page of the required route table.
    
2.  On the **Route Entry List** > **Custom** tab, click **Create Route Entry**. Set the **Destination CIDR Block** and **Next Hop Type**, and then select a specific next hop.
    
    > If an error occurs when you create the route, check whether the route meets the [route priority](/help/en/vpc/vpc-route-table/#c804267ebc3s5) requirements.
    

#### **Delete a route**

In the **Actions** column of the route that you want to delete, click **Delete**.

Before you delete a route, assess the potential impact on your services to prevent business interruptions.

### **API**

-   Call [CreateRouteEntry](/help/en/vpc/api-createrouteentry#doc-api-Vpc-CreateRouteEntry) to create a custom route.
    
-   Call [DeleteRouteEntry](/help/en/vpc/api-deleterouteentry#doc-api-Vpc-DeleteRouteEntry) to delete a custom route.
