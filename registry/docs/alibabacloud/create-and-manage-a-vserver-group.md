Listeners route service requests to specified server groups based on configured forwarding rules. Server groups distribute service traffic to the corresponding backend servers based on scheduling algorithms.

## **How it works**

### Server group types

**Server group type**

**Default server group**

**vServer group**

**Primary/secondary server group**

Description

Each CLB instance comes with a default server group.

(exactly one)

You create and manage it.

You create and manage it.

Number of backend servers

One or more

One or more

Two (one primary and one secondary)

Characteristics

-   Instance-wide sharing: The instance shares it globally, and all listeners use it.
    
-   Port restriction: All backend servers under the same listener must use the same port.
    

-   Business flexibility: Different listeners can be bound to different server groups.
    
-   Multi-port support: A vServer group supports configuring backend servers with different ports.
    
-   Advanced routing: Combine domain name and URL path rules for more granular traffic distribution.
    

-   Business flexibility: Different listeners can be bound to different server groups.
    
-   High availability: Automatic primary/secondary switchover.
    
-   Multi-port support: A primary/secondary server group supports configuring backend servers with different ports.
    

Scenarios

Simple architecture where all requests are forwarded to the same group of backend servers.

Complex architecture, such as distributing service requests by domain name or port.

Services with a fixed primary/secondary mode, such as databases and core API services.

Supported listener types

TCP/UDP/HTTP/HTTPS

TCP/UDP/HTTP/HTTPS

TCP/UDP only

### Weight configuration

[Scheduling algorithms](/help/en/slb/product-overview/introduction-to-load-balancing-scheduling-algorithm) determine how CLB distributes received requests to multiple backend servers. Weights are parameters in algorithms that support weighted distribution, which control the proportion of traffic that is distributed to each server.

-   Scope: This applies to scheduling algorithms that support weighted distribution. Round-robin algorithms do not use weights.
    
-   Value range: 0 to 100. The default value is 100.
    
-   Behavior when weight is 0: The server stops receiving new requests. However, established connections continue to be processed until they close. Health checks also continue. This is often used for a graceful server shutdown.
    
-   Scope of weight changes: Weight changes apply only to new connections. They do not affect established connections. In persistent connection scenarios, traffic changes slowly after you adjust weights.
    

### **Service high availability**

You can enable CLB health checks. They periodically send requests to confirm the status of servers.

-   Health check success: The server status is normal and CLB forwards traffic to the server.
    
-   Health check failure: The server status is abnormal. CLB stops forwarding new requests to the server until it recovers.
    

> CLB health checks use the `100.64.0.0/10` CIDR block. You must ensure that the security group policy of the backend server allows access from this CIDR block. Otherwise, health checks fail, which leads to service interruptions.

Primary/secondary servers rely on health checks for failover:

-   If the primary server's health check fails, traffic switches to the secondary server. The secondary server does not perform health checks by default. You must ensure its availability for a successful switchover.
    
-   The failover time for primary/secondary servers depends on the configured health check response timeout. Traffic automatically switches back to the primary server after its health check recovers.
    

## **Scope**

-   Associations:
    
    -   Listeners and server groups are CLB instance-level resources. Listener and server group information is not shared between different CLB instances.
        
    -   A server group can be associated with multiple listeners, but a listener can be associated with only one server group.
        
    -   CLB Layer 4 listeners do not support an ECS instance that acts as both a backend server and a client. If you require this setup, use a Layer 7 listener.
        
-   Attach backend servers:
    
    -   CLB supports attaching only backend servers from the same account and region.
        
        -   Private network CLB instances: You can attach only backend servers that are in the same VPC as the CLB instance.
            
        -   Public network CLB instances: If you add multiple backend servers, they must belong to the same VPC.
            
    -   All CLB server group types support attaching the following resources: ECS instances, Elastic Network Interfaces (ENIs), and Elastic Container Instances (ECI).
        
        -   You can add only ENIs that are already attached to ECS instances. You can add both the primary private IP address and secondary private IP addresses of an ENI.
            
    -   When an ECS instance that acts as a backend server undergoes hot migration, persistent connections to CLB may be disconnected. Connections are recovered after a reconnection. You must ensure that your application has an automatic reconnection mechanism.
        
-   Configurability:
    
    **Configurability**
    
    **Add/delete server groups**
    
    **Modify ports**
    
    **Modify weights**
    
    Default server group
    
    Not supported
    
    After you first create and associate a listener, the port **cannot be modified**.
    
    Supported
    
    vServer group
    
    Supported
    
    Supported
    
    Supported
    
    Primary/secondary server group
    
    Supported
    
    Not supported
    
    Primary/secondary role **cannot be modified**.
    

## **Configure server groups**

### **Console**

### **Default server group**

1.  You do not need to create a default server group. Each CLB instance includes a default server group.
    
