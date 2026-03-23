ApsaraDB RDS is a stable, reliable, cost-effective, and scalable online database service. ApsaraDB RDS supports most mainstream database engines, including [MySQL](/help/en/rds/apsaradb-rds-for-mysql/overview-3), [SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/overview-of-apsaradb-rds-for-sql-server), [PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/what-is-apsaradb-rds-for-postgresql), and [MariaDB](/help/en/rds/apsaradb-rds-for-mariadb/what-is-apsaradb-rds-for-mariadb). ApsaraDB RDS provides a comprehensive portfolio of solutions for disaster recovery, backup, restoration, monitoring, and migration to facilitate database O&M.

## Benefits of ApsaraDB RDS

#### **Security, stability, and reliability**

-   **Tested performance**: ApsaraDB RDS helped hundreds of thousands of users run their workloads in a stable manner. It is a tried and tested solution that handles large volumes of concurrent traffic during Double 11.
    
-   **High availability**: ApsaraDB RDS supports primary/secondary disaster recovery, automatic failover, and cross-zone disaster recovery to provide a service level agreement (SLA) of **99.99%** availability.
    
-   **Backup and restoration**: ApsaraDB RDS supports automatic backup, cross-region backup, and point-in-time restoration.
    
-   **High security**: ApsaraDB RDS provides various security features, such as network isolation, data encryption at rest, data encryption in transmission, and access control.
    

#### **Easy O&M**

-   **Quick deployment**: You do not need to purchase hardware or software in advance. You can create an ApsaraDB RDS instance with a few clicks or by calling an API operation.
    
-   **Lightweight O&M**: Alibaba Cloud automates O&M operations, such as software repair, backup, monitoring, failover, and primary/secondary replication. This allows you to focus on your business instead of routine maintenance.
    
-   **Auto scaling**: Scaling operations are simple and flexible. In most cases, a scaling operation may cause no transient connections or a transient connection that lasts approximately 30 seconds. A serverless RDS instance can be automatically scaled within seconds, and no transient connections occur.
    

#### **Cost-effectiveness**

-   **Flexible billing**: If you want to use an RDS instance for a short period of time, you can select the pay-as-you-go billing method. If you no longer require the RDS instance, you can release the instance. If you want to use an RDS instance for a long period of time, you can select the subscription billing method to enjoy discounts.
    
-   **Serverless**: The serverless billing method is supported.
    
    -   This billing method supports auto scaling and is accurate to seconds. This billing method helps reduce the cost by up to **70%**.
        
    -   ApsaraDB RDS passed the test for serverless capability grading of China Academy of Information and Communications Technology and is graded **Top**.
        
-   **Instance suspension**: Specific RDS instances can be temporarily suspended. During the suspension, you are charged only for storage resources. Serverless RDS instances support automatic start and stop.
    
-   **Readable secondary instance**: In RDS Cluster Edition, the secondary RDS instances or nodes are readable. This improves instance utilization.
    
-   **Free trial**: [Free trials](https://www.alibabacloud.com/zh/free?tags=database) are provided for new users. Tens of thousands of users have used free trials.
    

#### **Enhanced self-developed features**

AliSQL and AliPG developed by Alibaba Cloud are innovated and optimized based on open source database kernels to meet enterprise-level performance and stability requirements.

-   **AliSQL** provides various features that are similar to MySQL Enterprise Edition. The **Binlog in Redo** feature allows ApsaraDB RDS for MySQL to synchronously write binary logs to the redo log file when transactions are committed. This reduces operations on disks and improves database performance. The **statement queue** feature ensures the stability of execution plans. The **inventory hint** feature can quickly commit and roll back transactions to improve throughput. The **thread pool** feature optimizes the concurrency management mechanism and ensures high performance in high-concurrency scenarios. The **faster DDL** feature improves the processing performance of concurrent online DDL statements.
    
-   **AliPG** enhances the features of open source PostgreSQL. For example, the **GanosBase** spatio-temporal engine provides full-space data processing capabilities for indoor, outdoor, above the surface, below the surface, static, and dynamic scenarios. The **transparent data encryption (TDE)** feature supports table-level encryption. The **always-confidential** feature supports data encryption in storage, computing, and transmission scenarios. The **Babelfish** extension can parse and execute SQL Server T-SQL statements. The **rds\_ccl** extension uses SQL throttling to prevent excessive loads and ensure database stability.
    

For more information, see [Competitive advantages of ApsaraDB RDS instances over self-managed databases](/help/en/rds/product-overview/competitive-advantages-of-apsaradb-rds-instances-over-self-managed-databases).

## Work with ApsaraDB RDS

You can use the following methods to manage RDS instances, such as creating instances, databases, and accounts, and configuring networks:

-   Console: The ApsaraDB RDS console is a user-friendly web-based GUI. You can log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com) to perform operations.
    
