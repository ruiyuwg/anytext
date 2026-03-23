Alibaba Cloud’s Anti-DDoS product matrix protects your business from all types of DDoS attacks. It ensures business continuity and stability. Different attacks and business scenarios require different protection strategies. This topic explains core concepts and guides you through scenario-based selection to help you choose the best Anti-DDoS service for your needs.

## **Core Concepts**

Understanding these core concepts is essential to making the right selection.

### **Key Terms**

**Term**

**Description**

**DDoS attack**

A distributed Denial of Service (DDoS) attack is a common network security threat. It floods networks or devices with malicious traffic to exhaust resources. This causes websites or online services to become unavailable. For more information, see [What is a DDoS attack?](/help/en/anti-ddos/product-overview/what-is-a-ddos-attack).

**Blackhole**

A traffic-blocking mechanism. When attack traffic to an IP address exceeds its basic protection capacity, carriers drop all traffic to that IP—including legitimate traffic—to protect Alibaba Cloud’s overall network stability. This causes full service interruption for a period. Upgrading to a higher-tier service—such as Anti-DDoS Proxy—is the most effective way to exit blackhole status.

**Traffic scrubbing**

A process that uses detection and identification algorithms to separate malicious attack traffic from normal service traffic. It discards the malicious traffic and forwards only clean traffic back to the origin server. This keeps your service available.

### **Product Definitions**

-   **Anti-DDoS Basic**: A free, built-in protection service for select Alibaba Cloud products. It defends against small-scale attacks but has limited mitigation capacity (500 Mbps to 5 Gbps). When attack traffic exceeds this threshold, the targeted IP enters blackhole status and your service stops.
    
-   **Anti-DDoS Origin**: A security service that directly enhances the DDoS defense capability of Alibaba Cloud products. It deploys without changing your network architecture or your public-facing IP addresses. It mainly defends against volumetric DDoS attacks at Layer 3 and Layer 4.
    
-   **Anti-DDoS Proxy**: A proxy-based protection service. It redirects service traffic to global Anti-DDoS scrubbing centers using DNS resolution. This hides your origin IP address and provides comprehensive defense against network-layer, transport-layer, and application-layer attacks, such as HTTP/HTTPS flood attacks.
    

## **Detailed Protection Options**

**Note**

If you need a custom security solution—such as ultra-large scale protection or UDP-based application-layer protection—contact your account manager by phone.

### **Product Comparison**

**Comparison Dimension**

**Anti-DDoS Basic**

**Anti-DDoS Origin**

**Anti-DDoS Proxy**

**Protects Regular Alibaba Cloud Services**

**Enhanced Cloud Service Protection**

**Scenarios**

-   You are cost-sensitive.
    
-   Your non-core services can tolerate short interruptions.
    
-   You face only small-scale attacks.
    

-   You have many IPs or ports.
    
-   Your clean bandwidth is large—such as over 1 Gbps—and your HTTP and HTTPS clean QPS exceeds 5,000. You cannot change your public-facing IP.
    
-   You need ultra-low latency and uninterrupted service during volumetric attacks.
    
-   You experience occasional DDoS attacks.
    

-   You face frequent, intense attacks.
    
-   You need fine-grained HTTP flood protection.
    
-   You can change your public-facing IP.
    

**Billing**

Free.

-   **Subscription (prepaid)**: Includes the Inclusive Edition for Small and Medium Enterprises and the Enterprise Edition. For details, see [Anti-DDoS Origin 2.0 (Subscription)](/help/en/anti-ddos/anti-ddos-origin/product-overview/anti-ddos-origin-2).
    
-   **Pay-as-you-go (postpaid)**: For details, see [Anti-DDoS Origin 2.0 (Pay-as-you-go)](/help/en/anti-ddos/anti-ddos-origin/product-overview/pay-as-you-go).
    

Only supports **pay-as-you-go (postpaid)**. For details, see [Anti-DDoS Origin 2.0 (Pay-as-you-go)](/help/en/anti-ddos/anti-ddos-origin/product-overview/pay-as-you-go).

-   **Instance fee (prepaid)**: Pay monthly or annually based on your selected basic protection bandwidth, clean bandwidth, and QPS.
    
-   **Elastic protection fee (postpaid)**: Charged per day based on peak attack traffic when it exceeds your basic protection bandwidth.
    
-   **Elastic clean bandwidth/QPS fee (postpaid)**: Charged per day or per month based on the 95th percentile of clean traffic or QPS when it exceeds your basic specifications.
    
-   **Global advanced mitigation session**: Purchase on demand for specific instances.
    

