If requests to your Application Load Balancer (ALB) instance time out or cause network issues such as throttling, review the ALB instance’s monitoring metrics to troubleshoot errors and assess its load and performance. This topic describes the monitoring metrics available for ALB.

## Background information

When you call the CloudMonitor API, specify the ALB **Namespace**, **Period**, **MetricName**, and **Dimensions**.

-   The **Namespace** is `acs_alb`.
    
-   The default value of **Period** is 60 seconds. You can specify any multiple of 60.
    
-   The **Dimensions** parameter is a JSON string. For example, `[{"loadBalancerId":"alb-t93aj3yndojot5****"}]`. The \`loadBalancerId\` within the **Dimensions** parameter refers to the ID of the ALB instance.
    

## ALB monitoring metrics

### **Metrics that you can view in the console or using an API or an SDK**

-   In the **MetricName** column of the following tables, metrics without the `DualStack_` prefix do not distinguish between IPv4 and IPv6. These metrics represent the total values for an ALB instance.
    
    -   For an IPv4 instance, a metric without the `DualStack_` prefix represents the IPv4 value for the ALB instance.
        
    -   For a dual-stack instance, a metric without the `DualStack_` prefix represents the sum of the IPv4 and IPv6 values for the ALB instance.
        
-   In the **MetricName** column of the following tables, metrics with the `DualStack_` prefix display separate values for IPv4 and IPv6.
    
    -   For an IPv4 instance, the IPv6 value of a metric with the `DualStack_` prefix is 0.0. The IPv4 value is the actual metric value for the ALB instance.
        
    -   For a dual-stack instance, a metric with the `DualStack_` prefix displays separate IPv4 and IPv6 values for the ALB instance.
        

In the following tables, a hyphen (-) indicates that the metric does not have a `DualStack_` prefix and does not provide separate IPv4 and IPv6 values.

#### **Instance metrics**

#### **Instance - Connection Metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Active connections of an instance**

The number of TCP connections in the ESTABLISHED state on the ALB instance. Unit: Count

LoadBalancerActiveConnection

userId, loadBalancerId

Value

DualStack\_LoadBalancerActiveConnection

ipv4, ipv6

**Inactive connections of an instance**

The number of TCP connections that are not in the ESTABLISHED state and all UDP connections on the ALB instance. Unit: Count

LoadBalancerInactiveConnection

userId, loadBalancerId

Value

DualStack\_LoadBalancerInactiveConnection

ipv4, ipv6

**Maximum concurrent connections of an instance**

The total number of TCP and UDP connections that are processed by the ALB instance. Unit: Count

LoadBalancerMaxConnection

userId, loadBalancerId

Value

DualStack\_LoadBalancerMaxConnection

ipv4, ipv6

**Backend TLS handshake failures of an instance per second**

The number of times per second that the ALB instance fails to establish TLS connections with backend servers. Unit: Count/s

LoadBalancerUpstreamTLSNegotiationError

userId, loadBalancerId

Value

DualStack\_LoadBalancerUpstreamTLSNegotiationError

ipv4, ipv6

**New connections of an instance per second**

The number of new connections that are established between the ALB instance and backend servers per second. Unit: Count/s

LoadBalancerNewConnection

userId, loadBalancerId

Value

DualStack\_LoadBalancerNewConnection

ipv4, ipv6

**Dropped connections of an instance per second**

The number of connection requests that are dropped by the ALB instance per second. Unit: Count/s

LoadBalancerRejectedConnection

userId, loadBalancerId

Value

DualStack\_LoadBalancerRejectedConnection

ipv4, ipv6

**Backend connection failures of an instance per second**

The number of times per second that the ALB instance fails to connect to backend servers. Unit: Count/s

LoadBalancerUpstreamConnectionError

userId, loadBalancerId

Value

DualStack\_LoadBalancerUpstreamConnectionError

ipv4, ipv6

**Client TLS handshake failures of an instance per second**

The number of times per second that the ALB instance fails to establish TLS connections with clients. Unit: Count/s

LoadBalancerClientTLSNegotiationError

userId, loadBalancerId

Value

DualStack\_LoadBalancerClientTLSNegotiationError

ipv4, ipv6

#### **Instance request metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Custom responses from an instance per second**

The number of custom responses that are returned by the ALB instance to clients per second. Unit: Count/s

LoadBalancerHTTPFixedResponse

userId, loadBalancerId

Value

DualStack\_LoadBalancerHTTPFixedResponse

ipv4, ipv6

**Redirects from an instance per second**

The number of successful redirects that are performed by the ALB instance per second. Unit: Count/s

LoadBalancerHTTPRedirect

userId, loadBalancerId

Value

DualStack\_LoadBalancerHTTPRedirect

ipv4, ipv6

**Requests to an instance per second**

The total number of requests that are processed by the ALB instance per second. Unit: Count/s

LoadBalancerQPS

userId, loadBalancerId

Value

DualStack\_LoadBalancerQPS

ipv4, ipv6

**Non-sticky requests to an instance per second**

The number of new connection requests per second established by the ALB instance for requests that are not routed using sticky sessions. Unit: Count/s

LoadBalancerNonStickyRequest

userId, loadBalancerId

Value

DualStack\_LoadBalancerNonStickyRequest

ipv4, ipv6

**Backend response time of an instance**

The period from when the ALB instance establishes a connection with a backend server to when the connection is closed after all data is received. Unit: ms

LoadBalancerUpstreamResponseTime

userId, loadBalancerId

Value

DualStack\_LoadBalancerUpstreamResponseTime

ipv4, ipv6

**Request latency of an instance**

The interval between the time when the ALB instance receives the first request message and the time when a response is returned. Unit: ms

LoadBalancerRequestTime

userId, loadBalancerId

Value

DualStack\_LoadBalancerRequestTime

ipv4, ipv6

#### **Instance bandwidth metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Outbound bandwidth of an instance**

The bandwidth that is consumed when the ALB instance accesses external resources. Unit: bit/s

LoadBalancerOutBits

userId, loadBalancerId

Value

DualStack\_LoadBalancerOutBits

ipv4, ipv6

**Inbound bandwidth of an instance**

The bandwidth that is consumed when external resources access the ALB instance. Unit: bit/s

LoadBalancerInBits

userId, loadBalancerId

Value

DualStack\_LoadBalancerInBits

ipv4, ipv6

#### **Instance status code metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**2XX status codes from an instance per second**

The number of 2XX status codes that are returned by the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCode2XX

userId, loadBalancerId

Value

DualStack\_LoadBalancerHTTPCode2XX

ipv4, ipv6

**3XX status codes from an instance per second**

The number of 3XX status codes that are returned by the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCode3XX

userId, loadBalancerId

Value

DualStack\_LoadBalancerHTTPCode3XX

ipv4, ipv6

**4XX status codes from an instance per second**

The number of 4XX status codes that are returned by the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCode4XX

userId, loadBalancerId

Value

DualStack\_LoadBalancerHTTPCode4XX

ipv4, ipv6

**500 requests per second for SLB instances**

The number of 500 status codes that are returned by the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCode500

userId, loadBalancerId

Value

DualStack\_LoadBalancerHTTPCode500

ipv4, ipv6

**SLB instance 502 error count per second**

The number of 502 status codes that are returned by the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCode502

userId, loadBalancerId

Value

DualStack\_LoadBalancerHTTPCode502

ipv4, ipv6

**503 status codes from an instance per second**

The number of 503 status codes that are returned by the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCode503

userId, loadBalancerId

Value

DualStack\_LoadBalancerHTTPCode503

ipv4, ipv6

**SLB instance throughput: 504 counts per second**

The number of 504 status codes that are returned by the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCode504

userId, loadBalancerId

Value

DualStack\_LoadBalancerHTTPCode504

ipv4, ipv6

**5XX status codes from an instance per second**

The number of 5XX status codes that are returned by the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCode5XX

userId, loadBalancerId

Value

DualStack\_LoadBalancerHTTPCode5XX

ipv4, ipv6

#### **Instance backend status code metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Backend 2XX status codes for an instance per second**

The number of 2XX status codes that are returned by backend servers to the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCodeUpstream2XX

userId, loadBalancerId

Value

**Backend 3XX status codes for an instance per second**

The number of 3XX status codes that are returned by backend servers to the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCodeUpstream3XX

userId, loadBalancerId

Value

**Backend 4XX status codes for an instance per second**

The number of 4XX status codes that are returned by backend servers to the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCodeUpstream4XX

userId, loadBalancerId

Value

**Backend 5XX status codes for an instance per second**

The number of 5XX status codes that are returned by backend servers to the ALB instance per second. Unit: Count/s

LoadBalancerHTTPCodeUpstream5XX

userId, loadBalancerId

Value

#### **Instance health check metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Healthy servers of an instance**

The number of backend servers that are in the Normal state based on the health check results of the ALB instance. Unit: Count

LoadBalancerHealthyHostCount

userId, loadBalancerId

Value

**Unhealthy servers of an instance**

The number of backend servers that are in the abnormal state based on the health check results of the ALB instance. Unit: Count

LoadBalancerUnHealthyHostCount

userId, loadBalancerId

Value

#### **Instance LCU usage metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**LCU usage**

The number of Load Balancer Capacity Units (LCUs) that are consumed by the ALB instance.

If an LCU reservation is in effect and the usage is lower than the reserved LCUs, the value of ConsumedLCUs is 0. If the usage exceeds the reserved LCUs, the value of ConsumedLCUs is greater than 0. Unit: Count

ConsumedLCUs

userId, loadBalancerId

Value

**Peak LCUs**

The maximum number of LCUs that are consumed by the ALB instance at a specific point in time. This metric is available only when you use an LCU reservation. Unit: Count

PeakLCUs

userId, loadBalancerId

Value

**Reserved LCUs**

The number of LCUs that are reserved for the ALB instance. Unit: Count

ReservedLCUs

userId, loadBalancerId

Value

> Instance LCU usage metrics are displayed only after you request [an LCU reservation](/help/en/slb/application-load-balancer/user-guide/capacity-reservation).

#### **Listener metrics**

##### **Connection metrics (listener as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Active connections of a listener**

The number of TCP connections in the ESTABLISHED state on the listener port. Unit: Count

ListenerActiveConnection

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerActiveConnection

ipv4, ipv6

**Inactive connections of a listener**

The number of TCP connections that are not in the ESTABLISHED state and all UDP connections on the listener port. Unit: Count

ListenerInactiveConnection

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerInactiveConnection

ipv4, ipv6

**Maximum concurrent connections of a listener**

The total number of TCP and UDP connections that are processed by the listener. Unit: Count

ListenerMaxConnection

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerMaxConnection

ipv4, ipv6

**Client TLS handshake failures of a listener per second**

The number of times per second that the listener fails to establish TLS connections with clients. Unit: Count/s

ListenerClientTLSNegotiationError

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerClientTLSNegotiationError

ipv4, ipv6

**New connections of a listener per second**

The number of new connections that the listener establishes with backend servers per second. Unit: Count/s

ListenerNewConnection

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerNewConnection

ipv4, ipv6

**Dropped connections of a listener per second**

The number of connection requests that are dropped by the listener per second. Unit: Count/s

ListenerRejectedConnection

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerRejectedConnection

ipv4, ipv6

**Backend connection failures of a listener per second**

The number of times per second that the listener fails to connect to backend servers. Unit: Count/s

ListenerUpstreamConnectionError

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerUpstreamConnectionError

ipv4, ipv6

**Backend TLS handshake failures of a listener per second**

The number of times per second that the listener fails to establish TLS connections with backend servers. Unit: Count/s

ListenerUpstreamTLSNegotiationError

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerUpstreamTLSNegotiationError

ipv4, ipv6

##### **Request metrics (listener as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Custom Responses per Second**

The number of custom responses that are returned by the listener to clients per second. Unit: Count/s

ListenerHTTPFixedResponse

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerHTTPFixedResponse

ipv4, ipv6

**Listener Redirections Per Second**

The number of successful redirection operations that are performed by the listener per second. Unit: Count/s

ListenerHTTPRedirect

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerHTTPRedirect

ipv4, ipv6

**Requests to a listener per second**

The total number of requests that are processed by the listener per second. Unit: Count/s

ListenerQPS

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerQPS

ipv4, ipv6

**Non-sticky requests to a listener per second**

The number of new connection requests per second established by the listener for requests that are not routed using sticky sessions. Unit: Count/s

ListenerNonStickyRequest

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerNonStickyRequest

ipv4, ipv6

**Backend response time of a listener**

The period from when the listener establishes a connection with a backend server to when the connection is closed after all data is received. Unit: ms

ListenerUpstreamResponseTime

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerUpstreamResponseTime

ipv4, ipv6

**Request latency of a listener**

The interval between the time when the listener receives the first request message and the time when a response is returned. Unit: ms

ListenerRequestTime

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerRequestTime

ipv4, ipv6

##### **Bandwidth metrics (listener as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Outbound bandwidth of a listener**

The volume of outbound HTTP data that is sent by the listener per second. Unit: bit/s

ListenerOutBits

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerOutBits

ipv4, ipv6

**Inbound bandwidth of a listener**

The volume of inbound HTTP data that is received by the listener per second. Unit: bit/s

ListenerInBits

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerInBits

ipv4, ipv6

##### **Status code metrics (listener as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**2XX status codes from a listener per second**

The number of 2XX status codes that are returned by the listener per second. Unit: Count/s

ListenerHTTPCode2XX

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerHTTPCode2XX

ipv4, ipv6

**3XX status codes from a listener per second**

The number of 3XX status codes that are returned by the listener per second. Unit: Count/s

ListenerHTTPCode3XX

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerHTTPCode3XX

ipv4, ipv6

**4XX status codes from a listener per second**

The number of 4XX status codes that are returned by the listener per second. Unit: Count/s

ListenerHTTPCode4XX

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerHTTPCode4XX

ipv4, ipv6

**5XX status codes from a listener per second**

The number of 5XX status codes that are returned by the listener per second. Unit: Count/s

ListenerHTTPCode5XX

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerHTTPCode5XX

ipv4, ipv6

**Listener: 500 counts per second**

The number of 500 status codes that are returned by the listener per second. Unit: Count/s

ListenerHTTPCode500

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerHTTPCode500

ipv4, ipv6

**Monitoring the number of 502 errors per second**

The number of 502 status codes that are returned by the listener per second. Unit: Count/s

ListenerHTTPCode502

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerHTTPCode502

ipv4, ipv6

**Monitors the number of 503 responses per second**

The number of 503 status codes that are returned by the listener per second. Unit: Count/s

ListenerHTTPCode503

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerHTTPCode503

ipv4, ipv6

**Listen for 504 data points per second**

The number of 504 status codes that are returned by the listener per second. Unit: Count/s

ListenerHTTPCode504

userId, loadBalancerId, listenerProtocol, listenerPort

Value

DualStack\_ListenerHTTPCode504

ipv4, ipv6

##### **Backend status code metrics (listener as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Backend 2XX status codes for a listener per second**

The number of 2XX status codes returned per second from the backend servers for this listener. Unit: Count/s

ListenerHTTPCodeUpstream2XX

userId, loadBalancerId, listenerProtocol, listenerPort

Value

**Listener backend 3XX status codes per second**

The number of 3XX status codes returned per second from the backend servers for this listener. Unit: Count/s

ListenerHTTPCodeUpstream3XX

userId, loadBalancerId, listenerProtocol, listenerPort

Value

**Backend 4XX status codes for a listener per second**

The number of 4XX status codes returned per second from the backend servers for this listener. Unit: Count/s

ListenerHTTPCodeUpstream4XX

userId, loadBalancerId, listenerProtocol, listenerPort

Value

**Backend 5XX status codes for a listener per second**

The number of 5XX status codes returned per second from the backend servers for this listener. Unit: Count/s

ListenerHTTPCodeUpstream5XX

userId, loadBalancerId, listenerProtocol, listenerPort

Value

##### **Health check metrics (listener as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Healthy servers of a listener**

The number of healthy backend servers for this listener. Unit: Count

ListenerHealthyHostCount

userId, loadBalancerId, listenerProtocol, listenerPort

Value

**Listener Unhealthy Server Count**

The number of unhealthy backend servers for this listener. Unit: Count

ListenerUnHealthyHostCount

userId, loadBalancerId, listenerProtocol, listenerPort

Value

##### **Connection metrics (forwarding rule as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Backend connection failures of a forwarding rule per second**

The number of failed connections to backend servers per second for this forwarding rule. Unit: Count/s

RuleUpstreamConnectionError

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

DualStack\_RuleUpstreamConnectionError

ipv4, ipv6

**Backend TLS handshake failures of a forwarding rule per second**

The number of failed TLS connections to backend servers per second for this forwarding rule. Unit: Count/s

RuleUpstreamTLSNegotiationError

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

DualStack\_RuleUpstreamTLSNegotiationError

ipv4, ipv6

##### **Request metrics (forwarding rule as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Non-sticky requests of a forwarding rule per second**

The number of new connection requests per second for this forwarding rule that did not use an existing sticky session. Unit: Count/s

RuleNonStickyRequest

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

DualStack\_RuleNonStickyRequest

ipv4, ipv6

**Requests of a forwarding rule per second**

The total number of requests that are processed by the forwarding rule per second. Unit: Count/s

RuleQPS

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

DualStack\_RuleQPS

ipv4, ipv6

**Backend response time of a forwarding rule**

The period from when the forwarding rule establishes a connection with a backend server to when the connection is closed after all data is received. Unit: ms

RuleUpstreamResponseTime

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

DualStack\_RuleUpstreamResponseTime

ipv4, ipv6

**Request latency of a forwarding rule**

The interval between the time when the forwarding rule receives the first request message and the time when a response is returned. Unit: ms

RuleRequestTime

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

DualStack\_RuleRequestTime

ipv4, ipv6

##### **Backend status code metrics (forwarding rule as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Backend 2XX status codes for a forwarding rule per second**

The number of 2XX status codes that are returned by backend servers for the forwarding rule per second. Unit: Count/s

RuleHTTPCodeUpstream2XX

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

**Backend 3XX status codes for a forwarding rule per second**

The number of 3XX status codes that are returned by backend servers for the forwarding rule per second. Unit: Count/s

RuleHTTPCodeUpstream3XX

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

**Backend 4XX status codes for a forwarding rule per second**

The number of 4XX status codes that are returned by backend servers for the forwarding rule per second. Unit: Count/s

RuleHTTPCodeUpstream4XX

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

**Backend 5XX status codes for a forwarding rule per second**

The number of 5XX status codes that are returned by backend servers for the forwarding rule per second. Unit: Count/s

RuleHTTPCodeUpstream5XX

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

##### **Health check metrics (forwarding rule as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Healthy servers of a forwarding rule**

The number of healthy backend servers for this forwarding rule. Unit: Count

RuleHealthyHostCount

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

**Unhealthy servers of a forwarding rule**

The number of unhealthy backend servers for this forwarding rule. Unit: Count

RuleUnHealthyHostCount

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

##### **Connection metrics (server group as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Backend connection failures of a server group per second**

The number of failed connections to backend servers in this server group per second. Unit: Count/s

ServerGroupUpstreamConnectionError

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

DualStack\_ServerGroupUpstreamConnectionError

ipv4, ipv6

**Backend TLS handshake failures of a server group per second**

The number of failed TLS connections to backend servers in this server group per second. Unit: Count/s

ServerGroupUpstreamTLSNegotiationError

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

DualStack\_ServerGroupUpstreamTLSNegotiationError

ipv4, ipv6

##### **Request metrics (server group as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Non-sticky requests of a server group**

The number of new connection requests that are established by the server group per second without using sticky sessions. Unit: Count/s

ServerGroupNonStickyRequest

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

DualStack\_ServerGroupNonStickyRequest

ipv4, ipv6

**Requests of a server group per second**

The total number of requests that are processed by the server group per second. Unit: Count/s

ServerGroupQPS

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

DualStack\_ServerGroupQPS

ipv4, ipv6

**Backend response time of a server group**

The period from when the server group establishes a connection with a backend server to when the connection is closed after all data is received. Unit: ms

ServerGroupUpstreamResponseTime

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

DualStack\_ServerGroupUpstreamResponseTime

ipv4, ipv6

**Request latency of a server group**

The interval between the time when the server group receives the first request message and the time when a response is returned. Unit: ms

ServerGroupRequestTime

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

DualStack\_ServerGroupRequestTime

ipv4, ipv6

##### **Backend status code metrics (server group as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Backend 2XX status codes for a server group per second**

The number of 2XX status codes that are returned by backend servers in the server group per second. Unit: Count/s

ServerGroupHTTPCodeUpstream2XX

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

**Backend 3XX status codes for a server group per second**

The number of 3XX status codes that are returned by backend servers in the server group per second. Unit: Count/s

ServerGroupHTTPCodeUpstream3XX

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

**Backend 4XX status codes for a server group per second**

The number of 4XX status codes that are returned by backend servers in the server group per second. Unit: Count/s

ServerGroupHTTPCodeUpstream4XX

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

**Backend 5XX status codes for a server group per second**

The number of 5XX status codes that are returned by backend servers in the server group per second. Unit: Count/s

ServerGroupHTTPCodeUpstream5XX

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

##### **Health check metrics (server group as dimension)**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Healthy servers in a server group**

The number of healthy backend servers in the server group. Unit: Count

ServerGroupHealthyHostCount

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

**Unhealthy servers in a server group**

The number of unhealthy backend servers in the server group. Unit: Count

ServerGroupUnHealthyHostCount

userId, loadBalancerId, listenerProtocol, listenerPort, serverGroupId

Value

#### **VIP (zone) metrics**

Upgraded Application Load Balancer (ALB) instances support viewing metrics for virtual IP addresses (VIPs) (zones) by default. For ALB instances that have not been upgraded, only instances in static IP mode support viewing metrics for VIPs (zones). Instances in dynamic IP mode do not support this feature. For more information, see [Upgrade an ALB instance](/help/en/slb/product-overview/alb).

To set alert rules for VIP (zone) metrics of an ALB instance, go to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/newOverview). For more information, see [Set alert rules for ALB metrics](/help/en/slb/application-load-balancer/user-guide/set-alb-monitoring-item-alarm-rules).

##### **Connection metrics (VIP (zone))**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**VIP active connections**

The number of TCP connections in the ESTABLISHED state for a specific VIP (zone) of the ALB instance. Unit: Count

VipActiveConnection

userId, loadBalancerId,

vip

Value

**VIP inactive connections**

The number of TCP connections that are not in the ESTABLISHED state for a specific VIP (zone) of the ALB instance. Unit: Count

VipInactiveConnection

userId, loadBalancerId, vip

Value

**Maximum concurrent VIP connections**

The total number of TCP connections that are processed by a specific VIP (zone) of the ALB instance. Unit: Count

VipMaxConnection

userId, loadBalancerId, vip

Value

**VIP backend TLS handshake failures per second**

The number of times per second that a specific VIP (zone) of the ALB instance fails to establish TLS connections with backend servers. Unit: Count/s

VipUpstreamTLSNegotiationError

userId, loadBalancerId,

vip

Value

**VIP new connections per second**

The number of new connections that are established between a specific VIP (zone) of the ALB instance and backend servers per second. Unit: Count/s

VipNewConnection

userId, loadBalancerId,

vip

Value

**VIP dropped connections per second**

The number of connection requests that are dropped by a specific VIP (zone) of the ALB instance per second. Unit: Count/s

VipRejectedConnection

userId, loadBalancerId,

vip

Value

**VIP backend connection failures per second**

The number of times per second that a specific VIP (zone) of the ALB instance fails to connect to backend servers. Unit: Count/s

VipUpstreamConnectionError

userId, loadBalancerId,

vip

Value

**VIP client TLS handshake failures per second**

The number of times per second that a specific VIP (zone) of the ALB instance fails to establish TLS connections with clients. Unit: Count/s

VipClientTLSNegotiationError

userId, loadBalancerId,

vip

Value

##### **Request metrics (VIP (zone))**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**VIP custom responses per second**

The number of custom responses that are returned by a specific VIP (zone) of the ALB instance to clients per second. Unit: Count/s

VipHTTPFixedResponse

userId, loadBalancerId,

vip

Value

**VIP redirects per second**

The number of successful redirection operations that are performed by a specific VIP (zone) of the ALB instance per second. Unit: Count/s

VipHTTPRedirect

userId, loadBalancerId,

vip

Value

**VIP requests per second**

The total number of requests that are processed by a specific VIP (zone) of the ALB instance per second. Unit: Count/s

VipQPS

userId, loadBalancerId,

vip

Value

**VIP non-sticky requests per second**

The number of new connection requests that are established by a specific VIP (zone) of the ALB instance per second without using sticky sessions. Unit: Count/s

VipNonStickyRequest

userId, loadBalancerId,

vip

Value

**VIP backend response time**

The period from when a specific VIP (zone) of the ALB instance establishes a connection with a backend server to when the connection is closed after all data is received. Unit: ms

VipUpstreamResponseTime

userId, loadBalancerId,

vip

Value

**VIP request latency**

The interval between the time when a specific VIP (zone) of the ALB instance receives the first request message and the time when a response is returned. Unit: ms

VipRequestTime

userId, loadBalancerId,

vip

Value

##### **Bandwidth metrics (VIP (zone))**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**VIP outbound bandwidth**

The volume of outbound HTTP data that is sent by a specific VIP (zone) of an ALB instance per second. Unit: bit/s

VipOutBits

userId, loadBalancerId,

vip

Value

**VIP inbound bandwidth**

The volume of inbound HTTP data that is received by a specific VIP (zone) of an ALB instance per second. Unit: bit/s

VipInBits

userId, loadBalancerId,

vip

Value

##### **Status code metrics (VIP (zone))**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**VIP 2XX status codes per second**

The number of 2XX status codes that are returned by a specific VIP (zone) of the ALB instance per second. Unit: Count/s

VipHTTPCode2XX

userId, loadBalancerId,

vip

Value

**VIP 3XX status codes per second**

The number of 3XX status codes that are returned by a specific VIP (zone) of the ALB instance per second. Unit: Count/s

VipHTTPCode3XX

userId, loadBalancerId,

vip

Value

**VIP 4XX status codes per second**

The number of 4XX status codes that are returned by a specific VIP (zone) of the ALB instance per second. Unit: Count/s

VipHTTPCode4XX

userId, loadBalancerId,

vip

Value

**VIP 5XX status codes per second**

The number of 5XX status codes that are returned by a specific VIP (zone) of the ALB instance per second. Unit: Count/s

VipHTTPCode5XX

userId, loadBalancerId,

vip

Value

**VIP: 500 per second**

The number of 500 status codes that are returned by a specific VIP (zone) of the ALB instance per second. Unit: Count/s

VipHTTPCode500

userId, loadBalancerId,

vip

Value

**VIP: 502 per second**

The number of 502 status codes that are returned by a specific VIP (zone) of the ALB instance per second. Unit: Count/s

VipHTTPCode502

userId, loadBalancerId,

vip

Value

**VIP: 503 responses per second**

The number of 503 status codes that are returned by a specific VIP (zone) of the ALB instance per second. Unit: Count/s

VipHTTPCode503

userId, loadBalancerId,

vip

Value

**VIP: 504 per second**

The number of 504 status codes that are returned by a specific VIP (zone) of the ALB instance per second. Unit: Count/s

VipHTTPCode504

userId, loadBalancerId,

vip

Value

### **ALB metrics that you can view only using an API or an SDK**

The following metrics are not displayed in the ALB console. You can retrieve these metrics only using an API or an SDK. Each metric represents the total value for an ALB instance and does not provide separate values for IPv4 or IPv6.

#### **Forwarding rule metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**Backend 2XX status code ratio for forwarding rule**

The percentage of 2XX status codes returned per second by backend servers for the forwarding rule. Unit: %

RuleHTTPCodeUpstream2XXRatio

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

**Backend 3XX status code ratio for forwarding rule**

The percentage of 3XX status codes returned per second by backend servers for the forwarding rule. Unit: %

RuleHTTPCodeUpstream3XXRatio

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

**Backend 4XX status code ratio for forwarding rule**

The percentage of 4XX status codes returned per second by backend servers for the forwarding rule. Unit: %

RuleHTTPCodeUpstream4XXRatio

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

**Backend 5XX status code ratio for forwarding rule**

The percentage of 5XX status codes returned per second by backend servers for the forwarding rule. Unit: %

RuleHTTPCodeUpstream5XXRatio

userId, loadBalancerId, listenerProtocol, listenerPort, ruleId

Value

## References

For information about querying and analyzing monitoring data, see [View ALB monitoring information](/help/en/slb/application-load-balancer/user-guide/view-the-monitoring-information-about-an-alb-instance#task-2082821).
