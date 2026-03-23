In most cases, a Network Load Balancer (NLB) instance is associated with Elastic IP addresses (EIPs) to provide Internet-facing services. However, EIPs are region-specific public IP addresses. Businesses that are not deployed in the same region as the NLB instance may encounter issues such as high network latency. Anycast EIPs can be announced from all access points within an access area and are not limited by region. You can associate Anycast EIPs with an NLB instance to enable access through the nearest access point, thereby improving user experience.

## Overview

Serving as the ingress for high-concurrency traffic, NLB distributes traffic at the transport layer to improve the performance and stability of backend services. Anycast EIPs enable Internet access from an entire access area and reduce access latency across regions. By associating Anycast EIPs with an NLB instance, the NLB instance can offer services with globally low latency and high stability. This helps your business stay competitive.

### **Benefits**

-   NLB enables the transport layer architecture of your business to have high availability, high performance, and automatic elasticity.
    
-   Anycast EIPs can be shared by locations around the world. They enable low-latency access, reduce network jitter, support failover, and offer high stability.
    

### **Use scenarios**

-   Improving user experience: For applications providing services to global users, Anycast EIPs enable these users to access the services through the nearest access point. This reduces network latency and improves access speed and user experience. For example, the gaming industry usually deploys servers around the world to allow global gamers to access the nearest server for playing.
    
-   High availability and disaster recovery design: Anycast EIPs allow access through multiple points of presence (POPs). If the operator service lines in a certain region experience failures, traffic can be automatically routed to another access point, maintaining service stability. For example, the financial industry often employs Anycast EIPs to eliminate single points of failure.
    
-   Simplified security management: Anycast EIPs simplify the whitelist management process in the security industry.
    

### **Limits**

-   You must purchase an NLB instance in the regions where origin servers are deployed and Anycast EIPs are available. Then, associate the Anycast EIPs with the NLB instance. Anycast EIPs are available in these regions for origin servers: China (Hong Kong), Singapore, US (Silicon Valley), US (Virginia), Germany (Frankfurt), and Japan (Tokyo).
    
-   NLB instances that are associated with Anycast EIPs cannot be associated with Internet Shared Bandwidth instances.
    
-   You cannot associate Anycast EIPs with IPv6 addresses of dual-stack NLB instances. You can associate Anycast EIPs only with IPv4 addresses of dual-stack NLB instances.
    
-   If an Anycast EIP is associated with an Application Load Balancer (ALB) instance or a Network Load Balancer (NLB) instance, the Anycast EIP can be associated with only one region. For more information, see [Limits](/help/en/anycast-eip/product-overview/limits#concept-2494811).
    

## Example scenario

An enterprise has deployed gaming servers in Singapore and users in London, UK want to access the game. If the requests are sent to the origin servers, they travel on different Internet Service Provider (ISP) networks across multiple regions before finally reaching the gaming servers in Singapore. Constant routing and forwarding significantly increases the access latency of these requests. To optimize the access experience for global users, Alibaba Cloud deploys Anycast EIP access points worldwide. Anycast EIPs intelligently route user requests to the nearest access point. This significantly reduces network latency and improves global access speed. Anycast EIPs help the enterprise to provide a more fluent and responsive gaming experience to global gamers including gamers in the UK. In this way, the user satisfaction and retention rate can be improved. The following figure demonstrates how a gamer in the UK accesses the access point deployed in London, routes through the London ISP networks, and reaches the gaming servers of the enterprise through the Alibaba Cloud internal network.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2083761371/CAEQLxiBgIDUjOapmRkiIDVlZTgyMjk3MzlhMTQ1YjdhZDAzYWRiMzg5MDFjNTc54052371_20231026135007.345.svg)

## **Prerequisites**

-   A virtual private cloud (VPC) is created in the Singapore region and two switches, VSW1 and VSW2, are created in two different zones. For specific operations, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#title-gcw-98r-tyn).
    
-   Two Elastic Compute Service (ECS) instances, ECS01 and ECS02, are created in the subnets assigned to VSW1 and VSW2, respectively, and application services are deployed in the two instances.
    
    Sample commands for service deployment in an ECS instance
    
    Sample commands for service deployment in ECS01
    
    ```
    yum install -y nginx
    systemctl start nginx.service
    cd /usr/share/nginx/html/
    echo "Hello World ! This is ECS01." > index.html
    ```
    
    Sample commands for service deployment in ECS02
    
    ```
    yum install -y nginx
    systemctl start nginx.service
    cd /usr/share/nginx/html/
    echo "Hello World ! This is ECS02." > index.html
    ```
    
-   An NLB instance is created. For specific operations, see [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance).
    
-   A backend server group is created and associated with the NLB instance, and backend servers are added to the server group. For specific operations, see [Create and manage a server group](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group).
    
