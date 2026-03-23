Alibaba Cloud Service Mesh (ASM) supports unified management of all north-south and east-west traffic in clusters. By configuring traffic timeout, retry, throttling, circuit breaking, queuing, prefetch, and fallback, ASM enhances the high availability of distributed systems from multiple dimensions. This topic describes the concepts and scenarios of various high availability capabilities of service mesh.

## **Capability introduction**

In distributed systems, traffic protection and scheduling are crucial for ensuring system stability and high availability. The complexity of these systems means that any traffic fluctuation or anomaly can lead to service failure, avalanche effects, or resource exhaustion.

Traditional service development frameworks, such as Resilience4j, provide high availability features like throttling and circuit breaking. Service Mesh, however, offers these capabilities at the network infrastructure level that features non-intrusive integration, low coupling, and flexible configuration.

The following are detailed explanations of each high availability feature:

### **Throttling: protecting the system from being overloaded**

Throttling is a fundamental policy for maintaining service stability in distributed systems. It provides precise control of traffic to protect backend services from high traffic impacts, service overload, resource exhaustion, or malicious attacks, thereby reducing costs and enhancing user experience. In multitenancy scenarios, throttling can be applied to each tenant individually for fine-grained traffic management and fair usage.

ASM offers comprehensive protection capabilities for distributed systems through various throttling policies:

#### **Local throttling and global throttling**

The mesh proxy Envoy supports two types of [throttling](/help/en/asm/sidecar/current-limiting-protection/) methods: local throttling and global throttling.

##### **Scenarios**

Local and global throttling can support most common scenarios: throttling for a specific service in the cluster or on specific routes of the gateway, allowing for separate rate limiting quotas based on specific request matches.

-   [Global throttling](/help/en/asm/sidecar/use-asmglobalratelimiter-to-configure-global-throttling-for-application-service-ingress-traffic): Implemented across multiple services using a centralized throttling service and a Redis database.
    
-   [Local throttling](/help/en/asm/sidecar/configure-local-throttling-in-the-traffic-manager): A simpler configuration that does not rely on external components, but each replica has its own independent rate limiter.
    

#### **Rate limiting based on ASM traffic scheduling suite**

The [ASM traffic scheduling suite](/help/en/asm/sidecar/distributed-system-traffic-control-using-asm-traffic-scheduling-suite/) is a unified traffic scheduling architecture based on Service Mesh. It includes various traffic scheduling policies aiming to achieve unified load scheduling and management of requests in cloud-native distributed applications. The suite supports using [RateLimitingPolicy](/help/en/asm/sidecar/using-ratelimitingpolicy-to-implement-user-specific-flow-limiting/) for throttling.

##### **Scenarios**

RateLimitingPolicy supports advanced features such as grouping requests by tags and applying throttling within each group, suitable for fine-grained control scenarios in multitenancy environments.

### **Traffic concurrency control: protecting system critical resources**

Concurrency control is another high availability feature that manages the number of concurrent requests to prevent system resource exhaustion. Unlike throttling, concurrency control is ideal for services that depend on critical system resources, such as thread pools or databases, to improve resource security and utilization efficiency.

ASM offers two main concurrency control mechanisms:

#### **Concurrency control based on ASM traffic scheduling suite**

The ASM traffic scheduling suite supports [using ConcurrencyLimitingPolicy to control the number of concurrent requests](/help/en/asm/sidecar/use-concurrencylimitingpolicy-to-implement-request-concurrency-control/).

##### **Scenarios**

If the concurrency limit is relatively fixed for a system, you can configure a fixed concurrency limit for a specific service in a cluster. Requests exceeding the limit will receive a 429 response.

#### **Using ASMAdaptiveConcurrency for adaptive concurrency control**

Envoy supports an adaptive concurrency control method, which can be enabled through ASMAdaptiveConcurrency. [ASMAdaptiveConcurrency](/help/en/asm/sidecar/use-an-asmadaptiveconcurrency-to-implement-adaptive-concurrency-control) uses an algorithm to keep the concurrent limit close to the concurrent requests that can be received by the destination service, rejecting requests that exceed this limit with a 503 response and the error message "reached concurrency limit".

##### **Scenarios**

If the concurrency limit for a system changes significantly and is difficult to estimate, ASM's AdaptiveConcurrency can be used to limit concurrency. It is also recommended to enable the retry feature for the service through DestinationRule after enabling AdaptiveConcurrency to allow rejected requests to be retried successfully.

### **Traffic circuit breaking: isolating faulty nodes to prevent avalanche effect**

Circuit breaking is essential in distributed systems, allowing for quick disconnection from a service when an anomaly occurs, thus isolating the faulty service and preventing the fault from spreading.

ASM offers circuit breaking capabilities at various dimensions and levels:

#### **Connection pool-level circuit breaking**

[Connection pool circuit breaking](/help/en/asm/sidecar/configuring-the-connection-pool-to-realize-the-fuse-function) is supported by destination rules, limiting the maximum number of HTTP/1 or TCP connections to the target service host.

##### **Scenarios**

This strategy achieves circuit breaking by limiting the number of TCP connections and is used for services where HTTP status codes cannot indicate issues.

#### **Host-level circuit breaking**

