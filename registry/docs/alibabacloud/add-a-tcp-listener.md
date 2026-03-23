If your services are sensitive to reliability, data consistency, and data integrity but can tolerate a relatively low transmission speed, such as file transmission, email services, and remote logon, you can add a TCP listener to your Classic Load Balancer (CLB) instance. The TCP listener can forward TCP requests to backend servers.

## **Prerequisites**

A CLB instance is created. For more information, see [Create and manage CLB instances](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#task-ctx-xsm-vdb).

## **Procedure**

### **Step 1: Add a TCP listener**

1.  Log on to the [CLB console](https://slb.console.alibabacloud.com/slb).
    
2.  Select the region where the CLB instance is deployed.
    
3.  Use one of the following methods to open the listener configuration wizard:
    
    -   On the **Instances** page, find the CLB instance that you want to manage and click **Configure Listener** in the **Actions** column.
        
    -   On the **Instances** page, find the CLB instance that you want to manage and click the ID of the instance. On the instance details page, click the **Listener** tab and click **Add Listener**.
        
    
4.  In the **Protocol & Listener** step, configure the following parameters and click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Listener Protocol**
    
    Select **TCP**.
    
    **Backend Protocol**
    
    If Listener Protocol is set to **TCP**, set **Backend Protocol** to **TCP**.
    
    **Listener Port**
    
    Specify the listener port that is used to receive and forward requests to backend servers. Valid values: 1 to 65535.
    
    **Tag**
    
    Select or enter a **tag key** and a **tag value**.
    
    **Advanced Settings**
    
    Click **Modify** to configure advanced settings.
    
    **Scheduling Algorithm**
    
    Select a scheduling algorithm. **Round Robin (RR)** is selected by default.
    
    -   **Weighted Round-robin (WRR)**: Backend servers that have higher weights receive more requests than backend servers that have lower weights.
        
    -   **Round Robin (RR)**: Requests are sequentially distributed to backend servers.
        
    -   **Consistent Hashing (CH)**:
        
        -   **Four-element**: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same four factors are distributed to the same backend server.
            
        -   **Source IP**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
            
        
        **Note**
        
        -   Only high-performance CLB instances support consistent hashing.
            
        -   TCP listeners whose scheduling algorithm is **Weighted Round Robin (WRR)** or **Round Robin (RR)** cannot be changed to use **Consistent Hashing (CH)**. You need to create a new TCP listener and set its scheduling algorithm to **Consistent Hashing (CH)**.
            
        
    
    **Session Persistence**
    
    Session persistence is disabled by default.
    
    After session persistence is enabled, the CLB instance forwards requests that are from the same client to the same backend server.
    
    For TCP listeners, session persistence is implemented based on IP addresses. Requests from the same IP address are forwarded to the same backend server.
    
    **Access Control**
    
    Access control is disabled by default.
    
    Select an access control method after you enable access control. Then, select an access control list (ACL) as the whitelist or blacklist of the listener.
    
    -   **Whitelist: Allows Specified IP Addresses to Access the SLB Instance.** Only requests from the IP addresses or CIDR blocks specified in the network ACL are forwarded. Whitelists apply to scenarios in which you want to allow access only from specific IP addresses. Your service may be adversely affected if the whitelist is not properly configured. After a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
        
        If a whitelist is configured for a listener but no IP address is added to the whitelist, the listener forwards all requests.
        
    -   **Blacklist: Forbids Specified IP Addresses to Access the SLB Instance.** Requests from the IP addresses or CIDR blocks specified in the network ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses.
        
        If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
        
    
    **Note**
    
    IPv6 instances can be associated only with IPv6 ACLs. IPv4 instances can be associated only with IPv4 ACLs. For more information, see [Create an ACL](/help/en/slb/classic-load-balancer/user-guide/overview-3#102c11b14761b).
    
    **Bandwidth Throttling**
    
    If the CLB instance is billed based on bandwidth usage, you can specify different maximum bandwidth values for different listeners. This limits the amount of traffic that can be forwarded by each listener. The sum of the maximum bandwidth of all listeners that are added to a CLB instance cannot exceed the maximum bandwidth of the CLB instance. By default, this feature is disabled and all listeners share the bandwidth of the CLB instance. For information about how CLB listeners share the bandwidth of the instance, see [Enable bandwidth sharing among listeners of a CLB instance](/help/en/slb/classic-load-balancer/user-guide/share-the-bandwidth-of-a-clb-instance).
    
    **Important**
    
    -   For example, the maximum bandwidth of an Internet-facing CLB instance is 5 Mbit/s, and you configure two listeners. You allocate 5 Mbit/s of bandwidth to Listener A, and do not allocate bandwidth to Listener B. In this case, Listener B is inaccessible. Exercise caution when you allocate bandwidth.
        
    -   If three listeners are configured for an internal-facing CLB instance, and the total bandwidth allocated to Listener A and Listener B is 5,120 Mbit/s, Listener C is inaccessible. Exercise caution when you allocate bandwidth.
        
    -   If a pay-by-data-transfer CLB instance is used, the bandwidth of listeners is unlimited by default.
        
    
    **Connection Timeout Period**
    
    Specify the longest time that a TCP connection between a CLB instance and the client can stay open when no data is transferred through the connection. Valid values: 10 – 900. Default value: 900.
    
    Within this timeout period, if there is no connection request, CLB closes the connection and establishes a new one when the next request arrives.
    
    **Note**
    
    This timeout period applies to all servers group associated with the listener. If you want to specify another timeout period for a specific backend server, create a separate listener for this backend server and set the timeout period that you want.
    
    **Proxy Protocol**
    
    Specify whether to use the Proxy protocol to pass client IP addresses to the backend servers. For more information, see [Enable Layer 4 listeners to preserve client IP addresses and pass them to backend servers](/help/en/slb/classic-load-balancer/use-cases/enable-proxy-protocol-for-a-layer-4-listener-to-retrieve-client-ip-addresses).
    
    **Important**
    
    -   You cannot use this feature if PrivateLink is used.
        
    -   The Proxy protocol can be used only when both the proxy server and backend servers support it. If backend servers do not support this protocol, do not directly enable this feature, as backend servers may fail to parse packets as expected, which affects the availability of backend services.
        
    
    **Obtain Client Source IP Address**
    
    Specify whether to preserve the IP addresses of clients. Only Layer 4 listeners support this feature. By default, this feature is enabled.
    
    **Automatically Enable Listener**
    
    Specify whether to immediately enable the listener after it is created. By default, listeners are enabled after they are created.
    

## Step 2: Add backend servers

After you configure the listener, you must add backend servers to process client requests. You can use the default server group that is configured for the CLB instance. You can also configure a vServer group or a primary/secondary server group. For more information, see [CLB server groups](/help/en/slb/classic-load-balancer/user-guide/backend-server-overview#concept-wwc-l4n-vdb). In this example, the default server group is used.

1.  In the **Backend Servers** step, select **Default Server Group** and click **Add More**.
    
2.  In the **Servers** step, select the backend servers that you want to add and click **Next**.
    
3.  In the **Ports/Weights** step, configure the weights of the backend servers.
    
    **Note**
    
    -   The default weight is 100. Backend servers with a higher weight receive more requests.
        
    -   If the weight of a backend server is set to 0, no request is distributed to the backend server.
        
    
4.  Click **Add**. Specify the port that is used by the backend server to receive requests. Valid values: 1 to 65535.
    
    You can specify the same port for backend servers that are added to the same CLB instance.
    

## Step 3: Configure health checks

CLB checks the availability of backend servers by performing health checks. The health check feature improves overall service availability and reduces the impact of backend server failures.

**Note**

You cannot disable health checks for a listener that is associated with a primary/secondary server group.

1.  **Optional:** In the **Health Check** step, click **Modify** to modify the health check configuration and click **Next**. For more information, see [Configure and manage CLB health checks](/help/en/slb/classic-load-balancer/user-guide/configure-and-manage-health-checks#task-1580791).
    
2.  In the **Confirm** step, check the configurations of the listener. You can click **Modify** to modify the configurations.
    
3.  Confirm the configurations and click **Submit**. In the **Configuration Successful** message, click **OK**.
    
    After you configure the listener, you can view the listener on the **Listener** tab.
    

## **FAQs**

### **I have configured a CLB instance and listeners to check for requests over the TCP protocol. How can I configure domain name resolution to route client requests to CLB?**

Resolve the domain name of your service to the IP address of your CLB instance. For detailed instructions, see [Use an A record to resolve a domain name to an IP address](/help/en/slb/classic-load-balancer/getting-started/use-an-a-record-to-resolve-a-domain-name-to-an-ip-address).

## References

-   For more information about backend server groups, see the following topics:
    
    -   [Default server group](/help/en/slb/classic-load-balancer/user-guide/add-an-ecs-instance-to-the-default-server-group#task-1597070)
        
    -   [Create and manage a vServer group](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-a-vserver-group#task-1597080)
        
    -   [Primary/Secondary server groups](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-a-primary-or-secondary-server-group#task-1597516)
        
-   For more information about health checks, see [CLB health checks](/help/en/slb/classic-load-balancer/user-guide/health-check-overview/). For more information about health check parameters, see [Configure and manage CLB health checks](/help/en/slb/classic-load-balancer/user-guide/configure-and-manage-health-checks#task-1580791).
    
-   For more information about troubleshooting, see [FAQ about CLB listeners](/help/en/slb/classic-load-balancer/user-guide/faq-about-clb).
    
-   For more information about scheduling algorithms, see [SLB scheduling algorithms](/help/en/slb/product-overview/introduction-to-load-balancing-scheduling-algorithm).
    
-   For more information about how to allow backend servers to obtain client IP addresses from CLB, see [Enable Layer 4 listeners to preserve client IP addresses and pass them to backend servers](/help/en/slb/classic-load-balancer/use-cases/enable-proxy-protocol-for-a-layer-4-listener-to-retrieve-client-ip-addresses).