-   Listeners are configured for the NLB instance. For specific operations, see [Add a TCP listener](/help/en/slb/network-load-balancer/user-guide/add-a-tcp-listener), [Add a UDP listener](/help/en/slb/network-load-balancer/user-guide/add-a-udp-listener), and [Add a TCPSSL listener](/help/en/slb/network-load-balancer/user-guide/create-a-listener-that-uses-ssl-over-tcp).
    

## Procedure

### **Step 1: Associate Anycast EIPs with an internal-facing NLB instance**

**Note**

To reuse the configurations of an existing Internet-facing NLB instance, you can change the network type of the existing NLB instance from Internet-facing to internal-facing, then associate Anycast EIPs with the internal-facing NLB instance. For information about changing the network type of an NLB instance, see [Change the network type of an NLB instance](/help/en/slb/network-load-balancer/user-guide/change-the-network-type-of-an-nlb-instance).

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region in which the NLB instance is deployed.
    
3.  On the **Instances** page, find the internal-facing NLB instance that you want to manage and click the instance ID.
    
4.  In the **Basic Information** section of the **Instance Details** tab, click **Change Network Type** to the right of **IPv4** for **Network Type**.
    
5.  In the **Change Network Type** dialog box, set **IP Type** to **Anycast EIP**, select **Purchase Anycast EIP** or specify an available Anycast EIP from the **Assign EIP** drop-down list, then click **OK**.
    
    **Note**
    
    -   You must assign Anycast EIPs to all zones in the list.
        
    -   If you select **Purchase Anycast EIP**, the assigned Anycast EIPs are released along with the NLB instance when the NLB instance is released or its network type is changed from Internet-facing to internal-facing. If you select an existing Anycast EIP, it is retained in the above situations.
        
    -   You can view information about assigned Anycast EIPs on the [Anycast Elastic IP Addresses page in the VPC console](https://vpc.console.alibabacloud.com/eip/anycasts).
        
    
6.  On the **Zones** tab of the **Instance Details** page, you can view the Anycast EIPs associated with your NLB instance.
    

### **Step 2: Test the performance of backend services when processing traffic**

1.  Test the traffic latency.
    
    **Note**
    
    The network quality of Anycast EIPs is affected by the network quality of ISPs. Please refer to actual business tests. This example demonstrates the network latency effect.
    
    1.  Create an ECS instance ECS03 in the UK (London) region and associate an EIP with it. Use it as a client.
        
    2.  To test the traffic latency, log on to ECS03 and run the following command:
        
        ```
        curl -i http://<Anycast EIP> -s -w "time_connect: %{time_connect}\ntime_starttransfer: %{time_starttransfer}\ntime_total: %{time_total}\n" 
        ```
        
        The parameters are described as follows:
        
        -   time\_connect: the time taken to establish a TCP connection. Unit: seconds.
            
        -   time\_starttransfer: the time taken from when the client sends a request to when the backend server responds with the first byte. Unit: seconds.
            
        -   time\_total: the time taken from when the client sends a request to when the backend server responds with the last byte. Unit: seconds.
            
    3.  Verify that the traffic latency is reduced with Anycast EIPs associated with your NLB instance.
        
        Response time before associating Anycast EIPs:
        
        ![before.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1083761371/p859395.png)
        
        Response time after associating Anycast EIPs:
        
        ![after.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1083761371/p859396.png)
        
2.  Test the service availability.
    
    1.  Stop the ECS01 instance by running the `systemctl stop nginx.service` command on ECS01.
        
    2.  To test the server connectivity, log on to ECS03 and run the following command:
        
        ```
        curl -i http://<Anycast EIP>
        ```
        
    3.  The following output shows that the service is connected:
        
        ![1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1083761371/p859399.png)
        

## FAQs

-   What is special about my first Anycast EIP purchase?
    
    The first time you activate an Anycast EIP, a **Note** message appears. Confirm the information, select the Terms of Service, and click **Activate Now** to activate Cloud Data Transfer (CDT). For details, see [Purchase and manage Anycast EIPs](/help/en/anycast-eip/user-guide/purchase-and-manage-anycast-eips).
    
-   How is an NLB instance associated with Anycast EIPs billed?
    
    For an NLB instance associated with Anycast EIPs, the billiable items include instances, Load Balancer Capacity Units (LCUs), and data transfer. The data transfer fee is charged based on the Anycast EIP. For details, see [Overview](/help/en/anycast-eip/product-overview/billing-1). For instance fees and LCU fees of an NLB instance, see [NLB billing rules](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items).
    

## **References**

-   For more information about changing the network type of an NLB instance, see [Change the network type of an NLB instance](/help/en/slb/network-load-balancer/user-guide/change-the-network-type-of-an-nlb-instance).
    
-   For more information about Anycast EIPs, see [What is Anycast EIP?](/help/en/anycast-eip/product-overview/what-is-anycast-eip) For more information about using Anycast EIPs, see [Getting started](/help/en/anycast-eip/user-guide/getting-started).
