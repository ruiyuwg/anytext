After Global Accelerator (GA) is deployed, you can use the network detection tool provided by Cloud Monitor (CMS) or perform manual testing to test the acceleration performance. The network detection tool is suitable for large-scale testing and multi-region testing. Manual testing is suitable for temporary testing or in-depth analysis of specific issues in an acceleration region.

## Prerequisites

-   A GA instance is deployed. For more information, see [Create and manage standard GA instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#f5b961f027dh8).
    
-   The listener port is added to the whitelist, such as the security group, of the endpoint server. For information about how to add a security group rule, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule).
    

## Use the network detection tool to test the acceleration performance

The network detection tool allows you to perform testing from the detection points of Internet service provider (ISP) networks in different regions.

## **Domain name access test**

If you create a GA instance to accelerate connections to backend servers that have specific domain names, you can compare the access speed before and after traffic is accelerated by GA. In this example, an HTTP detection is initiated.

1.  Click [Synthetic Tests](https://cloudmonitor.console.alibabacloud.com/disposableTest) to go to the Synthetic Tests page.
    
2.  Enter the domain name of the backend server that you want to detect and click **Test Now**.
    
    By default, an HTTP detection is performed. If you want to perform an HTTPS detection, enter a complete URL, such as `https://example.com`.
    
3.  In the **Probe Check Result** section, click ![筛选.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8951935071/p731499.png) on the right of the Detection Point City column, enter the name of the acceleration region, and then click **Confirm**.
    
4.  View the detection results.
    
    **Note**
    
    -   The acceleration performance varies based on the actual workload.
        
    -   In the following example, a client in China (Hong Kong) and a backend server in US (Silicon Valley) are used.
        
    
    Figure 1. Before GA is used
    
    ![域名访问加速前 INTL.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6495865171/p743028.png)
    
    Figure 2. After GA is used
    
    ![域名访问加速后 INTL.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6495865171/p743029.png)
    

## **IP address access test**

If you create a GA instance to accelerate connections to backend servers that have specific IP addresses, you can initiate instant detection for the accelerated IP address and the IP address of a backend server to compare the access speed before and after traffic is accelerated by GA. In this example, an HTTP detection is initiated.

1.  Click [Synthetic Tests](https://cloudmonitor.console.alibabacloud.com/disposableTest) to go to the Synthetic Tests page.
    
2.  Click **Comparative Test** below the **Test Now** button.
    
3.  Perform the following steps to configure the parameters:
    
    ![IP访问加速效果对比步骤 INTL.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6495865171/p743059.png)
    
    **No.**
    
    **Description**
    
    1
    
    Select ISPs and regions from the drop-down list.
    
    In this example, all values are selected.
    
    2
    
    Enter the IP address of the backend server.
    
    3
    
    Enter the accelerated IP address.
    
    4
    
    Click **Test Now**.
    
    5
    
    In the **Probe Check Result** section, click ![筛选.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8951935071/p731499.png) on the right of the Detection Point City column, enter the name of the acceleration region, and then click **Confirm**.
    
4.  View the detection results.
    
    **Note**
    
    -   The acceleration performance varies based on the actual workload.
        
    -   In the following example, a client in China (Hong Kong) and a backend server in US (Silicon Valley) are used.
        
    
    ![IP加速对比 INTL.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6495865171/p743057.png)
    

## **Perform manual tests**

After GA is deployed, you cannot use ICMP Ping or TCPing to test the acceleration performance. However, you can run the curl command to test the acceleration performance of TCP, HTTP, and HTTPS listeners, and use UDPing to test the acceleration performance of UDP listeners.

**Note**

GA supports the proxy response mechanism. ICMP Ping and TCPing requests are responded to and closed in the acceleration region and are not passed to the backend servers. ICMP Ping and TCPing can be used to test the network connectivity between the client and the acceleration region, but cannot be used to test the latency.

### **Perform testing of TCP, HTTP, and HTTPS listeners**

1.  Open the CLI on a client in the acceleration region.
    
2.  Run the following command before and after you use GA to check the network latency between the client and the backend server:
    
    ```
    curl -o /dev/null -s -w "time_connect: %{time_connect}\ntime_starttransfer: %{time_starttransfer}\ntime_total: %{time_total}\n" "http[s]://<domain name or IP address>[:<port>]"
    ```
    
    Take note of the following parameters:
    
    -   time\_connect: The period of time that is required to establish a TCP connection. Unit: seconds.
        
    -   time\_starttransfer: The start time of data transfer. The start time refers to the amount of time from when the client sends a request to the backend server to when the first byte is sent to the client. Unit: seconds.
        
    -   time\_total: The total connection time. The total connection time refers to the period of time from the time when the client sends a request to the time when the client receives the last byte from the backend server. Unit: seconds.
        
    
    ## Use a domain name
    
    **Note**
    
    -   The acceleration performance varies based on the actual workload.
        
    -   In the following example, a client in China (Shenzhen) and a backend server in US (Silicon Valley) are used.
        
    
    Figure 1. Latency before acceleration (access to a domain name)
    
    ![加速前.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5521735961/p713097.png)
    
    Figure 2. Latency after acceleration (access to a domain name)
    
    ![加速后.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5521735961/p713100.png)
    
    ## Use an IP address
    
    **Note**
    
    -   The acceleration performance varies based on the actual workload.
        
    -   In the following example, a client in China (Hong Kong) and a backend server in US (Silicon Valley) are used.
        
    
    Figure 1. Network latency before acceleration (access to the IP address of the backend service)
    
    ![加速前.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6799822071/p729264.png)
    
    Figure 2. Network latency after acceleration (access to the accelerated IP address)
    
    ![配置后-HK上.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6799822071/p722973.png)
    

### **Perform testing of UDP listeners**

If the listener protocol of your GA instance is UDP, you can use UDPing to test the acceleration performance of GA. UDPing allows you to send UDP packets to a specified IP address and port.

UDP is a datagram transmission protocol. UDP datagrams are directly transmitted to endpoints in an endpoint group, and no sessions are established during transmission.

This topic describes how to use UDPing to test the acceleration performance of a GA instance that uses a UDP listener. In the following example, the endpoint server and the client run Alibaba Cloud Linux 3.

1.  Deploy UDP Echo on the endpoint server.
    
    Use UDPing to test the acceleration performance. We recommend that you deploy UDP Echo on the endpoint server. UDP Echo provides a quick and straightforward test of network latency and connectivity by simply echoing packets.
    
    In this example, socat is used to deploy UDP Echo.
    
    ```
    # Install socat.
    yum install socat
    # Start socat.
    nohup socat -v UDP-LISTEN:<listener port>,fork PIPE 2>/dev/null & 
    ```
    
2.  Deploy UDPing on the client.
    
    ```
    # Download UDPing.
    wget https://networktools-public.oss-cn-hangzhou.aliyuncs.com/ga/udping/udping.py
    # Grant UDPing execution permissions.
    chmod +x udping.py
    ```
    
3.  Test the acceleration performance.
    
    1.  Log on to the client.
        
    2.  Run the `./udping.py <Backend server IP address> <Listener Port>` command to view the network latency before GA is used.
        
    3.  Run the `./udping.py <Accelerated IP address> <Listener port>` command to view the network latency after GA is used.
        
        **Note**
        
        -   The acceleration performance varies based on the actual workload.
            
        -   In the following example, a client in the China (Hong Kong) region accessed a backend server in the Germany (Frankfurt) region.
            
        
        Figure 1. Network latency before GA is used
        
        ![使用GA前 UDP测试.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3415291471/p841092.png)
        
        Figure 2. Network latency after GA is used
        
        ![使用GA后 UDP测试.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3415291471/p841093.png)
        

## **References**

For more information about the network detection tool, see the following topics:

-   [Metrics](/help/en/cms/cloudmonitor-1-0/user-guide/metrics#concept-2042927)
    
-   [Network Analysis and Monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/network-analysis-and-monitoring/)
