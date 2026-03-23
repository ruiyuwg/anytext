Starting December 15, 2023, ApsaraDB RDS for MySQL provides **general-purpose database proxies** and **persistent connections** free of charge. When automatic switchovers are performed on an RDS instance, you can configure persistent connection settings for the RDS instance to retain the connections between your application and database proxies of the RDS instance and improve instance availability.

## **Effective date**

December 15, 2023

## **General-purpose database proxies (free of charge)**

### **Introduction**

A database proxy of ApsaraDB RDS for MySQL serves as a network proxy that resides between your database system and your application and receives all requests from your application. A database proxy supports [read/write splitting](/help/en/rds/apsaradb-rds-for-mysql/what-is-read-or-write-splitting), [persistent connections](/help/en/rds/apsaradb-rds-for-mysql/use-the-persistent-connection-feature), [transaction splitting](/help/en/rds/apsaradb-rds-for-mysql/use-the-transaction-splitting-feature-on-an-apsaradb-rds-for-mysql-instance), [connection pooling](/help/en/rds/apsaradb-rds-for-mysql/set-the-connection-pool-type-of-an-apsaradb-rds-for-mysql-instance), and [SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-ssl-encryption-for-a-proxy-endpoint-on-an-apsaradb-rds-for-mysql-instance) to reduce loads on your primary RDS instance. A database proxy has multiple benefits, including easy O&M, ease of use, high availability, and high performance.

ApsaraDB RDS for MySQL provides **general-purpose** database proxies and **dedicated** database proxies. General-purpose database proxies are provided free of charge. For more information about the differences between the two types of database proxies and supported features, see [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#171b5a307fbvc)

### **Scenarios**

-   The primary RDS instance is heavily loaded due to a large number of requests that are encapsulated in transactions.
    
-   The primary RDS instance is heavily loaded due to an excessively large number of connections.
    
-   Read/write splitting is required.
    
-   **Read-only** workloads and workloads that need to be **isolated** are processed.
    
-   Most of your workloads require short-lived connections.
    
-   The capability to prevent transient connections that are caused by O&M operations such as switchovers is required.
    

### Prerequisites

The RDS instance is a primary RDS instance and meets the following requirements:

-   Version requirements:
    
    **Major engine version**
    
    **RDS edition**
    
    **Minor engine version**
    
    MySQL 8.0
    
    RDS Enterprise Edition
    
    20191204 or later
    
    RDS High-availability Edition
    
    20190915 or later
    
    RDS Cluster Edition
    
    No requirements
    
    MySQL 5.7
    
    RDS Enterprise Edition
    
    20191128 or later
    
    RDS High-availability Edition
    
    20190925 or later
    
    RDS Cluster Edition
    
    No requirements
    
    MySQL 5.6
    
    RDS High-availability Edition
    
    20200229 or later
    
-   Region requirements: The RDS instance for which you want to enable the database proxy feature does not reside in Hangzhou Zone C or Hangzhou Zone D.
    

### Billing rules

-   General-purpose database proxies are provided free of charge.
    
-   Dedicated database proxies are billed based on the pay-as-you-go billing method. For more information, see [Billing rules for database proxies](/help/en/rds/apsaradb-rds-for-mysql/billing-rules-for-the-dedicated-proxy-feature-of-apsaradb-rds-for-mysql#reference-2020987).
    

### **Enable the database proxy feature**

For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).

## Persistent connections (free of charge)

### Introduction

When O&M operations that trigger automatic switchovers are performed on an RDS instance, the connections between your application and database proxies of the RDS instance are temporarily interrupted. This affects your services. You can configure persistent connection settings for the RDS instance to keep connections alive, prevent service interruptions, improve instance availability, and reduce maintenance costs. For more information, see [Introduction](/help/en/rds/apsaradb-rds-for-mysql/use-the-persistent-connection-feature#b60c20d0bbwwz).

**Note**

The following list describes the O&M operations that trigger automatic switchovers:

-   Perform a primary/secondary switchover
    
-   Update the minor engine version
    
-   Modify parameters for which a restart is required for the modifications of the parameters to take effect
    
-   Change the configuration of a primary RDS instance
    

### **Prerequisites**

Your RDS instance meets the following requirements:

-   The RDS instance runs MySQL 5.6, MySQL 5.7, or MySQL 8.0.
    
-   The RDS instance runs RDS High-availability Edition.
    
-   The RDS instance uses cloud disks.
    
-   The database proxy feature is enabled for the RDS instance, and the database proxy version is 1.14.5\_20231207 or later. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).
    

### Billing rules

Persistent connections are provided free of charge.

### **Configure persistent connection settings**

For more information, see [Configure persistent connection settings](/help/en/rds/apsaradb-rds-for-mysql/use-the-persistent-connection-feature).
