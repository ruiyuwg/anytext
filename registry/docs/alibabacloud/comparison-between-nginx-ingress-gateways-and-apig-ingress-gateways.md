Nginx Ingress and APIG Ingress have different features and are suitable for different application scenarios. This topic compares them across dimensions such as product positioning, service architecture, performance, and basic routing to help you choose the right Ingress gateway.

-   Nginx Ingress: A Kubernetes Ingress gateway built on open source Nginx. It is the default ingress gateway for Kubernetes and provides basic security, routing, and observability capabilities. It is suitable for scenarios with low service traffic, low requirements for security, extensibility, and stability, and where you can manually manage the gateway.
    
-   APIG Ingress: A high-performance, extensible, and integrated Ingress gateway built on API Gateway. It uses hardware acceleration, local WAF protection, and a WebAssembly (Wasm) plugin marketplace to help you build a managed gateway middleware that is low-cost, high-performance, extensible, and highly integrated. It supports multiple service discovery patterns and various grayscale release policies. For observability, it provides a full stack of capabilities, including access logs, tracing, metrics, and alerts. It is suitable for scenarios with high service traffic and high requirements for security, extensibility, and stability.
    

**Type**

**Nginx Ingress**

**APIG Ingress**

Product positioning

-   Layer 7 processing capabilities and rich advanced routing features.
    
-   Self-owned components that can be highly customized as needed.
    

-   A three-in-one gateway that combines a traditional traffic gateway, a microservice gateway, and a security gateway. It builds a low-cost, high-performance, highly extensible, and highly integrated gateway middleware.
    
-   Supports multiple service discovery patterns and various grayscale release policies, including canary, A/B testing, blue-green, and custom traffic distribution ratios.
    
-   Focuses on HTTP and HTTPS Layer 7 application protocol processing and provides rich advanced routing features.
    
-   Designed for application layer load scenarios. It is deeply integrated with containers and directly connects to backend pod IPs when forwarding requests.
    

Service architecture

-   Nginx + Lua plugin extensions.
    
-   Manually configure the appropriate number of replicas and resource limits.
    

-   Istiod + Envoy.
    
-   Each user has a dedicated instance.
    

Performance

-   Performance depends on manual tuning.
    
-   Uses Lua scripts to support hot updates for some configurations. However, extensive use of Lua scripts has a significant performance impact.
    

-   With hardware acceleration enabled, HTTPS performance increases by about 80%. Combined with OS and internal tuning, performance is about 40% higher than self-built gateways.
    
-   Compared to open source Nginx Ingress, the Transaction Per Second (TPS) is about 90% higher when the CPU utilization is between 30% and 40%.
    

Basic routing

-   Content-based routing.
    
-   HTTP header modification, redirection, rewrite, and rate limiting.
    

-   Content-based routing.
    
-   HTTP header modification, redirection, rewrite, rate limiting, cross-domain access, timeout, and retry.
    
-   In addition to standard load balancing methods such as polling, random, least connections, and consistent hashing, it also supports prefetch. Prefetch gradually and smoothly increases the traffic forwarded to a backend machine within a specified time window.
    

O&M capabilities

-   User-side component maintenance.
    
-   Scale out or scale in by configuring Horizontal Pod Autoscaler (HPA).
    
-   Requires proactive configuration for specification tuning.
    

-   Fully managed.
    
-   Scale out or scale in by configuring HPA.
    

Cloud-native integration

A user-side component used with container services such as Alibaba Cloud ACK managed clusters, ACK Serverless clusters, or ACS clusters.

A user-side component used with Alibaba Cloud ACK managed cluster container service. It also supports seamless conversion of Nginx Ingress annotations.

Typical application scenarios

-   Scenarios that require highly customized gateways.
    
-   Canary and blue-green deployment scenarios for cloud-native applications.
    

-   North-south traffic scenarios: Backend service discovery supports multiple patterns, including traditional registries such as Nacos, Kubernetes, DNS, and fixed IPs.
    
