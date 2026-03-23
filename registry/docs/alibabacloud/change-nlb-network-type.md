You can change the network type of a Network Load Balancer (NLB) instance as needed. If you change the network type of an NLB instance from internal-facing to Internet-facing, you must specify elastic IP addresses (EIPs) or Anycast EIPs for the NLB instance.

## Network types

NLB supports the Internet and internal networks. Differences between Internet-facing NLB instances and internal-facing NLB instances:

-   Internal-facing NLB instances: If you create an internal-facing NLB instance, a private IP address is assigned to each zone. The NLB instance is accessible only over the internal network of Alibaba Cloud.
    
-   Internet-facing NLB instances: If you create an Internet-facing NLB instance, a public IP address and a private IP address are assigned to each zone. By default, Internet-facing NLB instances use EIPs to provide Internet-facing services. You are charged instance fees and bandwidth or data transfer fees for the EIPs. If you want to use Anycast EIPs to enable Internet access, associate Anycast EIPs with the NLB instance.
    

## IP versions

NLB supports IPv4 and dual stack. The following table describes the differences between IPv4 and dual stack.

**IP version**

**Default value**

**Description**

**IPv4**

-   After you enable IPv4 for an Internet-facing NLB instance, a public IPv4 address and a private IPv4 address are assigned to each zone.
    
-   After you enable IPv4 or an internal-facing NLB instance, a private IPv4 address is assigned to each zone.
    

Clients can access IPv4 NLB instances only by using IPv4 addresses, such as 192.168.0.1.

**Dual-stack**

-   After you enable dual-stack for an Internet-facing NLB instance, a public IPv4 address, a private IPv4 address, and an IPv6 address are assigned to each zone.
    
-   After you enable dual-stack for an internal-facing NLB instance, a private IPv4 address and an IPv6 address are assigned to each zone.
    

Clients can access dual-stack NLB instances by using IPv4 addresses such as 192.168.0.1, or IPv6 addresses such as 2001:db8:1:1:1:1:1:1.

## How NLB provides Internet-facing services

NLB supports the following types of public IP addresses:

