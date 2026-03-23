You can configure throttling to implement precise control over traffic to cope with issues such as traffic bursts, service overload, resource exhaustion, and malicious attacks. This protects the stability of backend services, reduces costs, and improves user experience. This topic describes the concepts of throttling, throttling modes, and how local throttling and global throttling work.

## **Concepts of throttling**

Throttling is a mechanism that limits the number of requests sent to a service. It specifies the maximum number of requests that clients can send to a service in a given period of time, such as 300 requests per minute or 10 requests per second. The aim of throttling is to prevent a service from being overloaded because it receives excessive requests from a specific client IP address or from global clients.

For example, if you limit the number of requests sent to a service to 300 per minute, the 301st request is denied. At the same time, the HTTP 429 status code that indicates excessive requests is returned.

## **Throttling modes**

Envoy proxies implement throttling in the following modes: local throttling and global throttling. Local throttling is used to limit the request rate of each service instance. Global throttling uses the global gRPC service to provide throttling for the entire Service Mesh (ASM) instance. Local throttling can be used together with global throttling to provide different levels of throttling.

**Mode**

**Description**

**References**

Local throttling

-   Local throttling is configured on a per Envoy process basis. An Envoy process is a pod in which an Envoy proxy is injected. The configuration of local throttling is simpler than that of global throttling and it does not require an additional component. If you configure both local throttling and global throttling for an ASM instance, the local rate limit is applied first. If the local rate limit is not reached, the global rate limit is applied. Examples:
    
    -   Assume that local throttling limits the number of requests from a specific client to 50 per minute whereas the global throttling limit is 60 requests per minute. When the number of requests from the client exceeds 50, the excessive requests are denied even though the number of requests has not reached the global throttling limit.
        
    -   Assume that local throttling limits the number of requests from a specific client to 50 per minute, and the global throttling limit is 40 requests per minute. When the number of requests from the client exceeds 40, the excessive requests are denied due to global throttling, even though the number of requests has not reached the local throttling limit.
        
-   If the pod on which the local throttling limit is configured has multiple replicas, each of those replicas has its own limit. That is, requests may be limited on one replica but not limited on another.
    

[Configure local throttling in Traffic Management Center](/help/en/asm/sidecar/configure-local-throttling-in-the-traffic-manager)

Global or distributed throttling

-   Global throttling limits the number of requests sent to multiple services. In this mode, all the services in a cluster share the throttling configuration. Generally, global throttling requires an external component, such as a Redis database.
    
-   Global throttling is typically used in scenarios where many clients send requests to a smaller number of services. In this case, the requests may interrupt the services. Global throttling can help prevent cascading failures. For example, you can configure global throttling on an ingress gateway to limit the total number of requests sent to an ASM instance. Then, you can configure local throttling to limit the number of requests sent to specific services in the ASM instance.
    

[Use ASMGlobalRateLimiter to configure global throttling for ingress gateways and inbound traffic directed to services](/help/en/asm/sidecar/use-asmglobalratelimiter-to-configure-global-throttling-for-application-service-ingress-traffic)

## **How local throttling works**

An Envoy proxy uses the token bucket algorithm to implement local throttling. The token bucket algorithm is a method that limits the number of requests sent to services based on a certain number of tokens in a bucket. Tokens fill in the bucket at a constant rate. When a request is sent to a service, a token is removed from the bucket. When the bucket is empty, requests are denied. Generally, you need to specify the following parameters:

-   The interval at which the bucket is filled
    
-   The number of tokens added to the bucket at each interval
    

By default, an Envoy proxy returns the HTTP 429 status code when a request is denied and the x-envoy-ratelimited header is set. You can customize the HTTP status code and response header.

Take note of the following concepts when you use the throttling feature:

-   http\_filter\_enabled: indicates the percentage of requests for which the local rate limit is checked but not enforced.
    
-   http\_filter\_enforcing: indicates the percentage of requests on which the local rate limit is applied or enforced.
    

Set the values to percentages. For example, you can set http\_filter\_enabled to 10% of requests and http\_filter\_enforcing to 5% of requests. This way, you can test the effect of throttling before it is applied to all the requests.

## **How global throttling works**

Global throttling of Envoy is a mechanism used to control the request rates in an ASM instance. It is implemented based on the rate limit service of Envoy. The rate limit service centrally processes traffic of the entire ASM instance and limits the rates of requests based on predefined rules and quotas.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6528586071/fa3b3706c98xs.svg)

The configuration of global throttling involves two parts: the Envoy rate\_limits filter and the configuration of the rate limit service.

-   The rate\_limits filter contains a list of `actions`. An Envoy proxy attempts to match each request against each action in the rate\_limits filter. A descriptor is generated for each action. A descriptor consists of a set of descriptor entries that correspond to an action. Each descriptor entry is a key-value pair, such as `"descriptor-key-1": "descriptor-value-1"` and `"descriptor-key-2": "descriptor-value-2"`. For more information, see [config-http-filters-rate-limit](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/rate_limit_filter#config-http-filters-rate-limit).
    
-   The configuration of the rate limit service is matched against the descriptor entry generated for each request. The configuration of the rate limit service specifies the rate limit for a specific set of descriptor entries. The rate limit service interacts with the Redis cache to determine whether to limit the rates of requests and sends the throttling decision to the Envoy proxy.
    

Global throttling can be implemented by combining the rate\_limits filter and configuration of the rate limit service. The rate\_limits filter generates a descriptor based on the configured action and sends the descriptor to the rate limit service. The rate limit service determines a specific limit based on the information in the descriptor and returns a throttling response. This mechanism allows you to fully control the rates of requests and protect backend services against request bursts.
