Server Load Balancer (SLB) is a service that distributes network traffic across groups of backend servers to increase the throughput of your applications. You can use SLB to prevent single points of failure (SPOFs) and improve the availability of applications. The SLB family includes the following load balancing services: Application Load Balancer (ALB), Network Load Balancer (NLB), and Classic Load Balancer (CLB). Choose a service based on your business requirements.

## Product introduction

SLB is a fully managed load balancing service provided by Alibaba Cloud. It can be used out-of-the-box and provides elastic, stable, reliable, and high-throughput load balancing services. You can scale SLB resources based on traffic volumes and pay only for what you use. SLB is designed to balance the heavy loads of hyper-scale Internet applications. For example, you can use SLB to withstand traffic spikes during Double 11 and red envelope snatching or improve the availability of Internet of Things (IoT) applications that need to maintain a large number of concurrent connections. Compared with self-managed hardware load balancers, SLB can process a large number of user requests in scenarios such as Tmall Double 11 without the need for large upfront investments. Compared with self-managed open-source software load balancers, SLB is maintained 24/7 by an experienced and professional technical team. This ensures service stability and improves O&M efficiency.

## SLB instance types

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6671592671/CAEQORiBgIDwz6C1rBkiIGIyOWFkYTc3ZGQzZjRmODI4MzcxMGRkYWIyZDAxYzU24735862_20241029141038.886.svg)

Alibaba Cloud provides the following types of SLB instances:

-   ALB: provides ultra-high Layer 7 processing capabilities, such as SSL offloading for HTTPS traffic. Each ALB instance supports up to one million queries per second (QPS). An ALB instance serves as a cloud-native gateway on Alibaba Cloud and provides advanced content-based routing features. ALB instances can forward, redirect, and rewrite requests based on user-defined HTTP headers, cookies, and query strings. For more information, see [What is ALB?](/help/en/slb/application-load-balancer/product-overview/what-is-alb/#concept-2011635)
    
-   NLB: designed to connect everything to the Internet. NLB is a Layer 4 load balancing service that offers ultra-high performance and can scale in response to network loads. An NLB instance supports up to 100 million concurrent connections, which is ideal for services that require high concurrency. NLB provides multiple advanced features to cater to services that need to process large numbers of client requests, highly concurrent message services, and audio and video services. For example, NLB can perform SSL offloading for TCP traffic, limit the number of new connections, and listen on multiple ports. In addition, NLB can offload Message Queuing Telemetry Transport Secure (MQTTS) encryption from servers that host your IoT services. NLB can also withstand traffic spikes by balancing the loads of IoT services. For more information, see [What is NLB?](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/#concept-2223473)
    
-   CLB: supports TCP, UDP, HTTP, and HTTPS. CLB provides advanced Layer 4 processing capabilities and basic Layer 7 processing capabilities. For more information, see [What is CLB?](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/#concept-whs-lp4-tdb)
    

### Functions and features

**Item**

ALB

NLB

CLB

Service positioning

-   Ultra-high Layer 7 processing capabilities and advanced routing features
    
-   Intended for protocols such as HTTP, HTTPS, and Quick UDP Internet Connections (QUIC) at the application layer
    
-   Application-oriented
    

-   Ultra-high Layer 4 processing capabilities and large-scale SSL offloading capabilities
    
-   Intended for TCP, UDP, and SSL over TCP
    
-   Network-oriented
    

-   Robust Layer 4 and Layer 7 processing capabilities
    
-   Supports TCP, UDP, HTTP, and HTTPS
    

Architecture and performance

-   Developed on top of the network function virtualization (NFV) platform and supports auto scaling
    
-   Up to one million QPS per instance
    

-   Developed on top of the NFV platform instead of physical machines and supports fast and automatic scaling
    
-   Up to 100 million concurrent connections per instance
    

-   Developed on top of an architecture of physical machines
    
-   Up to one million concurrent connections and 50,000 QPS per instance
    

Forwarding capabilities

-   Provides multiple Layer 7 features and content-based routing
    
-   Supports HTTP rewrites, redirects, overwrites, and throttling
    

-   Provides advanced Layer 4 features and SSL offloading for TCP traffic
    
-   Supports features such as throttling in case of traffic spikes, connection draining, and listening by port range
    

-   Provides basic Layer 4 and Layer 7 load balancing capabilities
    
-   Supports only domain name-based and URL-based forwarding
    

Backend server type

-   Elastic Compute Service (ECS) instances
    
-   Elastic network interfaces (ENIs)
    
-   Elastic container instances
    
-   IP addresses
    
-   Function Compute
    

-   ECS instances
    
-   ENIs
    
-   Elastic container instances
    
-   IP addresses
    

-   ECS instances
    
-   ENIs
    
-   Elastic container instances
    

O&M capabilities

-   Auto scaling
    
-   Automatically scales based on your traffic volumes without the need for manual configurations
    

-   Auto scaling
    
-   Automatically scales based on your traffic volumes without the need for manual configurations
    

-   Requires specification management for pay-by-specification instances
    
-   Requires an estimate of traffic spikes
    

Cloud-native support

-   Serves as a cloud-native gateway
    
-   Supports traffic splitting, mirroring, canary releases, and blue-green deployments
    

Supports integration with Container Service for Kubernetes (ACK) and ACK Serverless (1.24 and later versions)

Must be used in combination with container services such as Container Service for Kubernetes (ACK) and Serverless Kubernetes (ASK)

Common scenarios

-   Provides high-performance automatic scaling for Internet applications at Layer 7
    
-   Maintains low network latency for audio and video applications in high traffic scenarios
    
-   Supports canary releases and blue-green deployments for cloud-native applications
    

-   Withstands Layer 4 traffic spikes in high concurrency scenarios
    
-   Serves as an ingress for IoT services such as Internet of Vehicles (IoV)
    
-   Supports cross-zone disaster recovery and serves as an ingress and egress for both on-premises and cloud services
    

-   Ensures high reliability when CLB distributes requests to websites and systems at Layer 4
    
-   Supports high concurrency and ensures high performance in traffic distribution scenarios
    
-   Supports zone-disaster recovery and cross-region disaster recovery
    

### Billing

This section describes the billing methods and billable items of ALB, NLB, and CLB. We recommend that you view and learn about the billing methods and billable items of each service before you use the services.

### ALB

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6671592671/CAEQORiBgMCGjJf.qxkiIDZkOWM2NWZiZGU1MDRkYmZiNjY4NWY2YWFhYjU5ZWFj3926471_20230822152343.335.svg)

-   For more information about the resource plans of ALB, see [Introduction to ALB resource plans](/help/en/slb/application-load-balancer/product-overview/introduction-to-alb-resource-plans#concept-2113835).
    
-   For more information about the billing rules of pay-as-you-go ALB instances, see [Billing rules](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules#concept-2012118).
    

### NLB

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6671592671/CAEQORiBgMCGkJX.qxkiIGNjNTMyZWE4YjI5MTQxMGI4M2Y0YThkZWJjZjE0ODE13926471_20230822152343.335.svg)

For more information about the billing rules of pay-as-you-go NLB instances, see [NLB billing rules](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items#concept-2226387).

### CLB

The following figure shows the billable items of CLB. For more information about the billing rules of pay-as-you-go CLB instances, see [Pay-as-you-go](/help/en/slb/classic-load-balancer/product-overview/pay-as-you-go).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6671592671/CAEQTxiBgICOjOTI0xkiIDU1Nzg1OTllZjlkZTQ3N2U4MjVhZTViNDM2NDQzNWFh3926471_20230822152343.335.svg)

The following table compares the billing rules and usage calculations of Load Balancer Capacity Units (LCUs) of ALB, NLB, and CLB.

**Service**

**LCU unit price**

**(USD/LCU/hour)**

**LCU definition**

**References**

ALB

0.007

An ALB **LCU provides the following resources:**

-   25 new connections per second
    
-   3,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    
-   Processing of 1,000 rules per hour
    
    **Note**
    
    Forwarding rules, lines of code in AScript, and additional certificates have the same quota, which is 25.
    

[LCU fees](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules#section-e63-vy8-0h6)

NLB

0.005

**For TCP data transfer, an** NLB **LCU provides the following resources:**

-   800 new connections per second
    
-   100,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    

**For UDP data transfer, an** NLB **LCU provides the following resources:**

-   400 new connections per second
    
-   50,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    

**For SSL over TCP data transfer, an** NLB **LCU provides the following resources:**

-   50 new connections per second
    
-   3,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    

[NLB billing rules](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items#section-vwu-of3-7db)

CLB

0.007

**For TCP data transfer, a** CLB **LCU provides the following resources:**

-   800 new connections per second
    
-   100,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    

**For UDP data transfer, a** CLB **LCU provides the following resources:**

-   400 new connections per second
    
-   50,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    

**For HTTP or HTTPS data transfer, a** CLB **LCU provides the following resources:**

-   25 new connections per second
    
-   3,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    
-   Processing of 1,000 rules per hour
    
    **Note**
    
    The number of rule evaluations is affected by the number forwarding rules. The free quota on forwarding rules is 25.
    

[Specification fee and LCU fee](/help/en/slb/pay-as-you-go-2#section-i1e-kna-oa3)

## Benefits

**Multiple protocols**

Supports multiple protocols for a wide range of business scenarios.

-   Basic protocols: SLB supports Layer 4 load balancing over TCP or UDP and Layer 7 load balancing over HTTP or HTTPS.
    
-   Advanced protocols:
    
    -   ALB supports the QUIC protocol. QUIC is an advanced protocol that ensures faster and safer transmission for audio, video, and mobile applications. ALB also supports Google Remote Procedure Call (gRPC) to implement more efficient service calls between microservices.
        
    -   NLB supports SSL over TCP and can manage SSL certificates and offload SSL processing from backend servers. This improves the performance of backend servers.
        

**Multi-level disaster recovery**

Provides disaster recovery at multiple levels to ensure high availability.

-   Monitors the health status of backend servers on a regular basis. SLB does not distribute network traffic to unhealthy backend servers. This ensures the availability of your service.
    
-   Supports multi-zone deployment in specific regions to provide zone-disaster recovery.
    
-   Supports session synchronization. Backend servers are grouped into a cluster and sessions to these backend servers are synchronized to eliminate SPOFs. In addition, hot upgrades are also supported to prevent service disruptions.
    

**Higher security and reliability**

Provides built-in protection capabilities to reduce the costs of data security management.

-   Network layer security: Layer 4 SLB protects your service from DDoS, SYN flood, UDP flood, ACK flood, ICMP flood, and DNS flood attacks.
    
-   Application layer security: Layer 7 SLB protects your service from attacks at Layer 4 and Layer 7, and can be integrated with Web Application Firewall (WAF) to protect your service at the application layer.
    
-   Certificate management: SLB provides certificate management for HTTPS, QUIC, and SSL over TCP to ensure the stability and security of data transmission.
    

**High performance**

Ultra-high load balancing capabilities and multiple routing features ensure the performance of your services.

-   High performance: Alibaba Cloud offers a wide range of specifications for high-performance CLB instances to cater to various business requirements.
    
-   High elasticity: An ALB instance supports up to one million QPS. An NLB instance supports up to 100 million concurrent connections and 100 Gbit/s throughput. Both types of instances can process large numbers of client requests and scale along with your business.
    

**Flexible scheduling**

Supports multiple scheduling algorithms and forwarding methods to improve the flexibility of application deployment.

-   Supports multiple scheduling algorithms, such as weighted round-robin, weighted least connections, and consistent hashing based on source IP addresses, the combination of four elements, and QUIC IDs. You can select the most suitable scheduling algorithms based on your business requirements.
    
-   Supports inbound and outbound forwarding rules. SLB distributes network traffic across backend servers based on forwarding rules. This allows SLB to route network traffic to applications in a more flexible manner.
    

**Flexible management and billing**

Allows you to use multiple methods to manage your SLB service. You can specify the instance type and billing method based on your business requirements.

-   Flexible management: You can create, configure, and manage SLB instances in the SLB console, by calling API operations in OpenAPI Explorer, or by using Alibaba Cloud SDKs.
    
-   Flexible billing: SLB supports the subscription and pay-as-you-go billing methods, and the pay-by-data-transfer and pay-by-bandwidth metering methods.
    

## **References**

-   For more information about ALB, NLB, and CLB, see the following topics:
    
    -   [What is ALB?](/help/en/slb/application-load-balancer/product-overview/what-is-alb/)
        
    -   [What is NLB?](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/)
        
    -   [What is CLB?](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/)
        
-   For more information about how to get started with SLB, see [Getting Started](/help/en/slb/getting-started).
    
-   For more information about the pricing and billing of SLB, see [SLB billing](/help/en/slb/product-overview/billing-for-load-balancing-products).
