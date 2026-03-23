Cloud-native Gateway is a fully managed API gateway provided by Microservices Engine (MSE). It unifies traffic gateways (Kubernetes Ingress, NGINX) and microservices gateways (Spring Cloud Gateway, Zuul) into a single gateway, reducing resource costs by 50% and simplifying operations.

Built on the Envoy proxy and compatible with Kubernetes Ingress standards, Cloud-native Gateway handles traffic routing, authentication, observability, and high availability for microservices architectures -- without managing separate gateway layers.

## How it works

Cloud-native Gateway sits between external clients and your backend services as the single entry point for all inbound traffic. It replaces the need to run and maintain separate traffic gateways and microservices gateways side by side.

Traffic flows through Cloud-native Gateway as follows:

1.  A client request arrives at the gateway.
    
2.  The gateway evaluates routing rules, applies authentication policies, and enforces traffic controls such as throttling and circuit breaking.
    
3.  The gateway routes the request to the appropriate backend service, discovered automatically through a connected service registry.
    
4.  Response metrics, logs, and traces are emitted to integrated observability systems.
    

Cloud-native Gateway discovers backend services from multiple sources:

-   Container Service for Kubernetes (ACK) clusters
    
-   Nacos instances
    
-   ZooKeeper instances
    
-   Other Kubernetes clusters
    

## Use cases

-   **Consolidate gateway layers**: Replace separate Kubernetes Ingress gateways and microservices gateways with a single managed gateway to reduce infrastructure costs and operational overhead.
    
-   **Centralize API access control**: Manage authentication, authorization, and rate limiting for all external-facing APIs from one place instead of implementing controls in each service.
    
-   **Roll out changes safely**: Use canary releases and traffic tagging to route a percentage of traffic to new versions, validate behavior, and gradually shift all traffic once stable.
    
-   **Protect services from traffic spikes**: Apply throttling, circuit breaking, and degradation policies at the gateway level to keep backend services stable during unexpected load.
    
-   **Secure service endpoints**: Terminate TLS, enforce IP address whitelists and blacklists, enable anti-DDoS protection, and integrate with Web Application Firewall (WAF) to block malicious traffic before it reaches your applications.
    
-   **Deploy across regions**: Schedule traffic across regions for global service deployment and management.
    

## Features

### Traffic governance

Route and control traffic across your microservices with:

-   **Service discovery** from multiple registries (ACK, Nacos, ZooKeeper)
    
-   **Service routing** with flexible rule-based traffic distribution
    
-   **Traffic tagging** to label and direct requests based on headers, parameters, or other attributes
    
-   **Throttling and circuit breaking** to protect services from overload
    
-   **Degradation** to gracefully handle failures without cascading outages
    
-   **Timeout configuration** for fine-grained control over request deadlines
    
-   **Dubbo 3.0** protocol support with graceful shutdown
    

### Security

Authenticate and protect traffic at the gateway layer:

-   **JSON Web Token (JWT) authentication**
    
-   **OpenID Connect (OIDC) authentication** based on OAuth 2.0 for single sign-on workflows
    
-   **Alibaba Cloud IDaaS authentication** for enterprise identity management
    
-   **HTTPS certificates** with integrated certificate management
    
-   **IP address whitelists and blacklists** to restrict access by source IP
    
-   **Anti-DDoS protection** and traffic scrubbing
    
-   **WAF integration** for application-layer threat protection
    

### Observability

Monitor gateway and service health with built-in dashboards and diagnostics:

-   **Global dashboards** for real-time traffic and error rate visibility
    
-   **Gateway monitoring** with performance and risk metrics
    
-   **Log retrieval and log shipping** to external log systems
    
-   **Top N service lists** to identify high-traffic or error-prone services
    
-   **Tracing analysis** for end-to-end request tracing across services
    
-   **Alert management** to notify on-call teams of anomalies
    

### High availability

Cloud-native Gateway is battle-tested at Alibaba Group scale, handling hundreds of thousands of requests per second during Double 11 of 2020. It powers production services including Alipay, DingTalk, Taobao, Tmall, Youku, Fliggy, and Koubei.

Built-in reliability features include:

-   **Overload protection** to reject excess traffic before it degrades service quality
    
-   **Graceful start and shutdown** to avoid dropping in-flight requests during deployments
    
-   **Multi-zone disaster recovery** for resilience against zone-level failures
    
-   **Auto scaling** to match gateway capacity to real-time traffic
    
-   **Self-healing** to automatically recover from component failures
    

The guaranteed Service Level Agreement (SLA) is up to 99.95%.

## Limits

### TLS hardware acceleration

Due to underlying hardware constraints, Transport Layer Security (TLS) hardware acceleration is available only in the following regions:

-   China (Hangzhou)
    
-   China (Shanghai)
    
-   China (Beijing)
    
-   China (Shenzhen)
    
-   Hong Kong (China)
    
-   Singapore
    
-   Germany (Frankfurt)
    

### WAF 3.0 integration

Cloud-native Gateway supports WAF 2.0 through traditional CNAME-based connection. For native WAF integration, WAF 3.0 is required and available only in the following regions:

-   China (Hangzhou)
    
-   China (Shanghai)
    
-   China (Beijing)
    
-   China (Zhangjiakou)
    
-   China (Ulanqab)
    
-   China (Shenzhen)
    
-   Hong Kong (China)
    
-   Japan (Tokyo)
    
-   Singapore
    
-   Malaysia (Kuala Lumpur)
    
-   Germany (Frankfurt)
    
-   US (Silicon Valley)
    

### Plug-in Marketplace

Plug-in Marketplace is available in all regions where MSE is activated. For details, see [Supported regions](/help/en/mse/product-overview/supported-regions).

The maximum size for a custom plug-in upload is 50 MB.

## Get started

To set up your first Cloud-native Gateway and route traffic to services in an ACK cluster, see [Access applications in an ACK cluster by using a cloud-native gateway](/help/en/mse/getting-started/access-applications-in-container-service-ack-through-cloud-native-gateway).

## Related topics

-   [Supported regions](/help/en/mse/product-overview/supported-regions)
    
-   [Billing](/help/en/mse/product-overview/cloud-native-gateways/)
