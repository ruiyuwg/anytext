If your services are deployed in multiple regions, use the traffic distribution feature to control the proportion of traffic that is distributed to endpoint groups in different regions.

## Introduction to traffic distribution

GA lets you configure an [endpoint group traffic distribution](/help/en/ga/user-guide/distribute-traffic-across-endpoint-groups-in-different-scenarios) ratio to adjust traffic distribution among multiple endpoint groups. This feature helps balance traffic loads and improve user experience.

-   Traffic distribution ratio: This specifies the percentage of traffic that is forwarded to an endpoint group. The value can range from 0% to 100%. The default value is 100%. A value of 0% indicates that no traffic is forwarded to the endpoint group. A value of 100% indicates that all traffic is forwarded to the endpoint group.
    
-   Scheduling priority: The final traffic distribution to an endpoint group depends on both the configured traffic distribution ratio and the scheduling priority of the endpoint group. GA determines the scheduling priority based on network latency, which is affected by geographic location and network link conditions. In general, the closer the access point is to the region of an endpoint group, the shorter the network link and the higher the scheduling priority. Traffic is preferentially scheduled to the endpoint group with the highest scheduling priority.
    

**Note**

-   For the subscription billing method, only TCP and UDP listeners support traffic distribution. For the pay-as-you-go billing method, all listener types support traffic distribution.
    
-   After you enable [health checks](/help/en/ga/user-guide/overview-4/#section-whx-ex7-gdg) for endpoint groups, if an endpoint group with a higher priority fails its health check, all traffic is forwarded to the next available endpoint group with the highest priority. In this case, the configured traffic distribution ratio is ignored.
    
-   If a [custom forwarding policy](/help/en/ga/user-guide/create-and-manage-forwarding-rules) exists, traffic is scheduled among the endpoint groups associated with the matched forwarding policy.
    

## Scenarios

A company deploys a service on servers in the China (Beijing) and China (Shanghai) regions. The TCP protocol is used and port 80 is open. The clients are located in the China (Beijing) region. The company specifies China (Beijing) as the acceleration region and creates endpoint groups in the China (Beijing) and China (Shanghai) regions in the Global Accelerator (GA) console. By default, GA forwards all requests from clients in the China (Beijing) region to the server in the endpoint group that is deployed in the China (Beijing) region. The endpoint group in the China (Shanghai) region serves as the secondary endpoint group. If the endpoint group in the China (Beijing) region is abnormal, client requests are forwarded to the endpoint group in the China (Shanghai) region. Due to business development, the company wants to forward requests from clients in the China (Beijing) region to the server in the endpoint group that is deployed in the China (Shanghai) region. The company also wants to ensure that clients can access the service as expected during the switchover.

You can change the traffic distribution ratio for the endpoint group in the China (Beijing) region. For example, you can change the traffic distribution ratio from 100% to 50%. This way, 50% of requests from clients in the China (Beijing) region are forwarded to the server in the endpoint group in the China (Shanghai) region. If clients can access the service as expected, change the traffic distribution ratio to 0%. This way, all requests from clients in the China (Beijing) region are forwarded to the server in the endpoint group in the China (Shanghai) region. This ensures the seamless switchover of traffic from clients in the China (Beijing) region.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7734666671/CAEQUBiBgIDw6Ij32BkiIDdiYjQ3NGRmMzc0MDQzNGY5MzM1ODNjMTFlNzI1ZTYx3963382_20230830144006.372.svg)

## Procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7734666671/CAEQUBiBgICxvon32BkiIDYzZjlkMGY4YTkzOTQwNjBhMjYxMmJkNzc3NzI3NWZl4210981_20240213143608.814.svg)

**Note**

This topic uses a pay-as-you-go standard Global Accelerator instance to describe how to use the traffic distribution feature for multiple endpoint groups. Before you create a pay-as-you-go standard Global Accelerator instance, take note of the following information:

-   GA instances use the **pay-by-data-transfer** metering method. You do not need to associate a basic bandwidth plan with pay-as-you-go GA instances. The billing of data transfer over the GA network is managed by Cloud Data Transfer (CDT). For more information, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer#concept-2261223).
    
-   The first time you use a pay-as-you-go GA instance, you must [Activate the Service](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_afterpay_public_intl).
    

## Step 1: Deploy servers

The servers in this example run the Alibaba Cloud Linux 3.2104 64-bit operating system. The command used to run the test may vary based on the operating system. For more information, see the user guide of the operating system.

1.  Deploy servers in the China (Beijing) and China (Shanghai) regions. Then, specify the TCP protocol and open port 80 for the servers.
    
2.  Open the command prompt on a client in the China (Beijing) region and run the curl command to access the servers in the China (Beijing) region and the China (Shanghai) region.
    
    ```
    curl <Origin server IP address>
    ```
    
    The following figures show the region information that is returned.
    
    Figure 1. Access the server in the China (Beijing) region![访问北京服务器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9854311561/p401787.png)
    
    Figure 2. Access the server in the China (Shanghai) region![访问上海服务器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9854311561/p401790.png)
    

