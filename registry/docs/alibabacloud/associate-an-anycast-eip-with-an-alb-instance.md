By default, an Application Load Balancer (ALB) instance uses Elastic IP Addresses (EIPs) to serve Internet traffic. Because EIPs are region-specific, users far from the ALB region may experience high latency and network jitter. Anycast EIPs solve this by advertising a single public IP address from multiple global access points, routing each user through the nearest point of presence (POP) into Alibaba Cloud's backbone network.

For example, if your ALB instance runs in the Singapore region and a user in Germany sends a request, the Anycast EIP routes that request through the Frankfurt access point instead of traversing the public Internet all the way to Singapore. From Frankfurt, traffic travels over Alibaba Cloud's private global network to reach the ALB instance, reducing latency.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9405922771/CAEQUxiBgMCX4eep3BkiIDFiYjdjOWJkMmUwNzQ2MGJhMTQwOTM0MDc5MjhhZTNm4052371_20231026135007.345.svg)

## How Anycast EIPs work

An Anycast EIP is a public IP address that you purchase as an independent resource. After purchase, Alibaba Cloud announces the IP address from all access points outside the Chinese mainland. When a user sends traffic to this IP, Border Gateway Protocol (BGP) routing directs the traffic to the nearest access point. From there, the traffic travels through Alibaba Cloud's global transmission network to reach the associated endpoint -- in this case, the ALB instance. No manual route configuration is required.

**Note**

Anycast EIPs are designed for Internet-facing services only. Third parties may also use anycast or similar technologies. Accessing those third-party services through an Anycast EIP may cause unexpected behavior.

**Benefit**

**Description**

**Nearest-access-point routing**

Users connect through the closest POP and traverse Alibaba Cloud's backbone network, reducing latency and network jitter compared to region-specific EIPs.

**Multi-POP resilience**

Each Anycast EIP is served by multiple POPs. If one POP becomes unavailable, traffic automatically shifts to another POP without service interruption.

**Cloud-native attack protection**

Anycast EIPs work with built-in security technologies to protect Internet-facing services from attacks and secure access to backend servers.

**Zero additional configuration**

After you associate an Anycast EIP with the ALB instance, the instance serves Internet traffic immediately. No routing or DNS changes are needed.

## Limitations

-   **Supported regions:** Anycast EIPs can be associated with ALB instances only in the following regions.
    
    **Area**
    
    **Region**
    
    China
    
    China (Hong Kong)
    
    Asia Pacific
    
    South Korea (Seoul), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)
    
    Europe and Americas
    
    UK (London), US (Virginia), US (Silicon Valley), Germany (Frankfurt)
    