For more information, see [Billing](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/what-are-anti-ddos-pro-and-anti-ddos-premium#a86b466a005y6).

**Core Mechanism**

Built into cloud services. Automatically drops traffic (blackhole) when traffic exceeds the threshold. This protects Alibaba Cloud’s network stability.

Does not change your public-facing IP. Directly associates with your cloud resources. Performs traffic scrubbing when attack traffic exceeds the threshold.

Redirects traffic to dedicated Anti-DDoS centers using DNS changes. Scrubs all traffic before forwarding it. This keeps your origin server available.

**Connection Type**

Enabled automatically. No manual operation required.

You can associate protected objects in the console.

You can change your DNS resolution to point traffic to the Anti-DDoS Proxy IP address.

**Protected Object**

Some Alibaba Cloud products

Specific Alibaba Cloud services, such as **ECS, SLB, EIP (including EIPs attached to NAT Gateways), IPv6 Gateway, Simple Application Servers, WAF, GA, and AnyCast EIP**.

Some Alibaba Cloud products:

Specific Alibaba Cloud services, such as **ECS, SLB, EIP (including EIPs attached to NAT Gateways), IPv6 Gateway, Simple Application Servers, WAF, GA, and AnyCast EIP**.

Currently supports only EIPs with Anti-DDoS (Enhanced) enabled.

Any public IP address.

**Mitigation Capabilities**

Low. Based on Alibaba Cloud’s built-in defense capacity: 500 Mbps to 5 Gbps. For more information, see [Thresholds That Trigger Blackhole Filtering in Anti-DDoS Basic](/help/en/anti-ddos/basic-ddos-protection/product-overview/view-the-thresholds-that-trigger-blackhole-filtering-in-anti-ddos-origin-basic).

High. Based on Alibaba Cloud’s built-in defense capacity: up to several hundred Gbps. For more information, see [What Is Anti-DDoS Origin?](/help/en/anti-ddos/anti-ddos-origin/product-overview/what-is-anti-ddos-origin).

High. Based on Alibaba Cloud’s global Anti-DDoS scrubbing centers: over 1 Tbps.

High. Based on Alibaba Cloud’s global Anti-DDoS scrubbing centers: over 1 Tbps.

### **Comparison of Mitigated DDoS Attack Types**

**Attack Type**

**Description**

**Anti-DDoS Origin**

**Anti-DDoS Proxy**

**Standard Security for Alibaba Cloud Services**

**Cloud products with enhanced protection**

**Network-layer DDoS Attack**

Includes Frag Flood, Smurf, Stream Flood, Land Flood, malformed IP packets, malformed TCP packets, and malformed UDP packets.

Supported

Supported

Supported

**Transport-layer DDoS Attack**

Includes SYN Flood, ACK Flood, UDP Flood, ICMP Flood, RST Flood, NTP reflection, SSDP reflection, and DNS reflection.

Supported

Supported

Supported

**Application-layer DDoS Attack (HTTP/HTTPS)**

Also called **Web-based application-layer flood attacks**. Includes HTTP/HTTPS flood attacks and HTTP slow-rate attacks (such as LOIC, HOIC, Slowloris, Pyloris, and Xoic) targeting HTTP-based services such as websites, API operations, and WebSocket.

Not supported

Not supported

Supported

**Application-layer DDoS Attack (Non-HTTP/HTTPS TCP Application-layer Protocols)**

Also called **non-Web-based application-layer flood attacks**. Includes TCP flood attacks, empty TCP connections, and TCP connection resource exhaustion attacks targeting non-HTTP services. Examples include proprietary protocols, MySQL, MQTT, and RTMP.

Not supported

Supported

**Note**

In public preview. Available only in the China (Hangzhou) region.

Supported

**Application-layer DDoS Attack (UDP-based Application-layer Protocols)**

CC attacks that target UDP-based services, such as DNS Flood attacks against UDP-CC and NS services, UDP-based gaming services, and UDP-based voice calls.

**Important**

UDP flood protection requires purchasing [Managed Security Service](https://common-buy-intl.alibabacloud.com/?commodityCode=yundun_mssp_intl). Without it, UDP flood protection is not available.

Supported

**Note**

Supports scrubbing DNS attacks targeting non-DNS services. To protect DNS services, use [DNS Security](/help/en/dns/dns-protection).

### **Protection Effectiveness**

-   DDoS attack patterns evolve constantly. The built-in AI engine learns from your normal service traffic to accurately detect attacks.
    
-   When your service first goes live—or if it faces immediate DDoS or flood attacks—you may experience brief attack traffic pass-through. You can use the following mitigation settings to improve protection:
    
    -   **Anti-DDoS Origin:**
        
        -   You can define serial protection, port protection, and trigger-based protection policies in advance to improve effectiveness. For more information, see [Mitigation Settings](/help/en/anti-ddos/anti-ddos-origin/user-guide/protection-configuration/).
            
        -   You can adjust the scrubbing threshold to match your service traffic. For more information, see [Set Traffic Scrubbing Thresholds](/help/en/anti-ddos/configure-a-traffic-scrubbing-threshold).
            
    -   **Anti-DDoS Proxy:**
        
        -   You can use scenario-specific policies. For more information, see [Scenario-specific Policies](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/create-custom-mitigation-policies-for-specific-scenarios).
            
        -   You can apply custom frequency-based protection policies based on your service behavior. For more information, see [Set HTTP Flood Protection](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/configure-accurate-access-control-rules).
