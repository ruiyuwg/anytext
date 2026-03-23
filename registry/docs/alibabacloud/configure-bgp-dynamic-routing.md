VPN gateways support Border Gateway Protocol (BGP) dynamic routing. After you establish an IPsec-VPN connection between a data center and Alibaba Cloud, they can automatically learn routes from each other and communicate through BGP. This reduces network maintenance costs and network configuration errors.

## Support for BGP dynamic routing

By default, new VPN gateways that support dual-tunnel IPsec-VPN connections support BGP dynamic routing. Some existing VPN gateways may not support BGP dynamic routing due to region limits or outdated versions. You can call the [DescribeVpnGateway](/help/en/vpn/sub-product-ipsec-vpn/developer-reference/api-vpc-2016-04-28-describevpngateway-vpns) or [DescribeVpnGateways](/help/en/vpn/sub-product-ipsec-vpn/developer-reference/api-vpc-2016-04-28-describevpngateways-vpns) API operation to query whether an existing VPN gateway supports BGP dynamic routing. If the **VpnEnableBgp** parameter in **Tag** returns **true**, the VPN gateway supports BGP dynamic routing.

If the VPN gateway does not support BGP dynamic routing, perform the following steps:

-   If the VPN gateway supports dual-tunnel IPsec-VPN connections, [upgrade the VPN gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/upgrade-a-vpn-gateway-1).
    
-   If the VPN gateway supports only single-tunnel IPsec-VPN connections, [upgrade to dual-tunnel IPsec-VPN connections](/help/en/vpn/sub-product-ipsec-vpn/user-guide/upgrade-ipsec-vpn-connection-to-dual-tunnel-mode).
    

## How BGP dynamic routes are advertised

After BGP dynamic routing is configured for a VPN gateway and a data center, BGP routes are advertised in the following ways:

-   To Alibaba Cloud
    
    After the data center advertises its routes in BGP routing configuration, these routes are automatically advertised to the VPN gateway on Alibaba Cloud by using BGP dynamic routing. If you enable automatic route advertising for the VPN gateway, the VPN gateway automatically advertises the routes learned from the data center to the system route table of the associated virtual private cloud (VPC). No route is advertised to the custom route tables.
    
-   To the data center
    
    After automatic route advertisement is enabled for the VPN gateway, the VPN gateway automatically learns routes from the system route table of the VPC and propagates the routes to the data center through BGP dynamic routing.
    

## Limits on BGP dynamic routing

-   The BGP route table of a VPN gateway can receive up to 50 routes from a BGP peer. To increase the quota limit, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.nav-right.dticket.59b44bd3QY32s9#/ticket/createIndex). The maximum quota limit is 200.
    
-   A VPN gateway cannot receive routes that point to 0.0.0.0/0 from a BGP peer.
    
-   Do not propagate routes that point to 100.64.0.0/10 or its subnets to VPN gateways that support only single-tunnel IPsec-VPN connections through BGP dynamic routing. Otherwise, the status of IPsec-VPN connections cannot be displayed in the VPN Gateway console or IPsec-VPN connection negotiation will fail. To avoid this issue, [upgrade to dual-tunnel IPsec-VPN connections](/help/en/vpn/sub-product-ipsec-vpn/user-guide/upgrade-ipsec-vpn-connection-to-dual-tunnel-mode).
    
-   If BGP dynamic routing is enabled for multiple IPsec-VPN connections in the same VPN gateway, local autonomous system numbers (ASNs) of these connections must be the same.
    
-   If IPsec-VPN connections are established between the same VPN gateway and different data centers, you cannot advertise routes for different IPsec-VPN connections to each other.
    
-   If a VPC is associated with multiple VPN gateways, you cannot set the VPN gateways as BGP peers or advertise routes of different VPN gateways to each other.
    
-   In the scenario where a VPC is associated with multiple VPN gateways and BGP dynamic routing is enabled for these VPN gateways, if these VPN gateways are associated with the same customer gateway, make sure that the IPsec-VPN connections of the VPN gateways use the same local ASN. Otherwise, routing loops may occur.
    
-   When you connect a data center to a VPC by using an Express Connect circuit and a VPN gateway for connection resilience, make sure that you specify the same data center ASN for the virtual border router (VBR) and VPN gateway. This prevents route flapping in the data center.
    
-   After you enable BGP dynamic routing for a VPN gateway that is attached to a Cloud Enterprise Network (CEN) instance, you must enable overlapping routing for the CEN instance.
    
    **Note**
    
    By default, overlapping routing is enabled for CEN instances that are created after March 1, 2019 (UTC+8).
    
