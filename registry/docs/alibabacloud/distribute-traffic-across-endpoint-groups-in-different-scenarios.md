Global Accelerator (GA) allows you to configure multiple endpoint groups for a listener. You can set a traffic distribution ratio for an endpoint group to control the percentage of client requests that are forwarded to the endpoint group. You can also enable health checks to filter out unhealthy endpoint groups.

## Distribute traffic across endpoint groups

### Introduction to traffic distribution

GA lets you configure an [endpoint group traffic distribution](/help/en/ga/user-guide/distribute-traffic-across-endpoint-groups-in-different-scenarios) ratio to adjust traffic distribution among multiple endpoint groups. This feature helps balance traffic loads and improve user experience.

-   Traffic distribution ratio: This specifies the percentage of traffic that is forwarded to an endpoint group. The value can range from 0% to 100%. The default value is 100%. A value of 0% indicates that no traffic is forwarded to the endpoint group. A value of 100% indicates that all traffic is forwarded to the endpoint group.
    
-   Scheduling priority: The final traffic distribution to an endpoint group depends on both the configured traffic distribution ratio and the scheduling priority of the endpoint group. GA determines the scheduling priority based on network latency, which is affected by geographic location and network link conditions. In general, the closer the access point is to the region of an endpoint group, the shorter the network link and the higher the scheduling priority. Traffic is preferentially scheduled to the endpoint group with the highest scheduling priority.
    

**Note**

-   For the subscription billing method, only TCP and UDP listeners support traffic distribution. For the pay-as-you-go billing method, all listener types support traffic distribution.
    