## **Step 2: Configure basic information about the GA instance**

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, click **Create Standard Pay-as-you-go Instance**.
    
3.  In the **Basic Instance Configuration** step, configure the parameters based on the following table and click **Next**.
    
    **Parameter**
    
    **Description**
    
    **GA Instance Name**
    
    Enter a name for the GA instance.
    
    **Instance Billing Method**
    
    **Pay-As-You-Go** is selected by default.
    
    You are charged instance fees, Capacity Unit (CU) fees, and data transfer fees for pay-as-you-go standard Global Accelerator instances.
    
    -   For more information about instance fees and CU fees, see [Billing of pay-as-you-go GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances).
        
    -   For more information about data transfer fees, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer).
        
    
    **Resource Group**
    
    Select the resource group to which the standard Global Accelerator instance belongs.
    
    The resource group must be created by the current Alibaba Cloud account in Resource Management. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    

## **Step 3: Configure an acceleration area**

Specify acceleration regions and allocate bandwidth to each acceleration region.

In the **Configure Acceleration Area** step, configure the parameters based on the following table and click **Next**.

**Parameter**

**Description**

**Acceleration Area**

Select one or more regions from the drop-down list and click **Add**.

In this example, **China (Beijing)** in the **North China** area is selected.

**Assign Bandwidth**

**Maximum Bandwidth**

Specify the bandwidth for the acceleration region. Each acceleration region supports a bandwidth range of 2 to 10,000 Mbit/s.

The maximum bandwidth is used for bandwidth throttling. The data transfer fees are managed by CDT.

In this example, the default value **200** Mbit/s is used.

**Important**

If you specify a small value for the maximum bandwidth, throttling may occur and packets may be dropped. Specify the maximum bandwidth based on your business requirements.

**IP Protocol**

Select the IP version that is used to connect to Global Accelerator.

In this example, the default value **IPv4** is selected.

**ISP Line Type**

Select an ISP line type for the Global Accelerator instance.

**BGP (Multi-ISP)** is selected in this example.

## Step 4: Configure a listener

A listener listens for connection requests and distributes the requests to endpoints based on the port and the protocol that you specify. Each listener is associated with an endpoint group. You can associate an endpoint group with a listener by specifying the region to which you want to distribute network traffic. After you associate an endpoint group with a listener, network traffic is distributed to the optimal endpoint in the endpoint group.

In the **Configure listeners** step, configure a listener and click **Next**.

