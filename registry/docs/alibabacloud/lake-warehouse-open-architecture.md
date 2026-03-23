MaxCompute provides an enterprise-grade open lakehouse architecture. It features unified metadata management, open storage, diverse computing options, robust security, and cost-effectiveness.

## **Target customers**

1.  Data warehouses contain a high proportion of structured data, yet require the openness of a data lake to support access from multiple teams and engines.
    
2.  Users who require enterprise-grade features, such as row-level and column-level permissions and data masking, and have stringent requirements for disaster recovery, backup, security, and compliance.
    

## **Feature overview**

### **Unified metadata**

MaxCompute provides a unified data catalog and data governance solution for data objects such as tables, views, snapshots, and models. This solution enables fine-grained access control and auditing. Define a security policy once, and it takes effect globally.

You can manage access credentials for Alibaba Cloud services using connections. MaxCompute automatically discovers structured and unstructured data files in external data storage, such as OSS, and registers them as foreign tables. Accessing data through tables simplifies the data analytics process. Cached statistics for data lake tables improve compute performance.

### **Open storage**

[Open storage](/help/en/maxcompute/user-guide/overview-1) lets you store data once and use it across multiple compute engines. You can use the Storage API to make data in MaxCompute-managed tables available to third-party compute engines.

MaxCompute integrates with compute ecosystems such as Spark, Flink, Flink CDC, StarRocks, DBT, Presto, Trino, PAI, and PyTorch.

The Storage API provides an efficient, low-latency, and secure method for reading data. Data is transferred in Arrow format. The API supports performance optimizations such as predicate pushdown, partitioning, and column pruning. It also supports security features such as row-level and column-level permissions and data masking. This feature balances cross-team collaboration efficiency with compliance requirements.

### **Open computing**

MaxCompute's self-developed SQL and MaxFrame engines provide a unified computing experience across diverse data sources in the lakehouse ecosystem. They enable transparent access to various external storage systems through [foreign tables](/help/en/maxcompute/user-guide/external-table/) and [external projects](/help/en/maxcompute/user-guide/external-items/). You can flexibly use data from both internal and external tables in extract, transform, and load (ETL), data analytics, and machine learning tasks.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7533655671/p1034435.png)

## **Tutorials**

MaxLake lets you ingest data into lakes and warehouses and orchestrate multi-scenario analytics. For example, you can use Internet of Vehicles (IoV) data to analyze mileage and speed from GPS location data that is reported by vehicles. You can then use multiple engines for scenarios such as real-time query reporting, cross-team collaboration with masked data sharing, and AI training. This approach lets you create multiple forms of value from a single copy of data. For more information, see [Data transformation and multi-scenario orchestration for data lake analytics in MaxCompute](/help/en/maxcompute/use-cases/practice-of-data-processing-and-multi-scenario-linkage-on-maxcompute-lake).