-   After you enable [health checks](/help/en/ga/user-guide/overview-4/#section-whx-ex7-gdg) for endpoint groups, if an endpoint group with a higher priority fails its health check, all traffic is forwarded to the next available endpoint group with the highest priority. In this case, the configured traffic distribution ratio is ignored.
    
-   If a [custom forwarding policy](/help/en/ga/user-guide/create-and-manage-forwarding-rules) exists, traffic is scheduled among the endpoint groups associated with the matched forwarding policy.
    

### Traffic distribution formula

The following examples show how traffic distribution works:

-   One acceleration region with multiple endpoint groups
    
    Clients in the China (Beijing) region want to access an application. The servers that host the application are deployed in the China (Beijing) and China (Shanghai) regions. You specify China (Beijing) as the acceleration region and create an endpoint group in the China (Beijing) region and the China (Shanghai) region. You want to forward client requests that are sent to the China (Beijing) region and the China (Shanghai) region based on your requirements.
    
    -   Set the traffic distribution ratio of each endpoint group to 100%.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1622375671/CAEQUBiBgMDv.q_32BkiIDM0NTg2OTBhOGI3OTRkNWJhZTY1YzAzZGQyYzRkZmYw3963382_20230830144006.372.svg)
        
        **No.**
        
        **Description**
        
        ①
        
        Client requests are scheduled to the nearest access point in the China (Beijing) region and forwarded to the Alibaba Cloud global transmission network.
        
        ②
        
        The listener of the GA instance checks the connection requests from clients based on the protocol and port that are configured and forwards the client requests to endpoint groups based on their priorities and traffic distribution ratios.
        
        ③
        
        The priority of the endpoint group in the China (Beijing) region is higher than the priority of the endpoint group in the China (Shanghai) region. The endpoint group in the China (Beijing) region passes the health check and the traffic distribution ratio of the endpoint group is set to 100%. All client requests are forwarded to the endpoint group in the China (Beijing) region.
        
        ④
        
        Client requests are processed by servers in the China (Beijing) region.
        
        ⑤
        
        If the endpoint group in the China (Beijing) region fails the health check and the endpoint group in the China (Shanghai) region passes the health check, the listener forwards all client requests to the endpoint group in the China (Shanghai) region.
        
        ⑥
        
        Client requests are processed by servers in the China (Shanghai) region.
        
    -   Set the traffic distribution ratio to 50% for the endpoint group in the China (Beijing) region and set the traffic distribution ratio to 100% for the endpoint group in the China (Shanghai) region. You can change the traffic distribution ratios based on your business requirements.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1622375671/CAEQUBiBgIC2w6_32BkiIDFlMzU0Mzc4ZDUwYjRlYWNiNGEwYzY1ZmI4OGIwZmRk3963382_20230830144006.372.svg)
        
        This scenario is similar to the scenario in which you set the traffic distribution ratio to 100% for both endpoint groups. Requests from clients in the China (Beijing) region are preferably forwarded to the endpoint group in the China (Beijing) region. After you set the traffic distribution ratio to 50% for the endpoint group in the China (Beijing) region, 50% of client requests are forwarded to the endpoint group in the China (Beijing) region and the remaining 50% of client requests are forwarded to the endpoint group in the China (Shanghai) region. If you set the traffic distribution ratio to 30% for the endpoint group in the China (Beijing) region, 30% of client requests are forwarded to the endpoint group in the China (Beijing) region and 70% of client requests are forwarded to the endpoint group in the China (Shanghai) region.
        
        If you set the traffic distribution ratio to 100% for the endpoint group in the China (Shanghai) region, all the remaining client requests are forwarded to the endpoint group in the China (Shanghai) region. In the preceding two examples, 50% and 70% of client requests are forwarded to the endpoint group in the China (Shanghai) region.
        
    -   Set the traffic distribution ratio to 50% for both endpoint groups. You can change the traffic distribution ratios based on your business requirements.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1622375671/CAEQUBiBgMCBtOHC2BkiIDUzM2ZlMDI4MTA1NzQ1YWE5Zjg0NjQ3OTVkOWI0MDJh3963382_20230830144006.372.svg)
        
        **No.**
        
        **Description**
        
        ①
        
        Client requests are scheduled to the nearest access point in the China (Beijing) region and forwarded to the Alibaba Cloud global transmission network.
        
        ②
        
        The listener of the GA instance checks the connection requests from clients based on the protocol and port that are configured and forwards the client requests to endpoint groups based on their priorities and traffic distribution ratios.
        
        ③
        
        The priority of the endpoint group in the China (Beijing) region is higher than the priority of the endpoint group in the China (Shanghai) region. The endpoint group in the China (Beijing) region passes the health check and the traffic distribution ratio of the endpoint group is set to 50%. 50% of client requests are forwarded to the endpoint group in the China (Beijing) region.
        
        ④
        
        Servers in the China (Beijing) region process 50% of client requests.
        
        ⑤
        
        The remaining 50% of client requests are first forwarded to the endpoint group in the China (Shanghai) region. The percentage of client requests that are received by the endpoint group in the China (Shanghai) region is 25% based on the following formula: 50% × 50% = 25%.
        
        The endpoint group in the China (Beijing) region receives 50% of client requests and the endpoint group in the China (Shanghai) region receives 25% of client requests. The remaining 25% of client requests are not received.
        
        ⑥
        
        GA evenly distributes the remaining client requests to each endpoint group.
        
        The remaining 25% of client requests are evenly distributed to each endpoint group. This indicates that each endpoint group in the China (Beijing) region and the China (Shanghai) region receives 12.5% of client requests.
        
        ⑦
        
        Servers in the China (Beijing) region process the 12.5% of client requests distributed in the second round. Servers in the China (Beijing) region process a total of 62.5% of client requests based on the following formula: 50% + 12.5% = 62.5%.
        
        ⑧
        
        Servers in the China (Shanghai) region process a total of 37.5% of client requests based on the following formula: 25% + 12.5% = 37.5%.
        
    
