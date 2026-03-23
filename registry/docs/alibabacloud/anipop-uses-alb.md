Anipop is a popular single-player game in China. It often experiences traffic surges and needs to cater to large numbers of concurrent connections. To better distribute traffic, Anipop uses Application Load Balancer (ALB) to forward traffic. ALB provides scalable, on-demand services that are ideal for scenarios with unpredictable traffic surges and large numbers of concurrent connections. This topic describes the pain points encountered by Anipop and the corresponding ALB solution. This topic also describes the architecture and benefits of the solution.

## Pain points

During festivals and promotional activities, Anipop often experiences a surge in traffic. The big data center of Anipop analyzes the performance metrics of the game and distributes traffic based on business requirements to improve user experience. However, many factors influence the volume of traffic and it is difficult to estimate the exact volume of traffic before the events. Therefore, during an event, engineers at Anipop had to manually scale services in or out based on a multitude of factors, including region, time, and the number of connected devices.

IT O&M engineers often face the following challenges:

-   **High O&M workload**: To handle the load from traffic surges, high concurrency, and high queries per second (QPS), O&M engineers need to manage multiple server groups to implement load balancing. This results in a high workload.
    
-   **Manual intervention for critical services**: During peak hours, to ensure that critical services are not affected, O&M engineers need to deploy two server groups and manually schedule requests based on URLs.
    
-   **Limited Layer 7 routing capabilities**: The traffic of some services requires scheduling based on headers. Due to limited Layer 7 routing capabilities, these services run on the server side.
    

## Architecture

An ALB instance can process up to one million Layer 7 queries per second. ALB can automatically schedule traffic based on the number of visits and handle traffic surges and large numbers of concurrent connections with ease. Therefore, we recommended ALB as a solution to Anipop to improve traffic scheduling and better handle the load from traffic surges and high concurrency. The following figure shows the architecture of the ALB solution.

![Architecture](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1339477761/p439905.png)

## Benefits

-   **High performance and high scalability**: Each ALB instance can process up to one million queries per second. O&M engineers no longer need to estimate peak traffic levels. ALB automatically handles traffic surges based on business requirements.
    
-   **Simplified O&M and reduced manpower**: Traffic scrubbed by anti-DDoS services is routed directly to ALB. The workload of multiple instances can be handled by one ALB instance, which reduces O&M complexity.
    
-   **Lower latency and better experience**: URL-based forwarding rules are configured on a server group to schedule traffic of services that have different priorities. The requirements for customized traffic forwarding services are met.
    
-   **Easy upgrades and future-proof design**: ALB can serve as the Ingresses of containers and can be easily upgraded to take advantage of the latest containerization technologies.
    

## References

-   [What is ALB?](/help/en/slb/application-load-balancer/product-overview/what-is-alb/#concept-2011635)
    
-   [Alibaba Cloud DNS](/help/en/dns/alibaba-cloud-dns#topic-2035878)
    
-   [What is Anti-DDoS Origin?](/help/en/anti-ddos/anti-ddos-origin/product-overview/what-is-anti-ddos-origin#concept-63643-zh)
