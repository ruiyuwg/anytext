This topic provides an overview of listeners. After you create a Classic Load Balancer (CLB) instance, you must configure at least one listener for the CLB instance. Listeners define how requests are forwarded to backend servers. Listeners listen for connection requests and forward the requests to backend servers based on the scheduling algorithms specified in forwarding rules. CLB listeners support the following protocols: TCP, UDP, HTTP, and HTTPS.

## **Supported listener types and use scenarios**

CLB supports Layer 4 and Layer 7 listeners. Layer 4 listeners use the TCP or UDP protocol, and Layer 7 listeners use the HTTP or HTTPS protocol. Choose a type of listener based on your business requirements.

**Type**

**Protocol**

**Description**

**Scenario**

Layer 4 listener

TCP

-   TCP is a connection-oriented protocol that requires a logical connection to be established before data can be transmitted.
    
-   TCP supports reliable data transmission but a relatively lower transmission speed.
    

-   Scenarios that require high data consistency and data integrity but can tolerate a relatively lower transmission speed, such as file transmission, email services, and remote logon.
    
-   Web applications that do not have custom requirements.
    

For more information, see [Add a TCP listener](/help/en/slb/classic-load-balancer/user-guide/add-a-tcp-listener#task-1563673).

UDP

-   UDP supports direct data transmission without three-way handshakes or connections. However, UDP does not support error correction or retransmission.
    
-   UDP supports quicker data transmission and relatively lower reliability.
    

Scenarios that require high time efficiency but can tolerate relatively lower reliability, such as video conferencing and real-time push of financial news and information.

For more information, see [Add a UDP listener](/help/en/slb/classic-load-balancer/user-guide/add-a-udp-listener#task-1563673).

Layer 7 listener

HTTP

-   HTTP is an application-layer protocol that is used to package data.
    
-   HTTP supports cookie-based session persistence.
    
-   HTTP uses the X-Forwarded-For header to preserve client IP addresses.
    

Applications that need to identify data content, such as web applications and small-sized mobile games.

For more information, see [Add an HTTP listener](/help/en/slb/classic-load-balancer/user-guide/add-an-http-listener-1#task-1563673).

HTTPS

-   HTTPS encrypts data transmission to prevent unauthorized access.
    
-   HTTPS supports centralized certificate management. You can upload certificates to CLB. Then, data decryption is offloaded from backend servers to CLB.
    

HTTP applications that require encrypted transmission.

For more information, see [Add an HTTPS listener](/help/en/slb/classic-load-balancer/user-guide/add-an-https-listener-1#task-1563673).

## **Port configuration limitations**

**Port**

**Description**

**Limitations**

Listener port (front-end port)

Used by CLB to receive client requests.

For a CLB instance:

-   The ports used by all TCP, HTTP, and HTTPS listeners cannot duplicate with each other.
    
    For example, if you have created a listener listening on port 80, you cannot create any other TCP, HTTP, or HTTPS listeners using port 80.
    
-   UDP listeners can use the same ports as TCP, HTTP, and HTTPS listeners.
    
    For example, If you have created a UDP listener that listens on port 81, you can still create a TCP, HTTP, or HTTPS listener that listens on port 81.
    

Server port (banckend port)

The port on which backend servers provide services.

For a CLB instance:

-   If the default server group is associated with a listener, the listener port can only forward requests to the same port on backend servers.
    
-   If a vServer group or primary/secondary serve group is associated with a listener, the listener port can forward requests to various ports on backend servers.
    
-   Listeners that use different protocols can forward requests to the same port on backend servers. For example, both a TCP listener listening on port 80 and an HTTP listener listening on port 81 can forward requests to the same port on a backend server.
    

**Note**

-   HTTP and HTTPS listeners do not support primary/secondary server groups.
    
-   Up to two backend servers can be added to a primary/secondary server group.
    

## **Feature comparison for listeners**

**Feature**

**Layer 4 listener**

**Layer 7 listener**

**TCP listener**

**UDP listener**

**HTTP listener**

**HTTPS listener**

**Backend protocol**

TCP

UDP

HTTP

HTTP

**Scheduling algorithm**

-   Weighted Round Robin (WRR)
    
-   Round Robin (RR)
    
-   Consistent Hashing (CH)
    

-   Weighted Round Robin (WRR)
    
-   Round Robin (RR)
    
-   Consistent Hashing (CH)
    

-   Weighted Round Robin (WRR)
    
-   Round Robin (RR)
    

-   Weighted Round Robin (WRR)
    
-   Round Robin (RR)
    

**Certificate**

Not involved. If you want to use SSL certificates, deploy them on backend servers.

Not involved

Not involved

[Add certificates](/help/en/slb/classic-load-balancer/user-guide/create-certificate) to CLB.

**Assess logs**

Not supported

Not supported

Supported

Supported

**Second-level monitoring**

Supported

Supported

Not supported

Not supported

**Primary/secondary server group**

Supported

Supported

Not supported

Not supported

**Forwarding rule**

Not supported. Configure forwarding rules on backend servers if needed.

Supported. [Configure forwarding rules](/help/en/slb/classic-load-balancer/use-cases/forward-requests-from-the-same-domain-name-but-different-urls) for listeners.

**Note**

Specific regions do not support Layer 7 listeners. For details, see [Regions in which CLB is available](/help/en/slb/classic-load-balancer/product-overview/regions-that-support-clb).

## **CLB listeners share the instance bandwidth**

The bandwidth that a CLB instance can use is limited. If you have services of varying importance deployed on your backend servers, you can set an exclusive bandwidth for your core service and configure the other services to share the remaining network capacity. This approach improves the stability and availability of your key business. CLB supports sharing the bandwidth of an instance among its listeners.

### **How it works**

Assume you have a CLB instance with a 10 Mbit/s bandwidth. Listeners A, B, and C are created on it. If you set an exclusive bandwidth of 4 Mbit/s for listener A, the bandwidth usage of the three listeners are as follows:

-   The maximum bandwidth that listener A can use is always 4 Mbit/s, regardless of the traffic volume received by listeners B and C.
    
-   Listeners B and C share the remaining 6 Mbit/s bandwidth (10 Mbit/s - 4 Mbit/s).
    
    -   If no traffic comes to listener B, listener C can use a maximum of 6 Mbit/s bandwidth. The same applies to listener B if no traffic reaches listener C.
        
    -   If both listeners B and C receive traffic, the 6 Mbit/s bandwidth is distributed between them based on the proportion of their traffic volumes. For example, if they receive the same amount of traffic, each can use roughly 3 Mbit/s of bandwidth.
        
    -   If either listener B or C uses up the 6 Mbit/s bandwidth, the other cannot receive any requests, resulting in packets losses on that listener.
        
-   For all three listeners, as long as the traffic received does not exceed the allocated bandwidth, no packet loss will occur. Once the traffic exceeds the allocated bandwidth, packet losses will occur.
    

**Note**

If your CLB service cannot reach the maximum bandwidth you specified when purchasing the instance, refer to [Why do connections fail to reach the maximum bandwidth in some scenarios?](/help/en/slb/classic-load-balancer/user-guide/faq-about-clb#section-h0g-d1x-w78)

### **Enable bandwidth throttling for a listener**

When creating a listener for a CLB instance, in the **Protocol & Listener** step, you can click **Modify** next to **Advanced Settings**, and enable **Bandwidth Throttling for Listeners**.

-   If you enable this feature, specify an exclusive bandwidth for the current listener. Note that this exclusive bandwidth must be equal to or less than the maximum bandwidth of the CLB instance minus the bandwidth allocated to all the other listeners, as prompted on the page.
    
    **Note**
    
    After enabling an exclusive bandwidth for a listener, all forwarding policies configured for the listener share this exclusive bandwidth.
    
-   If you disable this feature, all listeners without an exclusive bandwidth, including the current listener, share the remaining bandwidth of the CLB instance (maximum bandwidth of the CLB instance minus the bandwidth allocated to specific listeners).
    

## **References**

CLB supports basic load balancing at Layer 4 and Layer 7. CLB listeners support the TCP and UDP protocols at Layer 4, and HTTP and HTTPS at Layer 7.

Alibaba Cloud has released a next-generation Layer 7 load balancer Application Load Balancer (ALB), and a next-generation Layer 4 load balancer Network Load Balancer (NLB). The next-generation load balancers support higher performance than CLB. ALB supports load balancing at Layer 7, advanced forwarding rules, and the QUIC protocol. NLB supports higher performance than CLB, and supports automatic scaling. We recommend that you use ALB and NLB.

-   For more information about the Server Load Balancer (SLB) family, see [What is SLB?](/help/en/slb/product-overview/slb-overview)
    
-   For more information about ALB and NLB, see [What is ALB?](/help/en/slb/application-load-balancer/product-overview/what-is-alb/) and [What is NLB?](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/)