-   Multiple acceleration regions with multiple endpoint groups
    
    If you specify multiple acceleration regions for clients that are located in multiple regions, the clients can connect to the nearest access points of the Alibaba Cloud global transmission network by sending requests to the accelerated IP addresses. Then, the client requests are forwarded to the endpoint groups that are closest to the access points.
    
    -   Set the traffic distribution ratio of each endpoint group to 100%.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1622375671/CAEQUBiBgIDB5pH32BkiIDA4NDllOWE2M2QxOTRlMjc5NDBlYjMzYTJhNmZiODM23963382_20230830144006.372.svg)
        
        **No.**
        
        **Description**
        
        ①
        
        Requests from clients in the China (Beijing) region are forwarded to the nearest access point in the China (Beijing) region. Requests from clients in the China (Shanghai) region are forwarded to the nearest access point in the China (Shanghai) region. Then, the client requests are forwarded to the Alibaba Cloud global transmission network.
        
        ②
        
        The listener of the GA instance checks the connection requests from clients based on the protocol and port that are configured and forwards the client requests to endpoint groups based on their priorities and traffic distribution ratios.
        
        ③
        
        GA distributes client requests from different regions based on the traffic distribution ratio.
        
        -   Forward client requests from the China (Beijing) region
            
            The priority of the endpoint group in the China (Beijing) region is higher than the priority of the endpoint group in the China (Shanghai) region. The endpoint group in the China (Beijing) region passes the health check and the traffic distribution ratio of the endpoint group is set to 100%. All client requests from the China (Beijing) region are forwarded to the endpoint group in the China (Beijing) region.
            
        -   Forward client requests from the China (Shanghai) region
            
            The priority of the endpoint group in the China (Shanghai) region is higher than the priority of the endpoint group in the China (Beijing) region. The endpoint group in the China (Shanghai) region passes the health check and the traffic distribution ratio of the endpoint group is set to 100%. All client requests from the China (Shanghai) region are forwarded to the endpoint group in the China (Shanghai) region.
            
        
        ④
        
        Servers in the China (Beijing) region and the China (Shanghai) region process the client requests that they receive.
        
    -   Set the traffic distribution ratio to 50% for the endpoint group in the China (Beijing) region and set the traffic distribution ratio to 100% for the endpoint group in the China (Shanghai) region. You can change the traffic distribution ratios based on your business requirements.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1622375671/CAEQUBiBgICbra732BkiIDY1NWQ0NzZhOTdiOTQwYjliZWNjZmUzZGNlYTRjZjEx3963382_20230830144006.372.svg)
        
        This scenario is similar to the scenario in which you set the traffic distribution ratio to 100% for both endpoint groups. Requests from clients in the China (Beijing) region are preferably forwarded to the endpoint group in the China (Beijing) region. After you set the traffic distribution ratio to 50% for the endpoint group in the China (Beijing) region, 50% of client requests are forwarded to the endpoint group in the China (Beijing) region and the remaining 50% of client requests are forwarded to the endpoint group in the China (Shanghai) region. If you set the traffic distribution ratio to 30% for the endpoint group in the China (Beijing) region, 30% of client requests are forwarded to the endpoint group in the China (Beijing) region and 70% of client requests are forwarded to the endpoint group in the China (Shanghai) region.
        
        All requests from clients in the China (Shanghai) region are forwarded to the endpoint group in the China (Shanghai) region. This is because you set the traffic distribution ratio to 100% for the endpoint group in the China (Shanghai) region.
        
        In this scenario, the endpoint group in the China (Beijing) region receives 50% of requests from clients in the China (Beijing) region. The endpoint group in the China (Shanghai) receives 100% of requests from clients in the China (Shanghai) region and 50% of requests from clients in the China (Beijing) region.
        
    -   Set the traffic distribution ratio to 50% for both endpoint groups. You can change the traffic distribution ratios based on your business requirements.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1622375671/CAEQUBiBgICkup332BkiIDc0MDBkOTNjN2VkZjQxZGFiNmE3NWYyZTU5MGMyMGZj3963382_20230830144006.372.svg)
        
        **No.**
        
        **Description**
        
        ①
        
        Requests from clients in the China (Beijing) region are forwarded to the nearest access point in the China (Beijing) region. Requests from clients in the China (Shanghai) region are forwarded to the nearest access point in the China (Shanghai) region. Then, the client requests are forwarded to the Alibaba Cloud global transmission network.
        
        ②
        
        The listener of the GA instance checks the connection requests from clients based on the protocol and port that are configured and forwards the client requests to endpoint groups based on their priorities and traffic distribution ratios.
        
        ③
        
        GA distributes client requests from different regions based on the traffic distribution ratio.
        
        -   Forward client requests from the China (Beijing) region
            
            The priority of the endpoint group in the China (Beijing) region is higher than the priority of the endpoint group in the China (Shanghai) region. The endpoint group in the China (Beijing) region passes the health check and the traffic distribution ratio of the endpoint group is set to 50%. 50% of client requests are forwarded to the endpoint group in the China (Beijing) region. The remaining 50% of client requests are forwarded to the endpoint group in the China (Shanghai) region. The percentage of client requests that are received by the endpoint group in the China (Shanghai) region is 25% based on the following formula: 50% × 50% = 25%. The percentage of requests from clients in the China (Beijing) region that are not received is 25% based on the following formula: 100% - 50% - 25% = 25%.
            
        -   Forward client requests from the China (Shanghai) region
            
            The priority of the endpoint group in the China (Shanghai) region is higher than the priority of the endpoint group in the China (Beijing) region. The endpoint group in the China (Shanghai) region passes the health check and the traffic distribution ratio of the endpoint group is set to 50%. 50% of client requests are forwarded to the endpoint group in the China (Shanghai) region. The remaining 50% of client requests are forwarded to the endpoint group in the China (Beijing) region. The percentage of client requests that are received by the endpoint group in the China (Beijing) region is 25% based on the following formula: 50% × 50% = 25%. The percentage of requests from clients in the China (Shanghai) region that are not received is 25% based on the following formula: 100% - 50% - 25% = 25%.
            
        
        ④
        
        GA evenly forwards the remaining client requests to each endpoint group.
        
        The remaining 25% of requests from clients in the China (Beijing) region are evenly distributed to each endpoint group. This indicates that each endpoint group in the China (Beijing) region and the China (Shanghai) region receives 12.5% of client requests. Each endpoint group in the China (Beijing) region and the China (Shanghai) region receives 12.5% of requests from clients in the China (Shanghai) region.
        
        ⑤
        
        Servers in the China (Beijing) region and the China (Shanghai) region process the client requests that they receive.
        
    

