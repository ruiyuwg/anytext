Network Load Balancer (NLB) distributes incoming traffic to backend servers through server groups. Each server group contains backend servers that process client requests forwarded by a listener. Health checks monitor server availability, and NLB automatically routes traffic only to healthy servers.

## Server group types

NLB supports two server group types. The type cannot be changed after creation.

**Type**

**Backend servers**

**Network requirements**

**Server Type**

Elastic Compute Service (ECS) instances, elastic network interfaces (ENIs), and Elastic Container Instance (ECI) instances

All backend servers must be in the same Virtual Private Cloud (VPC) as the server group.

**IP**

Private IP addresses

IP addresses are not restricted to the VPC CIDR block. Add IP addresses from other VPCs, other regions, or on-premises data centers. NLB must work with other products, such as Cloud Enterprise Network (CEN), to forward requests outside the local VPC.

**Important**

Only private IP addresses are supported for IP-type server groups. Public IP addresses are not supported.

**Important**

NLB does not automatically update backend server information when a backend server is released or its private IP address changes. Remove the backend server from the server group before you release or modify it to prevent service disruptions.

## Prerequisites

Before you begin, make sure you have:

-   A VPC containing the backend servers or IP addresses to receive forwarded traffic
    
-   (Optional) IPv6 enabled on the VPC, if you plan to use IPv4/v6 dual-stack
    

## Create a server group

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region where the NLB instance is deployed.
    
3.  In the left-side navigation pane, choose **NLB** > **Server Groups**.
    
4.  On the **Server Groups** page, click **Create Server Group**.
    
5.  In the **Create Server Group** dialog box, configure the following parameters and click **Create**.
    

### Basic settings

**Parameter**

**Description**

**Server Group Name**

Enter a name for the server group.

**Server Group Type**

Select a type:

-   **Server Type**: Supports ECS, ENI, and ECI instances as backend servers.
-   **IP**: Supports private IP addresses as backend servers.

**VPC**

Select the VPC for the server group.

**Backend Server Protocol**

Select a protocol:

-   **TCP**: Associates with TCP and TCP/SSL listeners.
-   **UDP**: Associates with UDP listeners.

**Scheduling Algorithm**

Select a [scheduling algorithm](/help/en/slb/product-overview/introduction-to-load-balancing-scheduling-algorithm):

