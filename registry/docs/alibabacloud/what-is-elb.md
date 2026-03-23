Edge Load Balancer (ELB) receives requests from clients and distributes incoming traffic across a group of backend Edge Node Service (ENS) instances to increase the throughput of applications. You can use ELB to prevent service interruptions that are caused by single points of failure (SPOFs) and improve the availability of your applications.

## **ELB components**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1604279471/CAEQJxiBgMCznNmYgBkiIGFjZDE5ZTQzNDJjNDRjZDA4MzFjMmNmYTc2YWI3NmZm4076879_20231113071208.123.svg)

The following table describes the components of ELB.

**Component**

**Description**

**Instance**

An ELB instance provides load balancing by distributing incoming traffic across backend servers. To get started with ELB, you must create an ELB instance and add at least one listener and two ENS instances to the ELB instance.

**Listener**

Listeners listen for client requests and forward the requests to backend servers. Listeners also perform health checks on backend servers.

**Backend server**

Backend servers are used to receive frontend requests.

**Note**

ELB instances are internal-facing. If you want an ELB instance to route requests over the Internet, you can associate an elastic IP address (EIP) with the ELB instance. For more information, see [Associate an EIP](/help/en/ens/associate-an-eip).

## Benefits

-   **Scalability:** You can use ELB as traffic ingress points for web servers and application servers. This allows you to improve the performance of your service system by adding or removing ENS instances based on your workloads.
    
-   **High concurrency:** If a single ENS instance cannot meet processing requirements, you can configure ELB listening rules to distribute traffic across different ENS instances.
    
-   **High availability:** Disaster recovery is supported to eliminate SPOFs and ensure continuous service availability. You can use the session persistence feature to forward requests from the same client to the same backend ENS instance to improve access efficiency.
    
-   **Multi-protocol support:** ELB supports TCP and UDP at Layer 4 and HTTP and HTTPS at Layer 7. You can use ELB to provide fast and secure connections to applications such as real-time audio and video applications, interactive streaming applications, and online game applications.
    

## Instance types and pricing

An ELB instance has the following metrics. The metric values vary based on the instance type.

-   Maximum number of connections: the maximum number of connections that an instance can support. When the number of connections exceeds the upper limit, new connection requests are discarded.
    
-   Connections per second (CPS): the maximum number of new connections per second. When the number of new connections per second exceeds the upper limit, new connection requests are discarded.
    
-   Queries per second (QPS): the number of HTTP or HTTPS queries (requests) that can be completed per second. When the actual number reaches the upper limit, new connection requests are discarded.
    

**Type**

**Maximum number of connections**

**CPS**

**QPS**

**Unit price (USD/month)**

Small I (elb.s1.small)

5000

2000

800

7.5

Medium I (elb.s2.small)

50000

4000

3000

26

Medium II (elb.s2.medium)

100000

8000

6000

52

Large I (elb.s3.small)

200000

16000

12000

104

Large II (elb.s3.medium)

500000

40000

18000

166

## **Billing**

-   If you associate an EIP with an ELB instance, you are charged the Internet traffic fee by the EIP. For more information, see [Billing](/help/en/ens/what-is-an-edge-eip#0f827ee02a1fs).
    
-   You are charged for ELB based on the instance type. The following table describes the billing of ELB.
    

**Item**

**Description**

Billing method

Pay-as-you-go

Billing cycle

Monthly

Billing rules

-   You are charged the sum of the fees for all ELB instances configured in the current month.
    
-   Fee of an ELB = Unit price × Effective factor.
    
    **Note**
    
    -   Effective days: the number of days from the day when an ELB instance is created to the day when the ELB instance is released or to the end of the month if the ELB instance is not released in the month. Examples:
        
        -   Example 1: If an ELB instance is created on June 5, 2024 and is released on June 25, 2024, the number of effective days in June 2024 is 21.
            
        -   Example 2: If an ELB instance is created on June 5, 2024 and is used till the end of the month, the number of effective days in June 2024 is 26.
            
    -   Effective factor = Effective days/Total number of days in the current month. For example, the total number of days in June 2024 is 30. If a bill for June 2024 contains 26 valid days, the effective factor is 26/30 = 0.86666667.
        
    

**Example:**

-   Scenario: A user creates an ELB instance of the Medium I (elb.s2.small) type on June 5, 2024. The instance is used till the end of June 2024. The number of effective days for the instance in June 2024 is 26.
    
-   Billing:
    
    -   Effective factor: 26/30 = 0.86666667.
        
    -   Unit price: USD 26/month for Medium I (elb.s2.small) instances.
        
    -   Fee of the instance in June: 26 × 0.86666667 = USD 22.53.
