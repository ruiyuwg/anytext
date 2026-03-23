Virtual private clouds (VPCs) include free recursive DNS resolution and domain name resolution for Alibaba Cloud services by default. Activate Private Zone to add custom private zones, forwarding rules, inbound endpoints, and DNS traffic analysis.

## Default DNS capabilities

Before activation, the internal DNS service provides the following at no cost:

-   **Recursive resolution** -- DNS resolution for resources such as ECS instances and containers in a VPC. Queries for public domain names are resolved through external recursive DNS.
    
-   **Cloud product zones** -- Domain name resolution for Alibaba Cloud services. When you purchase and start an ECS instance, Private Zone provides free domain name resolution for cloud products and recursive resolution for public domain names.
    

**Note**

Recursive DNS resolution depends on external third-party DNS systems. Alibaba Cloud does not provide a Service-Level Agreement (SLA) for unavailability caused by external network problems or third-party DNS failures.

## Feature comparison

**Feature**

**Before activation**

**After activation**

**What triggers billing**

Private authoritative

Custom domain name (Zone)

Not supported

Supported

Add a private authoritative domain name (Zone).

Cloud product domain name (Zone)

**Supported**

Supported

Free. You can view the DNS configuration for cloud products only after you activate the service.

Cache management

Not supported

Supported

Add a cache retention domain name.

Forwarding management

Not supported

Supported

Add an outbound endpoint or a forwarding rule.

Recursive resolution management

**Supported**

Supported

Free by default for resources in a VPC and for cloud products. Activation is not required.

Inbound endpoint

Not supported

Supported

Add an inbound endpoint.

Network traffic analysis

Not supported

Supported

Enable network traffic analysis for the VPC and generate DNS queries.

## **Limits**

The limits on Private Zone are the same regardless of whether you activate the service. For more information, see [Limits](/help/en/dns/pvtz-restrictions-on-use).

## **Activate Private Zone**

1.  Log on to the [Alibaba Cloud DNS - Private DNS](https://dnsnext.console.alibabacloud.com/privateDNS) console.
    
2.  Click **Activate Now**.
    

## Next steps

-   Create a custom private zone and associate it with a VPC
    
-   Configure forwarding rules to route DNS queries to on-premises DNS servers
    
-   Set up inbound endpoints to allow on-premises networks to resolve private zones
    
-   Enable network traffic analysis for DNS query visibility
