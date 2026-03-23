Global Accelerator (GA) is a high-availability and high-performance network acceleration service for global users. By leveraging Alibaba Cloud's high-quality Border Gateway Protocol (BGP) bandwidth and global network infrastructure, GA enables service providers to deploy applications across regions and allows users to connect to the nearest access points for content delivery acceleration. This reduces network issues such as latency, jitter, and packet loss.

## GA instance types

### Standard GA instances

Standard GA instances support multiple access modes and provide a Global Accelerator network to deliver end-to-end acceleration for backend services, improving the access experience for users worldwide.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4780375671/CAEQUBiBgMDItI.t2BkiIDZhZWIxZDEwNWNkZTRiMzI4NzY3NDM5ZDBlMDU1ODMy3963382_20230830144006.372.svg)

**Access modes**

Standard GA instances allow you to accelerate access through an accelerated IP address or a CNAME. When a client connects to an accelerated IP address or CNAME, traffic is routed to the nearest access point of the Alibaba Cloud global transmission network.

-   Accelerated IP address
    
    -   Elastic IP Address (EIP): GA provides separate EIP based on acceleration regions. Users in each region can connect to GA through region-specific EIPs.
        
    -   Anycast Elastic IP Address (Anycast EIP): GA provides two Anycast EIPs across multiple regions worldwide. Users in all regions can automatically connect to the nearest access point through Anycast EIPs.
        
-   CNAME
    
    Map the domain name that you want to accelerate to the CNAME allocated by GA to accelerate access to the backend service. For more information, see DNS.
    

**Acceleration network**

Standard GA instances connect users in different acceleration regions to backend servers deployed in different regions and accelerate content delivery at Layer 4 (TCP and UDP) and Layer 7 (HTTP and HTTPS). Additionally, standard GA instances support nearby termination of TCP connections and nearby SSL offloading based on optimizations of the TCP, HTTP, and HTTPS protocols. This further improves the acceleration performance of content delivery.

After GA receives client requests, it forwards them to endpoints based on the routing type of the listener to optimize data transmission quality and reduce latency and network jitter.

**Backend service connection**

The following network connections are supported when GA forwards client requests to backend services:

-   Private network connection: This type of network connection is used for endpoints deployed on Alibaba Cloud. You can specify Elastic Compute Service (ECS) instances in VPCs, Application Load Balancer (ALB) instances, Network Load Balancer (NLB) instances, Classic Load Balancer (CLB) instances in VPCs, Object Storage Service (OSS), Elastic Network Interface (ENI), custom private IP addresses, and vSwitches (vSwitch). This prevents backend services from being exposed to the Internet and ensures the security of network connections.
    
-   Internet connection: This type of network connection is used for endpoints deployed outside Alibaba Cloud, including Internet-facing CLB instances, Alibaba Cloud public IP addresses, custom public IP addresses, and custom domain names.
    

### Basic GA instances

Basic GA instances use the high-quality global network bandwidth and transmission network of Alibaba Cloud to provide point-to-point acceleration services.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4780375671/CAEQUBiBgMCB2oP32BkiIDRiYTU3NTZiODQ5ZDRjZjY5OTNiNzkxYTFjNWJmZmYw3963382_20230830144006.372.svg)

**Access modes**

You can use only accelerated IP addresses to connect to basic GA instances. The accelerated IP addresses must be EIPs. Clients can connect to an access point of the Alibaba Cloud global transmission network by sending requests to an accelerated IP address.

**Acceleration network**

Basic GA instances provide one-to-one acceleration services between acceleration regions and backend server regions. Basic GA instances provide acceleration services only at Layer 3 (IP).

After client requests reach the Alibaba Cloud global transmission network, GA distributes traffic to endpoints based on the mappings between accelerated IP addresses and endpoints.

**Backend service connection**

GA forwards client requests to endpoints over private networks. You can specify secondary ENIs, CLB instances in VPCs, internal-facing NLB instances, and Elastic Compute Service (ECS) instances as endpoints.

## Benefits

-   **High quality**
    
    GA uses stable BGP lines, the global transmission network of Alibaba Cloud, and worldwide access points to reduce network latency, network jitters, and packet loss. This greatly improves user experience.
    
-   **High availability**
    
    GA enables you to manage network traffic routed across regions and distributed to multiple endpoints. This prevents service disruptions caused by failures of individual regions or connections and improves network stability. GA continuously monitors the health status of all endpoints and automatically schedules network traffic to ensure service continuity.
    
-   **High security and reliability**
    
    GA lets you set network access control lists (ACLs) and use Alibaba Cloud security services to protect applications and endpoints from attacks.
    
-   **Easy deployment**
    
    GA is easy to configure and can be deployed within minutes. Resources are monitored and maintained in a centralized manner. This mechanism simplifies the deployment process.
    

## Free trial

GA instances and bandwidth plans of specific specifications are free of charge for the first month. You can apply for a free trial before 00:00:00 on April 1, 2025 (UTC+8). For more information about the one-month free trials of GA, see [\[Trial Activity\] Time-limited one-month free trials](/help/en/ga/product-overview/time-limited-one-month-free-trials-of-ga#concept-2471776).
