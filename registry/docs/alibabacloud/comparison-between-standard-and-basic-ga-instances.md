Global Accelerator (GA) provides standard instances and basic instances. This topic describes the differences in features and billing between standard Global Accelerator instances and basic Global Accelerator instances.

## **Feature comparison**

**Item**

**Standard GA instance**

**Basic GA instance**

Service positioning

-   Connects users in different acceleration regions to origin servers that are deployed in different regions and provides end-to-end acceleration services.
    
-   Acceleration at Layer 4 (TCP and UDP) and Layer 7 (HTTP and HTTPS).
    

-   Provides one-to-one acceleration services between acceleration regions and origin server regions.
    
-   Acceleration at Layer 3 (IP).
    

Nearby access

-   Custom nearby access
    
    EIP as accelerated IP address:
    
    -   You can specify acceleration regions. Users can connect to the nearest access point of GA by using the accelerated IP address provided in each acceleration region. This ensures that the optimal routes are used.
        
    -   You can select the IP version of accelerated IP addresses. IPv6 clients can connect to IPv4 services by using Global Accelerator.
        
-   Automatic nearby access
    
    -   Anycast EIP as accelerated IP address: Users in multiple regions around the world can use a fixed accelerated IP address to connect to the nearest access point of GA. This simplifies O&M.
        
    -   Intelligent resolution: You can configure CNAME records to enable GA to automatically resolve the CNAME of GA to the accelerated IP address of the region that is nearest to users. This allows the users to connect to the nearest access point of GA.
        

Custom access: Clients use EIPs to connect to the nearest access point of GA.

Forwarding capabilities

-   Routing mode for traffic
    
    -   Intelligent routing
        
        -   After you configure an intelligent routing listener for a GA instance, the GA instance selects a nearby and healthy endpoint group based on network latency and forwards requests to the optimal endpoint in the endpoint group. The network latency varies based on the geographical location and network hop.
            
        -   Supports TCP, UDP, HTTP, HTTPS, and HTTP/3.
            
        -   Supports various forwarding rules, such as HTTP rewrites, redirects, and overwrites.
            
        -   Supports traffic distribution across regions and disaster recovery for high availability.
            
        -   Supports application health checks.
            
    -   Custom routing
        
        -   Forwards requests to endpoints based on the IP address and port mapping tables.
            
        -   Supports TCP and UDP.
            
-   Protocol optimization
    
    -   Supports nearby termination of TCP connections. TCP connections can be terminated in the acceleration region nearest to users. This improves the speed of data transmission.
        
    -   Supports nearby SSL offloading. SSL offloading can be performed in the acceleration region nearest to users. This improves the efficiency of backend services, simplifies the configuration of backend servers and SSL, and ensures the security of communication.
        

Traffic is distributed to backend services based on the mappings between the specified accelerated IP addresses and endpoints.

Endpoint types

-   Endpoints deployed on Alibaba Cloud:
    
    -   **ECS**
        
    -   **ALB**
        
    -   **NLB**
        
    -   **CLB**
        
    -   **OSS**
        
    -   **ENI**
        
    -   **Custom private IP address**
        
    -   **Public IP address provided by Alibaba Cloud**
        
    -   **vSwitch**
        
        This endpoint type is supported only by custom routing listeners.
        
-   Endpoints deployed outside Alibaba Cloud:
    
    -   **Custom public IP address**
        
    -   **Custom domain name**
        

Only endpoints deployed on Alibaba Cloud are supported:

-   **ENI**
    
-   **ECS**
    
-   **CLB**
    
-   **NLB**
    

Security management

-   Access logs
    
-   Access control based on whitelists or blacklists
    
-   TLS cipher suites
    
-   Anti-DDoS Basic
    

Anti-DDoS Basic

O&M

-   Origin probing
    
-   Server monitoring
    
-   Instance diagnosis
    

Server monitoring

Scenarios

Layer 4 or Layer 7 application acceleration. Examples:

-   Payment systems
    
-   Enterprise applications
    
-   Video streaming
    
-   Gaming
    

Acceleration for custom applications, such as applications that use proprietary protocols.

## **Billing comparison**

The following content describes the billing of standard Global Accelerator instances and basic Global Accelerator instances.

### **Billing of standard GA instances**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3884345671/CAEQUBiBgIDd.Luw2BkiIDIzMzhhZmFmOTg3ZTQwNTliNjQ1MDY0OGNmNzAwYjE23926471_20230822152343.335.svg)

For more information about the pricing and billing of each billable item of standard Global Accelerator instances, see the following topics:

-   Pay-as-you-go: [Instance fee](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances#section-29l-vls-0j9), [CU fee](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances#4af14fc025v6q), [Data transfer fee (managed by CDT)](/help/en/ga/product-overview/pay-by-data-transfer-1/), and [GA resource plans](/help/en/ga/product-overview/resource-package)
    
-   Subscription: [Instance fee](/help/en/ga/product-overview/billing-of-ga-instances#section-6im-nhh-v8n), [Specification fee](/help/en/ga/product-overview/billing-of-ga-instances#section-7im-nhh-v8m), and [Bandwidth fee (billed by bandwidth plans)](/help/en/ga/product-overview/billing-of-bandwidth-plans/)
    

### Billing of basic GA instances

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3884345671/CAEQUBiBgMCtvryw2BkiIGU3MGI1MDY1MGE0ZTRkNjdhNmFjODY0NTFkMjVmZjcx3926471_20230822152343.335.svg)

For more information about the pricing and billing of each billable item of basic Global Accelerator instances, see the following topics:

-   Pay-as-you-go: [Instance fee](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances#section-29l-vls-0j9), [Data transfer fee (managed by CDT)](/help/en/ga/product-overview/pay-by-data-transfer-1/), and [GA resource plans](/help/en/ga/product-overview/resource-package)
    
-   Subscription: [Instance fee](/help/en/ga/product-overview/billing-of-ga-instances#section-6im-nhh-v8n) and [Bandwidth fee (billed by bandwidth plans)](/help/en/ga/product-overview/billing-of-bandwidth-plans/)
    

## **References**

-   For more information about the features of GA, see the following topics:
    
    -   [Standard GA instances](/help/en/ga/user-guide/overview-of-standard-ga-instances/)
        
    -   [Basic GA instances](/help/en/ga/user-guide/basic-ga-instances/)
        
-   For more information about how to get started with standard and basic Global Accelerator instances, see [Get started with GA](/help/en/ga/getting-started/get-started#section-u3p-a2x-ge0).
