This topic provides an overview of ApsaraDB RDS for PostgreSQL and describes the related terms.

## Disclaimer

Some features or capabilities that are described in this topic may be unavailable. The specific terms and conditions in your commercial contract shall prevail. This topic serves as a user guide that is for reference only. Content in this topic is provided without warranty of any kind, expressed or implied.

## ApsaraDB RDS for PostgreSQL

ApsaraDB RDS supports the PostgreSQL database engine. ApsaraDB RDS for PostgreSQL is fully compatible with SQL and supports a diverse range of data formats such as JSON, IP, and geometric data. In addition to support for features such as transactions, subqueries, multi-version concurrency control (MVCC), and data integrity check, ApsaraDB RDS for PostgreSQL provides a series of features, such as high availability, backup, and restoration, to ease O&M loads. ApsaraDB RDS for PostgreSQL also provides the following advanced features:

-   [Always confidential database](/help/en/rds/overview#task-2339243): This feature is used to encrypt data on the user side before the data is transmitted to RDS instances. This feature helps defend against security threats inside and outside the cloud to protect user data at all times and allow only authorized users to access the data.
    
-   [Read-only RDS instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-read-only-apsaradb-rds-for-postgresql-instance#concept-gsm-zz1-ygb): If the primary RDS instance is overwhelmed by a large number of read requests, your workloads may be interrupted. In this case, you can create one or more read-only RDS instances to offload read requests from the primary RDS instance. Read-only RDS instances help increase the read capability of your database system and the throughput of your application.
    
-   [Database proxy (read/write splitting)](/help/en/rds/apsaradb-rds-for-postgresql/what-are-database-proxies#concept-2191078): A database proxy is used as the network proxy between a database and an application. The database proxy forwards all requests from the application to the RDS instances in your database system. The database proxy feature supports automatic read/write splitting. The database proxy is easy to use and maintain, and delivers high availability and high performance.
    
-   [Babelfish for ApsaraDB RDS for PostgreSQL](/help/en/doc-detail/428613.html#concept-2212689): This feature is developed based on the Babelfish for PostgreSQL open source project. You can enable Babelfish when you create an RDS instance. After you enable Babelfish, your RDS instance can query and process data from Microsoft SQL Server databases and PostgreSQL databases. This way, your RDS instance can parse and execute Transact-SQL (T-SQL) statements. You do not need to switch your database driver or rewrite SQL statements. You need to only migrate the database of your application from SQL Server to an RDS instance for which Babelfish is enabled by changing a small amount of code.
    
-   [Terraform](/help/en/doc-detail/456020.html#concept-2254360): Terraform is an open source tool that allows you to preview, configure, and manage RDS instances in a secure and efficient manner.
    
-   [Extension](/help/en/rds/apsaradb-rds-for-postgresql/extensions-supported-by-apsaradb-rds-for-postgresql#topic-1840180): A wide range of extensions are available in different scenarios, such as geographic information, search and recommendation, artificial intelligence (AI), financial security, Internet of Things (IoT), and gaming. The extensions provide strong support to improve the efficiency of O&M and application development.
    
-   [GanosBase](/help/en/rds/apsaradb-rds-for-postgresql/overview-7#concept-nwr-lc5-qfb): GanosBase is a spatio-temporal engine. Ganos provides a series of data types, functions, and stored procedures for ApsaraDB RDS for PostgreSQL to store, index, query, analyze, and compute spatial or spatio-temporal data in an efficient manner.
    

For more information about the features that are supported by ApsaraDB RDS for PostgreSQL, see [Features of ApsaraDB RDS for PostgreSQL](/help/en/rds/rds-postgresql-database-features/).

**Note**

-   To manage complex business, you can purchase a [support plan](https://www.alibabacloud.com/support/after-sales) to request support from enterprise instant messaging (IM) groups, technical account managers (TAMs), and service managers.
    
-   For more information about ApsaraDB RDS for PostgreSQL, visit the [ApsaraDB RDS for PostgreSQL product page](https://www.alibabacloud.com/product/apsaradb-for-rds-postgresql).
    

## Terms

-   instance: An RDS instance is a database process that consumes independent physical memory resources. You can specify a specific memory size, storage capacity, and database type for an RDS instance. The performance of an RDS instance varies based on the memory size. After an RDS instance is created, you can change its specifications or delete the instance.
    
-   database: A database is a logical unit that is created on an RDS instance. One RDS instance can have multiple databases. Each database must have a unique name on the RDS instance on which the database is created.
    
-   region and zone: Each region is a physical data center. Each region has multiple isolated locations known as zones. Each zone has its own independent power supply and networks. For more information, see [Global infrastructure of Alibaba Cloud](https://www.alibabacloud.com/global-locations).
    

## General terms

**Term**

**Description**

on-premises database

A database that is deployed in a data center or a database that is not deployed on an ApsaraDB RDS instance.

ApsaraDB RDS for XX (XX represents one of the following database engines: MySQL, SQL Server, PostgreSQL, and MariaDB.)

ApsaraDB RDS with a specific database engine. For example, ApsaraDB RDS for MySQL indicates an ApsaraDB RDS instance that runs MySQL.

## **Use ApsaraDB RDS for PostgreSQL**

You can use the following methods to manage ApsaraDB RDS for PostgreSQL instances, including instance creation, network settings and connections, database creation, and account creation:

-   ApsaraDB RDS console: provides a friendly web-based GUI. For more information, see [General workflow](/help/en/rds/apsaradb-rds-for-postgresql/general-workflow-to-use-apsaradb-rds-for-postgresql).
    
-   CLI: You can use the Alibaba Cloud CLI to perform all operations that are available in the ApsaraDB RDS console. For more information, see [What is Alibaba Cloud CLI?](/help/en/cli/what-is-alibaba-cloud-cli)
    
-   SDK: You can use the SDK to perform all operations that are available in the ApsaraDB RDS console. For more information, see [Integration overview](/help/en/rds/apsaradb-rds-for-postgresql/using-openapi).
    
-   API: You can use the API to perform all operations that are available in the ApsaraDB RDS console. For more information, see [List of operations by function](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-overview-postgresql).
