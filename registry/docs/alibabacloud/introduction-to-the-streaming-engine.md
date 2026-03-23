Lindorm Stream is a real-time data processing engine. It uses standard SQL and core database features to provide end-to-end data processing for scenarios in the Internet of Vehicles (IoV), the Internet of Things (IoT), and the Internet. Common use cases include real-time data parsing and ingestion, real-time extract, transform, and load (ETL), real-time anomaly detection, and real-time reporting. This topic describes the scenarios and features of Lindorm Stream.

## **Core capabilities**

-   **Serverless**: Built on Alibaba Cloud Elastic Container Instance (ECI) containers for cost-effective and out-of-the-box use.
    
-   **Resource group isolation**: Provides physical isolation between multiple resource groups to ensure the security and isolation of stream jobs.
    
-   **Auto scaling**: Automatically scales resources based on time-based rules for peak and off-peak hours, and on cluster load to optimize resource utilization.
    
-   **Built-in connectors**: Includes built-in connectors for engines such as LindormTable, Lindorm Column, and Lindorm Search. These connectors support metadata sharing, ensure data consistency, and improve development efficiency.
    
-   **Standard SQL access**: You can use standard SQL and real-time ETL SQL to build real-time data links or data pre-computation links to meet various real-time data processing needs.
    
-   **Stream O&M platform**: Provides an integrated platform for stream job operations and maintenance (O&M). The platform covers the end-to-end process of stream job development, deployment, O&M, and monitoring and alerting.
    
-   **Database CDC**: Integrates mainstream Flink Change Data Capture (CDC) capabilities to capture data changes in real time from databases such as MySQL and Oracle, which makes it easy to build heterogeneous data synchronization links.
    
-   **Unified stream and batch processing**: Runs both streaming and batch jobs on the same platform using the unified Flink compute engine. This allows a single technology stack to meet diverse data processing needs.
    

## **Scenarios**

### **Real-time ingestion**

For example, in real-time data reporting for the IoV, the stream engine decodes, parses, and ingests in-vehicle data.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9863970771/CAEQUxiBgMC.jImu4hkiIDYzN2ZmYzI1MjU5NzQwMzlhNTQ1NTczNjIzNzk1MzEz5594340_20250814105258.911.svg)

### **Real-time ETL**

Similar to a real-time materialized view, Lindorm Stream performs real-time pre-computation on table data, such as pre-aggregation and pre-JOIN operations. The results are stored in a sink table in real time to enable real-time queries.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9863970771/CAEQUxiBgICHtYuu4hkiIGQ4MzljZmQ0MGQ3YTRmZTRiZDAzYzQ4MTA4NjJhZmRi5594340_20250814114303.613.svg)

### **Real-time analysis**

Performs real-time analysis on Lindorm CDC data for tasks such as reporting, anomaly detection, geo-fencing, and Complex Event Processing (CEP).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9863970771/CAEQUxiBgIDJ1o6u4hkiIGQ4NDA0Njk0NDg4MDQxMjA4NDM2ZWIwOTY3ODAzZWFi5594340_20250814130524.662.svg)
