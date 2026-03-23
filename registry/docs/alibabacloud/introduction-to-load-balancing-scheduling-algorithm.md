Server Load Balancer (SLB) distributes requests to backend servers based on the scheduling algorithms specified in forwarding rules. To improve load balancing performance in different scenarios, SLB supports multiple scheduling algorithms, including round-robin, weighted round-robin, weighted least connections, and consistent hashing.

This topic describes the scheduling algorithms that are supported by SLB. The scheduling algorithms supported by Application Load Balancer (ALB), Classic Load Balancer (CLB), and Network Load Balancer (NLB) are different.

-   ALB supports weighted round-robin, weighted least connections, and consistent hashing based on source IP addresses and URLs.
    
-   NLB supports round-robin, weighted round-robin, weighted least connections, and consistent hashing based on source IP addresses, the combination of four elements, and QUIC IDs.
    
-   CLB supports round-robin, weighted round-robin, and consistent hashing based on source IP addresses, the combination of four elements, and QUIC IDs.
    

## **Round-robin**

### **Overview**

The round-robin algorithm specifies that requests are distributed to backend servers in sequence. Round-robin is commonly applied to non-consistent connections, such as HTTP connections.

For example, if two Elastic Compute Service (ECS) instances are in a backend server group, requests are evenly distributed to the ECS instances in sequence.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9318561071/p728408.png)

### **Advantages**

1.  Easy scheduling: Round-robin is a basic scheduling algorithm for load balancing. It is easy to understand and easy to manage.
    
2.  High performance: Round-robin can evenly distribute requests to backend servers to balance loads among the backend servers.
    

### **Disadvantages**

1.  Servers are required to maintain a small performance gap. Round-robin cannot determine the real-time loads on backend servers. If the performance of the servers varies greatly, some of the servers may be overloaded and some may be underloaded.
    
2.  Connections may be occupied for a long period of time. Round-robin cannot predict the period of time that a connection is to be occupied. If a connection remains open for a long period of time, the waiting time of other connections increases.
    

### **Use scenarios**

1.  Servers with a small performance gap: If the performance gap among servers is small, round-robin can balance loads with high efficiency by evenly distributing requests to the servers.
    
2.  Simple scheduling: Round-robin is ideal for scenarios that do not require real-time load detection or short connection time.
    

## **Weighted round-robin**

### **Overview**

The weighted round-robin algorithm is developed based on the round-robin algorithm but takes into account the weights of servers. It is more efficient because it distributes requests based on server weights. Backend servers that have higher weights receive more requests than backend servers that have lower weights. Weighted round-robin is ideal for non-consistent connections, such as HTTP connections.

For example, two ECS instances are in a backend server group and the weights of the ECS instances are 60 and 40. In this case, 60% of requests are distributed to the ECS instance whose weight is 60, and 40% of requests are distributed to the ECS instance whose weight is 40.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9318561071/p728419.png)

### **Advantages**

1.  Flexibility: Weighted round-robin distributes requests based on server weights and capacities. More requests are distributed to servers with higher capacities.
    
2.  Load balancing: Weighted round-robin takes into account the weight of each server while balancing loads among servers.
    

### **Disadvantages**

1.  Complex configurations: Weighted round-robin requires you to specify a weight for each backend server. If you have a large number of backend servers or your services require frequent adjustments, the configuration and O&M work is time-consuming.
    
2.  Proper weight settings: If you specify improper weights for your servers, the loads on the servers may be imbalanced. You may need to frequently adjust server weights.
    

### **Use scenarios**

1.  Servers with a performance gap: If your servers have a large performance gap, you can specify server weights to balance loads among the servers. Servers with higher performance can receive more requests.
    
2.  Dynamic scheduling: If the performance or loads of your servers fluctuate, you can dynamically adjust the weights of the servers to withstand loads.
    
3.  Finer-grained scheduling: If you want to distribute requests to your servers based on a finer granularity, you can set a weight for each server to specify the percentage of requests to be distributed to each server.
    

## **Weighted least connections**

### **Overview**

The weighted least connections algorithm distributes requests based on server weights and takes into account the number of connections between SLB and backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests. The weighted least connections algorithm is ideal for consistent connections, such as database connections.

For example, two ECS instances are in a backend server group and the weights are both 100. If the number of connections on one ECS instance is 100 and on the other ECS instance is 50, requests are preferentially distributed to the ECS instance that has fewer connections.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9318561071/p728426.png)

### **Advantages**

1.  Dynamic adjustment: Weighted least connections can dynamically adjust request scheduling based on the number of connections in real time and server weights. Requests are distributed to the server that has the least connections.
    