-   East-west traffic scenarios: Supports internal communication across hybrid clouds, multiple data centers, and multiple service domains. It can be seamlessly integrated with Service Mesh systems.
    

Supported mainstream protocols

-   HTTP
    
-   HTTPS
    

-   HTTP
    
-   HTTPS
    

Protocol transformation

Not supported

-   HTTP to Dubbo
    
-   HTTPS to Dubbo
    

Ingress support

Supports Ingress

-   Supports Ingress.
    
-   Supports automatic conversion of Nginx Ingress annotations. For more information about supported annotations, see [Supported annotations for APIG Ingress](/help/en/api-gateway/cloud-native-api-gateway/user-guide/annotations-supported-by-higress-ingress-gateways).
    

Configuration changes

-   Certificate changes require a process reload, which disrupts persistent connections.
    
-   Non-certificate changes use Lua for hot updates.
    
-   Lua plugin changes require a process reload.
    

-   Hot updates for configurations.
    
-   Hot updates for certificates.
    
-   Uses a List-Watch mechanism for near real-time configuration changes.
    
-   Hot updates for Wasm plugins.
    

Service administration

-   Service discovery supports Kubernetes.
    
-   Grayscale release supports canary deployments.
    
-   High availability supports rate limiting.
    

-   Service discovery supports Kubernetes, Nacos, Eureka, DNS, and fixed IPs.
    
-   Grayscale release supports canary deployments and tag-based routing.
    
-   High availability integrates with AHAS to support rate limiting, circuit breaking, and degradation.
    
-   Service testing supports service mocking.
    

Security

-   HTTPS
    
-   Blacklists and whitelists
    

-   HTTPS (integrated with SSL)
    
-   WAF protection (integrates with [Alibaba Cloud Web Application Firewall](https://www.aliyun.com/product/waf?spm=5176.21213303.782131.1.136353c9eU7LGc&scm=20140722.S_card@@%E5%8D%A1%E7%89%87@@478._.ID_card@@%E5%8D%A1%E7%89%87@@478-RL_web%E5%BA%94%E7%94%A8%E9%98%B2%E7%81%AB%E5%A2%99-OR_ser-V_2-P0_0))
    
-   Blacklists and whitelists
    
-   Integrates with [SSL Certificate Service](https://www.aliyun.com/product/cas)
    

Authentication and authorization

-   BasicAuth
    
-   OAuth
    

-   BasicAuth
    
-   OAuth
    
-   JWT
    
-   OIDC
    
-   [IDaaS](https://www.aliyun.com/product/idaas?spm=5176.21213303.8115314850.1.39d153c9I0SvUI&scm=20140722.S_card@@%E5%8D%A1%E7%89%87@@1791._.ID_card@@%E5%8D%A1%E7%89%87@@1791-RL_idaas-OR_ser-V_2-P0_0)
    
-   Custom authentication
    

Extensibility

Lua scripts

-   Wasm plugins, which can be written in multiple languages
    
-   Lua plugins
    

Observability capabilities

-   Access Log
    
-   Prometheus
    

-   Access Log (integrates with [SLS](https://www.aliyun.com/product/sls?spm=5176.19720258.J_3207526240.58.50b52c4aLDMmMb) and [ARMS](https://www.aliyun.com/product/arms?spm=5176.55536.J_3207526240.24.69166bf6Jc1Wx2))
    
-   Metrics (integrates with [ARMS Prometheus](https://www.aliyun.com/product/arms?spm=5176.55536.J_3207526240.24.69166bf6Jc1Wx2))
    
-   Tracing (integrates with [Tracing Analysis](https://www.aliyun.com/product/xtrace?spm=a2c6h.12873639.article-detail.5.30b77ad0150MPb&tlog=out_page_fabuhui_20190605))
    
-   Alerts (integrates with [ARMS Prometheus](https://www.aliyun.com/product/arms?spm=5176.55536.J_3207526240.24.69166bf6Jc1Wx2))
    

Ecosystem integration

Nginx Service Mesh

Istio Service Mesh (de facto standard)
