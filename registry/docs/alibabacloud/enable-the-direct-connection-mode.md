By default, a Tair (Redis OSS-compatible) instance that uses the classic cluster architecture provides a database proxy endpoint. To make the instance compatible with the native Redis Cluster protocol, you can enable the direct connection mode and connect to the direct connection endpoint from your client. This endpoint lets you bypass the proxy node and connect to the Tair (Redis OSS-compatible) cluster instance as you would a native Redis cluster.

## Prerequisites

**Important**

This feature is in public preview. To use this feature, you can [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to request access.

The instance must meet the following conditions:

-   The instance uses the cluster architecture.
    
-   The **Deployment Mode** is set to **Classic**.
    
    **Note**
    
    -   For a cloud-native cluster instance in direct connection mode, a direct connection endpoint is provided by default and does not need to be enabled.
        
    -   For a cloud-native cluster instance in proxy mode, you cannot enable the direct connection mode.
        
    
-   The instance is compatible with Redis 5.0 and is [updated to the latest minor version](/help/en/redis/user-guide/update-the-minor-version#d332d9f177z1t).
    
-   Transport Layer Security (TLS) is disabled for the instance. For more information, see [TLS encryption](/help/en/redis/user-guide/enable-tls-encryption#task-2314850).
    
-   The vSwitch to which the instance belongs has a sufficient number of available IP addresses. For more information, see [Query the number of available IP addresses for the vSwitch of an instance](/help/en/redis/user-guide/obtain-the-number-of-available-ip-addresses-in-the-vswitch-to-which-an-apsaradb-for-redis-instance-is-connected#task-1948876).
    
    **Note**
    
    For example, if an instance has 8 shards, a request for a direct connection endpoint allocates one IP address to the primary node of each shard. The direct connection endpoint itself also requires one IP address. Therefore, the vSwitch must have at least 9 available IP addresses.
    

## Comparison of connection modes

-   Direct connection mode: Using a direct connection endpoint, your client can bypass the proxy server and directly access the backend data nodes. This mode improves service response speed by eliminating the request processing time of the proxy.
    
-   Proxy mode: Using the database proxy endpoint, client requests are forwarded by the proxy node to the data nodes. For more information, see [Tair Proxy features](/help/en/redis/product-overview/features-of-proxy-nodes#concept-2334147).
    

## Notes

-   Because the proxy node is bypassed, the maximum number of connections is reduced. The maximum number of connections to a single shard is 10,000 for a Redis Open-Source Edition cluster instance and 30,000 for a Tair (Enterprise Edition) cluster instance. For more information about instance types, see [Instance types and FAQ](/help/en/redis/product-overview/overview-4/#concept-gph-q34-tdb).
    
-   If data skew occurs, where one shard is heavily accessed while others are mostly idle, the connections to that shard may be exhausted. As a result, new connection requests are rejected, which affects the overall performance of the instance.
    
    **Note**
    
    Data skew is usually caused by hot spot keys or large keys. To troubleshoot this issue, see [Top Key statistics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature#task-2096542) and [Offline full key analysis](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb).
    
-   After you enable the direct connection mode for an instance, you cannot upgrade the major version of the instance or change the zone to which the instance belongs. If you want to upgrade the major version or change the zone, release the private endpoint first. For more information, see [Upgrade the major version](/help/en/redis/user-guide/upgrade-the-major-version-1#task-ast-xh3-3gb), [Migrate an instance across zones](/help/en/redis/user-guide/migrate-an-instance-across-zones#concept-kpz-c5v-4gb), and [Release a private endpoint for an instance](/help/en/redis/user-guide/release-a-private-endpoint-from-an-apsaradb-for-redis-instance#task-2386010).
    
-   If you want to change the configurations of an instance for which the direct connection mode is enabled, you can change only the number of shards or shard specifications at a time. For more information, see [Why am I unable to change the configurations of a classic (local disk-based) cluster instance?](/help/en/redis/support/why-do-i-fail-to-change-the-configurations-of-a-cluster-instance-that-use-local-disks)
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the **Connection Information** section, click **Apply for Endpoint** to the right of **Private Endpoint**.
    
3.  In the panel that appears, configure the endpoint and port.
    
    **Configuration**
    
    **Description**
    
    **Endpoint**
    
    -   You can only modify the prefix of the endpoint. The default prefix is the instance ID.
        
    -   A custom prefix must start with a lowercase letter and can contain only lowercase letters and digits. The prefix must be 8 to 40 characters in length.
        
    
    **Port Number**
    
    You can change the port number when you modify the endpoint. The port number must be between 1024 and 65535.
    
4.  Click **OK**.
    
    For an example of how to connect to an instance using a direct connection endpoint, see [Connect to an instance in direct connection mode](/help/en/redis/user-guide/use-a-private-endpoint-to-connect-to-an-apsaradb-for-redis-instance#task-2378182).
    

## FAQ

-   My instance meets the prerequisites, but I cannot find the button to request a direct connection endpoint. Why?
    
    A: Try updating the instance to the latest minor version. For more information, see [Update the minor version and proxy version](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb).
    
-   Do I need to stop my services before I enable direct connection?
    
    A: No, you do not. Enabling direct connection does not cause a service interruption.
    
-   Can I use the direct connection endpoint and the proxy endpoint at the same time?
    
    A: For a classic cluster architecture, you can use both the direct connection mode and the proxy mode. For a cloud-native cluster architecture, you cannot use both modes at the same time. You can use only the direct connection mode or the proxy mode.
    

## Related API operations

**API operation**

**Description**

[AllocateDirectConnection](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-allocatedirectconnection-redis#main-107864)

Request a direct connection endpoint for a cluster instance.

[ReleaseDirectConnection](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-releasedirectconnection-redis#main-107864)

Release the direct connection endpoint of a cluster instance.

## **References**

-   [Release a private endpoint](/help/en/redis/user-guide/release-a-private-endpoint-from-an-apsaradb-for-redis-instance) (optional)