-   CLI: You can use Alibaba Cloud CLI as an alternative to the ApsaraDB RDS console to manage your resources. The CLI can perform all the operations available on the console. For more information, see [What is Alibaba Cloud CLI?](/help/en/cli/what-is-alibaba-cloud-cli)
    
-   SDK: You can use the SDK as an alternative to the ApsaraDB RDS console to manage your resources. The SDK can perform all the operations available on the console. For more information, see [SDK reference](/help/en/rds/sdk-reference#concept-mjp-2sn-12b).
    
-   API: You can use the API to perform all operations that are available in the ApsaraDB RDS console. For more information, see [List of operations by function](/help/en/rds/list-of-operations-by-function#doc-8073).
    

**Note**

To manage complex business, you can purchase a [support plan](https://www.alibabacloud.com/support/after-sales) to request support from enterprise instant messaging (IM) groups, technical account managers (TAMs), and service managers.

## Related information

**Related services**

**Service**

**Description**

[Elastic Compute Service (ECS)](/help/en/ecs/user-guide/what-is-ecs#undefined)

ECS provides high-performance cloud servers. ECS is a popular service that is typically used in tandem with RDS to build applications. When both the ECS and RDS instances reside in the same region, the instances can communicate over the internal network, minimizing latency and maximizing the potential of both services. ECS is a popular service that is typically used in tandem with ApsaraDB RDS to build applications.

[ApsaraDB for Redis](/help/en/redis/product-overview/what-is-apsaradb-for-redis#undefined)

ApsaraDB for Redis is a database service that supports in-memory storage and persistent storage. If your business frequently experiences large, short-lived spikes of read requests, you can use a combination of ECS, ApsaraDB RDS, and ApsaraDB for Redis to support your business.

[ApsaraDB for MongoDB](/help/en/mongodb/product-overview/what-is-apsaradb-for-mongodb#undefined)

ApsaraDB for MongoDB is a stable, reliable, and scalable database service that is compatible with the MongoDB protocol. If your business involves large amounts of heterogeneous data, you can use ApsaraDB RDS to store structured data and ApsaraDB for MongoDB to store unstructured data.

[MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute#undefined)

MaxCompute, formerly known as ODPS, is a fully hosted data warehousing solution that can process petabyte-scale data at high speeds. MaxCompute provides a complete suite of data import solutions and various distributed computing models. These solutions and models can be used to import large amounts of data from RDS instances to MaxCompute. Then, you can use MaxCompute to perform subsequent data processing operations.

[Data Transmission Service (DTS)](/help/en/dts/product-overview/what-is-data-transmission-service)

You can use DTS to migrate data from on-premises databases to RDS instances for disaster recovery.

[Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss#undefined)

OSS is a secure, cost-effective, and highly reliable cloud storage service that allows you to store large amounts of data in the cloud.

**References**

**Item**

**Description**

Billing

For information about the billing rules of ApsaraDB RDS, see [Billable items](/help/en/rds/product-overview/billable-items-billing-methods-and-pricing#undefined).

Common issues and troubleshooting

For information about the issues that may occur when you use ApsaraDB RDS, such as high CPU utilization and instance locks, and how to troubleshoot these issues, see [FAQ](/help/en/rds/product-overview/faq#concept-2332278) and [FAQ overview](/help/en/rds/faq-overview).
