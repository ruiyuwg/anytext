You can create an IPv6 gateway and configure Internet bandwidth and egress-only rules to control its inbound and outbound traffic.

## Create and delete an IPv6 Gateway

### **Console**

#### **Create an IPv6 Gateway**

1.  Log on to the [IPv6 Gateway console](https://vpc.console.alibabacloud.com/ipv6). In the top navigation bar, select the region for the gateway.
    
2.  Click **Create IPv6 Gateway**.
    
    -   **VPC**: Select the virtual private cloud (VPC) for the IPv6 Gateway. You cannot change the VPC after the gateway is created.
        
        -   You can create only one IPv6 Gateway per VPC.
            
        -   When you create an IPv6 Gateway, the system automatically adds a custom route to the VPC. The destination CIDR block of the route is `::/0`. If there is already a route with the same destination CIDR block, the system does not add a duplicate route.
            
        
    -   **IPv6 CIDR Block Type**: Select the IPv6 CIDR block type. This example uses BGP (Multi-ISP).
        
        > This parameter is available only if IPv6 is not yet enabled for the selected VPC.
        
    -   (Optional) Select **Automatically Enable IPv6 for All vSwitches**. If you do not select this option, you must manually enable IPv6 for each vSwitch by finding the vSwitch and clicking **Enable IPv6** in the IPv6 CIDR Block column.
        
    -   Enter a Name for the gateway. You can also select a resource group and add a tag. Use these parameters to identify and manage your cloud resources.
        
    

#### **Delete an IPv6 Gateway**

To delete an IPv6 Gateway, you must first [delete its egress-only rules](/help/en/ipv6-gateway/user-guide/create-and-manage-an-egress-only-rule#section-zdm-mj9-ajj). Find the gateway that you want to delete and click **Delete** in the **Actions** column.

### **API**

-   Call [CreateIpv6Gateway](/help/en/ipv6-gateway/developer-reference/api-vpc-2016-04-28-createipv6gateway-ipv6s) to create an IPv6 Gateway.
    
-   Call [DeleteIpv6Gateway](/help/en/ipv6-gateway/developer-reference/api-vpc-2016-04-28-deleteipv6gateway-ipv6s) to delete an IPv6 Gateway.