-   If multiple VPCs are associated with the same CEN instance, make sure that the VPN gateways associated with the VPCs are not connected to the data center by using BGP. This prevents route flapping in Alibaba Cloud.
    
-   In the scenario where multiple IPsec-VPN connections in dual-tunnel mode exist on a VPN gateway and BGP dynamic routing is configured for these connections, the destination CIDR blocks of the routes that are learned by the VPN gateway through these connections cannot conflict with each other. Otherwise, the routes do not take effect.
    

## Recommendation on BGP dynamic routing configuration

-   We recommend that you set **Routing Mode** to **Destination Routing Mode** for IPsec-VPN connections.
    
-   If BGP dynamic routing is configured for an IPsec-VPN connection in dual-tunnel mode, the **ASN** of the tunnels must be the same. In addition, we recommend that you specify the same BGP ASN for the tunnel peers.
    

## **Procedure**

1.  Specify the ASN of your data center in a customer gateway. For more information, see [Create and manage a customer gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/customer-gateway).
    
    -   If you do not specify the ASN of the data center when you create a customer gateway, you must delete the current customer gateway and create another one.
        
    -   After the customer gateway is created, you cannot edit it. If you want to change the ASN, delete the current customer gateway and create another one.
        
2.  Enable BGP for the IPsec connection and add BGP dynamic routing configuration. For more information, see [Create and manage IPsec-VPN connections in dual-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-an-ipsec-vpn-connection-in-dual-tunnel-mode) or [Enable BGP dynamic routing for the tunnels after an IPsec-VPN connection is created](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-an-ipsec-vpn-connection-in-dual-tunnel-mode#section-itb-ljn-lqm).
    
    The following table lists only the content that is strongly correlated to BGP dynamic routing.
    
    **Note**
    
    -   When you enable BGP for an IPsec-VPN connection in dual-tunnel mode, the sequence of the configuration items varies from that in the following table. You need to select customer gateways for the primary and secondary tunnels and add BGP configuration. For more information, check the VPN Gateway console.
        
    -   If the system prompts that the current VPN gateway version is not supported when you configure BGP dynamic routing, refer to [Support for BGP dynamic routing](#section-ieu-tde-2f2).
        
    
    **Parameter**
    
    **Description**
    
    **Customer Gateway**
    
    Select the customer gateway with the ASN of the data center.
    
    **Enable BGP**
    
    Select Enable BGP.
    
    **Local ASN**
    
    Enter the ASN of the tunnel. Default value: **45104**. Valid values: **1 to 4294967295**.
    
    **Tunnel CIDR Block**
    
    Enter the CIDR block of the tunnel.
    
    The CIDR block must fall into 169.254.0.0/16. The mask of the CIDR block must be 30 bits in length. The CIDR block cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
    
    **Note**
    
    In a VPN gateway, the CIDR block of each tunnel must be unique.
    
    **Local BGP IP address**
    
    Enter the BGP IP address of the tunnel.
    
    This IP address must fall within the CIDR block of the tunnel.
    
3.  Enable automatic route advertisement for the VPN gateway.
    
    After automatic route advertisement is enabled for the VPN gateway, the VPN gateway automatically learns routes from the system route table of the VPC and propagates the routes to the data center through BGP dynamic routing.
    
    1.  Log on to the [VPN Gateway console](https://vpc.console.alibabacloud.com/vpn).
        
    2.  In the left-side navigation pane, choose **Interconnections** > **VPN** > **VPN Gateways**.
        
    3.  On the **VPN Gateway** page, find the VPN gateway that you want to manage and enable the automatic route advertisement feature in the **Enable Automatic Route Advertisement** column. ![路由自动传播](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4489726271/p831983.png)
        
        If you no longer need BGP dynamic routing, you can disable this feature and automatic route advertisement. The routes that the VPN gateway learned from the VPC and data center are also withdrawn.
        

#### **View BGP routes**

After you configure BGP dynamic routing, you can view the routes learned from the data center and VPC in the BGP route table of the VPN gateway. You can view routes learned from the data center in the system route table of the VPC.

### **VPN gateway BGP route table**

![VPN路由表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4247775471/p949187.png)

**Note**

-   “CLOUD”: routes learned from Alibaba Cloud.
    
-   “VPN\_BGP”: routes learned through BGP dynamic routing, such as routes learned from the data center.
    

### **VPC system route table - dynamic routes**

![VPC-VPN路由](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4247775471/p949188.png)

## Tutorials on BGP dynamic routing

[Connect a VPC to a data center in dual-tunnel mode and enable BGP dynamic routing](/help/en/vpn/sub-product-ipsec-vpn/product-overview/establish-a-connection-between-the-vpc-and-the-on-premises-data-1)
