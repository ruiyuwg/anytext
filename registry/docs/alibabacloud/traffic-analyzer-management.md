To analyze traffic, you must first create a Traffic Analyzer. Each analyzer functions as an independent space where you can add various data sources, such as VPC flow logs and TR flow logs. Traffic Analyzer processes data from these sources based on a specified **sampling interval** and **aggregation dimensions**, and then stores the results for a customizable **storage duration**. You can create multiple analyzers to manage and analyze traffic for different business requirements.

## **Features**

### **Sampling interval**

Within a sampling interval, multiple communications between two hosts that use the same protocol and port are aggregated into a single record.

-   High-precision traffic data: The sampling interval can be set to 1 minute, 10 minutes, or 1 hour.
    
-   Long-term traffic data: The default sampling interval is 1 day.
    

### **Aggregation dimensions**

The Traffic Analyzer supports custom aggregation dimensions to further downsample raw logs.

For VPC traffic, the following aggregation dimensions are supported:

-   1-tuple: Aggregates traffic data by the **internal IP** dimension. This downsamples raw logs to provide traffic statistics and analysis at the cloud resource and subnet levels. This lets you observe traffic trends and distribution for different cloud resources and subnets, and provides insights for traffic monitoring.
    
-   2-tuple: Aggregates streaming data by the **source IP** and **destination IP addresses**. This downsamples raw logs to analyze and track traffic sources and destinations, and get more fine-grained insights from traffic monitoring.
    
-   5-tuple: Aggregates streaming data by the **source IP**, **source port**, **destination IP address**, **destination port**, and **protocol**. This downsamples raw logs to provide a fine-grained view of service traffic distribution, trends, and summaries at the port and protocol levels. This dimension is useful for application-level traffic troubleshooting, issue identification, operational analysis, and traffic monitoring insights.
    

For TR traffic, the following aggregation dimensions are supported:

-   2-tuple: Aggregates data by the **source IP**, **destination IP address**, and **DSCP**.
    
-   5-tuple: Aggregates data by the **source IP**, **source port**, **destination IP address**, **destination port**, **protocol**, and **DSCP**.
    

### **Storage duration**

The storage duration determines the time range available for historical traffic analysis. The maximum storage duration is 366 days.

### **Choose a sampling interval and storage duration**

A more precise sampling interval, broader aggregation dimensions, and a longer storage duration result in higher [Traffic Analyzer fees](/help/en/nis/product-overview/billing-method-new-version). To save costs:

-   Real-time needs: For quick troubleshooting, such as traffic bursts, quality degradation, or abnormal interruptions, choose a high-precision sampling interval and a short storage duration.
    
-   Periodic needs: For regular network traffic statistics, such as usage assessment or bill splitting, choose a long-term sampling interval and a long storage duration.
    

## **Create Traffic Analyzer**

Before analyzing traffic, create a Traffic Analyzer.

1.  Go to the [Traffic Analyzer](https://nis.console.alibabacloud.com/flowAnalyzer) page in the NIS console. Then, click **Create Traffic Analyzer**.
    
2.  On the **Create Traffic Analyzer** page, complete the **Custom Analytics Configuration**:
    
    -   **High-precision Traffic Statistics**: Enabled by default. Disable it if needed.
        
        -   **Traffic Analysis Sampling Interval**: The [secondary sampling interval](#eecc2111eaffw) for the raw logs of the data source. The available options are 1 minute, 10 minutes, and 1 hour.
            
            **Important**
            
            When you add a data source, its log sampling interval must be less than or equal to the sampling interval of Traffic Analyzer.
            
        -   **Storage Duration for Traffic Analysis**: Set the storage duration for the 1-tuple, 2-tuple, and 5-tuple [aggregation dimensions](#2cdfaba7a5uci). The [storage duration](#102d713596p1r) for each dimension can be set from 1 to 366 days.
            
    -   **Long-period Traffic Statistics**: Disabled by default. Enable it manually if needed.
        
        -   **Traffic Analysis Sampling Interval**: Default is 1 day.
            
        -   **Storage Duration for Traffic Analysis**: Set the storage duration for the 1-tuple, 2-tuple, and 5-tuple aggregation dimensions. For more information, see [Aggregation dimensions](#2cdfaba7a5uci). The [storage duration](#102d713596p1r) for each dimension can be set from 31 to 366 days.
            
    
    > **High-precision Traffic Statistics** or **Long-period Traffic Statistics**. You can also enable both.
    
3.  Traffic Analyzer starts automatically after it is created. The analyzer begins to process traffic after you add a data source.
    

## **Edit Traffic Analyzer**

1.  Click the name of the target Traffic Analyzer.
    
2.  On the details page of the Traffic Analyzer, you can modify the name, sampling interval, aggregation dimensions, and storage duration, or remove data sources.
    
    > When modifying the sampling interval or configure the sampling interval of network logs, ensure that the network log sampling interval is less than or equal to the analyzer's sampling interval.
    

## **Stop or start Traffic Analyzer**

In the **Actions** column of the target Traffic Analyzer, click **Stop** or **Start**.

After you stop an NIS Traffic Analyzer, it no longer incurs processing fees. However, storage fees still apply. For more information, see [Traffic Analyzer fees](/help/en/nis/product-overview/billing-method-new-version).

In addition, data sources continue to incur flow log collection fees. For more information, see [VPC flow log billing](/help/en/vpc/vpc-flow-logs#00f31f6a510uf) and [TR flow log billing](/help/en/cen/user-guide/configure-a-flow-log#section-sjq-l9i-zda).

## **Delete an NIS Traffic Analyzer**

On the **Traffic Analyzer** page, in the **Actions** column of the analyzer that you want to delete, click **Delete**.

You must stop the Traffic Analyzer before deleting it. After the Analyzer is deleted, no more processing or storage fees are generated, and the system deletes all associated traffic analysis data.

Raw flow logs are not deleted with the Traffic Analyzer and continue to incur collection fees. For more information, see [VPC flow log billing](/help/en/vpc/vpc-flow-logs#00f31f6a510uf) and [TR flow log billing](/help/en/cen/user-guide/configure-a-flow-log#section-sjq-l9i-zda).