## Scenarios

### Overview

**Scenario**

**Description**

[Deploy an application in multiple regions](#section-6fo-9bp-h5g)

The servers do not meet the requirements of an application or users in specific regions have poor network experience. For example, users in different regions share the same acceleration region or multiple acceleration regions share one endpoint group. In this case, you can deploy the application in another region.

[Forward client requests across regions](#section-mg6-kr4-sdd)

If you deploy a service in a single region, many client requests may be sent to the service and the servers that host the service may become overloaded. To resolve the issues, you can deploy the service across regions and add an endpoint group in each region. Then, you can use the traffic distribution feature to change the percentage of client requests that are forwarded to each region to reduce the loads on the servers in a region.

[Cross-region disaster recovery for applications](#section-5vz-lba-heh)

If you have requirements for service continuity and high availability, you can deploy the service across regions, specify the backend service in different regions as the endpoint group, and enable health checks for the endpoint groups. If the service in a region cannot be accessed, you can enable GA to forward client requests to healthy endpoint groups in other regions. This meets the requirements of disaster recovery.

[Unpublish or update a service based on regions](#section-9op-fub-8no)

You want to adjust your business in a region. For example, if you want to smoothly unpublish a service that receives low traffic in a region or update a service in a region, you can set the traffic distribution ratio for the endpoint group in the region to migrate the service in a flexible manner.

### Deploy an application in multiple regions

If you want to scale out your business and the servers do not meet the requirements of the application or users in specific regions have poor network experience, you can deploy the application in another region. You can add endpoint groups or acceleration regions for the GA instance to improve user experience.

-   Add endpoint groups to improve the traffic processing capabilities of the application.
    
    The scenario in the following figure is used as an example. An application is deployed on servers in the China (Beijing) region. Clients in the China (Beijing) region connect to the access point in the China (Beijing) region. Clients in the China (Shanghai) region connect to the access point in the China (Shanghai) region. All client requests are processed by the servers in the endpoint group in the China (Beijing) region. As the number of clients increases, the loads on the servers also increase.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1622375671/CAEQUBiBgICfg6P32BkiIDc0MDBmNmY3MTZkZTRkZDM4ZDU5OGI4OTJlZDM1ZjBl3963382_20230830144006.372.svg)
    
    In this case, you can add an endpoint group in the China (Shanghai) region and forward requests from clients in the China (Shanghai) region to the servers in the endpoint group in the China (Shanghai) region. This improves the availability of your application. To add the endpoint group, perform the following steps:
    
    1.  Deploy servers in the China (Shanghai) region.
        
    2.  Add an endpoint group in the China (Shanghai) region for the listener of a GA instance. For more information, see [Create a default endpoint group](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-3fg-g29-1xd).
        
        When you add the endpoint group in the China (Shanghai) region, you can set the traffic distribution ratio to a lower value for testing. For example, you can set the value to 1%.
        
    3.  Check how requests from clients in the China (Shanghai) region are distributed.
        
        Requests from clients in the China (Beijing) region are processed by the servers in the endpoint group in the China (Beijing) region and 1% of requests from clients in the China (Shanghai) region are processed by the servers in the endpoint group in the China (Shanghai) region. The remaining 99% of client requests are processed by the servers in the endpoint group in the China (Beijing) region.
        
    4.  After the testing is completed, change the traffic distribution ratio of the endpoint group in the China (Shanghai) region to 100%.
        
        This way, all requests from clients in the China (Shanghai) region are forwarded to the servers in the endpoint group in the China (Shanghai) region. The servers in the endpoint group in the China (Beijing) region do not process requests from clients in the China (Shanghai) region. For more information, see [Set the traffic distribution ratio for an endpoint group](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-81r-zee-no1).
        
    
-   Add an acceleration region to improve user experience
    
    The scenario in the following figure is used as an example. An application is deployed on servers in the China (Beijing) region. Clients in the China (Beijing) region and the China (Shanghai) region connect to the Alibaba Cloud global transmission network by sending requests to the access point in the China (Beijing) region. All client requests are processed by the servers in the endpoint group in the China (Beijing) region. When clients in the China (Shanghai) region access the application, network issues such as network latency and network jitter frequently occur.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1622375671/CAEQUBiBgMCfvKb32BkiIDM3Yzc3M2YyMTNlNjQ5ODA5OGEwM2FhMmNlYTA1YTBl3963382_20230830144006.372.svg)
    
    You can deploy the application on servers in the China (Shanghai) region, add China (Shanghai) as the acceleration region, and create an endpoint group in the China (Shanghai) region for the GA instance. Requests from clients in the China (Shanghai) region are forwarded to the nearest access point in the China (Shanghai) region. The listener checks the connection requests and forwards the requests to the endpoint group in the China (Shanghai) region. This improves experience for clients in the China (Shanghai) region. For more information, see [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas#task-2382321) and [Create a default endpoint group](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-3fg-g29-1xd).
    

### Forward client requests across regions

You can use the traffic distribution feature to forward client requests from a specific acceleration region to multiple endpoint groups that are deployed in different regions. This reduces the loads on the servers in the endpoint group of the acceleration region.

The scenario in the following figure is used as an example. An application is deployed on servers in the China (Beijing) region and the China (Shanghai) region. The clients are located in the China (Beijing) region. You added the China (Beijing) acceleration region, an endpoint group in the China (Beijing) region, and an endpoint group in the China (Shanghai) region in the GA console. By default, GA forwards all requests from clients in the China (Beijing) region to the servers in the endpoint group that is deployed in the China (Beijing) region. Many requests are sent from clients in the China (Beijing) region. This causes the servers in the endpoint group that is deployed in the China (Beijing) region to become overloaded. Network latency and packet loss occur when clients access the application.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1622375671/CAEQUBiBgIC.hK332BkiIGQ5NDIyMTMyOGUzMjQ4ZTk5MTFmMjNlYjYxYzA2YjVj3963382_20230830144006.372.svg)

You can change the traffic distribution ratios for the endpoint groups in the China (Beijing) region and the China (Shanghai) region. For example, you can change the traffic distribution ratio for the endpoint group in the China (Beijing) region from 100% to 50%. This way, 50% of requests from clients in the China (Beijing) region are processed by the servers in the endpoint group in the China (Beijing) region. The remaining 50% of client requests are processed by the servers in the endpoint group in the China (Shanghai) region. This way, you can properly allocate client requests in the China (Beijing) region and reduce the loads on the servers in the endpoint group that is deployed in the China (Beijing) region. For more information about how to change the traffic distribution ratios for endpoint groups, see [Set the traffic distribution ratio for an endpoint group](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-81r-zee-no1).

### Cross-region disaster recovery for applications

You can add multiple endpoint groups that are deployed in different regions for a GA instance and enable health checks for the endpoint groups. This achieves cross-region disaster recovery for applications.

The scenario in the following figure is used as an example. An application is deployed on servers in the China (Beijing) region and the China (Shanghai) region. You added China (Beijing) and China (Shanghai) as acceleration regions and an endpoint group to each acceleration region in the GA console. In most cases, requests from clients in the China (Beijing) region and the China (Shanghai) region are forwarded to the nearest acceleration region. The listener checks the client requests and forwards the client requests to the corresponding endpoint group based on the traffic distribution ratio and priority. To ensure that the application can provide continuous and stable services, you must make sure that client requests can be forwarded to a healthy acceleration region if errors occur on the application in one of the acceleration regions.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1622375671/CAEQUBiBgIDh_aj32BkiIGE5MzQzNDU3ZGJkZTRjNmU4NWJkNDRiZjc2YzgwNTgz3963382_20230830144006.372.svg)

You can enable health checks for endpoint groups in the China (Beijing) region and the China (Shanghai) regions. If the endpoint group in the China (Shanghai) region fails the health check, the listener automatically forwards client requests to the healthy endpoint group in the China (Beijing) region. If the endpoint group in the China (Shanghai) region passes the health check, the listener automatically forwards requests from clients in the China (Shanghai) region to the endpoint group in the China (Shanghai) region. For information about health check configurations, see [Enable and manage health checks](/help/en/ga/user-guide/enable-and-manage-health-checks#task-2382619).

### Unpublish or update a service based on regions

You can use the traffic distribution feature to unpublish or update a service based on regions. This reduces the impact on clients.

The scenario in the following figure is used as an example. A service is deployed on servers in the China (Beijing) region and the China (Shanghai) region. You added China (Beijing) and China (Shanghai) as acceleration regions and an endpoint group to each acceleration region in the GA console. You want to unpublish the service that is deployed in the China (Shanghai) region because a small number of client requests are sent to the service. When you unpublish the service, you must make sure that clients in the China (Shanghai) region can access the service as expected.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1622375671/CAEQUBiBgMC7vqz32BkiIDFkMTdlYmYyMzEwODRiMTY4YTViZDdiMGY1Zjc4OGU03963382_20230830144006.372.svg)

You can set the traffic distribution ratio to a lower value, such as 1%, for the endpoint group in the China (Shanghai) region and distribute 99% of client requests to the endpoint group in the China (Beijing) region. After the client requests that are sent to the service in the China (Shanghai) region are less than you expected, you can set the traffic distribution ratio to 0% for the endpoint group in the China (Shanghai) region. This way, you can unpublish the service that is deployed in the China (Shanghai) region.

If you want to update the service that is deployed in the China (Shanghai) region, you can change the traffic distribution ratio based on the preceding information when you unpublish the service. After you set the traffic distribution ratio to 0%, requests from clients in the China (Shanghai) region are forwarded to the endpoint group in the China (Beijing) region. After you update the service, set the traffic distribution ratio to 100% for the endpoint group in the China (Shanghai) region. This way, all requests from clients in the China (Shanghai) region are forwarded to the endpoint group in the China (Shanghai) region.
