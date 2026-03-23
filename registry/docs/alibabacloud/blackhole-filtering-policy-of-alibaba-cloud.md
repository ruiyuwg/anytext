When the traffic of a Distributed Denial-of-Service (DDoS) attack on an Alibaba Cloud asset exceeds its protection capacity, Alibaba Cloud temporarily blocks the asset's IP address from all internet traffic. This process, known as blackhole filtering, protects the asset from further damage and prevents the attack from affecting other services on the network. This topic describes how to prevent and manage blackhole filtering events.

## Basic DDoS protection capacity

By default, certain Alibaba Cloud public IP assets include a free basic DDoS protection capacity ranging from 500 Mbps to 5 Gbps. The specific protection capacity depends on the region and specifications of the asset. For more information, see [Blackhole thresholds for Basic DDoS Protection](/help/en/anti-ddos/basic-ddos-protection/product-overview/view-the-thresholds-that-trigger-blackhole-filtering-in-anti-ddos-origin-basic#concept-40033-zh) and [Configure traffic scrubbing thresholds](/help/en/anti-ddos/basic-ddos-protection/user-guide/blackhole-filtering-thresholds-and-blackhole-filtering-duration-in-cloud-web-hosting#concept-40053-zh).

**Important**

If your normal service traffic (in bps) exceeds the blackhole threshold, upgrade your asset specifications promptly. Otherwise, your traffic might be mistaken for an attack, triggering a blackhole event.

The higher an asset's DDoS protection capacity, the lower its risk of being blackholed. Therefore, the most effective way to prevent blackholes is to increase your asset's DDoS protection capacity, which also raises its blackhole threshold.

## View asset status, traffic, and attack IPs

1.  Log on to the [Traffic Security console](https://yundun.console.alibabacloud.com/?p=ddos).
    
2.  View the status of your asset.
    
    1.  In the upper-left corner of the **Assets** page, select the region where your public IP asset is located, and then click the corresponding asset tab.
        
    2.  In the asset list, check if the **IP Status** is **Blackholed**.
        
3.  View the asset's traffic and the attack IPs.
    
    1.  In **Event Center**, view the blackhole or scrubbing events. You can also click **View Details** to see inbound traffic in bits per second (bps) and packets per second (pps).
        
    2.  In the upper-right corner of the page, click **Download**. Use a tool such as [Wireshark](https://www.wireshark.org/) to open the downloaded packet capture file and view the attack IPs.
        

## Estimate the automatic blackhole removal time

The default blackhole duration is 2.5 hours. The actual duration varies from 30 minutes to 24 hours and can be longer in rare cases. The duration is affected by the following factors:

-   **Attack continuity**: If an attack persists, the blackhole duration is extended. The timer for automatic removal restarts from the moment of extension.
    
-   **Attack frequency**: If an asset is attacked for the first time, the blackhole duration is automatically shortened. Conversely, for assets that are frequently attacked, Alibaba Cloud extends the duration because they are more likely to be targeted by sustained attacks.
    

**Note**

For assets that experience frequent blackhole events, Alibaba Cloud reserves the right to extend the blackhole duration and lower the blackhole threshold. Refer to your security event notifications for the actual removal time.

1.  View the time of the last attack on your public IP asset.
    
    Log on to the [Traffic Security Console](https://yundun.console.alibabacloud.com/?p=ddos). In the **Event Center** page, find your public IP asset and view the time of the last attack.
    
    **Note**
    
    If an asset is subjected to multiple DDoS attacks, the blackhole removal timer starts from the end time of the last attack.
    
2.  View the current blackhole duration.
    
    On the **Assets** page, view the current blackhole duration. This value represents the total duration of the blackhole.![Blackhole duration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6047194271/p816978.png)
    
3.  Estimate the automatic removal time.
    
    For example, if the last attack occurred at 12:30 and the current blackhole duration is 150 minutes, the blackhole is expected to be removed at 15:00.
    
    **Note**
    
    This is only an estimated time. If the attack on your public IP continues, the duration may be extended.
    

## Remove a blackhole

During a blackhole period, Alibaba Cloud continuously monitors the DDoS attack. After the attack subsides, the blackhole is automatically removed, and internet access to the asset is restored. To urgently restore services while an asset is blackholed, purchase a commercial DDoS protection product. After your purchase, you can manually remove the blackhole.

### Without a commercial DDoS protection product

Manual removal is not supported. You must wait for the blackhole to be removed automatically at the end of its duration. If you need to urgently restore services or access files on your server, see [How to quickly restore services after an ECS instance is blackholed](/help/en/anti-ddos/basic-ddos-protection/user-guide/connect-to-an-ecs-instance-for-which-blackhole-filtering-is-triggered-anti-ddos-origin).

**Warning**

-   If you frequently change or release the public IP addresses of attacked assets such as ECS instances, EIPs, SLB instances, or Simple Application Servers, this behavior can impact other tenants on the platform and may lead to platform-level restrictions.
    
-   After you change an asset's public IP or move your services to a new server, attackers can still discover the new IP using methods such as pinging your domain name, which allows them to launch another attack. To fundamentally resolve the issue, purchase Anti-DDoS Native or Anti-DDoS Proxy.
    

### With a commercial DDoS protection product

You can either wait for the blackhole to be removed automatically or remove it manually. Manual removal does not provide protection against the ongoing DDoS attack; it only buys time to deploy a defense solution. If the attack has not ended after you manually remove the blackhole, your asset may be blackholed again.

**Commercial DDoS protection service**

**Manual removal method**

**Notes**

Anti-DDoS Native

-   Console: For instructions, see [Disable blackhole filtering](/help/en/anti-ddos/basic-ddos-protection/user-guide/deactivate-blackhole-filtering-in-the-traffic-security-console#task675).
    
-   API: Call the [Unblock](/help/en/anti-ddos/anti-ddos-origin/developer-reference/api-ddosbgp-2018-07-20-deleteblackhole#main-107864) operation.
    

A limited number of manual removals are available each month. The number is typically no less than the number of protected IPs in your plan.

Anti-DDoS Proxy (Chinese Mainland)

-   Console: For instructions, see [Cancel Blackhole](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/deactivate-blackhole-filtering-in-the-anti-ddos-pro-or-anti-ddos-premium-console#task664).
    
-   API: Call the [DeleteBlackhole](/help/en/anti-ddos/anti-ddos-pro-and-premium/developer-reference/api-ddoscoo-2020-01-01-modifyblackholestatus#main-107864) operation.
    

-   You can remove the blackhole only after the asset has been blackholed for at least 2 minutes.
    
-   You can manually remove blackholes up to five times per day.
    

Anti-DDoS Proxy (Outside Chinese Mainland)

Manual removal is not required.

Unlike Anti-DDoS Proxy (Chinese Mainland) instances that have a fixed protection bandwidth, Anti-DDoS Proxy (Outside Chinese Mainland) instances provide advanced, elastic protection with no upper limit. Manual blackhole removal is normally not necessary.

## Select a DDoS protection product

-   [Anti-DDoS Native](/help/en/anti-ddos/anti-ddos-origin/product-overview/what-is-anti-ddos-origin): A security product that directly enhances the DDoS protection capabilities of your Alibaba Cloud assets. It is easy to deploy and does not require changes to your network architecture. It has no limits on the number of Layer 4 ports or Layer 7 domain names. You only need to associate your cloud asset's IP with a Anti-DDoS Native instance to enable protection.
    
-   [Anti-DDoS Proxy](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/what-are-anti-ddos-pro-and-anti-ddos-premium): A proxy-based DDoS protection service provided by Alibaba Cloud. It defends against both volumetric and resource exhaustion DDoS attacks and can protect servers hosted on or off Alibaba Cloud. When a service protected by Anti-DDoS Proxy experiences a large-scale DDoS attack, the service redirects traffic to scrubbing centers through DNS resolution. The scrubbing centers then forward only clean traffic to your origin servers.
    

For detailed selection guidance and billing information, see [Select a DDoS protection product](/help/en/anti-ddos/product-overview/scenario-specific-anti-ddos-solutions), [Anti-DDoS Native 2.0 (Subscription)](/help/en/anti-ddos/anti-ddos-origin/product-overview/anti-ddos-origin-2), and [Billing of Anti-DDoS Proxy (Chinese Mainland)](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/billing-of-anti-ddos-pro).

## FAQ

### Why can't I manually remove a blackhole when using only Basic DDoS Protection?

You cannot manually remove a blackhole if your asset is only covered by the free Basic DDoS Protection service. You must wait for the system to automatically lift the blackhole after its duration expires.

Manual removal is a feature available only with paid commercial products like Anti-DDoS Native or Anti-DDoS Proxy. To regain the ability to manually unblock your IP and restore services urgently, you must upgrade to one of these services.

### Is it effective to use network ACLs to block volumetric DDoS attacks and prevent blackholes?

No, using network access control lists (ACLs) is not an effective method for mitigating volumetric DDoS attacks or preventing your IP from being blackholed.

Volumetric attacks saturate your network bandwidth. By the time traffic reaches the point where ACL rules are processed, the network link is already congested, which triggers the blackhole. While ACLs can block specific IPs, they cannot handle the massive volume from a distributed attack. The correct way to defend against these attacks is to use a dedicated mitigation service like Anti-DDoS Native or Anti-DDoS Proxy that scrubs traffic at the network edge.

### What's the difference between traffic metrics in CloudMonitor and DDoS Protection, and why do the numbers not match?

The traffic data in CloudMonitor and DDoS Protection often differ because they measure traffic at different points in the network and for different purposes.

-   **DDoS Protection** measures raw inbound traffic at the edge of the Alibaba Cloud network to detect attack patterns. This data is captured before any filtering or scrubbing occurs.
    
-   **CloudMonitor** measures traffic passing through the virtual network interface (vNIC) of a specific resource, such as an ECS instance. This reflects the traffic that has already been processed by network security layers.
    

As a result, you should rely on the DDoS Protection console for accurate metrics related to DDoS attacks, and use CloudMonitor for monitoring the final traffic that reaches your service instance.
