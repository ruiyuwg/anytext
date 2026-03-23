Anti-DDoS Basic is a free service for select Alibaba Cloud products that provides 500 Mbps to 5 Gbps of mitigation capability against common network-layer and transport-layer DDoS attacks.

## **Introduction**

Anti-DDoS Basic is a free security service that provides network-layer and transport-layer protection for select Alibaba Cloud products. This service is integrated into the cloud products, enabled by default, and cannot be disabled. It provides a DDoS mitigation capability of 500 Mbps to 5 Gbps. For more information about the specific mitigation capabilities of each cloud product, see [Thresholds that trigger blackhole filtering in Anti-DDoS Basic](/help/en/anti-ddos/basic-ddos-protection/product-overview/view-the-thresholds-that-trigger-blackhole-filtering-in-anti-ddos-origin-basic).

**Note**

If a customer is frequently attacked, the platform adjusts the mitigation capability based on the customer's historical attack records to ensure the stability of the platform.

Under normal circumstances, Anti-DDoS Basic does not affect user access. However, access may be affected by the attack type, such as HTTP Flood attacks, SYN Flood attacks, and ACK Flood attacks, the attack method, or your business scenario. For example, access may be affected if traffic exceeds the specifications of the platform or product. If Anti-DDoS Basic does not meet your requirements, you can use more advanced protection products, such as Anti-DDoS Origin or Anti-DDoS Proxy. For more information, see [What is Anti-DDoS Origin?](/help/en/anti-ddos/anti-ddos-origin/product-overview/what-is-anti-ddos-origin), [What is Anti-DDoS Proxy?](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/what-are-anti-ddos-pro-and-anti-ddos-premium), and [How to select a DDoS protection product](/help/en/anti-ddos/product-overview/scenario-specific-anti-ddos-solutions).

## **How it works**

Anti-DDoS Basic uses a default scrubbing threshold, which you can also set manually. When traffic meets the conditions for scrubbing, Anti-DDoS Basic filters and scrubs all inbound traffic from the Internet to defend against common network-layer and transport-layer attacks, such as UDP reflection attacks and SYN/ACK Flood attacks. However, Anti-DDoS Basic does not defend against application-layer attacks, such as HTTP Flood attacks and CC attacks.

In addition to the BPS and PPS scrubbing thresholds that you configure, Anti-DDoS Basic uses AI-based intelligent analysis. By leveraging the big data capabilities of Alibaba Cloud, Anti-DDoS Basic learns your traffic patterns and uses algorithms to detect attacks. Traffic scrubbing is triggered only when the AI-based intelligent analysis detects a DDoS attack and the inbound traffic reaches the BPS or PPS threshold that you set. This method prevents false positives that can be caused by fixed thresholds, for example, when normal service traffic fluctuations exceed the scrubbing threshold.

If inbound traffic exceeds the mitigation capability (the blackhole triggering threshold), the cloud product is subject to blackhole filtering. This prevents DDoS attacks from causing further damage to the cloud product or affecting other assets. Blackhole filtering means that Alibaba Cloud temporarily blocks all inbound traffic from the Internet to the cloud product. For more information, see [Blackhole filtering policy of Alibaba Cloud](/help/en/anti-ddos/product-overview/blackhole-filtering-policy-of-alibaba-cloud).

## **Protected cloud products**

Elastic Compute Service (ECS) instances, Server Load Balancer (SLB) instances, elastic IP addresses (EIPs), EIPs that are associated with a NAT gateway, IPv6 gateways, simple application servers, Web Application Firewall (WAF) instances, Global Accelerator (GA) instances, and Anycast EIPs.

## Supported regions

The following table describes the regions where Anti-DDoS Basic is supported.

**Area**

**Region**

Asia Pacific

Thailand (Bangkok), Philippines (Manila), Japan (Tokyo), Indonesia (Jakarta), Malaysia (Kuala Lumpur), South Korea (Seoul), Singapore, China (Hong Kong), China (Chengdu), China (Guangzhou), China (Heyuan), China (Shenzhen), China (Ulanqab), China (Hohhot), China (Zhangjiakou), China (Beijing), China (Qingdao), China (Fuzhou - Local Region), China (Nanjing - Local Region), China (Shanghai), China (Hangzhou)

Europe and Americas

UK (London), Germany (Frankfurt), US (Virginia), US (Silicon Valley)

Middle East

SAU (Riyadh - Partner Region), UAE (Dubai)

## **Glossary**

-   Network-layer attacks: Common attack types include UDP reflection attacks, high-volume SYN and ACK Flood attacks, and malformed packets that do not comply with the IP protocol. These attacks consume server bandwidth to cause a denial of service.
    
-   Application-layer attacks: Common attack types include HTTP Flood attacks, CC attacks, and DNS Flood attacks. These are consumption-based attacks that leverage service features. These attacks consume server processing performance to cause a denial of service.
    

## **References**

-   The maximum scrubbing threshold that you can set for a cloud product depends on the specifications of the product instance. For more information, see [Cloud product specifications and scrubbing thresholds](/help/en/anti-ddos/basic-ddos-protection/product-overview/cloud-service-specification-and-cleaning-trigger-value).
    
-   For more information about how to set scrubbing thresholds, see [Set scrubbing thresholds](/help/en/anti-ddos/basic-ddos-protection/user-guide/blackhole-filtering-thresholds-and-blackhole-filtering-duration-in-cloud-web-hosting).