2.  High performance of load balancing: The weighted least connections algorithm takes into account the number of connections and weight of each server. It fairly distributes requests to servers to prevent overloading or underloading situations.
    

### **Disadvantages**

1.  Complex calculation: Compared with round-robin and weighted round-robin, the weighted least connections algorithm performs more complex calculations to compare the number of connections between SLB and backend servers in real time before a server is selected.
    
2.  Dependency on server connections: The weighted least connections algorithm distributes requests based on the number of connections between SLB and backend servers. If the monitoring data is inaccurate or outdated, requests may not be distributed to the server with the least connections. In addition, the weighted least connections algorithm can obtain only the number of connections between SLB and backend servers. It cannot obtain the total number of connections on a server. If a server is added to multiple SLB instances, the server may be overloaded or underloaded.
    
3.  Load spikes due to new backend servers: If new backend servers are added to an SLB instance when the number of existing connections is large, new connections may be scheduled to the new backend servers. As a result, the new backend servers may be overloaded and system stability is compromised.
    

### **Use scenarios**

1.  Servers with a large performance gap: If your servers have a large performance gap, you can use the weighted least connections algorithm and specify server weights to balance loads among your servers. Servers with higher performance receive more requests.
    
2.  Dynamic scheduling: If the number of connections and loads on servers change, the weighted least connection algorithm can dynamically adjust request scheduling based on the number of connections in real time to balance loads among servers.
    
3.  High requirements for stability: If you require real-time responses and high system stability, you can use the weighted least connection algorithm to reduce server loads and improve system stability and reliability.
    

## **Consistent hashing**

### **Overview**

The consistent hashing algorithm evenly distributes requests among backend servers based on hash factors even if the number of backend servers changes. Requests with the same hash value are distributed to the same backend server.

Hash factors include:

-   Source IP address: hashing based on source IP addresses. Requests with the same source IP address are distributed to the same backend server.
    
-   Four elements: hashing based on source IP addresses, source ports, destination IP addresses, and destination ports. Requests with the same four elements are distributed to the same backend server.
    
-   QUIC ID: hashing based on QUIC IDs. QUIC IDs are the unique identifier of QUIC connections. Hashing based on QUIC IDs can balance loads among connections. Requests with the same QUIC ID are distributed to the same backend server.
    
-   URL query string: hashing based on URL query strings. Requests with the same URL query string are distributed to the same backend server.
    

For example, two ECS instances are in a server group, and the last request was distributed to ECS01. If the current request has the same hash value as the last request, the current request is also distributed to ECS01.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9318561071/p728427.png)

### **Advantages**

1.  Session persistence: Consistent hashing ensures that requests with the same hash value are distributed to the same backend server to maintain session persistence. The consistent hashing algorithm is preferred if you need to maintain session persistence or preserve use status.
    
2.  Load balancing: Consistent hashing is more efficient because requests with the same hash value can be distributed to the same backend server. This balances loads among backend servers with high efficiency.
    

### **Disadvantages**

1.  Imbalanced scheduling due to server changes: Consistent hashing prioritizes request consistency if servers are added or removed. If servers are changed, some requests are rescheduled. If the number of backend servers increases, fewer requests are rescheduled. If the number of backend servers decreases, requests are also rescheduled. Loads among servers may be imbalanced.
    
2.  Increased complexity for scale-outs: Consistent hashing calculates the hash values of requests based on hash factors. If servers are added or removed, some requests may be rescheduled. This increases the complexity of server scale-out activities.
    

### **Use scenarios**

1.  Session persistent: If your applications need to maintain session persistence or preserve user status, you can use consistent hashing to distribute requests with the same hash value to the same backend server.
    
2.  High-performance load balancing: In scenarios that have high requirements for load balancing, consistent hashing can distribute requests to balance loads among servers.
    
3.  Data consistency: In scenarios that require data consistency, consistent hashing can maintain data consistency by distributing requests with the same hash value to the same backend server.
    

**Note**

-   Hashing based on QUIC IDs applies only to QUIC applications. QUIC is being rapidly upgraded. Compatibility with QUIC versions cannot be guaranteed. We recommend that you fully test your applications before you apply QUIC to the production environment.
    
-   NLB and CLB support hashing based on QUIC IDs. Q10 and Q29 are supported.
    

## **References**

For more information about ALB, NLB, and CLB, see the following topics:

-   [What is SLB?](/help/en/slb/product-overview/slb-overview)
    
-   [What is ALB?](/help/en/slb/application-load-balancer/product-overview/what-is-alb/)
    
-   [What is NLB?](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/)
    
-   [What is CLB?](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/)