-   **Round-Robin**: Distributes requests to backend servers in sequence.
-   **Weighted Round-Robin** (default): Distributes more requests to servers with higher weights.
-   **Source IP Hashing**: Uses consistent hashing on source IP addresses. Requests from the same source IP are routed to the same server.
-   **Four-Element Hashing**: Uses consistent hashing on four-tuples (source IP, destination IP, source port, destination port). Packets from the same stream are routed to the same server.
-   **QUIC ID Hashing**: Uses consistent hashing on QUIC IDs. Available only when the backend protocol is UDP. Based on [draft-ietf-quic-transport-10](https://datatracker.ietf.org/doc/draft-ietf-quic-transport/10/). Compatibility is not guaranteed for all QUIC versions -- test before using in production.
-   **Weighted Least Connections**: Routes requests based on both weight and active connection count. Among servers with the same weight, the server with the fewest active connections receives more requests.

**Select Resource Group**

Select a resource group.

**Tags**

Set a **Tag Key** and **Tag Value**.

### IP version settings

**Parameter**

**Description**

**IP Protocol Version**

Select an IP version:

-   **IPv4** (default): Only IPv4 backend targets can be added.
-   **IPv4/v6 Dual-stack**: Both IPv4 and IPv6 backend targets can be added. IPv6 must be enabled on the VPC.

**IP Version Affinity Mode**

Available only when **IP Protocol Version** is **IPv4/v6 Dual-stack**:

-   **No Affinity** (default): Forwards requests to healthy backend servers based on the scheduling algorithm, regardless of IP version.
-   **Affinity**: Forwards IPv4 requests only to IPv4 servers and IPv6 requests only to IPv6 servers. Make sure the server group contains both healthy IPv4 and IPv6 targets.

### Advanced settings

**Parameter**

**Description**

**Connection Draining**

Disabled by default. When enabled, set a **Connection Draining Timeout** (0--900 seconds). A value of 0 interrupts connections immediately.

-   **Disabled**: Existing connections are not actively interrupted. They close when the client disconnects or the persistent connection session expires.
-   **Enabled**: Existing connections continue transmitting for the timeout period, then are actively interrupted. This allows in-flight requests to complete before the server is fully removed.

**Client IP Preservation**

When enabled, backend servers can retrieve client source IP addresses directly. When disabled, backend servers see the NLB instance as the client. Enable Proxy Protocol on the listener to retrieve source IPs.  
  

**Note**

For IP-type server groups, client source IP addresses are not automatically carried even when this feature is enabled. Enable Proxy Protocol on the listener to retrieve source IPs.

  
  

**Full Port Forwarding**

When enabled, NLB forwards traffic to backend servers based on the frontend request port. No port configuration is needed when adding backend servers.  
  

**Note**

If the listener has the **All Ports** feature enabled, enable this feature for the server group.

  
  

### Health check settings

Enable or disable health checks. If enabled, click **Modify** to configure the following parameters.

**Parameter**

**Description**

**Health Check Protocol**

-   **TCP** (default): Sends SYN handshake packets to check whether the server port is active.
-   **HTTP**: Sends HEAD or GET requests to check application health.
-   **UDP**: Sends ICMP Echo Request and UDP probe packets. Available only when the backend protocol is UDP.

**Health Check Method**

HTTP only. Select **GET** or **HEAD**:

-   **GET**: Responses larger than 8 KB are truncated, which does not affect the health check result.
-   **HEAD** (default for HTTP): Make sure backend servers support HEAD requests. If they do not, switch to GET.

**Health Check Protocol Version**

HTTP only. Select **HTTP1.0** (default) or **HTTP1.1**. Match the version that the backend server supports. If the backend supports both, either version works.

**Health Check Port**

-   **Backend Server Port** (default): Uses the backend server port.
-   **Custom Port**: Specify a port. Required when full port forwarding is enabled.

**Health Check Path**

HTTP only. Enter the URL path for health checks.

**Health Check Domain Name**

HTTP only.

-   **Backend Server Internal IP** (default): Uses the private IP of the backend server.
-   **Custom Domain Name**: Enter a domain name.

**Health Check Status Codes**

HTTP only. Select the status codes that indicate a successful health check: **http\_2xx** (default), **http\_3xx**, **http\_4xx**, **http\_5xx**.

**Custom Request/Response**

UDP only. Enter a custom request string (for example, `youraccountID`) in the **Custom Request** field and the expected response (for example, `slb123`) in the **Custom Response** field. The backend application must implement matching acknowledgment logic: when it receives the request content, it returns the expected response. If the expected response is received, the health check succeeds.

**Response Timeout Period**

Maximum wait time for a health check response. If no response is returned within this period, the health check fails.

**Health Check Interval**

Time between consecutive health checks. For UDP health checks, set the interval to be greater than or equal to the response timeout period.

**Healthy Threshold**

Number of consecutive successful health checks required to mark a server as healthy.

**Unhealthy Threshold**

Number of consecutive failed health checks required to mark a server as unhealthy.

## Add backend servers to a Server Type group

Add ECS instances, ENIs, or ECI instances as backend servers to handle forwarded traffic.

> The same instance cannot be attached to a server group that has full port forwarding enabled more than once.

1.  On the **Server Groups** page, find the target server group and open the backend server list using either method:
    
    -   In the **Actions** column, click **Modify Backend Server**.
        
    -   Click the server group ID, then click the **Backend Servers** tab on the details page.
        
2.  On the **Backend Servers** tab, click **Add Backend Server**.
    
3.  In the **Add Backend Server** panel, select a **Server Type** and click **Next**: **Dual-stack IP address policy**: If the server group IP protocol version is **IPv4/v6 Dual-stack**, click the settings icon next to the **IP Address** table header and select a policy:
    
    -   **Prefer IPv4**: Selects the primary IPv4 address.
        
    -   **Prefer IPv6**: Selects the first available IPv6 address.
        
    -   **Dual-stack**: Selects both the primary IPv4 address and the first available IPv6 address.
        
    
    > This sets the default NIC address. You can still adjust the address manually in the IP address column.
    
4.  Configure the port and weight for each server, then click **OK**. The default weight is 100. Servers with higher weights receive more requests. **Bulk operations**: Hover over the bulk operation icon to modify weights and ports for multiple servers:
    
    -   **Replicate to Below**: Applies the current server's value to all servers below it.
        
    -   **Replicate to Above**: Applies the current server's value to all servers above it.
        
    -   **Replicate to All**: Applies the current server's value to all servers in the group.
        
    -   **Reset**: In the **Weight** column, resets all weights to the default. In the **Port** column, clears all port numbers.
        
    
    > If full port forwarding is enabled, skip the port configuration. NLB routes traffic based on the frontend request port.
    
    **Warning**
    
    Setting the weight to 0 stops the server from receiving new requests.
    

## Add backend servers to an IP type group

Add private IP addresses as backend servers. Each IP address supports multiple ports and weights.

> The same IP address cannot be added to a server group that has full port forwarding enabled more than once.

**Important**

NLB and ALB virtual IP addresses (VIPs) in the same VPC cannot be added as backend servers. Only private IP addresses are supported.

1.  On the **Server Groups** page, find the target server group and navigate to the backend server list:
    
    -   In the **Actions** column, click **Modify Backend Server**.
        
    -   Click the server group ID.
        
2.  On the **Backend Servers** tab, click **Add IP Address**.
    
3.  On the **Select Servers** tab, enter an IP address and click **Next**.
    
4.  On the **Ports/Weights** tab, configure the port and weight, then click **OK**. The default weight is 100. Servers with higher weights receive more requests. **Bulk operations**: The same bulk operations (**Replicate to Below**, **Replicate to Above**, **Replicate to All**, **Reset**) are available as described in the Server Type section above.
    
    > If full port forwarding is enabled, skip the port configuration. NLB routes traffic based on the frontend request port.
    
    **Warning**
    
    Setting the weight to 0 stops the server from receiving new requests.
    

## Modify server group settings

On the **Server Groups** page, find the target server group and click **Modify Basic Information**. The following parameters can be modified:

-   **Scheduling Algorithm**
    
-   **IP Version Affinity Mode** (available only when **IP Protocol Version** is **IPv4/v6 Dual-stack**)
    
-   **Connection Draining**
    
-   **Client IP Preservation**
    

## Modify health check settings

On the **Server Groups** page, find the target server group and click **Modify Health Check Settings**.

**Warning**

Disabling health checks prevents NLB from detecting failed backend servers. Traffic is not automatically rerouted to healthy servers. Increasing the health check interval delays failure detection.

## Remove a backend server

**Warning**

Directly removing a backend server may cause service interruptions. Set the weight to 0 first so the server stops receiving new requests, then remove it from the server group.

1.  On the **Server Groups** page, click the target server group ID.
    
2.  Click the **Backend Servers** tab, find the target server, and click **Remove**.
    
3.  Click **OK**.
    

## Delete a server group

A server group can only be deleted if it is not associated with any listener forwarding rules. Deleting a server group does not affect the backend servers. Stop or release ECS, ENI, or ECI instances separately if no longer needed.

On the **Server Groups** page, find the target server group and choose **More** > **Delete** in the **Actions** column, then click **OK**.

## API reference

-   [CreateServerGroup](/help/en/slb/api-createservergroup-nlb#doc-api-Nlb-CreateServerGroup): Create a server group.
    
-   [DeleteServerGroup](/help/en/slb/api-deleteservergroup-nlb#doc-api-Nlb-DeleteServerGroup): Delete a server group.
    
-   [AddServersToServerGroup](/help/en/slb/api-addserverstoservergroup-nlb#doc-api-Nlb-AddServersToServerGroup): Add backend servers to a server group.
    
-   [RemoveServersFromServerGroup](/help/en/slb/api-removeserversfromservergroup-nlb#doc-api-Nlb-RemoveServersFromServerGroup): Remove backend servers from a server group.
    
-   [UpdateServerGroupAttribute](/help/en/slb/api-updateservergroupattribute-nlb#doc-api-Nlb-UpdateServerGroupAttribute): Update server group configurations.
