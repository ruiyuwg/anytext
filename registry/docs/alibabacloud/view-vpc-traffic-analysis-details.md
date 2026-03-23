After you enable traffic analysis for VPC flow logs, the Network Intelligence Service (NIS) Traffic Analyzer automatically analyzes VPC traffic and generates traffic analysis charts. This helps you monitor VPC network usage and health in real time. You can view information such as VPC traffic bandwidth, VPC packet rate, Top N traffic, and VPC-to-public network traffic for a specified period. Traffic analysis charts also help you observe, optimize, and maintain your network more effectively. For example, you can use these charts to quickly identify high-traffic ECS instances, abnormal public network traffic, or access records from intrusive IP addresses.

## **Filter Traffic**

To analyze specific service traffic, you can focus your analysis by specifying the resource region, resource range, traffic direction, storage bucket granularity, traffic time range, and traffic analysis aggregation dimension.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8212119671/p1047274.png)

Details:

-   The length of the selectable traffic time range is limited by the storage duration of the NIS Traffic Analyzer.
    
-   Storage bucket granularity supports two types: high granularity (such as 1 minute) and long period (such as 1 day). The specific granularity depends on the **Traffic Analysis Sampling Interval** that you configure for **High-precision Traffic Statistics** or **Long-period Traffic Statistics** when you [create or edit an NIS Traffic Analyzer](/help/en/nis/user-guide/traffic-analyzer-management#39d1693bce6yp).
    
-   Whether you can view 1-tuple, 2-tuple, or 5-tuple traffic analysis data depends on the tuple option that you selected when you configured the traffic analysis storage duration.
    
-   When you specify the resource range, you can filter traffic by resource level, dimension, and scenario based on the traffic analysis aggregation dimension.
    
    **Traffic Analysis Aggregation Dimension**
    
    **Supported Filter Conditions (Select multiple conditions)**
    
    **Description**
    
    1-tuple
    
    VPC, vSwitch, ENIs, ECS, Cloud IP
    
    Select a VPC to filter traffic from all VPCs by default. After entering a specific VPC ID, filter traffic only from that VPC.
    
    Other filter conditions are similar to VPC. When using [traffic path](#476f5c57a84cz) and network protocol filter conditions, filter traffic for specific scenarios or network protocols.
    
    ![筛选场景流量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4237427471/p936897.png)
    
    **Note**
    
    Supported network protocols are subject to the console display.
    
    2-tuple
    
    VPC, vSwitch, ENIs, ECS, source IP, destination IP, traffic path, client country, client city, client ASN, client carrier
    
    **Note**
    
    When viewing public network traffic, select client country, client city, client ASN, and client carrier.
    
    5-tuple
    
    VPC, vSwitch, ENIs, ECS, source IP, destination IP, traffic path, source port, destination port, network protocol, client country, client city, client ASN, client carrier
    
    #### **Click to view supported traffic paths.**
    
    **Traffic Path**
    
    **Description**
    
    All Scenarios
    
    Analyzes traffic for all scenarios.
    
    VPC Private Network Traffic - System Route
    
    Analyzes private network traffic in a VPC that is forwarded through system routes.
    
    VPC Private Network Traffic - Access ECS (Custom Route)
    
    Analyzes private network traffic in a VPC that is forwarded through custom routes where the next hop is an ECS instance.
    
    VPC Private Network Traffic - Access ENI (Custom Route)
    
    Analyzes private network traffic in a VPC that is forwarded through custom routes where the next hop is an ENI.
    
    High-Availability Virtual IP Address Traffic
    
    Analyzes traffic that passes through a high-availability virtual IP address (HaVip).
    
    Same-Region Cloud Service Traffic
    
    Analyzes traffic that accesses Alibaba Cloud services in the same region (100.64.0.0/10).
    
    Gateway Endpoint Traffic
    
    Analyzes traffic that passes through a gateway endpoint.
    
    NAT Gateway Traffic
    
    Analyzes traffic that passes through a NAT Gateway.
    
    TransitRouter (Enterprise Edition) Traffic
    
    Analyzes traffic that passes through an Enterprise Edition Transit Router.
    
    VPN Gateway Traffic
    
    Analyzes traffic that passes through a VPN Gateway.
    
    Virtual Border Router (VBR) Uplink Traffic
    
    Analyzes traffic that accesses an Express Connect circuit through a virtual border router (VBR) uplink.
    
    Public Network Traffic - IPv4 Gateway
    
    Analyzes traffic that accesses the public network through an IPv4 gateway.
    
    Public Network Traffic - IPv6 Gateway
    
    Analyzes traffic that accesses the public network through an IPv6 gateway.
    
    Public Network Traffic - EIP Direct Public Network Access
    
    Analyzes traffic that accesses the public network directly using an Elastic IP address (EIP).
    
    VPC Peering Connection Traffic
    
    Analyzes traffic that passes through a VPC peering connection.
    
    TransitRouter (Basic Edition) Traffic - Same-Region VPC Access
    
    Analyzes traffic that accesses VPCs in the same region through a Basic Edition Transit Router.
    
    TransitRouter (Basic Edition) Traffic - Cross-Region VPC Access
    
    Analyzes traffic that accesses cross-region VPCs through a Basic Edition Transit Router.
    
    TransitRouter (Basic Edition) Traffic - Same-Region VBR Access
    
    Analyzes traffic that accesses VBRs in the same region through a Basic Edition Transit Router.
    
    TransitRouter (Basic Edition) Traffic - Cross-Region VBR Access
    
    Analyzes traffic that accesses cross-region VBRs through a Basic Edition Transit Router.
    
    TransitRouter (Basic Edition) Traffic - Other
    
    Analyzes traffic that passes through a Basic Edition Transit Router in other scenarios, such as traffic that accesses cross-region cloud services or a Cloud Connect Network (CCN).
    
    Express Connect Router (ECR) Traffic
    
    Analyzes traffic that passes through an Express Connect Router (ECR).
    
    Gateway Load Balancer Endpoint Traffic
    
    Analyzes traffic that passes through a GWLB endpoint.
    
    Other Traffic
    
    Analyzes other types of traffic.
    

## **View All Traffic Analysis Charts**

These two pages display analysis data for all access traffic of the specified VPC resources or scenarios, including public network access traffic.

-   The **Traffic Distribution** page displays analytics data only for allowed traffic.
    
-   The **Access Control Interception Analysis** page displays analytical data only for traffic that access control rules intercept, such as traffic denied by network ACLs or security group rules.
    

### **View Traffic Distribution**

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left navigation pane, select **Traffic Analyzers**.
    
3.  On the **Traffic Analyzers** page, click the ID of the target (NIS Traffic Analyzer).
    
4.  In the navigation pane on the left of the NIS Traffic Analyzer product page, select **VPC Traffic** > **All Traffic** > **Traffic Distribution**. Specify [filter conditions](#41885b1d59383). View the corresponding **Traffic Trend Chart** and **Traffic Analysis** table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8212119671/p1047310.png)
    
    **Chart**
    
    **Description**
    
    **Traffic Trend Chart**
    
    -   **Bandwidth**: The traffic rate of resources during the current period. Unit: bps.
        
    -   **Packet Rate**: The data packet rate of resources during the current period. Unit: pps.
        
    -   **TCP RTT**: The round-trip delay when TCP connections are established during the current period. Unit: ms.
        
    
    **Traffic Analysis**
    
    After selecting the **1-tuple**, **2-tuple**, or **5-tuple** tab at the top of the page, the system automatically displays the corresponding TOP N traffic analysis table**:**
    
    -   **1-tuple**: Displays the collector VPC ID, collector vSwitch ID, collector ENI ID, collector ECS ID, traffic path, traffic direction, destination IP (inbound only), source IP (outbound only), packets, TCP RTT (ms), traffic (Byte), and traffic percentage for the current period.
        
    -   **2-tuple**: Displays the source IP, destination IP, collector VPC ID, collector vSwitch ID, collector ENI ID, collector ECS ID, traffic path, traffic direction, packets, TCP RTT (ms), traffic (Byte), and traffic percentage for the current period.
        
    -   **5-tuple**: Displays the source IP, source port, protocol, destination IP, destination port, collector VPC ID, collector vSwitch ID, collector ENI ID, collector ECS ID, traffic path, traffic direction, packets, TCP RTT (ms), traffic (Byte), and traffic percentage for the current period.
        
    
    Filter TOP N traffic data by traffic aggregation dimension, traffic byte range, and TOP N range. Export data as needed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8212119671/p1047304.png)
    
    -   **Trend Chart**
        
        When viewing TOP N traffic, to understand the trend of a specific traffic flow, click **View Trend** in the **Traffic Monitoring** > **Trend Chart** column. The system automatically displays the trend chart for that traffic during the current period, including **Bandwidth**, **Packet Rate**, and **TCP RTT** trend charts.
        
    -   **Trend Comparison**
        
        The **VPC TOP N Traffic Trend** displays traffic trend comparisons for all list items by default. In the **Traffic Monitoring** > **Trend Comparison** column of the target list item, click **Add to Top Traffic Trend** or **Remove from Trend** to add or remove the corresponding trend chart from the **VPC TOP N Traffic Trend** below. Supported comparison metrics include **Bandwidth**, **Packet Rate**, and **RTT**.
        
    -   **Traffic Drill Down**
        
        If the NIS Traffic Analyzer supports multiple traffic analysis aggregation dimensions, drill down into TOP N traffic to view detailed information for a specific traffic flow. 1-tuple traffic supports drilling down to view corresponding 2-tuple TOP N traffic information. 2-tuple traffic supports drilling down to view corresponding 5-tuple TOP N traffic information.
        
    

### **View Access Control Interception Analysis**

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left navigation pane, select **Traffic Analyzers**.
    
3.  On the **Traffic Analyzers** page, click the ID of the target (NIS Traffic Analyzer).
    
4.  In the navigation pane on the left of the NIS Traffic Analyzer product page, choose **VPC Traffic** > **All Traffic** > **Access Control Interception Analysis**. Specify the [filter conditions](#41885b1d59383). You can then view the corresponding intercepted traffic trend chart and intercepted traffic details table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8212119671/p1047311.png)
    
    **Chart**
    
    **Description**
    
    **Intercepted Traffic Trend Chart**
    
    -   **Bandwidth**: The rate of intercepted traffic during the current period. Unit: bps.
        
    -   **Packet Rate**: The rate of intercepted data packets during the current period. Unit: pps.
        
    
    **Intercepted Traffic Details**
    
    After selecting the **1-tuple**, **2-tuple**, or **5-tuple** tab at the top of the page, the system automatically displays the corresponding TOP N intercepted traffic analysis table**:**
    
    -   **1-tuple**: Displays the collector VPC ID, collector vSwitch ID, collector ENI ID, collector ECS ID, traffic path, traffic direction, destination IP (inbound only), source IP (outbound only), packets, traffic (Byte), and traffic percentage for the current period.
        
    -   **2-tuple**: Displays the source IP, destination IP, collector VPC ID, collector vSwitch ID, collector ENI ID, collector ECS ID, traffic path, traffic direction, packets, traffic (Byte), and traffic percentage for the current period.
        
    -   **5-tuple**: Displays the source IP, source port, protocol, destination IP, destination port, collector VPC ID, collector vSwitch ID, collector ENI ID, collector ECS ID, traffic path, traffic direction, packets, traffic (Byte), and traffic percentage for the current period.
        
    
    Filter TOP N intercepted traffic data by traffic aggregation dimension, traffic byte range, and TOP N range.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8212119671/p1047307.png)
    
    -   **Trend Chart**
        
        When viewing TOP N traffic, to understand the trend of a specific traffic flow, click **View Trend** in the **Traffic Monitoring** > **Trend Chart** column. The system automatically displays the trend chart for that traffic during the current period, including **Bandwidth**, **Packet Rate**, and **TCP RTT** trend charts.
        
    -   **Trend Comparison**
        
        The **VPC TOP N Traffic Trend** displays traffic trend comparisons for all list items by default. In the **Traffic Monitoring** > **Trend Comparison** column of the target list item, click **Add to Top Traffic Trend** or **Remove from Trend** to add or remove the corresponding trend chart from the **VPC TOP N Traffic Trend** below. Supported comparison metrics include **Bandwidth**, **Packet Rate**, and **RTT**.
        
    -   **Traffic Drill Down**
        
        If the NIS Traffic Analyzer supports multiple traffic analysis aggregation dimensions, drill down into TOP N traffic to view detailed information for a specific traffic flow. 1-tuple traffic supports drilling down to view corresponding 2-tuple TOP N traffic information. 2-tuple traffic supports drilling down to view corresponding 5-tuple TOP N traffic information.
        
    

## **View Internet traffic analysis charts**

The following two pages display analysis data for Internet traffic to a specified VPC resource or scenario.

-   The **Internet traffic distribution** section displays analytics only for allowed Internet traffic.
    
-   **Internet access control interception analysis** displays analytical data only for Internet traffic blocked by access control rules, such as traffic denied by network ACLs or security group rules.
    

### **View Internet traffic distribution**

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left navigation pane, select **Traffic Analyzers**.
    
3.  On the **Traffic Analyzers** page, click the ID of the target (NIS Traffic Analyzer).
    
4.  In the navigation pane on the left of the traffic analyzer details page, choose **VPC Traffic** > **Internet Traffic** > **Internet Traffic Distribution**. Then, specify the [filter conditions](#41885b1d59383) to view the corresponding Internet traffic trend chart, Internet traffic analysis table, and traffic map. The traffic map is displayed on the 2-tuple page only.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8212119671/p1047317.png)
    
    **Chart**
    
    **Description**
    
    **Traffic trend chart**
    
    -   **Bandwidth**: The rate at which Internet traffic is transferred for the resource during the current time period. Unit: bps.
        
    -   **Packet rate**: The rate at which Internet packets are transferred for the resource during the current time period. Unit: pps.
        
    -   **TCP RTT**: The round-trip time for TCP connection establishment during the current time period. Unit: ms.
        
    -   **Top N remote IP addresses accessing Alibaba Cloud**: The top N public IP addresses that accessed Alibaba Cloud during the current time period.
        
    
    **Important**
    
    The **Internet region coverage** and **Top N remote IP addresses accessing Alibaba Cloud** statistics appear only on the 2-tuple page.
    
    **Traffic analysis**
    
    After you select the **1-tuple**, **2-tuple**, or **5-tuple** tab at the top of the page, the system automatically displays the corresponding top N Internet traffic analysis table:
    
    -   **1-tuple**: Shows the Alibaba Cloud VPC ID, Alibaba Cloud VSW ID, Alibaba Cloud ENI ID, Alibaba Cloud ECS ID, traffic path, network flow direction, destination IP address (shown only for inbound traffic), source IP address (shown only for outbound traffic), packet count, TCP RTT (ms), traffic volume (bytes), and traffic percentage for Internet traffic during the current time period.
        
    -   **2-tuple**: Shows the city, country, ISP, ASN, source IP address, destination IP address, Alibaba Cloud VPC ID, Alibaba Cloud VSW ID, Alibaba Cloud ENI ID, Alibaba Cloud ECS ID, traffic path, network flow direction, packet count, TCP RTT (ms), traffic volume (bytes), and traffic percentage for Internet traffic during the current time period.
        
    -   **5-tuple**: Shows the city, country, ISP, ASN, source IP address, source port, protocol, destination IP address, destination port, Alibaba Cloud VPC ID, Alibaba Cloud VSW ID, Alibaba Cloud ENI ID, Alibaba Cloud ECS ID, traffic path, network flow direction, packet count, TCP RTT (ms), traffic volume (bytes), and traffic percentage for Internet traffic during the current time period.
        
    
    You can filter the top N Internet traffic data by aggregation dimension, traffic byte range, and top N range. You can also export the data.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8212119671/p1047308.png)
    
    -   **Trend Chart**
        
        When viewing TOP N traffic, to understand the trend of a specific traffic flow, click **View Trend** in the **Traffic Monitoring** > **Trend Chart** column. The system automatically displays the trend chart for that traffic during the current period, including **Bandwidth**, **Packet Rate**, and **TCP RTT** trend charts.
        
    -   **Trend Comparison**
        
        The **VPC TOP N Traffic Trend** displays traffic trend comparisons for all list items by default. In the **Traffic Monitoring** > **Trend Comparison** column of the target list item, click **Add to Top Traffic Trend** or **Remove from Trend** to add or remove the corresponding trend chart from the **VPC TOP N Traffic Trend** below. Supported comparison metrics include **Bandwidth**, **Packet Rate**, and **RTT**.
        
    -   **Traffic Drill Down**
        
        If the NIS Traffic Analyzer supports multiple traffic analysis aggregation dimensions, drill down into TOP N traffic to view detailed information for a specific traffic flow. 1-tuple traffic supports drilling down to view corresponding 2-tuple TOP N traffic information. 2-tuple traffic supports drilling down to view corresponding 5-tuple TOP N traffic information.
        
    
    **Traffic map**
    
    The traffic map appears only on the **2-tuple** page. It shows the following two types of Internet traffic data:
    
    -   **RTT**: The round-trip time for Internet traffic in the current region during the current time period. Unit: ms.
        
    -   **Traffic**: The number of bytes of Internet traffic exchanged between each country and your VPC resources during the current time period. Unit: bytes.
        
    
    ![流量地图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4237427471/p935376.png)
    

### **View Internet access control interception analysis**

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left navigation pane, select **Traffic Analyzers**.
    
3.  On the **Traffic Analyzers** page, click the ID of the target (NIS Traffic Analyzer).
    
4.  In the navigation pane on the left of the traffic analyzer details page, choose **VPC Traffic** > **Internet Traffic** > **Internet Access Control Interception Analysis**. Then, specify the [filter conditions](#41885b1d59383) to view the corresponding intercepted traffic trend chart and intercepted traffic details table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8212119671/p1047318.png)
    
    **Chart**
    
    **Description**
    
    **Interception traffic trend chart**
    
    -   **Bandwidth**: The rate at which intercepted Internet traffic was transferred during the current time period. Unit: bps.
        
    -   **Packet rate**: The rate at which intercepted Internet packets were transferred during the current time period. Unit: pps.
        
    
    **Interception traffic details**
    
    After you select the **1-tuple**, **2-tuple**, or **5-tuple** tab at the top of the page, the system automatically displays the corresponding top N interception traffic analysis table:
    
    -   **1-tuple**: Shows the Alibaba Cloud VPC ID, Alibaba Cloud VSW ID, Alibaba Cloud ENI ID, Alibaba Cloud ECS ID, traffic path, network flow direction, destination IP address (shown only for inbound traffic), source IP address (shown only for outbound traffic), packet count, traffic volume (bytes), and traffic percentage for intercepted traffic during the current time period.
        
    -   **2-tuple**: Shows the city, country, ISP, ASN, source IP address, destination IP address, Alibaba Cloud VPC ID, Alibaba Cloud VSW ID, Alibaba Cloud ENI ID, Alibaba Cloud ECS ID, traffic path, network flow direction, packet count, traffic volume (bytes), and traffic percentage for intercepted traffic during the current time period.
        
    -   **5-tuple**: Shows the city, country, ISP, ASN, source IP address, source port, protocol, destination IP address, destination port, Alibaba Cloud VPC ID, Alibaba Cloud VSW ID, Alibaba Cloud ENI ID, Alibaba Cloud ECS ID, traffic path, network flow direction, packet count, traffic volume (bytes), and traffic percentage for intercepted traffic during the current time period.
        
    
    You can filter the top N interception traffic data by aggregation dimension, traffic byte range, and top N range.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8212119671/p1047309.png)
    
    -   **Trend Chart**
        
        When viewing TOP N traffic, to understand the trend of a specific traffic flow, click **View Trend** in the **Traffic Monitoring** > **Trend Chart** column. The system automatically displays the trend chart for that traffic during the current period, including **Bandwidth**, **Packet Rate**, and **TCP RTT** trend charts.
        
    -   **Trend Comparison**
        
        The **VPC TOP N Traffic Trend** displays traffic trend comparisons for all list items by default. In the **Traffic Monitoring** > **Trend Comparison** column of the target list item, click **Add to Top Traffic Trend** or **Remove from Trend** to add or remove the corresponding trend chart from the **VPC TOP N Traffic Trend** below. Supported comparison metrics include **Bandwidth**, **Packet Rate**, and **RTT**.
        
    -   **Traffic Drill Down**
        
        If the NIS Traffic Analyzer supports multiple traffic analysis aggregation dimensions, drill down into TOP N traffic to view detailed information for a specific traffic flow. 1-tuple traffic supports drilling down to view corresponding 2-tuple TOP N traffic information. 2-tuple traffic supports drilling down to view corresponding 5-tuple TOP N traffic information.
        
    

## **Limits**

A single query can scan up to 10 million raw logs. If this limit is exceeded, the system returns a `QuotaExceeded.CheckRowReadLimit` fault. You can optimize your query to reduce the number of scanned logs in the following ways:

-   Shorten the query time range. Focus on the specific time period of your business activity, because longer time spans require more logs to be scanned.
    
-   Optimize the traffic scope of the query. Filter the analysis using traffic parameters that are specific to your business to narrow the query scope. You can also first analyze the target traffic range from 2-tuples, and then drill down from a specific 2-tuple to a 5-tuple.
