## **Built-in authoritative limits**

**Limit item**

**Limit threshold**

**Description**

Number of domains (zones)

500

You can add up to 500 domains (zones) to each account.

Number of VPCs that you can associate with a zone

100

You can associate up to 100 VPCs with each domain (zone).

Number of accounts from which you can associate VPCs

200

VPCs from up to 200 Alibaba Cloud accounts can be associated.

Number of DNS records

100,000 (Standard zone)

By default, you can add up to 100,000 DNS records to each domain (zone) in both standard zones and accelerated zones of the built-in authoritative DNS. If you need to add more records beyond the limit, you can contact us through a ticket to increase the quota.

100,000 (Accelerated zone)

Weight policy

Not supported (Standard zone)

When multiple IP addresses are configured for the same host record, all IP addresses are returned based on preset weights when responding to DNS query requests. This distributes the resolution traffic to different servers, achieving load balancing.

Supported (Accelerated zone)

Custom internal line resolution

Not supported (Standard zone)

You can customize the built-in authoritative DNS to return specific IP addresses for DNS query requests from certain special internal IP segments. For limits on custom internal lines, see [Limits](/help/en/dns/pvtz-intelligent-analysis-of-sub-line#68861f205159z).

Supported (Accelerated zone)

Total resolution requests from a single ECS instance in a VPC

5,000 per second

The resolution speed on an ECS instance in a VPC can reach up to 5,000 DNS requests per second. If the upper limit is exceeded on an instance, throttling may be triggered. In this case, the 99.99% service availability in the Service Level Agreement (SLA) may not be guaranteed.

Total resolution requests from all ECS instances in a VPC

No limit

There is no limit on the total resolution requests from all ECS instances in a VPC.

External recursive resolution requests from a single ECS instance in a VPC

600 per second

The threshold for external recursive resolution requests from each ECS instance in a VPC is 600 per second. If this threshold is exceeded, throttling may be triggered.

Total external recursive resolution requests from all ECS instances in a VPC

5,000 per second

The overall threshold for external recursive requests in a single VPC is 5,000 per second. If this threshold is exceeded, throttling may be triggered.

Batch operations

[Limits](/help/en/dns/pvtz-batch-operation#17b3cd003dcy9)

Private Zone supports batch operations such as deleting domains, importing DNS records, and pausing/enabling DNS records.

Inbound endpoint

[Limits](/help/en/dns/pvtz-inbound-endpoint#c3c6f54575xds)

You can create inbound endpoints to allocate custom Private Zone inbound endpoints, avoiding address conflicts with the 100.100.2.136/100.100.2.138 address segments when accessing cloud DNS from outside the cloud.

Wildcard DNS record

\-

Wildcard DNS records are supported regardless of whether recursive resolution proxy for subdomain names is enabled.

**Warning**

**The QPS throttling parameters for various query requests within a VPC are global indicators and cannot be adjusted.**

-   For information about throttling external recursive query requests in a VPC, see [Add a domain name for cache retention](/help/en/dns/pvtz-cache-management#ced6f2ba8crht).
    
-   For information about throttling of query requests from ECS instances in a VPC, see [How do I mitigate ECS DNS query request throttling?](/help/en/dns/pvtz-how-can-the-speed-limit-of-ecs-dns-query-requests-be-mitigated).
    
-   For information about throttling alert settings, see [Throttling alert notifications](/help/en/dns/notification-message-subscription-new#6422470caehag).
    
-   To view details about triggered throttling, you can enable Private Zone traffic analysis.
    

## **Domain (zone) format limits**

-   Maximum length: 200 characters, minimum level: 1
    
    **Note**
    
    Levels are separated by dots. For example, `a` is level 1, `a.b` is level 2, `a.b.c` is level 3, and so on.
    
-   Maximum domain (zone) level: 16
    
-   Maximum host record level: 20
    
    **Note**
    
    This means the maximum level for a fully qualified domain name (FQDN) is 36.
    
-   Top-level domain length limit: 2-63 characters. Other level domain length limit: 1-63 characters. Hyphens, underscores, numbers, and lowercase letters are supported. The domain must start with a number or lowercase letter.
    
    **Note**
    
    For example, in `www.aliyun.com`, the length limit for `com` is 2-63 characters, the length limit for `aliyun` is 1-63 characters, and the length limit for `www` is 1-63 characters.
    
-   Reverse lookup domains end with `.in-addr.arpa`
    

## **Forwarding limits**

**Limit item**

**Limit threshold**

**Description**

Number of endpoints per user

20

A user cannot create more than 20 endpoints.

Number of forwarding rules per user

1000

A user cannot create more than 1,000 forwarding rules.

Number of outbound endpoint IPs

Minimum: 2, Maximum: 6

A user can create a minimum of 2 and a maximum of 6 outbound endpoints.

Number of target IPs for forwarding rules

6

You can specify up to 6 target IP addresses for forwarding.

Number of VPCs that can be bound to a forwarding rule

100

A forwarding rule cannot be bound to more than 100 VPCs.

Domain level for forwarding domains (zones)

16

Forwarding domains (zones) support up to 16 domain levels. Otherwise, an error message indicating that the zone name is invalid will be displayed.

**Important**

Domain query requests from outbound endpoints are considered external DNS query requests and are subject to the **limit on external recursive resolution requests from a single ECS instance in a VPC**, which is **600 per second**.
