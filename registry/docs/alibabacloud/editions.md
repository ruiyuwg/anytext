This topic describes Database Autonomy Service (DAS) editions and the features, database engines, and regions that are supported by these editions. You can select a DAS edition based on your business requirements or query the features of a DAS edition.

## DAS editions

-   DAS Basic Edition: You can use this edition free of charge. DAS Basic Edition supports centralized management of multiple database engines and provides the database diagnostics and performance optimization features. This edition helps you with daily database O&M and management.
    
-   DAS Economy Edition: You are charged for using this edition. DAS Economy Edition supports lightweight autonomy services, provides features such as [automatic tablespace fragment recycling](/help/en/das/user-guide/automatic-tablespace-fragment-recycling) and [performance insight (new version)](/help/en/das/user-guide/performance-insight-8), and updates features such as [session management](/help/en/das/user-guide/session-management-5) and [lock analysis](/help/en/das/deadlock-analysis-3) based on the features of DAS Basic Edition.
    
    **Note**
    
    DAS Economy Edition is released in phases. For more information, see [\[Notice\] Renaming of DAS Professional Edition to DAS Enterprise Edition and release of DAS Economy Edition and DAS Enterprise Edition V3](/help/en/das/product-overview/notice-das-professional-edition-renamed-to-enterprise-edition-and-launched-economic-edition-and-enterprise-edition-v3).
    
-   DAS Enterprise Edition: You are charged on a pay-as-you-go basis. The [SQL Explorer and Audit](/help/en/das/user-guide/sql-explorer-and-audit-5/) feature is provided based on the features of DAS Economy Edition. DAS Enterprise Edition V3 supports hybrid storage of cold data and hot data, and divides billable items based on features to enable flexible billing. Compared with similar services in the Chinese mainland, DAS Enterprise Edition V3 reduces costs by 20%. Compared with similar services outside the Chinese mainland, DAS Enterprise Edition V3 reduces costs by more than 80%.
    
    **Important**
    
    You cannot enable DAS Enterprise Edition V0, DAS Enterprise Edition V1, or DAS Enterprise Edition V2 for a database instance. You cannot upgrade the specification of DAS Enterprise Edition V1. You can [migrate data from DAS Enterprise Edition V1 or DAS Enterprise Edition V2 to DAS Enterprise Edition V3](/help/en/das/user-guide/faq#9fd034d40f87x) free of charge. Before the migration is complete, you are charged based on the billing rules of the original version. After the migration is complete, you are charged based on the billing rules of the new version.
    

Billable items vary based on the version. For more information, see [Billing details](/help/en/das/product-overview/billing-details-of-the-previous-version).

**Note**

DAS Professional Edition is renamed DAS Enterprise Edition, and DAS Enterprise Edition has different versions. For more information, see [\[Notice\] Renaming of DAS Professional Edition to DAS Enterprise Edition and release of DAS Enterprise Edition V3](/help/en/das/product-overview/notice-das-professional-edition-renamed-to-enterprise-edition-and-launched-economic-edition-and-enterprise-edition-v3).

## **Supported databases and regions**

**Important**

If your database instance is not deployed in the supported regions, you can [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) for technical support. We will assess the technical feasibility upon receiving the ticket and provide feedback on the support plan within 5 business days.

**Edition**

**Supported database**

**Supported region**

DAS Enterprise Edition V3

-   ApsaraDB RDS for MySQL
    
-   PolarDB for MySQL
    

-   **Alibaba Cloud Public Cloud**
    
    China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Shenzhen), China (Heyuan), China (Zhangjiakou), China (Hohhot), China (Chengdu), China (Guangzhou), China (Ulanqab), Indonesia (Jakarta), US (Virginia), US (Silicon Valley), Japan (Tokyo), Germany (Frankfurt), UK (London), Philippines (Manila), Malaysia (Kuala Lumpur), Singapore, and China (Hong Kong)
    
-   **Alibaba Finance Cloud**
    
    China East 1 Finance, China East 2 Finance, China North 2 Finance (invitational preview), and China South 1 Finance
    

ApsaraDB RDS for PostgreSQL

-   **Alibaba Cloud Public Cloud**
    
    China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), US (Virginia), US (Silicon Valley), UK (London), Japan (Tokyo), Germany (Frankfurt), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Thailand (Bangkok), Singapore, and China (Hong Kong)
    
-   **Alibaba Finance Cloud**
    
    China East 1 Finance, China East 2 Finance, and China South 1 Finance
    

ApsaraDB RDS for SQL Server

-   **Alibaba Cloud Public Cloud**
    
    China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Chengdu), US (Virginia), US (Silicon Valley), UK (London), Japan (Tokyo), Germany (Frankfurt), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Singapore, and China (Hong Kong)
    
