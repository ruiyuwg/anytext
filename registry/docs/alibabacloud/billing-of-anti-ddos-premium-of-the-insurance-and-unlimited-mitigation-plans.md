The fees for Anti-DDoS Proxy (Outside Chinese Mainland) consist of two components: **subscription** and **pay-as-you-go**. The subscription fee covers the instance plan and extended specifications that you select at the time of purchase. The pay-as-you-go fee includes charges for burstable usage that are incurred during use. This topic describes the cost structure, product selection, pricing details, and related risks of Anti-DDoS Proxy (Outside Chinese Mainland).

## **Core concepts**

**Advanced mitigation:** Integrates the capabilities of all Anti-DDoS scrubbing centers in the current Alibaba Cloud region to defend against DDoS attacks and protect your services. For more information, see [Advanced mitigation](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/terms#section-oum-a36-4bo).

## **Plan overview**

**Comparison dimension**

**Insurance**

**Unlimited**

**Core difference**

Includes **2** **advanced mitigation** sessions per month.

Includes **unlimited** **advanced mitigation** sessions per month.

**After the session limit is exceeded**

After the included advanced mitigation sessions are used, you can purchase additional sessions. For more information, see [Billing of global advanced mitigation sessions](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/billing-of-advanced-mitigation-sessions#concept-tzp-g2m-42b).

Not applicable.

**Scenarios**

Suitable for users with servers and customers outside the Chinese mainland who have a low risk of attacks.

Ideal for scenarios where both servers and users are outside the Chinese mainland, and the core business requires maximum business continuity.

## **Cost structure**

`Total cost = Subscription fee (instance fee + extended specification fee) + Pay-as-you-go fee (burstable usage fee)`

**Fee type**

**Billing method**

**Included billable items**

**Subscription**

**Subscription**

Paid upfront at the time of purchase or renewal.

**Pay-as-you-go**

**Pay-as-you-go**

Bills are generated based on the actual usage in the previous billing cycle (daily or monthly).

## **Detailed pricing**

The following prices are for reference only. The actual transaction prices on the [buy page](https://common-buy-intl.aliyun.com/?commodityCode=ddosDip_intl#/buy) prevail.

### **Subscription pricing**

### Unit prices of instances with minimum specifications

The following table lists the unit prices and specifications for instances with the minimum specifications.

-   **Price details**:
    
    -   An **Insurance** instance costs 2,630 USD/month.
        
    -   **Unlimited** instance: USD 11,560 per month
        
-   **Specification details**
    
    **Specification**
    
    **Insurance mitigation plan specifications**
    
    **Unlimited Mitigation Plan Instance Specifications**
    
    **Description**
    
    Clean bandwidth
    
    50 Mbps
    
    20 Mbps
    
    The maximum service traffic that the instance can process when no attacks occur. You can increase this specification.
    
    Clean QPS
    
    500
    
    1,000
    
    The maximum number of concurrent HTTP and HTTPS requests per second that the instance can process when no attacks occur. You can increase this specification.
    
    **Note**
    
    Set this parameter based on your service usage. If the actual QPS of your service exceeds the specified clean QPS, packet loss may occur and full logs may not be recorded completely.
    
    Function plan
    
    Standard Package
    
    Standard Package
    
    Anti-DDoS Proxy supports Standard and Enhanced function plans. The Enhanced function plan improves the service access and DDoS attack mitigation capabilities of Anti-DDoS Proxy.
    
    For more information, see [Differences between the Standard and Enhanced function plans](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/function-plan).
    
    Number of protected domain names
    
    10
    
    10
    
    The number of HTTP and HTTPS domain names that can be added to an instance depends on its specifications.
    
    For every 10 additional domain names, you can add one more top-level domain name. For example, if the value is 50, the domain names can belong to a maximum of five top-level domain names.
    
    Number of ports
    
    5
    
    5
    
    The number of TCP and UDP ports supported by an instance is scalable.
    
    95th Percentile Burstable Clean Bandwidth pattern
    
    Disabled
    
    Disabled
    
    None
    
    95th percentile burstable QPS pattern
    
    Disabled
    
    Disabled
    

### Unit prices of upgradable specifications

If your business requirements exceed the minimum specifications of the instance, you must purchase additional resources. The pricing for each upgradable specification is as follows:

-   **Clean bandwidth**
    
    Tiered pricing is used. The actual prices on the buy page prevail.
    
-   **Clean QPS**
    
    -   **Billing tiers**
        
        **Clean QPS**
        
        **Unit price (****USD per QPS-month****)**
        
        **Insurance**: 0 < QPS ≤ 500
        
        **Unlimited**: 0 < QPS ≤ 1,000
        
        0
        
        **Insurance**: 500 < QPS ≤ 5,000
        
        **Unlimited**: 1,000 < QPS ≤ 5,000
        
        1.5
        
        5,000 < QPS ≤ 8,000
        
        1.425
        
        8,000 < QPS ≤ 10,000
        
        1.35
        
        10,000 < QPS ≤ 50,000
        
        1.275
        
        50,000 < QPS ≤ 100,000
        
        1.05
        
    -   **Billing example**:
        
        -   **Scenario**: You purchase an **Insurance** instance and set Clean QPS to 6,000.
            
        -   **Fee calculation**: (500 - 0) × 0 + (5,000 - 500) × 1.5 + (6,000 - 5,000) × 1.425 = USD 8,175
            
-   **Function plan**
    
    Enhanced function plan: USD 1,200 per month
    
-   **Number of protected domain names**
    
    -   **Billing tiers**
        
        **Number of domain names**
        
        **Unit price for the Standard function plan (****USD per domain name-month****)**
        
        **Unit price for the Enhanced function plan (****USD per domain name-month****)**
        
        0 < Number of domain names ≤ 10
        
        0
        
        0
        
        10 < Number of domain names ≤ 500
        
        4.5
        
        7.5
        
        500 < Number of domain names ≤ 1,000
        
        4.1
        
        7
        
        1,000 < Number of domain names ≤ 5,000
        
        3.7
        
        6.5
        
        5,000 < Number of domain names ≤ 10,000
        
        3.2
        
        5.8
        
        10,000 < Number of domain names ≤ 20,000
        
        2.7
        
        4.5
        
    -   **Billing example**:
        
        -   **Scenario**: You purchase an **Insurance** instance, select the Standard function plan, and set the number of protected domain names to 600.
            
        -   **Fee calculation**: (10 - 0) × 0 + (500 - 10) × 4.5 + (600 - 500) × 4.1 = USD 2,615
            
-   **Number of ports**
    
    -   **Billing tiers**
        
        **Number of ports**
        
        **Unit price (****USD per port-month****)**
        
        0 < Number of ports ≤ 5
        
        0
        
        5 < Number of ports ≤ 50
        
        30
        
        50 < Number of ports ≤ 100
        
        26
        
        100 < Number of ports ≤ 500
        
        22
        
        500 < Number of ports ≤ 1,500
        
        18
        
    -   **Billing example**:
        
        -   **Scenario**: You purchase an **Insurance** instance and set the number of ports to 80.
            
        -   **Fee calculation**: (5 - 0) × 0 + (50 - 5) × 30 + (80 - 50) × 26 = USD 2,130
            

### **Pay-as-you-go pricing (**Burstable clean bandwidth and 95th percentile burstable QPS**)**

**Feature**

**Billing method**

**Description**

95th Percentile Burstable Clean Bandwidth

Pay-as-you-go by day or by month

The burstable clean bandwidth feature provides additional clean bandwidth for your instance. If spikes occur in your service traffic and the traffic exceeds the clean bandwidth of the instance during peak hours, the burstable clean bandwidth feature can be used to prevent access to your service from being limited. For more information, see [Billing of the burstable clean bandwidth feature](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/billing-of-the-burstable-clean-bandwidth-feature#concept-2108382).

95th percentile burstable QPS

Pay-as-you-go by day or by month

The burstable QPS feature provides additional QPS for your instance. If spikes occur in your service QPS and the QPS exceeds the clean QPS of the instance during peak hours, the burstable QPS feature can be used to prevent access to your service from being limited. For more information, see [Billing of the burstable QPS feature](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/billing-of-the-burstable-qps-feature#main-2346059).

## Expiration and release policy

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7877630771/CAEQPxiBgIC276XdtxkiIDU1MDhjZDc0YTQyYzQ0ZjlhYTk1NTQ0NWYwNmRjNTQx4538799_20240719095601.180.svg)

**Time period**

**Service traffic forwarding**

**Instance configuration**

Within seven calendar days after expiration (exclusive)

The blackhole filtering threshold for the instance is 5 Gbps. If the combined forwarded service traffic and attack traffic exceeds 5 Gbps, blackhole filtering is triggered.

**Warning**

To prevent service disruptions after your Anti-DDoS Proxy (Outside Chinese Mainland) instance expires, you must switch your service traffic back to the origin server at least seven calendar days before the expiration date.

-   **Website services**: Ensure that the domain name resolution no longer points to the CNAME address of the Anti-DDoS instance.
    
-   **Non-website services**: Ensure that the service IP address no longer uses the exclusive IP address of the Anti-DDoS instance.
    

Instance configurations are retained.

From Day 7 (inclusive) to Day 15 (exclusive) after expiration

The instance stops forwarding service traffic.

Instance configurations are retained.

On the 15th calendar day after expiration

The instance stops forwarding service traffic.

The instance is released, but its configuration is retained.

One month after the instance is released

Not applicable.

-   If the current instance **is** the last Anti-DDoS instance under your account (meaning all Anti-DDoS instances under the account have been released for one month), the system permanently deletes all Anti-DDoS instance configurations associated with the account. The configurations cannot be recovered.
    
-   If the current instance **is not** the last Anti-DDoS instance under your account, the instance configuration is retained.
    

## Overdue payments

-   Your account has an overdue payment if the available balance, including cash, coupons, and vouchers, is insufficient to pay your outstanding bill.
    
-   After your account has an overdue payment, top up your account to ensure that you have a sufficient balance and prevent service interruptions.
    

## Renewal policy

You can manually or automatically renew an instance. For more information, see [Renew an instance](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/manage-anti-ddos-pro-or-anti-ddos-premium-instances#section-6fp-qmw-jhg).

## Refund policy

Refunds are not available after purchase.

## Bill query

You can query bills in the Expenses and Costs console. For more information, see [Overview of monthly bills](/help/en/user-center/billing-overview).
