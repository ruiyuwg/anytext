To seamlessly integrate with your data lake, Hologres V3.0 and later enables you to create external tables for Paimon data sources in Data Lake Formation (DLF). Hologres V4.0 further enhances this by introducing external dynamic tables. This feature merges the strengths of external and dynamic tables: it automatically sets up Paimon external tables, incrementally processes data, and writes results back to the data lake, thereby enabling efficient data lakehouse construction.

## Architecture

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6829223771/CAEQTxiBgICo3Kev0xkiIDNiODY0MTU3YjZlMDQ4ZDg4YThkYTdjNTM0YjE2ZmZj5814062_20251105201154.541.svg)

## **Benefits**

The benefits of external dynamic tables are as follows:

-   **Unified data pipeline:** Consolidate data transformation, target table creation in the data lake, and processed data write-back into a single external dynamic table. This streamlines your workflow by eliminating the need for multiple separate jobs.
    
-   **Efficient incremental writes:** Utilize incremental refresh mode to automatically process and write only new or changed data to the data lake. This reduces data processed and computing resources consumed per refresh cycle, leading to faster results compared to full refreshes.
    
-   **Reduced costs with serverless:** Leverage serverless resources for pay-as-you-go computing. Resources are allocated solely during refresh cycles and released immediately, eliminating the cost of idle resources. For more information, see [Introduction](/help/en/hologres/user-guide/what-is-a-hologres-serverless-instance).
    

## **Use cases**

External dynamic tables are ideal for the following use cases.

### **Cost-effective, near real-time data lakes queries**

Use a Paimon table in your data lake as the source for an external dynamic table. The table incrementally transforms Paimon data and writes it back to Paimon without the data ever leaving the data lake. Query the processed data directly via a Hologres external table for near real-time insights into your data lake.

### **Build a data lakehouse**

Use a Hologres or MaxCompute table as the source for an external dynamic table. The table transforms data and automatically write results to your data lake for centralized storage. This reduces storage costs, facilitates data processing, and integrates your data lake and data warehouse.
