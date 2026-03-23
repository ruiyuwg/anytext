Alibaba Cloud DNS offers a free tier and three paid editions through its **Public Zone** service. This document compares features, resolution limits, and security options across editions.

## How to choose an edition

**Scenario**

**Recommended edition**

Testing or development environments with no SLA requirement

Free Edition

Individual developer with a personal site or small project

Personal Edition

Enterprise needing province-level resolution, Secondary DNS, or 1-second TTL

Enterprise Ultimate Edition

Enterprise requiring dedicated expert support, unlimited DNS records, or built-in Full Protection

Exclusive Edition

All three paid editions provide 100% monthly availability Service Level Agreement (SLA).

Differences to consider:

-   **TTL granularity** -- Free Edition and Personal Edition have a minimum TTL of 600 seconds. Enterprise Ultimate Edition and Exclusive Edition support a 1-second minimum TTL for fast failover.
    
-   **Intelligent Resolution depth** -- Free Edition and Personal Edition resolve by broad region and a limited set of carriers. Enterprise Ultimate Edition and Exclusive Edition support province-level and country-level resolution, 14 carriers, cloud-provider-based routing, and custom lines.
    
-   **Security** -- Free Edition does not support DNS security protection. Personal Edition and Enterprise Ultimate Edition offer optional Basic Protection and Full Protection. Exclusive Edition includes Full Protection by default.
    
-   **Scalability** -- Exclusive Edition removes hard limits on DNS records, subdomain levels, URL forwarding, alias records, and load balancing IPs.
    

**Note**

Personal Edition is for individual developers only. Enterprise users cannot purchase new Personal Edition instances, but existing instances can still be renewed.

**Note**

Alibaba Cloud DNS supports seamless instance upgrades. For more information, see [Upgrade, detach, replace, or downgrade an instance](/help/en/dns/pubz-instance-upgrade-unbind-replace-downgrade).

## Feature comparison

**Important**

-   Purchase DNS security services to increase the DNS resolution query limit and prevent resolution failures when the number of requests reaches the limit.
    
-   In scenarios that involve frequent batch changes to DNS records, use the DNS record backup feature to quickly revert incorrect changes.
    
-   The number of attached domain names is based on the number of primary domain names. If you host a subdomain separately, it counts as a primary domain name.
    

### Infrastructure and resolution

**Feature**

**Free Edition**

**Personal Edition**

**Enterprise Ultimate Edition**

**Exclusive Edition**

Availability SLA

No availability guarantee

100% monthly

100% monthly

100% monthly

DNS nodes

4 in the Chinese mainland

12 in the Chinese mainland, 15 outside China

12 in the Chinese mainland, 15 outside China

12 in the Chinese mainland, 15 outside China

Subdomain hosting level

Level 16

Level 16

Level 16

Level 16

DNS records per primary domain name

100,000

100,000

100,000

Unlimited\\\*

Subdomain levels

Level 10

Level 20

Level 20

Unlimited\\\*

Minimum TTL

600 seconds

600 seconds

1 second

1 second

DNS resolution peak

Up to 20,000 requests per second

Up to 200,000 queries per second (QPS)

Up to 200,000 QPS

Up to 200,000 QPS

Domain names per instance

\--

1 by default, up to 100,000

1 by default, up to 100,000

1 by default, up to 100,000

### Intelligent Resolution

Intelligent Resolution returns DNS results based on the requester's geographic location and carrier, reducing latency and improving access speed. For more information, see [Intelligent Resolution](/help/en/dns/intelligent-dns-resolution#2783419).

**Capability**

**Free Edition**

**Personal Edition**

**Enterprise Ultimate Edition**

**Exclusive Edition**

Region

Regions in China, outside China

Mainland China regions, outside China

the Chinese mainland (by province), outside China (by country)

the Chinese mainland (by province), outside China (by country)

Cloud provider

\--

\--

Alibaba Cloud (the Chinese mainland), Alibaba Cloud (outside China)

Alibaba Cloud (the Chinese mainland), Alibaba Cloud (outside China)

Carriers

China Unicom, China Telecom, China Mobile, CERNET

China Unicom, China Telecom, China Mobile, CERNET, China Broadcasting Network, Dr. Peng