The following table describes only the parameters that are relevant to this topic. Use the default values for other parameters. For more information, see [TCP or UDP listener](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#section-ncm-izu-muk).

**Parameter**

**Description**

**Listener Name**

Enter a name for the listener.

**Routing Type**

Select a routing type.

In this example, **Intelligent Routing** is selected.

**Protocol**

Select a protocol for the listener.

In this example, **TCP** is selected.

**Port**

Specify the listener port that is used to receive and forward requests to endpoints. The port number must be in the range of **1 to 65499**.

In this example, port **80** is used.

## Step 5: Configure endpoint groups and endpoints

1.  Configure an endpoint group in the China (Beijing) region.
    
    1.  In the ****Configure an endpoint group**** step, set the following parameters and click **Next**.
        
        The following table describes only the parameters that are relevant to this topic. For more information, see [Configure the endpoint groups of intelligent routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners).
        
        **Parameter**
        
        **Description**
        
        **Region**
        
        Select the region where you want to create the endpoint group. The server that the clients want to access must be deployed in the specified region.
        
        In this example, **China (Beijing)** is selected.
        
        **Endpoint Configuration**
        
        Endpoints are destinations of client requests. To add an endpoint, configure the following parameters:
        
        -   **Backend Service Type**: Select **Custom Public IP**.
            
        -   **Backend Service**: Enter the IP address of the backend service that you want to accelerate. In this example, the public IP address of the server in the China (Beijing) region is used.
            
        -   **Weight**: Enter the weight of the endpoint. Valid values: 0 to 255. GA distributes network traffic to endpoints based on the weights. In this example, the default value **255** is used.
            
            **Warning**
            
            If the weight of an endpoint is set to 0, Global Accelerator stops distributing traffic to that endpoint. Proceed with caution.
            
        
        **Preserve Client IP**
        
        Specify whether to preserve client IP addresses.
        
        If you enable this feature, the backend server can obtain client IP addresses. For more information, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses#task-2416386).
        
        In this example, the default value **Do Not Preserve** is used.
        
        **Traffic Distribution Ratio**
        
        Set a traffic distribution ratio for the endpoint group.
        
        Valid values: 0 to 100. In this example, the default value **100** is used.
        
        **Health Check**
        
        Specify whether to enable the health check feature. After you enable this feature, you can use health checks to check the status of endpoints.
        
        In this example, the health check feature is enabled.
        
        **Health Check Protocol**
        
        Select the protocol that you want to use for health checks. Valid values: TCP, HTTP, and HTTPS.
        
        In this example, **TCP** is selected.
        
        **Port**
        
        Specify the port of the endpoint to which probe packets are sent for health checks. Valid values: 1 to 65535.
        
        In this example, **80** is entered.
        
    2.  In the **Configuration Review** step, confirm the configurations of the listener and endpoints, and then click **Submit**.
        
        **Note**
        
        It takes 3 to 5 minutes to create a Global Accelerator instance.
        
    3.  **(Optional)** After you create a GA instance, you can click **Go To Instance Details** at the bottom of the task details list, and then on the instance details page, you can click tabs such as **Instance Information**, **Listeners**, and **Acceleration Areas** to view the instance configuration information.
        
2.  Configure an endpoint group in the China (Shanghai) region.
    
    1.  On the instance details page, click the **Listeners** tab.
        
    2.  On the **Listeners** tab, find the listener that you want to manage and click the endpoint group ID or number in the **Default Endpoint Group** column.
        
    3.  In the **Default Endpoint Group** section of the **Endpoint Group** tab, click **\+ Add Endpoint Group**.
        
    4.  On the **Add Endpoint Group** page, configure the parameters based on the following information and click **Create**.
        
        -   **Region**: Select **China (Shanghai)**.
            
        -   **Endpoint Configuration** of **Endpoint Configuration**: Enter the public IP address of the server in the China (Shanghai) region.
            
        
        The other parameters must be the same as those of the endpoint group in the China (Beijing) region.
        

## Step 6: Test the traffic distribution result

In this example, the following command is used to simulate client requests to test the traffic distribution result.

```
echo > curl.txt; for ((i=0;i<<Number of requests>;i++)); do curl -s <Accelerated IP address> >> curl.txt; done; beijing_count=`grep Beijing curl.txt | wc -l`;echo "Beijing count: ${beijing_count}";shanghai_count=`grep Shanghai curl.txt | wc -l`;echo "shanghai count: ${shanghai_count}";
```

The following section describes the parameters:

-   `Number of requests`: The number of client requests that are simulated. For example, if you set `Number of requests` to 100, the client sends 100 requests.
    
-   `Accelerated IP address`: The accelerated IP address assigned by GA.
    
-   `Beijing count`: The number of requests processed by the server in the China (Beijing) region.
    
-   `Shanghai count`: The number of requests processed by the server in the China (Shanghai) region.
    

1.  Check how client requests are scheduled when you set the traffic distribution ratio to 100% for the endpoint group that is assigned a higher priority in the China (Beijing) region.
    
    Open the command prompt on a client in the China (Beijing) region and send 100 requests. Then, check the number of requests that are processed by the server in the China (Beijing) region and the number of requests that are processed by the server in the China (Shanghai) region.![测试流量调配100](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9854311561/p401873.png)
    
    The results indicate that all requests from the client in the China (Beijing) region are forwarded to the endpoint group in the China (Beijing) region.
    
2.  Check how client requests are scheduled when you set the traffic distribution ratio to 50% for the endpoint group that is assigned a higher priority in the China (Beijing) region.
    
    1.  Change the traffic distribution ratio to 50% for the endpoint group in the China (Beijing) region. For more information, see [Set the traffic distribution ratio for an endpoint group](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-3fg-g29-3xd).
        
    2.  Send 100 requests from a client in the China (Beijing) region and check the number of requests that are processed by the server in the China (Beijing) region and the number of requests that are processed by the server in the China (Shanghai) region.
        
        ![测试流量调配50](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9854311561/p401896.png)
        
        The results indicate that each endpoint group in the China (Beijing) region and the China (Shanghai) region processes 50 requests.
        
3.  Check how client requests are scheduled when you set the traffic distribution ratio to 0% for the endpoint group that is assigned a higher priority in the China (Beijing) region.
    
    1.  Change the traffic distribution ratio to 0% for the endpoint group in the China (Beijing) region. For more information, see [Set the traffic distribution ratio for an endpoint group](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-3fg-g29-3xd).
        
    2.  Send 100 requests from a client in the China (Beijing) region and check the number of requests that are processed by the server in the China (Beijing) region and the number of requests that are processed by the server in the China (Shanghai) region.
        
        ![测试流量调配0](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9854311561/p401903.png)
        
        The results indicate that all requests from the client in the China (Beijing) region are forwarded to and processed by the servers in the China (Shanghai) region.
        

## **References**

-   For more information about health checks, see [Enable and manage health checks](/help/en/ga/user-guide/enable-and-manage-health-checks#task-2382619).
    
-   For more information about the principles and scenarios of traffic distribution to multiple endpoint groups, see [Distribute traffic across endpoint groups in different scenarios](/help/en/ga/user-guide/distribute-traffic-across-endpoint-groups-in-different-scenarios#task-2181288).
    
-   You can use the traffic distribution and health check features to distribute traffic across regions and implement discover recovery for high availability. For more information, see [Use GA to accelerate applications deployed across regions and implement discover recovery for high availability](/help/en/ga/use-cases/configure-disaster-recovery-to-ensure-the-high-availability-of-applications-that-are-deployed-across-regions).