-   **Alibaba Finance Cloud**
    
    China East 1 Finance, China East 2 Finance, China North 2 Finance (invitational preview), and China South 1 Finance
    

PolarDB-X 2.0

**Note**

PolarDB-X 2.0 is also known as PolarDB for Xscale 2.0. In this topic, this service is referred to as PolarDB-X 2.0.

-   **Alibaba Cloud Public Cloud**
    
    China (Hangzhou), China (Shanghai), China (Shenzhen), China (Beijing), China (Zhangjiakou), and China (Hong Kong)
    
-   **Alibaba Finance Cloud**
    
    China East 1 Finance, China East 2 Finance, China North 2 Finance (invitational preview), and China South 1 Finance
    

-   PolarDB for PostgreSQL
    
-   PolarDB for PostgreSQL (Compatible with Oracle)
    

China (Hangzhou), China (Shanghai), China (Shenzhen), China (Beijing), China (Zhangjiakou), and China (Hong Kong)

DAS Enterprise Edition V2

-   ApsaraDB RDS for MySQL
    
-   PolarDB for MySQL
    

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Shenzhen), China (Guangzhou), China (Heyuan), China (Zhangjiakou), China (Ulanqab), China (Hong Kong), and Singapore

DAS Enterprise Edition V1

-   ApsaraDB RDS for MySQL
    
-   ApsaraDB RDS for SQL Server
    
-   PolarDB for MySQL
    

**Note**

ApsaraDB RDS for SQL Server 2008 R2 High-availability Edition is not supported.

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Shenzhen), China (Zhangjiakou), China (Hohhot), China (Chengdu), China (Guangzhou), China (Heyuan), China (Ulanqab), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), and Indonesia (Jakarta)

ApsaraDB RDS for PostgreSQL

China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Zhangjiakou), Singapore, Malaysia (Kuala Lumpur), and Indonesia (Jakarta)

PolarDB-X 2.0

China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), and Singapore

DAS Enterprise Edition V0

-   ApsaraDB RDS for MySQL
    
-   ApsaraDB RDS for SQL Server
    
-   PolarDB for MySQL
    

**Note**

ApsaraDB RDS for SQL Server 2008 R2 High-availability Edition is not supported.

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Shenzhen), China (Zhangjiakou), China (Hohhot), China (Chengdu), China (Guangzhou), China (Heyuan), China (Ulanqab), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Japan (Tokyo), US (Virginia), US (Silicon Valley), Germany (Frankfurt), and UK (London)

ApsaraDB RDS for PostgreSQL

China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Zhangjiakou), Singapore, Malaysia (Kuala Lumpur), and Indonesia (Jakarta)

PolarDB-X 2.0

China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), and Singapore

DAS Economy Edition

-   ApsaraDB RDS for MySQL
    
-   PolarDB for MySQL
    

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Shenzhen), China (Zhangjiakou), China (Chengdu), and China (Hong Kong)

DAS Basic Edition

-   ApsaraDB RDS for MySQL, PolarDB for MySQL, ApsaraDB MyBase for MySQL, and self-managed MySQL database
    
-   ApsaraDB RDS for PostgreSQL, PolarDB for PostgreSQL, and self-managed PostgreSQL database
    
-   ApsaraDB RDS for SQL Server and ApsaraDB MyBase for SQL Server
    
-   PolarDB for PostgreSQL (Compatible with Oracle)
    
-   PolarDB-X 2.0
    
-   Tair (Redis OSS-compatible) and self-managed Redis database
    
-   ApsaraDB for MongoDB and self-managed MongoDB database
    

All regions

## Supported features

This following list describes the symbols that are used in the tables of this topic.

-   ✔️️️️ indicates that the feature is supported.
    
-   ➖ indicates N/A.
    
-   ❌ indicates that the feature is not supported.
    

**Feature**

**DAS Basic Edition**

**DAS Economy Edition**

**DAS Enterprise Edition**

