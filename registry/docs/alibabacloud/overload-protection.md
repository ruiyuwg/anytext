This topic describes how the overload protection feature works and how to use it.

## Background information

In promotions, CPU resources of the primary node are liable to be overloaded. In this case, you can upgrade the primary node. During the upgrade process, however, the requests of the entire cluster are routed to the primary node because transient connections occur or the cluster becomes unavailable. This worsens overloading of the primary node and even causes its crash and business interruption. To prevent this situation, PolarDB for MySQL provides the overload protection feature on PolarProxy. This feature limits the number of concurrent requests when all read-only nodes become unavailable, which ensures the availability of the primary node and your service.

## Limits

-   To use this feature, PolarProxy must be 2.8.1 or later and the cluster must be of PolarDB for MySQL 5.6, 5.7, or 8.0.
    
-   This feature supports only read/write endpoints.
    
-   The overload protection feature is triggered only if all read-only nodes are faulty due to crash or when replication with the primary database is interrupted. The feature is not supported in other scenarios.
    

## Usage

In the Cluster Endpoint section of the Overview page, click **Modify**. In the **Configure Node** page, enable the overload protection feature.

Based on the leaky bucket algorithm, when PolarProxy detects that all read-only nodes in the cluster are faulty, it restricts concurrent requests to the cluster to protect the primary node. When read-only nodes become normal or the specified time limit (60s by default) is reached, overload protection is canceled.

PolarDB for MySQL selects an appropriate interval for the maximum number of concurrent requests based on historical data. When the cluster is normal, PolarProxy records the number of sampled concurrent requests on the primary node in the last 24 hours.

When overload protection is triggered, PolarProxy uses the median of historical data as the maximum number of concurrent requests to limit the number of active connections.

## Examples

During the test, overload protection is triggered when the replication on all read-only nodes is interrupted. During this period, requests still can be routed to the primary node, but the number of requests does not increase sharply.

After the read-only nodes recover, overload protection is disabled and requests can be forwarded normally.

![456789](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3882840761/p532251.png)