-   [EIP](/help/en/eip/product-overview/what-is-eip#concept-zmv-hd3-vdb): An EIP is a public IP address that you can purchase and use as an independent resource.
    
    **Note**
    
    EIPs that can be associated with NLB instances must meet the following requirements:
    
    -   Billing method: pay-as-you-go
        
    -   Internet metering method: pay-by-data-transfer
        
    -   Whether associated with Internet Shared Bandwidth instances: no
        
    
-   [Anycast EIP](/help/en/anycast-eip/product-overview/what-is-anycast-eip#concept-2494813): An Anycast EIP is a public IP address that you can purchase and use as an independent resource. Each Anycast EIP is assigned a public IP address. This IP address can be assigned across an entire access area and is not confined to specific regions. For differences between Anycast EIPs and EIPs, see [Comparison between Anycast EIPs and EIPs](/help/en/anycast-eip/product-overview/comparison-between-anycast-eips-and-eips#concept-2082529).
    
-   [IPv6 gateway](/help/en/ipv6-gateway/product-overview/what-is-an-ipv6-gateway/#concept-kjx-3nt-zfb): IPv6 gateways route IPv6 traffic to and from VPCs. You can allocate Internet bandwidth to an IPv6 address to enable an NLB instance to provide Internet-facing services by using the IPv6 address.
    

## Impact on billing

NLB is billed on an hourly basis. If you use an NLB instance for less than 1 hour, the usage duration is rounded up to 1 hour. Network type changes immediately take effect. After you change the network type of an NLB instance, you are charged based on the previous network type within the current usage duration, which is rounded up to 1 hour. For more information, see [NLB billable items](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items#concept-2226387).

The following table describes the impact of network changes on billing.

**Operation**

**Scenario**

**Change**

**Impact on billing**

**References**

Private IPv4 to public IPv4

The NLB instance needs to use a public IPv4 address to provide services over the Internet.

Associate an EIP or an Anycast EIP with the NLB instance.

You are charged an Internet data transfer fee for the EIP or Anycast EIP associated with the NLB instance.

-   [EIP billing](/help/en/eip/pay-as-you-go/#concept-rcd-sgl-vdb)
    
-   [Anycast EIP billing](/help/en/anycast-eip/product-overview/billing-1#concept-2494826)
    

Public IPv4 to private IPv4

The NLB instance no longer needs to use the public IPv4 address to provide services over the Internet.

Disassociate the EIP or Anycast EIP from the NLB instance.

After you change the network type, view the actual bill for billing details.

None

Private IPv6 to public IPv6

The NLB instance needs to use a public IPv6 address to provide services over the Internet.

Enable Internet bandwidth for the IPv6 gateway.

You are charged for the IPv6 gateway and Internet bandwidth resources.

[IPv6 gateway billing rules](/help/en/ipv6-gateway/product-overview/ipv6-gateway-billing/#concept-gvc-fyt-zfb)

Public IPv6 to private IPv6

The NLB instance no longer needs to use the public IPv6 address to provide services over the Internet.

Disable Internet bandwidth for the IPv6 gateway.

After you change the network type, view the actual bill for billing details.

None

## Change the network type of an IPv4 NLB instance

### Private IPv4 to public IPv4

When you change the network type of an NLB from internal-facing to Internet-facing, you must assign public IP addresses, such as EIPs or Anycast EIPs, to the NLB instance. After the network type is changed to Internet-facing, you are charged for Internet data transfer. For more information, see [EIP billing](/help/en/eip/pay-as-you-go/#concept-rcd-sgl-vdb) and [Anycast EIP billing](/help/en/anycast-eip/product-overview/billing-1#concept-2494826).

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region where the NLB instance is deployed.
    
3.  On the **Instances** page, click the ID of the internal-facing NLB that you want to manage.
    
4.  On the **Instance Details** tab, find **Network Type** in the **Basic Information** section, and click **Change Network Type** on the right side of IPv4.
    
5.  In the **Change Network Type** dialog box, select an **IP Address Type**, assign a public IP address to each zone, and then click **OK**.
    
    -   Assign EIPs
        
        1.  Set **IP Address Type** to **EIP**.
            
        2.  Select **Purchase EIP** from the **Assign EIP** drop-down list or specify an existing EIP.
            
        
        **Note**
        
        -   You must assign an EIP to each zone in the list.
            
        -   If you select **Purchase EIP**, the EIP is released when the NLB instance is released or the network type of the NLB instance is changed to internal-facing. If you specify an existing EIP, the EIP is retained when the NLB instance is released or the network type of the NLB instance is changed to internal-facing.
            
        -   You can view the details about an EIP in the [EIP console](https://vpc.console.alibabacloud.com/eip).
            
        
    -   Assign Anycast EIPs
        
        1.  Set **IP Address Type** to **Anycast EIP**.
            
        2.  Select **Purchase Anycast EIP** from the **Assign Anycast EIP** drop-down list or specify an existing Anycast EIP.
            
            **Note**
            
            -   You must assign Anycast EIPs to all zones in the list.
                
            -   If you select **Purchase Anycast EIP**, the Anycast EIP is released when the NLB instance is released or the network type of the NLB instance is changed to internal-facing. If you specify an existing Anycast EIP, the Anycast EIP is retained when the NLB instance is released or the network type of the NLB instance is changed to internal-facing.
                
            -   You can view the parameters of an Anycast EIP in the [Anycast EIP console](https://vpc.console.alibabacloud.com/eip/anycasts).
                
            
6.  You can view the **Network Type** of the NLB instance on the **Instance Details** tab.
    
    It takes about 1 minute to apply the change. If the **Network Type** parameter on the **Instance Details** tab displays **Public** next to IPv4, the NLB instance has switched to an Internet-facing NLB instance.
    

### Public IPv4 to private IPv4

After an NLB instance switches to private IPv4, all public IP addresses are disassociated from the NLB instance. The DNS records of the NLB instance are also updated. Proceed with caution.

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region where the NLB instance is deployed.
    
3.  On the **Instances** page, click the ID of the Internet-facing NLB instance that you want to manage.
    
4.  On the **Instance Details** tab, find **Basic Information** and click **Change Network Type** next to IPv4 on the right side of **Network Type**.
    
5.  In the message that appears, check the impact of the change and click **OK**.
    
6.  You can view the **Network Type** of the NLB instance on the **Instance Details** tab.
    
    It takes about 1 minute to apply the change. If the **Network Type** parameter on the **Instance Details** tab displays **Private** next to IPv4, the NLB instance has switched to an internal-facing NLB instance.
    

## Change the network type of a dual-stack NLB instance

### Private dual stack to public dual stack

-   For more information about how to switch from private IPv4 to public IPv4, see [Change the network type of an IPv4 NLB instance](#section-xly-gbw-sga).
    
-   The following procedure shows how to switch from private IPv6 to public IPv6.
    
    **Note**
    
    After an NLB instance switches from private IPv6 to public IPv6, Internet bandwidth is enabled for the IPv6 gateway. You can view the details in the VPC console. After Internet bandwidth is enabled, you are charged for Internet data transfer. The IPv6 gateway is enabled or disabled based on the network type of the NLB instance. For more information, see [IPv6 gateway billing](/help/en/ipv6-gateway/product-overview/ipv6-gateway-billing/#concept-gvc-fyt-zfb).
    

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region where the NLB instance is deployed.
    
3.  On the **Instances** page, click the ID of the internal-facing NLB instance that you want to manage.
    
4.  On the **Instance Details** tab, find **Network Type** in the **Basic Information** section, and click **Change Network Type**.
    
5.  In the **Change Network Type** message, check the impact of the change and click **OK**.
    
    **Note**
    
    If the NLB instance does not have an IPv6 gateway in the VPC, you are prompted to create one. Create an IPv6 gateway in the console as prompted.
    
6.  You can view the **Network Type** of the NLB instance on the **Instance Details** tab.
    
    It takes about 1 minute to apply the change. If the **Network Type** parameter on the **Instance Details** tab displays **Public** next to IPv6, the network of the NLB instance has switched to public IPv6.
    

### Public dual stack to private dual stack

-   For more information about how to switch from public IPv4 to private IPv4, see [Change the network type of an IPv4 NLB instance](#section-xly-gbw-sga).
    
-   The following procedure shows how to switch from public IPv6 to private IPv6.
    

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region where the NLB instance is deployed.
    
3.  On the **Instances** page, click the ID of the Internet-facing NLB instance that you want to manage.
    
4.  On the **Instance Details** tab, find **Network Type** in the **Basic Information** section, and click **Change Network Type** on the right side of IPv6.
    
5.  In the **Change Network Type** message, check the impact of the change and click **OK**.
    
6.  You can view the **Network Type** of the NLB instance on the **Instance Details** tab.
    
    It takes about 1 minute to apply the change. If the **Network Type** parameter on the **Instance Details** tab displays **Private** next to IPv6, the network of the NLB instance has switched to private IPv6.
    

## References

-   [NLB billable items](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items#concept-2226387)
    
-   [EIP billing](/help/en/eip/pay-as-you-go/#concept-rcd-sgl-vdb)
    
-   [Anycast EIP billing](/help/en/anycast-eip/product-overview/billing-1#concept-2494826)
    
-   [IPv6 gateway billing](/help/en/ipv6-gateway/product-overview/ipv6-gateway-billing/#concept-gvc-fyt-zfb)
