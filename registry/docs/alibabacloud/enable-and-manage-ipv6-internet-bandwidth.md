The default IPv6 addresses assigned by Alibaba Cloud can be used only for communication within VPCs. If you require Internet access, you must enable IPv6 Internet bandwidth for the IPv6 address. This topic describes how to enable IPv6 Internet bandwidth and adjust the maximum bandwidth.

## Prerequisites

An IPv6 address is assigned.

## Enables IPv6 Internet bandwidth

1.  Log on to the [IPv6 Gateway console](https://vpc.console.alibabacloud.com/ipv6).
2.  In the top navigation bar, select the region where the IPv6 gateway is deployed.
3.  On the **IPv6 Gateway** page, click the instance ID of the IPv6 gateway that you want to manage.
    
4.  On the details page of the IPv6 gateway, click the **IPv6 Internet Bandwidth** tab, find the IPv6 address for which you want to enable Internet bandwidth, and then click **Activate Internet Bandwidth** in the **Actions** column.
    
5.  On the **IPv6 Internet Bandwidth (PostPay)** page, specify the parameters described in the following table, click **Buy Now**, and then complete the payment.
    
    **Parameter**
    
    **Description**
    
    **Traffic**
    
    Select a metering method for the Internet bandwidth.
    
    Valid values: **Pay-By-Bandwidth** and **Pay-By-Data-Transfer**. For more information, see [Billing](/help/en/ipv6-gateway/product-overview/ipv6-gateway-billing/#concept-gvc-fyt-zfb).
    
    **Bandwidth**
    
    Specify a maximum value for the Internet bandwidth.
    
    **Billing cycle**
    
    Select a billing cycle for the Internet bandwidth. Valid values: **By Day** and **By Hour**.
    
    -   If you set Traffic to **Pay-By-Bandwidth**, you can select only **By Day**.
        
    -   If you set Traffic to **Pay-By-Data-Transfer**, you can select only **By Hour**.
        
    

## Adjust the maximum bandwidth

1.  Log on to the [IPv6 Gateway console](https://vpc.console.alibabacloud.com/ipv6).
2.  In the top navigation bar, select the region where the IPv6 gateway is deployed.
3.  On the **IPv6 Gateway** page, click the instance ID of the IPv6 gateway that you want to manage.
    
4.  On the details page of the IPv6 gateway, click the **IPv6 Internet Bandwidth** tab, find the IPv6 address that you want to manage, and then click **Modify IPv6 Internet Bandwidth** in the **Actions** column.
    
5.  On the **Upgrade/Downgrade** page, move the slider in the **Bandwidth** parameter to adjust the maximum bandwidth value, read and agree to Terms of Service, click **Buy Now**, and then complete the payment.
    

## Delete IPv6 Internet bandwidth

If an IPv6 address does not require access to the Internet, you can delete the Internet bandwidth of the IPv6 address.

1.  Log on to the [IPv6 Gateway console](https://vpc.console.alibabacloud.com/ipv6).
2.  In the top navigation bar, select the region where the IPv6 gateway is deployed.
3.  On the **IPv6 Gateway** page, click the instance ID of the IPv6 gateway that you want to manage.
    
4.  On the details page of the IPv6 gateway, click the **IPv6 Internet Bandwidth** tab, find the IPv6 address that you want to manage, and then click **Delete IPv6 Internet Bandwidth** in the **Actions** column.
    
5.  In the **Delete IPv6 Internet Bandwidth** message, click **OK**.
    
    **Warning**
    
    After the Internet bandwidth of the IPv6 address is deleted, the IPv6 gateway cannot be used for communication over the Internet. Exercise caution when you delete the Internet bandwidth.
    

## References

-   Overview:
    
    [Billing](/help/en/ipv6-gateway/product-overview/ipv6-gateway-billing/)
    
-   User guides:
    
    -   [Create a VPC with an IPv6 CIDR block](/help/en/ipv6-gateway/getting-started/create-a-vpc-with-an-ipv6-cidr-block)
        
    -   [Allow an ECS instance in a VPC to communicate with external IPv6 clients over the Internet](/help/en/ipv6-gateway/getting-started/allow-an-ecs-instance-in-a-vpc-to-communicate-with-external-ipv6-clients-over-the-internet)
        
    -   [Create and manage an egress-only rule](/help/en/ipv6-gateway/user-guide/create-and-manage-an-egress-only-rule)
        
-   API references:
    
    -   [AllocateIpv6InternetBandwidth](/help/en/ipv6-gateway/developer-reference/api-allocateipv6internetbandwidth#doc-api-Vpc-AllocateIpv6InternetBandwidth): purchases Internet bandwidth for an IPv6 address.
        
    -   [ModifyIpv6InternetBandwidth](/help/en/ipv6-gateway/developer-reference/api-modifyipv6internetbandwidth#doc-api-Vpc-ModifyIpv6InternetBandwidth): modifies the Internet bandwidth of an IPv6 address.
        
    -   [DeleteIpv6InternetBandwidth](/help/en/ipv6-gateway/developer-reference/api-deleteipv6internetbandwidth#doc-api-Vpc-DeleteIpv6InternetBandwidth): deletes the Internet bandwidth of an IPv6 address.