[Performance trends](/help/en/das/user-guide/performance-trends-4#multiTask3661)

✔️

✔️

✔️

[Monitoring dashboards](/help/en/das/user-guide/monitoring-dashboards-1#multiTask1993)

✔️

✔️

✔️

[Real-time monitoring dashboard](/help/en/das/user-guide/real-time-performance-dashboard#multiTask823)

✔️

✔️

✔️

[Performance insight (new version)](/help/en/das/user-guide/performance-insight-8#task-2272756)

❌

✔️️️ (in public preview)

✔️️️ (in public preview)

[Performance insight (previous version)](/help/en/das/user-guide/performance-insight-5#multiTask585)

✔️

✔️

✔️

[Alerting configuration](/help/en/das/user-guide/configure-alerting#multiTask415)

✔️

✔️

✔️

[Query governance](/help/en/das/user-guide/query-governance#task-2101660)

✔️

✔️

✔️

[Storage analysis](/help/en/das/user-guide/storage-analysis-6#multiTask701)

✔️

✔️

✔️

[Capacity assessment](/help/en/das/user-guide/capacity-assessment#multiTask281)

✔️

✔️

✔️

[Session management](/help/en/das/user-guide/session-management-5#multiTask259)

✔️

️️️✔️ (enhanced version)

️️️✔️ (enhanced version)

[10-second SQL analysis](/help/en/das/user-guide/10-second-sql-analysis#multiTask403)

✔️

✔️

✔️

[Lock analysis](/help/en/das/deadlock-analysis-3#multiTask287)

✔️

️️️✔️ (enhanced version)

️️️✔️ (enhanced version)

[Quick diagnostics](/help/en/das/user-guide/diagnostics-3#multiTask177)

✔️

✔️

✔️

[Diagnostics reports](/help/en/das/user-guide/diagnostic-reports-4#multiTask255)

✔️

✔️

✔️

[Slow query log analysis](/help/en/das/user-guide/slow-query-log-analysis-1#multiTask704)

✔️

✔️

✔️

[SQL optimization](/help/en/das/user-guide/sql-optimization#multiTask713)

✔️

✔️

✔️

[Inspection and scoring](/help/en/das/user-guide/inspection-and-scoring#task-2046689)

✔️

✔️

✔️

[Latency insight](/help/en/das/user-guide/latency-insight#task-2173467)

✔️

✔️

✔️

[Autonomy center](/help/en/das/user-guide/autonomy-center-5)

✔️

✔️

✔️

[Automatic space expansion](/help/en/das/user-guide/automatic-space-expansion#multiTask361)

✔️

✔️

✔️

[Automatic performance scaling](/help/en/das/user-guide/automatic-performance-scaling#task1045)

✔️

✔️

✔️

[Prediction-based auto scaling](/help/en/das/user-guide/prediction-based-auto-scaling#task-2160264)

✔️

✔️

✔️

[Scheduled auto scaling](/help/en/das/user-guide/scheduled-auto-scaling#task-2160571)

✔️

✔️

✔️

[Automatic scaling for local resources](/help/en/das/user-guide/automatic-scaling-for-local-resources#task-2184778)

✔️

✔️

✔️

[Automatic storage expansion](/help/en/das/user-guide/automatic-storage-expansion#task-2217098)

✔️

✔️

✔️

[24/7 anomaly detection](/help/en/das/user-guide/anomaly-detection#multiTask917)

✔️

✔️

✔️

[Automatic SQL throttling](/help/en/das/user-guide/configure-automatic-sql-throttling#task-1915564).

✔️

✔️

✔️

[Automatic SQL optimization](/help/en/das/user-guide/automatic-sql-optimization#multiTask353)

❌

❌

✔️

[Traffic playback and stress testing](/help/en/das/user-guide/intelligent-stress-testing#multiTask5391)

❌

❌

✔️

[Automatic tablespace fragment recycling](/help/en/das/user-guide/automatic-tablespace-fragment-recycling#task-2024282)

❌

✔️

✔️

[Abnormal SQL request identification](/help/en/das/user-guide/abnormal-sql-request-identification#task-2001563)

❌

❌

✔️

[Audit](/help/en/das/user-guide/search#task-2025136)

❌

❌

✔️

[SQL Explorer](/help/en/das/user-guide/sql-explorer#task-2043361)

❌

❌

✔️

[SQL Review](/help/en/das/user-guide/sql-review#task-2205766)

❌

❌

✔️

[Security audit (previous version)](/help/en/das/user-guide/security-audit#multiTask888)

❌

❌

✔️

[Transaction analysis](/help/en/das/user-guide/transaction-analysis)

❌

❌

✔️

[Quick transaction analysis](/help/en/das/user-guide/fast-transaction-analysis)

❌

❌

✔️

## **References**

-   For more information about the features supported by each database engine, see [Supported database engines and features](/help/en/das/product-overview/supported-database-engines-and-features#task-2043668).
    
-   For more information about how to enable DAS Economy Edition and DAS Enterprise Edition, see [Enable and manage DAS Economy Edition and DAS Enterprise Edition](/help/en/das/user-guide/purchase-das-professional-edition).
    
    **Note**
    
    You do not need to enable DAS Basic Edition. You can use DAS Basic Edition after you connect a database instance to DAS. For more information, see [Connect a database instance to DAS](/help/en/das/getting-started/access-instances).
    
-   Data migration between different versions of DAS Enterprise Edition is supported. For more information, see the [How do I migrate data between different versions of DAS Enterprise Edition?](/help/en/das/user-guide/faq#9fd034d40f87x) section of the "FAQ" topic.
