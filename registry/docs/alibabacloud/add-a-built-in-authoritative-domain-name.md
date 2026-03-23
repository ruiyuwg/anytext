Built-in authoritative zones are classified into acceleration zones and regular zones. This topic describes how to add the two types of zones. An acceleration zone can be the same as a regular zone. However, they cannot be associated with the same virtual private cloud (VPC) when you set an effective scope for them.

**Important**

-   From April 30, 2025 (UTC+8), the zones created by new users of PrivateZone are acceleration zones by default.
    
-   By April 30, 2026 (UTC+8), all built-in authoritative zones in regular zones will be switched to acceleration zones. This may lead to increased DNS requests and higher costs. We recommend that you [mitigate the throttling of DNS requests initiated by ECS instances](/help/en/dns/how-can-the-speed-limit-of-ecs-dns-query-requests) to avoid increased DNS requests when local cache is unavailable.
    

## Add a built-in authoritative acceleration zone

Perform the following steps to add a built-in authoritative acceleration zone:

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode**. On the **Built-in Authoritative Module** tab, click the **User Defined Zones** tab.
    
3.  On the **User Defined Zones** tab, click **Add New Zone**. In the Add Built-in Authoritative Zone panel, enter a built-in authoritative zone name and select **Built-in Authoritative Acceleration Zone (Recommended)** for the **Zone Type** parameter. Then, click **OK**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0483329961/p720783.png)
    

## **Add a built-in authoritative regular zone**

Perform the following steps to add a built-in authoritative regular zone:

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode**. On the **Built-in Authoritative Module** tab, click the **User Defined Zones** tab.
    
3.  On the **User Defined Zones** tab, click **Add New Zone**. In the Add Built-in Authoritative Zone panel, enter a built-in authoritative zone name and select **Built-in Authoritative Regular Zone** for the **Zone Type** parameter. Then, click **OK**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0483329961/p720782.png)
    
    **Important**
    
    We recommend that you set the effective scope of a zone after you configure all Domain Name System (DNS) records. If you set an effective scope before you configure DNS records, the DNS resolution for the zone within the effective scope will fail unless you enable the subdomain recursive resolution proxy.
    

**Parameter**

**Description**

Built-in Authoritative Zone

The intranet zone, which can be the same as a public zone. You can enter an intranet zone name based on your business requirements. However, if the intranet zone is the same as a public zone, the DNS records of the public zone on the Internet will be replaced by the DNS records of the intranet zone within the effective scope.

Recursive Resolution Proxy for Subdomain Names

By default, this feature is disabled. If you enable this feature, when you query subdomain names that are not hosted in the zones within the effective scope, the built-in authoritative module recursively sends DNS requests for the subdomain names to the Internet and returns the DNS resolution results.

Built-in Authoritative Regular Zone

DNS requests for built-in authoritative regular zones take a lower priority than DNS requests for the cache module. DNS records of built-in authoritative regular zones are cached. The authoritative zones created in Alibaba Cloud DNS PrivateZone are classified as regular zones.

Built-in Authoritative Acceleration Zone

DNS requests for built-in authoritative acceleration zones take a higher priority than DNS requests for the cache module, and are resolved faster.

Effective Scope of Zone

This parameter specifies the networks within which the DNS records of zones take effect. If a zone is resolved outside the effective scope of the zone, the DNS records of the zone do not take effect. You can associate a zone with one or more VPCs to determine an effective scope for the zone. For more information about VPCs, see [What is a VPC?](/help/en/vpc/what-is-vpc)
