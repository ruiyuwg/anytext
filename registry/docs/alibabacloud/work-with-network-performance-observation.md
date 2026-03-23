The Internet access performance monitoring feature lets you view the average latency from external regions to Alibaba Cloud regions. You can use this performance data to select a suitable region to deploy your services.

## Performance Observation Usage Statement

-   The network latency and other performance data provided by the Internet access performance monitoring feature are for reference only. Alibaba Cloud does not guarantee the accuracy or timeliness of the data. The actual network performance is subject to real-world operating conditions.
    
-   The network latency displayed for Internet access performance is derived from ECS probing clusters built by Alibaba Cloud. These probing clusters periodically send and receive performance probe packets over the network. The aggregated statistical data is then rendered on the performance monitoring page. The test machines in the probing clusters are separate from tenant environments and do not affect or consume any of your resources. The performance data is not related to the resources that you deploy on Alibaba Cloud.
    

## **Supported regions**

**Area**

**Supported regions for Internet access performance monitoring**

China

China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Nanjing - Local Region) (Discontinued), China (Fuzhou - Local Region) (Discontinued), China (Wuhan - Local Region), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong)

Asia-Pacific - Others

Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)

Europe and Americas

US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London)

Middle East

UAE (Dubai), SAU (Riyadh - Partner Region)

## **Internet access performance metrics**

-   **Internet access performance from regions in China to a destination region**:
    
    -   You can view the average latency from different regions in China to a destination region.
        
    -   You can view the average latency from different carriers in various regions of China to a destination region.
        
-   **Internet access performance from regions across the globe to a destination region**:
    
    -   You can view the average latency from different regions across the globe to a destination region.
        
    -   You can view the average latency from different carriers in various regions across the globe to a destination region.
        

## **View Internet access performance**

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Performance Monitoring > Internet Access Performance**.
    
3.  Select the **China** or **Global** view, and then select a destination region to view its latency.
    
4.  In the **Latency from regions in China/across the globe to the destination region** area, hover the mouse over any location on the map to view specific latency data.
    
    **Note**
    
    On the Internet network performance distribution map, the following application types are recommended based on the round-trip time (RTT) range:
    
    -   RTT <= 10 ms: Industrial automation, remote driving, and ultrasonic testing.
        
    -   RTT <= 50 ms: Real-time competitive games.
        
    -   RTT <= 100 ms: Real-time interactive games and interactive voice.
        
    -   RTT <= 150 ms: Real-time interactive video.
        
    -   RTT <= 300 ms: General applications.
        
    -   RTT > 300 ms: Assess whether this latency meets your business requirements.
        
    
5.  In the **Latency from carriers in regions in China/across the globe to the destination region** area, filter the information by **Region**, **Carrier**, and **Latency** to view the latency for each carrier in each region.