-   **Cloud Data Transfer (CDT) activation required:** The first time you purchase an Anycast EIP, follow the on-screen instructions to activate CDT. CDT manages the billing for Internet data transfer and internal data transfer of Anycast EIPs. For more information, see [Purchase an Anycast EIP](/help/en/anycast-eip/user-guide/purchase-and-manage-anycast-eips#section-qbt-2ig-hgj).
    
-   **Internet Shared Bandwidth not supported:** ALB instances associated with Anycast EIPs cannot use Internet Shared Bandwidth. The default maximum bandwidth of an Anycast EIP is 1,000 Mbit/s.
    
-   **IPv4 only for dual-stack ALB instances:** Anycast EIPs can be associated only with the IPv4 addresses of dual-stack ALB instances. IPv6 addresses are not supported.
    
-   **Single-region availability per association:** When an Anycast EIP is associated with an ALB or Network Load Balancer (NLB) instance, the Anycast EIP is available only in one region. For more information, see [Anycast EIP limits](/help/en/anycast-eip/product-overview/limits#concept-2494811).
    
-   **Internet-facing ALB instances use EIPs by default:** A newly created Internet-facing ALB instance is associated with regular EIPs. To switch to Anycast EIPs, first change the instance to internal-facing, then change it back to Internet-facing and select Anycast EIP as the IP address type.
    

## Prerequisites

Before you begin, make sure that you have:

-   An ALB instance. For more information, see [Create and manage an ALB instance](/help/en/slb/application-load-balancer/user-guide/create-and-manage-alb-instances#task-1999195)
    
-   Reviewed the [billing impacts](#section-li0-vev-ycq) of associating Anycast EIPs with the ALB instance
    

## Associate Anycast EIPs with an internal-facing ALB instance

If your ALB instance is already internal-facing, associate Anycast EIPs directly by changing the network type to Internet-facing.

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region where the ALB instance is deployed.
    
3.  On the **Instances** page, find the target internal-facing ALB instance and click the instance ID.
    
4.  On the **Instance Details** tab, in the **Basic Information** section, find **Network Type** and click **Change Network Type** next to the private IPv4 address.
    
5.  In the **Change Network Type** dialog box, set **IP Type** to **Anycast EIP**. In the **Assign Anycast EIP** column for each zone, select **Purchase Anycast EIP** to create a new one, or select an existing Anycast EIP. Click **OK**.
    
    **Note**
    
    Assign an Anycast EIP to every zone listed in the dialog box. If you select **Purchase Anycast EIP**, the purchased Anycast EIPs are automatically disassociated and released when you change the ALB instance back to internal-facing or release the instance. View the purchased Anycast EIP details in the [Anycast EIP console](https://vpc.console.alibabacloud.com/eip/anycasts).
    
6.  If this is the first time you activate an Anycast EIP, a **Note** message appears. Review the information, select the Terms of Service, and click **Activate Now** to activate CDT.
    

## Associate Anycast EIPs with an Internet-facing ALB instance

A new Internet-facing ALB instance is associated with regular EIPs by default. To switch to Anycast EIPs, first change the instance to internal-facing, then change it back to Internet-facing with Anycast EIPs.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9405922771/CAEQUxiBgMD.kump3BkiIDAzNzEzMmRjOTY2MTRkNjNiYTlmMzk1Y2NkMThhOTRj4080578_20231212121453.313.svg)

**Step 1: Change the ALB instance to internal-facing**

1.  On the **Instances** page, find the Internet-facing ALB instance and click the instance ID.
    
2.  On the **Instance Details** tab, in the **Basic Information** section, find **Network Type** and click **Change Network Type** next to the public IPv4 address.
    
3.  In the **Change Network Type** message, review the impacts and click **OK**.
    
    Wait about 1 minute. When **Network Type** on the **Instance Details** tab displays **Private**, the change is complete.
    

**Step 2: Change the ALB instance to Internet-facing with Anycast EIPs**

1.  On the **Instances** page, find the target internal-facing ALB instance and click the instance ID.
    
2.  On the **Instance Details** tab, in the **Basic Information** section, find **Network Type** and click **Change Network Type** next to the private IPv4 address.
    
3.  In the **Change Network Type** dialog box, set **IP Type** to **Anycast EIP**. In the **Assign Anycast EIP** column for each zone, select **Purchase Anycast EIP** to create a new one, or select an existing Anycast EIP. Click **OK**.
    
    **Note**
    
    Assign an Anycast EIP to every zone listed in the dialog box. If you select **Purchase Anycast EIP**, the purchased Anycast EIPs are automatically disassociated and released when you change the ALB instance back to internal-facing or release the instance. View the purchased Anycast EIP details in the [Anycast EIP console](https://vpc.console.alibabacloud.com/eip/anycasts).
    
4.  If this is the first time you activate an Anycast EIP, a **Note** message appears. Review the information, select the Terms of Service, and click **Activate Now** to activate CDT.
    

## Verify the configuration

After you associate Anycast EIPs with the ALB instance, verify that the setup works correctly:

1.  On the **Instance Details** tab, confirm that **Network Type** displays **Public** and the associated IP addresses show as Anycast EIPs.
    
2.  From different geographic locations, send requests to the Anycast EIP address and confirm that responses are returned successfully.
    
3.  To verify nearest-access-point routing, use traceroute from different regions and compare the network paths. Traffic should enter Alibaba Cloud through a POP near the request origin rather than routing directly to the ALB region.
    

## Billing

After you associate Anycast EIPs with an ALB instance, you are charged for both the ALB instance and the Anycast EIPs.

**Billable item**

**Billing rule**

**References**

Instance fee

`Instance unit price (USD/hour) x usage duration (hours)`

[Instance fee](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules#section-qj4-a6d-fsq)

Load balancer capacity unit (LCU) fee

`max(new connections, concurrent connections, data scrubbing, rule evaluations) x duration (hours)`

[LCU fee](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules#section-e63-vy8-0h6)

Internet data transfer fee

Not charged for internal-facing ALB instances. For Internet-facing ALB instances, fees depend on the associated IP type. With regular EIPs: instance fees and data transfer fees apply ([EIP pay-as-you-go](/help/en/eip/pay-as-you-go/#task-rcd-sgl-vdb)). With Anycast EIPs: configuration fees, Internet data transfer fees, and internal data transfer fees apply ([Anycast EIP billing](/help/en/anycast-eip/product-overview/billing-1#concept-2494826)).

Web Application Firewall (WAF) fee (optional)

If WAF protection is enabled, WAF 3.0 charges apply. Supports both subscription and pay-as-you-go. [Subscription](/help/en/waf/web-application-firewall-3-0/billing-description#task-2230251), [Pay-as-you-go](/help/en/waf/web-application-firewall-3-0/billing-description-v3#concept-2152696)

## References

-   [Change the network type of an ALB instance](/help/en/slb/application-load-balancer/user-guide/change-the-network-type-of-an-alb-instance#task-2157350)
    
-   [What is Anycast EIP?](/help/en/anycast-eip/product-overview/what-is-anycast-eip)
    
-   [Get started with Anycast EIP](/help/en/anycast-eip/user-guide/getting-started)
