Add TR flow logs as a data source to NIS Traffic Analyzer. The analyzer then automatically analyzes TR traffic and generates charts to help you monitor network usage and health in real time.

## **CEN traffic overview**

On the product page of the target traffic analyzer, click the **CEN Traffic** tab. In the navigation menu on the left, click **CEN Traffic Overview**. From the drop-down list on the right, select the target CEN instance.

### **CEN overview**

You can view the network topology and traffic metrics for network instance connections, such as inter-region connections. In the **Data Dimension** drop-down list, select a metric type. Supported metrics include **Traffic Statistics**, **Bandwidth Utilization**, **Average Latency**, **Packet Loss Statistics**, **Packet Statistics**, **Blackhole Route Packet Loss Statistics**, and **No-Route Packet Loss Statistics**. For example, if you select the **Traffic Statistics** metric, the data for each metric is displayed on the line of the corresponding network instance connection. You can click the metric data to view details.

> **CEN Overview** section uses data from TR monitoring and does not depend on TR flow logs.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9058038571/p1003034.png)

### **CEN traffic analysis coverage statistics**

For the TR flow log data sources that you have added, you can view their coverage for each network instance connection.

-   A connection is shown as **Enabled** only when an added data source can collect traffic information for the connection. You can then view detailed traffic analysis data, such as data aggregated by metric, the top N traffic list, and the top N traffic trend.
    
    > When you create a flow log for an inter-region connection, only one-way traffic information from the current TR to the peer TR is collected. To perform a detailed analysis, enable flow logs and add data sources for both directions.
    
-   If a connection is shown as **Disabled**, click **Enable** to add the corresponding data source.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9058038571/p998190.png)
    

## **TR connection traffic**

You can analyze traffic information for these network instance connections: inter-region connection traffic, VPC connection traffic, VBR connection traffic, ECR connection traffic, and VPN connection traffic. The following sections use **Inter-region connection traffic** as an example.

On the product page of the target traffic analyzer, click the **CEN Traffic** tab. In the navigation menu on the left, click **TR Connection Traffic** > **Inter-region connection traffic**. From the drop-down lists, select the target **CEN instance** and **Inter-region connection**.

### **Basic information**

You can view or change the basic information of the current network instance connection:

-   Click the **Instance ID** to go to the CEN console to view or change the TR connection configuration.
    
-   Click the ID corresponding to the **Associated Route Table** to view or change the route table configuration.
    

### **Inter-region connection traffic distribution overview**

You can filter metric information for a specific time period by **Data Dimension**. Supported data dimensions include **Traffic Statistics**, **Bandwidth Utilization**, **Average Latency**, and **Packet Loss Statistics**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9058038571/p999280.png)

### **Inter-region connection traffic statistics trend chart**

This chart shows the trend of the target **Data Dimension** over a specific time period. The minimum data sampling granularity is **1 minute**. The available sampling granularities vary depending on the time period. For example, if you select a 7-day period, the available sampling granularities are **10 minutes** and **30 minutes**. In the upper-left corner of the trend chart, you can select a bandwidth rate unit, such as **bps**, **Kbps**, **Mbps**, or **Gbps**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9058038571/p999281.png)

### **Traffic analysis**

After you set filter conditions and aggregation dimensions, the **Top N traffic list** and **Top N traffic trend** are displayed.

> You must add the flow log for the network instance connection as a data source before you can perform analysis.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2035019671/p1047312.png)

-   Set **Filter conditions**:
    
    -   Filter traffic analysis scope: To view traffic with a specific feature, you can filter by field. You can set multiple filter conditions as needed. Each filter condition is displayed above the **Top N traffic list**, and you can delete any condition. The results are displayed in the **Top N traffic list**. Supported fields include Source IP Address, Destination IP Address, DSCP, Protocol, Destination Port, Source Port, and Peer Network Instance Connection ID. The following examples use Source IP Address:
        
        -   `Source IP Address=10.0.0.1`: Matches traffic where the source IP address is `10.0.0.1`.
            
        -   `Source IP Address:10.0.`: Matches traffic where the source IP address string contains `10.0.`, such as `10.0.0.1` and `10.0.1.1`.
            
        -   `Source IP Address!=10.0.0.1`: Matches traffic where the source IP address is not 10.0.0.1, such as `10.0.0.2` and `172.16.0.1`. If you enter `Source IP Address!=10.`, the query matches traffic where the source IP address string does not contain `10.`, such as `172.16.0.1`.
            
    -   **Filter by range**: You can filter traffic within a specific metric range by setting a minimum and maximum value. You can set only a minimum value or only a maximum value. Supported metrics include the following: Traffic (Bytes), Packets, No-Route Packet Loss, Blackhole Route Packet Loss, and TTL Timeout Packet Loss.
        
