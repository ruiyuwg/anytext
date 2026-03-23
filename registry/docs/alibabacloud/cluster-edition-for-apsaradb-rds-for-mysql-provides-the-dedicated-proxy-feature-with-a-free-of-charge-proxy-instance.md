Starting October 17, 2023, ApsaraDB RDS provides a dedicated database proxy free of charge for each ApsaraDB RDS for MySQL instance that runs RDS Cluster Edition.

**Note**

In this topic, a dedicated database proxy indicates that one proxy is enabled for a proxy instance and the proxy has the specifications of 2 CPU cores.

The following calculation describes the relationship between the specifications of database proxies and the number of database proxies: Specifications of database proxies = Unit specification of a database proxy × Number of database proxies. In this calculation, the unit specification of a database proxy is fixed as 2 CPU cores. For example, if the number of database proxies is 3, the specifications of the database proxies are 6 CPU cores. The value is obtained based on the following calculation: 2 x 3 = 6.

## Effective date

October 17, 2023

## Application scope

Your RDS instance meets the following requirements:

-   The RDS instances runs RDS Cluster Edition.
    
    **Note**
    
    For more information about how to upgrade your RDS instance from RDS High-availability Edition to RDS Cluster Edition, see [Upgrade the RDS edition from RDS High-availability Edition to RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-rds-high-availability-edition-to-rds-cluster-edition).
    
    For more information about how to upgrade your RDS instance from RDS Basic Edition to RDS Cluster Edition, see [Upgrade the RDS edition from RDS Basic Edition to RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-from-basic-edition-to-cluster-edition).
    
-   The RDS instance runs MySQL 5.7 or MySQL 8.0.
    
-   The RDS instance resides in a zone other than Hangzhou Zone C and Hangzhou Zone D.
    
    **Note**
    
    If the RDS instance resides in a zone that is not supported, you can migrate the RDS instance to a supported zone and then enable the dedicated database proxy feature for the RDS instance. For more information, see [Migrate an ApsaraDB RDS for MySQL instance across zones](/help/en/rds/apsaradb-rds-for-mysql/migrate-an-apsaradb-rds-for-mysql-instance-across-zones-in-the-same-region#concept-zwp-gdj-wdb).
    

## Description

-   Number of free-of-charge database proxies: one.
    
-   Billing rules:
    
    -   If you enable one database proxy for the dedicated database proxy feature for your RDS instance that runs RDS Cluster Edition, you are not charged.
        
    -   If you enable more than one database proxy for the dedicated database proxy feature for your RDS instance that runs RDS Cluster Edition, you can use one enabled database proxy free of charge. For example, if you enable four database proxies to provide the dedicated database proxy feature, you are charged for three database proxies.
        
    -   For more information about the billing rules of the dedicated database proxy feature, see [Billing rules for dedicated database proxies](/help/en/rds/apsaradb-rds-for-mysql/billing-rules-for-the-dedicated-proxy-feature-of-apsaradb-rds-for-mysql#3310f6507f3kk).
        
        **Note**
        
        If you enable the dedicated database proxy feature for your RDS instance that runs RDS Cluster Edition, you can use one enabled database proxy free of charge from October 17, 2023.
        

## Introduction to database proxies

A database proxy for ApsaraDB RDS for MySQL resides between your database system and your application. All requests from your application are sent to the database proxy. After you enable the database proxy feature for an RDS instance that runs RDS Cluster Edition, read/write splitting is implemented on the primary and secondary nodes. You can use the read-only endpoint of the RDS instance that runs RDS Cluster Edition to access the secondary nodes. You can also use the dedicated proxy feature that supports more advanced capabilities, such as read/write splitting, connection pooling, latency threshold, and transaction splitting.

For more information about the dedicated database proxy feature, see [Database proxies](/help/en/rds/apsaradb-rds-for-mysql/database-proxy/) and [Enable the dedicated database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).

## **What to do next**

-   If you want to obtain the free-of-charge dedicated database proxy, go to the [ApsaraDB RDS buy page](https://rdsbuy.console.alibabacloud.com/create/rds/mysql) to create an RDS instance that runs RDS Cluster Edition. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-apsaradb-rds-for-mysql-instance-1#concept-wzp-ncf-vdb).
    
-   If your RDS instance runs RDS Basic Edition or RDS High-availability Edition but you want to obtain the free-of-charge dedicated database proxy, you can upgrade the **RDS edition** of the RDS instance to RDS Cluster Edition. For more information, see [Upgrade the RDS edition from RDS Basic Edition to RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-from-basic-edition-to-cluster-edition) or [Upgrade the RDS edition from RDS High-availability Edition to RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-rds-high-availability-edition-to-rds-cluster-edition).
    

**Note**

Before you create an RDS instance that runs RDS Cluster Edition or upgrade the RDS edition of an RDS instance to RDS Cluster Edition, take note of the application scope. For more information, see [Application scope](#1aa186c051lfa).