[Host-level circuit breaking](/help/en/asm/sidecar/use-asm-to-build-distributed-systems-with-fault-tolerance-capabilities#section-f3j-k82-z2i) is also supported by destination rules. It monitors faults within a time window and disconnects requests if the error rate exceeds a threshold.

##### **Scenarios**

Host-level circuit breaking works independently for each upstream host, evicting hosts with continuous 5xx status codes from the load balancing pool temporarily. It is suitable for detecting continuous errors due to a single workload issue but not for specific API interfaces.

#### **Route-level circuit breaking**

ASM supports configuring circuit breaker rules for east-west traffic between services and on specific routes. For more information, see [the referenced document](/help/en/asm/sidecar/use-asmcircuitbreaker-to-configure-destinationrule-for-inter-service-call-traffic).

##### **Scenarios**

Route-level circuit breaking works at the service level, detecting continuous errors in specific service APIs due to service dependencies or logic errors.

### **Traffic fallback: handling call failure scenarios**

When a microservice fails or cannot be used, a [fallback mechanism](/help/en/asm/sidecar/use-an-asm-fallback-mechanism) calls an alternative service to process requests so as to ensure the stability and availability of the entire system.

##### **Scenarios**

Using host-level circuit breaking and traffic fallback together allows switching to a backup service during an outage, maintaining system availability during circuit breaking.

### **Traffic prefetch: smooth transition for new version deployment**

Traditional blue-green deployments or rolling updates can cause excessive pressure when a new service version takes on all traffic immediately. Service prefetch introduces traffic in stages, such as starting with 10% of requests and gradually increasing, which is more suitable for services with high cold start costs.

ASM supports two levels of traffic prefetch capabilities:

#### **Warm-up**

[Warm-up feature](/help/en/asm/sidecar/use-the-warm-up-feature) is supported by destination rules, allowing a service instance to gradually increase the number of requests within a configured time window.

##### **Scenarios**

When a requester sends requests to the target service and the target service's upstream host endpoint is within the slow start window, the load balancer will appropriately decrease the traffic allocated to that upstream host. This feature is ideal for scenarios such as service scale-out or releasing a new version, as it allows for the prefetching of newly started upstream hosts of the service.

The slow start prefetch feature is not applicable when the new online service or optional upstream host endpoints are limited.

#### **Progressive service online based on ASM traffic scheduling suite**

Synchronizing the configuration of [LoadRampingPolicy](/help/en/asm/sidecar/use-loadrampingpolicy-to-implement-progressive-service-launch/) when releasing a new service can gradually increase the traffic it receives, ensuring a smooth transition.

##### **Scenarios**

The ASM traffic scheduling suite uses a request sampler to reject a proportion of requests, ensuring that the total traffic received by the service increases slowly. This method is suitable for new service releases but not for service scale-out or new version releases.

### **Timeout and retry:** ensure service reliability

[Timeout and retry](/help/en/asm/sidecar/use-asm-to-build-distributed-systems-with-fault-tolerance-capabilities) are common fault tolerance measures in distributed systems, ensuring a certain level of availability even when services occasionally experience errors. Timeout prevents long request suspensions, while retry resolves issues such as network jitter or temporary failures.

### **Request queuing and priority-based scheduling: survive** peak hours

Request queuing is a mechanism based on throttling and concurrency limit. If the traffic rate or the number of concurrent requests exceeds the upper limit of requests that the system can process, subsequent requests are not immediately rejected. Instead, they are queued, where they await processing after earlier requests have been processed.

ASM offers three priority-based scheduling policies that focus on concurrency, traffic rate, and latency by using its traffic scheduling suite. It also enables priority-based scheduling of the queued requests. This ensures that high-priority requests are addressed first to maintain the availability and stability of critical system features or to enhance the user experience for key tenants.

The following provides the supported policies for request queuing and priority-based scheduling:

#### **Priority-based request scheduling under controllable concurrency**

You can configure the [ConcurrencySchedulingPolicy](/help/en/asm/sidecar/use-concurrencyscheduling-policy-to-implement-request-priority-scheduling-under-controlled-concurrency/) policy to determine whether the system is overloaded based on a specified concurrency limit. If request concurrency surpasses this limit, additional requests are queued and scheduled according to their priority.

##### **Scenarios**

This policy is ideal for applications that have concurrency limit and services that experience significant traffic fluctuations, as it uses the concurrency limit to identify if the system is overloaded.

#### **Priority-based request scheduling under controllable rate**

You can configure the [QuotaSchedulingPolicy](/help/en/asm/sidecar/use-quotaschedulingpolicy-to-implement-request-call-quota-management/) policy to determine if the system is overloaded based on a specified traffic rate limit. If request concurrency surpasses this limit, additional requests are queued and scheduled according to their priority.

##### **Scenarios**

This policy is ideal for applications that have traffic rate limit and services that experience significant traffic fluctuations, as it uses the traffic rate limit to identify if the system is overloaded.

#### Priority-based request scheduling based on the average latency

You can configure the [AverageLatencySchedulingPolicy](/help/en/asm/sidecar/use-averagelatencyscheduling-policy-to-implement-request-priority-scheduling/) policy to compare the real-time latency of requests with the historical average to identify traffic overloads. The significant deviation indicates that the system is overloaded, and additional requests are then queued and scheduled according to their priority.

##### **Scenarios**

This adaptive method is suitable for queuing and prioritizing requests when it's challenging to ascertain the maximum acceptable rate or concurrency for a service.