China Unicom, China Telecom, China Mobile, Dr. Peng, CERNET, China Broadcasting Network, CSTNET, Chilian Network, Founder Broadband, Topway, Wasu, Oriental Cable Network, Haokuan Network, Gehua

China Unicom, China Telecom, China Mobile, Dr. Peng, CERNET, China Broadcasting Network, CSTNET, Chilian Network, Founder Broadband, Topway, Wasu, Oriental Cable Network, Haokuan Network, Gehua

Search engines

Google, Baidu, Bing, Sogou, Qihoo, Youdao

Google, Baidu, Bing, Sogou, Qihoo, Youdao, Yahoo

Google, Baidu, Bing, Sogou, Qihoo, Youdao, Yahoo (in and outside the Chinese mainland)

Google, Baidu, Bing, Sogou, Qihoo, Youdao, Yahoo (in and outside the Chinese mainland)

Custom lines

\--

\--

Supported

Supported

### Additional features

**Feature**

**Free Edition**

**Personal Edition**

**Enterprise Ultimate Edition**

**Exclusive Edition**

URL forwarding (per domain name)

2

5

10

Unlimited\\\*

Weight configuration (A, CNAME, and AAAA records)

Supported

Supported

Supported

Supported

Alias record type (per domain name)

\--

\--

10

Unlimited\\\*

Load balancing (IPs per domain name per line)

10

100

100

Unlimited\\\*

Request statistics (subdomain level)

\--

Supported

Supported

Supported

IPv6 DNS

Supported

Supported

Supported

Supported

Secondary DNS

\--

\--

Supported

Supported

DNS record backup

\--

\--

Supported

Supported

DNSSEC

\--

Supported

Supported

Supported

### Support

**Service**

**Free Edition**

**Personal Edition**

**Enterprise Ultimate Edition**

**Exclusive Edition**

Dedicated support

\--

DingTalk user support group

DingTalk user support group

1-on-1 expert service

Resolution change requests

\--

\--

\--

6 per year

DNS architecture consultation

\--

\--

\--

1 per year

\\\* **Unlimited** means you can request a parameter limit increase if you exceed the default system limit, provided the product remains stable and secure.

## DNS security protection

Free Edition does not support DNS security protection. Paid editions offer two tiers:

**Security tier**

**Protection capacity**

**Description**

Basic Protection

Up to 10 million QPS per domain name

Protects domain names attached to a **Public Zone** instance against DNS attacks.

Full Protection

Over 100 million QPS per domain name

Provides full DNS attack protection. Ensures normal DNS resolution during DNS flood attacks.

**Edition**

**DNS attack protection**

Free Edition

Not supported

Personal Edition

Optional (Basic Protection or Full Protection)

Enterprise Ultimate Edition

Optional (Basic Protection or Full Protection)

Exclusive Edition

Full Protection included by default

## FAQ

**Can I downgrade an instance?**

Alibaba Cloud DNS does not support direct instance downgrades. To move to a lower edition, replace the instance that your domain name is attached to with a paid instance of a lower edition. You can also reduce the security protection level or the number of domain names using this method.

After you attach the domain name to the new instance, unsubscribe from the old instance. For more information, see [Upgrade, detach, replace, or downgrade an instance](/help/en/dns/pubz-instance-upgrade-unbind-replace-downgrade) and [Unsubscribe from an instance](/help/en/dns/pubz-product-unsubscribe).

**Where are the Public Zone points of presence?**

**Public Zone** points of presence (POPs) are distributed across the following locations:

US (Virginia), US (Silicon Valley), Mexico, Indonesia (Jakarta), Malaysia (Kuala Lumpur), Singapore, Japan (Tokyo), SAU (Riyadh - Partner Region), UAE (Dubai), Germany (Frankfurt), UK (London), Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), China (Hong Kong), China (Beijing), China (Shanghai), China (Shenzhen), China (Hangzhou), China (Chengdu), China (Qingdao), Dalian, Xi'an, Tianjin, Taiyuan, Zhengzhou, China (Nanjing - Local Region - Decommissioning).

Cluster deployment is subject to change based on Alibaba Cloud infrastructure development and is not covered by the SLA.

**What does "number of domain names per instance" mean?**

Each **Public Zone** instance supports one primary domain name by default (for example, example.com). To host additional domain names such as example.cn or example.net on the same instance, increase the domain name count. All paid editions support up to 100,000 domain names per instance.
