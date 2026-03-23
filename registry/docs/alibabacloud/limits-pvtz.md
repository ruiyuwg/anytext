**Important**

-   From April 30, 2025 (UTC+8), the zones created by new users of PrivateZone are acceleration zones by default.
    
-   By April 30, 2026 (UTC+8), all built-in authoritative zones in regular zones will be switched to acceleration zones. This may lead to increased DNS requests and higher costs. We recommend that you [mitigate the throttling of DNS requests initiated by ECS instances](/help/en/dns/how-can-the-speed-limit-of-ecs-dns-query-requests) to avoid increased DNS requests when local cache is unavaliable.
    

## **Limits on the built-in authoritative module**

**Item**

**Limit**

**Description**

Maximum number of zones

500

Up to 500 zones can be added within each Alibaba Cloud account.

Maximum number of associated virtual private clouds (VPCs)

100

Up to 100 VPCs can be associated with a zone.

Maximum number of Alibaba Cloud accounts whose VPCs can be associated with a zone

200

VPCs of up to 200 Alibaba Cloud accounts can be associated with a zone.

Maximum number of Domain Name System (DNS) records

100,000 (regular zone)

By default, up to 100,000 DNS records can be added for a built-in authoritative acceleration zone or a built-in authoritative regular zone. If you want to add more DNS records, submit a ticket to increase the limit.

100,000 (acceleration zone)

Weight setting

Not supported (regular zone)

If you configure multiple IP addresses for a hostname, after a DNS request for the hostname is sent, the IP addresses are returned based on weight settings to achieve load balancing.

Supported (acceleration zone)

Intranet DNS resolution based on custom lines

Not supported (regular zone)

You can configure custom IP addresses for the DNS requests that are sent from a specific internal CIDR block in the built-in authoritative DNS. For more information about the limits on custom lines, see the [Limits](/help/en/dns/custom-resolution-line#68861f205159z) section of the Line-based intelligent DNS resolution topic.

Supported (acceleration zone)

Maximum number of DNS requests that an Elastic Compute Service (ECS) instance in a VPC can send per second

5,000

Up to 5,000 DNS requests can be sent by an ECS instance in a VPC per second. If the upper limit is exceeded, throttling may be triggered and service availability of 99.99% in the Service Level Agreement (SLA) may not be guaranteed.

Maximum number of DNS requests that all ECS instances in a VPC can send per second

Unlimited

The total number of DNS requests that all ECS instances in a VPC can send per second is not limited.

Maximum number of recursive DNS requests that an ECS instance in a VPC can send to the Internet per second

600

An ECS instance in a VPC can send up to 600 recursive DNS requests to the Internet per second. If the upper limit is exceeded, throttling may be triggered.

Maximum number of recursive DNS requests that all ECS instances in a VPC can send to the Internet per second

5,000

All ECS instances in a VPC can send up to 5,000 recursive DNS requests to the Internet per second. If the upper limit is exceeded, throttling may be triggered.

Batch operations

For more information, see the [Limits](/help/en/dns/batch-operation#17b3cd003dcy9) section of the Perform batch operations topic.

Private DNS allows you to import multiple domain names, delete multiple domain names, import multiple DNS records, and suspend or enable multiple DNS records at a time.

Service address

For more information, see the [Limits](/help/en/dns/service-address#9649051f574m5) section of the Perform batch operations topic.

You can create an inbound endpoint to specify custom DNS server addresses of Private DNS. This prevents system-assigned DNS server addresses (100.100.2.136 and 100.100.2.138) from being identical to IP addresses in on-premises data centers when data centers access the DNS servers.

Wildcard intranet DNS resolution

\-

Wildcard intranet DNS resolution is supported regardless of whether the recursive resolution proxy for subdomain names is enabled.

**Warning**

**The queries per second (QPS) throttling for the number of DNS requests initiated by an ECS instance in a VPC is configured globally for all ECS instances and cannot be changed.**

-   For more information about the threshold for the total number of recursive DNS requests that all ECS instances in a VPC can send to the Internet, see [Add a cache retention domain name](/help/en/dns/add-cache-hold-domain-name).
    
-   For more information about the threshold for the total number of DNS requests initiated by an ECS instance in a VPC, see [Mitigate the throttling of DNS requests initiated by ECS instances](/help/en/dns/how-can-the-speed-limit-of-ecs-dns-query-requests#undefined).
    
-   For more information about how to configure alert notifications, see [Throttling alert notification](/help/en/dns/notification-message-subscription#6422470caehag).
    
-   If you want to view how the throttling alert is triggered, enable the traffic analysis feature for Private DNS. For more information, see [Throttling alert history](/help/en/dns/global-traffic-analysis#bcfa46d044mef).
    

## **Limits on the format of a zone**

-   A zone can be up to 200 characters in length and have at least one level set.
    
    **Note**
    
    The level sets are separated with periods (.). For example, `a` represents one level set, `a.b` represents two level sets, and `a.b.c` represents three level sets.
    
-   A zone can have up to 16 level sets.
    
-   A hostname can have up to 20 level sets.
    
    **Note**
    
    In conclusion, a fully qualified domain name (FQDN) can have up to 36 level sets.
    
-   The first-level set of a domain name, also known as the top-level domain name, can be 2 to 63 characters in length. The other domain names below the top-level domain name can be 1 to 63 characters in length.
    
    **Note**
    
    Take the domain name `www.aliyun.com` as an example. `com` can be 2 to 63 characters in length, `aliyun` can be 1 to 63 characters in length, and `www` can be 1 to 63 characters in length.
    
-   A reverse lookup zone ends with `.in-addr.arpa`
    

## **Limits on the forward module**

**Item**

**Limit**

**Description**

Maximum number of endpoints within an Alibaba Cloud account

20

Up to 20 endpoints can be created within an Alibaba Cloud account.

Maximum number of forwarding rules within an Alibaba Cloud account

1000

Up to 1,000 forwarding rules can be created within an Alibaba Cloud account.

Number of IP addresses for an outbound endpoint

2 to 6

Two to six IP addresses can be configured for an outbound endpoint.

Maximum number of destination IP addresses that can be specified in a forwarding rule

6

Up to six destination IP addresses can be specified in a forwarding rule.

Maximum number of VPCs that can be specified in a forwarding rule

100

Up to 100 VPCs can be specified in a forwarding rule.

Maximum number of level sets for a forward zone

16

A forward zone can have up to 16 level sets. If you enter an invalid zone, an error message appears.

**Important**

DNS requests initiated by an ECS instance in a VPC of an outbound endpoint is included in external DNS requests and are subject to the **Maximum number of recursive DNS requests from an ECS instance in a VPC that can be sent to the Internet**, which is **600 requests/second**.
