The fees for an Anti-DDoS Proxy (Chinese Mainland) instance include a subscription fee and pay-as-you-go fees for enabled features. This guide details the billable items, expiration policy, and overdue payment policy for Anti-DDoS Proxy (Chinese Mainland) instances.

## Instance types

Anti-DDoS Proxy (Chinese Mainland) is available in two instance types. You can purchase a Professional mitigation plan directly from the buy page. To purchase the Advanced mitigation plan, you must contact your business manager.

-   Professional mitigation plan: The mitigation capabilities are based on the basic protection bandwidth and burstable protection bandwidth that you specify when you purchase an instance.
    
-   Advanced mitigation plan: The basic protection bandwidth is 5 Gbit/s, and 2 advanced mitigation sessions are provided each calendar month.
    
    **Note**
    
    -   Advanced mitigation leverages the anti-DDoS scrubbing centers of Alibaba Cloud in the current region to protect your services against DDoS attacks.
        
    -   If the advanced mitigation sessions that are provided per calendar month are exhausted, you can purchase global advanced mitigation sessions. For more information, see [Billing of advanced mitigation sessions](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/billing-of-advanced-mitigation-sessions#concept-tzp-g2m-42b).
        
    

## Billing

**Note**

The actual prices on the Anti-DDoS Proxy [(Chinese Mainland) buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=ddoscoo_intl) prevail.

Total fee = Subscription fee + Pay-as-you-go fee.

### Part 1: Subscription fees

Subscription fee = Basic instance fee + Fees for extended configuration items

#### **Basic instance fees**

-   Professional
    
    The following table lists the basic instance fees for different basic bandwidths.
    
    **Basic bandwidth**
    
    **Unit price (****USD/month****)**
    
    **Unit price (****USD/year****)**
    
    30 Gbps
    
    3,120
    
    37,470
    
    60 Gbps
    
    7,020
    
    37,830
    
    100 Gbps
    
    11,530
    
    49,230
    
    300 Gbps
    
    14,530
    
    79,260
    
    400 Gbps
    
    45,030
    
    145,300
    
    500 Gbps
    
    55,240
    
    563,430
    
    600 Gbps
    
    65,750
    
    670,610
    
    800 Gbps
    
    75,644
    
    767,245
    
    1,000 Gbps
    
    91,853
    
    918,533
    
    1,500 Gbps
    
    135,078
    
    1,339,977
    
-   Advanced
    
    Only a basic bandwidth of 5 Gbps is supported. The basic instance fee is USD 2,880/month.
    

The basic instance fee covers the default specifications for the configuration items shown in the following table. You can purchase higher specifications for these items if needed.

**Configuration item**

**Professional plan**

**Advanced plan**

**Billing method**

**Description**

Burstable bandwidth

30 Gbps

Not supported

Pay-as-you-go

Maximum DDoS mitigation capacity. Pay-as-you-go fees apply when attack traffic exceeds the basic bandwidth.

Clean bandwidth

100 Mbps

100 Mbps

Subscription

Maximum clean traffic throughput under normal conditions. Can be extended.

95th percentile burstable clean bandwidth

Disabled

Disabled

Pay-as-you-go

If the actual bandwidth is greater than the clean bandwidth and less than the 95th percentile burstable clean bandwidth, pay-as-you-go fees are incurred.

Request rate (Clean QPS)

3,000

3,000

Subscription

Maximum concurrent HTTP/HTTPS requests under normal conditions. Can be extended.

**Note**

Set this parameter based on your actual service usage. If your actual service usage exceeds the Clean QPS specification that you selected at the time of purchase, packet loss may occur and full logs may be incomplete.

95th percentile burstable QPS

Disabled

Disabled

Pay-as-you-go

If the actual QPS is greater than the clean QPS and less than the 95th percentile burstable QPS, pay-as-you-go fees are incurred.

Functional package

Standard function plan

Standard function plan

Subscription

Includes Standard and Enhanced function plans. The Enhanced plan improves service access and attack mitigation.

For details, see [Differences between the Standard and Enhanced function plans](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/function-plan).

Domains

50

50

Subscription

Number of HTTP/HTTPS domains that can be protected. Can be extended.

For every 10 additional domain names, you can add one first-level domain. (Example: 50 domains → max 5 first-level domains)

Ports

50

50

Subscription

Number of TCP/UDP ports that can be protected. Can be extended.

#### Fees for **extendable** configuration items

-   Clean bandwidth
    
    **Clean bandwidth (Mbps)**
    
    **Unit price (****USD/month/Mbps****)**
    
    0 < Clean bandwidth ≤ 100
    
    0
    
    100 < Clean bandwidth ≤ 600
    
    15
    
    600 < Clean bandwidth ≤ 200,000
    
    11
    
    For example, if you select 500 Mbps for Clean Bandwidth when you purchase an instance, you must pay the following fee for the extended clean bandwidth of the instance each month:
    
    (100 - 0) × 0 + (500 - 100) × 15 = USD 6,000
    
-   Request rate (Clean QPS)
    
    **Clean QPS**
    
    **Unit price (****USD/month/QPS****)**
    
    0 < QPS ≤ 3,000
    
    0
    
    3,000 < QPS ≤ 5,000
    
    1.5
    
    5,000 < QPS ≤ 8,000
    
    1.425
    
    8,000 < QPS ≤ 10,000
    
    1.35
    
    10,000 < QPS ≤ 50,000
    
    1.275
    
    50,000 < QPS ≤ 100,000
    
    1.05
    
    100,000 < QPS ≤ 300,000
    
    0.9
    
    For example, if you select 6,000 for Clean QPS when you purchase an instance, you must pay the following fee for the extended Clean QPS specification of the instance each month:
    
    (3,000 - 0) × 0 + (5,000 - 3,000) × 1.5 + (6,000 - 5,000) × 1.425 = USD 4,425
    
-   Function plan
    
    Enhanced function plan: USD 1,200/month
    
-   Protected domains
    
    **Number of domains**
    
    **Unit price for Standard function plan (****USD/month/domain name****)**
    
    **Unit price for Enhanced function plan (****USD/month/domain name****)**
    
    0 < Number of domain names ≤ 50
    
    0
    
    0
    
    50 < Number of domain names ≤ 200
    
    4.5
    
    7.5
    
    200 < Number of domain names ≤ 600
    
    4.2
    
    7
    
    600 < Number of domain names ≤ 2,000
    
    3.9
    
    6.5
    
    2,000 < Number of domain names ≤ 20,000
    
    2.7
    
    4.5
    
    For example, if you select the Standard function plan and set the number of protected domain names to 600 when you purchase an instance, you must pay the following monthly fee for the additional domain names:
    
    (50 - 0) × 0 + (200 - 50) × 4.5 + (600 - 200) × 4.2 = USD 2,355
    
-   Number of ports
    
    **Number of ports**
    
    **Unit price (****USD/month/port****)**
    
    0 < Number of ports ≤ 50
    
    0
    
    50 < Number of ports ≤ 150
    
    7.5
    
    150 < Number of ports ≤ 400
    
    6.75
    
    400 < Number of ports ≤ 1,000
    
    6
    
    1,000 < Number of ports ≤ 1,500
    
    4.5
    
    For example, if you set the number of ports to 200 when you purchase an instance, you must pay the following monthly fee for the additional ports:
    
    (50 - 0) × 0 + (150 - 50) × 7.50 + (200 - 150) × 6.75 = USD 1,087.5
    

### Part 2: Pay-as-you-go features

You can enable these features on-demand. Charges apply only when usage thresholds are exceeded.

**Feature**

**Billing method**

**Description**

Burstable bandwidth

Pay-as-you-go (daily)

-   Professional instances only
    
-   Used when attack traffic exceeds basic protection bandwidth
    
-   Fees generated based on peak attack bandwidth
    
-   For details, see [Billing of burstable protection bandwidth](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/billing-of-the-burstable-protection-bandwidth-feature).
    

Burstable clean bandwidth

Pay-as-you-go (daily or monthly)

Provides additional clean bandwidth during normal traffic spikes, preventing service throttling. For details, see [Billing of the burstable clean bandwidth feature](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/billing-of-the-burstable-clean-bandwidth-feature#concept-2108382).

Burstable QPS

Pay-as-you-go (daily or monthly)

Provides additional clean QPS capacity during traffic surges. For details, see [Billing of the burstable QPS feature](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/billing-of-the-burstable-qps-feature#main-2346059).

## Expiration policy

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7667826571/CAEQShiBgIDTgq3vxRkiIDBiMTIxY2Y5MzcwYTQ3MmQ5Y2UzNWRiOTBiN2Q0Y2I34538799_20240719095601.180.svg)

**Time period**

**Service traffic forwarding**

**Instance configuration**

0–6 days after expiration

Retains 5 Gbps blackhole threshold. Traffic >5 Gbps triggers blackhole filtering.

Retained

7–29 days after expiration

Service stopped. Resumes after renewal.

**Warning**

To avoid service disruption, switch traffic to your origin server at least 7 days before expiration. • Website: Remove CNAME resolution to Anti-DDoS Proxy • Non-website: Stop using exclusive IP addresses

Retained

Day 30 after expiration

Service stopped.

Instance released

**Warning**

After all Anti-DDoS Proxy instances under your account are released for 30 days, the system automatically clears all associated domain and port forwarding rules. The 30-day countdown starts from the release of the last instance.

## Overdue payments

-   Your account is considered overdue if your available balance (cash, coupons, vouchers) is insufficient to cover the bill.
    
-   To avoid service disruption, top up your account balance promptly.
    

## Renewal policy

You can manually or automatically renew an instance. For more information, see [Renew an instance](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/manage-anti-ddos-pro-or-anti-ddos-premium-instances#section-6fp-qmw-jhg).

## Refund policy

Refunds are not available after purchase.

## Bill query

You can query bills in the Expenses and Costs console. For more information, see [Overview of monthly bills](/help/en/user-center/billing-overview).