-   Set **Traffic aggregation dimension**: To categorize and analyze traffic, you can set an aggregation dimension. This is equivalent to the \`GROUP BY\` keyword in SQL and is used to group the Top N traffic list by the specified dimension. The system automatically aggregates traffic with the same grouping criteria and displays the results by row. Supported dimensions: Source IP Address, Destination IP Address, DSCP, Protocol, Destination Port, Source Port, and Peer Network Instance Connection ID.
    
    For example, assume you have not set an aggregation dimension and the filtered list is as follows:
    
    **Source IP Address**
    
    **Destination IP Address**
    
    **Traffic (Bytes)**
    
    10.0.0.1
    
    172.16.0.1
    
    1000
    
    10.0.0.1
    
    172.16.0.2
    
    1000
    
    10.0.0.2
    
    172.16.0.3
    
    1000
    
    After you specify **Source IP Address** as the aggregation dimension, the system aggregates the list items that have the same source IP address:
    
    **Source IP Address**
    
    **Traffic (Bytes)**
    
    10.0.0.1
    
    2000
    
    10.0.0.2
    
    1000
    
-   Set **TopN** and **target time period**:
    
    -   For the metric specified in the filter range, you can filter the Top 20, Top 50, or Top 100 traffic flows, or show all.
        
    -   You can query traffic for a specific time period. You can select a recent period from **5 minutes** to **7 days**, or select a custom time with minute-level granularity.
        
-   You can set **Bucket Granularity**: Two precision types are supported: high precision (for example, 1 minute) and long-term (for example, 1 day). The specific precision is determined by the **Traffic Analysis Sampling Interval** set for **High-precision Traffic Statistics** or **Long-period Traffic Statistics** when you [create or edit a traffic analyzer](/help/en/nis/user-guide/traffic-analyzer-management#39d1693bce6yp).
    

##### **Top N traffic list**

After you set the filter conditions, aggregation dimension, and time period, the corresponding Top N traffic list is displayed. The system displays the following fields: **TR ID**, **Network Instance Connection ID**, **Source Region**, **Direction**, **Peer Region**, **Packets**, **Traffic**, **Traffic Percentage**, **No-Route Packet Loss**, **Blackhole Route Packet Loss**, and **TTL Timeout Packet Loss**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2035019671/p1047257.png)

-   **Trend chart**
    
    In the **Actions** column for a list item, click **View Trend** to view the trend chart for the current traffic over the target time period. Supported metrics include **Bandwidth**, **Packet Rate**, **No-Route Packet Loss Rate**, **Blackhole Route Packet Loss Rate**, and **TTL Timeout Packet Loss Rate**.
    
-   **Compare trends**
    
    The **Top N traffic trend** chart displays a trend comparison for all list items by default. In the **Actions** column for a target list item, click **Add to Top Traffic Trend** or **Remove from Trend** to add or remove the corresponding trend chart from the **Top N traffic trend** chart.
    
-   **Drill down into traffic**
    
    In the **Actions** column for a list item, click **Drill Down** to view detailed information about the corresponding traffic.
    

##### **Top N traffic trend**

By analyzing the traffic trend chart, you can identify time periods with unusual traffic bursts. You can click **Add to Top Traffic Trend** in the Actions column of a target item in the **Top N traffic list** to view the traffic trend for that item. Supported data metrics: **Bandwidth**, **Packet Rate**, **No-Route Packet Loss Rate**, **Blackhole Route Packet Loss Rate**, and **TTL Timeout Packet Loss Rate**. Supported data sampling granularities: **10 minutes**, **30 minutes**, **1 hour**, **6 hours**, **12 hours**, and **1 day**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9058038571/p999314.png)

## **Limits**

A single query can scan a maximum of 10 million raw logs. If this limit is exceeded, the system returns a `QuotaExceeded.CheckRowReadLimit` error. You can optimize your queries to reduce the number of scanned logs in the following ways:

-   Shorten the query time range: Focus on the period when the business event occurred to shorten the traffic query range. A longer time span requires scanning more logs.
    
-   Optimize the query traffic scope: Specify traffic parameters based on your business to narrow the query scope. You can also first analyze the target traffic range from a 2-tuple perspective, and then drill down from a specific 2-tuple to a 5-tuple analysis.