2.  Add servers:
    
    1.  Go to the or the [CLB instance management page](https://slb.console.alibabacloud.com/slb/ap-southeast-1/slbs). Click the target instance ID. Select the **Default Server Group** tab. Click **Add**.
        
        -   Set the **Server Type** and **Resource Group** to filter the available resources.
            
        -   To add an Elastic Network Interface (ENI), enable Advanced Mode. Click the plus sign icon next to the ECS instance that has the associated ENI. Locate the target ENI, select it to bind, and then select the **IP**.
            
    2.  Configure ports and weights:
        
        -   Configure ports: Select the **Listener** tab. Click **Add Listener**. On the **Backend Servers** wizard page, set the **Port** for the servers in the default server group. All servers in the default server group for the same listener must use the same port.
            
            > You can specify the port only when you add a listener. You cannot modify it later.
            
        -   Configure the **Weight** for the selected servers.
            

### **vServer group**

1.  Go to the or the [CLB instance management page](https://slb.console.alibabacloud.com/slb/ap-southeast-1/slbs). Click the target instance ID. Select **vServer groups**. Click **Create vServer Group**.
    
2.  **Add** a server:
    
    -   Set the **Server Type** and **Resource Group** to filter available resources.
        
    -   To add an ENI, enable Advanced Mode. Click the plus sign icon next to the ECS instance that has an associated ENI. Find the target ENI. Select the ENI to bind. Select the **IP**.
        
3.  You can configure the **Port** and **Weight** for the selected servers. You can select **Add Port** to configure multiple different ports for the same backend server.
    

### **Primary/secondary server group**

1.  Go to the or the [CLB instance management page](https://slb.console.alibabacloud.com/slb/ap-southeast-1/slbs). Click the target instance ID. Select **Primary/Secondary Server Groups**. Click **Create Primary/Secondary Server Group**.
    
2.  **Add** server:
    
    -   Set the **Server Type** and **Resource Group** to filter the available resources.
        
    -   To add an ENI, enable Advanced Mode. Click the plus icon next to the target ECS instance. Select the ENI to bind, and then select the **IP**.
        
    -   You can add only two backend servers.
        
3.  Configure the port for the selected servers by clicking **Port**. To add multiple ports to the same backend server, click **Add Port**. After adding the ports, select **Primary Server** to configure the primary/standby relationship.
    

### **API**

#### **Default server group**

-   Call [AddBackendServers](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-addbackendservers) to add backend servers.
    
-   Call [SetBackendServers](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-setbackendservers) to set the backend server weight.
    
-   Call [RemoveBackendServers](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-removebackendservers) to remove backend servers.
    

#### **vServer group**

-   Call [CreateVServerGroup](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-createvservergroup) to create a vServer group, add backend servers, and configure ports and weights.
    
-   Call [AddVServerGroupBackendServers](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-addvservergroupbackendservers) or [RemoveVServerGroupBackendServers](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-removevservergroupbackendservers) to add or remove backend servers from a specified vServer group.
    
-   Call [DeleteVServerGroup](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-deletevservergroup) to delete a vServer group.
    

#### **Primary/secondary server group**

-   Call [CreateMasterSlaveServerGroup](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-createmasterslaveservergroup) to create a primary/secondary server group.
    
-   Call [DeleteMasterSlaveServerGroup](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-deletemasterslaveservergroup) to delete a primary/secondary server group.
    

## **FAQ**

#### **Can I adjust the number of ECS instances while a CLB instance is running?**

-   Default server group or vServer group: Yes, you can. You can increase or decrease the number of backend ECS instances at any time. You can also switch between different ECS instances. To ensure service stability, enable health checks before you perform these operations and make sure that at least one backend ECS instance is healthy.
    
-   Primary/secondary server group: No, you cannot.
    

#### **Can backend ECS instances run different operating systems?**

They can differ.

CLB does not restrict the operating systems that are used by backend ECS instances, as long as the application services and data are consistent across the instances. We recommend that you use the same operating system to simplify management and maintenance.

#### **Can I use ECS instances from different regions as backend servers?**

No, you cannot. CLB does not support directly associating cross-region backend servers. To achieve a cross-region deployment, you can use one of the following solutions:

-   Deploy Global Traffic Manager (GTM) in front of multiple CLB instances across regions. For more information, see [Global Traffic Manager](/help/en/slb/classic-load-balancer/use-cases/use-gtm-and-clb-instances-to-implement-cross-region-load-balancing).
    
-   Use Application Load Balancer (ALB) or Network Load Balancer (NLB), both of which support cross-region backend servers. For more information, see [Application Load Balancer ALB](/help/en/slb/application-load-balancer/use-cases/specify-an-ecs-instance-in-a-vpc-as-a-backend-server-of-alb-in-a-different-region) or [Network Load Balancer NLB](/help/en/slb/network-load-balancer/use-cases/use-nlb-and-cen-to-distribute-traffic-across-regions).
    

#### **Why do IP addresses that start with 100 frequently access my ECS instances?**

These requests come from CLB health checks and availability monitoring.

-   Source: Alibaba Cloud reserved CIDR block `100.64.0.0/10`.
    
-   Security: This CIDR block is reserved for internal use by Alibaba Cloud. Other users cannot be assigned IP addresses in this range, so no security risk exists.
    
-   Configuration recommendation: You should allow traffic from this CIDR block in your security group to ensure service availability.
    

#### **Compression is not configured on my ECS instances. Why are HTTP responses from CLB compressed?**

-   Cause: Gzip compression is enabled in the CLB listener configuration, and the client browser supports compression.
    
-   Action: To disable compression, you can turn off the Gzip compression feature in the CLB console when you configure the listener, or use a TCP listener instead.
    

#### **Do ECS instances that use HTTP 1.0 support chunked transfer encoding?**

This is supported.

#### **Why do backend ECS instances of a CLB instance frequently receive requests with the User-Agent 'KeepAliveClient'?**

-   Symptom: Backend ECS instances receive many GET requests from internal Alibaba Cloud IP addresses, with the User-Agent set to `KeepAliveClient`.
    
-   Cause: The listener protocol is TCP, but the health check protocol is HTTP. When you use HTTP health checks on a TCP listener, GET is used by default.
    
-   Solution: Use the same protocol for both the listener and health checks, such as TCP for both or HTTP for both.
    

#### **Can I modify the server ports in a default server group?**

You cannot modify this directly.

-   Limitation: You can set server ports for a default server group only when you first create a listener. All backend servers in the same default server group for a given listener must use the same port.
    
-   Solution: To configure different server ports for the same listener, you can use a vServer group.
    

#### **Do Layer 4 listeners of CLB support an ECS instance that acts as both a backend server and a client?**

No, they do not. This configuration creates a loop.

Instead, you can use one of the following options:

-   Use a CLB Layer 7 listener (HTTP or HTTPS).
    
-   Use an NLB instance and disable the Preserve Client IP feature for the NLB server group. For more information, see [How do I configure my NLB instance to allow an ECS instance in the server group to work as both a backend server and a client?](/help/en/slb/network-load-balancer/nlb-faq#8bb20b03243xp).
    

#### **Why are there many TIME-WAIT connections on CLB backends but few on ALB backends?**

CLB and ALB use different connection mechanisms when interacting with backend servers.

-   **CLB**: Uses short-lived HTTP connections by default. When CLB forwards a request to a backend server, it inserts the `Connection: close` field into the HTTP header. After the backend server processes the request, it actively sends a FIN packet to close the connection based on this header. Each time a connection is closed, it enters the TIME-WAIT state (60 seconds by default). In high-concurrency scenarios, many TIME-WAIT connections can accumulate quickly.
    
-   **ALB**: Supports persistent HTTP connections (keep-alive) by default. A single TCP connection can be reused to process multiple requests. Enabling persistent connections reduces the number of disconnections, thus reducing the number of TIME-WAIT connections.
    

#### **Why is traffic not evenly distributed across backend servers?**

**Common cause**

**Description**

**Troubleshooting and resolution**

Session persistence

When session persistence is enabled, requests from the same client are always sent to the same backend server. If only a few clients generate traffic, such as during stress testing with a small number of clients, traffic may be concentrated on only a few servers.

Check whether session persistence is enabled and confirm whether your business requires it.

Persistent connections

Existing persistent connections are not redistributed when weights are changed. Therefore, after you adjust the weights, the traffic distribution changes slowly.

-   You can perform scaling or weight adjustments during off-peak hours and wait for old connections to close.
    
-   You must ensure that the TCP Keepalive settings are consistent across all backend servers to prevent connection buildup on some servers.
    

Health check failures or flapping

Some backend servers fail health checks and stop receiving traffic. Alternatively, their health status frequently switches between healthy and unhealthy, which causes unstable traffic distribution.

-   You can review health check logs to identify status flapping.
    
-   You can increase the health check interval and unhealthy threshold to reduce false positives.
    
-   You must verify that the expected health check response code is correctly configured.
    

Low overall request volume

You can check the CLB monitoring metrics. If the total number of requests is low, minor imbalances in traffic distribution are normal.

You can observe the traffic distribution after the request volume increases. If the imbalance persists under a high load, you must investigate other causes.

Incorrect weight configuration

The server weights do not match the actual processing capacity. As a result, some servers become overloaded while others remain idle.

-   You must confirm that you are using a weighted scheduling algorithm. The round-robin algorithm ignores weights.
    
-   You can set weights based on the actual processing capacity of each backend server.
